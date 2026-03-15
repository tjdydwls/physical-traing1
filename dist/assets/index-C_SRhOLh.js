(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Kg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Nh={exports:{}},da={},Dh={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function yw(){if(wm)return Ae;wm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),x=Symbol.iterator;function L(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function W(D,B,le){this.props=D,this.context=B,this.refs=X,this.updater=le||z}W.prototype.isReactComponent={},W.prototype.setState=function(D,B){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,B,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ge(){}ge.prototype=W.prototype;function ye(D,B,le){this.props=D,this.context=B,this.refs=X,this.updater=le||z}var _e=ye.prototype=new ge;_e.constructor=ye,Y(_e,W.prototype),_e.isPureReactComponent=!0;var Ee=Array.isArray,ze=Object.prototype.hasOwnProperty,Te={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(D,B,le){var Ie,Se={},ke=null,Le=null;if(B!=null)for(Ie in B.ref!==void 0&&(Le=B.ref),B.key!==void 0&&(ke=""+B.key),B)ze.call(B,Ie)&&!k.hasOwnProperty(Ie)&&(Se[Ie]=B[Ie]);var Me=arguments.length-2;if(Me===1)Se.children=le;else if(1<Me){for(var Be=Array(Me),pt=0;pt<Me;pt++)Be[pt]=arguments[pt+2];Se.children=Be}if(D&&D.defaultProps)for(Ie in Me=D.defaultProps,Me)Se[Ie]===void 0&&(Se[Ie]=Me[Ie]);return{$$typeof:i,type:D,key:ke,ref:Le,props:Se,_owner:Te.current}}function S(D,B){return{$$typeof:i,type:D.type,key:B,ref:D.ref,props:D.props,_owner:D._owner}}function P(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function N(D){var B={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(le){return B[le]})}var V=/\/+/g;function A(D,B){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):B.toString(36)}function et(D,B,le,Ie,Se){var ke=typeof D;(ke==="undefined"||ke==="boolean")&&(D=null);var Le=!1;if(D===null)Le=!0;else switch(ke){case"string":case"number":Le=!0;break;case"object":switch(D.$$typeof){case i:case e:Le=!0}}if(Le)return Le=D,Se=Se(Le),D=Ie===""?"."+A(Le,0):Ie,Ee(Se)?(le="",D!=null&&(le=D.replace(V,"$&/")+"/"),et(Se,B,le,"",function(pt){return pt})):Se!=null&&(P(Se)&&(Se=S(Se,le+(!Se.key||Le&&Le.key===Se.key?"":(""+Se.key).replace(V,"$&/")+"/")+D)),B.push(Se)),1;if(Le=0,Ie=Ie===""?".":Ie+":",Ee(D))for(var Me=0;Me<D.length;Me++){ke=D[Me];var Be=Ie+A(ke,Me);Le+=et(ke,B,le,Be,Se)}else if(Be=L(D),typeof Be=="function")for(D=Be.call(D),Me=0;!(ke=D.next()).done;)ke=ke.value,Be=Ie+A(ke,Me++),Le+=et(ke,B,le,Be,Se);else if(ke==="object")throw B=String(D),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Le}function Ct(D,B,le){if(D==null)return D;var Ie=[],Se=0;return et(D,Ie,"","",function(ke){return B.call(le,ke,Se++)}),Ie}function kt(D){if(D._status===-1){var B=D._result;B=B(),B.then(function(le){(D._status===0||D._status===-1)&&(D._status=1,D._result=le)},function(le){(D._status===0||D._status===-1)&&(D._status=2,D._result=le)}),D._status===-1&&(D._status=0,D._result=B)}if(D._status===1)return D._result.default;throw D._result}var Ue={current:null},Z={transition:null},ce={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Te};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Ct,forEach:function(D,B,le){Ct(D,function(){B.apply(this,arguments)},le)},count:function(D){var B=0;return Ct(D,function(){B++}),B},toArray:function(D){return Ct(D,function(B){return B})||[]},only:function(D){if(!P(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ae.Component=W,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ye,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Ae.act=te,Ae.cloneElement=function(D,B,le){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ie=Y({},D.props),Se=D.key,ke=D.ref,Le=D._owner;if(B!=null){if(B.ref!==void 0&&(ke=B.ref,Le=Te.current),B.key!==void 0&&(Se=""+B.key),D.type&&D.type.defaultProps)var Me=D.type.defaultProps;for(Be in B)ze.call(B,Be)&&!k.hasOwnProperty(Be)&&(Ie[Be]=B[Be]===void 0&&Me!==void 0?Me[Be]:B[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=le;else if(1<Be){Me=Array(Be);for(var pt=0;pt<Be;pt++)Me[pt]=arguments[pt+2];Ie.children=Me}return{$$typeof:i,type:D.type,key:Se,ref:ke,props:Ie,_owner:Le}},Ae.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Ae.createElement=E,Ae.createFactory=function(D){var B=E.bind(null,D);return B.type=D,B},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(D){return{$$typeof:m,render:D}},Ae.isValidElement=P,Ae.lazy=function(D){return{$$typeof:T,_payload:{_status:-1,_result:D},_init:kt}},Ae.memo=function(D,B){return{$$typeof:v,type:D,compare:B===void 0?null:B}},Ae.startTransition=function(D){var B=Z.transition;Z.transition={};try{D()}finally{Z.transition=B}},Ae.unstable_act=te,Ae.useCallback=function(D,B){return Ue.current.useCallback(D,B)},Ae.useContext=function(D){return Ue.current.useContext(D)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(D){return Ue.current.useDeferredValue(D)},Ae.useEffect=function(D,B){return Ue.current.useEffect(D,B)},Ae.useId=function(){return Ue.current.useId()},Ae.useImperativeHandle=function(D,B,le){return Ue.current.useImperativeHandle(D,B,le)},Ae.useInsertionEffect=function(D,B){return Ue.current.useInsertionEffect(D,B)},Ae.useLayoutEffect=function(D,B){return Ue.current.useLayoutEffect(D,B)},Ae.useMemo=function(D,B){return Ue.current.useMemo(D,B)},Ae.useReducer=function(D,B,le){return Ue.current.useReducer(D,B,le)},Ae.useRef=function(D){return Ue.current.useRef(D)},Ae.useState=function(D){return Ue.current.useState(D)},Ae.useSyncExternalStore=function(D,B,le){return Ue.current.useSyncExternalStore(D,B,le)},Ae.useTransition=function(){return Ue.current.useTransition()},Ae.version="18.3.1",Ae}var Em;function vd(){return Em||(Em=1,Dh.exports=yw()),Dh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function _w(){if(Tm)return da;Tm=1;var i=vd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var T,x={},L=null,z=null;v!==void 0&&(L=""+v),g.key!==void 0&&(L=""+g.key),g.ref!==void 0&&(z=g.ref);for(T in g)s.call(g,T)&&!u.hasOwnProperty(T)&&(x[T]=g[T]);if(m&&m.defaultProps)for(T in g=m.defaultProps,g)x[T]===void 0&&(x[T]=g[T]);return{$$typeof:e,type:m,key:L,ref:z,props:x,_owner:o.current}}return da.Fragment=t,da.jsx=h,da.jsxs=h,da}var Im;function vw(){return Im||(Im=1,Nh.exports=_w()),Nh.exports}var j=vw(),gn=vd();const ww=Kg(gn);var hu={},Vh={exports:{}},Qt={},Oh={exports:{}},Lh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function Ew(){return Sm||(Sm=1,(function(i){function e(Z,ce){var te=Z.length;Z.push(ce);e:for(;0<te;){var D=te-1>>>1,B=Z[D];if(0<o(B,ce))Z[D]=ce,Z[te]=B,te=D;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],te=Z.pop();if(te!==ce){Z[0]=te;e:for(var D=0,B=Z.length,le=B>>>1;D<le;){var Ie=2*(D+1)-1,Se=Z[Ie],ke=Ie+1,Le=Z[ke];if(0>o(Se,te))ke<B&&0>o(Le,Se)?(Z[D]=Le,Z[ke]=te,D=ke):(Z[D]=Se,Z[Ie]=te,D=Ie);else if(ke<B&&0>o(Le,te))Z[D]=Le,Z[ke]=te,D=ke;else break e}}return ce}function o(Z,ce){var te=Z.sortIndex-ce.sortIndex;return te!==0?te:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],T=1,x=null,L=3,z=!1,Y=!1,X=!1,W=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _e(Z){for(var ce=t(v);ce!==null;){if(ce.callback===null)s(v);else if(ce.startTime<=Z)s(v),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(v)}}function Ee(Z){if(X=!1,_e(Z),!Y)if(t(g)!==null)Y=!0,kt(ze);else{var ce=t(v);ce!==null&&Ue(Ee,ce.startTime-Z)}}function ze(Z,ce){Y=!1,X&&(X=!1,ge(E),E=-1),z=!0;var te=L;try{for(_e(ce),x=t(g);x!==null&&(!(x.expirationTime>ce)||Z&&!N());){var D=x.callback;if(typeof D=="function"){x.callback=null,L=x.priorityLevel;var B=D(x.expirationTime<=ce);ce=i.unstable_now(),typeof B=="function"?x.callback=B:x===t(g)&&s(g),_e(ce)}else s(g);x=t(g)}if(x!==null)var le=!0;else{var Ie=t(v);Ie!==null&&Ue(Ee,Ie.startTime-ce),le=!1}return le}finally{x=null,L=te,z=!1}}var Te=!1,k=null,E=-1,S=5,P=-1;function N(){return!(i.unstable_now()-P<S)}function V(){if(k!==null){var Z=i.unstable_now();P=Z;var ce=!0;try{ce=k(!0,Z)}finally{ce?A():(Te=!1,k=null)}}else Te=!1}var A;if(typeof ye=="function")A=function(){ye(V)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Ct=et.port2;et.port1.onmessage=V,A=function(){Ct.postMessage(null)}}else A=function(){W(V,0)};function kt(Z){k=Z,Te||(Te=!0,A())}function Ue(Z,ce){E=W(function(){Z(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){Y||z||(Y=!0,kt(ze))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return L},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(Z){switch(L){case 1:case 2:case 3:var ce=3;break;default:ce=L}var te=L;L=ce;try{return Z()}finally{L=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=L;L=Z;try{return ce()}finally{L=te}},i.unstable_scheduleCallback=function(Z,ce,te){var D=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?D+te:D):te=D,Z){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=te+B,Z={id:T++,callback:ce,priorityLevel:Z,startTime:te,expirationTime:B,sortIndex:-1},te>D?(Z.sortIndex=te,e(v,Z),t(g)===null&&Z===t(v)&&(X?(ge(E),E=-1):X=!0,Ue(Ee,te-D))):(Z.sortIndex=B,e(g,Z),Y||z||(Y=!0,kt(ze))),Z},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(Z){var ce=L;return function(){var te=L;L=ce;try{return Z.apply(this,arguments)}finally{L=te}}}})(Lh)),Lh}var Am;function Tw(){return Am||(Am=1,Oh.exports=Ew()),Oh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function Iw(){if(Rm)return Qt;Rm=1;var i=vd(),e=Tw();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},x={};function L(n){return g.call(x,n)?!0:g.call(T,n)?!1:v.test(n)?x[n]=!0:(T[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function ye(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ge,ye);W[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ge,ye);W[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ge,ye);W[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function _e(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,a,d,c)&&(a=null),c||d===null?L(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ee=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),Te=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),N=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Ct=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,D;function B(n){if(D===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var le=!1;function Ie(n,r){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,I=p.length-1;1<=_&&0<=I&&d[_]!==p[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==p[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==p[I]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=I);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function Se(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Te:return"Portal";case S:return"Profiler";case E:return"StrictMode";case A:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ct:return r=n.displayName||null,r!==null?r:ke(n.type)||"Memo";case kt:r=n._payload,n=n._init;try{return ke(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pt(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function er(n){n._valueTracker||(n._valueTracker=pt(n))}function ns(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Cr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function mi(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function rs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function _o(n,r){r=r.checked,r!=null&&_e(n,"checked",r,!1)}function vo(n,r){_o(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?is(n,r.type,a):r.hasOwnProperty("defaultValue")&&is(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ya(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function is(n,r,a){(r!=="number"||Cr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var tr=Array.isArray;function nr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function wo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ss(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(tr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function os(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Eo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var rr,To=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=rr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function kr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yi=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(n){yi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),gi[r]=gi[n]})});function Io(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||gi.hasOwnProperty(n)&&gi[n]?(""+r).trim():r+"px"}function So(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Io(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ao=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ro(n,r){if(r){if(Ao[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Po(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _i=null;function as(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ls=null,on=null,Mn=null;function us(n){if(n=Xo(n)){if(typeof ls!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Rl(r),ls(n.stateNode,n.type,r))}}function bn(n){on?Mn?Mn.push(n):Mn=[n]:on=n}function Co(){if(on){var n=on,r=Mn;if(Mn=on=null,us(n),r)for(n=0;n<r.length;n++)us(r[n])}}function vi(n,r){return n(r)}function ko(){}var ir=!1;function xo(n,r,a){if(ir)return n(r,a);ir=!0;try{return vi(n,r,a)}finally{ir=!1,(on!==null||Mn!==null)&&(ko(),Co())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=Rl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var cs=!1;if(m)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){cs=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{cs=!1}function wi(n,r,a,c,d,p,_,I,R){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(H){this.onError(H)}}var Ei=!1,hs=null,vn=!1,No=null,sc={onError:function(n){Ei=!0,hs=n}};function ds(n,r,a,c,d,p,_,I,R){Ei=!1,hs=null,wi.apply(sc,arguments)}function Xa(n,r,a,c,d,p,_,I,R){if(ds.apply(this,arguments),Ei){if(Ei){var F=hs;Ei=!1,hs=null}else throw Error(t(198));vn||(vn=!0,No=F)}}function wn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ti(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function En(n){if(wn(n)!==n)throw Error(t(188))}function Ja(n){var r=n.alternate;if(!r){if(r=wn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return En(d),n;if(p===c)return En(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=p;break}if(I===c){_=!0,c=d,a=p;break}I=I.sibling}if(!_){for(I=p.child;I;){if(I===a){_=!0,a=p,c=d;break}if(I===c){_=!0,c=p,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Do(n){return n=Ja(n),n!==null?fs(n):null}function fs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=fs(n);if(r!==null)return r;n=n.sibling}return null}var ps=e.unstable_scheduleCallback,Vo=e.unstable_cancelCallback,Za=e.unstable_shouldYield,oc=e.unstable_requestPaint,$e=e.unstable_now,el=e.unstable_getCurrentPriorityLevel,Ii=e.unstable_ImmediatePriority,xr=e.unstable_UserBlockingPriority,an=e.unstable_NormalPriority,Oo=e.unstable_LowPriority,tl=e.unstable_IdlePriority,Si=null,Jt=null;function nl(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Si,n,void 0,(n.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:il,Lo=Math.log,rl=Math.LN2;function il(n){return n>>>=0,n===0?32:31-(Lo(n)/rl|0)|0}var ms=64,gs=4194304;function Nr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ai(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Nr(I):(p&=_,p!==0&&(c=Nr(p)))}else _=a&~d,_!==0?c=Nr(_):p!==0&&(c=Nr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ft(r),d=1<<a,c|=n[a],r&=~d;return c}function ac(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ft(p),I=1<<_,R=d[_];R===-1?((I&a)===0||(I&c)!==0)&&(d[_]=ac(I,r)):R<=r&&(n.expiredLanes|=I),p&=~I}}function Zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ri(){var n=ms;return ms<<=1,(ms&4194240)===0&&(ms=64),n}function Dr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Vr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ft(r),n[r]=a}function je(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ft(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Or(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ft(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function Lr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var sl,ys,ol,al,ll,Mo=!1,Fn=[],wt=null,Tn=null,In=null,Mr=new Map,ln=new Map,Un=[],lc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ul(n,r){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Mr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(r.pointerId)}}function Bt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Xo(r),r!==null&&ys(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function uc(n,r,a,c,d){switch(r){case"focusin":return wt=Bt(wt,n,r,a,c,d),!0;case"dragenter":return Tn=Bt(Tn,n,r,a,c,d),!0;case"mouseover":return In=Bt(In,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Mr.set(p,Bt(Mr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,ln.set(p,Bt(ln.get(p)||null,n,r,a,c,d)),!0}return!1}function cl(n){var r=Ni(n.target);if(r!==null){var a=wn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ti(a),r!==null){n.blockedOn=r,ll(n.priority,function(){ol(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function or(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=_s(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);_i=c,a.target.dispatchEvent(c),_i=null}else return r=Xo(a),r!==null&&ys(r),n.blockedOn=a,!1;r.shift()}return!0}function Pi(n,r,a){or(n)&&a.delete(r)}function hl(){Mo=!1,wt!==null&&or(wt)&&(wt=null),Tn!==null&&or(Tn)&&(Tn=null),In!==null&&or(In)&&(In=null),Mr.forEach(Pi),ln.forEach(Pi)}function Sn(n,r){n.blockedOn===r&&(n.blockedOn=null,Mo||(Mo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hl)))}function An(n){function r(d){return Sn(d,n)}if(0<Fn.length){Sn(Fn[0],n);for(var a=1;a<Fn.length;a++){var c=Fn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&Sn(wt,n),Tn!==null&&Sn(Tn,n),In!==null&&Sn(In,n),Mr.forEach(r),ln.forEach(r),a=0;a<Un.length;a++)c=Un[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Un.length&&(a=Un[0],a.blockedOn===null);)cl(a),a.blockedOn===null&&Un.shift()}var ar=Ee.ReactCurrentBatchConfig,br=!0;function Ge(n,r,a,c){var d=Pe,p=ar.transition;ar.transition=null;try{Pe=1,bo(n,r,a,c)}finally{Pe=d,ar.transition=p}}function cc(n,r,a,c){var d=Pe,p=ar.transition;ar.transition=null;try{Pe=4,bo(n,r,a,c)}finally{Pe=d,ar.transition=p}}function bo(n,r,a,c){if(br){var d=_s(n,r,a,c);if(d===null)Ec(n,r,c,Ci,a),ul(n,c);else if(uc(d,n,r,a,c))c.stopPropagation();else if(ul(n,c),r&4&&-1<lc.indexOf(n)){for(;d!==null;){var p=Xo(d);if(p!==null&&sl(p),p=_s(n,r,a,c),p===null&&Ec(n,r,c,Ci,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Ec(n,r,c,null,a)}}var Ci=null;function _s(n,r,a,c){if(Ci=null,n=as(c),n=Ni(n),n!==null)if(r=wn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ti(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ci=n,null}function Fo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(el()){case Ii:return 1;case xr:return 4;case an:case Oo:return 16;case tl:return 536870912;default:return 16}default:return 16}}var en=null,vs=null,$t=null;function Uo(){if($t)return $t;var n,r=vs,a=r.length,c,d="value"in en?en.value:en.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return $t=d.slice(n,1<c?1-c:void 0)}function ws(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function jn(){return!0}function jo(){return!1}function Et(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?jn:jo,this.isPropagationStopped=jo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),r}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=Et(Rn),zn=te({},Rn,{view:0,detail:0}),hc=Et(zn),Ts,lr,Fr,ki=te({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fr&&(Fr&&n.type==="mousemove"?(Ts=n.screenX-Fr.screenX,lr=n.screenY-Fr.screenY):lr=Ts=0,Fr=n),Ts)},movementY:function(n){return"movementY"in n?n.movementY:lr}}),Is=Et(ki),zo=te({},ki,{dataTransfer:0}),dl=Et(zo),Ss=te({},zn,{relatedTarget:0}),As=Et(Ss),fl=te({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),ur=Et(fl),pl=te({},Rn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ml=Et(pl),gl=te({},Rn,{data:0}),Bo=Et(gl),Rs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ut={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _l(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=yl[n])?!!r[n]:!1}function Bn(){return _l}var l=te({},zn,{key:function(n){if(n.key){var r=Rs[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ws(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ut[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(n){return n.type==="keypress"?ws(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ws(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Et(l),y=te({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Et(y),O=te({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn}),U=Et(O),J=te({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),be=Et(J),ct=te({},ki,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=Et(ct),mt=[9,13,27,32],it=m&&"CompositionEvent"in window,un=null;m&&"documentMode"in document&&(un=document.documentMode);var tn=m&&"TextEvent"in window&&!un,xi=m&&(!it||un&&8<un&&11>=un),Ps=" ",pf=!1;function mf(n,r){switch(n){case"keyup":return mt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function pv(n,r){switch(n){case"compositionend":return gf(r);case"keypress":return r.which!==32?null:(pf=!0,Ps);case"textInput":return n=r.data,n===Ps&&pf?null:n;default:return null}}function mv(n,r){if(Cs)return n==="compositionend"||!it&&mf(n,r)?(n=Uo(),$t=vs=en=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return xi&&r.locale!=="ko"?null:r.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!gv[n.type]:r==="textarea"}function _f(n,r,a,c){bn(c),r=Il(r,"onChange"),0<r.length&&(a=new Es("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var $o=null,qo=null;function yv(n){Mf(n,0)}function vl(n){var r=Vs(n);if(ns(r))return n}function _v(n,r){if(n==="change")return r}var vf=!1;if(m){var dc;if(m){var fc="oninput"in document;if(!fc){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),fc=typeof wf.oninput=="function"}dc=fc}else dc=!1;vf=dc&&(!document.documentMode||9<document.documentMode)}function Ef(){$o&&($o.detachEvent("onpropertychange",Tf),qo=$o=null)}function Tf(n){if(n.propertyName==="value"&&vl(qo)){var r=[];_f(r,qo,n,as(n)),xo(yv,r)}}function vv(n,r,a){n==="focusin"?(Ef(),$o=r,qo=a,$o.attachEvent("onpropertychange",Tf)):n==="focusout"&&Ef()}function wv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vl(qo)}function Ev(n,r){if(n==="click")return vl(r)}function Tv(n,r){if(n==="input"||n==="change")return vl(r)}function Iv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pn=typeof Object.is=="function"?Object.is:Iv;function Wo(n,r){if(Pn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Pn(n[d],r[d]))return!1}return!0}function If(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sf(n,r){var a=If(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=If(a)}}function Af(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Af(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Rf(){for(var n=window,r=Cr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Cr(n.document)}return r}function pc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Sv(n){var r=Rf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Af(a.ownerDocument.documentElement,a)){if(c!==null&&pc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Sf(a,p);var _=Sf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Av=m&&"documentMode"in document&&11>=document.documentMode,ks=null,mc=null,Ho=null,gc=!1;function Pf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||ks==null||ks!==Cr(c)||(c=ks,"selectionStart"in c&&pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ho&&Wo(Ho,c)||(Ho=c,c=Il(mc,"onSelect"),0<c.length&&(r=new Es("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=ks)))}function wl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var xs={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},yc={},Cf={};m&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function El(n){if(yc[n])return yc[n];if(!xs[n])return n;var r=xs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Cf)return yc[n]=r[a];return n}var kf=El("animationend"),xf=El("animationiteration"),Nf=El("animationstart"),Df=El("transitionend"),Vf=new Map,Of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,r){Vf.set(n,r),u(r,[n])}for(var _c=0;_c<Of.length;_c++){var vc=Of[_c],Rv=vc.toLowerCase(),Pv=vc[0].toUpperCase()+vc.slice(1);Ur(Rv,"on"+Pv)}Ur(kf,"onAnimationEnd"),Ur(xf,"onAnimationIteration"),Ur(Nf,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Df,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function Lf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Xa(c,r,void 0,n),n.currentTarget=null}function Mf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var I=c[_],R=I.instance,F=I.currentTarget;if(I=I.listener,R!==p&&d.isPropagationStopped())break e;Lf(d,I,F),p=R}else for(_=0;_<c.length;_++){if(I=c[_],R=I.instance,F=I.currentTarget,I=I.listener,R!==p&&d.isPropagationStopped())break e;Lf(d,I,F),p=R}}}if(vn)throw n=No,vn=!1,No=null,n}function We(n,r){var a=r[Pc];a===void 0&&(a=r[Pc]=new Set);var c=n+"__bubble";a.has(c)||(bf(r,n,2,!1),a.add(c))}function wc(n,r,a){var c=0;r&&(c|=4),bf(a,n,c,r)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Go(n){if(!n[Tl]){n[Tl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Cv.has(a)||wc(a,!1,n),wc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Tl]||(r[Tl]=!0,wc("selectionchange",!1,r))}}function bf(n,r,a,c){switch(Fo(r)){case 1:var d=Ge;break;case 4:d=cc;break;default:d=bo}a=d.bind(null,r,a,n),d=void 0,!cs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Ec(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;I!==null;){if(_=Ni(I),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}I=I.parentNode}}c=c.return}xo(function(){var F=p,H=as(a),G=[];e:{var q=Vf.get(n);if(q!==void 0){var ee=Es,ie=n;switch(n){case"keypress":if(ws(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":ie="focus",ee=As;break;case"focusout":ie="blur",ee=As;break;case"beforeblur":case"afterblur":ee=As;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=dl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=U;break;case kf:case xf:case Nf:ee=ur;break;case Df:ee=be;break;case"scroll":ee=hc;break;case"wheel":ee=xe;break;case"copy":case"cut":case"paste":ee=ml;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=w}var se=(r&4)!==0,nt=!se&&n==="scroll",M=se?q!==null?q+"Capture":null:q;se=[];for(var C=F,b;C!==null;){b=C;var Q=b.stateNode;if(b.tag===5&&Q!==null&&(b=Q,M!==null&&(Q=tt(C,M),Q!=null&&se.push(Qo(C,Q,b)))),nt)break;C=C.return}0<se.length&&(q=new ee(q,ie,null,a,H),G.push({event:q,listeners:se}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",q&&a!==_i&&(ie=a.relatedTarget||a.fromElement)&&(Ni(ie)||ie[cr]))break e;if((ee||q)&&(q=H.window===H?H:(q=H.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=F,ie=ie?Ni(ie):null,ie!==null&&(nt=wn(ie),ie!==nt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=F),ee!==ie)){if(se=Is,Q="onMouseLeave",M="onMouseEnter",C="mouse",(n==="pointerout"||n==="pointerover")&&(se=w,Q="onPointerLeave",M="onPointerEnter",C="pointer"),nt=ee==null?q:Vs(ee),b=ie==null?q:Vs(ie),q=new se(Q,C+"leave",ee,a,H),q.target=nt,q.relatedTarget=b,Q=null,Ni(H)===F&&(se=new se(M,C+"enter",ie,a,H),se.target=b,se.relatedTarget=nt,Q=se),nt=Q,ee&&ie)t:{for(se=ee,M=ie,C=0,b=se;b;b=Ns(b))C++;for(b=0,Q=M;Q;Q=Ns(Q))b++;for(;0<C-b;)se=Ns(se),C--;for(;0<b-C;)M=Ns(M),b--;for(;C--;){if(se===M||M!==null&&se===M.alternate)break t;se=Ns(se),M=Ns(M)}se=null}else se=null;ee!==null&&Ff(G,q,ee,se,!1),ie!==null&&nt!==null&&Ff(G,nt,ie,se,!0)}}e:{if(q=F?Vs(F):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var ae=_v;else if(yf(q))if(vf)ae=Tv;else{ae=wv;var he=vv}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ae=Ev);if(ae&&(ae=ae(n,F))){_f(G,ae,a,H);break e}he&&he(n,q,F),n==="focusout"&&(he=q._wrapperState)&&he.controlled&&q.type==="number"&&is(q,"number",q.value)}switch(he=F?Vs(F):window,n){case"focusin":(yf(he)||he.contentEditable==="true")&&(ks=he,mc=F,Ho=null);break;case"focusout":Ho=mc=ks=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Pf(G,a,H);break;case"selectionchange":if(Av)break;case"keydown":case"keyup":Pf(G,a,H)}var de;if(it)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Cs?mf(n,a)&&(pe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(xi&&a.locale!=="ko"&&(Cs||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Cs&&(de=Uo()):(en=H,vs="value"in en?en.value:en.textContent,Cs=!0)),he=Il(F,pe),0<he.length&&(pe=new Bo(pe,n,null,a,H),G.push({event:pe,listeners:he}),de?pe.data=de:(de=gf(a),de!==null&&(pe.data=de)))),(de=tn?pv(n,a):mv(n,a))&&(F=Il(F,"onBeforeInput"),0<F.length&&(H=new Bo("onBeforeInput","beforeinput",null,a,H),G.push({event:H,listeners:F}),H.data=de))}Mf(G,r)})}function Qo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Il(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(Qo(n,p,d)),p=tt(n,r),p!=null&&c.push(Qo(n,p,d))),n=n.return}return c}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ff(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var I=a,R=I.alternate,F=I.stateNode;if(R!==null&&R===c)break;I.tag===5&&F!==null&&(I=F,d?(R=tt(a,p),R!=null&&_.unshift(Qo(a,R,I))):d||(R=tt(a,p),R!=null&&_.push(Qo(a,R,I)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var kv=/\r\n?/g,xv=/\u0000|\uFFFD/g;function Uf(n){return(typeof n=="string"?n:""+n).replace(kv,`
`).replace(xv,"")}function Sl(n,r,a){if(r=Uf(r),Uf(n)!==r&&a)throw Error(t(425))}function Al(){}var Tc=null,Ic=null;function Sc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,Nv=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(n){return jf.resolve(null).then(n).catch(Vv)}:Ac;function Vv(n){setTimeout(function(){throw n})}function Rc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),An(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);An(r)}function jr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function zf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ds,Yo="__reactProps$"+Ds,cr="__reactContainer$"+Ds,Pc="__reactEvents$"+Ds,Ov="__reactListeners$"+Ds,Lv="__reactHandles$"+Ds;function Ni(n){var r=n[$n];if(r)return r;for(var a=n.parentNode;a;){if(r=a[cr]||a[$n]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=zf(n);n!==null;){if(a=n[$n])return a;n=zf(n)}return r}n=a,a=n.parentNode}return null}function Xo(n){return n=n[$n]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Rl(n){return n[Yo]||null}var Cc=[],Os=-1;function zr(n){return{current:n}}function He(n){0>Os||(n.current=Cc[Os],Cc[Os]=null,Os--)}function qe(n,r){Os++,Cc[Os]=n.current,n.current=r}var Br={},xt=zr(Br),qt=zr(!1),Di=Br;function Ls(n,r){var a=n.type.contextTypes;if(!a)return Br;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function Pl(){He(qt),He(xt)}function Bf(n,r,a){if(xt.current!==Br)throw Error(t(168));qe(xt,r),qe(qt,a)}function $f(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return te({},a,c)}function Cl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,Di=xt.current,qe(xt,n),qe(qt,qt.current),!0}function qf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=$f(n,r,Di),c.__reactInternalMemoizedMergedChildContext=n,He(qt),He(xt),qe(xt,n)):He(qt),qe(qt,a)}var hr=null,kl=!1,kc=!1;function Wf(n){hr===null?hr=[n]:hr.push(n)}function Mv(n){kl=!0,Wf(n)}function $r(){if(!kc&&hr!==null){kc=!0;var n=0,r=Pe;try{var a=hr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}hr=null,kl=!1}catch(d){throw hr!==null&&(hr=hr.slice(n+1)),ps(Ii,$r),d}finally{Pe=r,kc=!1}}return null}var Ms=[],bs=0,xl=null,Nl=0,cn=[],hn=0,Vi=null,dr=1,fr="";function Oi(n,r){Ms[bs++]=Nl,Ms[bs++]=xl,xl=n,Nl=r}function Hf(n,r,a){cn[hn++]=dr,cn[hn++]=fr,cn[hn++]=Vi,Vi=n;var c=dr;n=fr;var d=32-Ft(c)-1;c&=~(1<<d),a+=1;var p=32-Ft(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,dr=1<<32-Ft(r)+d|a<<d|c,fr=p+n}else dr=1<<p|a<<d|c,fr=n}function xc(n){n.return!==null&&(Oi(n,1),Hf(n,1,0))}function Nc(n){for(;n===xl;)xl=Ms[--bs],Ms[bs]=null,Nl=Ms[--bs],Ms[bs]=null;for(;n===Vi;)Vi=cn[--hn],cn[hn]=null,fr=cn[--hn],cn[hn]=null,dr=cn[--hn],cn[hn]=null}var nn=null,rn=null,Qe=!1,Cn=null;function Kf(n,r){var a=mn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Gf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,nn=n,rn=jr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,nn=n,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Vi!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=mn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,nn=n,rn=null,!0):!1;default:return!1}}function Dc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(Qe){var r=rn;if(r){var a=r;if(!Gf(n,r)){if(Dc(n))throw Error(t(418));r=jr(a.nextSibling);var c=nn;r&&Gf(n,r)?Kf(c,a):(n.flags=n.flags&-4097|2,Qe=!1,nn=n)}}else{if(Dc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,nn=n}}}function Qf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function Dl(n){if(n!==nn)return!1;if(!Qe)return Qf(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Sc(n.type,n.memoizedProps)),r&&(r=rn)){if(Dc(n))throw Yf(),Error(t(418));for(;r;)Kf(n,r),r=jr(r.nextSibling)}if(Qf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){rn=jr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}rn=null}}else rn=nn?jr(n.stateNode.nextSibling):null;return!0}function Yf(){for(var n=rn;n;)n=jr(n.nextSibling)}function Fs(){rn=nn=null,Qe=!1}function Oc(n){Cn===null?Cn=[n]:Cn.push(n)}var bv=Ee.ReactCurrentBatchConfig;function Jo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var I=d.refs;_===null?delete I[p]:I[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Vl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Xf(n){var r=n._init;return r(n._payload)}function Jf(n){function r(M,C){if(n){var b=M.deletions;b===null?(M.deletions=[C],M.flags|=16):b.push(C)}}function a(M,C){if(!n)return null;for(;C!==null;)r(M,C),C=C.sibling;return null}function c(M,C){for(M=new Map;C!==null;)C.key!==null?M.set(C.key,C):M.set(C.index,C),C=C.sibling;return M}function d(M,C){return M=Xr(M,C),M.index=0,M.sibling=null,M}function p(M,C,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<C?(M.flags|=2,C):b):(M.flags|=2,C)):(M.flags|=1048576,C)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,C,b,Q){return C===null||C.tag!==6?(C=Ah(b,M.mode,Q),C.return=M,C):(C=d(C,b),C.return=M,C)}function R(M,C,b,Q){var ae=b.type;return ae===k?H(M,C,b.props.children,Q,b.key):C!==null&&(C.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===kt&&Xf(ae)===C.type)?(Q=d(C,b.props),Q.ref=Jo(M,C,b),Q.return=M,Q):(Q=ru(b.type,b.key,b.props,null,M.mode,Q),Q.ref=Jo(M,C,b),Q.return=M,Q)}function F(M,C,b,Q){return C===null||C.tag!==4||C.stateNode.containerInfo!==b.containerInfo||C.stateNode.implementation!==b.implementation?(C=Rh(b,M.mode,Q),C.return=M,C):(C=d(C,b.children||[]),C.return=M,C)}function H(M,C,b,Q,ae){return C===null||C.tag!==7?(C=Bi(b,M.mode,Q,ae),C.return=M,C):(C=d(C,b),C.return=M,C)}function G(M,C,b){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Ah(""+C,M.mode,b),C.return=M,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ze:return b=ru(C.type,C.key,C.props,null,M.mode,b),b.ref=Jo(M,null,C),b.return=M,b;case Te:return C=Rh(C,M.mode,b),C.return=M,C;case kt:var Q=C._init;return G(M,Q(C._payload),b)}if(tr(C)||ce(C))return C=Bi(C,M.mode,b,null),C.return=M,C;Vl(M,C)}return null}function q(M,C,b,Q){var ae=C!==null?C.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:I(M,C,""+b,Q);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ze:return b.key===ae?R(M,C,b,Q):null;case Te:return b.key===ae?F(M,C,b,Q):null;case kt:return ae=b._init,q(M,C,ae(b._payload),Q)}if(tr(b)||ce(b))return ae!==null?null:H(M,C,b,Q,null);Vl(M,b)}return null}function ee(M,C,b,Q,ae){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return M=M.get(b)||null,I(C,M,""+Q,ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case ze:return M=M.get(Q.key===null?b:Q.key)||null,R(C,M,Q,ae);case Te:return M=M.get(Q.key===null?b:Q.key)||null,F(C,M,Q,ae);case kt:var he=Q._init;return ee(M,C,b,he(Q._payload),ae)}if(tr(Q)||ce(Q))return M=M.get(b)||null,H(C,M,Q,ae,null);Vl(C,Q)}return null}function ie(M,C,b,Q){for(var ae=null,he=null,de=C,pe=C=0,_t=null;de!==null&&pe<b.length;pe++){de.index>pe?(_t=de,de=null):_t=de.sibling;var Ve=q(M,de,b[pe],Q);if(Ve===null){de===null&&(de=_t);break}n&&de&&Ve.alternate===null&&r(M,de),C=p(Ve,C,pe),he===null?ae=Ve:he.sibling=Ve,he=Ve,de=_t}if(pe===b.length)return a(M,de),Qe&&Oi(M,pe),ae;if(de===null){for(;pe<b.length;pe++)de=G(M,b[pe],Q),de!==null&&(C=p(de,C,pe),he===null?ae=de:he.sibling=de,he=de);return Qe&&Oi(M,pe),ae}for(de=c(M,de);pe<b.length;pe++)_t=ee(de,M,pe,b[pe],Q),_t!==null&&(n&&_t.alternate!==null&&de.delete(_t.key===null?pe:_t.key),C=p(_t,C,pe),he===null?ae=_t:he.sibling=_t,he=_t);return n&&de.forEach(function(Jr){return r(M,Jr)}),Qe&&Oi(M,pe),ae}function se(M,C,b,Q){var ae=ce(b);if(typeof ae!="function")throw Error(t(150));if(b=ae.call(b),b==null)throw Error(t(151));for(var he=ae=null,de=C,pe=C=0,_t=null,Ve=b.next();de!==null&&!Ve.done;pe++,Ve=b.next()){de.index>pe?(_t=de,de=null):_t=de.sibling;var Jr=q(M,de,Ve.value,Q);if(Jr===null){de===null&&(de=_t);break}n&&de&&Jr.alternate===null&&r(M,de),C=p(Jr,C,pe),he===null?ae=Jr:he.sibling=Jr,he=Jr,de=_t}if(Ve.done)return a(M,de),Qe&&Oi(M,pe),ae;if(de===null){for(;!Ve.done;pe++,Ve=b.next())Ve=G(M,Ve.value,Q),Ve!==null&&(C=p(Ve,C,pe),he===null?ae=Ve:he.sibling=Ve,he=Ve);return Qe&&Oi(M,pe),ae}for(de=c(M,de);!Ve.done;pe++,Ve=b.next())Ve=ee(de,M,pe,Ve.value,Q),Ve!==null&&(n&&Ve.alternate!==null&&de.delete(Ve.key===null?pe:Ve.key),C=p(Ve,C,pe),he===null?ae=Ve:he.sibling=Ve,he=Ve);return n&&de.forEach(function(gw){return r(M,gw)}),Qe&&Oi(M,pe),ae}function nt(M,C,b,Q){if(typeof b=="object"&&b!==null&&b.type===k&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ze:e:{for(var ae=b.key,he=C;he!==null;){if(he.key===ae){if(ae=b.type,ae===k){if(he.tag===7){a(M,he.sibling),C=d(he,b.props.children),C.return=M,M=C;break e}}else if(he.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===kt&&Xf(ae)===he.type){a(M,he.sibling),C=d(he,b.props),C.ref=Jo(M,he,b),C.return=M,M=C;break e}a(M,he);break}else r(M,he);he=he.sibling}b.type===k?(C=Bi(b.props.children,M.mode,Q,b.key),C.return=M,M=C):(Q=ru(b.type,b.key,b.props,null,M.mode,Q),Q.ref=Jo(M,C,b),Q.return=M,M=Q)}return _(M);case Te:e:{for(he=b.key;C!==null;){if(C.key===he)if(C.tag===4&&C.stateNode.containerInfo===b.containerInfo&&C.stateNode.implementation===b.implementation){a(M,C.sibling),C=d(C,b.children||[]),C.return=M,M=C;break e}else{a(M,C);break}else r(M,C);C=C.sibling}C=Rh(b,M.mode,Q),C.return=M,M=C}return _(M);case kt:return he=b._init,nt(M,C,he(b._payload),Q)}if(tr(b))return ie(M,C,b,Q);if(ce(b))return se(M,C,b,Q);Vl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,C!==null&&C.tag===6?(a(M,C.sibling),C=d(C,b),C.return=M,M=C):(a(M,C),C=Ah(b,M.mode,Q),C.return=M,M=C),_(M)):a(M,C)}return nt}var Us=Jf(!0),Zf=Jf(!1),Ol=zr(null),Ll=null,js=null,Lc=null;function Mc(){Lc=js=Ll=null}function bc(n){var r=Ol.current;He(Ol),n._currentValue=r}function Fc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function zs(n,r){Ll=n,Lc=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Ht=!0),n.firstContext=null)}function dn(n){var r=n._currentValue;if(Lc!==n)if(n={context:n,memoizedValue:r,next:null},js===null){if(Ll===null)throw Error(t(308));js=n,Ll.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return r}var Li=null;function Uc(n){Li===null?Li=[n]:Li.push(n)}function ep(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Uc(r)):(a.next=d.next,d.next=a),r.interleaved=a,pr(n,c)}function pr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var qr=!1;function jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Wr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(De&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,pr(n,a)}return d=c.interleaved,d===null?(r.next=r,Uc(c)):(r.next=d.next,d.next=r),c.interleaved=r,pr(n,a)}function Ml(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}function np(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function bl(n,r,a,c){var d=n.updateQueue;qr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var R=I,F=R.next;R.next=null,_===null?p=F:_.next=F,_=R;var H=n.alternate;H!==null&&(H=H.updateQueue,I=H.lastBaseUpdate,I!==_&&(I===null?H.firstBaseUpdate=F:I.next=F,H.lastBaseUpdate=R))}if(p!==null){var G=d.baseState;_=0,H=F=R=null,I=p;do{var q=I.lane,ee=I.eventTime;if((c&q)===q){H!==null&&(H=H.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ie=n,se=I;switch(q=r,ee=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){G=ie.call(ee,G,q);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,q=typeof ie=="function"?ie.call(ee,G,q):ie,q==null)break e;G=te({},G,q);break e;case 2:qr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[I]:q.push(I))}else ee={eventTime:ee,lane:q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},H===null?(F=H=ee,R=G):H=H.next=ee,_|=q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;q=I,I=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(H===null&&(R=G),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=H,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Fi|=_,n.lanes=_,n.memoizedState=G}}function rp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Zo={},qn=zr(Zo),ea=zr(Zo),ta=zr(Zo);function Mi(n){if(n===Zo)throw Error(t(174));return n}function zc(n,r){switch(qe(ta,r),qe(ea,n),qe(qn,Zo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}He(qn),qe(qn,r)}function Bs(){He(qn),He(ea),He(ta)}function ip(n){Mi(ta.current);var r=Mi(qn.current),a=ut(r,n.type);r!==a&&(qe(ea,n),qe(qn,a))}function Bc(n){ea.current===n&&(He(qn),He(ea))}var Ye=zr(0);function Fl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var $c=[];function qc(){for(var n=0;n<$c.length;n++)$c[n]._workInProgressVersionPrimary=null;$c.length=0}var Ul=Ee.ReactCurrentDispatcher,Wc=Ee.ReactCurrentBatchConfig,bi=0,Xe=null,ht=null,gt=null,jl=!1,na=!1,ra=0,Fv=0;function Nt(){throw Error(t(321))}function Hc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Pn(n[a],r[a]))return!1;return!0}function Kc(n,r,a,c,d,p){if(bi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ul.current=n===null||n.memoizedState===null?Bv:$v,n=a(c,d),na){p=0;do{if(na=!1,ra=0,25<=p)throw Error(t(301));p+=1,gt=ht=null,r.updateQueue=null,Ul.current=qv,n=a(c,d)}while(na)}if(Ul.current=$l,r=ht!==null&&ht.next!==null,bi=0,gt=ht=Xe=null,jl=!1,r)throw Error(t(300));return n}function Gc(){var n=ra!==0;return ra=0,n}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Xe.memoizedState=gt=n:gt=gt.next=n,gt}function fn(){if(ht===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=gt===null?Xe.memoizedState:gt.next;if(r!==null)gt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},gt===null?Xe.memoizedState=gt=n:gt=gt.next=n}return gt}function ia(n,r){return typeof r=="function"?r(n):r}function Qc(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=_=null,R=null,F=p;do{var H=F.lane;if((bi&H)===H)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var G={lane:H,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(I=R=G,_=c):R=R.next=G,Xe.lanes|=H,Fi|=H}F=F.next}while(F!==null&&F!==p);R===null?_=c:R.next=I,Pn(c,r.memoizedState)||(Ht=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,Fi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Yc(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Pn(p,r.memoizedState)||(Ht=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function sp(){}function op(n,r){var a=Xe,c=fn(),d=r(),p=!Pn(c.memoizedState,d);if(p&&(c.memoizedState=d,Ht=!0),c=c.queue,Xc(up.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,sa(9,lp.bind(null,a,c,d,r),void 0,null),yt===null)throw Error(t(349));(bi&30)!==0||ap(a,r,d)}return d}function ap(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function lp(n,r,a,c){r.value=a,r.getSnapshot=c,cp(r)&&hp(n)}function up(n,r,a){return a(function(){cp(r)&&hp(n)})}function cp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Pn(n,a)}catch{return!0}}function hp(n){var r=pr(n,1);r!==null&&Dn(r,n,1,-1)}function dp(n){var r=Wn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:n},r.queue=n,n=n.dispatch=zv.bind(null,Xe,n),[r.memoizedState,n]}function sa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function fp(){return fn().memoizedState}function zl(n,r,a,c){var d=Wn();Xe.flags|=n,d.memoizedState=sa(1|r,a,void 0,c===void 0?null:c)}function Bl(n,r,a,c){var d=fn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var _=ht.memoizedState;if(p=_.destroy,c!==null&&Hc(c,_.deps)){d.memoizedState=sa(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=sa(1|r,a,p,c)}function pp(n,r){return zl(8390656,8,n,r)}function Xc(n,r){return Bl(2048,8,n,r)}function mp(n,r){return Bl(4,2,n,r)}function gp(n,r){return Bl(4,4,n,r)}function yp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function _p(n,r,a){return a=a!=null?a.concat([n]):null,Bl(4,4,yp.bind(null,r,n),a)}function Jc(){}function vp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Hc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function wp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Hc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Ep(n,r,a){return(bi&21)===0?(n.baseState&&(n.baseState=!1,Ht=!0),n.memoizedState=a):(Pn(a,r)||(a=Ri(),Xe.lanes|=a,Fi|=a,n.baseState=!0),r)}function Uv(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=Wc.transition;Wc.transition={};try{n(!1),r()}finally{Pe=a,Wc.transition=c}}function Tp(){return fn().memoizedState}function jv(n,r,a){var c=Qr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Ip(n))Sp(r,a);else if(a=ep(n,r,a,c),a!==null){var d=zt();Dn(a,n,c,d),Ap(a,r,c)}}function zv(n,r,a){var c=Qr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ip(n))Sp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,I=p(_,a);if(d.hasEagerState=!0,d.eagerState=I,Pn(I,_)){var R=r.interleaved;R===null?(d.next=d,Uc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=ep(n,r,d,c),a!==null&&(d=zt(),Dn(a,n,c,d),Ap(a,r,c))}}function Ip(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function Sp(n,r){na=jl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Ap(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}var $l={readContext:dn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},Bv={readContext:dn,useCallback:function(n,r){return Wn().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:pp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,zl(4194308,4,yp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return zl(4194308,4,n,r)},useInsertionEffect:function(n,r){return zl(4,2,n,r)},useMemo:function(n,r){var a=Wn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Wn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=jv.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Wn();return n={current:n},r.memoizedState=n},useState:dp,useDebugValue:Jc,useDeferredValue:function(n){return Wn().memoizedState=n},useTransition:function(){var n=dp(!1),r=n[0];return n=Uv.bind(null,n[1]),Wn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=Wn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),yt===null)throw Error(t(349));(bi&30)!==0||ap(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,pp(up.bind(null,c,p,n),[n]),c.flags|=2048,sa(9,lp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Wn(),r=yt.identifierPrefix;if(Qe){var a=fr,c=dr;a=(c&~(1<<32-Ft(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ra++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Fv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},$v={readContext:dn,useCallback:vp,useContext:dn,useEffect:Xc,useImperativeHandle:_p,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:wp,useReducer:Qc,useRef:fp,useState:function(){return Qc(ia)},useDebugValue:Jc,useDeferredValue:function(n){var r=fn();return Ep(r,ht.memoizedState,n)},useTransition:function(){var n=Qc(ia)[0],r=fn().memoizedState;return[n,r]},useMutableSource:sp,useSyncExternalStore:op,useId:Tp,unstable_isNewReconciler:!1},qv={readContext:dn,useCallback:vp,useContext:dn,useEffect:Xc,useImperativeHandle:_p,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:wp,useReducer:Yc,useRef:fp,useState:function(){return Yc(ia)},useDebugValue:Jc,useDeferredValue:function(n){var r=fn();return ht===null?r.memoizedState=n:Ep(r,ht.memoizedState,n)},useTransition:function(){var n=Yc(ia)[0],r=fn().memoizedState;return[n,r]},useMutableSource:sp,useSyncExternalStore:op,useId:Tp,unstable_isNewReconciler:!1};function kn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Zc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ql={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=zt(),d=Qr(n),p=mr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Wr(n,p,d),r!==null&&(Dn(r,n,d,c),Ml(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=zt(),d=Qr(n),p=mr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Wr(n,p,d),r!==null&&(Dn(r,n,d,c),Ml(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=zt(),c=Qr(n),d=mr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Wr(n,d,c),r!==null&&(Dn(r,n,c,a),Ml(r,n,c))}};function Rp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Wo(a,c)||!Wo(d,p):!0}function Pp(n,r,a){var c=!1,d=Br,p=r.contextType;return typeof p=="object"&&p!==null?p=dn(p):(d=Wt(r)?Di:xt.current,c=r.contextTypes,p=(c=c!=null)?Ls(n,d):Br),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ql,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Cp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&ql.enqueueReplaceState(r,r.state,null)}function eh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},jc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=dn(p):(p=Wt(r)?Di:xt.current,d.context=Ls(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Zc(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&ql.enqueueReplaceState(d,d.state,null),bl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,r){try{var a="",c=r;do a+=Se(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function th(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function nh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Wv=typeof WeakMap=="function"?WeakMap:Map;function kp(n,r,a){a=mr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Xl||(Xl=!0,yh=c),nh(n,r)},a}function xp(n,r,a){a=mr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){nh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){nh(n,r),typeof c!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Np(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Wv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=sw.bind(null,n,r,a),r.then(n,n))}function Dp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Vp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=mr(-1,1),r.tag=2,Wr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Hv=Ee.ReactCurrentOwner,Ht=!1;function jt(n,r,a,c){r.child=n===null?Zf(r,null,a,c):Us(r,n.child,a,c)}function Op(n,r,a,c,d){a=a.render;var p=r.ref;return zs(r,d),c=Kc(n,r,a,c,p,d),a=Gc(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,gr(n,r,d)):(Qe&&a&&xc(r),r.flags|=1,jt(n,r,c,d),r.child)}function Lp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Sh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Mp(n,r,p,c,d)):(n=ru(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Wo,a(_,c)&&n.ref===r.ref)return gr(n,r,d)}return r.flags|=1,n=Xr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Mp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Wo(p,c)&&n.ref===r.ref)if(Ht=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ht=!0);else return r.lanes=n.lanes,gr(n,r,d)}return rh(n,r,a,c,d)}function bp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Ws,sn),sn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe(Ws,sn),sn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,qe(Ws,sn),sn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,qe(Ws,sn),sn|=c;return jt(n,r,d,a),r.child}function Fp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function rh(n,r,a,c,d){var p=Wt(a)?Di:xt.current;return p=Ls(r,p),zs(r,d),a=Kc(n,r,a,c,p,d),c=Gc(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,gr(n,r,d)):(Qe&&c&&xc(r),r.flags|=1,jt(n,r,a,d),r.child)}function Up(n,r,a,c,d){if(Wt(a)){var p=!0;Cl(r)}else p=!1;if(zs(r,d),r.stateNode===null)Hl(n,r),Pp(r,a,c),eh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,I=r.memoizedProps;_.props=I;var R=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=dn(F):(F=Wt(a)?Di:xt.current,F=Ls(r,F));var H=a.getDerivedStateFromProps,G=typeof H=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||R!==F)&&Cp(r,_,c,F),qr=!1;var q=r.memoizedState;_.state=q,bl(r,c,_,d),R=r.memoizedState,I!==c||q!==R||qt.current||qr?(typeof H=="function"&&(Zc(r,a,H,c),R=r.memoizedState),(I=qr||Rp(r,a,I,c,q,R,F))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=F,c=I):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,tp(n,r),I=r.memoizedProps,F=r.type===r.elementType?I:kn(r.type,I),_.props=F,G=r.pendingProps,q=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=dn(R):(R=Wt(a)?Di:xt.current,R=Ls(r,R));var ee=a.getDerivedStateFromProps;(H=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==G||q!==R)&&Cp(r,_,c,R),qr=!1,q=r.memoizedState,_.state=q,bl(r,c,_,d);var ie=r.memoizedState;I!==G||q!==ie||qt.current||qr?(typeof ee=="function"&&(Zc(r,a,ee,c),ie=r.memoizedState),(F=qr||Rp(r,a,F,c,q,ie,R)||!1)?(H||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ie,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ie,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),_.props=c,_.state=ie,_.context=R,c=F):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return ih(n,r,a,c,p,d)}function ih(n,r,a,c,d,p){Fp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&qf(r,a,!1),gr(n,r,p);c=r.stateNode,Hv.current=r;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Us(r,n.child,null,p),r.child=Us(r,null,I,p)):jt(n,r,I,p),r.memoizedState=c.state,d&&qf(r,a,!0),r.child}function jp(n){var r=n.stateNode;r.pendingContext?Bf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Bf(n,r.context,!1),zc(n,r.containerInfo)}function zp(n,r,a,c,d){return Fs(),Oc(d),r.flags|=256,jt(n,r,a,c),r.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function oh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bp(n,r,a){var c=r.pendingProps,d=Ye.current,p=!1,_=(r.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Ye,d&1),n===null)return Vc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=iu(_,c,0,null),n=Bi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=oh(a),r.memoizedState=sh,n):ah(r,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Kv(n,r,_,c,I,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,I=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Xr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=Xr(I,p):(p=Bi(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?oh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=sh,c}return p=n.child,n=p.sibling,c=Xr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function ah(n,r){return r=iu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Wl(n,r,a,c){return c!==null&&Oc(c),Us(r,n.child,null,a),n=ah(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Kv(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=th(Error(t(422))),Wl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=iu({mode:"visible",children:c.children},d,0,null),p=Bi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Us(r,n.child,null,_),r.child.memoizedState=oh(_),r.memoizedState=sh,p);if((r.mode&1)===0)return Wl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=th(p,c,void 0),Wl(n,r,_,c)}if(I=(_&n.childLanes)!==0,Ht||I){if(c=yt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,pr(n,d),Dn(c,n,d,-1))}return Ih(),c=th(Error(t(421))),Wl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=ow.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,rn=jr(d.nextSibling),nn=r,Qe=!0,Cn=null,n!==null&&(cn[hn++]=dr,cn[hn++]=fr,cn[hn++]=Vi,dr=n.id,fr=n.overflow,Vi=r),r=ah(r,c.children),r.flags|=4096,r)}function $p(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Fc(n.return,r,a)}function lh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function qp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(jt(n,r,c.children,a),c=Ye.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$p(n,a,r);else if(n.tag===19)$p(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Ye,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Fl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),lh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Fl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}lh(r,!0,a,null,p);break;case"together":lh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Hl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function gr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Fi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Xr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Xr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Gv(n,r,a){switch(r.tag){case 3:jp(r),Fs();break;case 5:ip(r);break;case 1:Wt(r.type)&&Cl(r);break;case 4:zc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(Ol,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ye,Ye.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Bp(n,r,a):(qe(Ye,Ye.current&1),n=gr(n,r,a),n!==null?n.sibling:null);qe(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return qp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,bp(n,r,a)}return gr(n,r,a)}var Wp,uh,Hp,Kp;Wp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},uh=function(){},Hp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Mi(qn.current);var p=null;switch(a){case"input":d=mi(n,d),c=mi(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=wo(n,d),c=wo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Al)}Ro(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var R=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&R!==I&&(R!=null||I!=null))if(F==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&I[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(F,a)),a=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,I=I?I.__html:void 0,R!=null&&I!==R&&(p=p||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&We("scroll",n),p||I===R||(p=[])):(p=p||[]).push(F,R))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},Kp=function(n,r,a,c){a!==c&&(r.flags|=4)};function oa(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Qv(n,r,a){var c=r.pendingProps;switch(Nc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(r),null;case 1:return Wt(r.type)&&Pl(),Dt(r),null;case 3:return c=r.stateNode,Bs(),He(qt),He(xt),qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Dl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Cn!==null&&(wh(Cn),Cn=null))),uh(n,r),Dt(r),null;case 5:Bc(r);var d=Mi(ta.current);if(a=r.type,n!==null&&r.stateNode!=null)Hp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Dt(r),null}if(n=Mi(qn.current),Dl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[$n]=r,c[Yo]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Ko.length;d++)We(Ko[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":rs(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":ss(c,p),We("invalid",c)}Ro(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var I=p[_];_==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Sl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Sl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":er(c),Ya(c,p,!0);break;case"textarea":er(c),Eo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Al)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[$n]=r,n[Yo]=c,Wp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Po(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ko.length;d++)We(Ko[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":rs(n,c),d=mi(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),We("invalid",n);break;case"textarea":ss(n,c),d=wo(n,c),We("invalid",n);break;default:d=c}Ro(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var R=I[p];p==="style"?So(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&To(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&kr(n,R):typeof R=="number"&&kr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&We("scroll",n):R!=null&&_e(n,p,R,_))}switch(a){case"input":er(n),Ya(n,c,!1);break;case"textarea":er(n),Eo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?nr(n,!!c.multiple,p,!1):c.defaultValue!=null&&nr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Al)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dt(r),null;case 6:if(n&&r.stateNode!=null)Kp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Mi(ta.current),Mi(qn.current),Dl(r)){if(c=r.stateNode,a=r.memoizedProps,c[$n]=r,(p=c.nodeValue!==a)&&(n=nn,n!==null))switch(n.tag){case 3:Sl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$n]=r,r.stateNode=c}return Dt(r),null;case 13:if(He(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&rn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Yf(),Fs(),r.flags|=98560,p=!1;else if(p=Dl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[$n]=r}else Fs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Dt(r),p=!1}else Cn!==null&&(wh(Cn),Cn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ye.current&1)!==0?dt===0&&(dt=3):Ih())),r.updateQueue!==null&&(r.flags|=4),Dt(r),null);case 4:return Bs(),uh(n,r),n===null&&Go(r.stateNode.containerInfo),Dt(r),null;case 10:return bc(r.type._context),Dt(r),null;case 17:return Wt(r.type)&&Pl(),Dt(r),null;case 19:if(He(Ye),p=r.memoizedState,p===null)return Dt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)oa(p,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Fl(n),_!==null){for(r.flags|=128,oa(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Ye,Ye.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>Hs&&(r.flags|=128,c=!0,oa(p,!1),r.lanes=4194304)}else{if(!c)if(n=Fl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),oa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Qe)return Dt(r),null}else 2*$e()-p.renderingStartTime>Hs&&a!==1073741824&&(r.flags|=128,c=!0,oa(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Ye.current,qe(Ye,c?a&1|2:a&1),r):(Dt(r),null);case 22:case 23:return Th(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(sn&1073741824)!==0&&(Dt(r),r.subtreeFlags&6&&(r.flags|=8192)):Dt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Yv(n,r){switch(Nc(r),r.tag){case 1:return Wt(r.type)&&Pl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Bs(),He(qt),He(xt),qc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Bc(r),null;case 13:if(He(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Fs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return He(Ye),null;case 4:return Bs(),null;case 10:return bc(r.type._context),null;case 22:case 23:return Th(),null;case 24:return null;default:return null}}var Kl=!1,Vt=!1,Xv=typeof WeakSet=="function"?WeakSet:Set,re=null;function qs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function ch(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var Gp=!1;function Jv(n,r){if(Tc=br,n=Rf(),pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,I=-1,R=-1,F=0,H=0,G=n,q=null;t:for(;;){for(var ee;G!==a||d!==0&&G.nodeType!==3||(I=_+d),G!==p||c!==0&&G.nodeType!==3||(R=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(ee=G.firstChild)!==null;)q=G,G=ee;for(;;){if(G===n)break t;if(q===a&&++F===d&&(I=_),q===p&&++H===c&&(R=_),(ee=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=ee}a=I===-1||R===-1?null:{start:I,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ic={focusedElem:n,selectionRange:a},br=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,nt=ie.memoizedState,M=r.stateNode,C=M.getSnapshotBeforeUpdate(r.elementType===r.type?se:kn(r.type,se),nt);M.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){Ze(r,r.return,Q)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=Gp,Gp=!1,ie}function aa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ch(r,a,p)}d=d.next}while(d!==c)}}function Gl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function hh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Qp(n){var r=n.alternate;r!==null&&(n.alternate=null,Qp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[$n],delete r[Yo],delete r[Pc],delete r[Ov],delete r[Lv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Yp(n){return n.tag===5||n.tag===3||n.tag===4}function Xp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Yp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Al));else if(c!==4&&(n=n.child,n!==null))for(dh(n,r,a),n=n.sibling;n!==null;)dh(n,r,a),n=n.sibling}function fh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(fh(n,r,a),n=n.sibling;n!==null;)fh(n,r,a),n=n.sibling}var Tt=null,xn=!1;function Hr(n,r,a){for(a=a.child;a!==null;)Jp(n,r,a),a=a.sibling}function Jp(n,r,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Si,a)}catch{}switch(a.tag){case 5:Vt||qs(a,r);case 6:var c=Tt,d=xn;Tt=null,Hr(n,r,a),Tt=c,xn=d,Tt!==null&&(xn?(n=Tt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Tt.removeChild(a.stateNode));break;case 18:Tt!==null&&(xn?(n=Tt,a=a.stateNode,n.nodeType===8?Rc(n.parentNode,a):n.nodeType===1&&Rc(n,a),An(n)):Rc(Tt,a.stateNode));break;case 4:c=Tt,d=xn,Tt=a.stateNode.containerInfo,xn=!0,Hr(n,r,a),Tt=c,xn=d;break;case 0:case 11:case 14:case 15:if(!Vt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&ch(a,r,_),d=d.next}while(d!==c)}Hr(n,r,a);break;case 1:if(!Vt&&(qs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Ze(a,r,I)}Hr(n,r,a);break;case 21:Hr(n,r,a);break;case 22:a.mode&1?(Vt=(c=Vt)||a.memoizedState!==null,Hr(n,r,a),Vt=c):Hr(n,r,a);break;default:Hr(n,r,a)}}function Zp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Xv),r.forEach(function(c){var d=aw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Nn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,I=_;e:for(;I!==null;){switch(I.tag){case 5:Tt=I.stateNode,xn=!1;break e;case 3:Tt=I.stateNode.containerInfo,xn=!0;break e;case 4:Tt=I.stateNode.containerInfo,xn=!0;break e}I=I.return}if(Tt===null)throw Error(t(160));Jp(p,_,d),Tt=null,xn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){Ze(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)em(r,n),r=r.sibling}function em(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(r,n),Hn(n),c&4){try{aa(3,n,n.return),Gl(3,n)}catch(se){Ze(n,n.return,se)}try{aa(5,n,n.return)}catch(se){Ze(n,n.return,se)}}break;case 1:Nn(r,n),Hn(n),c&512&&a!==null&&qs(a,a.return);break;case 5:if(Nn(r,n),Hn(n),c&512&&a!==null&&qs(a,a.return),n.flags&32){var d=n.stateNode;try{kr(d,"")}catch(se){Ze(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,I=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&_o(d,p),Po(I,_);var F=Po(I,p);for(_=0;_<R.length;_+=2){var H=R[_],G=R[_+1];H==="style"?So(d,G):H==="dangerouslySetInnerHTML"?To(d,G):H==="children"?kr(d,G):_e(d,H,G,F)}switch(I){case"input":vo(d,p);break;case"textarea":os(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?nr(d,!!p.multiple,ee,!1):q!==!!p.multiple&&(p.defaultValue!=null?nr(d,!!p.multiple,p.defaultValue,!0):nr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Yo]=p}catch(se){Ze(n,n.return,se)}}break;case 6:if(Nn(r,n),Hn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(se){Ze(n,n.return,se)}}break;case 3:if(Nn(r,n),Hn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{An(r.containerInfo)}catch(se){Ze(n,n.return,se)}break;case 4:Nn(r,n),Hn(n);break;case 13:Nn(r,n),Hn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(gh=$e())),c&4&&Zp(n);break;case 22:if(H=a!==null&&a.memoizedState!==null,n.mode&1?(Vt=(F=Vt)||H,Nn(r,n),Vt=F):Nn(r,n),Hn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!H&&(n.mode&1)!==0)for(re=n,H=n.child;H!==null;){for(G=re=H;re!==null;){switch(q=re,ee=q.child,q.tag){case 0:case 11:case 14:case 15:aa(4,q,q.return);break;case 1:qs(q,q.return);var ie=q.stateNode;if(typeof ie.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(se){Ze(c,a,se)}}break;case 5:qs(q,q.return);break;case 22:if(q.memoizedState!==null){rm(G);continue}}ee!==null?(ee.return=q,re=ee):rm(G)}H=H.sibling}e:for(H=null,G=n;;){if(G.tag===5){if(H===null){H=G;try{d=G.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=G.stateNode,R=G.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,I.style.display=Io("display",_))}catch(se){Ze(n,n.return,se)}}}else if(G.tag===6){if(H===null)try{G.stateNode.nodeValue=F?"":G.memoizedProps}catch(se){Ze(n,n.return,se)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;H===G&&(H=null),G=G.return}H===G&&(H=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Nn(r,n),Hn(n),c&4&&Zp(n);break;case 21:break;default:Nn(r,n),Hn(n)}}function Hn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Yp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(kr(d,""),c.flags&=-33);var p=Xp(n);fh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=Xp(n);dh(n,I,_);break;default:throw Error(t(161))}}catch(R){Ze(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Zv(n,r,a){re=n,tm(n)}function tm(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Kl;if(!_){var I=d.alternate,R=I!==null&&I.memoizedState!==null||Vt;I=Kl;var F=Vt;if(Kl=_,(Vt=R)&&!F)for(re=d;re!==null;)_=re,R=_.child,_.tag===22&&_.memoizedState!==null?im(d):R!==null?(R.return=_,re=R):im(d);for(;p!==null;)re=p,tm(p),p=p.sibling;re=d,Kl=I,Vt=F}nm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,re=p):nm(n)}}function nm(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Vt||Gl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Vt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:kn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&rp(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}rp(r,_,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var H=F.memoizedState;if(H!==null){var G=H.dehydrated;G!==null&&An(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vt||r.flags&512&&hh(r)}catch(q){Ze(r,r.return,q)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function rm(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function im(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Gl(4,r)}catch(R){Ze(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){Ze(r,d,R)}}var p=r.return;try{hh(r)}catch(R){Ze(r,p,R)}break;case 5:var _=r.return;try{hh(r)}catch(R){Ze(r,_,R)}}}catch(R){Ze(r,r.return,R)}if(r===n){re=null;break}var I=r.sibling;if(I!==null){I.return=r.return,re=I;break}re=r.return}}var ew=Math.ceil,Ql=Ee.ReactCurrentDispatcher,ph=Ee.ReactCurrentOwner,pn=Ee.ReactCurrentBatchConfig,De=0,yt=null,st=null,It=0,sn=0,Ws=zr(0),dt=0,la=null,Fi=0,Yl=0,mh=0,ua=null,Kt=null,gh=0,Hs=1/0,yr=null,Xl=!1,yh=null,Kr=null,Jl=!1,Gr=null,Zl=0,ca=0,_h=null,eu=-1,tu=0;function zt(){return(De&6)!==0?$e():eu!==-1?eu:eu=$e()}function Qr(n){return(n.mode&1)===0?1:(De&2)!==0&&It!==0?It&-It:bv.transition!==null?(tu===0&&(tu=Ri()),tu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Fo(n.type)),n)}function Dn(n,r,a,c){if(50<ca)throw ca=0,_h=null,Error(t(185));Vr(n,a,c),((De&2)===0||n!==yt)&&(n===yt&&((De&2)===0&&(Yl|=a),dt===4&&Yr(n,It)),Gt(n,c),a===1&&De===0&&(r.mode&1)===0&&(Hs=$e()+500,kl&&$r()))}function Gt(n,r){var a=n.callbackNode;sr(n,r);var c=Ai(n,n===yt?It:0);if(c===0)a!==null&&Vo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Vo(a),r===1)n.tag===0?Mv(om.bind(null,n)):Wf(om.bind(null,n)),Dv(function(){(De&6)===0&&$r()}),a=null;else{switch(Lr(c)){case 1:a=Ii;break;case 4:a=xr;break;case 16:a=an;break;case 536870912:a=tl;break;default:a=an}a=pm(a,sm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function sm(n,r){if(eu=-1,tu=0,(De&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ks()&&n.callbackNode!==a)return null;var c=Ai(n,n===yt?It:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=nu(n,c);else{r=c;var d=De;De|=2;var p=lm();(yt!==n||It!==r)&&(yr=null,Hs=$e()+500,ji(n,r));do try{rw();break}catch(I){am(n,I)}while(!0);Mc(),Ql.current=p,De=d,st!==null?r=0:(yt=null,It=0,r=dt)}if(r!==0){if(r===2&&(d=Zt(n),d!==0&&(c=d,r=vh(n,d))),r===1)throw a=la,ji(n,0),Yr(n,c),Gt(n,$e()),a;if(r===6)Yr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!tw(d)&&(r=nu(n,c),r===2&&(p=Zt(n),p!==0&&(c=p,r=vh(n,p))),r===1))throw a=la,ji(n,0),Yr(n,c),Gt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:zi(n,Kt,yr);break;case 3:if(Yr(n,c),(c&130023424)===c&&(r=gh+500-$e(),10<r)){if(Ai(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){zt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ac(zi.bind(null,n,Kt,yr),r);break}zi(n,Kt,yr);break;case 4:if(Yr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ft(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ew(c/1960))-c,10<c){n.timeoutHandle=Ac(zi.bind(null,n,Kt,yr),c);break}zi(n,Kt,yr);break;case 5:zi(n,Kt,yr);break;default:throw Error(t(329))}}}return Gt(n,$e()),n.callbackNode===a?sm.bind(null,n):null}function vh(n,r){var a=ua;return n.current.memoizedState.isDehydrated&&(ji(n,r).flags|=256),n=nu(n,r),n!==2&&(r=Kt,Kt=a,r!==null&&wh(r)),n}function wh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function tw(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Pn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Yr(n,r){for(r&=~mh,r&=~Yl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ft(r),c=1<<a;n[a]=-1,r&=~c}}function om(n){if((De&6)!==0)throw Error(t(327));Ks();var r=Ai(n,0);if((r&1)===0)return Gt(n,$e()),null;var a=nu(n,r);if(n.tag!==0&&a===2){var c=Zt(n);c!==0&&(r=c,a=vh(n,c))}if(a===1)throw a=la,ji(n,0),Yr(n,r),Gt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,zi(n,Kt,yr),Gt(n,$e()),null}function Eh(n,r){var a=De;De|=1;try{return n(r)}finally{De=a,De===0&&(Hs=$e()+500,kl&&$r())}}function Ui(n){Gr!==null&&Gr.tag===0&&(De&6)===0&&Ks();var r=De;De|=1;var a=pn.transition,c=Pe;try{if(pn.transition=null,Pe=1,n)return n()}finally{Pe=c,pn.transition=a,De=r,(De&6)===0&&$r()}}function Th(){sn=Ws.current,He(Ws)}function ji(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Nv(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Nc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Pl();break;case 3:Bs(),He(qt),He(xt),qc();break;case 5:Bc(c);break;case 4:Bs();break;case 13:He(Ye);break;case 19:He(Ye);break;case 10:bc(c.type._context);break;case 22:case 23:Th()}a=a.return}if(yt=n,st=n=Xr(n.current,null),It=sn=r,dt=0,la=null,mh=Yl=Fi=0,Kt=ua=null,Li!==null){for(r=0;r<Li.length;r++)if(a=Li[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Li=null}return n}function am(n,r){do{var a=st;try{if(Mc(),Ul.current=$l,jl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}jl=!1}if(bi=0,gt=ht=Xe=null,na=!1,ra=0,ph.current=null,a===null||a.return===null){dt=1,la=r,st=null;break}e:{var p=n,_=a.return,I=a,R=r;if(r=It,I.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,H=I,G=H.tag;if((H.mode&1)===0&&(G===0||G===11||G===15)){var q=H.alternate;q?(H.updateQueue=q.updateQueue,H.memoizedState=q.memoizedState,H.lanes=q.lanes):(H.updateQueue=null,H.memoizedState=null)}var ee=Dp(_);if(ee!==null){ee.flags&=-257,Vp(ee,_,I,p,r),ee.mode&1&&Np(p,F,r),r=ee,R=F;var ie=r.updateQueue;if(ie===null){var se=new Set;se.add(R),r.updateQueue=se}else ie.add(R);break e}else{if((r&1)===0){Np(p,F,r),Ih();break e}R=Error(t(426))}}else if(Qe&&I.mode&1){var nt=Dp(_);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),Vp(nt,_,I,p,r),Oc($s(R,I));break e}}p=R=$s(R,I),dt!==4&&(dt=2),ua===null?ua=[p]:ua.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=kp(p,R,r);np(p,M);break e;case 1:I=R;var C=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Kr===null||!Kr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var Q=xp(p,I,r);np(p,Q);break e}}p=p.return}while(p!==null)}cm(a)}catch(ae){r=ae,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function lm(){var n=Ql.current;return Ql.current=$l,n===null?$l:n}function Ih(){(dt===0||dt===3||dt===2)&&(dt=4),yt===null||(Fi&268435455)===0&&(Yl&268435455)===0||Yr(yt,It)}function nu(n,r){var a=De;De|=2;var c=lm();(yt!==n||It!==r)&&(yr=null,ji(n,r));do try{nw();break}catch(d){am(n,d)}while(!0);if(Mc(),De=a,Ql.current=c,st!==null)throw Error(t(261));return yt=null,It=0,dt}function nw(){for(;st!==null;)um(st)}function rw(){for(;st!==null&&!Za();)um(st)}function um(n){var r=fm(n.alternate,n,sn);n.memoizedProps=n.pendingProps,r===null?cm(n):st=r,ph.current=null}function cm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=Qv(a,r,sn),a!==null){st=a;return}}else{if(a=Yv(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function zi(n,r,a){var c=Pe,d=pn.transition;try{pn.transition=null,Pe=1,iw(n,r,a,c)}finally{pn.transition=d,Pe=c}return null}function iw(n,r,a,c){do Ks();while(Gr!==null);if((De&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(je(n,p),n===yt&&(st=yt=null,It=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Jl||(Jl=!0,pm(an,function(){return Ks(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=pn.transition,pn.transition=null;var _=Pe;Pe=1;var I=De;De|=4,ph.current=null,Jv(n,a),em(a,n),Sv(Ic),br=!!Tc,Ic=Tc=null,n.current=a,Zv(a),oc(),De=I,Pe=_,pn.transition=p}else n.current=a;if(Jl&&(Jl=!1,Gr=n,Zl=d),p=n.pendingLanes,p===0&&(Kr=null),nl(a.stateNode),Gt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Xl)throw Xl=!1,n=yh,yh=null,n;return(Zl&1)!==0&&n.tag!==0&&Ks(),p=n.pendingLanes,(p&1)!==0?n===_h?ca++:(ca=0,_h=n):ca=0,$r(),null}function Ks(){if(Gr!==null){var n=Lr(Zl),r=pn.transition,a=Pe;try{if(pn.transition=null,Pe=16>n?16:n,Gr===null)var c=!1;else{if(n=Gr,Gr=null,Zl=0,(De&6)!==0)throw Error(t(331));var d=De;for(De|=4,re=n.current;re!==null;){var p=re,_=p.child;if((re.flags&16)!==0){var I=p.deletions;if(I!==null){for(var R=0;R<I.length;R++){var F=I[R];for(re=F;re!==null;){var H=re;switch(H.tag){case 0:case 11:case 15:aa(8,H,p)}var G=H.child;if(G!==null)G.return=H,re=G;else for(;re!==null;){H=re;var q=H.sibling,ee=H.return;if(Qp(H),H===F){re=null;break}if(q!==null){q.return=ee,re=q;break}re=ee}}}var ie=p.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var nt=se.sibling;se.sibling=null,se=nt}while(se!==null)}}re=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,re=_;else e:for(;re!==null;){if(p=re,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:aa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,re=M;break e}re=p.return}}var C=n.current;for(re=C;re!==null;){_=re;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,re=b;else e:for(_=C;re!==null;){if(I=re,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Gl(9,I)}}catch(ae){Ze(I,I.return,ae)}if(I===_){re=null;break e}var Q=I.sibling;if(Q!==null){Q.return=I.return,re=Q;break e}re=I.return}}if(De=d,$r(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Si,n)}catch{}c=!0}return c}finally{Pe=a,pn.transition=r}}return!1}function hm(n,r,a){r=$s(a,r),r=kp(n,r,1),n=Wr(n,r,1),r=zt(),n!==null&&(Vr(n,1,r),Gt(n,r))}function Ze(n,r,a){if(n.tag===3)hm(n,n,a);else for(;r!==null;){if(r.tag===3){hm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Kr===null||!Kr.has(c))){n=$s(a,n),n=xp(r,n,1),r=Wr(r,n,1),n=zt(),r!==null&&(Vr(r,1,n),Gt(r,n));break}}r=r.return}}function sw(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=zt(),n.pingedLanes|=n.suspendedLanes&a,yt===n&&(It&a)===a&&(dt===4||dt===3&&(It&130023424)===It&&500>$e()-gh?ji(n,0):mh|=a),Gt(n,r)}function dm(n,r){r===0&&((n.mode&1)===0?r=1:(r=gs,gs<<=1,(gs&130023424)===0&&(gs=4194304)));var a=zt();n=pr(n,r),n!==null&&(Vr(n,r,a),Gt(n,a))}function ow(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),dm(n,a)}function aw(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),dm(n,a)}var fm;fm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Ht=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Ht=!1,Gv(n,r,a);Ht=(n.flags&131072)!==0}else Ht=!1,Qe&&(r.flags&1048576)!==0&&Hf(r,Nl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Hl(n,r),n=r.pendingProps;var d=Ls(r,xt.current);zs(r,a),d=Kc(null,r,c,n,d,a);var p=Gc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(p=!0,Cl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,jc(r),d.updater=ql,r.stateNode=d,d._reactInternals=r,eh(r,c,n,a),r=ih(null,r,c,!0,p,a)):(r.tag=0,Qe&&p&&xc(r),jt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Hl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=uw(c),n=kn(c,n),d){case 0:r=rh(null,r,c,n,a);break e;case 1:r=Up(null,r,c,n,a);break e;case 11:r=Op(null,r,c,n,a);break e;case 14:r=Lp(null,r,c,kn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),rh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),Up(n,r,c,d,a);case 3:e:{if(jp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,tp(n,r),bl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=$s(Error(t(423)),r),r=zp(n,r,c,a,d);break e}else if(c!==d){d=$s(Error(t(424)),r),r=zp(n,r,c,a,d);break e}else for(rn=jr(r.stateNode.containerInfo.firstChild),nn=r,Qe=!0,Cn=null,a=Zf(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),c===d){r=gr(n,r,a);break e}jt(n,r,c,a)}r=r.child}return r;case 5:return ip(r),n===null&&Vc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Sc(c,d)?_=null:p!==null&&Sc(c,p)&&(r.flags|=32),Fp(n,r),jt(n,r,_,a),r.child;case 6:return n===null&&Vc(r),null;case 13:return Bp(n,r,a);case 4:return zc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Us(r,null,c,a):jt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),Op(n,r,c,d,a);case 7:return jt(n,r,r.pendingProps,a),r.child;case 8:return jt(n,r,r.pendingProps.children,a),r.child;case 12:return jt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,qe(Ol,c._currentValue),c._currentValue=_,p!==null)if(Pn(p.value,_)){if(p.children===d.children&&!qt.current){r=gr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){_=p.child;for(var R=I.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=mr(-1,a&-a),R.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var H=F.pending;H===null?R.next=R:(R.next=H.next,H.next=R),F.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),Fc(p.return,a,r),I.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),Fc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}jt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,zs(r,a),d=dn(d),c=c(d),r.flags|=1,jt(n,r,c,a),r.child;case 14:return c=r.type,d=kn(c,r.pendingProps),d=kn(c.type,d),Lp(n,r,c,d,a);case 15:return Mp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),Hl(n,r),r.tag=1,Wt(c)?(n=!0,Cl(r)):n=!1,zs(r,a),Pp(r,c,d),eh(r,c,d,a),ih(null,r,c,!0,n,a);case 19:return qp(n,r,a);case 22:return bp(n,r,a)}throw Error(t(156,r.tag))};function pm(n,r){return ps(n,r)}function lw(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,r,a,c){return new lw(n,r,a,c)}function Sh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function uw(n){if(typeof n=="function")return Sh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===Ct)return 14}return 2}function Xr(n,r){var a=n.alternate;return a===null?(a=mn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ru(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Sh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case k:return Bi(a.children,d,p,r);case E:_=8,d|=8;break;case S:return n=mn(12,a,r,d|2),n.elementType=S,n.lanes=p,n;case A:return n=mn(13,a,r,d),n.elementType=A,n.lanes=p,n;case et:return n=mn(19,a,r,d),n.elementType=et,n.lanes=p,n;case Ue:return iu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:_=10;break e;case N:_=9;break e;case V:_=11;break e;case Ct:_=14;break e;case kt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=mn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Bi(n,r,a,c){return n=mn(7,n,c,r),n.lanes=a,n}function iu(n,r,a,c){return n=mn(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Ah(n,r,a){return n=mn(6,n,null,r),n.lanes=a,n}function Rh(n,r,a){return r=mn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function cw(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dr(0),this.expirationTimes=Dr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ph(n,r,a,c,d,p,_,I,R){return n=new cw(n,r,a,I,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=mn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(p),n}function hw(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function mm(n){if(!n)return Br;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return $f(n,a,r)}return r}function gm(n,r,a,c,d,p,_,I,R){return n=Ph(a,c,!0,n,d,p,_,I,R),n.context=mm(null),a=n.current,c=zt(),d=Qr(a),p=mr(c,d),p.callback=r??null,Wr(a,p,d),n.current.lanes=d,Vr(n,d,c),Gt(n,c),n}function su(n,r,a,c){var d=r.current,p=zt(),_=Qr(d);return a=mm(a),r.context===null?r.context=a:r.pendingContext=a,r=mr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Wr(d,r,_),n!==null&&(Dn(n,d,_,p),Ml(n,d,_)),_}function ou(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ym(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Ch(n,r){ym(n,r),(n=n.alternate)&&ym(n,r)}function dw(){return null}var _m=typeof reportError=="function"?reportError:function(n){console.error(n)};function kh(n){this._internalRoot=n}au.prototype.render=kh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));su(n,r,null,null)},au.prototype.unmount=kh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ui(function(){su(null,n,null,null)}),r[cr]=null}};function au(n){this._internalRoot=n}au.prototype.unstable_scheduleHydration=function(n){if(n){var r=al();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Un.length&&r!==0&&r<Un[a].priority;a++);Un.splice(a,0,n),a===0&&cl(n)}};function xh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vm(){}function fw(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=ou(_);p.call(F)}}var _=gm(r,c,n,0,null,!1,!1,"",vm);return n._reactRootContainer=_,n[cr]=_.current,Go(n.nodeType===8?n.parentNode:n),Ui(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=ou(R);I.call(F)}}var R=Ph(n,0,!1,null,null,!1,!1,"",vm);return n._reactRootContainer=R,n[cr]=R.current,Go(n.nodeType===8?n.parentNode:n),Ui(function(){su(r,R,a,c)}),R}function uu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var I=d;d=function(){var R=ou(_);I.call(R)}}su(r,_,n,d)}else _=fw(a,r,n,d,c);return ou(_)}sl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Nr(r.pendingLanes);a!==0&&(Or(r,a|1),Gt(r,$e()),(De&6)===0&&(Hs=$e()+500,$r()))}break;case 13:Ui(function(){var c=pr(n,1);if(c!==null){var d=zt();Dn(c,n,1,d)}}),Ch(n,1)}},ys=function(n){if(n.tag===13){var r=pr(n,134217728);if(r!==null){var a=zt();Dn(r,n,134217728,a)}Ch(n,134217728)}},ol=function(n){if(n.tag===13){var r=Qr(n),a=pr(n,r);if(a!==null){var c=zt();Dn(a,n,r,c)}Ch(n,r)}},al=function(){return Pe},ll=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},ls=function(n,r,a){switch(r){case"input":if(vo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Rl(c);if(!d)throw Error(t(90));ns(c),vo(c,d)}}}break;case"textarea":os(n,a);break;case"select":r=a.value,r!=null&&nr(n,!!a.multiple,r,!1)}},vi=Eh,ko=Ui;var pw={usingClientEntryPoint:!1,Events:[Xo,Vs,Rl,bn,Co,Eh]},ha={findFiberByHostInstance:Ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mw={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Do(n),n===null?null:n.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||dw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Si=cu.inject(mw),Jt=cu}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pw,Qt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(r))throw Error(t(200));return hw(n,r,null,a)},Qt.createRoot=function(n,r){if(!xh(n))throw Error(t(299));var a=!1,c="",d=_m;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Ph(n,1,!1,null,null,a,!1,c,d),n[cr]=r.current,Go(n.nodeType===8?n.parentNode:n),new kh(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Do(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return Ui(n)},Qt.hydrate=function(n,r,a){if(!lu(r))throw Error(t(200));return uu(null,n,r,!0,a)},Qt.hydrateRoot=function(n,r,a){if(!xh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=_m;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=gm(r,null,n,1,a??null,d,!1,p,_),n[cr]=r.current,Go(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new au(r)},Qt.render=function(n,r,a){if(!lu(r))throw Error(t(200));return uu(null,n,r,!1,a)},Qt.unmountComponentAtNode=function(n){if(!lu(n))throw Error(t(40));return n._reactRootContainer?(Ui(function(){uu(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},Qt.unstable_batchedUpdates=Eh,Qt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!lu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return uu(n,r,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var Pm;function Sw(){if(Pm)return Vh.exports;Pm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Vh.exports=Iw(),Vh.exports}var Cm;function Aw(){if(Cm)return hu;Cm=1;var i=Sw();return hu.createRoot=i.createRoot,hu.hydrateRoot=i.hydrateRoot,hu}var Rw=Aw();const Pw=Kg(Rw);var km={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Cw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,T=u>>2,x=(u&3)<<4|m>>4;let L=(m&15)<<2|v>>6,z=v&63;g||(z=64,h||(L=64)),s.push(t[T],t[x],t[L],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Gg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Cw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const x=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||x==null)throw new kw;const L=u<<2|m>>4;if(s.push(L),v!==64){const z=m<<4&240|v>>2;if(s.push(z),x!==64){const Y=v<<6&192|x;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class kw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xw=function(i){const e=Gg(i);return Qg.encodeByteArray(e,!0)},Pu=function(i){return xw(i).replace(/\./g,"")},Yg=function(i){try{return Qg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=()=>Nw().__FIREBASE_DEFAULTS__,Vw=()=>{if(typeof process>"u"||typeof km>"u")return;const i=km.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Ow=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Yg(i[1]);return e&&JSON.parse(e)},Bu=()=>{try{return Dw()||Vw()||Ow()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Xg=i=>{var e,t;return(t=(e=Bu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Lw=i=>{const e=Xg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Jg=()=>{var i;return(i=Bu())===null||i===void 0?void 0:i.config},Zg=i=>{var e;return(e=Bu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Pu(JSON.stringify(t)),Pu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function Uw(){var i;const e=(i=Bu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Bw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $w(){const i=bt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function qw(){return!Uw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ww(){try{return typeof indexedDB=="object"}catch{return!1}}function Hw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="FirebaseError";class Pr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Kw,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ba.prototype.create)}}class ba{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Gw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Pr(o,m,s)}}function Gw(i,e){return i.replace(Qw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Qw=/\{\$([^}]+)}/g;function Yw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Cu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(xm(u)&&xm(h)){if(!Cu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function xm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ma(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function ga(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function Xw(i,e){const t=new Jw(i,e);return t.subscribe.bind(t)}class Jw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Zw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Mh),o.error===void 0&&(o.error=Mh),o.complete===void 0&&(o.complete=Mh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Mh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(i){return i&&i._delegate?i._delegate:i}class Hi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Mw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nE(e))try{this.getOrInitializeService({instanceIdentifier:$i})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=$i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$i){return this.instances.has(e)}getOptions(e=$i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$i){return this.component?this.component.multipleInstances?e:$i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tE(i){return i===$i?void 0:i}function nE(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new eE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const iE={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},sE=Ce.INFO,oE={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},aE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=oE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wd{constructor(e){this.name=e,this._logLevel=sE,this._logHandler=aE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const lE=(i,e)=>e.some(t=>i instanceof t);let Nm,Dm;function uE(){return Nm||(Nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cE(){return Dm||(Dm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ey=new WeakMap,Gh=new WeakMap,ty=new WeakMap,bh=new WeakMap,Ed=new WeakMap;function hE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(si(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&ey.set(t,i)}).catch(()=>{}),Ed.set(e,i),e}function dE(i){if(Gh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Gh.set(i,e)}let Qh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Gh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ty.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return si(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function fE(i){Qh=i(Qh)}function pE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Fh(this),e,...t);return ty.set(s,e.sort?e.sort():[e]),si(s)}:cE().includes(i)?function(...e){return i.apply(Fh(this),e),si(ey.get(this))}:function(...e){return si(i.apply(Fh(this),e))}}function mE(i){return typeof i=="function"?pE(i):(i instanceof IDBTransaction&&dE(i),lE(i,uE())?new Proxy(i,Qh):i)}function si(i){if(i instanceof IDBRequest)return hE(i);if(bh.has(i))return bh.get(i);const e=mE(i);return e!==i&&(bh.set(i,e),Ed.set(e,i)),e}const Fh=i=>Ed.get(i);function gE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=si(h);return s&&h.addEventListener("upgradeneeded",g=>{s(si(h.result),g.oldVersion,g.newVersion,si(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const yE=["get","getKey","getAll","getAllKeys","count"],_E=["put","add","delete","clear"],Uh=new Map;function Vm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Uh.get(e))return Uh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=_E.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||yE.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return Uh.set(e,u),u}fE(i=>({...i,get:(e,t,s)=>Vm(e,t)||i.get(e,t,s),has:(e,t)=>!!Vm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function wE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yh="@firebase/app",Om="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new wd("@firebase/app"),EE="@firebase/app-compat",TE="@firebase/analytics-compat",IE="@firebase/analytics",SE="@firebase/app-check-compat",AE="@firebase/app-check",RE="@firebase/auth",PE="@firebase/auth-compat",CE="@firebase/database",kE="@firebase/data-connect",xE="@firebase/database-compat",NE="@firebase/functions",DE="@firebase/functions-compat",VE="@firebase/installations",OE="@firebase/installations-compat",LE="@firebase/messaging",ME="@firebase/messaging-compat",bE="@firebase/performance",FE="@firebase/performance-compat",UE="@firebase/remote-config",jE="@firebase/remote-config-compat",zE="@firebase/storage",BE="@firebase/storage-compat",$E="@firebase/firestore",qE="@firebase/vertexai-preview",WE="@firebase/firestore-compat",HE="firebase",KE="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="[DEFAULT]",GE={[Yh]:"fire-core",[EE]:"fire-core-compat",[IE]:"fire-analytics",[TE]:"fire-analytics-compat",[AE]:"fire-app-check",[SE]:"fire-app-check-compat",[RE]:"fire-auth",[PE]:"fire-auth-compat",[CE]:"fire-rtdb",[kE]:"fire-data-connect",[xE]:"fire-rtdb-compat",[NE]:"fire-fn",[DE]:"fire-fn-compat",[VE]:"fire-iid",[OE]:"fire-iid-compat",[LE]:"fire-fcm",[ME]:"fire-fcm-compat",[bE]:"fire-perf",[FE]:"fire-perf-compat",[UE]:"fire-rc",[jE]:"fire-rc-compat",[zE]:"fire-gcs",[BE]:"fire-gcs-compat",[$E]:"fire-fst",[WE]:"fire-fst-compat",[qE]:"fire-vertex","fire-js":"fire-js",[HE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Map,QE=new Map,Jh=new Map;function Lm(i,e){try{i.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function no(i){const e=i.name;if(Jh.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Jh.set(e,i);for(const t of ku.values())Lm(t,i);for(const t of QE.values())Lm(t,i);return!0}function Td(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Kn(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oi=new ba("app","Firebase",YE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=KE;function ny(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw oi.create("bad-app-name",{appName:String(o)});if(t||(t=Jg()),!t)throw oi.create("no-options");const u=ku.get(o);if(u){if(Cu(t,u.options)&&Cu(s,u.config))return u;throw oi.create("duplicate-app",{appName:o})}const h=new rE(o);for(const g of Jh.values())h.addComponent(g);const m=new XE(t,s,h);return ku.set(o,m),m}function ry(i=Xh){const e=ku.get(i);if(!e&&i===Xh&&Jg())return ny();if(!e)throw oi.create("no-app",{appName:i});return e}function ai(i,e,t){var s;let o=(s=GE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(m.join(" "));return}no(new Hi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="firebase-heartbeat-database",ZE=1,Ra="firebase-heartbeat-store";let jh=null;function iy(){return jh||(jh=gE(JE,ZE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ra)}catch(t){console.warn(t)}}}}).catch(i=>{throw oi.create("idb-open",{originalErrorMessage:i.message})})),jh}async function e0(i){try{const t=(await iy()).transaction(Ra),s=await t.objectStore(Ra).get(sy(i));return await t.done,s}catch(e){if(e instanceof Pr)Ir.warn(e.message);else{const t=oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(t.message)}}}async function Mm(i,e){try{const s=(await iy()).transaction(Ra,"readwrite");await s.objectStore(Ra).put(e,sy(i)),await s.done}catch(t){if(t instanceof Pr)Ir.warn(t.message);else{const s=oi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ir.warn(s.message)}}}function sy(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=1024,n0=720*60*60*1e3;class r0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new s0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=bm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=n0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bm(),{heartbeatsToSend:s,unsentEntries:o}=i0(this._heartbeatsCache.heartbeats),u=Pu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ir.warn(t),""}}}function bm(){return new Date().toISOString().substring(0,10)}function i0(i,e=t0){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Fm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Fm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class s0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ww()?Hw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await e0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Mm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Mm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Fm(i){return Pu(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(i){no(new Hi("platform-logger",e=>new vE(e),"PRIVATE")),no(new Hi("heartbeat",e=>new r0(e),"PRIVATE")),ai(Yh,Om,i),ai(Yh,Om,"esm2017"),ai("fire-js","")}o0("");var a0="firebase",l0="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ai(a0,l0,"app");var Um=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wi,oy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,E){function S(){}S.prototype=E.prototype,k.D=E.prototype,k.prototype=new S,k.prototype.constructor=k,k.C=function(P,N,V){for(var A=Array(arguments.length-2),et=2;et<arguments.length;et++)A[et-2]=arguments[et];return E.prototype[N].apply(P,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,E,S){S||(S=0);var P=Array(16);if(typeof E=="string")for(var N=0;16>N;++N)P[N]=E.charCodeAt(S++)|E.charCodeAt(S++)<<8|E.charCodeAt(S++)<<16|E.charCodeAt(S++)<<24;else for(N=0;16>N;++N)P[N]=E[S++]|E[S++]<<8|E[S++]<<16|E[S++]<<24;E=k.g[0],S=k.g[1],N=k.g[2];var V=k.g[3],A=E+(V^S&(N^V))+P[0]+3614090360&4294967295;E=S+(A<<7&4294967295|A>>>25),A=V+(N^E&(S^N))+P[1]+3905402710&4294967295,V=E+(A<<12&4294967295|A>>>20),A=N+(S^V&(E^S))+P[2]+606105819&4294967295,N=V+(A<<17&4294967295|A>>>15),A=S+(E^N&(V^E))+P[3]+3250441966&4294967295,S=N+(A<<22&4294967295|A>>>10),A=E+(V^S&(N^V))+P[4]+4118548399&4294967295,E=S+(A<<7&4294967295|A>>>25),A=V+(N^E&(S^N))+P[5]+1200080426&4294967295,V=E+(A<<12&4294967295|A>>>20),A=N+(S^V&(E^S))+P[6]+2821735955&4294967295,N=V+(A<<17&4294967295|A>>>15),A=S+(E^N&(V^E))+P[7]+4249261313&4294967295,S=N+(A<<22&4294967295|A>>>10),A=E+(V^S&(N^V))+P[8]+1770035416&4294967295,E=S+(A<<7&4294967295|A>>>25),A=V+(N^E&(S^N))+P[9]+2336552879&4294967295,V=E+(A<<12&4294967295|A>>>20),A=N+(S^V&(E^S))+P[10]+4294925233&4294967295,N=V+(A<<17&4294967295|A>>>15),A=S+(E^N&(V^E))+P[11]+2304563134&4294967295,S=N+(A<<22&4294967295|A>>>10),A=E+(V^S&(N^V))+P[12]+1804603682&4294967295,E=S+(A<<7&4294967295|A>>>25),A=V+(N^E&(S^N))+P[13]+4254626195&4294967295,V=E+(A<<12&4294967295|A>>>20),A=N+(S^V&(E^S))+P[14]+2792965006&4294967295,N=V+(A<<17&4294967295|A>>>15),A=S+(E^N&(V^E))+P[15]+1236535329&4294967295,S=N+(A<<22&4294967295|A>>>10),A=E+(N^V&(S^N))+P[1]+4129170786&4294967295,E=S+(A<<5&4294967295|A>>>27),A=V+(S^N&(E^S))+P[6]+3225465664&4294967295,V=E+(A<<9&4294967295|A>>>23),A=N+(E^S&(V^E))+P[11]+643717713&4294967295,N=V+(A<<14&4294967295|A>>>18),A=S+(V^E&(N^V))+P[0]+3921069994&4294967295,S=N+(A<<20&4294967295|A>>>12),A=E+(N^V&(S^N))+P[5]+3593408605&4294967295,E=S+(A<<5&4294967295|A>>>27),A=V+(S^N&(E^S))+P[10]+38016083&4294967295,V=E+(A<<9&4294967295|A>>>23),A=N+(E^S&(V^E))+P[15]+3634488961&4294967295,N=V+(A<<14&4294967295|A>>>18),A=S+(V^E&(N^V))+P[4]+3889429448&4294967295,S=N+(A<<20&4294967295|A>>>12),A=E+(N^V&(S^N))+P[9]+568446438&4294967295,E=S+(A<<5&4294967295|A>>>27),A=V+(S^N&(E^S))+P[14]+3275163606&4294967295,V=E+(A<<9&4294967295|A>>>23),A=N+(E^S&(V^E))+P[3]+4107603335&4294967295,N=V+(A<<14&4294967295|A>>>18),A=S+(V^E&(N^V))+P[8]+1163531501&4294967295,S=N+(A<<20&4294967295|A>>>12),A=E+(N^V&(S^N))+P[13]+2850285829&4294967295,E=S+(A<<5&4294967295|A>>>27),A=V+(S^N&(E^S))+P[2]+4243563512&4294967295,V=E+(A<<9&4294967295|A>>>23),A=N+(E^S&(V^E))+P[7]+1735328473&4294967295,N=V+(A<<14&4294967295|A>>>18),A=S+(V^E&(N^V))+P[12]+2368359562&4294967295,S=N+(A<<20&4294967295|A>>>12),A=E+(S^N^V)+P[5]+4294588738&4294967295,E=S+(A<<4&4294967295|A>>>28),A=V+(E^S^N)+P[8]+2272392833&4294967295,V=E+(A<<11&4294967295|A>>>21),A=N+(V^E^S)+P[11]+1839030562&4294967295,N=V+(A<<16&4294967295|A>>>16),A=S+(N^V^E)+P[14]+4259657740&4294967295,S=N+(A<<23&4294967295|A>>>9),A=E+(S^N^V)+P[1]+2763975236&4294967295,E=S+(A<<4&4294967295|A>>>28),A=V+(E^S^N)+P[4]+1272893353&4294967295,V=E+(A<<11&4294967295|A>>>21),A=N+(V^E^S)+P[7]+4139469664&4294967295,N=V+(A<<16&4294967295|A>>>16),A=S+(N^V^E)+P[10]+3200236656&4294967295,S=N+(A<<23&4294967295|A>>>9),A=E+(S^N^V)+P[13]+681279174&4294967295,E=S+(A<<4&4294967295|A>>>28),A=V+(E^S^N)+P[0]+3936430074&4294967295,V=E+(A<<11&4294967295|A>>>21),A=N+(V^E^S)+P[3]+3572445317&4294967295,N=V+(A<<16&4294967295|A>>>16),A=S+(N^V^E)+P[6]+76029189&4294967295,S=N+(A<<23&4294967295|A>>>9),A=E+(S^N^V)+P[9]+3654602809&4294967295,E=S+(A<<4&4294967295|A>>>28),A=V+(E^S^N)+P[12]+3873151461&4294967295,V=E+(A<<11&4294967295|A>>>21),A=N+(V^E^S)+P[15]+530742520&4294967295,N=V+(A<<16&4294967295|A>>>16),A=S+(N^V^E)+P[2]+3299628645&4294967295,S=N+(A<<23&4294967295|A>>>9),A=E+(N^(S|~V))+P[0]+4096336452&4294967295,E=S+(A<<6&4294967295|A>>>26),A=V+(S^(E|~N))+P[7]+1126891415&4294967295,V=E+(A<<10&4294967295|A>>>22),A=N+(E^(V|~S))+P[14]+2878612391&4294967295,N=V+(A<<15&4294967295|A>>>17),A=S+(V^(N|~E))+P[5]+4237533241&4294967295,S=N+(A<<21&4294967295|A>>>11),A=E+(N^(S|~V))+P[12]+1700485571&4294967295,E=S+(A<<6&4294967295|A>>>26),A=V+(S^(E|~N))+P[3]+2399980690&4294967295,V=E+(A<<10&4294967295|A>>>22),A=N+(E^(V|~S))+P[10]+4293915773&4294967295,N=V+(A<<15&4294967295|A>>>17),A=S+(V^(N|~E))+P[1]+2240044497&4294967295,S=N+(A<<21&4294967295|A>>>11),A=E+(N^(S|~V))+P[8]+1873313359&4294967295,E=S+(A<<6&4294967295|A>>>26),A=V+(S^(E|~N))+P[15]+4264355552&4294967295,V=E+(A<<10&4294967295|A>>>22),A=N+(E^(V|~S))+P[6]+2734768916&4294967295,N=V+(A<<15&4294967295|A>>>17),A=S+(V^(N|~E))+P[13]+1309151649&4294967295,S=N+(A<<21&4294967295|A>>>11),A=E+(N^(S|~V))+P[4]+4149444226&4294967295,E=S+(A<<6&4294967295|A>>>26),A=V+(S^(E|~N))+P[11]+3174756917&4294967295,V=E+(A<<10&4294967295|A>>>22),A=N+(E^(V|~S))+P[2]+718787259&4294967295,N=V+(A<<15&4294967295|A>>>17),A=S+(V^(N|~E))+P[9]+3951481745&4294967295,k.g[0]=k.g[0]+E&4294967295,k.g[1]=k.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+V&4294967295}s.prototype.u=function(k,E){E===void 0&&(E=k.length);for(var S=E-this.blockSize,P=this.B,N=this.h,V=0;V<E;){if(N==0)for(;V<=S;)o(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<E;)if(P[N++]=k.charCodeAt(V++),N==this.blockSize){o(this,P),N=0;break}}else for(;V<E;)if(P[N++]=k[V++],N==this.blockSize){o(this,P),N=0;break}}this.h=N,this.o+=E},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var E=1;E<k.length-8;++E)k[E]=0;var S=8*this.o;for(E=k.length-8;E<k.length;++E)k[E]=S&255,S/=256;for(this.u(k),k=Array(16),E=S=0;4>E;++E)for(var P=0;32>P;P+=8)k[S++]=this.g[E]>>>P&255;return k};function u(k,E){var S=m;return Object.prototype.hasOwnProperty.call(S,k)?S[k]:S[k]=E(k)}function h(k,E){this.h=E;for(var S=[],P=!0,N=k.length-1;0<=N;N--){var V=k[N]|0;P&&V==E||(S[N]=V,P=!1)}this.g=S}var m={};function g(k){return-128<=k&&128>k?u(k,function(E){return new h([E|0],0>E?-1:0)}):new h([k|0],0>k?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return x;if(0>k)return W(v(-k));for(var E=[],S=1,P=0;k>=S;P++)E[P]=k/S|0,S*=4294967296;return new h(E,0)}function T(k,E){if(k.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k.charAt(0)=="-")return W(T(k.substring(1),E));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=v(Math.pow(E,8)),P=x,N=0;N<k.length;N+=8){var V=Math.min(8,k.length-N),A=parseInt(k.substring(N,N+V),E);8>V?(V=v(Math.pow(E,V)),P=P.j(V).add(v(A))):(P=P.j(S),P=P.add(v(A)))}return P}var x=g(0),L=g(1),z=g(16777216);i=h.prototype,i.m=function(){if(X(this))return-W(this).m();for(var k=0,E=1,S=0;S<this.g.length;S++){var P=this.i(S);k+=(0<=P?P:4294967296+P)*E,E*=4294967296}return k},i.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(Y(this))return"0";if(X(this))return"-"+W(this).toString(k);for(var E=v(Math.pow(k,6)),S=this,P="";;){var N=Ee(S,E).g;S=ge(S,N.j(E));var V=((0<S.g.length?S.g[0]:S.h)>>>0).toString(k);if(S=N,Y(S))return V+P;for(;6>V.length;)V="0"+V;P=V+P}},i.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function Y(k){if(k.h!=0)return!1;for(var E=0;E<k.g.length;E++)if(k.g[E]!=0)return!1;return!0}function X(k){return k.h==-1}i.l=function(k){return k=ge(this,k),X(k)?-1:Y(k)?0:1};function W(k){for(var E=k.g.length,S=[],P=0;P<E;P++)S[P]=~k.g[P];return new h(S,~k.h).add(L)}i.abs=function(){return X(this)?W(this):this},i.add=function(k){for(var E=Math.max(this.g.length,k.g.length),S=[],P=0,N=0;N<=E;N++){var V=P+(this.i(N)&65535)+(k.i(N)&65535),A=(V>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);P=A>>>16,V&=65535,A&=65535,S[N]=A<<16|V}return new h(S,S[S.length-1]&-2147483648?-1:0)};function ge(k,E){return k.add(W(E))}i.j=function(k){if(Y(this)||Y(k))return x;if(X(this))return X(k)?W(this).j(W(k)):W(W(this).j(k));if(X(k))return W(this.j(W(k)));if(0>this.l(z)&&0>k.l(z))return v(this.m()*k.m());for(var E=this.g.length+k.g.length,S=[],P=0;P<2*E;P++)S[P]=0;for(P=0;P<this.g.length;P++)for(var N=0;N<k.g.length;N++){var V=this.i(P)>>>16,A=this.i(P)&65535,et=k.i(N)>>>16,Ct=k.i(N)&65535;S[2*P+2*N]+=A*Ct,ye(S,2*P+2*N),S[2*P+2*N+1]+=V*Ct,ye(S,2*P+2*N+1),S[2*P+2*N+1]+=A*et,ye(S,2*P+2*N+1),S[2*P+2*N+2]+=V*et,ye(S,2*P+2*N+2)}for(P=0;P<E;P++)S[P]=S[2*P+1]<<16|S[2*P];for(P=E;P<2*E;P++)S[P]=0;return new h(S,0)};function ye(k,E){for(;(k[E]&65535)!=k[E];)k[E+1]+=k[E]>>>16,k[E]&=65535,E++}function _e(k,E){this.g=k,this.h=E}function Ee(k,E){if(Y(E))throw Error("division by zero");if(Y(k))return new _e(x,x);if(X(k))return E=Ee(W(k),E),new _e(W(E.g),W(E.h));if(X(E))return E=Ee(k,W(E)),new _e(W(E.g),E.h);if(30<k.g.length){if(X(k)||X(E))throw Error("slowDivide_ only works with positive integers.");for(var S=L,P=E;0>=P.l(k);)S=ze(S),P=ze(P);var N=Te(S,1),V=Te(P,1);for(P=Te(P,2),S=Te(S,2);!Y(P);){var A=V.add(P);0>=A.l(k)&&(N=N.add(S),V=A),P=Te(P,1),S=Te(S,1)}return E=ge(k,N.j(E)),new _e(N,E)}for(N=x;0<=k.l(E);){for(S=Math.max(1,Math.floor(k.m()/E.m())),P=Math.ceil(Math.log(S)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),V=v(S),A=V.j(E);X(A)||0<A.l(k);)S-=P,V=v(S),A=V.j(E);Y(V)&&(V=L),N=N.add(V),k=ge(k,A)}return new _e(N,k)}i.A=function(k){return Ee(this,k).h},i.and=function(k){for(var E=Math.max(this.g.length,k.g.length),S=[],P=0;P<E;P++)S[P]=this.i(P)&k.i(P);return new h(S,this.h&k.h)},i.or=function(k){for(var E=Math.max(this.g.length,k.g.length),S=[],P=0;P<E;P++)S[P]=this.i(P)|k.i(P);return new h(S,this.h|k.h)},i.xor=function(k){for(var E=Math.max(this.g.length,k.g.length),S=[],P=0;P<E;P++)S[P]=this.i(P)^k.i(P);return new h(S,this.h^k.h)};function ze(k){for(var E=k.g.length+1,S=[],P=0;P<E;P++)S[P]=k.i(P)<<1|k.i(P-1)>>>31;return new h(S,k.h)}function Te(k,E){var S=E>>5;E%=32;for(var P=k.g.length-S,N=[],V=0;V<P;V++)N[V]=0<E?k.i(V+S)>>>E|k.i(V+S+1)<<32-E:k.i(V+S);return new h(N,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,oy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=T,Wi=h}).apply(typeof Um<"u"?Um:typeof self<"u"?self:typeof window<"u"?window:{});var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ay,ya,ly,_u,Zh,uy,cy,hy;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof du=="object"&&du];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var O=l[w];if(!(O in y))break e;y=y[O]}l=l[l.length-1],w=y[l],f=f(w),f!=w&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,w=!1,O={next:function(){if(!w&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return w=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function T(l,f,y){return l.call.apply(l.bind,arguments)}function x(l,f,y){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,w),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function L(l,f,y){return L=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:x,L.apply(null,arguments)}function z(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function Y(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(w,O,U){for(var J=Array(arguments.length-2),be=2;be<arguments.length;be++)J[be-2]=arguments[be];return f.prototype[O].apply(w,J)}}function X(l){const f=l.length;if(0<f){const y=Array(f);for(let w=0;w<f;w++)y[w]=l[w];return y}return[]}function W(l,f){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const O=l.length||0,U=w.length||0;l.length=O+U;for(let J=0;J<U;J++)l[O+J]=w[J]}else l.push(w)}}class ge{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ye(l){return/^[\s\xa0]*$/.test(l)}function _e(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Ee(l){return Ee[" "](l),l}Ee[" "]=function(){};var ze=_e().indexOf("Gecko")!=-1&&!(_e().toLowerCase().indexOf("webkit")!=-1&&_e().indexOf("Edge")==-1)&&!(_e().indexOf("Trident")!=-1||_e().indexOf("MSIE")!=-1)&&_e().indexOf("Edge")==-1;function Te(l,f,y){for(const w in l)f.call(y,l[w],w,l)}function k(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function E(l){const f={};for(const y in l)f[y]=l[y];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let y,w;for(let O=1;O<arguments.length;O++){w=arguments[O];for(y in w)l[y]=w[y];for(let U=0;U<S.length;U++)y=S[U],Object.prototype.hasOwnProperty.call(w,y)&&(l[y]=w[y])}}function N(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function V(l){m.setTimeout(()=>{throw l},0)}function A(){var l=ce;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,y){const w=Ct.get();w.set(f,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Ct=new ge(()=>new kt,l=>l.reset());class kt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Z=!1,ce=new et,te=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(D)}};var D=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(y){V(y)}var f=Ct;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l})();function Se(l,f){if(le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(ze){e:{try{Ee(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ke[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Se.aa.h.call(this)}}Y(Se,le);var ke={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(l,f,y,w,O){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!w,this.ha=O,this.key=++Me,this.da=this.fa=!1}function pt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function er(l){this.src=l,this.g={},this.h=0}er.prototype.add=function(l,f,y,w,O){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var J=Cr(l,f,w,O);return-1<J?(f=l[J],y||(f.fa=!1)):(f=new Be(f,this.src,U,!!w,O),f.fa=y,l.push(f)),f};function ns(l,f){var y=f.type;if(y in l.g){var w=l.g[y],O=Array.prototype.indexOf.call(w,f,void 0),U;(U=0<=O)&&Array.prototype.splice.call(w,O,1),U&&(pt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Cr(l,f,y,w){for(var O=0;O<l.length;++O){var U=l[O];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==w)return O}return-1}var mi="closure_lm_"+(1e6*Math.random()|0),rs={};function _o(l,f,y,w,O){if(Array.isArray(f)){for(var U=0;U<f.length;U++)_o(l,f[U],y,w,O);return null}return y=Eo(y),l&&l[Le]?l.K(f,y,v(w)?!!w.capture:!1,O):vo(l,f,y,!1,w,O)}function vo(l,f,y,w,O,U){if(!f)throw Error("Invalid event type");var J=v(O)?!!O.capture:!!O,be=ss(l);if(be||(l[mi]=be=new er(l)),y=be.add(f,y,w,J,U),y.proxy)return y;if(w=Ya(),y.proxy=w,w.src=l,w.listener=y,l.addEventListener)Ie||(O=J),O===void 0&&(O=!1),l.addEventListener(f.toString(),w,O);else if(l.attachEvent)l.attachEvent(nr(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ya(){function l(y){return f.call(l.src,l.listener,y)}const f=wo;return l}function is(l,f,y,w,O){if(Array.isArray(f))for(var U=0;U<f.length;U++)is(l,f[U],y,w,O);else w=v(w)?!!w.capture:!!w,y=Eo(y),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Cr(U,y,w,O),-1<y&&(pt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=ss(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Cr(f,y,w,O)),(y=-1<l?f[l]:null)&&tr(y))}function tr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])ns(f.i,l);else{var y=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(y,w,l.capture):f.detachEvent?f.detachEvent(nr(y),w):f.addListener&&f.removeListener&&f.removeListener(w),(y=ss(f))?(ns(y,l),y.h==0&&(y.src=null,f[mi]=null)):pt(l)}}}function nr(l){return l in rs?rs[l]:rs[l]="on"+l}function wo(l,f){if(l.da)l=!0;else{f=new Se(f,this);var y=l.listener,w=l.ha||l.src;l.fa&&tr(l),l=y.call(w,f)}return l}function ss(l){return l=l[mi],l instanceof er?l:null}var os="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eo(l){return typeof l=="function"?l:(l[os]||(l[os]=function(f){return l.handleEvent(f)}),l[os])}function lt(){B.call(this),this.i=new er(this),this.M=this,this.F=null}Y(lt,B),lt.prototype[Le]=!0,lt.prototype.removeEventListener=function(l,f,y,w){is(this,l,f,y,w)};function ut(l,f){var y,w=l.F;if(w)for(y=[];w;w=w.F)y.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new le(f,l);else if(f instanceof le)f.target=f.target||l;else{var O=f;f=new le(w,l),P(f,O)}if(O=!0,y)for(var U=y.length-1;0<=U;U--){var J=f.g=y[U];O=rr(J,w,!0,f)&&O}if(J=f.g=l,O=rr(J,w,!0,f)&&O,O=rr(J,w,!1,f)&&O,y)for(U=0;U<y.length;U++)J=f.g=y[U],O=rr(J,w,!1,f)&&O}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],w=0;w<y.length;w++)pt(y[w]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,y,w){return this.i.add(String(l),f,!1,y,w)},lt.prototype.L=function(l,f,y,w){return this.i.add(String(l),f,!0,y,w)};function rr(l,f,y,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,U=0;U<f.length;++U){var J=f[U];if(J&&!J.da&&J.capture==y){var be=J.listener,ct=J.ha||J.src;J.fa&&ns(l.i,J),O=be.call(ct,w)!==!1&&O}}return O&&!w.defaultPrevented}function To(l,f,y){if(typeof l=="function")y&&(l=L(l,y));else if(l&&typeof l.handleEvent=="function")l=L(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function kr(l){l.g=To(()=>{l.g=null,l.i&&(l.i=!1,kr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class gi extends B{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:kr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yi(l){B.call(this),this.h=l,this.g={}}Y(yi,B);var Io=[];function So(l){Te(l.g,function(f,y){this.g.hasOwnProperty(y)&&tr(f)},l),l.g={}}yi.prototype.N=function(){yi.aa.N.call(this),So(this)},yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ao=m.JSON.stringify,Ro=m.JSON.parse,Po=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function _i(){}_i.prototype.h=null;function as(l){return l.h||(l.h=l.i())}function ls(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mn(){le.call(this,"d")}Y(Mn,le);function us(){le.call(this,"c")}Y(us,le);var bn={},Co=null;function vi(){return Co=Co||new lt}bn.La="serverreachability";function ko(l){le.call(this,bn.La,l)}Y(ko,le);function ir(l){const f=vi();ut(f,new ko(f))}bn.STAT_EVENT="statevent";function xo(l,f){le.call(this,bn.STAT_EVENT,l),this.stat=f}Y(xo,le);function tt(l){const f=vi();ut(f,new xo(f,l))}bn.Ma="timingevent";function cs(l,f){le.call(this,bn.Ma,l),this.size=f}Y(cs,le);function _n(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function wi(){this.g=!0}wi.prototype.xa=function(){this.g=!1};function Ei(l,f,y,w,O,U){l.info(function(){if(l.g)if(U)for(var J="",be=U.split("&"),ct=0;ct<be.length;ct++){var xe=be[ct].split("=");if(1<xe.length){var mt=xe[0];xe=xe[1];var it=mt.split("_");J=2<=it.length&&it[1]=="type"?J+(mt+"="+xe+"&"):J+(mt+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+w+") [attempt "+O+"]: "+f+`
`+y+`
`+J})}function hs(l,f,y,w,O,U,J){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+O+"]: "+f+`
`+y+`
`+U+" "+J})}function vn(l,f,y,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+sc(l,y)+(w?" "+w:"")})}function No(l,f){l.info(function(){return"TIMEOUT: "+f})}wi.prototype.info=function(){};function sc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var w=y[l];if(!(2>w.length)){var O=w[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<O.length;J++)O[J]=""}}}}return Ao(y)}catch{return f}}var ds={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wn;function Ti(){}Y(Ti,_i),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},wn=new Ti;function En(l,f,y,w){this.j=l,this.i=f,this.l=y,this.R=w||1,this.U=new yi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ja}function Ja(){this.i=null,this.g="",this.h=!1}var Do={},fs={};function ps(l,f,y){l.L=1,l.v=Or(Zt(f)),l.m=y,l.P=!0,Vo(l,null)}function Vo(l,f){l.F=Date.now(),$e(l),l.A=Zt(l.v);var y=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Mr(y.i,"t",w),l.C=0,y=l.j.J,l.h=new Ja,l.g=gl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new gi(L(l.Y,l,l.g),l.O)),f=l.U,y=l.g,w=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Io[0]=O.toString()),O=Io);for(var U=0;U<O.length;U++){var J=_o(y,O[U],w||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?E(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ir(),Ei(l.i,l.u,l.A,l.l,l.R,l.m)}En.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},En.prototype.Y=function(l){try{if(l==this.g)e:{const it=$t(this.g);var f=this.g.Ba();const un=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Uo(this.g)))){this.J||it!=4||f==7||(f==8||0>=un?ir(3):ir(2)),Ii(this);var y=this.g.Z();this.X=y;t:if(Za(this)){var w=Uo(this.g);l="";var O=w.length,U=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),xr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(U&&f==O-1)});w.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,hs(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var be,ct=this.g;if((be=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ye(be)){var xe=be;break t}}xe=null}if(y=xe)vn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oo(this,y);else{this.o=!1,this.s=3,tt(12),an(this),xr(this);break e}}if(this.P){y=!0;let tn;for(;!this.J&&this.C<J.length;)if(tn=oc(this,J),tn==fs){it==4&&(this.s=4,tt(14),y=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Do){this.s=4,tt(15),vn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else vn(this.i,this.l,tn,null),Oo(this,tn);if(Za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||J.length!=0||this.h.h||(this.s=1,tt(16),y=!1),this.o=this.o&&y,!y)vn(this.i,this.l,J,"[Invalid Chunked Response]"),an(this),xr(this);else if(0<J.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),zo(mt),mt.M=!0,tt(11))}}else vn(this.i,this.l,J,null),Oo(this,J);it==4&&an(this),this.o&&!this.J&&(it==4?As(this.j,this):(this.o=!1,$e(this)))}else ws(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),an(this),xr(this)}}}catch{}finally{}};function Za(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function oc(l,f){var y=l.C,w=f.indexOf(`
`,y);return w==-1?fs:(y=Number(f.substring(y,w)),isNaN(y)?Do:(w+=1,w+y>f.length?fs:(f=f.slice(w,w+y),l.C=w+y,f)))}En.prototype.cancel=function(){this.J=!0,an(this)};function $e(l){l.S=Date.now()+l.I,el(l,l.I)}function el(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_n(L(l.ba,l),f)}function Ii(l){l.B&&(m.clearTimeout(l.B),l.B=null)}En.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(No(this.i,this.A),this.L!=2&&(ir(),tt(17)),an(this),this.s=2,xr(this)):el(this,this.S-l)};function xr(l){l.j.G==0||l.J||As(l.j,l)}function an(l){Ii(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,So(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Oo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Ft(y.h,l))){if(!l.K&&Ft(y.h,l)&&y.G==3){try{var w=y.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var O=w;if(O[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ss(y),Rn(y);else break e;Is(y),tt(18)}}else y.za=O[1],0<y.za-y.T&&37500>O[2]&&y.F&&y.v==0&&!y.C&&(y.C=_n(L(y.Za,y),6e3));if(1>=nl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else ur(y,11)}else if((l.K||y.g==l)&&Ss(y),!ye(f))for(O=y.Da.g.parse(f),f=0;f<O.length;f++){let xe=O[f];if(y.T=xe[0],xe=xe[1],y.G==2)if(xe[0]=="c"){y.K=xe[1],y.ia=xe[2];const mt=xe[3];mt!=null&&(y.la=mt,y.j.info("VER="+y.la));const it=xe[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const un=xe[5];un!=null&&typeof un=="number"&&0<un&&(w=1.5*un,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const tn=l.g;if(tn){const xi=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xi){var U=w.h;U.g||xi.indexOf("spdy")==-1&&xi.indexOf("quic")==-1&&xi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Lo(U,U.h),U.h=null))}if(w.D){const Ps=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ps&&(w.ya=Ps,je(w.I,w.D,Ps))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var J=l;if(w.qa=ml(w,w.J?w.ia:null,w.W),J.K){rl(w.h,J);var be=J,ct=w.L;ct&&(be.I=ct),be.B&&(Ii(be),$e(be)),w.g=J}else ki(w);0<y.i.length&&zn(y)}else xe[0]!="stop"&&xe[0]!="close"||ur(y,7);else y.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?ur(y,7):Et(y):xe[0]!="noop"&&y.l&&y.l.ta(xe),y.v=0)}}ir(4)}catch{}}var tl=class{constructor(l,f){this.g=l,this.map=f}};function Si(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function nl(l){return l.h?1:l.g?l.g.size:0}function Ft(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Lo(l,f){l.g?l.g.add(f):l.h=f}function rl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Si.prototype.cancel=function(){if(this.i=il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function il(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return X(l.i)}function ms(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,w=0;w<y;w++)f.push(l[w]);return f}f=[],y=0;for(w in l)f[y++]=l[w];return f}function gs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const w in l)f[y++]=w;return f}}}function Nr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=gs(l),w=ms(l),O=w.length,U=0;U<O;U++)f.call(void 0,w[U],y&&y[U],l)}var Ai=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var w=l[y].indexOf("="),O=null;if(0<=w){var U=l[y].substring(0,w);O=l[y].substring(w+1)}else U=l[y];f(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function sr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof sr){this.h=l.h,Ri(this,l.j),this.o=l.o,this.g=l.g,Dr(this,l.s),this.l=l.l;var f=l.i,y=new Fn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Vr(this,y),this.m=l.m}else l&&(f=String(l).match(Ai))?(this.h=!1,Ri(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Dr(this,f[4]),this.l=Pe(f[5]||"",!0),Vr(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}sr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Lr(f,ys,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Lr(f,ys,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Lr(y,y.charAt(0)=="/"?al:ol,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Lr(y,Mo)),l.join("")};function Zt(l){return new sr(l)}function Ri(l,f,y){l.j=y?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Dr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Vr(l,f,y){f instanceof Fn?(l.i=f,Un(l.i,l.h)):(y||(f=Lr(f,ll)),l.i=new Fn(f,l.h))}function je(l,f,y){l.i.set(f,y)}function Or(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Lr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,sl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function sl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ys=/[#\/\?@]/g,ol=/[#\?:]/g,al=/[#\?]/g,ll=/[#\?@]/g,Mo=/#/g;function Fn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&ac(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Fn.prototype,i.add=function(l,f){wt(this),this.i=null,l=ln(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Tn(l,f){wt(l),f=ln(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function In(l,f){return wt(l),f=ln(l,f),l.g.has(f)}i.forEach=function(l,f){wt(this),this.g.forEach(function(y,w){y.forEach(function(O){l.call(f,O,w,this)},this)},this)},i.na=function(){wt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let w=0;w<f.length;w++){const O=l[w];for(let U=0;U<O.length;U++)y.push(f[w])}return y},i.V=function(l){wt(this);let f=[];if(typeof l=="string")In(this,l)&&(f=f.concat(this.g.get(ln(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return wt(this),this.i=null,l=ln(this,l),In(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Mr(l,f,y){Tn(l,f),0<y.length&&(l.i=null,l.g.set(ln(l,f),X(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var w=f[y];const U=encodeURIComponent(String(w)),J=this.V(w);for(w=0;w<J.length;w++){var O=U;J[w]!==""&&(O+="="+encodeURIComponent(String(J[w]))),l.push(O)}}return this.i=l.join("&")};function ln(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Un(l,f){f&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(y,w){var O=w.toLowerCase();w!=O&&(Tn(this,w),Mr(this,O,y))},l)),l.j=f}function lc(l,f){const y=new wi;if(m.Image){const w=new Image;w.onload=z(Bt,y,"TestLoadImage: loaded",!0,f,w),w.onerror=z(Bt,y,"TestLoadImage: error",!1,f,w),w.onabort=z(Bt,y,"TestLoadImage: abort",!1,f,w),w.ontimeout=z(Bt,y,"TestLoadImage: timeout",!1,f,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function ul(l,f){const y=new wi,w=new AbortController,O=setTimeout(()=>{w.abort(),Bt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(O),U.ok?Bt(y,"TestPingServer: ok",!0,f):Bt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Bt(y,"TestPingServer: error",!1,f)})}function Bt(l,f,y,w,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),w(y)}catch{}}function uc(){this.g=new Po}function cl(l,f,y){const w=y||"";try{Nr(l,function(O,U){let J=O;v(O)&&(J=Ao(O)),f.push(w+U+"="+encodeURIComponent(J))})}catch(O){throw f.push(w+"type="+encodeURIComponent("_badmap")),O}}function or(l){this.l=l.Ub||null,this.j=l.eb||!1}Y(or,_i),or.prototype.g=function(){return new Pi(this.l,this.j)},or.prototype.i=(function(l){return function(){return l}})({});function Pi(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Y(Pi,lt),i=Pi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,An(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function hl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Sn(this):An(this),this.readyState==3&&hl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Sn(this))},i.Qa=function(l){this.g&&(this.response=l,Sn(this))},i.ga=function(){this.g&&Sn(this)};function Sn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,An(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function An(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ar(l){let f="";return Te(l,function(y,w){f+=w,f+=":",f+=y,f+=`\r
`}),f}function br(l,f,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=ar(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):je(l,f,y))}function Ge(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Y(Ge,lt);var cc=/^https?$/i,bo=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wn.g(),this.v=this.o?as(this.o):as(wn),this.g.onreadystatechange=L(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Ci(this,U);return}if(l=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var O in w)y.set(O,w[O]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())y.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),O=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(bo,f,void 0))||w||O||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of y)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vs(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Ci(this,U)}};function Ci(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,_s(l),en(l)}function _s(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),en(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),en(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Fo(this):this.bb())},i.bb=function(){Fo(this)};function Fo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)To(l.Ea,0,l);else if(ut(l,"readystatechange"),$t(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var w;if(w=J===0){var O=String(l.D).match(Ai)[1]||null;!O&&m.self&&m.self.location&&(O=m.self.location.protocol.slice(0,-1)),w=!cc.test(O?O.toLowerCase():"")}y=w}if(y)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var U=2<$t(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",_s(l)}}finally{en(l)}}}}function en(l,f){if(l.g){vs(l);const y=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{y.onreadystatechange=w}catch{}}}function vs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Ro(f)}};function Uo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ws(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(ye(l[w]))continue;var y=N(l[w]);const O=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[O]||[];f[O]=U,U.push(y)}k(f,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function jo(l){this.Aa=0,this.i=[],this.j=new wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jn("baseRetryDelayMs",5e3,l),this.cb=jn("retryDelaySeedMs",1e4,l),this.Wa=jn("forwardChannelMaxRetries",2,l),this.wa=jn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Si(l&&l.concurrentRequestLimit),this.Da=new uc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=jo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,w){tt(0),this.W=l,this.H=f||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=ml(this,null,this.W),zn(this)};function Et(l){if(Es(l),l.G==3){var f=l.U++,y=Zt(l.I);if(je(y,"SID",l.K),je(y,"RID",f),je(y,"TYPE","terminate"),lr(l,y),f=new En(l,l.j,f),f.L=2,f.v=Or(Zt(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=gl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}pl(l)}function Rn(l){l.g&&(zo(l),l.g.cancel(),l.g=null)}function Es(l){Rn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ss(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function zn(l){if(!Jt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||te(),Z||(Ue(),Z=!0),ce.add(f,l),l.B=0}}function hc(l,f){return nl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_n(L(l.Ga,l,f),fl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new En(this,this.j,l);let U=this.o;if(this.S&&(U?(U=E(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Fr(this,O,f),y=Zt(this.I),je(y,"RID",l),je(y,"CVER",22),this.D&&je(y,"X-HTTP-Session-Id",this.D),lr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(ar(U)))+"&"+f:this.m&&br(y,this.m,U)),Lo(this.h,O),this.Ua&&je(y,"TYPE","init"),this.P?(je(y,"$req",f),je(y,"SID","null"),O.T=!0,ps(O,y,null)):ps(O,y,f),this.G=2}}else this.G==3&&(l?Ts(this,l):this.i.length==0||Jt(this.h)||Ts(this))};function Ts(l,f){var y;f?y=f.l:y=l.U++;const w=Zt(l.I);je(w,"SID",l.K),je(w,"RID",y),je(w,"AID",l.T),lr(l,w),l.m&&l.o&&br(w,l.m,l.o),y=new En(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Fr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Lo(l.h,y),ps(y,w,f)}function lr(l,f){l.H&&Te(l.H,function(y,w){je(f,w,y)}),l.l&&Nr({},function(y,w){je(f,w,y)})}function Fr(l,f,y){y=Math.min(l.i.length,y);var w=l.l?L(l.l.Na,l.l,l):null;e:{var O=l.i;let U=-1;for(;;){const J=["count="+y];U==-1?0<y?(U=O[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let be=!0;for(let ct=0;ct<y;ct++){let xe=O[ct].g;const mt=O[ct].map;if(xe-=U,0>xe)U=Math.max(0,O[ct].g-100),be=!1;else try{cl(mt,J,"req"+xe+"_")}catch{w&&w(mt)}}if(be){w=J.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,w}function ki(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||te(),Z||(Ue(),Z=!0),ce.add(f,l),l.v=0}}function Is(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_n(L(l.Fa,l),fl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,dl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_n(L(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Rn(this),dl(this))};function zo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function dl(l){l.g=new En(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Zt(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),lr(l,f),l.m&&l.o&&br(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Or(Zt(f)),y.m=null,y.P=!0,Vo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Rn(this),Is(this),tt(19))};function Ss(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function As(l,f){var y=null;if(l.g==f){Ss(l),zo(l),l.g=null;var w=2}else if(Ft(l.h,f))y=f.D,rl(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;w=vi(),ut(w,new cs(w,y)),zn(l)}else ki(l);else if(O=f.s,O==3||O==0&&0<f.X||!(w==1&&hc(l,f)||w==2&&Is(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),O){case 1:ur(l,5);break;case 4:ur(l,10);break;case 3:ur(l,6);break;default:ur(l,2)}}}function fl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function ur(l,f){if(l.j.info("Error code "+f),f==2){var y=L(l.fb,l),w=l.Xa;const O=!w;w=new sr(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ri(w,"https"),Or(w),O?lc(w.toString(),y):ul(w.toString(),y)}else tt(2);l.G=0,l.l&&l.l.sa(f),pl(l),Es(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function pl(l){if(l.G=0,l.ka=[],l.l){const f=il(l.h);(f.length!=0||l.i.length!=0)&&(W(l.ka,f),W(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function ml(l,f,y){var w=y instanceof sr?Zt(y):new sr(y);if(w.g!="")f&&(w.g=f+"."+w.g),Dr(w,w.s);else{var O=m.location;w=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var U=new sr(null);w&&Ri(U,w),f&&(U.g=f),O&&Dr(U,O),y&&(U.l=y),w=U}return y=l.D,f=l.ya,y&&f&&je(w,y,f),je(w,"VER",l.la),lr(l,w),w}function gl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ge(new or({eb:y})):new Ge(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bo(){}i=Bo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Rs(){}Rs.prototype.g=function(l,f){return new Ut(l,f)};function Ut(l,f){lt.call(this),this.g=new jo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ye(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ye(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Bn(this)}Y(Ut,lt),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Et(this.g)},Ut.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Ao(l),l=y);f.i.push(new tl(f.Ya++,l)),f.G==3&&zn(f)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Et(this.g),delete this.g,Ut.aa.N.call(this)};function yl(l){Mn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Y(yl,Mn);function _l(){us.call(this),this.status=1}Y(_l,us);function Bn(l){this.g=l}Y(Bn,Bo),Bn.prototype.ua=function(){ut(this.g,"a")},Bn.prototype.ta=function(l){ut(this.g,new yl(l))},Bn.prototype.sa=function(l){ut(this.g,new _l)},Bn.prototype.ra=function(){ut(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,hy=function(){return new Rs},cy=function(){return vi()},uy=bn,Zh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ds.NO_ERROR=0,ds.TIMEOUT=8,ds.HTTP_ERROR=6,_u=ds,Xa.COMPLETE="complete",ly=Xa,ls.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",lt.prototype.listen=lt.prototype.K,ya=ls,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,ay=Ge}).apply(typeof du<"u"?du:typeof self<"u"?self:typeof window<"u"?window:{});const jm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new wd("@firebase/firestore");function fa(){return Ki.logLevel}function oe(i,...e){if(Ki.logLevel<=Ce.DEBUG){const t=e.map(Id);Ki.debug(`Firestore (${ho}): ${i}`,...t)}}function Sr(i,...e){if(Ki.logLevel<=Ce.ERROR){const t=e.map(Id);Ki.error(`Firestore (${ho}): ${i}`,...t)}}function ro(i,...e){if(Ki.logLevel<=Ce.WARN){const t=e.map(Id);Ki.warn(`Firestore (${ho}): ${i}`,...t)}}function Id(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(i="Unexpected state"){const e=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: `+i;throw Sr(e),new Error(e)}function Fe(i,e){i||me()}function we(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class u0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Lt.UNAUTHENTICATED)))}shutdown(){}}class c0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class h0{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Er,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Er)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string"),new dy(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Lt(e)}}class d0{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class f0{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new d0(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class p0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new p0(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=g0(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Oe(i,e){return i<e?-1:i>e?1:0}function io(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ft(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new ft(0,0))}static max(){return new ve(new ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t,s){t===void 0?t=0:t>e.length&&me(),s===void 0?s=e.length-t:s>e.length-t&&me(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Pa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pa?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ke extends Pa{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const y0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends Pa{construct(e,t,s){return new At(e,t,s)}static isValidIdentifier(e){return y0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new At(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ne($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ne($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ne($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(t)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ke.fromString(e))}static fromName(e){return new ue(Ke.fromString(e).popFirst(5))}static empty(){return new ue(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ke(e.slice()))}}function _0(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new ui(o,ue.empty(),e)}function v0(i){return new ui(i.readTime,i.key,-1)}class ui{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ui(ve.min(),ue.empty(),-1)}static max(){return new ui(ve.max(),ue.empty(),-1)}}function w0(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:Oe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==E0)throw i;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,s)=>{t(e)}))}static reject(e){return new K(((t,s)=>{s(e)}))}static waitFor(e){return new K(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=K.resolve(!1);for(const s of e)t=t.next((o=>o?K.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new K(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next((T=>{h[v]=T,++m,m===u&&s(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new K(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function I0(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ja(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sd.oe=-1;function $u(i){return i==null}function xu(i){return i===0&&1/i==-1/0}function S0(i){return typeof i=="number"&&Number.isInteger(i)&&!xu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function fo(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function py(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.comparator=e,this.root=t||St.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fu(this.root,e,this.comparator,!0)}}class fu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??St.RED,this.left=o??St.EMPTY,this.right=u??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new St(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return St.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,t,s,o,u){return this}insert(e,t,s){return new St(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bm(this.data.getIterator())}getIteratorFrom(e){return new Bm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Rt(this.comparator);return t.data=e,t}}class Bm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new Rt(At.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new my("Invalid base64 string: "+u):u}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const A0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(i){if(Fe(!!i),typeof i=="string"){let e=0;const t=A0.exec(i);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Gi(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Rd(i){const e=i.mapValue.fields.__previous_value__;return Ad(e)?Rd(e):e}function Ca(i){const e=ci(i.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,t,s,o,u,h,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v}}class ka{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ka("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ka&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu={mapValue:{}};function Qi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ad(i)?4:C0(i)?9007199254740991:P0(i)?10:11:me()}function Zn(i,e){if(i===e)return!0;const t=Qi(i);if(t!==Qi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ca(i).isEqual(Ca(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=ci(o.timestampValue),m=ci(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Gi(o.bytesValue).isEqual(Gi(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?xu(h)===xu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return io(i.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(zm(h)!==zm(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!Zn(h[g],m[g])))return!1;return!0})(i,e);default:return me()}}function xa(i,e){return(i.values||[]).find((t=>Zn(t,e)))!==void 0}function so(i,e){if(i===e)return 0;const t=Qi(i),s=Qi(e);if(t!==s)return Oe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=rt(u.integerValue||u.doubleValue),g=rt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return $m(i.timestampValue,e.timestampValue);case 4:return $m(Ca(i),Ca(e));case 5:return Oe(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Gi(u),g=Gi(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const T=Oe(m[v],g[v]);if(T!==0)return T}return Oe(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Oe(rt(u.latitude),rt(h.latitude));return m!==0?m:Oe(rt(u.longitude),rt(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return qm(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,g,v,T;const x=u.fields||{},L=h.fields||{},z=(m=x.value)===null||m===void 0?void 0:m.arrayValue,Y=(g=L.value)===null||g===void 0?void 0:g.arrayValue,X=Oe(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((T=Y==null?void 0:Y.values)===null||T===void 0?void 0:T.length)||0);return X!==0?X:qm(z,Y)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===pu.mapValue&&h===pu.mapValue)return 0;if(u===pu.mapValue)return 1;if(h===pu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},T=Object.keys(v);g.sort(),T.sort();for(let x=0;x<g.length&&x<T.length;++x){const L=Oe(g[x],T[x]);if(L!==0)return L;const z=so(m[g[x]],v[T[x]]);if(z!==0)return z}return Oe(g.length,T.length)})(i.mapValue,e.mapValue);default:throw me()}}function $m(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const t=ci(i),s=ci(e),o=Oe(t.seconds,s.seconds);return o!==0?o:Oe(t.nanos,s.nanos)}function qm(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=so(t[o],s[o]);if(u)return u}return Oe(t.length,s.length)}function oo(i){return ed(i)}function ed(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=ci(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Gi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return ue.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=ed(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${ed(t.fields[h])}`;return o+"}"})(i.mapValue):me()}function Wm(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function td(i){return!!i&&"integerValue"in i}function Pd(i){return!!i&&"arrayValue"in i}function Hm(i){return!!i&&"nullValue"in i}function Km(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function vu(i){return!!i&&"mapValue"in i}function P0(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ea(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return fo(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ea(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ea(i.arrayValue.values[t]);return e}return Object.assign({},i)}function C0(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!vu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ea(t)}setAll(e){let t=At.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ea(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());vu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];vu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){fo(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new yn(Ea(this.value))}}function gy(i){const e=[];return fo(i.fields,((t,s)=>{const o=new At([t]);if(vu(s)){const u=gy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,ve.min(),ve.min(),ve.min(),yn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,ve.min(),ve.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,ve.min(),ve.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t){this.position=e,this.inclusive=t}}function Gm(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=so(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Zn(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t="asc"){this.field=e,this.dir=t}}function k0(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{}class at extends yy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new N0(e,t,s):t==="array-contains"?new O0(e,s):t==="in"?new L0(e,s):t==="not-in"?new M0(e,s):t==="array-contains-any"?new b0(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new D0(e,s):new V0(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(so(t,this.value)):t!==null&&Qi(this.value)===Qi(t)&&this.matchesComparison(so(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends yy{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new On(e,t)}matches(e){return _y(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _y(i){return i.op==="and"}function vy(i){return x0(i)&&_y(i)}function x0(i){for(const e of i.filters)if(e instanceof On)return!1;return!0}function nd(i){if(i instanceof at)return i.field.canonicalString()+i.op.toString()+oo(i.value);if(vy(i))return i.filters.map((e=>nd(e))).join(",");{const e=i.filters.map((t=>nd(t))).join(",");return`${i.op}(${e})`}}function wy(i,e){return i instanceof at?(function(s,o){return o instanceof at&&s.op===o.op&&s.field.isEqual(o.field)&&Zn(s.value,o.value)})(i,e):i instanceof On?(function(s,o){return o instanceof On&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&wy(h,o.filters[m])),!0):!1})(i,e):void me()}function Ey(i){return i instanceof at?(function(t){return`${t.field.canonicalString()} ${t.op} ${oo(t.value)}`})(i):i instanceof On?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ey).join(" ,")+"}"})(i):"Filter"}class N0 extends at{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class D0 extends at{constructor(e,t){super(e,"in",t),this.keys=Ty("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class V0 extends at{constructor(e,t){super(e,"not-in",t),this.keys=Ty("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ty(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>ue.fromName(s.referenceValue)))}class O0 extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Pd(t)&&xa(t.arrayValue,this.value)}}class L0 extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xa(this.value.arrayValue,t)}}class M0 extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!xa(this.value.arrayValue,t)}}class b0 extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Pd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>xa(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function Ym(i,e=null,t=[],s=[],o=null,u=null,h=null){return new F0(i,e,t,s,o,u,h)}function Cd(i){const e=we(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>nd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),$u(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>oo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>oo(s))).join(",")),e.ue=t}return e.ue}function kd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!k0(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!wy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Qm(i.startAt,e.startAt)&&Qm(i.endAt,e.endAt)}function rd(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function U0(i,e,t,s,o,u,h,m){return new po(i,e,t,s,o,u,h,m)}function xd(i){return new po(i)}function Xm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Iy(i){return i.collectionGroup!==null}function Ta(i){const e=we(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Rt(At.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Na(u,s))})),t.has(At.keyField().canonicalString())||e.ce.push(new Na(At.keyField(),s))}return e.ce}function Gn(i){const e=we(i);return e.le||(e.le=j0(e,Ta(i))),e.le}function j0(i,e){if(i.limitType==="F")return Ym(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Na(o.field,u)}));const t=i.endAt?new Nu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Nu(i.startAt.position,i.startAt.inclusive):null;return Ym(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function id(i,e){const t=i.filters.concat([e]);return new po(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function sd(i,e,t){return new po(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function qu(i,e){return kd(Gn(i),Gn(e))&&i.limitType===e.limitType}function Sy(i){return`${Cd(Gn(i))}|lt:${i.limitType}`}function Gs(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Ey(o))).join(", ")}]`),$u(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>oo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>oo(o))).join(",")),`Target(${s})`})(Gn(i))}; limitType=${i.limitType})`}function Wu(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Ta(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const v=Gm(h,m,g);return h.inclusive?v<=0:v<0})(s.startAt,Ta(s),o)||s.endAt&&!(function(h,m,g){const v=Gm(h,m,g);return h.inclusive?v>=0:v>0})(s.endAt,Ta(s),o))})(i,e)}function z0(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Ay(i){return(e,t)=>{let s=!1;for(const o of Ta(i)){const u=B0(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function B0(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?so(g,v):me()})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){fo(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return py(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=new Je(ue.comparator);function Ar(){return $0}const Ry=new Je(ue.comparator);function _a(...i){let e=Ry;for(const t of i)e=e.insert(t.key,t);return e}function Py(i){let e=Ry;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function qi(){return Ia()}function Cy(){return Ia()}function Ia(){return new mo((i=>i.toString()),((i,e)=>i.isEqual(e)))}const q0=new Je(ue.comparator),W0=new Rt(ue.comparator);function Re(...i){let e=W0;for(const t of i)e=e.add(t);return e}const H0=new Rt(Oe);function K0(){return H0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xu(e)?"-0":e}}function ky(i){return{integerValue:""+i}}function G0(i,e){return S0(e)?ky(e):Nd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this._=void 0}}function Q0(i,e,t){return i instanceof Da?(function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ad(u)&&(u=Rd(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}})(t,e):i instanceof Va?Ny(i,e):i instanceof Oa?Dy(i,e):(function(o,u){const h=xy(o,u),m=Jm(h)+Jm(o.Pe);return td(h)&&td(o.Pe)?ky(m):Nd(o.serializer,m)})(i,e)}function Y0(i,e,t){return i instanceof Va?Ny(i,e):i instanceof Oa?Dy(i,e):t}function xy(i,e){return i instanceof Du?(function(s){return td(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Da extends Hu{}class Va extends Hu{constructor(e){super(),this.elements=e}}function Ny(i,e){const t=Vy(e);for(const s of i.elements)t.some((o=>Zn(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Oa extends Hu{constructor(e){super(),this.elements=e}}function Dy(i,e){let t=Vy(e);for(const s of i.elements)t=t.filter((o=>!Zn(o,s)));return{arrayValue:{values:t}}}class Du extends Hu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Jm(i){return rt(i.integerValue||i.doubleValue)}function Vy(i){return Pd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t){this.field=e,this.transform=t}}function J0(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Va&&o instanceof Va||s instanceof Oa&&o instanceof Oa?io(s.elements,o.elements,Zn):s instanceof Du&&o instanceof Du?Zn(s.Pe,o.Pe):s instanceof Da&&o instanceof Da})(i.transform,e.transform)}class Z0{constructor(e,t){this.version=e,this.transformResults=t}}class Qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Ku{}function Oy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new My(i.key,Qn.none()):new za(i.key,i.data,Qn.none());{const t=i.data,s=yn.empty();let o=new Rt(At.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Ji(i.key,s,new Vn(o.toArray()),Qn.none())}}function eT(i,e,t){i instanceof za?(function(o,u,h){const m=o.value.clone(),g=eg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Ji?(function(o,u,h){if(!wu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=eg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Ly(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Sa(i,e,t,s){return i instanceof za?(function(u,h,m,g){if(!wu(u.precondition,h))return m;const v=u.value.clone(),T=tg(u.fieldTransforms,g,h);return v.setAll(T),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof Ji?(function(u,h,m,g){if(!wu(u.precondition,h))return m;const v=tg(u.fieldTransforms,g,h),T=h.data;return T.setAll(Ly(u)),T.setAll(v),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((x=>x.field)))})(i,e,t,s):(function(u,h,m){return wu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function tT(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=xy(s.transform,o||null);u!=null&&(t===null&&(t=yn.empty()),t.set(s.field,u))}return t||null}function Zm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&io(s,o,((u,h)=>J0(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class za extends Ku{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ji extends Ku{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Ly(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function eg(i,e,t){const s=new Map;Fe(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,Y0(h,m,t[o]))}return s}function tg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,Q0(u,h,e))}return s}class My extends Ku{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nT extends Ku{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&eT(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Sa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Sa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Cy();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=Oy(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Re())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,((t,s)=>Zm(t,s)))&&io(this.baseMutations,e.baseMutations,((t,s)=>Zm(t,s)))}}class Dd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length);let o=(function(){return q0})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Dd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Ne;function oT(i){switch(i){default:return me();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function by(i){if(i===void 0)return Sr("GRPC error has no .code"),$.UNKNOWN;switch(i){case ot.OK:return $.OK;case ot.CANCELLED:return $.CANCELLED;case ot.UNKNOWN:return $.UNKNOWN;case ot.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ot.INTERNAL:return $.INTERNAL;case ot.UNAVAILABLE:return $.UNAVAILABLE;case ot.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ot.NOT_FOUND:return $.NOT_FOUND;case ot.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ot.ABORTED:return $.ABORTED;case ot.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ot.DATA_LOSS:return $.DATA_LOSS;default:return me()}}(Ne=ot||(ot={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Wi([4294967295,4294967295],0);function ng(i){const e=aT().encode(i),t=new oy;return t.update(e),new Uint8Array(t.digest())}function rg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Wi([t,s],0),new Wi([o,u],0)]}class Vd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new va(`Invalid padding: ${t}`);if(s<0)throw new va(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new va(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new va(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Wi.fromNumber(this.Ie)}Ee(e,t,s){let o=e.add(t.multiply(Wi.fromNumber(s)));return o.compare(lT)===1&&(o=new Wi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ng(e),[s,o]=rg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Vd(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.Ie===0)return;const t=ng(e),[s,o]=rg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ba.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Gu(ve.min(),o,new Je(Oe),Ar(),Re())}}class Ba{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ba(s,t,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class Fy{constructor(e,t){this.targetId=e,this.me=t}}class Uy{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class ig{constructor(){this.fe=0,this.ge=og(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Re(),t=Re(),s=Re();return this.ge.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:me()}})),new Ba(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=og()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ar(),this.qe=sg(),this.Qe=new Je(Oe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:me()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((s,o)=>{this.ze(o)&&t(o)}))}He(e){const t=e.targetId,s=e.me.count,o=this.Je(t);if(o){const u=o.target;if(rd(u))if(s===0){const h=new ue(u.path);this.Ue(t,h,Mt.newNoDocument(h,ve.min()))}else Fe(s===1);else{const h=this.Ye(t);if(h!==s){const m=this.Ze(e),g=m?this.Xe(m,e,h):1;if(g!==0){this.je(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,v)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Gi(s).toUint8Array()}catch(g){if(g instanceof my)return ro("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Vd(h,o,u)}catch(g){return ro(g instanceof va?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Ie===0?null:m}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Le.tt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Ue(t,u,null),o++)})),o}rt(e){const t=new Map;this.Be.forEach(((u,h)=>{const m=this.Je(h);if(m){if(u.current&&rd(m.target)){const g=new ue(m.target.path);this.ke.get(g)!==null||this.it(h,g)||this.Ue(h,g,Mt.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}}));let s=Re();this.qe.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const v=this.Je(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ke.forEach(((u,h)=>h.setReadTime(e)));const o=new Gu(e,t,this.Qe,this.ke,s);return this.ke=Ar(),this.qe=sg(),this.Qe=new Je(Oe),o}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ig,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Rt(Oe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ig),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function sg(){return new Je(ue.comparator)}function og(){return new Je(ue.comparator)}const cT={asc:"ASCENDING",desc:"DESCENDING"},hT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dT={and:"AND",or:"OR"};class fT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function od(i,e){return i.useProto3Json||$u(e)?e:{value:e}}function Vu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jy(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function pT(i,e){return Vu(i,e.toTimestamp())}function Yn(i){return Fe(!!i),ve.fromTimestamp((function(t){const s=ci(t);return new ft(s.seconds,s.nanos)})(i))}function Od(i,e){return ad(i,e).canonicalString()}function ad(i,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function zy(i){const e=Ke.fromString(i);return Fe(Hy(e)),e}function ld(i,e){return Od(i.databaseId,e.path)}function zh(i,e){const t=zy(e);if(t.get(1)!==i.databaseId.projectId)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue($y(t))}function By(i,e){return Od(i.databaseId,e)}function mT(i){const e=zy(i);return e.length===4?Ke.emptyPath():$y(e)}function ud(i){return new Ke(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function $y(i){return Fe(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function ag(i,e,t){return{name:ld(i,e),fields:t.value.mapValue.fields}}function gT(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:me()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,T){return v.useProto3Json?(Fe(T===void 0||typeof T=="string"),Pt.fromBase64String(T||"")):(Fe(T===void 0||T instanceof Buffer||T instanceof Uint8Array),Pt.fromUint8Array(T||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const T=v.code===void 0?$.UNKNOWN:by(v.code);return new ne(T,v.message||"")})(h);t=new Uy(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=zh(i,s.document.name),u=Yn(s.document.updateTime),h=s.document.createTime?Yn(s.document.createTime):ve.min(),m=new yn({mapValue:{fields:s.document.fields}}),g=Mt.newFoundDocument(o,u,h,m),v=s.targetIds||[],T=s.removedTargetIds||[];t=new Eu(v,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=zh(i,s.document),u=s.readTime?Yn(s.readTime):ve.min(),h=Mt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Eu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=zh(i,s.document),u=s.removedTargetIds||[];t=new Eu([],u,o,null)}else{if(!("filter"in e))return me();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new sT(o,u),m=s.targetId;t=new Fy(m,h)}}return t}function yT(i,e){let t;if(e instanceof za)t={update:ag(i,e.key,e.value)};else if(e instanceof My)t={delete:ld(i,e.key)};else if(e instanceof Ji)t={update:ag(i,e.key,e.data),updateMask:RT(e.fieldMask)};else{if(!(e instanceof nT))return me();t={verify:ld(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Da)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Va)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Oa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Du)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw me()})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:pT(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:me()})(i,e.precondition)),t}function _T(i,e){return i&&i.length>0?(Fe(e!==void 0),i.map((t=>(function(o,u){let h=o.updateTime?Yn(o.updateTime):Yn(u);return h.isEqual(ve.min())&&(h=Yn(u)),new Z0(h,o.transformResults||[])})(t,e)))):[]}function vT(i,e){return{documents:[By(i,e.path)]}}function wT(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=By(i,o);const u=(function(v){if(v.length!==0)return Wy(On.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((T=>(function(L){return{field:Qs(L.field),direction:IT(L.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=od(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{_t:t,parent:o}}function ET(i){let e=mT(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(x){const L=qy(x);return L instanceof On&&vy(L)?L.getFilters():[L]})(t.where));let h=[];t.orderBy&&(h=(function(x){return x.map((L=>(function(Y){return new Na(Ys(Y.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(L)))})(t.orderBy));let m=null;t.limit&&(m=(function(x){let L;return L=typeof x=="object"?x.value:x,$u(L)?null:L})(t.limit));let g=null;t.startAt&&(g=(function(x){const L=!!x.before,z=x.values||[];return new Nu(z,L)})(t.startAt));let v=null;return t.endAt&&(v=(function(x){const L=!x.before,z=x.values||[];return new Nu(z,L)})(t.endAt)),U0(e,o,h,u,m,"F",g,v)}function TT(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qy(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ys(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ys(t.unaryFilter.field);return at.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ys(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ys(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});default:return me()}})(i):i.fieldFilter!==void 0?(function(t){return at.create(Ys(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return On.create(t.compositeFilter.filters.map((s=>qy(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me()}})(t.compositeFilter.op))})(i):me()}function IT(i){return cT[i]}function ST(i){return hT[i]}function AT(i){return dT[i]}function Qs(i){return{fieldPath:i.canonicalString()}}function Ys(i){return At.fromServerFormat(i.fieldPath)}function Wy(i){return i instanceof at?(function(t){if(t.op==="=="){if(Km(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NAN"}};if(Hm(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Km(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NAN"}};if(Hm(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(t.field),op:ST(t.op),value:t.value}}})(i):i instanceof On?(function(t){const s=t.getFilters().map((o=>Wy(o)));return s.length===1?s[0]:{compositeFilter:{op:AT(t.op),filters:s}}})(i):me()}function RT(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Hy(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,s,o,u=ve.min(),h=ve.min(),m=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.ct=e}}function CT(i){const e=ET({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?sd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(){this.un=new xT}addToCollectionParentIndex(e,t){return this.un.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(ui.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(ui.min())}updateCollectionGroup(e,t,s){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class xT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Rt(Ke.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Rt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ao(0)}static kn(){return new ao(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.changes=new mo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?K.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Sa(s.mutation,o,Vn.empty(),ft.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Re()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Re()){const o=qi();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=_a();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=qi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Re())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Ar();const h=Ia(),m=(function(){return Ia()})();return t.forEach(((g,v)=>{const T=s.get(v.key);o.has(v.key)&&(T===void 0||T.mutation instanceof Ji)?u=u.insert(v.key,v):T!==void 0?(h.set(v.key,T.mutation.getFieldMask()),Sa(T.mutation,v,T.mutation.getFieldMask(),ft.now())):h.set(v.key,Vn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((v,T)=>h.set(v,T))),t.forEach(((v,T)=>{var x;return m.set(v,new DT(T,(x=h.get(v))!==null&&x!==void 0?x:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Ia();let o=new Je(((h,m)=>h-m)),u=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let T=s.get(g)||Vn.empty();T=m.applyToLocalView(v,T),s.set(g,T);const x=(o.get(m.batchId)||Re()).add(g);o=o.insert(m.batchId,x)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,T=g.value,x=Cy();T.forEach((L=>{if(!u.has(L)){const z=Oy(t.get(L),s.get(L));z!==null&&x.set(L,z),u=u.add(L)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,x))}return K.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Iy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):K.resolve(qi());let m=-1,g=u;return h.next((v=>K.forEach(v,((T,x)=>(m<x.largestBatchId&&(m=x.largestBatchId),u.get(T)?K.resolve():this.remoteDocumentCache.getEntry(e,T).next((L=>{g=g.insert(T,L)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,g,v,Re()))).next((T=>({batchId:m,changes:Py(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((s=>{let o=_a();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=_a();return this.indexManager.getCollectionParents(e,u).next((m=>K.forEach(m,(g=>{const v=(function(x,L){return new po(L,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((T=>{T.forEach(((x,L)=>{h=h.insert(x,L)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,v)=>{const T=v.getKey();h.get(T)===null&&(h=h.insert(T,Mt.newInvalidDocument(T)))}));let m=_a();return h.forEach(((g,v)=>{const T=u.get(g);T!==void 0&&Sa(T.mutation,v,Vn.empty(),ft.now()),Wu(t,v)&&(m=m.insert(g,v))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return K.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Yn(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,(function(o){return{name:o.name,query:CT(o.bundledQuery),readTime:Yn(o.readTime)}})(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(){this.overlays=new Je(ue.comparator),this.Ir=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const s=qi();return K.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.ht(e,t,u)})),K.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Ir.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Ir.delete(s)),K.resolve()}getOverlaysForCollection(e,t,s){const o=qi(),u=t.length+1,h=new ue(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je(((v,T)=>v-T));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let T=u.get(v.largestBatchId);T===null&&(T=qi(),u=u.insert(v.largestBatchId,T)),T.set(v.getKey(),v)}}const m=qi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,T)=>m.set(v,T))),!(m.size()>=o)););return K.resolve(m)}ht(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(s.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new iT(t,s));let u=this.Ir.get(t);u===void 0&&(u=Re(),this.Ir.set(t,u)),this.Ir.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.Tr=new Rt(vt.Er),this.dr=new Rt(vt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new vt(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Vr(new vt(e,t))}mr(e,t){e.forEach((s=>this.removeReference(s,t)))}gr(e){const t=new ue(new Ke([])),s=new vt(t,e),o=new vt(t,e+1),u=[];return this.dr.forEachInRange([s,o],(h=>{this.Vr(h),u.push(h.key)})),u}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ue(new Ke([])),s=new vt(t,e),o=new vt(t,e+1);let u=Re();return this.dr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new vt(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class vt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ue.comparator(e.key,t.key)||Oe(e.wr,t.wr)}static Ar(e,t){return Oe(e.wr,t.wr)||ue.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Rt(vt.Er)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new rT(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.br=this.br.add(new vt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.vr(s),u=o<0?0:o;return K.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new vt(t,0),o=new vt(t,Number.POSITIVE_INFINITY),u=[];return this.br.forEachInRange([s,o],(h=>{const m=this.Dr(h.wr);u.push(m)})),K.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Rt(Oe);return t.forEach((o=>{const u=new vt(o,0),h=new vt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([u,h],(m=>{s=s.add(m.wr)}))})),K.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new vt(new ue(u),0);let m=new Rt(Oe);return this.br.forEachWhile((g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.wr)),!0)}),h),K.resolve(this.Cr(m))}Cr(e){const t=[];return e.forEach((s=>{const o=this.Dr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return K.forEach(t.mutations,(o=>{const u=new vt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.br=s}))}On(e){}containsKey(e,t){const s=new vt(t,0),o=this.br.firstAfterOrEqual(s);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.Mr=e,this.docs=(function(){return new Je(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return K.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=Ar();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mt.newInvalidDocument(o))})),K.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ar();const h=t.path,m=new ue(h.child("")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:T}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||w0(v0(T),s)<=0||(o.has(T.key)||Wu(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return K.resolve(u)}getAllFromCollectionGroup(e,t,s,o){me()}Or(e,t){return K.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new UT(this)}getSize(e){return K.resolve(this.size)}}class UT extends NT{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(s)})),K.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.persistence=e,this.Nr=new mo((t=>Cd(t)),kd),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ld,this.targetCount=0,this.kr=ao.Bn()}forEachTarget(e,t){return this.Nr.forEach(((s,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),K.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ao(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Kn(t),K.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Nr.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Nr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),K.waitFor(u).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return K.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),K.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),K.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return K.resolve(s)}containsKey(e,t){return K.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Sd(0),this.Kr=!1,this.Kr=!0,this.$r=new MT,this.referenceDelegate=e(this),this.Ur=new jT(this),this.indexManager=new kT,this.remoteDocumentCache=(function(o){return new FT(o)})((s=>this.referenceDelegate.Wr(s))),this.serializer=new PT(t),this.Gr=new OT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new LT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new bT(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new BT(this.Qr.next());return this.referenceDelegate.zr(),s(o).next((u=>this.referenceDelegate.jr(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Hr(e,t){return K.or(Object.values(this.qr).map((s=>()=>s.containsKey(e,t))))}}class BT extends T0{constructor(e){super(),this.currentSequenceNumber=e}}class Md{constructor(e){this.persistence=e,this.Jr=new Ld,this.Yr=null}static Zr(e){return new Md(e)}get Xr(){if(this.Yr)return this.Yr;throw me()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),K.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),K.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((o=>this.Xr.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.Xr.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Xr,(s=>{const o=ue.fromPath(s);return this.ei(e,o).next((u=>{u||t.removeEntry(o,ve.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return K.or([()=>K.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=o}static Wi(e,t){let s=Re(),o=Re();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new bd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return qw()?8:I0(bt())>0?6:4})()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Yi(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.Zi(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new $T;return this.Xi(e,t,h).next((m=>{if(u.result=m,this.zi)return this.es(e,t,h,m.size)}))})).next((()=>u.result))}es(e,t,s,o){return s.documentReadCount<this.ji?(fa()<=Ce.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Gs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),K.resolve()):(fa()<=Ce.DEBUG&&oe("QueryEngine","Query:",Gs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Hi*o?(fa()<=Ce.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Gs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(t))):K.resolve())}Yi(e,t){if(Xm(t))return K.resolve(null);let s=Gn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=sd(t,null,"F"),s=Gn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Re(...u);return this.Ji.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const v=this.ts(t,m);return this.ns(t,v,h,g.readTime)?this.Yi(e,sd(t,null,"F")):this.rs(e,v,t,g)}))))})))))}Zi(e,t,s,o){return Xm(t)||o.isEqual(ve.min())?K.resolve(null):this.Ji.getDocuments(e,s).next((u=>{const h=this.ts(t,u);return this.ns(t,h,s,o)?K.resolve(null):(fa()<=Ce.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Gs(t)),this.rs(e,h,t,_0(o,-1)).next((m=>m)))}))}ts(e,t){let s=new Rt(Ay(e));return t.forEach(((o,u)=>{Wu(e,u)&&(s=s.add(u))})),s}ns(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Xi(e,t,s){return fa()<=Ce.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Gs(t)),this.Ji.getDocumentsMatchingQuery(e,t,ui.min(),s)}rs(e,t,s,o){return this.Ji.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,t,s,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new Je(Oe),this._s=new mo((u=>Cd(u)),kd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function HT(i,e,t,s){return new WT(i,e,t,s)}async function Ky(i,e){const t=we(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.ls(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Re();for(const v of o){h.push(v.batchId);for(const T of v.mutations)g=g.add(T.key)}for(const v of u){m.push(v.batchId);for(const T of v.mutations)g=g.add(T.key)}return t.localDocuments.getDocuments(s,g).next((v=>({hs:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function KT(i,e){const t=we(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.cs.newChangeBuffer({trackRemovals:!0});return(function(m,g,v,T){const x=v.batch,L=x.keys();let z=K.resolve();return L.forEach((Y=>{z=z.next((()=>T.getEntry(g,Y))).next((X=>{const W=v.docVersions.get(Y);Fe(W!==null),X.version.compareTo(W)<0&&(x.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),T.addEntry(X)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(g,x)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Re();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Gy(i){const e=we(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function GT(i,e){const t=we(i),s=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const m=[];e.targetChanges.forEach(((T,x)=>{const L=o.get(x);if(!L)return;m.push(t.Ur.removeMatchingKeys(u,T.removedDocuments,x).next((()=>t.Ur.addMatchingKeys(u,T.addedDocuments,x))));let z=L.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(x)!==null?z=z.withResumeToken(Pt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):T.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(T.resumeToken,s)),o=o.insert(x,z),(function(X,W,ge){return X.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=3e8?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0})(L,z,T)&&m.push(t.Ur.updateTargetData(u,z))}));let g=Ar(),v=Re();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(QT(u,h,e.documentUpdates).next((T=>{g=T.Ps,v=T.Is}))),!s.isEqual(ve.min())){const T=t.Ur.getLastRemoteSnapshotVersion(u).next((x=>t.Ur.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return K.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,v))).next((()=>g))})).then((u=>(t.os=o,u)))}function QT(i,e,t){let s=Re(),o=Re();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Ar();return t.forEach(((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):oe("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)})),{Ps:h,Is:o}}))}function YT(i,e){const t=we(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function XT(i,e){const t=we(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Ur.getTargetData(s,e).next((u=>u?(o=u,K.resolve(o)):t.Ur.allocateTargetId(s).next((h=>(o=new ii(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.os.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s}))}async function cd(i,e,t){const s=we(i),o=s.os.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ja(h))throw h;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.os=s.os.remove(e),s._s.delete(o.target)}function lg(i,e,t){const s=we(i);let o=ve.min(),u=Re();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,T){const x=we(g),L=x._s.get(T);return L!==void 0?K.resolve(x.os.get(L)):x.Ur.getTargetData(v,T)})(s,h,Gn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.ss.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?u:Re()))).next((m=>(JT(s,z0(e),m),{documents:m,Ts:u})))))}function JT(i,e,t){let s=i.us.get(e)||ve.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.us.set(e,s)}class ug{constructor(){this.activeTargetIds=K0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZT{constructor(){this.so=new ug,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ug,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu=null;function Bh(){return mu===null?mu=(function(){return 268435456+Math.round(2147483648*Math.random())})():mu++,"0x"+mu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="WebChannelConnection";class rI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${o}/databases/${u}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}get Fo(){return!1}Mo(t,s,o,u,h){const m=Bh(),g=this.xo(t,s.toUriEncodedString());oe("RestConnection",`Sending RPC '${t}' ${m}:`,g,o);const v={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(v,u,h),this.No(t,g,v,o).then((T=>(oe("RestConnection",`Received RPC '${t}' ${m}: `,T),T)),(T=>{throw ro("RestConnection",`RPC '${t}' ${m} failed with error: `,T,"url: ",g,"request:",o),T}))}Lo(t,s,o,u,h,m){return this.Mo(t,s,o,u,h)}Oo(t,s,o){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ho})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach(((u,h)=>t[h]=u)),o&&o.headers.forEach(((u,h)=>t[h]=u))}xo(t,s){const o=tI[t];return`${this.Do}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,o){const u=Bh();return new Promise(((h,m)=>{const g=new ay;g.setWithCredentials(!0),g.listenOnce(ly.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case _u.NO_ERROR:const T=g.getResponseJson();oe(Ot,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(T)),h(T);break;case _u.TIMEOUT:oe(Ot,`RPC '${e}' ${u} timed out`),m(new ne($.DEADLINE_EXCEEDED,"Request time out"));break;case _u.HTTP_ERROR:const x=g.getStatus();if(oe(Ot,`RPC '${e}' ${u} failed with status:`,x,"response text:",g.getResponseText()),x>0){let L=g.getResponseJson();Array.isArray(L)&&(L=L[0]);const z=L==null?void 0:L.error;if(z&&z.status&&z.message){const Y=(function(W){const ge=W.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ge)>=0?ge:$.UNKNOWN})(z.status);m(new ne(Y,z.message))}else m(new ne($.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ne($.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{oe(Ot,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);oe(Ot,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)}))}Bo(e,t,s){const o=Bh(),u=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=hy(),m=cy(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const T=u.join("");oe(Ot,`Creating RPC '${e}' stream ${o}: ${T}`,g);const x=h.createWebChannel(T,g);let L=!1,z=!1;const Y=new nI({Io:W=>{z?oe(Ot,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(L||(oe(Ot,`Opening RPC '${e}' stream ${o} transport.`),x.open(),L=!0),oe(Ot,`RPC '${e}' stream ${o} sending:`,W),x.send(W))},To:()=>x.close()}),X=(W,ge,ye)=>{W.listen(ge,(_e=>{try{ye(_e)}catch(Ee){setTimeout((()=>{throw Ee}),0)}}))};return X(x,ya.EventType.OPEN,(()=>{z||(oe(Ot,`RPC '${e}' stream ${o} transport opened.`),Y.yo())})),X(x,ya.EventType.CLOSE,(()=>{z||(z=!0,oe(Ot,`RPC '${e}' stream ${o} transport closed`),Y.So())})),X(x,ya.EventType.ERROR,(W=>{z||(z=!0,ro(Ot,`RPC '${e}' stream ${o} transport errored:`,W),Y.So(new ne($.UNAVAILABLE,"The operation could not be completed")))})),X(x,ya.EventType.MESSAGE,(W=>{var ge;if(!z){const ye=W.data[0];Fe(!!ye);const _e=ye,Ee=_e.error||((ge=_e[0])===null||ge===void 0?void 0:ge.error);if(Ee){oe(Ot,`RPC '${e}' stream ${o} received error:`,Ee);const ze=Ee.status;let Te=(function(S){const P=ot[S];if(P!==void 0)return by(P)})(ze),k=Ee.message;Te===void 0&&(Te=$.INTERNAL,k="Unknown error status: "+ze+" with message "+Ee.message),z=!0,Y.So(new ne(Te,k)),x.close()}else oe(Ot,`RPC '${e}' stream ${o} received:`,ye),Y.bo(ye)}})),X(m,uy.STAT_EVENT,(W=>{W.stat===Zh.PROXY?oe(Ot,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===Zh.NOPROXY&&oe(Ot,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Y.wo()}),0),Y}}function $h(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(i){return new fT(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,t,s=1e3,o=1.5,u=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=o,this.Qo=u,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t,s,o,u,h,m,g){this.ui=e,this.Ho=s,this.Jo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Qy(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Sr(t.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.Yo===t&&this.P_(s,o)}),(s=>{e((()=>{const o=new ne($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(o)}))}))}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{s((()=>this.listener.Eo()))})),this.stream.Ro((()=>{s((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((o=>{s((()=>this.I_(o)))})),this.stream.onMessage((o=>{s((()=>++this.e_==1?this.E_(o):this.onNext(o)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iI extends Yy{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=gT(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ve.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?Yn(h.readTime):ve.min()})(e);return this.listener.d_(t,s)}A_(e){const t={};t.database=ud(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=rd(g)?{documents:vT(u,g)}:{query:wT(u,g)._t},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=jy(u,h.resumeToken);const v=od(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(ve.min())>0){m.readTime=Vu(u,h.snapshotVersion.toTimestamp());const v=od(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=TT(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){const t={};t.database=ud(this.serializer),t.removeTarget=e,this.a_(t)}}class sI extends Yy{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=_T(e.writeResults,e.commitTime),s=Yn(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=ud(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>yT(this.serializer,s)))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Mo(e,ad(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ne($.UNKNOWN,u.toString())}))}Lo(e,t,s,o,u){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Lo(e,ad(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ne($.UNKNOWN,h.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class aI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Sr(t),this.D_=!1):oe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=u,this.k_._o((h=>{s.enqueueAndForget((async()=>{Zi(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await(async function(g){const v=we(g);v.L_.add(4),await $a(v),v.q_.set("Unknown"),v.L_.delete(4),await Yu(v)})(this))}))})),this.q_=new aI(s,o)}}async function Yu(i){if(Zi(i))for(const e of i.B_)await e(!0)}async function $a(i){for(const e of i.B_)await e(!1)}function Xy(i,e){const t=we(i);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),zd(t)?jd(t):go(t).r_()&&Ud(t,e))}function Fd(i,e){const t=we(i),s=go(t);t.N_.delete(e),s.r_()&&Jy(t,e),t.N_.size===0&&(s.r_()?s.o_():Zi(t)&&t.q_.set("Unknown"))}function Ud(i,e){if(i.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}go(i).A_(e)}function Jy(i,e){i.Q_.xe(e),go(i).R_(e)}function jd(i){i.Q_=new uT({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>i.N_.get(e)||null,tt:()=>i.datastore.serializer.databaseId}),go(i).start(),i.q_.v_()}function zd(i){return Zi(i)&&!go(i).n_()&&i.N_.size>0}function Zi(i){return we(i).L_.size===0}function Zy(i){i.Q_=void 0}async function uI(i){i.q_.set("Online")}async function cI(i){i.N_.forEach(((e,t)=>{Ud(i,e)}))}async function hI(i,e){Zy(i),zd(i)?(i.q_.M_(e),jd(i)):i.q_.set("Unknown")}async function dI(i,e,t){if(i.q_.set("Online"),e instanceof Uy&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.N_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.N_.delete(m),o.Q_.removeTarget(m))})(i,e)}catch(s){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ou(i,s)}else if(e instanceof Eu?i.Q_.Ke(e):e instanceof Fy?i.Q_.He(e):i.Q_.We(e),!t.isEqual(ve.min()))try{const s=await Gy(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Q_.rt(h);return m.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.N_.get(v);T&&u.N_.set(v,T.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,v)=>{const T=u.N_.get(g);if(!T)return;u.N_.set(g,T.withResumeToken(Pt.EMPTY_BYTE_STRING,T.snapshotVersion)),Jy(u,g);const x=new ii(T.target,g,v,T.sequenceNumber);Ud(u,x)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){oe("RemoteStore","Failed to raise snapshot:",s),await Ou(i,s)}}async function Ou(i,e,t){if(!ja(e))throw e;i.L_.add(1),await $a(i),i.q_.set("Offline"),t||(t=()=>Gy(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{oe("RemoteStore","Retrying IndexedDB access"),await t(),i.L_.delete(1),await Yu(i)}))}function e_(i,e){return e().catch((t=>Ou(i,t,e)))}async function Xu(i){const e=we(i),t=hi(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;fI(e);)try{const o=await YT(e.localStore,s);if(o===null){e.O_.length===0&&t.o_();break}s=o.batchId,pI(e,o)}catch(o){await Ou(e,o)}t_(e)&&n_(e)}function fI(i){return Zi(i)&&i.O_.length<10}function pI(i,e){i.O_.push(e);const t=hi(i);t.r_()&&t.V_&&t.m_(e.mutations)}function t_(i){return Zi(i)&&!hi(i).n_()&&i.O_.length>0}function n_(i){hi(i).start()}async function mI(i){hi(i).p_()}async function gI(i){const e=hi(i);for(const t of i.O_)e.m_(t.mutations)}async function yI(i,e,t){const s=i.O_.shift(),o=Dd.from(s,e,t);await e_(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Xu(i)}async function _I(i,e){e&&hi(i).V_&&await(async function(s,o){if((function(h){return oT(h)&&h!==$.ABORTED})(o.code)){const u=s.O_.shift();hi(s).s_(),await e_(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Xu(s)}})(i,e),t_(i)&&n_(i)}async function hg(i,e){const t=we(i);t.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const s=Zi(t);t.L_.add(3),await $a(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Yu(t)}async function vI(i,e){const t=we(i);e?(t.L_.delete(2),await Yu(t)):e||(t.L_.add(2),await $a(t),t.q_.set("Unknown"))}function go(i){return i.K_||(i.K_=(function(t,s,o){const u=we(t);return u.w_(),new iI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Eo:uI.bind(null,i),Ro:cI.bind(null,i),mo:hI.bind(null,i),d_:dI.bind(null,i)}),i.B_.push((async e=>{e?(i.K_.s_(),zd(i)?jd(i):i.q_.set("Unknown")):(await i.K_.stop(),Zy(i))}))),i.K_}function hi(i){return i.U_||(i.U_=(function(t,s,o){const u=we(t);return u.w_(),new sI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:mI.bind(null,i),mo:_I.bind(null,i),f_:gI.bind(null,i),g_:yI.bind(null,i)}),i.B_.push((async e=>{e?(i.U_.s_(),await Xu(i)):(await i.U_.stop(),i.O_.length>0&&(oe("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))}))),i.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Bd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $d(i,e){if(Sr("AsyncQueue",`${e}: ${i}`),ja(i))return new ne($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=_a(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Js;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.W_=new Je(ue.comparator)}track(e){const t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):me():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,s)=>{e.push(s)})),e}}class lo{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new lo(e,t,Js.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class EI{constructor(){this.queries=fg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=fg(),u.forEach(((h,m)=>{for(const g of m.j_)g.onError(s)}))})(this,new ne($.ABORTED,"Firestore shutting down"))}}function fg(){return new mo((i=>Sy(i)),qu)}async function r_(i,e){const t=we(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.H_()&&e.J_()&&(s=2):(u=new wI,s=e.J_()?0:1);try{switch(s){case 0:u.z_=await t.onListen(o,!0);break;case 1:u.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=$d(h,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.j_.push(e),e.Z_(t.onlineState),u.z_&&e.X_(u.z_)&&qd(t)}async function i_(i,e){const t=we(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.j_.indexOf(e);h>=0&&(u.j_.splice(h,1),u.j_.length===0?o=e.J_()?0:1:!u.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function TI(i,e){const t=we(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.j_)m.X_(o)&&(s=!0);h.z_=o}}s&&qd(t)}function II(i,e,t){const s=we(i),o=s.queries.get(e);if(o)for(const u of o.j_)u.onError(t);s.queries.delete(e)}function qd(i){i.Y_.forEach((e=>{e.next()}))}var hd,pg;(pg=hd||(hd={})).ea="default",pg.Cache="cache";class s_{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==hd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.key=e}}class a_{constructor(e){this.key=e}}class SI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Re(),this.mutatedKeys=Re(),this.Aa=Ay(e),this.Ra=new Js(this.Aa)}get Va(){return this.Ta}ma(e,t){const s=t?t.fa:new dg,o=t?t.Ra:this.Ra;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,x)=>{const L=o.get(T),z=Wu(this.query,x)?x:null,Y=!!L&&this.mutatedKeys.has(L.key),X=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let W=!1;L&&z?L.data.isEqual(z.data)?Y!==X&&(s.track({type:3,doc:z}),W=!0):this.ga(L,z)||(s.track({type:2,doc:z}),W=!0,(g&&this.Aa(z,g)>0||v&&this.Aa(z,v)<0)&&(m=!0)):!L&&z?(s.track({type:0,doc:z}),W=!0):L&&!z&&(s.track({type:1,doc:L}),W=!0,(g||v)&&(m=!0)),W&&(z?(h=h.add(z),u=X?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{Ra:h,fa:s,ns:m,mutatedKeys:u}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort(((T,x)=>(function(z,Y){const X=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return X(z)-X(Y)})(T.type,x.type)||this.Aa(T.doc,x.doc))),this.pa(s),o=o!=null&&o;const m=t&&!o?this.ya():[],g=this.da.size===0&&this.current&&!o?1:0,v=g!==this.Ea;return this.Ea=g,h.length!==0||v?{snapshot:new lo(this.query,e.Ra,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:m}:{wa:m}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new dg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Re(),this.Ra.forEach((s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))}));const t=[];return e.forEach((s=>{this.da.has(s)||t.push(new a_(s))})),this.da.forEach((s=>{e.has(s)||t.push(new o_(s))})),t}ba(e){this.Ta=e.Ts,this.da=Re();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return lo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class AI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class RI{constructor(e){this.key=e,this.va=!1}}class PI{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new mo((m=>Sy(m)),qu),this.Ma=new Map,this.xa=new Set,this.Oa=new Je(ue.comparator),this.Na=new Map,this.La=new Ld,this.Ba={},this.ka=new Map,this.qa=ao.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function CI(i,e,t=!0){const s=f_(i);let o;const u=s.Fa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Da()):o=await l_(s,e,t,!0),o}async function kI(i,e){const t=f_(i);await l_(t,e,!0,!1)}async function l_(i,e,t,s){const o=await XT(i.localStore,Gn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await xI(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&Xy(i.remoteStore,o),m}async function xI(i,e,t,s,o){i.Ka=(x,L,z)=>(async function(X,W,ge,ye){let _e=W.view.ma(ge);_e.ns&&(_e=await lg(X.localStore,W.query,!1).then((({documents:k})=>W.view.ma(k,_e))));const Ee=ye&&ye.targetChanges.get(W.targetId),ze=ye&&ye.targetMismatches.get(W.targetId)!=null,Te=W.view.applyChanges(_e,X.isPrimaryClient,Ee,ze);return gg(X,W.targetId,Te.wa),Te.snapshot})(i,x,L,z);const u=await lg(i.localStore,e,!0),h=new SI(e,u.Ts),m=h.ma(u.documents),g=Ba.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);gg(i,t,v.wa);const T=new AI(e,t,h);return i.Fa.set(e,T),i.Ma.has(t)?i.Ma.get(t).push(e):i.Ma.set(t,[e]),v.snapshot}async function NI(i,e,t){const s=we(i),o=s.Fa.get(e),u=s.Ma.get(o.targetId);if(u.length>1)return s.Ma.set(o.targetId,u.filter((h=>!qu(h,e)))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await cd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Fd(s.remoteStore,o.targetId),dd(s,o.targetId)})).catch(Ua)):(dd(s,o.targetId),await cd(s.localStore,o.targetId,!0))}async function DI(i,e){const t=we(i),s=t.Fa.get(e),o=t.Ma.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Fd(t.remoteStore,s.targetId))}async function VI(i,e,t){const s=jI(i);try{const o=await(function(h,m){const g=we(h),v=ft.now(),T=m.reduce(((z,Y)=>z.add(Y.key)),Re());let x,L;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Y=Ar(),X=Re();return g.cs.getEntries(z,T).next((W=>{Y=W,Y.forEach(((ge,ye)=>{ye.isValidDocument()||(X=X.add(ge))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,Y))).next((W=>{x=W;const ge=[];for(const ye of m){const _e=tT(ye,x.get(ye.key).overlayedDocument);_e!=null&&ge.push(new Ji(ye.key,_e,gy(_e.value.mapValue),Qn.exists(!0)))}return g.mutationQueue.addMutationBatch(z,v,ge,m)})).next((W=>{L=W;const ge=W.applyToLocalDocumentSet(x,X);return g.documentOverlayCache.saveOverlays(z,W.batchId,ge)}))})).then((()=>({batchId:L.batchId,changes:Py(x)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let v=h.Ba[h.currentUser.toKey()];v||(v=new Je(Oe)),v=v.insert(m,g),h.Ba[h.currentUser.toKey()]=v})(s,o.batchId,t),await qa(s,o.changes),await Xu(s.remoteStore)}catch(o){const u=$d(o,"Failed to persist write");t.reject(u)}}async function u_(i,e){const t=we(i);try{const s=await GT(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Na.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.va=!0:o.modifiedDocuments.size>0?Fe(h.va):o.removedDocuments.size>0&&(Fe(h.va),h.va=!1))})),await qa(t,s,e)}catch(s){await Ua(s)}}function mg(i,e,t){const s=we(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Fa.forEach(((u,h)=>{const m=h.view.Z_(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=we(h);g.onlineState=m;let v=!1;g.queries.forEach(((T,x)=>{for(const L of x.j_)L.Z_(m)&&(v=!0)})),v&&qd(g)})(s.eventManager,e),o.length&&s.Ca.d_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function OI(i,e,t){const s=we(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Na.get(e),u=o&&o.key;if(u){let h=new Je(ue.comparator);h=h.insert(u,Mt.newNoDocument(u,ve.min()));const m=Re().add(u),g=new Gu(ve.min(),new Map,new Je(Oe),h,m);await u_(s,g),s.Oa=s.Oa.remove(u),s.Na.delete(e),Wd(s)}else await cd(s.localStore,e,!1).then((()=>dd(s,e,t))).catch(Ua)}async function LI(i,e){const t=we(i),s=e.batch.batchId;try{const o=await KT(t.localStore,e);h_(t,s,null),c_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await qa(t,o)}catch(o){await Ua(o)}}async function MI(i,e,t){const s=we(i);try{const o=await(function(h,m){const g=we(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let T;return g.mutationQueue.lookupMutationBatch(v,m).next((x=>(Fe(x!==null),T=x.keys(),g.mutationQueue.removeMutationBatch(v,x)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,T,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,T))).next((()=>g.localDocuments.getDocuments(v,T)))}))})(s.localStore,e);h_(s,e,t),c_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await qa(s,o)}catch(o){await Ua(o)}}function c_(i,e){(i.ka.get(e)||[]).forEach((t=>{t.resolve()})),i.ka.delete(e)}function h_(i,e,t){const s=we(i);let o=s.Ba[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ba[s.currentUser.toKey()]=o}}function dd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Ma.get(e))i.Fa.delete(s),t&&i.Ca.$a(s,t);i.Ma.delete(e),i.isPrimaryClient&&i.La.gr(e).forEach((s=>{i.La.containsKey(s)||d_(i,s)}))}function d_(i,e){i.xa.delete(e.path.canonicalString());const t=i.Oa.get(e);t!==null&&(Fd(i.remoteStore,t),i.Oa=i.Oa.remove(e),i.Na.delete(t),Wd(i))}function gg(i,e,t){for(const s of t)s instanceof o_?(i.La.addReference(s.key,e),bI(i,s)):s instanceof a_?(oe("SyncEngine","Document no longer in limbo: "+s.key),i.La.removeReference(s.key,e),i.La.containsKey(s.key)||d_(i,s.key)):me()}function bI(i,e){const t=e.key,s=t.path.canonicalString();i.Oa.get(t)||i.xa.has(s)||(oe("SyncEngine","New document in limbo: "+t),i.xa.add(s),Wd(i))}function Wd(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const e=i.xa.values().next().value;i.xa.delete(e);const t=new ue(Ke.fromString(e)),s=i.qa.next();i.Na.set(s,new RI(t)),i.Oa=i.Oa.insert(t,s),Xy(i.remoteStore,new ii(Gn(xd(t.path)),s,"TargetPurposeLimboResolution",Sd.oe))}}async function qa(i,e,t){const s=we(i),o=[],u=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach(((m,g)=>{h.push(s.Ka(g,e,t).then((v=>{var T;if((v||t)&&s.isPrimaryClient){const x=v?!v.fromCache:(T=t==null?void 0:t.targetChanges.get(g.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,x?"current":"not-current")}if(v){o.push(v);const x=bd.Wi(g.targetId,v);u.push(x)}})))})),await Promise.all(h),s.Ca.d_(o),await(async function(g,v){const T=we(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>K.forEach(v,(L=>K.forEach(L.$i,(z=>T.persistence.referenceDelegate.addReference(x,L.targetId,z))).next((()=>K.forEach(L.Ui,(z=>T.persistence.referenceDelegate.removeReference(x,L.targetId,z)))))))))}catch(x){if(!ja(x))throw x;oe("LocalStore","Failed to update sequence numbers: "+x)}for(const x of v){const L=x.targetId;if(!x.fromCache){const z=T.os.get(L),Y=z.snapshotVersion,X=z.withLastLimboFreeSnapshotVersion(Y);T.os=T.os.insert(L,X)}}})(s.localStore,u))}async function FI(i,e){const t=we(i);if(!t.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const s=await Ky(t.localStore,e);t.currentUser=e,(function(u,h){u.ka.forEach((m=>{m.forEach((g=>{g.reject(new ne($.CANCELLED,h))}))})),u.ka.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await qa(t,s.hs)}}function UI(i,e){const t=we(i),s=t.Na.get(e);if(s&&s.va)return Re().add(s.key);{let o=Re();const u=t.Ma.get(e);if(!u)return o;for(const h of u){const m=t.Fa.get(h);o=o.unionWith(m.view.Va)}return o}}function f_(i){const e=we(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=u_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OI.bind(null,e),e.Ca.d_=TI.bind(null,e.eventManager),e.Ca.$a=II.bind(null,e.eventManager),e}function jI(i){const e=we(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MI.bind(null,e),e}class Lu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return HT(this.persistence,new qT,e.initialUser,this.serializer)}Ga(e){return new zT(Md.Zr,this.serializer)}Wa(e){return new ZT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lu.provider={build:()=>new Lu};class fd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>mg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=FI.bind(null,this.syncEngine),await vI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new EI})()}createDatastore(e){const t=Qu(e.databaseInfo.databaseId),s=(function(u){return new rI(u)})(e.databaseInfo);return(function(u,h,m,g){return new oI(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new lI(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>mg(this.syncEngine,t,0)),(function(){return cg.D()?new cg:new eI})())}createSyncEngine(e,t){return(function(o,u,h,m,g,v,T){const x=new PI(o,u,h,m,g,v);return T&&(x.Qa=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=we(o);oe("RemoteStore","RemoteStore shutting down."),u.L_.add(5),await $a(u),u.k_.shutdown(),u.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}fd.provider={build:()=>new fd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=fy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{oe("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(oe("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=$d(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function qh(i,e){i.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Ky(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function yg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await BI(i);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>hg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>hg(e.remoteStore,o))),i._onlineComponents=e}async function BI(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await qh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ro("Error using user provided cache. Falling back to memory cache: "+t),await qh(i,new Lu)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await qh(i,new Lu);return i._offlineComponents}async function m_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await yg(i,i._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await yg(i,new fd))),i._onlineComponents}function $I(i){return m_(i).then((e=>e.syncEngine))}async function g_(i){const e=await m_(i),t=e.eventManager;return t.onListen=CI.bind(null,e.syncEngine),t.onUnlisten=NI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=DI.bind(null,e.syncEngine),t}function qI(i,e,t={}){const s=new Er;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,v){const T=new p_({next:L=>{T.Za(),h.enqueueAndForget((()=>i_(u,x)));const z=L.docs.has(m);!z&&L.fromCache?v.reject(new ne($.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&L.fromCache&&g&&g.source==="server"?v.reject(new ne($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(L)},error:L=>v.reject(L)}),x=new s_(xd(m.path),T,{includeMetadataChanges:!0,_a:!0});return r_(u,x)})(await g_(i),i.asyncQueue,e,t,s))),s.promise}function WI(i,e,t={}){const s=new Er;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,v){const T=new p_({next:L=>{T.Za(),h.enqueueAndForget((()=>i_(u,x))),L.fromCache&&g.source==="server"?v.reject(new ne($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(L)},error:L=>v.reject(L)}),x=new s_(m,T,{includeMetadataChanges:!0,_a:!0});return r_(u,x)})(await g_(i),i.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(i,e,t){if(!t)throw new ne($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function HI(i,e,t,s){if(e===!0&&s===!0)throw new ne($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function vg(i){if(!ue.isDocumentKey(i))throw new ne($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function wg(i){if(ue.isDocumentKey(i))throw new ne($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ju(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":me()}function di(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ne($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ju(i);throw new ne($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ne($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=y_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zu{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eg(e),e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new u0;switch(s.type){case"firstParty":return new f0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ne($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=_g.get(t);s&&(oe("ComponentProvider","Removing Datastore"),_g.delete(t),s.terminate())})(this),Promise.resolve()}}function KI(i,e,t,s={}){var o;const u=(i=di(i,Zu))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Lt.MOCK_USER;else{m=bw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ne($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Lt(v)}i._authCredentials=new c0(new dy(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new es(this.firestore,e,this._query)}}class Yt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class li extends es{constructor(e,t,s){super(e,t,xd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new ue(e))}withConverter(e){return new li(this.firestore,e,this._path)}}function Wh(i,e,...t){if(i=Xt(i),__("collection","path",e),i instanceof Zu){const s=Ke.fromString(e,...t);return wg(s),new li(i,null,s)}{if(!(i instanceof Yt||i instanceof li))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return wg(s),new li(i.firestore,null,s)}}function pd(i,e,...t){if(i=Xt(i),arguments.length===1&&(e=fy.newId()),__("doc","path",e),i instanceof Zu){const s=Ke.fromString(e,...t);return vg(s),new Yt(i,null,new ue(s))}{if(!(i instanceof Yt||i instanceof li))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return vg(s),new Yt(i.firestore,i instanceof li?i.converter:null,new ue(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Qy(this,"async_queue_retry"),this.Vu=()=>{const s=$h();s&&oe("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=$h();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=$h();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new Er;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ja(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((s=>{this.Eu=s,this.du=!1;const o=(function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m})(s);throw Sr("INTERNAL UNHANDLED ERROR: ",o),s})).then((s=>(this.du=!1,s))))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Bd.createAndSchedule(this,e,t,s,(u=>this.yu(u)));return this.Tu.push(o),o}fu(){this.Eu&&me()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Wa extends Zu{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Tg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tg(e),this._firestoreClient=void 0,await e}}}function GI(i,e){const t=typeof i=="object"?i:ry(),s=typeof i=="string"?i:"(default)",o=Td(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Lw("firestore");u&&KI(o,...u)}return o}function Hd(i){if(i._terminated)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||QI(i),i._firestoreClient}function QI(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,g,v,T){return new R0(m,g,v,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,y_(T.experimentalLongPollingOptions),T.useFetchStreams)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new zI(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(Pt.fromBase64String(e))}catch(t){throw new ne($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new uo(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=/^__.*__$/;class XI{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ji(e,this.data,this.fieldMask,t,this.fieldTransforms):new za(e,this.data,t,this.fieldTransforms)}}function v_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Xd{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.vu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Xd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.Ou(e),o}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Mu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(v_(this.Cu)&&YI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class JI{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Qu(e)}Qu(e,t,s,o=!1){return new Xd({Cu:e,methodName:t,qu:s,path:At.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jd(i){const e=i._freezeSettings(),t=Qu(i._databaseId);return new JI(i._databaseId,!!e.ignoreUndefinedProperties,t)}function w_(i,e,t,s,o,u={}){const h=i.Qu(u.merge||u.mergeFields?2:0,e,t,o);I_("Data must be an object, but it was:",h,s);const m=E_(s,h);let g,v;if(u.merge)g=new Vn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const x of u.mergeFields){const L=eS(e,x,t);if(!h.contains(L))throw new ne($.INVALID_ARGUMENT,`Field '${L}' is specified in your field mask but missing from your input data.`);nS(T,L)||T.push(L)}g=new Vn(T),v=h.fieldTransforms.filter((x=>g.covers(x.field)))}else g=null,v=h.fieldTransforms;return new XI(new yn(m),g,v)}class Zd extends Gd{_toFieldTransform(e){return new X0(e.path,new Da)}isEqual(e){return e instanceof Zd}}function ZI(i,e,t,s=!1){return ef(t,i.Qu(s?4:3,e))}function ef(i,e){if(T_(i=Xt(i)))return I_("Unsupported field value:",e,i),E_(i,e);if(i instanceof Gd)return(function(s,o){if(!v_(o.Cu))throw o.Bu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=ef(m,o.Lu(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Xt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return G0(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:Vu(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Vu(o.serializer,u)}}if(s instanceof Qd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof uo)return{bytesValue:jy(o.serializer,s._byteString)};if(s instanceof Yt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Od(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Yd)return(function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map((g=>{if(typeof g!="number")throw m.Bu("VectorValues must only contain numeric values.");return Nd(m.serializer,g)}))}}}}}})(s,o);throw o.Bu(`Unsupported field value: ${Ju(s)}`)})(i,e)}function E_(i,e){const t={};return py(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fo(i,((s,o)=>{const u=ef(o,e.Mu(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function T_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof Qd||i instanceof uo||i instanceof Yt||i instanceof Gd||i instanceof Yd)}function I_(i,e,t){if(!T_(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const s=Ju(t);throw s==="an object"?e.Bu(i+" a custom object"):e.Bu(i+" "+s)}}function eS(i,e,t){if((e=Xt(e))instanceof Kd)return e._internalPath;if(typeof e=="string")return S_(i,e);throw Mu("Field path arguments must be of type string or ",i,!1,void 0,t)}const tS=new RegExp("[~\\*/\\[\\]]");function S_(i,e,t){if(e.search(tS)>=0)throw Mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Kd(...e.split("."))._internalPath}catch{throw Mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Mu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ne($.INVALID_ARGUMENT,m+i+g)}function nS(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ec("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rS extends A_{data(){return super.data()}}function ec(i,e){return typeof e=="string"?S_(i,e):e instanceof Kd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ne($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tf{}class R_ extends tf{}function Ig(i,e,...t){let s=[];e instanceof tf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((g=>g instanceof nf)).length,m=u.filter((g=>g instanceof tc)).length;if(h>1||h>0&&m>0)throw new ne($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class tc extends R_{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new tc(e,t,s)}_apply(e){const t=this._parse(e);return P_(e._query,t),new es(e.firestore,e.converter,id(e._query,t))}_parse(e){const t=Jd(e.firestore);return(function(u,h,m,g,v,T,x){let L;if(v.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new ne($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){Rg(x,T);const z=[];for(const Y of x)z.push(Ag(g,u,Y));L={arrayValue:{values:z}}}else L=Ag(g,u,x)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||Rg(x,T),L=ZI(m,h,x,T==="in"||T==="not-in");return at.create(v,T,L)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sS(i,e,t){const s=e,o=ec("where",i);return tc._create(o,s,t)}class nf extends tf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new nf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:On.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)P_(h,g),h=id(h,g)})(e._query,t),new es(e.firestore,e.converter,id(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class rf extends R_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new rf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ne($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ne($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Na(u,h)})(e._query,this._field,this._direction);return new es(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new po(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Sg(i,e="asc"){const t=e,s=ec("orderBy",i);return rf._create(s,t)}function Ag(i,e,t){if(typeof(t=Xt(t))=="string"){if(t==="")throw new ne($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iy(e)&&t.indexOf("/")!==-1)throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ke.fromString(t));if(!ue.isDocumentKey(s))throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Wm(i,new ue(s))}if(t instanceof Yt)return Wm(i,t._key);throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ju(t)}.`)}function Rg(i,e){if(!Array.isArray(i)||i.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function P_(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class oS{convertValue(e,t="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return fo(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>rt(h.doubleValue)));return new Yd(u)}convertGeoPoint(e){return new Qd(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Rd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const t=ci(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);Fe(Hy(s));const o=new ka(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||Sr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class k_ extends A_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Tu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ec("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Tu extends k_{data(e={}){return super.data(e)}}class aS{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new wa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Tu(this._firestore,this._userDataWriter,s.key,s,new wa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Tu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new wa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Tu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new wa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,T=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:lS(m.type),doc:g,oldIndex:v,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(i){i=di(i,Yt);const e=di(i.firestore,Wa);return qI(Hd(e),i._key).then((t=>fS(e,i,t)))}class x_ extends oS{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,t)}}function cS(i){i=di(i,es);const e=di(i.firestore,Wa),t=Hd(e),s=new x_(e);return iS(i._query),WI(t,i._query).then((o=>new aS(e,s,i,o)))}function hS(i,e,t){i=di(i,Yt);const s=di(i.firestore,Wa),o=C_(i.converter,e);return N_(s,[w_(Jd(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Qn.none())])}function dS(i,e){const t=di(i.firestore,Wa),s=pd(i),o=C_(i.converter,e);return N_(t,[w_(Jd(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Qn.exists(!1))]).then((()=>s))}function N_(i,e){return(function(s,o){const u=new Er;return s.asyncQueue.enqueueAndForget((async()=>VI(await $I(s),o,u))),u.promise})(Hd(i),e)}function fS(i,e,t){const s=t.docs.get(e._key),o=new x_(i);return new k_(i,o,e._key,s,new wa(t.hasPendingWrites,t.fromCache),e.converter)}function Pg(){return new Zd("serverTimestamp")}(function(e,t=!0){(function(o){ho=o})(co),no(new Hi("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Wa(new h0(s.getProvider("auth-internal")),new m0(s.getProvider("app-check-internal")),(function(v,T){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ne($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ka(v.options.projectId,T)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),ai(jm,"4.7.3",e),ai(jm,"4.7.3","esm2017")})();function sf(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function D_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pS=D_,V_=new ba("auth","Firebase",D_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new wd("@firebase/auth");function mS(i,...e){bu.logLevel<=Ce.WARN&&bu.warn(`Auth (${co}): ${i}`,...e)}function Iu(i,...e){bu.logLevel<=Ce.ERROR&&bu.error(`Auth (${co}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(i,...e){throw of(i,...e)}function Xn(i,...e){return of(i,...e)}function O_(i,e,t){const s=Object.assign(Object.assign({},pS()),{[e]:t});return new ba("auth","Firebase",s).create(e,{appName:i.name})}function Tr(i){return O_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function of(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return V_.create(i,...e)}function fe(i,e,...t){if(!i)throw of(e,...t)}function _r(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Iu(e),new Error(e)}function Rr(i,e){i||_r(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function gS(){return Cg()==="http:"||Cg()==="https:"}function Cg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gS()||zw()||"connection"in navigator)?navigator.onLine:!0}function _S(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rr(t>e,"Short delay should be less than long delay!"),this.isMobile=Fw()||Bw()}get(){return yS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(i,e){Rr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new Ha(3e4,6e4);function fi(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function pi(i,e,t,s,o={}){return M_(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Fa(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return jw()||(v.referrerPolicy="no-referrer"),L_.fetch()(b_(i,i.config.apiHost,t,m),v)})}async function M_(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},vS),e);try{const o=new TS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw gu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw gu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw gu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw gu(i,"user-disabled",h);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw O_(i,T,v);Ln(i,T)}}catch(o){if(o instanceof Pr)throw o;Ln(i,"network-request-failed",{message:String(o)})}}async function Ka(i,e,t,s,o={}){const u=await pi(i,e,t,s,o);return"mfaPendingCredential"in u&&Ln(i,"multi-factor-auth-required",{_serverResponse:u}),u}function b_(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?af(i.config,o):`${i.config.apiScheme}://${o}`}function ES(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Xn(this.auth,"network-request-failed")),wS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Xn(i,e,s);return o.customData._tokenResponse=t,o}function kg(i){return i!==void 0&&i.enterprise!==void 0}class IS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ES(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function SS(i,e){return pi(i,"GET","/v2/recaptchaConfig",fi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS(i,e){return pi(i,"POST","/v1/accounts:delete",e)}async function F_(i,e){return pi(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RS(i,e=!1){const t=Xt(i),s=await t.getIdToken(e),o=lf(s);fe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Aa(Hh(o.auth_time)),issuedAtTime:Aa(Hh(o.iat)),expirationTime:Aa(Hh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Hh(i){return Number(i)*1e3}function lf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Yg(t);return o?JSON.parse(o):(Iu("Failed to decode base64 JWT payload"),null)}catch(o){return Iu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function xg(i){const e=lf(i);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Pr&&PS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function PS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await La(i,F_(t,{idToken:s}));fe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?U_(u.providerUserInfo):[],m=xS(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),T=g?v:!1,x={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new gd(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(i,x)}async function kS(i){const e=Xt(i);await Fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xS(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function U_(i){return i.map(e=>{var{providerId:t}=e,s=sf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(i,e){const t=await M_(i,{},async()=>{const s=Fa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=b_(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",L_.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function DS(i,e){return pi(i,"POST","/v2/accounts:revokeToken",fi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=xg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await NS(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Zs;return s&&(fe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(fe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(fe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(i,e){fe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=sf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new gd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await La(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return RS(this,e)}reload(){return kS(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Fu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await La(this,AS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,T;const x=(s=t.displayName)!==null&&s!==void 0?s:void 0,L=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Y=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,W=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ge=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ye=(T=t.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:_e,emailVerified:Ee,isAnonymous:ze,providerData:Te,stsTokenManager:k}=t;fe(_e&&k,e,"internal-error");const E=Zs.fromJSON(this.name,k);fe(typeof _e=="string",e,"internal-error"),Zr(x,e.name),Zr(L,e.name),fe(typeof Ee=="boolean",e,"internal-error"),fe(typeof ze=="boolean",e,"internal-error"),Zr(z,e.name),Zr(Y,e.name),Zr(X,e.name),Zr(W,e.name),Zr(ge,e.name),Zr(ye,e.name);const S=new vr({uid:_e,auth:e,email:L,emailVerified:Ee,displayName:x,isAnonymous:ze,photoURL:Y,phoneNumber:z,tenantId:X,stsTokenManager:E,createdAt:ge,lastLoginAt:ye});return Te&&Array.isArray(Te)&&(S.providerData=Te.map(P=>Object.assign({},P))),W&&(S._redirectEventId=W),S}static async _fromIdTokenResponse(e,t,s=!1){const o=new Zs;o.updateFromServerResponse(t);const u=new vr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Fu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];fe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?U_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Zs;m.updateFromIdToken(s);const g=new vr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new gd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=new Map;function wr(i){Rr(i instanceof Function,"Expected a class definition");let e=Ng.get(i);return e?(Rr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ng.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}j_.type="NONE";const Dg=j_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(i,e,t){return`firebase:${i}:${e}:${t}`}class eo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Su(this.userKey,o.apiKey,u),this.fullPersistenceKey=Su("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new eo(wr(Dg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||wr(Dg);const h=Su(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const T=await v._get(h);if(T){const x=vr._fromJSON(e,T);v!==u&&(m=x),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new eo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new eo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(H_(e))return"Blackberry";if(K_(e))return"Webos";if(B_(e))return"Safari";if((e.includes("chrome/")||$_(e))&&!e.includes("edge/"))return"Chrome";if(W_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function z_(i=bt()){return/firefox\//i.test(i)}function B_(i=bt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $_(i=bt()){return/crios\//i.test(i)}function q_(i=bt()){return/iemobile/i.test(i)}function W_(i=bt()){return/android/i.test(i)}function H_(i=bt()){return/blackberry/i.test(i)}function K_(i=bt()){return/webos/i.test(i)}function uf(i=bt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function VS(i=bt()){var e;return uf(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OS(){return $w()&&document.documentMode===10}function G_(i=bt()){return uf(i)||W_(i)||K_(i)||H_(i)||/windows phone/i.test(i)||q_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(i,e=[]){let t;switch(i){case"Browser":t=Vg(bt());break;case"Worker":t=`${Vg(bt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${co}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(i,e={}){return pi(i,"GET","/v2/passwordPolicy",fi(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=6;class FS{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:bS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Og(this),this.idTokenSubscription=new Og(this),this.beforeStateQueue=new LS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await eo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await F_(this,{idToken:e}),s=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Kn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kn(this.app))return Promise.reject(Tr(this));const t=e?Xt(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kn(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MS(this),t=new FS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ba("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await DS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await eo.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&mS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ts(i){return Xt(i)}class Og{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xw(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jS(i){nc=i}function Y_(i){return nc.loadJS(i)}function zS(){return nc.recaptchaEnterpriseScript}function BS(){return nc.gapiScript}function $S(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const qS="recaptcha-enterprise",WS="NO_RECAPTCHA";class HS{constructor(e){this.type=qS,this.auth=ts(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{SS(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new IS(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;kg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(WS)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&kg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=zS();g.length!==0&&(g+=m),Y_(g).then(()=>{o(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function Lg(i,e,t,s=!1){const o=new HS(i);let u;try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const h=Object.assign({},e);return s?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function yd(i,e,t,s){var o;if(!((o=i._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Lg(i,e,t,t==="getOobCode");return s(i,u)}else return s(i,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Lg(i,e,t,t==="getOobCode");return s(i,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(i,e){const t=Td(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Cu(u,e??{}))return o;Ln(o,"already-initialized")}return t.initialize({options:e})}function GS(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(wr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function QS(i,e,t){const s=ts(i);fe(s._canInitEmulator,s,"emulator-config-failed"),fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=X_(e),{host:h,port:m}=YS(e),g=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),XS()}function X_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function YS(i){const e=X_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Mg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Mg(h)}}}function Mg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function XS(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,t){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}async function JS(i,e){return pi(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(i,e){return Ka(i,"POST","/v1/accounts:signInWithPassword",fi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(i,e){return Ka(i,"POST","/v1/accounts:signInWithEmailLink",fi(i,e))}async function tA(i,e){return Ka(i,"POST","/v1/accounts:signInWithEmailLink",fi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends cf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ma(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ma(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yd(e,t,"signInWithPassword",ZS);case"emailLink":return eA(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yd(e,s,"signUpPassword",JS);case"emailLink":return tA(e,{idToken:t,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(i,e){return Ka(i,"POST","/v1/accounts:signInWithIdp",fi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="http://localhost";class Yi extends cf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ln("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=sf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Yi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return to(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,to(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,to(e,t)}buildRequest(){const e={requestUri:nA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iA(i){const e=ma(ga(i)).link,t=e?ma(ga(e)).deep_link_id:null,s=ma(ga(i)).deep_link_id;return(s?ma(ga(s)).link:null)||s||t||e||i}class hf{constructor(e){var t,s,o,u,h,m;const g=ma(ga(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,T=(s=g.oobCode)!==null&&s!==void 0?s:null,x=rA((o=g.mode)!==null&&o!==void 0?o:null);fe(v&&T&&x,"argument-error"),this.apiKey=v,this.operation=x,this.code=T,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=iA(e);try{return new hf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.providerId=yo.PROVIDER_ID}static credential(e,t){return Ma._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=hf.parseLink(t);return fe(s,"argument-error"),Ma._fromEmailAndCode(e,s.code,s.tenantId)}}yo.PROVIDER_ID="password";yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends J_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Ga{constructor(){super("facebook.com")}static credential(e){return Yi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ti.credential(t,s)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Ga{constructor(){super("github.com")}static credential(e){return Yi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Ga{constructor(){super("twitter.com")}static credential(e,t){return Yi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ri.credential(t,s)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(i,e){return Ka(i,"POST","/v1/accounts:signUp",fi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await vr._fromIdTokenResponse(e,s,o),h=bg(s);return new Xi({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=bg(s);return new Xi({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function bg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Pr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Uu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Uu(e,t,s,o)}}function Z_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Uu._fromErrorAndOperation(i,u,e,s):u})}async function oA(i,e,t=!1){const s=await La(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Xi._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(i,e,t=!1){const{auth:s}=i;if(Kn(s.app))return Promise.reject(Tr(s));const o="reauthenticate";try{const u=await La(i,Z_(s,o,e,i),t);fe(u.idToken,s,"internal-error");const h=lf(u.idToken);fe(h,s,"internal-error");const{sub:m}=h;return fe(i.uid===m,s,"user-mismatch"),Xi._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Ln(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(i,e,t=!1){if(Kn(i.app))return Promise.reject(Tr(i));const s="signIn",o=await Z_(i,s,e),u=await Xi._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function lA(i,e){return ev(ts(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(i){const e=ts(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uA(i,e,t){if(Kn(i.app))return Promise.reject(Tr(i));const s=ts(i),h=await yd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sA).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&tv(i),g}),m=await Xi._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function cA(i,e,t){return Kn(i.app)?Promise.reject(Tr(i)):lA(Xt(i),yo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&tv(i),s})}function hA(i,e,t,s){return Xt(i).onIdTokenChanged(e,t,s)}function dA(i,e,t){return Xt(i).beforeAuthStateChanged(e,t)}function fA(i,e,t,s){return Xt(i).onAuthStateChanged(e,t,s)}const ju="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ju,"1"),this.storage.removeItem(ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=1e3,mA=10;class rv extends nv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=G_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);OS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,mA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},pA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rv.type="LOCAL";const gA=rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv extends nv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}iv.type="SESSION";const sv=iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new rc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await yA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=df("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(x){const L=x;if(L.data.eventId===v)switch(L.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(L.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return window}function vA(i){Jn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function wA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EA(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function TA(){return ov()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="firebaseLocalStorageDb",IA=1,zu="firebaseLocalStorage",lv="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ic(i,e){return i.transaction([zu],e?"readwrite":"readonly").objectStore(zu)}function SA(){const i=indexedDB.deleteDatabase(av);return new Qa(i).toPromise()}function _d(){const i=indexedDB.open(av,IA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(zu,{keyPath:lv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(zu)?e(s):(s.close(),await SA(),e(await _d()))})})}async function Fg(i,e,t){const s=ic(i,!0).put({[lv]:e,value:t});return new Qa(s).toPromise()}async function AA(i,e){const t=ic(i,!1).get(e),s=await new Qa(t).toPromise();return s===void 0?null:s.value}function Ug(i,e){const t=ic(i,!0).delete(e);return new Qa(t).toPromise()}const RA=800,PA=3;class uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _d(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>PA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ov()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(TA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wA(),!this.activeServiceWorker)return;this.sender=new _A(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _d();return await Fg(e,ju,"1"),await Ug(e,ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Fg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>AA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ug(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=ic(o,!1).getAll();return new Qa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uv.type="LOCAL";const CA=uv;new Ha(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(i,e){return e?wr(e):(fe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff extends cf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return to(e,this._buildIdpRequest())}_linkToIdToken(e,t){return to(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return to(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xA(i){return ev(i.auth,new ff(i),i.bypassAuthState)}function NA(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),aA(t,new ff(i),i.bypassAuthState)}async function DA(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),oA(t,new ff(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xA;case"linkViaPopup":case"linkViaRedirect":return DA;case"reauthViaPopup":case"reauthViaRedirect":return NA;default:Ln(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new Ha(2e3,1e4);class Xs extends cv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Xs.currentPopupAction&&Xs.currentPopupAction.cancel(),Xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=df();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VA.get())};e()}}Xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="pendingRedirect",Au=new Map;class LA extends cv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const s=await MA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MA(i,e){const t=UA(e),s=FA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function bA(i,e){Au.set(i._key(),e)}function FA(i){return wr(i._redirectPersistence)}function UA(i){return Su(OA,i.config.apiKey,i.name)}async function jA(i,e,t=!1){if(Kn(i.app))return Promise.reject(Tr(i));const s=ts(i),o=kA(s,e),h=await new LA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=600*1e3;class BA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$A(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!hv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Xn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zA&&this.cachedEventUids.clear(),this.cachedEventUids.has(jg(e))}saveEventToCache(e){this.cachedEventUids.add(jg(e)),this.lastProcessedEventTime=Date.now()}}function jg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function hv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $A(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(i,e={}){return pi(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HA=/^https?/;async function KA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await qA(i);for(const t of e)try{if(GA(t))return}catch{}Ln(i,"unauthorized-domain")}function GA(i){const e=md(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!HA.test(t))return!1;if(WA.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new Ha(3e4,6e4);function zg(){const i=Jn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function YA(i){return new Promise((e,t)=>{var s,o,u;function h(){zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zg(),t(Xn(i,"network-request-failed"))},timeout:QA.get()})}if(!((o=(s=Jn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Jn().gapi)===null||u===void 0)&&u.load)h();else{const m=$S("iframefcb");return Jn()[m]=()=>{gapi.load?h():t(Xn(i,"network-request-failed"))},Y_(`${BS()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Ru=null,e})}let Ru=null;function XA(i){return Ru=Ru||YA(i),Ru}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new Ha(5e3,15e3),ZA="__/auth/iframe",eR="emulator/auth/iframe",tR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rR(i){const e=i.config;fe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?af(e,eR):`https://${i.config.authDomain}/${ZA}`,s={apiKey:e.apiKey,appName:i.name,v:co},o=nR.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Fa(s).slice(1)}`}async function iR(i){const e=await XA(i),t=Jn().gapi;return fe(t,i,"internal-error"),e.open({where:document.body,url:rR(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Xn(i,"network-request-failed"),m=Jn().setTimeout(()=>{u(h)},JA.get());function g(){Jn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oR=500,aR=600,lR="_blank",uR="http://localhost";class Bg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cR(i,e,t,s=oR,o=aR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},sR),{width:s.toString(),height:o.toString(),top:u,left:h}),v=bt().toLowerCase();t&&(m=$_(v)?lR:t),z_(v)&&(e=e||uR,g.scrollbars="yes");const T=Object.entries(g).reduce((L,[z,Y])=>`${L}${z}=${Y},`,"");if(VS(v)&&m!=="_self")return hR(e||"",m),new Bg(null);const x=window.open(e||"",m,T);fe(x,i,"popup-blocked");try{x.focus()}catch{}return new Bg(x)}function hR(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="__/auth/handler",fR="emulator/auth/handler",pR=encodeURIComponent("fac");async function $g(i,e,t,s,o,u){fe(i.config.authDomain,i,"auth-domain-config-required"),fe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:co,eventId:o};if(e instanceof J_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Yw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,x]of Object.entries({}))h[T]=x}if(e instanceof Ga){const T=e.getScopes().filter(x=>x!=="");T.length>0&&(h.scopes=T.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await i._getAppCheckToken(),v=g?`#${pR}=${encodeURIComponent(g)}`:"";return`${mR(i)}?${Fa(m).slice(1)}${v}`}function mR({config:i}){return i.emulator?af(i,fR):`https://${i.authDomain}/${dR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="webStorageSupport";class gR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sv,this._completeRedirectFn=jA,this._overrideRedirectResult=bA}async _openPopup(e,t,s,o){var u;Rr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await $g(e,t,s,md(),o);return cR(e,h,df())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await $g(e,t,s,md(),o);return vA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Rr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await iR(e),s=new BA(e);return t.register("authEvent",o=>(fe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kh,{type:Kh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Kh];h!==void 0&&t(!!h),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return G_()||B_()||uf()}}const yR=gR;var qg="@firebase/auth",Wg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wR(i){no(new Hi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;fe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q_(i)},v=new US(s,o,u,g);return GS(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),no(new Hi("auth-internal",e=>{const t=ts(e.getProvider("auth").getImmediate());return(s=>new _R(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ai(qg,Wg,vR(i)),ai(qg,Wg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=300,TR=Zg("authIdTokenMaxAge")||ER;let Hg=null;const IR=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>TR)return;const o=t==null?void 0:t.token;Hg!==o&&(Hg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function SR(i=ry()){const e=Td(i,"auth");if(e.isInitialized())return e.getImmediate();const t=KS(i,{popupRedirectResolver:yR,persistence:[CA,gA,sv]}),s=Zg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=IR(u.toString());dA(t,h,()=>h(t.currentUser)),hA(t,m=>h(m))}}const o=Xg("auth");return o&&QS(t,`http://${o}`),t}function AR(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}jS({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Xn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",AR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wR("Browser");const dv={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"};dv.apiKey==="YOUR_API_KEY"&&console.warn("Firebase configuration is not set. Real-time features will not work.");const fv=ny(dv),pa=GI(fv),yu=SR(fv);function RR(){const[i,e]=gn.useState("LOGIN"),[t,s]=gn.useState(null),[o,u]=gn.useState(null),[h,m]=gn.useState([]),[g,v]=gn.useState(!0),[T,x]=gn.useState(""),[L,z]=gn.useState(""),[Y,X]=gn.useState(""),[W,ge]=gn.useState("");gn.useEffect(()=>{const E=fA(yu,async S=>{S?(u(S),await ye(S.uid),e("MAIN")):(u(null),s(null),e("LOGIN")),v(!1)});return()=>E()},[]);const ye=async E=>{try{const S=await uS(pd(pa,"users",E));if(S.exists()){const P=S.data();s(P.role),X(P.name)}}catch(S){console.error("Error fetching user role:",S)}},_e=async()=>{if(o)try{let E;t==="teacher"?E=Ig(Wh(pa,"records"),Sg("timestamp","desc")):E=Ig(Wh(pa,"records"),sS("studentId","==",o.uid),Sg("timestamp","desc"));const P=(await cS(E)).docs.map(N=>({id:N.id,...N.data()}));m(P)}catch(E){console.error("Error fetching records:",E)}};gn.useEffect(()=>{t&&(i==="TEACHER"||i==="MAIN")&&_e()},[i,t,o]);const Ee=async()=>{if(!T||!L)return alert("이메일과 비밀번호를 입력해주세요.");try{await cA(yu,T,L)}catch(E){alert("로그인 실패: "+E.message)}},ze=async()=>{if(!T||!L||!Y)return alert("모든 정보를 입력해주세요.");try{const S=(await uA(yu,T,L)).user;await hS(pd(pa,"users",S.uid),{uid:S.uid,name:Y,role:t,email:T,createdAt:Pg()}),alert("회원가입이 완료되었습니다!"),e("MAIN")}catch(E){alert("회원가입 실패: "+E.message)}},Te=async(E,S)=>{if(o)try{await dS(Wh(pa,"records"),{studentId:o.uid,name:Y,activity:E,feedback:S,status:"완료",date:new Date().toLocaleDateString(),timestamp:Pg()}),alert("활동 기록이 제출되었습니다!"),ge(""),e("MAIN")}catch(P){alert("제출 실패: "+P.message)}},k=()=>j.jsxs("div",{className:"bg-blue-600 text-white p-4 text-center font-bold shadow-md",children:[j.jsxs("div",{className:"flex justify-between items-center max-w-md mx-auto mb-1",children:[j.jsx("p",{className:"text-xs opacity-80",children:"라이프 스킬을 통한"}),o&&j.jsx("button",{onClick:()=>yu.signOut(),className:"text-xs bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded transition-colors",children:"로그아웃"})]}),j.jsx("h1",{className:"text-xl",children:"피지컬 리터러시 기르기"})]});if(g)return j.jsxs("div",{className:"flex flex-col items-center justify-center h-screen gap-4",children:[j.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"}),j.jsx("p",{className:"text-gray-500 font-medium",children:"데이터를 불러오는 중..."})]});if(i==="LOGIN")return j.jsxs("div",{className:"max-w-md mx-auto border min-h-screen flex flex-col bg-white shadow-xl",children:[j.jsx(k,{}),j.jsxs("div",{className:"flex-1 flex flex-col justify-center p-8 gap-6",children:[j.jsxs("div",{className:"text-center mb-4",children:[j.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"반갑습니다!"}),j.jsx("p",{className:"text-gray-500 text-sm",children:"로그인하여 운동을 시작하세요."})]}),j.jsxs("div",{className:"space-y-4",children:[j.jsx("input",{className:"w-full border-b-2 p-3 focus:border-blue-500 outline-none transition-colors",placeholder:"이메일 주소",type:"email",value:T,onChange:E=>x(E.target.value)}),j.jsx("input",{className:"w-full border-b-2 p-3 focus:border-blue-500 outline-none transition-colors",type:"password",placeholder:"비밀번호",value:L,onChange:E=>z(E.target.value)})]}),j.jsx("button",{onClick:Ee,className:"bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-bold shadow-lg transform active:scale-95 transition-all",children:"로그인"}),j.jsx("button",{onClick:()=>e("TYPE"),className:"text-blue-500 font-medium text-sm hover:underline",children:"아직 회원이 아니신가요? 회원가입"})]})]});if(i==="TYPE")return j.jsxs("div",{className:"max-w-md mx-auto border min-h-screen bg-gray-50 flex flex-col shadow-xl",children:[j.jsx(k,{}),j.jsxs("div",{className:"p-8 flex-1",children:[j.jsx("h2",{className:"text-xl font-bold mb-8 text-center text-gray-800",children:"어떤 유형으로 가입하시나요?"}),j.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[j.jsxs("div",{onClick:()=>{s("student"),e("TERMS")},className:"bg-white border-2 border-transparent hover:border-blue-500 p-8 rounded-2xl shadow-sm hover:shadow-md flex flex-col items-center cursor-pointer transition-all group",children:[j.jsx("span",{className:"text-5xl mb-4 group-hover:scale-110 transition-transform",children:"👤"}),j.jsx("p",{className:"font-bold text-lg text-gray-700",children:"학생"})]}),j.jsxs("div",{onClick:()=>{s("teacher"),e("TERMS")},className:"bg-white border-2 border-transparent hover:border-blue-500 p-8 rounded-2xl shadow-sm hover:shadow-md flex flex-col items-center cursor-pointer transition-all group",children:[j.jsx("span",{className:"text-5xl mb-4 group-hover:scale-110 transition-transform",children:"👨‍🏫"}),j.jsx("p",{className:"font-bold text-lg text-gray-700",children:"선생님"})]})]}),j.jsx("button",{onClick:()=>e("LOGIN"),className:"mt-12 w-full p-3 text-gray-400 hover:text-gray-600 transition-colors",children:"이전으로 돌아가기"})]})]});if(i==="TERMS")return j.jsxs("div",{className:"max-w-md mx-auto border min-h-screen bg-white p-6 flex flex-col shadow-xl",children:[j.jsx("h2",{className:"text-xl font-bold mb-6 text-gray-800",children:"이용약관 동의"}),j.jsxs("div",{className:"flex-1 overflow-y-auto border rounded-lg p-4 text-sm text-gray-600 bg-gray-50 mb-6 leading-relaxed",children:[j.jsx("p",{className:"font-bold mb-2",children:"■ 서비스 이용약관"}),"본 서비스는 학생들의 신체 활동을 기록하고 관리하기 위한 목적으로 제공됩니다. 수집된 정보는 교육적 목적으로만 사용되며, 동의 없이 제3자에게 제공되지 않습니다..."]}),j.jsxs("div",{className:"space-y-3 mb-8",children:[j.jsxs("label",{className:"flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg",children:[j.jsx("input",{type:"checkbox",className:"w-5 h-5 accent-blue-600"}),j.jsx("span",{className:"text-gray-700",children:"이용약관에 동의합니다. (필수)"})]}),j.jsxs("label",{className:"flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg",children:[j.jsx("input",{type:"checkbox",className:"w-5 h-5 accent-blue-600"}),j.jsx("span",{className:"text-gray-700",children:"개인정보 수집 및 이용에 동의합니다. (필수)"})]})]}),j.jsxs("div",{className:"flex gap-3",children:[j.jsx("button",{onClick:()=>e("TYPE"),className:"flex-1 border-2 p-4 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-colors",children:"이전"}),j.jsx("button",{onClick:()=>e("AUTH"),className:"flex-1 bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg transition-colors",children:"다음 단계"})]})]});if(i==="AUTH")return j.jsxs("div",{className:"max-w-md mx-auto border min-h-screen bg-white p-8 flex flex-col items-center justify-center text-center shadow-xl",children:[j.jsx("div",{className:"bg-blue-50 p-6 rounded-full mb-6",children:j.jsx("span",{className:"text-6xl",children:"📱"})}),j.jsx("h2",{className:"text-2xl font-bold mb-2 text-gray-800",children:"본인 인증"}),j.jsxs("p",{className:"text-gray-500 mb-10 leading-relaxed",children:["안전한 서비스 이용을 위해",j.jsx("br",{}),"휴대폰 본인인증이 필요합니다."]}),j.jsx("button",{onClick:()=>{window.confirm("인증을 진행하시겠습니까?")&&e("SIGNUP")},className:"w-full bg-blue-600 text-white p-5 rounded-2xl font-bold shadow-xl hover:bg-blue-700 transition-all transform active:scale-95",children:"인증하기"}),j.jsx("button",{onClick:()=>e("TERMS"),className:"mt-6 text-gray-400 text-sm hover:underline",children:"이전으로"})]});if(i==="SIGNUP")return j.jsxs("div",{className:"max-w-md mx-auto border min-h-screen bg-white p-8 overflow-y-auto shadow-xl",children:[j.jsxs("h2",{className:"text-2xl font-bold mb-8 text-gray-800",children:["정보 입력 ",j.jsxs("span",{className:"text-blue-600 text-lg",children:["(",t==="student"?"학생":"선생님",")"]})]}),j.jsxs("div",{className:"space-y-6",children:[j.jsxs("div",{children:[j.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"이름"}),j.jsx("input",{className:"w-full border-2 p-3 rounded-xl focus:border-blue-500 outline-none transition-all",placeholder:"실명을 입력해주세요",value:Y,onChange:E=>X(E.target.value)})]}),j.jsxs("div",{children:[j.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"이메일 주소"}),j.jsx("input",{className:"w-full border-2 p-3 rounded-xl focus:border-blue-500 outline-none transition-all",placeholder:"example@email.com",type:"email",value:T,onChange:E=>x(E.target.value)})]}),j.jsxs("div",{children:[j.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"비밀번호"}),j.jsx("input",{className:"w-full border-2 p-3 rounded-xl focus:border-blue-500 outline-none transition-all",type:"password",placeholder:"8자 이상 (영문+숫자)",value:L,onChange:E=>z(E.target.value)})]})]}),j.jsx("button",{onClick:ze,className:"w-full bg-green-500 hover:bg-green-600 text-white p-5 rounded-2xl font-bold mt-12 shadow-lg transition-all transform active:scale-95",children:"가입 완료 및 로그인"})]});if(i==="MAIN")return j.jsxs("div",{className:"max-w-md mx-auto border min-h-screen bg-gray-50 flex flex-col shadow-xl",children:[j.jsx(k,{}),j.jsxs("div",{className:"p-8 flex-1",children:[j.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-sm mb-8",children:[j.jsxs("p",{className:"text-xl text-gray-800",children:[j.jsx("b",{children:Y||"사용자"}),"님, 환영합니다! 👋"]}),j.jsx("p",{className:"text-gray-500 text-sm mt-1",children:t==="student"?"오늘의 운동을 기록해보세요.":"학급 활동을 관리해보세요."})]}),j.jsxs("div",{className:"grid gap-4",children:[j.jsxs("button",{onClick:()=>e("ACTIVITY_LIST"),className:"p-6 bg-white border-2 border-blue-100 hover:border-blue-500 rounded-2xl text-left flex justify-between items-center transition-all shadow-sm group",children:[j.jsxs("div",{children:[j.jsx("p",{className:"font-bold text-lg text-blue-600",children:"운동 시작하기 →"}),j.jsx("p",{className:"text-sm text-gray-500",children:"다양한 신체 활동 알아보기"})]}),j.jsx("span",{className:"text-3xl group-hover:translate-x-2 transition-transform",children:"🏃‍♂️"})]}),j.jsxs("button",{className:"p-6 bg-white border-2 border-gray-100 hover:border-gray-300 rounded-2xl text-left flex justify-between items-center transition-all shadow-sm group",children:[j.jsxs("div",{children:[j.jsx("p",{className:"font-bold text-lg text-gray-700",children:"마이 페이지 →"}),j.jsx("p",{className:"text-sm text-gray-500",children:"나의 운동 기록과 통계"})]}),j.jsx("span",{className:"text-3xl group-hover:translate-x-2 transition-transform",children:"📊"})]}),t==="teacher"&&j.jsxs("button",{onClick:()=>e("TEACHER"),className:"p-6 bg-gray-800 hover:bg-gray-900 text-white rounded-2xl text-left flex justify-between items-center transition-all shadow-xl mt-4 group",children:[j.jsxs("div",{children:[j.jsx("p",{className:"font-bold text-lg",children:"학급 활동 리포트 →"}),j.jsx("p",{className:"text-sm text-gray-400",children:"학생들의 기록 실시간 확인"})]}),j.jsx("span",{className:"text-3xl group-hover:scale-110 transition-transform",children:"📋"})]})]})]})]});if(i==="ACTIVITY_LIST")return j.jsxs("div",{className:"max-w-md mx-auto border min-h-screen bg-white shadow-xl",children:[j.jsxs("div",{className:"p-5 border-b flex items-center gap-4 bg-white sticky top-0 z-10",children:[j.jsx("button",{onClick:()=>e("MAIN"),className:"text-2xl hover:text-blue-600 transition-colors",children:"←"}),j.jsx("span",{className:"font-bold text-lg text-gray-800",children:"활동 선택"})]}),j.jsx("div",{className:"p-6 space-y-3",children:["운동 체력 기르기","축구형 게임","배구형 게임","높이뛰기 도전","댄스 스포츠"].map((E,S)=>j.jsxs("div",{onClick:()=>e("ACTIVITY_DETAIL"),className:"p-5 border rounded-2xl hover:bg-blue-50 hover:border-blue-300 cursor-pointer flex justify-between items-center transition-all group",children:[j.jsxs("span",{className:"font-medium text-gray-700",children:[E,"를 알아보아요"]}),j.jsx("span",{className:"text-gray-300 group-hover:text-blue-500 transition-colors text-xl",children:"›"})]},S))})]});if(i==="ACTIVITY_DETAIL")return j.jsxs("div",{className:"max-w-md mx-auto border min-h-screen bg-white flex flex-col shadow-xl",children:[j.jsxs("div",{className:"p-5 border-b font-bold flex justify-between items-center bg-white sticky top-0 z-10",children:[j.jsx("span",{className:"text-gray-800",children:"활동 상세 기록"}),j.jsx("button",{onClick:()=>e("ACTIVITY_LIST"),className:"text-gray-400 hover:text-gray-600 text-2xl",children:"×"})]}),j.jsxs("div",{className:"p-6 flex-1 overflow-y-auto",children:[j.jsx("div",{className:"bg-blue-50 p-5 rounded-2xl mb-8 border border-blue-100",children:j.jsx("p",{className:"text-blue-800 text-sm leading-relaxed",children:"활동을 완료한 후, 느낀 점이나 소감을 아래에 자유롭게 작성해주세요. 사진이나 영상을 함께 업로드하면 더욱 좋습니다!"})}),j.jsxs("div",{className:"mb-8",children:[j.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-3",children:"인증 파일 (선택)"}),j.jsxs("div",{className:"border-2 border-dashed border-gray-200 p-10 text-center text-gray-400 rounded-2xl cursor-pointer hover:bg-gray-50 hover:border-blue-300 transition-all",children:[j.jsx("span",{className:"text-4xl block mb-2",children:"📸"}),"파일 선택 (사진/영상)"]})]}),j.jsxs("div",{className:"mb-8",children:[j.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-3",children:"활동 후기"}),j.jsx("textarea",{className:"w-full border-2 p-4 h-40 rounded-2xl focus:border-blue-500 outline-none transition-all resize-none text-sm",placeholder:"활동하면서 어떤 점이 즐거웠나요? 어려운 점은 없었나요?",value:W,onChange:E=>ge(E.target.value)})]}),j.jsx("button",{onClick:()=>Te("선택한 신체활동",W),className:"w-full bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-2xl font-bold shadow-xl transition-all transform active:scale-95",children:"인증 완료 및 제출"})]})]});if(i==="TEACHER")return j.jsxs("div",{className:"max-w-md mx-auto border min-h-screen bg-gray-50 flex flex-col shadow-xl",children:[j.jsxs("div",{className:"p-5 bg-gray-800 text-white flex justify-between items-center font-bold sticky top-0 z-10 shadow-lg",children:[j.jsxs("span",{className:"flex items-center gap-2",children:["학급 활동 리포트 ",j.jsx("span",{className:"bg-blue-500 text-[10px] px-2 py-0.5 rounded-full",children:"LIVE"})]}),j.jsx("button",{onClick:()=>e("MAIN"),className:"text-xs bg-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-600 transition-colors",children:"홈으로"})]}),j.jsx("div",{className:"p-5 flex-1 overflow-y-auto",children:h.length===0?j.jsx("div",{className:"text-center py-20 text-gray-400",children:"아직 제출된 활동 기록이 없습니다."}):j.jsx("div",{className:"space-y-4",children:h.map(E=>j.jsxs("div",{className:"bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md",children:[j.jsxs("div",{className:"flex justify-between items-start mb-3",children:[j.jsxs("div",{children:[j.jsx("span",{className:"font-bold text-gray-800 text-lg",children:E.name}),j.jsx("span",{className:"text-xs text-gray-400 ml-2",children:E.date})]}),j.jsx("span",{className:"bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold",children:"확인완료"})]}),j.jsx("p",{className:"text-sm font-semibold text-blue-600 mb-2",children:E.activity}),j.jsxs("p",{className:"text-gray-600 text-sm leading-relaxed bg-gray-50 p-3 rounded-xl italic",children:['"',E.feedback||"후기 없음",'"']})]},E.id))})})]})}Pw.createRoot(document.getElementById("root")).render(j.jsx(ww.StrictMode,{children:j.jsx(RR,{})}));
