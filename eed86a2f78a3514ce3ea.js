"use strict";(this.webpackChunkvelox_maps=this.webpackChunkvelox_maps||[]).push([[11],{51:(e,t,r)=>{r.r(t),r.d(t,{App:()=>re});var o=r(27),n=r(169),i=r(161),a=r(159),l=r(171),c=r(179),s=r(196),d=r(182),p=r(93),u=(0,l.zo)("div",{position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",top:0,left:0,width:"100vw",height:"100vh"}),h=(0,l.zo)("div",{display:"flex",justifyContent:"center"}),m=(0,l.zo)("div",{display:"flex",gap:"10px",padding:"10px 10px"}),f=(0,l.w1)(m,{flexDirection:"row",justifyContent:"space-evenly"}),v=((0,l.w1)(m,{flexDirection:"column",alignItems:"flex-start"}),(0,l.zo)("div",{position:"fixed",width:"100vw",top:"0",left:"0"})),y=(0,l.zo)("div",{display:"flex",flexDirection:"column",gap:"2px"}),g=((0,l.zo)("div",{display:"flex",flexDirection:"row",gap:"5px"}),r(92)),b=r(162),x=r(163);function Z(){var[e]=(0,l.hQ)(),t=(0,p.F)(),r={Block:{style:{color:t.colors.white}}};return(0,x.BX)(x.HY,{children:[(0,x.tZ)(c.Z,{children:(0,x.tZ)(v,{children:(0,x.tZ)(s.Z,{title:b.name,overrides:{Root:{style:{backgroundColor:t.colors.accent700}},AppName:{style:{display:"flex",alignItems:"center",color:t.colors.white,[t.mediaQuery.small]:{width:"0px",height:"28px",overflow:"hidden"},[t.mediaQuery.medium]:{width:"auto",height:"24px",overflow:"visible"}}}}})})}),(0,x.tZ)(c.Z,{children:(0,x.tZ)(v,{children:(0,x.tZ)(h,{children:(0,x.tZ)(f,{className:e({alignItems:"center",[t.mediaQuery.small]:{height:t.sizing.scale1200},[t.mediaQuery.medium]:{height:t.sizing.scale1600}}),children:(0,x.BX)(f,{className:e({alignItems:"baseline"}),children:[(0,x.tZ)(d.RV,{overrides:r,children:"react-baseui-maplibre"}),(0,x.tZ)(d.T3,{overrides:r,children:b.version}),(0,x.BX)(d.Tq,{overrides:r,children:["(",g.env.GIT_VERSION,")"]})]})})})})})]})}var w=r(158),O=r(38),j=r(177);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B=e=>{var{width:t,height:r}=e,[o]=(0,l.hQ)();return(0,x.tZ)("div",{className:o(P(P({display:"flex"},{width:t,height:r}),{},{alignItems:"center",justifyContent:"center"})),children:(0,x.tZ)(j.aN,{})})};const T=(0,O.memo)((function(e){var t=(0,O.lazy)((()=>Promise.all([r.e(5),r.e(13)]).then(r.bind(r,99))));return(0,x.tZ)(O.Suspense,{fallback:(0,x.tZ)(B,{width:e.width,height:e.height}),children:(0,x.tZ)(t,P({},e))})}));const k=()=>{var e=(0,n.v)(w.um).url;return(0,x.tZ)(T,{mapStyle:e,width:"100vw",height:"100vh",minZoom:2,maxZoom:14})};var C=r(140),N=r(180),D=r(10);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=(0,l.zo)("div",{display:"flex",flexDirection:"row"});const W=e=>{var{surfaceStyle:t,children:r,padding:o,rootOverride:n}=e,i=String((0,D.isNumber)(o)?o:8);return(0,x.tZ)(c.Z,{children:(0,x.tZ)(R,{className:t,children:(0,x.tZ)(N.Z,{overrides:{Root:{style:E({width:"100%"},n||{})},Contents:{style:{marginTop:"".concat(i,"px !important"),marginRight:"".concat(i,"px !important"),marginBottom:"".concat(i,"px !important"),marginLeft:"".concat(i,"px !important")}},Body:{style:{marginBottom:"0px !important"}}},children:r})})})};var F=r(181),H=(0,l.zo)(d.T3,(e=>{var{$theme:t}=e;return{color:t.colors.colorSecondary}})),A=(0,l.zo)(d.T3,{fontWeight:"600 !important"});const L=e=>{var{data:t,valueFieldMaxWidth:r}=e,[o]=(0,l.hQ)(),n=Object.entries(t),i=(0,D.isNumber)(r)?"".concat(r,"px"):"auto";return(0,x.BX)(F.uT,{className:o({display:"flex",flexDirection:"row",justifyContent:"center",gap:"5px",marginBottom:"0px !important"}),children:[(0,x.tZ)(y,{className:o({alignItems:"flex-end",margin:"0px"}),children:n.map((e=>{var[t,r]=e;return(0,x.tZ)(H,{children:"".concat(t,":")},t)}))}),(0,x.tZ)(y,{className:o({width:i,margin:"0px",overflow:"hidden"}),children:n.map((e=>{var[t,r]=e;return(0,x.tZ)(A,{children:r},t)}))})]})};const U=e=>{var{data:t,surfaceStyle:r,valueFieldMaxWidth:o}=e;return(0,x.tZ)(W,{surfaceStyle:r,children:(0,x.tZ)(L,{data:t,valueFieldMaxWidth:o})})};const X=()=>{var[e]=(0,l.hQ)(),t=(0,p.F)(),r=(0,n.v)(w.Hy),o=(0,n.v)(w.Yb);return r?(0,x.tZ)(U,{data:{lat:(0,C.WU)(o.latitude),lon:(0,C.WU)(o.longitude),zoom:(0,C.WU)(o.zoom)},surfaceStyle:e({position:"fixed",right:"10px",[t.mediaQuery.small]:{top:"58px"},[t.mediaQuery.medium]:{top:"74px"}}),valueFieldMaxWidth:68}):null};var _=r(25),M=r(183),Y=r(184),V=r(137),q=r(141),{act:G}=(0,V.B)();const $=e=>{var{extraSources:t}=e,[r]=(0,l.hQ)(),o=(0,p.F)(),i=(0,n.v)(w.Hy),a=(0,n.v)(w.um);return i?(0,x.tZ)(W,{surfaceStyle:r({position:"fixed",right:"10px",bottom:"10px",justifyContent:"center"}),padding:6,children:(0,x.tZ)(M.Z,{autocomplete:!1,value:a.label,onChange:(e,t)=>{t&&(0,_.unstable_batchedUpdates)((()=>{G.map.SET_TILESOURCE(t),G.layout.SET_THEME(t.themeVariant)}))},size:Y.NO.compact,options:t?q.Lf.concat(t):q.Lf,mapOptionToString:e=>e.label,overrides:{Root:{style:{width:"110px"}},ListBox:{style:{maxHeight:"460px"}},Input:{props:{overrides:{Root:{style:{borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none"}},Input:{style:{fontWeight:600,userSelect:"none",cursor:"pointer",paddingTop:"0px",paddingBottom:"0px",backgroundColor:o.colors.backgroundPrimary}}}}}},onFocus:e=>e.target.blur()})}):null};const J=()=>(0,x.BX)(x.HY,{children:[(0,x.tZ)(X,{}),(0,x.tZ)($,{})]});var K=r(19),{tnk:ee}=(0,V.B)();const te=()=>{var[e]=(0,l.hQ)(),t=(0,n.v)(w.Yb);return(0,O.useEffect)((()=>{setTimeout((()=>{ee.router.replaceSPARoute(""),ee.router.replaceSPAHash((0,C.wQ)(t))}),2*K.timeUnit.second)}),[t]),(0,x.tZ)(u,{className:e({backgroundColor:"#000000AA",zIndex:100}),children:(0,x.tZ)(N.Z,{children:(0,x.tZ)(F.uT,{className:e({userSelect:"none"}),children:(0,x.tZ)(d.t5,{children:"Wrong Path"})})})})};var re=()=>{var[e]=(0,a.I)((0,n.v)(i.y));return(0,x.BX)(x.HY,{children:[(0,x.tZ)(k,{}),(0,o.choose)(e,{"":()=>(0,x.tZ)(J,{})},(()=>(0,x.tZ)(te,{}))),(0,x.tZ)(Z,{})]})}},93:(e,t,r)=>{r.d(t,{F:()=>l});var o=r(38),n=r(169),i=e=>e.layout.theme,a=r(49),l=()=>{var e=(0,n.v)(i),t=a.b3[e];return(0,o.useEffect)((()=>{var e,r=null===(e=document.querySelector("html"))||void 0===e?void 0:e.style;r&&(r.backgroundColor=t.colors.backgroundPrimary,r.color=t.colors.foregroundAlt)}),[t]),t}}}]);