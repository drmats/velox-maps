(this.webpackChunkvelox_maps=this.webpackChunkvelox_maps||[]).push([[10],{36:(e,r,t)=>{"use strict";var n=t(37);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,a,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},85:(e,r,t)=>{e.exports=t(36)()},37:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},86:(e,r,t)=>{"use strict";t.d(r,{F:()=>i});var n=t(39),o=t(169),a=e=>e.layout.theme,c=t(42),i=()=>{var e=(0,o.v)(a),r=c.b3[e];return(0,n.useEffect)((()=>{var e,t=null===(e=document.querySelector("html"))||void 0===e?void 0:e.style;t&&(t.backgroundColor=r.colors.backgroundPrimary,t.color=r.colors.foregroundAlt)}),[r]),r}},43:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>S});var n=t(24),o=t(39),a=t(166),c=t(164),i=t(165);const s=function(e){var r=e.store,t=e.context,s=e.children,u=(0,o.useMemo)((function(){var e=(0,c.X)(r);return e.onStateChange=e.notifyNestedSubs,{store:r,subscription:e}}),[r]),l=(0,o.useMemo)((function(){return r.getState()}),[r]);(0,i.L)((function(){var e=u.subscription;return e.trySubscribe(),l!==r.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[u,l]);var p=t||a.E;return n.createElement(p.Provider,{value:u},s)};var u=t(167),l=t(85),p=t.n(l),d=t(176),v=function(e){var r=e.children,t=e.prefix,n=void 0===t?"":t;return o.createElement(d.qz.Provider,{value:(0,d._P)(n)},r)},h=t(170),f=t(172);const m=function(e){var r=e.children,t=e.overrides,n=e.theme,a=e.zIndex;return o.createElement(h.ZP,{zIndex:a,overrides:t},o.createElement(v,{prefix:"bui"},o.createElement(f.Z,{theme:n},r)))};var y=t(86),b=t(163);const g=e=>{var{children:r}=e,t=(0,y.F)();return(0,b.tZ)(m,{theme:t,children:r})};var E={element:p().node.isRequired};function S(e,r){var t=t=>{var{element:n}=t;return(0,b.tZ)(s,{store:e,children:(0,b.tZ)(u.zt,{value:r,children:(0,b.tZ)(g,{children:n})})})};return t.propTypes=E,t}}}]);