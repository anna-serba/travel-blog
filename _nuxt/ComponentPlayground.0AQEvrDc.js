import{L as m,H as p,d as c,ac as i,r as l,M as e,l as u}from"./entry.Rx_ZSJ5Q.js";import{u as d}from"./asyncData.AiVQlfNk.js";import f from"./Ellipsis.kbaxt7Ai.js";import y from"./ComponentPlaygroundData.h5Ms71iV.js";import"./TabsHeader.iqbcUtgh.js";import"./ComponentPlaygroundProps.hC-X84Hc.js";import"./ProseH4.v_PEgudi.js";import"./ProseCodeInline.PkqpeA_w.js";import"./Badge.10nIN5To.js";import"./MDCSlot.QAGdNF4r.js";import"./slot.zUsuT3b7.js";import"./ProseP.v7crVfpe.js";import"./index.HPMVixuJ.js";import"./ComponentPlaygroundSlots.vue.uNLxySoO.js";import"./ComponentPlaygroundTokens.vue.5RTjTnUU.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=u(h,[["__scopeId","data-v-8134fc35"]]);export{E as default};