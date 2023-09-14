import{m as p,j as B,a as $,b as N,c as S,u as x,d as P,o as w,e as I,f as T,h as z,_ as b,V as _}from"./router.f6657911.js";import{m as R,u as E,a as D,V as f}from"./VBtn.e0ea0a42.js";import{m as O,u as j}from"./layout.3c146ad7.js";import{e as G,m as L,am as q,t as s,c as n,i as A,j as t,a as g,l as y,z as F,s as a,v as o,E as U,q as Y}from"./index.0b3b7628.js";import{V as H}from"./VContainer.ade98d3a.js";import"./position.dd351739.js";import"./intersectionObserver.19f1a3d8.js";import"./VProgressCircular.0bd382b5.js";const J=G({name:"VBottomNavigation",props:{bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...p(),...B(),...$(),...N(),...O({name:"bottom-navigation"}),...S({tag:"header"}),...R({modelValue:!0,selectedClass:"v-btn--selected"}),...L()},emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:l}=i;const{themeClasses:u}=q(),{borderClasses:m}=x(e),{backgroundColorClasses:d,backgroundColorStyles:c}=P(s(e,"bgColor")),{densityClasses:h}=w(e),{elevationClasses:V}=I(e),{roundedClasses:k}=T(e),v=n(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),r=s(e,"active"),{layoutItemStyles:C}=j({id:e.name,order:n(()=>parseInt(e.order,10)),position:n(()=>"bottom"),layoutSize:n(()=>r.value?v.value:0),elementSize:v,active:r,absolute:s(e,"absolute")});return E(e,D),A({VBtn:{color:s(e,"color"),density:s(e,"density"),stacked:n(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),z(()=>t(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":r.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},u.value,d.value,m.value,h.value,V.value,k.value],style:[c.value,C.value,{height:g(v.value),transform:`translateY(${g(r.value?0:100,"%")})`}]},{default:()=>[l.default&&t("div",{class:"v-bottom-navigation__content"},[l.default()])]})),{}}}),K={};function M(e,i,l,u,m,d){return y(),F(J,null,{default:a(()=>[t(f,{value:"recent"},{default:a(()=>[t(_,null,{default:a(()=>[o("mdi-history")]),_:1}),o(" Recent ")]),_:1}),t(f,{value:"favorites"},{default:a(()=>[t(_,null,{default:a(()=>[o("mdi-heart")]),_:1}),o(" Favorites ")]),_:1}),t(f,{value:"nearby"},{default:a(()=>[t(_,null,{default:a(()=>[o("mdi-map-marker")]),_:1}),o(" Nearby ")]),_:1})]),_:1})}const Q=b(K,[["render",M]]);const W={components:{styleOne:Q}};function X(e,i,l,u,m,d){const c=U("styleOne");return y(),Y("div",null,[t(H,null,{default:a(()=>[t(c)]),_:1})])}const re=b(W,[["render",X],["__scopeId","data-v-30aedba9"]]);export{re as default};
