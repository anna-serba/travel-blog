import{u as m}from"./asyncData.yuF9VuSL.js";import{L as c,H as p,d as i,ac as l,r as u,M as e,l as d}from"./entry.aKj_Y7TH.js";import f from"./Ellipsis.s6yb_1_5.js";import y from"./ComponentPlaygroundData.kFlE4oUC.js";import"./TabsHeader.isg5bOba.js";import"./ComponentPlaygroundProps.0oSOhM2I.js";import"./ProseH4.uhVnAuqk.js";import"./ProseCodeInline.Utkrpiww.js";import"./Badge.gtp8L4TI.js";import"./MDCSlot.2Fvyt7-7.js";import"./slot.KcJdavy9.js";import"./ProseP.etYfG159.js";import"./index.NjR4Z4p3.js";import"./ComponentPlaygroundSlots.vue.vI4dYVNl.js";import"./ComponentPlaygroundTokens.vue.pXs0yEoq.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=d(h,[["__scopeId","data-v-8134fc35"]]);export{E as default};
