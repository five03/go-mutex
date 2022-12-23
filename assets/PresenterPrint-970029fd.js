import{f as _,h as d,j as h,aB as p,c as m,aC as u,l as n,m as r,B as t,H as s,x as a,F as f,O as g,C as v,aD as x,aE as y,aF as b,G as N,n as w,E as k,_ as P}from"./nav-334d2ac6.js";import{N as V}from"./NoteViewer-e47d8ae8.js";import{u as B}from"./index-febbf12b.js";const C={class:"m-4"},S={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},H={class:"opacity-50"},L={class:"text-lg"},T={class:"font-bold flex gap-2"},D={class:"opacity-50"},E=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},z=_({__name:"PresenterPrint",setup(M){d(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),B({title:`Notes - ${m.title}`});const i=u(()=>y.slice(0,-1).map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.notesHTML!==""));return(o,l)=>(n(),r("div",{id:"page-root",style:v(a(x))},[t("div",C,[t("div",S,[t("h1",j,s(a(m).title),1),t("div",H,s(new Date().toLocaleString()),1)]),(n(!0),r(f,null,g(a(i),(e,c)=>(n(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",L,[t("div",T,[t("div",D,s(e==null?void 0:e.no)+"/"+s(a(b)),1),N(" "+s(e==null?void 0:e.title)+" ",1),E])]),w(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(n(),r("hr",F)):k("v-if",!0)]))),128))])],4))}}),R=P(z,[["__file","/Users/huwenhao/slidev/go-mutex/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
