import{m as V,f as g,V as h}from"./VToolbar.fd1acf6f.js";import{m as y,u as B}from"./layout.3c146ad7.js";import{_ as I,r as P,g as A,c as u,t as m,j as p,k as T,e as R,P as S}from"./index.0b3b7628.js";import{h as c}from"./router.f6657911.js";import{V as x}from"./VBtn.e0ea0a42.js";const z=I()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...V(),...y(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const r=P(),d=A(e,"modelValue"),n=u(()=>{var l,i;var o,s;const f=(l=(o=r.value)==null?void 0:o.contentHeight)!=null?l:0,b=(i=(s=r.value)==null?void 0:s.extensionHeight)!=null?i:0;return f+b}),{layoutItemStyles:v}=B({id:e.name,order:u(()=>parseInt(e.order,10)),position:m(e,"location"),layoutSize:n,elementSize:n,active:d,absolute:m(e,"absolute")});return c(()=>{const[o]=g(e);return p(h,T({ref:r,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...v.value,height:void 0}},o),a)}),{}}}),C=R({name:"VAppBarNavIcon",props:{icon:{type:S,default:"$menu"}},setup(e,t){let{slots:a}=t;return c(()=>p(x,{class:"v-app-bar-nav-icon",icon:e.icon},a)),{}}});export{C as V,z as a};
