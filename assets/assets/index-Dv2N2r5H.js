(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function oE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hx={exports:{}},$c={},px={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),lE=Symbol.for("react.portal"),cE=Symbol.for("react.fragment"),uE=Symbol.for("react.strict_mode"),dE=Symbol.for("react.profiler"),fE=Symbol.for("react.provider"),hE=Symbol.for("react.context"),pE=Symbol.for("react.forward_ref"),mE=Symbol.for("react.suspense"),gE=Symbol.for("react.memo"),vE=Symbol.for("react.lazy"),Bm=Symbol.iterator;function xE(t){return t===null||typeof t!="object"?null:(t=Bm&&t[Bm]||t["@@iterator"],typeof t=="function"?t:null)}var mx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gx=Object.assign,vx={};function ma(t,e,n){this.props=t,this.context=e,this.refs=vx,this.updater=n||mx}ma.prototype.isReactComponent={};ma.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ma.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xx(){}xx.prototype=ma.prototype;function Fh(t,e,n){this.props=t,this.context=e,this.refs=vx,this.updater=n||mx}var Oh=Fh.prototype=new xx;Oh.constructor=Fh;gx(Oh,ma.prototype);Oh.isPureReactComponent=!0;var zm=Array.isArray,_x=Object.prototype.hasOwnProperty,kh={current:null},yx={key:!0,ref:!0,__self:!0,__source:!0};function Sx(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)_x.call(e,i)&&!yx.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Uo,type:t,key:s,ref:a,props:r,_owner:kh.current}}function _E(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function yE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vm=/\/+/g;function Su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yE(""+t.key):e.toString(36)}function Vl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Uo:case lE:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Su(a,0):i,zm(r)?(n="",t!=null&&(n=t.replace(Vm,"$&/")+"/"),Vl(r,e,n,"",function(c){return c})):r!=null&&(Bh(r)&&(r=_E(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Vm,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",zm(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Su(s,o);a+=Vl(s,e,n,l,r)}else if(l=xE(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Su(s,o++),a+=Vl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Zo(t,e,n){if(t==null)return t;var i=[],r=0;return Vl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function SE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},Hl={transition:null},ME={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:kh};function Mx(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Zo,forEach:function(t,e,n){Zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zo(t,function(){e++}),e},toArray:function(t){return Zo(t,function(e){return e})||[]},only:function(t){if(!Bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=ma;je.Fragment=cE;je.Profiler=dE;je.PureComponent=Fh;je.StrictMode=uE;je.Suspense=mE;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ME;je.act=Mx;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=gx({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)_x.call(e,l)&&!yx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Uo,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:hE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fE,_context:t},t.Consumer=t};je.createElement=Sx;je.createFactory=function(t){var e=Sx.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:pE,render:t}};je.isValidElement=Bh;je.lazy=function(t){return{$$typeof:vE,_payload:{_status:-1,_result:t},_init:SE}};je.memo=function(t,e){return{$$typeof:gE,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};je.unstable_act=Mx;je.useCallback=function(t,e){return vn.current.useCallback(t,e)};je.useContext=function(t){return vn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};je.useEffect=function(t,e){return vn.current.useEffect(t,e)};je.useId=function(){return vn.current.useId()};je.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return vn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};je.useRef=function(t){return vn.current.useRef(t)};je.useState=function(t){return vn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return vn.current.useTransition()};je.version="18.3.1";px.exports=je;var q=px.exports;const EE=oE(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wE=q,TE=Symbol.for("react.element"),bE=Symbol.for("react.fragment"),AE=Object.prototype.hasOwnProperty,RE=wE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CE={key:!0,ref:!0,__self:!0,__source:!0};function Ex(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)AE.call(e,i)&&!CE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:TE,type:t,key:s,ref:a,props:r,_owner:RE.current}}$c.Fragment=bE;$c.jsx=Ex;$c.jsxs=Ex;hx.exports=$c;var R=hx.exports,Fd={},wx={exports:{}},Bn={},Tx={exports:{}},bx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,B){var C=V.length;V.push(B);e:for(;0<C;){var A=C-1>>>1,Q=V[A];if(0<r(Q,B))V[A]=B,V[C]=Q,C=A;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var B=V[0],C=V.pop();if(C!==B){V[0]=C;e:for(var A=0,Q=V.length,le=Q>>>1;A<le;){var G=2*(A+1)-1,ne=V[G],ae=G+1,oe=V[ae];if(0>r(ne,C))ae<Q&&0>r(oe,ne)?(V[A]=oe,V[ae]=C,A=ae):(V[A]=ne,V[G]=C,A=G);else if(ae<Q&&0>r(oe,C))V[A]=oe,V[ae]=C,A=ae;else break e}}return B}function r(V,B){var C=V.sortIndex-B.sortIndex;return C!==0?C:V.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,d=3,p=!1,v=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(V){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=V)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function y(V){if(S=!1,_(V),!v)if(n(l)!==null)v=!0,Z(E);else{var B=n(c);B!==null&&k(y,B.startTime-V)}}function E(V,B){v=!1,S&&(S=!1,f(M),M=-1),p=!0;var C=d;try{for(_(B),h=n(l);h!==null&&(!(h.expirationTime>B)||V&&!N());){var A=h.callback;if(typeof A=="function"){h.callback=null,d=h.priorityLevel;var Q=A(h.expirationTime<=B);B=t.unstable_now(),typeof Q=="function"?h.callback=Q:h===n(l)&&i(l),_(B)}else i(l);h=n(l)}if(h!==null)var le=!0;else{var G=n(c);G!==null&&k(y,G.startTime-B),le=!1}return le}finally{h=null,d=C,p=!1}}var b=!1,x=null,M=-1,F=5,L=-1;function N(){return!(t.unstable_now()-L<F)}function U(){if(x!==null){var V=t.unstable_now();L=V;var B=!0;try{B=x(!0,V)}finally{B?H():(b=!1,x=null)}}else b=!1}var H;if(typeof m=="function")H=function(){m(U)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,W=D.port2;D.port1.onmessage=U,H=function(){W.postMessage(null)}}else H=function(){g(U,0)};function Z(V){x=V,b||(b=!0,H())}function k(V,B){M=g(function(){V(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Z(E))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var C=d;d=B;try{return V()}finally{d=C}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,B){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var C=d;d=V;try{return B()}finally{d=C}},t.unstable_scheduleCallback=function(V,B,C){var A=t.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?A+C:A):C=A,V){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=C+Q,V={id:u++,callback:B,priorityLevel:V,startTime:C,expirationTime:Q,sortIndex:-1},C>A?(V.sortIndex=C,e(c,V),n(l)===null&&V===n(c)&&(S?(f(M),M=-1):S=!0,k(y,C-A))):(V.sortIndex=Q,e(l,V),v||p||(v=!0,Z(E))),V},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(V){var B=d;return function(){var C=d;d=B;try{return V.apply(this,arguments)}finally{d=C}}}})(bx);Tx.exports=bx;var PE=Tx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LE=q,On=PE;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ax=new Set,oo={};function ls(t,e){ta(t,e),ta(t+"Capture",e)}function ta(t,e){for(oo[t]=e,t=0;t<e.length;t++)Ax.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Od=Object.prototype.hasOwnProperty,DE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hm={},Gm={};function NE(t){return Od.call(Gm,t)?!0:Od.call(Hm,t)?!1:DE.test(t)?Gm[t]=!0:(Hm[t]=!0,!1)}function IE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function UE(t,e,n,i){if(e===null||typeof e>"u"||IE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var zh=/[\-:]([a-z])/g;function Vh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zh,Vh);Zt[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zh,Vh);Zt[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zh,Vh);Zt[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hh(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(UE(e,n,r,i)&&(n=null),i||r===null?NE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=LE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),Gh=Symbol.for("react.strict_mode"),kd=Symbol.for("react.profiler"),Rx=Symbol.for("react.provider"),Cx=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),zd=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Px=Symbol.for("react.offscreen"),Wm=Symbol.iterator;function Ea(t){return t===null||typeof t!="object"?null:(t=Wm&&t[Wm]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,Mu;function Oa(t){if(Mu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mu=e&&e[1]||""}return`
`+Mu+t}var Eu=!1;function wu(t,e){if(!t||Eu)return"";Eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oa(t):""}function FE(t){switch(t.tag){case 5:return Oa(t.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return t=wu(t.type,!1),t;case 11:return t=wu(t.type.render,!1),t;case 1:return t=wu(t.type,!0),t;default:return""}}function Vd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Ps:return"Portal";case kd:return"Profiler";case Gh:return"StrictMode";case Bd:return"Suspense";case zd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cx:return(t.displayName||"Context")+".Consumer";case Rx:return(t._context.displayName||"Context")+".Provider";case Wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xh:return e=t.displayName||null,e!==null?e:Vd(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Vd(t(e))}catch{}}return null}function OE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vd(e);case 8:return e===Gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kE(t){var e=Lx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jo(t){t._valueTracker||(t._valueTracker=kE(t))}function Dx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Lx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hd(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Nx(t,e){e=e.checked,e!=null&&Hh(t,"checked",e,!1)}function Gd(t,e){Nx(t,e);var n=Tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wd(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wd(t,e,n){(e!=="number"||cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ka=Array.isArray;function $s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(ka(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function Ix(t,e){var n=Tr(e.value),i=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ux(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ux(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var el,Fx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=el.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},BE=["Webkit","ms","Moz","O"];Object.keys($a).forEach(function(t){BE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$a[e]=$a[t]})});function Ox(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$a.hasOwnProperty(t)&&$a[t]?(""+e).trim():e+"px"}function kx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ox(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var zE=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $d(t,e){if(e){if(zE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function qd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kd=null,qs=null,Ys=null;function Ym(t){if(t=ko(t)){if(typeof Kd!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=Qc(e),Kd(t.stateNode,t.type,e))}}function Bx(t){qs?Ys?Ys.push(t):Ys=[t]:qs=t}function zx(){if(qs){var t=qs,e=Ys;if(Ys=qs=null,Ym(t),e)for(t=0;t<e.length;t++)Ym(e[t])}}function Vx(t,e){return t(e)}function Hx(){}var Tu=!1;function Gx(t,e,n){if(Tu)return t(e,n);Tu=!0;try{return Vx(t,e,n)}finally{Tu=!1,(qs!==null||Ys!==null)&&(Hx(),zx())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var i=Qc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Zd=!1;if(ji)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){Zd=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{Zd=!1}function VE(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var qa=!1,uc=null,dc=!1,Qd=null,HE={onError:function(t){qa=!0,uc=t}};function GE(t,e,n,i,r,s,a,o,l){qa=!1,uc=null,VE.apply(HE,arguments)}function WE(t,e,n,i,r,s,a,o,l){if(GE.apply(this,arguments),qa){if(qa){var c=uc;qa=!1,uc=null}else throw Error(ue(198));dc||(dc=!0,Qd=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Km(t){if(cs(t)!==t)throw Error(ue(188))}function XE(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Km(r),t;if(s===i)return Km(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function Xx(t){return t=XE(t),t!==null?jx(t):null}function jx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jx(t);if(e!==null)return e;t=t.sibling}return null}var $x=On.unstable_scheduleCallback,Zm=On.unstable_cancelCallback,jE=On.unstable_shouldYield,$E=On.unstable_requestPaint,Lt=On.unstable_now,qE=On.unstable_getCurrentPriorityLevel,$h=On.unstable_ImmediatePriority,qx=On.unstable_UserBlockingPriority,fc=On.unstable_NormalPriority,YE=On.unstable_LowPriority,Yx=On.unstable_IdlePriority,qc=null,yi=null;function KE(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(qc,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:JE,ZE=Math.log,QE=Math.LN2;function JE(t){return t>>>=0,t===0?32:31-(ZE(t)/QE|0)|0}var tl=64,nl=4194304;function Ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ba(o):(s&=a,s!==0&&(i=Ba(s)))}else a=n&~r,a!==0?i=Ba(a):s!==0&&(i=Ba(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function e1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ci(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=e1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Jd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kx(){var t=tl;return tl<<=1,!(tl&4194240)&&(tl=64),t}function bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function n1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function Zx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qx,Yh,Jx,e_,t_,ef=!1,il=[],vr=null,xr=null,_r=null,uo=new Map,fo=new Map,dr=[],i1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qm(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Ta(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ko(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function r1(t,e,n,i,r){switch(e){case"focusin":return vr=Ta(vr,t,e,n,i,r),!0;case"dragenter":return xr=Ta(xr,t,e,n,i,r),!0;case"mouseover":return _r=Ta(_r,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return uo.set(s,Ta(uo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fo.set(s,Ta(fo.get(s)||null,t,e,n,i,r)),!0}return!1}function n_(t){var e=jr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=Wx(n),e!==null){t.blockedOn=e,t_(t.priority,function(){Jx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yd=i,n.target.dispatchEvent(i),Yd=null}else return e=ko(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function Jm(t,e,n){Gl(t)&&n.delete(e)}function s1(){ef=!1,vr!==null&&Gl(vr)&&(vr=null),xr!==null&&Gl(xr)&&(xr=null),_r!==null&&Gl(_r)&&(_r=null),uo.forEach(Jm),fo.forEach(Jm)}function ba(t,e){t.blockedOn===e&&(t.blockedOn=null,ef||(ef=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,s1)))}function ho(t){function e(r){return ba(r,t)}if(0<il.length){ba(il[0],t);for(var n=1;n<il.length;n++){var i=il[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&ba(vr,t),xr!==null&&ba(xr,t),_r!==null&&ba(_r,t),uo.forEach(e),fo.forEach(e),n=0;n<dr.length;n++)i=dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)n_(n),n.blockedOn===null&&dr.shift()}var Ks=Qi.ReactCurrentBatchConfig,pc=!0;function a1(t,e,n,i){var r=ut,s=Ks.transition;Ks.transition=null;try{ut=1,Kh(t,e,n,i)}finally{ut=r,Ks.transition=s}}function o1(t,e,n,i){var r=ut,s=Ks.transition;Ks.transition=null;try{ut=4,Kh(t,e,n,i)}finally{ut=r,Ks.transition=s}}function Kh(t,e,n,i){if(pc){var r=tf(t,e,n,i);if(r===null)Fu(t,e,i,mc,n),Qm(t,i);else if(r1(r,t,e,n,i))i.stopPropagation();else if(Qm(t,i),e&4&&-1<i1.indexOf(t)){for(;r!==null;){var s=ko(r);if(s!==null&&Qx(s),s=tf(t,e,n,i),s===null&&Fu(t,e,i,mc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fu(t,e,i,null,n)}}var mc=null;function tf(t,e,n,i){if(mc=null,t=jh(i),t=jr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mc=t,null}function i_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qE()){case $h:return 1;case qx:return 4;case fc:case YE:return 16;case Yx:return 536870912;default:return 16}default:return 16}}var pr=null,Zh=null,Wl=null;function r_(){if(Wl)return Wl;var t,e=Zh,n=e.length,i,r="value"in pr?pr.value:pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Wl=r.slice(t,1<i?1-i:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function eg(){return!1}function zn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:eg,this.isPropagationStopped=eg,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qh=zn(ga),Oo=bt({},ga,{view:0,detail:0}),l1=zn(Oo),Au,Ru,Aa,Yc=bt({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(Au=t.screenX-Aa.screenX,Ru=t.screenY-Aa.screenY):Ru=Au=0,Aa=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),tg=zn(Yc),c1=bt({},Yc,{dataTransfer:0}),u1=zn(c1),d1=bt({},Oo,{relatedTarget:0}),Cu=zn(d1),f1=bt({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),h1=zn(f1),p1=bt({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),m1=zn(p1),g1=bt({},ga,{data:0}),ng=zn(g1),v1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_1[t])?!!e[t]:!1}function Jh(){return y1}var S1=bt({},Oo,{key:function(t){if(t.key){var e=v1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jh,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),M1=zn(S1),E1=bt({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ig=zn(E1),w1=bt({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jh}),T1=zn(w1),b1=bt({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),A1=zn(b1),R1=bt({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),C1=zn(R1),P1=[9,13,27,32],ep=ji&&"CompositionEvent"in window,Ya=null;ji&&"documentMode"in document&&(Ya=document.documentMode);var L1=ji&&"TextEvent"in window&&!Ya,s_=ji&&(!ep||Ya&&8<Ya&&11>=Ya),rg=" ",sg=!1;function a_(t,e){switch(t){case"keyup":return P1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function D1(t,e){switch(t){case"compositionend":return o_(e);case"keypress":return e.which!==32?null:(sg=!0,rg);case"textInput":return t=e.data,t===rg&&sg?null:t;default:return null}}function N1(t,e){if(Ds)return t==="compositionend"||!ep&&a_(t,e)?(t=r_(),Wl=Zh=pr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return s_&&e.locale!=="ko"?null:e.data;default:return null}}var I1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!I1[t.type]:e==="textarea"}function l_(t,e,n,i){Bx(i),e=gc(e,"onChange"),0<e.length&&(n=new Qh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ka=null,po=null;function U1(t){__(t,0)}function Kc(t){var e=Us(t);if(Dx(e))return t}function F1(t,e){if(t==="change")return e}var c_=!1;if(ji){var Pu;if(ji){var Lu="oninput"in document;if(!Lu){var og=document.createElement("div");og.setAttribute("oninput","return;"),Lu=typeof og.oninput=="function"}Pu=Lu}else Pu=!1;c_=Pu&&(!document.documentMode||9<document.documentMode)}function lg(){Ka&&(Ka.detachEvent("onpropertychange",u_),po=Ka=null)}function u_(t){if(t.propertyName==="value"&&Kc(po)){var e=[];l_(e,po,t,jh(t)),Gx(U1,e)}}function O1(t,e,n){t==="focusin"?(lg(),Ka=e,po=n,Ka.attachEvent("onpropertychange",u_)):t==="focusout"&&lg()}function k1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(po)}function B1(t,e){if(t==="click")return Kc(e)}function z1(t,e){if(t==="input"||t==="change")return Kc(e)}function V1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:V1;function mo(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Od.call(e,r)||!di(t[r],e[r]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ug(t,e){var n=cg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cg(n)}}function d_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?d_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f_(){for(var t=window,e=cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cc(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function H1(t){var e=f_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&d_(n.ownerDocument.documentElement,n)){if(i!==null&&tp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ug(n,s);var a=ug(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var G1=ji&&"documentMode"in document&&11>=document.documentMode,Ns=null,nf=null,Za=null,rf=!1;function dg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rf||Ns==null||Ns!==cc(i)||(i=Ns,"selectionStart"in i&&tp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Za&&mo(Za,i)||(Za=i,i=gc(nf,"onSelect"),0<i.length&&(e=new Qh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ns)))}function sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Is={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},Du={},h_={};ji&&(h_=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Zc(t){if(Du[t])return Du[t];if(!Is[t])return t;var e=Is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in h_)return Du[t]=e[n];return t}var p_=Zc("animationend"),m_=Zc("animationiteration"),g_=Zc("animationstart"),v_=Zc("transitionend"),x_=new Map,fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){x_.set(t,e),ls(e,[t])}for(var Nu=0;Nu<fg.length;Nu++){var Iu=fg[Nu],W1=Iu.toLowerCase(),X1=Iu[0].toUpperCase()+Iu.slice(1);Pr(W1,"on"+X1)}Pr(p_,"onAnimationEnd");Pr(m_,"onAnimationIteration");Pr(g_,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(v_,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j1=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function hg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,WE(i,e,void 0,t),t.currentTarget=null}function __(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;hg(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;hg(r,o,c),s=l}}}if(dc)throw t=Qd,dc=!1,Qd=null,t}function gt(t,e){var n=e[cf];n===void 0&&(n=e[cf]=new Set);var i=t+"__bubble";n.has(i)||(y_(e,t,2,!1),n.add(i))}function Uu(t,e,n){var i=0;e&&(i|=4),y_(n,t,i,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[al]){t[al]=!0,Ax.forEach(function(n){n!=="selectionchange"&&(j1.has(n)||Uu(n,!1,t),Uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,Uu("selectionchange",!1,e))}}function y_(t,e,n,i){switch(i_(e)){case 1:var r=a1;break;case 4:r=o1;break;default:r=Kh}n=r.bind(null,e,n,t),r=void 0,!Zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Fu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Gx(function(){var c=s,u=jh(n),h=[];e:{var d=x_.get(t);if(d!==void 0){var p=Qh,v=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":p=M1;break;case"focusin":v="focus",p=Cu;break;case"focusout":v="blur",p=Cu;break;case"beforeblur":case"afterblur":p=Cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=u1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=T1;break;case p_:case m_:case g_:p=h1;break;case v_:p=A1;break;case"scroll":p=l1;break;case"wheel":p=C1;break;case"copy":case"cut":case"paste":p=m1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ig}var S=(e&4)!==0,g=!S&&t==="scroll",f=S?d!==null?d+"Capture":null:d;S=[];for(var m=c,_;m!==null;){_=m;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=co(m,f),y!=null&&S.push(vo(m,y,_)))),g)break;m=m.return}0<S.length&&(d=new p(d,v,null,n,u),h.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Yd&&(v=n.relatedTarget||n.fromElement)&&(jr(v)||v[$i]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?jr(v):null,v!==null&&(g=cs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(S=tg,y="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=ig,y="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?d:Us(p),_=v==null?d:Us(v),d=new S(y,m+"leave",p,n,u),d.target=g,d.relatedTarget=_,y=null,jr(u)===c&&(S=new S(f,m+"enter",v,n,u),S.target=_,S.relatedTarget=g,y=S),g=y,p&&v)t:{for(S=p,f=v,m=0,_=S;_;_=ms(_))m++;for(_=0,y=f;y;y=ms(y))_++;for(;0<m-_;)S=ms(S),m--;for(;0<_-m;)f=ms(f),_--;for(;m--;){if(S===f||f!==null&&S===f.alternate)break t;S=ms(S),f=ms(f)}S=null}else S=null;p!==null&&pg(h,d,p,S,!1),v!==null&&g!==null&&pg(h,g,v,S,!0)}}e:{if(d=c?Us(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var E=F1;else if(ag(d))if(c_)E=z1;else{E=k1;var b=O1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=B1);if(E&&(E=E(t,c))){l_(h,E,n,u);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Wd(d,"number",d.value)}switch(b=c?Us(c):window,t){case"focusin":(ag(b)||b.contentEditable==="true")&&(Ns=b,nf=c,Za=null);break;case"focusout":Za=nf=Ns=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,dg(h,n,u);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":dg(h,n,u)}var x;if(ep)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Ds?a_(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(s_&&n.locale!=="ko"&&(Ds||M!=="onCompositionStart"?M==="onCompositionEnd"&&Ds&&(x=r_()):(pr=u,Zh="value"in pr?pr.value:pr.textContent,Ds=!0)),b=gc(c,M),0<b.length&&(M=new ng(M,t,null,n,u),h.push({event:M,listeners:b}),x?M.data=x:(x=o_(n),x!==null&&(M.data=x)))),(x=L1?D1(t,n):N1(t,n))&&(c=gc(c,"onBeforeInput"),0<c.length&&(u=new ng("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=x))}__(h,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=co(t,n),s!=null&&i.unshift(vo(t,s,r)),s=co(t,e),s!=null&&i.push(vo(t,s,r))),t=t.return}return i}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pg(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=co(n,s),l!=null&&a.unshift(vo(n,l,o))):r||(l=co(n,s),l!=null&&a.push(vo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var $1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function mg(t){return(typeof t=="string"?t:""+t).replace($1,`
`).replace(q1,"")}function ol(t,e,n){if(e=mg(e),mg(t)!==e&&n)throw Error(ue(425))}function vc(){}var sf=null,af=null;function of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lf=typeof setTimeout=="function"?setTimeout:void 0,Y1=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,K1=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(t){return gg.resolve(null).then(t).catch(Z1)}:lf;function Z1(t){setTimeout(function(){throw t})}function Ou(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ho(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var va=Math.random().toString(36).slice(2),vi="__reactFiber$"+va,xo="__reactProps$"+va,$i="__reactContainer$"+va,cf="__reactEvents$"+va,Q1="__reactListeners$"+va,J1="__reactHandles$"+va;function jr(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vg(t);t!==null;){if(n=t[vi])return n;t=vg(t)}return e}t=n,n=t.parentNode}return null}function ko(t){return t=t[vi]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function Qc(t){return t[xo]||null}var uf=[],Fs=-1;function Lr(t){return{current:t}}function vt(t){0>Fs||(t.current=uf[Fs],uf[Fs]=null,Fs--)}function mt(t,e){Fs++,uf[Fs]=t.current,t.current=e}var br={},dn=Lr(br),bn=Lr(!1),es=br;function na(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function xc(){vt(bn),vt(dn)}function xg(t,e,n){if(dn.current!==br)throw Error(ue(168));mt(dn,e),mt(bn,n)}function S_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,OE(t)||"Unknown",r));return bt({},n,i)}function _c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,es=dn.current,mt(dn,t),mt(bn,bn.current),!0}function _g(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=S_(t,e,es),i.__reactInternalMemoizedMergedChildContext=t,vt(bn),vt(dn),mt(dn,t)):vt(bn),mt(bn,n)}var Ii=null,Jc=!1,ku=!1;function M_(t){Ii===null?Ii=[t]:Ii.push(t)}function ew(t){Jc=!0,M_(t)}function Dr(){if(!ku&&Ii!==null){ku=!0;var t=0,e=ut;try{var n=Ii;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,Jc=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),$x($h,Dr),r}finally{ut=e,ku=!1}}return null}var Os=[],ks=0,yc=null,Sc=0,Xn=[],jn=0,ts=null,Fi=1,Oi="";function Hr(t,e){Os[ks++]=Sc,Os[ks++]=yc,yc=t,Sc=e}function E_(t,e,n){Xn[jn++]=Fi,Xn[jn++]=Oi,Xn[jn++]=ts,ts=t;var i=Fi;t=Oi;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Fi=1<<32-ci(e)+r|n<<r|i,Oi=s+t}else Fi=1<<s|n<<r|i,Oi=t}function np(t){t.return!==null&&(Hr(t,1),E_(t,1,0))}function ip(t){for(;t===yc;)yc=Os[--ks],Os[ks]=null,Sc=Os[--ks],Os[ks]=null;for(;t===ts;)ts=Xn[--jn],Xn[jn]=null,Oi=Xn[--jn],Xn[jn]=null,Fi=Xn[--jn],Xn[jn]=null}var Un=null,In=null,_t=!1,si=null;function w_(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,In=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ts!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,In=null,!0):!1;default:return!1}}function df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ff(t){if(_t){var e=In;if(e){var n=e;if(!yg(t,e)){if(df(t))throw Error(ue(418));e=yr(n.nextSibling);var i=Un;e&&yg(t,e)?w_(i,n):(t.flags=t.flags&-4097|2,_t=!1,Un=t)}}else{if(df(t))throw Error(ue(418));t.flags=t.flags&-4097|2,_t=!1,Un=t}}}function Sg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function ll(t){if(t!==Un)return!1;if(!_t)return Sg(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!of(t.type,t.memoizedProps)),e&&(e=In)){if(df(t))throw T_(),Error(ue(418));for(;e;)w_(t,e),e=yr(e.nextSibling)}if(Sg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Un?yr(t.stateNode.nextSibling):null;return!0}function T_(){for(var t=In;t;)t=yr(t.nextSibling)}function ia(){In=Un=null,_t=!1}function rp(t){si===null?si=[t]:si.push(t)}var tw=Qi.ReactCurrentBatchConfig;function Ra(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function cl(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mg(t){var e=t._init;return e(t._payload)}function b_(t){function e(f,m){if(t){var _=f.deletions;_===null?(f.deletions=[m],f.flags|=16):_.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=wr(f,m),f.index=0,f.sibling=null,f}function s(f,m,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<m?(f.flags|=2,m):_):(f.flags|=2,m)):(f.flags|=1048576,m)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,m,_,y){return m===null||m.tag!==6?(m=Xu(_,f.mode,y),m.return=f,m):(m=r(m,_),m.return=f,m)}function l(f,m,_,y){var E=_.type;return E===Ls?u(f,m,_.props.children,y,_.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&Mg(E)===m.type)?(y=r(m,_.props),y.ref=Ra(f,m,_),y.return=f,y):(y=Ql(_.type,_.key,_.props,null,f.mode,y),y.ref=Ra(f,m,_),y.return=f,y)}function c(f,m,_,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=ju(_,f.mode,y),m.return=f,m):(m=r(m,_.children||[]),m.return=f,m)}function u(f,m,_,y,E){return m===null||m.tag!==7?(m=Zr(_,f.mode,y,E),m.return=f,m):(m=r(m,_),m.return=f,m)}function h(f,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Xu(""+m,f.mode,_),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qo:return _=Ql(m.type,m.key,m.props,null,f.mode,_),_.ref=Ra(f,null,m),_.return=f,_;case Ps:return m=ju(m,f.mode,_),m.return=f,m;case lr:var y=m._init;return h(f,y(m._payload),_)}if(ka(m)||Ea(m))return m=Zr(m,f.mode,_,null),m.return=f,m;cl(f,m)}return null}function d(f,m,_,y){var E=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return E!==null?null:o(f,m,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qo:return _.key===E?l(f,m,_,y):null;case Ps:return _.key===E?c(f,m,_,y):null;case lr:return E=_._init,d(f,m,E(_._payload),y)}if(ka(_)||Ea(_))return E!==null?null:u(f,m,_,y,null);cl(f,_)}return null}function p(f,m,_,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,o(m,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qo:return f=f.get(y.key===null?_:y.key)||null,l(m,f,y,E);case Ps:return f=f.get(y.key===null?_:y.key)||null,c(m,f,y,E);case lr:var b=y._init;return p(f,m,_,b(y._payload),E)}if(ka(y)||Ea(y))return f=f.get(_)||null,u(m,f,y,E,null);cl(m,y)}return null}function v(f,m,_,y){for(var E=null,b=null,x=m,M=m=0,F=null;x!==null&&M<_.length;M++){x.index>M?(F=x,x=null):F=x.sibling;var L=d(f,x,_[M],y);if(L===null){x===null&&(x=F);break}t&&x&&L.alternate===null&&e(f,x),m=s(L,m,M),b===null?E=L:b.sibling=L,b=L,x=F}if(M===_.length)return n(f,x),_t&&Hr(f,M),E;if(x===null){for(;M<_.length;M++)x=h(f,_[M],y),x!==null&&(m=s(x,m,M),b===null?E=x:b.sibling=x,b=x);return _t&&Hr(f,M),E}for(x=i(f,x);M<_.length;M++)F=p(x,f,M,_[M],y),F!==null&&(t&&F.alternate!==null&&x.delete(F.key===null?M:F.key),m=s(F,m,M),b===null?E=F:b.sibling=F,b=F);return t&&x.forEach(function(N){return e(f,N)}),_t&&Hr(f,M),E}function S(f,m,_,y){var E=Ea(_);if(typeof E!="function")throw Error(ue(150));if(_=E.call(_),_==null)throw Error(ue(151));for(var b=E=null,x=m,M=m=0,F=null,L=_.next();x!==null&&!L.done;M++,L=_.next()){x.index>M?(F=x,x=null):F=x.sibling;var N=d(f,x,L.value,y);if(N===null){x===null&&(x=F);break}t&&x&&N.alternate===null&&e(f,x),m=s(N,m,M),b===null?E=N:b.sibling=N,b=N,x=F}if(L.done)return n(f,x),_t&&Hr(f,M),E;if(x===null){for(;!L.done;M++,L=_.next())L=h(f,L.value,y),L!==null&&(m=s(L,m,M),b===null?E=L:b.sibling=L,b=L);return _t&&Hr(f,M),E}for(x=i(f,x);!L.done;M++,L=_.next())L=p(x,f,M,L.value,y),L!==null&&(t&&L.alternate!==null&&x.delete(L.key===null?M:L.key),m=s(L,m,M),b===null?E=L:b.sibling=L,b=L);return t&&x.forEach(function(U){return e(f,U)}),_t&&Hr(f,M),E}function g(f,m,_,y){if(typeof _=="object"&&_!==null&&_.type===Ls&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Qo:e:{for(var E=_.key,b=m;b!==null;){if(b.key===E){if(E=_.type,E===Ls){if(b.tag===7){n(f,b.sibling),m=r(b,_.props.children),m.return=f,f=m;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&Mg(E)===b.type){n(f,b.sibling),m=r(b,_.props),m.ref=Ra(f,b,_),m.return=f,f=m;break e}n(f,b);break}else e(f,b);b=b.sibling}_.type===Ls?(m=Zr(_.props.children,f.mode,y,_.key),m.return=f,f=m):(y=Ql(_.type,_.key,_.props,null,f.mode,y),y.ref=Ra(f,m,_),y.return=f,f=y)}return a(f);case Ps:e:{for(b=_.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(f,m.sibling),m=r(m,_.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=ju(_,f.mode,y),m.return=f,f=m}return a(f);case lr:return b=_._init,g(f,m,b(_._payload),y)}if(ka(_))return v(f,m,_,y);if(Ea(_))return S(f,m,_,y);cl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,_),m.return=f,f=m):(n(f,m),m=Xu(_,f.mode,y),m.return=f,f=m),a(f)):n(f,m)}return g}var ra=b_(!0),A_=b_(!1),Mc=Lr(null),Ec=null,Bs=null,sp=null;function ap(){sp=Bs=Ec=null}function op(t){var e=Mc.current;vt(Mc),t._currentValue=e}function hf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){Ec=t,sp=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(sp!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(Ec===null)throw Error(ue(308));Bs=t,Ec.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var $r=null;function lp(t){$r===null?$r=[t]:$r.push(t)}function R_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,lp(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,lp(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}function Eg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wc(t,e,n,i){var r=t.updateQueue;cr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,S=o;switch(d=e,p=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=bt({},h,d);break e;case 2:cr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);is|=a,t.lanes=a,t.memoizedState=h}}function wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Bo={},Si=Lr(Bo),_o=Lr(Bo),yo=Lr(Bo);function qr(t){if(t===Bo)throw Error(ue(174));return t}function up(t,e){switch(mt(yo,e),mt(_o,t),mt(Si,Bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jd(e,t)}vt(Si),mt(Si,e)}function sa(){vt(Si),vt(_o),vt(yo)}function P_(t){qr(yo.current);var e=qr(Si.current),n=jd(e,t.type);e!==n&&(mt(_o,t),mt(Si,n))}function dp(t){_o.current===t&&(vt(Si),vt(_o))}var St=Lr(0);function Tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bu=[];function fp(){for(var t=0;t<Bu.length;t++)Bu[t]._workInProgressVersionPrimary=null;Bu.length=0}var $l=Qi.ReactCurrentDispatcher,zu=Qi.ReactCurrentBatchConfig,ns=0,wt=null,Ut=null,Gt=null,bc=!1,Qa=!1,So=0,nw=0;function en(){throw Error(ue(321))}function hp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function pp(t,e,n,i,r,s){if(ns=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=t===null||t.memoizedState===null?aw:ow,t=n(i,r),Qa){s=0;do{if(Qa=!1,So=0,25<=s)throw Error(ue(301));s+=1,Gt=Ut=null,e.updateQueue=null,$l.current=lw,t=n(i,r)}while(Qa)}if($l.current=Ac,e=Ut!==null&&Ut.next!==null,ns=0,Gt=Ut=wt=null,bc=!1,e)throw Error(ue(300));return t}function mp(){var t=So!==0;return So=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?wt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Kn(){if(Ut===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Gt===null?wt.memoizedState:Gt.next;if(e!==null)Gt=e,Ut=t;else{if(t===null)throw Error(ue(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Gt===null?wt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Mo(t,e){return typeof e=="function"?e(t):e}function Vu(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((ns&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,wt.lanes|=u,is|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,di(i,e.memoizedState)||(wn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hu(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);di(s,e.memoizedState)||(wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function L_(){}function D_(t,e){var n=wt,i=Kn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,wn=!0),i=i.queue,gp(U_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Eo(9,I_.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(ue(349));ns&30||N_(n,e,r)}return r}function N_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function I_(t,e,n,i){e.value=n,e.getSnapshot=i,F_(e)&&O_(t)}function U_(t,e,n){return n(function(){F_(e)&&O_(t)})}function F_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function O_(t){var e=qi(t,1);e!==null&&ui(e,t,1,-1)}function Tg(t){var e=mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},e.queue=t,t=t.dispatch=sw.bind(null,wt,t),[e.memoizedState,t]}function Eo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function k_(){return Kn().memoizedState}function ql(t,e,n,i){var r=mi();wt.flags|=t,r.memoizedState=Eo(1|e,n,void 0,i===void 0?null:i)}function eu(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&hp(i,a.deps)){r.memoizedState=Eo(e,n,s,i);return}}wt.flags|=t,r.memoizedState=Eo(1|e,n,s,i)}function bg(t,e){return ql(8390656,8,t,e)}function gp(t,e){return eu(2048,8,t,e)}function B_(t,e){return eu(4,2,t,e)}function z_(t,e){return eu(4,4,t,e)}function V_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function H_(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,V_.bind(null,e,t),n)}function vp(){}function G_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function W_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function X_(t,e,n){return ns&21?(di(n,e)||(n=Kx(),wt.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=n)}function iw(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=zu.transition;zu.transition={};try{t(!1),e()}finally{ut=n,zu.transition=i}}function j_(){return Kn().memoizedState}function rw(t,e,n){var i=Er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$_(t))q_(e,n);else if(n=R_(t,e,n,i),n!==null){var r=gn();ui(n,t,i,r),Y_(n,e,i)}}function sw(t,e,n){var i=Er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($_(t))q_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,di(o,a)){var l=e.interleaved;l===null?(r.next=r,lp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=R_(t,e,r,i),n!==null&&(r=gn(),ui(n,t,i,r),Y_(n,e,i))}}function $_(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function q_(t,e){Qa=bc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Y_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}var Ac={readContext:Yn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},aw={readContext:Yn,useCallback:function(t,e){return mi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ql(4194308,4,V_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return ql(4,2,t,e)},useMemo:function(t,e){var n=mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=rw.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=mi();return t={current:t},e.memoizedState=t},useState:Tg,useDebugValue:vp,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=Tg(!1),e=t[0];return t=iw.bind(null,t[1]),mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=mi();if(_t){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),Wt===null)throw Error(ue(349));ns&30||N_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,bg(U_.bind(null,i,s,t),[t]),i.flags|=2048,Eo(9,I_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=mi(),e=Wt.identifierPrefix;if(_t){var n=Oi,i=Fi;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ow={readContext:Yn,useCallback:G_,useContext:Yn,useEffect:gp,useImperativeHandle:H_,useInsertionEffect:B_,useLayoutEffect:z_,useMemo:W_,useReducer:Vu,useRef:k_,useState:function(){return Vu(Mo)},useDebugValue:vp,useDeferredValue:function(t){var e=Kn();return X_(e,Ut.memoizedState,t)},useTransition:function(){var t=Vu(Mo)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:L_,useSyncExternalStore:D_,useId:j_,unstable_isNewReconciler:!1},lw={readContext:Yn,useCallback:G_,useContext:Yn,useEffect:gp,useImperativeHandle:H_,useInsertionEffect:B_,useLayoutEffect:z_,useMemo:W_,useReducer:Hu,useRef:k_,useState:function(){return Hu(Mo)},useDebugValue:vp,useDeferredValue:function(t){var e=Kn();return Ut===null?e.memoizedState=t:X_(e,Ut.memoizedState,t)},useTransition:function(){var t=Hu(Mo)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:L_,useSyncExternalStore:D_,useId:j_,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function pf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Er(t),s=zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(ui(e,t,r,i),jl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Er(t),s=zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(ui(e,t,r,i),jl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=Er(t),r=zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(t,r,i),e!==null&&(ui(e,t,i,n),jl(e,t,i))}};function Ag(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!mo(n,i)||!mo(r,s):!0}function K_(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=An(e)?es:dn.current,i=e.contextTypes,s=(i=i!=null)?na(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function mf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},cp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=An(e)?es:dn.current,r.context=na(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tu.enqueueReplaceState(r,r.state,null),wc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function aa(t,e){try{var n="",i=e;do n+=FE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cw=typeof WeakMap=="function"?WeakMap:Map;function Z_(t,e,n){n=zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cc||(Cc=!0,bf=i),gf(t,e)},n}function Q_(t,e,n){n=zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gf(t,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Cg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new cw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ew.bind(null,t,e,n),e.then(t,t))}function Pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zi(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var uw=Qi.ReactCurrentOwner,wn=!1;function pn(t,e,n,i){e.child=t===null?A_(e,null,n,i):ra(e,t.child,n,i)}function Dg(t,e,n,i,r){n=n.render;var s=e.ref;return Zs(e,r),i=pp(t,e,n,i,s,r),n=mp(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(_t&&n&&np(e),e.flags|=1,pn(t,e,i,r),e.child)}function Ng(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,J_(t,e,s,i,r)):(t=Ql(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(a,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function J_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(mo(s,i)&&t.ref===e.ref)if(wn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(wn=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return vf(t,e,n,i,r)}function ey(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Vs,Dn),Dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(Vs,Dn),Dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(Vs,Dn),Dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(Vs,Dn),Dn|=i;return pn(t,e,r,n),e.child}function ty(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vf(t,e,n,i,r){var s=An(n)?es:dn.current;return s=na(e,s),Zs(e,r),n=pp(t,e,n,i,s,r),i=mp(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(_t&&i&&np(e),e.flags|=1,pn(t,e,n,r),e.child)}function Ig(t,e,n,i,r){if(An(n)){var s=!0;_c(e)}else s=!1;if(Zs(e,r),e.stateNode===null)Yl(t,e),K_(e,n,i),mf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=An(n)?es:dn.current,c=na(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Rg(e,a,i,c),cr=!1;var d=e.memoizedState;a.state=d,wc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||bn.current||cr?(typeof u=="function"&&(pf(e,n,u,i),l=e.memoizedState),(o=cr||Ag(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,C_(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ii(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=An(n)?es:dn.current,l=na(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&Rg(e,a,i,l),cr=!1,d=e.memoizedState,a.state=d,wc(e,i,a,r);var v=e.memoizedState;o!==h||d!==v||bn.current||cr?(typeof p=="function"&&(pf(e,n,p,i),v=e.memoizedState),(c=cr||Ag(e,n,c,i,d,v,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return xf(t,e,n,i,s,r)}function xf(t,e,n,i,r,s){ty(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&_g(e,n,!1),Yi(t,e,s);i=e.stateNode,uw.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ra(e,t.child,null,s),e.child=ra(e,null,o,s)):pn(t,e,o,s),e.memoizedState=i.state,r&&_g(e,n,!0),e.child}function ny(t){var e=t.stateNode;e.pendingContext?xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xg(t,e.context,!1),up(t,e.containerInfo)}function Ug(t,e,n,i,r){return ia(),rp(r),e.flags|=256,pn(t,e,n,i),e.child}var _f={dehydrated:null,treeContext:null,retryLane:0};function yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function iy(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(St,r&1),t===null)return ff(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ru(a,i,0,null),t=Zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yf(n),e.memoizedState=_f,t):xp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return dw(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=wr(o,s):(s=Zr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?yf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=_f,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xp(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,i){return i!==null&&rp(i),ra(e,t.child,null,n),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dw(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Gu(Error(ue(422))),ul(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ru({mode:"visible",children:i.children},r,0,null),s=Zr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ra(e,t.child,null,a),e.child.memoizedState=yf(a),e.memoizedState=_f,s);if(!(e.mode&1))return ul(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ue(419)),i=Gu(s,i,void 0),ul(t,e,a,i)}if(o=(a&t.childLanes)!==0,wn||o){if(i=Wt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(t,r),ui(i,t,r,-1))}return wp(),i=Gu(Error(ue(421))),ul(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ww.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,In=yr(r.nextSibling),Un=e,_t=!0,si=null,t!==null&&(Xn[jn++]=Fi,Xn[jn++]=Oi,Xn[jn++]=ts,Fi=t.id,Oi=t.overflow,ts=e),e=xp(e,i.children),e.flags|=4096,e)}function Fg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hf(t.return,e,n)}function Wu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ry(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,n,e);else if(t.tag===19)Fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Wu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Wu(e,!0,n,null,s);break;case"together":Wu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fw(t,e,n){switch(e.tag){case 3:ny(e),ia();break;case 5:P_(e);break;case 1:An(e.type)&&_c(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(Mc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?iy(t,e,n):(mt(St,St.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);mt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ry(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,ey(t,e,n)}return Yi(t,e,n)}var sy,Sf,ay,oy;sy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sf=function(){};ay=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(Si.current);var s=null;switch(n){case"input":r=Hd(t,r),i=Hd(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=Xd(t,r),i=Xd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vc)}$d(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};oy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ca(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function hw(t,e,n){var i=e.pendingProps;switch(ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return An(e.type)&&xc(),tn(e),null;case 3:return i=e.stateNode,sa(),vt(bn),vt(dn),fp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(Cf(si),si=null))),Sf(t,e),tn(e),null;case 5:dp(e);var r=qr(yo.current);if(n=e.type,t!==null&&e.stateNode!=null)ay(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return tn(e),null}if(t=qr(Si.current),ll(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[xo]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<za.length;r++)gt(za[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Xm(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":$m(i,s),gt("invalid",i)}$d(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,o,t),r=["children",""+o]):oo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":Jo(i),jm(i,s,!0);break;case"textarea":Jo(i),qm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ux(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[vi]=e,t[xo]=i,sy(t,e,!1,!1),e.stateNode=t;e:{switch(a=qd(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<za.length;r++)gt(za[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Xm(t,i),r=Hd(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":$m(t,i),r=Xd(t,i),gt("invalid",t);break;default:r=i}$d(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?kx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&lo(t,l):typeof l=="number"&&lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&Hh(t,s,l,a))}switch(n){case"input":Jo(t),jm(t,i,!1);break;case"textarea":Jo(t),qm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?$s(t,!!i.multiple,s,!1):i.defaultValue!=null&&$s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)oy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=qr(yo.current),qr(Si.current),ll(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:ol(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return tn(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&In!==null&&e.mode&1&&!(e.flags&128))T_(),ia(),e.flags|=98560,s=!1;else if(s=ll(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[vi]=e}else ia(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else si!==null&&(Cf(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ft===0&&(Ft=3):wp())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return sa(),Sf(t,e),t===null&&go(e.stateNode.containerInfo),tn(e),null;case 10:return op(e.type._context),tn(e),null;case 17:return An(e.type)&&xc(),tn(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ca(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Tc(t),a!==null){for(e.flags|=128,Ca(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>oa&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!_t)return tn(e),null}else 2*Lt()-s.renderingStartTime>oa&&n!==1073741824&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=St.current,mt(St,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return Ep(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function pw(t,e){switch(ip(e),e.tag){case 1:return An(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sa(),vt(bn),vt(dn),fp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dp(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));ia()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return sa(),null;case 10:return op(e.type._context),null;case 22:case 23:return Ep(),null;case 24:return null;default:return null}}var dl=!1,on=!1,mw=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function Mf(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var Og=!1;function gw(t,e){if(sf=pc,t=f_(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(af={focusedElem:t,selectionRange:n},pc=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,g=v.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:ii(e.type,S),g);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(y){Ct(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return v=Og,Og=!1,v}function Ja(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Mf(e,n,s)}r=r.next}while(r!==i)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ef(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ly(t){var e=t.alternate;e!==null&&(t.alternate=null,ly(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[xo],delete e[cf],delete e[Q1],delete e[J1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cy(t){return t.tag===5||t.tag===3||t.tag===4}function kg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vc));else if(i!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}function Tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Tf(t,e,n),t=t.sibling;t!==null;)Tf(t,e,n),t=t.sibling}var $t=null,ri=!1;function tr(t,e,n){for(n=n.child;n!==null;)uy(t,e,n),n=n.sibling}function uy(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(qc,n)}catch{}switch(n.tag){case 5:on||zs(n,e);case 6:var i=$t,r=ri;$t=null,tr(t,e,n),$t=i,ri=r,$t!==null&&(ri?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(ri?(t=$t,n=n.stateNode,t.nodeType===8?Ou(t.parentNode,n):t.nodeType===1&&Ou(t,n),ho(t)):Ou($t,n.stateNode));break;case 4:i=$t,r=ri,$t=n.stateNode.containerInfo,ri=!0,tr(t,e,n),$t=i,ri=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Mf(n,e,a),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!on&&(zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Ct(n,e,o)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,tr(t,e,n),on=i):tr(t,e,n);break;default:tr(t,e,n)}}function Bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mw),e.forEach(function(i){var r=Tw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:$t=o.stateNode,ri=!1;break e;case 3:$t=o.stateNode.containerInfo,ri=!0;break e;case 4:$t=o.stateNode.containerInfo,ri=!0;break e}o=o.return}if($t===null)throw Error(ue(160));uy(s,a,r),$t=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dy(e,t),e=e.sibling}function dy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),fi(t),i&4){try{Ja(3,t,t.return),nu(3,t)}catch(S){Ct(t,t.return,S)}try{Ja(5,t,t.return)}catch(S){Ct(t,t.return,S)}}break;case 1:Qn(e,t),fi(t),i&512&&n!==null&&zs(n,n.return);break;case 5:if(Qn(e,t),fi(t),i&512&&n!==null&&zs(n,n.return),t.flags&32){var r=t.stateNode;try{lo(r,"")}catch(S){Ct(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Nx(r,s),qd(o,a);var c=qd(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?kx(r,h):u==="dangerouslySetInnerHTML"?Fx(r,h):u==="children"?lo(r,h):Hh(r,u,h,c)}switch(o){case"input":Gd(r,s);break;case"textarea":Ix(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?$s(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?$s(r,!!s.multiple,s.defaultValue,!0):$s(r,!!s.multiple,s.multiple?[]:"",!1))}r[xo]=s}catch(S){Ct(t,t.return,S)}}break;case 6:if(Qn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Ct(t,t.return,S)}}break;case 3:if(Qn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(S){Ct(t,t.return,S)}break;case 4:Qn(e,t),fi(t);break;case 13:Qn(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Sp=Lt())),i&4&&Bg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||u,Qn(e,t),on=c):Qn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ae=t,u=t.child;u!==null;){for(h=Ae=u;Ae!==null;){switch(d=Ae,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ja(4,d,d.return);break;case 1:zs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){Ct(i,n,S)}}break;case 5:zs(d,d.return);break;case 22:if(d.memoizedState!==null){Vg(h);continue}}p!==null?(p.return=d,Ae=p):Vg(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ox("display",a))}catch(S){Ct(t,t.return,S)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){Ct(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qn(e,t),fi(t),i&4&&Bg(t);break;case 21:break;default:Qn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cy(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(lo(r,""),i.flags&=-33);var s=kg(t);Tf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=kg(t);wf(t,o,a);break;default:throw Error(ue(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vw(t,e,n){Ae=t,fy(t)}function fy(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||dl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||on;o=dl;var c=on;if(dl=a,(on=l)&&!c)for(Ae=r;Ae!==null;)a=Ae,l=a.child,a.tag===22&&a.memoizedState!==null?Hg(r):l!==null?(l.return=a,Ae=l):Hg(r);for(;s!==null;)Ae=s,fy(s),s=s.sibling;Ae=r,dl=o,on=c}zg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):zg(t)}}function zg(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wg(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wg(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ho(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}on||e.flags&512&&Ef(e)}catch(d){Ct(e,e.return,d)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Vg(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Hg(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{Ef(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{Ef(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Ae=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ae=o;break}Ae=e.return}}var xw=Math.ceil,Rc=Qi.ReactCurrentDispatcher,_p=Qi.ReactCurrentOwner,qn=Qi.ReactCurrentBatchConfig,rt=0,Wt=null,It=null,Kt=0,Dn=0,Vs=Lr(0),Ft=0,wo=null,is=0,iu=0,yp=0,eo=null,En=null,Sp=0,oa=1/0,Ni=null,Cc=!1,bf=null,Mr=null,fl=!1,mr=null,Pc=0,to=0,Af=null,Kl=-1,Zl=0;function gn(){return rt&6?Lt():Kl!==-1?Kl:Kl=Lt()}function Er(t){return t.mode&1?rt&2&&Kt!==0?Kt&-Kt:tw.transition!==null?(Zl===0&&(Zl=Kx()),Zl):(t=ut,t!==0||(t=window.event,t=t===void 0?16:i_(t.type)),t):1}function ui(t,e,n,i){if(50<to)throw to=0,Af=null,Error(ue(185));Fo(t,n,i),(!(rt&2)||t!==Wt)&&(t===Wt&&(!(rt&2)&&(iu|=n),Ft===4&&fr(t,Kt)),Rn(t,i),n===1&&rt===0&&!(e.mode&1)&&(oa=Lt()+500,Jc&&Dr()))}function Rn(t,e){var n=t.callbackNode;t1(t,e);var i=hc(t,t===Wt?Kt:0);if(i===0)n!==null&&Zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Zm(n),e===1)t.tag===0?ew(Gg.bind(null,t)):M_(Gg.bind(null,t)),K1(function(){!(rt&6)&&Dr()}),n=null;else{switch(Zx(i)){case 1:n=$h;break;case 4:n=qx;break;case 16:n=fc;break;case 536870912:n=Yx;break;default:n=fc}n=yy(n,hy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hy(t,e){if(Kl=-1,Zl=0,rt&6)throw Error(ue(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var i=hc(t,t===Wt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Lc(t,i);else{e=i;var r=rt;rt|=2;var s=my();(Wt!==t||Kt!==e)&&(Ni=null,oa=Lt()+500,Kr(t,e));do try{Sw();break}catch(o){py(t,o)}while(!0);ap(),Rc.current=s,rt=r,It!==null?e=0:(Wt=null,Kt=0,e=Ft)}if(e!==0){if(e===2&&(r=Jd(t),r!==0&&(i=r,e=Rf(t,r))),e===1)throw n=wo,Kr(t,0),fr(t,i),Rn(t,Lt()),n;if(e===6)fr(t,i);else{if(r=t.current.alternate,!(i&30)&&!_w(r)&&(e=Lc(t,i),e===2&&(s=Jd(t),s!==0&&(i=s,e=Rf(t,s))),e===1))throw n=wo,Kr(t,0),fr(t,i),Rn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Gr(t,En,Ni);break;case 3:if(fr(t,i),(i&130023424)===i&&(e=Sp+500-Lt(),10<e)){if(hc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=lf(Gr.bind(null,t,En,Ni),e);break}Gr(t,En,Ni);break;case 4:if(fr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ci(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xw(i/1960))-i,10<i){t.timeoutHandle=lf(Gr.bind(null,t,En,Ni),i);break}Gr(t,En,Ni);break;case 5:Gr(t,En,Ni);break;default:throw Error(ue(329))}}}return Rn(t,Lt()),t.callbackNode===n?hy.bind(null,t):null}function Rf(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=Lc(t,e),t!==2&&(e=En,En=n,e!==null&&Cf(e)),t}function Cf(t){En===null?En=t:En.push.apply(En,t)}function _w(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~yp,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function Gg(t){if(rt&6)throw Error(ue(327));Qs();var e=hc(t,0);if(!(e&1))return Rn(t,Lt()),null;var n=Lc(t,e);if(t.tag!==0&&n===2){var i=Jd(t);i!==0&&(e=i,n=Rf(t,i))}if(n===1)throw n=wo,Kr(t,0),fr(t,e),Rn(t,Lt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,En,Ni),Rn(t,Lt()),null}function Mp(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(oa=Lt()+500,Jc&&Dr())}}function rs(t){mr!==null&&mr.tag===0&&!(rt&6)&&Qs();var e=rt;rt|=1;var n=qn.transition,i=ut;try{if(qn.transition=null,ut=1,t)return t()}finally{ut=i,qn.transition=n,rt=e,!(rt&6)&&Dr()}}function Ep(){Dn=Vs.current,vt(Vs)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Y1(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(ip(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xc();break;case 3:sa(),vt(bn),vt(dn),fp();break;case 5:dp(i);break;case 4:sa();break;case 13:vt(St);break;case 19:vt(St);break;case 10:op(i.type._context);break;case 22:case 23:Ep()}n=n.return}if(Wt=t,It=t=wr(t.current,null),Kt=Dn=e,Ft=0,wo=null,yp=iu=is=0,En=eo=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}$r=null}return t}function py(t,e){do{var n=It;try{if(ap(),$l.current=Ac,bc){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bc=!1}if(ns=0,Gt=Ut=wt=null,Qa=!1,So=0,_p.current=null,n===null||n.return===null){Ft=1,wo=e,It=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Pg(a);if(p!==null){p.flags&=-257,Lg(p,a,o,s,e),p.mode&1&&Cg(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){Cg(s,c,e),wp();break e}l=Error(ue(426))}}else if(_t&&o.mode&1){var g=Pg(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Lg(g,a,o,s,e),rp(aa(l,o));break e}}s=l=aa(l,o),Ft!==4&&(Ft=2),eo===null?eo=[s]:eo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Z_(s,l,e);Eg(s,f);break e;case 1:o=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Mr===null||!Mr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Q_(s,o,e);Eg(s,y);break e}}s=s.return}while(s!==null)}vy(n)}catch(E){e=E,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function my(){var t=Rc.current;return Rc.current=Ac,t===null?Ac:t}function wp(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Wt===null||!(is&268435455)&&!(iu&268435455)||fr(Wt,Kt)}function Lc(t,e){var n=rt;rt|=2;var i=my();(Wt!==t||Kt!==e)&&(Ni=null,Kr(t,e));do try{yw();break}catch(r){py(t,r)}while(!0);if(ap(),rt=n,Rc.current=i,It!==null)throw Error(ue(261));return Wt=null,Kt=0,Ft}function yw(){for(;It!==null;)gy(It)}function Sw(){for(;It!==null&&!jE();)gy(It)}function gy(t){var e=_y(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,e===null?vy(t):It=e,_p.current=null}function vy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pw(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,It=null;return}}else if(n=hw(n,e,Dn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ft===0&&(Ft=5)}function Gr(t,e,n){var i=ut,r=qn.transition;try{qn.transition=null,ut=1,Mw(t,e,n,i)}finally{qn.transition=r,ut=i}return null}function Mw(t,e,n,i){do Qs();while(mr!==null);if(rt&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(n1(t,s),t===Wt&&(It=Wt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,yy(fc,function(){return Qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var a=ut;ut=1;var o=rt;rt|=4,_p.current=null,gw(t,n),dy(n,t),H1(af),pc=!!sf,af=sf=null,t.current=n,vw(n),$E(),rt=o,ut=a,qn.transition=s}else t.current=n;if(fl&&(fl=!1,mr=t,Pc=r),s=t.pendingLanes,s===0&&(Mr=null),KE(n.stateNode),Rn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cc)throw Cc=!1,t=bf,bf=null,t;return Pc&1&&t.tag!==0&&Qs(),s=t.pendingLanes,s&1?t===Af?to++:(to=0,Af=t):to=0,Dr(),null}function Qs(){if(mr!==null){var t=Zx(Pc),e=qn.transition,n=ut;try{if(qn.transition=null,ut=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,Pc=0,rt&6)throw Error(ue(331));var r=rt;for(rt|=4,Ae=t.current;Ae!==null;){var s=Ae,a=s.child;if(Ae.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ae=c;Ae!==null;){var u=Ae;switch(u.tag){case 0:case 11:case 15:Ja(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ae=h;else for(;Ae!==null;){u=Ae;var d=u.sibling,p=u.return;if(ly(u),u===c){Ae=null;break}if(d!==null){d.return=p,Ae=d;break}Ae=p}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Ae=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ae=a;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ja(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ae=f;break e}Ae=s.return}}var m=t.current;for(Ae=m;Ae!==null;){a=Ae;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,Ae=_;else e:for(a=m;Ae!==null;){if(o=Ae,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:nu(9,o)}}catch(E){Ct(o,o.return,E)}if(o===a){Ae=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,Ae=y;break e}Ae=o.return}}if(rt=r,Dr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(qc,t)}catch{}i=!0}return i}finally{ut=n,qn.transition=e}}return!1}function Wg(t,e,n){e=aa(n,e),e=Z_(t,e,1),t=Sr(t,e,1),e=gn(),t!==null&&(Fo(t,1,e),Rn(t,e))}function Ct(t,e,n){if(t.tag===3)Wg(t,t,n);else for(;e!==null;){if(e.tag===3){Wg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){t=aa(n,t),t=Q_(e,t,1),e=Sr(e,t,1),t=gn(),e!==null&&(Fo(e,1,t),Rn(e,t));break}}e=e.return}}function Ew(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Kt&n)===n&&(Ft===4||Ft===3&&(Kt&130023424)===Kt&&500>Lt()-Sp?Kr(t,0):yp|=n),Rn(t,e)}function xy(t,e){e===0&&(t.mode&1?(e=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):e=1);var n=gn();t=qi(t,e),t!==null&&(Fo(t,e,n),Rn(t,n))}function ww(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xy(t,n)}function Tw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),xy(t,n)}var _y;_y=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bn.current)wn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wn=!1,fw(t,e,n);wn=!!(t.flags&131072)}else wn=!1,_t&&e.flags&1048576&&E_(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Yl(t,e),t=e.pendingProps;var r=na(e,dn.current);Zs(e,n),r=pp(null,e,i,t,r,n);var s=mp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,_c(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cp(e),r.updater=tu,e.stateNode=r,r._reactInternals=e,mf(e,i,t,n),e=xf(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&np(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Aw(i),t=ii(i,t),r){case 0:e=vf(null,e,i,t,n);break e;case 1:e=Ig(null,e,i,t,n);break e;case 11:e=Dg(null,e,i,t,n);break e;case 14:e=Ng(null,e,i,ii(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),vf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Ig(t,e,i,r,n);case 3:e:{if(ny(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,C_(t,e),wc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=aa(Error(ue(423)),e),e=Ug(t,e,i,n,r);break e}else if(i!==r){r=aa(Error(ue(424)),e),e=Ug(t,e,i,n,r);break e}else for(In=yr(e.stateNode.containerInfo.firstChild),Un=e,_t=!0,si=null,n=A_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ia(),i===r){e=Yi(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return P_(e),t===null&&ff(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,of(i,r)?a=null:s!==null&&of(i,s)&&(e.flags|=32),ty(t,e),pn(t,e,a,n),e.child;case 6:return t===null&&ff(e),null;case 13:return iy(t,e,n);case 4:return up(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ra(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Dg(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,mt(Mc,i._currentValue),i._currentValue=a,s!==null)if(di(s.value,a)){if(s.children===r.children&&!bn.current){e=Yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ue(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),hf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zs(e,n),r=Yn(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),Ng(t,e,i,r,n);case 15:return J_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Yl(t,e),e.tag=1,An(i)?(t=!0,_c(e)):t=!1,Zs(e,n),K_(e,i,r),mf(e,i,r,n),xf(null,e,i,!0,t,n);case 19:return ry(t,e,n);case 22:return ey(t,e,n)}throw Error(ue(156,e.tag))};function yy(t,e){return $x(t,e)}function bw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new bw(t,e,n,i)}function Tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Aw(t){if(typeof t=="function")return Tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wh)return 11;if(t===Xh)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ql(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Tp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ls:return Zr(n.children,r,s,e);case Gh:a=8,r|=8;break;case kd:return t=$n(12,n,e,r|2),t.elementType=kd,t.lanes=s,t;case Bd:return t=$n(13,n,e,r),t.elementType=Bd,t.lanes=s,t;case zd:return t=$n(19,n,e,r),t.elementType=zd,t.lanes=s,t;case Px:return ru(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rx:a=10;break e;case Cx:a=9;break e;case Wh:a=11;break e;case Xh:a=14;break e;case lr:a=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=$n(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Zr(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function ru(t,e,n,i){return t=$n(22,t,i,e),t.elementType=Px,t.lanes=n,t.stateNode={isHidden:!1},t}function Xu(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function ju(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Rw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bu(0),this.expirationTimes=bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bp(t,e,n,i,r,s,a,o,l){return t=new Rw(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(s),t}function Cw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Sy(t){if(!t)return br;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(An(n))return S_(t,n,e)}return e}function My(t,e,n,i,r,s,a,o,l){return t=bp(n,i,!0,t,r,s,a,o,l),t.context=Sy(null),n=t.current,i=gn(),r=Er(n),s=zi(i,r),s.callback=e??null,Sr(n,s,r),t.current.lanes=r,Fo(t,r,i),Rn(t,i),t}function su(t,e,n,i){var r=e.current,s=gn(),a=Er(r);return n=Sy(n),e.context===null?e.context=n:e.pendingContext=n,e=zi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sr(r,e,a),t!==null&&(ui(t,r,a,s),jl(t,r,a)),a}function Dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ap(t,e){Xg(t,e),(t=t.alternate)&&Xg(t,e)}function Pw(){return null}var Ey=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rp(t){this._internalRoot=t}au.prototype.render=Rp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));su(t,e,null,null)};au.prototype.unmount=Rp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){su(null,t,null,null)}),e[$i]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=e_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&n_(t)}};function Cp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jg(){}function Lw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Dc(a);s.call(c)}}var a=My(e,i,t,0,null,!1,!1,"",jg);return t._reactRootContainer=a,t[$i]=a.current,go(t.nodeType===8?t.parentNode:t),rs(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Dc(l);o.call(c)}}var l=bp(t,0,!1,null,null,!1,!1,"",jg);return t._reactRootContainer=l,t[$i]=l.current,go(t.nodeType===8?t.parentNode:t),rs(function(){su(e,l,n,i)}),l}function lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Dc(a);o.call(l)}}su(e,a,t,r)}else a=Lw(n,e,t,r,i);return Dc(a)}Qx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ba(e.pendingLanes);n!==0&&(qh(e,n|1),Rn(e,Lt()),!(rt&6)&&(oa=Lt()+500,Dr()))}break;case 13:rs(function(){var i=qi(t,1);if(i!==null){var r=gn();ui(i,t,1,r)}}),Ap(t,1)}};Yh=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=gn();ui(e,t,134217728,n)}Ap(t,134217728)}};Jx=function(t){if(t.tag===13){var e=Er(t),n=qi(t,e);if(n!==null){var i=gn();ui(n,t,e,i)}Ap(t,e)}};e_=function(){return ut};t_=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Kd=function(t,e,n){switch(e){case"input":if(Gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Qc(i);if(!r)throw Error(ue(90));Dx(i),Gd(i,r)}}}break;case"textarea":Ix(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};Vx=Mp;Hx=rs;var Dw={usingClientEntryPoint:!1,Events:[ko,Us,Qc,Bx,zx,Mp]},Pa={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nw={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xx(t),t===null?null:t.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||Pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{qc=hl.inject(Nw),yi=hl}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dw;Bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cp(e))throw Error(ue(200));return Cw(t,e,null,n)};Bn.createRoot=function(t,e){if(!Cp(t))throw Error(ue(299));var n=!1,i="",r=Ey;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bp(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,go(t.nodeType===8?t.parentNode:t),new Rp(e)};Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=Xx(e),t=t===null?null:t.stateNode,t};Bn.flushSync=function(t){return rs(t)};Bn.hydrate=function(t,e,n){if(!ou(e))throw Error(ue(200));return lu(null,t,e,!0,n)};Bn.hydrateRoot=function(t,e,n){if(!Cp(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Ey;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=My(e,null,t,1,n??null,r,!1,s,a),t[$i]=e.current,go(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new au(e)};Bn.render=function(t,e,n){if(!ou(e))throw Error(ue(200));return lu(null,t,e,!1,n)};Bn.unmountComponentAtNode=function(t){if(!ou(t))throw Error(ue(40));return t._reactRootContainer?(rs(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Bn.unstable_batchedUpdates=Mp;Bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ou(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return lu(t,e,n,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function wy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wy)}catch(t){console.error(t)}}wy(),wx.exports=Bn;var Iw=wx.exports,$g=Iw;Fd.createRoot=$g.createRoot,Fd.hydrateRoot=$g.hydrateRoot;const qg="/.netlify/functions/game",Uw=()=>{const[t,e]=q.useState(!0),[n,i]=q.useState(!1),[r,s]=q.useState(24),[a,o]=q.useState(null),[l]=q.useState(()=>{let U=localStorage.getItem("ludo_player_id");return U||(U=`p-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,localStorage.setItem("ludo_player_id",U)),U}),[c,u]=q.useState(null),[h,d]=q.useState([]),[p,v]=q.useState(null),S=q.useRef(null),g=q.useRef(0),f=q.useRef(null),m=q.useRef(null);m.current=a;const _=q.useCallback(async U=>{const H=performance.now();try{const D=await fetch(qg,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(U)}),W=performance.now();return s(Math.max(5,Math.round(W-H))),e(!0),i(!1),await D.json()}catch(D){return e(!1),i(!0),{success:!1,error:D.message||"Network request failed"}}},[]),y=q.useCallback(U=>{var D;if(!U)return;U.turnState.roll!==null&&(U.turnState.roll!==S.current||(U.version||0)>g.current)&&v({playerColor:U.turnState.activeColor,roll:U.turnState.roll,timestamp:Date.now()}),S.current=U.turnState.roll,g.current=U.version||0,U.reactions&&U.reactions.length>0&&d(U.reactions);const H=(D=U.players)==null?void 0:D.find(W=>W.id===l);H&&u(H.color),o(U)},[l]);q.useEffect(()=>{const U=a==null?void 0:a.roomCode;if(!U)return;let H=!0;const D=async()=>{if(H){try{const W=await fetch(`${qg}?action=get_state&roomCode=${U}&_t=${Date.now()}`);if(W.ok){const Z=await W.json();Z.success&&Z.gameState&&H&&y(Z.gameState)}}catch{}H&&(f.current=setTimeout(D,850))}};return f.current=setTimeout(D,850),()=>{H=!1,f.current&&clearTimeout(f.current)}},[a==null?void 0:a.roomCode,y]);const E=q.useCallback(async(U,H,D,W=4)=>{const Z=await _({action:"join_room",roomCode:U,playerName:H,avatar:D,playerCount:W,playerId:l});return Z.success&&Z.gameState&&y(Z.gameState),Z},[_,l,y]),b=q.useCallback(async(U,H,D=4)=>{const W=await _({action:"quick_match",playerName:U,avatar:H,playerCount:D,playerId:l});return W.success&&W.gameState&&y(W.gameState),W},[_,l,y]),x=q.useCallback(async()=>{var D;const U=(D=m.current)==null?void 0:D.roomCode;if(!U)return{success:!1,error:"No room"};const H=await _({action:"start_game",roomCode:U,playerId:l});return H.success&&H.gameState&&y(H.gameState),H},[_,l,y]),M=q.useCallback(async()=>{var D;const U=(D=m.current)==null?void 0:D.roomCode;if(!U)return{success:!1,error:"No room"};const H=await _({action:"roll_dice",roomCode:U,playerId:l});return H.success&&H.gameState&&y(H.gameState),H},[_,l,y]),F=q.useCallback(async U=>{var W;const H=(W=m.current)==null?void 0:W.roomCode;if(!H)return{success:!1,error:"No room"};const D=await _({action:"move_token",roomCode:H,playerId:l,tokenIndex:U});return D.success&&D.gameState&&y(D.gameState),D},[_,l,y]),L=q.useCallback(async U=>{var D;const H=(D=m.current)==null?void 0:D.roomCode;H&&await _({action:"reaction",roomCode:H,playerId:l,emoji:U})},[_,l]),N=q.useCallback(async()=>{var D;const U=(D=m.current)==null?void 0:D.roomCode;if(!U)return;const H=await _({action:"rematch",roomCode:U,playerId:l});H.success&&H.gameState&&y(H.gameState)},[_,l,y]);return{isConnected:t,isReconnecting:n,latency:r,myPlayerId:l,myColor:c,gameState:a,setGameState:o,reactions:h,lastDiceEvent:p,joinRoom:E,quickMatch:b,startGame:x,rollDice:M,moveToken:F,sendReaction:L,requestRematch:N}},Va={red:0,green:13,yellow:26,blue:39},Yg=[0,8,13,21,26,34,39,47],Fw=2e4,Ow=["🦁","🐯","🦊","🐼","🐨","🦄","🐲","👑","🧙","🥷","🚀","⚡","💎","🔥","🌟","🎯"],kw=["👋","🔥","😂","😎","😱","👏","🍀","💔"],Pf={candy:{name:"Candy Pastel",tagline:"Sweet, playful & delightfully soft",bgGradient:"radial-gradient(circle at 50% 30%, #fdf2f8 0%, #ede9fe 60%, #e0e7ff 100%)",boardBg:"#ffffff",frameBorder:"#f472b6",goldAccent:"#f59e0b",colors:{red:{primary:"#fb7185",light:"#fecdd3",glow:"rgba(251, 113, 133, 0.45)"},green:{primary:"#34d399",light:"#a7f3d0",glow:"rgba(52, 211, 153, 0.45)"},yellow:{primary:"#fbbf24",light:"#fde68a",glow:"rgba(251, 191, 36, 0.45)"},blue:{primary:"#60a5fa",light:"#bfdbfe",glow:"rgba(96, 165, 250, 0.45)"}}},neon:{name:"Neon Night",tagline:"Cyberpunk glow under midnight sky",bgGradient:"radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0f172a 60%, #020617 100%)",boardBg:"#090d16",frameBorder:"#06b6d4",goldAccent:"#facc15",colors:{red:{primary:"#f43f5e",light:"#fda4af",glow:"rgba(244, 63, 94, 0.65)"},green:{primary:"#10b981",light:"#6ee7b7",glow:"rgba(16, 185, 129, 0.65)"},yellow:{primary:"#eab308",light:"#fef08a",glow:"rgba(234, 179, 8, 0.65)"},blue:{primary:"#0ea5e9",light:"#7dd3fc",glow:"rgba(14, 165, 233, 0.65)"}}},wood:{name:"Royal Wood",tagline:"Hand-turned walnut & solid brass inlays",bgGradient:"radial-gradient(circle at 50% 30%, #3e2716 0%, #1c1008 60%, #0d0703 100%)",boardBg:"#d7be92",frameBorder:"#9c6634",goldAccent:"#d4af37",colors:{red:{primary:"#b91c1c",light:"#f87171",glow:"rgba(185, 28, 28, 0.5)"},green:{primary:"#15803d",light:"#4ade80",glow:"rgba(21, 128, 61, 0.5)"},yellow:{primary:"#b45309",light:"#fbbf24",glow:"rgba(180, 83, 9, 0.5)"},blue:{primary:"#1d4ed8",light:"#60a5fa",glow:"rgba(29, 78, 216, 0.5)"}}},minimal:{name:"Minimal Light",tagline:"Clean architectural clarity",bgGradient:"linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",boardBg:"#ffffff",frameBorder:"#94a3b8",goldAccent:"#64748b",colors:{red:{primary:"#e11d48",light:"#fbcfe8",glow:"rgba(225, 29, 72, 0.35)"},green:{primary:"#059669",light:"#a7f3d0",glow:"rgba(5, 150, 105, 0.35)"},yellow:{primary:"#d97706",light:"#fde68a",glow:"rgba(217, 119, 6, 0.35)"},blue:{primary:"#2563eb",light:"#bfdbfe",glow:"rgba(37, 99, 235, 0.35)"}}}},Ty=q.createContext(null),Bw=({children:t})=>{const[e,n]=q.useState(()=>localStorage.getItem("ludo_theme")||"wood"),[i,r]=q.useState(()=>localStorage.getItem("ludo_dark")!=="false");q.useEffect(()=>{localStorage.setItem("ludo_theme",e),(e==="neon"||e==="wood")&&r(!0)},[e]),q.useEffect(()=>{localStorage.setItem("ludo_dark",String(i)),document.documentElement.classList.toggle("dark",i)},[i]);const s=Pf[e];return R.jsx(Ty.Provider,{value:{themeId:e,setThemeId:n,theme:s,isDarkMode:i,setIsDarkMode:r},children:t})},us=()=>{const t=q.useContext(Ty);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},cu=()=>{const t=q.useRef(null),e=q.useRef(null),[n,i]=q.useState(()=>localStorage.getItem("ludo_muted")==="true"),[r,s]=q.useState(!1),[a,o]=q.useState(.7),l=q.useCallback(()=>{if(!t.current&&(window.AudioContext||window.webkitAudioContext)){const f=window.AudioContext||window.webkitAudioContext;t.current=new f}return t.current&&t.current.state==="suspended"&&t.current.resume(),t.current},[]),c=q.useCallback(()=>{i(f=>{const m=!f;return localStorage.setItem("ludo_muted",String(m)),m&&e.current&&(clearInterval(e.current),e.current=null,s(!1)),m})},[]),u=q.useCallback(()=>{if(n)return;const f=l();if(!f)return;const m=f.currentTime;for(let _=0;_<6;_++){const y=_*.065+Math.random()*.02,E=f.createOscillator(),b=f.createGain();E.type="triangle",E.frequency.setValueAtTime(180+Math.random()*90,m+y),E.frequency.exponentialRampToValueAtTime(50,m+y+.05),b.gain.setValueAtTime((.3-_*.04)*a,m+y),b.gain.exponentialRampToValueAtTime(.001,m+y+.05),E.connect(b),b.connect(f.destination),E.start(m+y),E.stop(m+y+.06)}},[n,a,l]),h=q.useCallback((f=0)=>{if(n)return;const m=l();if(!m)return;const _=m.currentTime,y=m.createOscillator(),E=m.createGain();y.type="sine";const b=420+f*30+(Math.random()-.5)*40;y.frequency.setValueAtTime(b,_),y.frequency.exponentialRampToValueAtTime(120,_+.08),E.gain.setValueAtTime(.25*a,_),E.gain.exponentialRampToValueAtTime(.001,_+.08),y.connect(E),E.connect(m.destination),y.start(_),y.stop(_+.09)},[n,a,l]),d=q.useCallback(()=>{if(n)return;const f=l();if(!f)return;const m=f.currentTime,_=f.createOscillator(),y=f.createGain();_.type="sine",_.frequency.setValueAtTime(260,m),_.frequency.exponentialRampToValueAtTime(680,m+.22),y.gain.setValueAtTime(.25*a,m),y.gain.exponentialRampToValueAtTime(.001,m+.3),_.connect(y),y.connect(f.destination),_.start(m),_.stop(m+.32)},[n,a,l]),p=q.useCallback(()=>{if(n)return;const f=l();if(!f)return;const m=f.currentTime,_=f.createOscillator(),y=f.createGain();_.type="sawtooth",_.frequency.setValueAtTime(340,m),_.frequency.exponentialRampToValueAtTime(75,m+.22),y.gain.setValueAtTime(.35*a,m),y.gain.exponentialRampToValueAtTime(.001,m+.24),_.connect(y),y.connect(f.destination),_.start(m),_.stop(m+.26)},[n,a,l]),v=q.useCallback(()=>{if(n)return;const f=l();if(!f)return;const m=f.currentTime;[880,1320].forEach((_,y)=>{const E=f.createOscillator(),b=f.createGain();E.type="sine",E.frequency.setValueAtTime(_,m+y*.05),b.gain.setValueAtTime(.2*a,m+y*.05),b.gain.exponentialRampToValueAtTime(.001,m+y*.05+.35),E.connect(b),b.connect(f.destination),E.start(m+y*.05),E.stop(m+y*.05+.4)})},[n,a,l]),S=q.useCallback(()=>{if(n)return;const f=l();if(!f)return;const m=f.currentTime;[261.63,329.63,392,523.25,392,523.25].forEach((y,E)=>{const b=f.createOscillator(),x=f.createGain();b.type="triangle";const M=m+E*.14;b.frequency.setValueAtTime(y,M),x.gain.setValueAtTime(.28*a,M),x.gain.exponentialRampToValueAtTime(.001,M+.32),b.connect(x),x.connect(f.destination),b.start(M),b.stop(M+.35)})},[n,a,l]),g=q.useCallback(()=>{if(r){e.current&&(clearInterval(e.current),e.current=null),s(!1);return}if(n)return;const f=l();if(!f)return;s(!0);const m=[[261.63,329.63,392],[220,261.63,329.63],[174.61,220,261.63],[196,246.94,293.66]];let _=0;const y=()=>{if(!f||f.state==="closed")return;const E=f.currentTime,b=m[_%m.length];_++,b.forEach(x=>{const M=f.createOscillator(),F=f.createGain();M.type="sine",M.frequency.setValueAtTime(x*1.5,E),F.gain.setValueAtTime(.001,E),F.gain.linearRampToValueAtTime(.035*a,E+.4),F.gain.exponentialRampToValueAtTime(.001,E+2.2),M.connect(F),F.connect(f.destination),M.start(E),M.stop(E+2.3)})};y(),e.current=setInterval(y,2400)},[r,n,a,l]);return q.useEffect(()=>()=>{e.current&&clearInterval(e.current)},[]),{isMuted:n,toggleMute:c,isBgmPlaying:r,toggleBGM:g,volume:a,setVolume:o,playDiceRoll:u,playTokenHop:h,playDeploy:d,playCapture:p,playSafeChime:v,playVictory:S}},Pp=q.createContext({});function Lp(t){const e=q.useRef(null);return e.current===null&&(e.current=t()),e.current}const uu=q.createContext(null),Dp=q.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class zw extends q.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Vw({children:t,isPresent:e}){const n=q.useId(),i=q.useRef(null),r=q.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=q.useContext(Dp);return q.useInsertionEffect(()=>{const{width:a,height:o,top:l,left:c}=r.current;if(e||!i.current||!a||!o)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),R.jsx(zw,{isPresent:e,childRef:i,sizeRef:r,children:q.cloneElement(t,{ref:i})})}const Hw=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:a})=>{const o=Lp(Gw),l=q.useId(),c=q.useCallback(h=>{o.set(h,!0);for(const d of o.values())if(!d)return;i&&i()},[o,i]),u=q.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:h=>(o.set(h,!1),()=>o.delete(h))}),s?[Math.random(),c]:[n,c]);return q.useMemo(()=>{o.forEach((h,d)=>o.set(d,!1))},[n]),q.useEffect(()=>{!n&&!o.size&&i&&i()},[n]),a==="popLayout"&&(t=R.jsx(Vw,{isPresent:n,children:t})),R.jsx(uu.Provider,{value:u,children:t})};function Gw(){return new Map}function by(t=!0){const e=q.useContext(uu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=q.useId();q.useEffect(()=>{t&&r(s)},[t]);const a=q.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,a]:[!0]}const pl=t=>t.key||"";function Kg(t){const e=[];return q.Children.forEach(t,n=>{q.isValidElement(n)&&e.push(n)}),e}const Np=typeof window<"u",Ay=Np?q.useLayoutEffect:q.useEffect,du=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:a=!1})=>{const[o,l]=by(a),c=q.useMemo(()=>Kg(t),[t]),u=a&&!o?[]:c.map(pl),h=q.useRef(!0),d=q.useRef(c),p=Lp(()=>new Map),[v,S]=q.useState(c),[g,f]=q.useState(c);Ay(()=>{h.current=!1,d.current=c;for(let y=0;y<g.length;y++){const E=pl(g[y]);u.includes(E)?p.delete(E):p.get(E)!==!0&&p.set(E,!1)}},[g,u.length,u.join("-")]);const m=[];if(c!==v){let y=[...c];for(let E=0;E<g.length;E++){const b=g[E],x=pl(b);u.includes(x)||(y.splice(E,0,b),m.push(b))}s==="wait"&&m.length&&(y=m),f(Kg(y)),S(c);return}const{forceRender:_}=q.useContext(Pp);return R.jsx(R.Fragment,{children:g.map(y=>{const E=pl(y),b=a&&!o?!1:c===g||u.includes(E),x=()=>{if(p.has(E))p.set(E,!0);else return;let M=!0;p.forEach(F=>{F||(M=!1)}),M&&(_==null||_(),f(d.current),a&&(l==null||l()),i&&i())};return R.jsx(Hw,{isPresent:b,initial:!h.current||n?void 0:!1,custom:b?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:b?void 0:x,children:y},E)})})},Fn=t=>t;let Ry=Fn;function Ip(t){let e;return()=>(e===void 0&&(e=t()),e)}const la=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Vi=t=>t*1e3,Hi=t=>t/1e3,Ww={useManualTiming:!1};function Xw(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function o(c){s.has(c)&&(l.schedule(c),t()),c(a)}const l={schedule:(c,u=!1,h=!1)=>{const p=h&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(a=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(o),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const ml=["read","resolveKeyframes","update","preRender","render","postRender"],jw=40;function Cy(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=ml.reduce((f,m)=>(f[m]=Xw(s),f),{}),{read:o,resolveKeyframes:l,update:c,preRender:u,render:h,postRender:d}=a,p=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,jw),1),r.timestamp=f,r.isProcessing=!0,o.process(r),l.process(r),c.process(r),u.process(r),h.process(r),d.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},v=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:ml.reduce((f,m)=>{const _=a[m];return f[m]=(y,E=!1,b=!1)=>(n||v(),_.schedule(y,E,b)),f},{}),cancel:f=>{for(let m=0;m<ml.length;m++)a[ml[m]].cancel(f)},state:r,steps:a}}const{schedule:xt,cancel:Ar,state:qt,steps:$u}=Cy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Fn,!0),Py=q.createContext({strict:!1}),Zg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ca={};for(const t in Zg)ca[t]={isEnabled:e=>Zg[t].some(n=>!!e[n])};function $w(t){for(const e in t)ca[e]={...ca[e],...t[e]}}const qw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Nc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||qw.has(t)}let Ly=t=>!Nc(t);function Yw(t){t&&(Ly=e=>e.startsWith("on")?!Nc(e):t(e))}try{Yw(require("@emotion/is-prop-valid").default)}catch{}function Kw(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(Ly(r)||n===!0&&Nc(r)||!e&&!Nc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Zw(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const fu=q.createContext({});function To(t){return typeof t=="string"||Array.isArray(t)}function hu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Up=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Fp=["initial",...Up];function pu(t){return hu(t.animate)||Fp.some(e=>To(t[e]))}function Dy(t){return!!(pu(t)||t.variants)}function Qw(t,e){if(pu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||To(n)?n:void 0,animate:To(i)?i:void 0}}return t.inherit!==!1?e:{}}function Jw(t){const{initial:e,animate:n}=Qw(t,q.useContext(fu));return q.useMemo(()=>({initial:e,animate:n}),[Qg(e),Qg(n)])}function Qg(t){return Array.isArray(t)?t.join(" "):t}const eT=Symbol.for("motionComponentSymbol");function Hs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function tT(t,e,n){return q.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Hs(n)&&(n.current=i))},[e])}const Op=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),nT="framerAppearId",Ny="data-"+Op(nT),{schedule:kp}=Cy(queueMicrotask,!1),Iy=q.createContext({});function iT(t,e,n,i,r){var s,a;const{visualElement:o}=q.useContext(fu),l=q.useContext(Py),c=q.useContext(uu),u=q.useContext(Dp).reducedMotion,h=q.useRef(null);i=i||l.renderer,!h.current&&i&&(h.current=i(t,{visualState:e,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=h.current,p=q.useContext(Iy);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&rT(h.current,n,r,p);const v=q.useRef(!1);q.useInsertionEffect(()=>{d&&v.current&&d.update(n,c)});const S=n[Ny],g=q.useRef(!!S&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,S))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,S)));return Ay(()=>{d&&(v.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),kp.render(d.render),g.current&&d.animationState&&d.animationState.animateChanges())}),q.useEffect(()=>{d&&(!g.current&&d.animationState&&d.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)===null||f===void 0||f.call(window,S)}),g.current=!1))}),d}function rT(t,e,n,i){const{layoutId:r,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Uy(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!a||o&&Hs(o),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Uy(t){if(t)return t.options.allowProjection!==!1?t.projection:Uy(t.parent)}function sT({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,a;t&&$w(t);function o(c,u){let h;const d={...q.useContext(Dp),...c,layoutId:aT(c)},{isStatic:p}=d,v=Jw(c),S=i(c,p);if(!p&&Np){oT();const g=lT(d);h=g.MeasureLayout,v.visualElement=iT(r,S,d,e,g.ProjectionNode)}return R.jsxs(fu.Provider,{value:v,children:[h&&v.visualElement?R.jsx(h,{visualElement:v.visualElement,...d}):null,n(r,c,tT(S,v.visualElement,u),S,p,v.visualElement)]})}o.displayName=`motion.${typeof r=="string"?r:`create(${(a=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&a!==void 0?a:""})`}`;const l=q.forwardRef(o);return l[eT]=r,l}function aT({layoutId:t}){const e=q.useContext(Pp).id;return e&&t!==void 0?e+"-"+t:t}function oT(t,e){q.useContext(Py).strict}function lT(t){const{drag:e,layout:n}=ca;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const cT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Bp(t){return typeof t!="string"||t.includes("-")?!1:!!(cT.indexOf(t)>-1||/[A-Z]/u.test(t))}function Jg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function zp(t,e,n,i){if(typeof e=="function"){const[r,s]=Jg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Jg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Lf=t=>Array.isArray(t),uT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),dT=t=>Lf(t)?t[t.length-1]||0:t,ln=t=>!!(t&&t.getVelocity);function Jl(t){const e=ln(t)?t.get():t;return uT(e)?e.toValue():e}function fT({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const a={latestValues:hT(i,r,s,t),renderState:e()};return n&&(a.onMount=o=>n({props:i,current:o,...a}),a.onUpdate=o=>n(o)),a}const Fy=t=>(e,n)=>{const i=q.useContext(fu),r=q.useContext(uu),s=()=>fT(t,e,i,r);return n?s():Lp(s)};function hT(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=Jl(s[d]);let{initial:a,animate:o}=t;const l=pu(t),c=Dy(t);e&&c&&!l&&t.inherit!==!1&&(a===void 0&&(a=e.initial),o===void 0&&(o=e.animate));let u=n?n.initial===!1:!1;u=u||a===!1;const h=u?o:a;if(h&&typeof h!="boolean"&&!hu(h)){const d=Array.isArray(h)?h:[h];for(let p=0;p<d.length;p++){const v=zp(t,d[p]);if(v){const{transitionEnd:S,transition:g,...f}=v;for(const m in f){let _=f[m];if(Array.isArray(_)){const y=u?_.length-1:0;_=_[y]}_!==null&&(r[m]=_)}for(const m in S)r[m]=S[m]}}}return r}const xa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ds=new Set(xa),Oy=t=>e=>typeof e=="string"&&e.startsWith(t),ky=Oy("--"),pT=Oy("var(--"),Vp=t=>pT(t)?mT.test(t.split("/*")[0].trim()):!1,mT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,By=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ki=(t,e,n)=>n>e?e:n<t?t:n,_a={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},bo={..._a,transform:t=>Ki(0,1,t)},gl={..._a,default:1},zo=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),or=zo("deg"),Mi=zo("%"),Oe=zo("px"),gT=zo("vh"),vT=zo("vw"),e0={...Mi,parse:t=>Mi.parse(t)/100,transform:t=>Mi.transform(t*100)},xT={borderWidth:Oe,borderTopWidth:Oe,borderRightWidth:Oe,borderBottomWidth:Oe,borderLeftWidth:Oe,borderRadius:Oe,radius:Oe,borderTopLeftRadius:Oe,borderTopRightRadius:Oe,borderBottomRightRadius:Oe,borderBottomLeftRadius:Oe,width:Oe,maxWidth:Oe,height:Oe,maxHeight:Oe,top:Oe,right:Oe,bottom:Oe,left:Oe,padding:Oe,paddingTop:Oe,paddingRight:Oe,paddingBottom:Oe,paddingLeft:Oe,margin:Oe,marginTop:Oe,marginRight:Oe,marginBottom:Oe,marginLeft:Oe,backgroundPositionX:Oe,backgroundPositionY:Oe},_T={rotate:or,rotateX:or,rotateY:or,rotateZ:or,scale:gl,scaleX:gl,scaleY:gl,scaleZ:gl,skew:or,skewX:or,skewY:or,distance:Oe,translateX:Oe,translateY:Oe,translateZ:Oe,x:Oe,y:Oe,z:Oe,perspective:Oe,transformPerspective:Oe,opacity:bo,originX:e0,originY:e0,originZ:Oe},t0={..._a,transform:Math.round},Hp={...xT,..._T,zIndex:t0,size:Oe,fillOpacity:bo,strokeOpacity:bo,numOctaves:t0},yT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ST=xa.length;function MT(t,e,n){let i="",r=!0;for(let s=0;s<ST;s++){const a=xa[s],o=t[a];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(a.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||n){const c=By(o,Hp[a]);if(!l){r=!1;const u=yT[a]||a;i+=`${u}(${c}) `}n&&(e[a]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Gp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let a=!1,o=!1;for(const l in e){const c=e[l];if(ds.has(l)){a=!0;continue}else if(ky(l)){r[l]=c;continue}else{const u=By(c,Hp[l]);l.startsWith("origin")?(o=!0,s[l]=u):i[l]=u}}if(e.transform||(a||n?i.transform=MT(e,t.transform,n):i.transform&&(i.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const ET={offset:"stroke-dashoffset",array:"stroke-dasharray"},wT={offset:"strokeDashoffset",array:"strokeDasharray"};function TT(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?ET:wT;t[s.offset]=Oe.transform(-i);const a=Oe.transform(e),o=Oe.transform(n);t[s.array]=`${a} ${o}`}function n0(t,e,n){return typeof t=="string"?t:Oe.transform(e+n*t)}function bT(t,e,n){const i=n0(e,t.x,t.width),r=n0(n,t.y,t.height);return`${i} ${r}`}function Wp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...c},u,h){if(Gp(t,c,h),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:p,dimensions:v}=t;d.transform&&(v&&(p.transform=d.transform),delete d.transform),v&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=bT(v,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),a!==void 0&&TT(d,a,o,l,!1)}const Xp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),zy=()=>({...Xp(),attrs:{}}),jp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Vy(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Hy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Gy(t,e,n,i){Vy(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Hy.has(r)?r:Op(r),e.attrs[r])}const Ic={};function AT(t){Object.assign(Ic,t)}function Wy(t,{layout:e,layoutId:n}){return ds.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ic[t]||t==="opacity")}function $p(t,e,n){var i;const{style:r}=t,s={};for(const a in r)(ln(r[a])||e.style&&ln(e.style[a])||Wy(a,t)||((i=n==null?void 0:n.getValue(a))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[a]=r[a]);return s}function Xy(t,e,n){const i=$p(t,e,n);for(const r in t)if(ln(t[r])||ln(e[r])){const s=xa.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function RT(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const i0=["x","y","width","height","cx","cy","r"],CT={useVisualState:Fy({scrapeMotionValuesFromProps:Xy,createRenderState:zy,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const o in r)if(ds.has(o)){s=!0;break}}if(!s)return;let a=!e;if(e)for(let o=0;o<i0.length;o++){const l=i0[o];t[l]!==e[l]&&(a=!0)}a&&xt.read(()=>{RT(n,i),xt.render(()=>{Wp(i,r,jp(n.tagName),t.transformTemplate),Gy(n,i)})})}})},PT={useVisualState:Fy({scrapeMotionValuesFromProps:$p,createRenderState:Xp})};function jy(t,e,n){for(const i in e)!ln(e[i])&&!Wy(i,n)&&(t[i]=e[i])}function LT({transformTemplate:t},e){return q.useMemo(()=>{const n=Xp();return Gp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function DT(t,e){const n=t.style||{},i={};return jy(i,n,t),Object.assign(i,LT(t,e)),i}function NT(t,e){const n={},i=DT(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function IT(t,e,n,i){const r=q.useMemo(()=>{const s=zy();return Wp(s,e,jp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};jy(s,t.style,t),r.style={...s,...r.style}}return r}function UT(t=!1){return(n,i,r,{latestValues:s},a)=>{const l=(Bp(n)?IT:NT)(i,s,a,n),c=Kw(i,typeof n=="string",t),u=n!==q.Fragment?{...c,...l,ref:r}:{},{children:h}=i,d=q.useMemo(()=>ln(h)?h.get():h,[h]);return q.createElement(n,{...u,children:d})}}function FT(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const a={...Bp(i)?CT:PT,preloadedFeatures:t,useRender:UT(r),createVisualElement:e,Component:i};return sT(a)}}function $y(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function mu(t,e,n){const i=t.getProps();return zp(i,e,n!==void 0?n:i.custom,t)}const OT=Ip(()=>window.ScrollTimeline!==void 0);class kT{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(OT()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class BT extends kT{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function qp(t,e){return t?t[e]||t.default||t:void 0}const Df=2e4;function qy(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Df;)e+=n,i=t.next(e);return e>=Df?1/0:e}function Yp(t){return typeof t=="function"}function r0(t,e){t.timeline=e,t.onfinish=null}const Kp=t=>Array.isArray(t)&&typeof t[0]=="number",zT={linearEasing:void 0};function VT(t,e){const n=Ip(t);return()=>{var i;return(i=zT[e])!==null&&i!==void 0?i:n()}}const Uc=VT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Yy=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(la(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function Ky(t){return!!(typeof t=="function"&&Uc()||!t||typeof t=="string"&&(t in Nf||Uc())||Kp(t)||Array.isArray(t)&&t.every(Ky))}const Ha=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Nf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ha([0,.65,.55,1]),circOut:Ha([.55,0,1,.45]),backIn:Ha([.31,.01,.66,-.59]),backOut:Ha([.33,1.53,.69,.99])};function Zy(t,e){if(t)return typeof t=="function"&&Uc()?Yy(t,e):Kp(t)?Ha(t):Array.isArray(t)?t.map(n=>Zy(n,e)||Nf.easeOut):Nf[t]}const ni={x:!1,y:!1};function Qy(){return ni.x||ni.y}function HT(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function Jy(t,e){const n=HT(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function s0(t){return e=>{e.pointerType==="touch"||Qy()||t(e)}}function GT(t,e,n={}){const[i,r,s]=Jy(t,n),a=s0(o=>{const{target:l}=o,c=e(o);if(typeof c!="function"||!l)return;const u=s0(h=>{c(h),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(o=>{o.addEventListener("pointerenter",a,r)}),s}const eS=(t,e)=>e?t===e?!0:eS(t,e.parentElement):!1,Zp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,WT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function XT(t){return WT.has(t.tagName)||t.tabIndex!==-1}const Ga=new WeakSet;function a0(t){return e=>{e.key==="Enter"&&t(e)}}function qu(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const jT=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=a0(()=>{if(Ga.has(n))return;qu(n,"down");const r=a0(()=>{qu(n,"up")}),s=()=>qu(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function o0(t){return Zp(t)&&!Qy()}function $T(t,e,n={}){const[i,r,s]=Jy(t,n),a=o=>{const l=o.currentTarget;if(!o0(o)||Ga.has(l))return;Ga.add(l);const c=e(o),u=(p,v)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",d),!(!o0(p)||!Ga.has(l))&&(Ga.delete(l),typeof c=="function"&&c(p,{success:v}))},h=p=>{u(p,n.useGlobalTarget||eS(l,p.target))},d=p=>{u(p,!1)};window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",d,r)};return i.forEach(o=>{!XT(o)&&o.getAttribute("tabindex")===null&&(o.tabIndex=0),(n.useGlobalTarget?window:o).addEventListener("pointerdown",a,r),o.addEventListener("focus",c=>jT(c,r),r)}),s}function qT(t){return t==="x"||t==="y"?ni[t]?null:(ni[t]=!0,()=>{ni[t]=!1}):ni.x||ni.y?null:(ni.x=ni.y=!0,()=>{ni.x=ni.y=!1})}const tS=new Set(["width","height","top","left","right","bottom",...xa]);let ec;function YT(){ec=void 0}const Ei={now:()=>(ec===void 0&&Ei.set(qt.isProcessing||Ww.useManualTiming?qt.timestamp:performance.now()),ec),set:t=>{ec=t,queueMicrotask(YT)}};function Qp(t,e){t.indexOf(e)===-1&&t.push(e)}function Jp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class em{constructor(){this.subscriptions=[]}add(e){return Qp(this.subscriptions,e),()=>Jp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const a=this.subscriptions[s];a&&a(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function nS(t,e){return e?t*(1e3/e):0}const l0=30,KT=t=>!isNaN(parseFloat(t));class ZT{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=Ei.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Ei.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=KT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new em);const i=this.events[e].add(n);return e==="change"?()=>{i(),xt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ei.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>l0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,l0);return nS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ao(t,e){return new ZT(t,e)}function QT(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ao(n))}function JT(t,e){const n=mu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const a in s){const o=dT(s[a]);QT(t,a,o)}}function eb(t){return!!(ln(t)&&t.add)}function If(t,e){const n=t.getValue("willChange");if(eb(n))return n.add(e)}function iS(t){return t.props[Ny]}const rS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,tb=1e-7,nb=12;function ib(t,e,n,i,r){let s,a,o=0;do a=e+(n-e)/2,s=rS(a,i,r)-t,s>0?n=a:e=a;while(Math.abs(s)>tb&&++o<nb);return a}function Vo(t,e,n,i){if(t===e&&n===i)return Fn;const r=s=>ib(s,0,1,t,n);return s=>s===0||s===1?s:rS(r(s),e,i)}const sS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,aS=t=>e=>1-t(1-e),oS=Vo(.33,1.53,.69,.99),tm=aS(oS),lS=sS(tm),cS=t=>(t*=2)<1?.5*tm(t):.5*(2-Math.pow(2,-10*(t-1))),nm=t=>1-Math.sin(Math.acos(t)),uS=aS(nm),dS=sS(nm),fS=t=>/^0[^.\s]+$/u.test(t);function rb(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||fS(t):!0}const no=t=>Math.round(t*1e5)/1e5,im=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function sb(t){return t==null}const ab=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,rm=(t,e)=>n=>!!(typeof n=="string"&&ab.test(n)&&n.startsWith(t)||e&&!sb(n)&&Object.prototype.hasOwnProperty.call(n,e)),hS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,a,o]=i.match(im);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},ob=t=>Ki(0,255,t),Yu={..._a,transform:t=>Math.round(ob(t))},Yr={test:rm("rgb","red"),parse:hS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Yu.transform(t)+", "+Yu.transform(e)+", "+Yu.transform(n)+", "+no(bo.transform(i))+")"};function lb(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Uf={test:rm("#"),parse:lb,transform:Yr.transform},Gs={test:rm("hsl","hue"),parse:hS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Mi.transform(no(e))+", "+Mi.transform(no(n))+", "+no(bo.transform(i))+")"},sn={test:t=>Yr.test(t)||Uf.test(t)||Gs.test(t),parse:t=>Yr.test(t)?Yr.parse(t):Gs.test(t)?Gs.parse(t):Uf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Yr.transform(t):Gs.transform(t)},cb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ub(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(im))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(cb))===null||n===void 0?void 0:n.length)||0)>0}const pS="number",mS="color",db="var",fb="var(",c0="${}",hb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ro(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const o=e.replace(hb,l=>(sn.test(l)?(i.color.push(s),r.push(mS),n.push(sn.parse(l))):l.startsWith(fb)?(i.var.push(s),r.push(db),n.push(l)):(i.number.push(s),r.push(pS),n.push(parseFloat(l))),++s,c0)).split(c0);return{values:n,split:o,indexes:i,types:r}}function gS(t){return Ro(t).values}function vS(t){const{split:e,types:n}=Ro(t),i=e.length;return r=>{let s="";for(let a=0;a<i;a++)if(s+=e[a],r[a]!==void 0){const o=n[a];o===pS?s+=no(r[a]):o===mS?s+=sn.transform(r[a]):s+=r[a]}return s}}const pb=t=>typeof t=="number"?0:t;function mb(t){const e=gS(t);return vS(t)(e.map(pb))}const Rr={test:ub,parse:gS,createTransformer:vS,getAnimatableNone:mb},gb=new Set(["brightness","contrast","saturate","opacity"]);function vb(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(im)||[];if(!i)return t;const r=n.replace(i,"");let s=gb.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const xb=/\b([a-z-]*)\(.*?\)/gu,Ff={...Rr,getAnimatableNone:t=>{const e=t.match(xb);return e?e.map(vb).join(" "):t}},_b={...Hp,color:sn,backgroundColor:sn,outlineColor:sn,fill:sn,stroke:sn,borderColor:sn,borderTopColor:sn,borderRightColor:sn,borderBottomColor:sn,borderLeftColor:sn,filter:Ff,WebkitFilter:Ff},sm=t=>_b[t];function xS(t,e){let n=sm(t);return n!==Ff&&(n=Rr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const yb=new Set(["auto","none","0"]);function Sb(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!yb.has(s)&&Ro(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=xS(n,r)}const u0=t=>t===_a||t===Oe,d0=(t,e)=>parseFloat(t.split(", ")[e]),f0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return d0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?d0(s[1],t):0}},Mb=new Set(["x","y","z"]),Eb=xa.filter(t=>!Mb.has(t));function wb(t){const e=[];return Eb.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const ua={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:f0(4,13),y:f0(5,14)};ua.translateX=ua.x;ua.translateY=ua.y;const Qr=new Set;let Of=!1,kf=!1;function _S(){if(kf){const t=Array.from(Qr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=wb(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,a])=>{var o;(o=i.getValue(s))===null||o===void 0||o.set(a)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}kf=!1,Of=!1,Qr.forEach(t=>t.complete()),Qr.clear()}function yS(){Qr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(kf=!0)})}function Tb(){yS(),_S()}class am{constructor(e,n,i,r,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Qr.add(this),Of||(Of=!0,xt.read(yS),xt.resolveKeyframes(_S))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const a=r==null?void 0:r.get(),o=e[e.length-1];if(a!==void 0)e[0]=a;else if(i&&n){const l=i.readValue(n,o);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=o),r&&a===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Qr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Qr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const SS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),bb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Ab(t){const e=bb.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function MS(t,e,n=1){const[i,r]=Ab(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const a=s.trim();return SS(a)?parseFloat(a):a}return Vp(r)?MS(r,e,n+1):r}const ES=t=>e=>e.test(t),Rb={test:t=>t==="auto",parse:t=>t},wS=[_a,Oe,Mi,or,vT,gT,Rb],h0=t=>wS.find(ES(t));class TS extends am{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Vp(c))){const u=MS(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!tS.has(i)||e.length!==2)return;const[r,s]=e,a=h0(r),o=h0(s);if(a!==o)if(u0(a)&&u0(o))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)rb(e[r])&&i.push(r);i.length&&Sb(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ua[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const a=r.length-1,o=r[a];r[a]=ua[i](n.measureViewportBox(),window.getComputedStyle(n.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const p0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Rr.test(t)||t==="0")&&!t.startsWith("url("));function Cb(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Pb(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],a=p0(r,e),o=p0(s,e);return!a||!o?!1:Cb(t)||(n==="spring"||Yp(n))&&i}const Lb=t=>t!==null;function gu(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(Lb),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const Db=40;class bS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:a="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ei.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:a,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Db?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Tb(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Ei.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:a,onComplete:o,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Pb(e,i,r,s))if(a)this.options.duration=0;else{l&&l(gu(e,this.options,n)),o&&o(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Mt=(t,e,n)=>t+(e-t)*n;function Ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Nb({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,a=0;if(!e)r=s=a=n;else{const o=n<.5?n*(1+e):n+e-n*e,l=2*n-o;r=Ku(l,o,t+1/3),s=Ku(l,o,t),a=Ku(l,o,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:i}}function Fc(t,e){return n=>n>0?e:t}const Zu=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},Ib=[Uf,Yr,Gs],Ub=t=>Ib.find(e=>e.test(t));function m0(t){const e=Ub(t);if(!e)return!1;let n=e.parse(t);return e===Gs&&(n=Nb(n)),n}const g0=(t,e)=>{const n=m0(t),i=m0(e);if(!n||!i)return Fc(t,e);const r={...n};return s=>(r.red=Zu(n.red,i.red,s),r.green=Zu(n.green,i.green,s),r.blue=Zu(n.blue,i.blue,s),r.alpha=Mt(n.alpha,i.alpha,s),Yr.transform(r))},Fb=(t,e)=>n=>e(t(n)),Ho=(...t)=>t.reduce(Fb),Bf=new Set(["none","hidden"]);function Ob(t,e){return Bf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function kb(t,e){return n=>Mt(t,e,n)}function om(t){return typeof t=="number"?kb:typeof t=="string"?Vp(t)?Fc:sn.test(t)?g0:Vb:Array.isArray(t)?AS:typeof t=="object"?sn.test(t)?g0:Bb:Fc}function AS(t,e){const n=[...t],i=n.length,r=t.map((s,a)=>om(s)(s,e[a]));return s=>{for(let a=0;a<i;a++)n[a]=r[a](s);return n}}function Bb(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=om(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function zb(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const a=e.types[s],o=t.indexes[a][r[a]],l=(n=t.values[o])!==null&&n!==void 0?n:0;i[s]=l,r[a]++}return i}const Vb=(t,e)=>{const n=Rr.createTransformer(e),i=Ro(t),r=Ro(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Bf.has(t)&&!r.values.length||Bf.has(e)&&!i.values.length?Ob(t,e):Ho(AS(zb(i,r),r.values),n):Fc(t,e)};function RS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Mt(t,e,n):om(t)(t,e)}const Hb=5;function CS(t,e,n){const i=Math.max(e-Hb,0);return nS(n-t(i),e-i)}const Rt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Qu=.001;function Gb({duration:t=Rt.duration,bounce:e=Rt.bounce,velocity:n=Rt.velocity,mass:i=Rt.mass}){let r,s,a=1-e;a=Ki(Rt.minDamping,Rt.maxDamping,a),t=Ki(Rt.minDuration,Rt.maxDuration,Hi(t)),a<1?(r=c=>{const u=c*a,h=u*t,d=u-n,p=zf(c,a),v=Math.exp(-h);return Qu-d/p*v},s=c=>{const h=c*a*t,d=h*n+n,p=Math.pow(a,2)*Math.pow(c,2)*t,v=Math.exp(-h),S=zf(Math.pow(c,2),a);return(-r(c)+Qu>0?-1:1)*((d-p)*v)/S}):(r=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-Qu+u*h},s=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const o=5/t,l=Xb(r,s,o);if(t=Vi(t),isNaN(l))return{stiffness:Rt.stiffness,damping:Rt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:t}}}const Wb=12;function Xb(t,e,n){let i=n;for(let r=1;r<Wb;r++)i=i-t(i)/e(i);return i}function zf(t,e){return t*Math.sqrt(1-e*e)}const jb=["duration","bounce"],$b=["stiffness","damping","mass"];function v0(t,e){return e.some(n=>t[n]!==void 0)}function qb(t){let e={velocity:Rt.velocity,stiffness:Rt.stiffness,damping:Rt.damping,mass:Rt.mass,isResolvedFromDuration:!1,...t};if(!v0(t,$b)&&v0(t,jb))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ki(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Rt.mass,stiffness:r,damping:s}}else{const n=Gb(t);e={...e,...n,mass:Rt.mass},e.isResolvedFromDuration=!0}return e}function PS(t=Rt.visualDuration,e=Rt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:h,velocity:d,isResolvedFromDuration:p}=qb({...n,velocity:-Hi(n.velocity||0)}),v=d||0,S=c/(2*Math.sqrt(l*u)),g=a-s,f=Hi(Math.sqrt(l/u)),m=Math.abs(g)<5;i||(i=m?Rt.restSpeed.granular:Rt.restSpeed.default),r||(r=m?Rt.restDelta.granular:Rt.restDelta.default);let _;if(S<1){const E=zf(f,S);_=b=>{const x=Math.exp(-S*f*b);return a-x*((v+S*f*g)/E*Math.sin(E*b)+g*Math.cos(E*b))}}else if(S===1)_=E=>a-Math.exp(-f*E)*(g+(v+f*g)*E);else{const E=f*Math.sqrt(S*S-1);_=b=>{const x=Math.exp(-S*f*b),M=Math.min(E*b,300);return a-x*((v+S*f*g)*Math.sinh(M)+E*g*Math.cosh(M))/E}}const y={calculatedDuration:p&&h||null,next:E=>{const b=_(E);if(p)o.done=E>=h;else{let x=0;S<1&&(x=E===0?Vi(v):CS(_,E,b));const M=Math.abs(x)<=i,F=Math.abs(a-b)<=r;o.done=M&&F}return o.value=o.done?a:b,o},toString:()=>{const E=Math.min(qy(y),Df),b=Yy(x=>y.next(E*x).value,E,30);return E+"ms "+b}};return y}function x0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:u}){const h=t[0],d={done:!1,value:h},p=M=>o!==void 0&&M<o||l!==void 0&&M>l,v=M=>o===void 0?l:l===void 0||Math.abs(o-M)<Math.abs(l-M)?o:l;let S=n*e;const g=h+S,f=a===void 0?g:a(g);f!==g&&(S=f-h);const m=M=>-S*Math.exp(-M/i),_=M=>f+m(M),y=M=>{const F=m(M),L=_(M);d.done=Math.abs(F)<=c,d.value=d.done?f:L};let E,b;const x=M=>{p(d.value)&&(E=M,b=PS({keyframes:[d.value,v(d.value)],velocity:CS(_,M,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return x(0),{calculatedDuration:null,next:M=>{let F=!1;return!b&&E===void 0&&(F=!0,y(M),x(M)),E!==void 0&&M>=E?b.next(M-E):(!F&&y(M),d)}}}const Yb=Vo(.42,0,1,1),Kb=Vo(0,0,.58,1),LS=Vo(.42,0,.58,1),Zb=t=>Array.isArray(t)&&typeof t[0]!="number",Qb={linear:Fn,easeIn:Yb,easeInOut:LS,easeOut:Kb,circIn:nm,circInOut:dS,circOut:uS,backIn:tm,backInOut:lS,backOut:oS,anticipate:cS},_0=t=>{if(Kp(t)){Ry(t.length===4);const[e,n,i,r]=t;return Vo(e,n,i,r)}else if(typeof t=="string")return Qb[t];return t};function Jb(t,e,n){const i=[],r=n||RS,s=t.length-1;for(let a=0;a<s;a++){let o=r(t[a],t[a+1]);if(e){const l=Array.isArray(e)?e[a]||Fn:e;o=Ho(l,o)}i.push(o)}return i}function eA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Ry(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const a=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=Jb(e,i,r),l=o.length,c=u=>{if(a&&u<t[0])return e[0];let h=0;if(l>1)for(;h<t.length-2&&!(u<t[h+1]);h++);const d=la(t[h],t[h+1],u);return o[h](d)};return n?u=>c(Ki(t[0],t[s-1],u)):c}function tA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=la(0,e,i);t.push(Mt(n,1,r))}}function nA(t){const e=[0];return tA(e,t.length-1),e}function iA(t,e){return t.map(n=>n*e)}function rA(t,e){return t.map(()=>e||LS).splice(0,t.length-1)}function Oc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=Zb(i)?i.map(_0):_0(i),s={done:!1,value:e[0]},a=iA(n&&n.length===e.length?n:nA(e),t),o=eA(a,e,{ease:Array.isArray(r)?r:rA(e,r)});return{calculatedDuration:t,next:l=>(s.value=o(l),s.done=l>=t,s)}}const sA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>xt.update(e,!0),stop:()=>Ar(e),now:()=>qt.isProcessing?qt.timestamp:Ei.now()}},aA={decay:x0,inertia:x0,tween:Oc,keyframes:Oc,spring:PS},oA=t=>t/100;class lm extends bS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,a=(r==null?void 0:r.KeyframeResolver)||am,o=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new a(s,o,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:a=0}=this.options,o=Yp(n)?n:aA[n]||Oc;let l,c;o!==Oc&&typeof e[0]!="number"&&(l=Ho(oA,RS(e[0],e[1])),e=[0,100]);const u=o({...this.options,keyframes:e});s==="mirror"&&(c=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),u.calculatedDuration===null&&(u.calculatedDuration=qy(u));const{calculatedDuration:h}=u,d=h+r,p=d*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:d,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:M}=this.options;return{done:!0,value:M[M.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:h}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:p,repeatType:v,repeatDelay:S,onUpdate:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const f=this.currentTime-d*(this.speed>=0?1:-1),m=this.speed>=0?f<0:f>u;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let _=this.currentTime,y=s;if(p){const M=Math.min(this.currentTime,u)/h;let F=Math.floor(M),L=M%1;!L&&M>=1&&(L=1),L===1&&F--,F=Math.min(F,p+1),!!(F%2)&&(v==="reverse"?(L=1-L,S&&(L-=S/h)):v==="mirror"&&(y=a)),_=Ki(0,1,L)*h}const E=m?{done:!1,value:l[0]}:y.next(_);o&&(E.value=o(E.value));let{done:b}=E;!m&&c!==null&&(b=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const x=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return x&&r!==void 0&&(E.value=gu(l,this.options,r)),g&&g(E.value),x&&this.finish(),E}get duration(){const{resolved:e}=this;return e?Hi(e.calculatedDuration):0}get time(){return Hi(this.currentTime)}set time(e){e=Vi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Hi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=sA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const lA=new Set(["opacity","clipPath","filter","transform"]);function cA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:a="loop",ease:o="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Zy(o,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const uA=Ip(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),kc=10,dA=2e4;function fA(t){return Yp(t.type)||t.type==="spring"||!Ky(t.ease)}function hA(t,e){const n=new lm({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<dA;)i=n.sample(s),r.push(i.value),s+=kc;return{times:void 0,keyframes:r,duration:s-kc,ease:"linear"}}const DS={anticipate:cS,backInOut:lS,circInOut:dS};function pA(t){return t in DS}class y0 extends bS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new TS(s,(a,o)=>this.onKeyframesResolved(a,o),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:a,motionValue:o,name:l,startTime:c}=this.options;if(!o.owner||!o.owner.current)return!1;if(typeof s=="string"&&Uc()&&pA(s)&&(s=DS[s]),fA(this.options)){const{onComplete:h,onUpdate:d,motionValue:p,element:v,...S}=this.options,g=hA(e,S);e=g.keyframes,e.length===1&&(e[1]=e[0]),i=g.duration,r=g.times,s=g.ease,a="keyframes"}const u=cA(o.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(r0(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:h}=this.options;o.set(gu(e,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:a,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Hi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Hi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Vi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Fn;const{animation:i}=n;r0(i,e)}return Fn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:a,times:o}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:h,element:d,...p}=this.options,v=new lm({...p,keyframes:i,duration:r,type:s,ease:a,times:o,isGenerator:!0}),S=Vi(this.time);c.setWithVelocity(v.sample(S-kc).value,v.sample(S).value,kc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:a,type:o}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return uA()&&i&&lA.has(i)&&!l&&!c&&!r&&s!=="mirror"&&a!==0&&o!=="inertia"}}const mA={type:"spring",stiffness:500,damping:25,restSpeed:10},gA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),vA={type:"keyframes",duration:.8},xA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},_A=(t,{keyframes:e})=>e.length>2?vA:ds.has(t)?t.startsWith("scale")?gA(e[1]):mA:xA;function yA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const cm=(t,e,n,i={},r,s)=>a=>{const o=qp(i,t)||{},l=o.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Vi(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-c,onUpdate:d=>{e.set(d),o.onUpdate&&o.onUpdate(d)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:t,motionValue:e,element:s?void 0:r};yA(o)||(u={...u,..._A(t,u)}),u.duration&&(u.duration=Vi(u.duration)),u.repeatDelay&&(u.repeatDelay=Vi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(h=!0)),h&&!s&&e.get()!==void 0){const d=gu(u.keyframes,o);if(d!==void 0)return xt.update(()=>{u.onUpdate(d),u.onComplete()}),new BT([])}return!s&&y0.supports(u)?new y0(u):new lm(u)};function SA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function NS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:a=t.getDefaultTransition(),transitionEnd:o,...l}=e;i&&(a=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const h in l){const d=t.getValue(h,(s=t.latestValues[h])!==null&&s!==void 0?s:null),p=l[h];if(p===void 0||u&&SA(u,h))continue;const v={delay:n,...qp(a||{},h)};let S=!1;if(window.MotionHandoffAnimation){const f=iS(t);if(f){const m=window.MotionHandoffAnimation(f,h,xt);m!==null&&(v.startTime=m,S=!0)}}If(t,h),d.start(cm(h,d,p,t.shouldReduceMotion&&tS.has(h)?{type:!1}:v,t,S));const g=d.animation;g&&c.push(g)}return o&&Promise.all(c).then(()=>{xt.update(()=>{o&&JT(t,o)})}),c}function Vf(t,e,n={}){var i;const r=mu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const a=r?()=>Promise.all(NS(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=s;return MA(t,e,u+c,h,d,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[a,o]:[o,a];return c().then(()=>u())}else return Promise.all([a(),o(n.delay)])}function MA(t,e,n=0,i=0,r=1,s){const a=[],o=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>o-c*i;return Array.from(t.variantChildren).sort(EA).forEach((c,u)=>{c.notify("AnimationStart",e),a.push(Vf(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(a)}function EA(t,e){return t.sortNodePosition(e)}function wA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Vf(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Vf(t,e,n);else{const r=typeof e=="function"?mu(t,e,n.custom):e;i=Promise.all(NS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const TA=Fp.length;function IS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?IS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<TA;n++){const i=Fp[n],r=t.props[i];(To(r)||r===!1)&&(e[i]=r)}return e}const bA=[...Up].reverse(),AA=Up.length;function RA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>wA(t,n,i)))}function CA(t){let e=RA(t),n=S0(),i=!0;const r=l=>(c,u)=>{var h;const d=mu(t,u,l==="exit"?(h=t.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(d){const{transition:p,transitionEnd:v,...S}=d;c={...c,...S,...v}}return c};function s(l){e=l(t)}function a(l){const{props:c}=t,u=IS(t.parent)||{},h=[],d=new Set;let p={},v=1/0;for(let g=0;g<AA;g++){const f=bA[g],m=n[f],_=c[f]!==void 0?c[f]:u[f],y=To(_),E=f===l?m.isActive:null;E===!1&&(v=g);let b=_===u[f]&&_!==c[f]&&y;if(b&&i&&t.manuallyAnimateOnMount&&(b=!1),m.protectedKeys={...p},!m.isActive&&E===null||!_&&!m.prevProp||hu(_)||typeof _=="boolean")continue;const x=PA(m.prevProp,_);let M=x||f===l&&m.isActive&&!b&&y||g>v&&y,F=!1;const L=Array.isArray(_)?_:[_];let N=L.reduce(r(f),{});E===!1&&(N={});const{prevResolvedValues:U={}}=m,H={...U,...N},D=k=>{M=!0,d.has(k)&&(F=!0,d.delete(k)),m.needsAnimating[k]=!0;const V=t.getValue(k);V&&(V.liveStyle=!1)};for(const k in H){const V=N[k],B=U[k];if(p.hasOwnProperty(k))continue;let C=!1;Lf(V)&&Lf(B)?C=!$y(V,B):C=V!==B,C?V!=null?D(k):d.add(k):V!==void 0&&d.has(k)?D(k):m.protectedKeys[k]=!0}m.prevProp=_,m.prevResolvedValues=N,m.isActive&&(p={...p,...N}),i&&t.blockInitialAnimation&&(M=!1),M&&(!(b&&x)||F)&&h.push(...L.map(k=>({animation:k,options:{type:f}})))}if(d.size){const g={};d.forEach(f=>{const m=t.getBaseTarget(f),_=t.getValue(f);_&&(_.liveStyle=!0),g[f]=m??null}),h.push({animation:g})}let S=!!h.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(S=!1),i=!1,S?e(h):Promise.resolve()}function o(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(d=>{var p;return(p=d.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const h=a(l);for(const d in n)n[d].protectedKeys={};return h}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>n,reset:()=>{n=S0(),i=!0}}}function PA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!$y(e,t):!1}function Or(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function S0(){return{animate:Or(!0),whileInView:Or(),whileHover:Or(),whileTap:Or(),whileDrag:Or(),whileFocus:Or(),exit:Or()}}class Nr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class LA extends Nr{constructor(e){super(e),e.animationState||(e.animationState=CA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();hu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let DA=0;class NA extends Nr{constructor(){super(...arguments),this.id=DA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const IA={animation:{Feature:LA},exit:{Feature:NA}};function Co(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Go(t){return{point:{x:t.pageX,y:t.pageY}}}const UA=t=>e=>Zp(e)&&t(e,Go(e));function io(t,e,n,i){return Co(t,e,UA(n),i)}const M0=(t,e)=>Math.abs(t-e);function FA(t,e){const n=M0(t.x,e.x),i=M0(t.y,e.y);return Math.sqrt(n**2+i**2)}class US{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=ed(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=FA(h.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:v}=h,{timestamp:S}=qt;this.history.push({...v,timestamp:S});const{onStart:g,onMove:f}=this.handlers;d||(g&&g(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,h)},this.handlePointerMove=(h,d)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Ju(d,this.transformPagePoint),xt.update(this.updatePoint,!0)},this.handlePointerUp=(h,d)=>{this.end();const{onEnd:p,onSessionEnd:v,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=ed(h.type==="pointercancel"?this.lastMoveEventInfo:Ju(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(h,g),v&&v(h,g)},!Zp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const a=Go(e),o=Ju(a,this.transformPagePoint),{point:l}=o,{timestamp:c}=qt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,ed(o,this.history)),this.removeListeners=Ho(io(this.contextWindow,"pointermove",this.handlePointerMove),io(this.contextWindow,"pointerup",this.handlePointerUp),io(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ar(this.updatePoint)}}function Ju(t,e){return e?{point:e(t.point)}:t}function E0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ed({point:t},e){return{point:t,delta:E0(t,FS(e)),offset:E0(t,OA(e)),velocity:kA(e,.1)}}function OA(t){return t[0]}function FS(t){return t[t.length-1]}function kA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=FS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Vi(e)));)n--;if(!i)return{x:0,y:0};const s=Hi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const a={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const OS=1e-4,BA=1-OS,zA=1+OS,kS=.01,VA=0-kS,HA=0+kS;function kn(t){return t.max-t.min}function GA(t,e,n){return Math.abs(t-e)<=n}function w0(t,e,n,i=.5){t.origin=i,t.originPoint=Mt(e.min,e.max,t.origin),t.scale=kn(n)/kn(e),t.translate=Mt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=BA&&t.scale<=zA||isNaN(t.scale))&&(t.scale=1),(t.translate>=VA&&t.translate<=HA||isNaN(t.translate))&&(t.translate=0)}function ro(t,e,n,i){w0(t.x,e.x,n.x,i?i.originX:void 0),w0(t.y,e.y,n.y,i?i.originY:void 0)}function T0(t,e,n){t.min=n.min+e.min,t.max=t.min+kn(e)}function WA(t,e,n){T0(t.x,e.x,n.x),T0(t.y,e.y,n.y)}function b0(t,e,n){t.min=e.min-n.min,t.max=t.min+kn(e)}function so(t,e,n){b0(t.x,e.x,n.x),b0(t.y,e.y,n.y)}function XA(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?Mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?Mt(n,t,i.max):Math.min(t,n)),t}function A0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function jA(t,{top:e,left:n,bottom:i,right:r}){return{x:A0(t.x,n,r),y:A0(t.y,e,i)}}function R0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function $A(t,e){return{x:R0(t.x,e.x),y:R0(t.y,e.y)}}function qA(t,e){let n=.5;const i=kn(t),r=kn(e);return r>i?n=la(e.min,e.max-i,t.min):i>r&&(n=la(t.min,t.max-r,e.min)),Ki(0,1,n)}function YA(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Hf=.35;function KA(t=Hf){return t===!1?t=0:t===!0&&(t=Hf),{x:C0(t,"left","right"),y:C0(t,"top","bottom")}}function C0(t,e,n){return{min:P0(t,e),max:P0(t,n)}}function P0(t,e){return typeof t=="number"?t:t[e]||0}const L0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ws=()=>({x:L0(),y:L0()}),D0=()=>({min:0,max:0}),Pt=()=>({x:D0(),y:D0()});function Gn(t){return[t("x"),t("y")]}function BS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function ZA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function QA(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function td(t){return t===void 0||t===1}function Gf({scale:t,scaleX:e,scaleY:n}){return!td(t)||!td(e)||!td(n)}function Wr(t){return Gf(t)||zS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function zS(t){return N0(t.x)||N0(t.y)}function N0(t){return t&&t!=="0%"}function Bc(t,e,n){const i=t-n,r=e*i;return n+r}function I0(t,e,n,i,r){return r!==void 0&&(t=Bc(t,r,i)),Bc(t,n,i)+e}function Wf(t,e=0,n=1,i,r){t.min=I0(t.min,e,n,i,r),t.max=I0(t.max,e,n,i,r)}function VS(t,{x:e,y:n}){Wf(t.x,e.translate,e.scale,e.originPoint),Wf(t.y,n.translate,n.scale,n.originPoint)}const U0=.999999999999,F0=1.0000000000001;function JA(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,a;for(let o=0;o<r;o++){s=n[o],a=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&js(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(e.x*=a.x.scale,e.y*=a.y.scale,VS(t,a)),i&&Wr(s.latestValues)&&js(t,s.latestValues))}e.x<F0&&e.x>U0&&(e.x=1),e.y<F0&&e.y>U0&&(e.y=1)}function Xs(t,e){t.min=t.min+e,t.max=t.max+e}function O0(t,e,n,i,r=.5){const s=Mt(t.min,t.max,r);Wf(t,e,n,s,i)}function js(t,e){O0(t.x,e.x,e.scaleX,e.scale,e.originX),O0(t.y,e.y,e.scaleY,e.scale,e.originY)}function HS(t,e){return BS(QA(t.getBoundingClientRect(),e))}function eR(t,e,n){const i=HS(t,n),{scroll:r}=e;return r&&(Xs(i.x,r.offset.x),Xs(i.y,r.offset.y)),i}const GS=({current:t})=>t?t.ownerDocument.defaultView:null,tR=new WeakMap;class nR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Pt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Go(u).point)},s=(u,h)=>{const{drag:d,dragPropagation:p,onDragStart:v}=this.getProps();if(d&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=qT(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gn(g=>{let f=this.getAxisMotionValue(g).get()||0;if(Mi.test(f)){const{projection:m}=this.visualElement;if(m&&m.layout){const _=m.layout.layoutBox[g];_&&(f=kn(_)*(parseFloat(f)/100))}}this.originPoint[g]=f}),v&&xt.postRender(()=>v(u,h)),If(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},a=(u,h)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:v,onDrag:S}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:g}=h;if(p&&this.currentDirection===null){this.currentDirection=iR(g),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",h.point,g),this.updateAxis("y",h.point,g),this.visualElement.render(),S&&S(u,h)},o=(u,h)=>this.stop(u,h),l=()=>Gn(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new US(e,{onSessionStart:r,onStart:s,onMove:a,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:GS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&xt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!vl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let a=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(a=XA(a,this.constraints[e],this.elastic[e])),s.set(a)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Hs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=jA(r.layoutBox,n):this.constraints=!1,this.elastic=KA(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Gn(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=YA(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Hs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=eR(i,r.root,this.visualElement.getTransformPagePoint());let a=$A(r.layout.layoutBox,s);if(n){const o=n(ZA(a));this.hasMutatedConstraints=!!o,o&&(a=BS(o))}return a}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=Gn(u=>{if(!vl(u,n,this.currentDirection))return;let h=l&&l[u]||{};a&&(h={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(o)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return If(this.visualElement,e),i.start(cm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Gn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Gn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Gn(n=>{const{drag:i}=this.getProps();if(!vl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:a,max:o}=r.layout.layoutBox[n];s.set(e[n]-Mt(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Hs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Gn(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();r[a]=qA({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Gn(a=>{if(!vl(a,e,null))return;const o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(Mt(l,c,r[a]))})}addListeners(){if(!this.visualElement.current)return;tR.set(this.visualElement,this);const e=this.visualElement.current,n=io(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Hs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),xt.read(i);const a=Co(window,"resize",()=>this.scalePositionWithinConstraints()),o=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Gn(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:a=Hf,dragMomentum:o=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function vl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function iR(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class rR extends Nr{constructor(e){super(e),this.removeGroupControls=Fn,this.removeListeners=Fn,this.controls=new nR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Fn}unmount(){this.removeGroupControls(),this.removeListeners()}}const k0=t=>(e,n)=>{t&&xt.postRender(()=>t(e,n))};class sR extends Nr{constructor(){super(...arguments),this.removePointerDownListener=Fn}onPointerDown(e){this.session=new US(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:GS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:k0(e),onStart:k0(n),onMove:i,onEnd:(s,a)=>{delete this.session,r&&xt.postRender(()=>r(s,a))}}}mount(){this.removePointerDownListener=io(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const tc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function B0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const La={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Oe.test(t))t=parseFloat(t);else return t;const n=B0(t,e.target.x),i=B0(t,e.target.y);return`${n}% ${i}%`}},aR={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Rr.parse(t);if(r.length>5)return i;const s=Rr.createTransformer(t),a=typeof r[0]!="number"?1:0,o=n.x.scale*e.x,l=n.y.scale*e.y;r[0+a]/=o,r[1+a]/=l;const c=Mt(o,l,.5);return typeof r[2+a]=="number"&&(r[2+a]/=c),typeof r[3+a]=="number"&&(r[3+a]/=c),s(r)}};class oR extends q.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;AT(lR),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),tc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,a=i.projection;return a&&(a.isPresent=s,r||e.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?a.promote():a.relegate()||xt.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),kp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function WS(t){const[e,n]=by(),i=q.useContext(Pp);return R.jsx(oR,{...t,layoutGroup:i,switchLayoutGroup:q.useContext(Iy),isPresent:e,safeToRemove:n})}const lR={borderRadius:{...La,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:La,borderTopRightRadius:La,borderBottomLeftRadius:La,borderBottomRightRadius:La,boxShadow:aR};function cR(t,e,n){const i=ln(t)?t:Ao(t);return i.start(cm("",i,e,n)),i.animation}function uR(t){return t instanceof SVGElement&&t.tagName!=="svg"}const dR=(t,e)=>t.depth-e.depth;class fR{constructor(){this.children=[],this.isDirty=!1}add(e){Qp(this.children,e),this.isDirty=!0}remove(e){Jp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(dR),this.isDirty=!1,this.children.forEach(e)}}function hR(t,e){const n=Ei.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ar(i),t(s-e))};return xt.read(i,!0),()=>Ar(i)}const XS=["TopLeft","TopRight","BottomLeft","BottomRight"],pR=XS.length,z0=t=>typeof t=="string"?parseFloat(t):t,V0=t=>typeof t=="number"||Oe.test(t);function mR(t,e,n,i,r,s){r?(t.opacity=Mt(0,n.opacity!==void 0?n.opacity:1,gR(i)),t.opacityExit=Mt(e.opacity!==void 0?e.opacity:1,0,vR(i))):s&&(t.opacity=Mt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let a=0;a<pR;a++){const o=`border${XS[a]}Radius`;let l=H0(e,o),c=H0(n,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||V0(l)===V0(c)?(t[o]=Math.max(Mt(z0(l),z0(c),i),0),(Mi.test(c)||Mi.test(l))&&(t[o]+="%")):t[o]=c}(e.rotate||n.rotate)&&(t.rotate=Mt(e.rotate||0,n.rotate||0,i))}function H0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const gR=jS(0,.5,uS),vR=jS(.5,.95,Fn);function jS(t,e,n){return i=>i<t?0:i>e?1:n(la(t,e,i))}function G0(t,e){t.min=e.min,t.max=e.max}function Vn(t,e){G0(t.x,e.x),G0(t.y,e.y)}function W0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function X0(t,e,n,i,r){return t-=e,t=Bc(t,1/n,i),r!==void 0&&(t=Bc(t,1/r,i)),t}function xR(t,e=0,n=1,i=.5,r,s=t,a=t){if(Mi.test(e)&&(e=parseFloat(e),e=Mt(a.min,a.max,e/100)-a.min),typeof e!="number")return;let o=Mt(s.min,s.max,i);t===s&&(o-=e),t.min=X0(t.min,e,n,o,r),t.max=X0(t.max,e,n,o,r)}function j0(t,e,[n,i,r],s,a){xR(t,e[n],e[i],e[r],e.scale,s,a)}const _R=["x","scaleX","originX"],yR=["y","scaleY","originY"];function $0(t,e,n,i){j0(t.x,e,_R,n?n.x:void 0,i?i.x:void 0),j0(t.y,e,yR,n?n.y:void 0,i?i.y:void 0)}function q0(t){return t.translate===0&&t.scale===1}function $S(t){return q0(t.x)&&q0(t.y)}function Y0(t,e){return t.min===e.min&&t.max===e.max}function SR(t,e){return Y0(t.x,e.x)&&Y0(t.y,e.y)}function K0(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function qS(t,e){return K0(t.x,e.x)&&K0(t.y,e.y)}function Z0(t){return kn(t.x)/kn(t.y)}function Q0(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class MR{constructor(){this.members=[]}add(e){Qp(this.members,e),e.scheduleRender()}remove(e){if(Jp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ER(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,a=(n==null?void 0:n.z)||0;if((r||s||a)&&(i=`translate3d(${r}px, ${s}px, ${a}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:d,skewX:p,skewY:v}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),h&&(i+=`rotateX(${h}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const o=t.x.scale*e.x,l=t.y.scale*e.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const Xr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Wa=typeof window<"u"&&window.MotionDebug!==void 0,nd=["","X","Y","Z"],wR={visibility:"hidden"},J0=1e3;let TR=0;function id(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function YS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=iS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",xt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&YS(i)}function KS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(a={},o=e==null?void 0:e()){this.id=TR++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Wa&&(Xr.totalNodes=Xr.resolvedTargetDeltas=Xr.recalculatedProjection=0),this.nodes.forEach(RR),this.nodes.forEach(NR),this.nodes.forEach(IR),this.nodes.forEach(CR),Wa&&window.MotionDebug.record(Xr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new fR)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new em),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=uR(a),this.instance=a;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(c||l)&&(this.isLayoutDirty=!0),t){let h;const d=()=>this.root.updateBlockedByResize=!1;t(a,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=hR(d,250),tc.hasAnimatedSinceResize&&(tc.hasAnimatedSinceResize=!1,this.nodes.forEach(tv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||u.getDefaultTransition()||BR,{onLayoutAnimationStart:g,onLayoutAnimationComplete:f}=u.getProps(),m=!this.targetLayout||!qS(this.targetLayout,v)||p,_=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||_||d&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,_);const y={...qp(S,"layout"),onPlay:g,onComplete:f};(u.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y)}else d||tv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ar(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(UR),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&YS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ev);return}this.isUpdating||this.nodes.forEach(LR),this.isUpdating=!1,this.nodes.forEach(DR),this.nodes.forEach(bR),this.nodes.forEach(AR),this.clearAllSnapshots();const o=Ei.now();qt.delta=Ki(0,1e3/60,o-qt.timestamp),qt.timestamp=o,qt.isProcessing=!0,$u.update.process(qt),$u.preRender.process(qt),$u.render.process(qt),qt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,kp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(PR),this.sharedNodes.forEach(FR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,xt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){xt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Pt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!$S(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;a&&(o||Wr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),zR(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:o}=this.options;if(!o)return Pt();const l=o.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(VR))){const{scroll:u}=this.root;u&&(Xs(l.x,u.offset.x),Xs(l.y,u.offset.y))}return l}removeElementScroll(a){var o;const l=Pt();if(Vn(l,a),!((o=this.scroll)===null||o===void 0)&&o.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:d}=u;u!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&Vn(l,a),Xs(l.x,h.offset.x),Xs(l.y,h.offset.y))}return l}applyTransform(a,o=!1){const l=Pt();Vn(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];!o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&js(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Wr(u.latestValues)&&js(l,u.latestValues)}return Wr(this.latestValues)&&js(l,this.latestValues),l}removeTransform(a){const o=Pt();Vn(o,a);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Wr(c.latestValues))continue;Gf(c.latestValues)&&c.updateSnapshot();const u=Pt(),h=c.measurePageBox();Vn(u,h),$0(o,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Wr(this.latestValues)&&$0(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==qt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=qt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pt(),this.relativeTargetOrigin=Pt(),so(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Vn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Pt(),this.targetWithTransforms=Pt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),WA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Vn(this.target,this.layout.layoutBox),VS(this.target,this.targetDelta)):Vn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pt(),this.relativeTargetOrigin=Pt(),so(this.relativeTargetOrigin,this.target,p.target),Vn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Wa&&Xr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Gf(this.parent.latestValues)||zS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let c=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===qt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;Vn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;JA(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Pt());const{target:v}=o;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(W0(this.prevProjectionDelta.x,this.projectionDelta.x),W0(this.prevProjectionDelta.y,this.projectionDelta.y)),ro(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==p||!Q0(this.projectionDelta.x,this.prevProjectionDelta.x)||!Q0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Wa&&Xr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)===null||o===void 0||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ws(),this.projectionDelta=Ws(),this.projectionDeltaWithTransform=Ws()}setAnimationOrigin(a,o=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=Ws();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const d=Pt(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,S=p!==v,g=this.getStack(),f=!g||g.members.length<=1,m=!!(S&&!f&&this.options.crossfade===!0&&!this.path.some(kR));this.animationProgress=0;let _;this.mixTargetDelta=y=>{const E=y/1e3;nv(h.x,a.x,E),nv(h.y,a.y,E),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(so(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),OR(this.relativeTarget,this.relativeTargetOrigin,d,E),_&&SR(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=Pt()),Vn(_,this.relativeTarget)),S&&(this.animationValues=u,mR(u,c,this.latestValues,E,m,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ar(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=xt.update(()=>{tc.hasAnimatedSinceResize=!0,this.currentAnimation=cR(0,J0,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(J0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:u}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&ZS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Pt();const h=kn(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+h;const d=kn(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+d}Vn(o,l),js(o,u),ro(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new MR),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&id("z",a,c,this.animationValues);for(let u=0;u<nd.length;u++)id(`rotate${nd[u]}`,a,c,this.animationValues),id(`skew${nd[u]}`,a,c,this.animationValues);a.render();for(const u in c)a.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);a.scheduleRender()}getProjectionStyles(a){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return wR;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Jl(a==null?void 0:a.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=Jl(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Wr(this.latestValues)&&(S.transform=u?u({},""):"none",this.hasProjected=!1),S}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=ER(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:p,y:v}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${v.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(o=d.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const S in Ic){if(d[S]===void 0)continue;const{correct:g,applyTo:f}=Ic[S],m=c.transform==="none"?d[S]:g(d[S],h);if(f){const _=f.length;for(let y=0;y<_;y++)c[f[y]]=m}else c[S]=m}return this.options.layoutId&&(c.pointerEvents=h===this?Jl(a==null?void 0:a.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(ev),this.root.sharedNodes.clear()}}}function bR(t){t.updateLayout()}function AR(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,a=n.source!==t.layout.source;s==="size"?Gn(h=>{const d=a?n.measuredBox[h]:n.layoutBox[h],p=kn(d);d.min=i[h].min,d.max=d.min+p}):ZS(s,n.layoutBox,i)&&Gn(h=>{const d=a?n.measuredBox[h]:n.layoutBox[h],p=kn(i[h]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+p)});const o=Ws();ro(o,i,n.layoutBox);const l=Ws();a?ro(l,t.applyTransform(r,!0),n.measuredBox):ro(l,i,n.layoutBox);const c=!$S(o);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:p}=h;if(d&&p){const v=Pt();so(v,n.layoutBox,d.layoutBox);const S=Pt();so(S,i,p.layoutBox),qS(v,S)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=S,t.relativeTargetOrigin=v,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function RR(t){Wa&&Xr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function CR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function PR(t){t.clearSnapshot()}function ev(t){t.clearMeasurements()}function LR(t){t.isLayoutDirty=!1}function DR(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function tv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function NR(t){t.resolveTargetDelta()}function IR(t){t.calcProjection()}function UR(t){t.resetSkewAndRotation()}function FR(t){t.removeLeadSnapshot()}function nv(t,e,n){t.translate=Mt(e.translate,0,n),t.scale=Mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function iv(t,e,n,i){t.min=Mt(e.min,n.min,i),t.max=Mt(e.max,n.max,i)}function OR(t,e,n,i){iv(t.x,e.x,n.x,i),iv(t.y,e.y,n.y,i)}function kR(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const BR={duration:.45,ease:[.4,0,.1,1]},rv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),sv=rv("applewebkit/")&&!rv("chrome/")?Math.round:Fn;function av(t){t.min=sv(t.min),t.max=sv(t.max)}function zR(t){av(t.x),av(t.y)}function ZS(t,e,n){return t==="position"||t==="preserve-aspect"&&!GA(Z0(e),Z0(n),.2)}function VR(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const HR=KS({attachResizeListener:(t,e)=>Co(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),rd={current:void 0},QS=KS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!rd.current){const t=new HR({});t.mount(window),t.setOptions({layoutScroll:!0}),rd.current=t}return rd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),GR={pan:{Feature:sR},drag:{Feature:rR,ProjectionNode:QS,MeasureLayout:WS}};function ov(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&xt.postRender(()=>s(e,Go(e)))}class WR extends Nr{mount(){const{current:e}=this.node;e&&(this.unmount=GT(e,n=>(ov(this.node,n,"Start"),i=>ov(this.node,i,"End"))))}unmount(){}}class XR extends Nr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ho(Co(this.node.current,"focus",()=>this.onFocus()),Co(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function lv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&xt.postRender(()=>s(e,Go(e)))}class jR extends Nr{mount(){const{current:e}=this.node;e&&(this.unmount=$T(e,n=>(lv(this.node,n,"Start"),(i,{success:r})=>lv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Xf=new WeakMap,sd=new WeakMap,$R=t=>{const e=Xf.get(t.target);e&&e(t)},qR=t=>{t.forEach($R)};function YR({root:t,...e}){const n=t||document;sd.has(n)||sd.set(n,{});const i=sd.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(qR,{root:t,...e})),i[r]}function KR(t,e,n){const i=YR(e);return Xf.set(t,n),i.observe(t),()=>{Xf.delete(t),i.unobserve(t)}}const ZR={some:0,all:1};class QR extends Nr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,a={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:ZR[r]},o=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),d=c?u:h;d&&d(l)};return KR(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(JR(e,n))&&this.startObserver()}unmount(){}}function JR({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const eC={inView:{Feature:QR},tap:{Feature:jR},focus:{Feature:XR},hover:{Feature:WR}},tC={layout:{ProjectionNode:QS,MeasureLayout:WS}},jf={current:null},JS={current:!1};function nC(){if(JS.current=!0,!!Np)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>jf.current=t.matches;t.addListener(e),e()}else jf.current=!1}const iC=[...wS,sn,Rr],rC=t=>iC.find(ES(t)),cv=new WeakMap;function sC(t,e,n){for(const i in e){const r=e[i],s=n[i];if(ln(r))t.addValue(i,r);else if(ln(s))t.addValue(i,Ao(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const a=t.getValue(i);a.liveStyle===!0?a.jump(r):a.hasAnimated||a.set(r)}else{const a=t.getStaticValue(i);t.addValue(i,Ao(a!==void 0?a:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const uv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class aC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=am,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Ei.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,xt.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=a;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!s,this.isControllingVariants=pu(n),this.isVariantNode=Dy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const v=d[p];l[p]!==void 0&&ln(v)&&v.set(l[p],!1)}}mount(e){this.current=e,cv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),JS.current||nC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:jf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){cv.delete(this.current),this.projection&&this.projection.unmount(),Ar(this.notifyUpdate),Ar(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=ds.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&xt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),a&&a(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ca){const n=ca[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Pt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<uv.length;i++){const r=uv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,a=e[s];a&&(this.propEventSubscriptions[r]=this.on(r,a))}this.prevMotionValues=sC(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ao(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(SS(r)||fS(r))?r=parseFloat(r):!rC(r)&&Rr.test(n)&&(r=xS(e,n)),this.setBaseTarget(e,ln(r)?r.get():r)),ln(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const a=zp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(r=a[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!ln(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new em),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class eM extends aC{constructor(){super(...arguments),this.KeyframeResolver=TS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ln(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function oC(t){return window.getComputedStyle(t)}class lC extends eM{constructor(){super(...arguments),this.type="html",this.renderInstance=Vy}readValueFromInstance(e,n){if(ds.has(n)){const i=sm(n);return i&&i.default||0}else{const i=oC(e),r=(ky(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return HS(e,n)}build(e,n,i){Gp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return $p(e,n,i)}}class cC extends eM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Pt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ds.has(n)){const i=sm(n);return i&&i.default||0}return n=Hy.has(n)?n:Op(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return Xy(e,n,i)}build(e,n,i){Wp(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){Gy(e,n,i,r)}mount(e){this.isSVGTag=jp(e.tagName),super.mount(e)}}const uC=(t,e)=>Bp(t)?new cC(e):new lC(e,{allowProjection:t!==q.Fragment}),dC=FT({...IA,...eC,...GR,...tC},uC),mn=Zw(dC),fC=({color:t,tokenIndex:e,xPercent:n,yPercent:i,offsetX:r,offsetY:s,scale:a,isEligible:o,isFinished:l,isHopping:c=!1,onHoverStart:u,onHoverEnd:h,onClick:d})=>{const{theme:p}=us(),v=p.colors[t];return R.jsxs(mn.button,{type:"button",className:`absolute w-[5.6%] h-[5.6%] rounded-full outline-none focus:outline-none select-none z-10 flex items-center justify-center ${o?"cursor-pointer z-20":"cursor-default pointer-events-none"} ${l?"opacity-70":"opacity-100"}`,style:{left:`${n}%`,top:`${i}%`},animate:{x:`calc(-50% + ${r}px)`,y:`calc(-50% + ${s}px)`,scale:o?[a,a*1.08,a]:a},transition:{x:{type:"spring",damping:22,stiffness:240},y:{type:"spring",damping:22,stiffness:240},scale:o?{duration:1.4,repeat:1/0,ease:"easeInOut"}:{duration:.2}},whileHover:o?{y:`calc(-50% + ${s-8}px)`,scale:a*1.2}:void 0,whileTap:o?{scale:a*.92}:void 0,onMouseEnter:u,onMouseLeave:h,onClick:o?d:void 0,"aria-label":`${t} token ${e+1}`,children:[R.jsx(mn.div,{className:"absolute -bottom-1.5 left-[10%] w-[80%] h-2 rounded-full bg-black/70 blur-[1px] pointer-events-none",animate:{scale:c?.45:1,opacity:c?.2:.7},transition:{duration:.16}}),R.jsxs(mn.div,{className:"relative w-full h-full rounded-[45%] border-2 border-white/80 shadow-lg flex items-center justify-center overflow-hidden",style:{background:`radial-gradient(circle at 35% 25%, ${v.light} 0%, ${v.primary} 60%, #000 100%)`,boxShadow:o?`0 0 18px ${v.glow}, 0 0 0 2px #f59e0b, inset 0 2px 4px rgba(255,255,255,0.9)`:"inset 0 2px 4px rgba(255,255,255,0.8), 0 5px 10px rgba(0,0,0,0.5)"},animate:c?{y:[0,-22,0],scaleX:[1,.92,1.15,1],scaleY:[1,1.25,.88,1]}:{},transition:{duration:.18,ease:"easeInOut"},children:[R.jsx("div",{className:"absolute top-0.5 left-1 w-2.5 h-1.5 rounded-full bg-white/80 blur-[0.5px]"}),R.jsx("div",{className:"absolute bottom-1 w-[70%] h-1 rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 opacity-90 shadow-sm"}),R.jsx("span",{className:"relative text-[10px] font-display font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",children:e+1})]})]})};function hC(){const t=[];for(let e=1;e<=5;e++)t.push({r:6,c:e});for(let e=5;e>=0;e--)t.push({r:e,c:6});t.push({r:0,c:7});for(let e=0;e<=5;e++)t.push({r:e,c:8});for(let e=9;e<=14;e++)t.push({r:6,c:e});t.push({r:7,c:14});for(let e=14;e>=9;e--)t.push({r:8,c:e});for(let e=9;e<=14;e++)t.push({r:e,c:8});t.push({r:14,c:7});for(let e=14;e>=9;e--)t.push({r:e,c:6});for(let e=5;e>=0;e--)t.push({r:8,c:e});return t.push({r:7,c:0}),t.push({r:6,c:0}),t}const tM=hC(),nM={red:[{r:7,c:1},{r:7,c:2},{r:7,c:3},{r:7,c:4},{r:7,c:5}],green:[{r:1,c:7},{r:2,c:7},{r:3,c:7},{r:4,c:7},{r:5,c:7}],yellow:[{r:7,c:13},{r:7,c:12},{r:7,c:11},{r:7,c:10},{r:7,c:9}],blue:[{r:13,c:7},{r:12,c:7},{r:11,c:7},{r:10,c:7},{r:9,c:7}]};function dv(t,e){return{x:(e+.5)/15*100,y:(t+.5)/15*100}}const pC={red:[{x:15.3,y:15.3},{x:24.7,y:15.3},{x:15.3,y:24.7},{x:24.7,y:24.7}],green:[{x:75.3,y:15.3},{x:84.7,y:15.3},{x:75.3,y:24.7},{x:84.7,y:24.7}],yellow:[{x:75.3,y:75.3},{x:84.7,y:75.3},{x:75.3,y:84.7},{x:84.7,y:84.7}],blue:[{x:15.3,y:75.3},{x:24.7,y:75.3},{x:15.3,y:84.7},{x:84.7,y:84.7}]},mC={red:[{x:45,y:48},{x:45,y:52},{x:42.5,y:46},{x:42.5,y:54}],green:[{x:48,y:45},{x:52,y:45},{x:46,y:42.5},{x:54,y:42.5}],yellow:[{x:55,y:48},{x:55,y:52},{x:57.5,y:46},{x:57.5,y:54}],blue:[{x:48,y:55},{x:52,y:55},{x:46,y:57.5},{x:54,y:57.5}]};function fv(t,e,n){if(e===-1)return pC[t][n];if(e<=50){const i=(Va[t]+e)%52,r=tM[i];return dv(r.r,r.c)}if(e<=55){const i=e-51,r=nM[t][i];return dv(r.r,r.c)}return mC[t][n]}const gC=({players:t,activeColor:e,myColor:n,phase:i,roll:r,availableMoves:s,onMoveToken:a})=>{const{theme:o}=us(),[l,c]=q.useState(null),u={};t.forEach(d=>{d.tokens.forEach((p,v)=>{if(p>=0&&p<=50){const S=(Va[d.color]+p)%52;u[S]||(u[S]=[]),u[S].push({player:d,tokenIdx:v})}})});let h=null;if(l&&r&&i==="move"){const d=t.find(p=>p.color===l.color);if(d){const p=d.tokens[l.tokenIndex],v=p===-1?0:p+r;if(v<=56){const S=fv(l.color,v,l.tokenIndex);let g=`+${r}`;if(p===-1)g="✦ START";else if(v===56)g="🏆 HOME!";else if(v<=50){const f=(Va[l.color]+v)%52;Yg.includes(f)?g="★ SAFE HAVEN":t.some(_=>_.color!==l.color&&_.tokens.some(y=>y>=0&&y<=50&&(Va[_.color]+y)%52===f))&&(g="⚔ CAPTURE!")}h={x:S.x,y:S.y,badge:g}}}}return R.jsx("div",{className:"relative w-full max-w-[580px] aspect-square mx-auto p-3 sm:p-5 rounded-[32px] select-none transition-all duration-500",children:R.jsxs("div",{className:"relative w-full h-full rounded-[24px] overflow-hidden p-2.5 sm:p-3.5 shadow-2xl border-4",style:{background:"linear-gradient(135deg, #422312 0%, #201108 50%, #4a2815 100%)",borderColor:"#190c05",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.9), inset 0 2px 4px rgba(255, 235, 190, 0.45), inset 0 -3px 6px rgba(0, 0, 0, 0.9)"},children:[R.jsx("div",{className:"absolute top-1.5 left-1.5 w-7 h-7 border-t-2 border-l-2 border-amber-400/90 rounded-tl-xl pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"}),R.jsx("div",{className:"absolute top-1.5 right-1.5 w-7 h-7 border-t-2 border-r-2 border-amber-400/90 rounded-tr-xl pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"}),R.jsx("div",{className:"absolute bottom-1.5 left-1.5 w-7 h-7 border-b-2 border-l-2 border-amber-400/90 rounded-bl-xl pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"}),R.jsx("div",{className:"absolute bottom-1.5 right-1.5 w-7 h-7 border-b-2 border-r-2 border-amber-400/90 rounded-br-xl pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"}),R.jsxs("div",{className:"relative w-full h-full rounded-xl overflow-hidden border-2 shadow-inner",style:{background:o.boardBg,borderColor:"#5c381c"},children:[R.jsx("div",{className:`absolute top-0 left-0 w-[40%] h-[40%] p-3 border-r-2 border-b-2 border-slate-900/40 flex flex-col items-center justify-between transition-all ${e==="red"?"ring-4 ring-rose-500 ring-inset shadow-lg":""}`,style:{background:"linear-gradient(135deg, #a81c1c, #6c0a0a)"},children:R.jsxs("div",{className:"w-full h-full rounded-xl bg-[#f6e6cb] dark:bg-[#1f1610] p-2.5 border-2 border-amber-500/50 shadow-inner flex flex-col items-center justify-between",children:[R.jsxs("div",{className:"flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-serif font-black text-[10px] tracking-wider",children:[R.jsx("span",{children:"♔"}),R.jsx("span",{children:"RUBY RED"})]}),R.jsx("div",{className:"grid grid-cols-2 grid-rows-2 gap-3 place-items-center",children:[0,1,2,3].map(d=>R.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-900/30 border-2 border-amber-400/60 shadow-inner flex items-center justify-center",children:R.jsx("div",{className:"w-5 h-5 rounded-full bg-black/40 shadow-inner"})},d))})]})}),R.jsx("div",{className:`absolute top-0 right-0 w-[40%] h-[40%] p-3 border-l-2 border-b-2 border-slate-900/40 flex flex-col items-center justify-between transition-all ${e==="green"?"ring-4 ring-emerald-500 ring-inset shadow-lg":""}`,style:{background:"linear-gradient(135deg, #1b6827, #0b3814)"},children:R.jsxs("div",{className:"w-full h-full rounded-xl bg-[#f6e6cb] dark:bg-[#1f1610] p-2.5 border-2 border-amber-500/50 shadow-inner flex flex-col items-center justify-between",children:[R.jsxs("div",{className:"flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-serif font-black text-[10px] tracking-wider",children:[R.jsx("span",{children:"♕"}),R.jsx("span",{children:"EMERALD GREEN"})]}),R.jsx("div",{className:"grid grid-cols-2 grid-rows-2 gap-3 place-items-center",children:[0,1,2,3].map(d=>R.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-900/30 border-2 border-amber-400/60 shadow-inner flex items-center justify-center",children:R.jsx("div",{className:"w-5 h-5 rounded-full bg-black/40 shadow-inner"})},d))})]})}),R.jsx("div",{className:`absolute bottom-0 right-0 w-[40%] h-[40%] p-3 border-l-2 border-t-2 border-slate-900/40 flex flex-col items-center justify-between transition-all ${e==="yellow"?"ring-4 ring-amber-500 ring-inset shadow-lg":""}`,style:{background:"linear-gradient(135deg, #c79100, #735400)"},children:R.jsxs("div",{className:"w-full h-full rounded-xl bg-[#f6e6cb] dark:bg-[#1f1610] p-2.5 border-2 border-amber-500/50 shadow-inner flex flex-col items-center justify-between",children:[R.jsxs("div",{className:"flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-serif font-black text-[10px] tracking-wider",children:[R.jsx("span",{children:"♗"}),R.jsx("span",{children:"AMBER GOLD"})]}),R.jsx("div",{className:"grid grid-cols-2 grid-rows-2 gap-3 place-items-center",children:[0,1,2,3].map(d=>R.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-900/30 border-2 border-amber-400/60 shadow-inner flex items-center justify-center",children:R.jsx("div",{className:"w-5 h-5 rounded-full bg-black/40 shadow-inner"})},d))})]})}),R.jsx("div",{className:`absolute bottom-0 left-0 w-[40%] h-[40%] p-3 border-r-2 border-t-2 border-slate-900/40 flex flex-col items-center justify-between transition-all ${e==="blue"?"ring-4 ring-sky-500 ring-inset shadow-lg":""}`,style:{background:"linear-gradient(135deg, #1255a4, #082d5a)"},children:R.jsxs("div",{className:"w-full h-full rounded-xl bg-[#f6e6cb] dark:bg-[#1f1610] p-2.5 border-2 border-amber-500/50 shadow-inner flex flex-col items-center justify-between",children:[R.jsxs("div",{className:"flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-serif font-black text-[10px] tracking-wider",children:[R.jsx("span",{children:"♘"}),R.jsx("span",{children:"SAPPHIRE BLUE"})]}),R.jsx("div",{className:"grid grid-cols-2 grid-rows-2 gap-3 place-items-center",children:[0,1,2,3].map(d=>R.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-900/30 border-2 border-amber-400/60 shadow-inner flex items-center justify-center",children:R.jsx("div",{className:"w-5 h-5 rounded-full bg-black/40 shadow-inner"})},d))})]})}),tM.map((d,p)=>{const v=Yg.includes(p),S=p===0,g=p===13,f=p===26,m=p===39;let _="radial-gradient(circle at 50% 50%, #fef8ee 0%, #edd9b4 85%, #d6bd91 100%)",y="1px solid #9c7b50";return S?(_="radial-gradient(circle at 50% 50%, #e8554b 0%, #c2201a 80%, #750e0a 100%)",y="1px solid #570000"):g?(_="radial-gradient(circle at 50% 50%, #46bf63 0%, #1b7a32 80%, #0b3d16 100%)",y="1px solid #002c04"):f?(_="radial-gradient(circle at 50% 50%, #ffd647 0%, #c99106 80%, #7a5400 100%)",y="1px solid #543900"):m&&(_="radial-gradient(circle at 50% 50%, #479ff7 0%, #1860ad 80%, #083461 100%)",y="1px solid #001f4d"),R.jsx("div",{className:"absolute w-[6.666667%] h-[6.666667%] flex items-center justify-center text-xs font-bold shadow-inner",style:{left:`${d.c/15*100}%`,top:`${d.r/15*100}%`,background:_,border:y},children:v&&R.jsx("span",{className:`font-serif select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${S||g||f||m?"text-white text-sm":"text-amber-500 text-sm"}`,children:"★"})},p)}),Object.entries(nM).map(([d,p])=>p.map((v,S)=>{const g=d==="red"?"radial-gradient(circle at 50% 50%, #e65f57 0%, #b72823 80%, #7d1713 100%)":d==="green"?"radial-gradient(circle at 50% 50%, #4db567 0%, #1e7a33 80%, #0d421a 100%)":d==="yellow"?"radial-gradient(circle at 50% 50%, #fbd558 0%, #c9930f 80%, #855f04 100%)":"radial-gradient(circle at 50% 50%, #4fa1eb 0%, #1a62ab 80%, #0a335c 100%)";return R.jsx("div",{className:"absolute w-[6.666667%] h-[6.666667%] border border-slate-900/40 flex items-center justify-center shadow-inner",style:{left:`${v.c/15*100}%`,top:`${v.r/15*100}%`,background:g}},`${d}-${S}`)})),R.jsxs("div",{className:"absolute top-[40%] left-[40%] w-[20%] h-[20%] border-2 border-slate-950 overflow-hidden shadow-2xl flex items-center justify-center z-10",children:[R.jsx("div",{className:"absolute inset-0",style:{clipPath:"polygon(0 0, 50% 50%, 0 100%)",background:"linear-gradient(135deg, #d32f2f, #7f0000)"}}),R.jsx("div",{className:"absolute inset-0",style:{clipPath:"polygon(0 0, 100% 0, 50% 50%)",background:"linear-gradient(135deg, #388e3c, #1b5e20)"}}),R.jsx("div",{className:"absolute inset-0",style:{clipPath:"polygon(100% 0, 100% 100%, 50% 50%)",background:"linear-gradient(135deg, #fbc02d, #f57f17)"}}),R.jsx("div",{className:"absolute inset-0",style:{clipPath:"polygon(0 100%, 100% 100%, 50% 50%)",background:"linear-gradient(135deg, #1976d2, #0d47a1)"}}),R.jsxs("div",{className:"relative w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 border-2 border-white shadow-xl flex flex-col items-center justify-center text-amber-950 select-none",children:[R.jsx("span",{className:"text-xs leading-none",children:"✦"}),R.jsx("span",{className:"font-serif font-black text-[6px] tracking-widest leading-none mt-0.5",children:"ROYAL"}),R.jsx("span",{className:"font-serif font-bold text-[5px] tracking-wider leading-none",children:"LUDO"})]})]}),h&&R.jsxs("div",{className:"absolute w-[6.666667%] h-[6.666667%] pointer-events-none z-30 flex items-center justify-center -translate-x-1/2 -translate-y-1/2",style:{left:`${h.x}%`,top:`${h.y}%`},children:[R.jsx("div",{className:"w-full h-full rounded-lg border-2 border-dashed border-amber-400 bg-amber-400/40 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.8)]"}),R.jsx("span",{className:"absolute -top-7 whitespace-nowrap bg-slate-900/95 text-amber-300 border border-amber-400/60 text-[9px] font-black px-2 py-0.5 rounded shadow-xl tracking-wider",children:h.badge})]}),t.map(d=>d.tokens.map((p,v)=>{const S=fv(d.color,p,v),g=i==="move"&&d.color===e&&s.includes(v)&&(n===null||d.color===n);let f=0,m=0,_=1;if(p>=0&&p<=50){const y=(Va[d.color]+p)%52,E=u[y]||[];if(E.length>1){const b=E.findIndex(x=>x.player.color===d.color&&x.tokenIdx===v);E.length===2?(f=b===0?-5:5,_=.9):E.length===3?(f=b===0?-5:b===1?5:0,m=b===2?6:-4,_=.82):(f=b%2===0?-5:5,m=b<2?-5:5,_=.75)}}return R.jsx(fC,{color:d.color,tokenIndex:v,xPercent:S.x,yPercent:S.y,offsetX:f,offsetY:m,scale:_,isEligible:g,isFinished:p===56,onHoverStart:()=>g&&c({color:d.color,tokenIndex:v}),onHoverEnd:()=>c(null),onClick:()=>{c(null),a(v)}},`${d.color}-${v}`)}))]})]})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const um="187",vC=0,hv=1,xC=2,nc=1,iM=2,Xa=3,ss=0,Cn=1,Ui=2,Js=0,ao=1,pv=2,mv=3,gv=4,_C=5,Cs=100,yC=101,SC=102,MC=103,EC=104,wC=200,TC=201,bC=202,AC=203,rM=204,sM=205,RC=206,CC=207,PC=208,LC=209,DC=210,NC=211,IC=212,UC=213,FC=214,$f=0,qf=1,Yf=2,Po=3,Kf=4,Zf=5,Qf=6,Jf=7,aM=0,OC=1,kC=2,Gi=0,oM=1,lM=2,cM=3,uM=4,dM=5,fM=6,hM=7,pM=300,da=301,Lo=302,ad=303,od=304,eh=1e3,ki=1001,th=1002,Yt=1003,BC=1004,xl=1005,Tn=1006,ld=1007,Bi=1008,Nn=1009,mM=1010,gM=1011,Do=1012,dm=1013,Ti=1014,xi=1015,bi=1016,fm=1017,hm=1018,fa=1020,vM=35902,xM=35899,_M=1021,yM=1022,_i=1023,Cr=1026,gr=1027,SM=1028,pm=1029,as=1030,mm=1031,gm=1033,ic=33776,rc=33777,sc=33778,ac=33779,nh=35840,ih=35841,rh=35842,sh=35843,ah=36196,oh=37492,lh=37496,ch=37488,uh=37489,zc=37490,dh=37491,fh=37808,hh=37809,ph=37810,mh=37811,gh=37812,vh=37813,xh=37814,_h=37815,yh=37816,Sh=37817,Mh=37818,Eh=37819,wh=37820,Th=37821,bh=36492,Ah=36494,Rh=36495,Ch=36283,Ph=36284,Vc=36285,Lh=36286,zC=3200,Dh=0,VC=1,hr="",Wn="srgb",Hc="srgb-linear",Gc="linear",ct="srgb",cd=7680,HC=519,GC=512,WC=513,XC=514,MM=515,jC=516,$C=517,EM=518,wM=519,qC=35044,vv="300 es",li=2e3,No=2001;function YC(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KC(){const t=Wc("canvas");return t.style.display="block",t}const xv={};function _v(...t){const e="THREE."+t.shift();console.log(e,...t)}function TM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=TM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function at(...t){t=TM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function oc(...t){const e=t.join(" ");e in xv||(xv[e]=!0,ze(...t))}function ZC(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const QC={[$f]:$f,[Yf]:Qf,[Kf]:Kf,[Po]:Zf,[qf]:qf,[Qf]:Yf,[Jf]:Jf,[Zf]:Po};class fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Nh=180/Math.PI;function Wo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function JC(t,e){return(t%e+e)%e}function dd(t,e,n){return(1-n)*t+n*e}function e2(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vm(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function t2(t,e){if(e.constructor===Float32Array)return t;const n=vm(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function n2(t,e){if(e.constructor===Float32Array)return t;const n=vm(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const wm=class wm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wm.prototype.isVector2=!0;let et=wm;class hs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],v=s[a+2],S=s[a+3];if(h!==S||l!==d||c!==p||u!==v){let g=l*d+c*p+u*v+h*S;g<0&&(d=-d,p=-p,v=-v,S=-S,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);f=Math.sin(f*m)/_,o=Math.sin(o*m)/_,l=l*f+d*o,c=c*f+p*o,u=u*f+v*o,h=h*f+S*o}else{l=l*f+d*o,c=c*f+p*o,u=u*f+v*o,h=h*f+S*o;const m=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=m,c*=m,u*=m,h*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+u*h+l*p-c*d,e[n+1]=l*v+u*d+c*h-o*p,e[n+2]=c*v+u*p+o*d-l*h,e[n+3]=u*v-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"YZX":this._x=d*u*h+c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h-d*p*v;break;case"XZY":this._x=d*u*h-c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h+d*p*v;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tm=class Tm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fd.copy(this).projectOnVector(e),this.sub(fd)}reflect(e){return this.sub(fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tm.prototype.isVector3=!0;let K=Tm;const fd=new K,yv=new hs,bm=class bm{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],v=i[8],S=r[0],g=r[3],f=r[6],m=r[1],_=r[4],y=r[7],E=r[2],b=r[5],x=r[8];return s[0]=a*S+o*m+l*E,s[3]=a*g+o*_+l*b,s[6]=a*f+o*y+l*x,s[1]=c*S+u*m+h*E,s[4]=c*g+u*_+h*b,s[7]=c*f+u*y+h*x,s[2]=d*S+p*m+v*E,s[5]=d*g+p*_+v*b,s[8]=d*f+p*y+v*x,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,v=n*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=h*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return oc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hd.makeScale(e,n)),this}rotate(e){return oc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hd.makeRotation(-e)),this}translate(e,n){return oc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bm.prototype.isMatrix3=!0;let Ve=bm;const hd=new Ve,Sv=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mv=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i2(){const t={enabled:!0,workingColorSpace:Hc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=ea(r.r),r.g=ea(r.g),r.b=ea(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?Gc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hc]:{primaries:e,whitePoint:i,transfer:Gc,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),t}const Ye=i2();function Wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ea(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class r2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=Wc("canvas")),gs.width=e.width,gs.height=e.height;const r=gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wi(n[i]/255)*255):n[i]=Wi(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s2=0;class xm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:s2++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(pd(r[a].image)):s.push(pd(r[a]))}else s=pd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function pd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?r2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let a2=0;const md=new K;class cn extends fs{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=ki,r=ki,s=Tn,a=Bi,o=_i,l=Nn,c=cn.DEFAULT_ANISOTROPY,u=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a2++}),this.uuid=Wo(),this.name="",this.source=new xm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eh:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eh:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=pM;cn.DEFAULT_ANISOTROPY=1;const Am=class Am{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],v=l[9],S=l[2],g=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,E=(f+1)/2,b=(u+d)/4,x=(h+S)/4,M=(v+g)/4;return _>y&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=x/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=M/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=x/s,r=M/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(h-S)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Am.prototype.isVector4=!0;let Et=Am;class o2 extends fs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new cn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new xm(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends o2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class bM extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l2 extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const jc=class jc{constructor(e,n,i,r,s,a,o,l,c,u,h,d,p,v,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,h,d,p,v,S,g)}set(e,n,i,r,s,a,o,l,c,u,h,d,p,v,S,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=S,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,v=o*u,S=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,v=c*u,S=c*h;n[0]=d+S*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=p*o-v,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,v=c*u,S=c*h;n[0]=d-S*o,n[4]=-a*h,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*u,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,v=o*u,S=o*h;n[0]=l*u,n[4]=v*c-p,n[8]=d*c+S,n[1]=l*h,n[5]=S*c+d,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,S=o*c;n[0]=l*u,n[4]=S-d*h,n[8]=v*h+p,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+v,n[10]=d-S*h}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,S=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+S,n[5]=a*u,n[9]=p*h-v,n[2]=v*h-p,n[6]=o*u,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c2,e,u2)}lookAt(e,n,i){const r=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),nr.crossVectors(i,Pn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),nr.crossVectors(i,Pn)),nr.normalize(),_l.crossVectors(Pn,nr),r[0]=nr.x,r[4]=_l.x,r[8]=Pn.x,r[1]=nr.y,r[5]=_l.y,r[9]=Pn.y,r[2]=nr.z,r[6]=_l.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],v=i[2],S=i[6],g=i[10],f=i[14],m=i[3],_=i[7],y=i[11],E=i[15],b=r[0],x=r[4],M=r[8],F=r[12],L=r[1],N=r[5],U=r[9],H=r[13],D=r[2],W=r[6],Z=r[10],k=r[14],V=r[3],B=r[7],C=r[11],A=r[15];return s[0]=a*b+o*L+l*D+c*V,s[4]=a*x+o*N+l*W+c*B,s[8]=a*M+o*U+l*Z+c*C,s[12]=a*F+o*H+l*k+c*A,s[1]=u*b+h*L+d*D+p*V,s[5]=u*x+h*N+d*W+p*B,s[9]=u*M+h*U+d*Z+p*C,s[13]=u*F+h*H+d*k+p*A,s[2]=v*b+S*L+g*D+f*V,s[6]=v*x+S*N+g*W+f*B,s[10]=v*M+S*U+g*Z+f*C,s[14]=v*F+S*H+g*k+f*A,s[3]=m*b+_*L+y*D+E*V,s[7]=m*x+_*N+y*W+E*B,s[11]=m*M+_*U+y*Z+E*C,s[15]=m*F+_*H+y*k+E*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],v=e[3],S=e[7],g=e[11],f=e[15],m=l*p-c*d,_=o*p-c*h,y=o*d-l*h,E=a*p-c*u,b=a*d-l*u,x=a*h-o*u;return n*(S*m-g*_+f*y)-i*(v*m-g*E+f*b)+r*(v*_-S*E+f*x)-s*(v*y-S*b+g*x)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],v=e[12],S=e[13],g=e[14],f=e[15],m=n*o-i*a,_=n*l-r*a,y=n*c-s*a,E=i*l-r*o,b=i*c-s*o,x=r*c-s*l,M=u*S-h*v,F=u*g-d*v,L=u*f-p*v,N=h*g-d*S,U=h*f-p*S,H=d*f-p*g,D=m*H-_*U+y*N+E*L-b*F+x*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/D;return e[0]=(o*H-l*U+c*N)*W,e[1]=(r*U-i*H-s*N)*W,e[2]=(S*x-g*b+f*E)*W,e[3]=(d*b-h*x-p*E)*W,e[4]=(l*L-a*H-c*F)*W,e[5]=(n*H-r*L+s*F)*W,e[6]=(g*y-v*x-f*_)*W,e[7]=(u*x-d*y+p*_)*W,e[8]=(a*U-o*L+c*M)*W,e[9]=(i*L-n*U-s*M)*W,e[10]=(v*b-S*y+f*m)*W,e[11]=(h*y-u*b-p*m)*W,e[12]=(o*F-a*N-l*M)*W,e[13]=(n*N-i*F+r*M)*W,e[14]=(S*_-v*E-g*m)*W,e[15]=(u*E-h*_+d*m)*W,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,v=s*h,S=a*u,g=a*h,f=o*h,m=l*c,_=l*u,y=l*h,E=i.x,b=i.y,x=i.z;return r[0]=(1-(S+f))*E,r[1]=(p+y)*E,r[2]=(v-_)*E,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(d+f))*b,r[6]=(g+m)*b,r[7]=0,r[8]=(v+_)*x,r[9]=(g-m)*x,r[10]=(1-(d+S))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),l=vs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Jn.copy(this);const c=1/a,u=1/o,h=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,n.setFromRotationMatrix(Jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=li,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let v,S;if(l)v=s/(a-s),S=a*s/(a-s);else if(o===li)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===No)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=li,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,S;if(l)v=1/(a-s),S=a/(a-s);else if(o===li)v=-2/(a-s),S=-(a+s)/(a-s);else if(o===No)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};jc.prototype.isMatrix4=!0;let Tt=jc;const vs=new K,Jn=new Tt,c2=new K(0,0,0),u2=new K(1,1,1),nr=new K,_l=new K,Pn=new K,Ev=new Tt,wv=new hs;class an{constructor(e=0,n=0,i=0,r=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ev,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wv.setFromEuler(this),this.setFromQuaternion(wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class AM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d2=0;const Tv=new K,xs=new hs,Ri=new Tt,yl=new K,Da=new K,f2=new K,h2=new hs,bv=new K(1,0,0),Av=new K(0,1,0),Rv=new K(0,0,1),Cv={type:"added"},p2={type:"removed"},_s={type:"childadded",child:null},gd={type:"childremoved",child:null};class un extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d2++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new K,n=new an,i=new hs,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ve}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new AM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(bv,e)}rotateY(e){return this.rotateOnAxis(Av,e)}rotateZ(e){return this.rotateOnAxis(Rv,e)}translateOnAxis(e,n){return Tv.copy(e).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bv,e)}translateY(e){return this.translateOnAxis(Av,e)}translateZ(e){return this.translateOnAxis(Rv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yl.copy(e):yl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Da,yl,this.up):Ri.lookAt(yl,Da,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(Ri),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cv),_s.child=e,this.dispatchEvent(_s),_s.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(p2),gd.child=e,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cv),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,f2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,h2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}un.DEFAULT_UP=new K(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Sl extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m2={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),f=this._getHandJoint(c,S);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(m2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const RM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function xd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=JC(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=xd(a,s,e+1/3),this.g=xd(a,s,e),this.b=xd(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=RM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Ye.workingToColorSpace(rn.copy(this),e),Math.round(Ke(rn.r*255,0,255))*65536+Math.round(Ke(rn.g*255,0,255))*256+Math.round(Ke(rn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Wn){Ye.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(Ml);const i=dd(ir.h,Ml.h,n),r=dd(ir.s,Ml.s,n),s=dd(ir.l,Ml.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new it;it.NAMES=RM;class g2 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ei=new K,Ci=new K,_d=new K,Pi=new K,ys=new K,Ss=new K,Pv=new K,yd=new K,Sd=new K,Md=new K,Ed=new Et,wd=new Et,Td=new Et;class oi{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Ci.subVectors(i,n),_d.subVectors(e,n);const a=ei.dot(ei),o=ei.dot(Ci),l=ei.dot(_d),c=Ci.dot(Ci),u=Ci.dot(_d),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Ed.setScalar(0),wd.setScalar(0),Td.setScalar(0),Ed.fromBufferAttribute(e,n),wd.fromBufferAttribute(e,i),Td.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ed,s.x),a.addScaledVector(wd,s.y),a.addScaledVector(Td,s.z),a}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Ci.subVectors(e,n),ei.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ys.subVectors(r,i),Ss.subVectors(s,i),yd.subVectors(e,i);const l=ys.dot(yd),c=Ss.dot(yd);if(l<=0&&c<=0)return n.copy(i);Sd.subVectors(e,r);const u=ys.dot(Sd),h=Ss.dot(Sd);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),n.copy(i).addScaledVector(ys,a);Md.subVectors(e,s);const p=ys.dot(Md),v=Ss.dot(Md);if(v>=0&&p<=v)return n.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Ss,o);const g=u*v-p*h;if(g<=0&&h-u>=0&&p-v>=0)return Pv.subVectors(s,r),o=(h-u)/(h-u+(p-v)),n.copy(r).addScaledVector(Pv,o);const f=1/(g+S+d);return a=S*f,o=d*f,n.copy(i).addScaledVector(ys,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xo{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(s,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),El.copy(i.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),wl.subVectors(this.max,Na),Ms.subVectors(e.a,Na),Es.subVectors(e.b,Na),ws.subVectors(e.c,Na),rr.subVectors(Es,Ms),sr.subVectors(ws,Es),kr.subVectors(Ms,ws);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-kr.z,kr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,kr.z,0,-kr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-kr.y,kr.x,0];return!bd(n,Ms,Es,ws,wl)||(n=[1,0,0,0,1,0,0,0,1],!bd(n,Ms,Es,ws,wl))?!1:(Tl.crossVectors(rr,sr),n=[Tl.x,Tl.y,Tl.z],bd(n,Ms,Es,ws,wl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new K,new K,new K,new K,new K,new K,new K,new K],ti=new K,El=new Xo,Ms=new K,Es=new K,ws=new K,rr=new K,sr=new K,kr=new K,Na=new K,wl=new K,Tl=new K,Br=new K;function bd(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Br.fromArray(t,s);const o=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),l=e.dot(Br),c=n.dot(Br),u=i.dot(Br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Nt=new K,bl=new et;let v2=0;class Jr extends fs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qC,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=e!==void 0?vm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bl.fromBufferAttribute(this,n),bl.applyMatrix3(e),this.setXY(n,bl.x,bl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):t2(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):n2(e,this.array)}}class CM extends Jr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class PM extends Jr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xi extends Jr{constructor(e,n,i){super(new Float32Array(e),n,i)}}const x2=new Xo,Ia=new K,Ad=new K;class _m{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):x2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const n=Ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Ad)),this.expandByPoint(Ia.copy(e.center).sub(Ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _2=0;const Hn=new Tt,Rd=new un,Ts=new K,Ln=new Xo,Ua=new Xo,Ht=new K;class ps extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_2++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(YC(e)?PM:CM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Rd.lookAt(e),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _m);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Ln.min,Ua.min),Ln.expandByPoint(Ht),Ht.addVectors(Ln.max,Ua.max),Ln.expandByPoint(Ht)):(Ln.expandByPoint(Ua.min),Ln.expandByPoint(Ua.max))}Ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(e,c),Ht.add(Ts)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Jr(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let F=0;F<i.count;F++)o[F]=new K,l[F]=new K;const u=new K,h=new K,d=new K,p=new et,v=new et,S=new et,g=new K,f=new K;function m(F,L,N){c[F]=c[L]=c[N]=1,u.fromBufferAttribute(i,F),h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,N),p.fromBufferAttribute(s,F),v.fromBufferAttribute(s,L),S.fromBufferAttribute(s,N),h.sub(u),d.sub(u),v.sub(p),S.sub(p);const U=1/(v.x*S.y-S.x*v.y);isFinite(U)&&(g.copy(h).multiplyScalar(S.y).addScaledVector(d,-v.y).multiplyScalar(U),f.copy(d).multiplyScalar(v.x).addScaledVector(h,-S.x).multiplyScalar(U),o[F].add(g),o[L].add(g),o[N].add(g),l[F].add(f),l[L].add(f),l[N].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,L=_.length;F<L;++F){const N=_[F],U=N.start,H=N.count;for(let D=U,W=U+H;D<W;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new K,E=new K,b=new K,x=new K;function M(F){b.fromBufferAttribute(r,F),x.copy(b);const L=o[F];y.copy(L),y.sub(b.multiplyScalar(b.dot(L))).normalize(),E.crossVectors(x,L);const U=E.dot(l[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,U)}for(let F=0,L=i.count;F<L;++F)c[F]&&M(F);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Jr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,h=new K;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),S=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let f=0;f<u;f++)d[v++]=c[p++]}return new Jr(d,u,h)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ps,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cd=new K,y2=new K,S2=new Ve;class ur{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cd.subVectors(i,n).cross(y2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Cd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||S2.getNormalMatrix(e),r=this.coplanarPoint(Cd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let M2=0;class jo extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M2++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=ao,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rM,this.blendDst=sM,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=HC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cd,this.stencilZFail=cd,this.stencilZPass=cd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ur().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Di=new K,Pd=new K,Al=new K,Rl=new K;class E2{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pd.copy(e).add(n).multiplyScalar(.5),Al.copy(n).sub(e).normalize(),Rl.copy(this.origin).sub(Pd);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Al),o=Rl.dot(this.direction),l=-Rl.dot(Al),c=Rl.lengthSq(),u=Math.abs(1-a*a);let h,d,p,v;if(u>0)if(h=a*l-o,d=a*o-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const S=1/u;h*=S,d*=S,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Pd).addScaledVector(Al,d),p}intersectSphere(e,n){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,p=e.z-a.z,v=n.x-a.x,S=n.y-a.y,g=n.z-a.z,f=i.x-a.x,m=i.y-a.y,_=i.z-a.z,y=Math.abs(l),E=Math.abs(c),b=Math.abs(u);let x,M,F,L,N,U,H,D,W,Z,k,V;if(y>=E&&y>=b?(F=l,U=h,W=v,V=f,l>=0?(x=c,M=u,L=d,N=p,H=S,D=g,Z=m,k=_):(x=u,M=c,L=p,N=d,H=g,D=S,Z=_,k=m)):E>=b?(F=c,U=d,W=S,V=m,c>=0?(x=u,M=l,L=p,N=h,H=g,D=v,Z=_,k=f):(x=l,M=u,L=h,N=p,H=v,D=g,Z=f,k=_)):(F=u,U=p,W=g,V=_,u>=0?(x=l,M=c,L=h,N=d,H=v,D=S,Z=f,k=m):(x=c,M=l,L=d,N=h,H=S,D=v,Z=m,k=f)),F===0)return null;const B=x/F,C=M/F,A=1/F,Q=L-B*U,le=N-C*U,G=H-B*W,ne=D-C*W,ae=Z-B*V,oe=k-C*V,J=ae*ne-oe*G,me=Q*oe-le*ae,ke=G*le-ne*Q;if(r){if(J<0||me<0||ke<0)return null}else if((J<0||me<0||ke<0)&&(J>0||me>0||ke>0))return null;const Me=J+me+ke;if(Me===0)return null;const Re=A*(J*U+me*W+ke*V);return(Me>0?Re<0:Re>0)?null:this.at(Re/Me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class LM extends jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=aM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lv=new Tt,zr=new E2,Cl=new _m,Dv=new K,Pl=new K,Ll=new K,Dl=new K,Ld=new K,Nl=new K,Nv=new K,Il=new K;class Zi extends un{constructor(e=new ps,n=new LM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ld.fromBufferAttribute(h,e),a?Nl.addScaledVector(Ld,u):Nl.addScaledVector(Ld.sub(n),u))}n.add(Nl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(Cl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Cl,Dv)===null||zr.origin.distanceToSquared(Dv)>(e.far-e.near)**2))&&(Lv.copy(s).invert(),zr.copy(e.ray).applyMatrix4(Lv),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const g=d[v],f=a[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,E=_;y<E;y+=3){const b=o.getX(y),x=o.getX(y+1),M=o.getX(y+2);r=Ul(this,f,e,i,c,u,h,b,x,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=v,f=S;g<f;g+=3){const m=o.getX(g),_=o.getX(g+1),y=o.getX(g+2);r=Ul(this,a,e,i,c,u,h,m,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const g=d[v],f=a[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,E=_;y<E;y+=3){const b=y,x=y+1,M=y+2;r=Ul(this,f,e,i,c,u,h,b,x,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=v,f=S;g<f;g+=3){const m=g,_=g+1,y=g+2;r=Ul(this,a,e,i,c,u,h,m,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function w2(t,e,n,i,r,s,a,o){let l;if(e.side===Cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ss,o),l===null)return null;Il.copy(o),Il.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Il);return c<n.near||c>n.far?null:{distance:c,point:Il.clone(),object:t}}function Ul(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Pl),t.getVertexPosition(l,Ll),t.getVertexPosition(c,Dl);const u=w2(t,e,n,i,Pl,Ll,Dl,Nv);if(u){const h=new K;oi.getBarycoord(Nv,Pl,Ll,Dl,h),r&&(u.uv=oi.getInterpolatedAttribute(r,o,l,c,h,new et)),s&&(u.uv1=oi.getInterpolatedAttribute(s,o,l,c,h,new et)),a&&(u.normal=oi.getInterpolatedAttribute(a,o,l,c,h,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new K,materialIndex:0};oi.getNormal(Pl,Ll,Dl,d.normal),u.face=d,u.barycoord=h}return u}class T2 extends cn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Yt,u=Yt,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vr=new _m,b2=new et(.5,.5),Fl=new K;class Io{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,a=new ur){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],v=s[8],S=s[9],g=s[10],f=s[11],m=s[12],_=s[13],y=s[14],E=s[15];if(r[0].setComponents(c-a,p-u,f-v,E-m).normalize(),r[1].setComponents(c+a,p+u,f+v,E+m).normalize(),r[2].setComponents(c+o,p+h,f+S,E+_).normalize(),r[3].setComponents(c-o,p-h,f-S,E-_).normalize(),i)r[4].setComponents(l,d,g,y).normalize(),r[5].setComponents(c-l,p-d,f-g,E-y).normalize();else if(r[4].setComponents(c-l,p-d,f-g,E-y).normalize(),n===li)r[5].setComponents(c+l,p+d,f+g,E+y).normalize();else if(n===No)r[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){Vr.center.set(0,0,0);const n=b2.distanceTo(e.center);return Vr.radius=.7071067811865476+n,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fl.x=r.normal.x>0?e.max.x:e.min.x,Fl.y=r.normal.y>0?e.max.y:e.min.y,Fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Iv=new Tt;class ym{constructor(){this.coordinateSystem=li,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Iv.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Io),i[r].setFromProjectionMatrix(Iv,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Io),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new ym().copy(this)}}class DM extends cn{constructor(e=[],n=da,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NM extends cn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ha extends cn{constructor(e,n,i=Ti,r,s,a,o=Yt,l=Yt,c,u=Cr,h=1){if(u!==Cr&&u!==gr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class IM extends ha{constructor(e,n=Ti,i=da,r,s,a=Yt,o=Yt,l,c=Cr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class UM extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ya extends ps{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xi(c,3)),this.setAttribute("normal",new Xi(u,3)),this.setAttribute("uv",new Xi(h,2));function v(S,g,f,m,_,y,E,b,x,M,F){const L=y/x,N=E/M,U=y/2,H=E/2,D=b/2,W=x+1,Z=M+1;let k=0,V=0;const B=new K;for(let C=0;C<Z;C++){const A=C*N-H;for(let Q=0;Q<W;Q++){const le=Q*L-U;B[S]=le*m,B[g]=A*_,B[f]=D,c.push(B.x,B.y,B.z),B[S]=0,B[g]=0,B[f]=b>0?1:-1,u.push(B.x,B.y,B.z),h.push(Q/x),h.push(1-C/M),k+=1}}for(let C=0;C<M;C++)for(let A=0;A<x;A++){const Q=d+A+W*C,le=d+A+W*(C+1),G=d+(A+1)+W*(C+1),ne=d+(A+1)+W*C;l.push(Q,le,ne),l.push(le,G,ne),V+=6}o.addGroup(p,V,F),p+=V,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $o extends ps{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=n/l,p=[],v=[],S=[],g=[];for(let f=0;f<u;f++){const m=f*d-a;for(let _=0;_<c;_++){const y=_*h-s;v.push(y,-m,0),S.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,y=m+c*(f+1),E=m+1+c*(f+1),b=m+1+c*f;p.push(_,y,b),p.push(y,E,b)}this.setIndex(p),this.setAttribute("position",new Xi(v,3)),this.setAttribute("normal",new Xi(S,3)),this.setAttribute("uv",new Xi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.widthSegments,e.heightSegments)}}function pa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Uv(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Uv(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=pa(t[n]);for(const r in i)e[r]=i[r]}return e}function Uv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function A2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function FM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const R2={clone:pa,merge:hn};var C2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class os extends jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C2,this.fragmentShader=P2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=A2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(r.value);break;case"v2":this.uniforms[i].value=new et().fromArray(r.value);break;case"v3":this.uniforms[i].value=new K().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Tt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class L2 extends os{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class D2 extends jo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class N2 extends jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I2 extends jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class OM extends un{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Dd=new Tt,Fv=new K,Ov=new K;class U2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Fv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fv),Ov.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ov),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Dd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Dd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===No||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ol=new K,kl=new hs,hi=new K;class kM extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,kl,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,hi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ol,kl,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new K,kv=new et,Bv=new et;class ai extends kM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,kv,Bv),n.subVectors(Bv,kv)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ud*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class BM extends kM{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class F2 extends U2{constructor(){super(new BM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zv extends OM{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new F2}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class O2 extends OM{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const bs=-90,As=1;class Ih extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ai(bs,As,e,n);r.layers=this.layers,this.add(r);const s=new ai(bs,As,e,n);s.layers=this.layers,this.add(s);const a=new ai(bs,As,e,n);a.layers=this.layers,this.add(a);const o=new ai(bs,As,e,n);o.layers=this.layers,this.add(o);const l=new ai(bs,As,e,n);l.layers=this.layers,this.add(l);const c=new ai(bs,As,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===No)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=S,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class k2 extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Vv(t,e,n,i){const r=B2(i);switch(n){case _M:return t*e;case SM:return t*e/r.components*r.byteLength;case pm:return t*e/r.components*r.byteLength;case as:return t*e*2/r.components*r.byteLength;case mm:return t*e*2/r.components*r.byteLength;case yM:return t*e*3/r.components*r.byteLength;case _i:return t*e*4/r.components*r.byteLength;case gm:return t*e*4/r.components*r.byteLength;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sc:case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:case sh:return Math.max(t,16)*Math.max(e,8)/4;case nh:case rh:return Math.max(t,8)*Math.max(e,8)/2;case ah:case oh:case ch:case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lh:case zc:case dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case wh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bh:case Ah:case Rh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ch:case Ph:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vc:case Lh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function B2(t){switch(t){case Nn:case mM:return{byteLength:1,components:1};case Do:case gM:case bi:return{byteLength:2,components:1};case fm:case hm:return{byteLength:2,components:4};case Ti:case dm:case xi:return{byteLength:4,components:1};case vM:case xM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:um}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=um);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zM(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function z2(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<h.length;p++){const v=h[d],S=h[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++d,h[d]=S)}h.length=d+1;for(let p=0,v=h.length;p<v;p++){const S=h[p];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var V2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,G2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,K2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gP="gl_FragColor = linearToOutputTexel( gl_FragColor );",vP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_P=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,SP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,DP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,NP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HP=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,GP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$P=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e3=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,g3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,E3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,R3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G3=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,K3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_L=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:V2,alphahash_pars_fragment:H2,alphamap_fragment:G2,alphamap_pars_fragment:W2,alphatest_fragment:X2,alphatest_pars_fragment:j2,aomap_fragment:$2,aomap_pars_fragment:q2,batching_pars_vertex:Y2,batching_vertex:K2,begin_vertex:Z2,beginnormal_vertex:Q2,bsdfs:J2,iridescence_fragment:eP,bumpmap_pars_fragment:tP,clipping_planes_fragment:nP,clipping_planes_pars_fragment:iP,clipping_planes_pars_vertex:rP,clipping_planes_vertex:sP,color_fragment:aP,color_pars_fragment:oP,color_pars_vertex:lP,color_vertex:cP,common:uP,defaultnormal_vertex:dP,displacementmap_pars_vertex:fP,displacementmap_vertex:hP,emissivemap_fragment:pP,emissivemap_pars_fragment:mP,colorspace_fragment:gP,colorspace_pars_fragment:vP,envmap_fragment:xP,envmap_common_pars_fragment:_P,envmap_pars_fragment:yP,envmap_pars_vertex:SP,envmap_physical_pars_fragment:DP,envmap_vertex:MP,fog_vertex:EP,fog_pars_vertex:wP,fog_fragment:TP,fog_pars_fragment:bP,gradientmap_pars_fragment:AP,lightmap_pars_fragment:RP,lights_lambert_fragment:CP,lights_lambert_pars_fragment:PP,lights_pars_begin:LP,lights_toon_fragment:NP,lights_toon_pars_fragment:IP,lights_phong_fragment:UP,lights_phong_pars_fragment:FP,lights_physical_fragment:OP,lights_physical_pars_fragment:kP,lights_fragment_begin:BP,lights_fragment_maps:zP,lights_fragment_end:VP,lightprobes_pars_fragment:HP,logdepthbuf_fragment:GP,logdepthbuf_pars_fragment:WP,logdepthbuf_pars_vertex:XP,logdepthbuf_vertex:jP,map_fragment:$P,map_pars_fragment:qP,map_particle_fragment:YP,map_particle_pars_fragment:KP,metalnessmap_fragment:ZP,metalnessmap_pars_fragment:QP,morphinstance_vertex:JP,morphcolor_vertex:e3,morphnormal_vertex:t3,morphtarget_pars_vertex:n3,morphtarget_vertex:i3,normal_fragment_begin:r3,normal_fragment_maps:s3,normal_pars_fragment:a3,normal_pars_vertex:o3,normal_vertex:l3,normalmap_pars_fragment:c3,clearcoat_normal_fragment_begin:u3,clearcoat_normal_fragment_maps:d3,clearcoat_pars_fragment:f3,iridescence_pars_fragment:h3,opaque_fragment:p3,packing:m3,premultiplied_alpha_fragment:g3,project_vertex:v3,dithering_fragment:x3,dithering_pars_fragment:_3,roughnessmap_fragment:y3,roughnessmap_pars_fragment:S3,shadowmap_pars_fragment:M3,shadowmap_pars_vertex:E3,shadowmap_vertex:w3,shadowmask_pars_fragment:T3,skinbase_vertex:b3,skinning_pars_vertex:A3,skinning_vertex:R3,skinnormal_vertex:C3,specularmap_fragment:P3,specularmap_pars_fragment:L3,tonemapping_fragment:D3,tonemapping_pars_fragment:N3,transmission_fragment:I3,transmission_pars_fragment:U3,uv_pars_fragment:F3,uv_pars_vertex:O3,uv_vertex:k3,worldpos_vertex:B3,background_vert:z3,background_frag:V3,backgroundCube_vert:H3,backgroundCube_frag:G3,cube_vert:W3,cube_frag:X3,depth_vert:j3,depth_frag:$3,distance_vert:q3,distance_frag:Y3,equirect_vert:K3,equirect_frag:Z3,linedashed_vert:Q3,linedashed_frag:J3,meshbasic_vert:eL,meshbasic_frag:tL,meshlambert_vert:nL,meshlambert_frag:iL,meshmatcap_vert:rL,meshmatcap_frag:sL,meshnormal_vert:aL,meshnormal_frag:oL,meshphong_vert:lL,meshphong_frag:cL,meshphysical_vert:uL,meshphysical_frag:dL,meshtoon_vert:fL,meshtoon_frag:hL,points_vert:pL,points_frag:mL,shadow_vert:gL,shadow_frag:vL,sprite_vert:xL,sprite_frag:_L},we={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},gi={basic:{uniforms:hn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:hn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:hn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:hn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:hn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:hn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:hn([we.points,we.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:hn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:hn([we.common,we.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:hn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:hn([we.sprite,we.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:hn([we.common,we.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:hn([we.lights,we.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};gi.physical={uniforms:hn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Bl={r:0,b:0,g:0},yL=new Tt,VM=new Ve;VM.set(-1,0,0,0,1,0,0,0,1);function SL(t,e,n,i,r,s){const a=new it(0);let o=r===!0?0:1,l,c,u=null,h=0,d=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const y=m.backgroundBlurriness>0;_=e.get(_,y)}return _}function v(m){let _=!1;const y=p(m);y===null?g(a,o):y&&y.isColor&&(g(y,1),_=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(m,_){const y=p(_);y&&y.isCubeTexture?(c===void 0&&(c=new Zi(new ya(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:pa(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yL.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(VM),c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==ct,(u!==y||h!==y.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Zi(new $o(2,2),new os({name:"BackgroundMaterial",uniforms:pa(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(Bl,FM(t)),n.buffers.color.setClear(Bl.r,Bl.g,Bl.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),o=_,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:v,addToRenderList:S,dispose:f}}function ML(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(N,U,H,D,W){let Z=!1;const k=h(N,D,H,U);s!==k&&(s=k,c(s.object)),Z=p(N,D,H,W),Z&&v(N,D,H,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(N,U,H,D),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function u(N){return t.deleteVertexArray(N)}function h(N,U,H,D){const W=D.wireframe===!0;let Z=i[U.id];Z===void 0&&(Z={},i[U.id]=Z);const k=N.isInstancedMesh===!0?N.id:0;let V=Z[k];V===void 0&&(V={},Z[k]=V);let B=V[H.id];B===void 0&&(B={},V[H.id]=B);let C=B[W];return C===void 0&&(C=d(l()),B[W]=C),C}function d(N){const U=[],H=[],D=[];for(let W=0;W<n;W++)U[W]=0,H[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:D,object:N,attributes:{},index:null}}function p(N,U,H,D){const W=s.attributes,Z=U.attributes;let k=0;const V=H.getAttributes();for(const B in V)if(V[B].location>=0){const A=W[B];let Q=Z[B];if(Q===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),A===void 0||A.attribute!==Q||Q&&A.data!==Q.data)return!0;k++}return s.attributesNum!==k||s.index!==D}function v(N,U,H,D){const W={},Z=U.attributes;let k=0;const V=H.getAttributes();for(const B in V)if(V[B].location>=0){let A=Z[B];A===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(A=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(A=N.instanceColor));const Q={};Q.attribute=A,A&&A.data&&(Q.data=A.data),W[B]=Q,k++}s.attributes=W,s.attributesNum=k,s.index=D}function S(){const N=s.newAttributes;for(let U=0,H=N.length;U<H;U++)N[U]=0}function g(N){f(N,0)}function f(N,U){const H=s.newAttributes,D=s.enabledAttributes,W=s.attributeDivisors;H[N]=1,D[N]===0&&(t.enableVertexAttribArray(N),D[N]=1),W[N]!==U&&(t.vertexAttribDivisor(N,U),W[N]=U)}function m(){const N=s.newAttributes,U=s.enabledAttributes;for(let H=0,D=U.length;H<D;H++)U[H]!==N[H]&&(t.disableVertexAttribArray(H),U[H]=0)}function _(N,U,H,D,W,Z,k){k===!0?t.vertexAttribIPointer(N,U,H,W,Z):t.vertexAttribPointer(N,U,H,D,W,Z)}function y(N,U,H,D){S();const W=D.attributes,Z=H.getAttributes(),k=U.defaultAttributeValues;for(const V in Z){const B=Z[V];if(B.location>=0){let C=W[V];if(C===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(C=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(C=N.instanceColor)),C!==void 0){const A=C.normalized,Q=C.itemSize,le=e.get(C);if(le===void 0)continue;const G=le.buffer,ne=le.type,ae=le.bytesPerElement,oe=ne===t.INT||ne===t.UNSIGNED_INT||C.gpuType===dm;if(C.isInterleavedBufferAttribute){const J=C.data,me=J.isInterleavedBuffer===!0?J.stride:J.itemSize,ke=C.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let Me=0;Me<B.locationSize;Me++)f(B.location+Me,J.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Me=0;Me<B.locationSize;Me++)g(B.location+Me);t.bindBuffer(t.ARRAY_BUFFER,G);for(let Me=0;Me<B.locationSize;Me++)_(B.location+Me,Q/B.locationSize,ne,A,me*ae,(ke+Q/B.locationSize*Me)*ae,oe)}else{if(C.isInstancedBufferAttribute){for(let J=0;J<B.locationSize;J++)f(B.location+J,C.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let J=0;J<B.locationSize;J++)g(B.location+J);t.bindBuffer(t.ARRAY_BUFFER,G);for(let J=0;J<B.locationSize;J++)_(B.location+J,Q/B.locationSize,ne,A,Q*ae,Q/B.locationSize*J*ae,oe)}}else if(k!==void 0){const A=k[V];if(A!==void 0)switch(A.length){case 2:t.vertexAttrib2fv(B.location,A);break;case 3:t.vertexAttrib3fv(B.location,A);break;case 4:t.vertexAttrib4fv(B.location,A);break;default:t.vertexAttrib1fv(B.location,A)}}}}m()}function E(){F();for(const N in i){const U=i[N];for(const H in U){const D=U[H];for(const W in D){const Z=D[W];for(const k in Z)u(Z[k].object),delete Z[k];delete D[W]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;const U=i[N.id];for(const H in U){const D=U[H];for(const W in D){const Z=D[W];for(const k in Z)u(Z[k].object),delete Z[k];delete D[W]}}delete i[N.id]}function x(N){for(const U in i){const H=i[U];for(const D in H){const W=H[D];if(W[N.id]===void 0)continue;const Z=W[N.id];for(const k in Z)u(Z[k].object),delete Z[k];delete W[N.id]}}}function M(N){for(const U in i){const H=i[U],D=N.isInstancedMesh===!0?N.id:0,W=H[D];if(W!==void 0){for(const Z in W){const k=W[Z];for(const V in k)u(k[V].object),delete k[V];delete W[Z]}delete H[D],Object.keys(H).length===0&&delete i[U]}}}function F(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:S,enableAttribute:g,disableUnusedAttributes:m}}function EL(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function wL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==_i&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const M=x===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Nn&&x!==xi&&!M&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.logarithmicDepthBuffer===!0&&h===!1;n.reversedDepthBuffer===!0&&h===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&h===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:y,maxSamples:E,samples:b}}function TL(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ur,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,_=m*4;let y=f.clippingState||null;l.value=y,y=u(v,d,_,p);for(let E=0;E!==_;++E)y[E]=n[E];f.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,v){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,v!==!0||g===null){const f=p+S*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,y=p;_!==S;++_,y+=4)a.copy(h[_]).applyMatrix4(m,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}class Sm extends wi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new DM(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ya(5,5,5),s=new os({name:"CubemapFromEquirect",uniforms:pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Js});s.uniforms.tEquirect.value=n;const a=new Zi(r,s),o=n.minFilter;return n.minFilter===Bi&&(n.minFilter=Tn),new Ih(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Hv=256,bL=3,AL=20,HM=256,GM=16,RL=3,CL=new K,PL=new it;class Xc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ih(1,10,null),this._boxMesh=new Zi(new ya(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=CL}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,v=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(PL));const g=new Ih(i,r,u);return g.position.copy(o),g.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=v,e.background=S,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Hv,e2(e))}_fromTexture(e,n){e.mapping===da||e.mapping===Lo?this._setSize(e.image.length===0?Hv:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Gv(e,!1,!1),i=Math.log2(e)-bL;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Gv(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===da||e.mapping===Lo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xv()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wv()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=LL(),this._integrationMaterial=DL());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/GM);for(let a=0;a<=i;a++){const o=Xc.lodToRoughness(a,i);if(a>i-RL)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(HM*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=NL());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Gv(t,e,n){return new Sm(t,{minFilter:Bi,generateMipmaps:e,type:bi,colorSpace:Hc,depthBuffer:n})}function qo(t,e,n){return new os({name:t,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:n,side:Cn,blending:Js,depthTest:!1,depthWrite:!1})}function LL(){return qo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${HM}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function DL(){return qo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:GM}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function NL(){return qo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${AL}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Wv(){return qo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Xv(){return qo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function IL(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===ad||p===od)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const S=new Sm(v.height);return S.fromEquirectangularTexture(t,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,v=p===ad||p===od,S=p===da||p===Lo;if(v||S){let g=n.get(d);const f=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new Xc(t)),g=v?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const m=d.image;return v&&m&&m.height>0||S&&m&&l(m)?(i===null&&(i=new Xc(t)),g=v?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,p){return p===ad?d.mapping=da:p===od&&(d.mapping=Lo),d}function l(d){let p=0;const v=6;for(let S=0;S<v;S++)d[S]!==void 0&&p++;return p===v}function c(d){const p=d.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function UL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&oc("WebGLRenderer: "+i+" extension not supported."),r}}}function FL(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(v=>delete r[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const g in v.attributes)e.remove(v.attributes[g]);v.removeEventListener("dispose",o),delete r[v.id],a.unregister(v);const S=s.get(v);S&&(e.remove(S),s.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,S){return r[S.id]!==void 0||(S.addEventListener("dispose",o),r[S.id]=new WeakRef(S),a.register(S,S.id,S),n.memory.geometries++),S}function u(v){const S=v.attributes;for(const g in S)e.update(S[g],t.ARRAY_BUFFER)}function h(v){const S=v.index,g=v.attributes.position;let f=0;if(g===void 0)return;const m=S!==null?S.array.length:g.array.length/3-1,_=g.count>=65535?PM:CM,y=new _(Math.ceil(m/3)*6,1),E=y.array;if(S!==null){const x=S.array;f=S.version;for(let M=0,F=0;M<m;M+=3){const L=x[M+0],N=x[M+1],U=x[M+2];E[F++]=L,E[F++]=N,E[F++]=N,E[F++]=U,E[F++]=U,E[F++]=L}}else{f=g.version;for(let x=0,M=0;x<m;x+=3){const F=x+0,L=x+1,N=x+2;E[M++]=F,E[M++]=L,E[M++]=L,E[M++]=N,E[M++]=N,E[M++]=F}}y.version=f;const b=s.get(v);b&&e.remove(b),s.set(v,y)}function d(v){const S=s.get(v);if(S){const g=v.index;g!==null&&S.version<g.version&&h(v)}else h(v);return s.get(v)}function p(){for(const v in r){const S=r[v].deref();S!==void 0&&l(S)}}return{get:c,update:u,getWireframeAttribute:d,dispose:p}}function OL(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function c(h,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,h*a,p),n.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let S=0;for(let g=0;g<p;g++)S+=d[g];n.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function kL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function BL(t,e,n){const i=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let L=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),S===!0&&(y=2),g===!0&&(y=3);let E=o.attributes.position.count*y,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const x=new Float32Array(E*b*4*h),M=new bM(x,E,b,h);M.type=xi,M.needsUpdate=!0;const F=y*4;for(let N=0;N<h;N++){const U=f[N],H=m[N],D=_[N],W=E*b*4*N;for(let Z=0;Z<U.count;Z++){const k=Z*F;v===!0&&(r.fromBufferAttribute(U,Z),x[W+k+0]=r.x,x[W+k+1]=r.y,x[W+k+2]=r.z,x[W+k+3]=0),S===!0&&(r.fromBufferAttribute(H,Z),x[W+k+4]=r.x,x[W+k+5]=r.y,x[W+k+6]=r.z,x[W+k+7]=0),g===!0&&(r.fromBufferAttribute(D,Z),x[W+k+8]=r.x,x[W+k+9]=r.y,x[W+k+10]=r.z,x[W+k+11]=D.itemSize===4?r.w:1)}}d={count:h,texture:M,size:new et(E,b)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const S=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function zL(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const VL={[oM]:"LINEAR_TONE_MAPPING",[lM]:"REINHARD_TONE_MAPPING",[cM]:"CINEON_TONE_MAPPING",[uM]:"ACES_FILMIC_TONE_MAPPING",[fM]:"AGX_TONE_MAPPING",[hM]:"NEUTRAL_TONE_MAPPING",[dM]:"CUSTOM_TONE_MAPPING"};function HL(t,e,n,i,r,s){const a=new wi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new ps;u.setAttribute("position",new Xi([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Xi([0,2,0,0,2,0],2));const h=new L2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Zi(u,h),p=new BM(-1,1,1,-1,0,1);let v=null,S=null,g=!1,f,m=null,_=[],y=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),l!==null&&l.setSize(E,b);for(let x=0;x<_.length;x++){const M=_[x];M.setSize&&M.setSize(E,b)}},this.setEffects=function(E){_=E,y=_.length>0&&_[0].isRenderPass===!0;const b=a.width,x=a.height;_.length>0&&o===null&&(o=new wi(b,x,{type:bi,depthBuffer:!1,stencilBuffer:!1}),l=new wi(b,x,{type:bi,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&_.some(F=>F.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new ha(b,x),s===!0&&(c.format=gr,c.type=fa)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let F=0;F<_.length;F++){const L=_[F];L.setSize&&L.setSize(b,x),M&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(E,b){if(g||E.toneMapping===Gi&&_.length===0)return!1;if(m=b,b!==null){const x=b.width,M=b.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return y===!1&&E.setRenderTarget(a),f=E.toneMapping,E.toneMapping=Gi,!0},this.hasRenderPass=function(){return y},this.end=function(E,b){E.toneMapping=f,g=!0;let x=a,M=o;for(let F=0;F<_.length;F++){const L=_[F];L.enabled!==!1&&(L.render(E,M,x,b),L.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(v!==E.outputColorSpace||S!==E.toneMapping){v=E.outputColorSpace,S=E.toneMapping,h.defines={},Ye.getTransfer(v)===ct&&(h.defines.SRGB_TRANSFER="");const F=VL[S];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(m),E.render(d,p),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}const WM=new cn,XM=new ha(1,1),jM=new IM(1),$M=new bM,qM=new l2,YM=new DM,jv=[],$v=[],qv=new Float32Array(16),Yv=new Float32Array(9),Kv=new Float32Array(4);function Sa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=jv[r];if(s===void 0&&(s=new Float32Array(r),jv[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vu(t,e){let n=$v[e];n===void 0&&(n=new Int32Array(e),$v[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function XL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function jL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function $L(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Kv.set(i),t.uniformMatrix2fv(this.addr,!1,Kv),kt(n,i)}}function qL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Yv.set(i),t.uniformMatrix3fv(this.addr,!1,Yv),kt(n,i)}}function YL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;qv.set(i),t.uniformMatrix4fv(this.addr,!1,qv),kt(n,i)}}function KL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function QL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function JL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function eD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function nD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function iD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function xu(t){return t.version===0&&(t.compareFunction=wM,t.needsUpdate=!0),t}function rD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=xu(XM):s=WM,n.setTexture2D(e||s,r)}function sD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qM,r)}function aD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=xu(jM):s=YM,n.setTextureCube(e||s,r)}function oD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$M,r)}function lD(t){switch(t){case 5126:return GL;case 35664:return WL;case 35665:return XL;case 35666:return jL;case 35674:return $L;case 35675:return qL;case 35676:return YL;case 5124:case 35670:return KL;case 35667:case 35671:return ZL;case 35668:case 35672:return QL;case 35669:case 35673:return JL;case 5125:return eD;case 36294:return tD;case 36295:return nD;case 36296:return iD;case 35678:case 36198:case 36298:case 36306:case 35682:return rD;case 35679:case 36299:case 36307:return sD;case 35680:case 36300:case 36308:case 36293:return aD;case 36289:case 36303:case 36311:case 36292:return oD}}function cD(t,e){t.uniform1fv(this.addr,e)}function uD(t,e){const n=Sa(e,this.size,2);t.uniform2fv(this.addr,n)}function dD(t,e){const n=Sa(e,this.size,3);t.uniform3fv(this.addr,n)}function fD(t,e){const n=Sa(e,this.size,4);t.uniform4fv(this.addr,n)}function hD(t,e){const n=Sa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pD(t,e){const n=Sa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mD(t,e){const n=Sa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gD(t,e){t.uniform1iv(this.addr,e)}function vD(t,e){t.uniform2iv(this.addr,e)}function xD(t,e){t.uniform3iv(this.addr,e)}function _D(t,e){t.uniform4iv(this.addr,e)}function yD(t,e){t.uniform1uiv(this.addr,e)}function SD(t,e){t.uniform2uiv(this.addr,e)}function MD(t,e){t.uniform3uiv(this.addr,e)}function ED(t,e){t.uniform4uiv(this.addr,e)}function wD(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=xu(XM):a=WM;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function TD(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||qM,s[a])}function bD(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=xu(jM):a=YM;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function AD(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||$M,s[a])}function RD(t){switch(t){case 5126:return cD;case 35664:return uD;case 35665:return dD;case 35666:return fD;case 35674:return hD;case 35675:return pD;case 35676:return mD;case 5124:case 35670:return gD;case 35667:case 35671:return vD;case 35668:case 35672:return xD;case 35669:case 35673:return _D;case 5125:return yD;case 36294:return SD;case 36295:return MD;case 36296:return ED;case 35678:case 36198:case 36298:case 36306:case 35682:return wD;case 35679:case 36299:case 36307:return TD;case 35680:case 36300:case 36308:case 36293:return bD;case 36289:case 36303:case 36311:case 36292:return AD}}class CD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lD(n.type)}}class PD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RD(n.type)}}class LD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function Zv(t,e){t.seq.push(e),t.map[e.id]=e}function DD(t,e,n){const i=t.name,r=i.length;for(Nd.lastIndex=0;;){const s=Nd.exec(i),a=Nd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Zv(n,c===void 0?new CD(o,t,e):new PD(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new LD(o),Zv(n,h)),n=h}}}class lc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);DD(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Qv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ND=37297;let ID=0;function UD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Jv=new Ve;function FD(t){Ye._getMatrix(Jv,Ye.workingColorSpace,t);const e=`mat3( ${Jv.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Gc:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ex(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+UD(t.getShaderSource(e),o)}else return s}function OD(t,e){const n=FD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const kD={[oM]:"Linear",[lM]:"Reinhard",[cM]:"Cineon",[uM]:"ACESFilmic",[fM]:"AgX",[hM]:"Neutral",[dM]:"Custom"};function BD(t,e){const n=kD[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zl=new K;function zD(){Ye.getLuminanceCoefficients(zl);const t=zl.x.toFixed(4),e=zl.y.toFixed(4),n=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function HD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function GD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ja(t){return t!==""}function tx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function nx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(t){return t.replace(WD,XD)}function XD(t,e){const n=Xe[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Uh(n)}const jD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ix(t){return t.replace(jD,$D)}function $D(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qD={[nc]:"SHADOWMAP_TYPE_PCF",[Xa]:"SHADOWMAP_TYPE_VSM"};function YD(t){return qD[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KD={[Lo]:"ENVMAP_MODE_REFRACTION"};function ZD(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":KD[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QD={[aM]:"ENVMAP_BLENDING_MULTIPLY",[OC]:"ENVMAP_BLENDING_MIX",[kC]:"ENVMAP_BLENDING_ADD"};function JD(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":QD[t.combine]||"ENVMAP_BLENDING_NONE"}function eN(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=YD(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ZD(n),h=JD(n),d=VD(n),p=HD(s),v=r.createProgram();let S,g,f=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(ja).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(ja).join(`
`),g.length>0&&(g+=`
`)):(S=[rx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),g=[rx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Gi?BD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,OD("linearToOutputTexel",n.outputColorSpace),zD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ja).join(`
`)),a=Uh(a),a=tx(a,n),a=nx(a,n),o=Uh(o),o=tx(o,n),o=nx(o,n),a=ix(a),o=ix(o),n.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const m=f+S+a,_=f+g+o,y=Qv(r,r.VERTEX_SHADER,m),E=Qv(r,r.FRAGMENT_SHADER,_);r.attachShader(v,y),r.attachShader(v,E),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(L){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(v)||"",U=r.getShaderInfoLog(y)||"",H=r.getShaderInfoLog(E)||"",D=N.trim(),W=U.trim(),Z=H.trim();let k=!0,V=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,y,E);else{const B=ex(r,y,"vertex"),C=ex(r,E,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+B+`
`+C)}else D!==""?ze("WebGLProgram: Program Info Log:",D):(W===""||Z==="")&&(V=!1);V&&(L.diagnostics={runnable:k,programLog:D,vertexShader:{log:W,prefix:S},fragmentShader:{log:Z,prefix:g}})}r.deleteShader(y),r.deleteShader(E),x=new lc(r,v),M=GD(r,v)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(v,ND)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ID++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=E,this}let tN=0;class nN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new iN(e),n.set(e,i)),i}}class iN{constructor(e){this.id=tN++,this.code=e,this.usedTimes=0}}function rN(t){return t===as||t===zc||t===Vc}function sN(t,e,n,i,r,s){const a=new AM,o=new nN,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,M,F,L,N,U){const H=L.fog,D=N.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||W,Z),V=d[x.type];let B=i.precision;x.precision!==null&&(B=i.getMaxPrecision(x.precision),B!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",B,"instead."));const C=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,A=C!==void 0?C.length:0;let Q=0;D.morphAttributes.position!==void 0&&(Q=1),D.morphAttributes.normal!==void 0&&(Q=2),D.morphAttributes.color!==void 0&&(Q=3);let le,G,ne,ae;if(V){const Ee=gi[V];le=Ee.vertexShader,G=Ee.fragmentShader}else{le=x.vertexShader,G=x.fragmentShader;const Ee=o.getVertexShaderStage(x),lt=o.getFragmentShaderStage(x);o.update(x,Ee,lt),ne=Ee.id,ae=lt.id}const oe=t.getRenderTarget(),J=t.state.buffers.depth.getReversed(),me=N.isInstancedMesh===!0,ke=N.isBatchedMesh===!0,Me=!!x.map,Re=!!x.matcap,Fe=!!k,Te=Fe&&k.isPMREMTexture===!0,Ze=!!x.aoMap,Qe=!!x.lightMap,Je=!!x.bumpMap&&x.wireframe===!1,tt=!!x.normalMap,Bt=!!x.displacementMap,ot=!!x.emissiveMap,_n=!!x.metalnessMap,yn=!!x.roughnessMap,Sn=x.anisotropy>0,z=x.clearcoat>0,Mn=x.diffuseRoughness>0,dt=x.dispersion>0,ht=x.retroreflectivity>0,Se=x.iridescence>0,At=x.sheen>0,Ie=x.transmission>0,Be=Sn&&!!x.anisotropyMap,P=z&&!!x.clearcoatMap,w=z&&!!x.clearcoatNormalMap,j=z&&!!x.clearcoatRoughnessMap,ce=Mn&&!!x.diffuseRoughnessMap,se=Se&&!!x.iridescenceMap,he=Se&&!!x.iridescenceThicknessMap,_e=At&&!!x.sheenColorMap,te=At&&!!x.sheenRoughnessMap,ie=!!x.specularMap,ge=!!x.specularColorMap,I=!!x.specularIntensityMap,re=Ie&&!!x.transmissionMap,ee=Ie&&!!x.thicknessMap,ve=!!x.gradientMap,fe=!!x.alphaMap,pe=x.alphaTest>0,Ne=!!x.alphaHash,We=!!x.extensions;let de=Gi;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(de=t.toneMapping);const Ue=Te?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Ge={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:G,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:B,batching:ke,batchingColor:ke&&N._colorsTexture!==null,instancing:me,instancingColor:me&&N.instanceColor!==null,instancingMorph:me&&N.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Me,matcap:Re,envMap:Fe,envMapMode:Fe&&k.mapping,envMapPMREM:Te,envMapMaxLod:Te?Ue.length-1:null,envMapSize:Te?Ue[0].width:null,aoMap:Ze,lightMap:Qe,bumpMap:Je,normalMap:tt,displacementMap:Bt,emissiveMap:ot,normalMapObjectSpace:tt&&x.normalMapType===VC,normalMapTangentSpace:tt&&x.normalMapType===Dh,packedNormalMap:tt&&x.normalMapType===Dh&&rN(x.normalMap.format),metalnessMap:_n,roughnessMap:yn,anisotropy:Sn,anisotropyMap:Be,clearcoat:z,clearcoatMap:P,clearcoatNormalMap:w,clearcoatRoughnessMap:j,diffuseRoughness:Mn,diffuseRoughnessMap:ce,dispersion:dt,retroreflection:ht,iridescence:Se,iridescenceMap:se,iridescenceThicknessMap:he,sheen:At,sheenColorMap:_e,sheenRoughnessMap:te,specularMap:ie,specularColorMap:ge,specularIntensityMap:I,transmission:Ie,transmissionMap:re,thicknessMap:ee,gradientMap:ve,opaque:x.transparent===!1&&x.blending===ao&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:pe,alphaHash:Ne,combine:x.combine,mapUv:Me&&p(x.map.channel),aoMapUv:Ze&&p(x.aoMap.channel),lightMapUv:Qe&&p(x.lightMap.channel),bumpMapUv:Je&&p(x.bumpMap.channel),normalMapUv:tt&&p(x.normalMap.channel),displacementMapUv:Bt&&p(x.displacementMap.channel),emissiveMapUv:ot&&p(x.emissiveMap.channel),metalnessMapUv:_n&&p(x.metalnessMap.channel),roughnessMapUv:yn&&p(x.roughnessMap.channel),anisotropyMapUv:Be&&p(x.anisotropyMap.channel),clearcoatMapUv:P&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:se&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&p(x.sheenRoughnessMap.channel),specularMapUv:ie&&p(x.specularMap.channel),specularColorMapUv:ge&&p(x.specularColorMap.channel),specularIntensityMapUv:I&&p(x.specularIntensityMap.channel),transmissionMapUv:re&&p(x.transmissionMap.channel),thicknessMapUv:ee&&p(x.thicknessMap.channel),alphaMapUv:fe&&p(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(tt||Sn),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(Me||fe),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:J,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:Q,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:de,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:ot&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:We&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&x.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function S(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)M.push(F),M.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(g(M,x),f(M,x),M.push(t.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function g(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function f(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function m(x){const M=d[x.type];let F;if(M){const L=gi[M];F=R2.clone(L.uniforms)}else F=x.uniforms;return F}function _(x,M){let F=u.get(M);return F!==void 0?++F.usedTimes:(F=new eN(t,M,x,r),c.push(F),u.set(M,F)),F}function y(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function b(){o.dispose()}return{getParameters:v,getProgramCacheKey:S,getUniforms:m,acquireProgram:_,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:b}}function aN(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function oN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function sx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ax(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,v,S,g,f){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:v,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:g,group:f},t[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=v,m.materialVariant=a(d),m.groupOrder=S,m.renderOrder=d.renderOrder,m.z=g,m.group=f),e++,m}function l(d,p,v,S,g,f,m){m.reversedDepth===!0&&(g=-g);const _=o(d,p,v,S,g,f);v.transmission>0?i.push(_):v.transparent===!0?r.push(_):n.push(_)}function c(d,p,v,S,g,f){const m=o(d,p,v,S,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,p){n.length>1&&n.sort(d||oN),i.length>1&&i.sort(p||sx),r.length>1&&r.sort(p||sx)}function h(){for(let d=e,p=t.length;d<p;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function lN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new ax,t.set(i,[a])):r>=s.length?(a=new ax,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function cN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new K,color:new it};break;case"SpotLight":n={position:new K,direction:new K,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function uN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dN=0;function fN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hN(t){const e=new cN,n=uN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new Tt,a=new Tt;function o(c){let u=0,h=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,v=0,S=0,g=0,f=0,m=0,_=0,y=0,E=0,b=0,x=0,M=0,F=0,L=0;c.sort(fN);for(let U=0,H=c.length;U<H;U++){const D=c[U],W=D.color,Z=D.intensity,k=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===as?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=W.r*Z,h+=W.g*Z,d+=W.b*Z;else if(D.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(D.sh.coefficients[B],Z);L++}else if(D.isSunLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const C=D.shadow,A=n.get(D);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),i.sunShadow[v]=A,i.sunShadowMap[v]=V;const Q=C.getViewportCount();for(let le=0;le<Q;le++)i.sunShadowMatrix[S+le]=C.getMatrix(le),i.sunShadowCascade[S+le]=C._cascadeData[le];S+=Q,v++}i.sun[p]=B,p++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const C=D.shadow,A=n.get(D);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,i.directionalShadow[g]=A,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=D.shadow.matrix,E++}i.directional[g]=B,g++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(W).multiplyScalar(Z),B.distance=k,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,i.spot[m]=B;const C=D.shadow;if(D.map&&(i.spotLightMap[M]=D.map,M++,C.updateMatrices(D),D.castShadow&&F++),i.spotLightMatrix[m]=C.matrix,D.castShadow){const A=n.get(D);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,i.spotShadow[m]=A,i.spotShadowMap[m]=V,x++}m++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(W).multiplyScalar(Z),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=B,_++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const C=D.shadow,A=n.get(D);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,A.shadowCameraNear=C.camera.near,A.shadowCameraFar=C.camera.far,i.pointShadow[f]=A,i.pointShadowMap[f]=V,i.pointShadowMatrix[f]=D.shadow.matrix,b++}i.point[f]=B,f++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(Z),B.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[y]=B,y++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const N=i.hash;(N.sunLength!==p||N.directionalLength!==g||N.pointLength!==f||N.spotLength!==m||N.rectAreaLength!==_||N.hemiLength!==y||N.numSunShadows!==v||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==x||N.numSpotMaps!==M||N.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=g,i.spot.length=m,i.rectArea.length=_,i.point.length=f,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-F,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=L,N.sunLength=p,N.directionalLength=g,N.pointLength=f,N.spotLength=m,N.rectAreaLength=_,N.hemiLength=y,N.numSunShadows=v,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=x,N.numSpotMaps=M,N.numLightProbes=L,i.version=dN++)}function l(c,u){let h=0,d=0,p=0,v=0,S=0,g=0;const f=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){const y=c[m];if(y.isSunLight){const E=i.sun[h];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),h++}else if(y.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),d++}else if(y.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const E=i.rectArea[S];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:i}}function ox(t){const e=new hN(t),n=[],i=[],r=[];function s(h){u.camera=h,n.length=0,i.length=0,r.length=0}function a(h){h.isLightProbeGrid?r.push(h):n.push(h)}function o(h){i.push(h)}function l(){e.setup(n),r.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function pN(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ox(t),e.set(r,[o])):s>=a.length?(o=new ox(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const mN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vN=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],xN=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],lx=new Tt,Fa=new K,Id=new K;function _N(t,e,n){let i=new Io;const r=new et,s=new et,a=new Et,o=new N2,l=new I2,c={},u=n.maxTextureSize,h={[ss]:Cn,[Cn]:ss,[Ui]:Ui},d=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:mN,fragmentShader:gN}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new ps;v.setAttribute("position",new Jr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Zi(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let f=this.type;this.render=function(b,x,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===iM&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nc);const F=t.getRenderTarget(),L=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Js),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=f!==this.type;H&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(W=>W.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,W=b.length;D<W;D++){const Z=b[D],k=Z.shadow;if(k===void 0){ze("WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const V=k.getFrameExtents();r.multiply(V),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,k.mapSize.y=s.y));const B=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=B,k.map===null||H===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Xa){if(Z.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new wi(r.x,r.y,{format:as,type:bi,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),k.map.texture.name=Z.name+".shadowMap",k.map.depthTexture=new ha(r.x,r.y,xi),k.map.depthTexture.name=Z.name+".shadowMapDepth",k.map.depthTexture.format=Cr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Yt,k.map.depthTexture.magFilter=Yt}else Z.isPointLight?(k.map=new Sm(r.x),k.map.depthTexture=new IM(r.x,Ti)):(k.map=new wi(r.x,r.y),k.map.depthTexture=new ha(r.x,r.y,Ti)),k.map.depthTexture.name=Z.name+".shadowMap",k.map.depthTexture.format=Cr,this.type===nc?(k.map.depthTexture.compareFunction=B?EM:MM,k.map.depthTexture.minFilter=Tn,k.map.depthTexture.magFilter=Tn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Yt,k.map.depthTexture.magFilter=Yt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);const C=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Z.isPointLight!==!0&&k.updateMatrices(Z,M);const A=k.camera.layers.mask&4294967294?k.camera.layers:M.layers;for(let Q=0;Q<C;Q++){const le=k.getCamera(Q);if(Z.isPointLight){const G=k.camera,ne=k.matrix,ae=Z.distance||G.far;ae!==G.far&&(G.far=ae,G.updateProjectionMatrix()),Fa.setFromMatrixPosition(Z.matrixWorld),G.position.copy(Fa),Id.copy(G.position),Id.add(vN[Q]),G.up.copy(xN[Q]),G.lookAt(Id),G.updateMatrixWorld(),ne.makeTranslation(-Fa.x,-Fa.y,-Fa.z),lx.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),k._frustum.setFromProjectionMatrix(lx,G.coordinateSystem,G.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,Q),t.clear();else{Q===0&&(t.setRenderTarget(k.map),t.clear());const G=k.getViewport(Q);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),U.viewport(a)}i=k.getFrustum(Q),y(x,M,le,Z,A,this.type)}k.isPointLightShadow!==!0&&this.type===Xa&&m(k,M),k.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(F,L,N)};function m(b,x){const M=e.update(S);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new wi(r.x,r.y,{format:as,type:bi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(x,null,M,d,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(x,null,M,p,S,null)}function _(b,x,M,F){let L=null;const N=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)L=N;else if(L=M.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const U=L.uuid,H=x.uuid;let D=c[U];D===void 0&&(D={},c[U]=D);let W=D[H];W===void 0&&(W=L.clone(),D[H]=W,x.addEventListener("dispose",E)),L=W}if(L.visible=x.visible,L.wireframe=x.wireframe,F===Xa?L.side=x.shadowSide!==null?x.shadowSide:x.side:L.side=x.shadowSide!==null?x.shadowSide:h[x.side],L.alphaMap=x.alphaMap,L.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,M.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const U=t.properties.get(L);U.light=M}return L}function y(b,x,M,F,L,N){if(b.visible===!1)return;if(b.layers.test(L)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===Xa)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const D=e.update(b),W=b.material;if(Array.isArray(W)){const Z=D.groups;for(let k=0,V=Z.length;k<V;k++){const B=Z[k],C=W[B.materialIndex];if(C&&C.visible){const A=_(b,C,F,N);b.onBeforeShadow(t,b,x,M,D,A,B),t.renderBufferDirect(M,null,D,A,b,B),b.onAfterShadow(t,b,x,M,D,A,B)}}}else if(W.visible){const Z=_(b,W,F,N);b.onBeforeShadow(t,b,x,M,D,Z,null),t.renderBufferDirect(M,null,D,Z,b,null),b.onAfterShadow(t,b,x,M,D,Z,null)}}const H=b.children;for(let D=0,W=H.length;D<W;D++)y(H[D],x,M,F,L,N)}function E(b){b.target.removeEventListener("dispose",E);for(const M in c){const F=c[M],L=b.target.uuid;L in F&&(F[L].dispose(),delete F[L])}}}function yN(t,e){function n(){let I=!1;const re=new Et;let ee=null;const ve=new Et(0,0,0,0);return{setMask:function(fe){ee!==fe&&!I&&(t.colorMask(fe,fe,fe,fe),ee=fe)},setLocked:function(fe){I=fe},setClear:function(fe,pe,Ne,We,de){de===!0&&(fe*=We,pe*=We,Ne*=We),re.set(fe,pe,Ne,We),ve.equals(re)===!1&&(t.clearColor(fe,pe,Ne,We),ve.copy(re))},reset:function(){I=!1,ee=null,ve.set(-1,0,0,0)}}}function i(){let I=!1,re=!1,ee=null,ve=null,fe=null;return{setReversed:function(pe){if(re!==pe){const Ne=e.get("EXT_clip_control");pe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),re=pe;const We=fe;fe=null,this.setClear(We)}},getReversed:function(){return re},setTest:function(pe){pe?J(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(pe){ee!==pe&&!I&&(t.depthMask(pe),ee=pe)},setFunc:function(pe){if(re&&(pe=QC[pe]),ve!==pe){switch(pe){case $f:t.depthFunc(t.NEVER);break;case qf:t.depthFunc(t.ALWAYS);break;case Yf:t.depthFunc(t.LESS);break;case Po:t.depthFunc(t.LEQUAL);break;case Kf:t.depthFunc(t.EQUAL);break;case Zf:t.depthFunc(t.GEQUAL);break;case Qf:t.depthFunc(t.GREATER);break;case Jf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=pe}},setLocked:function(pe){I=pe},setClear:function(pe){fe!==pe&&(fe=pe,re&&(pe=1-pe),t.clearDepth(pe))},reset:function(){I=!1,ee=null,ve=null,fe=null,re=!1}}}function r(){let I=!1,re=null,ee=null,ve=null,fe=null,pe=null,Ne=null,We=null,de=null;return{setTest:function(Ue){I||(Ue?J(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(Ue){re!==Ue&&!I&&(t.stencilMask(Ue),re=Ue)},setFunc:function(Ue,Ge,Ee){(ee!==Ue||ve!==Ge||fe!==Ee)&&(t.stencilFunc(Ue,Ge,Ee),ee=Ue,ve=Ge,fe=Ee)},setOp:function(Ue,Ge,Ee){(pe!==Ue||Ne!==Ge||We!==Ee)&&(t.stencilOp(Ue,Ge,Ee),pe=Ue,Ne=Ge,We=Ee)},setLocked:function(Ue){I=Ue},setClear:function(Ue){de!==Ue&&(t.clearStencil(Ue),de=Ue)},reset:function(){I=!1,re=null,ee=null,ve=null,fe=null,pe=null,Ne=null,We=null,de=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let u={},h={},d={},p=new WeakMap,v=[],S=null,g=!1,f=null,m=null,_=null,y=null,E=null,b=null,x=null,M=new it(0,0,0),F=0,L=!1,N=null,U=null,H=null,D=null,W=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,V=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=V>=2);let C=null,A={};const Q=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),G=new Et().fromArray(Q),ne=new Et().fromArray(le);function ae(I,re,ee,ve){const fe=new Uint8Array(4),pe=t.createTexture();t.bindTexture(I,pe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<ee;Ne++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(re+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return pe}const oe={};oe[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(t.DEPTH_TEST),a.setFunc(Po),Je(!1),tt(hv),J(t.CULL_FACE),Ze(Js);function J(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function me(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function ke(I,re){return d[I]!==re?(t.bindFramebuffer(I,re),d[I]=re,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=re),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Me(I,re){let ee=v,ve=!1;if(I){ee=p.get(re),ee===void 0&&(ee=[],p.set(re,ee));const fe=I.textures;if(ee.length!==fe.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Ne=fe.length;pe<Ne;pe++)ee[pe]=t.COLOR_ATTACHMENT0+pe;ee.length=fe.length,ve=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ve=!0);ve&&t.drawBuffers(ee)}function Re(I){return S!==I?(t.useProgram(I),S=I,!0):!1}const Fe={[Cs]:t.FUNC_ADD,[yC]:t.FUNC_SUBTRACT,[SC]:t.FUNC_REVERSE_SUBTRACT};Fe[MC]=t.MIN,Fe[EC]=t.MAX;const Te={[wC]:t.ZERO,[TC]:t.ONE,[bC]:t.SRC_COLOR,[rM]:t.SRC_ALPHA,[DC]:t.SRC_ALPHA_SATURATE,[PC]:t.DST_COLOR,[RC]:t.DST_ALPHA,[AC]:t.ONE_MINUS_SRC_COLOR,[sM]:t.ONE_MINUS_SRC_ALPHA,[LC]:t.ONE_MINUS_DST_COLOR,[CC]:t.ONE_MINUS_DST_ALPHA,[NC]:t.CONSTANT_COLOR,[IC]:t.ONE_MINUS_CONSTANT_COLOR,[UC]:t.CONSTANT_ALPHA,[FC]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(I,re,ee,ve,fe,pe,Ne,We,de,Ue){if(I===Js){g===!0&&(me(t.BLEND),g=!1);return}if(g===!1&&(J(t.BLEND),g=!0),I!==_C){if(I!==f||Ue!==L){if((m!==Cs||E!==Cs)&&(t.blendEquation(t.FUNC_ADD),m=Cs,E=Cs),Ue)switch(I){case ao:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pv:t.blendFunc(t.ONE,t.ONE);break;case mv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",I);break}else switch(I){case ao:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mv:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gv:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",I);break}_=null,y=null,b=null,x=null,M.set(0,0,0),F=0,f=I,L=Ue}return}fe=fe||re,pe=pe||ee,Ne=Ne||ve,(re!==m||fe!==E)&&(t.blendEquationSeparate(Fe[re],Fe[fe]),m=re,E=fe),(ee!==_||ve!==y||pe!==b||Ne!==x)&&(t.blendFuncSeparate(Te[ee],Te[ve],Te[pe],Te[Ne]),_=ee,y=ve,b=pe,x=Ne),(We.equals(M)===!1||de!==F)&&(t.blendColor(We.r,We.g,We.b,de),M.copy(We),F=de),f=I,L=!1}function Qe(I,re){I.side===Ui?me(t.CULL_FACE):J(t.CULL_FACE);let ee=I.side===Cn;re&&(ee=!ee),Je(ee),I.blending===ao&&I.transparent===!1?Ze(Js):Ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ve=I.stencilWrite;o.setTest(ve),ve&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Je(I){N!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),N=I)}function tt(I){I!==vC?(J(t.CULL_FACE),I!==U&&(I===hv?t.cullFace(t.BACK):I===xC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),U=I}function Bt(I){I!==H&&(k&&t.lineWidth(I),H=I)}function ot(I,re,ee){I?(J(t.POLYGON_OFFSET_FILL),(D!==re||W!==ee)&&(D=re,W=ee,a.getReversed()&&(re=-re,ee=-ee),t.polygonOffset(re,ee))):me(t.POLYGON_OFFSET_FILL)}function _n(I){I?J(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function yn(I){I===void 0&&(I=t.TEXTURE0+Z-1),C!==I&&(t.activeTexture(I),C=I)}function Sn(I,re,ee){ee===void 0&&(C===null?ee=t.TEXTURE0+Z-1:ee=C);let ve=A[ee];ve===void 0&&(ve={type:void 0,texture:void 0},A[ee]=ve),(ve.type!==I||ve.texture!==re)&&(C!==ee&&(t.activeTexture(ee),C=ee),t.bindTexture(I,re||oe[I]),ve.type=I,ve.texture=re)}function z(){const I=A[C];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Mn(){try{t.compressedTexImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function dt(){try{t.compressedTexImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function ht(){try{t.texSubImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function Se(){try{t.texSubImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function At(){try{t.compressedTexSubImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function Ie(){try{t.compressedTexSubImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function Be(){try{t.texStorage2D(...arguments)}catch(I){at("WebGLState:",I)}}function P(){try{t.texStorage3D(...arguments)}catch(I){at("WebGLState:",I)}}function w(){try{t.texImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function j(){try{t.texImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function ce(I){return h[I]!==void 0?h[I]:t.getParameter(I)}function se(I,re){h[I]!==re&&(t.pixelStorei(I,re),h[I]=re)}function he(I){G.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),G.copy(I))}function _e(I){ne.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ne.copy(I))}function te(I,re){let ee=c.get(re);ee===void 0&&(ee=new WeakMap,c.set(re,ee));let ve=ee.get(I);ve===void 0&&(ve=t.getUniformBlockIndex(re,I.name),t.uniformBlockBinding(re,ve,ve),ee.set(I,ve))}function ie(I,re,ee){const fe=c.get(re).get(I);l[fe]!==ee&&(t.bindBufferBase(t.UNIFORM_BUFFER,fe,ee),l[fe]=ee)}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},C=null,A={},d={},l={},p=new WeakMap,v=[],S=null,g=!1,f=null,m=null,_=null,y=null,E=null,b=null,x=null,M=new it(0,0,0),F=0,L=!1,N=null,U=null,H=null,D=null,W=null,G.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:me,bindFramebuffer:ke,drawBuffers:Me,useProgram:Re,setBlending:Ze,setMaterial:Qe,setFlipSided:Je,setCullFace:tt,setLineWidth:Bt,setPolygonOffset:ot,setScissorTest:_n,activeTexture:yn,bindTexture:Sn,unbindTexture:z,compressedTexImage2D:Mn,compressedTexImage3D:dt,texImage2D:w,texImage3D:j,pixelStorei:se,getParameter:ce,updateUBOMapping:te,uniformBlockBinding:ie,texStorage2D:Be,texStorage3D:P,texSubImage2D:ht,texSubImage3D:Se,compressedTexSubImage2D:At,compressedTexSubImage3D:Ie,scissor:he,viewport:_e,reset:ge}}function SN(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap,h=new Set;let d;const p=new WeakMap,v=new Set,S=new FinalizationRegistry(P=>v.delete(P));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(P,w){return g?new OffscreenCanvas(P,w):Wc("canvas")}function m(P,w,j){let ce=1;const se=Be(P);if((se.width>j||se.height>j)&&(ce=j/Math.max(se.width,se.height)),ce<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(ce*se.width),_e=Math.floor(ce*se.height);d===void 0&&(d=f(he,_e));const te=w?f(he,_e):d;return te.width=he,te.height=_e,te.getContext("2d").drawImage(P,0,0,he,_e),ze("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+he+"x"+_e+")."),te}else return"data"in P&&ze("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function _(P){return P.generateMipmaps}function y(P){t.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(P,w,j,ce,se,he=!1){if(P!==null){if(t[P]!==void 0)return t[P];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _e;ce&&(_e=e.get("EXT_texture_norm16"),_e||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=w;if(w===t.RED&&(j===t.FLOAT&&(te=t.R32F),j===t.HALF_FLOAT&&(te=t.R16F),j===t.UNSIGNED_BYTE&&(te=t.R8),j===t.UNSIGNED_SHORT&&_e&&(te=_e.R16_EXT),j===t.SHORT&&_e&&(te=_e.R16_SNORM_EXT)),w===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(te=t.R8UI),j===t.UNSIGNED_SHORT&&(te=t.R16UI),j===t.UNSIGNED_INT&&(te=t.R32UI),j===t.BYTE&&(te=t.R8I),j===t.SHORT&&(te=t.R16I),j===t.INT&&(te=t.R32I)),w===t.RG&&(j===t.FLOAT&&(te=t.RG32F),j===t.HALF_FLOAT&&(te=t.RG16F),j===t.UNSIGNED_BYTE&&(te=t.RG8),j===t.UNSIGNED_SHORT&&_e&&(te=_e.RG16_EXT),j===t.SHORT&&_e&&(te=_e.RG16_SNORM_EXT)),w===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(te=t.RG8UI),j===t.UNSIGNED_SHORT&&(te=t.RG16UI),j===t.UNSIGNED_INT&&(te=t.RG32UI),j===t.BYTE&&(te=t.RG8I),j===t.SHORT&&(te=t.RG16I),j===t.INT&&(te=t.RG32I)),w===t.RGB_INTEGER&&(j===t.UNSIGNED_BYTE&&(te=t.RGB8UI),j===t.UNSIGNED_SHORT&&(te=t.RGB16UI),j===t.UNSIGNED_INT&&(te=t.RGB32UI),j===t.BYTE&&(te=t.RGB8I),j===t.SHORT&&(te=t.RGB16I),j===t.INT&&(te=t.RGB32I)),w===t.RGBA_INTEGER&&(j===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),j===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),j===t.UNSIGNED_INT&&(te=t.RGBA32UI),j===t.BYTE&&(te=t.RGBA8I),j===t.SHORT&&(te=t.RGBA16I),j===t.INT&&(te=t.RGBA32I)),w===t.RGB&&(j===t.UNSIGNED_SHORT&&_e&&(te=_e.RGB16_EXT),j===t.SHORT&&_e&&(te=_e.RGB16_SNORM_EXT),j===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),j===t.UNSIGNED_INT_10F_11F_11F_REV&&(te=t.R11F_G11F_B10F)),w===t.RGBA){const ie=he?Gc:Ye.getTransfer(se);j===t.FLOAT&&(te=t.RGBA32F),j===t.HALF_FLOAT&&(te=t.RGBA16F),j===t.UNSIGNED_BYTE&&(te=ie===ct?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT&&_e&&(te=_e.RGBA16_EXT),j===t.SHORT&&_e&&(te=_e.RGBA16_SNORM_EXT),j===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(P,w){let j;return P?w===null||w===Ti||w===fa?j=t.DEPTH24_STENCIL8:w===xi?j=t.DEPTH32F_STENCIL8:w===Do&&(j=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ti||w===fa?j=t.DEPTH_COMPONENT24:w===xi?j=t.DEPTH_COMPONENT32F:w===Do&&(j=t.DEPTH_COMPONENT16),j}function M(P,w){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yt&&P.minFilter!==Tn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function F(P){const w=new WeakRef(P);i.get(P).__ref=w,v.add(w),S.register(P,w,w)}function L(P){const w=i.get(P).__ref;w!==void 0&&(v.delete(w),S.unregister(w))}function N(P){H(P.target)}function U(P){D(P.target)}function H(P){P.removeEventListener("dispose",N),L(P),Z(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&h.delete(P)}function D(P){P.removeEventListener("dispose",U),L(P),V(P)}function W(){for(const P of v){const w=P.deref();w!==void 0&&(w.isRenderTarget===!0?D(w):H(w))}v.clear(),h.clear()}function Z(P){const w=i.get(P);if(w.__webglInit===void 0)return;const j=P.source,ce=p.get(j);if(ce){const se=ce[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&k(P),Object.keys(ce).length===0&&p.delete(j)}i.remove(P)}function k(P){const w=i.get(P);t.deleteTexture(w.__webglTexture);const j=P.source,ce=p.get(j);delete ce[w.__cacheKey],a.memory.textures--}function V(P){const w=i.get(P);w.__depthDisposeCallback&&w.__depthDisposeCallback();const j=P.depthTexture;if(j&&j.renderTarget===P&&H(j),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(w.__webglFramebuffer[se]))for(let he=0;he<w.__webglFramebuffer[se].length;he++)t.deleteFramebuffer(w.__webglFramebuffer[se][he]);else t.deleteFramebuffer(w.__webglFramebuffer[se]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[se])}else{if(Array.isArray(w.__webglFramebuffer))for(let se=0;se<w.__webglFramebuffer.length;se++)t.deleteFramebuffer(w.__webglFramebuffer[se]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let se=0;se<w.__webglColorRenderbuffer.length;se++)w.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[se]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ce=P.textures;for(let se=0,he=ce.length;se<he;se++){const _e=i.get(ce[se]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(ce[se])}i.remove(P)}let B=0;function C(){B=0}function A(){return B}function Q(P){B=P}function le(){const P=B;return P>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,P}function G(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.mipmapsAutoUpdate),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function ne(P,w){const j=i.get(P);if(P.isVideoTexture&&At(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&j.__version!==P.version){const ce=P.image;if(ce===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(j,P,w);return}}else P.isExternalTexture&&(j.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+w)}function ae(P,w){const j=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){Qe(j,P,w);return}else P.isExternalTexture&&(j.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+w)}function oe(P,w){const j=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){Qe(j,P,w);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+w)}function J(P,w){const j=i.get(P);if(P.version>0&&j.__version!==P.version){Je(j,P,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+w)}const me={[eh]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[th]:t.MIRRORED_REPEAT},ke={[Yt]:t.NEAREST,[BC]:t.NEAREST_MIPMAP_NEAREST,[xl]:t.NEAREST_MIPMAP_LINEAR,[Tn]:t.LINEAR,[ld]:t.LINEAR_MIPMAP_NEAREST,[Bi]:t.LINEAR_MIPMAP_LINEAR},Me={[GC]:t.NEVER,[wM]:t.ALWAYS,[WC]:t.LESS,[MM]:t.LEQUAL,[XC]:t.EQUAL,[EM]:t.GEQUAL,[jC]:t.GREATER,[$C]:t.NOTEQUAL};function Re(P,w){if(w.type===xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Tn||w.magFilter===ld||w.magFilter===xl||w.magFilter===Bi||w.minFilter===Tn||w.minFilter===ld||w.minFilter===xl||w.minFilter===Bi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,me[w.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,me[w.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,me[w.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ke[w.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ke[w.minFilter]),w.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Me[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yt||w.minFilter!==xl&&w.minFilter!==Bi||w.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Fe(P,w){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",N),F(w));const ce=w.source;let se=p.get(ce);se===void 0&&(se={},p.set(ce,se));const he=G(w);if(he!==P.__cacheKey){se[he]===void 0&&(se[he]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,j=!0),se[he].usedTimes++;const _e=se[P.__cacheKey];_e!==void 0&&(se[P.__cacheKey].usedTimes--,_e.usedTimes===0&&k(w)),P.__cacheKey=he,P.__webglTexture=se[he].texture}return j}function Te(P,w,j){return Math.floor(Math.floor(P/j)/w)}function Ze(P,w,j,ce){const he=P.updateRanges;if(he.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,j,ce,w.data);else{he.sort((I,re)=>I.start-re.start);let _e=0;for(let I=1;I<he.length;I++){const re=he[_e],ee=he[I],ve=re.start+re.count,fe=Te(ee.start,w.width,4),pe=Te(re.start,w.width,4);ee.start<=ve+1&&fe===pe&&Te(ee.start+ee.count-1,w.width,4)===fe?re.count=Math.max(re.count,ee.start+ee.count-re.start):(++_e,he[_e]=ee)}he.length=_e+1;const te=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let I=0,re=he.length;I<re;I++){const ee=he[I],ve=Math.floor(ee.start/4),fe=Math.ceil(ee.count/4),pe=ve%w.width,Ne=Math.floor(ve/w.width),We=fe,de=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ne),n.texSubImage2D(t.TEXTURE_2D,0,pe,Ne,We,de,j,ce,w.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,te),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function Qe(P,w,j){let ce=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ce=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ce=t.TEXTURE_3D);const se=Fe(P,w),he=w.source;n.bindTexture(ce,P.__webglTexture,t.TEXTURE0+j);const _e=i.get(he);if(he.version!==_e.__version||se===!0){if(n.activeTexture(t.TEXTURE0+j),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const de=Ye.getPrimaries(Ye.workingColorSpace),Ue=w.colorSpace===hr?null:Ye.getPrimaries(w.colorSpace),Ge=w.colorSpace===hr||de===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment);let ie=m(w.image,!1,r.maxTextureSize);ie=Ie(w,ie);const ge=s.convert(w.format,w.colorSpace),I=s.convert(w.type);let re=b(w.internalFormat,ge,I,w.normalized,w.colorSpace,w.isVideoTexture);Re(ce,w);let ee;const ve=w.mipmaps,fe=w.isVideoTexture!==!0,pe=_e.__version===void 0||se===!0,Ne=he.dataReady,We=M(w,ie);if(w.isDepthTexture)re=x(w.format===gr,w.type),pe&&(fe?n.texStorage2D(t.TEXTURE_2D,1,re,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,re,ie.width,ie.height,0,ge,I,null));else if(w.isDataTexture)if(ve.length>0){fe&&pe&&n.texStorage2D(t.TEXTURE_2D,We,re,ve[0].width,ve[0].height);for(let de=0,Ue=ve.length;de<Ue;de++)ee=ve[de],fe?Ne&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ee.width,ee.height,ge,I,ee.data):n.texImage2D(t.TEXTURE_2D,de,re,ee.width,ee.height,0,ge,I,ee.data);w.generateMipmaps=!1}else fe?(pe&&n.texStorage2D(t.TEXTURE_2D,We,re,ie.width,ie.height),Ne&&Ze(w,ie,ge,I)):n.texImage2D(t.TEXTURE_2D,0,re,ie.width,ie.height,0,ge,I,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){fe&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,re,ve[0].width,ve[0].height,ie.depth);for(let de=0,Ue=ve.length;de<Ue;de++)if(ee=ve[de],w.format!==_i)if(ge!==null)if(fe){if(Ne)if(w.layerUpdates.size>0){const Ge=Vv(ee.width,ee.height,w.format,w.type);for(const Ee of w.layerUpdates){const lt=ee.data.subarray(Ee*Ge/ee.data.BYTES_PER_ELEMENT,(Ee+1)*Ge/ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,Ee,ee.width,ee.height,1,ge,lt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ee.width,ee.height,ie.depth,ge,ee.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,re,ee.width,ee.height,ie.depth,0,ee.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Ne&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ee.width,ee.height,ie.depth,ge,I,ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,re,ee.width,ee.height,ie.depth,0,ge,I,ee.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{fe&&pe&&n.texStorage2D(t.TEXTURE_2D,We,re,ve[0].width,ve[0].height);for(let de=0,Ue=ve.length;de<Ue;de++)ee=ve[de],w.format!==_i?ge!==null?fe?Ne&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,ee.width,ee.height,ge,ee.data):n.compressedTexImage2D(t.TEXTURE_2D,de,re,ee.width,ee.height,0,ee.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Ne&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ee.width,ee.height,ge,I,ee.data):n.texImage2D(t.TEXTURE_2D,de,re,ee.width,ee.height,0,ge,I,ee.data)}else if(w.isDataArrayTexture)if(fe){if(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,re,ie.width,ie.height,ie.depth),Ne)if(w.layerUpdates.size>0){const de=Vv(ie.width,ie.height,w.format,w.type);for(const Ue of w.layerUpdates){const Ge=ie.data.subarray(Ue*de/ie.data.BYTES_PER_ELEMENT,(Ue+1)*de/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ue,ie.width,ie.height,1,ge,I,Ge)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,I,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,re,ie.width,ie.height,ie.depth,0,ge,I,ie.data);else if(w.isData3DTexture)fe?(pe&&n.texStorage3D(t.TEXTURE_3D,We,re,ie.width,ie.height,ie.depth),Ne&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,I,ie.data)):n.texImage3D(t.TEXTURE_3D,0,re,ie.width,ie.height,ie.depth,0,ge,I,ie.data);else if(w.isFramebufferTexture){if(pe)if(fe)n.texStorage2D(t.TEXTURE_2D,We,re,ie.width,ie.height);else{let de=ie.width,Ue=ie.height;for(let Ge=0;Ge<We;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,re,de,Ue,0,ge,I,null),de>>=1,Ue>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in t){const de=t.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),ie.parentNode!==de){de.appendChild(ie),h.add(w),de.onpaint=Ue=>{const Ge=Ue.changedElements;for(const Ee of h)Ge.includes(Ee.image)&&(Ee.needsUpdate=!0)},de.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const Ge=t.RGBA,Ee=t.RGBA,lt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ge,Ee,lt,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ve.length>0){if(fe&&pe){const de=Be(ve[0]);n.texStorage2D(t.TEXTURE_2D,We,re,de.width,de.height)}for(let de=0,Ue=ve.length;de<Ue;de++)ee=ve[de],fe?Ne&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ge,I,ee):n.texImage2D(t.TEXTURE_2D,de,re,ge,I,ee);w.generateMipmaps=!1}else if(fe){if(pe){const de=Be(ie);n.texStorage2D(t.TEXTURE_2D,We,re,de.width,de.height)}Ne&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,I,ie)}else n.texImage2D(t.TEXTURE_2D,0,re,ge,I,ie);_(w)&&w.mipmapsAutoUpdate===!0&&y(ce),_e.__version=he.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Je(P,w,j){if(w.image.length!==6)return;const ce=Fe(P,w),se=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+j);const he=i.get(se);if(se.version!==he.__version||ce===!0){n.activeTexture(t.TEXTURE0+j);const _e=Ye.getPrimaries(Ye.workingColorSpace),te=w.colorSpace===hr?null:Ye.getPrimaries(w.colorSpace),ie=w.colorSpace===hr||_e===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ge=w.isCompressedTexture||w.image[0].isCompressedTexture,I=w.image[0]&&w.image[0].isDataTexture,re=[];for(let Ee=0;Ee<6;Ee++)!ge&&!I?re[Ee]=m(w.image[Ee],!0,r.maxCubemapSize):re[Ee]=I?w.image[Ee].image:w.image[Ee],re[Ee]=Ie(w,re[Ee]);const ee=re[0],ve=s.convert(w.format,w.colorSpace),fe=s.convert(w.type);let pe=b(w.internalFormat,ve,fe,w.normalized,w.colorSpace);const Ne=w.isVideoTexture!==!0,We=he.__version===void 0||ce===!0,de=se.dataReady;let Ue=M(w,ee);Re(t.TEXTURE_CUBE_MAP,w);let Ge;if(w.isDepthTexture){if(pe=x(w.format===gr,w.type),We)if(Ne)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,pe,ee.width,ee.height);else for(let Ee=0;Ee<6;Ee++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,pe,ee.width,ee.height,0,ve,fe,null)}else if(ge){Ne&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,pe,ee.width,ee.height);for(let Ee=0;Ee<6;Ee++){Ge=re[Ee].mipmaps;for(let lt=0;lt<Ge.length;lt++){const zt=Ge[lt];w.format!==_i?ve!==null?Ne?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,lt,0,0,zt.width,zt.height,ve,zt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,lt,pe,zt.width,zt.height,0,zt.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,lt,0,0,zt.width,zt.height,ve,fe,zt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,lt,pe,zt.width,zt.height,0,ve,fe,zt.data)}}}else{if(Ge=w.mipmaps,Ne&&We){Ge.length>0&&Ue++;const Ee=Be(re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,pe,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(I){Ne?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,re[Ee].width,re[Ee].height,ve,fe,re[Ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,pe,re[Ee].width,re[Ee].height,0,ve,fe,re[Ee].data);for(let lt=0;lt<Ge.length;lt++){const Ji=Ge[lt].image[Ee].image;Ne?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,lt+1,0,0,Ji.width,Ji.height,ve,fe,Ji.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,lt+1,pe,Ji.width,Ji.height,0,ve,fe,Ji.data)}}else{Ne?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ve,fe,re[Ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,pe,ve,fe,re[Ee]);for(let lt=0;lt<Ge.length;lt++){const zt=Ge[lt];Ne?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,lt+1,0,0,ve,fe,zt.image[Ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,lt+1,pe,ve,fe,zt.image[Ee])}}}_(w)&&w.mipmapsAutoUpdate===!0&&y(t.TEXTURE_CUBE_MAP),he.__version=se.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function tt(P,w,j,ce,se,he){const _e=s.convert(j.format,j.colorSpace),te=s.convert(j.type),ie=b(j.internalFormat,_e,te,j.normalized,j.colorSpace),ge=i.get(w),I=i.get(j);if(I.__renderTarget=w,!ge.__hasExternalTextures){const re=Math.max(1,w.width>>he),ee=Math.max(1,w.height>>he);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,he,ie,re,ee,w.depth,0,_e,te,null):n.texImage2D(se,he,ie,re,ee,0,_e,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Se(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,se,I.__webglTexture,0,ht(w)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ce,se,I.__webglTexture,he),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Bt(P,w,j){if(t.bindRenderbuffer(t.RENDERBUFFER,P),w.depthBuffer){const ce=w.depthTexture,se=ce&&ce.isDepthTexture?ce.type:null,he=x(w.stencilBuffer,se),_e=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Se(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(w),he,w.width,w.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(w),he,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,he,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,P)}else{const ce=w.textures;for(let se=0;se<ce.length;se++){const he=ce[se],_e=s.convert(he.format,he.colorSpace),te=s.convert(he.type),ie=b(he.internalFormat,_e,te,he.normalized,he.colorSpace);Se(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(w),ie,w.width,w.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(w),ie,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ie,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ot(P,w,j){const ce=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const se=i.get(w.depthTexture);se.__renderTarget=w;const he=ce?w.depthTexture.image[0]:w.depthTexture.image;(!se.__webglTexture||he.width!==w.width||he.height!==w.height)&&(he.width=w.width,he.height=w.height,w.depthTexture.needsUpdate=!0),ce?J(w.depthTexture,0):ne(w.depthTexture,0);const _e=se.__webglTexture,te=ht(w),ie=ce?t.TEXTURE_CUBE_MAP_POSITIVE_X+j:t.TEXTURE_2D,ge=w.depthTexture.format===gr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(w.depthTexture.format===Cr)Se(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ge,ie,_e,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,ge,ie,_e,0);else if(w.depthTexture.format===gr)Se(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ge,ie,_e,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,ge,ie,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _n(P){const w=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ce=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ce){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ce.removeEventListener("dispose",se)};ce.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=ce}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(j)for(let ce=0;ce<6;ce++)ot(w.__webglFramebuffer[ce],P,ce);else P.texture.mipmaps.length>0?ot(w.__webglFramebuffer[0],P,0):ot(w.__webglFramebuffer,P,0);else if(j){w.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ce]),w.__webglDepthbuffer[ce]===void 0)w.__webglDepthbuffer[ce]=t.createRenderbuffer(),Bt(w.__webglDepthbuffer[ce],P,!1);else{const se=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[ce];t.bindRenderbuffer(t.RENDERBUFFER,he),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,he)}}else if(P.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),Bt(w.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,he),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,he)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function yn(P,w,j){const ce=i.get(P);w!==void 0&&tt(ce.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&_n(P)}function Sn(P){const w=P.texture,j=i.get(P),ce=i.get(w);P.addEventListener("dispose",U),F(P);const se=P.textures,he=P.isWebGLCubeRenderTarget===!0,_e=se.length>1;if(_e||(ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture()),ce.__version=w.version,a.memory.textures++),he){j.__webglFramebuffer=[];for(let te=0;te<6;te++)if(w.mipmaps.length>0){j.__webglFramebuffer[te]=[];for(let ie=0;ie<w.mipmaps.length;ie++)j.__webglFramebuffer[te][ie]=t.createFramebuffer()}else j.__webglFramebuffer[te]=t.createFramebuffer()}else{if(w.mipmaps.length>0){j.__webglFramebuffer=[];for(let te=0;te<w.mipmaps.length;te++)j.__webglFramebuffer[te]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(_e)for(let te=0,ie=se.length;te<ie;te++){const ge=i.get(se[te]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Se(P)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let te=0;te<se.length;te++){const ie=se[te];j.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[te]);const ge=s.convert(ie.format,ie.colorSpace),I=s.convert(ie.type),re=b(ie.internalFormat,ge,I,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),ee=ht(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,re,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,j.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),Bt(j.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(he){n.bindTexture(t.TEXTURE_CUBE_MAP,ce.__webglTexture),Re(t.TEXTURE_CUBE_MAP,w);for(let te=0;te<6;te++)if(w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)tt(j.__webglFramebuffer[te][ie],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else tt(j.__webglFramebuffer[te],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);_(w)?y(t.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}else if(_e){for(let te=0,ie=se.length;te<ie;te++){const ge=se[te],I=i.get(ge);let re=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,I.__webglTexture),Re(re,ge),tt(j.__webglFramebuffer,P,ge,t.COLOR_ATTACHMENT0+te,re,0),_(ge)&&y(re)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,ce.__webglTexture),Re(te,w),w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)tt(j.__webglFramebuffer[ie],P,w,t.COLOR_ATTACHMENT0,te,ie);else tt(j.__webglFramebuffer,P,w,t.COLOR_ATTACHMENT0,te,0);_(w)?y(te):w.mipmaps.length>0&&t.texParameteri(te,t.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}P.depthBuffer&&_n(P)}function z(P){const w=P.textures;for(let j=0,ce=w.length;j<ce;j++){const se=w[j];if(_(se)&&se.mipmapsAutoUpdate===!0){const he=E(P),_e=i.get(se).__webglTexture;n.bindTexture(he,_e),y(he),n.unbindTexture()}}}const Mn=[];function dt(P){if(P.samples>0){if(Se(P)===!1){const w=P.textures,j=P.width,ce=P.height;let se=t.COLOR_BUFFER_BIT;const he=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(P),te=w.length>1;if(te)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);const I=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,I,0)}t.blitFramebuffer(0,0,j,ce,0,0,j,ce,se,t.NEAREST),l===!0&&(Mn.length=0,Mn.push(t.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Mn.push(he),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Mn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);const I=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,I,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const w=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function ht(P){return Math.min(r.maxSamples,P.samples)}function Se(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function At(P){const w=a.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Ie(P,w){const j=P.colorSpace,ce=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==Hc&&j!==hr&&(Ye.getTransfer(j)===ct?(ce!==_i||se!==Nn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",j)),w}function Be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=le,this.resetTextureUnits=C,this.getTextureUnits=A,this.setTextureUnits=Q,this.setTexture2D=ne,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=J,this.rebindTextures=yn,this.setupRenderTarget=Sn,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=_n,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Se,this.dispose=W}function MN(t,e){function n(i,r=hr){let s;const a=Ye.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===fm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===xM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===mM)return t.BYTE;if(i===gM)return t.SHORT;if(i===Do)return t.UNSIGNED_SHORT;if(i===dm)return t.INT;if(i===Ti)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===bi)return t.HALF_FLOAT;if(i===_M)return t.ALPHA;if(i===yM)return t.RGB;if(i===_i)return t.RGBA;if(i===Cr)return t.DEPTH_COMPONENT;if(i===gr)return t.DEPTH_STENCIL;if(i===SM)return t.RED;if(i===pm)return t.RED_INTEGER;if(i===as)return t.RG;if(i===mm)return t.RG_INTEGER;if(i===gm)return t.RGBA_INTEGER;if(i===ic||i===rc||i===sc||i===ac)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nh||i===ih||i===rh||i===sh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ih)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ah||i===oh||i===lh||i===ch||i===uh||i===zc||i===dh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ah||i===oh)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ch)return s.COMPRESSED_R11_EAC;if(i===uh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zc)return s.COMPRESSED_RG11_EAC;if(i===dh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===xh||i===_h||i===yh||i===Sh||i===Mh||i===Eh||i===wh||i===Th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ph)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_h)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Th)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bh||i===Ah||i===Rh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bh)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ch||i===Ph||i===Vc||i===Lh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ch)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ph)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const EN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new UM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new os({vertexShader:EN,fragmentShader:wN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zi(new $o(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bN extends fs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,v=null;const S=typeof XRWebGLBinding<"u",g=new TN,f={},m=n.getContextAttributes();let _=null,y=null;const E=[],b=[],x=new et;let M=null,F=null;const L=new ai;L.viewport=new Et;const N=new ai;N.viewport=new Et;const U=[L,N],H=new k2;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=E[G];return ne===void 0&&(ne=new vd,E[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=E[G];return ne===void 0&&(ne=new vd,E[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=E[G];return ne===void 0&&(ne=new vd,E[G]=ne),ne.getHandSpace()};function Z(G){const ne=b.indexOf(G.inputSource);if(ne===-1)return;const ae=E[ne];ae!==void 0&&(ae.update(G.inputSource,G.frame,c||a),ae.dispatchEvent({type:G.type,data:G.inputSource}))}function k(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",V);for(let G=0;G<E.length;G++){const ne=b[G];ne!==null&&(b[G]=null,E[G].disconnect(ne))}D=null,W=null,g.reset();for(const G in f)delete f[G];if(e.setRenderTarget(_),p=null,d=null,h=null,r=null,y=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),F!==null){const G=F.camera;G.fov=F.fov,G.zoom=F.zoom,G.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,oe=null,J=null;m.depth&&(J=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=m.stencil?gr:Cr,oe=m.stencil?fa:Ti);const me={colorFormat:n.RGBA8,depthFormat:J,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new wi(d.textureWidth,d.textureHeight,{format:_i,type:Nn,depthTexture:new ha(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new wi(p.framebufferWidth,p.framebufferHeight,{format:_i,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(G){for(let ne=0;ne<G.removed.length;ne++){const ae=G.removed[ne],oe=b.indexOf(ae);oe>=0&&(b[oe]=null,E[oe].disconnect(ae))}for(let ne=0;ne<G.added.length;ne++){const ae=G.added[ne];let oe=b.indexOf(ae);if(oe===-1){for(let me=0;me<E.length;me++)if(me>=b.length){b.push(ae),oe=me;break}else if(b[me]===null){b[me]=ae,oe=me;break}if(oe===-1)break}const J=E[oe];J&&J.connect(ae)}}function B(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ne=G.near,ae=G.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),H.near=N.near=L.near=ne,H.far=N.far=L.far=ae,(D!==H.near||W!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,W=H.far),H.layers.mask=G.layers.mask|6,L.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;const oe=G.parent,J=H.cameras;B(H,oe);for(let me=0;me<J.length;me++)B(J[me],oe);H.projectionMatrix.copy(L.projectionMatrix),H.projectionMatrixInverse.copy(L.projectionMatrixInverse),F===null&&G.isPerspectiveCamera&&(F={camera:G,fov:G.fov,zoom:G.zoom}),C(G,H,oe)};function C(G,ne,ae){ae===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(ae.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Nh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(G){return f[G]};let A=null;function Q(G,ne){if(u=ne.getViewerPose(c||a),v=ne,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let oe=!1;ae.length!==H.cameras.length&&(H.cameras.length=0,oe=!0);for(let Me=0;Me<ae.length;Me++){const Re=ae[Me];let Fe=null;if(p!==null)Fe=p.getViewport(Re);else{const Ze=h.getViewSubImage(d,Re);Fe=Ze.viewport,Me===0&&(e.setRenderTargetTextures(y,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(y))}let Te=U[Me];Te===void 0&&(Te=new ai,Te.layers.enable(Me),Te.viewport=new Et,U[Me]=Te),Te.matrix.fromArray(Re.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Re.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Me===0&&(H.matrix.copy(Te.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),oe===!0&&H.cameras.push(Te)}const J=r.enabledFeatures;if(J&&J.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const Me=h.getDepthInformation(ae[0]);Me&&Me.isValid&&Me.texture&&g.init(Me,r.renderState)}if(J&&J.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let Me=0;Me<ae.length;Me++){const Re=ae[Me].camera;if(Re){let Fe=f[Re];Fe||(Fe=new UM,f[Re]=Fe);const Te=h.getCameraImage(Re);Fe.sourceTexture=Te}}}}for(let ae=0;ae<E.length;ae++){const oe=b[ae],J=E[ae];oe!==null&&J!==void 0&&J.update(oe,ne,c||a)}A&&A(G,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const le=new zM;le.setAnimationLoop(Q),this.setAnimationLoop=function(G){A=G},this.dispose=function(){}}}const AN=new Tt,KM=new Ve;KM.set(-1,0,0,0,1,0,0,0,1);function RN(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,FM(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,m,_,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),S(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Cn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Cn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=e.get(f),_=m.envMap,y=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(AN.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(KM),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.diffuseRoughness>0&&(g.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=f.diffuseRoughnessMap,n(f.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Cn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function S(g,f){const m=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CN(t,e,n,i){let r={},s={};function a(m,_){const y=_.program;i.uniformBlockBinding(m,y,r[m.id])}function o(m,_){let y=r[m.id];y===void 0&&(v(m),y=l(m),r[m.id]=y,m.addEventListener("dispose",g));const E=_.program;i.updateUBOMapping(m,E);const b=e.render.frame;s[m.id]!==b&&(c(m),s[m.id]=b)}function l(m){const _=t.createBuffer(),y=m.__size,E=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,y,E),t.bindBuffer(t.UNIFORM_BUFFER,null),_}function c(m){const _=r[m.id],y=m.uniforms,E=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let b=0,x=y.length;b<x;b++){const M=y[b];if(Array.isArray(M))for(let F=0,L=M.length;F<L;F++)u(M[F],b,F,E);else u(M,b,0,E)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(m,_,y,E){if(d(m,_,y,E)===!0){const b=m.__offset,x=m.value;if(Array.isArray(x)){let M=0;for(let F=0;F<x.length;F++){const L=x[F],N=S(L,!0);h(L,m.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,b,m.__data)}}function h(m,_,y){typeof m=="number"||typeof m=="boolean"?_[y]=m:m.isMatrix3?(_[y]=m.elements[0],_[y+1]=m.elements[1],_[y+2]=m.elements[2],_[y+3]=0,_[y+4]=m.elements[3],_[y+5]=m.elements[4],_[y+6]=m.elements[5],_[y+7]=0,_[y+8]=m.elements[6],_[y+9]=m.elements[7],_[y+10]=m.elements[8],_[y+11]=0):ArrayBuffer.isView(m)?_.set(m.subarray(0,_.length-y),y):m.toArray(_,y)}function d(m,_,y,E){const b=m.value,x=_+"_"+y;if(Array.isArray(b)){E[x]===void 0&&(E[x]=[]);const M=E[x];let F=!1;for(let L=0;L<b.length;L++)p(b[L],M,L)===!0&&(F=!0);return F}return p(b,E,x)}function p(m,_,y){if(_[y]===void 0)return typeof m=="number"||typeof m=="boolean"?_[y]=m:ArrayBuffer.isView(m)?_[y]=m.slice():_[y]=m.clone(),!0;{const E=_[y];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return _[y]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function v(m){const _=m.uniforms;let y=0;const E=16;for(let x=0,M=_.length;x<M;x++){const F=Array.isArray(_[x])?_[x]:[_[x]];for(let L=0,N=F.length;L<N;L++){const U=F[L],H=Array.isArray(U.value)?U.value:[U.value],D=Array.isArray(_[x])||Array.isArray(U.value);let W=y;for(let k=0,V=H.length;k<V;k++){const B=H[k],C=S(B,D),A=y%E,Q=A%C.boundary,le=A+Q;y+=Q,le!==0&&E-le<C.storage&&(y+=E-le),k===0&&(W=y),y+=C.storage}const Z=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Z((y-W)/Float32Array.BYTES_PER_ELEMENT),U.__offset=W}}const b=y%E;return b>0&&(y+=E-b),m.__size=y,m.__cache={},this}function S(m,_){const y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=16,y.storage=48):m.isMatrix4?(y.boundary=16,y.storage=64):m.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(y.boundary=16,y.storage=m.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",m),_===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(m){const _=m.target;_.removeEventListener("dispose",g),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const m in r)t.deleteBuffer(r[m]);r={},s={}}return{bind:a,update:o,dispose:f}}const PN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function LN(){return pi===null&&(pi=new T2(PN,16,16,as,bi),pi.name="DFG_LUT",pi.minFilter=Tn,pi.magFilter=Tn,pi.wrapS=ki,pi.wrapT=ki,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class DN{constructor(e={}){const{canvas:n=KC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Nn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const S=p,g=new Set([gm,mm,pm]),f=new Set([Nn,Ti,Do,fa,fm,hm]),m=new Uint32Array(4),_=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let E=null,b=null;const x=[],M=[];let F=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let N=!1,U=null,H=null,D=null,W=null;this._outputColorSpace=Wn;let Z=0,k=0,V=null,B=-1,C=null;const A=new Et,Q=new Et;let le=null;const G=new it(0);let ne=0,ae=n.width,oe=n.height,J=1,me=null,ke=null;const Me=new Et(0,0,ae,oe),Re=new Et(0,0,ae,oe);let Fe=!1;const Te=new Io,Ze=new ym;let Qe=!1,Je=!1;const tt=new Tt,Bt=new K,ot=new Et,_n={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yn=!1;function Sn(){return V===null?J:1}let z=i;function Mn(T,O){return n.getContext(T,O)}let dt,ht,Se,At,Ie,Be,P,w,j,ce,se,he,_e,te,ie,ge,I,re,ee,ve,fe,pe,Ne;try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${um}`),n.addEventListener("webglcontextlost",Ue,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),z===null){const O="webgl2";if(z=Mn(O,T),z===null)throw Mn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(T){throw n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),at("WebGLRenderer: "+T.message),T}function We(){dt=new UL(z),dt.init(),fe=new MN(z,dt),ht=new wL(z,dt,e,fe),Se=new yN(z,dt),ht.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),H=z.createFramebuffer(),D=z.createFramebuffer(),W=z.createFramebuffer(),At=new kL(z),Ie=new aN,Be=new SN(z,dt,Se,Ie,ht,fe,At),P=new IL(L),w=new z2(z),pe=new ML(z,w),j=new FL(z,w,At,pe),ce=new zL(z,j,w,pe,At),re=new BL(z,ht,Be),ie=new TL(Ie),se=new sN(L,P,dt,ht,pe,ie),he=new RN(L,Ie),_e=new lN,te=new pN(dt),I=new SL(L,P,Se,ce,v,l),ge=new _N(L,ce,ht),Ne=new CN(z,At,ht,Se),ee=new EL(z,dt,At),ve=new OL(z,dt,At),At.programs=se.programs,L.capabilities=ht,L.extensions=dt,L.properties=Ie,L.renderLists=_e,L.shadowMap=ge,L.state=Se,L.info=At}S!==Nn&&(F=new HL(S,n.width,n.height,o,r,s));const de=new bN(L,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(ae,oe,!1))},this.getSize=function(T){return T.set(ae,oe)},this.setSize=function(T,O,Y=!0){if(de.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=T,oe=O,n.width=Math.floor(T*J),n.height=Math.floor(O*J),Y===!0&&(n.style.width=T+"px",n.style.height=O+"px"),F!==null&&F.setSize(n.width,n.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(ae*J,oe*J).floor()},this.setDrawingBufferSize=function(T,O,Y){ae=T,oe=O,J=Y,n.width=Math.floor(T*Y),n.height=Math.floor(O*Y),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(S===Nn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,O,Y,X){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,O,Y,X),Se.viewport(A.copy(Me).multiplyScalar(Sn()).round())},this.getScissor=function(T){return T.copy(Re)},this.setScissor=function(T,O,Y,X){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,O,Y,X),Se.scissor(Q.copy(Re).multiplyScalar(Sn()).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(T){Se.setScissorTest(Fe=T)},this.setOpaqueSort=function(T){me=T},this.setTransparentSort=function(T){ke=T},this.getClearColor=function(T){return T.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,Y=!0){let X=0;if(T){let $=!1;if(V!==null){const ye=V.texture.format;$=g.has(ye)}if($){const ye=V.texture.type,Ce=f.has(ye),xe=I.getClearColor(),be=I.getClearAlpha(),De=xe.r,He=xe.g,$e=xe.b;Ce?(m[0]=De,m[1]=He,m[2]=$e,m[3]=be,z.clearBufferuiv(z.COLOR,0,m)):(_[0]=De,_[1]=He,_[2]=$e,_[3]=be,z.clearBufferiv(z.COLOR,0,_))}else X|=z.COLOR_BUFFER_BIT}O&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),I.dispose(),_e.dispose(),te.dispose(),Be.dispose(),Ie.dispose(),P.dispose(),ce.dispose(),j.dispose(),pe.dispose(),Ne.dispose(),se.dispose(),de.dispose(),de.removeEventListener("sessionstart",Cm),de.removeEventListener("sessionend",Pm),Ir.stop()};function Ue(T){T.preventDefault(),_v("WebGLRenderer: Context Lost."),N=!0}function Ge(){_v("WebGLRenderer: Context Restored."),N=!1;const T=At.autoReset,O=ge.enabled,Y=ge.autoUpdate,X=ge.needsUpdate,$=ge.type;We(),At.autoReset=T,ge.enabled=O,ge.autoUpdate=Y,ge.needsUpdate=X,ge.type=$}function Ee(T){at("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function lt(T){const O=T.target;O.removeEventListener("dispose",lt),zt(O)}function zt(T){Ji(T),Ie.remove(T)}function Ji(T){const O=Ie.get(T).programs;O!==void 0&&(O.forEach(function(Y){se.releaseProgram(Y)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Y,X,$,ye){O===null&&(O=_n);const Ce=$.isMesh&&$.matrixWorld.determinantAffine()<0,xe=rE(T,O,Y,X,$);Se.setMaterial(X,Ce);let be=Y.index,De=1;if(X.wireframe===!0){if(be=j.getWireframeAttribute(Y),be===void 0)return;De=2}const He=Y.drawRange,$e=Y.attributes.position;let Pe=He.start*De,qe=(He.start+He.count)*De;ye!==null&&(Pe=Math.max(Pe,ye.start*De),qe=Math.min(qe,(ye.start+ye.count)*De)),be!==null?(Pe=Math.max(Pe,0),qe=Math.min(qe,be.count)):$e!=null&&(Pe=Math.max(Pe,0),qe=Math.min(qe,$e.count));const Dt=qe-Pe;if(Dt<0||Dt===1/0)return;pe.setup($,X,xe,Y,be);let pt,ft=ee;if(be!==null&&(pt=w.get(be),ft=ve,ft.setIndex(pt)),$.isMesh)X.wireframe===!0?(Se.setLineWidth(X.wireframeLinewidth*Sn()),ft.setMode(z.LINES)):ft.setMode(z.TRIANGLES);else if($.isLine){let Qt=X.linewidth;Qt===void 0&&(Qt=1),Se.setLineWidth(Qt*Sn()),$.isLineSegments?ft.setMode(z.LINES):$.isLineLoop?ft.setMode(z.LINE_LOOP):ft.setMode(z.LINE_STRIP)}else $.isPoints?ft.setMode(z.POINTS):$.isSprite&&ft.setMode(z.TRIANGLES);if($.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qt=$._multiDrawStarts,Le=$._multiDrawCounts,fn=$._multiDrawCount,st=be?w.get(be).bytesPerElement:1,Ur=Ie.get(X).currentProgram.getUniforms();for(let Jt=0;Jt<fn;Jt++)Ur.setValue(z,"_gl_DrawID",Jt),ft.render(Qt[Jt]/st,Le[Jt])}else if($.isInstancedMesh)ft.renderInstances(Pe,Dt,$.count);else if(Y.isInstancedBufferGeometry){const Qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Le=Math.min(Y.instanceCount,Qt);ft.renderInstances(Pe,Dt,Le)}else ft.render(Pe,Dt)};function Rm(T,O,Y,X){U!==null&&T.isNodeMaterial&&U.setObject(X,T),Qe===!0&&ie.setState(T,Y,!1),T.transparent===!0&&T.side===Ui&&T.forceSinglePass===!1?(T.side=Cn,T.needsUpdate=!0,Ma(T,O,X),T.side=ss,T.needsUpdate=!0,Ma(T,O,X),T.side=Ui):Ma(T,O,X)}this.compile=function(T,O,Y=null){Y===null&&(Y=T),U!==null&&U.renderStart(T,O,Y),b=te.get(Y),b.init(O),M.push(b),Y.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),T!==Y&&T.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),Je=this.localClippingEnabled,Qe=ie.init(this.clippingPlanes,Je),Qe===!0&&ie.setGlobalState(this.clippingPlanes,O),U!==null&&ge.render(b.state.shadowsArray,Y,O);const X=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ye=$.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const xe=ye[Ce];Rm(xe,Y,O,$),X.add(xe)}else Rm(ye,Y,O,$),X.add(ye)}),b=M.pop(),U!==null&&U.renderEnd(),X},this.compileAsync=function(T,O,Y=null){const X=this.compile(T,O,Y);return new Promise($=>{function ye(){if(X.forEach(function(Ce){const be=Ie.get(Ce).currentProgram;(be===void 0||be.isReady())&&X.delete(Ce)}),X.size===0){$(T);return}setTimeout(ye,10)}dt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let _u=null;function nE(T){_u&&_u(T)}function Cm(){Ir.stop()}function Pm(){Ir.start()}const Ir=new zM;Ir.setAnimationLoop(nE),typeof self<"u"&&Ir.setContext(self),this.setAnimationLoop=function(T){_u=T,de.setAnimationLoop(T),T===null?Ir.stop():Ir.start()},de.addEventListener("sessionstart",Cm),de.addEventListener("sessionend",Pm),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(T,O);const Y=de.enabled===!0&&de.isPresenting===!0,X=F!==null&&(V===null||Y)&&F.begin(L,V);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(O),O=de.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,O,V),b=te.get(T,M.length),b.init(O),b.state.textureUnits=Be.getTextureUnits(),M.push(b),tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Ze.setFromArrayCamera(O):Te.setFromProjectionMatrix(tt,li,O.reversedDepth),Je=this.localClippingEnabled,Qe=ie.init(this.clippingPlanes,Je),E=_e.get(T,x.length),E.init(),x.push(E),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){const Ce=L.xr.getDepthSensingMesh();Ce!==null&&yu(Ce,O,-1/0,L.sortObjects)}yu(T,O,0,L.sortObjects),E.finish(),U!==null&&U.updateLights(b.state.lightsArray),L.sortObjects===!0&&E.sort(me,ke),yn=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,yn&&I.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),Qe===!0&&ie.beginShadows();const $=b.state.shadowsArray;if(ge.render($,T,O),Qe===!0&&ie.endShadows(),(X&&F.hasRenderPass())===!1){const Ce=E.opaque,xe=E.transmissive;if(b.setupLights(),O.isArrayCamera){const be=O.cameras;if(xe.length>0)for(let De=0,He=be.length;De<He;De++){const $e=be[De];Dm(Ce,xe,T,$e)}yn&&I.render(T);for(let De=0,He=be.length;De<He;De++){const $e=be[De];Lm(E,T,$e,$e.viewport)}}else xe.length>0&&Dm(Ce,xe,T,O),yn&&I.render(T),Lm(E,T,O)}V!==null&&k===0&&(Be.updateMultisampleRenderTarget(V),Be.updateRenderTargetMipmap(V)),X&&F.end(L),T.isScene===!0&&T.onAfterRender(L,T,O),pe.resetDefaultState(),B=-1,C=null,M.pop(),M.length>0?(b=M[M.length-1],Be.setTextureUnits(b.state.textureUnits),Qe===!0&&ie.setGlobalState(L.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,U!==null&&U.renderEnd()};function yu(T,O,Y,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){const Ce=O.isArrayCamera?Ze:Te;if(!T.frustumCulled||T.intersectsFrustum(Ce)){X&&ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(tt);const xe=ce.update(T),be=T.material;be.visible&&E.push(T,xe,be,Y,ot.z,null,O)}}else if(T.isMesh||T.isLine||T.isPoints){const Ce=O.isArrayCamera?Ze:Te;if(!T.frustumCulled||T.intersectsFrustum(Ce)){const xe=ce.update(T),be=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ot.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ot.copy(xe.boundingSphere.center)),ot.applyMatrix4(T.matrixWorld).applyMatrix4(tt)),Array.isArray(be)){const De=xe.groups;for(let He=0,$e=De.length;He<$e;He++){const Pe=De[He],qe=be[Pe.materialIndex];qe&&qe.visible&&E.push(T,xe,qe,Y,ot.z,Pe,O)}}else be.visible&&E.push(T,xe,be,Y,ot.z,null,O)}}}const ye=T.children;for(let Ce=0,xe=ye.length;Ce<xe;Ce++)yu(ye[Ce],O,Y,X)}function Lm(T,O,Y,X){const{opaque:$,transmissive:ye,transparent:Ce}=T;b.setupLightsView(Y),Qe===!0&&ie.setGlobalState(L.clippingPlanes,Y),X&&Se.viewport(A.copy(X)),$.length>0&&Yo($,O,Y),ye.length>0&&Yo(ye,O,Y),Ce.length>0&&Yo(Ce,O,Y),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Dm(T,O,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){const Pe=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new wi(1,1,{generateMipmaps:!0,type:Pe?bi:Nn,minFilter:Bi,samples:Math.max(4,ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ye=b.state.transmissionRenderTarget[X.id],Ce=X.viewport||A;ye.setSize(Ce.z*L.transmissionResolutionScale,Ce.w*L.transmissionResolutionScale);const xe=L.getRenderTarget(),be=L.getActiveCubeFace(),De=L.getActiveMipmapLevel();L.setRenderTarget(ye),L.getClearColor(G),ne=L.getClearAlpha(),ne<1&&L.setClearColor(16777215,.5),L.clear(),yn&&I.render(Y);const He=L.toneMapping;L.toneMapping=Gi;const $e=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),Qe===!0&&ie.setGlobalState(L.clippingPlanes,X),Yo(T,Y,X),Be.updateMultisampleRenderTarget(ye),Be.updateRenderTargetMipmap(ye),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let qe=0,Dt=O.length;qe<Dt;qe++){const pt=O[qe],{object:ft,geometry:Qt,material:Le,group:fn}=pt;if(Le.side===Ui&&ft.layers.test(X.layers)){const st=Le.side;Le.side=Cn,Le.needsUpdate=!0,Nm(ft,Y,X,Qt,Le,fn),Le.side=st,Le.needsUpdate=!0,Pe=!0}}Pe===!0&&(Be.updateMultisampleRenderTarget(ye),Be.updateRenderTargetMipmap(ye))}L.setRenderTarget(xe,be,De),L.setClearColor(G,ne),$e!==void 0&&(X.viewport=$e),L.toneMapping=He}function Yo(T,O,Y){const X=O.isScene===!0?O.overrideMaterial:null;for(let $=0,ye=T.length;$<ye;$++){const Ce=T[$],{object:xe,geometry:be,group:De}=Ce;let He=Ce.material;He.allowOverride===!0&&X!==null&&(He=X),xe.layers.test(Y.layers)&&Nm(xe,O,Y,be,He,De)}}function Nm(T,O,Y,X,$,ye){U!==null&&$.isNodeMaterial&&U.setObject(T,$),T.onBeforeRender(L,O,Y,X,$,ye),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(L,O,Y,X,T,ye),$.transparent===!0&&$.side===Ui&&$.forceSinglePass===!1?($.side=Cn,$.needsUpdate=!0,L.renderBufferDirect(Y,O,X,$,T,ye),$.side=ss,$.needsUpdate=!0,L.renderBufferDirect(Y,O,X,$,T,ye),$.side=Ui):L.renderBufferDirect(Y,O,X,$,T,ye),T.onAfterRender(L,O,Y,X,$,ye)}function Im(T){let O=0;for(const Y of T)Y.texture!==null&&O++;return O}function Ma(T,O,Y){O.isScene!==!0&&(O=_n);const X=Ie.get(T),$=b.state.lights,ye=b.state.shadowsArray,Ce=$.state.version,xe=se.getParameters(T,$.state,ye,O,Y,b.state.lightProbeGridArray),be=se.getProgramCacheKey(xe);let De=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,X.fog=O.fog;const He=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=P.get(T.envMap||X.environment,He),X.envMapRotation=X.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",lt),De=new Map,X.programs=De,X.programVariants=new Map);let $e=De.get(be);if($e!==void 0){if(X.currentProgram===$e&&X.lightsStateVersion===Ce)return Fm(T,xe),$e}else xe.uniforms=se.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,Y,xe),T.onBeforeCompile(xe,L),$e=se.acquireProgram(xe,be),De.set(be,$e),X.uniforms=xe.uniforms;const Pe=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=ie.uniform),Fm(T,xe),X.needsLights=aE(T),X.lightsStateVersion=Ce,X.needsLights&&(Pe.ambientLightColor.value=$.state.ambient,Pe.lightProbe.value=$.state.probe,Pe.sunLights.value=$.state.sun,Pe.sunLightShadows.value=$.state.sunShadow,Pe.directionalLights.value=$.state.directional,Pe.directionalLightShadows.value=$.state.directionalShadow,Pe.spotLights.value=$.state.spot,Pe.spotLightShadows.value=$.state.spotShadow,Pe.rectAreaLights.value=$.state.rectArea,Pe.ltc_1.value=$.state.rectAreaLTC1,Pe.ltc_2.value=$.state.rectAreaLTC2,Pe.pointLights.value=$.state.point,Pe.pointLightShadows.value=$.state.pointShadow,Pe.hemisphereLights.value=$.state.hemi,Pe.sunShadowMatrix.value=$.state.sunShadowMatrix,Pe.sunShadowCascade.value=$.state.sunShadowCascade,Pe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Pe.spotLightMatrix.value=$.state.spotLightMatrix,Pe.spotLightMap.value=$.state.spotLightMap,Pe.pointShadowMatrix.value=$.state.pointShadowMatrix),X.numLightProbeGrids=Im(b.state.lightProbeGridArray),X.currentProgram=$e,X.uniformsList=null,$e}function iE(T,O,Y,X,$){const ye=Ie.get(T),Ce=ye.currentProgram.id+","+X+","+$;let xe=ye.programVariants.get(Ce);return xe===void 0?(xe=Ma(T,O,Y),ye.programVariants.set(Ce,xe)):(ye.currentProgram=xe,ye.uniformsList=null,ye.outputColorSpace=X,ye.toneMapping=$),xe}function Um(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=lc.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Fm(T,O){const Y=Ie.get(T);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function rE(T,O,Y,X,$){O.isScene!==!0&&(O=_n),Be.resetTextureUnits();const ye=O.fog,Ce=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?O.environment:null,xe=V===null?L.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ye.workingColorSpace,be=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,De=P.get(X.envMap||Ce,be),He=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$e=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!Y.morphAttributes.position,qe=!!Y.morphAttributes.normal,Dt=!!Y.morphAttributes.color;let pt=Gi;X.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(pt=L.toneMapping);const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Qt=ft!==void 0?ft.length:0,Le=Ie.get(X),fn=b.state.lights;if(Qe===!0&&(Je===!0||T!==C)){const yt=T===C&&X.id===B;ie.setState(X,T,yt)}let st=!1,Ur=!1;X.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==fn.state.version||$.isBatchedMesh&&Le.batching===!1||!$.isBatchedMesh&&Le.batching===!0||$.isBatchedMesh&&Le.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Le.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Le.instancing===!1||!$.isInstancedMesh&&Le.instancing===!0||$.isSkinnedMesh&&Le.skinning===!1||!$.isSkinnedMesh&&Le.skinning===!0||$.isInstancedMesh&&Le.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Le.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Le.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Le.instancingMorph===!1&&$.morphTexture!==null||Le.envMap!==De||X.fog===!0&&Le.fog!==ye||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ie.numPlanes||Le.numIntersection!==ie.numIntersection)||Le.vertexAlphas!==He||Le.vertexTangents!==$e||Le.morphTargets!==Pe||Le.morphNormals!==qe||Le.morphColors!==Dt||Le.morphTargetsCount!==Qt||Le.numLightProbeGrids!==Im(b.state.lightProbeGridArray)?st=!0:(Le.outputColorSpace!==xe||Le.toneMapping!==pt)&&(Ur=!0):(st=!0,Le.__version=X.version);let Jt=Le.currentProgram;(st===!0||Ur===!0)&&(Jt=Ur===!0?iE(X,O,$,xe,pt):Ma(X,O,$),U&&X.isNodeMaterial&&U.onUpdateProgram(X,Jt,Le));let Ko=!1,er=!1,Fr=!1;const nt=Jt.getUniforms(),jt=Le.uniforms;if(Se.useProgram(Jt.program)&&(Ko=!0,er=!0,Fr=!0),X.id!==B&&(B=X.id,er=!0),Ko||C!==T){Se.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),nt.setValue(z,"projectionMatrix",T.projectionMatrix),nt.setValue(z,"viewMatrix",T.matrixWorldInverse);const Vt=nt.map.cameraPosition;Vt!==void 0&&Vt.setValue(z,Bt.setFromMatrixPosition(T.matrixWorld)),ht.logarithmicDepthBuffer&&nt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&nt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),C!==T&&(C=T,er=!0,Fr=!0)}if(Le.needsLights&&(fn.state.sunShadowMap.length>0&&nt.setValue(z,"sunShadowMap",fn.state.sunShadowMap,Be),fn.state.directionalShadowMap.length>0&&nt.setValue(z,"directionalShadowMap",fn.state.directionalShadowMap,Be),fn.state.spotShadowMap.length>0&&nt.setValue(z,"spotShadowMap",fn.state.spotShadowMap,Be),fn.state.pointShadowMap.length>0&&nt.setValue(z,"pointShadowMap",fn.state.pointShadowMap,Be)),$.isSkinnedMesh){nt.setOptional(z,$,"bindMatrix"),nt.setOptional(z,$,"bindMatrixInverse");const yt=$.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),nt.setValue(z,"boneTexture",yt.boneTexture,Be))}$.isBatchedMesh&&(nt.setOptional(z,$,"batchingTexture"),nt.setValue(z,"batchingTexture",$._matricesTexture,Be),nt.setOptional(z,$,"batchingIdTexture"),nt.setValue(z,"batchingIdTexture",$._indirectTexture,Be),nt.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&nt.setValue(z,"batchingColorTexture",$._colorsTexture,Be));const Zn=Y.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&re.update($,Y,Jt),(er||Le.receiveShadow!==$.receiveShadow)&&(Le.receiveShadow=$.receiveShadow,nt.setValue(z,"receiveShadow",$.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&O.environment!==null&&(jt.envMapIntensity.value=O.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=LN()),er){if(nt.setValue(z,"toneMappingExposure",L.toneMappingExposure),Le.needsLights&&sE(jt,Fr),ye&&X.fog===!0&&he.refreshFogUniforms(jt,ye),he.refreshMaterialUniforms(jt,X,J,oe,b.state.transmissionRenderTarget[T.id]),Le.needsLights&&Le.numLightProbeGrids>0){const yt=y;let Vt=0;for(const Ai of b.state.lightProbeGridArray)Ai.texture!==null&&(yt.textures[Vt]=Ai.texture,yt.min[Vt]=Ai.boundingBox.min,yt.max[Vt]=Ai.boundingBox.max,yt.resolution[Vt]=Ai.resolution,Vt++);for(const Ai in yt)yt[Ai].length=Vt;jt.probesSH.value=yt.textures,jt.probesMin.value=yt.min,jt.probesMax.value=yt.max,jt.probesResolution.value=yt.resolution}lc.upload(z,Um(Le),jt,Be)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(lc.upload(z,Um(Le),jt,Be),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&nt.setValue(z,"center",$.center),nt.setValue(z,"modelViewMatrix",$.modelViewMatrix),nt.setValue(z,"normalMatrix",$.normalMatrix),nt.setValue(z,"modelMatrix",$.matrixWorld),X.uniformsGroups!==void 0){const yt=X.uniformsGroups;for(let Vt=0,Ai=yt.length;Vt<Ai;Vt++){const km=yt[Vt];Ne.update(km,Jt),Ne.bind(km,Jt)}}return Jt}function sE(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function aE(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(T,O,Y){const X=Ie.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ie.get(T.texture).__webglTexture=O,Ie.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const Y=Ie.get(T);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,Y=0){V=T,Z=O,k=Y;let X=null,$=!1,ye=!1;if(T){const xe=Ie.get(T);if(xe.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(z.FRAMEBUFFER,xe.__webglFramebuffer),A.copy(T.viewport),Q.copy(T.scissor),le=T.scissorTest,Se.viewport(A),Se.scissor(Q),Se.setScissorTest(le),B=-1;return}else if(xe.__webglFramebuffer===void 0)Be.setupRenderTarget(T);else if(xe.__hasExternalTextures)Be.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(xe.__boundDepthTexture!==He){if(He!==null&&Ie.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(T)}}const be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ye=!0);const De=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[O])?X=De[O][Y]:X=De[O],$=!0):T.samples>0&&Be.useMultisampledRTT(T)===!1?X=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?X=De[Y]:X=De,A.copy(T.viewport),Q.copy(T.scissor),le=T.scissorTest}else A.copy(Me).multiplyScalar(J).floor(),Q.copy(Re).multiplyScalar(J).floor(),le=Fe;if(Y!==0&&(X=H),Se.bindFramebuffer(z.FRAMEBUFFER,X)&&Se.drawBuffers(T,X),Se.viewport(A),Se.scissor(Q),Se.setScissorTest(le),$){const xe=Ie.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,Y)}else if(ye){const xe=O;for(let be=0;be<T.textures.length;be++){const De=Ie.get(T.textures[be]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+be,De.__webglTexture,Y,xe)}}else if(T!==null&&Y!==0){const xe=Ie.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xe.__webglTexture,Y)}B=-1};function Om(T){const O=Ie.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=ht.textureFormatReadable(T.format),O.__typeReadable=ht.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,Y,X,$,ye,Ce,xe=0){if(!(T&&T.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(be=be[Ce],Array.isArray(be)&&(be=be[0])),be){Se.bindFramebuffer(z.FRAMEBUFFER,be);try{const De=T.textures[xe],He=De.format,$e=De.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+xe);const Pe=Om(De);if(Pe.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&Y>=0&&Y<=T.height-$&&z.readPixels(O,Y,X,$,fe.convert(He),fe.convert($e),ye)}finally{const De=V!==null?Ie.get(V).__webglFramebuffer:null;Se.bindFramebuffer(z.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,O,Y,X,$,ye,Ce,xe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(be=be[Ce],Array.isArray(be)&&(be=be[0])),be)if(O>=0&&O<=T.width-X&&Y>=0&&Y<=T.height-$){Se.bindFramebuffer(z.FRAMEBUFFER,be);const De=T.textures[xe],He=De.format,$e=De.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+xe);const Pe=Om(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,qe),z.bufferData(z.PIXEL_PACK_BUFFER,ye.byteLength,z.STREAM_READ),z.readPixels(O,Y,X,$,fe.convert(He),fe.convert($e),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const Dt=V!==null?Ie.get(V).__webglFramebuffer:null;Se.bindFramebuffer(z.FRAMEBUFFER,Dt);const pt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ZC(z,pt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,qe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ye),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(qe),z.deleteSync(pt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,Y=0){const X=Math.pow(2,-Y),$=Math.floor(T.image.width*X),ye=Math.floor(T.image.height*X),Ce=O!==null?O.x:0,xe=O!==null?O.y:0;Be.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,Ce,xe,$,ye),Se.unbindTexture()},this.copyTextureToTexture=function(T,O,Y=null,X=null,$=0,ye=0){let Ce,xe,be,De,He,$e,Pe,qe,Dt;const pt=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(Y!==null)Ce=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,De=Y.min.x,He=Y.min.y,$e=Y.isBox3?Y.min.z:0;else{const nt=Math.pow(2,-$);Ce=Math.floor(pt.width*nt),xe=Math.floor(pt.height*nt),T.isDataArrayTexture?be=pt.depth:T.isData3DTexture?be=Math.floor(pt.depth*nt):be=1,De=0,He=0,$e=0}X!==null?(Pe=X.x,qe=X.y,Dt=X.z):(Pe=0,qe=0,Dt=0);const ft=fe.convert(O.format),Qt=fe.convert(O.type);let Le;O.isData3DTexture?(Be.setTexture3D(O,0),Le=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Be.setTexture2DArray(O,0),Le=z.TEXTURE_2D_ARRAY):(Be.setTexture2D(O,0),Le=z.TEXTURE_2D),Se.activeTexture(z.TEXTURE0),Se.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),Se.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Se.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);const fn=Se.getParameter(z.UNPACK_ROW_LENGTH),st=Se.getParameter(z.UNPACK_IMAGE_HEIGHT),Ur=Se.getParameter(z.UNPACK_SKIP_PIXELS),Jt=Se.getParameter(z.UNPACK_SKIP_ROWS),Ko=Se.getParameter(z.UNPACK_SKIP_IMAGES);Se.pixelStorei(z.UNPACK_ROW_LENGTH,pt.width),Se.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt.height),Se.pixelStorei(z.UNPACK_SKIP_PIXELS,De),Se.pixelStorei(z.UNPACK_SKIP_ROWS,He),Se.pixelStorei(z.UNPACK_SKIP_IMAGES,$e);const er=T.isDataArrayTexture||T.isData3DTexture,Fr=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const nt=Ie.get(T),jt=Ie.get(O),Zn=Ie.get(nt.__renderTarget),yt=Ie.get(jt.__renderTarget);Se.bindFramebuffer(z.READ_FRAMEBUFFER,Zn.__webglFramebuffer),Se.bindFramebuffer(z.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Vt=0;Vt<be;Vt++)er&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(T).__webglTexture,$,$e+Vt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(O).__webglTexture,ye,Dt+Vt)),z.blitFramebuffer(De,He,De+Ce,He+xe,Pe,qe,Pe+Ce,qe+xe,z.DEPTH_BUFFER_BIT,z.NEAREST);Se.bindFramebuffer(z.READ_FRAMEBUFFER,null),Se.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||Ie.has(T)){const nt=Ie.get(T),jt=Ie.get(O);Se.bindFramebuffer(z.READ_FRAMEBUFFER,D),Se.bindFramebuffer(z.DRAW_FRAMEBUFFER,W);for(let Zn=0;Zn<be;Zn++)er?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nt.__webglTexture,$,$e+Zn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nt.__webglTexture,$),Fr?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.__webglTexture,ye,Dt+Zn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,jt.__webglTexture,ye),$!==0?z.blitFramebuffer(De,He,De+Ce,He+xe,Pe,qe,Pe+Ce,qe+xe,z.COLOR_BUFFER_BIT,z.NEAREST):Fr?z.copyTexSubImage3D(Le,ye,Pe,qe,Dt+Zn,De,He,Ce,xe):z.copyTexSubImage2D(Le,ye,Pe,qe,De,He,Ce,xe);Se.bindFramebuffer(z.READ_FRAMEBUFFER,null),Se.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Fr?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Le,ye,Pe,qe,Dt,Ce,xe,be,ft,Qt,pt.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(Le,ye,Pe,qe,Dt,Ce,xe,be,ft,pt.data):z.texSubImage3D(Le,ye,Pe,qe,Dt,Ce,xe,be,ft,Qt,pt):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ye,Pe,qe,Ce,xe,ft,Qt,pt.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ye,Pe,qe,pt.width,pt.height,ft,pt.data):z.texSubImage2D(z.TEXTURE_2D,ye,Pe,qe,Ce,xe,ft,Qt,pt);Se.pixelStorei(z.UNPACK_ROW_LENGTH,fn),Se.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st),Se.pixelStorei(z.UNPACK_SKIP_PIXELS,Ur),Se.pixelStorei(z.UNPACK_SKIP_ROWS,Jt),Se.pixelStorei(z.UNPACK_SKIP_IMAGES,Ko),ye===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&z.generateMipmap(Le),Se.unbindTexture()},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&Be.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Be.setTextureCube(T,0):T.isData3DTexture?Be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Be.setTexture2DArray(T,0):Be.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){Z=0,k=0,V=null,Se.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}const NN=()=>{const t=q.useCallback(e=>{if(typeof window<"u"&&"navigator"in window&&"vibrate"in navigator)try{navigator.vibrate(e)}catch{}},[]);return{hapticRoll:()=>t([15,30,20]),hapticStep:()=>t(10),hapticCapture:()=>t([50,40,80]),hapticVictory:()=>t([60,40,60,40,100]),hapticButton:()=>t(8)}};function Rs(t){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d"),i=n.createRadialGradient(256,256,50,256,256,320);i.addColorStop(0,"#ffffff"),i.addColorStop(.65,"#f7efe1"),i.addColorStop(1,"#e3d2ba"),n.fillStyle=i,n.fillRect(0,0,512,512),n.strokeStyle="#c5b195",n.lineWidth=14,n.strokeRect(12,12,488,488);const r=n.createRadialGradient(256,256,200,256,256,256);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(120,95,65,0.18)"),n.fillStyle=r,n.fillRect(0,0,512,512);const s=t===1?"#c52828":"#221914",a=t===1?"#e57373":"#3d2e24",o=t===1?46:34,l=(S,g,f=o)=>{n.beginPath(),n.arc(S,g+2,f+2,0,Math.PI*2),n.fillStyle="rgba(255, 255, 255, 0.45)",n.fill();const m=n.createRadialGradient(S-f*.3,g-f*.3,f*.1,S,g,f);m.addColorStop(0,t===1?"#ff7b7b":"#3a2a20"),m.addColorStop(.75,s),m.addColorStop(1,"#000000"),n.beginPath(),n.arc(S,g,f,0,Math.PI*2),n.fillStyle=m,n.fill(),n.lineWidth=2.5,n.strokeStyle=a,n.stroke(),n.beginPath(),n.arc(S-f*.35,g-f*.35,f*.22,0,Math.PI*2),n.fillStyle="rgba(255, 255, 255, 0.65)",n.fill()},c=256,u=140,h=372,d=140,p=372;switch(t){case 1:l(c,c,52);break;case 2:l(u,d),l(h,p);break;case 3:l(u,d),l(c,c),l(h,p);break;case 4:l(u,d),l(h,d),l(u,p),l(h,p);break;case 5:l(u,d),l(h,d),l(c,c),l(u,p),l(h,p);break;case 6:l(u,d),l(u,c),l(u,p),l(h,d),l(h,c),l(h,p);break}const v=new NM(e);return v.generateMipmaps=!0,v.minFilter=Bi,v}function Ud(t){switch(t){case 1:return new an(0,0,0);case 6:return new an(Math.PI,0,0);case 2:return new an(0,0,Math.PI/2);case 5:return new an(0,0,-Math.PI/2);case 3:return new an(-Math.PI/2,0,0);case 4:return new an(Math.PI/2,0,0);default:return new an(0,0,0)}}const IN=({rollValue:t,isMyTurn:e,canRoll:n,activeColor:i,onRoll:r,lastDiceEvent:s})=>{const a=q.useRef(null),{hapticRoll:o}=NN(),{playDiceRoll:l}=cu(),[c,u]=q.useState(!0),[h,d]=q.useState(!1),p=q.useRef(null),v=q.useRef(null),S=q.useRef(null),g=q.useRef(null),f=q.useRef(null),m=q.useRef(null),_=q.useRef(null),y=q.useRef({active:!1,startTime:0,duration:1050,targetFace:1,initialRot:new an,spinSpeedX:0,spinSpeedY:0,spinSpeedZ:0,hasBounced1:!1,hasBounced2:!1,hasLanded:!1});q.useEffect(()=>{const x=a.current;if(!x)return;try{const J=document.createElement("canvas");if(!(J.getContext("webgl")||J.getContext("experimental-webgl"))){u(!1);return}}catch{u(!1);return}const M=x.clientWidth||160,F=x.clientHeight||160,L=new g2;v.current=L;const N=new ai(36,M/F,.1,100);N.position.set(0,4.4,4.8),N.lookAt(0,.2,0),S.current=N;const U=new DN({antialias:!0,alpha:!0,powerPreference:"high-performance"});U.setSize(M,F),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.shadowMap.enabled=!0,U.shadowMap.type=iM,g.current=U,x.appendChild(U.domElement);const H=new O2(16774890,.95);L.add(H);const D=new zv(16777215,1.4);D.position.set(4,8,4),D.castShadow=!0,D.shadow.mapSize.width=1024,D.shadow.mapSize.height=1024,D.shadow.camera.near=.5,D.shadow.camera.far=20,D.shadow.bias=-.001,L.add(D);const W=new zv(10863848,.5);W.position.set(-4,2,-4),L.add(W);const Z=new $o(2.4,2.4),k=document.createElement("canvas");k.width=128,k.height=128;const V=k.getContext("2d"),B=V.createRadialGradient(64,64,0,64,64,60);B.addColorStop(0,"rgba(0, 0, 0, 0.7)"),B.addColorStop(.6,"rgba(0, 0, 0, 0.3)"),B.addColorStop(1,"rgba(0, 0, 0, 0)"),V.fillStyle=B,V.fillRect(0,0,128,128);const C=new NM(k),A=new LM({map:C,transparent:!0,depthWrite:!1}),Q=new Zi(Z,A);Q.rotation.x=-Math.PI/2,Q.position.y=.02,L.add(Q),m.current=Q;const le=new ya(1.65,1.65,1.65,1,1,1),G=[Rs(2),Rs(5),Rs(1),Rs(6),Rs(3),Rs(4)].map(J=>new D2({map:J,roughness:.18,metalness:.04})),ne=new Zi(le,G);ne.castShadow=!0,ne.receiveShadow=!1,ne.position.set(0,.82,0),L.add(ne),f.current=ne,ne.rotation.copy(Ud(t||1));const ae=()=>{_.current=requestAnimationFrame(ae);const J=y.current,me=f.current,ke=m.current;if(J.active&&me&&ke){const Me=performance.now()-J.startTime,Re=Math.min(1,Me/J.duration);let Fe=.82;if(Re<.45){const Je=Re/.45;Fe=.82+Math.sin(Je*Math.PI)*1.75}else if(Re<.72){J.hasBounced1||(J.hasBounced1=!0,l());const Je=(Re-.45)/.27;Fe=.82+Math.sin(Je*Math.PI)*.55}else if(Re<.9){J.hasBounced2||(J.hasBounced2=!0,l());const Je=(Re-.72)/.18;Fe=.82+Math.sin(Je*Math.PI)*.18}else J.hasLanded||(J.hasLanded=!0,l(),o()),Fe=.82;me.position.y=Fe;const Te=Math.max(.4,1-(Fe-.82)*.35);ke.scale.set(Te,Te,1),ke.material.opacity=Math.max(.2,.75-(Fe-.82)*.3);const Ze=Ud(J.targetFace),Qe=new hs().setFromEuler(Ze);if(Re<.72)me.rotation.x+=J.spinSpeedX*(1-Re*.45),me.rotation.y+=J.spinSpeedY*(1-Re*.45),me.rotation.z+=J.spinSpeedZ*(1-Re*.45);else{const Je=Math.min(1,(Re-.72)/.28);me.quaternion.slerp(Qe,Je*.32)}Re>=1&&(J.active=!1,d(!1),me.quaternion.copy(Qe),me.position.set(0,.82,0),ke.scale.set(1,1,1),ke.material.opacity=.75)}U.render(L,N)};ae();const oe=()=>{if(!x||!U||!N)return;const J=x.clientWidth,me=x.clientHeight;N.aspect=J/me,N.updateProjectionMatrix(),U.setSize(J,me)};return window.addEventListener("resize",oe),()=>{window.removeEventListener("resize",oe),_.current&&cancelAnimationFrame(_.current),x&&U.domElement&&x.removeChild(U.domElement),U.dispose()}},[]);const E=q.useCallback(x=>{d(!0),l(),p.current&&clearTimeout(p.current);const M=y.current;M.active=!0,M.startTime=performance.now(),M.duration=1e3,M.targetFace=x,M.hasBounced1=!1,M.hasBounced2=!1,M.hasLanded=!1,M.spinSpeedX=(.35+Math.random()*.25)*(Math.random()>.5?1:-1),M.spinSpeedY=(.4+Math.random()*.3)*(Math.random()>.5?1:-1),M.spinSpeedZ=(.25+Math.random()*.2)*(Math.random()>.5?1:-1),p.current=setTimeout(()=>{d(!1),M.active=!1,f.current&&(f.current.position.set(0,.82,0),f.current.quaternion.setFromEuler(Ud(x))),m.current&&(m.current.scale.set(1,1,1),m.current.material.opacity=.75)},1150)},[l]);q.useEffect(()=>{s!=null&&s.roll&&f.current&&E(s.roll)},[s,E]),q.useEffect(()=>{t&&f.current&&!y.current.active&&E(t)},[t,E]),q.useEffect(()=>{const x=M=>{M.code==="Space"&&n&&e&&!h&&(M.preventDefault(),r())};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[n,e,h,r]),q.useEffect(()=>{if(!n||!e)return;let x=0,M=0,F=0,L=0;const N=U=>{const H=U.accelerationIncludingGravity;if(!H)return;const D=Date.now();if(D-L>160){const W=D-L;L=D,Math.abs(H.x+H.y+H.z-x-M-F)/W*1e4>850&&!h&&r(),x=H.x||0,M=H.y||0,F=H.z||0}};return window.addEventListener("devicemotion",N),()=>window.removeEventListener("devicemotion",N)},[n,e,h,r]);const b=()=>{n&&e&&!h&&r()};return R.jsxs("div",{className:"flex flex-col items-center gap-2 select-none",children:[R.jsx("div",{className:`relative w-36 h-36 rounded-3xl p-2.5 flex items-center justify-center transition-all ${n&&e?"cursor-pointer hover:scale-105 active:scale-95":"cursor-default"}`,style:{background:"radial-gradient(circle at 50% 40%, #2e1d13 0%, #150d07 100%)",border:"2px solid rgba(223, 178, 86, 0.45)",boxShadow:n&&e?"0 0 28px rgba(223, 178, 86, 0.55), inset 0 2px 4px rgba(255, 230, 180, 0.4)":"0 10px 25px rgba(0, 0, 0, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.1)"},onClick:b,children:R.jsxs("div",{className:"relative w-full h-full rounded-2xl bg-[#0e2417] border border-amber-500/20 shadow-inner flex items-center justify-center overflow-hidden",children:[c?R.jsx("div",{ref:a,className:"w-full h-full flex items-center justify-center"}):R.jsx("div",{className:"w-16 h-16 rounded-xl bg-white text-slate-900 font-display font-black text-3xl flex items-center justify-center shadow-lg",children:t||1}),n&&e&&!h&&R.jsx("div",{className:"absolute inset-0 border-2 border-amber-400/50 rounded-2xl animate-pulse pointer-events-none"})]})}),R.jsx("div",{className:"text-center",children:n&&e?R.jsx("span",{className:"text-xs font-display font-bold text-amber-400 animate-pulse tracking-wide block",children:"Tap Dice or Spacebar to Roll 🎲"}):R.jsx("span",{className:"text-[11px] font-semibold text-slate-400 block",children:h?"Rolling in 3D…":"Waiting for turn…"})})]})},cx=({player:t,isActive:e,turnDeadline:n,isMe:i})=>{const{theme:r}=us(),[s,a]=q.useState(20);q.useEffect(()=>{if(!e)return;const d=()=>{const v=Math.max(0,Math.ceil((n-Date.now())/1e3));a(v)};d();const p=setInterval(d,250);return()=>clearInterval(p)},[e,n]);const o=r.colors[t.color],l=24,c=2*Math.PI*l,u=e?Math.max(0,Math.min(1,(n-Date.now())/Fw)):0,h=c-u*c;return R.jsxs("div",{className:`relative flex items-center gap-3 p-2.5 rounded-2xl transition-all ${e?"bg-[#22150c] shadow-xl scale-105":"bg-[#180f08]/80 opacity-90"}`,style:{boxShadow:e?`0 0 24px ${o.glow}, inset 0 1px 2px rgba(255,230,180,0.2)`:void 0,border:e?`2px solid ${o.primary}`:"1px solid rgba(223, 178, 86, 0.25)"},children:[R.jsxs("div",{className:"relative w-14 h-14 flex items-center justify-center",children:[R.jsxs("svg",{className:"absolute inset-0 w-full h-full -rotate-90 pointer-events-none",viewBox:"0 0 56 56",children:[R.jsx("circle",{cx:"28",cy:"28",r:l,fill:"transparent",stroke:"currentColor",strokeWidth:"3.5",className:"text-slate-200 dark:text-slate-800"}),e&&R.jsx(mn.circle,{cx:"28",cy:"28",r:l,fill:"transparent",stroke:s<=5?"#ef4444":o.primary,strokeWidth:"4",strokeLinecap:"round",strokeDasharray:c,animate:{strokeDashoffset:h},transition:{ease:"linear",duration:.25}})]}),R.jsx("div",{className:"w-11 h-11 rounded-full flex items-center justify-center text-xl shadow-md border-2 border-white/90 select-none overflow-hidden",style:{background:o.light},children:t.avatar}),t.isBot&&R.jsx("span",{className:"absolute -bottom-1 -right-1 bg-sky-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-md",children:"BOT"})]}),R.jsxs("div",{className:"flex flex-col min-w-0 pr-1",children:[R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{className:"text-xs font-bold text-slate-800 dark:text-slate-100 truncate max-w-[90px] sm:max-w-[120px]",children:t.name}),i&&R.jsx("span",{className:"text-[9px] font-black uppercase tracking-wider bg-amber-400 text-amber-950 px-1 rounded",children:"YOU"})]}),R.jsxs("div",{className:"flex items-center gap-2 mt-0.5 text-[10px] text-slate-500 dark:text-slate-400 font-semibold",children:[R.jsxs("span",{children:[t.finishedCount,"/4 Home"]}),R.jsx("span",{children:"•"}),R.jsxs("span",{children:[t.capturesCount," ⚔"]})]})]})]})},UN=({reactions:t,onSendReaction:e})=>R.jsxs("div",{className:"relative w-full",children:[R.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 overflow-hidden",children:R.jsx(du,{children:t.slice(-6).map(n=>R.jsx(mn.div,{initial:{y:window.innerHeight*.7,x:window.innerWidth*.5+(Math.random()-.5)*200,opacity:0,scale:.5},animate:{y:window.innerHeight*.35,opacity:[0,1,1,0],scale:[.5,1.5,1.2,.8]},exit:{opacity:0},transition:{duration:2.2,ease:"easeOut"},className:"absolute text-4xl filter drop-shadow-lg",children:n.emoji},n.id))})}),R.jsx("div",{className:"flex items-center justify-center gap-1.5 p-1.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-md",children:kw.map(n=>R.jsx(mn.button,{type:"button",whileHover:{scale:1.25,y:-2},whileTap:{scale:.9},onClick:()=>e(n),className:"w-8 h-8 flex items-center justify-center text-lg rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors",children:n},n))})]}),FN=({onEnter:t})=>R.jsxs("div",{className:"relative min-h-screen w-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden",children:[R.jsx(mn.div,{animate:{scale:[1,1.2,1],rotate:[0,90,0]},transition:{duration:15,repeat:1/0,ease:"easeInOut"},className:"absolute top-10 -left-20 w-80 h-80 rounded-full bg-rose-400/20 blur-3xl pointer-events-none"}),R.jsx(mn.div,{animate:{scale:[1.2,1,1.2],rotate:[0,-90,0]},transition:{duration:18,repeat:1/0,ease:"easeInOut"},className:"absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl pointer-events-none"}),R.jsxs(mn.div,{initial:{scale:.7,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},transition:{duration:.6,type:"spring"},className:"relative z-10 flex flex-col items-center max-w-sm",children:[R.jsx(mn.div,{animate:{y:[0,-10,0],rotate:[-4,4,-4]},transition:{duration:3.5,repeat:1/0,ease:"easeInOut"},className:"w-24 h-24 rounded-3xl bg-gradient-to-tr from-amber-400 via-rose-400 to-sky-400 p-1 shadow-2xl mb-4",children:R.jsx("div",{className:"w-full h-full rounded-[22px] bg-slate-900 flex items-center justify-center text-5xl shadow-inner",children:"🎲"})}),R.jsx("span",{className:"text-[11px] font-serif font-black tracking-[0.25em] text-amber-400 uppercase mb-1",children:"✦ REAL-TIME 3D MULTIPLAYER ✦"}),R.jsxs("h1",{className:"text-4xl sm:text-5xl font-display font-black text-white leading-tight",children:["Royal ",R.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500",children:"Ludo"})]}),R.jsx("p",{className:"text-xs sm:text-sm text-amber-100/70 mt-2 mb-8 leading-relaxed",children:"Roll the hand-carved 3D ivory dice across a luxury walnut board. Play with friends via shareable link or challenge live opponents worldwide."}),R.jsxs(mn.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:t,className:"w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-display font-black text-base tracking-wider shadow-2xl shadow-amber-500/30 flex items-center justify-center gap-3 transition border border-amber-300/80",children:[R.jsx("span",{children:"ENTER THE PARLOR"}),R.jsx("span",{children:"➔"})]})]})]});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZM=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=q.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>q.createElement("svg",{ref:l,...kN,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:ZM("lucide",r),...o},[...a.map(([c,u])=>q.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=(t,e)=>{const n=q.forwardRef(({className:i,...r},s)=>q.createElement(BN,{ref:s,iconNode:e,className:ZM(`lucide-${ON(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=Xt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=Xt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=Xt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=Xt("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=Xt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XN=Xt("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=Xt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=Xt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=Xt("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=Xt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qN=Xt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YN=Xt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=Xt("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=Xt("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=Xt("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZN=Xt("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=Xt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=Xt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),tE=({roomCode:t,isOpen:e,onClose:n})=>{const[i,r]=q.useState(!1);if(!e)return null;const s=`${window.location.origin}?room=${t}`,a=`https://api.whatsapp.com/send?text=${encodeURIComponent(`🎲 Join my Royal Ludo match! Room Code: ${t}
Play directly in browser: ${s}`)}`,o=()=>{navigator.clipboard.writeText(s),r(!0),setTimeout(()=>r(!1),2e3)};return R.jsx(du,{children:R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:R.jsxs(mn.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"relative w-full max-w-sm p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-white/20 text-center",children:[R.jsx("button",{onClick:n,className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition",children:R.jsx(eE,{size:18})}),R.jsx("span",{className:"text-4xl mb-2 block",children:"👑"}),R.jsx("h3",{className:"text-xl font-display font-bold text-slate-900 dark:text-white",children:"Invite Your Friends"}),R.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-1 mb-5",children:"Share this room code or direct link to start playing immediately."}),R.jsx("div",{className:"flex items-center justify-center gap-2 p-3 bg-slate-100 dark:bg-slate-800/80 rounded-2xl mb-4 border border-dashed border-slate-300 dark:border-slate-700",children:R.jsx("span",{className:"font-mono text-2xl font-black tracking-widest text-amber-500",children:t})}),R.jsxs("div",{className:"flex flex-col gap-2.5",children:[R.jsxs("button",{onClick:o,className:"w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 font-bold rounded-2xl transition shadow-md",children:[i?R.jsx(VN,{size:18,className:"text-emerald-400"}):R.jsx(HN,{size:18}),R.jsx("span",{children:i?"Link Copied!":"Copy Invite Link"})]}),R.jsxs("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-2xl transition shadow-md",children:[R.jsx(Mm,{size:18}),R.jsx("span",{children:"Share via WhatsApp"})]})]})]})})})},QN=({myPlayerId:t,gameState:e,onQuickMatch:n,onCreateRoom:i,onJoinRoom:r,onStartGame:s})=>{const{theme:a}=us(),[o,l]=q.useState(()=>localStorage.getItem("ludo_name")||"Royal Player"),[c,u]=q.useState(()=>localStorage.getItem("ludo_avatar")||"👑"),[h,d]=q.useState(4),[p,v]=q.useState(""),[S,g]=q.useState("quick"),[f,m]=q.useState(!1),[_,y]=q.useState(null),[E,b]=q.useState(!1),x=(N,U)=>{l(N),u(U),localStorage.setItem("ludo_name",N),localStorage.setItem("ludo_avatar",U)},M=async()=>{y(null),m(!0);const N=await n(o,c,h);m(!1),N.success||y(N.error||"Failed to find match")},F=async()=>{y(null),m(!0);const N=await i(o,c,h);m(!1),N.success||y(N.error||"Failed to create room")},L=async()=>{if(!p.trim()){y("Please enter a 6-character room code.");return}y(null),m(!0);const N=await r(p.trim().toUpperCase(),o,c);m(!1),N.success||y(N.error||"Could not join room")};if(e&&e.turnState.phase==="waiting"){const N=e.hostId===t;return R.jsxs("div",{className:"w-full max-w-md mx-auto p-4 sm:p-6 flex flex-col items-center",children:[R.jsxs("div",{className:"w-full bg-[#1b1009]/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-amber-500/35 text-center",children:[R.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-amber-500/20 mb-5",children:[R.jsxs("div",{children:[R.jsx("span",{className:"text-[10px] font-serif font-black tracking-widest text-amber-400 uppercase block",children:"MATCH WAITING ROOM"}),R.jsxs("h2",{className:"text-xl font-display font-black text-white",children:["Room: ",R.jsx("span",{className:"font-mono text-amber-400",children:e.roomCode})]})]}),R.jsxs("button",{onClick:()=>b(!0),className:"p-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 font-black transition shadow-md flex items-center gap-1.5 text-xs border border-amber-300/60",children:[R.jsx(Mm,{size:16}),R.jsx("span",{children:"Share"})]})]}),R.jsxs("div",{className:"space-y-2.5 mb-6 text-left",children:[R.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider text-amber-200/70 block mb-1",children:["Seated Players (",e.players.length,"/",e.playerCount,")"]}),e.players.map(U=>R.jsxs("div",{className:"flex items-center justify-between p-3 rounded-2xl bg-[#23150d] border border-amber-500/25 shadow-sm",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("span",{className:"text-2xl",children:U.avatar}),R.jsxs("div",{children:[R.jsxs("span",{className:"text-xs font-bold text-white block",children:[U.name," ",U.id===t?"(You)":""]}),R.jsxs("span",{className:"text-[9px] font-black uppercase tracking-wider",style:{color:a.colors[U.color].primary},children:[U.color," Sovereign"]})]})]}),U.id===e.hostId&&R.jsxs("span",{className:"flex items-center gap-1 text-[10px] font-black text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full",children:[R.jsx(GN,{size:12})," HOST"]})]},U.color))]}),N?R.jsxs("button",{onClick:s,className:"w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-display font-black text-sm tracking-wider shadow-xl hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 border border-amber-300/70",children:[R.jsx($N,{size:18}),R.jsx("span",{children:"START MATCH NOW"})]}):R.jsx("div",{className:"p-3.5 rounded-2xl bg-[#23150d] border border-amber-500/20 text-xs font-semibold text-amber-200/80 animate-pulse",children:"Waiting for the host to start the match…"})]}),R.jsx(tE,{roomCode:e.roomCode,isOpen:E,onClose:()=>b(!1)})]})}return R.jsxs("div",{className:"w-full max-w-md mx-auto p-4 sm:p-6 flex flex-col items-center",children:[R.jsxs("div",{className:"w-full bg-[#1b1009]/95 backdrop-blur-md rounded-3xl p-5 shadow-2xl border border-amber-500/35 mb-5",children:[R.jsxs("div",{className:"flex items-center gap-4",children:[R.jsx("div",{className:"relative group",children:R.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5 shadow-md",children:R.jsx("div",{className:"w-full h-full rounded-[14px] bg-[#23150d] flex items-center justify-center text-3xl",children:c})})}),R.jsxs("div",{className:"flex-1 min-w-0",children:[R.jsx("label",{className:"text-[10px] font-bold uppercase tracking-wider text-amber-200/70 block mb-1",children:"Your Player Nickname"}),R.jsx("input",{type:"text",maxLength:15,value:o,onChange:N=>x(N.target.value,c),className:"w-full py-2 px-3 rounded-xl bg-[#120a05] border border-amber-500/40 text-sm font-bold text-white outline-none focus:border-amber-400 transition",placeholder:"Enter name…"})]})]}),R.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pt-3 mt-3 border-t border-amber-500/20",children:Ow.map(N=>R.jsx("button",{type:"button",onClick:()=>x(o,N),className:`p-1.5 text-xl rounded-xl transition ${c===N?"bg-amber-400 text-amber-950 shadow-md scale-110":"hover:bg-[#2a1a10] text-white"}`,children:N},N))})]}),R.jsxs("div",{className:"w-full grid grid-cols-3 p-1 rounded-2xl bg-[#140c06] border border-amber-500/30 backdrop-blur mb-5 text-xs font-bold",children:[R.jsxs("button",{onClick:()=>g("quick"),className:`py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 ${S==="quick"?"bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 shadow-md font-black":"text-amber-200/60 hover:text-white"}`,children:[R.jsx(dx,{size:14})," Quick"]}),R.jsxs("button",{onClick:()=>g("create"),className:`py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 ${S==="create"?"bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 shadow-md font-black":"text-amber-200/60 hover:text-white"}`,children:[R.jsx(ux,{size:14})," Host"]}),R.jsxs("button",{onClick:()=>g("join"),className:`py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 ${S==="join"?"bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 shadow-md font-black":"text-amber-200/60 hover:text-white"}`,children:[R.jsx(YN,{size:14})," Join"]})]}),R.jsxs("div",{className:"w-full bg-[#1b1009]/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-amber-500/35",children:[_&&R.jsx("div",{className:"p-3 mb-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-bold",children:_}),S==="quick"&&R.jsxs("div",{className:"flex flex-col gap-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-amber-200/70 block mb-2",children:"Number of Players"}),R.jsxs("div",{className:"grid grid-cols-2 gap-2.5",children:[R.jsxs("button",{type:"button",onClick:()=>d(4),className:`p-3 rounded-2xl border text-center transition ${h===4?"border-amber-400 bg-amber-500/20 font-black text-amber-300 shadow-md":"border-amber-500/20 bg-[#120a05] text-amber-200/60 hover:border-amber-500/40"}`,children:[R.jsx("span",{className:"text-xl block",children:"4"}),R.jsx("span",{className:"text-xs",children:"Full Match"})]}),R.jsxs("button",{type:"button",onClick:()=>d(2),className:`p-3 rounded-2xl border text-center transition ${h===2?"border-amber-400 bg-amber-500/20 font-black text-amber-300 shadow-md":"border-amber-500/20 bg-[#120a05] text-amber-200/60 hover:border-amber-500/40"}`,children:[R.jsx("span",{className:"text-xl block",children:"2"}),R.jsx("span",{className:"text-xs",children:"Duel (1v1)"})]})]})]}),R.jsxs("button",{onClick:M,disabled:f,className:"w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-display font-black text-sm tracking-wider shadow-xl hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 mt-2 border border-amber-300/70",children:[R.jsx(dx,{size:18}),R.jsx("span",{children:f?"FINDING MATCH…":"FIND QUICK MATCH"})]})]}),S==="create"&&R.jsxs("div",{className:"flex flex-col gap-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-amber-200/70 block mb-2",children:"Room Player Capacity"}),R.jsx("div",{className:"grid grid-cols-3 gap-2",children:[4,2,3].map(N=>R.jsxs("button",{type:"button",onClick:()=>d(N),className:`p-3 rounded-2xl border text-center transition ${h===N?"border-amber-400 bg-amber-500/20 font-black text-amber-300 shadow-md":"border-amber-500/20 bg-[#120a05] text-amber-200/60 hover:border-amber-500/40"}`,children:[R.jsx("span",{className:"text-lg font-black block",children:N}),R.jsx("span",{className:"text-[10px]",children:"Players"})]},N))})]}),R.jsxs("button",{onClick:F,disabled:f,className:"w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-display font-black text-sm tracking-wider shadow-xl hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 mt-2 border border-amber-300/70",children:[R.jsx(ux,{size:18}),R.jsx("span",{children:f?"CREATING ROOM…":"CREATE PRIVATE ROOM"})]})]}),S==="join"&&R.jsxs("div",{className:"flex flex-col gap-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-amber-200/70 block mb-2",children:"Enter 6-Character Room Code"}),R.jsx("input",{type:"text",maxLength:6,value:p,onChange:N=>v(N.target.value.toUpperCase()),placeholder:"e.g. LUDO7X",className:"w-full py-3 px-4 rounded-2xl bg-[#120a05] border-2 border-amber-500/40 text-center font-mono text-xl font-black tracking-widest text-amber-300 outline-none focus:border-amber-400 transition"})]}),R.jsxs("button",{onClick:L,disabled:f,className:"w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-display font-black text-sm tracking-wider shadow-xl hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 mt-2 border border-amber-300/70",children:[R.jsx("span",{children:f?"JOINING…":"JOIN ROOM"}),R.jsx(zN,{size:18})]})]})]})]})};var Em={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var C=new OffscreenCanvas(1,1),A=C.getContext("2d");A.fillRect(0,0,1,1);var Q=C.transferToImageBitmap();A.createPattern(Q,"no-repeat")}catch{return!1}return!0}();function l(){}function c(C){var A=n.exports.Promise,Q=A!==void 0?A:e.Promise;return typeof Q=="function"?new Q(C):(C(l,l),null)}var u=function(C,A){return{transform:function(Q){if(C)return Q;if(A.has(Q))return A.get(Q);var le=new OffscreenCanvas(Q.width,Q.height),G=le.getContext("2d");return G.drawImage(Q,0,0),A.set(Q,le),le},clear:function(){A.clear()}}}(o,new Map),h=function(){var C=Math.floor(16.666666666666668),A,Q,le={},G=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(A=function(ne){var ae=Math.random();return le[ae]=requestAnimationFrame(function oe(J){G===J||G+C-1<J?(G=J,delete le[ae],ne()):le[ae]=requestAnimationFrame(oe)}),ae},Q=function(ne){le[ne]&&cancelAnimationFrame(le[ne])}):(A=function(ne){return setTimeout(ne,C)},Q=function(ne){return clearTimeout(ne)}),{frame:A,cancel:Q}}(),d=function(){var C,A,Q={};function le(G){function ne(ae,oe){G.postMessage({options:ae||{},callback:oe})}G.init=function(oe){var J=oe.transferControlToOffscreen();G.postMessage({canvas:J},[J])},G.fire=function(oe,J,me){if(A)return ne(oe,null),A;var ke=Math.random().toString(36).slice(2);return A=c(function(Me){function Re(Fe){Fe.data.callback===ke&&(delete Q[ke],G.removeEventListener("message",Re),A=null,u.clear(),me(),Me())}G.addEventListener("message",Re),ne(oe,ke),Q[ke]=Re.bind(null,{data:{callback:ke}})}),A},G.reset=function(){G.postMessage({reset:!0});for(var oe in Q)Q[oe](),delete Q[oe]}}return function(){if(C)return C;if(!i&&s){var G=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{C=new Worker(URL.createObjectURL(new Blob([G])))}catch(ne){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ne),null}le(C)}return C}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(C,A){return A?A(C):C}function S(C){return C!=null}function g(C,A,Q){return v(C&&S(C[A])?C[A]:p[A],Q)}function f(C){return C<0?0:Math.floor(C)}function m(C,A){return Math.floor(Math.random()*(A-C))+C}function _(C){return parseInt(C,16)}function y(C){return C.map(E)}function E(C){var A=String(C).replace(/[^0-9a-f]/gi,"");return A.length<6&&(A=A[0]+A[0]+A[1]+A[1]+A[2]+A[2]),{r:_(A.substring(0,2)),g:_(A.substring(2,4)),b:_(A.substring(4,6))}}function b(C){var A=g(C,"origin",Object);return A.x=g(A,"x",Number),A.y=g(A,"y",Number),A}function x(C){C.width=document.documentElement.clientWidth,C.height=document.documentElement.clientHeight}function M(C){var A=C.getBoundingClientRect();C.width=A.width,C.height=A.height}function F(C){var A=document.createElement("canvas");return A.style.position="fixed",A.style.top="0px",A.style.left="0px",A.style.pointerEvents="none",A.style.zIndex=C,A}function L(C,A,Q,le,G,ne,ae,oe,J){C.save(),C.translate(A,Q),C.rotate(ne),C.scale(le,G),C.arc(0,0,1,ae,oe,J),C.restore()}function N(C){var A=C.angle*(Math.PI/180),Q=C.spread*(Math.PI/180);return{x:C.x,y:C.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:C.startVelocity*.5+Math.random()*C.startVelocity,angle2D:-A+(.5*Q-Math.random()*Q),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:C.color,shape:C.shape,tick:0,totalTicks:C.ticks,decay:C.decay,drift:C.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:C.gravity*3,ovalScalar:.6,scalar:C.scalar,flat:C.flat}}function U(C,A){A.x+=Math.cos(A.angle2D)*A.velocity+A.drift,A.y+=Math.sin(A.angle2D)*A.velocity+A.gravity,A.velocity*=A.decay,A.flat?(A.wobble=0,A.wobbleX=A.x+10*A.scalar,A.wobbleY=A.y+10*A.scalar,A.tiltSin=0,A.tiltCos=0,A.random=1):(A.wobble+=A.wobbleSpeed,A.wobbleX=A.x+10*A.scalar*Math.cos(A.wobble),A.wobbleY=A.y+10*A.scalar*Math.sin(A.wobble),A.tiltAngle+=.1,A.tiltSin=Math.sin(A.tiltAngle),A.tiltCos=Math.cos(A.tiltAngle),A.random=Math.random()+2);var Q=A.tick++/A.totalTicks,le=A.x+A.random*A.tiltCos,G=A.y+A.random*A.tiltSin,ne=A.wobbleX+A.random*A.tiltCos,ae=A.wobbleY+A.random*A.tiltSin;if(C.fillStyle="rgba("+A.color.r+", "+A.color.g+", "+A.color.b+", "+(1-Q)+")",C.beginPath(),a&&A.shape.type==="path"&&typeof A.shape.path=="string"&&Array.isArray(A.shape.matrix))C.fill(k(A.shape.path,A.shape.matrix,A.x,A.y,Math.abs(ne-le)*.1,Math.abs(ae-G)*.1,Math.PI/10*A.wobble));else if(A.shape.type==="bitmap"){var oe=Math.PI/10*A.wobble,J=Math.abs(ne-le)*.1,me=Math.abs(ae-G)*.1,ke=A.shape.bitmap.width*A.scalar,Me=A.shape.bitmap.height*A.scalar,Re=new DOMMatrix([Math.cos(oe)*J,Math.sin(oe)*J,-Math.sin(oe)*me,Math.cos(oe)*me,A.x,A.y]);Re.multiplySelf(new DOMMatrix(A.shape.matrix));var Fe=C.createPattern(u.transform(A.shape.bitmap),"no-repeat");Fe.setTransform(Re),C.globalAlpha=1-Q,C.fillStyle=Fe,C.fillRect(A.x-ke/2,A.y-Me/2,ke,Me),C.globalAlpha=1}else if(A.shape==="circle")C.ellipse?C.ellipse(A.x,A.y,Math.abs(ne-le)*A.ovalScalar,Math.abs(ae-G)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI):L(C,A.x,A.y,Math.abs(ne-le)*A.ovalScalar,Math.abs(ae-G)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI);else if(A.shape==="star")for(var Te=Math.PI/2*3,Ze=4*A.scalar,Qe=8*A.scalar,Je=A.x,tt=A.y,Bt=5,ot=Math.PI/Bt;Bt--;)Je=A.x+Math.cos(Te)*Qe,tt=A.y+Math.sin(Te)*Qe,C.lineTo(Je,tt),Te+=ot,Je=A.x+Math.cos(Te)*Ze,tt=A.y+Math.sin(Te)*Ze,C.lineTo(Je,tt),Te+=ot;else C.moveTo(Math.floor(A.x),Math.floor(A.y)),C.lineTo(Math.floor(A.wobbleX),Math.floor(G)),C.lineTo(Math.floor(ne),Math.floor(ae)),C.lineTo(Math.floor(le),Math.floor(A.wobbleY));return C.closePath(),C.fill(),A.tick<A.totalTicks}function H(C,A,Q,le,G){var ne=A.slice(),ae=C.getContext("2d"),oe,J,me=c(function(ke){function Me(){oe=J=null,ae.clearRect(0,0,le.width,le.height),u.clear(),G(),ke()}function Re(){i&&!(le.width===r.width&&le.height===r.height)&&(le.width=C.width=r.width,le.height=C.height=r.height),!le.width&&!le.height&&(Q(C),le.width=C.width,le.height=C.height),ae.clearRect(0,0,le.width,le.height),ne=ne.filter(function(Fe){return U(ae,Fe)}),ne.length?oe=h.frame(Re):Me()}oe=h.frame(Re),J=Me});return{addFettis:function(ke){return ne=ne.concat(ke),me},canvas:C,promise:me,reset:function(){oe&&h.cancel(oe),J&&J()}}}function D(C,A){var Q=!C,le=!!g(A||{},"resize"),G=!1,ne=g(A,"disableForReducedMotion",Boolean),ae=s&&!!g(A||{},"useWorker"),oe=ae?d():null,J=Q?x:M,me=C&&oe?!!C.__confetti_initialized:!1,ke=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Me;function Re(Te,Ze,Qe){for(var Je=g(Te,"particleCount",f),tt=g(Te,"angle",Number),Bt=g(Te,"spread",Number),ot=g(Te,"startVelocity",Number),_n=g(Te,"decay",Number),yn=g(Te,"gravity",Number),Sn=g(Te,"drift",Number),z=g(Te,"colors",y),Mn=g(Te,"ticks",Number),dt=g(Te,"shapes"),ht=g(Te,"scalar"),Se=!!g(Te,"flat"),At=b(Te),Ie=Je,Be=[],P=C.width*At.x,w=C.height*At.y;Ie--;)Be.push(N({x:P,y:w,angle:tt,spread:Bt,startVelocity:ot,color:z[Ie%z.length],shape:dt[m(0,dt.length)],ticks:Mn,decay:_n,gravity:yn,drift:Sn,scalar:ht,flat:Se}));return Me?Me.addFettis(Be):(Me=H(C,Be,J,Ze,Qe),Me.promise)}function Fe(Te){var Ze=ne||g(Te,"disableForReducedMotion",Boolean),Qe=g(Te,"zIndex",Number);if(Ze&&ke)return c(function(ot){ot()});Q&&Me?C=Me.canvas:Q&&!C&&(C=F(Qe),document.body.appendChild(C)),le&&!me&&J(C);var Je={width:C.width,height:C.height};oe&&!me&&oe.init(C),me=!0,oe&&(C.__confetti_initialized=!0);function tt(){if(oe){var ot={getBoundingClientRect:function(){if(!Q)return C.getBoundingClientRect()}};J(ot),oe.postMessage({resize:{width:ot.width,height:ot.height}});return}Je.width=Je.height=null}function Bt(){Me=null,le&&(G=!1,e.removeEventListener("resize",tt)),Q&&C&&(document.body.contains(C)&&document.body.removeChild(C),C=null,me=!1)}return le&&!G&&(G=!0,e.addEventListener("resize",tt,!1)),oe?oe.fire(Te,Je,Bt):Re(Te,Je,Bt)}return Fe.reset=function(){oe&&oe.reset(),Me&&Me.reset()},Fe}var W;function Z(){return W||(W=D(null,{useWorker:!0,resize:!0})),W}function k(C,A,Q,le,G,ne,ae){var oe=new Path2D(C),J=new Path2D;J.addPath(oe,new DOMMatrix(A));var me=new Path2D;return me.addPath(J,new DOMMatrix([Math.cos(ae)*G,Math.sin(ae)*G,-Math.sin(ae)*ne,Math.cos(ae)*ne,Q,le])),me}function V(C){if(!a)throw new Error("path confetti are not supported in this browser");var A,Q;typeof C=="string"?A=C:(A=C.path,Q=C.matrix);var le=new Path2D(A),G=document.createElement("canvas"),ne=G.getContext("2d");if(!Q){for(var ae=1e3,oe=ae,J=ae,me=0,ke=0,Me,Re,Fe=0;Fe<ae;Fe+=2)for(var Te=0;Te<ae;Te+=2)ne.isPointInPath(le,Fe,Te,"nonzero")&&(oe=Math.min(oe,Fe),J=Math.min(J,Te),me=Math.max(me,Fe),ke=Math.max(ke,Te));Me=me-oe,Re=ke-J;var Ze=10,Qe=Math.min(Ze/Me,Ze/Re);Q=[Qe,0,0,Qe,-Math.round(Me/2+oe)*Qe,-Math.round(Re/2+J)*Qe]}return{type:"path",path:A,matrix:Q}}function B(C){var A,Q=1,le="#000000",G='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof C=="string"?A=C:(A=C.text,Q="scalar"in C?C.scalar:Q,G="fontFamily"in C?C.fontFamily:G,le="color"in C?C.color:le);var ne=10*Q,ae=""+ne+"px "+G,oe=new OffscreenCanvas(ne,ne),J=oe.getContext("2d");J.font=ae;var me=J.measureText(A),ke=Math.ceil(me.actualBoundingBoxRight+me.actualBoundingBoxLeft),Me=Math.ceil(me.actualBoundingBoxAscent+me.actualBoundingBoxDescent),Re=2,Fe=me.actualBoundingBoxLeft+Re,Te=me.actualBoundingBoxAscent+Re;ke+=Re+Re,Me+=Re+Re,oe=new OffscreenCanvas(ke,Me),J=oe.getContext("2d"),J.font=ae,J.fillStyle=le,J.fillText(A,Fe,Te);var Ze=1/Q;return{type:"bitmap",bitmap:oe.transferToImageBitmap(),matrix:[Ze,0,0,Ze,-ke*Ze/2,-Me*Ze/2]}}n.exports=function(){return Z().apply(this,arguments)},n.exports.reset=function(){Z().reset()},n.exports.create=D,n.exports.shapeFromPath=V,n.exports.shapeFromText=B})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Em,!1);const fx=Em.exports;Em.exports.create;const JN=({winner:t,rankings:e,players:n,rematchVotes:i,myPlayerId:r,onRequestRematch:s,onReturnLobby:a})=>{const{theme:o}=us(),{playVictory:l}=cu();q.useEffect(()=>{l();const h=Date.now()+3e3,d=["#f59e0b","#fb7185","#34d399","#60a5fa","#ffffff"];(function p(){fx({particleCount:4,angle:60,spread:55,origin:{x:0},colors:d}),fx({particleCount:4,angle:120,spread:55,origin:{x:1},colors:d}),Date.now()<h&&requestAnimationFrame(p)})()},[l]);const c=n.find(h=>h.color===t),u=i.includes(r);return R.jsx(du,{children:R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md",children:R.jsxs(mn.div,{initial:{scale:.85,opacity:0,y:30},animate:{scale:1,opacity:1,y:0},className:"relative w-full max-w-md p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-white/20 text-center",children:[R.jsx(mn.div,{animate:{rotate:[-8,8,-8],y:[0,-8,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},className:"text-6xl mb-2",children:"🏆"}),R.jsx("span",{className:"text-xs uppercase font-serif font-black tracking-widest text-amber-500",children:"CHAMPION DECIDED"}),R.jsxs("h2",{className:"text-2xl font-display font-black text-slate-900 dark:text-white mt-1",children:[c==null?void 0:c.name," Triumphs!"]}),R.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6",children:"All four tokens reached the Home Pyramid in glorious victory."}),R.jsx("div",{className:"flex items-end justify-center gap-2 mb-6 h-36",children:e.map((h,d)=>{const p=n.find(g=>g.color===h),v=d+1,S=v===1?"h-28":v===2?"h-20":"h-14";return R.jsxs("div",{className:"flex flex-col items-center flex-1",children:[R.jsx("span",{className:"text-xl mb-1",children:p==null?void 0:p.avatar}),R.jsx("span",{className:"text-[10px] font-bold truncate max-w-[70px] text-slate-700 dark:text-slate-200",children:p==null?void 0:p.name}),R.jsxs("div",{className:`w-full ${S} rounded-t-xl flex items-center justify-center font-display font-black text-lg text-white shadow-md transition-all`,style:{background:o.colors[h].primary},children:["#",v]})]},h)})}),R.jsxs("div",{className:"flex flex-col gap-2.5",children:[R.jsx("button",{onClick:s,className:`w-full py-3.5 px-4 font-display font-bold text-sm rounded-2xl shadow-lg transition ${u?"bg-amber-500 text-amber-950 opacity-90":"bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-amber-950"}`,children:u?`Voted Rematch (${i.length} ready) ⏳`:"Play Again / Rematch ↻"}),R.jsx("button",{onClick:a,className:"w-full py-2.5 px-4 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition",children:"Back to Main Lobby"})]})]})})})},eI=({isOpen:t,onClose:e})=>{const{themeId:n,setThemeId:i,isDarkMode:r,setIsDarkMode:s}=us(),{isMuted:a,toggleMute:o,isBgmPlaying:l,toggleBGM:c}=cu();return t?R.jsx(du,{children:R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:R.jsxs(mn.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"relative w-full max-w-sm p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-white/20",children:[R.jsxs("div",{className:"flex items-center justify-between mb-4",children:[R.jsx("h3",{className:"text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2",children:"⚙️ Game Settings"}),R.jsx("button",{onClick:e,className:"p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition",children:R.jsx(eE,{size:18})})]}),R.jsxs("div",{className:"mb-5",children:[R.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 block",children:"Board Theme"}),R.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.keys(Pf).map(u=>{const h=Pf[u],d=n===u;return R.jsxs("button",{onClick:()=>i(u),className:`p-2.5 rounded-xl text-left border text-xs font-bold transition flex flex-col gap-0.5 ${d?"border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 shadow-sm":"border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`,children:[R.jsx("span",{children:h.name}),R.jsx("span",{className:"text-[9px] font-normal text-slate-500 dark:text-slate-400 truncate",children:h.tagline})]},u)})})]}),R.jsxs("div",{className:"space-y-3 mb-5",children:[R.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block",children:"Audio & Haptics"}),R.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold",children:[R.jsxs("span",{className:"flex items-center gap-2",children:[a?R.jsx(JM,{size:16}):R.jsx(QM,{size:16}),"Sound Effects (SFX)"]}),R.jsx("button",{onClick:o,className:`px-3 py-1 rounded-full text-[10px] font-bold ${a?"bg-slate-300 text-slate-700":"bg-emerald-500 text-white"}`,children:a?"Muted":"Enabled"})]}),R.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold",children:[R.jsxs("span",{className:"flex items-center gap-2",children:[R.jsx(XN,{size:16}),"Procedural Lo-Fi BGM"]}),R.jsx("button",{onClick:c,className:`px-3 py-1 rounded-full text-[10px] font-bold ${l?"bg-emerald-500 text-white":"bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,children:l?"Playing":"Off"})]}),R.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold",children:[R.jsxs("span",{className:"flex items-center gap-2",children:[r?R.jsx(WN,{size:16}):R.jsx(qN,{size:16}),"Dark Mode"]}),R.jsx("button",{onClick:()=>s(!r),className:"px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900",children:r?"Dark":"Light"})]})]})]})})}):null},tI=()=>{const{theme:t}=us(),{isConnected:e,isReconnecting:n,latency:i,myPlayerId:r,myColor:s,gameState:a,setGameState:o,reactions:l,lastDiceEvent:c,joinRoom:u,quickMatch:h,startGame:d,rollDice:p,moveToken:v,sendReaction:S,requestRematch:g}=Uw(),{isMuted:f,toggleMute:m}=cu(),[_,y]=q.useState(()=>localStorage.getItem("ludo_onboarded")==="true"),[E,b]=q.useState(!1),[x,M]=q.useState(!1),[F,L]=q.useState(null);q.useEffect(()=>{const V=new URLSearchParams(window.location.search).get("room");if(V&&!a){y(!0);const B=localStorage.getItem("ludo_name")||"Guest Player",C=localStorage.getItem("ludo_avatar")||"👑";u(V.toUpperCase(),B,C)}},[u,a]);const N=()=>{y(!0),localStorage.setItem("ludo_onboarded","true")},U=()=>{o(null)};if(!_)return R.jsx("div",{style:{background:t.bgGradient},className:"min-h-screen text-slate-900 dark:text-white",children:R.jsx(FN,{onEnter:N})});const H=a&&a.turnState.phase!=="waiting",D=(a==null?void 0:a.turnState.activeColor)||"red",W=s?D===s:!0,Z=(a==null?void 0:a.turnState.phase)==="roll";return R.jsxs("div",{style:{background:t.bgGradient},className:"min-h-screen flex flex-col justify-between transition-colors duration-500 overflow-x-hidden text-slate-900 dark:text-white",children:[R.jsxs("header",{className:"w-full max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between z-30 bg-[#140c07]/85 backdrop-blur-md rounded-b-2xl border-b border-amber-500/25 shadow-xl mb-2",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 p-0.5 shadow-md flex items-center justify-center text-xl select-none",children:R.jsx("span",{className:"drop-shadow",children:"🎲"})}),R.jsxs("div",{children:[R.jsxs("h1",{className:"font-display font-black text-lg tracking-tight leading-none text-white",children:["Royal ",R.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500",children:"Ludo"})]}),R.jsx("span",{className:"text-[9px] font-black text-amber-400/80 uppercase tracking-widest block font-serif",children:"Grand Walnut Edition"})]})]}),a&&R.jsxs("div",{onClick:()=>b(!0),className:"flex items-center gap-1.5 px-3 py-1 bg-[#23150d] backdrop-blur rounded-full border border-amber-500/40 shadow-inner cursor-pointer hover:border-amber-400 transition",children:[R.jsx("span",{className:"text-[10px] font-bold text-amber-200/60 uppercase",children:"ROOM:"}),R.jsx("span",{className:"font-mono text-xs font-black text-amber-400 tracking-wider",children:a.roomCode}),R.jsx(Mm,{size:12,className:"text-amber-400"})]}),R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsxs("div",{className:`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur ${e?"bg-emerald-500/15 text-emerald-400 border border-emerald-500/30":"bg-rose-500/15 text-rose-400 border border-rose-500/30 animate-pulse"}`,children:[e?R.jsx(ZN,{size:12}):R.jsx(KN,{size:12}),R.jsx("span",{className:"hidden sm:inline",children:e?`${i}ms`:"Offline"})]}),R.jsx("button",{onClick:m,className:"p-2 rounded-xl bg-[#23150d] border border-amber-500/30 text-amber-300 hover:border-amber-400 hover:text-amber-200 transition shadow-sm","aria-label":"Toggle sound",children:f?R.jsx(JM,{size:16}):R.jsx(QM,{size:16})}),R.jsx("button",{onClick:()=>M(!0),className:"p-2 rounded-xl bg-[#23150d] border border-amber-500/30 text-amber-300 hover:border-amber-400 hover:text-amber-200 transition shadow-sm","aria-label":"Settings",children:R.jsx(jN,{size:16})})]})]}),R.jsx("main",{className:"flex-1 flex flex-col items-center justify-center px-2 py-2",children:H?R.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6",children:[R.jsx("div",{className:"flex lg:flex-col gap-2 justify-center w-full lg:w-48 overflow-x-auto pb-1",children:a==null?void 0:a.players.slice(0,2).map(k=>R.jsx(cx,{player:k,isActive:k.color===D,turnDeadline:a.turnState.turnDeadline,isMe:k.id===r},k.color))}),R.jsx("div",{className:"flex-1 w-full max-w-[560px]",children:R.jsx(gC,{players:(a==null?void 0:a.players)||[],activeColor:D,myColor:s,phase:(a==null?void 0:a.turnState.phase)||"roll",roll:(a==null?void 0:a.turnState.roll)||null,availableMoves:(a==null?void 0:a.turnState.availableMoves)||[],onMoveToken:v})}),R.jsxs("div",{className:"flex flex-col items-center gap-3 w-full lg:w-56",children:[R.jsx("div",{className:"flex lg:flex-col gap-2 justify-center w-full",children:a==null?void 0:a.players.slice(2).map(k=>R.jsx(cx,{player:k,isActive:k.color===D,turnDeadline:a.turnState.turnDeadline,isMe:k.id===r},k.color))}),R.jsxs("div",{className:"w-full bg-[#1b1009]/90 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-amber-500/35 flex flex-col items-center",children:[R.jsx(IN,{rollValue:(a==null?void 0:a.turnState.roll)||null,lastDiceEvent:c,isMyTurn:W,canRoll:Z,activeColor:D,onRoll:p}),(a==null?void 0:a.turnState.phase)==="move"&&R.jsx("div",{className:"mt-3 text-center animate-bounce",children:R.jsx("span",{className:"text-[12px] font-display font-bold text-amber-300 bg-amber-500/20 border border-amber-400/50 px-4 py-1.5 rounded-full shadow-lg",children:W?"Tap an active token to move!":"Waiting for move…"})})]}),R.jsx(UN,{reactions:l,onSendReaction:S})]})]}):R.jsx(QN,{myPlayerId:r,gameState:a,onQuickMatch:h,onCreateRoom:(k,V,B)=>u(void 0,k,V,B),onJoinRoom:(k,V,B)=>u(k,V,B),onStartGame:d})}),n&&R.jsx("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-50 py-2 px-4 rounded-full bg-rose-600 text-white font-bold text-xs shadow-2xl animate-pulse",children:"Reconnecting to match…"}),F&&R.jsx("div",{className:"fixed top-16 left-1/2 -translate-x-1/2 z-50 py-2 px-5 rounded-full bg-slate-900/90 text-amber-400 border border-amber-400/40 text-xs font-black shadow-2xl",children:F}),R.jsx(tE,{roomCode:(a==null?void 0:a.roomCode)||"",isOpen:E,onClose:()=>b(!1)}),R.jsx(eI,{isOpen:x,onClose:()=>M(!1)}),(a==null?void 0:a.winner)&&R.jsx(JN,{winner:a.winner,rankings:a.rankings,players:a.players,rematchVotes:a.rematchVotes,myPlayerId:r,onRequestRematch:g,onReturnLobby:U})]})};Fd.createRoot(document.getElementById("root")).render(R.jsx(EE.StrictMode,{children:R.jsx(Bw,{children:R.jsx(tI,{})})}));
