function On(t,e){const s=Object.create(null),a=t.split(",");for(let r=0;r<a.length;r++)s[a[r]]=!0;return e?r=>!!s[r.toLowerCase()]:r=>!!s[r]}function ne(t){if(it(t)){const e={};for(let s=0;s<t.length;s++){const a=t[s],r=Ut(a)?mp(a):ne(a);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ut(t))return t;if(Ct(t))return t}}const pp=/;(?![^(]*\))/g,fp=/:([^]+)/,dp=/\/\*.*?\*\//gs;function mp(t){const e={};return t.replace(dp,"").split(pp).forEach(s=>{if(s){const a=s.split(fp);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function jt(t){let e="";if(Ut(t))e=t;else if(it(t))for(let s=0;s<t.length;s++){const a=jt(t[s]);a&&(e+=a+" ")}else if(Ct(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}function At(t){if(!t)return null;let{class:e,style:s}=t;return e&&!Ut(e)&&(t.class=jt(e)),s&&(t.style=ne(s)),t}const hp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",gp="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",_p=On(hp),kp=On(gp),vp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yp=On(vp);function zl(t){return!!t||t===""}const an=t=>Ut(t)?t:t==null?"":it(t)||Ct(t)&&(t.toString===Xl||!ut(t.toString))?JSON.stringify(t,Kl,2):String(t),Kl=(t,e)=>e&&e.__v_isRef?Kl(t,e.value):Hn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[a,r])=>(s[`${a} =>`]=r,s),{})}:Yl(e)?{[`Set(${e.size})`]:[...e.values()]}:Ct(e)&&!it(e)&&!Zl(e)?String(e):e,Tt=Object.freeze({}),gs=Object.freeze([]),fe=()=>{},Gl=()=>!1,wp=/^on[^a-z]/,lo=t=>wp.test(t),Ao=t=>t.startsWith("onUpdate:"),Vt=Object.assign,gr=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},xp=Object.prototype.hasOwnProperty,_t=(t,e)=>xp.call(t,e),it=Array.isArray,Hn=t=>Zo(t)==="[object Map]",Yl=t=>Zo(t)==="[object Set]",ut=t=>typeof t=="function",Ut=t=>typeof t=="string",_r=t=>typeof t=="symbol",Ct=t=>t!==null&&typeof t=="object",Xo=t=>Ct(t)&&ut(t.then)&&ut(t.catch),Xl=Object.prototype.toString,Zo=t=>Xl.call(t),kr=t=>Zo(t).slice(8,-1),Zl=t=>Zo(t)==="[object Object]",vr=t=>Ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$o=On(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bp=On("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Qo=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},Sp=/-(\w)/g,qe=Qo(t=>t.replace(Sp,(e,s)=>s?s.toUpperCase():"")),$p=/\B([A-Z])/g,rn=Qo(t=>t.replace($p,"-$1").toLowerCase()),Zn=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Rn=Qo(t=>t?`on${Zn(t)}`:""),Gs=(t,e)=>!Object.is(t,e),kn=(t,e)=>{for(let s=0;s<t.length;s++)t[s](e)},Mo=(t,e,s)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:s})},Ys=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let si;const Ql=()=>si||(si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Io(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let he;class Jl{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=he,!e&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}run(e){if(this.active){const s=he;try{return he=this,e()}finally{he=s}}else Io("cannot run an inactive effect scope.")}on(){he=this}off(){he=this.parent}stop(e){if(this.active){let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function WS(t){return new Jl(t)}function Cp(t,e=he){e&&e.active&&e.effects.push(t)}function Ep(){return he}function Pp(t){he?he.cleanups.push(t):Io("onScopeDispose() is called when there is no active effect scope to be associated with.")}const yr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},tc=t=>(t.w&Cn)>0,ec=t=>(t.n&Cn)>0,Lp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cn},Op=t=>{const{deps:e}=t;if(e.length){let s=0;for(let a=0;a<e.length;a++){const r=e[a];tc(r)&&!ec(r)?r.delete(t):e[s++]=r,r.w&=~Cn,r.n&=~Cn}e.length=s}},Ia=new WeakMap;let Ns=0,Cn=1;const Ra=30;let le;const Bn=Symbol("iterate"),Na=Symbol("Map key iterate");class wr{constructor(e,s=null,a){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Cp(this,a)}run(){if(!this.active)return this.fn();let e=le,s=yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=le,le=this,yn=!0,Cn=1<<++Ns,Ns<=Ra?Lp(this):oi(this),this.fn()}finally{Ns<=Ra&&Op(this),Cn=1<<--Ns,le=this.parent,yn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){le===this?this.deferStop=!0:this.active&&(oi(this),this.onStop&&this.onStop(),this.active=!1)}}function oi(t){const{deps:e}=t;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(t);e.length=0}}let yn=!0;const nc=[];function ns(){nc.push(yn),yn=!1}function ss(){const t=nc.pop();yn=t===void 0?!0:t}function ve(t,e,s){if(yn&&le){let a=Ia.get(t);a||Ia.set(t,a=new Map);let r=a.get(s);r||a.set(s,r=yr()),sc(r,{effect:le,target:t,type:e,key:s})}}function sc(t,e){let s=!1;Ns<=Ra?ec(t)||(t.n|=Cn,s=!tc(t)):s=!t.has(le),s&&(t.add(le),le.deps.push(t),le.onTrack&&le.onTrack(Object.assign({effect:le},e)))}function ln(t,e,s,a,r,i){const l=Ia.get(t);if(!l)return;let c=[];if(e==="clear")c=[...l.values()];else if(s==="length"&&it(t)){const p=Ys(a);l.forEach((d,f)=>{(f==="length"||f>=p)&&c.push(d)})}else switch(s!==void 0&&c.push(l.get(s)),e){case"add":it(t)?vr(s)&&c.push(l.get("length")):(c.push(l.get(Bn)),Hn(t)&&c.push(l.get(Na)));break;case"delete":it(t)||(c.push(l.get(Bn)),Hn(t)&&c.push(l.get(Na)));break;case"set":Hn(t)&&c.push(l.get(Bn));break}const u={target:t,type:e,key:s,newValue:a,oldValue:r,oldTarget:i};if(c.length===1)c[0]&&Fa(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);Fa(yr(p),u)}}function Fa(t,e){const s=it(t)?t:[...t];for(const a of s)a.computed&&ai(a,e);for(const a of s)a.computed||ai(a,e)}function ai(t,e){(t!==le||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Vt({effect:t},e)),t.scheduler?t.scheduler():t.run())}const Tp=On("__proto__,__v_isRef,__isVue"),oc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_r)),Ap=Jo(),Mp=Jo(!1,!0),Ip=Jo(!0),Rp=Jo(!0,!0),ri=Np();function Np(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...s){const a=dt(this);for(let i=0,l=this.length;i<l;i++)ve(a,"get",i+"");const r=a[e](...s);return r===-1||r===!1?a[e](...s.map(dt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...s){ns();const a=dt(this)[e].apply(this,s);return ss(),a}}),t}function Jo(t=!1,e=!1){return function(a,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?fc:pc:e?uc:cc).get(a))return a;const l=it(a);if(!t&&l&&_t(ri,r))return Reflect.get(ri,r,i);const c=Reflect.get(a,r,i);return(_r(r)?oc.has(r):Tp(r))||(t||ve(a,"get",r),e)?c:bt(c)?l&&vr(r)?c:c.value:Ct(c)?t?Dn(c):Jt(c):c}}const Fp=ac(),Up=ac(!0);function ac(t=!1){return function(s,a,r,i){let l=s[a];if(En(l)&&bt(l)&&!bt(r))return!1;if(!t&&(!Ro(r)&&!En(r)&&(l=dt(l),r=dt(r)),!it(s)&&bt(l)&&!bt(r)))return l.value=r,!0;const c=it(s)&&vr(a)?Number(a)<s.length:_t(s,a),u=Reflect.set(s,a,r,i);return s===dt(i)&&(c?Gs(r,l)&&ln(s,"set",a,r,l):ln(s,"add",a,r)),u}}function jp(t,e){const s=_t(t,e),a=t[e],r=Reflect.deleteProperty(t,e);return r&&s&&ln(t,"delete",e,void 0,a),r}function Dp(t,e){const s=Reflect.has(t,e);return(!_r(e)||!oc.has(e))&&ve(t,"has",e),s}function Vp(t){return ve(t,"iterate",it(t)?"length":Bn),Reflect.ownKeys(t)}const rc={get:Ap,set:Fp,deleteProperty:jp,has:Dp,ownKeys:Vp},ic={get:Ip,set(t,e){return Io(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Io(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},Wp=Vt({},rc,{get:Mp,set:Up}),Hp=Vt({},ic,{get:Rp}),xr=t=>t,ta=t=>Reflect.getPrototypeOf(t);function go(t,e,s=!1,a=!1){t=t.__v_raw;const r=dt(t),i=dt(e);s||(e!==i&&ve(r,"get",e),ve(r,"get",i));const{has:l}=ta(r),c=a?xr:s?Sr:Xs;if(l.call(r,e))return c(t.get(e));if(l.call(r,i))return c(t.get(i));t!==r&&t.get(e)}function _o(t,e=!1){const s=this.__v_raw,a=dt(s),r=dt(t);return e||(t!==r&&ve(a,"has",t),ve(a,"has",r)),t===r?s.has(t):s.has(t)||s.has(r)}function ko(t,e=!1){return t=t.__v_raw,!e&&ve(dt(t),"iterate",Bn),Reflect.get(t,"size",t)}function ii(t){t=dt(t);const e=dt(this);return ta(e).has.call(e,t)||(e.add(t),ln(e,"add",t,t)),this}function li(t,e){e=dt(e);const s=dt(this),{has:a,get:r}=ta(s);let i=a.call(s,t);i?lc(s,a,t):(t=dt(t),i=a.call(s,t));const l=r.call(s,t);return s.set(t,e),i?Gs(e,l)&&ln(s,"set",t,e,l):ln(s,"add",t,e),this}function ci(t){const e=dt(this),{has:s,get:a}=ta(e);let r=s.call(e,t);r?lc(e,s,t):(t=dt(t),r=s.call(e,t));const i=a?a.call(e,t):void 0,l=e.delete(t);return r&&ln(e,"delete",t,void 0,i),l}function ui(){const t=dt(this),e=t.size!==0,s=Hn(t)?new Map(t):new Set(t),a=t.clear();return e&&ln(t,"clear",void 0,void 0,s),a}function vo(t,e){return function(a,r){const i=this,l=i.__v_raw,c=dt(l),u=e?xr:t?Sr:Xs;return!t&&ve(c,"iterate",Bn),l.forEach((p,d)=>a.call(r,u(p),u(d),i))}}function yo(t,e,s){return function(...a){const r=this.__v_raw,i=dt(r),l=Hn(i),c=t==="entries"||t===Symbol.iterator&&l,u=t==="keys"&&l,p=r[t](...a),d=s?xr:e?Sr:Xs;return!e&&ve(i,"iterate",u?Na:Bn),{next(){const{value:f,done:m}=p.next();return m?{value:f,done:m}:{value:c?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function pn(t){return function(...e){{const s=e[0]?`on key "${e[0]}" `:"";console.warn(`${Zn(t)} operation ${s}failed: target is readonly.`,dt(this))}return t==="delete"?!1:this}}function Bp(){const t={get(i){return go(this,i)},get size(){return ko(this)},has:_o,add:ii,set:li,delete:ci,clear:ui,forEach:vo(!1,!1)},e={get(i){return go(this,i,!1,!0)},get size(){return ko(this)},has:_o,add:ii,set:li,delete:ci,clear:ui,forEach:vo(!1,!0)},s={get(i){return go(this,i,!0)},get size(){return ko(this,!0)},has(i){return _o.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:vo(!0,!1)},a={get(i){return go(this,i,!0,!0)},get size(){return ko(this,!0)},has(i){return _o.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:vo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yo(i,!1,!1),s[i]=yo(i,!0,!1),e[i]=yo(i,!1,!0),a[i]=yo(i,!0,!0)}),[t,s,e,a]}const[qp,zp,Kp,Gp]=Bp();function ea(t,e){const s=e?t?Gp:Kp:t?zp:qp;return(a,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?a:Reflect.get(_t(s,r)&&r in a?s:a,r,i)}const Yp={get:ea(!1,!1)},Xp={get:ea(!1,!0)},Zp={get:ea(!0,!1)},Qp={get:ea(!0,!0)};function lc(t,e,s){const a=dt(s);if(a!==s&&e.call(t,a)){const r=kr(t);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const cc=new WeakMap,uc=new WeakMap,pc=new WeakMap,fc=new WeakMap;function Jp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tf(t){return t.__v_skip||!Object.isExtensible(t)?0:Jp(kr(t))}function Jt(t){return En(t)?t:na(t,!1,rc,Yp,cc)}function ef(t){return na(t,!1,Wp,Xp,uc)}function Dn(t){return na(t,!0,ic,Zp,pc)}function ms(t){return na(t,!0,Hp,Qp,fc)}function na(t,e,s,a,r){if(!Ct(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const l=tf(t);if(l===0)return t;const c=new Proxy(t,l===2?a:s);return r.set(t,c),c}function qn(t){return En(t)?qn(t.__v_raw):!!(t&&t.__v_isReactive)}function En(t){return!!(t&&t.__v_isReadonly)}function Ro(t){return!!(t&&t.__v_isShallow)}function No(t){return qn(t)||En(t)}function dt(t){const e=t&&t.__v_raw;return e?dt(e):t}function br(t){return Mo(t,"__v_skip",!0),t}const Xs=t=>Ct(t)?Jt(t):t,Sr=t=>Ct(t)?Dn(t):t;function $r(t){yn&&le&&(t=dt(t),sc(t.dep||(t.dep=yr()),{target:t,type:"get",key:"value"}))}function Cr(t,e){t=dt(t),t.dep&&Fa(t.dep,{target:t,type:"set",key:"value",newValue:e})}function bt(t){return!!(t&&t.__v_isRef===!0)}function ot(t){return dc(t,!1)}function ze(t){return dc(t,!0)}function dc(t,e){return bt(t)?t:new nf(t,e)}class nf{constructor(e,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?e:dt(e),this._value=s?e:Xs(e)}get value(){return $r(this),this._value}set value(e){const s=this.__v_isShallow||Ro(e)||En(e);e=s?e:dt(e),Gs(e,this._rawValue)&&(this._rawValue=e,this._value=s?e:Xs(e),Cr(this,e))}}function w(t){return bt(t)?t.value:t}const sf={get:(t,e,s)=>w(Reflect.get(t,e,s)),set:(t,e,s,a)=>{const r=t[e];return bt(r)&&!bt(s)?(r.value=s,!0):Reflect.set(t,e,s,a)}};function mc(t){return qn(t)?t:new Proxy(t,sf)}class of{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:a}=e(()=>$r(this),()=>Cr(this));this._get=s,this._set=a}get value(){return this._get()}set value(e){this._set(e)}}function hc(t){return new of(t)}function af(t){No(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const e=it(t)?new Array(t.length):{};for(const s in t)e[s]=lf(t,s);return e}class rf{constructor(e,s,a){this._object=e,this._key=s,this._defaultValue=a,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function lf(t,e,s){const a=t[e];return bt(a)?a:new rf(t,e,s)}var gc;class cf{constructor(e,s,a,r){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[gc]=!1,this._dirty=!0,this.effect=new wr(e,()=>{this._dirty||(this._dirty=!0,Cr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=a}get value(){const e=dt(this);return $r(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}gc="__v_isReadonly";function uf(t,e,s=!1){let a,r;const i=ut(t);i?(a=t,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(a=t.get,r=t.set);const l=new cf(a,r,i||!r,s);return e&&!s&&(l.effect.onTrack=e.onTrack,l.effect.onTrigger=e.onTrigger),l}const zn=[];function Co(t){zn.push(t)}function Eo(){zn.pop()}function M(t,...e){ns();const s=zn.length?zn[zn.length-1].component:null,a=s&&s.appContext.config.warnHandler,r=pf();if(a)on(a,s,11,[t+e.join(""),s&&s.proxy,r.map(({vnode:i})=>`at <${fa(s,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${t}`,...e];r.length&&i.push(`
`,...ff(r)),console.warn(...i)}ss()}function pf(){let t=zn[zn.length-1];if(!t)return[];const e=[];for(;t;){const s=e[0];s&&s.vnode===t?s.recurseCount++:e.push({vnode:t,recurseCount:0});const a=t.component&&t.component.parent;t=a&&a.vnode}return e}function ff(t){const e=[];return t.forEach((s,a)=>{e.push(...a===0?[]:[`
`],...df(s))}),e}function df({vnode:t,recurseCount:e}){const s=e>0?`... (${e} recursive calls)`:"",a=t.component?t.component.parent==null:!1,r=` at <${fa(t.component,t.type,a)}`,i=">"+s;return t.props?[r,...mf(t.props),i]:[r+i]}function mf(t){const e=[],s=Object.keys(t);return s.slice(0,3).forEach(a=>{e.push(..._c(a,t[a]))}),s.length>3&&e.push(" ..."),e}function _c(t,e,s){return Ut(e)?(e=JSON.stringify(e),s?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?s?e:[`${t}=${e}`]:bt(e)?(e=_c(t,dt(e.value),!0),s?e:[`${t}=Ref<`,e,">"]):ut(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=dt(e),s?e:[`${t}=`,e])}const Er={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function on(t,e,s,a){let r;try{r=a?t(...a):t()}catch(i){sa(i,e,s)}return r}function $e(t,e,s,a){if(ut(t)){const i=on(t,e,s,a);return i&&Xo(i)&&i.catch(l=>{sa(l,e,s)}),i}const r=[];for(let i=0;i<t.length;i++)r.push($e(t[i],e,s,a));return r}function sa(t,e,s,a=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const l=e.proxy,c=Er[s];for(;i;){const p=i.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](t,l,c)===!1)return}i=i.parent}const u=e.appContext.config.errorHandler;if(u){on(u,null,10,[t,l,c]);return}}hf(t,s,r,a)}function hf(t,e,s,a=!0){{const r=Er[e];if(s&&Co(s),M(`Unhandled error${r?` during execution of ${r}`:""}`),s&&Eo(),a)throw t;console.error(t)}}let Zs=!1,Ua=!1;const ee=[];let Ve=0;const _s=[];let De=null,hn=0;const kc=Promise.resolve();let Pr=null;const gf=100;function Ie(t){const e=Pr||kc;return t?e.then(this?t.bind(this):t):e}function _f(t){let e=Ve+1,s=ee.length;for(;e<s;){const a=e+s>>>1;Qs(ee[a])<t?e=a+1:s=a}return e}function oa(t){(!ee.length||!ee.includes(t,Zs&&t.allowRecurse?Ve+1:Ve))&&(t.id==null?ee.push(t):ee.splice(_f(t.id),0,t),vc())}function vc(){!Zs&&!Ua&&(Ua=!0,Pr=kc.then(xc))}function kf(t){const e=ee.indexOf(t);e>Ve&&ee.splice(e,1)}function yc(t){it(t)?_s.push(...t):(!De||!De.includes(t,t.allowRecurse?hn+1:hn))&&_s.push(t),vc()}function pi(t,e=Zs?Ve+1:0){for(t=t||new Map;e<ee.length;e++){const s=ee[e];if(s&&s.pre){if(Lr(t,s))continue;ee.splice(e,1),e--,s()}}}function wc(t){if(_s.length){const e=[...new Set(_s)];if(_s.length=0,De){De.push(...e);return}for(De=e,t=t||new Map,De.sort((s,a)=>Qs(s)-Qs(a)),hn=0;hn<De.length;hn++)Lr(t,De[hn])||De[hn]();De=null,hn=0}}const Qs=t=>t.id==null?1/0:t.id,vf=(t,e)=>{const s=Qs(t)-Qs(e);if(s===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return s};function xc(t){Ua=!1,Zs=!0,t=t||new Map,ee.sort(vf);const e=s=>Lr(t,s);try{for(Ve=0;Ve<ee.length;Ve++){const s=ee[Ve];if(s&&s.active!==!1){if(e(s))continue;on(s,null,14)}}}finally{Ve=0,ee.length=0,wc(t),Zs=!1,Pr=null,(ee.length||_s.length)&&xc(t)}}function Lr(t,e){if(!t.has(e))t.set(e,1);else{const s=t.get(e);if(s>gf){const a=e.ownerInstance,r=a&&eo(a.type);return M(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,s+1)}}let wn=!1;const ps=new Set;Ql().__VUE_HMR_RUNTIME__={createRecord:ga(bc),rerender:ga(xf),reload:ga(bf)};const Qn=new Map;function yf(t){const e=t.type.__hmrId;let s=Qn.get(e);s||(bc(e,t.type),s=Qn.get(e)),s.instances.add(t)}function wf(t){Qn.get(t.type.__hmrId).instances.delete(t)}function bc(t,e){return Qn.has(t)?!1:(Qn.set(t,{initialDef:Ds(e),instances:new Set}),!0)}function Ds(t){return nu(t)?t.__vccOpts:t}function xf(t,e){const s=Qn.get(t);s&&(s.initialDef.render=e,[...s.instances].forEach(a=>{e&&(a.render=e,Ds(a.type).render=e),a.renderCache=[],wn=!0,a.update(),wn=!1}))}function bf(t,e){const s=Qn.get(t);if(!s)return;e=Ds(e),fi(s.initialDef,e);const a=[...s.instances];for(const r of a){const i=Ds(r.type);ps.has(i)||(i!==s.initialDef&&fi(i,e),ps.add(i)),r.appContext.optionsCache.delete(r.type),r.ceReload?(ps.add(i),r.ceReload(e.styles),ps.delete(i)):r.parent?oa(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}yc(()=>{for(const r of a)ps.delete(Ds(r.type))})}function fi(t,e){Vt(t,e);for(const s in t)s!=="__file"&&!(s in e)&&delete t[s]}function ga(t){return(e,s)=>{try{return t(e,s)}catch(a){console.error(a),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let We,Fs=[],ja=!1;function co(t,...e){We?We.emit(t,...e):ja||Fs.push({event:t,args:e})}function Sc(t,e){var s,a;We=t,We?(We.enabled=!0,Fs.forEach(({event:r,args:i})=>We.emit(r,...i)),Fs=[]):typeof window<"u"&&window.HTMLElement&&!(!((a=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||a===void 0)&&a.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Sc(i,e)}),setTimeout(()=>{We||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ja=!0,Fs=[])},3e3)):(ja=!0,Fs=[])}function Sf(t,e){co("app:init",t,e,{Fragment:$t,Text:mo,Comment:Yt,Static:Ws})}function $f(t){co("app:unmount",t)}const Da=Or("component:added"),$c=Or("component:updated"),Cf=Or("component:removed"),Ef=t=>{We&&typeof We.cleanupBuffer=="function"&&!We.cleanupBuffer(t)&&Cf(t)};function Or(t){return e=>{co(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const Pf=Cc("perf:start"),Lf=Cc("perf:end");function Cc(t){return(e,s,a)=>{co(t,e.appContext.app,e.uid,e,s,a)}}function Of(t,e,s){co("component:emit",t.appContext.app,t,e,s)}function Tf(t,e,...s){if(t.isUnmounted)return;const a=t.vnode.props||Tt;{const{emitsOptions:d,propsOptions:[f]}=t;if(d)if(!(e in d))(!f||!(Rn(e)in f))&&M(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Rn(e)}" prop.`);else{const m=d[e];ut(m)&&(m(...s)||M(`Invalid event arguments: event validation failed for event "${e}".`))}}let r=s;const i=e.startsWith("update:"),l=i&&e.slice(7);if(l&&l in a){const d=`${l==="modelValue"?"model":l}Modifiers`,{number:f,trim:m}=a[d]||Tt;m&&(r=s.map(g=>Ut(g)?g.trim():g)),f&&(r=s.map(Ys))}Of(t,e,r);{const d=e.toLowerCase();d!==e&&a[Rn(d)]&&M(`Event "${d}" is emitted in component ${fa(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${rn(e)}" instead of "${e}".`)}let c,u=a[c=Rn(e)]||a[c=Rn(qe(e))];!u&&i&&(u=a[c=Rn(rn(e))]),u&&$e(u,t,6,r);const p=a[c+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,$e(p,t,6,r)}}function Ec(t,e,s=!1){const a=e.emitsCache,r=a.get(t);if(r!==void 0)return r;const i=t.emits;let l={},c=!1;if(!ut(t)){const u=p=>{const d=Ec(p,e,!0);d&&(c=!0,Vt(l,d))};!s&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!c?(Ct(t)&&a.set(t,null),null):(it(i)?i.forEach(u=>l[u]=null):Vt(l,i),Ct(t)&&a.set(t,l),l)}function aa(t,e){return!t||!lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),_t(t,e[0].toLowerCase()+e.slice(1))||_t(t,rn(e))||_t(t,e))}let Kt=null,ra=null;function Fo(t){const e=Kt;return Kt=t,ra=t&&t.type.__scopeId||null,e}function HS(t){ra=t}function BS(){ra=null}function F(t,e=Kt,s){if(!e||t._n)return t;const a=(...r)=>{a._d&&$i(-1);const i=Fo(e);let l;try{l=t(...r)}finally{Fo(i),a._d&&$i(1)}return $c(e),l};return a._n=!0,a._c=!0,a._d=!0,a}let Va=!1;function Uo(){Va=!0}function _a(t){const{type:e,vnode:s,proxy:a,withProxy:r,props:i,propsOptions:[l],slots:c,attrs:u,emit:p,render:d,renderCache:f,data:m,setupState:g,ctx:_,inheritAttrs:v}=t;let y,C;const b=Fo(t);Va=!1;try{if(s.shapeFlag&4){const D=r||a;y=Te(d.call(D,D,f,i,g,m,_)),C=u}else{const D=e;u===i&&Uo(),y=Te(D.length>1?D(i,{get attrs(){return Uo(),u},slots:c,emit:p}):D(i,null)),C=e.props?u:Mf(u)}}catch(D){Hs.length=0,sa(D,t,1),y=A(Yt)}let $=y,P;if(y.patchFlag>0&&y.patchFlag&2048&&([$,P]=Af(y)),C&&v!==!1){const D=Object.keys(C),{shapeFlag:V}=$;if(D.length){if(V&7)l&&D.some(Ao)&&(C=If(C,l)),$=Re($,C);else if(!Va&&$.type!==Yt){const R=Object.keys(u),U=[],Z=[];for(let nt=0,ct=R.length;nt<ct;nt++){const z=R[nt];lo(z)?Ao(z)||U.push(z[2].toLowerCase()+z.slice(3)):Z.push(z)}Z.length&&M(`Extraneous non-props attributes (${Z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),U.length&&M(`Extraneous non-emits event listeners (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(di($)||M("Runtime directive used on component with non-element root node. The directives will not function as intended."),$=Re($),$.dirs=$.dirs?$.dirs.concat(s.dirs):s.dirs),s.transition&&(di($)||M("Component inside <Transition> renders non-element root node that cannot be animated."),$.transition=s.transition),P?P($):y=$,Fo(b),y}const Af=t=>{const e=t.children,s=t.dynamicChildren,a=Pc(e);if(!a)return[t,void 0];const r=e.indexOf(a),i=s?s.indexOf(a):-1,l=c=>{e[r]=c,s&&(i>-1?s[i]=c:c.patchFlag>0&&(t.dynamicChildren=[...s,c]))};return[Te(a),l]};function Pc(t){let e;for(let s=0;s<t.length;s++){const a=t[s];if(Jn(a)){if(a.type!==Yt||a.children==="v-if"){if(e)return;e=a}}else return}return e}const Mf=t=>{let e;for(const s in t)(s==="class"||s==="style"||lo(s))&&((e||(e={}))[s]=t[s]);return e},If=(t,e)=>{const s={};for(const a in t)(!Ao(a)||!(a.slice(9)in e))&&(s[a]=t[a]);return s},di=t=>t.shapeFlag&7||t.type===Yt;function Rf(t,e,s){const{props:a,children:r,component:i}=t,{props:l,children:c,patchFlag:u}=e,p=i.emitsOptions;if((r||c)&&wn||e.dirs||e.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return a?mi(a,l,p):!!l;if(u&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(l[m]!==a[m]&&!aa(p,m))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:a===l?!1:a?l?mi(a,l,p):!0:!!l;return!1}function mi(t,e,s){const a=Object.keys(e);if(a.length!==Object.keys(t).length)return!0;for(let r=0;r<a.length;r++){const i=a[r];if(e[i]!==t[i]&&!aa(s,i))return!0}return!1}function Nf({vnode:t,parent:e},s){for(;e&&e.subTree===t;)(t=e.vnode).el=s,e=e.parent}const Lc=t=>t.__isSuspense;function Ff(t,e){e&&e.pendingBranch?it(t)?e.effects.push(...t):e.effects.push(t):yc(t)}function _e(t,e){if(!qt)M("provide() can only be used inside setup().");else{let s=qt.provides;const a=qt.parent&&qt.parent.provides;a===s&&(s=qt.provides=Object.create(a)),s[t]=e}}function Y(t,e,s=!1){const a=qt||Kt;if(a){const r=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return s&&ut(e)?e.call(a.proxy):e;M(`injection "${String(t)}" not found.`)}else M("inject() can only be used inside setup() or functional components.")}function bs(t,e){return Tr(t,null,e)}const wo={};function Ft(t,e,s){return ut(e)||M("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Tr(t,e,s)}function Tr(t,e,{immediate:s,deep:a,flush:r,onTrack:i,onTrigger:l}=Tt){e||(s!==void 0&&M('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),a!==void 0&&M('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=P=>{M("Invalid watch source: ",P,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=qt;let p,d=!1,f=!1;if(bt(t)?(p=()=>t.value,d=Ro(t)):qn(t)?(p=()=>t,a=!0):it(t)?(f=!0,d=t.some(P=>qn(P)||Ro(P)),p=()=>t.map(P=>{if(bt(P))return P.value;if(qn(P))return Vn(P);if(ut(P))return on(P,u,2);c(P)})):ut(t)?e?p=()=>on(t,u,2):p=()=>{if(!(u&&u.isUnmounted))return m&&m(),$e(t,u,3,[g])}:(p=fe,c(t)),e&&a){const P=p;p=()=>Vn(P())}let m,g=P=>{m=b.onStop=()=>{on(P,u,4)}},_;if(to)if(g=fe,e?s&&$e(e,u,3,[p(),f?[]:void 0,g]):p(),r==="sync"){const P=Wd();_=P.__watcherHandles||(P.__watcherHandles=[])}else return fe;let v=f?new Array(t.length).fill(wo):wo;const y=()=>{if(b.active)if(e){const P=b.run();(a||d||(f?P.some((D,V)=>Gs(D,v[V])):Gs(P,v)))&&(m&&m(),$e(e,u,3,[P,v===wo?void 0:f&&v[0]===wo?[]:v,g]),v=P)}else b.run()};y.allowRecurse=!!e;let C;r==="sync"?C=y:r==="post"?C=()=>Qt(y,u&&u.suspense):(y.pre=!0,u&&(y.id=u.uid),C=()=>oa(y));const b=new wr(p,C);b.onTrack=i,b.onTrigger=l,e?s?y():v=b.run():r==="post"?Qt(b.run.bind(b),u&&u.suspense):b.run();const $=()=>{b.stop(),u&&u.scope&&gr(u.scope.effects,b)};return _&&_.push($),$}function Uf(t,e,s){const a=this.proxy,r=Ut(t)?t.includes(".")?Oc(a,t):()=>a[t]:t.bind(a,a);let i;ut(e)?i=e:(i=e.handler,s=e);const l=qt;Pn(this);const c=Tr(r,i.bind(a),s);return l?Pn(l):xn(),c}function Oc(t,e){const s=e.split(".");return()=>{let a=t;for(let r=0;r<s.length&&a;r++)a=a[s[r]];return a}}function Vn(t,e){if(!Ct(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),bt(t))Vn(t.value,e);else if(it(t))for(let s=0;s<t.length;s++)Vn(t[s],e);else if(Yl(t)||Hn(t))t.forEach(s=>{Vn(s,e)});else if(Zl(t))for(const s in t)Vn(t[s],e);return t}function jf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return po(()=>{t.isMounted=!0}),Ar(()=>{t.isUnmounting=!0}),t}const xe=[Function,Array],Df={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xe,onEnter:xe,onAfterEnter:xe,onEnterCancelled:xe,onBeforeLeave:xe,onLeave:xe,onAfterLeave:xe,onLeaveCancelled:xe,onBeforeAppear:xe,onAppear:xe,onAfterAppear:xe,onAppearCancelled:xe},setup(t,{slots:e}){const s=Ye(),a=jf();let r;return()=>{const i=e.default&&Mc(e.default(),!0);if(!i||!i.length)return;let l=i[0];if(i.length>1){let v=!1;for(const y of i)if(y.type!==Yt){if(v){M("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}l=y,v=!0}}const c=dt(t),{mode:u}=c;if(u&&u!=="in-out"&&u!=="out-in"&&u!=="default"&&M(`invalid <transition> mode: ${u}`),a.isLeaving)return ka(l);const p=hi(l);if(!p)return ka(l);const d=Wa(p,c,a,s);jo(p,d);const f=s.subTree,m=f&&hi(f);let g=!1;const{getTransitionKey:_}=p.type;if(_){const v=_();r===void 0?r=v:v!==r&&(r=v,g=!0)}if(m&&m.type!==Yt&&(!Fn(p,m)||g)){const v=Wa(m,c,a,s);if(jo(m,v),u==="out-in")return a.isLeaving=!0,v.afterLeave=()=>{a.isLeaving=!1,s.update.active!==!1&&s.update()},ka(l);u==="in-out"&&p.type!==Yt&&(v.delayLeave=(y,C,b)=>{const $=Ac(a,m);$[String(m.key)]=m,y._leaveCb=()=>{C(),y._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=b})}return l}}},Tc=Df;function Ac(t,e){const{leavingVNodes:s}=t;let a=s.get(e.type);return a||(a=Object.create(null),s.set(e.type,a)),a}function Wa(t,e,s,a){const{appear:r,mode:i,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:v,onAppear:y,onAfterAppear:C,onAppearCancelled:b}=e,$=String(t.key),P=Ac(s,t),D=(U,Z)=>{U&&$e(U,a,9,Z)},V=(U,Z)=>{const nt=Z[1];D(U,Z),it(U)?U.every(ct=>ct.length<=1)&&nt():U.length<=1&&nt()},R={mode:i,persisted:l,beforeEnter(U){let Z=c;if(!s.isMounted)if(r)Z=v||c;else return;U._leaveCb&&U._leaveCb(!0);const nt=P[$];nt&&Fn(t,nt)&&nt.el._leaveCb&&nt.el._leaveCb(),D(Z,[U])},enter(U){let Z=u,nt=p,ct=d;if(!s.isMounted)if(r)Z=y||u,nt=C||p,ct=b||d;else return;let z=!1;const kt=U._enterCb=Mt=>{z||(z=!0,Mt?D(ct,[U]):D(nt,[U]),R.delayedLeave&&R.delayedLeave(),U._enterCb=void 0)};Z?V(Z,[U,kt]):kt()},leave(U,Z){const nt=String(t.key);if(U._enterCb&&U._enterCb(!0),s.isUnmounting)return Z();D(f,[U]);let ct=!1;const z=U._leaveCb=kt=>{ct||(ct=!0,Z(),kt?D(_,[U]):D(g,[U]),U._leaveCb=void 0,P[nt]===t&&delete P[nt])};P[nt]=t,m?V(m,[U,z]):z()},clone(U){return Wa(U,e,s,a)}};return R}function ka(t){if(uo(t))return t=Re(t),t.children=null,t}function hi(t){return uo(t)?t.children?t.children[0]:void 0:t}function jo(t,e){t.shapeFlag&6&&t.component?jo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Mc(t,e=!1,s){let a=[],r=0;for(let i=0;i<t.length;i++){let l=t[i];const c=s==null?l.key:String(s)+String(l.key!=null?l.key:i);l.type===$t?(l.patchFlag&128&&r++,a=a.concat(Mc(l.children,e,c))):(e||l.type!==Yt)&&a.push(c!=null?Re(l,{key:c}):l)}if(r>1)for(let i=0;i<a.length;i++)a[i].patchFlag=-2;return a}function Dt(t){return ut(t)?{setup:t,name:t.name}:t}const ks=t=>!!t.type.__asyncLoader,uo=t=>t.type.__isKeepAlive,Vf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const s=Ye(),a=s.ctx;if(!a.renderer)return()=>{const b=e.default&&e.default();return b&&b.length===1?b[0]:b};const r=new Map,i=new Set;let l=null;s.__v_cache=r;const c=s.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:f}}}=a,m=f("div");a.activate=(b,$,P,D,V)=>{const R=b.component;p(b,$,P,0,c),u(R.vnode,b,$,P,R,c,D,b.slotScopeIds,V),Qt(()=>{R.isDeactivated=!1,R.a&&kn(R.a);const U=b.props&&b.props.onVnodeMounted;U&&be(U,R.parent,b)},c),Da(R)},a.deactivate=b=>{const $=b.component;p(b,m,null,1,c),Qt(()=>{$.da&&kn($.da);const P=b.props&&b.props.onVnodeUnmounted;P&&be(P,$.parent,b),$.isDeactivated=!0},c),Da($)};function g(b){va(b),d(b,s,c,!0)}function _(b){r.forEach(($,P)=>{const D=eo($.type);D&&(!b||!b(D))&&v(P)})}function v(b){const $=r.get(b);!l||$.type!==l.type?g($):l&&va(l),r.delete(b),i.delete(b)}Ft(()=>[t.include,t.exclude],([b,$])=>{b&&_(P=>Us(b,P)),$&&_(P=>!Us($,P))},{flush:"post",deep:!0});let y=null;const C=()=>{y!=null&&r.set(y,ya(s.subTree))};return po(C),Nc(C),Ar(()=>{r.forEach(b=>{const{subTree:$,suspense:P}=s,D=ya($);if(b.type===D.type){va(D);const V=D.component.da;V&&Qt(V,P);return}g(b)})}),()=>{if(y=null,!e.default)return null;const b=e.default(),$=b[0];if(b.length>1)return M("KeepAlive should contain exactly one component child."),l=null,b;if(!Jn($)||!($.shapeFlag&4)&&!($.shapeFlag&128))return l=null,$;let P=ya($);const D=P.type,V=eo(ks(P)?P.type.__asyncResolved||{}:D),{include:R,exclude:U,max:Z}=t;if(R&&(!V||!Us(R,V))||U&&V&&Us(U,V))return l=P,$;const nt=P.key==null?D:P.key,ct=r.get(nt);return P.el&&(P=Re(P),$.shapeFlag&128&&($.ssContent=P)),y=nt,ct?(P.el=ct.el,P.component=ct.component,P.transition&&jo(P,P.transition),P.shapeFlag|=512,i.delete(nt),i.add(nt)):(i.add(nt),Z&&i.size>parseInt(Z,10)&&v(i.values().next().value)),P.shapeFlag|=256,l=P,Lc($.type)?$:P}}},Ic=Vf;function Us(t,e){return it(t)?t.some(s=>Us(s,e)):Ut(t)?t.split(",").includes(e):t.test?t.test(e):!1}function Wf(t,e){Rc(t,"a",e)}function Hf(t,e){Rc(t,"da",e)}function Rc(t,e,s=qt){const a=t.__wdc||(t.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ia(e,a,s),s){let r=s.parent;for(;r&&r.parent;)uo(r.parent.vnode)&&Bf(a,e,s,r),r=r.parent}}function Bf(t,e,s,a){const r=ia(e,t,a,!0);la(()=>{gr(a[e],r)},s)}function va(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ya(t){return t.shapeFlag&128?t.ssContent:t}function ia(t,e,s=qt,a=!1){if(s){const r=s[t]||(s[t]=[]),i=e.__weh||(e.__weh=(...l)=>{if(s.isUnmounted)return;ns(),Pn(s);const c=$e(e,s,t,l);return xn(),ss(),c});return a?r.unshift(i):r.push(i),i}else{const r=Rn(Er[t].replace(/ hook$/,""));M(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const cn=t=>(e,s=qt)=>(!to||t==="sp")&&ia(t,(...a)=>e(...a),s),qf=cn("bm"),po=cn("m"),zf=cn("bu"),Nc=cn("u"),Ar=cn("bum"),la=cn("um"),Kf=cn("sp"),Gf=cn("rtg"),Yf=cn("rtc");function Xf(t,e=qt){ia("ec",t,e)}function Fc(t){bp(t)&&M("Do not use built-in directive ids as custom directive id: "+t)}function ca(t,e){const s=Kt;if(s===null)return M("withDirectives can only be used inside render functions."),t;const a=pa(s)||s.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[l,c,u,p=Tt]=e[i];l&&(ut(l)&&(l={mounted:l,updated:l}),l.deep&&Vn(c),r.push({dir:l,instance:a,value:c,oldValue:void 0,arg:u,modifiers:p}))}return t}function Tn(t,e,s,a){const r=t.dirs,i=e&&e.dirs;for(let l=0;l<r.length;l++){const c=r[l];i&&(c.oldValue=i[l].value);let u=c.dir[a];u&&(ns(),$e(u,s,8,[t.el,c,t,e]),ss())}}const Do="components",Zf="directives";function Wt(t,e){return Mr(Do,t,!0,e)||t}const Uc=Symbol();function qS(t){return Ut(t)?Mr(Do,t,!1)||t:t||Uc}function Qf(t){return Mr(Zf,t)}function Mr(t,e,s=!0,a=!1){const r=Kt||qt;if(r){const i=r.type;if(t===Do){const c=eo(i,!1);if(c&&(c===e||c===qe(e)||c===Zn(qe(e))))return i}const l=gi(r[t]||i[t],e)||gi(r.appContext[t],e);if(!l&&a)return i;if(s&&!l){const c=t===Do?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";M(`Failed to resolve ${t.slice(0,-1)}: ${e}${c}`)}return l}else M(`resolve${Zn(t.slice(0,-1))} can only be used in render() or setup().`)}function gi(t,e){return t&&(t[e]||t[qe(e)]||t[Zn(qe(e))])}function fo(t,e,s,a){let r;const i=s&&s[a];if(it(t)||Ut(t)){r=new Array(t.length);for(let l=0,c=t.length;l<c;l++)r[l]=e(t[l],l,void 0,i&&i[l])}else if(typeof t=="number"){Number.isInteger(t)||M(`The v-for range expect an integer value but got ${t}.`),r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i&&i[l])}else if(Ct(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i&&i[c]));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const p=l[c];r[c]=e(t[p],p,c,i&&i[c])}}else r=[];return s&&(s[a]=r),r}function ye(t,e,s={},a,r){if(Kt.isCE||Kt.parent&&ks(Kt.parent)&&Kt.parent.isCE)return e!=="default"&&(s.name=e),A("slot",s,a&&a());let i=t[e];i&&i.length>1&&(M("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),i=()=>[]),i&&i._c&&(i._d=!1),S();const l=i&&jc(i(s)),c=st($t,{key:s.key||l&&l.key||`_${e}`},l||(a?a():[]),l&&t._===1?64:-2);return!r&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function jc(t){return t.some(e=>Jn(e)?!(e.type===Yt||e.type===$t&&!jc(e.children)):!0)?t:null}const Ha=t=>t?Jc(t)?pa(t)||t.proxy:Ha(t.parent):null,Kn=Vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>ms(t.props),$attrs:t=>ms(t.attrs),$slots:t=>ms(t.slots),$refs:t=>ms(t.refs),$parent:t=>Ha(t.parent),$root:t=>Ha(t.root),$emit:t=>t.emit,$options:t=>Rr(t),$forceUpdate:t=>t.f||(t.f=()=>oa(t.update)),$nextTick:t=>t.n||(t.n=Ie.bind(t.proxy)),$watch:t=>Uf.bind(t)}),Ir=t=>t==="_"||t==="$",wa=(t,e)=>t!==Tt&&!t.__isScriptSetup&&_t(t,e),Dc={get({_:t},e){const{ctx:s,setupState:a,data:r,props:i,accessCache:l,type:c,appContext:u}=t;if(e==="__isVue")return!0;let p;if(e[0]!=="$"){const g=l[e];if(g!==void 0)switch(g){case 1:return a[e];case 2:return r[e];case 4:return s[e];case 3:return i[e]}else{if(wa(a,e))return l[e]=1,a[e];if(r!==Tt&&_t(r,e))return l[e]=2,r[e];if((p=t.propsOptions[0])&&_t(p,e))return l[e]=3,i[e];if(s!==Tt&&_t(s,e))return l[e]=4,s[e];Ba&&(l[e]=0)}}const d=Kn[e];let f,m;if(d)return e==="$attrs"&&(ve(t,"get",e),Uo()),d(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(s!==Tt&&_t(s,e))return l[e]=4,s[e];if(m=u.config.globalProperties,_t(m,e))return m[e];Kt&&(!Ut(e)||e.indexOf("__v")!==0)&&(r!==Tt&&Ir(e[0])&&_t(r,e)?M(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===Kt&&M(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,s){const{data:a,setupState:r,ctx:i}=t;return wa(r,e)?(r[e]=s,!0):r.__isScriptSetup&&_t(r,e)?(M(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):a!==Tt&&_t(a,e)?(a[e]=s,!0):_t(t.props,e)?(M(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(M(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:s}):i[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:a,appContext:r,propsOptions:i}},l){let c;return!!s[l]||t!==Tt&&_t(t,l)||wa(e,l)||(c=i[0])&&_t(c,l)||_t(a,l)||_t(Kn,l)||_t(r.config.globalProperties,l)},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:_t(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};Dc.ownKeys=t=>(M("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function Jf(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(Kn).forEach(s=>{Object.defineProperty(e,s,{configurable:!0,enumerable:!1,get:()=>Kn[s](t),set:fe})}),e}function td(t){const{ctx:e,propsOptions:[s]}=t;s&&Object.keys(s).forEach(a=>{Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>t.props[a],set:fe})})}function ed(t){const{ctx:e,setupState:s}=t;Object.keys(dt(s)).forEach(a=>{if(!s.__isScriptSetup){if(Ir(a[0])){M(`setup() return property ${JSON.stringify(a)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>s[a],set:fe})}})}function nd(){const t=Object.create(null);return(e,s)=>{t[s]?M(`${e} property "${s}" is already defined in ${t[s]}.`):t[s]=e}}let Ba=!0;function sd(t){const e=Rr(t),s=t.proxy,a=t.ctx;Ba=!1,e.beforeCreate&&_i(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:l,watch:c,provide:u,inject:p,created:d,beforeMount:f,mounted:m,beforeUpdate:g,updated:_,activated:v,deactivated:y,beforeDestroy:C,beforeUnmount:b,destroyed:$,unmounted:P,render:D,renderTracked:V,renderTriggered:R,errorCaptured:U,serverPrefetch:Z,expose:nt,inheritAttrs:ct,components:z,directives:kt,filters:Mt}=e,xt=nd();{const[K]=t.propsOptions;if(K)for(const rt in K)xt("Props",rt)}if(p&&od(p,a,xt,t.appContext.config.unwrapInjectedRef),l)for(const K in l){const rt=l[K];ut(rt)?(Object.defineProperty(a,K,{value:rt.bind(s),configurable:!0,enumerable:!0,writable:!0}),xt("Methods",K)):M(`Method "${K}" has type "${typeof rt}" in the component definition. Did you reference the function correctly?`)}if(r){ut(r)||M("The data option must be a function. Plain object usage is no longer supported.");const K=r.call(s,s);if(Xo(K)&&M("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ct(K))M("data() should return an object.");else{t.data=Jt(K);for(const rt in K)xt("Data",rt),Ir(rt[0])||Object.defineProperty(a,rt,{configurable:!0,enumerable:!0,get:()=>K[rt],set:fe})}}if(Ba=!0,i)for(const K in i){const rt=i[K],mt=ut(rt)?rt.bind(s,s):ut(rt.get)?rt.get.bind(s,s):fe;mt===fe&&M(`Computed property "${K}" has no getter.`);const Lt=!ut(rt)&&ut(rt.set)?rt.set.bind(s):()=>{M(`Write operation failed: computed property "${K}" is readonly.`)},de=O({get:mt,set:Lt});Object.defineProperty(a,K,{enumerable:!0,configurable:!0,get:()=>de.value,set:te=>de.value=te}),xt("Computed",K)}if(c)for(const K in c)Vc(c[K],a,s,K);if(u){const K=ut(u)?u.call(s):u;Reflect.ownKeys(K).forEach(rt=>{_e(rt,K[rt])})}d&&_i(d,t,"c");function It(K,rt){it(rt)?rt.forEach(mt=>K(mt.bind(s))):rt&&K(rt.bind(s))}if(It(qf,f),It(po,m),It(zf,g),It(Nc,_),It(Wf,v),It(Hf,y),It(Xf,U),It(Yf,V),It(Gf,R),It(Ar,b),It(la,P),It(Kf,Z),it(nt))if(nt.length){const K=t.exposed||(t.exposed={});nt.forEach(rt=>{Object.defineProperty(K,rt,{get:()=>s[rt],set:mt=>s[rt]=mt})})}else t.exposed||(t.exposed={});D&&t.render===fe&&(t.render=D),ct!=null&&(t.inheritAttrs=ct),z&&(t.components=z),kt&&(t.directives=kt)}function od(t,e,s=fe,a=!1){it(t)&&(t=qa(t));for(const r in t){const i=t[r];let l;Ct(i)?"default"in i?l=Y(i.from||r,i.default,!0):l=Y(i.from||r):l=Y(i),bt(l)?a?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:c=>l.value=c}):(M(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),e[r]=l):e[r]=l,s("Inject",r)}}function _i(t,e,s){$e(it(t)?t.map(a=>a.bind(e.proxy)):t.bind(e.proxy),e,s)}function Vc(t,e,s,a){const r=a.includes(".")?Oc(s,a):()=>s[a];if(Ut(t)){const i=e[t];ut(i)?Ft(r,i):M(`Invalid watch handler specified by key "${t}"`,i)}else if(ut(t))Ft(r,t.bind(s));else if(Ct(t))if(it(t))t.forEach(i=>Vc(i,e,s,a));else{const i=ut(t.handler)?t.handler.bind(s):e[t.handler];ut(i)?Ft(r,i,t):M(`Invalid watch handler specified by key "${t.handler}"`,i)}else M(`Invalid watch option: "${a}"`,t)}function Rr(t){const e=t.type,{mixins:s,extends:a}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:l}}=t.appContext,c=i.get(e);let u;return c?u=c:!r.length&&!s&&!a?u=e:(u={},r.length&&r.forEach(p=>Vo(u,p,l,!0)),Vo(u,e,l)),Ct(e)&&i.set(e,u),u}function Vo(t,e,s,a=!1){const{mixins:r,extends:i}=e;i&&Vo(t,i,s,!0),r&&r.forEach(l=>Vo(t,l,s,!0));for(const l in e)if(a&&l==="expose")M('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=ad[l]||s&&s[l];t[l]=c?c(t[l],e[l]):e[l]}return t}const ad={data:ki,props:Nn,emits:Nn,methods:Nn,computed:Nn,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:Nn,directives:Nn,watch:id,provide:ki,inject:rd};function ki(t,e){return e?t?function(){return Vt(ut(t)?t.call(this,this):t,ut(e)?e.call(this,this):e)}:e:t}function rd(t,e){return Nn(qa(t),qa(e))}function qa(t){if(it(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function re(t,e){return t?[...new Set([].concat(t,e))]:e}function Nn(t,e){return t?Vt(Vt(Object.create(null),t),e):e}function id(t,e){if(!t)return e;if(!e)return t;const s=Vt(Object.create(null),t);for(const a in e)s[a]=re(t[a],e[a]);return s}function ld(t,e,s,a=!1){const r={},i={};Mo(i,ua,1),t.propsDefaults=Object.create(null),Wc(t,e,r,i);for(const l in t.propsOptions[0])l in r||(r[l]=void 0);Bc(e||{},r,t),s?t.props=a?r:ef(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function cd(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function ud(t,e,s,a){const{props:r,attrs:i,vnode:{patchFlag:l}}=t,c=dt(r),[u]=t.propsOptions;let p=!1;if(!cd(t)&&(a||l>0)&&!(l&16)){if(l&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(aa(t.emitsOptions,m))continue;const g=e[m];if(u)if(_t(i,m))g!==i[m]&&(i[m]=g,p=!0);else{const _=qe(m);r[_]=za(u,c,_,g,t,!1)}else g!==i[m]&&(i[m]=g,p=!0)}}}else{Wc(t,e,r,i)&&(p=!0);let d;for(const f in c)(!e||!_t(e,f)&&((d=rn(f))===f||!_t(e,d)))&&(u?s&&(s[f]!==void 0||s[d]!==void 0)&&(r[f]=za(u,c,f,void 0,t,!0)):delete r[f]);if(i!==c)for(const f in i)(!e||!_t(e,f))&&(delete i[f],p=!0)}p&&ln(t,"set","$attrs"),Bc(e||{},r,t)}function Wc(t,e,s,a){const[r,i]=t.propsOptions;let l=!1,c;if(e)for(let u in e){if($o(u))continue;const p=e[u];let d;r&&_t(r,d=qe(u))?!i||!i.includes(d)?s[d]=p:(c||(c={}))[d]=p:aa(t.emitsOptions,u)||(!(u in a)||p!==a[u])&&(a[u]=p,l=!0)}if(i){const u=dt(s),p=c||Tt;for(let d=0;d<i.length;d++){const f=i[d];s[f]=za(r,u,f,p[f],t,!_t(p,f))}}return l}function za(t,e,s,a,r,i){const l=t[s];if(l!=null){const c=_t(l,"default");if(c&&a===void 0){const u=l.default;if(l.type!==Function&&ut(u)){const{propsDefaults:p}=r;s in p?a=p[s]:(Pn(r),a=p[s]=u.call(null,e),xn())}else a=u}l[0]&&(i&&!c?a=!1:l[1]&&(a===""||a===rn(s))&&(a=!0))}return a}function Hc(t,e,s=!1){const a=e.propsCache,r=a.get(t);if(r)return r;const i=t.props,l={},c=[];let u=!1;if(!ut(t)){const d=f=>{u=!0;const[m,g]=Hc(f,e,!0);Vt(l,m),g&&c.push(...g)};!s&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!u)return Ct(t)&&a.set(t,gs),gs;if(it(i))for(let d=0;d<i.length;d++){Ut(i[d])||M("props must be strings when using array syntax.",i[d]);const f=qe(i[d]);vi(f)&&(l[f]=Tt)}else if(i){Ct(i)||M("invalid props options",i);for(const d in i){const f=qe(d);if(vi(f)){const m=i[d],g=l[f]=it(m)||ut(m)?{type:m}:Object.assign({},m);if(g){const _=wi(Boolean,g.type),v=wi(String,g.type);g[0]=_>-1,g[1]=v<0||_<v,(_>-1||_t(g,"default"))&&c.push(f)}}}}const p=[l,c];return Ct(t)&&a.set(t,p),p}function vi(t){return t[0]!=="$"?!0:(M(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Ka(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function yi(t,e){return Ka(t)===Ka(e)}function wi(t,e){return it(e)?e.findIndex(s=>yi(s,t)):ut(e)&&yi(e,t)?0:-1}function Bc(t,e,s){const a=dt(e),r=s.propsOptions[0];for(const i in r){let l=r[i];l!=null&&pd(i,a[i],l,!_t(t,i)&&!_t(t,rn(i)))}}function pd(t,e,s,a){const{type:r,required:i,validator:l}=s;if(i&&a){M('Missing required prop: "'+t+'"');return}if(!(e==null&&!s.required)){if(r!=null&&r!==!0){let c=!1;const u=it(r)?r:[r],p=[];for(let d=0;d<u.length&&!c;d++){const{valid:f,expectedType:m}=dd(e,u[d]);p.push(m||""),c=f}if(!c){M(md(t,e,p));return}}l&&!l(e)&&M('Invalid prop: custom validator check failed for prop "'+t+'".')}}const fd=On("String,Number,Boolean,Function,Symbol,BigInt");function dd(t,e){let s;const a=Ka(e);if(fd(a)){const r=typeof t;s=r===a.toLowerCase(),!s&&r==="object"&&(s=t instanceof e)}else a==="Object"?s=Ct(t):a==="Array"?s=it(t):a==="null"?s=t===null:s=t instanceof e;return{valid:s,expectedType:a}}function md(t,e,s){let a=`Invalid prop: type check failed for prop "${t}". Expected ${s.map(Zn).join(" | ")}`;const r=s[0],i=kr(e),l=xi(e,r),c=xi(e,i);return s.length===1&&bi(r)&&!hd(r,i)&&(a+=` with value ${l}`),a+=`, got ${i} `,bi(i)&&(a+=`with value ${c}.`),a}function xi(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function bi(t){return["string","number","boolean"].some(s=>t.toLowerCase()===s)}function hd(...t){return t.some(e=>e.toLowerCase()==="boolean")}const qc=t=>t[0]==="_"||t==="$stable",Nr=t=>it(t)?t.map(Te):[Te(t)],gd=(t,e,s)=>{if(e._n)return e;const a=F((...r)=>(qt&&M(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Nr(e(...r))),s);return a._c=!1,a},zc=(t,e,s)=>{const a=t._ctx;for(const r in t){if(qc(r))continue;const i=t[r];if(ut(i))e[r]=gd(r,i,a);else if(i!=null){M(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const l=Nr(i);e[r]=()=>l}}},Kc=(t,e)=>{uo(t.vnode)||M("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Nr(e);t.slots.default=()=>s},_d=(t,e)=>{if(t.vnode.shapeFlag&32){const s=e._;s?(t.slots=dt(e),Mo(e,"_",s)):zc(e,t.slots={})}else t.slots={},e&&Kc(t,e);Mo(t.slots,ua,1)},kd=(t,e,s)=>{const{vnode:a,slots:r}=t;let i=!0,l=Tt;if(a.shapeFlag&32){const c=e._;c?wn?Vt(r,e):s&&c===1?i=!1:(Vt(r,e),!s&&c===1&&delete r._):(i=!e.$stable,zc(e,r)),l=e}else e&&(Kc(t,e),l={default:1});if(i)for(const c in r)!qc(c)&&!(c in l)&&delete r[c]};function Gc(){return{app:null,config:{isNativeTag:Gl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vd=0;function yd(t,e){return function(a,r=null){ut(a)||(a=Object.assign({},a)),r!=null&&!Ct(r)&&(M("root props passed to app.mount() must be an object."),r=null);const i=Gc(),l=new Set;let c=!1;const u=i.app={_uid:vd++,_component:a,_props:r,_container:null,_context:i,_instance:null,version:Ei,get config(){return i.config},set config(p){M("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return l.has(p)?M("Plugin has already been applied to target app."):p&&ut(p.install)?(l.add(p),p.install(u,...d)):ut(p)?(l.add(p),p(u,...d)):M('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return i.mixins.includes(p)?M("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):i.mixins.push(p),u},component(p,d){return Xa(p,i.config),d?(i.components[p]&&M(`Component "${p}" has already been registered in target app.`),i.components[p]=d,u):i.components[p]},directive(p,d){return Fc(p),d?(i.directives[p]&&M(`Directive "${p}" has already been registered in target app.`),i.directives[p]=d,u):i.directives[p]},mount(p,d,f){if(c)M("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&M("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const m=A(a,r);return m.appContext=i,i.reload=()=>{t(Re(m),p,f)},d&&e?e(m,p):t(m,p,f),c=!0,u._container=p,p.__vue_app__=u,u._instance=m.component,Sf(u,Ei),pa(m.component)||m.component.proxy}},unmount(){c?(t(null,u._container),u._instance=null,$f(u),delete u._container.__vue_app__):M("Cannot unmount an app that is not mounted.")},provide(p,d){return p in i.provides&&M(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),i.provides[p]=d,u}};return u}}function Ga(t,e,s,a,r=!1){if(it(t)){t.forEach((m,g)=>Ga(m,e&&(it(e)?e[g]:e),s,a,r));return}if(ks(a)&&!r)return;const i=a.shapeFlag&4?pa(a.component)||a.component.proxy:a.el,l=r?null:i,{i:c,r:u}=t;if(!c){M("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=e&&e.r,d=c.refs===Tt?c.refs={}:c.refs,f=c.setupState;if(p!=null&&p!==u&&(Ut(p)?(d[p]=null,_t(f,p)&&(f[p]=null)):bt(p)&&(p.value=null)),ut(u))on(u,c,12,[l,d]);else{const m=Ut(u),g=bt(u);if(m||g){const _=()=>{if(t.f){const v=m?_t(f,u)?f[u]:d[u]:u.value;r?it(v)&&gr(v,i):it(v)?v.includes(i)||v.push(i):m?(d[u]=[i],_t(f,u)&&(f[u]=d[u])):(u.value=[i],t.k&&(d[t.k]=u.value))}else m?(d[u]=l,_t(f,u)&&(f[u]=l)):g?(u.value=l,t.k&&(d[t.k]=l)):M("Invalid template ref type:",u,`(${typeof u})`)};l?(_.id=-1,Qt(_,s)):_()}else M("Invalid template ref type:",u,`(${typeof u})`)}}let Es,vn;function Ze(t,e){t.appContext.config.performance&&Wo()&&vn.mark(`vue-${e}-${t.uid}`),Pf(t,e,Wo()?vn.now():Date.now())}function Qe(t,e){if(t.appContext.config.performance&&Wo()){const s=`vue-${e}-${t.uid}`,a=s+":end";vn.mark(a),vn.measure(`<${fa(t,t.type)}> ${e}`,s,a),vn.clearMarks(s),vn.clearMarks(a)}Lf(t,e,Wo()?vn.now():Date.now())}function Wo(){return Es!==void 0||(typeof window<"u"&&window.performance?(Es=!0,vn=window.performance):Es=!1),Es}function wd(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Qt=Ff;function xd(t){return bd(t)}function bd(t,e){wd();const s=Ql();s.__VUE__=!0,Sc(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:a,remove:r,patchProp:i,createElement:l,createText:c,createComment:u,setText:p,setElementText:d,parentNode:f,nextSibling:m,setScopeId:g=fe,insertStaticContent:_}=t,v=(h,k,x,T=null,L=null,j=null,B=!1,N=null,W=wn?!1:!!k.dynamicChildren)=>{if(h===k)return;h&&!Fn(h,k)&&(T=X(h),pe(h,L,j,!0),h=null),k.patchFlag===-2&&(W=!1,k.dynamicChildren=null);const{type:I,ref:J,shapeFlag:Q}=k;switch(I){case mo:y(h,k,x,T);break;case Yt:C(h,k,x,T);break;case Ws:h==null?b(k,x,T,B):$(h,k,x,B);break;case $t:kt(h,k,x,T,L,j,B,N,W);break;default:Q&1?V(h,k,x,T,L,j,B,N,W):Q&6?Mt(h,k,x,T,L,j,B,N,W):Q&64||Q&128?I.process(h,k,x,T,L,j,B,N,W,yt):M("Invalid VNode type:",I,`(${typeof I})`)}J!=null&&L&&Ga(J,h&&h.ref,j,k||h,!k)},y=(h,k,x,T)=>{if(h==null)a(k.el=c(k.children),x,T);else{const L=k.el=h.el;k.children!==h.children&&p(L,k.children)}},C=(h,k,x,T)=>{h==null?a(k.el=u(k.children||""),x,T):k.el=h.el},b=(h,k,x,T)=>{[h.el,h.anchor]=_(h.children,k,x,T,h.el,h.anchor)},$=(h,k,x,T)=>{if(k.children!==h.children){const L=m(h.anchor);D(h),[k.el,k.anchor]=_(k.children,x,L,T)}else k.el=h.el,k.anchor=h.anchor},P=({el:h,anchor:k},x,T)=>{let L;for(;h&&h!==k;)L=m(h),a(h,x,T),h=L;a(k,x,T)},D=({el:h,anchor:k})=>{let x;for(;h&&h!==k;)x=m(h),r(h),h=x;r(k)},V=(h,k,x,T,L,j,B,N,W)=>{B=B||k.type==="svg",h==null?R(k,x,T,L,j,B,N,W):nt(h,k,L,j,B,N,W)},R=(h,k,x,T,L,j,B,N)=>{let W,I;const{type:J,props:Q,shapeFlag:at,transition:ft,dirs:vt}=h;if(W=h.el=l(h.type,j,Q&&Q.is,Q),at&8?d(W,h.children):at&16&&Z(h.children,W,null,T,L,j&&J!=="foreignObject",B,N),vt&&Tn(h,null,T,"created"),Q){for(const Ot in Q)Ot!=="value"&&!$o(Ot)&&i(W,Ot,null,Q[Ot],j,h.children,T,L,H);"value"in Q&&i(W,"value",null,Q.value),(I=Q.onVnodeBeforeMount)&&be(I,T,h)}U(W,h,h.scopeId,B,T),Object.defineProperty(W,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(W,"__vueParentComponent",{value:T,enumerable:!1}),vt&&Tn(h,null,T,"beforeMount");const Rt=(!L||L&&!L.pendingBranch)&&ft&&!ft.persisted;Rt&&ft.beforeEnter(W),a(W,k,x),((I=Q&&Q.onVnodeMounted)||Rt||vt)&&Qt(()=>{I&&be(I,T,h),Rt&&ft.enter(W),vt&&Tn(h,null,T,"mounted")},L)},U=(h,k,x,T,L)=>{if(x&&g(h,x),T)for(let j=0;j<T.length;j++)g(h,T[j]);if(L){let j=L.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=Pc(j.children)||j),k===j){const B=L.vnode;U(h,B,B.scopeId,B.slotScopeIds,L.parent)}}},Z=(h,k,x,T,L,j,B,N,W=0)=>{for(let I=W;I<h.length;I++){const J=h[I]=N?gn(h[I]):Te(h[I]);v(null,J,k,x,T,L,j,B,N)}},nt=(h,k,x,T,L,j,B)=>{const N=k.el=h.el;let{patchFlag:W,dynamicChildren:I,dirs:J}=k;W|=h.patchFlag&16;const Q=h.props||Tt,at=k.props||Tt;let ft;x&&An(x,!1),(ft=at.onVnodeBeforeUpdate)&&be(ft,x,k,h),J&&Tn(k,h,x,"beforeUpdate"),x&&An(x,!0),wn&&(W=0,B=!1,I=null);const vt=L&&k.type!=="foreignObject";if(I?(ct(h.dynamicChildren,I,N,x,T,vt,j),x&&x.type.__hmrId&&Vs(h,k)):B||mt(h,k,N,null,x,T,vt,j,!1),W>0){if(W&16)z(N,k,Q,at,x,T,L);else if(W&2&&Q.class!==at.class&&i(N,"class",null,at.class,L),W&4&&i(N,"style",Q.style,at.style,L),W&8){const Rt=k.dynamicProps;for(let Ot=0;Ot<Rt.length;Ot++){const Ht=Rt[Ot],Pe=Q[Ht],rs=at[Ht];(rs!==Pe||Ht==="value")&&i(N,Ht,Pe,rs,L,h.children,x,T,H)}}W&1&&h.children!==k.children&&d(N,k.children)}else!B&&I==null&&z(N,k,Q,at,x,T,L);((ft=at.onVnodeUpdated)||J)&&Qt(()=>{ft&&be(ft,x,k,h),J&&Tn(k,h,x,"updated")},T)},ct=(h,k,x,T,L,j,B)=>{for(let N=0;N<k.length;N++){const W=h[N],I=k[N],J=W.el&&(W.type===$t||!Fn(W,I)||W.shapeFlag&70)?f(W.el):x;v(W,I,J,null,T,L,j,B,!0)}},z=(h,k,x,T,L,j,B)=>{if(x!==T){if(x!==Tt)for(const N in x)!$o(N)&&!(N in T)&&i(h,N,x[N],null,B,k.children,L,j,H);for(const N in T){if($o(N))continue;const W=T[N],I=x[N];W!==I&&N!=="value"&&i(h,N,I,W,B,k.children,L,j,H)}"value"in T&&i(h,"value",x.value,T.value)}},kt=(h,k,x,T,L,j,B,N,W)=>{const I=k.el=h?h.el:c(""),J=k.anchor=h?h.anchor:c("");let{patchFlag:Q,dynamicChildren:at,slotScopeIds:ft}=k;(wn||Q&2048)&&(Q=0,W=!1,at=null),ft&&(N=N?N.concat(ft):ft),h==null?(a(I,x,T),a(J,x,T),Z(k.children,x,J,L,j,B,N,W)):Q>0&&Q&64&&at&&h.dynamicChildren?(ct(h.dynamicChildren,at,x,L,j,B,N),L&&L.type.__hmrId?Vs(h,k):(k.key!=null||L&&k===L.subTree)&&Vs(h,k,!0)):mt(h,k,x,J,L,j,B,N,W)},Mt=(h,k,x,T,L,j,B,N,W)=>{k.slotScopeIds=N,h==null?k.shapeFlag&512?L.ctx.activate(k,x,T,B,W):xt(k,x,T,L,j,B,W):It(h,k,W)},xt=(h,k,x,T,L,j,B)=>{const N=h.component=Md(h,T,L);if(N.type.__hmrId&&yf(N),Co(h),Ze(N,"mount"),uo(h)&&(N.ctx.renderer=yt),Ze(N,"init"),Rd(N),Qe(N,"init"),N.asyncDep){if(L&&L.registerDep(N,K),!h.el){const W=N.subTree=A(Yt);C(null,W,k,x)}return}K(N,h,k,x,L,j,B),Eo(),Qe(N,"mount")},It=(h,k,x)=>{const T=k.component=h.component;if(Rf(h,k,x))if(T.asyncDep&&!T.asyncResolved){Co(k),rt(T,k,x),Eo();return}else T.next=k,kf(T.update),T.update();else k.el=h.el,T.vnode=k},K=(h,k,x,T,L,j,B)=>{const N=()=>{if(h.isMounted){let{next:J,bu:Q,u:at,parent:ft,vnode:vt}=h,Rt=J,Ot;Co(J||h.vnode),An(h,!1),J?(J.el=vt.el,rt(h,J,B)):J=vt,Q&&kn(Q),(Ot=J.props&&J.props.onVnodeBeforeUpdate)&&be(Ot,ft,J,vt),An(h,!0),Ze(h,"render");const Ht=_a(h);Qe(h,"render");const Pe=h.subTree;h.subTree=Ht,Ze(h,"patch"),v(Pe,Ht,f(Pe.el),X(Pe),h,L,j),Qe(h,"patch"),J.el=Ht.el,Rt===null&&Nf(h,Ht.el),at&&Qt(at,L),(Ot=J.props&&J.props.onVnodeUpdated)&&Qt(()=>be(Ot,ft,J,vt),L),$c(h),Eo()}else{let J;const{el:Q,props:at}=k,{bm:ft,m:vt,parent:Rt}=h,Ot=ks(k);if(An(h,!1),ft&&kn(ft),!Ot&&(J=at&&at.onVnodeBeforeMount)&&be(J,Rt,k),An(h,!0),Q&&lt){const Ht=()=>{Ze(h,"render"),h.subTree=_a(h),Qe(h,"render"),Ze(h,"hydrate"),lt(Q,h.subTree,h,L,null),Qe(h,"hydrate")};Ot?k.type.__asyncLoader().then(()=>!h.isUnmounted&&Ht()):Ht()}else{Ze(h,"render");const Ht=h.subTree=_a(h);Qe(h,"render"),Ze(h,"patch"),v(null,Ht,x,T,h,L,j),Qe(h,"patch"),k.el=Ht.el}if(vt&&Qt(vt,L),!Ot&&(J=at&&at.onVnodeMounted)){const Ht=k;Qt(()=>be(J,Rt,Ht),L)}(k.shapeFlag&256||Rt&&ks(Rt.vnode)&&Rt.vnode.shapeFlag&256)&&h.a&&Qt(h.a,L),h.isMounted=!0,Da(h),k=x=T=null}},W=h.effect=new wr(N,()=>oa(I),h.scope),I=h.update=()=>W.run();I.id=h.uid,An(h,!0),W.onTrack=h.rtc?J=>kn(h.rtc,J):void 0,W.onTrigger=h.rtg?J=>kn(h.rtg,J):void 0,I.ownerInstance=h,I()},rt=(h,k,x)=>{k.component=h;const T=h.vnode.props;h.vnode=k,h.next=null,ud(h,k.props,T,x),kd(h,k.children,x),ns(),pi(),ss()},mt=(h,k,x,T,L,j,B,N,W=!1)=>{const I=h&&h.children,J=h?h.shapeFlag:0,Q=k.children,{patchFlag:at,shapeFlag:ft}=k;if(at>0){if(at&128){de(I,Q,x,T,L,j,B,N,W);return}else if(at&256){Lt(I,Q,x,T,L,j,B,N,W);return}}ft&8?(J&16&&H(I,L,j),Q!==I&&d(x,Q)):J&16?ft&16?de(I,Q,x,T,L,j,B,N,W):H(I,L,j,!0):(J&8&&d(x,""),ft&16&&Z(Q,x,T,L,j,B,N,W))},Lt=(h,k,x,T,L,j,B,N,W)=>{h=h||gs,k=k||gs;const I=h.length,J=k.length,Q=Math.min(I,J);let at;for(at=0;at<Q;at++){const ft=k[at]=W?gn(k[at]):Te(k[at]);v(h[at],ft,x,null,L,j,B,N,W)}I>J?H(h,L,j,!0,!1,Q):Z(k,x,T,L,j,B,N,W,Q)},de=(h,k,x,T,L,j,B,N,W)=>{let I=0;const J=k.length;let Q=h.length-1,at=J-1;for(;I<=Q&&I<=at;){const ft=h[I],vt=k[I]=W?gn(k[I]):Te(k[I]);if(Fn(ft,vt))v(ft,vt,x,null,L,j,B,N,W);else break;I++}for(;I<=Q&&I<=at;){const ft=h[Q],vt=k[at]=W?gn(k[at]):Te(k[at]);if(Fn(ft,vt))v(ft,vt,x,null,L,j,B,N,W);else break;Q--,at--}if(I>Q){if(I<=at){const ft=at+1,vt=ft<J?k[ft].el:T;for(;I<=at;)v(null,k[I]=W?gn(k[I]):Te(k[I]),x,vt,L,j,B,N,W),I++}}else if(I>at)for(;I<=Q;)pe(h[I],L,j,!0),I++;else{const ft=I,vt=I,Rt=new Map;for(I=vt;I<=at;I++){const ae=k[I]=W?gn(k[I]):Te(k[I]);ae.key!=null&&(Rt.has(ae.key)&&M("Duplicate keys found during update:",JSON.stringify(ae.key),"Make sure keys are unique."),Rt.set(ae.key,I))}let Ot,Ht=0;const Pe=at-vt+1;let rs=!1,ti=0;const Cs=new Array(Pe);for(I=0;I<Pe;I++)Cs[I]=0;for(I=ft;I<=Q;I++){const ae=h[I];if(Ht>=Pe){pe(ae,L,j,!0);continue}let je;if(ae.key!=null)je=Rt.get(ae.key);else for(Ot=vt;Ot<=at;Ot++)if(Cs[Ot-vt]===0&&Fn(ae,k[Ot])){je=Ot;break}je===void 0?pe(ae,L,j,!0):(Cs[je-vt]=I+1,je>=ti?ti=je:rs=!0,v(ae,k[je],x,null,L,j,B,N,W),Ht++)}const ei=rs?Sd(Cs):gs;for(Ot=ei.length-1,I=Pe-1;I>=0;I--){const ae=vt+I,je=k[ae],ni=ae+1<J?k[ae+1].el:T;Cs[I]===0?v(null,je,x,ni,L,j,B,N,W):rs&&(Ot<0||I!==ei[Ot]?te(je,x,ni,2):Ot--)}}},te=(h,k,x,T,L=null)=>{const{el:j,type:B,transition:N,children:W,shapeFlag:I}=h;if(I&6){te(h.component.subTree,k,x,T);return}if(I&128){h.suspense.move(k,x,T);return}if(I&64){B.move(h,k,x,yt);return}if(B===$t){a(j,k,x);for(let Q=0;Q<W.length;Q++)te(W[Q],k,x,T);a(h.anchor,k,x);return}if(B===Ws){P(h,k,x);return}if(T!==2&&I&1&&N)if(T===0)N.beforeEnter(j),a(j,k,x),Qt(()=>N.enter(j),L);else{const{leave:Q,delayLeave:at,afterLeave:ft}=N,vt=()=>a(j,k,x),Rt=()=>{Q(j,()=>{vt(),ft&&ft()})};at?at(j,vt,Rt):Rt()}else a(j,k,x)},pe=(h,k,x,T=!1,L=!1)=>{const{type:j,props:B,ref:N,children:W,dynamicChildren:I,shapeFlag:J,patchFlag:Q,dirs:at}=h;if(N!=null&&Ga(N,null,x,h,!0),J&256){k.ctx.deactivate(h);return}const ft=J&1&&at,vt=!ks(h);let Rt;if(vt&&(Rt=B&&B.onVnodeBeforeUnmount)&&be(Rt,k,h),J&6)G(h.component,x,T);else{if(J&128){h.suspense.unmount(x,T);return}ft&&Tn(h,null,k,"beforeUnmount"),J&64?h.type.remove(h,k,x,L,yt,T):I&&(j!==$t||Q>0&&Q&64)?H(I,k,x,!1,!0):(j===$t&&Q&384||!L&&J&16)&&H(W,k,x),T&&un(h)}(vt&&(Rt=B&&B.onVnodeUnmounted)||ft)&&Qt(()=>{Rt&&be(Rt,k,h),ft&&Tn(h,null,k,"unmounted")},x)},un=h=>{const{type:k,el:x,anchor:T,transition:L}=h;if(k===$t){h.patchFlag>0&&h.patchFlag&2048&&L&&!L.persisted?h.children.forEach(B=>{B.type===Yt?r(B.el):un(B)}):E(x,T);return}if(k===Ws){D(h);return}const j=()=>{r(x),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(h.shapeFlag&1&&L&&!L.persisted){const{leave:B,delayLeave:N}=L,W=()=>B(x,j);N?N(h.el,j,W):W()}else j()},E=(h,k)=>{let x;for(;h!==k;)x=m(h),r(h),h=x;r(k)},G=(h,k,x)=>{h.type.__hmrId&&wf(h);const{bum:T,scope:L,update:j,subTree:B,um:N}=h;T&&kn(T),L.stop(),j&&(j.active=!1,pe(B,h,k,x)),N&&Qt(N,k),Qt(()=>{h.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve()),Ef(h)},H=(h,k,x,T=!1,L=!1,j=0)=>{for(let B=j;B<h.length;B++)pe(h[B],k,x,T,L)},X=h=>h.shapeFlag&6?X(h.component.subTree):h.shapeFlag&128?h.suspense.next():m(h.anchor||h.el),gt=(h,k,x)=>{h==null?k._vnode&&pe(k._vnode,null,null,!0):v(k._vnode||null,h,k,null,null,null,x),pi(),wc(),k._vnode=h},yt={p:v,um:pe,m:te,r:un,mt:xt,mc:Z,pc:mt,pbc:ct,n:X,o:t};let pt,lt;return e&&([pt,lt]=e(yt)),{render:gt,hydrate:pt,createApp:yd(gt,pt)}}function An({effect:t,update:e},s){t.allowRecurse=e.allowRecurse=s}function Vs(t,e,s=!1){const a=t.children,r=e.children;if(it(a)&&it(r))for(let i=0;i<a.length;i++){const l=a[i];let c=r[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[i]=gn(r[i]),c.el=l.el),s||Vs(l,c)),c.type===mo&&(c.el=l.el),c.type===Yt&&!c.el&&(c.el=l.el)}}function Sd(t){const e=t.slice(),s=[0];let a,r,i,l,c;const u=t.length;for(a=0;a<u;a++){const p=t[a];if(p!==0){if(r=s[s.length-1],t[r]<p){e[a]=r,s.push(a);continue}for(i=0,l=s.length-1;i<l;)c=i+l>>1,t[s[c]]<p?i=c+1:l=c;p<t[s[i]]&&(i>0&&(e[a]=s[i-1]),s[i]=a)}}for(i=s.length,l=s[i-1];i-- >0;)s[i]=l,l=e[l];return s}const $d=t=>t.__isTeleport,vs=t=>t&&(t.disabled||t.disabled===""),Si=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ya=(t,e)=>{const s=t&&t.to;if(Ut(s))if(e){const a=e(s);return a||M(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),a}else return M("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!vs(t)&&M(`Invalid Teleport target: ${s}`),s},Cd={__isTeleport:!0,process(t,e,s,a,r,i,l,c,u,p){const{mc:d,pc:f,pbc:m,o:{insert:g,querySelector:_,createText:v,createComment:y}}=p,C=vs(e.props);let{shapeFlag:b,children:$,dynamicChildren:P}=e;if(wn&&(u=!1,P=null),t==null){const D=e.el=y("teleport start"),V=e.anchor=y("teleport end");g(D,s,a),g(V,s,a);const R=e.target=Ya(e.props,_),U=e.targetAnchor=v("");R?(g(U,R),l=l||Si(R)):C||M("Invalid Teleport target on mount:",R,`(${typeof R})`);const Z=(nt,ct)=>{b&16&&d($,nt,ct,r,i,l,c,u)};C?Z(s,V):R&&Z(R,U)}else{e.el=t.el;const D=e.anchor=t.anchor,V=e.target=t.target,R=e.targetAnchor=t.targetAnchor,U=vs(t.props),Z=U?s:V,nt=U?D:R;if(l=l||Si(V),P?(m(t.dynamicChildren,P,Z,r,i,l,c),Vs(t,e,!0)):u||f(t,e,Z,nt,r,i,l,c,!1),C)U||xo(e,s,D,p,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ct=e.target=Ya(e.props,_);ct?xo(e,ct,null,p,0):M("Invalid Teleport target on update:",V,`(${typeof V})`)}else U&&xo(e,V,R,p,1)}Yc(e)},remove(t,e,s,a,{um:r,o:{remove:i}},l){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:f,props:m}=t;if(f&&i(d),(l||!vs(m))&&(i(p),c&16))for(let g=0;g<u.length;g++){const _=u[g];r(_,e,s,!0,!!_.dynamicChildren)}},move:xo,hydrate:Ed};function xo(t,e,s,{o:{insert:a},m:r},i=2){i===0&&a(t.targetAnchor,e,s);const{el:l,anchor:c,shapeFlag:u,children:p,props:d}=t,f=i===2;if(f&&a(l,e,s),(!f||vs(d))&&u&16)for(let m=0;m<p.length;m++)r(p[m],e,s,2);f&&a(c,e,s)}function Ed(t,e,s,a,r,i,{o:{nextSibling:l,parentNode:c,querySelector:u}},p){const d=e.target=Ya(e.props,u);if(d){const f=d._lpa||d.firstChild;if(e.shapeFlag&16)if(vs(e.props))e.anchor=p(l(t),e,c(t),s,a,r,i),e.targetAnchor=f;else{e.anchor=l(t);let m=f;for(;m;)if(m=l(m),m&&m.nodeType===8&&m.data==="teleport anchor"){e.targetAnchor=m,d._lpa=e.targetAnchor&&l(e.targetAnchor);break}p(f,e,d,s,a,r,i)}Yc(e)}return e.anchor&&l(e.anchor)}const zS=Cd;function Yc(t){const e=t.ctx;if(e&&e.ut){let s=t.children[0].el;for(;s!==t.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",e.uid),s=s.nextSibling;e.ut()}}const $t=Symbol("Fragment"),mo=Symbol("Text"),Yt=Symbol("Comment"),Ws=Symbol("Static"),Hs=[];let Ae=null;function S(t=!1){Hs.push(Ae=t?null:[])}function Pd(){Hs.pop(),Ae=Hs[Hs.length-1]||null}let Js=1;function $i(t){Js+=t}function Xc(t){return t.dynamicChildren=Js>0?Ae||gs:null,Pd(),Js>0&&Ae&&Ae.push(t),t}function q(t,e,s,a,r,i){return Xc(n(t,e,s,a,r,i,!0))}function st(t,e,s,a,r){return Xc(A(t,e,s,a,r,!0))}function Jn(t){return t?t.__v_isVNode===!0:!1}function Fn(t,e){return e.shapeFlag&6&&ps.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const Ld=(...t)=>Od(...t),ua="__vInternal",Zc=({key:t})=>t??null,Po=({ref:t,ref_key:e,ref_for:s})=>t!=null?Ut(t)||bt(t)||ut(t)?{i:Kt,r:t,k:e,f:!!s}:t:null;function n(t,e=null,s=null,a=0,r=null,i=t===$t?0:1,l=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zc(e),ref:e&&Po(e),scopeId:ra,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Kt};return c?(Fr(u,s),i&128&&t.normalize(u)):s&&(u.shapeFlag|=Ut(s)?8:16),u.key!==u.key&&M("VNode created with invalid key (NaN). VNode type:",u.type),Js>0&&!l&&Ae&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Ae.push(u),u}const A=Ld;function Od(t,e=null,s=null,a=0,r=null,i=!1){if((!t||t===Uc)&&(t||M(`Invalid vnode type when creating vnode: ${t}.`),t=Yt),Jn(t)){const c=Re(t,e,!0);return s&&Fr(c,s),Js>0&&!i&&Ae&&(c.shapeFlag&6?Ae[Ae.indexOf(t)]=c:Ae.push(c)),c.patchFlag|=-2,c}if(nu(t)&&(t=t.__vccOpts),e){e=Pt(e);let{class:c,style:u}=e;c&&!Ut(c)&&(e.class=jt(c)),Ct(u)&&(No(u)&&!it(u)&&(u=Vt({},u)),e.style=ne(u))}const l=Ut(t)?1:Lc(t)?128:$d(t)?64:Ct(t)?4:ut(t)?2:0;return l&4&&No(t)&&(t=dt(t),M("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),n(t,e,s,a,r,l,i,!0)}function Pt(t){return t?No(t)||ua in t?Vt({},t):t:null}function Re(t,e,s=!1){const{props:a,ref:r,patchFlag:i,children:l}=t,c=e?Gt(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zc(c),ref:e&&e.ref?s&&r?it(r)?r.concat(Po(e)):[r,Po(e)]:Po(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&it(l)?l.map(Qc):l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$t?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Re(t.ssContent),ssFallback:t.ssFallback&&Re(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Qc(t){const e=Re(t);return it(t.children)&&(e.children=t.children.map(Qc)),e}function o(t=" ",e=0){return A(mo,null,t,e)}function KS(t,e){const s=A(Ws,null,t);return s.staticCount=e,s}function ht(t="",e=!1){return e?(S(),st(Yt,null,t)):A(Yt,null,t)}function Te(t){return t==null||typeof t=="boolean"?A(Yt):it(t)?A($t,null,t.slice()):typeof t=="object"?gn(t):A(mo,null,String(t))}function gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Re(t)}function Fr(t,e){let s=0;const{shapeFlag:a}=t;if(e==null)e=null;else if(it(e))s=16;else if(typeof e=="object")if(a&65){const r=e.default;r&&(r._c&&(r._d=!1),Fr(t,r()),r._c&&(r._d=!0));return}else{s=32;const r=e._;!r&&!(ua in e)?e._ctx=Kt:r===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ut(e)?(e={default:e,_ctx:Kt},s=32):(e=String(e),a&64?(s=16,e=[o(e)]):s=8);t.children=e,t.shapeFlag|=s}function Gt(...t){const e={};for(let s=0;s<t.length;s++){const a=t[s];for(const r in a)if(r==="class")e.class!==a.class&&(e.class=jt([e.class,a.class]));else if(r==="style")e.style=ne([e.style,a.style]);else if(lo(r)){const i=e[r],l=a[r];l&&i!==l&&!(it(i)&&i.includes(l))&&(e[r]=i?[].concat(i,l):l)}else r!==""&&(e[r]=a[r])}return e}function be(t,e,s,a=null){$e(t,e,7,[s,a])}const Td=Gc();let Ad=0;function Md(t,e,s){const a=t.type,r=(e?e.appContext:t.appContext)||Td,i={uid:Ad++,vnode:t,type:a,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hc(a,r),emitsOptions:Ec(a,r),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:a.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=Jf(i),i.root=e?e.root:i,i.emit=Tf.bind(null,i),t.ce&&t.ce(i),i}let qt=null;const Ye=()=>qt||Kt,Pn=t=>{qt=t,t.scope.on()},xn=()=>{qt&&qt.scope.off(),qt=null},Id=On("slot,component");function Xa(t,e){const s=e.isNativeTag||Gl;(Id(t)||s(t))&&M("Do not use built-in or reserved HTML elements as component id: "+t)}function Jc(t){return t.vnode.shapeFlag&4}let to=!1;function Rd(t,e=!1){to=e;const{props:s,children:a}=t.vnode,r=Jc(t);ld(t,s,r,e),_d(t,a);const i=r?Nd(t,e):void 0;return to=!1,i}function Nd(t,e){var s;const a=t.type;{if(a.name&&Xa(a.name,t.appContext.config),a.components){const i=Object.keys(a.components);for(let l=0;l<i.length;l++)Xa(i[l],t.appContext.config)}if(a.directives){const i=Object.keys(a.directives);for(let l=0;l<i.length;l++)Fc(i[l])}a.compilerOptions&&Fd()&&M('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=br(new Proxy(t.ctx,Dc)),td(t);const{setup:r}=a;if(r){const i=t.setupContext=r.length>1?eu(t):null;Pn(t),ns();const l=on(r,t,0,[ms(t.props),i]);if(ss(),xn(),Xo(l)){if(l.then(xn,xn),e)return l.then(c=>{Ci(t,c,e)}).catch(c=>{sa(c,t,0)});if(t.asyncDep=l,!t.suspense){const c=(s=a.name)!==null&&s!==void 0?s:"Anonymous";M(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Ci(t,l,e)}else tu(t,e)}function Ci(t,e,s){ut(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ct(e)?(Jn(e)&&M("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=mc(e),ed(t)):e!==void 0&&M(`setup() should return an object. Received: ${e===null?"null":typeof e}`),tu(t,s)}let Za;const Fd=()=>!Za;function tu(t,e,s){const a=t.type;if(!t.render){if(!e&&Za&&!a.render){const r=a.template||Rr(t).template;if(r){Ze(t,"compile");const{isCustomElement:i,compilerOptions:l}=t.appContext.config,{delimiters:c,compilerOptions:u}=a,p=Vt(Vt({isCustomElement:i,delimiters:c},l),u);a.render=Za(r,p),Qe(t,"compile")}}t.render=a.render||fe}Pn(t),ns(),sd(t),ss(),xn(),!a.render&&t.render===fe&&!e&&(a.template?M('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):M("Component is missing template or render function."))}function Ud(t){return new Proxy(t.attrs,{get(e,s){return Uo(),ve(t,"get","$attrs"),e[s]},set(){return M("setupContext.attrs is readonly."),!1},deleteProperty(){return M("setupContext.attrs is readonly."),!1}})}function eu(t){const e=a=>{t.exposed&&M("expose() should be called only once per setup()."),t.exposed=a||{}};let s;return Object.freeze({get attrs(){return s||(s=Ud(t))},get slots(){return ms(t.slots)},get emit(){return(a,...r)=>t.emit(a,...r)},expose:e})}function pa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(mc(br(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in Kn)return Kn[s](t)},has(e,s){return s in e||s in Kn}}))}const jd=/(?:^|[-_])(\w)/g,Dd=t=>t.replace(jd,e=>e.toUpperCase()).replace(/[-_]/g,"");function eo(t,e=!0){return ut(t)?t.displayName||t.name:t.name||e&&t.__name}function fa(t,e,s=!1){let a=eo(e);if(!a&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(a=r[1])}if(!a&&t&&t.parent){const r=i=>{for(const l in i)if(i[l]===e)return l};a=r(t.components||t.parent.type.components)||r(t.appContext.components)}return a?Dd(a):s?"App":"Anonymous"}function nu(t){return ut(t)&&"__vccOpts"in t}const O=(t,e)=>uf(t,e,to);function GS(){return su().slots}function YS(){return su().attrs}function su(){const t=Ye();return t||M("useContext() called without active instance."),t.setupContext||(t.setupContext=eu(t))}function XS(t){const e=Ye();e||M("withAsyncContext called without active current instance. This is likely a bug.");let s=t();return xn(),Xo(s)&&(s=s.catch(a=>{throw Pn(e),a})),[s,()=>Pn(e)]}function Ss(t,e,s){const a=arguments.length;return a===2?Ct(e)&&!it(e)?Jn(e)?A(t,null,[e]):A(t,e):A(t,null,e):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&Jn(s)&&(s=[s]),A(t,e,s))}const Vd=Symbol("ssrContext"),Wd=()=>{{const t=Y(Vd);return t||M("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function xa(t){return!!(t&&t.__v_isShallow)}function Hd(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},s={style:"color:#b62e24"},a={style:"color:#9d288c"},r={header(f){return Ct(f)?f.__isVue?["div",t,"VueInstance"]:bt(f)?["div",{},["span",t,d(f)],"<",c(f.value),">"]:qn(f)?["div",{},["span",t,xa(f)?"ShallowReactive":"Reactive"],"<",c(f),`>${En(f)?" (readonly)":""}`]:En(f)?["div",{},["span",t,xa(f)?"ShallowReadonly":"Readonly"],"<",c(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...i(f.$)]}};function i(f){const m=[];f.type.props&&f.props&&m.push(l("props",dt(f.props))),f.setupState!==Tt&&m.push(l("setup",f.setupState)),f.data!==Tt&&m.push(l("data",dt(f.data)));const g=u(f,"computed");g&&m.push(l("computed",g));const _=u(f,"inject");return _&&m.push(l("injected",_)),m.push(["div",{},["span",{style:a.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),m}function l(f,m){return m=Vt({},m),Object.keys(m).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(m).map(g=>["div",{},["span",a,g+": "],c(m[g],!1)])]]:["span",{}]}function c(f,m=!0){return typeof f=="number"?["span",e,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",a,f]:Ct(f)?["object",{object:m?dt(f):f}]:["span",s,String(f)]}function u(f,m){const g=f.type;if(ut(g))return;const _={};for(const v in f.ctx)p(g,v,m)&&(_[v]=f.ctx[v]);return _}function p(f,m,g){const _=f[g];if(it(_)&&_.includes(m)||Ct(_)&&m in _||f.extends&&p(f.extends,m,g)||f.mixins&&f.mixins.some(v=>p(v,m,g)))return!0}function d(f){return xa(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const Ei="3.2.45",Bd="http://www.w3.org/2000/svg",Un=typeof document<"u"?document:null,Pi=Un&&Un.createElement("template"),qd={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,a)=>{const r=e?Un.createElementNS(Bd,t):Un.createElement(t,s?{is:s}:void 0);return t==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,a,r,i){const l=s?s.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),s),!(r===i||!(r=r.nextSibling)););else{Pi.innerHTML=a?`<svg>${t}</svg>`:t;const c=Pi.content;if(a){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,s)}return[l?l.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}};function zd(t,e,s){const a=t._vtc;a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}function Kd(t,e,s){const a=t.style,r=Ut(s);if(s&&!r){for(const i in s)Qa(a,i,s[i]);if(e&&!Ut(e))for(const i in e)s[i]==null&&Qa(a,i,"")}else{const i=a.display;r?e!==s&&(a.cssText=s):e&&t.removeAttribute("style"),"_vod"in t&&(a.display=i)}}const Gd=/[^\\];\s*$/,Li=/\s*!important$/;function Qa(t,e,s){if(it(s))s.forEach(a=>Qa(t,e,a));else if(s==null&&(s=""),Gd.test(s)&&M(`Unexpected semicolon at the end of '${e}' style value: '${s}'`),e.startsWith("--"))t.setProperty(e,s);else{const a=Yd(t,e);Li.test(s)?t.setProperty(rn(a),s.replace(Li,""),"important"):t[a]=s}}const Oi=["Webkit","Moz","ms"],ba={};function Yd(t,e){const s=ba[e];if(s)return s;let a=qe(e);if(a!=="filter"&&a in t)return ba[e]=a;a=Zn(a);for(let r=0;r<Oi.length;r++){const i=Oi[r]+a;if(i in t)return ba[e]=i}return e}const Ti="http://www.w3.org/1999/xlink";function Xd(t,e,s,a,r){if(a&&e.startsWith("xlink:"))s==null?t.removeAttributeNS(Ti,e.slice(6,e.length)):t.setAttributeNS(Ti,e,s);else{const i=yp(e);s==null||i&&!zl(s)?t.removeAttribute(e):t.setAttribute(e,i?"":s)}}function Zd(t,e,s,a,r,i,l){if(e==="innerHTML"||e==="textContent"){a&&l(a,r,i),t[e]=s??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=s;const u=s??"";(t.value!==u||t.tagName==="OPTION")&&(t.value=u),s==null&&t.removeAttribute(e);return}let c=!1;if(s===""||s==null){const u=typeof t[e];u==="boolean"?s=zl(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{t[e]=s}catch(u){c||M(`Failed setting prop "${e}" on <${t.tagName.toLowerCase()}>: value ${s} is invalid.`,u)}c&&t.removeAttribute(e)}function fs(t,e,s,a){t.addEventListener(e,s,a)}function Qd(t,e,s,a){t.removeEventListener(e,s,a)}function Jd(t,e,s,a,r=null){const i=t._vei||(t._vei={}),l=i[e];if(a&&l)l.value=a;else{const[c,u]=tm(e);if(a){const p=i[e]=sm(a,r);fs(t,c,p,u)}else l&&(Qd(t,c,l,u),i[e]=void 0)}}const Ai=/(?:Once|Passive|Capture)$/;function tm(t){let e;if(Ai.test(t)){e={};let a;for(;a=t.match(Ai);)t=t.slice(0,t.length-a[0].length),e[a[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rn(t.slice(2)),e]}let Sa=0;const em=Promise.resolve(),nm=()=>Sa||(em.then(()=>Sa=0),Sa=Date.now());function sm(t,e){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;$e(om(a,s.value),e,5,[a])};return s.value=t,s.attached=nm(),s}function om(t,e){if(it(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(a=>r=>!r._stopped&&a&&a(r))}else return e}const Mi=/^on[a-z]/,am=(t,e,s,a,r=!1,i,l,c,u)=>{e==="class"?zd(t,a,r):e==="style"?Kd(t,s,a):lo(e)?Ao(e)||Jd(t,e,s,a,l):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rm(t,e,a,r))?Zd(t,e,a,i,l,c,u):(e==="true-value"?t._trueValue=a:e==="false-value"&&(t._falseValue=a),Xd(t,e,a,r))};function rm(t,e,s,a){return a?!!(e==="innerHTML"||e==="textContent"||e in t&&Mi.test(e)&&ut(s)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mi.test(e)&&Ut(s)?!1:e in t}const fn="transition",Ps="animation",ou=(t,{slots:e})=>Ss(Tc,im(t),e);ou.displayName="Transition";const au={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ou.props=Vt({},Tc.props,au);const Mn=(t,e=[])=>{it(t)?t.forEach(s=>s(...e)):t&&t(...e)},Ii=t=>t?it(t)?t.some(e=>e.length>1):t.length>1:!1;function im(t){const e={};for(const z in t)z in au||(e[z]=t[z]);if(t.css===!1)return e;const{name:s="v",type:a,duration:r,enterFromClass:i=`${s}-enter-from`,enterActiveClass:l=`${s}-enter-active`,enterToClass:c=`${s}-enter-to`,appearFromClass:u=i,appearActiveClass:p=l,appearToClass:d=c,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:m=`${s}-leave-active`,leaveToClass:g=`${s}-leave-to`}=t,_=lm(r),v=_&&_[0],y=_&&_[1],{onBeforeEnter:C,onEnter:b,onEnterCancelled:$,onLeave:P,onLeaveCancelled:D,onBeforeAppear:V=C,onAppear:R=b,onAppearCancelled:U=$}=e,Z=(z,kt,Mt)=>{In(z,kt?d:c),In(z,kt?p:l),Mt&&Mt()},nt=(z,kt)=>{z._isLeaving=!1,In(z,f),In(z,g),In(z,m),kt&&kt()},ct=z=>(kt,Mt)=>{const xt=z?R:b,It=()=>Z(kt,z,Mt);Mn(xt,[kt,It]),Ri(()=>{In(kt,z?u:i),dn(kt,z?d:c),Ii(xt)||Ni(kt,a,v,It)})};return Vt(e,{onBeforeEnter(z){Mn(C,[z]),dn(z,i),dn(z,l)},onBeforeAppear(z){Mn(V,[z]),dn(z,u),dn(z,p)},onEnter:ct(!1),onAppear:ct(!0),onLeave(z,kt){z._isLeaving=!0;const Mt=()=>nt(z,kt);dn(z,f),fm(),dn(z,m),Ri(()=>{z._isLeaving&&(In(z,f),dn(z,g),Ii(P)||Ni(z,a,y,Mt))}),Mn(P,[z,Mt])},onEnterCancelled(z){Z(z,!1),Mn($,[z])},onAppearCancelled(z){Z(z,!0),Mn(U,[z])},onLeaveCancelled(z){nt(z),Mn(D,[z])}})}function lm(t){if(t==null)return null;if(Ct(t))return[$a(t.enter),$a(t.leave)];{const e=$a(t);return[e,e]}}function $a(t){const e=Ys(t);return cm(e),e}function cm(t){typeof t!="number"?M(`<transition> explicit duration is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&M("<transition> explicit duration is NaN - the duration expression might be incorrect.")}function dn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.add(s)),(t._vtc||(t._vtc=new Set)).add(e)}function In(t,e){e.split(/\s+/).forEach(a=>a&&t.classList.remove(a));const{_vtc:s}=t;s&&(s.delete(e),s.size||(t._vtc=void 0))}function Ri(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let um=0;function Ni(t,e,s,a){const r=t._endId=++um,i=()=>{r===t._endId&&a()};if(s)return setTimeout(i,s);const{type:l,timeout:c,propCount:u}=pm(t,e);if(!l)return a();const p=l+"end";let d=0;const f=()=>{t.removeEventListener(p,m),i()},m=g=>{g.target===t&&++d>=u&&f()};setTimeout(()=>{d<u&&f()},c+1),t.addEventListener(p,m)}function pm(t,e){const s=window.getComputedStyle(t),a=_=>(s[_]||"").split(", "),r=a(`${fn}Delay`),i=a(`${fn}Duration`),l=Fi(r,i),c=a(`${Ps}Delay`),u=a(`${Ps}Duration`),p=Fi(c,u);let d=null,f=0,m=0;e===fn?l>0&&(d=fn,f=l,m=i.length):e===Ps?p>0&&(d=Ps,f=p,m=u.length):(f=Math.max(l,p),d=f>0?l>p?fn:Ps:null,m=d?d===fn?i.length:u.length:0);const g=d===fn&&/\b(transform|all)(,|$)/.test(a(`${fn}Property`).toString());return{type:d,timeout:f,propCount:m,hasTransform:g}}function Fi(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((s,a)=>Ui(s)+Ui(t[a])))}function Ui(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function fm(){return document.body.offsetHeight}const ji=t=>{const e=t.props["onUpdate:modelValue"]||!1;return it(e)?s=>kn(e,s):e};function dm(t){t.target.composing=!0}function Di(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mm={created(t,{modifiers:{lazy:e,trim:s,number:a}},r){t._assign=ji(r);const i=a||r.props&&r.props.type==="number";fs(t,e?"change":"input",l=>{if(l.target.composing)return;let c=t.value;s&&(c=c.trim()),i&&(c=Ys(c)),t._assign(c)}),s&&fs(t,"change",()=>{t.value=t.value.trim()}),e||(fs(t,"compositionstart",dm),fs(t,"compositionend",Di),fs(t,"change",Di))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:s,trim:a,number:r}},i){if(t._assign=ji(i),t.composing||document.activeElement===t&&t.type!=="range"&&(s||a&&t.value.trim()===e||(r||t.type==="number")&&Ys(t.value)===e))return;const l=e??"";t.value!==l&&(t.value=l)}},hm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Vi=(t,e)=>s=>{if(!("key"in s))return;const a=rn(s.key);if(e.some(r=>r===a||hm[r]===a))return t(s)},ru={beforeMount(t,{value:e},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&e?s.beforeEnter(t):Ls(t,e)},mounted(t,{value:e},{transition:s}){s&&e&&s.enter(t)},updated(t,{value:e,oldValue:s},{transition:a}){!e!=!s&&(a?e?(a.beforeEnter(t),Ls(t,!0),a.enter(t)):a.leave(t,()=>{Ls(t,!1)}):Ls(t,e))},beforeUnmount(t,{value:e}){Ls(t,e)}};function Ls(t,e){t.style.display=e?t._vod:"none"}const gm=Vt({patchProp:am},qd);let Wi;function _m(){return Wi||(Wi=xd(gm))}const ZS=(...t)=>{const e=_m().createApp(...t);km(e),vm(e);const{mount:s}=e;return e.mount=a=>{const r=ym(a);if(!r)return;const i=e._component;!ut(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const l=s(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},e};function km(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>_p(e)||kp(e),writable:!1})}function vm(t){{const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){M("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=t.config.compilerOptions,a='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(t.config,"compilerOptions",{get(){return M(a),s},set(){M(a)}})}}function ym(t){if(Ut(t)){const e=document.querySelector(t);return e||M(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&M('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function wm(){Hd()}wm();const iu=Symbol("v-click-clicks"),lu=Symbol("v-click-clicks-elements"),xm=Symbol("v-click-clicks-order-map"),cu=Symbol("v-click-clicks-disabled"),uu=Symbol("slidev-slide-scale"),tt=Symbol("slidev-slidev-context"),bm=Symbol("slidev-route"),Sm=Symbol("slidev-slide-context"),$m="slidev-vclick-target",QS="slidev-vclick-hidden",JS="slidev-vclick-fade",t$="slidev-vclick-hidden-explicitly",e$="slidev-vclick-current",n$="slidev-vclick-prior";function Cm(t,e){if(!t)return!1;const s=t.indexOf(e);return s>=0?(t.splice(s,1),!0):!1}function Em(...t){let e,s,a;t.length===1?(e=0,a=1,[s]=t):[e,s,a=1]=t;const r=[];let i=e;for(;i<s;)r.push(i),i+=a||1;return r}function Pm(t){return t!=null}function Lm(t,e){return Object.fromEntries(Object.entries(t).map(([s,a])=>e(s,a)).filter(Pm))}const js={theme:"penguin",title:"Go Mutex 实现与演进",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{logoHeader:"/img/logo.png",eventLogo:"https://golang.google.cn/favicon.ico"},fonts:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:[],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",layout:"intro"},Nt=js,bn=Nt.aspectRatio??16/9,Sn=Nt.canvasWidth??980,Ur=Math.ceil(Sn/bn),jr=O(()=>Lm(Nt.themeConfig||{},(t,e)=>[`--slidev-theme-${t}`,e]));function Ce(t,e,s){Object.defineProperty(t,e,{value:s,writable:!0,enumerable:!1})}const os=Jt({page:0,clicks:0});let Om=[],Tm=[];Ce(os,"$syncUp",!0);Ce(os,"$syncDown",!0);Ce(os,"$paused",!1);Ce(os,"$onSet",t=>Om.push(t));Ce(os,"$onPatch",t=>Tm.push(t));Ce(os,"$patch",async()=>!1);function pu(t,e,s=!1){const a=[];let r=!1,i=!1,l,c;const u=Jt(e);function p(g){a.push(g)}function d(g,_){clearTimeout(l),r=!0,u[g]=_,l=setTimeout(()=>r=!1,0)}function f(g){r||(clearTimeout(c),i=!0,Object.entries(g).forEach(([_,v])=>{u[_]=v}),c=setTimeout(()=>i=!1,0))}function m(g){let _;s?s&&window.addEventListener("storage",y=>{y&&y.key===g&&y.newValue&&f(JSON.parse(y.newValue))}):(_=new BroadcastChannel(g),_.addEventListener("message",y=>f(y.data)));function v(){!s&&_&&!i?_.postMessage(dt(u)):s&&!i&&window.localStorage.setItem(g,JSON.stringify(u)),r||a.forEach(y=>y(u))}if(Ft(u,v,{deep:!0}),s){const y=window.localStorage.getItem(g);y&&f(JSON.parse(y))}}return{init:m,onPatch:p,patch:d,state:u}}const{init:s$,onPatch:o$,patch:a$,state:Ca}=pu(os,{page:1,clicks:0}),as=Jt({});let Am=[],Mm=[];Ce(as,"$syncUp",!0);Ce(as,"$syncDown",!0);Ce(as,"$paused",!1);Ce(as,"$onSet",t=>Am.push(t));Ce(as,"$onPatch",t=>Mm.push(t));Ce(as,"$patch",async()=>!1);const{init:r$,onPatch:Im,patch:fu,state:Ho}=pu(as,{},!1),Rm="modulepreload",Nm=function(t){return"/"+t},Hi={},ts=function(e,s,a){if(!s||s.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(s.map(i=>{if(i=Nm(i),i in Hi)return;Hi[i]=!0;const l=i.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(!!a)for(let d=r.length-1;d>=0;d--){const f=r[d];if(f.href===i&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Rm,l||(p.as="script",p.crossOrigin=""),p.href=i,document.head.appendChild(p),l)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};var Bi;const Ne=typeof window<"u",Ja=t=>typeof t<"u",Fm=Object.prototype.toString,no=t=>typeof t=="function",i$=t=>typeof t=="number",du=t=>typeof t=="string",l$=t=>Fm.call(t)==="[object Object]",tr=()=>+Date.now(),Bs=()=>{};Ne&&((Bi=window==null?void 0:window.navigator)!=null&&Bi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ce(t){return typeof t=="function"?t():w(t)}function Um(t,e){function s(...a){t(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})}return s}const mu=t=>t();function jm(t=mu){const e=ot(!0);function s(){e.value=!1}function a(){e.value=!0}return{isActive:e,pause:s,resume:a,eventFilter:(...i)=>{e.value&&t(...i)}}}function Dm(t){return t}function Vm(t,e){var s;if(typeof t=="number")return t+e;const a=((s=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",r=t.slice(a.length),i=parseFloat(a)+e;return Number.isNaN(i)?t:i+r}function Wm(t,e){let s,a,r;const i=ot(!0),l=()=>{i.value=!0,r()};Ft(t,l,{flush:"sync"});const c=no(e)?e:e.get,u=no(e)?void 0:e.set,p=hc((d,f)=>(a=d,r=f,{get(){return i.value&&(s=c(),i.value=!1),a(),s},set(m){u==null||u(m)}}));return Object.isExtensible(p)&&(p.trigger=l),p}function Ke(t){return Ep()?(Pp(t),!0):!1}function Hm(t){if(!bt(t))return Jt(t);const e=new Proxy({},{get(s,a,r){return w(Reflect.get(t.value,a,r))},set(s,a,r){return bt(t.value[a])&&!bt(r)?t.value[a].value=r:t.value[a]=r,!0},deleteProperty(s,a){return Reflect.deleteProperty(t.value,a)},has(s,a){return Reflect.has(t.value,a)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Jt(e)}function hu(t){return typeof t=="function"?O(t):ot(t)}var Bm=Object.defineProperty,qm=Object.defineProperties,zm=Object.getOwnPropertyDescriptors,qi=Object.getOwnPropertySymbols,Km=Object.prototype.hasOwnProperty,Gm=Object.prototype.propertyIsEnumerable,zi=(t,e,s)=>e in t?Bm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,Ym=(t,e)=>{for(var s in e||(e={}))Km.call(e,s)&&zi(t,s,e[s]);if(qi)for(var s of qi(e))Gm.call(e,s)&&zi(t,s,e[s]);return t},Xm=(t,e)=>qm(t,zm(e));function Zm(t){if(!bt(t))return af(t);const e=Array.isArray(t.value)?new Array(t.value.length):{};for(const s in t.value)e[s]=hc(()=>({get(){return t.value[s]},set(a){if(Array.isArray(t.value)){const r=[...t.value];r[s]=a,t.value=r}else{const r=Xm(Ym({},t.value),{[s]:a});Object.setPrototypeOf(r,t.value),t.value=r}}}));return e}function da(t,e=!0){Ye()?po(t):e?t():Ie(t)}function c$(t){Ye()&&la(t)}function Qm(t,e=1e3,s={}){const{immediate:a=!0,immediateCallback:r=!1}=s;let i=null;const l=ot(!1);function c(){i&&(clearInterval(i),i=null)}function u(){l.value=!1,c()}function p(){w(e)<=0||(l.value=!0,r&&t(),c(),i=setInterval(t,ce(e)))}if(a&&Ne&&p(),bt(e)||no(e)){const d=Ft(e,()=>{l.value&&Ne&&p()});Ke(d)}return Ke(u),{isActive:l,pause:u,resume:p}}function Jm(t,e,s={}){const{immediate:a=!0}=s,r=ot(!1);let i=null;function l(){i&&(clearTimeout(i),i=null)}function c(){r.value=!1,l()}function u(...p){l(),r.value=!0,i=setTimeout(()=>{r.value=!1,i=null,t(...p)},ce(e))}return a&&(r.value=!0,Ne&&u()),Ke(c),{isPending:r,start:u,stop:c}}function gu(t=!1,e={}){const{truthyValue:s=!0,falsyValue:a=!1}=e,r=bt(t),i=ot(t);function l(c){if(arguments.length)return i.value=c,i.value;{const u=ce(s);return i.value=i.value===u?ce(a):u,i.value}}return r?l:[i,l]}var Ki=Object.getOwnPropertySymbols,th=Object.prototype.hasOwnProperty,eh=Object.prototype.propertyIsEnumerable,nh=(t,e)=>{var s={};for(var a in t)th.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&Ki)for(var a of Ki(t))e.indexOf(a)<0&&eh.call(t,a)&&(s[a]=t[a]);return s};function sh(t,e,s={}){const a=s,{eventFilter:r=mu}=a,i=nh(a,["eventFilter"]);return Ft(t,Um(r,e),i)}var oh=Object.defineProperty,ah=Object.defineProperties,rh=Object.getOwnPropertyDescriptors,Bo=Object.getOwnPropertySymbols,_u=Object.prototype.hasOwnProperty,ku=Object.prototype.propertyIsEnumerable,Gi=(t,e,s)=>e in t?oh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,ih=(t,e)=>{for(var s in e||(e={}))_u.call(e,s)&&Gi(t,s,e[s]);if(Bo)for(var s of Bo(e))ku.call(e,s)&&Gi(t,s,e[s]);return t},lh=(t,e)=>ah(t,rh(e)),ch=(t,e)=>{var s={};for(var a in t)_u.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&Bo)for(var a of Bo(t))e.indexOf(a)<0&&ku.call(t,a)&&(s[a]=t[a]);return s};function uh(t,e,s={}){const a=s,{eventFilter:r}=a,i=ch(a,["eventFilter"]),{eventFilter:l,pause:c,resume:u,isActive:p}=jm(r);return{stop:sh(t,e,lh(ih({},i),{eventFilter:l})),pause:c,resume:u,isActive:p}}function Me(t){var e;const s=ce(t);return(e=s==null?void 0:s.$el)!=null?e:s}const Zt=Ne?window:void 0,vu=Ne?window.document:void 0,ph=Ne?window.navigator:void 0;function Et(...t){let e,s,a,r;if(du(t[0])||Array.isArray(t[0])?([s,a,r]=t,e=Zt):[e,s,a,r]=t,!e)return Bs;Array.isArray(s)||(s=[s]),Array.isArray(a)||(a=[a]);const i=[],l=()=>{i.forEach(d=>d()),i.length=0},c=(d,f,m)=>(d.addEventListener(f,m,r),()=>d.removeEventListener(f,m,r)),u=Ft(()=>Me(e),d=>{l(),d&&i.push(...s.flatMap(f=>a.map(m=>c(d,f,m))))},{immediate:!0,flush:"post"}),p=()=>{u(),l()};return Ke(p),p}function fh(t,e,s={}){const{window:a=Zt,ignore:r=[],capture:i=!0,detectIframe:l=!1}=s;if(!a)return;let c=!0,u;const p=g=>r.some(_=>{if(typeof _=="string")return Array.from(a.document.querySelectorAll(_)).some(v=>v===g.target||g.composedPath().includes(v));{const v=Me(_);return v&&(g.target===v||g.composedPath().includes(v))}}),d=g=>{a.clearTimeout(u);const _=Me(t);if(!(!_||_===g.target||g.composedPath().includes(_))){if(g.detail===0&&(c=!p(g)),!c){c=!0;return}e(g)}},f=[Et(a,"click",d,{passive:!0,capture:i}),Et(a,"pointerdown",g=>{const _=Me(t);_&&(c=!g.composedPath().includes(_)&&!p(g))},{passive:!0}),Et(a,"pointerup",g=>{if(g.button===0){const _=g.composedPath();g.composedPath=()=>_,u=a.setTimeout(()=>d(g),50)}},{passive:!0}),l&&Et(a,"blur",g=>{var _;const v=Me(t);((_=a.document.activeElement)==null?void 0:_.tagName)==="IFRAME"&&!(v!=null&&v.contains(a.document.activeElement))&&e(g)})].filter(Boolean);return()=>f.forEach(g=>g())}const dh=t=>typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0;function mh(...t){let e,s,a={};t.length===3?(e=t[0],s=t[1],a=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,s=t[0],a=t[1]):(e=t[0],s=t[1]):(e=!0,s=t[0]);const{target:r=Zt,eventName:i="keydown",passive:l=!1}=a,c=dh(e);return Et(r,i,p=>{c(p)&&s(p)},l)}function yu(t={}){const{window:e=Zt}=t,s=Wm(()=>null,()=>e==null?void 0:e.document.activeElement);return e&&(Et(e,"blur",a=>{a.relatedTarget!==null&&s.trigger()},!0),Et(e,"focus",s.trigger,!0)),s}function ho(t,e=!1){const s=ot(),a=()=>s.value=Boolean(t());return a(),da(a,e),s}function ds(t,e={}){const{window:s=Zt}=e,a=ho(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let r;const i=ot(!1),l=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",c):r.removeListener(c))},c=()=>{a.value&&(l(),r=s.matchMedia(hu(t).value),i.value=r.matches,"addEventListener"in r?r.addEventListener("change",c):r.addListener(c))};return bs(c),Ke(()=>l()),i}const hh={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var gh=Object.defineProperty,Yi=Object.getOwnPropertySymbols,_h=Object.prototype.hasOwnProperty,kh=Object.prototype.propertyIsEnumerable,Xi=(t,e,s)=>e in t?gh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,vh=(t,e)=>{for(var s in e||(e={}))_h.call(e,s)&&Xi(t,s,e[s]);if(Yi)for(var s of Yi(e))kh.call(e,s)&&Xi(t,s,e[s]);return t};function yh(t,e={}){function s(c,u){let p=t[c];return u!=null&&(p=Vm(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:a=Zt}=e;function r(c){return a?a.matchMedia(c).matches:!1}const i=c=>ds(`(min-width: ${s(c)})`,e),l=Object.keys(t).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>i(u),enumerable:!0,configurable:!0}),c),{});return vh({greater(c){return ds(`(min-width: ${s(c,.1)})`,e)},greaterOrEqual:i,smaller(c){return ds(`(max-width: ${s(c,-.1)})`,e)},smallerOrEqual(c){return ds(`(max-width: ${s(c)})`,e)},between(c,u){return ds(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`,e)},isGreater(c){return r(`(min-width: ${s(c,.1)})`)},isGreaterOrEqual(c){return r(`(min-width: ${s(c)})`)},isSmaller(c){return r(`(max-width: ${s(c,-.1)})`)},isSmallerOrEqual(c){return r(`(max-width: ${s(c)})`)},isInBetween(c,u){return r(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`)}},l)}function wh(t={}){const{navigator:e=ph,read:s=!1,source:a,copiedDuring:r=1500,legacy:i=!1}=t,l=["copy","cut"],c=ho(()=>e&&"clipboard"in e),u=O(()=>c.value||i),p=ot(""),d=ot(!1),f=Jm(()=>d.value=!1,r);function m(){c.value?e.clipboard.readText().then(y=>{p.value=y}):p.value=v()}if(u.value&&s)for(const y of l)Et(y,m);async function g(y=ce(a)){u.value&&y!=null&&(c.value?await e.clipboard.writeText(y):_(y),p.value=y,d.value=!0,f.start())}function _(y){const C=document.createElement("textarea");C.value=y??"",C.style.position="absolute",C.style.opacity="0",document.body.appendChild(C),C.select(),document.execCommand("copy"),C.remove()}function v(){var y,C,b;return(b=(C=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:C.toString())!=null?b:""}return{isSupported:u,text:p,copied:d,copy:g}}function xh(t){return JSON.parse(JSON.stringify(t))}const er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nr="__vueuse_ssr_handlers__";er[nr]=er[nr]||{};const bh=er[nr];function wu(t,e){return bh[t]||e}function Sh(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var $h=Object.defineProperty,Zi=Object.getOwnPropertySymbols,Ch=Object.prototype.hasOwnProperty,Eh=Object.prototype.propertyIsEnumerable,Qi=(t,e,s)=>e in t?$h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,Ji=(t,e)=>{for(var s in e||(e={}))Ch.call(e,s)&&Qi(t,s,e[s]);if(Zi)for(var s of Zi(e))Eh.call(e,s)&&Qi(t,s,e[s]);return t};const Ph={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function Ee(t,e,s,a={}){var r;const{flush:i="pre",deep:l=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:f=Zt,eventFilter:m,onError:g=R=>{console.error(R)}}=a,_=(d?ze:ot)(e);if(!s)try{s=wu("getDefaultStorage",()=>{var R;return(R=Zt)==null?void 0:R.localStorage})()}catch(R){g(R)}if(!s)return _;const v=ce(e),y=Sh(v),C=(r=a.serializer)!=null?r:Ph[y],{pause:b,resume:$}=uh(_,()=>P(_.value),{flush:i,deep:l,eventFilter:m});return f&&c&&Et(f,"storage",V),V(),_;function P(R){try{if(R==null)s.removeItem(t);else{const U=C.write(R),Z=s.getItem(t);Z!==U&&(s.setItem(t,U),f&&(f==null||f.dispatchEvent(new StorageEvent("storage",{key:t,oldValue:Z,newValue:U,storageArea:s}))))}}catch(U){g(U)}}function D(R){const U=R?R.newValue:s.getItem(t);if(U==null)return u&&v!==null&&s.setItem(t,C.write(v)),v;if(!R&&p){const Z=C.read(U);return no(p)?p(Z,v):y==="object"&&!Array.isArray(Z)?Ji(Ji({},v),Z):Z}else return typeof U!="string"?U:C.read(U)}function V(R){if(!(R&&R.storageArea!==s)){if(R&&R.key==null){_.value=v;return}if(!(R&&R.key!==t)){b();try{_.value=D(R)}catch(U){g(U)}finally{R?Ie($):$()}}}}}function Dr(t){return ds("(prefers-color-scheme: dark)",t)}var Lh=Object.defineProperty,tl=Object.getOwnPropertySymbols,Oh=Object.prototype.hasOwnProperty,Th=Object.prototype.propertyIsEnumerable,el=(t,e,s)=>e in t?Lh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,Ah=(t,e)=>{for(var s in e||(e={}))Oh.call(e,s)&&el(t,s,e[s]);if(tl)for(var s of tl(e))Th.call(e,s)&&el(t,s,e[s]);return t};function Mh(t={}){const{selector:e="html",attribute:s="class",initialValue:a="auto",window:r=Zt,storage:i,storageKey:l="vueuse-color-scheme",listenToStorageChanges:c=!0,storageRef:u,emitAuto:p}=t,d=Ah({auto:"",light:"light",dark:"dark"},t.modes||{}),f=Dr({window:r}),m=O(()=>f.value?"dark":"light"),g=u||(l==null?ot(a):Ee(l,a,i,{window:r,listenToStorageChanges:c})),_=O({get(){return g.value==="auto"&&!p?m.value:g.value},set(b){g.value=b}}),v=wu("updateHTMLAttrs",(b,$,P)=>{const D=r==null?void 0:r.document.querySelector(b);if(D)if($==="class"){const V=P.split(/\s/g);Object.values(d).flatMap(R=>(R||"").split(/\s/g)).filter(Boolean).forEach(R=>{V.includes(R)?D.classList.add(R):D.classList.remove(R)})}else D.setAttribute($,P)});function y(b){var $;const P=b==="auto"?m.value:b;v(e,s,($=d[P])!=null?$:P)}function C(b){t.onChanged?t.onChanged(b,y):y(b)}return Ft(_,C,{flush:"post",immediate:!0}),p&&Ft(m,()=>C(_.value),{flush:"post"}),da(()=>C(_.value)),_}var Ih=Object.defineProperty,Rh=Object.defineProperties,Nh=Object.getOwnPropertyDescriptors,nl=Object.getOwnPropertySymbols,Fh=Object.prototype.hasOwnProperty,Uh=Object.prototype.propertyIsEnumerable,sl=(t,e,s)=>e in t?Ih(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,jh=(t,e)=>{for(var s in e||(e={}))Fh.call(e,s)&&sl(t,s,e[s]);if(nl)for(var s of nl(e))Uh.call(e,s)&&sl(t,s,e[s]);return t},Dh=(t,e)=>Rh(t,Nh(e));function u$(t={}){const{valueDark:e="dark",valueLight:s="",window:a=Zt}=t,r=Mh(Dh(jh({},t),{onChanged:(c,u)=>{var p;t.onChanged?(p=t.onChanged)==null||p.call(t,c==="dark"):u(c)},modes:{dark:e,light:s}})),i=Dr({window:a});return O({get(){return r.value==="dark"},set(c){c===i.value?r.value="auto":r.value=c?"dark":"light"}})}var Vh=Object.defineProperty,Wh=Object.defineProperties,Hh=Object.getOwnPropertyDescriptors,ol=Object.getOwnPropertySymbols,Bh=Object.prototype.hasOwnProperty,qh=Object.prototype.propertyIsEnumerable,al=(t,e,s)=>e in t?Vh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,zh=(t,e)=>{for(var s in e||(e={}))Bh.call(e,s)&&al(t,s,e[s]);if(ol)for(var s of ol(e))qh.call(e,s)&&al(t,s,e[s]);return t},Kh=(t,e)=>Wh(t,Hh(e));function p$(t,e={}){var s,a,r;const i=(s=e.draggingElement)!=null?s:Zt,l=(a=e.handle)!=null?a:t,c=ot((r=ce(e.initialValue))!=null?r:{x:0,y:0}),u=ot(),p=_=>e.pointerTypes?e.pointerTypes.includes(_.pointerType):!0,d=_=>{ce(e.preventDefault)&&_.preventDefault(),ce(e.stopPropagation)&&_.stopPropagation()},f=_=>{var v;if(!p(_)||ce(e.exact)&&_.target!==ce(t))return;const y=ce(t).getBoundingClientRect(),C={x:_.clientX-y.left,y:_.clientY-y.top};((v=e.onStart)==null?void 0:v.call(e,C,_))!==!1&&(u.value=C,d(_))},m=_=>{var v;p(_)&&u.value&&(c.value={x:_.clientX-u.value.x,y:_.clientY-u.value.y},(v=e.onMove)==null||v.call(e,c.value,_),d(_))},g=_=>{var v;p(_)&&u.value&&(u.value=void 0,(v=e.onEnd)==null||v.call(e,c.value,_),d(_))};return Ne&&(Et(l,"pointerdown",f,!0),Et(i,"pointermove",m,!0),Et(i,"pointerup",g,!0)),Kh(zh({},Zm(c)),{position:c,isDragging:O(()=>!!u.value),style:O(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var rl=Object.getOwnPropertySymbols,Gh=Object.prototype.hasOwnProperty,Yh=Object.prototype.propertyIsEnumerable,Xh=(t,e)=>{var s={};for(var a in t)Gh.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&rl)for(var a of rl(t))e.indexOf(a)<0&&Yh.call(t,a)&&(s[a]=t[a]);return s};function Zh(t,e,s={}){const a=s,{window:r=Zt}=a,i=Xh(a,["window"]);let l;const c=ho(()=>r&&"ResizeObserver"in r),u=()=>{l&&(l.disconnect(),l=void 0)},p=Ft(()=>Me(t),f=>{u(),c.value&&r&&f&&(l=new ResizeObserver(e),l.observe(f,i))},{immediate:!0,flush:"post"}),d=()=>{u(),p()};return Ke(d),{isSupported:c,stop:d}}function Qh(t,e={}){const{immediate:s=!0,window:a=Zt}=e,r=ot(!1);let i=0,l=null;function c(d){if(!r.value||!a)return;const f=d-i;t({delta:f,timestamp:d}),i=d,l=a.requestAnimationFrame(c)}function u(){!r.value&&a&&(r.value=!0,l=a.requestAnimationFrame(c))}function p(){r.value=!1,l!=null&&a&&(a.cancelAnimationFrame(l),l=null)}return s&&u(),Ke(p),{isActive:r,pause:p,resume:u}}function Jh(t,e={width:0,height:0},s={}){const{box:a="content-box"}=s,r=ot(e.width),i=ot(e.height);return Zh(t,([l])=>{const c=a==="border-box"?l.borderBoxSize:a==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;c?(r.value=c.reduce((u,{inlineSize:p})=>u+p,0),i.value=c.reduce((u,{blockSize:p})=>u+p,0)):(r.value=l.contentRect.width,i.value=l.contentRect.height)},s),Ft(()=>Me(t),l=>{r.value=l?e.width:0,i.value=l?e.height:0}),{width:r,height:i}}function f$(t,e={}){const{initialValue:s=!1}=e,a=yu(e),r=O(()=>Me(t)),i=O({get(){return Ja(a.value)&&Ja(r.value)&&a.value===r.value},set(l){var c,u;!l&&i.value&&((c=r.value)==null||c.blur()),l&&!i.value&&((u=r.value)==null||u.focus())}});return Ft(r,()=>{i.value=s},{immediate:!0,flush:"post"}),{focused:i}}const il=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function tg(t,e={}){const{document:s=vu,autoExit:a=!1}=e,r=t||(s==null?void 0:s.querySelector("html")),i=ot(!1);let l=il[0];const c=ho(()=>{if(s){for(const v of il)if(v[1]in s)return l=v,!0}else return!1;return!1}),[u,p,d,,f]=l;async function m(){c.value&&(s!=null&&s[d]&&await s[p](),i.value=!1)}async function g(){if(!c.value)return;await m();const v=Me(r);v&&(await v[u](),i.value=!0)}async function _(){i.value?await m():await g()}return s&&Et(s,f,()=>{i.value=!!(s!=null&&s[d])},!1),a&&Ke(m),{isSupported:c,isFullscreen:i,enter:g,exit:m,toggle:_}}function d$(t,e,s={}){const{root:a,rootMargin:r="0px",threshold:i=.1,window:l=Zt}=s,c=ho(()=>l&&"IntersectionObserver"in l);let u=Bs;const p=c.value?Ft(()=>({el:Me(t),root:Me(a)}),({el:f,root:m})=>{if(u(),!f)return;const g=new IntersectionObserver(e,{root:m,rootMargin:r,threshold:i});g.observe(f),u=()=>{g.disconnect(),u=Bs}},{immediate:!0,flush:"post"}):Bs,d=()=>{u(),p()};return Ke(d),{isSupported:c,stop:d}}const eg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function ng(t={}){const{reactive:e=!1,target:s=Zt,aliasMap:a=eg,passive:r=!0,onEventFired:i=Bs}=t,l=Jt(new Set),c={toJSON(){return{}},current:l},u=e?Jt(c):c,p=new Set,d=new Set;function f(v,y){v in u&&(e?u[v]=y:u[v].value=y)}function m(){l.clear();for(const v of d)f(v,!1)}function g(v,y){var C,b;const $=(C=v.key)==null?void 0:C.toLowerCase(),D=[(b=v.code)==null?void 0:b.toLowerCase(),$].filter(Boolean);$&&(y?l.add($):l.delete($));for(const V of D)d.add(V),f(V,y);$==="meta"&&!y?(p.forEach(V=>{l.delete(V),f(V,!1)}),p.clear()):typeof v.getModifierState=="function"&&v.getModifierState("Meta")&&y&&[...l,...D].forEach(V=>p.add(V))}Et(s,"keydown",v=>(g(v,!0),i(v)),{passive:r}),Et(s,"keyup",v=>(g(v,!1),i(v)),{passive:r}),Et("blur",m,{passive:!0}),Et("focus",m,{passive:!0});const _=new Proxy(u,{get(v,y,C){if(typeof y!="string")return Reflect.get(v,y,C);if(y=y.toLowerCase(),y in a&&(y=a[y]),!(y in u))if(/[+_-]/.test(y)){const $=y.split(/[+_-]/g).map(P=>P.trim());u[y]=O(()=>$.every(P=>w(_[P])))}else u[y]=ot(!1);const b=Reflect.get(v,y,C);return e?w(b):b}});return _}function m$(t={}){const{type:e="page",touch:s=!0,resetOnTouchEnds:a=!1,initialValue:r={x:0,y:0},window:i=Zt,eventFilter:l}=t,c=ot(r.x),u=ot(r.y),p=ot(null),d=v=>{e==="page"?(c.value=v.pageX,u.value=v.pageY):e==="client"&&(c.value=v.clientX,u.value=v.clientY),p.value="mouse"},f=()=>{c.value=r.x,u.value=r.y},m=v=>{if(v.touches.length>0){const y=v.touches[0];e==="page"?(c.value=y.pageX,u.value=y.pageY):e==="client"&&(c.value=y.clientX,u.value=y.clientY),p.value="touch"}},g=v=>l===void 0?d(v):l(()=>d(v),{}),_=v=>l===void 0?m(v):l(()=>m(v),{});return i&&(Et(i,"mousemove",g,{passive:!0}),Et(i,"dragover",g,{passive:!0}),s&&(Et(i,"touchstart",_,{passive:!0}),Et(i,"touchmove",_,{passive:!0}),a&&Et(i,"touchend",f,{passive:!0}))),{x:c,y:u,sourceType:p}}var nn;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(nn||(nn={}));function sg(t,e={}){const s=hu(t),{threshold:a=50,onSwipe:r,onSwipeEnd:i,onSwipeStart:l}=e,c=Jt({x:0,y:0}),u=(V,R)=>{c.x=V,c.y=R},p=Jt({x:0,y:0}),d=(V,R)=>{p.x=V,p.y=R},f=O(()=>c.x-p.x),m=O(()=>c.y-p.y),{max:g,abs:_}=Math,v=O(()=>g(_(f.value),_(m.value))>=a),y=ot(!1),C=ot(!1),b=O(()=>v.value?_(f.value)>_(m.value)?f.value>0?nn.LEFT:nn.RIGHT:m.value>0?nn.UP:nn.DOWN:nn.NONE),$=V=>{var R,U,Z;const nt=V.buttons===0,ct=V.buttons===1;return(Z=(U=(R=e.pointerTypes)==null?void 0:R.includes(V.pointerType))!=null?U:nt||ct)!=null?Z:!0},P=[Et(t,"pointerdown",V=>{var R,U;if(!$(V))return;C.value=!0,(U=(R=s.value)==null?void 0:R.style)==null||U.setProperty("touch-action","none");const Z=V.target;Z==null||Z.setPointerCapture(V.pointerId);const{clientX:nt,clientY:ct}=V;u(nt,ct),d(nt,ct),l==null||l(V)}),Et(t,"pointermove",V=>{if(!$(V)||!C.value)return;const{clientX:R,clientY:U}=V;d(R,U),!y.value&&v.value&&(y.value=!0),y.value&&(r==null||r(V))}),Et(t,"pointerup",V=>{var R,U;$(V)&&(y.value&&(i==null||i(V,b.value)),C.value=!1,y.value=!1,(U=(R=s.value)==null?void 0:R.style)==null||U.setProperty("touch-action","initial"))})],D=()=>P.forEach(V=>V());return{isSwiping:Dn(y),direction:Dn(b),posStart:Dn(c),posEnd:Dn(p),distanceX:f,distanceY:m,stop:D}}let og=0;function h$(t,e={}){const s=ot(!1),{document:a=vu,immediate:r=!0,manual:i=!1,id:l=`vueuse_styletag_${++og}`}=e,c=ot(t);let u=()=>{};const p=()=>{if(!a)return;const f=a.getElementById(l)||a.createElement("style");f.isConnected||(f.type="text/css",f.id=l,e.media&&(f.media=e.media),a.head.appendChild(f)),!s.value&&(u=Ft(c,m=>{f.textContent=m},{immediate:!0}),s.value=!0)},d=()=>{!a||!s.value||(u(),a.head.removeChild(a.getElementById(l)),s.value=!1)};return r&&!i&&da(p),i||Ke(d),{id:l,css:c,unload:d,load:p,isLoaded:Dn(s)}}var ag=Object.defineProperty,ll=Object.getOwnPropertySymbols,rg=Object.prototype.hasOwnProperty,ig=Object.prototype.propertyIsEnumerable,cl=(t,e,s)=>e in t?ag(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,lg=(t,e)=>{for(var s in e||(e={}))rg.call(e,s)&&cl(t,s,e[s]);if(ll)for(var s of ll(e))ig.call(e,s)&&cl(t,s,e[s]);return t};function g$(t={}){const{controls:e=!1,offset:s=0,immediate:a=!0,interval:r="requestAnimationFrame",callback:i}=t,l=ot(tr()+s),c=()=>l.value=tr()+s,u=i?()=>{c(),i(l.value)}:c,p=r==="requestAnimationFrame"?Qh(u,{immediate:a}):Qm(u,r,{immediate:a});return e?lg({timestamp:l},p):l}var cg=Object.defineProperty,ul=Object.getOwnPropertySymbols,ug=Object.prototype.hasOwnProperty,pg=Object.prototype.propertyIsEnumerable,pl=(t,e,s)=>e in t?cg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,fg=(t,e)=>{for(var s in e||(e={}))ug.call(e,s)&&pl(t,s,e[s]);if(ul)for(var s of ul(e))pg.call(e,s)&&pl(t,s,e[s]);return t};const dg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};fg({linear:Dm},dg);function He(t,e,s,a={}){var r,i,l;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:f}=a,m=Ye(),g=s||(m==null?void 0:m.emit)||((r=m==null?void 0:m.$emit)==null?void 0:r.bind(m))||((l=(i=m==null?void 0:m.proxy)==null?void 0:i.$emit)==null?void 0:l.bind(m==null?void 0:m.proxy));let _=p;e||(e="modelValue"),_=p||_||`update:${e.toString()}`;const v=C=>c?no(c)?c(C):xh(C):C,y=()=>Ja(t[e])?v(t[e]):f;if(u){const C=y(),b=ot(C);return Ft(()=>t[e],$=>b.value=v($)),Ft(b,$=>{($!==t[e]||d)&&g(_,$)},{deep:d}),b}else return O({get(){return y()},set(C){g(_,C)}})}function _$({window:t=Zt}={}){if(!t)return ot(!1);const e=ot(t.document.hasFocus());return Et(t,"blur",()=>{e.value=!1}),Et(t,"focus",()=>{e.value=!0}),e}function mg(t={}){const{window:e=Zt,initialWidth:s=1/0,initialHeight:a=1/0,listenOrientation:r=!0,includeScrollbar:i=!0}=t,l=ot(s),c=ot(a),u=()=>{e&&(i?(l.value=e.innerWidth,c.value=e.innerHeight):(l.value=e.document.documentElement.clientWidth,c.value=e.document.documentElement.clientHeight))};return u(),da(u),Et("resize",u,{passive:!0}),r&&Et("orientationchange",u,{passive:!0}),{width:l,height:c}}function hg(){return xu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function xu(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const gg=typeof Proxy=="function",_g="devtools-plugin:setup",kg="plugin:settings:set";let is,sr;function vg(){var t;return is!==void 0||(typeof window<"u"&&window.performance?(is=!0,sr=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(is=!0,sr=global.perf_hooks.performance):is=!1),is}function yg(){return vg()?sr.now():Date.now()}class wg{constructor(e,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=s;const a={};if(e.settings)for(const l in e.settings){const c=e.settings[l];a[l]=c.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},a);try{const l=localStorage.getItem(r),c=JSON.parse(l);Object.assign(i,c)}catch{}this.fallbacks={getSettings(){return i},setSettings(l){try{localStorage.setItem(r,JSON.stringify(l))}catch{}i=l},now(){return yg()}},s&&s.on(kg,(l,c)=>{l===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(l,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(l,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(e){this.target=e;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function xg(t,e){const s=t,a=xu(),r=hg(),i=gg&&s.enableEarlyProxy;if(r&&(a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(_g,t,e);else{const l=i?new wg(s,r):null;(a.__VUE_DEVTOOLS_PLUGINS__=a.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:e,proxy:l}),l&&e(l.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const tn=typeof window<"u";function bg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const St=Object.assign;function Ea(t,e){const s={};for(const a in e){const r=e[a];s[a]=we(r)?r.map(t):t(r)}return s}const qs=()=>{},we=Array.isArray;function wt(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const Sg=/\/$/,$g=t=>t.replace(Sg,"");function Pa(t,e,s="/"){let a,r={},i="",l="";const c=e.indexOf("#");let u=e.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(a=e.slice(0,u),i=e.slice(u+1,c>-1?c:e.length),r=t(i)),c>-1&&(a=a||e.slice(0,c),l=e.slice(c,e.length)),a=Pg(a??e,s),{fullPath:a+(i&&"?")+i+l,path:a,query:r,hash:l}}function Cg(t,e){const s=e.query?t(e.query):"";return e.path+(s&&"?")+s+(e.hash||"")}function fl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dl(t,e,s){const a=e.matched.length-1,r=s.matched.length-1;return a>-1&&a===r&&Ln(e.matched[a],s.matched[r])&&bu(e.params,s.params)&&t(e.query)===t(s.query)&&e.hash===s.hash}function Ln(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const s in t)if(!Eg(t[s],e[s]))return!1;return!0}function Eg(t,e){return we(t)?ml(t,e):we(e)?ml(e,t):t===e}function ml(t,e){return we(e)?t.length===e.length&&t.every((s,a)=>s===e[a]):t.length===1&&t[0]===e}function Pg(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return wt(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const s=e.split("/"),a=t.split("/");let r=s.length-1,i,l;for(i=0;i<a.length;i++)if(l=a[i],l!==".")if(l==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+a.slice(i-(i===a.length?1:0)).join("/")}var so;(function(t){t.pop="pop",t.push="push"})(so||(so={}));var zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zs||(zs={}));function Lg(t){if(!t)if(tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$g(t)}const Og=/^[^#]+#/;function Tg(t,e){return t.replace(Og,"#")+e}function Ag(t,e){const s=document.documentElement.getBoundingClientRect(),a=t.getBoundingClientRect();return{behavior:e.behavior,left:a.left-s.left-(e.left||0),top:a.top-s.top-(e.top||0)}}const ma=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mg(t){let e;if("el"in t){const s=t.el,a=typeof s=="string"&&s.startsWith("#");if(typeof t.el=="string"&&(!a||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(a&&i){wt(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{wt(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!r){wt(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=Ag(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hl(t,e){return(history.state?history.state.position-e:-1)+t}const or=new Map;function Ig(t,e){or.set(t,e)}function Rg(t){const e=or.get(t);return or.delete(t),e}let Ng=()=>location.protocol+"//"+location.host;function Su(t,e){const{pathname:s,search:a,hash:r}=e,i=t.indexOf("#");if(i>-1){let c=r.includes(t.slice(i))?t.slice(i).length:1,u=r.slice(c);return u[0]!=="/"&&(u="/"+u),fl(u,"")}return fl(s,t)+a+r}function Fg(t,e,s,a){let r=[],i=[],l=null;const c=({state:m})=>{const g=Su(t,location),_=s.value,v=e.value;let y=0;if(m){if(s.value=g,e.value=m,l&&l===_){l=null;return}y=v?m.position-v.position:0}else a(g);r.forEach(C=>{C(s.value,_,{delta:y,type:so.pop,direction:y?y>0?zs.forward:zs.back:zs.unknown})})};function u(){l=s.value}function p(m){r.push(m);const g=()=>{const _=r.indexOf(m);_>-1&&r.splice(_,1)};return i.push(g),g}function d(){const{history:m}=window;m.state&&m.replaceState(St({},m.state,{scroll:ma()}),"")}function f(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:p,destroy:f}}function gl(t,e,s,a=!1,r=!1){return{back:t,current:e,forward:s,replaced:a,position:window.history.length,scroll:r?ma():null}}function Ug(t){const{history:e,location:s}=window,a={value:Su(t,s)},r={value:e.state};r.value||i(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(u,p,d){const f=t.indexOf("#"),m=f>-1?(s.host&&document.querySelector("base")?t:t.slice(f))+u:Ng()+t+u;try{e[d?"replaceState":"pushState"](p,"",m),r.value=p}catch(g){wt("Error with push/replace State",g),s[d?"replace":"assign"](m)}}function l(u,p){const d=St({},e.state,gl(r.value.back,u,r.value.forward,!0),p,{position:r.value.position});i(u,d,!0),a.value=u}function c(u,p){const d=St({},r.value,e.state,{forward:u,scroll:ma()});e.state||wt(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(d.current,d,!0);const f=St({},gl(a.value,u,null),{position:d.position+1},p);i(u,f,!1),a.value=u}return{location:a,state:r,push:c,replace:l}}function jg(t){t=Lg(t);const e=Ug(t),s=Fg(t,e.state,e.location,e.replace);function a(i,l=!0){l||s.pauseListeners(),history.go(i)}const r=St({location:"",base:t,go:a,createHref:Tg.bind(null,t)},e,s);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Dg(t){return typeof t=="string"||t&&typeof t=="object"}function $u(t){return typeof t=="string"||typeof t=="symbol"}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cu=Symbol("navigation failure");var _l;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_l||(_l={}));const Vg={[1]({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${Hg(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function ws(t,e){return St(new Error(Vg[t](e)),{type:t,[Cu]:!0},e)}function Xe(t,e){return t instanceof Error&&Cu in t&&(e==null||!!(t.type&e))}const Wg=["params","query","hash"];function Hg(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const s of Wg)s in t&&(e[s]=t[s]);return JSON.stringify(e,null,2)}const kl="[^/]+?",Bg={sensitive:!1,strict:!1,start:!0,end:!0},qg=/[.+*?^${}()[\]/\\]/g;function zg(t,e){const s=St({},Bg,e),a=[];let r=s.start?"^":"";const i=[];for(const p of t){const d=p.length?[]:[90];s.strict&&!p.length&&(r+="/");for(let f=0;f<p.length;f++){const m=p[f];let g=40+(s.sensitive?.25:0);if(m.type===0)f||(r+="/"),r+=m.value.replace(qg,"\\$&"),g+=40;else if(m.type===1){const{value:_,repeatable:v,optional:y,regexp:C}=m;i.push({name:_,repeatable:v,optional:y});const b=C||kl;if(b!==kl){g+=10;try{new RegExp(`(${b})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+P.message)}}let $=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||($=y&&p.length<2?`(?:/${$})`:"/"+$),y&&($+="?"),r+=$,g+=20,y&&(g+=-8),v&&(g+=-20),b===".*"&&(g+=-50)}d.push(g)}a.push(d)}if(s.strict&&s.end){const p=a.length-1;a[p][a[p].length-1]+=.7000000000000001}s.strict||(r+="/?"),s.end?r+="$":s.strict&&(r+="(?:/|$)");const l=new RegExp(r,s.sensitive?"":"i");function c(p){const d=p.match(l),f={};if(!d)return null;for(let m=1;m<d.length;m++){const g=d[m]||"",_=i[m-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function u(p){let d="",f=!1;for(const m of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const g of m)if(g.type===0)d+=g.value;else if(g.type===1){const{value:_,repeatable:v,optional:y}=g,C=_ in p?p[_]:"";if(we(C)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=we(C)?C.join("/"):C;if(!b)if(y)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);d+=b}}return d||"/"}return{re:l,score:a,keys:i,parse:c,stringify:u}}function Kg(t,e){let s=0;for(;s<t.length&&s<e.length;){const a=e[s]-t[s];if(a)return a;s++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Gg(t,e){let s=0;const a=t.score,r=e.score;for(;s<a.length&&s<r.length;){const i=Kg(a[s],r[s]);if(i)return i;s++}if(Math.abs(r.length-a.length)===1){if(vl(a))return 1;if(vl(r))return-1}return r.length-a.length}function vl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Yg={type:0,value:""},Xg=/[a-zA-Z0-9_]/;function Zg(t){if(!t)return[[]];if(t==="/")return[[Yg]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(g){throw new Error(`ERR (${s})/"${p}": ${g}`)}let s=0,a=s;const r=[];let i;function l(){i&&r.push(i),i=[]}let c=0,u,p="",d="";function f(){p&&(s===0?i.push({type:0,value:p}):s===1||s===2||s===3?(i.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),p="")}function m(){p+=u}for(;c<t.length;){if(u=t[c++],u==="\\"&&s!==2){a=s,s=4;continue}switch(s){case 0:u==="/"?(p&&f(),l()):u===":"?(f(),s=1):m();break;case 4:m(),s=a;break;case 1:u==="("?s=2:Xg.test(u)?m():(f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:s=3:d+=u;break;case 3:f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:e("Unknown state");break}}return s===2&&e(`Unfinished custom RegExp for param "${p}"`),f(),l(),r}function Qg(t,e,s){const a=zg(Zg(t.path),s);{const i=new Set;for(const l of a.keys)i.has(l.name)&&wt(`Found duplicated params with name "${l.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(l.name)}const r=St(a,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Jg(t,e){const s=[],a=new Map;e=xl({strict:!1,end:!0,sensitive:!1},e);function r(d){return a.get(d)}function i(d,f,m){const g=!m,_=t_(d);o_(_,f),_.aliasOf=m&&m.record;const v=xl(e,d),y=[_];if("alias"in d){const $=typeof d.alias=="string"?[d.alias]:d.alias;for(const P of $)y.push(St({},_,{components:m?m.record.components:_.components,path:P,aliasOf:m?m.record:_}))}let C,b;for(const $ of y){const{path:P}=$;if(f&&P[0]!=="/"){const D=f.record.path,V=D[D.length-1]==="/"?"":"/";$.path=f.record.path+(P&&V+P)}if($.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(C=Qg($,f,v),f&&P[0]==="/"&&a_(C,f),m?(m.alias.push(C),s_(m,C)):(b=b||C,b!==C&&b.alias.push(C),g&&d.name&&!wl(C)&&l(d.name)),_.children){const D=_.children;for(let V=0;V<D.length;V++)i(D[V],C,m&&m.children[V])}m=m||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&u(C)}return b?()=>{l(b)}:qs}function l(d){if($u(d)){const f=a.get(d);f&&(a.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(l),f.alias.forEach(l))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&a.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function c(){return s}function u(d){let f=0;for(;f<s.length&&Gg(d,s[f])>=0&&(d.record.path!==s[f].record.path||!Eu(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!wl(d)&&a.set(d.record.name,d)}function p(d,f){let m,g={},_,v;if("name"in d&&d.name){if(m=a.get(d.name),!m)throw ws(1,{location:d});{const b=Object.keys(d.params||{}).filter($=>!m.keys.find(P=>P.name===$));b.length&&wt(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=m.record.name,g=St(yl(f.params,m.keys.filter(b=>!b.optional).map(b=>b.name)),d.params&&yl(d.params,m.keys.map(b=>b.name))),_=m.stringify(g)}else if("path"in d)_=d.path,_.startsWith("/")||wt(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),m=s.find(b=>b.re.test(_)),m&&(g=m.parse(_),v=m.record.name);else{if(m=f.name?a.get(f.name):s.find(b=>b.re.test(f.path)),!m)throw ws(1,{location:d,currentLocation:f});v=m.record.name,g=St({},f.params,d.params),_=m.stringify(g)}const y=[];let C=m;for(;C;)y.unshift(C.record),C=C.parent;return{name:v,path:_,params:g,matched:y,meta:n_(y)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:p,removeRoute:l,getRoutes:c,getRecordMatcher:r}}function yl(t,e){const s={};for(const a of e)a in t&&(s[a]=t[a]);return s}function t_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:e_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function e_(t){const e={},s=t.props||!1;if("component"in t)e.default=s;else for(const a in t.components)e[a]=typeof s=="boolean"?s:s[a];return e}function wl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function n_(t){return t.reduce((e,s)=>St(e,s.meta),{})}function xl(t,e){const s={};for(const a in t)s[a]=a in e?e[a]:t[a];return s}function ar(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function s_(t,e){for(const s of t.keys)if(!s.optional&&!e.keys.find(ar.bind(null,s)))return wt(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`);for(const s of e.keys)if(!s.optional&&!t.keys.find(ar.bind(null,s)))return wt(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`)}function o_(t,e){e&&e.record.name&&!t.name&&!t.path&&wt(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function a_(t,e){for(const s of e.keys)if(!t.keys.find(ar.bind(null,s)))return wt(`Absolute path "${t.record.path}" must have the exact same param named "${s.name}" as its parent "${e.record.path}".`)}function Eu(t,e){return e.children.some(s=>s===t||Eu(t,s))}const Pu=/#/g,r_=/&/g,i_=/\//g,l_=/=/g,c_=/\?/g,Lu=/\+/g,u_=/%5B/g,p_=/%5D/g,Ou=/%5E/g,f_=/%60/g,Tu=/%7B/g,d_=/%7C/g,Au=/%7D/g,m_=/%20/g;function Vr(t){return encodeURI(""+t).replace(d_,"|").replace(u_,"[").replace(p_,"]")}function h_(t){return Vr(t).replace(Tu,"{").replace(Au,"}").replace(Ou,"^")}function rr(t){return Vr(t).replace(Lu,"%2B").replace(m_,"+").replace(Pu,"%23").replace(r_,"%26").replace(f_,"`").replace(Tu,"{").replace(Au,"}").replace(Ou,"^")}function g_(t){return rr(t).replace(l_,"%3D")}function __(t){return Vr(t).replace(Pu,"%23").replace(c_,"%3F")}function k_(t){return t==null?"":__(t).replace(i_,"%2F")}function oo(t){try{return decodeURIComponent(""+t)}catch{wt(`Error decoding "${t}". Using original value`)}return""+t}function v_(t){const e={};if(t===""||t==="?")return e;const a=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<a.length;++r){const i=a[r].replace(Lu," "),l=i.indexOf("="),c=oo(l<0?i:i.slice(0,l)),u=l<0?null:oo(i.slice(l+1));if(c in e){let p=e[c];we(p)||(p=e[c]=[p]),p.push(u)}else e[c]=u}return e}function bl(t){let e="";for(let s in t){const a=t[s];if(s=g_(s),a==null){a!==void 0&&(e+=(e.length?"&":"")+s);continue}(we(a)?a.map(i=>i&&rr(i)):[a&&rr(a)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+s,i!=null&&(e+="="+i))})}return e}function y_(t){const e={};for(const s in t){const a=t[s];a!==void 0&&(e[s]=we(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return e}const w_=Symbol("router view location matched"),Sl=Symbol("router view depth"),Wr=Symbol("router"),Mu=Symbol("route location"),ir=Symbol("router view location");function Os(){let t=[];function e(a){return t.push(a),()=>{const r=t.indexOf(a);r>-1&&t.splice(r,1)}}function s(){t=[]}return{add:e,list:()=>t,reset:s}}function _n(t,e,s,a,r){const i=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=f=>{f===!1?c(ws(4,{from:s,to:e})):f instanceof Error?c(f):Dg(f)?c(ws(2,{from:e,to:f})):(i&&a.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),l())},p=t.call(a&&a.instances[r],e,s,x_(u,e,s));let d=Promise.resolve(p);if(t.length<3&&(d=d.then(u)),t.length>2){const f=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(m=>u._called?m:(wt(f),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){wt(f),c(new Error("Invalid navigation guard"));return}}d.catch(f=>c(f))})}function x_(t,e,s){let a=0;return function(){a++===1&&wt(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,a===1&&t.apply(null,arguments)}}function La(t,e,s,a){const r=[];for(const i of t){!i.components&&!i.children.length&&wt(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const l in i.components){let c=i.components[l];{if(!c||typeof c!="object"&&typeof c!="function")throw wt(`Component "${l}" in record with path "${i.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){wt(`Component "${l}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,wt(`Component "${l}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[l]))if(b_(c)){const p=(c.__vccOpts||c)[e];p&&r.push(_n(p,s,a,i,l))}else{let u=c();"catch"in u||(wt(`Component "${l}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),r.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const d=bg(p)?p.default:p;i.components[l]=d;const m=(d.__vccOpts||d)[e];return m&&_n(m,s,a,i,l)()}))}}}return r}function b_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $l(t){const e=Y(Wr),s=Y(Mu),a=O(()=>e.resolve(w(t.to))),r=O(()=>{const{matched:u}=a.value,{length:p}=u,d=u[p-1],f=s.matched;if(!d||!f.length)return-1;const m=f.findIndex(Ln.bind(null,d));if(m>-1)return m;const g=Cl(u[p-2]);return p>1&&Cl(d)===g&&f[f.length-1].path!==g?f.findIndex(Ln.bind(null,u[p-2])):m}),i=O(()=>r.value>-1&&E_(s.params,a.value.params)),l=O(()=>r.value>-1&&r.value===s.matched.length-1&&bu(s.params,a.value.params));function c(u={}){return C_(u)?e[w(t.replace)?"replace":"push"](w(t.to)).catch(qs):Promise.resolve()}if(tn){const u=Ye();if(u){const p={route:a.value,isActive:i.value,isExactActive:l.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),bs(()=>{p.route=a.value,p.isActive=i.value,p.isExactActive=l.value},{flush:"post"})}}return{route:a,href:O(()=>a.value.href),isActive:i,isExactActive:l,navigate:c}}const S_=Dt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$l,setup(t,{slots:e}){const s=Jt($l(t)),{options:a}=Y(Wr),r=O(()=>({[El(t.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[El(t.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const i=e.default&&e.default(s);return t.custom?i:Ss("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:r.value},i)}}}),$_=S_;function C_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function E_(t,e){for(const s in e){const a=e[s],r=t[s];if(typeof a=="string"){if(a!==r)return!1}else if(!we(r)||r.length!==a.length||a.some((i,l)=>i!==r[l]))return!1}return!0}function Cl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const El=(t,e,s)=>t??e??s,P_=Dt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:s}){O_();const a=Y(ir),r=O(()=>t.route||a.value),i=Y(Sl,0),l=O(()=>{let p=w(i);const{matched:d}=r.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),c=O(()=>r.value.matched[l.value]);_e(Sl,O(()=>l.value+1)),_e(w_,c),_e(ir,r);const u=ot();return Ft(()=>[u.value,c.value,t.name],([p,d,f],[m,g,_])=>{d&&(d.instances[f]=p,g&&g!==d&&p&&p===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),p&&d&&(!g||!Ln(d,g)||!m)&&(d.enterCallbacks[f]||[]).forEach(v=>v(p))},{flush:"post"}),()=>{const p=r.value,d=t.name,f=c.value,m=f&&f.components[d];if(!m)return Pl(s.default,{Component:m,route:p});const g=f.props[d],_=g?g===!0?p.params:typeof g=="function"?g(p):g:null,y=Ss(m,St({},_,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[d]=null)},ref:u}));if(tn&&y.ref){const C={depth:l.value,name:f.name,path:f.path,meta:f.meta};(we(y.ref)?y.ref.map($=>$.i):[y.ref.i]).forEach($=>{$.__vrv_devtools=C})}return Pl(s.default,{Component:y,route:p})||y}}});function Pl(t,e){if(!t)return null;const s=t(e);return s.length===1?s[0]:s}const L_=P_;function O_(){const t=Ye(),e=t.parent&&t.parent.type.name;if(e&&(e==="KeepAlive"||e.includes("Transition"))){const s=e==="KeepAlive"?"keep-alive":"transition";wt(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Ts(t,e){const s=St({},t,{matched:t.matched.map(a=>j_(a,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:s}}}function bo(t){return{_custom:{display:t}}}let T_=0;function A_(t,e,s){if(e.__hasDevtools)return;e.__hasDevtools=!0;const a=T_++;xg({id:"org.vuejs.router"+(a?"."+a:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ts(e.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const m=f.__vrv_devtools;d.tags.push({label:(m.name?`${m.name.toString()}: `:"")+m.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Iu})}we(f.__vrl_devtools)&&(f.__devtoolsApi=r,f.__vrl_devtools.forEach(m=>{let g=Fu,_="";m.isExactActive?(g=Nu,_="This is exactly active"):m.isActive&&(g=Ru,_="This link is active"),d.tags.push({label:m.route.path,textColor:0,tooltip:_,backgroundColor:g})}))}),Ft(e.currentRoute,()=>{u(),r.notifyComponentUpdate(),r.sendInspectorTree(c),r.sendInspectorState(c)});const i="router:navigations:"+a;r.addTimelineLayer({id:i,label:`Router${a?" "+a:""} Navigations`,color:4237508}),e.onError((d,f)=>{r.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:r.now(),data:{error:d},groupId:f.meta.__navigationId}})});let l=0;e.beforeEach((d,f)=>{const m={guard:bo("beforeEach"),from:Ts(f,"Current Location during this navigation"),to:Ts(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:l++}),r.addTimelineEvent({layerId:i,event:{time:r.now(),title:"Start of navigation",subtitle:d.fullPath,data:m,groupId:d.meta.__navigationId}})}),e.afterEach((d,f,m)=>{const g={guard:bo("afterEach")};m?(g.failure={_custom:{type:Error,readOnly:!0,display:m?m.message:"",tooltip:"Navigation Failure",value:m}},g.status=bo("❌")):g.status=bo("✅"),g.from=Ts(f,"Current Location during this navigation"),g.to=Ts(d,"Target location"),r.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:d.fullPath,time:r.now(),data:g,logType:m?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+a;r.addInspector({id:c,label:"Routes"+(a?" "+a:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let f=s.getRoutes().filter(m=>!m.parent);f.forEach(Du),d.filter&&(f=f.filter(m=>lr(m,d.filter.toLowerCase()))),f.forEach(m=>ju(m,e.currentRoute.value)),d.rootNodes=f.map(Uu)}let p;r.on.getInspectorTree(d=>{p=d,d.app===t&&d.inspectorId===c&&u()}),r.on.getInspectorState(d=>{if(d.app===t&&d.inspectorId===c){const m=s.getRoutes().find(g=>g.record.__vd_id===d.nodeId);m&&(d.state={options:I_(m)})}}),r.sendInspectorTree(c),r.sendInspectorState(c)})}function M_(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function I_(t){const{record:e}=t,s=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&s.push({editable:!1,key:"name",value:e.name}),s.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(a=>`${a.name}${M_(a)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&s.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&s.push({editable:!1,key:"aliases",value:t.alias.map(a=>a.record.path)}),Object.keys(t.record.meta).length&&s.push({editable:!1,key:"meta",value:t.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(a=>a.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),s}const Iu=15485081,Ru=2450411,Nu=8702998,R_=2282478,Fu=16486972,N_=6710886;function Uu(t){const e=[],{record:s}=t;s.name!=null&&e.push({label:String(s.name),textColor:0,backgroundColor:R_}),s.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Fu}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Iu}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Nu}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Ru}),s.redirect&&e.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:N_});let a=s.__vd_id;return a==null&&(a=String(F_++),s.__vd_id=a),{id:a,label:s.path,tags:e,children:t.children.map(Uu)}}let F_=0;const U_=/^\/(.*)\/([a-z]*)$/;function ju(t,e){const s=e.matched.length&&Ln(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=s,s||(t.__vd_active=e.matched.some(a=>Ln(a,t.record))),t.children.forEach(a=>ju(a,e))}function Du(t){t.__vd_match=!1,t.children.forEach(Du)}function lr(t,e){const s=String(t.re).match(U_);if(t.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(e))return t.children.forEach(l=>lr(l,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const r=t.record.path.toLowerCase(),i=oo(r);return!e.startsWith("/")&&(i.includes(e)||r.includes(e))||i.startsWith(e)||r.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(l=>lr(l,e))}function j_(t,e){const s={};for(const a in t)e.includes(a)||(s[a]=t[a]);return s}function D_(t){const e=Jg(t.routes,t),s=t.parseQuery||v_,a=t.stringifyQuery||bl,r=t.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Os(),l=Os(),c=Os(),u=ze(mn);let p=mn;tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ea.bind(null,E=>""+E),f=Ea.bind(null,k_),m=Ea.bind(null,oo);function g(E,G){let H,X;return $u(E)?(H=e.getRecordMatcher(E),X=G):X=E,e.addRoute(X,H)}function _(E){const G=e.getRecordMatcher(E);G?e.removeRoute(G):wt(`Cannot remove non-existent route "${String(E)}"`)}function v(){return e.getRoutes().map(E=>E.record)}function y(E){return!!e.getRecordMatcher(E)}function C(E,G){if(G=St({},G||u.value),typeof E=="string"){const lt=Pa(s,E,G.path),h=e.resolve({path:lt.path},G),k=r.createHref(lt.fullPath);return k.startsWith("//")?wt(`Location "${E}" resolved to "${k}". A resolved location cannot start with multiple slashes.`):h.matched.length||wt(`No match found for location with path "${E}"`),St(lt,h,{params:m(h.params),hash:oo(lt.hash),redirectedFrom:void 0,href:k})}let H;if("path"in E)"params"in E&&!("name"in E)&&Object.keys(E.params).length&&wt(`Path "${E.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),H=St({},E,{path:Pa(s,E.path,G.path).path});else{const lt=St({},E.params);for(const h in lt)lt[h]==null&&delete lt[h];H=St({},E,{params:f(E.params)}),G.params=f(G.params)}const X=e.resolve(H,G),gt=E.hash||"";gt&&!gt.startsWith("#")&&wt(`A \`hash\` should always start with the character "#". Replace "${gt}" with "#${gt}".`),X.params=d(m(X.params));const yt=Cg(a,St({},E,{hash:h_(gt),path:X.path})),pt=r.createHref(yt);return pt.startsWith("//")?wt(`Location "${E}" resolved to "${pt}". A resolved location cannot start with multiple slashes.`):X.matched.length||wt(`No match found for location with path "${"path"in E?E.path:E}"`),St({fullPath:yt,hash:gt,query:a===bl?y_(E.query):E.query||{}},X,{redirectedFrom:void 0,href:pt})}function b(E){return typeof E=="string"?Pa(s,E,u.value.path):St({},E)}function $(E,G){if(p!==E)return ws(8,{from:G,to:E})}function P(E){return R(E)}function D(E){return P(St(b(E),{replace:!0}))}function V(E){const G=E.matched[E.matched.length-1];if(G&&G.redirect){const{redirect:H}=G;let X=typeof H=="function"?H(E):H;if(typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=b(X):{path:X},X.params={}),!("path"in X)&&!("name"in X))throw wt(`Invalid redirect found:
${JSON.stringify(X,null,2)}
 when navigating to "${E.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return St({query:E.query,hash:E.hash,params:"path"in X?{}:E.params},X)}}function R(E,G){const H=p=C(E),X=u.value,gt=E.state,yt=E.force,pt=E.replace===!0,lt=V(H);if(lt)return R(St(b(lt),{state:typeof lt=="object"?St({},gt,lt.state):gt,force:yt,replace:pt}),G||H);const h=H;h.redirectedFrom=G;let k;return!yt&&dl(a,X,H)&&(k=ws(16,{to:h,from:X}),Lt(X,X,!0,!1)),(k?Promise.resolve(k):Z(h,X)).catch(x=>Xe(x)?Xe(x,2)?x:mt(x):K(x,h,X)).then(x=>{if(x){if(Xe(x,2))return dl(a,C(x.to),h)&&G&&(G._count=G._count?G._count+1:1)>10?(wt(`Detected an infinite redirection in a navigation guard when going from "${X.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):R(St({replace:pt},b(x.to),{state:typeof x.to=="object"?St({},gt,x.to.state):gt,force:yt}),G||h)}else x=ct(h,X,!0,pt,gt);return nt(h,X,x),x})}function U(E,G){const H=$(E,G);return H?Promise.reject(H):Promise.resolve()}function Z(E,G){let H;const[X,gt,yt]=V_(E,G);H=La(X.reverse(),"beforeRouteLeave",E,G);for(const lt of X)lt.leaveGuards.forEach(h=>{H.push(_n(h,E,G))});const pt=U.bind(null,E,G);return H.push(pt),ls(H).then(()=>{H=[];for(const lt of i.list())H.push(_n(lt,E,G));return H.push(pt),ls(H)}).then(()=>{H=La(gt,"beforeRouteUpdate",E,G);for(const lt of gt)lt.updateGuards.forEach(h=>{H.push(_n(h,E,G))});return H.push(pt),ls(H)}).then(()=>{H=[];for(const lt of E.matched)if(lt.beforeEnter&&!G.matched.includes(lt))if(we(lt.beforeEnter))for(const h of lt.beforeEnter)H.push(_n(h,E,G));else H.push(_n(lt.beforeEnter,E,G));return H.push(pt),ls(H)}).then(()=>(E.matched.forEach(lt=>lt.enterCallbacks={}),H=La(yt,"beforeRouteEnter",E,G),H.push(pt),ls(H))).then(()=>{H=[];for(const lt of l.list())H.push(_n(lt,E,G));return H.push(pt),ls(H)}).catch(lt=>Xe(lt,8)?lt:Promise.reject(lt))}function nt(E,G,H){for(const X of c.list())X(E,G,H)}function ct(E,G,H,X,gt){const yt=$(E,G);if(yt)return yt;const pt=G===mn,lt=tn?history.state:{};H&&(X||pt?r.replace(E.fullPath,St({scroll:pt&&lt&&lt.scroll},gt)):r.push(E.fullPath,gt)),u.value=E,Lt(E,G,H,pt),mt()}let z;function kt(){z||(z=r.listen((E,G,H)=>{if(!un.listening)return;const X=C(E),gt=V(X);if(gt){R(St(gt,{replace:!0}),X).catch(qs);return}p=X;const yt=u.value;tn&&Ig(hl(yt.fullPath,H.delta),ma()),Z(X,yt).catch(pt=>Xe(pt,12)?pt:Xe(pt,2)?(R(pt.to,X).then(lt=>{Xe(lt,20)&&!H.delta&&H.type===so.pop&&r.go(-1,!1)}).catch(qs),Promise.reject()):(H.delta&&r.go(-H.delta,!1),K(pt,X,yt))).then(pt=>{pt=pt||ct(X,yt,!1),pt&&(H.delta&&!Xe(pt,8)?r.go(-H.delta,!1):H.type===so.pop&&Xe(pt,20)&&r.go(-1,!1)),nt(X,yt,pt)}).catch(qs)}))}let Mt=Os(),xt=Os(),It;function K(E,G,H){mt(E);const X=xt.list();return X.length?X.forEach(gt=>gt(E,G,H)):(wt("uncaught error during route navigation:"),console.error(E)),Promise.reject(E)}function rt(){return It&&u.value!==mn?Promise.resolve():new Promise((E,G)=>{Mt.add([E,G])})}function mt(E){return It||(It=!E,kt(),Mt.list().forEach(([G,H])=>E?H(E):G()),Mt.reset()),E}function Lt(E,G,H,X){const{scrollBehavior:gt}=t;if(!tn||!gt)return Promise.resolve();const yt=!H&&Rg(hl(E.fullPath,0))||(X||!H)&&history.state&&history.state.scroll||null;return Ie().then(()=>gt(E,G,yt)).then(pt=>pt&&Mg(pt)).catch(pt=>K(pt,E,G))}const de=E=>r.go(E);let te;const pe=new Set,un={currentRoute:u,listening:!0,addRoute:g,removeRoute:_,hasRoute:y,getRoutes:v,resolve:C,options:t,push:P,replace:D,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:i.add,beforeResolve:l.add,afterEach:c.add,onError:xt.add,isReady:rt,install(E){const G=this;E.component("RouterLink",$_),E.component("RouterView",L_),E.config.globalProperties.$router=G,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>w(u)}),tn&&!te&&u.value===mn&&(te=!0,P(r.location).catch(gt=>{wt("Unexpected error when starting the router:",gt)}));const H={};for(const gt in mn)H[gt]=O(()=>u.value[gt]);E.provide(Wr,G),E.provide(Mu,Jt(H)),E.provide(ir,u);const X=E.unmount;pe.add(E),E.unmount=function(){pe.delete(E),pe.size<1&&(p=mn,z&&z(),z=null,u.value=mn,te=!1,It=!1),X()},tn&&A_(E,G,e)}};return un}function ls(t){return t.reduce((e,s)=>e.then(()=>s()),Promise.resolve())}function V_(t,e){const s=[],a=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let l=0;l<i;l++){const c=e.matched[l];c&&(t.matched.find(p=>Ln(p,c))?a.push(c):s.push(c));const u=t.matched[l];u&&(e.matched.find(p=>Ln(p,u))||r.push(u))}return[s,a,r]}const Oa=ot(!1),Ks=ot(!1),hs=ot(!1),W_=ot(!0),cr=yh({xs:460,...hh}),Gn=mg(),Vu=ng(),H_=O(()=>Gn.height.value-Gn.width.value/bn>180),Wu=tg(Ne?document.body:null),ys=yu(),B_=O(()=>{var t,e;return["INPUT","TEXTAREA"].includes(((t=ys.value)==null?void 0:t.tagName)||"")||((e=ys.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),q_=O(()=>{var t;return["BUTTON","A"].includes(((t=ys.value)==null?void 0:t.tagName)||"")});Ee("slidev-camera","default");Ee("slidev-mic","default");const Lo=Ee("slidev-scale",0),ie=Ee("slidev-show-overview",!1),Ta=Ee("slidev-presenter-cursor",!0),Ll=Ee("slidev-show-editor",!1);Ee("slidev-editor-width",Ne?window.innerWidth*.4:100);const Hu=gu(ie);function Ol(t,e,s,a=r=>r){return t*a(.5-e*(.5-s))}function z_(t){return[-t[0],-t[1]]}function Oe(t,e){return[t[0]+e[0],t[1]+e[1]]}function Se(t,e){return[t[0]-e[0],t[1]-e[1]]}function Le(t,e){return[t[0]*e,t[1]*e]}function K_(t,e){return[t[0]/e,t[1]/e]}function As(t){return[t[1],-t[0]]}function Tl(t,e){return t[0]*e[0]+t[1]*e[1]}function G_(t,e){return t[0]===e[0]&&t[1]===e[1]}function Y_(t){return Math.hypot(t[0],t[1])}function X_(t){return t[0]*t[0]+t[1]*t[1]}function Al(t,e){return X_(Se(t,e))}function Bu(t){return K_(t,Y_(t))}function Z_(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function Ms(t,e,s){let a=Math.sin(s),r=Math.cos(s),i=t[0]-e[0],l=t[1]-e[1],c=i*r-l*a,u=i*a+l*r;return[c+e[0],u+e[1]]}function ur(t,e,s){return Oe(t,Le(Se(e,t),s))}function Ml(t,e,s){return Oe(t,Le(e,s))}var{min:cs,PI:Q_}=Math,Il=.275,Is=Q_+1e-4;function J_(t,e={}){let{size:s=16,smoothing:a=.5,thinning:r=.5,simulatePressure:i=!0,easing:l=K=>K,start:c={},end:u={},last:p=!1}=e,{cap:d=!0,easing:f=K=>K*(2-K)}=c,{cap:m=!0,easing:g=K=>--K*K*K+1}=u;if(t.length===0||s<=0)return[];let _=t[t.length-1].runningLength,v=c.taper===!1?0:c.taper===!0?Math.max(s,_):c.taper,y=u.taper===!1?0:u.taper===!0?Math.max(s,_):u.taper,C=Math.pow(s*a,2),b=[],$=[],P=t.slice(0,10).reduce((K,rt)=>{let mt=rt.pressure;if(i){let Lt=cs(1,rt.distance/s),de=cs(1,1-Lt);mt=cs(1,K+(de-K)*(Lt*Il))}return(K+mt)/2},t[0].pressure),D=Ol(s,r,t[t.length-1].pressure,l),V,R=t[0].vector,U=t[0].point,Z=U,nt=U,ct=Z,z=!1;for(let K=0;K<t.length;K++){let{pressure:rt}=t[K],{point:mt,vector:Lt,distance:de,runningLength:te}=t[K];if(K<t.length-1&&_-te<3)continue;if(r){if(i){let yt=cs(1,de/s),pt=cs(1,1-yt);rt=cs(1,P+(pt-P)*(yt*Il))}D=Ol(s,r,rt,l)}else D=s/2;V===void 0&&(V=D);let pe=te<v?f(te/v):1,un=_-te<y?g((_-te)/y):1;D=Math.max(.01,D*Math.min(pe,un));let E=(K<t.length-1?t[K+1]:t[K]).vector,G=K<t.length-1?Tl(Lt,E):1,H=Tl(Lt,R)<0&&!z,X=G!==null&&G<0;if(H||X){let yt=Le(As(R),D);for(let pt=1/13,lt=0;lt<=1;lt+=pt)nt=Ms(Se(mt,yt),mt,Is*lt),b.push(nt),ct=Ms(Oe(mt,yt),mt,Is*-lt),$.push(ct);U=nt,Z=ct,X&&(z=!0);continue}if(z=!1,K===t.length-1){let yt=Le(As(Lt),D);b.push(Se(mt,yt)),$.push(Oe(mt,yt));continue}let gt=Le(As(ur(E,Lt,G)),D);nt=Se(mt,gt),(K<=1||Al(U,nt)>C)&&(b.push(nt),U=nt),ct=Oe(mt,gt),(K<=1||Al(Z,ct)>C)&&($.push(ct),Z=ct),P=rt,R=Lt}let kt=t[0].point.slice(0,2),Mt=t.length>1?t[t.length-1].point.slice(0,2):Oe(t[0].point,[1,1]),xt=[],It=[];if(t.length===1){if(!(v||y)||p){let K=Ml(kt,Bu(As(Se(kt,Mt))),-(V||D)),rt=[];for(let mt=1/13,Lt=mt;Lt<=1;Lt+=mt)rt.push(Ms(K,kt,Is*2*Lt));return rt}}else{if(!(v||y&&t.length===1))if(d)for(let rt=1/13,mt=rt;mt<=1;mt+=rt){let Lt=Ms($[0],kt,Is*mt);xt.push(Lt)}else{let rt=Se(b[0],$[0]),mt=Le(rt,.5),Lt=Le(rt,.51);xt.push(Se(kt,mt),Se(kt,Lt),Oe(kt,Lt),Oe(kt,mt))}let K=As(z_(t[t.length-1].vector));if(y||v&&t.length===1)It.push(Mt);else if(m){let rt=Ml(Mt,K,D);for(let mt=1/29,Lt=mt;Lt<1;Lt+=mt)It.push(Ms(rt,Mt,Is*3*Lt))}else It.push(Oe(Mt,Le(K,D)),Oe(Mt,Le(K,D*.99)),Se(Mt,Le(K,D*.99)),Se(Mt,Le(K,D)))}return b.concat(It,$.reverse(),xt)}function tk(t,e={}){var s;let{streamline:a=.5,size:r=16,last:i=!1}=e;if(t.length===0)return[];let l=.15+(1-a)*.85,c=Array.isArray(t[0])?t:t.map(({x:g,y:_,pressure:v=.5})=>[g,_,v]);if(c.length===2){let g=c[1];c=c.slice(0,-1);for(let _=1;_<5;_++)c.push(ur(c[0],g,_/4))}c.length===1&&(c=[...c,[...Oe(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=u[0],m=c.length-1;for(let g=1;g<c.length;g++){let _=i&&g===m?c[g].slice(0,2):ur(f.point,c[g],l);if(G_(f.point,_))continue;let v=Z_(_,f.point);if(d+=v,g<m&&!p){if(d<r)continue;p=!0}f={point:_,pressure:c[g][2]>=0?c[g][2]:.5,vector:Bu(Se(f.point,_)),distance:v,runningLength:d},u.push(f)}return u[0].vector=((s=u[1])==null?void 0:s.vector)||[0,0],u}function ek(t,e={}){return J_(tk(t,e),e)}var nk=()=>({events:{},emit(t,...e){let s=this.events[t]||[];for(let a=0,r=s.length;a<r;a++)s[a](...e)},on(t,e){var s;return(s=this.events[t])!=null&&s.push(e)||(this.events[t]=[e]),()=>{var a;this.events[t]=(a=this.events[t])==null?void 0:a.filter(r=>e!==r)}}});function qo(t,e){return t-e}function sk(t){return t<0?-1:1}function zo(t){return[Math.abs(t),sk(t)]}function qu(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var ok=2,en=ok,$s=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e;const s=this.drauu.el,a=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-r.left)*a,y:(t.pageY-r.top)*a,pressure:t.pressure}}else{const r=this.drauu.svgPoint;r.x=t.clientX,r.y=t.clientY;const i=r.matrixTransform((e=s.getScreenCTM())==null?void 0:e.inverse());return{x:i.x*a,y:i.y*a,pressure:t.pressure}}}createElement(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg",t),a=e?{...this.brush,...e}:this.brush;return s.setAttribute("fill",a.fill??"transparent"),s.setAttribute("stroke",a.color),s.setAttribute("stroke-width",a.size.toString()),s.setAttribute("stroke-linecap","round"),a.dasharray&&s.setAttribute("stroke-dasharray",a.dasharray),s}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(en))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},ak=class extends $s{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const e=ek(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!e.length)return"";const s=e.reduce((a,[r,i],l,c)=>{const[u,p]=c[(l+1)%c.length];return a.push(r,i,(r+u)/2,(i+p)/2),a},["M",...e[0],"Q"]);return s.push("Z"),s.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},rk=class extends $s{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=zo(t.x-this.start.x),[a,r]=zo(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,a);e=i,a=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",a);else{const[i,l]=[this.start.x,this.start.x+e*s].sort(qo),[c,u]=[this.start.y,this.start.y+a*r].sort(qo);this.attr("cx",(i+l)/2),this.attr("cy",(c+u)/2),this.attr("rx",(l-i)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function zu(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",e),a.setAttribute("id",t),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(r),s.appendChild(a),s}var ik=class extends $s{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=qu(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(zu(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const a=t.x-this.start.x,r=t.y-this.start.y;if(r!==0){let i=a/r;i=Math.round(i),Math.abs(i)<=1?(e=this.start.x+r*i,s=this.start.y+r):(e=this.start.x+a,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},lk=class extends $s{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=zo(t.x-this.start.x),[a,r]=zo(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,a);e=i,a=i}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-a),this.attr("width",e*2),this.attr("height",a*2);else{const[i,l]=[this.start.x,this.start.x+e*s].sort(qo),[c,u]=[this.start.y,this.start.y+a*r].sort(qo);this.attr("x",i),this.attr("y",c),this.attr("width",l-i),this.attr("height",u-c)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function ck(t,e){const s=t.x-e.x,a=t.y-e.y;return s*s+a*a}function uk(t,e,s){let a=e.x,r=e.y,i=s.x-a,l=s.y-r;if(i!==0||l!==0){const c=((t.x-a)*i+(t.y-r)*l)/(i*i+l*l);c>1?(a=s.x,r=s.y):c>0&&(a+=i*c,r+=l*c)}return i=t.x-a,l=t.y-r,i*i+l*l}function pk(t,e){let s=t[0];const a=[s];let r;for(let i=1,l=t.length;i<l;i++)r=t[i],ck(r,s)>e&&(a.push(r),s=r);return s!==r&&r&&a.push(r),a}function pr(t,e,s,a,r){let i=a,l=0;for(let c=e+1;c<s;c++){const u=uk(t[c],t[e],t[s]);u>i&&(l=c,i=u)}i>a&&(l-e>1&&pr(t,e,l,a,r),r.push(t[l]),s-l>1&&pr(t,l,s,a,r))}function fk(t,e){const s=t.length-1,a=[t[0]];return pr(t,0,s,e,a),a.push(t[s]),a}function Rl(t,e,s=!1){if(t.length<=2)return t;const a=e!==void 0?e*e:1;return t=s?t:pk(t,a),t=fk(t,a),t}var dk=class extends $s{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=qu();const e=zu(this.arrowId,this.brush.color);this.el.appendChild(e)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=Rl(this.points,1,!0),this.count=0),this.attr("d",Fl(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",Fl(Rl(this.points,1,!0))),!t.getTotalLength()))}};function mk(t,e){const s=e.x-t.x,a=e.y-t.y;return{length:Math.sqrt(s**2+a**2),angle:Math.atan2(a,s)}}function Nl(t,e,s,a){const r=e||t,i=s||t,l=.2,c=mk(r,i),u=c.angle+(a?Math.PI:0),p=c.length*l,d=t.x+Math.cos(u)*p,f=t.y+Math.sin(u)*p;return{x:d,y:f}}function hk(t,e,s){const a=Nl(s[e-1],s[e-2],t),r=Nl(t,s[e-1],s[e+1],!0);return`C ${a.x.toFixed(en)},${a.y.toFixed(en)} ${r.x.toFixed(en)},${r.y.toFixed(en)} ${t.x.toFixed(en)},${t.y.toFixed(en)}`}function Fl(t){return t.reduce((e,s,a,r)=>a===0?`M ${s.x.toFixed(en)},${s.y.toFixed(en)}`:`${e} ${hk(s,a,r)}`,"")}var gk=class extends $s{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const e=(s,a)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const i=s[r];if(i.getTotalLength){const l=i.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=i.getPointAtLength(l*c/this.pathSubFactor),p=i.getPointAtLength(l*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:a||i})}}else i.children&&e(i.children,i)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let e=0;e<this.pathFragments.length;e++){const s=this.pathFragments[e],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,a)&&(s.element.remove(),t.push(e))}return t.length&&(this.pathFragments=this.pathFragments.filter((e,s)=>!t.includes(s))),t.length>0}lineLineIntersect(t,e){const s=t.x1,a=t.x2,r=e.x1,i=e.x2,l=t.y1,c=t.y2,u=e.y1,p=e.y2,d=(s-a)*(u-p)-(l-c)*(r-i),f=(s*c-l*a)*(r-i)-(s-a)*(r*p-u*i),m=(s*c-l*a)*(u-p)-(l-c)*(r*p-u*i),g=(_,v,y)=>_>=v&&_<=y?!0:_>=y&&_<=v;if(d===0)return!1;{const _={x:f/d,y:m/d};return g(_.x,s,a)&&g(_.y,l,c)&&g(_.x,r,i)&&g(_.y,u,p)}}};function _k(t){return{draw:new dk(t),stylus:new ak(t),line:new ik(t),rectangle:new lk(t),ellipse:new rk(t),eraseLine:new gk(t)}}var kk=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=nk(),this._models=_k(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(e)||this.el,a=this.eventStart.bind(this),r=this.eventMove.bind(this),i=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);e?(e instanceof Element&&e!==this._currentNode&&(this._currentNode=e),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function vk(t){return new kk(t)}const fr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Be=Ee("slidev-drawing-enabled",!1),k$=Ee("slidev-drawing-pinned",!1),yk=ot(!1),wk=ot(!1),xk=ot(!1),ao=ot(!1),Wn=Hm(Ee("slidev-drawing-brush",{color:fr[0],size:4,mode:"stylus"})),Ul=ot("stylus"),Ku=O(()=>Nt.drawings.syncAll||sn.value);let ro=!1;const Rs=O({get(){return Ul.value},set(t){Ul.value=t,t==="arrow"?(Wn.mode="line",Wn.arrowEnd=!0):(Wn.mode=t,Wn.arrowEnd=!1)}}),bk=Jt({brush:Wn,acceptsInputTypes:O(()=>Be.value?void 0:["pen"]),coordinateTransform:!1}),ue=br(vk(bk));function Sk(){ue.clear(),Ku.value&&fu(Xt.value,"")}function Gu(){var t;wk.value=ue.canRedo(),yk.value=ue.canUndo(),xk.value=!!((t=ue.el)!=null&&t.children.length)}function $k(t){ro=!0;const e=Ho[t||Xt.value];e!=null?ue.load(e):ue.clear(),ro=!1}ue.on("changed",()=>{if(Gu(),!ro){const t=ue.dump(),e=Xt.value;(Ho[e]||"")!==t&&Ku.value&&fu(e,ue.dump())}});Im(t=>{ro=!0,t[Xt.value]!=null&&ue.load(t[Xt.value]||""),ro=!1,Gu()});Ie(()=>{Ft(Xt,()=>{ue.mounted&&$k()},{immediate:!0})});ue.on("start",()=>ao.value=!0);ue.on("end",()=>ao.value=!1);window.addEventListener("keydown",t=>{if(!Be.value)return;const e=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let s=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?ue.redo():ue.undo():t.code==="Escape"?Be.value=!1:t.code==="KeyL"&&e?Rs.value="line":t.code==="KeyA"&&e?Rs.value="arrow":t.code==="KeyS"&&e?Rs.value="stylus":t.code==="KeyR"&&e?Rs.value="rectangle":t.code==="KeyE"&&e?Rs.value="ellipse":t.code==="KeyC"&&e?Sk():t.code.startsWith("Digit")&&e&&+t.code[5]<=fr.length?Wn.color=fr[+t.code[5]-1]:s=!1,s&&(t.preventDefault(),t.stopPropagation())},!1);function Bt(...t){return O(()=>t.every(e=>ce(e)))}function me(t){return O(()=>!ce(t))}const jl=Dr(),Aa=Ee("slidev-color-schema","auto"),dr=O(()=>Nt.colorSchema!=="auto"),Hr=O({get(){return dr.value?Nt.colorSchema==="dark":Aa.value==="auto"?jl.value:Aa.value==="dark"},set(t){dr.value||(Aa.value=t===jl.value?"auto":t?"dark":"light")}}),Yu=gu(Hr);Ne&&Ft(Hr,t=>{const e=document.querySelector("html");e.classList.toggle("dark",t),e.classList.toggle("light",!t)},{immediate:!0});const Oo=ot(1),To=O(()=>zt.length-1),ke=ot(0),Br=ot(0);function Ck(){ke.value>Oo.value&&(ke.value-=1)}function Ek(){ke.value<To.value&&(ke.value+=1)}function Pk(){if(ke.value>Oo.value){let t=ke.value-Br.value;t<Oo.value&&(t=Oo.value),ke.value=t}}function Lk(){if(ke.value<To.value){let t=ke.value+Br.value;t>To.value&&(t=To.value),ke.value=t}}function Ok(){const{escape:t,space:e,shift:s,left:a,right:r,up:i,down:l,enter:c,d:u,g:p,o:d}=Vu;let f=[{name:"next_space",key:Bt(e,me(s)),fn:Yn,autoRepeat:!0},{name:"prev_space",key:Bt(e,s),fn:Xn,autoRepeat:!0},{name:"next_right",key:Bt(r,me(s),me(ie)),fn:Yn,autoRepeat:!0},{name:"prev_left",key:Bt(a,me(s),me(ie)),fn:Xn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Yn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Xn,autoRepeat:!0},{name:"next_down",key:Bt(l,me(ie)),fn:Go,autoRepeat:!0},{name:"prev_up",key:Bt(i,me(ie)),fn:()=>Yo(!1),autoRepeat:!0},{name:"next_shift",key:Bt(r,s),fn:Go,autoRepeat:!0},{name:"prev_shift",key:Bt(a,s),fn:()=>Yo(!1),autoRepeat:!0},{name:"toggle_dark",key:Bt(u,me(Be)),fn:Yu},{name:"toggle_overview",key:Bt(d,me(Be)),fn:Hu},{name:"hide_overview",key:Bt(t,me(Be)),fn:()=>ie.value=!1},{name:"goto",key:Bt(p,me(Be)),fn:()=>hs.value=!hs.value},{name:"next_overview",key:Bt(r,ie),fn:Ek},{name:"prev_overview",key:Bt(a,ie),fn:Ck},{name:"up_overview",key:Bt(i,ie),fn:Pk},{name:"down_overview",key:Bt(l,ie),fn:Lk},{name:"goto_from_overview",key:Bt(c,ie),fn:()=>{xs(ke.value),ie.value=!1}}];const m=new Set(f.map(_=>_.name));if(f.filter(_=>_.name&&m.has(_.name)).length===0){const _=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(_),console.warn(_)}return f}const Xu=Bt(me(B_),me(q_),W_);function Tk(t,e,s=!1){typeof t=="string"&&(t=Vu[t]);const a=Bt(t,Xu);let r=0,i;const l=()=>{if(clearTimeout(i),!a.value){r=0;return}s&&(i=setTimeout(l,Math.max(1e3-r*250,150)),r++),e()};return Ft(a,l,{flush:"sync"})}function Ak(t,e){return mh(t,s=>{Xu.value&&(s.repeat||e())})}function Mk(){const t=Ok();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&Tk(s.key,s.fn,s.autoRepeat)}),Ak("f",()=>Wu.toggle())}const Ik={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rk=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Nk=[Rk];function Fk(t,e){return S(),q("svg",Ik,Nk)}const Uk={name:"carbon-close",render:Fk};function qr(t){var s,a;const e=(a=(s=t==null?void 0:t.meta)==null?void 0:s.slide)==null?void 0:a.no;return e!=null?`slidev-page-${e}`:""}const jk=Dt({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const e=t;Y(tt);const s=ot(),a=Jh(s),r=O(()=>e.width?e.width:a.width.value),i=O(()=>e.width?e.width/bn:a.height.value);e.width&&bs(()=>{s.value&&(s.value.style.width=`${r.value}px`,s.value.style.height=`${i.value}px`)});const l=O(()=>r.value/i.value),c=O(()=>e.scale?e.scale:l.value<bn?r.value/Sn:i.value*bn/Sn),u=O(()=>({height:`${Ur}px`,width:`${Sn}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=O(()=>({"select-none":!Nt.selectable,"slidev-code-line-numbers":Nt.lineNumbers}));return _e(uu,c),(d,f)=>(S(),q("div",{id:"slide-container",ref_key:"root",ref:s,class:jt(w(p))},[n("div",{id:"slide-content",style:ne(w(u))},[ye(d.$slots,"default")],4),ye(d.$slots,"controls")],2))}});const et=(t,e)=>{const s=t.__vccOpts||t;for(const[a,r]of e)s[a]=r;return s},Zu=et(jk,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/SlideContainer.vue"]]),zr=Dt({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:e}){const s=He(t,"clicks",e),a=He(t,"clicksElements",e),r=He(t,"clicksDisabled",e),i=He(t,"clicksOrderMap",e);a.value.length=0,_e(bm,t.route),_e(Sm,t.context),_e(iu,s),_e(cu,r),_e(lu,a),_e(xm,i)},render(){var t,e;return this.$props.is?Ss(this.$props.is):(e=(t=this.$slots)==null?void 0:t.default)==null?void 0:e.call(t)}}),Dk=["innerHTML"],Vk=Dt({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){return Y(tt),(e,s)=>w(Ho)[t.page]?(S(),q("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Ho)[t.page]},null,8,Dk)):ht("v-if",!0)}}),Qu=et(Vk,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Wk=Object.freeze(Object.defineProperty({__proto__:null,default:Qu},Symbol.toStringTag,{value:"Module"})),Hk={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Bk=["onClick"],qk=Dt({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(t,{emit:e}){const s=t;Y(tt);const a=He(s,"modelValue",e);function r(){a.value=!1}function i(g){xs(g),r()}function l(g){return g===ke.value}const c=cr.smaller("xs"),u=cr.smaller("sm"),p=4*16*2,d=2*16,f=O(()=>c.value?Gn.width.value-p:u.value?(Gn.width.value-p-d)/2:300),m=O(()=>Math.floor((Gn.width.value-p)/(f.value+d)));return bs(()=>{ke.value=Xt.value,Br.value=m.value}),(g,_)=>{const v=Uk;return S(),q($t,null,[ca(n("div",Hk,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ne(`grid-template-columns: repeat(auto-fit,minmax(${w(f)}px,1fr))`)},[(S(!0),q($t,null,fo(w(zt).slice(0,-1),(y,C)=>(S(),q("div",{key:y.path,class:"relative"},[n("div",{class:jt(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(C+1)}]),style:ne(w(jr)),onClick:b=>i(+y.path)},[(S(),st(Zu,{key:y.path,width:w(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:F(()=>[A(w(zr),{is:y==null?void 0:y.component,"clicks-disabled":!0,class:jt(w(qr)(y)),route:y,context:"overview"},null,8,["is","class","route"]),A(Qu,{page:+y.path},null,8,["page"])]),_:2},1032,["width"]))],14,Bk),n("div",{class:"absolute top-0 opacity-50",style:ne(`left: ${w(f)+5}px`)},an(C+1),5)]))),128))],4)],512),[[ru,w(a)]]),w(a)?(S(),q("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[A(v)])):ht("v-if",!0)],64)}}});const zk=et(qk,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Kk="/assets/logo-b72bde5d.png",Gk={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Yk=Dt({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:e}){const s=t;Y(tt);const a=He(s,"modelValue",e);function r(){a.value=!1}return(i,l)=>(S(),st(Ic,null,[w(a)?(S(),q("div",Gk,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=c=>r())}),n("div",{class:jt(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[ye(i.$slots,"default")],2)])):ht("v-if",!0)],1024))}}),Xk=et(Yk,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/Modal.vue"]]),Zk={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Qk=["innerHTML"],Jk=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:Kk,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),o("dev ")])])],-1),tv=Dt({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:e}){const s=t;Y(tt);const a=He(s,"modelValue",e),r=O(()=>typeof Nt.info=="string");return(i,l)=>(S(),st(Xk,{modelValue:w(a),"onUpdate:modelValue":l[0]||(l[0]=c=>bt(a)?a.value=c:null),class:"px-6 py-4"},{default:F(()=>[n("div",Zk,[w(r)?(S(),q("div",{key:0,class:"mb-4",innerHTML:w(Nt).info},null,8,Qk)):ht("v-if",!0),Jk])]),_:1},8,["modelValue"]))}});const ev=et(tv,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/InfoDialog.vue"]]),nv=["disabled","onKeydown"],sv=Dt({__name:"Goto",setup(t){Y(tt);const e=ot(),s=ot(""),a=O(()=>{if(s.value.startsWith("/"))return!!zt.find(l=>l.path===s.value.substring(1));{const l=+s.value;return!isNaN(l)&&l>0&&l<=up.value}});function r(){a.value&&(s.value.startsWith("/")?xs(s.value.substring(1)):xs(+s.value)),i()}function i(){hs.value=!1}return Ft(hs,async l=>{var c,u;l?(await Ie(),s.value="",(c=e.value)==null||c.focus()):(u=e.value)==null||u.blur()}),Ft(s,l=>{l.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(l,c)=>(S(),q("div",{id:"slidev-goto-dialog",class:jt(["fixed right-5 bg-main transform transition-all",w(hs)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[ca(n("input",{ref_key:"input",ref:e,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),type:"text",disabled:!w(hs),class:jt(["outline-none bg-transparent",{"text-red-400":!w(a)&&s.value}]),placeholder:"Goto...",onKeydown:[Vi(r,["enter"]),Vi(i,["escape"])],onBlur:i},null,42,nv),[[mm,s.value]])],2))}}),ov=et(sv,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/Goto.vue"]]),av=Dt({__name:"Controls",setup(t){Y(tt);const e=ze(),s=ze();return(a,r)=>(S(),q($t,null,[A(zk,{modelValue:w(ie),"onUpdate:modelValue":r[0]||(r[0]=i=>bt(ie)?ie.value=i:null)},null,8,["modelValue"]),A(ov),w(e)?(S(),st(w(e),{key:0})):ht("v-if",!0),w(s)?(S(),st(w(s),{key:1,modelValue:w(Oa),"onUpdate:modelValue":r[1]||(r[1]=i=>bt(Oa)?Oa.value=i:null)},null,8,["modelValue"])):ht("v-if",!0),w(Nt).info?(S(),st(ev,{key:2,modelValue:w(Ks),"onUpdate:modelValue":r[2]||(r[2]=i=>bt(Ks)?Ks.value=i:null)},null,8,["modelValue"])):ht("v-if",!0)],64))}}),rv=et(av,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/Controls.vue"]]),iv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lv=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),cv=[lv];function uv(t,e){return S(),q("svg",iv,cv)}const pv={name:"carbon-settings-adjust",render:uv},fv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dv=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),mv=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),hv=[dv,mv];function gv(t,e){return S(),q("svg",fv,hv)}const _v={name:"carbon-information",render:gv},kv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vv=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),yv=[vv];function wv(t,e){return S(),q("svg",kv,yv)}const xv={name:"carbon-download",render:wv},bv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sv=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),$v=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Cv=[Sv,$v];function Ev(t,e){return S(),q("svg",bv,Cv)}const Pv={name:"carbon-user-speaker",render:Ev},Lv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ov=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Tv=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Av=[Ov,Tv];function Mv(t,e){return S(),q("svg",Lv,Av)}const Iv={name:"carbon-presentation-file",render:Mv},Rv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nv=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Fv=[Nv];function Uv(t,e){return S(),q("svg",Rv,Fv)}const jv={name:"carbon-pen",render:Uv},Dv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Vv=n("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Wv=n("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Hv=[Vv,Wv];function Bv(t,e){return S(),q("svg",Dv,Hv)}const qv={name:"ph-cursor-duotone",render:Bv},zv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Kv=n("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Gv=[Kv];function Yv(t,e){return S(),q("svg",zv,Gv)}const Ju={name:"ph-cursor-fill",render:Yv},Xv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zv=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Qv=[Zv];function Jv(t,e){return S(),q("svg",Xv,Qv)}const t1={name:"carbon-sun",render:Jv},e1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n1=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),s1=[n1];function o1(t,e){return S(),q("svg",e1,s1)}const a1={name:"carbon-moon",render:o1},r1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i1=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),l1=[i1];function c1(t,e){return S(),q("svg",r1,l1)}const u1={name:"carbon-apps",render:c1},p1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f1=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),d1=[f1];function m1(t,e){return S(),q("svg",p1,d1)}const h1={name:"carbon-arrow-right",render:m1},g1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_1=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),k1=[_1];function v1(t,e){return S(),q("svg",g1,k1)}const y1={name:"carbon-arrow-left",render:v1},w1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x1=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),b1=[x1];function S1(t,e){return S(),q("svg",w1,b1)}const $1={name:"carbon-maximize",render:S1},C1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},E1=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),P1=[E1];function L1(t,e){return S(),q("svg",C1,P1)}const O1={name:"carbon-minimize",render:L1},T1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A1=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),M1=[A1];function I1(t,e){return S(),q("svg",T1,M1)}const R1={name:"carbon-checkmark",render:I1},N1={class:"select-list"},F1={class:"title"},U1={class:"items"},j1=["onClick"],D1=Dt({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:e}){const s=t;Y(tt);const a=He(s,"modelValue",e,{passive:!0});return(r,i)=>{const l=R1;return S(),q("div",N1,[n("div",F1,an(t.title),1),n("div",U1,[(S(!0),q($t,null,fo(t.items,c=>(S(),q("div",{key:c.value,class:jt(["item",{active:w(a)===c.value}]),onClick:()=>{var u;a.value=c.value,(u=c.onClick)==null||u.call(c)}},[A(l,{class:jt(["text-green-500",{"opacity-0":w(a)!==c.value}])},null,8,["class"]),o(" "+an(c.display||c.value),1)],10,j1))),128))])])}}});const V1=et(D1,[["__scopeId","data-v-3f89fa11"],["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/SelectList.vue"]]),W1={class:"text-sm"},H1=Dt({__name:"Settings",setup(t){Y(tt);const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,a)=>(S(),q("div",W1,[A(V1,{modelValue:w(Lo),"onUpdate:modelValue":a[0]||(a[0]=r=>bt(Lo)?Lo.value=r:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),B1=et(H1,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/Settings.vue"]]),q1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},z1=Dt({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:e}){const s=t;Y(tt);const a=He(s,"modelValue",e,{passive:!0}),r=ot();return fh(r,()=>{a.value=!1}),(i,l)=>(S(),q("div",{ref_key:"el",ref:r,class:"flex relative"},[n("button",{class:jt({disabled:t.disabled}),onClick:l[0]||(l[0]=c=>a.value=!w(a))},[ye(i.$slots,"button",{class:jt({disabled:t.disabled})})],2),(S(),st(Ic,null,[w(a)?(S(),q("div",q1,[ye(i.$slots,"menu")])):ht("v-if",!0)],1024))],512))}}),K1=et(z1,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/MenuButton.vue"]]),G1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Y1={__name:"VerticalDivider",setup(t){return Y(tt),(e,s)=>(S(),q("div",G1))}},So=et(Y1,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),X1={render(){return[]}},Z1={class:"icon-btn"},Q1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},J1={class:"my-auto"},t0={class:"opacity-50"},e0=Dt({__name:"NavControls",props:{persist:{default:!1}},setup(t){const e=t;Y(tt);const s=cr.smaller("md"),{isFullscreen:a,toggle:r}=Wu,i=O(()=>hr.value?`?password=${hr.value}`:""),l=O(()=>`/presenter/${Xt.value}${i.value}`),c=O(()=>`/${Xt.value}${i.value}`),u=ot(),p=()=>{u.value&&ys.value&&u.value.contains(ys.value)&&ys.value.blur()},d=O(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=ze(),m=ze();return ts(()=>import("./DrawingControls-340b4a03.js"),[]).then(g=>m.value=g.default),(g,_)=>{const v=O1,y=$1,C=y1,b=h1,$=u1,P=a1,D=t1,V=Ju,R=qv,U=jv,Z=Iv,nt=Wt("RouterLink"),ct=Pv,z=xv,kt=_v,Mt=pv;return S(),q("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[n("div",{class:jt(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(d)]),onMouseleave:p},[w(Je)?ht("v-if",!0):(S(),q("button",{key:0,class:"icon-btn",onClick:_[0]||(_[0]=(...xt)=>w(r)&&w(r)(...xt))},[w(a)?(S(),st(v,{key:0})):(S(),st(y,{key:1}))])),n("button",{class:jt(["icon-btn",{disabled:!w(US)}]),onClick:_[1]||(_[1]=(...xt)=>w(Xn)&&w(Xn)(...xt))},[A(C)],2),n("button",{class:jt(["icon-btn",{disabled:!w(FS)}]),title:"Next",onClick:_[2]||(_[2]=(...xt)=>w(Yn)&&w(Yn)(...xt))},[A(b)],2),w(Je)?ht("v-if",!0):(S(),q("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:_[3]||(_[3]=xt=>w(Hu)())},[A($)])),w(dr)?ht("v-if",!0):(S(),q("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:_[4]||(_[4]=xt=>w(Yu)())},[w(Hr)?(S(),st(P,{key:0})):(S(),st(D,{key:1}))])),A(So),w(Je)?ht("v-if",!0):(S(),q($t,{key:3},[!w(sn)&&!w(s)&&w(f)?(S(),q($t,{key:0},[A(w(f)),A(So)],64)):ht("v-if",!0),w(sn)?(S(),q("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:_[5]||(_[5]=xt=>Ta.value=!w(Ta))},[w(Ta)?(S(),st(V,{key:0})):(S(),st(R,{key:1,class:"opacity-50"}))])):ht("v-if",!0)],64)),!w(Nt).drawings.presenterOnly&&!w(Je)?(S(),q($t,{key:4},[n("button",{class:"icon-btn relative",title:"Drawing",onClick:_[6]||(_[6]=xt=>Be.value=!w(Be))},[A(U),w(Be)?(S(),q("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ne({background:w(Wn).color})},null,4)):ht("v-if",!0)]),A(So)],64)):ht("v-if",!0),w(Je)?ht("v-if",!0):(S(),q($t,{key:5},[w(sn)?(S(),st(nt,{key:0,to:w(c),class:"icon-btn",title:"Play Mode"},{default:F(()=>[A(Z)]),_:1},8,["to"])):ht("v-if",!0),w(IS)?(S(),st(nt,{key:1,to:w(l),class:"icon-btn",title:"Presenter Mode"},{default:F(()=>[A(ct)]),_:1},8,["to"])):ht("v-if",!0),ht("v-if",!0)],64)),(S(),q($t,{key:6},[w(Nt).download?(S(),q("button",{key:0,class:"icon-btn",onClick:_[8]||(_[8]=(...xt)=>w(ql)&&w(ql)(...xt))},[A(z)])):ht("v-if",!0)],64)),!w(sn)&&w(Nt).info&&!w(Je)?(S(),q("button",{key:7,class:"icon-btn",onClick:_[9]||(_[9]=xt=>Ks.value=!w(Ks))},[A(kt)])):ht("v-if",!0),!w(sn)&&!w(Je)?(S(),st(K1,{key:8},{button:F(()=>[n("button",Z1,[A(Mt)])]),menu:F(()=>[A(B1)]),_:1})):ht("v-if",!0),w(Je)?ht("v-if",!0):(S(),st(So,{key:9})),n("div",Q1,[n("div",J1,[o(an(w(Xt))+" ",1),n("span",t0,"/ "+an(w(up)),1)])]),A(w(X1))],34)],512)}}}),n0=et(e0,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/NavControls.vue"]]),s0={class:"slidev-icon",viewBox:"0 0 256 209",width:"1.2em",height:"1.2em"},o0=n("path",{fill:"#55acee",d:"M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"},null,-1),a0=[o0];function r0(t,e){return S(),q("svg",s0,a0)}const i0={name:"logos-twitter",render:r0},l0={key:0,class:"absolute bottom-0 p-4 mt-auto flex items-center w-full text-primary dark:text-white z-10"},c0={class:"mb-0 flex items-center"},u0=["href"],p0=["src"],f0=["href"],d0={__name:"global-top",setup(t){const e=Y(tt);return(s,a)=>{const r=i0;return w(e).themeConfigs.eventLogo||w(e).themeConfigs.twitter?(S(),q("footer",l0,[n("div",c0,[n("a",{href:w(e).themeConfigs.eventUrl,target:"_blank"},[n("img",{src:w(e).themeConfigs.eventLogo,class:"h-8 mr-4",alt:"Event image"},null,8,p0)],8,u0)]),w(e).themeConfigs.twitter?(S(),q("a",{key:0,href:w(e).themeConfigs.twitterUrl,target:"_blank"},[A(r),o(an(w(e).themeConfigs.twitter),1)],8,f0)):ht("v-if",!0)])):ht("v-if",!0)}}},m0=et(d0,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/slidev-theme-penguin/global-top.vue"]]),tp={render(){return[Ss(m0)]}},ep={render(){return[]}},h0={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},g0=Dt({__name:"PresenterMouse",setup(t){return Y(tt),(e,s)=>{const a=Ju;return w(Ca).cursor?(S(),q("div",h0,[A(a,{class:"absolute",style:ne({left:`${w(Ca).cursor.x}%`,top:`${w(Ca).cursor.y}%`})},null,8,["style"])])):ht("v-if",!0)}}}),_0=et(g0,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),k0=Dt({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(t){Y(tt),Ft(ge,()=>{var s,a;(s=ge.value)!=null&&s.meta&&ge.value.meta.preload!==!1&&(ge.value.meta.__preloaded=!0),(a=Ma.value)!=null&&a.meta&&Ma.value.meta.preload!==!1&&(Ma.value.meta.__preloaded=!0)},{immediate:!0});const e=ze();return ts(()=>import("./DrawingLayer-215d24e0.js"),[]).then(s=>e.value=s.default),(s,a)=>(S(),q($t,null,[ht(" Global Bottom "),A(w(ep)),ht(" Slides "),(S(!0),q($t,null,fo(w(zt),r=>{var i,l;return S(),q($t,{key:r.path},[(i=r.meta)!=null&&i.__preloaded||r===w(ge)?ca((S(),st(w(zr),{key:0,is:r==null?void 0:r.component,clicks:r===w(ge)?w(es):0,"clicks-elements":((l=r.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:jt(w(qr)(r)),route:r,context:t.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ru,r===w(ge)]]):ht("v-if",!0)],64)}),128)),ht(" Global Top "),A(w(tp)),w(e)?(S(),st(w(e),{key:0})):ht("v-if",!0),w(sn)?ht("v-if",!0):(S(),st(_0,{key:1}))],64))}}),v0=et(k0,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/SlidesShow.vue"]]),y0=Dt({__name:"Play",setup(t){Y(tt),Mk();const e=ot();function s(i){var l;Ll.value||((l=i.target)==null?void 0:l.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?Yn():Xn())}VS(e);const a=O(()=>H_.value||Ll.value);ze();const r=ze();return ts(()=>import("./DrawingControls-340b4a03.js"),[]).then(i=>r.value=i.default),(i,l)=>(S(),q($t,null,[n("div",{id:"page-root",ref_key:"root",ref:e,class:"grid grid-cols-[1fr_max-content]",style:ne(w(jr))},[A(Zu,{class:"w-full h-full",style:ne({background:"var(--slidev-slide-container-background, black)"}),width:w(Yr)?w(Gn).width.value:void 0,scale:w(Lo),onPointerdown:s},{default:F(()=>[A(v0,{context:"slide"})]),controls:F(()=>[n("div",{class:jt(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(a)?"opacity-100 right-0":"opacity-0 p-2",w(ao)?"pointer-events-none":""]])},[A(n0,{class:"m-auto",persist:w(a)},null,8,["persist"])],2),!w(Nt).drawings.presenterOnly&&!w(Je)&&w(r)?(S(),st(w(r),{key:0,class:"ml-0"})):ht("v-if",!0)]),_:1},8,["style","width","scale"]),ht("v-if",!0)],4),A(rv)],64))}}),w0=et(y0,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function np(t){return typeof t>"u"||t===null}function x0(t){return typeof t=="object"&&t!==null}function b0(t){return Array.isArray(t)?t:np(t)?[]:[t]}function S0(t,e){var s,a,r,i;if(e)for(i=Object.keys(e),s=0,a=i.length;s<a;s+=1)r=i[s],t[r]=e[r];return t}function $0(t,e){var s="",a;for(a=0;a<e;a+=1)s+=t;return s}function C0(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var E0=np,P0=x0,L0=b0,O0=$0,T0=C0,A0=S0,Kr={isNothing:E0,isObject:P0,toArray:L0,repeat:O0,isNegativeZero:T0,extend:A0};function sp(t,e){var s="",a=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(s+='in "'+t.mark.name+'" '),s+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!e&&t.mark.snippet&&(s+=`

`+t.mark.snippet),a+" "+s):a}function io(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=sp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}io.prototype=Object.create(Error.prototype);io.prototype.constructor=io;io.prototype.toString=function(e){return this.name+": "+sp(this,e)};var jn=io,M0=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],I0=["scalar","sequence","mapping"];function R0(t){var e={};return t!==null&&Object.keys(t).forEach(function(s){t[s].forEach(function(a){e[String(a)]=s})}),e}function N0(t,e){if(e=e||{},Object.keys(e).forEach(function(s){if(M0.indexOf(s)===-1)throw new jn('Unknown option "'+s+'" is met in definition of "'+t+'" YAML type.')}),this.options=e,this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(s){return s},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=R0(e.styleAliases||null),I0.indexOf(this.kind)===-1)throw new jn('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var se=N0;function Dl(t,e){var s=[];return t[e].forEach(function(a){var r=s.length;s.forEach(function(i,l){i.tag===a.tag&&i.kind===a.kind&&i.multi===a.multi&&(r=l)}),s[r]=a}),s}function F0(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},e,s;function a(r){r.multi?(t.multi[r.kind].push(r),t.multi.fallback.push(r)):t[r.kind][r.tag]=t.fallback[r.tag]=r}for(e=0,s=arguments.length;e<s;e+=1)arguments[e].forEach(a);return t}function mr(t){return this.extend(t)}mr.prototype.extend=function(e){var s=[],a=[];if(e instanceof se)a.push(e);else if(Array.isArray(e))a=a.concat(e);else if(e&&(Array.isArray(e.implicit)||Array.isArray(e.explicit)))e.implicit&&(s=s.concat(e.implicit)),e.explicit&&(a=a.concat(e.explicit));else throw new jn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(i){if(!(i instanceof se))throw new jn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(i.loadKind&&i.loadKind!=="scalar")throw new jn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(i.multi)throw new jn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(i){if(!(i instanceof se))throw new jn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(mr.prototype);return r.implicit=(this.implicit||[]).concat(s),r.explicit=(this.explicit||[]).concat(a),r.compiledImplicit=Dl(r,"implicit"),r.compiledExplicit=Dl(r,"explicit"),r.compiledTypeMap=F0(r.compiledImplicit,r.compiledExplicit),r};var U0=mr,j0=new se("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),D0=new se("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),V0=new se("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),W0=new U0({explicit:[j0,D0,V0]});function H0(t){if(t===null)return!0;var e=t.length;return e===1&&t==="~"||e===4&&(t==="null"||t==="Null"||t==="NULL")}function B0(){return null}function q0(t){return t===null}var z0=new se("tag:yaml.org,2002:null",{kind:"scalar",resolve:H0,construct:B0,predicate:q0,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function K0(t){if(t===null)return!1;var e=t.length;return e===4&&(t==="true"||t==="True"||t==="TRUE")||e===5&&(t==="false"||t==="False"||t==="FALSE")}function G0(t){return t==="true"||t==="True"||t==="TRUE"}function Y0(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var X0=new se("tag:yaml.org,2002:bool",{kind:"scalar",resolve:K0,construct:G0,predicate:Y0,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function Z0(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function Q0(t){return 48<=t&&t<=55}function J0(t){return 48<=t&&t<=57}function ty(t){if(t===null)return!1;var e=t.length,s=0,a=!1,r;if(!e)return!1;if(r=t[s],(r==="-"||r==="+")&&(r=t[++s]),r==="0"){if(s+1===e)return!0;if(r=t[++s],r==="b"){for(s++;s<e;s++)if(r=t[s],r!=="_"){if(r!=="0"&&r!=="1")return!1;a=!0}return a&&r!=="_"}if(r==="x"){for(s++;s<e;s++)if(r=t[s],r!=="_"){if(!Z0(t.charCodeAt(s)))return!1;a=!0}return a&&r!=="_"}if(r==="o"){for(s++;s<e;s++)if(r=t[s],r!=="_"){if(!Q0(t.charCodeAt(s)))return!1;a=!0}return a&&r!=="_"}}if(r==="_")return!1;for(;s<e;s++)if(r=t[s],r!=="_"){if(!J0(t.charCodeAt(s)))return!1;a=!0}return!(!a||r==="_")}function ey(t){var e=t,s=1,a;if(e.indexOf("_")!==-1&&(e=e.replace(/_/g,"")),a=e[0],(a==="-"||a==="+")&&(a==="-"&&(s=-1),e=e.slice(1),a=e[0]),e==="0")return 0;if(a==="0"){if(e[1]==="b")return s*parseInt(e.slice(2),2);if(e[1]==="x")return s*parseInt(e.slice(2),16);if(e[1]==="o")return s*parseInt(e.slice(2),8)}return s*parseInt(e,10)}function ny(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!Kr.isNegativeZero(t)}var sy=new se("tag:yaml.org,2002:int",{kind:"scalar",resolve:ty,construct:ey,predicate:ny,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),oy=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function ay(t){return!(t===null||!oy.test(t)||t[t.length-1]==="_")}function ry(t){var e,s;return e=t.replace(/_/g,"").toLowerCase(),s=e[0]==="-"?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),e===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:e===".nan"?NaN:s*parseFloat(e,10)}var iy=/^[-+]?[0-9]+e/;function ly(t,e){var s;if(isNaN(t))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Kr.isNegativeZero(t))return"-0.0";return s=t.toString(10),iy.test(s)?s.replace("e",".e"):s}function cy(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||Kr.isNegativeZero(t))}var uy=new se("tag:yaml.org,2002:float",{kind:"scalar",resolve:ay,construct:ry,predicate:cy,represent:ly,defaultStyle:"lowercase"}),py=W0.extend({implicit:[z0,X0,sy,uy]}),fy=py,op=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ap=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function dy(t){return t===null?!1:op.exec(t)!==null||ap.exec(t)!==null}function my(t){var e,s,a,r,i,l,c,u=0,p=null,d,f,m;if(e=op.exec(t),e===null&&(e=ap.exec(t)),e===null)throw new Error("Date resolve error");if(s=+e[1],a=+e[2]-1,r=+e[3],!e[4])return new Date(Date.UTC(s,a,r));if(i=+e[4],l=+e[5],c=+e[6],e[7]){for(u=e[7].slice(0,3);u.length<3;)u+="0";u=+u}return e[9]&&(d=+e[10],f=+(e[11]||0),p=(d*60+f)*6e4,e[9]==="-"&&(p=-p)),m=new Date(Date.UTC(s,a,r,i,l,c,u)),p&&m.setTime(m.getTime()-p),m}function hy(t){return t.toISOString()}var gy=new se("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:dy,construct:my,instanceOf:Date,represent:hy});function _y(t){return t==="<<"||t===null}var ky=new se("tag:yaml.org,2002:merge",{kind:"scalar",resolve:_y}),Gr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function vy(t){if(t===null)return!1;var e,s,a=0,r=t.length,i=Gr;for(s=0;s<r;s++)if(e=i.indexOf(t.charAt(s)),!(e>64)){if(e<0)return!1;a+=6}return a%8===0}function yy(t){var e,s,a=t.replace(/[\r\n=]/g,""),r=a.length,i=Gr,l=0,c=[];for(e=0;e<r;e++)e%4===0&&e&&(c.push(l>>16&255),c.push(l>>8&255),c.push(l&255)),l=l<<6|i.indexOf(a.charAt(e));return s=r%4*6,s===0?(c.push(l>>16&255),c.push(l>>8&255),c.push(l&255)):s===18?(c.push(l>>10&255),c.push(l>>2&255)):s===12&&c.push(l>>4&255),new Uint8Array(c)}function wy(t){var e="",s=0,a,r,i=t.length,l=Gr;for(a=0;a<i;a++)a%3===0&&a&&(e+=l[s>>18&63],e+=l[s>>12&63],e+=l[s>>6&63],e+=l[s&63]),s=(s<<8)+t[a];return r=i%3,r===0?(e+=l[s>>18&63],e+=l[s>>12&63],e+=l[s>>6&63],e+=l[s&63]):r===2?(e+=l[s>>10&63],e+=l[s>>4&63],e+=l[s<<2&63],e+=l[64]):r===1&&(e+=l[s>>2&63],e+=l[s<<4&63],e+=l[64],e+=l[64]),e}function xy(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var by=new se("tag:yaml.org,2002:binary",{kind:"scalar",resolve:vy,construct:yy,predicate:xy,represent:wy}),Sy=Object.prototype.hasOwnProperty,$y=Object.prototype.toString;function Cy(t){if(t===null)return!0;var e=[],s,a,r,i,l,c=t;for(s=0,a=c.length;s<a;s+=1){if(r=c[s],l=!1,$y.call(r)!=="[object Object]")return!1;for(i in r)if(Sy.call(r,i))if(!l)l=!0;else return!1;if(!l)return!1;if(e.indexOf(i)===-1)e.push(i);else return!1}return!0}function Ey(t){return t!==null?t:[]}var Py=new se("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Cy,construct:Ey}),Ly=Object.prototype.toString;function Oy(t){if(t===null)return!0;var e,s,a,r,i,l=t;for(i=new Array(l.length),e=0,s=l.length;e<s;e+=1){if(a=l[e],Ly.call(a)!=="[object Object]"||(r=Object.keys(a),r.length!==1))return!1;i[e]=[r[0],a[r[0]]]}return!0}function Ty(t){if(t===null)return[];var e,s,a,r,i,l=t;for(i=new Array(l.length),e=0,s=l.length;e<s;e+=1)a=l[e],r=Object.keys(a),i[e]=[r[0],a[r[0]]];return i}var Ay=new se("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Oy,construct:Ty}),My=Object.prototype.hasOwnProperty;function Iy(t){if(t===null)return!0;var e,s=t;for(e in s)if(My.call(s,e)&&s[e]!==null)return!1;return!0}function Ry(t){return t!==null?t:{}}var Ny=new se("tag:yaml.org,2002:set",{kind:"mapping",resolve:Iy,construct:Ry});fy.extend({implicit:[gy,ky],explicit:[by,Py,Ay,Ny]});function Vl(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}var Fy=new Array(256),Uy=new Array(256);for(var us=0;us<256;us++)Fy[us]=Vl(us)?1:0,Uy[us]=Vl(us);function jy(t){return Array.from(new Set(t))}function Wl(...t){let e,s,a;t.length===1?(e=0,a=1,[s]=t):[e,s,a=1]=t;const r=[];let i=e;for(;i<s;)r.push(i),i+=a||1;return r}function rp(t,e){if(!e||e==="all"||e==="*")return Wl(1,t+1);const s=[];for(const a of e.split(/[,;]/g))if(!a.includes("-"))s.push(+a);else{const[r,i]=a.split("-",2);s.push(...Wl(+r,i?+i+1:t+1))}return jy(s).filter(a=>a<=t).sort((a,r)=>a-r)}function Dy(t){const e=O(()=>t.value.path),s=O(()=>zt.length-1),a=O(()=>parseInt(e.value.split(/\//g).slice(-1)[0])||1),r=O(()=>Xr(a.value)),i=O(()=>zt.find(m=>m.path===`${a.value}`)),l=O(()=>{var m,g,_;return(_=(g=(m=i.value)==null?void 0:m.meta)==null?void 0:g.slide)==null?void 0:_.id}),c=O(()=>{var m,g;return((g=(m=i.value)==null?void 0:m.meta)==null?void 0:g.layout)||(a.value===1?"cover":"default")}),u=O(()=>zt.find(m=>m.path===`${Math.min(zt.length,a.value+1)}`)),p=O(()=>zt.filter(m=>{var g,_;return(_=(g=m.meta)==null?void 0:g.slide)==null?void 0:_.title}).reduce((m,g)=>(Zr(m,g),m),[])),d=O(()=>Qr(p.value,i.value)),f=O(()=>Jr(d.value));return{route:t,path:e,total:s,currentPage:a,currentPath:r,currentRoute:i,currentSlideId:l,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:f}}function Vy(t,e,s){const a=ot(0);Ie(()=>{$n.afterEach(async()=>{await Ie(),a.value+=1})});const r=O(()=>{var u,p;return a.value,((p=(u=e.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),i=O(()=>{var u,p;return+(((p=(u=e.value)==null?void 0:u.meta)==null?void 0:p.clicks)??r.value.length)}),l=O(()=>s.value<zt.length-1||t.value<i.value),c=O(()=>s.value>1||t.value>0);return{clicks:t,clicksElements:r,clicksTotal:i,hasNext:l,hasPrev:c}}const Wy=["id"],Hy=Dt({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(t,{emit:e}){const s=t,a=He(s,"clicksElements",e),r=O(()=>({height:`${Ur}px`,width:`${Sn}px`})),i=ze();ts(()=>Promise.resolve().then(()=>Wk),void 0).then(p=>i.value=p.default);const l=O(()=>s.clicks),c=Vy(l,s.nav.currentRoute,s.nav.currentPage),u=O(()=>`${s.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return _e(tt,Jt({nav:{...s.nav,...c},configs:Nt,themeConfigs:O(()=>Nt.themeConfig)})),(p,d)=>{var f;return S(),q("div",{id:w(u),class:"slide-container",style:ne(w(r))},[A(w(ep)),A(w(zr),{is:(f=t.route)==null?void 0:f.component,"clicks-elements":w(a),"onUpdate:clicks-elements":d[0]||(d[0]=m=>bt(a)?a.value=m:null),clicks:w(l),"clicks-disabled":!1,class:jt(w(qr)(t.route)),route:t.route},null,8,["is","clicks-elements","clicks","class","route"]),w(i)?(S(),st(w(i),{key:0,page:+t.route.path},null,8,["page"])):ht("v-if",!0),A(w(tp))],12,Wy)}}}),Hl=et(Hy,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),By=Dt({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(t){var i;const e=t;Y(tt);const s=Jt(((i=e.route.meta)==null?void 0:i.__clicksElements)||[]),a=O(()=>e.route),r=Dy(a);return(l,c)=>(S(),q($t,null,[A(Hl,{"clicks-elements":s,"onUpdate:clicks-elements":c[0]||(c[0]=u=>s=u),clicks:0,nav:w(r),route:w(a)},null,8,["clicks-elements","nav","route"]),w(cp)?ht("v-if",!0):(S(!0),q($t,{key:0},fo(s.length,u=>(S(),st(Hl,{key:u,clicks:u,nav:w(r),route:w(a)},null,8,["clicks","nav","route"]))),128))],64))}}),qy=et(By,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/PrintSlide.vue"]]),zy={id:"print-content"},Ky=Dt({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(t){const e=t;Y(tt);const s=O(()=>e.width),a=O(()=>e.width/bn),r=O(()=>s.value/a.value),i=O(()=>r.value<bn?s.value/Sn:a.value*bn/Sn);let l=zt.slice(0,-1);Ge.value.query.range&&(l=rp(l.length,Ge.value.query.range).map(p=>l[p-1]));const c=O(()=>({"select-none":!Nt.selectable,"slidev-code-line-numbers":Nt.lineNumbers}));return _e(uu,i),(u,p)=>(S(),q("div",{id:"print-container",class:jt(w(c))},[n("div",zy,[(S(!0),q($t,null,fo(w(l),d=>(S(),st(qy,{key:d.path,route:d},null,8,["route"]))),128))]),ye(u.$slots,"controls")],2))}});const Gy=et(Ky,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/PrintContainer.vue"]]),Yy=Dt({__name:"Print",setup(t){Y(tt);function e(s,{slots:a}){if(a.default)return Ss("style",a.default())}return bs(()=>{Yr?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,a)=>(S(),q($t,null,[A(e,null,{default:F(()=>[o(" @page { size: "+an(w(Sn))+"px "+an(w(Ur))+"px; margin: 0px; } ",1)]),_:1}),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:ne(w(jr))},[A(Gy,{class:"w-full h-full",style:ne({background:"var(--slidev-slide-container-background, black)"}),width:w(Gn).width.value},null,8,["style","width"])],4)],64))}});const Xy=et(Yy,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/Print.vue"]]);const Zy={class:"slidev-layout end"},Qy={__name:"end",setup(t){return Y(tt),(e,s)=>(S(),q("div",Zy," END "))}},Jy=et(Qy,[["__scopeId","data-v-e532b98d"],["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/layouts/end.vue"]]),tw={width:"322",height:"279",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ew=n("path",{d:"M92.5 38C73.3 18.8 22.833 4.667 0 0v278.5h322c-5.167-9.333-23.6-30-56-38-40.5-10-78.5-26.5-90-38.5s-32-44-39-79-20.5-61-44.5-85Z",fill:"#6EE7B7","fill-opacity":".3"},null,-1),nw=[ew];function sw(t,e){return S(),q("svg",tw,nw)}const ow={render:sw},aw={width:"317",height:"83",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rw=n("path",{d:"M6.095 82.907c-2.434.194-4.475.175-6.095 0h6.095c16.096-1.282 49.361-11.864 91.405-48 60.5-52 137-53.5 219.5 48H6.095Z",fill:"#E3F9B4"},null,-1),iw=[rw];function lw(t,e){return S(),q("svg",aw,iw)}const cw={render:lw},uw={class:"relative"},pw=Dt({__name:"CornerCurves",setup(t){return Y(tt),(e,s)=>(S(),q("div",null,[n("div",uw,[A(w(ow),{class:"absolute bottom-0"}),A(w(cw),{class:"absolute bottom-0 left-40 opacity-40"})])]))}}),ip=et(pw,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/slidev-theme-penguin/components/corner-curves/CornerCurves.vue"]]),fw={key:0,class:"absolute w-full px-16 py-8 top-0 h-10 z-10"},dw=["src"],mw={__name:"LayoutHeader",setup(t){const e=Y(tt);return(s,a)=>w(e).themeConfigs.logoHeader&&w(e).nav.currentLayout==="intro"?(S(),q("header",fw,[n("img",{src:w(e).themeConfigs.logoHeader,class:"w-16 h-16 object-contain"},null,8,dw)])):ht("v-if",!0)}},hw=et(mw,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/slidev-theme-penguin/components/LayoutHeader.vue"]]);const gw={class:"slidev-layout intro grid"},_w={class:"flex flex-col justify-center text-center"},kw={__name:"intro",setup(t){return Y(tt),(e,s)=>{const a=hw,r=ip,i=Wt("AsGraphic");return S(),q("div",gw,[A(a),A(r,{class:"absolute left-0 top-0 transform rotate-90"}),n("div",_w,[ye(e.$slots,"default")]),A(i,{type:"zigzag",class:"absolute top-20 -right-30"})])}}},vw=et(kw,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/slidev-theme-penguin/layouts/intro.vue"]]),yw=n("h1",null,"Go Mutex 实现与演进",-1),ww=n("p",null,"@huwenhao",-1),xw={__name:"1",setup(t){const e={theme:"penguin",colorSchema:"auto",layout:"intro",themeConfig:{logoHeader:"/img/logo.png",eventLogo:"https://golang.google.cn/favicon.ico"},css:"unocss",highlighter:"prism",lineNumbers:!0};return Y(tt),(s,a)=>(S(),st(vw,At(Pt(e)),{default:F(()=>[yw,ww]),_:1},16))}},bw=et(xw,[["__file","/@slidev/slides/1.md"]]),Sw="/assets/parallel-2b75f689.jpg",$w={class:"my-auto z-10 relative"},Cw={__name:"default",setup(t){return Y(tt),(e,s)=>{const a=ip;return S(),q("div",{class:jt(["slidev-layout",{grid:e.$attrs.center}])},[A(a,{class:"absolute bottom-0 right-0 transform scale-x--100"}),n("div",$w,[ye(e.$slots,"default")])],2)}}},Fe=et(Cw,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/slidev-theme-penguin/layouts/default.vue"]]),Ew=n("h1",null,[n("strong",null,"为什么需要锁")],-1),Pw=n("p",null,"锁的概念诞生于并发场景下的竞争问题，用于保证并发环境下对共享资源访问的互斥，是限制共享资源访问的同步机制。",-1),Lw=n("br",null,null,-1),Ow=n("h3",null,"并发与并行",-1),Tw=n("p",null,"并行指的是多个线程能在同一时刻同时运行，真正的并行只在多核场景下能够实现，在单核场景下，由于操作系统的时间片调度机制存在，可以在宏观上实现一种“伪”并行（并发）。",-1),Aw=n("img",{src:Sw,class:"rounded"},null,-1),Mw={__name:"2",setup(t){const e={};return Y(tt),(s,a)=>{const r=Wt("font"),i=Wt("center");return S(),st(Fe,At(Pt(e)),{default:F(()=>[Ew,Pw,Lw,Ow,Tw,Aw,A(i,null,{default:F(()=>[A(r,{size:"2"},{default:F(()=>[o("图1 并发与并行")]),_:1})]),_:1})]),_:1},16)}}},Iw=et(Mw,[["__file","/@slidev/slides/2.md"]]),Rw="/assets/parallel2-4b77169a.jpg",Nw=n("h1",null,[n("strong",null,"为什么需要锁")],-1),Fw=n("h3",null,"线程的并发问题",-1),Uw=n("p",null,"但无论是单核还是多核，程序执行起来，并不像我们感觉到的那样连续，而是会因为硬件中断、IO等原因，而表现为断断续续的执行。所以当我们有多个线程并发执行，并伴随有对共享数据的操作，就可能会发生一些预料之外的问题。",-1),jw={align:"center"},Dw=n("img",{src:Rw,class:"h-52 rounded shadow center"},null,-1),Vw={__name:"3",setup(t){const e={};return Y(tt),(s,a)=>{const r=Wt("font"),i=Wt("center");return S(),st(Fe,At(Pt(e)),{default:F(()=>[Nw,Fw,Uw,n("div",jw,[Dw,A(i,null,{default:F(()=>[A(r,{size:"2"},{default:F(()=>[o("图2 并发问题")]),_:1})]),_:1})])]),_:1},16)}}},Ww=et(Vw,[["__file","/@slidev/slides/3.md"]]),Hw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Bw=n("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),qw=[Bw];function zw(t,e){return S(),q("svg",Hw,qw)}const Kw={name:"ph-clipboard",render:zw},Gw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Yw=n("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Xw=[Yw];function Zw(t,e){return S(),q("svg",Gw,Xw)}const Qw={name:"ph-check-circle",render:Zw},Jw=["title"],tx=Dt({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){const e=t;Y(tt);const s=Y(iu),a=Y(lu),r=Y(cu);function i(f=5){const m=[],g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_=g.length;for(let v=0;v<f;v++)m.push(g.charAt(Math.floor(Math.random()*_)));return m.join("")}const l=ot(),c=Ye();po(()=>{const f=e.at==null?a==null?void 0:a.value.length:e.at,m=O(()=>r!=null&&r.value?e.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),e.ranges.length-1)),g=O(()=>e.ranges[m.value]||"");if(e.ranges.length>=2&&!(r!=null&&r.value)){const _=i(),v=Em(e.ranges.length-1).map(y=>_+y);a!=null&&a.value&&(a.value.push(...v),la(()=>v.forEach(y=>Cm(a.value,y)),c))}bs(()=>{if(!l.value)return;const v=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value];for(const y of v){const C=Array.from(y.querySelectorAll(".line")),b=rp(C.length,g.value);if(C.forEach(($,P)=>{const D=b.includes(P+1);$.classList.toggle($m,!0),$.classList.toggle("highlighted",D),$.classList.toggle("dishonored",!D)}),e.maxHeight){const $=y.querySelector(".line.highlighted");$&&$.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=wh();function d(){var m,g;const f=(g=(m=l.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:g.textContent;f&&p(f)}return(f,m)=>{const g=Qw,_=Kw;return S(),q("div",{ref_key:"el",ref:l,class:"slidev-code-wrapper relative group",style:ne({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0})},[ye(f.$slots,"default"),w(Nt).codeCopy?(S(),q("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(u)?"Copied":"Copy",onClick:m[0]||(m[0]=v=>d())},[w(u)?(S(),st(g,{key:0,class:"p-2 w-8 h-8"})):(S(),st(_,{key:1,class:"p-2 w-8 h-8"}))],8,Jw)):ht("v-if",!0)],4)}}}),oe=et(tx,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),ex={class:"slidev-layout"},nx={class:"grid grid-cols-2 gap-16"},sx={class:"prose"},ox={class:"prose"},ax={__name:"two-cols",setup(t){return Y(tt),(e,s)=>(S(),q("div",ex,[n("div",nx,[n("div",sx,[ye(e.$slots,"default")]),n("div",ox,[ye(e.$slots,"right")])])]))}},Ue=et(ax,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/slidev-theme-penguin/layouts/two-cols.vue"]]),rx=n("h1",null,"什么是锁",-1),ix=n("p",null,"锁是一种并发编程中的同步原语，通过线程主动放弃运行机会的方式，来协调多线程对共享资源的竞争。",-1),lx=n("ol",null,[n("li",null,[n("p",null,[n("strong",null,"单核场景"),o(": "),n("br"),o("锁就是一个变量，通过硬件提供的原子操作（如：CAS等）实现，保证了同一时刻只有一个线程拿到锁进入临界区;")])]),n("li",null,[n("p",null,[n("strong",null,"多核场景"),o(": "),n("br"),o("硬件原子指令是由多个微指令组成，原子性相对于单核而言的，多核的多个线程竞争进入临界区权限需要锁缓存行或总线;")])])],-1),cx=n("br",null,null,-1),ux=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// bool Cas(int32 *val, int32 old, int32 new)")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"// Atomically:")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"//	if(*val == old){")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"//		*val = new;")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"//		return 1;")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"//	} else")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"//		return 0;")]),o(`
`),n("span",{class:"line"},[o("TEXT ·"),n("span",{class:"token function"},"Cas"),n("span",{class:"token punctuation"},"("),o("SB"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),o("NOSPLIT"),n("span",{class:"token punctuation"},","),o("$"),n("span",{class:"token number"},"0"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"17")]),o(`
`),n("span",{class:"line"},[o("	MOVQ	ptr"),n("span",{class:"token operator"},"+"),n("span",{class:"token function"},"0"),n("span",{class:"token punctuation"},"("),o("FP"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),o(" BX")]),o(`
`),n("span",{class:"line"},[o("	MOVL	old"),n("span",{class:"token operator"},"+"),n("span",{class:"token function"},"8"),n("span",{class:"token punctuation"},"("),o("FP"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),o(" AX")]),o(`
`),n("span",{class:"line"},[o("	MOVL	"),n("span",{class:"token builtin"},"new"),n("span",{class:"token operator"},"+"),n("span",{class:"token function"},"12"),n("span",{class:"token punctuation"},"("),o("FP"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),o(" CX")]),o(`
`),n("span",{class:"line"},"	LOCK"),o(`
`),n("span",{class:"line"},[o("	CMPXCHGL	CX"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token function"},"0"),n("span",{class:"token punctuation"},"("),o("BX"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	SETEQ	ret"),n("span",{class:"token operator"},"+"),n("span",{class:"token function"},"16"),n("span",{class:"token punctuation"},"("),o("FP"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},"	RET")])],-1),px={__name:"4",setup(t){const e={layout:"two-cols"};return Y(tt),(s,a)=>{const r=Wt("font"),i=oe;return S(),st(Ue,At(Pt(e)),{default:F(l=>[rx,ix,lx]),right:F(l=>[cx,A(r,{class:"text-xs text-gray-300"},{default:F(()=>[o("github.com/go/src/runtime/internal/atomic/atomic_amd64.s")]),_:1}),A(i,Gt({},{ranges:["all","12"]}),{default:F(()=>[ux]),_:1},16),A(r,{class:"text-xs text-gray-400 leading-none"},{default:F(()=>[o("*在Go语言CSA的实现中，执行CMPXCHGL指令之前会执行LOCK指令")]),_:1})]),_:1},16)}}},fx=et(px,[["__file","/@slidev/slides/4.md"]]),dx={class:"slidev-layout relative"},mx={class:"flex items-center"},hx={class:"w-1/2"},gx={class:"w-1/2 relative"},_x=["src"],kx={__name:"presenter",setup(t){return Y(tt),(e,s)=>{const a=Wt("AsGraphic");return S(),q("div",dx,[n("div",mx,[n("div",hx,[ye(e.$slots,"default")]),n("figure",gx,[A(a,{type:"donut",absolute:"","top-2":"","left-0":"","text-secondary-200":""}),A(a,{type:"zigzag",absolute:"","bottom-2":"","right-0":""}),n("img",{src:e.$attrs.presenterImage||"https://anonymous-animals.azurewebsites.net/animal/penguin",class:"bg-gray-400 relative rounded-full object-cover h-80 w-80 border border-8 border-secondary-400 z-10"},null,8,_x)])]),A(a,{type:"curve-small",absolute:"","bottom-0":"","right-0":""})])}}},vx=et(kx,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/slidev-theme-penguin/layouts/presenter.vue"]]),yx=n("h1",null,[n("strong",null,"Go Mutex")],-1),wx=n("p",null,"Mutex一词取自于Mutual exclusion的缩写，也称作互斥锁。Go语言在Mutex的实现中迭代了多个版本:",-1),xx=n("ul",null,[n("li",null,"V1.0 初版实现"),n("li",null,"V2.0 引入非公平锁(go 1.0)"),n("li",null,"V3.0 引入自旋(go 1.5)"),n("li",null,"V4.0 解决饥饿(go 1.13)"),n("li",null,"V4.1 增加TryLock方法(go 1.18)")],-1),bx={__name:"5",setup(t){const e={layout:"presenter",presenterImage:"/img/go.jpg"};return Y(tt),(s,a)=>{const r=Wt("font");return S(),st(vx,At(Pt(e)),{default:F(()=>[yx,wx,xx,A(r,{class:"text-xs text-gray-400 leading-none"},{default:F(()=>[o("*以上版本的编号是为了方便叙述和区分临时定义的，官方并没有这样的说法")]),_:1})]),_:1},16)}}},Sx=et(bx,[["__file","/@slidev/slides/5.md"]]),$x=n("h1",null,"V1.0 初版实现",-1),Cx=n("p",null,"最初版的Mutex实现比较简单，只有 key 和 sema 两个字段：",-1),Ex=n("ol",null,[n("li",null,"key 用来标识锁是否被持有，也用来标识当前队列有多少个等待的goroutine"),n("li",null,"sema 为信号量变量，用来阻塞和唤醒goroutine。")],-1),Px=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"type"),o(" Mutex "),n("span",{class:"token keyword"},"struct"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	key  "),n("span",{class:"token builtin"},"int32")]),o(`
`),n("span",{class:"line"},[o("	sema "),n("span",{class:"token builtin"},"uint32")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("key"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"1"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"return")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	runtime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Semacquire"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("sema"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"switch"),o(" v "),n("span",{class:"token operator"},":="),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("key"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"case"),o(" v "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},":")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"return")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"case"),o(" v "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sync: unlock of unlocked mutex"'),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	runtime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Semrelease"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("sema"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),Lx={__name:"6",setup(t){const e={layout:"two-cols"};return Y(tt),(s,a)=>{const r=Wt("font"),i=oe;return S(),st(Ue,At(Pt(e)),{default:F(l=>[$x,Cx,Ex]),right:F(l=>[A(r,{class:"text-xs text-gray-300"},{default:F(()=>[o("github.com/go/src/sync/mutex.go")]),_:1}),A(i,Gt({},{ranges:[""]}),{default:F(()=>[Px]),_:1},16)]),_:1},16)}}},Ox=et(Lx,[["__file","/@slidev/slides/6.md"]]),Tx=n("h1",null,"V1.0 初版实现",-1),Ax=n("p",null,"初版的 Mutex 实现有一个问题：",-1),Mx=n("p",null,"请求锁的 goroutine 会排队等待获取互斥锁。虽然这貌似很公平，但是从性能上来看，却不是最优的。",-1),Ix=n("p",null,"因为如果我们能够把锁交给正在占用 CPU 时间片的 goroutine 的话，那就不需要做上下文的切换，在高并发的情况下，会有更好的性能。",-1),Rx=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"type"),o(" Mutex "),n("span",{class:"token keyword"},"struct"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	key  "),n("span",{class:"token builtin"},"int32")]),o(`
`),n("span",{class:"line"},[o("	sema "),n("span",{class:"token builtin"},"uint32")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("key"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"1"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"return")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	runtime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Semacquire"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("sema"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"switch"),o(" v "),n("span",{class:"token operator"},":="),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("key"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"case"),o(" v "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},":")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"return")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"case"),o(" v "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sync: unlock of unlocked mutex"'),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	runtime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Semrelease"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("sema"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),Nx={__name:"7",setup(t){const e={layout:"two-cols"};return Y(tt),(s,a)=>{const r=Wt("font"),i=oe;return S(),st(Ue,At(Pt(e)),{default:F(l=>[Tx,Ax,Mx,Ix]),right:F(l=>[A(r,{class:"text-xs text-gray-300"},{default:F(()=>[o("github.com/go/src/sync/mutex.go")]),_:1}),A(i,Gt({},{ranges:["7,10,14,20"]}),{default:F(()=>[Rx]),_:1},16)]),_:1},16)}}},Fx=et(Nx,[["__file","/@slidev/slides/7.md"]]),Ux="/assets/mutex-state-v2-a2ce8e96.png",jx=n("h1",null,"V2.0 引入非公平锁",-1),Dx=n("p",null,[o("在这一版本中，Go开发者对于Mutex的实现做了一次比较大的调整，将原有的key字段改为"),n("strong",null,"state"),o("，他的含义也随着改变。")],-1),Vx=n("p",null,"state是一个复合字段：",-1),Wx=n("ol",null,[n("li",null,"第一位表示锁当前是否被持有，初始值为0，锁被持有时标记为1；"),n("li",null,"第二位表示当前是否有被唤醒的goroutine，初始值为0，当前有被唤醒的goroutine时标记为1；"),n("li",null,"剩余位表示当前等待此锁的goroutine数量。")],-1),Hx=n("br",null,null,-1),Bx={align:"center"},qx=n("img",{src:Ux,class:"rounded center"},null,-1),zx=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"type"),o(" Mutex "),n("span",{class:"token keyword"},"struct"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	state "),n("span",{class:"token builtin"},"int32")]),o(`
`),n("span",{class:"line"},[o("	sema  "),n("span",{class:"token builtin"},"uint32")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"...")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),o(),n("span",{class:"token punctuation"},"(")]),o(`
`),n("span",{class:"line"},[o("	mutexLocked "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"1"),o(),n("span",{class:"token operator"},"<<"),o(),n("span",{class:"token boolean"},"iota"),o(),n("span",{class:"token comment"},"// mutex is locked")]),o(`
`),n("span",{class:"line"},"	mutexWoken"),o(`
`),n("span",{class:"line"},[o("	mutexWaiterShift "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token boolean"},"iota")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},")")])])],-1),Kx={__name:"8",setup(t){const e={layout:"two-cols"};return Y(tt),(s,a)=>{const r=Wt("font"),i=Wt("center"),l=oe;return S(),st(Ue,At(Pt(e)),{default:F(c=>[jx,Dx,Vx,Wx]),right:F(c=>[Hx,n("div",Bx,[qx,A(i,null,{default:F(()=>[A(r,{class:"text-xs text-gray-300"},{default:F(()=>[o("图3 state结构")]),_:1})]),_:1})]),A(r,{class:"text-xs text-gray-300"},{default:F(()=>[o("release-branch.go1.0")]),_:1}),A(l,Gt({},{ranges:[""]}),{default:F(()=>[zx]),_:1},16)]),_:1},16)}}},Gx=et(Kx,[["__file","/@slidev/slides/8.md"]]),Yx=n("p",null,"Lock",-1),Xx={class:"overflow-auto h-96"},Zx=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// Fast path: grab unlocked mutex.")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CompareAndSwapInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),o(" mutexLocked"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"return")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// Slow path: ")]),o(`
`),n("span",{class:"line"},[o("	awoke "),n("span",{class:"token operator"},":="),o(),n("span",{class:"token boolean"},"false")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"for"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		old "),n("span",{class:"token operator"},":="),o(" m"),n("span",{class:"token punctuation"},"."),o("state")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},":="),o(" old "),n("span",{class:"token operator"},"|"),o(" mutexLocked "),n("span",{class:"token comment"},"// lock 标记")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},"&"),o("mutexLocked "),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},"="),o(" old "),n("span",{class:"token operator"},"+"),o(),n("span",{class:"token number"},"1"),n("span",{class:"token operator"},"<<"),o("mutexWaiterShift "),n("span",{class:"token comment"},"// 等待数量+1")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" awoke "),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// 清除唤醒标志")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},"&^="),o(" mutexWoken")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CompareAndSwapInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(" old"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token builtin"},"new"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},"&"),o("mutexLocked "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token keyword"},"break")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// 未抢到 入队阻塞")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token function"},"runtime_Semacquire"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("sema"),n("span",{class:"token punctuation"},")"),o()]),o(`
`),n("span",{class:"line"},[o("			awoke "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token boolean"},"true")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),Qx=n("p",null,"Unlock",-1),Jx={class:"overflow-auto h-96"},tb=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// Fast path: drop lock bit.")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},":="),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token operator"},"-"),o("mutexLocked"),n("span",{class:"token punctuation"},")"),o()]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"new"),n("span",{class:"token operator"},"+"),o("mutexLocked"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"&"),o("mutexLocked "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 本来就没有锁 panic")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sync: unlock of unlocked mutex"'),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("	old "),n("span",{class:"token operator"},":="),o(),n("span",{class:"token builtin"},"new")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"for"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 没有等待者 或 已有唤醒的waiter 或 锁原来已被持有")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},">>"),o("mutexWaiterShift "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token operator"},"||"),o(" old"),n("span",{class:"token operator"},"&"),n("span",{class:"token punctuation"},"("),o("mutexLocked"),n("span",{class:"token operator"},"|"),o("mutexWoken"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"return")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 唤醒 goroutine")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},"="),o(),n("span",{class:"token punctuation"},"("),o("old "),n("span",{class:"token operator"},"-"),o(),n("span",{class:"token number"},"1"),n("span",{class:"token operator"},"<<"),o("mutexWaiterShift"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"|"),o(" mutexWoken")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CompareAndSwapInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(" old"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token builtin"},"new"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token function"},"runtime_Semrelease"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("sema"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"return")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("		old "),n("span",{class:"token operator"},"="),o(" m"),n("span",{class:"token punctuation"},"."),o("state")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),eb={__name:"9",setup(t){const e={layout:"two-cols"};return Y(tt),(s,a)=>{const r=oe;return S(),st(Ue,At(Pt(e)),{right:F(i=>[Qx,n("div",Jx,[A(r,Gt({},{ranges:["0","2-7","9-22","all"]}),{default:F(()=>[tb]),_:1},16)])]),default:F(()=>[Yx,n("div",Xx,[A(r,Gt({},{ranges:["0","2-5","8-27","all"]}),{default:F(()=>[Zx]),_:1},16)])]),_:1},16)}}},nb=et(eb,[["__file","/@slidev/slides/9.md"]]),sb=n("h1",null,[n("strong",null,"V2.0 引入非公平锁")],-1),ob=n("p",null,"请求锁的 goroutine 有两类，一类是新来请求锁的 goroutine，另一类是被唤醒的等待请求锁的 goroutine。锁的状态也有两种：加锁和未加锁。通过一张表格，来说明一下 goroutine 不同来源不同状态下的处理逻辑。",-1),ab=n("br",null,null,-1),rb=n("table",null,[n("thead",null,[n("tr",null,[n("th"),n("th",null,[n("strong",null,"锁已被持有")]),n("th",null,[n("strong",null,"锁未被持有")])])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"新来的goroutine")]),n("td",null,[o("waiter++ "),n("br"),o(" 入队等待")]),n("td",null,"获得锁")]),n("tr",null,[n("td",null,[n("strong",null,"被唤醒的goroutine")]),n("td",null,[o("waiter++"),n("br"),o("重置mutexWoken标志"),n("br"),o("入队等待")]),n("td",null,[o("重置mutexWoken标志"),n("br"),o("获得锁")])])])],-1),ib={__name:"10",setup(t){const e={};return Y(tt),(s,a)=>(S(),st(Fe,At(Pt(e)),{default:F(()=>[sb,ob,ab,rb]),_:1},16))}},lb=et(ib,[["__file","/@slidev/slides/10.md"]]),cb=n("h1",null,"V3.0 引入自旋",-1),ub=n("p",null,"自旋是一种多线程同步机制，当前的进程在进入自旋的过程中会一直保持 CPU 的占用，持续检查某个条件是否为真。",-1),pb=n("hr",null,null,-1),fb={class:"overflow-auto h-4/6"},db=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// Fast path: grab unlocked mutex.")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CompareAndSwapInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),o(" mutexLocked"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"return")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("	awoke "),n("span",{class:"token operator"},":="),o(),n("span",{class:"token boolean"},"false")]),o(`
`),n("span",{class:"line"},[o("	iter "),n("span",{class:"token operator"},":="),o(),n("span",{class:"token number"},"0")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"for"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		old "),n("span",{class:"token operator"},":="),o(" m"),n("span",{class:"token punctuation"},"."),o("state")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},":="),o(" old "),n("span",{class:"token operator"},"|"),o(" mutexLocked")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},"&"),o("mutexLocked "),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token function"},"runtime_canSpin"),n("span",{class:"token punctuation"},"("),o("iter"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{"),o(),n("span",{class:"token comment"},"// 自旋")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token comment"},"// Active spinning makes sense.")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token comment"},"// Try to set mutexWoken flag to inform Unlock")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token comment"},"// to not wake other blocked goroutines.")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token operator"},"!"),o("awoke "),n("span",{class:"token operator"},"&&"),o(" old"),n("span",{class:"token operator"},"&"),o("mutexWoken "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token operator"},"&&"),o(" old"),n("span",{class:"token operator"},">>"),o("mutexWaiterShift "),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token operator"},"&&")]),o(`
`),n("span",{class:"line"},[o("					atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CompareAndSwapInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(" old"),n("span",{class:"token punctuation"},","),o(" old"),n("span",{class:"token operator"},"|"),o("mutexWoken"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("					awoke "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token boolean"},"true")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token function"},"runtime_doSpin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("				iter"),n("span",{class:"token operator"},"++")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token keyword"},"continue")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},"="),o(" old "),n("span",{class:"token operator"},"+"),o(),n("span",{class:"token number"},"1"),n("span",{class:"token operator"},"<<"),o("mutexWaiterShift")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" awoke "),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// The goroutine has been woken from sleep,")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// so we need to reset the flag in either case.")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token builtin"},"new"),n("span",{class:"token operator"},"&"),o("mutexWoken "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sync: inconsistent mutex state"'),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},"&^="),o(" mutexWoken")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CompareAndSwapInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(" old"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token builtin"},"new"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},"&"),o("mutexLocked "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token keyword"},"break")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token function"},"runtime_Semacquire"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("sema"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("			awoke "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token boolean"},"true")]),o(`
`),n("span",{class:"line"},[o("			iter "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"0")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),mb={__name:"11",setup(t){const e={layout:"two-cols"};return Y(tt),(s,a)=>{const r=Wt("font"),i=oe,l=Qf("click");return S(),st(Ue,At(Pt(e)),{right:F(c=>[A(r,{class:"text-xs text-gray-300"},{default:F(()=>[o("release-branch.go1.5")]),_:1}),n("div",fb,[A(i,Gt({},{ranges:["13-24","13,21"]}),{default:F(()=>[db]),_:1},16)])]),default:F(()=>[cb,ub,pb,ca((S(),q("div",null,[o(" 在多核的 CPU 上，自旋可以避免 goroutine 的切换，使用恰当会对性能带来很大的增益，但是使用的不恰当就会拖慢整个程序，所以 Goroutine 进入自旋的条件非常苛刻。 ")])),[[l]])]),_:1},16)}}},hb=et(mb,[["__file","/@slidev/slides/11.md"]]),gb=n("h1",null,"runtime_canSpin()",-1),_b=n("div",{class:"text-sm"},[n("p",null,[n("code",null,"runtime_canSpin"),o(" 返回true的条件如下：")]),n("ul",null,[n("li",null,"当前运行的机器是多核CPU，且GOMAXPROCS>1"),n("li",null,"至少存在一个其他正在运行的P，并且当前的本地运行队列（local runq）为空"),n("li",null,"当前goroutine进行自旋的次数小于4")])],-1),kb={class:"text-gray-500"},vb=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token function"},"sync_runtime_canSpin"),n("span",{class:"token punctuation"},"("),o("i "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token builtin"},"bool"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// sync.Mutex is cooperative, so we are conservative with spinning.")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// Spin only few times and only if running on a multicore machine and")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// GOMAXPROCS>1 and there is at least one other running P and local runq is empty.")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// As opposed to runtime mutex we don't do passive spinning here,")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// because there can be work on global runq on on other Ps.")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(" i "),n("span",{class:"token operator"},">="),o(" active_spin "),n("span",{class:"token operator"},"||"),o(" ncpu "),n("span",{class:"token operator"},"<="),o(),n("span",{class:"token number"},"1"),o(),n("span",{class:"token operator"},"||"),o(" gomaxprocs "),n("span",{class:"token operator"},"<="),o(),n("span",{class:"token function"},"int32"),n("span",{class:"token punctuation"},"("),o("sched"),n("span",{class:"token punctuation"},"."),o("npidle"),n("span",{class:"token operator"},"+"),o("sched"),n("span",{class:"token punctuation"},"."),o("nmspinning"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token boolean"},"false")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(" p "),n("span",{class:"token operator"},":="),o(),n("span",{class:"token function"},"getg"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),o("m"),n("span",{class:"token punctuation"},"."),o("p"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),o(),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"runqempty"),n("span",{class:"token punctuation"},"("),o("p"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token boolean"},"false")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token boolean"},"true")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),yb={__name:"12",setup(t){const e={};return Y(tt),(s,a)=>{const r=oe;return S(),st(Fe,At(Pt(e)),{default:F(()=>[gb,_b,n("div",kb,[A(r,Gt({},{ranges:["2-12"]}),{default:F(()=>[vb]),_:1},16)])]),_:1},16)}}},wb=et(yb,[["__file","/@slidev/slides/12.md"]]),xb=n("h1",null,"runtime_doSpin()",-1),bb=n("div",{class:"text-sm"},[n("p",null,"一旦当前 Goroutine 能够进入自旋就会调用runtime.sync_runtime_doSpin ，执行 30 次的 PAUSE指令：")],-1),Sb={class:"text-gray-500"},$b=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token function"},"sync_runtime_doSpin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token function"},"procyield"),n("span",{class:"token punctuation"},"("),o("active_spin_cnt"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token comment"},"// active_spin_cnt 常量 值为30")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),Cb=n("br",null,null,-1),Eb=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[o("TEXT runtime·"),n("span",{class:"token function"},"procyield"),n("span",{class:"token punctuation"},"("),o("SB"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),o("NOSPLIT"),n("span",{class:"token punctuation"},","),o("$"),n("span",{class:"token number"},"0"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"0")]),o(`
`),n("span",{class:"line"},[o("	MOVL	cycles"),n("span",{class:"token operator"},"+"),n("span",{class:"token function"},"0"),n("span",{class:"token punctuation"},"("),o("FP"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),o(" AX")]),o(`
`),n("span",{class:"line"},[o("again"),n("span",{class:"token punctuation"},":")]),o(`
`),n("span",{class:"line"},"	PAUSE"),o(`
`),n("span",{class:"line"},[o("	SUBL	$"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),o(" AX")]),o(`
`),n("span",{class:"line"},"	JNZ	again"),o(`
`),n("span",{class:"line"},"	RET")])],-1),Pb=n("div",{class:"absolute bottom-0 text-gray-400 right-0 font-sans h-2/6 w-3/6 text-sm"},[n("b",null,"Improves the performance of spin-wait loops"),o(". When executing a “spin-wait loop,” a Pentium 4 or Intel Xeon processor suffers a severe performance penalty when exiting the loop because it detects a possible "),n("b",null,"memory order violation"),o(". The PAUSE instruction provides a hint to the processor that the code sequence is a spin-wait loop. The processor uses this hint to avoid the memory order violation in most situations, which greatly improves processor performance. "),n("b",null,"For this reason, it is recommended that a PAUSE instruction be placed in all spin-wait loops."),n("p",null,[n("a",{href:"https://www.felixcloutier.com/x86/pause.html"},[o("Reference: "),n("a",{href:"https://www.felixcloutier.com/x86/pause.html",target:"_blank",rel:"noopener"},"https://www.felixcloutier.com/x86/pause.html")])])],-1),Lb={__name:"13",setup(t){const e={};return Y(tt),(s,a)=>{const r=oe;return S(),st(Fe,At(Pt(e)),{default:F(()=>[xb,bb,n("div",Sb,[A(r,Gt({},{ranges:[""]}),{default:F(()=>[$b]),_:1},16),Cb,A(r,Gt({},{ranges:["all","4"]}),{default:F(()=>[Eb]),_:1},16)]),Pb]),_:1},16)}}},Ob=et(Lb,[["__file","/@slidev/slides/13.md"]]),Tb=n("h1",null,[n("strong",null,"V4.0 解决饥饿")],-1),Ab=n("h3",null,"饥饿问题",-1),Mb=n("br",null,null,-1),Ib=n("ol",null,[n("li",null,"新来的goroutine在CPU上运行，比唤醒的goroutine更具有优势;"),n("li",null,"处于自旋态的goroutine可以有很多个，而被唤醒的goroutine每次只能有一个;"),n("li",null,"被唤醒的goroutine在未抢到锁之后被放回了队列的尾部，加剧了饥饿问题")],-1),Rb=n("br",null,null,-1),Nb=n("h3",null,"优化方案",-1),Fb=n("p",null,"release-branch.go1.9:",-1),Ub=n("ol",null,[n("li",null,"引入饥饿模式，添加mutexStarving标识，解决饥饿问题；"),n("li",null,"将唤醒且未获得锁的goroutine插入队列头部;")],-1),jb={__name:"14",setup(t){const e={};return Y(tt),(s,a)=>(S(),st(Fe,At(Pt(e)),{default:F(()=>[Tb,Ab,Mb,Ib,Rb,Nb,Fb,Ub]),_:1},16))}},Db=et(jb,[["__file","/@slidev/slides/14.md"]]),Vb="/assets/mutex-state-v4-7a36c41c.png",Wb=n("h1",null,"正常模式&饥饿模式",-1),Hb=n("div",{class:"text-sm text-gray-700"},[n("b",null,"正常模式"),o(" - 更好的性能: "),n("br"),o(" 1. 尝试加锁的goroutine会进入自旋, 尝试通过原子操作获得锁; "),n("br"),o(" 2. 若自旋几次后仍未获得锁, 通过信号量进入排队等待, 以先入先出(FIFO)顺序排队等待被唤醒; "),n("br"),o(" 3. 被唤醒的goroutine不会立即获得锁, 而是需要和新来的goroutine竞争;"),n("br"),o(" 4. 若被唤醒的goroutine竞争失败, 会被重新插入队列的"),n("b",null,"头部"),o(";"),n("br"),n("br"),n("b",null,"饥饿模式"),o(" - 避免高尾延时: "),n("br"),o(" 1. 互斥锁的所有权会从执行Unlock的goroutine直接传递给等待队列头部的goroutine; "),n("br"),o(" 2. 新来的goroutine直接进入队列尾部等待, 不会进入自旋, 也不会尝试获得锁;"),n("br"),n("br"),n("b",null,"切换条件"),o(": "),n("br"),o(" 1. goroutine 加锁等待时间超过1ms -> 饥饿模式"),n("br"),o(" 2. goroutine 获得了锁且等待的时间少于1ms或它是最后一个等待者 -> 正常模式 "),n("br")],-1),Bb=n("br",null,null,-1),qb={align:"center"},zb=n("img",{src:Vb,class:"rounded center"},null,-1),Kb=n("div",{class:"text-sm text-gray-400"},[n("ul",null,[n("li",null,"mutexLocked: 表示互斥锁处于Locked状态"),n("li",null,"mutexWoken: 表示已有goroutine被唤醒"),n("li",null,"mutexStarving: 表示处于饥饿模式"),n("li",null,"waitersCount: 当前排队等待的goroutine个数")])],-1),Gb=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"type"),o(" Mutex "),n("span",{class:"token keyword"},"struct"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	state "),n("span",{class:"token builtin"},"int32")]),o(`
`),n("span",{class:"line"},[o("	sema  "),n("span",{class:"token builtin"},"uint32")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),o(),n("span",{class:"token punctuation"},"(")]),o(`
`),n("span",{class:"line"},[o("	mutexLocked "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"1"),o(),n("span",{class:"token operator"},"<<"),o(),n("span",{class:"token boolean"},"iota"),o(),n("span",{class:"token comment"},"// mutex is locked")]),o(`
`),n("span",{class:"line"},"	mutexWoken"),o(`
`),n("span",{class:"line"},"	mutexStarving"),o(`
`),n("span",{class:"line"},[o("	mutexWaiterShift "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token boolean"},"iota")]),o(`
`),n("span",{class:"line"},[o("	starvationThresholdNs "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"1e6")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},")")])])],-1),Yb={__name:"15",setup(t){const e={layout:"two-cols"};return Y(tt),(s,a)=>{const r=Wt("font"),i=Wt("center"),l=oe;return S(),st(Ue,At(Pt(e)),{right:F(c=>[Bb,n("div",qb,[zb,A(i,null,{default:F(()=>[A(r,{class:"text-xs text-gray-300"},{default:F(()=>[o("图3 state结构")]),_:1})]),_:1})]),Kb,A(l,Gt({},{ranges:[""]}),{default:F(()=>[Gb]),_:1},16)]),default:F(()=>[Wb,Hb]),_:1},16)}}},Xb=et(Yb,[["__file","/@slidev/slides/15.md"]]),Zb=n("h1",null,"Lock",-1),Qb={class:"overflow-auto h-96 text-gray-500"},Jb=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// release-branch.go1.13：将 fast path 和 slow path 拆成独立的方法，以便内联，提高性能")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// Fast path: grab unlocked mutex.")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CompareAndSwapInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),o(" mutexLocked"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"return")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// Slow path (outlined so that the fast path can be inlined)")]),o(`
`),n("span",{class:"line"},[o("	m"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lockSlow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"lockSlow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"var"),o(" waitStartTime "),n("span",{class:"token builtin"},"int64"),o(),n("span",{class:"token comment"},"// 等待时间")]),o(`
`),n("span",{class:"line"},[o("	starving "),n("span",{class:"token operator"},":="),o(),n("span",{class:"token boolean"},"false"),o("       "),n("span",{class:"token comment"},"// 饥饿状态标识")]),o(`
`),n("span",{class:"line"},[o("	awoke "),n("span",{class:"token operator"},":="),o(),n("span",{class:"token boolean"},"false"),o("          "),n("span",{class:"token comment"},"// 唤醒标识")]),o(`
`),n("span",{class:"line"},[o("	iter "),n("span",{class:"token operator"},":="),o(),n("span",{class:"token number"},"0"),o("               "),n("span",{class:"token comment"},"// 自旋次数")]),o(`
`),n("span",{class:"line"},[o("	old "),n("span",{class:"token operator"},":="),o(" m"),n("span",{class:"token punctuation"},"."),o("state          "),n("span",{class:"token comment"},"// 当前锁的状态")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"for"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 自旋条件: 正常模式 且 runtime_canSpin 返回为true")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},"&"),n("span",{class:"token punctuation"},"("),o("mutexLocked"),n("span",{class:"token operator"},"|"),o("mutexStarving"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(" mutexLocked "),n("span",{class:"token operator"},"&&"),o(),n("span",{class:"token function"},"runtime_canSpin"),n("span",{class:"token punctuation"},"("),o("iter"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// 当前处于主动自旋, 尝试设置mutexWoken标识")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// 以避免Unlock时唤醒更多的goroutine")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token operator"},"!"),o("awoke "),n("span",{class:"token operator"},"&&"),o(" old"),n("span",{class:"token operator"},"&"),o("mutexWoken "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token operator"},"&&"),o(" old"),n("span",{class:"token operator"},">>"),o("mutexWaiterShift "),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token operator"},"&&")]),o(`
`),n("span",{class:"line"},[o("				atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CompareAndSwapInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(" old"),n("span",{class:"token punctuation"},","),o(" old"),n("span",{class:"token operator"},"|"),o("mutexWoken"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("				awoke "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token boolean"},"true")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token function"},"runtime_doSpin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token comment"},"// 自旋")]),o(`
`),n("span",{class:"line"},[o("			iter"),n("span",{class:"token operator"},"++")]),o(`
`),n("span",{class:"line"},[o("			old "),n("span",{class:"token operator"},"="),o(" m"),n("span",{class:"token punctuation"},"."),o("state")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"continue")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},":="),o(" old")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 若为正常模式 将 mutexLocked 置为 1 表示抢锁")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},"&"),o("mutexStarving "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},"|="),o(" mutexLocked")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 如果当前锁已被加锁或者处于饥饿模式，则将waiter数加1，表示当前goroutine将被作为waiter置于等待队列队尾")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},"&"),n("span",{class:"token punctuation"},"("),o("mutexLocked"),n("span",{class:"token operator"},"|"),o("mutexStarving"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},"+="),o(),n("span",{class:"token number"},"1"),o(),n("span",{class:"token operator"},"<<"),o(" mutexWaiterShift")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" starving "),n("span",{class:"token operator"},"&&"),o(" old"),n("span",{class:"token operator"},"&"),o("mutexLocked "),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},"|="),o(" mutexStarving")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" awoke "),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// 当前goroutine是被唤醒的, 检查并清除标记位")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token builtin"},"new"),n("span",{class:"token operator"},"&"),o("mutexWoken "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token function"},"throw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sync: inconsistent mutex state"'),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},"&^="),o(" mutexWoken")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 通过CAS更新state")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"if"),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CompareAndSwapInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(" old"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token builtin"},"new"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},"&"),n("span",{class:"token punctuation"},"("),o("mutexLocked"),n("span",{class:"token operator"},"|"),o("mutexStarving"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token keyword"},"break"),o(),n("span",{class:"token comment"},"// 通过CAS获得了锁")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// 被唤醒后未获得锁, 需要插入队列头部")]),o(`
`),n("span",{class:"line"},[o("			queueLifo "),n("span",{class:"token operator"},":="),o(" waitStartTime "),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"if"),o(" waitStartTime "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("				waitStartTime "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"runtime_nanotime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token function"},"runtime_SemacquireMutex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("sema"),n("span",{class:"token punctuation"},","),o(" queueLifo"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token comment"},"// 排队等待")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// 被唤醒后 判断是否切换至饥饿模式")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// 条件: 已经处于饥饿模式或等待时间超过 starvationThresholdNs (1ms)")]),o(`
`),n("span",{class:"line"},[o("			starving "),n("span",{class:"token operator"},"="),o(" starving "),n("span",{class:"token operator"},"||"),o(),n("span",{class:"token function"},"runtime_nanotime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),o("waitStartTime "),n("span",{class:"token operator"},">"),o(" starvationThresholdNs")]),o(`
`),n("span",{class:"line"},"			"),o(`
`),n("span",{class:"line"},[o("			old "),n("span",{class:"token operator"},"="),o(" m"),n("span",{class:"token punctuation"},"."),o("state")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},"&"),o("mutexStarving "),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token comment"},"// 若为饥饿模式 锁直接交给被唤醒的goroutine 即当前goroutine")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token comment"},"// 如果这个时候当前goroutine不是被唤醒状态 或 等待队列为空 会发生Panic")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},"&"),n("span",{class:"token punctuation"},"("),o("mutexLocked"),n("span",{class:"token operator"},"|"),o("mutexWoken"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token operator"},"||"),o(" old"),n("span",{class:"token operator"},">>"),o("mutexWaiterShift "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("					"),n("span",{class:"token function"},"throw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sync: inconsistent mutex state"'),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token comment"},"// 成功获得锁 waiter数-1")]),o(`
`),n("span",{class:"line"},[o("				delta "),n("span",{class:"token operator"},":="),o(),n("span",{class:"token function"},"int32"),n("span",{class:"token punctuation"},"("),o("mutexLocked "),n("span",{class:"token operator"},"-"),o(),n("span",{class:"token number"},"1"),n("span",{class:"token operator"},"<<"),o("mutexWaiterShift"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token comment"},"// 没有其他等待goroutine 则切换为正常模式")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token operator"},"!"),o("starving "),n("span",{class:"token operator"},"||"),o(" old"),n("span",{class:"token operator"},">>"),o("mutexWaiterShift "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"1"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("					"),n("span",{class:"token comment"},"// 退出饥饿模式")]),o(`
`),n("span",{class:"line"},[o("					delta "),n("span",{class:"token operator"},"-="),o(" mutexStarving")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("				atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(" delta"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token keyword"},"break")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("			awoke "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token boolean"},"true")]),o(`
`),n("span",{class:"line"},[o("			iter "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"0")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}"),o(),n("span",{class:"token keyword"},"else"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// CAS 未成功进入下一次循环")]),o(`
`),n("span",{class:"line"},[o("			old "),n("span",{class:"token operator"},"="),o(" m"),n("span",{class:"token punctuation"},"."),o("state")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),t2={__name:"16",setup(t){const e={};return Y(tt),(s,a)=>{const r=oe;return S(),st(Fe,At(Pt(e)),{default:F(()=>[Zb,n("div",Qb,[A(r,Gt({},{ranges:["1-9","11-17","18-30","31-49","50-51","52-54","56-61","63-65","67-87","all"]}),{default:F(()=>[Jb]),_:1},16)])]),_:1},16)}}},e2=et(t2,[["__file","/@slidev/slides/16.md"]]),n2=n("h1",null,"Unlock",-1),s2={class:"overflow-auto h-96 text-gray-500"},o2=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// 锁的两种空闲态: ")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"// 1.完全空闲：即锁的初始态，此时 m.state==0")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"// 2.锁空闲：当前 mutexLocked 值为0，但仍然有等待获取锁的goroutine")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// Fast path: 快速解锁")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},":="),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token operator"},"-"),o("mutexLocked"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 未解锁成功")]),o(`
`),n("span",{class:"line"},[o("		m"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unlockSlow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"new"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"unlockSlow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token builtin"},"int32"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// 校验锁的合法性")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"new"),n("span",{class:"token operator"},"+"),o("mutexLocked"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"&"),o("mutexLocked "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// unlock 一个没有上锁的 mutex")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token function"},"fatal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sync: unlock of unlocked mutex"'),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},"	"),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token builtin"},"new"),n("span",{class:"token operator"},"&"),o("mutexStarving "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 正常模式")]),o(`
`),n("span",{class:"line"},[o("		old "),n("span",{class:"token operator"},":="),o(),n("span",{class:"token builtin"},"new")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"for"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// 如果锁没有waiter,或者锁有其他以下已发生的情况之一，则后面的工作就不用做了，直接返回")]),o(`
`),n("span",{class:"line"},[o("      	"),n("span",{class:"token comment"},"// 1. 锁处于锁定状态，表示锁已经被其他goroutine获取了")]),o(`
`),n("span",{class:"line"},[o("      	"),n("span",{class:"token comment"},"// 2. 锁处于被唤醒状态，这表明有等待goroutine被唤醒，不用再尝试唤醒其他goroutine")]),o(`
`),n("span",{class:"line"},[o("      	"),n("span",{class:"token comment"},"// 3. 锁处于饥饿模式，那么锁之后会被直接交给等待队列队头goroutine")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},">>"),o("mutexWaiterShift "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token operator"},"||"),o(" old"),n("span",{class:"token operator"},"&"),n("span",{class:"token punctuation"},"("),o("mutexLocked"),n("span",{class:"token operator"},"|"),o("mutexWoken"),n("span",{class:"token operator"},"|"),o("mutexStarving"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token keyword"},"return")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token comment"},"// 尝试唤醒等待者")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token builtin"},"new"),o(),n("span",{class:"token operator"},"="),o(),n("span",{class:"token punctuation"},"("),o("old "),n("span",{class:"token operator"},"-"),o(),n("span",{class:"token number"},"1"),n("span",{class:"token operator"},"<<"),o("mutexWaiterShift"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"|"),o(" mutexWoken")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token keyword"},"if"),o(" atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CompareAndSwapInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(" old"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token builtin"},"new"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token function"},"runtime_Semrelease"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("sema"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),o()]),o(`
`),n("span",{class:"line"},[o("				"),n("span",{class:"token keyword"},"return")]),o(`
`),n("span",{class:"line"},[o("			"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("			old "),n("span",{class:"token operator"},"="),o(" m"),n("span",{class:"token punctuation"},"."),o("state")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}"),o(),n("span",{class:"token keyword"},"else"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 饥饿模式")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 当前锁交给下一个正在尝试获取锁的等待者，等待者被唤醒后会得到锁")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 注意: mutexLocked标识没有设置, 被唤醒的goroutine会设置它")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token comment"},"// 因为饥饿模式下的mutex会被认为处于Locked状态, 所以后来者不会尝试获取它")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token function"},"runtime_Semrelease"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("sema"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),a2={__name:"17",setup(t){const e={};return Y(tt),(s,a)=>{const r=oe;return S(),st(Fe,At(Pt(e)),{default:F(()=>[n2,n("div",s2,[A(r,Gt({},{ranges:["1-11","13-18","20-38","39-45","all"]}),{default:F(()=>[o2]),_:1},16)])]),_:1},16)}}},r2=et(a2,[["__file","/@slidev/slides/17.md"]]),i2="/assets/trylock-90f86f23.png",l2=n("h1",null,"V4.1 TryLock",-1),c2=n("a",{href:"https://link.zhihu.com/?target=https%3A//github.com/golang/go/issues/6123"},"《sync: mutex.TryLock》",-1),u2=n("br",null,null,-1),p2=n("a",{href:"https://link.zhihu.com/?target=https%3A//github.com/golang/go/issues/27544"},"《proposal: add sync.Mutex.TryLock》",-1),f2=n("br",null,null,-1),d2=n("a",{href:"https://link.zhihu.com/?target=https%3A//github.com/golang/go/issues/45435"},"《sync: add Mutex.TryLock》",-1),m2=n("br",null,null,-1),h2=n("br",null,null,-1),g2=n("br",null,null,-1),_2=n("img",{src:i2,class:"rounded"},null,-1),k2=n("a",{href:"https://zhuanlan.zhihu.com/p/467654600"},"Go1.18 新特性：三顾茅庐，被折腾 N 次的 TryLock",-1),v2=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token punctuation"},"("),o("m "),n("span",{class:"token operator"},"*"),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token function"},"TryLock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token builtin"},"bool"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	old "),n("span",{class:"token operator"},":="),o(" m"),n("span",{class:"token punctuation"},"."),o("state")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(" old"),n("span",{class:"token operator"},"&"),n("span",{class:"token punctuation"},"("),o("mutexLocked"),n("span",{class:"token operator"},"|"),o("mutexStarving"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"0"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token boolean"},"false")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// There may be a goroutine waiting for the mutex, but we are")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// running now and can try to grab the mutex before that")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token comment"},"// goroutine wakes up.")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token operator"},"!"),o("atomic"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CompareAndSwapInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("m"),n("span",{class:"token punctuation"},"."),o("state"),n("span",{class:"token punctuation"},","),o(" old"),n("span",{class:"token punctuation"},","),o(" old"),n("span",{class:"token operator"},"|"),o("mutexLocked"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token boolean"},"false")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token boolean"},"true")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),y2={__name:"18",setup(t){const e={layout:"two-cols"};return Y(tt),(s,a)=>{const r=Wt("font"),i=Wt("center"),l=oe;return S(),st(Ue,At(Pt(e)),{right:F(c=>[A(r,{class:"text-xs text-gray-300"},{default:F(()=>[o("release-branch.go1.18")]),_:1}),A(l,Gt({},{ranges:[""]}),{default:F(()=>[v2]),_:1},16)]),default:F(()=>[l2,A(r,{size:"1",class:"text-gray-700 leading-6"},{default:F(()=>[o(" 1. 2013 年 @lukescott 提出"),c2,o("，被拒绝。"),u2,o(" 2. 2018 年 @deanveloper 提出"),p2,o("，被拒绝。"),f2,o(" 3. 2021 年 @TyeMcQueen 提出"),d2,o("，先被拒绝，后接受。"),m2,o(" 4. 2022 年，由于之前 Go1.17 功能特性已冻结，定在 Go1.18 发布(3 月)。"),h2]),_:1}),g2,_2,A(i,null,{default:F(()=>[A(r,{size:"1",class:"text-gray-300"},{default:F(()=>[o("issues/45435 《proposal: add sync.Mutex.TryLock》")]),_:1})]),_:1}),A(r,{class:"text-xs text-gray-500"},{default:F(()=>[o(" Reference:"),k2]),_:1})]),_:1},16)}}},w2=et(y2,[["__file","/@slidev/slides/18.md"]]),x2=n("h1",null,[n("strong",null,"Mutex使用的易错点")],-1),b2={__name:"19",setup(t){const e={class:"grid text-center align-self-center justify-self-center text-sm"};return Y(tt),(s,a)=>(S(),st(Fe,At(Pt(e)),{default:F(()=>[x2]),_:1},16))}},S2=et(b2,[["__file","/@slidev/slides/19.md"]]),$2=n("h1",null,[n("strong",null,"1. Lock/Unlock 没有成对出现")],-1),C2=n("p",null,"Lock/Unlock 没有成对出现，就意味着会出现死锁的情况，或者是因为 Unlock 一个未加锁的 Mutex 而导致 panic。",-1),E2=n("p",null,"因此推荐尽可能结合defer, 在编写代码时使Lock/Unlock成对出现:",-1),P2=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{"),o()]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"var"),o(" mu sync"),n("span",{class:"token punctuation"},"."),o("Mutex ")]),o(`
`),n("span",{class:"line"},[o("	mu"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o()]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"defer"),o(" mu"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o()]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("	fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello world!"'),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),L2={__name:"20",setup(t){const e={};return Y(tt),(s,a)=>{const r=oe;return S(),st(Fe,At(Pt(e)),{default:F(()=>[$2,C2,E2,A(r,Gt({},{ranges:[""]}),{default:F(()=>[P2]),_:1},16)]),_:1},16)}}},O2=et(L2,[["__file","/@slidev/slides/20.md"]]),T2=n("h1",null,"2. Copy 已使用的 Mutex",-1),A2=n("p",null,[n("strong",null,"Package sync 的同步原语在使用后是不能复制的。")],-1),M2=n("p",null,"第 12 行在调用 foo 函数的时候，调用者会复制 Mutex 变量 c 作为 foo 函数的参数，由于复制之前已经使用了这个锁，这就导致，复制的 Counter 是一个带状态 Counter。",-1),I2=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"var"),o(" mu sync"),n("span",{class:"token punctuation"},"."),o("Mutex")]),o(`
`),n("span",{class:"line"},[o("	mu"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"defer"),o(" mu"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),o("mu"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token comment"},"// 复制锁")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),o("c sync"),n("span",{class:"token punctuation"},"."),o("Mutex"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"defer"),o(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"in foo"'),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),R2={__name:"21",setup(t){const e={layout:"two-cols"};return Y(tt),(s,a)=>{const r=oe;return S(),st(Ue,At(Pt(e)),{right:F(i=>[A(r,Gt({},{ranges:[""]}),{default:F(()=>[I2]),_:1},16)]),default:F(()=>[T2,A2,M2]),_:1},16)}}},N2=et(R2,[["__file","/@slidev/slides/21.md"]]),F2=n("h1",null,"3. 重入",-1),U2=n("p",null,[n("strong",null,"Mutex 不是可重入的锁。"),o(" 因为 Mutex 的实现中没有记录哪个 goroutine 拥有这把锁。理论上，任何 goroutine 都可以随意地 Unlock 这把锁，所以没办法计算重入条件。所以，一旦误用 Mutex 的重入，就会导致报错")],-1),j2=n("a",{href:"https://groups.google.com/g/golang-nuts/c/XqW1qcuZgKg/m/Ui3nQkeLV80J"},"Russ Cox - [Experimenting with GO]Go 为什么不支持可重入锁？",-1),D2=n("br",null,null,-1),V2=n("br",null,null,-1),W2=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token function"},"F"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        mu"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token operator"},"..."),o(" do some stuff "),n("span",{class:"token operator"},"...")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"G"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token operator"},"..."),o(" do some more stuff "),n("span",{class:"token operator"},"...")]),o(`
`),n("span",{class:"line"},[o("        mu"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token function"},"G"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        mu"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token operator"},"..."),o(" do some stuff "),n("span",{class:"token operator"},"...")]),o(`
`),n("span",{class:"line"},[o("        mu"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),H2={__name:"22",setup(t){const e={layout:"two-cols"};return Y(tt),(s,a)=>{const r=Wt("font"),i=oe;return S(),st(Ue,At(Pt(e)),{right:F(l=>[A(i,Gt({},{ranges:[""]}),{default:F(()=>[W2]),_:1},16)]),default:F(()=>[F2,A(r,{class:"text-xs text-gray-500"},{default:F(()=>[o(" * 可重入互斥锁（reentrant mutex）是互斥锁的一种，同一线程对其多次加锁不会产生死锁。可重入互斥锁也称递归互斥锁（recursive mutex）或递归锁（recursive lock）。 ")]),_:1}),U2,A(r,{class:"text-xs text-gray-500"},{default:F(()=>[o(" Reference:"),j2,D2,o(" (Recursive mutexes are just a mistake, nothing more than a comfortable home for bugs.) "),V2]),_:1})]),_:1},16)}}},B2=et(H2,[["__file","/@slidev/slides/22.md"]]),q2=n("h1",null,"4. 死锁",-1),z2=n("br",null,null,-1),K2=n("p",null,"死锁的四个条件是：",-1),G2=n("ol",null,[n("li",null,"禁止抢占(no preemption)：系统资源不能被强制从一个进程中退出。"),n("li",null,"持有和等待(hold and wait)：一个进程可以在等待时持有系统资源。"),n("li",null,"互斥(mutual exclusion)：资源只能同时分配给一个行程，无法多个行程共享。"),n("li",null,[o("循环等待(circular waiting)：一系列进程互相持有其他进程所需要的资源。"),n("br")])],-1),Y2=n("p",null,"检测工具:",-1),X2=n("ul",null,[n("li",null,"官方自带检索工具"),n("li",null,[n("a",{href:"https://github.com/sasha-s/go-deadlock",target:"_blank",rel:"noopener"},"go-deadlock")]),n("li",null,[n("a",{href:"https://github.com/dominikh/go-tools",target:"_blank",rel:"noopener"},"go-tools")])],-1),Z2=n("pre",{class:"slidev-code language-go"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"func"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"var"),o(),n("span",{class:"token punctuation"},"(")]),o(`
`),n("span",{class:"line"},[o("		l1"),n("span",{class:"token punctuation"},","),o(" l2 sync"),n("span",{class:"token punctuation"},"."),o("Mutex")]),o(`
`),n("span",{class:"line"},[o("		wg     sync"),n("span",{class:"token punctuation"},"."),o("WaitGroup")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	wg"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"go"),o(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"defer"),o(" wg"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("		l1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"defer"),o(" l1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token operator"},"<-"),o("time"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"After"),n("span",{class:"token punctuation"},"("),o("time"),n("span",{class:"token punctuation"},"."),o("Second"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token comment"},"// do something")]),o(`
`),n("span",{class:"line"},[o("		l2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"defer"),o(" l2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token keyword"},"go"),o(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"defer"),o(" wg"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("		l2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"defer"),o(" l2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token operator"},"<-"),o("time"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"After"),n("span",{class:"token punctuation"},"("),o("time"),n("span",{class:"token punctuation"},"."),o("Second"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token comment"},"// do something")]),o(`
`),n("span",{class:"line"},[o("		l1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("		"),n("span",{class:"token keyword"},"defer"),o(" l1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("	"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("	wg"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Wait"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),Q2={__name:"23",setup(t){const e={layout:"two-cols"};return Y(tt),(s,a)=>{const r=Wt("font"),i=oe;return S(),st(Ue,At(Pt(e)),{right:F(l=>[A(i,Gt({},{ranges:[""]}),{default:F(()=>[Z2]),_:1},16)]),default:F(()=>[q2,A(r,{class:"text-xs text-gray-900"},{default:F(()=>[o(" 当两个以上的运算单元，双方都在等待对方停止执行，以获取系统资源，但是没有一方提前退出时，就称为死锁。"),z2,K2,G2,Y2,X2]),_:1})]),_:1},16)}}},J2=et(Q2,[["__file","/@slidev/slides/23.md"]]),tS={class:"slidev-layout"},eS={class:"relative flex flex-col justify-center"},nS=["src"],sS={class:"mt-2 text-xs w-full"},oS={__name:"text-image",setup(t){return Y(tt),(e,s)=>{const a=Wt("AsGraphic");return S(),q("div",tS,[n("div",{class:jt(["grid grid-cols-2",e.$attrs.reverse?"gap-16":"gap-8"])},[n("div",{class:jt(["prose pr-16",{"order-1":e.$attrs.reverse}])},[ye(e.$slots,"default")],2),n("figure",eS,[A(a,{type:"zigzag",absolute:"","bottom-4":"","right-0":""}),n("img",{src:e.$attrs.media,class:"rounded-lg shadow-lg object-cover z-10"},null,8,nS),n("figcaption",sS,an(e.$attrs.caption),1)])],2)])}}},ha=et(oS,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/slidev-theme-penguin/layouts/text-image.vue"]]),aS=n("h1",null,'知名项目的"踩坑"经历',-1),rS=n("p",null,[o("Docker-"),n("a",{href:"https://github.com/moby/moby/pull/34881/files",target:"_blank",rel:"noopener"},"issue 34881"),o(":")],-1),iS=n("p",null,"在第 34 行，发现不满足条件就返回了，c.mu 锁没有释放",-1),lS={__name:"24",setup(t){const e={layout:"text-image",media:"/img/docker-34881.png",caption:"docker-issue 34881"};return Y(tt),(s,a)=>(S(),st(ha,At(Pt(e)),{default:F(()=>[aS,rS,iS]),_:1},16))}},cS=et(lS,[["__file","/@slidev/slides/24.md"]]),uS=n("h1",null,'知名项目的"踩坑"经历',-1),pS=n("p",null,[o("Kubernetes-"),n("a",{href:"https://github.com/kubernetes/kubernetes/pull/45192/files",target:"_blank",rel:"noopener"},"issue 45192"),o(":")],-1),fS=n("p",null,"在第 48 行，函数返回，c.mu 锁没有释放",-1),dS={__name:"25",setup(t){const e={layout:"text-image",media:"/img/kubernetes-45192.png",caption:"Kubernetes-issue 45192"};return Y(tt),(s,a)=>(S(),st(ha,At(Pt(e)),{default:F(()=>[uS,pS,fS]),_:1},16))}},mS=et(dS,[["__file","/@slidev/slides/25.md"]]),hS=n("h1",null,'知名项目的"踩坑"经历',-1),gS=n("p",null,[o("gRPC-"),n("a",{href:"https://github.com/grpc/grpc-go/pull/795/files",target:"_blank",rel:"noopener"},"issue 795"),o(":")],-1),_S=n("p",null,"在第 801 行，将Lock写成了Unlock",-1),kS={__name:"26",setup(t){const e={layout:"text-image",media:"/img/gRPC-795.png",caption:"gRPC-issue 795"};return Y(tt),(s,a)=>(S(),st(ha,At(Pt(e)),{default:F(()=>[hS,gS,_S]),_:1},16))}},vS=et(kS,[["__file","/@slidev/slides/26.md"]]),yS=n("h1",null,'知名项目的"踩坑"经历',-1),wS=n("p",null,[o("etcd-"),n("a",{href:"https://github.com/etcd-io/etcd/pull/10419/files",target:"_blank",rel:"noopener"},"issue 10419"),o(":")],-1),xS=n("p",null,"Store 方法内对请求了锁，而调用的 Compact 的方法内又请求了锁，导致死锁",-1),bS={__name:"27",setup(t){const e={layout:"text-image",media:"/img/etcd-10419.png",caption:"etcd-issue 10419"};return Y(tt),(s,a)=>(S(),st(ha,At(Pt(e)),{default:F(()=>[yS,wS,xS]),_:1},16))}},SS=et(bS,[["__file","/@slidev/slides/27.md"]]),$S=n("h1",null,"谢谢",-1),CS=n("hr",null,null,-1),ES=n("p",null,[o("参考资料"),n("br"),o(" 《Go 并发编程实战》晁岳攀 "),n("br"),o(" 《Go语言设计与实现》左书祺 "),n("br"),o(" 《深度探索GO语言》封幼林 "),n("br"),o(" 《跟煎鱼精通 Go 语言》陈煎鱼 "),n("br"),n("a",{href:"https://www.youtube.com/watch?v=tjpncm3xTTc",target:"_blank",rel:"noopener"},"ITT 2019 - Kavya Joshi - Let’s talk locks!")],-1),PS={__name:"28",setup(t){const e={class:"grid text-center align-self-center justify-self-center text-sm"};return Y(tt),(s,a)=>(S(),st(Fe,At(Pt(e)),{default:F(()=>[$S,CS,ES]),_:1},16))}},LS=et(PS,[["__file","/@slidev/slides/28.md"]]),OS=[{path:"1",name:"page-1",component:bw,meta:{theme:"penguin",colorSchema:"auto",layout:"intro",themeConfig:{logoHeader:"/img/logo.png",eventLogo:"https://golang.google.cn/favicon.ico"},css:"unocss",highlighter:"prism",lineNumbers:!0,title:"Go Mutex 实现与演进",slide:{raw:`---
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
`,title:"Go Mutex 实现与演进",level:1,content:`# Go Mutex 实现与演进
@huwenhao`,frontmatter:{theme:"penguin",colorSchema:"auto",layout:"intro",themeConfig:{logoHeader:"/img/logo.png",eventLogo:"https://golang.google.cn/favicon.ico"},css:"unocss",highlighter:"prism",lineNumbers:!0,title:"Go Mutex 实现与演进"},index:0,start:0,end:15,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Iw,meta:{slide:{raw:`
# **为什么需要锁**

锁的概念诞生于并发场景下的竞争问题，用于保证并发环境下对共享资源访问的互斥，是限制共享资源访问的同步机制。 

<br>

### 并发与并行

并行指的是多个线程能在同一时刻同时运行，真正的并行只在多核场景下能够实现，在单核场景下，由于操作系统的时间片调度机制存在，可以在宏观上实现一种“伪”并行（并发）。

<img src="/img/parallel.jpg" class="rounded"/>
<center><font size=2>图1 并发与并行</font></center>
`,title:"**为什么需要锁**",level:1,content:`# **为什么需要锁**

锁的概念诞生于并发场景下的竞争问题，用于保证并发环境下对共享资源访问的互斥，是限制共享资源访问的同步机制。 

<br>

### 并发与并行

并行指的是多个线程能在同一时刻同时运行，真正的并行只在多核场景下能够实现，在单核场景下，由于操作系统的时间片调度机制存在，可以在宏观上实现一种“伪”并行（并发）。

<img src="/img/parallel.jpg" class="rounded"/>
<center><font size=2>图1 并发与并行</font></center>`,frontmatter:{},index:1,start:16,end:30,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Ww,meta:{slide:{raw:`
# **为什么需要锁**

### 线程的并发问题
但无论是单核还是多核，程序执行起来，并不像我们感觉到的那样连续，而是会因为硬件中断、IO等原因，而表现为断断续续的执行。所以当我们有多个线程并发执行，并伴随有对共享数据的操作，就可能会发生一些预料之外的问题。

<div  align="center">    
<img src="/img/parallel2.jpg" class="h-52 rounded shadow center"/>
<center><font size=2>图2 并发问题</font></center>
</div>
`,title:"**为什么需要锁**",level:1,content:`# **为什么需要锁**

### 线程的并发问题
但无论是单核还是多核，程序执行起来，并不像我们感觉到的那样连续，而是会因为硬件中断、IO等原因，而表现为断断续续的执行。所以当我们有多个线程并发执行，并伴随有对共享数据的操作，就可能会发生一些预料之外的问题。

<div  align="center">    
<img src="/img/parallel2.jpg" class="h-52 rounded shadow center"/>
<center><font size=2>图2 并发问题</font></center>
</div>`,frontmatter:{},index:2,start:31,end:42,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:fx,meta:{layout:"two-cols",slide:{raw:`---
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

\`\`\`go {all|12}
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
\`\`\`

<font class="text-xs text-gray-400 leading-none">*在Go语言CSA的实现中，执行CMPXCHGL指令之前会执行LOCK指令</font>
`,title:"什么是锁",level:1,content:`::default::

# 什么是锁

锁是一种并发编程中的同步原语，通过线程主动放弃运行机会的方式，来协调多线程对共享资源的竞争。

1. **单核场景**: <br>锁就是一个变量，通过硬件提供的原子操作（如：CAS等）实现，保证了同一时刻只有一个线程拿到锁进入临界区;

2. **多核场景**: <br>硬件原子指令是由多个微指令组成，原子性相对于单核而言的，多核的多个线程竞争进入临界区权限需要锁缓存行或总线;

::right::
<br>

<font class="text-xs text-gray-300">github.com/go/src/runtime/internal/atomic/atomic_amd64.s</font>

\`\`\`go {all|12}
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
\`\`\`

<font class="text-xs text-gray-400 leading-none">*在Go语言CSA的实现中，执行CMPXCHGL指令之前会执行LOCK指令</font>`,frontmatter:{layout:"two-cols"},index:3,start:42,end:81,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Sx,meta:{layout:"presenter",presenterImage:"/img/go.jpg",slide:{raw:`---
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
`,title:"**Go Mutex**",level:1,content:`# **Go Mutex**

Mutex一词取自于Mutual exclusion的缩写，也称作互斥锁。Go语言在Mutex的实现中迭代了多个版本:

- V1.0 初版实现
- V2.0 引入非公平锁(go 1.0)
- V3.0 引入自旋(go 1.5)
- V4.0 解决饥饿(go 1.13)
- V4.1 增加TryLock方法(go 1.18)


<font class="text-xs text-gray-400 leading-none">*以上版本的编号是为了方便叙述和区分临时定义的，官方并没有这样的说法</font>`,frontmatter:{layout:"presenter",presenterImage:"/img/go.jpg"},index:4,start:81,end:99,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Ox,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

::default::

# V1.0 初版实现

最初版的Mutex实现比较简单，只有 key 和 sema 两个字段：

1. key 用来标识锁是否被持有，也用来标识当前队列有多少个等待的goroutine
2. sema 为信号量变量，用来阻塞和唤醒goroutine。

::right::

<font class="text-xs text-gray-300">github.com/go/src/sync/mutex.go</font>
\`\`\`go
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
\`\`\`
`,title:"V1.0 初版实现",level:1,content:`::default::

# V1.0 初版实现

最初版的Mutex实现比较简单，只有 key 和 sema 两个字段：

1. key 用来标识锁是否被持有，也用来标识当前队列有多少个等待的goroutine
2. sema 为信号量变量，用来阻塞和唤醒goroutine。

::right::

<font class="text-xs text-gray-300">github.com/go/src/sync/mutex.go</font>
\`\`\`go
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
\`\`\``,frontmatter:{layout:"two-cols"},index:5,start:99,end:139,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Fx,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

::default::

# V1.0 初版实现

初版的 Mutex 实现有一个问题：

请求锁的 goroutine 会排队等待获取互斥锁。虽然这貌似很公平，但是从性能上来看，却不是最优的。

因为如果我们能够把锁交给正在占用 CPU 时间片的 goroutine 的话，那就不需要做上下文的切换，在高并发的情况下，会有更好的性能。

::right::

<font class="text-xs text-gray-300">github.com/go/src/sync/mutex.go</font>
\`\`\`go {7,10,14,20}
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
\`\`\`
`,title:"V1.0 初版实现",level:1,content:`::default::

# V1.0 初版实现

初版的 Mutex 实现有一个问题：

请求锁的 goroutine 会排队等待获取互斥锁。虽然这貌似很公平，但是从性能上来看，却不是最优的。

因为如果我们能够把锁交给正在占用 CPU 时间片的 goroutine 的话，那就不需要做上下文的切换，在高并发的情况下，会有更好的性能。

::right::

<font class="text-xs text-gray-300">github.com/go/src/sync/mutex.go</font>
\`\`\`go {7,10,14,20}
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
\`\`\``,frontmatter:{layout:"two-cols"},index:6,start:139,end:180,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Gx,meta:{layout:"two-cols",slide:{raw:`---
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
\`\`\`go
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
\`\`\`
`,title:"V2.0 引入非公平锁",level:1,content:`::default::

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
\`\`\`go
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
\`\`\``,frontmatter:{layout:"two-cols"},index:7,start:180,end:219,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:nb,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

Lock

<div class="overflow-auto  h-96">

\`\`\`go {0|2-5|8-27|all}
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
\`\`\`

</div>

::right::
Unlock
<div class="overflow-auto  h-96">
\`\`\`go {0|2-7|9-22|all}
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
\`\`\`
</div>

`,content:`Lock

<div class="overflow-auto  h-96">

\`\`\`go {0|2-5|8-27|all}
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
\`\`\`

</div>

::right::
Unlock
<div class="overflow-auto  h-96">
\`\`\`go {0|2-7|9-22|all}
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
\`\`\`
</div>`,frontmatter:{layout:"two-cols"},index:8,start:219,end:291,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:lb,meta:{slide:{raw:`
# **V2.0 引入非公平锁**

请求锁的 goroutine 有两类，一类是新来请求锁的 goroutine，另一类是被唤醒的等待请求锁的 goroutine。锁的状态也有两种：加锁和未加锁。通过一张表格，来说明一下 goroutine 不同来源不同状态下的处理逻辑。

<br>

|    | **锁已被持有** | **锁未被持有** |
| --- | --- | --- | 
| **新来的goroutine** | waiter++ <br> 入队等待 | 获得锁 |
| **被唤醒的goroutine** | waiter++<br>重置mutexWoken标志<br>入队等待 | 重置mutexWoken标志<br>获得锁 |

`,title:"**V2.0 引入非公平锁**",level:1,content:`# **V2.0 引入非公平锁**

请求锁的 goroutine 有两类，一类是新来请求锁的 goroutine，另一类是被唤醒的等待请求锁的 goroutine。锁的状态也有两种：加锁和未加锁。通过一张表格，来说明一下 goroutine 不同来源不同状态下的处理逻辑。

<br>

|    | **锁已被持有** | **锁未被持有** |
| --- | --- | --- | 
| **新来的goroutine** | waiter++ <br> 入队等待 | 获得锁 |
| **被唤醒的goroutine** | waiter++<br>重置mutexWoken标志<br>入队等待 | 重置mutexWoken标志<br>获得锁 |`,frontmatter:{},index:9,start:292,end:305,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:hb,meta:{layout:"two-cols",slide:{raw:`---
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
\`\`\`go {13-24|13,21}
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
\`\`\`
</div>
`,title:"V3.0 引入自旋",level:1,content:`# V3.0 引入自旋

自旋是一种多线程同步机制，当前的进程在进入自旋的过程中会一直保持 CPU 的占用，持续检查某个条件是否为真。

<hr>

<div v-click>
在多核的 CPU 上，自旋可以避免 goroutine 的切换，使用恰当会对性能带来很大的增益，但是使用的不恰当就会拖慢整个程序，所以 Goroutine 进入自旋的条件非常苛刻。
</div>

::right::
<font class="text-xs text-gray-300">release-branch.go1.5</font>
<div class="overflow-auto h-4/6">
\`\`\`go {13-24|13,21}
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
\`\`\`
</div>`,frontmatter:{layout:"two-cols"},index:10,start:305,end:369,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:wb,meta:{slide:{raw:`
# runtime_canSpin()

<div class="text-sm">

\`runtime_canSpin\` 返回true的条件如下：
- 当前运行的机器是多核CPU，且GOMAXPROCS>1
- 至少存在一个其他正在运行的P，并且当前的本地运行队列（local runq）为空
- 当前goroutine进行自旋的次数小于4

</div>

<div class="text-gray-500">

\`\`\`go {2-12}
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
\`\`\`
</div>
`,title:"runtime_canSpin()",level:1,content:`# runtime_canSpin()

<div class="text-sm">

\`runtime_canSpin\` 返回true的条件如下：
- 当前运行的机器是多核CPU，且GOMAXPROCS>1
- 至少存在一个其他正在运行的P，并且当前的本地运行队列（local runq）为空
- 当前goroutine进行自旋的次数小于4

</div>

<div class="text-gray-500">

\`\`\`go {2-12}
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
\`\`\`
</div>`,frontmatter:{},index:11,start:370,end:402,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Ob,meta:{slide:{raw:`
# runtime_doSpin()

<div class="text-sm">

一旦当前 Goroutine 能够进入自旋就会调用runtime.sync_runtime_doSpin ，执行 30 次的 PAUSE指令：

</div>

<div class="text-gray-500">

\`\`\`go
func sync_runtime_doSpin() {
	procyield(active_spin_cnt) // active_spin_cnt 常量 值为30
}
\`\`\`
<br>
\`\`\`go {all|4}
TEXT runtime·procyield(SB),NOSPLIT,$0-0
	MOVL	cycles+0(FP), AX
again:
	PAUSE
	SUBL	$1, AX
	JNZ	again
	RET
\`\`\`
</div>


<div class="absolute bottom-0 text-gray-400 right-0 font-sans h-2/6 w-3/6 text-sm">
<b>Improves the performance of spin-wait loops</b>. When executing a “spin-wait loop,” a Pentium 4 or Intel Xeon processor suffers a severe performance penalty when exiting the loop because it detects a possible <b>memory order violation</b>. The PAUSE instruction provides a hint to the processor that the code sequence is a spin-wait loop. The processor uses this hint to avoid the memory order violation in most situations, which greatly improves processor performance. <b>For this reason, it is recommended that a PAUSE instruction be placed in all spin-wait loops.</b>

<a href="https://www.felixcloutier.com/x86/pause.html">Reference: https://www.felixcloutier.com/x86/pause.html</a>
</div>
`,title:"runtime_doSpin()",level:1,content:`# runtime_doSpin()

<div class="text-sm">

一旦当前 Goroutine 能够进入自旋就会调用runtime.sync_runtime_doSpin ，执行 30 次的 PAUSE指令：

</div>

<div class="text-gray-500">

\`\`\`go
func sync_runtime_doSpin() {
	procyield(active_spin_cnt) // active_spin_cnt 常量 值为30
}
\`\`\`
<br>
\`\`\`go {all|4}
TEXT runtime·procyield(SB),NOSPLIT,$0-0
	MOVL	cycles+0(FP), AX
again:
	PAUSE
	SUBL	$1, AX
	JNZ	again
	RET
\`\`\`
</div>


<div class="absolute bottom-0 text-gray-400 right-0 font-sans h-2/6 w-3/6 text-sm">
<b>Improves the performance of spin-wait loops</b>. When executing a “spin-wait loop,” a Pentium 4 or Intel Xeon processor suffers a severe performance penalty when exiting the loop because it detects a possible <b>memory order violation</b>. The PAUSE instruction provides a hint to the processor that the code sequence is a spin-wait loop. The processor uses this hint to avoid the memory order violation in most situations, which greatly improves processor performance. <b>For this reason, it is recommended that a PAUSE instruction be placed in all spin-wait loops.</b>

<a href="https://www.felixcloutier.com/x86/pause.html">Reference: https://www.felixcloutier.com/x86/pause.html</a>
</div>`,frontmatter:{},index:12,start:403,end:438,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Db,meta:{slide:{raw:`
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
`,title:"**V4.0 解决饥饿**",level:1,content:`# **V4.0 解决饥饿**

### 饥饿问题

<br>

1. 新来的goroutine在CPU上运行，比唤醒的goroutine更具有优势;
2. 处于自旋态的goroutine可以有很多个，而被唤醒的goroutine每次只能有一个;
3. 被唤醒的goroutine在未抢到锁之后被放回了队列的尾部，加剧了饥饿问题

<br>

### 优化方案

release-branch.go1.9: 
	
1. 引入饥饿模式，添加mutexStarving标识，解决饥饿问题； 
2. 将唤醒且未获得锁的goroutine插入队列头部;`,frontmatter:{},index:13,start:439,end:459,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Xb,meta:{layout:"two-cols",slide:{raw:`---
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

\`\`\`go
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
\`\`\`
`,title:"正常模式&饥饿模式",level:1,content:`# 正常模式&饥饿模式

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

\`\`\`go
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
\`\`\``,frontmatter:{layout:"two-cols"},index:14,start:459,end:512,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:e2,meta:{slide:{raw:`
# Lock

<div class="overflow-auto h-96 text-gray-500">
\`\`\`go {1-9|11-17|18-30|31-49|50-51|52-54|56-61|63-65|67-87|all}
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
\`\`\`
</div>
`,title:"Lock",level:1,content:`# Lock

<div class="overflow-auto h-96 text-gray-500">
\`\`\`go {1-9|11-17|18-30|31-49|50-51|52-54|56-61|63-65|67-87|all}
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
\`\`\`
</div>`,frontmatter:{},index:15,start:513,end:614,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:r2,meta:{slide:{raw:`
# Unlock

<div class="overflow-auto h-96 text-gray-500">
\`\`\`go {1-11|13-18|20-38|39-45|all}
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
\`\`\`
</div>
`,title:"Unlock",level:1,content:`# Unlock

<div class="overflow-auto h-96 text-gray-500">
\`\`\`go {1-11|13-18|20-38|39-45|all}
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
\`\`\`
</div>`,frontmatter:{},index:16,start:615,end:669,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:w2,meta:{layout:"two-cols",slide:{raw:`---
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
\`\`\`go
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
\`\`\`
`,title:"V4.1 TryLock",level:1,content:`# V4.1 TryLock

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
\`\`\`go
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
\`\`\``,frontmatter:{layout:"two-cols"},index:17,start:669,end:709,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:S2,meta:{class:"grid text-center align-self-center justify-self-center text-sm",slide:{raw:`---
class: 'grid text-center align-self-center justify-self-center text-sm'
---

# **Mutex使用的易错点**
`,title:"**Mutex使用的易错点**",level:1,content:"# **Mutex使用的易错点**",frontmatter:{class:"grid text-center align-self-center justify-self-center text-sm"},index:18,start:709,end:715,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:O2,meta:{slide:{raw:`
# **1. Lock/Unlock 没有成对出现**

Lock/Unlock 没有成对出现，就意味着会出现死锁的情况，或者是因为 Unlock 一个未加锁的 Mutex 而导致 panic。

因此推荐尽可能结合defer, 在编写代码时使Lock/Unlock成对出现: 

\`\`\`go
func foo() { 
	var mu sync.Mutex 
	mu.Lock() 
	defer mu.Unlock() 

	fmt.Println("hello world!")
}
\`\`\`
`,title:"**1. Lock/Unlock 没有成对出现**",level:1,content:`# **1. Lock/Unlock 没有成对出现**

Lock/Unlock 没有成对出现，就意味着会出现死锁的情况，或者是因为 Unlock 一个未加锁的 Mutex 而导致 panic。

因此推荐尽可能结合defer, 在编写代码时使Lock/Unlock成对出现: 

\`\`\`go
func foo() { 
	var mu sync.Mutex 
	mu.Lock() 
	defer mu.Unlock() 

	fmt.Println("hello world!")
}
\`\`\``,frontmatter:{},index:19,start:716,end:733,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:N2,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# 2. Copy 已使用的 Mutex

**Package sync 的同步原语在使用后是不能复制的。**

第 12 行在调用 foo 函数的时候，调用者会复制 Mutex 变量 c 作为 foo 函数的参数，由于复制之前已经使用了这个锁，这就导致，复制的 Counter 是一个带状态 Counter。

::right::
\`\`\`go
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
\`\`\`
`,title:"2. Copy 已使用的 Mutex",level:1,content:`# 2. Copy 已使用的 Mutex

**Package sync 的同步原语在使用后是不能复制的。**

第 12 行在调用 foo 函数的时候，调用者会复制 Mutex 变量 c 作为 foo 函数的参数，由于复制之前已经使用了这个锁，这就导致，复制的 Counter 是一个带状态 Counter。

::right::
\`\`\`go
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
\`\`\``,frontmatter:{layout:"two-cols"},index:20,start:733,end:759,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:B2,meta:{layout:"two-cols",slide:{raw:`---
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
\`\`\`go
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
\`\`\`
`,title:"3. 重入",level:1,content:`# 3. 重入
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
\`\`\`go
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
\`\`\``,frontmatter:{layout:"two-cols"},index:21,start:759,end:793,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:J2,meta:{layout:"two-cols",slide:{raw:`---
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

\`\`\`go
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
\`\`\`
`,title:"4. 死锁",level:1,content:`# 4. 死锁
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

\`\`\`go
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
\`\`\``,frontmatter:{layout:"two-cols"},index:22,start:793,end:848,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:cS,meta:{layout:"text-image",media:"/img/docker-34881.png",caption:"docker-issue 34881",slide:{raw:`---
layout: text-image
media: '/img/docker-34881.png'
caption: 'docker-issue 34881'
---

# 知名项目的"踩坑"经历
Docker-[issue 34881](https://github.com/moby/moby/pull/34881/files):

在第 34 行，发现不满足条件就返回了，c.mu 锁没有释放
`,title:'知名项目的"踩坑"经历',level:1,content:`# 知名项目的"踩坑"经历
Docker-[issue 34881](https://github.com/moby/moby/pull/34881/files):

在第 34 行，发现不满足条件就返回了，c.mu 锁没有释放`,frontmatter:{layout:"text-image",media:"/img/docker-34881.png",caption:"docker-issue 34881"},index:23,start:848,end:859,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:mS,meta:{layout:"text-image",media:"/img/kubernetes-45192.png",caption:"Kubernetes-issue 45192",slide:{raw:`---
layout: text-image
media: '/img/kubernetes-45192.png'
caption: 'Kubernetes-issue 45192'
---

# 知名项目的"踩坑"经历
Kubernetes-[issue 45192](https://github.com/kubernetes/kubernetes/pull/45192/files):

在第 48 行，函数返回，c.mu 锁没有释放
`,title:'知名项目的"踩坑"经历',level:1,content:`# 知名项目的"踩坑"经历
Kubernetes-[issue 45192](https://github.com/kubernetes/kubernetes/pull/45192/files):

在第 48 行，函数返回，c.mu 锁没有释放`,frontmatter:{layout:"text-image",media:"/img/kubernetes-45192.png",caption:"Kubernetes-issue 45192"},index:24,start:859,end:870,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:vS,meta:{layout:"text-image",media:"/img/gRPC-795.png",caption:"gRPC-issue 795",slide:{raw:`---
layout: text-image
media: '/img/gRPC-795.png'
caption: 'gRPC-issue 795'
---

# 知名项目的"踩坑"经历
gRPC-[issue 795](https://github.com/grpc/grpc-go/pull/795/files):

在第 801 行，将Lock写成了Unlock

`,title:'知名项目的"踩坑"经历',level:1,content:`# 知名项目的"踩坑"经历
gRPC-[issue 795](https://github.com/grpc/grpc-go/pull/795/files):

在第 801 行，将Lock写成了Unlock`,frontmatter:{layout:"text-image",media:"/img/gRPC-795.png",caption:"gRPC-issue 795"},index:25,start:870,end:882,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:SS,meta:{layout:"text-image",media:"/img/etcd-10419.png",caption:"etcd-issue 10419",slide:{raw:`---
layout: text-image
media: '/img/etcd-10419.png'
caption: 'etcd-issue 10419'
---

# 知名项目的"踩坑"经历
etcd-[issue 10419](https://github.com/etcd-io/etcd/pull/10419/files):

Store 方法内对请求了锁，而调用的 Compact 的方法内又请求了锁，导致死锁

`,title:'知名项目的"踩坑"经历',level:1,content:`# 知名项目的"踩坑"经历
etcd-[issue 10419](https://github.com/etcd-io/etcd/pull/10419/files):

Store 方法内对请求了锁，而调用的 Compact 的方法内又请求了锁，导致死锁`,frontmatter:{layout:"text-image",media:"/img/etcd-10419.png",caption:"etcd-issue 10419"},index:26,start:882,end:894,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:LS,meta:{class:"grid text-center align-self-center justify-self-center text-sm",slide:{raw:`---
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


`,title:"谢谢",level:1,content:`# 谢谢
***
参考资料<br>
《Go 并发编程实战》晁岳攀 <br>
《Go语言设计与实现》左书祺 <br>
《深度探索GO语言》封幼林 <br>
《跟煎鱼精通 Go 语言》陈煎鱼 <br>
[ITT 2019 - Kavya Joshi - Let's talk locks!](https://www.youtube.com/watch?v=tjpncm3xTTc)`,frontmatter:{class:"grid text-center align-self-center justify-self-center text-sm"},index:27,start:894,end:909,notesHTML:"",filepath:"/Users/huwenhao/slidev/go-mutex/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",component:Jy,meta:{layout:"end"}}],zt=OS,TS=[{name:"play",path:"/",component:w0,children:[...zt]},{name:"print",path:"/print",component:Xy},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>ts(()=>import("./PresenterPrint-970029fd.js"),["assets/PresenterPrint-970029fd.js","assets/NoteViewer-e47d8ae8.js","assets/index-febbf12b.js"])},{name:"presenter",path:"/presenter/:no",component:()=>ts(()=>import("./Presenter-3911a2e4.js"),["assets/Presenter-3911a2e4.js","assets/NoteViewer-e47d8ae8.js","assets/DrawingControls-340b4a03.js","assets/index-febbf12b.js","assets/Presenter-9e4d7baf.css"]),beforeEnter:t=>{if(!js.remote||js.remote===t.query.password)return!0;if(js.remote&&t.query.password===void 0){const e=prompt("Enter password");if(js.remote===e)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],$n=D_({history:jg("/"),routes:TS});function AS(t,e,{mode:s="replace"}={}){return O({get(){const a=$n.currentRoute.value.query[t];return a==null?e??null:Array.isArray(a)?a.filter(Boolean):a},set(a){Ie(()=>{$n[w(s)]({query:{...$n.currentRoute.value.query,[t]:a}})})}})}const lp=ot(0);Ie(()=>{$n.afterEach(async()=>{await Ie(),lp.value+=1})});const Ge=O(()=>$n.currentRoute.value),Yr=O(()=>Ge.value.query.print!==void 0),MS=O(()=>Ge.value.query.print==="clicks"),Je=O(()=>Ge.value.query.embedded!==void 0),sn=O(()=>Ge.value.path.startsWith("/presenter")),cp=O(()=>Yr.value&&!MS.value),hr=O(()=>Ge.value.query.password),IS=O(()=>!sn.value&&(!Nt.remote||hr.value===Nt.remote)),Bl=AS("clicks","0"),up=O(()=>zt.length-1),RS=O(()=>Ge.value.path),Xt=O(()=>parseInt(RS.value.split(/\//g).slice(-1)[0])||1);O(()=>Xr(Xt.value));const ge=O(()=>zt.find(t=>t.path===`${Xt.value}`));O(()=>{var t,e,s;return(s=(e=(t=ge.value)==null?void 0:t.meta)==null?void 0:e.slide)==null?void 0:s.id});O(()=>{var t,e;return((e=(t=ge.value)==null?void 0:t.meta)==null?void 0:e.layout)||(Xt.value===1?"cover":"default")});const Ma=O(()=>zt.find(t=>t.path===`${Math.min(zt.length,Xt.value+1)}`)),NS=O(()=>{var t,e;return lp.value,((e=(t=ge.value)==null?void 0:t.meta)==null?void 0:e.__clicksElements)||[]}),es=O({get(){if(cp.value)return 99999;let t=+(Bl.value||0);return isNaN(t)&&(t=0),t},set(t){Bl.value=t.toString()}}),Ko=O(()=>{var t,e;return+(((e=(t=ge.value)==null?void 0:t.meta)==null?void 0:e.clicks)??NS.value.length)}),FS=O(()=>Xt.value<zt.length-1||es.value<Ko.value),US=O(()=>Xt.value>1||es.value>0),jS=O(()=>zt.filter(t=>{var e,s;return(s=(e=t.meta)==null?void 0:e.slide)==null?void 0:s.title}).reduce((t,e)=>(Zr(t,e),t),[])),DS=O(()=>Qr(jS.value,ge.value));O(()=>Jr(DS.value));function Yn(){Ko.value<=es.value?Go():es.value+=1}async function Xn(){es.value<=0?await Yo():es.value-=1}function Xr(t){return sn.value?`/presenter/${t}`:`/${t}`}function Go(){const t=Math.min(zt.length,Xt.value+1);return xs(t)}async function Yo(t=!0){const e=Math.max(1,Xt.value-1);await xs(e),t&&Ko.value&&$n.replace({query:{...Ge.value.query,clicks:Ko.value}})}function xs(t,e){return $n.push({path:Xr(t),query:{...Ge.value.query,clicks:e}})}function VS(t){const e=ot(0),{direction:s,distanceX:a,distanceY:r}=sg(t,{onSwipeStart(i){i.pointerType==="touch"&&(ao.value||(e.value=tr()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!e.value||ao.value)return;const l=Math.abs(a.value),c=Math.abs(r.value);l/window.innerWidth>.3||l>100?s.value===nn.LEFT?Yn():Xn():(c/window.innerHeight>.4||c>200)&&(s.value===nn.DOWN?Yo():Go())}})}async function ql(){const{saveAs:t}=await ts(()=>import("./FileSaver.min-1de5c8ee.js").then(e=>e.F),[]);t(du(Nt.download)?Nt.download:Nt.exportFilename?`${Nt.exportFilename}.pdf`:"/slidev-exported.pdf",`${Nt.title}.pdf`)}async function v$(t){var e,s;if(t==null){const a=(s=(e=ge.value)==null?void 0:e.meta)==null?void 0:s.slide;if(!(a!=null&&a.filepath))return!1;t=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function Zr(t,e,s=1){var r,i,l,c,u;const a=(i=(r=e.meta)==null?void 0:r.slide)==null?void 0:i.level;a&&a>s&&t.length>0?Zr(t[t.length-1].children,e,s+1):t.push({children:[],level:s,path:e.path,hideInToc:Boolean((l=e.meta)==null?void 0:l.hideInToc),title:(u=(c=e.meta)==null?void 0:c.slide)==null?void 0:u.title})}function Qr(t,e,s=!1,a){return t.map(r=>{const i={...r,active:r.path===(e==null?void 0:e.path),hasActiveParent:s};return i.children.length>0&&(i.children=Qr(i.children,e,i.active||i.hasActiveParent,i)),a&&(i.active||i.activeParent)&&(a.activeParent=!0),i})}function Jr(t,e=1){return t.filter(s=>!s.hideInToc).map(s=>({...s,children:Jr(s.children,e+1)}))}export{d$ as $,ot as A,n as B,ne as C,ye as D,ht as E,$t as F,o as G,an as H,XS as I,ca as J,ru as K,u$ as L,gu as M,f$ as N,fo as O,fh as P,Ss as Q,KS as R,GS as S,ou as T,Jt as U,Nc as V,_p as W,l$ as X,i$ as Y,Et as Z,et as _,r$ as a,ov as a$,Me as a0,c$ as a1,Ep as a2,Pp as a3,po as a4,Ie as a5,Ar as a6,Gt as a7,Jn as a8,br as a9,bt as aA,h$ as aB,uf as aC,jr as aD,zt as aE,up as aF,g$ as aG,ge as aH,Mk as aI,VS as aJ,m$ as aK,_$ as aL,v0 as aM,Zu as aN,qr as aO,zr as aP,ie as aQ,zk as aR,HS as aS,BS as aT,Ko as aU,FS as aV,Ma as aW,Ca as aX,ao as aY,Ta as aZ,n0 as a_,zS as aa,Ye as ab,WS as ac,cp as ad,$m as ae,Cm as af,cu as ag,lu as ah,iu as ai,xm as aj,t$ as ak,e$ as al,n$ as am,QS as an,JS as ao,Dy as ap,Vy as aq,ql as ar,Yn as as,Go as at,v$ as au,Xn as av,Yo as aw,Ge as ax,ZS as ay,bs as az,Xt as b,Ee as b0,p$ as b1,Rs as b2,fr as b3,yk as b4,wk as b5,xk as b6,Sk as b7,k$ as b8,Be as b9,ue as ba,So as bb,Wn as bc,jv as bd,uu as be,$k as bf,Nt as c,es as d,sn as e,Dt as f,Xr as g,Y as h,s$ as i,tt as j,Wt as k,S as l,q as m,A as n,o$ as o,a$ as p,O as q,$n as r,st as s,F as t,jt as u,Ei as v,Ft as w,w as x,qS as y,YS as z};
