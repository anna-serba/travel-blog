import h from"./DocumentDrivenEmpty.eF2ZnFuh.js";import L from"./ContentRenderer.OLcARluz.js";import b from"./DocumentDrivenNotFound.HA8nWJg9.js";import{k,d as p,E as g,P as R,s as x,G as C,H as S,r as B,I as c,J as N,K as T,L as u,M as m,T as j,N as A,O as E,S as O,Q as w,R as D,m as H,U as $,V as q,b as f,c as I,g as y,w as _,W as v}from"./entry.zxQ34mQH.js";import"./ContentRendererMarkdown.vue.VicWSHV2.js";import"./preview.XoerIBJ6.js";const M=p({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,o){const e=await c[t.name]().then(n=>n.default||n);return()=>m(e,t.layoutProps,o.slots)}}),V=p({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,o){const e=k(),n=g(R),s=n===x()?C():n,r=S(()=>{let a=u(t.name)??s.meta.layout??"default";return a&&!(a in c)&&t.fallback&&(a=u(t.fallback)),a}),l=B();o.expose({layoutRef:l});const d=e.deferHydration();return()=>{const a=r.value&&r.value in c,i=s.meta.layoutTransition??N;return T(j,a&&i,{default:()=>m(O,{suspensible:!0,onResolve:()=>{E(d)}},{default:()=>m(F,{layoutProps:A(o.attrs,{ref:l}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!i},o.slots)})}).default()}}}),F=p({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,o){const e=t.name;return t.shouldProvide&&w(D,{isCurrent:n=>e===(n.meta.layout??"default")}),()=>{var n,s;return!e||typeof e=="string"&&!(e in c)?(s=(n=o.slots).default)==null?void 0:s.call(n):m(M,{key:e,layoutProps:t.layoutProps,name:e},o.slots)}}}),G={class:"document-driven-page"},X=p({__name:"document-driven",setup(t){const{contentHead:o}=H().public.content,{page:e,layout:n}=$();return e.value,o&&q(e),(s,r)=>{const l=h,d=L,a=b,i=V;return f(),I("div",G,[y(i,{name:u(n)||"default"},{default:_(()=>[u(e)?(f(),v(d,{key:u(e)._id,value:u(e)},{empty:_(({value:P})=>[y(l,{value:P},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{X as default};