"use strict";(this.webpackChunkvelox_maps=this.webpackChunkvelox_maps||[]).push([[10],{35:(e,t,r)=>{r.r(t),r.d(t,{App:()=>S});var i=r(31),n=r(166),l=r(135),a=r(148),o=r(168),c=r(169),s=r(172),d=(0,a.zo)("div",{display:"flex",justifyContent:"center"}),h=(0,a.zo)("div",{display:"flex",gap:"10px",padding:"10px 10px"}),p=(0,a.w1)(h,{flexDirection:"row",justifyContent:"space-evenly"}),m=((0,a.w1)(h,{flexDirection:"column",alignItems:"flex-start"}),(0,a.zo)("div",{position:"fixed",width:"100vw",top:"0",left:"0"})),u=(0,a.zo)("div",{display:"flex",flexDirection:"column",gap:"2px"}),v=(0,a.zo)("div",{display:"flex",flexDirection:"row",gap:"5px"}),f=r(83),y=r(140),Z=r(141);function b(){var[e,t]=(0,a.hQ)();return(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(o.Z,{children:(0,Z.tZ)(m,{children:(0,Z.tZ)(c.Z,{title:y.name,overrides:{Root:{style:e=>{var{$theme:t}=e;return{backgroundColor:t.colors.accent700}}},AppName:{style:e=>{var{$theme:t}=e;return{height:"32px",[t.mediaQuery.small]:{width:"0px",overflow:"hidden"},[t.mediaQuery.medium]:{width:"auto",overflow:"visible"}}}}}})})}),(0,Z.tZ)(o.Z,{children:(0,Z.tZ)(m,{children:(0,Z.tZ)(d,{children:(0,Z.tZ)(p,{className:e({alignItems:"center",[t.mediaQuery.small]:{height:t.sizing.scale1200},[t.mediaQuery.medium]:{height:"72px"}}),children:(0,Z.BX)(p,{className:e({alignItems:"baseline"}),children:[(0,Z.tZ)(s.RV,{children:"react-baseui-maplibre"}),(0,Z.tZ)(s.T3,{children:y.version}),(0,Z.BX)(s.Tq,{children:["(",f.env.GIT_VERSION,")"]})]})})})})})]})}var g=r(167),x=r(138),w=(0,a.zo)(s.T3,(e=>{var{$theme:t}=e;return{color:t.colors.primary300}}));const O=()=>{var[e,t]=(0,a.hQ)(),r=(0,n.v)(g.Yc),i=(0,n.v)(g.aO);return r?(0,Z.tZ)(o.Z,{children:(0,Z.BX)(v,{className:e({position:"fixed",right:"10px",padding:"8px",justifyContent:"center",backgroundColor:t.colors.accent700,[t.mediaQuery.small]:{top:"60px"},[t.mediaQuery.medium]:{top:"80px"}}),children:[(0,Z.BX)(u,{className:e({alignItems:"flex-end"}),children:[(0,Z.tZ)(w,{children:"lat:"}),(0,Z.tZ)(w,{children:"lon:"}),(0,Z.tZ)(w,{children:"zoom:"})]}),(0,Z.BX)(u,{className:e({width:"60px"}),children:[(0,Z.tZ)(s.T3,{children:(0,x.WU)(i.latitude)}),(0,Z.tZ)(s.T3,{children:(0,x.WU)(i.longitude)}),(0,Z.tZ)(s.T3,{children:(0,x.WU)(i.zoom)})]})]})}):null};var j=r(183),z=r(184),C=r(139);const N=()=>{var[e]=(0,a.hQ)(),t=(0,n.v)(g.Yc),r=(0,n.v)(g.bm),{act:i}=(0,l.n)();return t?(0,Z.tZ)(o.Z,{children:(0,Z.tZ)(v,{className:e({position:"fixed",right:"10px",justifyContent:"center",bottom:"10px"}),children:(0,Z.tZ)(j.Z,{autocomplete:!1,value:r.label,onChange:(e,t)=>t&&i.map.SET_TILESOURCE(t),size:z.NO.mini,options:C.L,mapOptionToString:e=>e.label,overrides:{Root:{style:()=>({width:"120px"})}},onFocus:e=>e.target.blur()})})}):null};var P=r(185);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=e=>{var{width:t,height:r}=e,[i]=(0,a.hQ)();return(0,Z.tZ)("div",{className:i(T(T({display:"flex"},{width:t,height:r}),{},{alignItems:"center",justifyContent:"center"})),children:(0,Z.tZ)(P.aN,{})})};function I(e){var t=(0,i.lazy)((()=>Promise.all([r.e(6),r.e(13)]).then(r.bind(r,97))));return(0,Z.tZ)(i.Suspense,{fallback:(0,Z.tZ)(D,{width:e.width,height:e.height}),children:(0,Z.tZ)(t,T({},e))})}var S=()=>{var{tnk:e}=(0,l.n)(),t=(0,n.v)(g.bm).url;return(0,i.useEffect)((()=>{e.map.setViewportFromHash()}),[]),(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(b,{}),(0,Z.tZ)(O,{}),(0,Z.tZ)(N,{}),(0,Z.tZ)(I,{mapStyle:t,width:"100vw",height:"100vh",minZoom:2,maxZoom:14})]})}},167:(e,t,r)=>{r.d(t,{Yc:()=>i,bm:()=>n,aO:()=>l});var i=e=>e.map.ready,n=e=>e.map.tilesource,l=e=>e.map.viewport}}]);