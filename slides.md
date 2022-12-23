---
theme: penguin
colorSchema: 'auto'
layout: intro
themeConfig:
  logoHeader: '/img/logo.png'
  eventLogo: 'https://golang.google.cn/favicon.ico'
css: unocss
highlighter: 'prism'
lineNumbers: true
---

# Go Mutex 实现与演进
@huwenhao

---

# **为什么需要锁**

锁的概念诞生于并发场景下的竞争问题，用于保证并发环境下对共享资源访问的互斥，是限制共享资源访问的同步机制。 

<br>

### 并发与并行

并行指的是多个线程能在同一时刻同时运行，真正的并行只在多核场景下能够实现，在单核场景下，由于操作系统的时间片调度机制存在，可以在宏观上实现一种“伪”并行（并发）。

<img src="/img/parallel.jpg" class="rounded"/>
<center><font size=2>图1 并发与并行</font></center>

---

# **为什么需要锁**

### 线程的并发问题
但无论是单核还是多核，程序执行起来，并不像我们感觉到的那样连续，而是会因为硬件中断、IO等原因，而表现为断断续续的执行。所以当我们有多个线程并发执行，并伴随有对共享数据的操作，就可能会发生一些预料之外的问题。

<div  align="center">    
<img src="/img/parallel2.jpg" class="h-52 rounded shadow center"/>
<center><font size=2>图2 并发问题</font></center>
</div>

---
layout: two-cols
---

::default::

# 什么是锁

锁是一种并发编程中的同步原语，通过线程主动放弃运行机会的方式，来协调多线程对共享资源的竞争。

1. **单核场景**: <br>锁就是一个变量，通过硬件提供的原子操作（如：CAS等）实现，保证了同一时刻只有一个线程拿到锁进入临界区;

2. **多核场景**: <br>硬件原子指令是由多个微指令组成，原子性相对于单核而言的，多核的多个线程竞争进入临界区权限需要锁缓存行或总线;

::right::
<br>

<font class="text-xs text-gray-300">github.com/go/src/runtime/internal/atomic/atomic_amd64.s</font>

```go {all|12}
// bool Cas(int32 *val, int32 old, int32 new)
// Atomically:
//	if(*val == old){
//		*val = new;
//		return 1;
//	} else
//		return 0;
TEXT ·Cas(SB),NOSPLIT,$0-17
	MOVQ	ptr+0(FP), BX
	MOVL	old+8(FP), AX
	MOVL	new+12(FP), CX
	LOCK
	CMPXCHGL	CX, 0(BX)
	SETEQ	ret+16(FP)
	RET
```

<font class="text-xs text-gray-400 leading-none">*在Go语言CSA的实现中，执行CMPXCHGL指令之前会执行LOCK指令</font>

---
layout: presenter
presenterImage: '/img/go.jpg'
---

# **Go Mutex**

Mutex一词取自于Mutual exclusion的缩写，也称作互斥锁。Go语言在Mutex的实现中迭代了多个版本:

- V1.0 初版实现
- V2.0 引入非公平锁(go 1.0)
- V3.0 引入自旋(go 1.5)
- V4.0 解决饥饿(go 1.13)
- V4.1 增加TryLock方法(go 1.18)


<font class="text-xs text-gray-400 leading-none">*以上版本的编号是为了方便叙述和区分临时定义的，官方并没有这样的说法</font>

---
layout: two-cols
---

::default::

# V1.0 初版实现

最初版的Mutex实现比较简单，只有 key 和 sema 两个字段：

1. key 用来标识锁是否被持有，也用来标识当前队列有多少个等待的goroutine
2. sema 为信号量变量，用来阻塞和唤醒goroutine。

::right::

<font class="text-xs text-gray-300">github.com/go/src/sync/mutex.go</font>
```go
type Mutex struct {
	key  int32
	sema uint32
}

func (m *Mutex) Lock() {
	if atomic.AddInt32(&m.key, 1) == 1 {
		return
	}
	runtime.Semacquire(&m.sema)
}

func (m *Mutex) Unlock() {
	switch v := atomic.AddInt32(&m.key, -1); {
	case v == 0:
		return
	case v == -1:
		panic("sync: unlock of unlocked mutex")
	}
	runtime.Semrelease(&m.sema)
}
```

---
layout: two-cols
---

::default::

# V1.0 初版实现

初版的 Mutex 实现有一个问题：

请求锁的 goroutine 会排队等待获取互斥锁。虽然这貌似很公平，但是从性能上来看，却不是最优的。

因为如果我们能够把锁交给正在占用 CPU 时间片的 goroutine 的话，那就不需要做上下文的切换，在高并发的情况下，会有更好的性能。

::right::

<font class="text-xs text-gray-300">github.com/go/src/sync/mutex.go</font>
```go {7,10,14,20}
type Mutex struct {
	key  int32
	sema uint32
}

func (m *Mutex) Lock() {
	if atomic.AddInt32(&m.key, 1) == 1 {
		return
	}
	runtime.Semacquire(&m.sema)
}

func (m *Mutex) Unlock() {
	switch v := atomic.AddInt32(&m.key, -1); {
	case v == 0:
		return
	case v == -1:
		panic("sync: unlock of unlocked mutex")
	}
	runtime.Semrelease(&m.sema)
}
```

---
layout: two-cols
---

::default::

# V2.0 引入非公平锁

在这一版本中，Go开发者对于Mutex的实现做了一次比较大的调整，将原有的key字段改为**state**，他的含义也随着改变。 

state是一个复合字段：

1. 第一位表示锁当前是否被持有，初始值为0，锁被持有时标记为1；
2. 第二位表示当前是否有被唤醒的goroutine，初始值为0，当前有被唤醒的goroutine时标记为1；
3. 剩余位表示当前等待此锁的goroutine数量。

::right::
<br>
<div  align="center">    
<img src="/img/mutex-state-v2.png" class="rounded center"/>
<center><font class="text-xs text-gray-300">图3 state结构</font></center>
</div>

<font class="text-xs text-gray-300">release-branch.go1.0</font>
```go
type Mutex struct {
	state int32
	sema  uint32
}

...

const (
	mutexLocked = 1 << iota // mutex is locked
	mutexWoken
	mutexWaiterShift = iota
)
```

---
layout: two-cols
---

Lock

<div class="overflow-auto  h-96">

```go {0|2-5|8-27|all}
func (m *Mutex) Lock() {
	// Fast path: grab unlocked mutex.
	if atomic.CompareAndSwapInt32(&m.state, 0, mutexLocked) {
		return
	}

	// Slow path: 
	awoke := false
	for {
		old := m.state
		new := old | mutexLocked // lock 标记
		if old&mutexLocked != 0 {
			new = old + 1<<mutexWaiterShift // 等待数量+1
		}
		if awoke {
			// 清除唤醒标志
			new &^= mutexWoken
		}
		if atomic.CompareAndSwapInt32(&m.state, old, new) {
			if old&mutexLocked == 0 {
				break
			}
			// 未抢到 入队阻塞
			runtime_Semacquire(&m.sema) 
			awoke = true
		}
	}
}
```

</div>

::right::
Unlock
<div class="overflow-auto  h-96">
```go {0|2-7|9-22|all}
func (m *Mutex) Unlock() {
	// Fast path: drop lock bit.
	new := atomic.AddInt32(&m.state, -mutexLocked) 
	if (new+mutexLocked)&mutexLocked == 0 {
		// 本来就没有锁 panic
		panic("sync: unlock of unlocked mutex")
	}

	old := new
	for {
		// 没有等待者 或 已有唤醒的waiter 或 锁原来已被持有
		if old>>mutexWaiterShift == 0 || old&(mutexLocked|mutexWoken) != 0 {
			return
		}
		// 唤醒 goroutine
		new = (old - 1<<mutexWaiterShift) | mutexWoken
		if atomic.CompareAndSwapInt32(&m.state, old, new) {
			runtime_Semrelease(&m.sema)
			return
		}
		old = m.state
	}
}
```
</div>


---

# **V2.0 引入非公平锁**

请求锁的 goroutine 有两类，一类是新来请求锁的 goroutine，另一类是被唤醒的等待请求锁的 goroutine。锁的状态也有两种：加锁和未加锁。通过一张表格，来说明一下 goroutine 不同来源不同状态下的处理逻辑。

<br>

|    | **锁已被持有** | **锁未被持有** |
| --- | --- | --- | 
| **新来的goroutine** | waiter++ <br> 入队等待 | 获得锁 |
| **被唤醒的goroutine** | waiter++<br>重置mutexWoken标志<br>入队等待 | 重置mutexWoken标志<br>获得锁 |


---
layout: two-cols
---
# V3.0 引入自旋

自旋是一种多线程同步机制，当前的进程在进入自旋的过程中会一直保持 CPU 的占用，持续检查某个条件是否为真。

<hr>

<div v-click>
在多核的 CPU 上，自旋可以避免 goroutine 的切换，使用恰当会对性能带来很大的增益，但是使用的不恰当就会拖慢整个程序，所以 Goroutine 进入自旋的条件非常苛刻。
</div>

::right::
<font class="text-xs text-gray-300">release-branch.go1.5</font>
<div class="overflow-auto h-4/6">
```go {13-24|13,21}
func (m *Mutex) Lock() {
	// Fast path: grab unlocked mutex.
	if atomic.CompareAndSwapInt32(&m.state, 0, mutexLocked) {
		return
	}

	awoke := false
	iter := 0
	for {
		old := m.state
		new := old | mutexLocked
		if old&mutexLocked != 0 {
			if runtime_canSpin(iter) { // 自旋
				// Active spinning makes sense.
				// Try to set mutexWoken flag to inform Unlock
				// to not wake other blocked goroutines.
				if !awoke && old&mutexWoken == 0 && old>>mutexWaiterShift != 0 &&
					atomic.CompareAndSwapInt32(&m.state, old, old|mutexWoken) {
					awoke = true
				}
				runtime_doSpin()
				iter++
				continue
			}
			new = old + 1<<mutexWaiterShift
		}
		if awoke {
			// The goroutine has been woken from sleep,
			// so we need to reset the flag in either case.
			if new&mutexWoken == 0 {
				panic("sync: inconsistent mutex state")
			}
			new &^= mutexWoken
		}
		if atomic.CompareAndSwapInt32(&m.state, old, new) {
			if old&mutexLocked == 0 {
				break
			}
			runtime_Semacquire(&m.sema)
			awoke = true
			iter = 0
		}
	}
}
```
</div>

---

# runtime_canSpin()

<div class="text-sm">

`runtime_canSpin` 返回true的条件如下：
- 当前运行的机器是多核CPU，且GOMAXPROCS>1
- 至少存在一个其他正在运行的P，并且当前的本地运行队列（local runq）为空
- 当前goroutine进行自旋的次数小于4

</div>

<div class="text-gray-500">

```go {2-12}
func sync_runtime_canSpin(i int) bool {
	// sync.Mutex is cooperative, so we are conservative with spinning.
	// Spin only few times and only if running on a multicore machine and
	// GOMAXPROCS>1 and there is at least one other running P and local runq is empty.
	// As opposed to runtime mutex we don't do passive spinning here,
	// because there can be work on global runq on on other Ps.
	if i >= active_spin || ncpu <= 1 || gomaxprocs <= int32(sched.npidle+sched.nmspinning)+1 {
		return false
	}
	if p := getg().m.p.ptr(); !runqempty(p) {
		return false
	}
	return true
}
```
</div>

---

# runtime_doSpin()

<div class="text-sm">

一旦当前 Goroutine 能够进入自旋就会调用runtime.sync_runtime_doSpin ，执行 30 次的 PAUSE指令：

</div>

<div class="text-gray-500">

```go
func sync_runtime_doSpin() {
	procyield(active_spin_cnt) // active_spin_cnt 常量 值为30
}
```
<br>
```go {all|4}
TEXT runtime·procyield(SB),NOSPLIT,$0-0
	MOVL	cycles+0(FP), AX
again:
	PAUSE
	SUBL	$1, AX
	JNZ	again
	RET
```
</div>


<div class="absolute bottom-0 text-gray-400 right-0 font-sans h-2/6 w-3/6 text-sm">
<b>Improves the performance of spin-wait loops</b>. When executing a “spin-wait loop,” a Pentium 4 or Intel Xeon processor suffers a severe performance penalty when exiting the loop because it detects a possible <b>memory order violation</b>. The PAUSE instruction provides a hint to the processor that the code sequence is a spin-wait loop. The processor uses this hint to avoid the memory order violation in most situations, which greatly improves processor performance. <b>For this reason, it is recommended that a PAUSE instruction be placed in all spin-wait loops.</b>

<a href="https://www.felixcloutier.com/x86/pause.html">Reference: https://www.felixcloutier.com/x86/pause.html</a>
</div>

---

# **V4.0 解决饥饿**

### 饥饿问题

<br>

1. 新来的goroutine在CPU上运行，比唤醒的goroutine更具有优势;
2. 处于自旋态的goroutine可以有很多个，而被唤醒的goroutine每次只能有一个;
3. 被唤醒的goroutine在未抢到锁之后被放回了队列的尾部，加剧了饥饿问题

<br>

### 优化方案

release-branch.go1.9: 
	
1. 引入饥饿模式，添加mutexStarving标识，解决饥饿问题； 
2. 将唤醒且未获得锁的goroutine插入队列头部;

---
layout: two-cols
---
# 正常模式&饥饿模式

<div class="text-sm text-gray-700">
<b>正常模式</b> - 更好的性能: <br>
1. 尝试加锁的goroutine会进入自旋, 尝试通过原子操作获得锁;  <br>
2. 若自旋几次后仍未获得锁, 通过信号量进入排队等待, 以先入先出(FIFO)顺序排队等待被唤醒; <br>
3. 被唤醒的goroutine不会立即获得锁, 而是需要和新来的goroutine竞争;<br>
4. 若被唤醒的goroutine竞争失败, 会被重新插入队列的<b>头部</b>;<br>
<br>
<b>饥饿模式</b> - 避免高尾延时: <br>
1. 互斥锁的所有权会从执行Unlock的goroutine直接传递给等待队列头部的goroutine; <br>
2. 新来的goroutine直接进入队列尾部等待, 不会进入自旋, 也不会尝试获得锁;<br>
<br>
<b>切换条件</b>: <br>
1. goroutine 加锁等待时间超过1ms -> 饥饿模式<br>
2. goroutine 获得了锁且等待的时间少于1ms或它是最后一个等待者 -> 正常模式 <br>
</div>

::right::

<br>
<div  align="center">    
<img src="/img/mutex-state-v4.png" class="rounded center"/>
<center><font class="text-xs text-gray-300">图3 state结构</font></center>
</div>

<div class="text-sm text-gray-400">

- mutexLocked: 表示互斥锁处于Locked状态
- mutexWoken: 表示已有goroutine被唤醒
- mutexStarving: 表示处于饥饿模式
- waitersCount: 当前排队等待的goroutine个数

</div>

```go
type Mutex struct {
	state int32
	sema  uint32
}

const (
	mutexLocked = 1 << iota // mutex is locked
	mutexWoken
	mutexStarving
	mutexWaiterShift = iota
	starvationThresholdNs = 1e6
)
```

---

# Lock

<div class="overflow-auto h-96 text-gray-500">
```go {1-9|11-17|18-30|31-49|50-51|52-54|56-61|63-65|67-87|all}
// release-branch.go1.13：将 fast path 和 slow path 拆成独立的方法，以便内联，提高性能
func (m *Mutex) Lock() {
	// Fast path: grab unlocked mutex.
	if atomic.CompareAndSwapInt32(&m.state, 0, mutexLocked) {
		return
	}
	// Slow path (outlined so that the fast path can be inlined)
	m.lockSlow()
}

func (m *Mutex) lockSlow() {
	var waitStartTime int64 // 等待时间
	starving := false       // 饥饿状态标识
	awoke := false          // 唤醒标识
	iter := 0               // 自旋次数
	old := m.state          // 当前锁的状态
	for {
		// 自旋条件: 正常模式 且 runtime_canSpin 返回为true
		if old&(mutexLocked|mutexStarving) == mutexLocked && runtime_canSpin(iter) {
			// 当前处于主动自旋, 尝试设置mutexWoken标识
			// 以避免Unlock时唤醒更多的goroutine
			if !awoke && old&mutexWoken == 0 && old>>mutexWaiterShift != 0 &&
				atomic.CompareAndSwapInt32(&m.state, old, old|mutexWoken) {
				awoke = true
			}
			runtime_doSpin() // 自旋
			iter++
			old = m.state
			continue
		}
		new := old
		// 若为正常模式 将 mutexLocked 置为 1 表示抢锁
		if old&mutexStarving == 0 {
			new |= mutexLocked
		}
		// 如果当前锁已被加锁或者处于饥饿模式，则将waiter数加1，表示当前goroutine将被作为waiter置于等待队列队尾
		if old&(mutexLocked|mutexStarving) != 0 {
			new += 1 << mutexWaiterShift
		}
		if starving && old&mutexLocked != 0 {
			new |= mutexStarving
		}
		if awoke {
			// 当前goroutine是被唤醒的, 检查并清除标记位
			if new&mutexWoken == 0 {
				throw("sync: inconsistent mutex state")
			}
			new &^= mutexWoken
		}
		// 通过CAS更新state
		if atomic.CompareAndSwapInt32(&m.state, old, new) {
			if old&(mutexLocked|mutexStarving) == 0 {
				break // 通过CAS获得了锁
			}

			// 被唤醒后未获得锁, 需要插入队列头部
			queueLifo := waitStartTime != 0
			if waitStartTime == 0 {
				waitStartTime = runtime_nanotime()
			}
			runtime_SemacquireMutex(&m.sema, queueLifo, 1) // 排队等待

			// 被唤醒后 判断是否切换至饥饿模式
			// 条件: 已经处于饥饿模式或等待时间超过 starvationThresholdNs (1ms)
			starving = starving || runtime_nanotime()-waitStartTime > starvationThresholdNs
			
			old = m.state
			if old&mutexStarving != 0 {
				// 若为饥饿模式 锁直接交给被唤醒的goroutine 即当前goroutine
				// 如果这个时候当前goroutine不是被唤醒状态 或 等待队列为空 会发生Panic
				if old&(mutexLocked|mutexWoken) != 0 || old>>mutexWaiterShift == 0 {
					throw("sync: inconsistent mutex state")
				}

				// 成功获得锁 waiter数-1
				delta := int32(mutexLocked - 1<<mutexWaiterShift)

				// 没有其他等待goroutine 则切换为正常模式
				if !starving || old>>mutexWaiterShift == 1 {
					// 退出饥饿模式
					delta -= mutexStarving
				}
				atomic.AddInt32(&m.state, delta)
				break
			}
			awoke = true
			iter = 0
		} else {
			// CAS 未成功进入下一次循环
			old = m.state
		}
	}
}
```
</div>

---

# Unlock

<div class="overflow-auto h-96 text-gray-500">
```go {1-11|13-18|20-38|39-45|all}
// 锁的两种空闲态: 
// 1.完全空闲：即锁的初始态，此时 m.state==0
// 2.锁空闲：当前 mutexLocked 值为0，但仍然有等待获取锁的goroutine
func (m *Mutex) Unlock() {
	// Fast path: 快速解锁
	new := atomic.AddInt32(&m.state, -mutexLocked)
	if new != 0 {
		// 未解锁成功
		m.unlockSlow(new)
	}
}

func (m *Mutex) unlockSlow(new int32) {
	// 校验锁的合法性
	if (new+mutexLocked)&mutexLocked == 0 {
		// unlock 一个没有上锁的 mutex
		fatal("sync: unlock of unlocked mutex")
	}
	
	if new&mutexStarving == 0 {
		// 正常模式
		old := new
		for {
			// 如果锁没有waiter,或者锁有其他以下已发生的情况之一，则后面的工作就不用做了，直接返回
      	// 1. 锁处于锁定状态，表示锁已经被其他goroutine获取了
      	// 2. 锁处于被唤醒状态，这表明有等待goroutine被唤醒，不用再尝试唤醒其他goroutine
      	// 3. 锁处于饥饿模式，那么锁之后会被直接交给等待队列队头goroutine
			if old>>mutexWaiterShift == 0 || old&(mutexLocked|mutexWoken|mutexStarving) != 0 {
				return
			}
			// 尝试唤醒等待者
			new = (old - 1<<mutexWaiterShift) | mutexWoken
			if atomic.CompareAndSwapInt32(&m.state, old, new) {
				runtime_Semrelease(&m.sema, false, 1) 
				return
			}
			old = m.state
		}
	} else {
		// 饥饿模式
		// 当前锁交给下一个正在尝试获取锁的等待者，等待者被唤醒后会得到锁
		// 注意: mutexLocked标识没有设置, 被唤醒的goroutine会设置它
		// 因为饥饿模式下的mutex会被认为处于Locked状态, 所以后来者不会尝试获取它
		runtime_Semrelease(&m.sema, true, 1)
	}
}
```
</div>

---
layout: two-cols
---

# V4.1 TryLock

<font size=1 class="text-gray-700 leading-6">
1. 2013 年 @lukescott 提出<a href="https://link.zhihu.com/?target=https%3A//github.com/golang/go/issues/6123">《sync: mutex.TryLock》</a>，被拒绝。<br>
2. 2018 年 @deanveloper 提出<a href="https://link.zhihu.com/?target=https%3A//github.com/golang/go/issues/27544">《proposal: add sync.Mutex.TryLock》</a>，被拒绝。<br>
3. 2021 年 @TyeMcQueen 提出<a href="https://link.zhihu.com/?target=https%3A//github.com/golang/go/issues/45435">《sync: add Mutex.TryLock》</a>，先被拒绝，后接受。<br>
4. 2022 年，由于之前 Go1.17 功能特性已冻结，定在 Go1.18 发布(3 月)。<br>
</font>
<br>

<img src="/img/trylock.png" class="rounded"/>
<center><font size=1 class="text-gray-300">issues/45435 《proposal: add sync.Mutex.TryLock》</font></center>

<font class="text-xs text-gray-500">
Reference:<a href="https://zhuanlan.zhihu.com/p/467654600">Go1.18 新特性：三顾茅庐，被折腾 N 次的 TryLock</a>
</font>

::right::
<font class="text-xs text-gray-300">release-branch.go1.18</font>
```go
func (m *Mutex) TryLock() bool {
	old := m.state
	if old&(mutexLocked|mutexStarving) != 0 {
		return false
	}

	// There may be a goroutine waiting for the mutex, but we are
	// running now and can try to grab the mutex before that
	// goroutine wakes up.
	if !atomic.CompareAndSwapInt32(&m.state, old, old|mutexLocked) {
		return false
	}
	return true
}
```

---
class: 'grid text-center align-self-center justify-self-center text-sm'
---

# **Mutex使用的易错点**

---

# **1. Lock/Unlock 没有成对出现**

Lock/Unlock 没有成对出现，就意味着会出现死锁的情况，或者是因为 Unlock 一个未加锁的 Mutex 而导致 panic。

因此推荐尽可能结合defer, 在编写代码时使Lock/Unlock成对出现: 

```go
func foo() { 
	var mu sync.Mutex 
	mu.Lock() 
	defer mu.Unlock() 

	fmt.Println("hello world!")
}
```

---
layout: two-cols
---

# 2. Copy 已使用的 Mutex

**Package sync 的同步原语在使用后是不能复制的。**

第 12 行在调用 foo 函数的时候，调用者会复制 Mutex 变量 c 作为 foo 函数的参数，由于复制之前已经使用了这个锁，这就导致，复制的 Counter 是一个带状态 Counter。

::right::
```go
func main() {
	var mu sync.Mutex
	mu.Lock()
	defer mu.Unlock()
	foo(mu) // 复制锁
}

func foo(c sync.Mutex) {
	c.Lock()
	defer c.Unlock()
	fmt.Println("in foo")
}
```

---
layout: two-cols
---

# 3. 重入
<font class="text-xs text-gray-500">
* 可重入互斥锁（reentrant mutex）是互斥锁的一种，同一线程对其多次加锁不会产生死锁。可重入互斥锁也称递归互斥锁（recursive mutex）或递归锁（recursive lock）。
</font>

**Mutex 不是可重入的锁。** 因为 Mutex 的实现中没有记录哪个 goroutine 拥有这把锁。理论上，任何 goroutine 都可以随意地 Unlock 这把锁，所以没办法计算重入条件。所以，一旦误用 Mutex 的重入，就会导致报错

<font class="text-xs text-gray-500">
Reference:<a href="https://groups.google.com/g/golang-nuts/c/XqW1qcuZgKg/m/Ui3nQkeLV80J">Russ Cox - [Experimenting with GO]Go 为什么不支持可重入锁？</a>
<br>
(Recursive mutexes are just a mistake, nothing more than a comfortable home for bugs.) <br>
</font>

::right::
```go
func F() {
        mu.Lock()
        ... do some stuff ...
        G()
        ... do some more stuff ...
        mu.Unlock()
}

func G() {
        mu.Lock()
        ... do some stuff ...
        mu.Unlock()
}
```

---
layout: two-cols
---

# 4. 死锁
<font class="text-xs text-gray-900">
当两个以上的运算单元，双方都在等待对方停止执行，以获取系统资源，但是没有一方提前退出时，就称为死锁。<br>

死锁的四个条件是：

1. 禁止抢占(no preemption)：系统资源不能被强制从一个进程中退出。
2. 持有和等待(hold and wait)：一个进程可以在等待时持有系统资源。
3. 互斥(mutual exclusion)：资源只能同时分配给一个行程，无法多个行程共享。
4. 循环等待(circular waiting)：一系列进程互相持有其他进程所需要的资源。<br>

检测工具: 
- 官方自带检索工具
- [go-deadlock](https://github.com/sasha-s/go-deadlock)
- [go-tools](https://github.com/dominikh/go-tools)
</font>



::right::

```go
func main() {
	var (
		l1, l2 sync.Mutex
		wg     sync.WaitGroup
	)
	wg.Add(2)

	go func() {
		defer wg.Done()
		l1.Lock()
		defer l1.Unlock()
		<-time.After(time.Second) // do something
		l2.Lock()
		defer l2.Unlock()
	}()

	go func() {
		defer wg.Done()
		l2.Lock()
		defer l2.Unlock()
		<-time.After(time.Second) // do something
		l1.Lock()
		defer l1.Unlock()
	}()

	wg.Wait()
}
```

---
layout: text-image
media: '/img/docker-34881.png'
caption: 'docker-issue 34881'
---

# 知名项目的"踩坑"经历
Docker-[issue 34881](https://github.com/moby/moby/pull/34881/files):

在第 34 行，发现不满足条件就返回了，c.mu 锁没有释放

---
layout: text-image
media: '/img/kubernetes-45192.png'
caption: 'Kubernetes-issue 45192'
---

# 知名项目的"踩坑"经历
Kubernetes-[issue 45192](https://github.com/kubernetes/kubernetes/pull/45192/files):

在第 48 行，函数返回，c.mu 锁没有释放

---
layout: text-image
media: '/img/gRPC-795.png'
caption: 'gRPC-issue 795'
---

# 知名项目的"踩坑"经历
gRPC-[issue 795](https://github.com/grpc/grpc-go/pull/795/files):

在第 801 行，将Lock写成了Unlock


---
layout: text-image
media: '/img/etcd-10419.png'
caption: 'etcd-issue 10419'
---

# 知名项目的"踩坑"经历
etcd-[issue 10419](https://github.com/etcd-io/etcd/pull/10419/files):

Store 方法内对请求了锁，而调用的 Compact 的方法内又请求了锁，导致死锁


---
class: 'grid text-center align-self-center justify-self-center text-sm'
---

# 谢谢
***
参考资料<br>
《Go 并发编程实战》晁岳攀 <br>
《Go语言设计与实现》左书祺 <br>
《深度探索GO语言》封幼林 <br>
《跟煎鱼精通 Go 语言》陈煎鱼 <br>
[ITT 2019 - Kavya Joshi - Let's talk locks!](https://www.youtube.com/watch?v=tjpncm3xTTc)


