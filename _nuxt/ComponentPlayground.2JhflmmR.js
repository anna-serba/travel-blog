import{L as m,H as p,d as c,ac as i,r as l,M as e,l as u}from"./entry.dnWRf-Ki.js";import{u as d}from"./asyncData.XYAFOYv2.js";import f from"./Ellipsis.lux9lmDm.js";import y from"./ComponentPlaygroundData.G9Imx3FU.js";import"./TabsHeader.c62IWwkT.js";import"./ComponentPlaygroundProps.v5TZPP72.js";import"./ProseH4.FkP9Hu1U.js";import"./ProseCodeInline.VCzMInj5.js";import"./Badge.iCdytL5g.js";import"./MDCSlot.QsoWi7Ea.js";import"./slot.XRi_V5tk.js";import"./ProseP.TqdGBg7Q.js";import"./index.DzTUBB9k.js";import"./ComponentPlaygroundSlots.vue.c9AGJvoi.js";import"./ComponentPlaygroundTokens.vue.J3E0NQVX.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=u(h,[["__scopeId","data-v-8134fc35"]]);export{E as default};
