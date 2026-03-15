(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function $g(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Nh={exports:{}},ca={},xh={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function iE(){if(mm)return Ae;mm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=N&&D[N]||D["@@iterator"],typeof D=="function"?D:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function W(D,z,le){this.props=D,this.context=z,this.refs=X,this.updater=le||j}W.prototype.isReactComponent={},W.prototype.setState=function(D,z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,z,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Ee(){}Ee.prototype=W.prototype;function ge(D,z,le){this.props=D,this.context=z,this.refs=X,this.updater=le||j}var ye=ge.prototype=new Ee;ye.constructor=ge,Y(ye,W.prototype),ye.isPureReactComponent=!0;var we=Array.isArray,ze=Object.prototype.hasOwnProperty,Te={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(D,z,le){var Ie,Se={},ke=null,Le=null;if(z!=null)for(Ie in z.ref!==void 0&&(Le=z.ref),z.key!==void 0&&(ke=""+z.key),z)ze.call(z,Ie)&&!k.hasOwnProperty(Ie)&&(Se[Ie]=z[Ie]);var Me=arguments.length-2;if(Me===1)Se.children=le;else if(1<Me){for(var Be=Array(Me),pt=0;pt<Me;pt++)Be[pt]=arguments[pt+2];Se.children=Be}if(D&&D.defaultProps)for(Ie in Me=D.defaultProps,Me)Se[Ie]===void 0&&(Se[Ie]=Me[Ie]);return{$$typeof:i,type:D,key:ke,ref:Le,props:Se,_owner:Te.current}}function S(D,z){return{$$typeof:i,type:D.type,key:z,ref:D.ref,props:D.props,_owner:D._owner}}function P(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function x(D){var z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(le){return z[le]})}var V=/\/+/g;function A(D,z){return typeof D=="object"&&D!==null&&D.key!=null?x(""+D.key):z.toString(36)}function et(D,z,le,Ie,Se){var ke=typeof D;(ke==="undefined"||ke==="boolean")&&(D=null);var Le=!1;if(D===null)Le=!0;else switch(ke){case"string":case"number":Le=!0;break;case"object":switch(D.$$typeof){case i:case e:Le=!0}}if(Le)return Le=D,Se=Se(Le),D=Ie===""?"."+A(Le,0):Ie,we(Se)?(le="",D!=null&&(le=D.replace(V,"$&/")+"/"),et(Se,z,le,"",function(pt){return pt})):Se!=null&&(P(Se)&&(Se=S(Se,le+(!Se.key||Le&&Le.key===Se.key?"":(""+Se.key).replace(V,"$&/")+"/")+D)),z.push(Se)),1;if(Le=0,Ie=Ie===""?".":Ie+":",we(D))for(var Me=0;Me<D.length;Me++){ke=D[Me];var Be=Ie+A(ke,Me);Le+=et(ke,z,le,Be,Se)}else if(Be=b(D),typeof Be=="function")for(D=Be.call(D),Me=0;!(ke=D.next()).done;)ke=ke.value,Be=Ie+A(ke,Me++),Le+=et(ke,z,le,Be,Se);else if(ke==="object")throw z=String(D),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return Le}function Ct(D,z,le){if(D==null)return D;var Ie=[],Se=0;return et(D,Ie,"","",function(ke){return z.call(le,ke,Se++)}),Ie}function kt(D){if(D._status===-1){var z=D._result;z=z(),z.then(function(le){(D._status===0||D._status===-1)&&(D._status=1,D._result=le)},function(le){(D._status===0||D._status===-1)&&(D._status=2,D._result=le)}),D._status===-1&&(D._status=0,D._result=z)}if(D._status===1)return D._result.default;throw D._result}var Ue={current:null},Z={transition:null},ce={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Te};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Ct,forEach:function(D,z,le){Ct(D,function(){z.apply(this,arguments)},le)},count:function(D){var z=0;return Ct(D,function(){z++}),z},toArray:function(D){return Ct(D,function(z){return z})||[]},only:function(D){if(!P(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ae.Component=W,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ge,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Ae.act=te,Ae.cloneElement=function(D,z,le){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ie=Y({},D.props),Se=D.key,ke=D.ref,Le=D._owner;if(z!=null){if(z.ref!==void 0&&(ke=z.ref,Le=Te.current),z.key!==void 0&&(Se=""+z.key),D.type&&D.type.defaultProps)var Me=D.type.defaultProps;for(Be in z)ze.call(z,Be)&&!k.hasOwnProperty(Be)&&(Ie[Be]=z[Be]===void 0&&Me!==void 0?Me[Be]:z[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=le;else if(1<Be){Me=Array(Be);for(var pt=0;pt<Be;pt++)Me[pt]=arguments[pt+2];Ie.children=Me}return{$$typeof:i,type:D.type,key:Se,ref:ke,props:Ie,_owner:Le}},Ae.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Ae.createElement=w,Ae.createFactory=function(D){var z=w.bind(null,D);return z.type=D,z},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(D){return{$$typeof:m,render:D}},Ae.isValidElement=P,Ae.lazy=function(D){return{$$typeof:T,_payload:{_status:-1,_result:D},_init:kt}},Ae.memo=function(D,z){return{$$typeof:v,type:D,compare:z===void 0?null:z}},Ae.startTransition=function(D){var z=Z.transition;Z.transition={};try{D()}finally{Z.transition=z}},Ae.unstable_act=te,Ae.useCallback=function(D,z){return Ue.current.useCallback(D,z)},Ae.useContext=function(D){return Ue.current.useContext(D)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(D){return Ue.current.useDeferredValue(D)},Ae.useEffect=function(D,z){return Ue.current.useEffect(D,z)},Ae.useId=function(){return Ue.current.useId()},Ae.useImperativeHandle=function(D,z,le){return Ue.current.useImperativeHandle(D,z,le)},Ae.useInsertionEffect=function(D,z){return Ue.current.useInsertionEffect(D,z)},Ae.useLayoutEffect=function(D,z){return Ue.current.useLayoutEffect(D,z)},Ae.useMemo=function(D,z){return Ue.current.useMemo(D,z)},Ae.useReducer=function(D,z,le){return Ue.current.useReducer(D,z,le)},Ae.useRef=function(D){return Ue.current.useRef(D)},Ae.useState=function(D){return Ue.current.useState(D)},Ae.useSyncExternalStore=function(D,z,le){return Ue.current.useSyncExternalStore(D,z,le)},Ae.useTransition=function(){return Ue.current.useTransition()},Ae.version="18.3.1",Ae}var gm;function gd(){return gm||(gm=1,xh.exports=iE()),xh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function sE(){if(ym)return ca;ym=1;var i=gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var T,N={},b=null,j=null;v!==void 0&&(b=""+v),g.key!==void 0&&(b=""+g.key),g.ref!==void 0&&(j=g.ref);for(T in g)s.call(g,T)&&!u.hasOwnProperty(T)&&(N[T]=g[T]);if(m&&m.defaultProps)for(T in g=m.defaultProps,g)N[T]===void 0&&(N[T]=g[T]);return{$$typeof:e,type:m,key:b,ref:j,props:N,_owner:o.current}}return ca.Fragment=t,ca.jsx=h,ca.jsxs=h,ca}var _m;function oE(){return _m||(_m=1,Nh.exports=sE()),Nh.exports}var B=oE(),mn=gd();const aE=$g(mn);var lu={},Dh={exports:{}},Qt={},Vh={exports:{}},Oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function lE(){return vm||(vm=1,(function(i){function e(Z,ce){var te=Z.length;Z.push(ce);e:for(;0<te;){var D=te-1>>>1,z=Z[D];if(0<o(z,ce))Z[D]=ce,Z[te]=z,te=D;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],te=Z.pop();if(te!==ce){Z[0]=te;e:for(var D=0,z=Z.length,le=z>>>1;D<le;){var Ie=2*(D+1)-1,Se=Z[Ie],ke=Ie+1,Le=Z[ke];if(0>o(Se,te))ke<z&&0>o(Le,Se)?(Z[D]=Le,Z[ke]=te,D=ke):(Z[D]=Se,Z[Ie]=te,D=Ie);else if(ke<z&&0>o(Le,te))Z[D]=Le,Z[ke]=te,D=ke;else break e}}return ce}function o(Z,ce){var te=Z.sortIndex-ce.sortIndex;return te!==0?te:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],T=1,N=null,b=3,j=!1,Y=!1,X=!1,W=typeof setTimeout=="function"?setTimeout:null,Ee=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(Z){for(var ce=t(v);ce!==null;){if(ce.callback===null)s(v);else if(ce.startTime<=Z)s(v),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(v)}}function we(Z){if(X=!1,ye(Z),!Y)if(t(g)!==null)Y=!0,kt(ze);else{var ce=t(v);ce!==null&&Ue(we,ce.startTime-Z)}}function ze(Z,ce){Y=!1,X&&(X=!1,Ee(w),w=-1),j=!0;var te=b;try{for(ye(ce),N=t(g);N!==null&&(!(N.expirationTime>ce)||Z&&!x());){var D=N.callback;if(typeof D=="function"){N.callback=null,b=N.priorityLevel;var z=D(N.expirationTime<=ce);ce=i.unstable_now(),typeof z=="function"?N.callback=z:N===t(g)&&s(g),ye(ce)}else s(g);N=t(g)}if(N!==null)var le=!0;else{var Ie=t(v);Ie!==null&&Ue(we,Ie.startTime-ce),le=!1}return le}finally{N=null,b=te,j=!1}}var Te=!1,k=null,w=-1,S=5,P=-1;function x(){return!(i.unstable_now()-P<S)}function V(){if(k!==null){var Z=i.unstable_now();P=Z;var ce=!0;try{ce=k(!0,Z)}finally{ce?A():(Te=!1,k=null)}}else Te=!1}var A;if(typeof ge=="function")A=function(){ge(V)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Ct=et.port2;et.port1.onmessage=V,A=function(){Ct.postMessage(null)}}else A=function(){W(V,0)};function kt(Z){k=Z,Te||(Te=!0,A())}function Ue(Z,ce){w=W(function(){Z(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){Y||j||(Y=!0,kt(ze))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(Z){switch(b){case 1:case 2:case 3:var ce=3;break;default:ce=b}var te=b;b=ce;try{return Z()}finally{b=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=b;b=Z;try{return ce()}finally{b=te}},i.unstable_scheduleCallback=function(Z,ce,te){var D=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?D+te:D):te=D,Z){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=te+z,Z={id:T++,callback:ce,priorityLevel:Z,startTime:te,expirationTime:z,sortIndex:-1},te>D?(Z.sortIndex=te,e(v,Z),t(g)===null&&Z===t(v)&&(X?(Ee(w),w=-1):X=!0,Ue(we,te-D))):(Z.sortIndex=z,e(g,Z),Y||j||(Y=!0,kt(ze))),Z},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(Z){var ce=b;return function(){var te=b;b=ce;try{return Z.apply(this,arguments)}finally{b=te}}}})(Oh)),Oh}var Em;function uE(){return Em||(Em=1,Vh.exports=lE()),Vh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function cE(){if(wm)return Qt;wm=1;var i=gd(),e=uE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},N={};function b(n){return g.call(N,n)?!0:g.call(T,n)?!1:v.test(n)?N[n]=!0:(T[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ee=/[\-:]([a-z])/g;function ge(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Ee,ge);W[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Ee,ge);W[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Ee,ge);W[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,a,d,c)&&(a=null),c||d===null?b(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),Te=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),x=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Ct=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,D;function z(n){if(D===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var le=!1;function Ie(n,r){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,I=p.length-1;1<=_&&0<=I&&d[_]!==p[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==p[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==p[I]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=I);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?z(n):""}function Se(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Te:return"Portal";case S:return"Profiler";case w:return"StrictMode";case A:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ct:return r=n.displayName||null,r!==null?r:ke(n.type)||"Memo";case kt:r=n._payload,n=n._init;try{return ke(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pt(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Zn(n){n._valueTracker||(n._valueTracker=pt(n))}function es(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function pi(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ts(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function go(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function yo(n,r){go(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ns(n,r.type,a):r.hasOwnProperty("defaultValue")&&ns(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ka(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ns(n,r,a){(r!=="number"||Pr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var er=Array.isArray;function tr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function _o(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function rs(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(er(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function is(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function vo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var nr,Eo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(nr=nr||document.createElement("div"),nr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=nr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Cr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gi=["Webkit","ms","Moz","O"];Object.keys(mi).forEach(function(n){gi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),mi[r]=mi[n]})});function wo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||mi.hasOwnProperty(n)&&mi[n]?(""+r).trim():r+"px"}function To(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=wo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Io=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function So(n,r){if(r){if(Io[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ao(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function ss(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var os=null,sn=null,Mn=null;function as(n){if(n=Qo(n)){if(typeof os!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Il(r),os(n.stateNode,n.type,r))}}function bn(n){sn?Mn?Mn.push(n):Mn=[n]:sn=n}function Ro(){if(sn){var n=sn,r=Mn;if(Mn=sn=null,as(n),r)for(n=0;n<r.length;n++)as(r[n])}}function _i(n,r){return n(r)}function Po(){}var rr=!1;function Co(n,r,a){if(rr)return n(r,a);rr=!0;try{return _i(n,r,a)}finally{rr=!1,(sn!==null||Mn!==null)&&(Po(),Ro())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=Il(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ls=!1;if(m)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){ls=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{ls=!1}function vi(n,r,a,c,d,p,_,I,R){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(H){this.onError(H)}}var Ei=!1,us=null,vn=!1,ko=null,ic={onError:function(n){Ei=!0,us=n}};function cs(n,r,a,c,d,p,_,I,R){Ei=!1,us=null,vi.apply(ic,arguments)}function Ga(n,r,a,c,d,p,_,I,R){if(cs.apply(this,arguments),Ei){if(Ei){var F=us;Ei=!1,us=null}else throw Error(t(198));vn||(vn=!0,ko=F)}}function En(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function wi(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function wn(n){if(En(n)!==n)throw Error(t(188))}function Qa(n){var r=n.alternate;if(!r){if(r=En(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return wn(d),n;if(p===c)return wn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=p;break}if(I===c){_=!0,c=d,a=p;break}I=I.sibling}if(!_){for(I=p.child;I;){if(I===a){_=!0,a=p,c=d;break}if(I===c){_=!0,c=p,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function No(n){return n=Qa(n),n!==null?hs(n):null}function hs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=hs(n);if(r!==null)return r;n=n.sibling}return null}var ds=e.unstable_scheduleCallback,xo=e.unstable_cancelCallback,Ya=e.unstable_shouldYield,sc=e.unstable_requestPaint,$e=e.unstable_now,Xa=e.unstable_getCurrentPriorityLevel,Ti=e.unstable_ImmediatePriority,kr=e.unstable_UserBlockingPriority,on=e.unstable_NormalPriority,Do=e.unstable_LowPriority,Ja=e.unstable_IdlePriority,Ii=null,Xt=null;function Za(n){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Ii,n,void 0,(n.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:tl,Vo=Math.log,el=Math.LN2;function tl(n){return n>>>=0,n===0?32:31-(Vo(n)/el|0)|0}var fs=64,ps=4194304;function Nr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Si(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Nr(I):(p&=_,p!==0&&(c=Nr(p)))}else _=a&~d,_!==0?c=Nr(_):p!==0&&(c=Nr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ft(r),d=1<<a,c|=n[a],r&=~d;return c}function oc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ir(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ft(p),I=1<<_,R=d[_];R===-1?((I&a)===0||(I&c)!==0)&&(d[_]=oc(I,r)):R<=r&&(n.expiredLanes|=I),p&=~I}}function Jt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ai(){var n=fs;return fs<<=1,(fs&4194240)===0&&(fs=64),n}function xr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Dr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ft(r),n[r]=a}function je(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ft(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Vr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ft(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function Or(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var nl,ms,rl,il,sl,Oo=!1,Fn=[],Et=null,Tn=null,In=null,Lr=new Map,an=new Map,Un=[],ac="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ol(n,r){switch(n){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Lr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(r.pointerId)}}function Bt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Qo(r),r!==null&&ms(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function lc(n,r,a,c,d){switch(r){case"focusin":return Et=Bt(Et,n,r,a,c,d),!0;case"dragenter":return Tn=Bt(Tn,n,r,a,c,d),!0;case"mouseover":return In=Bt(In,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Lr.set(p,Bt(Lr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,an.set(p,Bt(an.get(p)||null,n,r,a,c,d)),!0}return!1}function al(n){var r=Ni(n.target);if(r!==null){var a=En(r);if(a!==null){if(r=a.tag,r===13){if(r=wi(a),r!==null){n.blockedOn=r,sl(n.priority,function(){rl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=gs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);yi=c,a.target.dispatchEvent(c),yi=null}else return r=Qo(a),r!==null&&ms(r),n.blockedOn=a,!1;r.shift()}return!0}function Ri(n,r,a){sr(n)&&a.delete(r)}function ll(){Oo=!1,Et!==null&&sr(Et)&&(Et=null),Tn!==null&&sr(Tn)&&(Tn=null),In!==null&&sr(In)&&(In=null),Lr.forEach(Ri),an.forEach(Ri)}function Sn(n,r){n.blockedOn===r&&(n.blockedOn=null,Oo||(Oo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ll)))}function An(n){function r(d){return Sn(d,n)}if(0<Fn.length){Sn(Fn[0],n);for(var a=1;a<Fn.length;a++){var c=Fn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Et!==null&&Sn(Et,n),Tn!==null&&Sn(Tn,n),In!==null&&Sn(In,n),Lr.forEach(r),an.forEach(r),a=0;a<Un.length;a++)c=Un[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Un.length&&(a=Un[0],a.blockedOn===null);)al(a),a.blockedOn===null&&Un.shift()}var or=we.ReactCurrentBatchConfig,Mr=!0;function Ge(n,r,a,c){var d=Pe,p=or.transition;or.transition=null;try{Pe=1,Lo(n,r,a,c)}finally{Pe=d,or.transition=p}}function uc(n,r,a,c){var d=Pe,p=or.transition;or.transition=null;try{Pe=4,Lo(n,r,a,c)}finally{Pe=d,or.transition=p}}function Lo(n,r,a,c){if(Mr){var d=gs(n,r,a,c);if(d===null)Ec(n,r,c,Pi,a),ol(n,c);else if(lc(d,n,r,a,c))c.stopPropagation();else if(ol(n,c),r&4&&-1<ac.indexOf(n)){for(;d!==null;){var p=Qo(d);if(p!==null&&nl(p),p=gs(n,r,a,c),p===null&&Ec(n,r,c,Pi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Ec(n,r,c,null,a)}}var Pi=null;function gs(n,r,a,c){if(Pi=null,n=ss(c),n=Ni(n),n!==null)if(r=En(n),r===null)n=null;else if(a=r.tag,a===13){if(n=wi(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Pi=n,null}function Mo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xa()){case Ti:return 1;case kr:return 4;case on:case Do:return 16;case Ja:return 536870912;default:return 16}default:return 16}}var Zt=null,ys=null,$t=null;function bo(){if($t)return $t;var n,r=ys,a=r.length,c,d="value"in Zt?Zt.value:Zt.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return $t=d.slice(n,1<c?1-c:void 0)}function _s(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function jn(){return!0}function Fo(){return!1}function wt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?jn:Fo,this.isPropagationStopped=Fo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),r}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=wt(Rn),zn=te({},Rn,{view:0,detail:0}),cc=wt(zn),Es,ar,br,Ci=te({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==br&&(br&&n.type==="mousemove"?(Es=n.screenX-br.screenX,ar=n.screenY-br.screenY):ar=Es=0,br=n),Es)},movementY:function(n){return"movementY"in n?n.movementY:ar}}),ws=wt(Ci),Uo=te({},Ci,{dataTransfer:0}),ul=wt(Uo),Ts=te({},zn,{relatedTarget:0}),Is=wt(Ts),cl=te({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),lr=wt(cl),hl=te({},Rn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dl=wt(hl),fl=te({},Rn,{data:0}),jo=wt(fl),Ss={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ut={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ml(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=pl[n])?!!r[n]:!1}function Bn(){return ml}var l=te({},zn,{key:function(n){if(n.key){var r=Ss[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=_s(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ut[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(n){return n.type==="keypress"?_s(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_s(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=wt(l),y=te({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=wt(y),O=te({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn}),U=wt(O),J=te({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),be=wt(J),ct=te({},Ci,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=wt(ct),mt=[9,13,27,32],it=m&&"CompositionEvent"in window,ln=null;m&&"documentMode"in document&&(ln=document.documentMode);var en=m&&"TextEvent"in window&&!ln,ki=m&&(!it||ln&&8<ln&&11>=ln),As=" ",uf=!1;function cf(n,r){switch(n){case"keyup":return mt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function tv(n,r){switch(n){case"compositionend":return hf(r);case"keypress":return r.which!==32?null:(uf=!0,As);case"textInput":return n=r.data,n===As&&uf?null:n;default:return null}}function nv(n,r){if(Rs)return n==="compositionend"||!it&&cf(n,r)?(n=bo(),$t=ys=Zt=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ki&&r.locale!=="ko"?null:r.data;default:return null}}var rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function df(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!rv[n.type]:r==="textarea"}function ff(n,r,a,c){bn(c),r=El(r,"onChange"),0<r.length&&(a=new vs("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var zo=null,Bo=null;function iv(n){xf(n,0)}function gl(n){var r=xs(n);if(es(r))return n}function sv(n,r){if(n==="change")return r}var pf=!1;if(m){var hc;if(m){var dc="oninput"in document;if(!dc){var mf=document.createElement("div");mf.setAttribute("oninput","return;"),dc=typeof mf.oninput=="function"}hc=dc}else hc=!1;pf=hc&&(!document.documentMode||9<document.documentMode)}function gf(){zo&&(zo.detachEvent("onpropertychange",yf),Bo=zo=null)}function yf(n){if(n.propertyName==="value"&&gl(Bo)){var r=[];ff(r,Bo,n,ss(n)),Co(iv,r)}}function ov(n,r,a){n==="focusin"?(gf(),zo=r,Bo=a,zo.attachEvent("onpropertychange",yf)):n==="focusout"&&gf()}function av(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gl(Bo)}function lv(n,r){if(n==="click")return gl(r)}function uv(n,r){if(n==="input"||n==="change")return gl(r)}function cv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pn=typeof Object.is=="function"?Object.is:cv;function $o(n,r){if(Pn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Pn(n[d],r[d]))return!1}return!0}function _f(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vf(n,r){var a=_f(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_f(a)}}function Ef(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ef(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function wf(){for(var n=window,r=Pr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Pr(n.document)}return r}function fc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function hv(n){var r=wf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Ef(a.ownerDocument.documentElement,a)){if(c!==null&&fc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=vf(a,p);var _=vf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var dv=m&&"documentMode"in document&&11>=document.documentMode,Ps=null,pc=null,qo=null,mc=!1;function Tf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||Ps==null||Ps!==Pr(c)||(c=Ps,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),qo&&$o(qo,c)||(qo=c,c=El(pc,"onSelect"),0<c.length&&(r=new vs("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ps)))}function yl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Cs={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},gc={},If={};m&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function _l(n){if(gc[n])return gc[n];if(!Cs[n])return n;var r=Cs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in If)return gc[n]=r[a];return n}var Sf=_l("animationend"),Af=_l("animationiteration"),Rf=_l("animationstart"),Pf=_l("transitionend"),Cf=new Map,kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,r){Cf.set(n,r),u(r,[n])}for(var yc=0;yc<kf.length;yc++){var _c=kf[yc],fv=_c.toLowerCase(),pv=_c[0].toUpperCase()+_c.slice(1);Fr(fv,"on"+pv)}Fr(Sf,"onAnimationEnd"),Fr(Af,"onAnimationIteration"),Fr(Rf,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(Pf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function Nf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Ga(c,r,void 0,n),n.currentTarget=null}function xf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var I=c[_],R=I.instance,F=I.currentTarget;if(I=I.listener,R!==p&&d.isPropagationStopped())break e;Nf(d,I,F),p=R}else for(_=0;_<c.length;_++){if(I=c[_],R=I.instance,F=I.currentTarget,I=I.listener,R!==p&&d.isPropagationStopped())break e;Nf(d,I,F),p=R}}}if(vn)throw n=ko,vn=!1,ko=null,n}function We(n,r){var a=r[Rc];a===void 0&&(a=r[Rc]=new Set);var c=n+"__bubble";a.has(c)||(Df(r,n,2,!1),a.add(c))}function vc(n,r,a){var c=0;r&&(c|=4),Df(a,n,c,r)}var vl="_reactListening"+Math.random().toString(36).slice(2);function Ho(n){if(!n[vl]){n[vl]=!0,s.forEach(function(a){a!=="selectionchange"&&(mv.has(a)||vc(a,!1,n),vc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[vl]||(r[vl]=!0,vc("selectionchange",!1,r))}}function Df(n,r,a,c){switch(Mo(r)){case 1:var d=Ge;break;case 4:d=uc;break;default:d=Lo}a=d.bind(null,r,a,n),d=void 0,!ls||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Ec(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;I!==null;){if(_=Ni(I),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}I=I.parentNode}}c=c.return}Co(function(){var F=p,H=ss(a),G=[];e:{var q=Cf.get(n);if(q!==void 0){var ee=vs,re=n;switch(n){case"keypress":if(_s(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":re="focus",ee=Is;break;case"focusout":re="blur",ee=Is;break;case"beforeblur":case"afterblur":ee=Is;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=ul;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=U;break;case Sf:case Af:case Rf:ee=lr;break;case Pf:ee=be;break;case"scroll":ee=cc;break;case"wheel":ee=Ne;break;case"copy":case"cut":case"paste":ee=dl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=E}var se=(r&4)!==0,nt=!se&&n==="scroll",L=se?q!==null?q+"Capture":null:q;se=[];for(var C=F,M;C!==null;){M=C;var Q=M.stateNode;if(M.tag===5&&Q!==null&&(M=Q,L!==null&&(Q=tt(C,L),Q!=null&&se.push(Ko(C,Q,M)))),nt)break;C=C.return}0<se.length&&(q=new ee(q,re,null,a,H),G.push({event:q,listeners:se}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",q&&a!==yi&&(re=a.relatedTarget||a.fromElement)&&(Ni(re)||re[ur]))break e;if((ee||q)&&(q=H.window===H?H:(q=H.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(re=a.relatedTarget||a.toElement,ee=F,re=re?Ni(re):null,re!==null&&(nt=En(re),re!==nt||re.tag!==5&&re.tag!==6)&&(re=null)):(ee=null,re=F),ee!==re)){if(se=ws,Q="onMouseLeave",L="onMouseEnter",C="mouse",(n==="pointerout"||n==="pointerover")&&(se=E,Q="onPointerLeave",L="onPointerEnter",C="pointer"),nt=ee==null?q:xs(ee),M=re==null?q:xs(re),q=new se(Q,C+"leave",ee,a,H),q.target=nt,q.relatedTarget=M,Q=null,Ni(H)===F&&(se=new se(L,C+"enter",re,a,H),se.target=M,se.relatedTarget=nt,Q=se),nt=Q,ee&&re)t:{for(se=ee,L=re,C=0,M=se;M;M=ks(M))C++;for(M=0,Q=L;Q;Q=ks(Q))M++;for(;0<C-M;)se=ks(se),C--;for(;0<M-C;)L=ks(L),M--;for(;C--;){if(se===L||L!==null&&se===L.alternate)break t;se=ks(se),L=ks(L)}se=null}else se=null;ee!==null&&Vf(G,q,ee,se,!1),re!==null&&nt!==null&&Vf(G,nt,re,se,!0)}}e:{if(q=F?xs(F):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var ae=sv;else if(df(q))if(pf)ae=uv;else{ae=av;var he=ov}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ae=lv);if(ae&&(ae=ae(n,F))){ff(G,ae,a,H);break e}he&&he(n,q,F),n==="focusout"&&(he=q._wrapperState)&&he.controlled&&q.type==="number"&&ns(q,"number",q.value)}switch(he=F?xs(F):window,n){case"focusin":(df(he)||he.contentEditable==="true")&&(Ps=he,pc=F,qo=null);break;case"focusout":qo=pc=Ps=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,Tf(G,a,H);break;case"selectionchange":if(dv)break;case"keydown":case"keyup":Tf(G,a,H)}var de;if(it)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Rs?cf(n,a)&&(pe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(ki&&a.locale!=="ko"&&(Rs||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Rs&&(de=bo()):(Zt=H,ys="value"in Zt?Zt.value:Zt.textContent,Rs=!0)),he=El(F,pe),0<he.length&&(pe=new jo(pe,n,null,a,H),G.push({event:pe,listeners:he}),de?pe.data=de:(de=hf(a),de!==null&&(pe.data=de)))),(de=en?tv(n,a):nv(n,a))&&(F=El(F,"onBeforeInput"),0<F.length&&(H=new jo("onBeforeInput","beforeinput",null,a,H),G.push({event:H,listeners:F}),H.data=de))}xf(G,r)})}function Ko(n,r,a){return{instance:n,listener:r,currentTarget:a}}function El(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(Ko(n,p,d)),p=tt(n,r),p!=null&&c.push(Ko(n,p,d))),n=n.return}return c}function ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var I=a,R=I.alternate,F=I.stateNode;if(R!==null&&R===c)break;I.tag===5&&F!==null&&(I=F,d?(R=tt(a,p),R!=null&&_.unshift(Ko(a,R,I))):d||(R=tt(a,p),R!=null&&_.push(Ko(a,R,I)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var gv=/\r\n?/g,yv=/\u0000|\uFFFD/g;function Of(n){return(typeof n=="string"?n:""+n).replace(gv,`
`).replace(yv,"")}function wl(n,r,a){if(r=Of(r),Of(n)!==r&&a)throw Error(t(425))}function Tl(){}var wc=null,Tc=null;function Ic(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,_v=typeof clearTimeout=="function"?clearTimeout:void 0,Lf=typeof Promise=="function"?Promise:void 0,vv=typeof queueMicrotask=="function"?queueMicrotask:typeof Lf<"u"?function(n){return Lf.resolve(null).then(n).catch(Ev)}:Sc;function Ev(n){setTimeout(function(){throw n})}function Ac(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),An(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);An(r)}function Ur(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Mf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ns,Go="__reactProps$"+Ns,ur="__reactContainer$"+Ns,Rc="__reactEvents$"+Ns,wv="__reactListeners$"+Ns,Tv="__reactHandles$"+Ns;function Ni(n){var r=n[$n];if(r)return r;for(var a=n.parentNode;a;){if(r=a[ur]||a[$n]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Mf(n);n!==null;){if(a=n[$n])return a;n=Mf(n)}return r}n=a,a=n.parentNode}return null}function Qo(n){return n=n[$n]||n[ur],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Il(n){return n[Go]||null}var Pc=[],Ds=-1;function jr(n){return{current:n}}function He(n){0>Ds||(n.current=Pc[Ds],Pc[Ds]=null,Ds--)}function qe(n,r){Ds++,Pc[Ds]=n.current,n.current=r}var zr={},Nt=jr(zr),qt=jr(!1),xi=zr;function Vs(n,r){var a=n.type.contextTypes;if(!a)return zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function Sl(){He(qt),He(Nt)}function bf(n,r,a){if(Nt.current!==zr)throw Error(t(168));qe(Nt,r),qe(qt,a)}function Ff(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return te({},a,c)}function Al(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zr,xi=Nt.current,qe(Nt,n),qe(qt,qt.current),!0}function Uf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ff(n,r,xi),c.__reactInternalMemoizedMergedChildContext=n,He(qt),He(Nt),qe(Nt,n)):He(qt),qe(qt,a)}var cr=null,Rl=!1,Cc=!1;function jf(n){cr===null?cr=[n]:cr.push(n)}function Iv(n){Rl=!0,jf(n)}function Br(){if(!Cc&&cr!==null){Cc=!0;var n=0,r=Pe;try{var a=cr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}cr=null,Rl=!1}catch(d){throw cr!==null&&(cr=cr.slice(n+1)),ds(Ti,Br),d}finally{Pe=r,Cc=!1}}return null}var Os=[],Ls=0,Pl=null,Cl=0,un=[],cn=0,Di=null,hr=1,dr="";function Vi(n,r){Os[Ls++]=Cl,Os[Ls++]=Pl,Pl=n,Cl=r}function zf(n,r,a){un[cn++]=hr,un[cn++]=dr,un[cn++]=Di,Di=n;var c=hr;n=dr;var d=32-Ft(c)-1;c&=~(1<<d),a+=1;var p=32-Ft(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,hr=1<<32-Ft(r)+d|a<<d|c,dr=p+n}else hr=1<<p|a<<d|c,dr=n}function kc(n){n.return!==null&&(Vi(n,1),zf(n,1,0))}function Nc(n){for(;n===Pl;)Pl=Os[--Ls],Os[Ls]=null,Cl=Os[--Ls],Os[Ls]=null;for(;n===Di;)Di=un[--cn],un[cn]=null,dr=un[--cn],un[cn]=null,hr=un[--cn],un[cn]=null}var tn=null,nn=null,Qe=!1,Cn=null;function Bf(n,r){var a=pn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function $f(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,tn=n,nn=Ur(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,tn=n,nn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Di!==null?{id:hr,overflow:dr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=pn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,tn=n,nn=null,!0):!1;default:return!1}}function xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Dc(n){if(Qe){var r=nn;if(r){var a=r;if(!$f(n,r)){if(xc(n))throw Error(t(418));r=Ur(a.nextSibling);var c=tn;r&&$f(n,r)?Bf(c,a):(n.flags=n.flags&-4097|2,Qe=!1,tn=n)}}else{if(xc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,tn=n}}}function qf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;tn=n}function kl(n){if(n!==tn)return!1;if(!Qe)return qf(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Ic(n.type,n.memoizedProps)),r&&(r=nn)){if(xc(n))throw Wf(),Error(t(418));for(;r;)Bf(n,r),r=Ur(r.nextSibling)}if(qf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){nn=Ur(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}nn=null}}else nn=tn?Ur(n.stateNode.nextSibling):null;return!0}function Wf(){for(var n=nn;n;)n=Ur(n.nextSibling)}function Ms(){nn=tn=null,Qe=!1}function Vc(n){Cn===null?Cn=[n]:Cn.push(n)}var Sv=we.ReactCurrentBatchConfig;function Yo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var I=d.refs;_===null?delete I[p]:I[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Nl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Hf(n){var r=n._init;return r(n._payload)}function Kf(n){function r(L,C){if(n){var M=L.deletions;M===null?(L.deletions=[C],L.flags|=16):M.push(C)}}function a(L,C){if(!n)return null;for(;C!==null;)r(L,C),C=C.sibling;return null}function c(L,C){for(L=new Map;C!==null;)C.key!==null?L.set(C.key,C):L.set(C.index,C),C=C.sibling;return L}function d(L,C){return L=Yr(L,C),L.index=0,L.sibling=null,L}function p(L,C,M){return L.index=M,n?(M=L.alternate,M!==null?(M=M.index,M<C?(L.flags|=2,C):M):(L.flags|=2,C)):(L.flags|=1048576,C)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,C,M,Q){return C===null||C.tag!==6?(C=Sh(M,L.mode,Q),C.return=L,C):(C=d(C,M),C.return=L,C)}function R(L,C,M,Q){var ae=M.type;return ae===k?H(L,C,M.props.children,Q,M.key):C!==null&&(C.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===kt&&Hf(ae)===C.type)?(Q=d(C,M.props),Q.ref=Yo(L,C,M),Q.return=L,Q):(Q=eu(M.type,M.key,M.props,null,L.mode,Q),Q.ref=Yo(L,C,M),Q.return=L,Q)}function F(L,C,M,Q){return C===null||C.tag!==4||C.stateNode.containerInfo!==M.containerInfo||C.stateNode.implementation!==M.implementation?(C=Ah(M,L.mode,Q),C.return=L,C):(C=d(C,M.children||[]),C.return=L,C)}function H(L,C,M,Q,ae){return C===null||C.tag!==7?(C=zi(M,L.mode,Q,ae),C.return=L,C):(C=d(C,M),C.return=L,C)}function G(L,C,M){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Sh(""+C,L.mode,M),C.return=L,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ze:return M=eu(C.type,C.key,C.props,null,L.mode,M),M.ref=Yo(L,null,C),M.return=L,M;case Te:return C=Ah(C,L.mode,M),C.return=L,C;case kt:var Q=C._init;return G(L,Q(C._payload),M)}if(er(C)||ce(C))return C=zi(C,L.mode,M,null),C.return=L,C;Nl(L,C)}return null}function q(L,C,M,Q){var ae=C!==null?C.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return ae!==null?null:I(L,C,""+M,Q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ze:return M.key===ae?R(L,C,M,Q):null;case Te:return M.key===ae?F(L,C,M,Q):null;case kt:return ae=M._init,q(L,C,ae(M._payload),Q)}if(er(M)||ce(M))return ae!==null?null:H(L,C,M,Q,null);Nl(L,M)}return null}function ee(L,C,M,Q,ae){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return L=L.get(M)||null,I(C,L,""+Q,ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case ze:return L=L.get(Q.key===null?M:Q.key)||null,R(C,L,Q,ae);case Te:return L=L.get(Q.key===null?M:Q.key)||null,F(C,L,Q,ae);case kt:var he=Q._init;return ee(L,C,M,he(Q._payload),ae)}if(er(Q)||ce(Q))return L=L.get(M)||null,H(C,L,Q,ae,null);Nl(C,Q)}return null}function re(L,C,M,Q){for(var ae=null,he=null,de=C,pe=C=0,_t=null;de!==null&&pe<M.length;pe++){de.index>pe?(_t=de,de=null):_t=de.sibling;var Ve=q(L,de,M[pe],Q);if(Ve===null){de===null&&(de=_t);break}n&&de&&Ve.alternate===null&&r(L,de),C=p(Ve,C,pe),he===null?ae=Ve:he.sibling=Ve,he=Ve,de=_t}if(pe===M.length)return a(L,de),Qe&&Vi(L,pe),ae;if(de===null){for(;pe<M.length;pe++)de=G(L,M[pe],Q),de!==null&&(C=p(de,C,pe),he===null?ae=de:he.sibling=de,he=de);return Qe&&Vi(L,pe),ae}for(de=c(L,de);pe<M.length;pe++)_t=ee(de,L,pe,M[pe],Q),_t!==null&&(n&&_t.alternate!==null&&de.delete(_t.key===null?pe:_t.key),C=p(_t,C,pe),he===null?ae=_t:he.sibling=_t,he=_t);return n&&de.forEach(function(Xr){return r(L,Xr)}),Qe&&Vi(L,pe),ae}function se(L,C,M,Q){var ae=ce(M);if(typeof ae!="function")throw Error(t(150));if(M=ae.call(M),M==null)throw Error(t(151));for(var he=ae=null,de=C,pe=C=0,_t=null,Ve=M.next();de!==null&&!Ve.done;pe++,Ve=M.next()){de.index>pe?(_t=de,de=null):_t=de.sibling;var Xr=q(L,de,Ve.value,Q);if(Xr===null){de===null&&(de=_t);break}n&&de&&Xr.alternate===null&&r(L,de),C=p(Xr,C,pe),he===null?ae=Xr:he.sibling=Xr,he=Xr,de=_t}if(Ve.done)return a(L,de),Qe&&Vi(L,pe),ae;if(de===null){for(;!Ve.done;pe++,Ve=M.next())Ve=G(L,Ve.value,Q),Ve!==null&&(C=p(Ve,C,pe),he===null?ae=Ve:he.sibling=Ve,he=Ve);return Qe&&Vi(L,pe),ae}for(de=c(L,de);!Ve.done;pe++,Ve=M.next())Ve=ee(de,L,pe,Ve.value,Q),Ve!==null&&(n&&Ve.alternate!==null&&de.delete(Ve.key===null?pe:Ve.key),C=p(Ve,C,pe),he===null?ae=Ve:he.sibling=Ve,he=Ve);return n&&de.forEach(function(rE){return r(L,rE)}),Qe&&Vi(L,pe),ae}function nt(L,C,M,Q){if(typeof M=="object"&&M!==null&&M.type===k&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case ze:e:{for(var ae=M.key,he=C;he!==null;){if(he.key===ae){if(ae=M.type,ae===k){if(he.tag===7){a(L,he.sibling),C=d(he,M.props.children),C.return=L,L=C;break e}}else if(he.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===kt&&Hf(ae)===he.type){a(L,he.sibling),C=d(he,M.props),C.ref=Yo(L,he,M),C.return=L,L=C;break e}a(L,he);break}else r(L,he);he=he.sibling}M.type===k?(C=zi(M.props.children,L.mode,Q,M.key),C.return=L,L=C):(Q=eu(M.type,M.key,M.props,null,L.mode,Q),Q.ref=Yo(L,C,M),Q.return=L,L=Q)}return _(L);case Te:e:{for(he=M.key;C!==null;){if(C.key===he)if(C.tag===4&&C.stateNode.containerInfo===M.containerInfo&&C.stateNode.implementation===M.implementation){a(L,C.sibling),C=d(C,M.children||[]),C.return=L,L=C;break e}else{a(L,C);break}else r(L,C);C=C.sibling}C=Ah(M,L.mode,Q),C.return=L,L=C}return _(L);case kt:return he=M._init,nt(L,C,he(M._payload),Q)}if(er(M))return re(L,C,M,Q);if(ce(M))return se(L,C,M,Q);Nl(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,C!==null&&C.tag===6?(a(L,C.sibling),C=d(C,M),C.return=L,L=C):(a(L,C),C=Sh(M,L.mode,Q),C.return=L,L=C),_(L)):a(L,C)}return nt}var bs=Kf(!0),Gf=Kf(!1),xl=jr(null),Dl=null,Fs=null,Oc=null;function Lc(){Oc=Fs=Dl=null}function Mc(n){var r=xl.current;He(xl),n._currentValue=r}function bc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Us(n,r){Dl=n,Oc=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Ht=!0),n.firstContext=null)}function hn(n){var r=n._currentValue;if(Oc!==n)if(n={context:n,memoizedValue:r,next:null},Fs===null){if(Dl===null)throw Error(t(308));Fs=n,Dl.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return r}var Oi=null;function Fc(n){Oi===null?Oi=[n]:Oi.push(n)}function Qf(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Fc(r)):(a.next=d.next,d.next=a),r.interleaved=a,fr(n,c)}function fr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var $r=!1;function Uc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(De&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,fr(n,a)}return d=c.interleaved,d===null?(r.next=r,Fc(c)):(r.next=d.next,d.next=r),c.interleaved=r,fr(n,a)}function Vl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Vr(n,a)}}function Xf(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Ol(n,r,a,c){var d=n.updateQueue;$r=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var R=I,F=R.next;R.next=null,_===null?p=F:_.next=F,_=R;var H=n.alternate;H!==null&&(H=H.updateQueue,I=H.lastBaseUpdate,I!==_&&(I===null?H.firstBaseUpdate=F:I.next=F,H.lastBaseUpdate=R))}if(p!==null){var G=d.baseState;_=0,H=F=R=null,I=p;do{var q=I.lane,ee=I.eventTime;if((c&q)===q){H!==null&&(H=H.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var re=n,se=I;switch(q=r,ee=a,se.tag){case 1:if(re=se.payload,typeof re=="function"){G=re.call(ee,G,q);break e}G=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=se.payload,q=typeof re=="function"?re.call(ee,G,q):re,q==null)break e;G=te({},G,q);break e;case 2:$r=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[I]:q.push(I))}else ee={eventTime:ee,lane:q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},H===null?(F=H=ee,R=G):H=H.next=ee,_|=q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;q=I,I=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(H===null&&(R=G),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=H,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);bi|=_,n.lanes=_,n.memoizedState=G}}function Jf(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Xo={},qn=jr(Xo),Jo=jr(Xo),Zo=jr(Xo);function Li(n){if(n===Xo)throw Error(t(174));return n}function jc(n,r){switch(qe(Zo,r),qe(Jo,n),qe(qn,Xo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}He(qn),qe(qn,r)}function js(){He(qn),He(Jo),He(Zo)}function Zf(n){Li(Zo.current);var r=Li(qn.current),a=ut(r,n.type);r!==a&&(qe(Jo,n),qe(qn,a))}function zc(n){Jo.current===n&&(He(qn),He(Jo))}var Ye=jr(0);function Ll(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Bc=[];function $c(){for(var n=0;n<Bc.length;n++)Bc[n]._workInProgressVersionPrimary=null;Bc.length=0}var Ml=we.ReactCurrentDispatcher,qc=we.ReactCurrentBatchConfig,Mi=0,Xe=null,ht=null,gt=null,bl=!1,ea=!1,ta=0,Av=0;function xt(){throw Error(t(321))}function Wc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Pn(n[a],r[a]))return!1;return!0}function Hc(n,r,a,c,d,p){if(Mi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ml.current=n===null||n.memoizedState===null?kv:Nv,n=a(c,d),ea){p=0;do{if(ea=!1,ta=0,25<=p)throw Error(t(301));p+=1,gt=ht=null,r.updateQueue=null,Ml.current=xv,n=a(c,d)}while(ea)}if(Ml.current=jl,r=ht!==null&&ht.next!==null,Mi=0,gt=ht=Xe=null,bl=!1,r)throw Error(t(300));return n}function Kc(){var n=ta!==0;return ta=0,n}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Xe.memoizedState=gt=n:gt=gt.next=n,gt}function dn(){if(ht===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=gt===null?Xe.memoizedState:gt.next;if(r!==null)gt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},gt===null?Xe.memoizedState=gt=n:gt=gt.next=n}return gt}function na(n,r){return typeof r=="function"?r(n):r}function Gc(n){var r=dn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=_=null,R=null,F=p;do{var H=F.lane;if((Mi&H)===H)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var G={lane:H,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(I=R=G,_=c):R=R.next=G,Xe.lanes|=H,bi|=H}F=F.next}while(F!==null&&F!==p);R===null?_=c:R.next=I,Pn(c,r.memoizedState)||(Ht=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,bi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Qc(n){var r=dn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Pn(p,r.memoizedState)||(Ht=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function ep(){}function tp(n,r){var a=Xe,c=dn(),d=r(),p=!Pn(c.memoizedState,d);if(p&&(c.memoizedState=d,Ht=!0),c=c.queue,Yc(ip.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,ra(9,rp.bind(null,a,c,d,r),void 0,null),yt===null)throw Error(t(349));(Mi&30)!==0||np(a,r,d)}return d}function np(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function rp(n,r,a,c){r.value=a,r.getSnapshot=c,sp(r)&&op(n)}function ip(n,r,a){return a(function(){sp(r)&&op(n)})}function sp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Pn(n,a)}catch{return!0}}function op(n){var r=fr(n,1);r!==null&&Dn(r,n,1,-1)}function ap(n){var r=Wn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},r.queue=n,n=n.dispatch=Cv.bind(null,Xe,n),[r.memoizedState,n]}function ra(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function lp(){return dn().memoizedState}function Fl(n,r,a,c){var d=Wn();Xe.flags|=n,d.memoizedState=ra(1|r,a,void 0,c===void 0?null:c)}function Ul(n,r,a,c){var d=dn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var _=ht.memoizedState;if(p=_.destroy,c!==null&&Wc(c,_.deps)){d.memoizedState=ra(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=ra(1|r,a,p,c)}function up(n,r){return Fl(8390656,8,n,r)}function Yc(n,r){return Ul(2048,8,n,r)}function cp(n,r){return Ul(4,2,n,r)}function hp(n,r){return Ul(4,4,n,r)}function dp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function fp(n,r,a){return a=a!=null?a.concat([n]):null,Ul(4,4,dp.bind(null,r,n),a)}function Xc(){}function pp(n,r){var a=dn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Wc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function mp(n,r){var a=dn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Wc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function gp(n,r,a){return(Mi&21)===0?(n.baseState&&(n.baseState=!1,Ht=!0),n.memoizedState=a):(Pn(a,r)||(a=Ai(),Xe.lanes|=a,bi|=a,n.baseState=!0),r)}function Rv(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=qc.transition;qc.transition={};try{n(!1),r()}finally{Pe=a,qc.transition=c}}function yp(){return dn().memoizedState}function Pv(n,r,a){var c=Gr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},_p(n))vp(r,a);else if(a=Qf(n,r,a,c),a!==null){var d=zt();Dn(a,n,c,d),Ep(a,r,c)}}function Cv(n,r,a){var c=Gr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(_p(n))vp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,I=p(_,a);if(d.hasEagerState=!0,d.eagerState=I,Pn(I,_)){var R=r.interleaved;R===null?(d.next=d,Fc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=Qf(n,r,d,c),a!==null&&(d=zt(),Dn(a,n,c,d),Ep(a,r,c))}}function _p(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function vp(n,r){ea=bl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Ep(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Vr(n,a)}}var jl={readContext:hn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},kv={readContext:hn,useCallback:function(n,r){return Wn().memoizedState=[n,r===void 0?null:r],n},useContext:hn,useEffect:up,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Fl(4194308,4,dp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Fl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Fl(4,2,n,r)},useMemo:function(n,r){var a=Wn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Wn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Pv.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Wn();return n={current:n},r.memoizedState=n},useState:ap,useDebugValue:Xc,useDeferredValue:function(n){return Wn().memoizedState=n},useTransition:function(){var n=ap(!1),r=n[0];return n=Rv.bind(null,n[1]),Wn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=Wn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),yt===null)throw Error(t(349));(Mi&30)!==0||np(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,up(ip.bind(null,c,p,n),[n]),c.flags|=2048,ra(9,rp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Wn(),r=yt.identifierPrefix;if(Qe){var a=dr,c=hr;a=(c&~(1<<32-Ft(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ta++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Av++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Nv={readContext:hn,useCallback:pp,useContext:hn,useEffect:Yc,useImperativeHandle:fp,useInsertionEffect:cp,useLayoutEffect:hp,useMemo:mp,useReducer:Gc,useRef:lp,useState:function(){return Gc(na)},useDebugValue:Xc,useDeferredValue:function(n){var r=dn();return gp(r,ht.memoizedState,n)},useTransition:function(){var n=Gc(na)[0],r=dn().memoizedState;return[n,r]},useMutableSource:ep,useSyncExternalStore:tp,useId:yp,unstable_isNewReconciler:!1},xv={readContext:hn,useCallback:pp,useContext:hn,useEffect:Yc,useImperativeHandle:fp,useInsertionEffect:cp,useLayoutEffect:hp,useMemo:mp,useReducer:Qc,useRef:lp,useState:function(){return Qc(na)},useDebugValue:Xc,useDeferredValue:function(n){var r=dn();return ht===null?r.memoizedState=n:gp(r,ht.memoizedState,n)},useTransition:function(){var n=Qc(na)[0],r=dn().memoizedState;return[n,r]},useMutableSource:ep,useSyncExternalStore:tp,useId:yp,unstable_isNewReconciler:!1};function kn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Jc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var zl={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=zt(),d=Gr(n),p=pr(c,d);p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Dn(r,n,d,c),Vl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=zt(),d=Gr(n),p=pr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Dn(r,n,d,c),Vl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=zt(),c=Gr(n),d=pr(a,c);d.tag=2,r!=null&&(d.callback=r),r=qr(n,d,c),r!==null&&(Dn(r,n,c,a),Vl(r,n,c))}};function wp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!$o(a,c)||!$o(d,p):!0}function Tp(n,r,a){var c=!1,d=zr,p=r.contextType;return typeof p=="object"&&p!==null?p=hn(p):(d=Wt(r)?xi:Nt.current,c=r.contextTypes,p=(c=c!=null)?Vs(n,d):zr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=zl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Ip(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&zl.enqueueReplaceState(r,r.state,null)}function Zc(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Uc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=hn(p):(p=Wt(r)?xi:Nt.current,d.context=Vs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Jc(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&zl.enqueueReplaceState(d,d.state,null),Ol(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,r){try{var a="",c=r;do a+=Se(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function eh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function th(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Dv=typeof WeakMap=="function"?WeakMap:Map;function Sp(n,r,a){a=pr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Gl||(Gl=!0,gh=c),th(n,r)},a}function Ap(n,r,a){a=pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){th(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){th(n,r),typeof c!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Rp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Dv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=Hv.bind(null,n,r,a),r.then(n,n))}function Pp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Cp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=pr(-1,1),r.tag=2,qr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Vv=we.ReactCurrentOwner,Ht=!1;function jt(n,r,a,c){r.child=n===null?Gf(r,null,a,c):bs(r,n.child,a,c)}function kp(n,r,a,c,d){a=a.render;var p=r.ref;return Us(r,d),c=Hc(n,r,a,c,p,d),a=Kc(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,mr(n,r,d)):(Qe&&a&&kc(r),r.flags|=1,jt(n,r,c,d),r.child)}function Np(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Ih(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,xp(n,r,p,c,d)):(n=eu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(_,c)&&n.ref===r.ref)return mr(n,r,d)}return r.flags|=1,n=Yr(p,c),n.ref=r.ref,n.return=r,r.child=n}function xp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if($o(p,c)&&n.ref===r.ref)if(Ht=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ht=!0);else return r.lanes=n.lanes,mr(n,r,d)}return nh(n,r,a,c,d)}function Dp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe($s,rn),rn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe($s,rn),rn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,qe($s,rn),rn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,qe($s,rn),rn|=c;return jt(n,r,d,a),r.child}function Vp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function nh(n,r,a,c,d){var p=Wt(a)?xi:Nt.current;return p=Vs(r,p),Us(r,d),a=Hc(n,r,a,c,p,d),c=Kc(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,mr(n,r,d)):(Qe&&c&&kc(r),r.flags|=1,jt(n,r,a,d),r.child)}function Op(n,r,a,c,d){if(Wt(a)){var p=!0;Al(r)}else p=!1;if(Us(r,d),r.stateNode===null)$l(n,r),Tp(r,a,c),Zc(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,I=r.memoizedProps;_.props=I;var R=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=hn(F):(F=Wt(a)?xi:Nt.current,F=Vs(r,F));var H=a.getDerivedStateFromProps,G=typeof H=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||R!==F)&&Ip(r,_,c,F),$r=!1;var q=r.memoizedState;_.state=q,Ol(r,c,_,d),R=r.memoizedState,I!==c||q!==R||qt.current||$r?(typeof H=="function"&&(Jc(r,a,H,c),R=r.memoizedState),(I=$r||wp(r,a,I,c,q,R,F))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=F,c=I):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,Yf(n,r),I=r.memoizedProps,F=r.type===r.elementType?I:kn(r.type,I),_.props=F,G=r.pendingProps,q=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=hn(R):(R=Wt(a)?xi:Nt.current,R=Vs(r,R));var ee=a.getDerivedStateFromProps;(H=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==G||q!==R)&&Ip(r,_,c,R),$r=!1,q=r.memoizedState,_.state=q,Ol(r,c,_,d);var re=r.memoizedState;I!==G||q!==re||qt.current||$r?(typeof ee=="function"&&(Jc(r,a,ee,c),re=r.memoizedState),(F=$r||wp(r,a,F,c,q,re,R)||!1)?(H||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,re,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,re,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),_.props=c,_.state=re,_.context=R,c=F):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return rh(n,r,a,c,p,d)}function rh(n,r,a,c,d,p){Vp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Uf(r,a,!1),mr(n,r,p);c=r.stateNode,Vv.current=r;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=bs(r,n.child,null,p),r.child=bs(r,null,I,p)):jt(n,r,I,p),r.memoizedState=c.state,d&&Uf(r,a,!0),r.child}function Lp(n){var r=n.stateNode;r.pendingContext?bf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&bf(n,r.context,!1),jc(n,r.containerInfo)}function Mp(n,r,a,c,d){return Ms(),Vc(d),r.flags|=256,jt(n,r,a,c),r.child}var ih={dehydrated:null,treeContext:null,retryLane:0};function sh(n){return{baseLanes:n,cachePool:null,transitions:null}}function bp(n,r,a){var c=r.pendingProps,d=Ye.current,p=!1,_=(r.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Ye,d&1),n===null)return Dc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=tu(_,c,0,null),n=zi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=sh(a),r.memoizedState=ih,n):oh(r,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Ov(n,r,_,c,I,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,I=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Yr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=Yr(I,p):(p=zi(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?sh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=ih,c}return p=n.child,n=p.sibling,c=Yr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function oh(n,r){return r=tu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Bl(n,r,a,c){return c!==null&&Vc(c),bs(r,n.child,null,a),n=oh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Ov(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=eh(Error(t(422))),Bl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=tu({mode:"visible",children:c.children},d,0,null),p=zi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&bs(r,n.child,null,_),r.child.memoizedState=sh(_),r.memoizedState=ih,p);if((r.mode&1)===0)return Bl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=eh(p,c,void 0),Bl(n,r,_,c)}if(I=(_&n.childLanes)!==0,Ht||I){if(c=yt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,fr(n,d),Dn(c,n,d,-1))}return Th(),c=eh(Error(t(421))),Bl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=Kv.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,nn=Ur(d.nextSibling),tn=r,Qe=!0,Cn=null,n!==null&&(un[cn++]=hr,un[cn++]=dr,un[cn++]=Di,hr=n.id,dr=n.overflow,Di=r),r=oh(r,c.children),r.flags|=4096,r)}function Fp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),bc(n.return,r,a)}function ah(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Up(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(jt(n,r,c.children,a),c=Ye.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fp(n,a,r);else if(n.tag===19)Fp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Ye,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Ll(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),ah(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Ll(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}ah(r,!0,a,null,p);break;case"together":ah(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function $l(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function mr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),bi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Yr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Yr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Lv(n,r,a){switch(r.tag){case 3:Lp(r),Ms();break;case 5:Zf(r);break;case 1:Wt(r.type)&&Al(r);break;case 4:jc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(xl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ye,Ye.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?bp(n,r,a):(qe(Ye,Ye.current&1),n=mr(n,r,a),n!==null?n.sibling:null);qe(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Up(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,Dp(n,r,a)}return mr(n,r,a)}var jp,lh,zp,Bp;jp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},lh=function(){},zp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Li(qn.current);var p=null;switch(a){case"input":d=pi(n,d),c=pi(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=_o(n,d),c=_o(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Tl)}So(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var R=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&R!==I&&(R!=null||I!=null))if(F==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&I[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(F,a)),a=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,I=I?I.__html:void 0,R!=null&&I!==R&&(p=p||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&We("scroll",n),p||I===R||(p=[])):(p=p||[]).push(F,R))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},Bp=function(n,r,a,c){a!==c&&(r.flags|=4)};function ia(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Mv(n,r,a){var c=r.pendingProps;switch(Nc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(r),null;case 1:return Wt(r.type)&&Sl(),Dt(r),null;case 3:return c=r.stateNode,js(),He(qt),He(Nt),$c(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(kl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Cn!==null&&(vh(Cn),Cn=null))),lh(n,r),Dt(r),null;case 5:zc(r);var d=Li(Zo.current);if(a=r.type,n!==null&&r.stateNode!=null)zp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Dt(r),null}if(n=Li(qn.current),kl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[$n]=r,c[Go]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Wo.length;d++)We(Wo[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":ts(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":rs(c,p),We("invalid",c)}So(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var I=p[_];_==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&wl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&wl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":Zn(c),Ka(c,p,!0);break;case"textarea":Zn(c),vo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Tl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[$n]=r,n[Go]=c,jp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Ao(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Wo.length;d++)We(Wo[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":ts(n,c),d=pi(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),We("invalid",n);break;case"textarea":rs(n,c),d=_o(n,c),We("invalid",n);break;default:d=c}So(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var R=I[p];p==="style"?To(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Eo(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Cr(n,R):typeof R=="number"&&Cr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&We("scroll",n):R!=null&&ye(n,p,R,_))}switch(a){case"input":Zn(n),Ka(n,c,!1);break;case"textarea":Zn(n),vo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?tr(n,!!c.multiple,p,!1):c.defaultValue!=null&&tr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Tl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dt(r),null;case 6:if(n&&r.stateNode!=null)Bp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Li(Zo.current),Li(qn.current),kl(r)){if(c=r.stateNode,a=r.memoizedProps,c[$n]=r,(p=c.nodeValue!==a)&&(n=tn,n!==null))switch(n.tag){case 3:wl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&wl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$n]=r,r.stateNode=c}return Dt(r),null;case 13:if(He(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&nn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Wf(),Ms(),r.flags|=98560,p=!1;else if(p=kl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[$n]=r}else Ms(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Dt(r),p=!1}else Cn!==null&&(vh(Cn),Cn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ye.current&1)!==0?dt===0&&(dt=3):Th())),r.updateQueue!==null&&(r.flags|=4),Dt(r),null);case 4:return js(),lh(n,r),n===null&&Ho(r.stateNode.containerInfo),Dt(r),null;case 10:return Mc(r.type._context),Dt(r),null;case 17:return Wt(r.type)&&Sl(),Dt(r),null;case 19:if(He(Ye),p=r.memoizedState,p===null)return Dt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)ia(p,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Ll(n),_!==null){for(r.flags|=128,ia(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Ye,Ye.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>qs&&(r.flags|=128,c=!0,ia(p,!1),r.lanes=4194304)}else{if(!c)if(n=Ll(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ia(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Qe)return Dt(r),null}else 2*$e()-p.renderingStartTime>qs&&a!==1073741824&&(r.flags|=128,c=!0,ia(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Ye.current,qe(Ye,c?a&1|2:a&1),r):(Dt(r),null);case 22:case 23:return wh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(rn&1073741824)!==0&&(Dt(r),r.subtreeFlags&6&&(r.flags|=8192)):Dt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function bv(n,r){switch(Nc(r),r.tag){case 1:return Wt(r.type)&&Sl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return js(),He(qt),He(Nt),$c(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return zc(r),null;case 13:if(He(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ms()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return He(Ye),null;case 4:return js(),null;case 10:return Mc(r.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var ql=!1,Vt=!1,Fv=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Bs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function uh(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var $p=!1;function Uv(n,r){if(wc=Mr,n=wf(),fc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,I=-1,R=-1,F=0,H=0,G=n,q=null;t:for(;;){for(var ee;G!==a||d!==0&&G.nodeType!==3||(I=_+d),G!==p||c!==0&&G.nodeType!==3||(R=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(ee=G.firstChild)!==null;)q=G,G=ee;for(;;){if(G===n)break t;if(q===a&&++F===d&&(I=_),q===p&&++H===c&&(R=_),(ee=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=ee}a=I===-1||R===-1?null:{start:I,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tc={focusedElem:n,selectionRange:a},Mr=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var se=re.memoizedProps,nt=re.memoizedState,L=r.stateNode,C=L.getSnapshotBeforeUpdate(r.elementType===r.type?se:kn(r.type,se),nt);L.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){Ze(r,r.return,Q)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=$p,$p=!1,re}function sa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&uh(r,a,p)}d=d.next}while(d!==c)}}function Wl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function ch(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function qp(n){var r=n.alternate;r!==null&&(n.alternate=null,qp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[$n],delete r[Go],delete r[Rc],delete r[wv],delete r[Tv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wp(n){return n.tag===5||n.tag===3||n.tag===4}function Hp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Tl));else if(c!==4&&(n=n.child,n!==null))for(hh(n,r,a),n=n.sibling;n!==null;)hh(n,r,a),n=n.sibling}function dh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(dh(n,r,a),n=n.sibling;n!==null;)dh(n,r,a),n=n.sibling}var Tt=null,Nn=!1;function Wr(n,r,a){for(a=a.child;a!==null;)Kp(n,r,a),a=a.sibling}function Kp(n,r,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Ii,a)}catch{}switch(a.tag){case 5:Vt||Bs(a,r);case 6:var c=Tt,d=Nn;Tt=null,Wr(n,r,a),Tt=c,Nn=d,Tt!==null&&(Nn?(n=Tt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Tt.removeChild(a.stateNode));break;case 18:Tt!==null&&(Nn?(n=Tt,a=a.stateNode,n.nodeType===8?Ac(n.parentNode,a):n.nodeType===1&&Ac(n,a),An(n)):Ac(Tt,a.stateNode));break;case 4:c=Tt,d=Nn,Tt=a.stateNode.containerInfo,Nn=!0,Wr(n,r,a),Tt=c,Nn=d;break;case 0:case 11:case 14:case 15:if(!Vt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&uh(a,r,_),d=d.next}while(d!==c)}Wr(n,r,a);break;case 1:if(!Vt&&(Bs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Ze(a,r,I)}Wr(n,r,a);break;case 21:Wr(n,r,a);break;case 22:a.mode&1?(Vt=(c=Vt)||a.memoizedState!==null,Wr(n,r,a),Vt=c):Wr(n,r,a);break;default:Wr(n,r,a)}}function Gp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Fv),r.forEach(function(c){var d=Gv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,I=_;e:for(;I!==null;){switch(I.tag){case 5:Tt=I.stateNode,Nn=!1;break e;case 3:Tt=I.stateNode.containerInfo,Nn=!0;break e;case 4:Tt=I.stateNode.containerInfo,Nn=!0;break e}I=I.return}if(Tt===null)throw Error(t(160));Kp(p,_,d),Tt=null,Nn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){Ze(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Qp(r,n),r=r.sibling}function Qp(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(r,n),Hn(n),c&4){try{sa(3,n,n.return),Wl(3,n)}catch(se){Ze(n,n.return,se)}try{sa(5,n,n.return)}catch(se){Ze(n,n.return,se)}}break;case 1:xn(r,n),Hn(n),c&512&&a!==null&&Bs(a,a.return);break;case 5:if(xn(r,n),Hn(n),c&512&&a!==null&&Bs(a,a.return),n.flags&32){var d=n.stateNode;try{Cr(d,"")}catch(se){Ze(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,I=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&go(d,p),Ao(I,_);var F=Ao(I,p);for(_=0;_<R.length;_+=2){var H=R[_],G=R[_+1];H==="style"?To(d,G):H==="dangerouslySetInnerHTML"?Eo(d,G):H==="children"?Cr(d,G):ye(d,H,G,F)}switch(I){case"input":yo(d,p);break;case"textarea":is(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?tr(d,!!p.multiple,ee,!1):q!==!!p.multiple&&(p.defaultValue!=null?tr(d,!!p.multiple,p.defaultValue,!0):tr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Go]=p}catch(se){Ze(n,n.return,se)}}break;case 6:if(xn(r,n),Hn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(se){Ze(n,n.return,se)}}break;case 3:if(xn(r,n),Hn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{An(r.containerInfo)}catch(se){Ze(n,n.return,se)}break;case 4:xn(r,n),Hn(n);break;case 13:xn(r,n),Hn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(mh=$e())),c&4&&Gp(n);break;case 22:if(H=a!==null&&a.memoizedState!==null,n.mode&1?(Vt=(F=Vt)||H,xn(r,n),Vt=F):xn(r,n),Hn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!H&&(n.mode&1)!==0)for(ne=n,H=n.child;H!==null;){for(G=ne=H;ne!==null;){switch(q=ne,ee=q.child,q.tag){case 0:case 11:case 14:case 15:sa(4,q,q.return);break;case 1:Bs(q,q.return);var re=q.stateNode;if(typeof re.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(se){Ze(c,a,se)}}break;case 5:Bs(q,q.return);break;case 22:if(q.memoizedState!==null){Jp(G);continue}}ee!==null?(ee.return=q,ne=ee):Jp(G)}H=H.sibling}e:for(H=null,G=n;;){if(G.tag===5){if(H===null){H=G;try{d=G.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=G.stateNode,R=G.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,I.style.display=wo("display",_))}catch(se){Ze(n,n.return,se)}}}else if(G.tag===6){if(H===null)try{G.stateNode.nodeValue=F?"":G.memoizedProps}catch(se){Ze(n,n.return,se)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;H===G&&(H=null),G=G.return}H===G&&(H=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:xn(r,n),Hn(n),c&4&&Gp(n);break;case 21:break;default:xn(r,n),Hn(n)}}function Hn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Wp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Cr(d,""),c.flags&=-33);var p=Hp(n);dh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=Hp(n);hh(n,I,_);break;default:throw Error(t(161))}}catch(R){Ze(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function jv(n,r,a){ne=n,Yp(n)}function Yp(n,r,a){for(var c=(n.mode&1)!==0;ne!==null;){var d=ne,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||ql;if(!_){var I=d.alternate,R=I!==null&&I.memoizedState!==null||Vt;I=ql;var F=Vt;if(ql=_,(Vt=R)&&!F)for(ne=d;ne!==null;)_=ne,R=_.child,_.tag===22&&_.memoizedState!==null?Zp(d):R!==null?(R.return=_,ne=R):Zp(d);for(;p!==null;)ne=p,Yp(p),p=p.sibling;ne=d,ql=I,Vt=F}Xp(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ne=p):Xp(n)}}function Xp(n){for(;ne!==null;){var r=ne;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Vt||Wl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Vt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:kn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Jf(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Jf(r,_,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var H=F.memoizedState;if(H!==null){var G=H.dehydrated;G!==null&&An(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vt||r.flags&512&&ch(r)}catch(q){Ze(r,r.return,q)}}if(r===n){ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Jp(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Zp(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Wl(4,r)}catch(R){Ze(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){Ze(r,d,R)}}var p=r.return;try{ch(r)}catch(R){Ze(r,p,R)}break;case 5:var _=r.return;try{ch(r)}catch(R){Ze(r,_,R)}}}catch(R){Ze(r,r.return,R)}if(r===n){ne=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ne=I;break}ne=r.return}}var zv=Math.ceil,Hl=we.ReactCurrentDispatcher,fh=we.ReactCurrentOwner,fn=we.ReactCurrentBatchConfig,De=0,yt=null,st=null,It=0,rn=0,$s=jr(0),dt=0,oa=null,bi=0,Kl=0,ph=0,aa=null,Kt=null,mh=0,qs=1/0,gr=null,Gl=!1,gh=null,Hr=null,Ql=!1,Kr=null,Yl=0,la=0,yh=null,Xl=-1,Jl=0;function zt(){return(De&6)!==0?$e():Xl!==-1?Xl:Xl=$e()}function Gr(n){return(n.mode&1)===0?1:(De&2)!==0&&It!==0?It&-It:Sv.transition!==null?(Jl===0&&(Jl=Ai()),Jl):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Mo(n.type)),n)}function Dn(n,r,a,c){if(50<la)throw la=0,yh=null,Error(t(185));Dr(n,a,c),((De&2)===0||n!==yt)&&(n===yt&&((De&2)===0&&(Kl|=a),dt===4&&Qr(n,It)),Gt(n,c),a===1&&De===0&&(r.mode&1)===0&&(qs=$e()+500,Rl&&Br()))}function Gt(n,r){var a=n.callbackNode;ir(n,r);var c=Si(n,n===yt?It:0);if(c===0)a!==null&&xo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&xo(a),r===1)n.tag===0?Iv(tm.bind(null,n)):jf(tm.bind(null,n)),vv(function(){(De&6)===0&&Br()}),a=null;else{switch(Or(c)){case 1:a=Ti;break;case 4:a=kr;break;case 16:a=on;break;case 536870912:a=Ja;break;default:a=on}a=um(a,em.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function em(n,r){if(Xl=-1,Jl=0,(De&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ws()&&n.callbackNode!==a)return null;var c=Si(n,n===yt?It:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Zl(n,c);else{r=c;var d=De;De|=2;var p=rm();(yt!==n||It!==r)&&(gr=null,qs=$e()+500,Ui(n,r));do try{qv();break}catch(I){nm(n,I)}while(!0);Lc(),Hl.current=p,De=d,st!==null?r=0:(yt=null,It=0,r=dt)}if(r!==0){if(r===2&&(d=Jt(n),d!==0&&(c=d,r=_h(n,d))),r===1)throw a=oa,Ui(n,0),Qr(n,c),Gt(n,$e()),a;if(r===6)Qr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Bv(d)&&(r=Zl(n,c),r===2&&(p=Jt(n),p!==0&&(c=p,r=_h(n,p))),r===1))throw a=oa,Ui(n,0),Qr(n,c),Gt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:ji(n,Kt,gr);break;case 3:if(Qr(n,c),(c&130023424)===c&&(r=mh+500-$e(),10<r)){if(Si(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){zt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Sc(ji.bind(null,n,Kt,gr),r);break}ji(n,Kt,gr);break;case 4:if(Qr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ft(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*zv(c/1960))-c,10<c){n.timeoutHandle=Sc(ji.bind(null,n,Kt,gr),c);break}ji(n,Kt,gr);break;case 5:ji(n,Kt,gr);break;default:throw Error(t(329))}}}return Gt(n,$e()),n.callbackNode===a?em.bind(null,n):null}function _h(n,r){var a=aa;return n.current.memoizedState.isDehydrated&&(Ui(n,r).flags|=256),n=Zl(n,r),n!==2&&(r=Kt,Kt=a,r!==null&&vh(r)),n}function vh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function Bv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Pn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(n,r){for(r&=~ph,r&=~Kl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ft(r),c=1<<a;n[a]=-1,r&=~c}}function tm(n){if((De&6)!==0)throw Error(t(327));Ws();var r=Si(n,0);if((r&1)===0)return Gt(n,$e()),null;var a=Zl(n,r);if(n.tag!==0&&a===2){var c=Jt(n);c!==0&&(r=c,a=_h(n,c))}if(a===1)throw a=oa,Ui(n,0),Qr(n,r),Gt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ji(n,Kt,gr),Gt(n,$e()),null}function Eh(n,r){var a=De;De|=1;try{return n(r)}finally{De=a,De===0&&(qs=$e()+500,Rl&&Br())}}function Fi(n){Kr!==null&&Kr.tag===0&&(De&6)===0&&Ws();var r=De;De|=1;var a=fn.transition,c=Pe;try{if(fn.transition=null,Pe=1,n)return n()}finally{Pe=c,fn.transition=a,De=r,(De&6)===0&&Br()}}function wh(){rn=$s.current,He($s)}function Ui(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,_v(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Nc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Sl();break;case 3:js(),He(qt),He(Nt),$c();break;case 5:zc(c);break;case 4:js();break;case 13:He(Ye);break;case 19:He(Ye);break;case 10:Mc(c.type._context);break;case 22:case 23:wh()}a=a.return}if(yt=n,st=n=Yr(n.current,null),It=rn=r,dt=0,oa=null,ph=Kl=bi=0,Kt=aa=null,Oi!==null){for(r=0;r<Oi.length;r++)if(a=Oi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Oi=null}return n}function nm(n,r){do{var a=st;try{if(Lc(),Ml.current=jl,bl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}bl=!1}if(Mi=0,gt=ht=Xe=null,ea=!1,ta=0,fh.current=null,a===null||a.return===null){dt=1,oa=r,st=null;break}e:{var p=n,_=a.return,I=a,R=r;if(r=It,I.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,H=I,G=H.tag;if((H.mode&1)===0&&(G===0||G===11||G===15)){var q=H.alternate;q?(H.updateQueue=q.updateQueue,H.memoizedState=q.memoizedState,H.lanes=q.lanes):(H.updateQueue=null,H.memoizedState=null)}var ee=Pp(_);if(ee!==null){ee.flags&=-257,Cp(ee,_,I,p,r),ee.mode&1&&Rp(p,F,r),r=ee,R=F;var re=r.updateQueue;if(re===null){var se=new Set;se.add(R),r.updateQueue=se}else re.add(R);break e}else{if((r&1)===0){Rp(p,F,r),Th();break e}R=Error(t(426))}}else if(Qe&&I.mode&1){var nt=Pp(_);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),Cp(nt,_,I,p,r),Vc(zs(R,I));break e}}p=R=zs(R,I),dt!==4&&(dt=2),aa===null?aa=[p]:aa.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=Sp(p,R,r);Xf(p,L);break e;case 1:I=R;var C=p.type,M=p.stateNode;if((p.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Hr===null||!Hr.has(M)))){p.flags|=65536,r&=-r,p.lanes|=r;var Q=Ap(p,I,r);Xf(p,Q);break e}}p=p.return}while(p!==null)}sm(a)}catch(ae){r=ae,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function rm(){var n=Hl.current;return Hl.current=jl,n===null?jl:n}function Th(){(dt===0||dt===3||dt===2)&&(dt=4),yt===null||(bi&268435455)===0&&(Kl&268435455)===0||Qr(yt,It)}function Zl(n,r){var a=De;De|=2;var c=rm();(yt!==n||It!==r)&&(gr=null,Ui(n,r));do try{$v();break}catch(d){nm(n,d)}while(!0);if(Lc(),De=a,Hl.current=c,st!==null)throw Error(t(261));return yt=null,It=0,dt}function $v(){for(;st!==null;)im(st)}function qv(){for(;st!==null&&!Ya();)im(st)}function im(n){var r=lm(n.alternate,n,rn);n.memoizedProps=n.pendingProps,r===null?sm(n):st=r,fh.current=null}function sm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=Mv(a,r,rn),a!==null){st=a;return}}else{if(a=bv(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function ji(n,r,a){var c=Pe,d=fn.transition;try{fn.transition=null,Pe=1,Wv(n,r,a,c)}finally{fn.transition=d,Pe=c}return null}function Wv(n,r,a,c){do Ws();while(Kr!==null);if((De&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(je(n,p),n===yt&&(st=yt=null,It=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ql||(Ql=!0,um(on,function(){return Ws(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=fn.transition,fn.transition=null;var _=Pe;Pe=1;var I=De;De|=4,fh.current=null,Uv(n,a),Qp(a,n),hv(Tc),Mr=!!wc,Tc=wc=null,n.current=a,jv(a),sc(),De=I,Pe=_,fn.transition=p}else n.current=a;if(Ql&&(Ql=!1,Kr=n,Yl=d),p=n.pendingLanes,p===0&&(Hr=null),Za(a.stateNode),Gt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Gl)throw Gl=!1,n=gh,gh=null,n;return(Yl&1)!==0&&n.tag!==0&&Ws(),p=n.pendingLanes,(p&1)!==0?n===yh?la++:(la=0,yh=n):la=0,Br(),null}function Ws(){if(Kr!==null){var n=Or(Yl),r=fn.transition,a=Pe;try{if(fn.transition=null,Pe=16>n?16:n,Kr===null)var c=!1;else{if(n=Kr,Kr=null,Yl=0,(De&6)!==0)throw Error(t(331));var d=De;for(De|=4,ne=n.current;ne!==null;){var p=ne,_=p.child;if((ne.flags&16)!==0){var I=p.deletions;if(I!==null){for(var R=0;R<I.length;R++){var F=I[R];for(ne=F;ne!==null;){var H=ne;switch(H.tag){case 0:case 11:case 15:sa(8,H,p)}var G=H.child;if(G!==null)G.return=H,ne=G;else for(;ne!==null;){H=ne;var q=H.sibling,ee=H.return;if(qp(H),H===F){ne=null;break}if(q!==null){q.return=ee,ne=q;break}ne=ee}}}var re=p.alternate;if(re!==null){var se=re.child;if(se!==null){re.child=null;do{var nt=se.sibling;se.sibling=null,se=nt}while(se!==null)}}ne=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,ne=_;else e:for(;ne!==null;){if(p=ne,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:sa(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,ne=L;break e}ne=p.return}}var C=n.current;for(ne=C;ne!==null;){_=ne;var M=_.child;if((_.subtreeFlags&2064)!==0&&M!==null)M.return=_,ne=M;else e:for(_=C;ne!==null;){if(I=ne,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Wl(9,I)}}catch(ae){Ze(I,I.return,ae)}if(I===_){ne=null;break e}var Q=I.sibling;if(Q!==null){Q.return=I.return,ne=Q;break e}ne=I.return}}if(De=d,Br(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Ii,n)}catch{}c=!0}return c}finally{Pe=a,fn.transition=r}}return!1}function om(n,r,a){r=zs(a,r),r=Sp(n,r,1),n=qr(n,r,1),r=zt(),n!==null&&(Dr(n,1,r),Gt(n,r))}function Ze(n,r,a){if(n.tag===3)om(n,n,a);else for(;r!==null;){if(r.tag===3){om(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hr===null||!Hr.has(c))){n=zs(a,n),n=Ap(r,n,1),r=qr(r,n,1),n=zt(),r!==null&&(Dr(r,1,n),Gt(r,n));break}}r=r.return}}function Hv(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=zt(),n.pingedLanes|=n.suspendedLanes&a,yt===n&&(It&a)===a&&(dt===4||dt===3&&(It&130023424)===It&&500>$e()-mh?Ui(n,0):ph|=a),Gt(n,r)}function am(n,r){r===0&&((n.mode&1)===0?r=1:(r=ps,ps<<=1,(ps&130023424)===0&&(ps=4194304)));var a=zt();n=fr(n,r),n!==null&&(Dr(n,r,a),Gt(n,a))}function Kv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),am(n,a)}function Gv(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),am(n,a)}var lm;lm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Ht=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Ht=!1,Lv(n,r,a);Ht=(n.flags&131072)!==0}else Ht=!1,Qe&&(r.flags&1048576)!==0&&zf(r,Cl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;$l(n,r),n=r.pendingProps;var d=Vs(r,Nt.current);Us(r,a),d=Hc(null,r,c,n,d,a);var p=Kc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(p=!0,Al(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Uc(r),d.updater=zl,r.stateNode=d,d._reactInternals=r,Zc(r,c,n,a),r=rh(null,r,c,!0,p,a)):(r.tag=0,Qe&&p&&kc(r),jt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch($l(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=Yv(c),n=kn(c,n),d){case 0:r=nh(null,r,c,n,a);break e;case 1:r=Op(null,r,c,n,a);break e;case 11:r=kp(null,r,c,n,a);break e;case 14:r=Np(null,r,c,kn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),nh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),Op(n,r,c,d,a);case 3:e:{if(Lp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Yf(n,r),Ol(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=zs(Error(t(423)),r),r=Mp(n,r,c,a,d);break e}else if(c!==d){d=zs(Error(t(424)),r),r=Mp(n,r,c,a,d);break e}else for(nn=Ur(r.stateNode.containerInfo.firstChild),tn=r,Qe=!0,Cn=null,a=Gf(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ms(),c===d){r=mr(n,r,a);break e}jt(n,r,c,a)}r=r.child}return r;case 5:return Zf(r),n===null&&Dc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Ic(c,d)?_=null:p!==null&&Ic(c,p)&&(r.flags|=32),Vp(n,r),jt(n,r,_,a),r.child;case 6:return n===null&&Dc(r),null;case 13:return bp(n,r,a);case 4:return jc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=bs(r,null,c,a):jt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),kp(n,r,c,d,a);case 7:return jt(n,r,r.pendingProps,a),r.child;case 8:return jt(n,r,r.pendingProps.children,a),r.child;case 12:return jt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,qe(xl,c._currentValue),c._currentValue=_,p!==null)if(Pn(p.value,_)){if(p.children===d.children&&!qt.current){r=mr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){_=p.child;for(var R=I.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=pr(-1,a&-a),R.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var H=F.pending;H===null?R.next=R:(R.next=H.next,H.next=R),F.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),bc(p.return,a,r),I.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),bc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}jt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Us(r,a),d=hn(d),c=c(d),r.flags|=1,jt(n,r,c,a),r.child;case 14:return c=r.type,d=kn(c,r.pendingProps),d=kn(c.type,d),Np(n,r,c,d,a);case 15:return xp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),$l(n,r),r.tag=1,Wt(c)?(n=!0,Al(r)):n=!1,Us(r,a),Tp(r,c,d),Zc(r,c,d,a),rh(null,r,c,!0,n,a);case 19:return Up(n,r,a);case 22:return Dp(n,r,a)}throw Error(t(156,r.tag))};function um(n,r){return ds(n,r)}function Qv(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,r,a,c){return new Qv(n,r,a,c)}function Ih(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yv(n){if(typeof n=="function")return Ih(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===Ct)return 14}return 2}function Yr(n,r){var a=n.alternate;return a===null?(a=pn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function eu(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Ih(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case k:return zi(a.children,d,p,r);case w:_=8,d|=8;break;case S:return n=pn(12,a,r,d|2),n.elementType=S,n.lanes=p,n;case A:return n=pn(13,a,r,d),n.elementType=A,n.lanes=p,n;case et:return n=pn(19,a,r,d),n.elementType=et,n.lanes=p,n;case Ue:return tu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:_=10;break e;case x:_=9;break e;case V:_=11;break e;case Ct:_=14;break e;case kt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=pn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function zi(n,r,a,c){return n=pn(7,n,c,r),n.lanes=a,n}function tu(n,r,a,c){return n=pn(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Sh(n,r,a){return n=pn(6,n,null,r),n.lanes=a,n}function Ah(n,r,a){return r=pn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Xv(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xr(0),this.expirationTimes=xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Rh(n,r,a,c,d,p,_,I,R){return n=new Xv(n,r,a,I,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=pn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(p),n}function Jv(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function cm(n){if(!n)return zr;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return Ff(n,a,r)}return r}function hm(n,r,a,c,d,p,_,I,R){return n=Rh(a,c,!0,n,d,p,_,I,R),n.context=cm(null),a=n.current,c=zt(),d=Gr(a),p=pr(c,d),p.callback=r??null,qr(a,p,d),n.current.lanes=d,Dr(n,d,c),Gt(n,c),n}function nu(n,r,a,c){var d=r.current,p=zt(),_=Gr(d);return a=cm(a),r.context===null?r.context=a:r.pendingContext=a,r=pr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=qr(d,r,_),n!==null&&(Dn(n,d,_,p),Vl(n,d,_)),_}function ru(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Ph(n,r){dm(n,r),(n=n.alternate)&&dm(n,r)}function Zv(){return null}var fm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ch(n){this._internalRoot=n}iu.prototype.render=Ch.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));nu(n,r,null,null)},iu.prototype.unmount=Ch.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Fi(function(){nu(null,n,null,null)}),r[ur]=null}};function iu(n){this._internalRoot=n}iu.prototype.unstable_scheduleHydration=function(n){if(n){var r=il();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Un.length&&r!==0&&r<Un[a].priority;a++);Un.splice(a,0,n),a===0&&al(n)}};function kh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function su(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pm(){}function eE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=ru(_);p.call(F)}}var _=hm(r,c,n,0,null,!1,!1,"",pm);return n._reactRootContainer=_,n[ur]=_.current,Ho(n.nodeType===8?n.parentNode:n),Fi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=ru(R);I.call(F)}}var R=Rh(n,0,!1,null,null,!1,!1,"",pm);return n._reactRootContainer=R,n[ur]=R.current,Ho(n.nodeType===8?n.parentNode:n),Fi(function(){nu(r,R,a,c)}),R}function ou(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var I=d;d=function(){var R=ru(_);I.call(R)}}nu(r,_,n,d)}else _=eE(a,r,n,d,c);return ru(_)}nl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Nr(r.pendingLanes);a!==0&&(Vr(r,a|1),Gt(r,$e()),(De&6)===0&&(qs=$e()+500,Br()))}break;case 13:Fi(function(){var c=fr(n,1);if(c!==null){var d=zt();Dn(c,n,1,d)}}),Ph(n,1)}},ms=function(n){if(n.tag===13){var r=fr(n,134217728);if(r!==null){var a=zt();Dn(r,n,134217728,a)}Ph(n,134217728)}},rl=function(n){if(n.tag===13){var r=Gr(n),a=fr(n,r);if(a!==null){var c=zt();Dn(a,n,r,c)}Ph(n,r)}},il=function(){return Pe},sl=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},os=function(n,r,a){switch(r){case"input":if(yo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Il(c);if(!d)throw Error(t(90));es(c),yo(c,d)}}}break;case"textarea":is(n,a);break;case"select":r=a.value,r!=null&&tr(n,!!a.multiple,r,!1)}},_i=Eh,Po=Fi;var tE={usingClientEntryPoint:!1,Events:[Qo,xs,Il,bn,Ro,Eh]},ua={findFiberByHostInstance:Ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nE={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=No(n),n===null?null:n.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||Zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{Ii=au.inject(nE),Xt=au}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tE,Qt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kh(r))throw Error(t(200));return Jv(n,r,null,a)},Qt.createRoot=function(n,r){if(!kh(n))throw Error(t(299));var a=!1,c="",d=fm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Rh(n,1,!1,null,null,a,!1,c,d),n[ur]=r.current,Ho(n.nodeType===8?n.parentNode:n),new Ch(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=No(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return Fi(n)},Qt.hydrate=function(n,r,a){if(!su(r))throw Error(t(200));return ou(null,n,r,!0,a)},Qt.hydrateRoot=function(n,r,a){if(!kh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=fm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=hm(r,null,n,1,a??null,d,!1,p,_),n[ur]=r.current,Ho(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new iu(r)},Qt.render=function(n,r,a){if(!su(r))throw Error(t(200));return ou(null,n,r,!1,a)},Qt.unmountComponentAtNode=function(n){if(!su(n))throw Error(t(40));return n._reactRootContainer?(Fi(function(){ou(null,null,n,!1,function(){n._reactRootContainer=null,n[ur]=null})}),!0):!1},Qt.unstable_batchedUpdates=Eh,Qt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!su(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ou(n,r,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var Tm;function hE(){if(Tm)return Dh.exports;Tm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Dh.exports=cE(),Dh.exports}var Im;function dE(){if(Im)return lu;Im=1;var i=hE();return lu.createRoot=i.createRoot,lu.hydrateRoot=i.hydrateRoot,lu}var fE=dE();const pE=$g(fE);var Sm={};/**
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
 */const qg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},mE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Wg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,T=u>>2,N=(u&3)<<4|m>>4;let b=(m&15)<<2|v>>6,j=v&63;g||(j=64,h||(b=64)),s.push(t[T],t[N],t[b],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(qg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):mE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const N=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||N==null)throw new gE;const b=u<<2|m>>4;if(s.push(b),v!==64){const j=m<<4&240|v>>2;if(s.push(j),N!==64){const Y=v<<6&192|N;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class gE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yE=function(i){const e=qg(i);return Wg.encodeByteArray(e,!0)},Au=function(i){return yE(i).replace(/\./g,"")},Hg=function(i){try{return Wg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _E(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vE=()=>_E().__FIREBASE_DEFAULTS__,EE=()=>{if(typeof process>"u"||typeof Sm>"u")return;const i=Sm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},wE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Hg(i[1]);return e&&JSON.parse(e)},Bu=()=>{try{return vE()||EE()||wE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Kg=i=>{var e,t;return(t=(e=Bu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},TE=i=>{const e=Kg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Gg=()=>{var i;return(i=Bu())===null||i===void 0?void 0:i.config},Qg=i=>{var e;return(e=Bu())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class IE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function SE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Au(JSON.stringify(t)),Au(JSON.stringify(h)),""].join(".")}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function RE(){var i;const e=(i=Bu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function kE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NE(){const i=bt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function xE(){return!RE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function DE(){try{return typeof indexedDB=="object"}catch{return!1}}function VE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const OE="FirebaseError";class Rr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=OE,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?LE(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Rr(o,m,s)}}function LE(i,e){return i.replace(ME,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const ME=/\{\$([^}]+)}/g;function bE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ru(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Am(u)&&Am(h)){if(!Ru(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Am(i){return i!==null&&typeof i=="object"}/**
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
 */function La(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function ma(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function FE(i,e){const t=new UE(i,e);return t.subscribe.bind(t)}class UE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");jE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Lh),o.error===void 0&&(o.error=Lh),o.complete===void 0&&(o.complete=Lh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Lh(){}/**
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
 */function Yt(i){return i&&i._delegate?i._delegate:i}class Wi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bi="[DEFAULT]";/**
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
 */class zE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new IE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($E(e))try{this.getOrInitializeService({instanceIdentifier:Bi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bi){return this.instances.has(e)}getOptions(e=Bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:BE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bi){return this.component?this.component.multipleInstances?e:Bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BE(i){return i===Bi?void 0:i}function $E(i){return i.instantiationMode==="EAGER"}/**
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
 */class qE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const WE={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},HE=Ce.INFO,KE={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},GE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=KE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=HE,this._logHandler=GE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const QE=(i,e)=>e.some(t=>i instanceof t);let Rm,Pm;function YE(){return Rm||(Rm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XE(){return Pm||(Pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yg=new WeakMap,Hh=new WeakMap,Xg=new WeakMap,Mh=new WeakMap,_d=new WeakMap;function JE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ii(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Yg.set(t,i)}).catch(()=>{}),_d.set(e,i),e}function ZE(i){if(Hh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Hh.set(i,e)}let Kh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Hh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Xg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ii(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function ew(i){Kh=i(Kh)}function tw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(bh(this),e,...t);return Xg.set(s,e.sort?e.sort():[e]),ii(s)}:XE().includes(i)?function(...e){return i.apply(bh(this),e),ii(Yg.get(this))}:function(...e){return ii(i.apply(bh(this),e))}}function nw(i){return typeof i=="function"?tw(i):(i instanceof IDBTransaction&&ZE(i),QE(i,YE())?new Proxy(i,Kh):i)}function ii(i){if(i instanceof IDBRequest)return JE(i);if(Mh.has(i))return Mh.get(i);const e=nw(i);return e!==i&&(Mh.set(i,e),_d.set(e,i)),e}const bh=i=>_d.get(i);function rw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ii(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ii(h.result),g.oldVersion,g.newVersion,ii(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const iw=["get","getKey","getAll","getAllKeys","count"],sw=["put","add","delete","clear"],Fh=new Map;function Cm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Fh.get(e))return Fh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=sw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||iw.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return Fh.set(e,u),u}ew(i=>({...i,get:(e,t,s)=>Cm(e,t)||i.get(e,t,s),has:(e,t)=>!!Cm(e,t)||i.has(e,t)}));/**
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
 */class ow{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function aw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gh="@firebase/app",km="0.10.13";/**
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
 */const Tr=new yd("@firebase/app"),lw="@firebase/app-compat",uw="@firebase/analytics-compat",cw="@firebase/analytics",hw="@firebase/app-check-compat",dw="@firebase/app-check",fw="@firebase/auth",pw="@firebase/auth-compat",mw="@firebase/database",gw="@firebase/data-connect",yw="@firebase/database-compat",_w="@firebase/functions",vw="@firebase/functions-compat",Ew="@firebase/installations",ww="@firebase/installations-compat",Tw="@firebase/messaging",Iw="@firebase/messaging-compat",Sw="@firebase/performance",Aw="@firebase/performance-compat",Rw="@firebase/remote-config",Pw="@firebase/remote-config-compat",Cw="@firebase/storage",kw="@firebase/storage-compat",Nw="@firebase/firestore",xw="@firebase/vertexai-preview",Dw="@firebase/firestore-compat",Vw="firebase",Ow="10.14.1";/**
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
 */const Qh="[DEFAULT]",Lw={[Gh]:"fire-core",[lw]:"fire-core-compat",[cw]:"fire-analytics",[uw]:"fire-analytics-compat",[dw]:"fire-app-check",[hw]:"fire-app-check-compat",[fw]:"fire-auth",[pw]:"fire-auth-compat",[mw]:"fire-rtdb",[gw]:"fire-data-connect",[yw]:"fire-rtdb-compat",[_w]:"fire-fn",[vw]:"fire-fn-compat",[Ew]:"fire-iid",[ww]:"fire-iid-compat",[Tw]:"fire-fcm",[Iw]:"fire-fcm-compat",[Sw]:"fire-perf",[Aw]:"fire-perf-compat",[Rw]:"fire-rc",[Pw]:"fire-rc-compat",[Cw]:"fire-gcs",[kw]:"fire-gcs-compat",[Nw]:"fire-fst",[Dw]:"fire-fst-compat",[xw]:"fire-vertex","fire-js":"fire-js",[Vw]:"fire-js-all"};/**
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
 */const Pu=new Map,Mw=new Map,Yh=new Map;function Nm(i,e){try{i.container.addComponent(e)}catch(t){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function eo(i){const e=i.name;if(Yh.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;Yh.set(e,i);for(const t of Pu.values())Nm(t,i);for(const t of Mw.values())Nm(t,i);return!0}function vd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Kn(i){return i.settings!==void 0}/**
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
 */const bw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new Oa("app","Firebase",bw);/**
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
 */class Fw{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
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
 */const lo=Ow;function Jg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw si.create("bad-app-name",{appName:String(o)});if(t||(t=Gg()),!t)throw si.create("no-options");const u=Pu.get(o);if(u){if(Ru(t,u.options)&&Ru(s,u.config))return u;throw si.create("duplicate-app",{appName:o})}const h=new qE(o);for(const g of Yh.values())h.addComponent(g);const m=new Fw(t,s,h);return Pu.set(o,m),m}function Zg(i=Qh){const e=Pu.get(i);if(!e&&i===Qh&&Gg())return Jg();if(!e)throw si.create("no-app",{appName:i});return e}function oi(i,e,t){var s;let o=(s=Lw[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(m.join(" "));return}eo(new Wi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Uw="firebase-heartbeat-database",jw=1,Sa="firebase-heartbeat-store";let Uh=null;function ey(){return Uh||(Uh=rw(Uw,jw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Sa)}catch(t){console.warn(t)}}}}).catch(i=>{throw si.create("idb-open",{originalErrorMessage:i.message})})),Uh}async function zw(i){try{const t=(await ey()).transaction(Sa),s=await t.objectStore(Sa).get(ty(i));return await t.done,s}catch(e){if(e instanceof Rr)Tr.warn(e.message);else{const t=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(t.message)}}}async function xm(i,e){try{const s=(await ey()).transaction(Sa,"readwrite");await s.objectStore(Sa).put(e,ty(i)),await s.done}catch(t){if(t instanceof Rr)Tr.warn(t.message);else{const s=si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tr.warn(s.message)}}}function ty(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Bw=1024,$w=720*60*60*1e3;class qw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Dm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=$w}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dm(),{heartbeatsToSend:s,unsentEntries:o}=Ww(this._heartbeatsCache.heartbeats),u=Au(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Tr.warn(t),""}}}function Dm(){return new Date().toISOString().substring(0,10)}function Ww(i,e=Bw){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Vm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Vm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Hw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DE()?VE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return xm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return xm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Vm(i){return Au(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function Kw(i){eo(new Wi("platform-logger",e=>new ow(e),"PRIVATE")),eo(new Wi("heartbeat",e=>new qw(e),"PRIVATE")),oi(Gh,km,i),oi(Gh,km,"esm2017"),oi("fire-js","")}Kw("");var Gw="firebase",Qw="10.14.1";/**
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
 */oi(Gw,Qw,"app");var Om=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qi,ny;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,w){function S(){}S.prototype=w.prototype,k.D=w.prototype,k.prototype=new S,k.prototype.constructor=k,k.C=function(P,x,V){for(var A=Array(arguments.length-2),et=2;et<arguments.length;et++)A[et-2]=arguments[et];return w.prototype[x].apply(P,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,w,S){S||(S=0);var P=Array(16);if(typeof w=="string")for(var x=0;16>x;++x)P[x]=w.charCodeAt(S++)|w.charCodeAt(S++)<<8|w.charCodeAt(S++)<<16|w.charCodeAt(S++)<<24;else for(x=0;16>x;++x)P[x]=w[S++]|w[S++]<<8|w[S++]<<16|w[S++]<<24;w=k.g[0],S=k.g[1],x=k.g[2];var V=k.g[3],A=w+(V^S&(x^V))+P[0]+3614090360&4294967295;w=S+(A<<7&4294967295|A>>>25),A=V+(x^w&(S^x))+P[1]+3905402710&4294967295,V=w+(A<<12&4294967295|A>>>20),A=x+(S^V&(w^S))+P[2]+606105819&4294967295,x=V+(A<<17&4294967295|A>>>15),A=S+(w^x&(V^w))+P[3]+3250441966&4294967295,S=x+(A<<22&4294967295|A>>>10),A=w+(V^S&(x^V))+P[4]+4118548399&4294967295,w=S+(A<<7&4294967295|A>>>25),A=V+(x^w&(S^x))+P[5]+1200080426&4294967295,V=w+(A<<12&4294967295|A>>>20),A=x+(S^V&(w^S))+P[6]+2821735955&4294967295,x=V+(A<<17&4294967295|A>>>15),A=S+(w^x&(V^w))+P[7]+4249261313&4294967295,S=x+(A<<22&4294967295|A>>>10),A=w+(V^S&(x^V))+P[8]+1770035416&4294967295,w=S+(A<<7&4294967295|A>>>25),A=V+(x^w&(S^x))+P[9]+2336552879&4294967295,V=w+(A<<12&4294967295|A>>>20),A=x+(S^V&(w^S))+P[10]+4294925233&4294967295,x=V+(A<<17&4294967295|A>>>15),A=S+(w^x&(V^w))+P[11]+2304563134&4294967295,S=x+(A<<22&4294967295|A>>>10),A=w+(V^S&(x^V))+P[12]+1804603682&4294967295,w=S+(A<<7&4294967295|A>>>25),A=V+(x^w&(S^x))+P[13]+4254626195&4294967295,V=w+(A<<12&4294967295|A>>>20),A=x+(S^V&(w^S))+P[14]+2792965006&4294967295,x=V+(A<<17&4294967295|A>>>15),A=S+(w^x&(V^w))+P[15]+1236535329&4294967295,S=x+(A<<22&4294967295|A>>>10),A=w+(x^V&(S^x))+P[1]+4129170786&4294967295,w=S+(A<<5&4294967295|A>>>27),A=V+(S^x&(w^S))+P[6]+3225465664&4294967295,V=w+(A<<9&4294967295|A>>>23),A=x+(w^S&(V^w))+P[11]+643717713&4294967295,x=V+(A<<14&4294967295|A>>>18),A=S+(V^w&(x^V))+P[0]+3921069994&4294967295,S=x+(A<<20&4294967295|A>>>12),A=w+(x^V&(S^x))+P[5]+3593408605&4294967295,w=S+(A<<5&4294967295|A>>>27),A=V+(S^x&(w^S))+P[10]+38016083&4294967295,V=w+(A<<9&4294967295|A>>>23),A=x+(w^S&(V^w))+P[15]+3634488961&4294967295,x=V+(A<<14&4294967295|A>>>18),A=S+(V^w&(x^V))+P[4]+3889429448&4294967295,S=x+(A<<20&4294967295|A>>>12),A=w+(x^V&(S^x))+P[9]+568446438&4294967295,w=S+(A<<5&4294967295|A>>>27),A=V+(S^x&(w^S))+P[14]+3275163606&4294967295,V=w+(A<<9&4294967295|A>>>23),A=x+(w^S&(V^w))+P[3]+4107603335&4294967295,x=V+(A<<14&4294967295|A>>>18),A=S+(V^w&(x^V))+P[8]+1163531501&4294967295,S=x+(A<<20&4294967295|A>>>12),A=w+(x^V&(S^x))+P[13]+2850285829&4294967295,w=S+(A<<5&4294967295|A>>>27),A=V+(S^x&(w^S))+P[2]+4243563512&4294967295,V=w+(A<<9&4294967295|A>>>23),A=x+(w^S&(V^w))+P[7]+1735328473&4294967295,x=V+(A<<14&4294967295|A>>>18),A=S+(V^w&(x^V))+P[12]+2368359562&4294967295,S=x+(A<<20&4294967295|A>>>12),A=w+(S^x^V)+P[5]+4294588738&4294967295,w=S+(A<<4&4294967295|A>>>28),A=V+(w^S^x)+P[8]+2272392833&4294967295,V=w+(A<<11&4294967295|A>>>21),A=x+(V^w^S)+P[11]+1839030562&4294967295,x=V+(A<<16&4294967295|A>>>16),A=S+(x^V^w)+P[14]+4259657740&4294967295,S=x+(A<<23&4294967295|A>>>9),A=w+(S^x^V)+P[1]+2763975236&4294967295,w=S+(A<<4&4294967295|A>>>28),A=V+(w^S^x)+P[4]+1272893353&4294967295,V=w+(A<<11&4294967295|A>>>21),A=x+(V^w^S)+P[7]+4139469664&4294967295,x=V+(A<<16&4294967295|A>>>16),A=S+(x^V^w)+P[10]+3200236656&4294967295,S=x+(A<<23&4294967295|A>>>9),A=w+(S^x^V)+P[13]+681279174&4294967295,w=S+(A<<4&4294967295|A>>>28),A=V+(w^S^x)+P[0]+3936430074&4294967295,V=w+(A<<11&4294967295|A>>>21),A=x+(V^w^S)+P[3]+3572445317&4294967295,x=V+(A<<16&4294967295|A>>>16),A=S+(x^V^w)+P[6]+76029189&4294967295,S=x+(A<<23&4294967295|A>>>9),A=w+(S^x^V)+P[9]+3654602809&4294967295,w=S+(A<<4&4294967295|A>>>28),A=V+(w^S^x)+P[12]+3873151461&4294967295,V=w+(A<<11&4294967295|A>>>21),A=x+(V^w^S)+P[15]+530742520&4294967295,x=V+(A<<16&4294967295|A>>>16),A=S+(x^V^w)+P[2]+3299628645&4294967295,S=x+(A<<23&4294967295|A>>>9),A=w+(x^(S|~V))+P[0]+4096336452&4294967295,w=S+(A<<6&4294967295|A>>>26),A=V+(S^(w|~x))+P[7]+1126891415&4294967295,V=w+(A<<10&4294967295|A>>>22),A=x+(w^(V|~S))+P[14]+2878612391&4294967295,x=V+(A<<15&4294967295|A>>>17),A=S+(V^(x|~w))+P[5]+4237533241&4294967295,S=x+(A<<21&4294967295|A>>>11),A=w+(x^(S|~V))+P[12]+1700485571&4294967295,w=S+(A<<6&4294967295|A>>>26),A=V+(S^(w|~x))+P[3]+2399980690&4294967295,V=w+(A<<10&4294967295|A>>>22),A=x+(w^(V|~S))+P[10]+4293915773&4294967295,x=V+(A<<15&4294967295|A>>>17),A=S+(V^(x|~w))+P[1]+2240044497&4294967295,S=x+(A<<21&4294967295|A>>>11),A=w+(x^(S|~V))+P[8]+1873313359&4294967295,w=S+(A<<6&4294967295|A>>>26),A=V+(S^(w|~x))+P[15]+4264355552&4294967295,V=w+(A<<10&4294967295|A>>>22),A=x+(w^(V|~S))+P[6]+2734768916&4294967295,x=V+(A<<15&4294967295|A>>>17),A=S+(V^(x|~w))+P[13]+1309151649&4294967295,S=x+(A<<21&4294967295|A>>>11),A=w+(x^(S|~V))+P[4]+4149444226&4294967295,w=S+(A<<6&4294967295|A>>>26),A=V+(S^(w|~x))+P[11]+3174756917&4294967295,V=w+(A<<10&4294967295|A>>>22),A=x+(w^(V|~S))+P[2]+718787259&4294967295,x=V+(A<<15&4294967295|A>>>17),A=S+(V^(x|~w))+P[9]+3951481745&4294967295,k.g[0]=k.g[0]+w&4294967295,k.g[1]=k.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+V&4294967295}s.prototype.u=function(k,w){w===void 0&&(w=k.length);for(var S=w-this.blockSize,P=this.B,x=this.h,V=0;V<w;){if(x==0)for(;V<=S;)o(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<w;)if(P[x++]=k.charCodeAt(V++),x==this.blockSize){o(this,P),x=0;break}}else for(;V<w;)if(P[x++]=k[V++],x==this.blockSize){o(this,P),x=0;break}}this.h=x,this.o+=w},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var w=1;w<k.length-8;++w)k[w]=0;var S=8*this.o;for(w=k.length-8;w<k.length;++w)k[w]=S&255,S/=256;for(this.u(k),k=Array(16),w=S=0;4>w;++w)for(var P=0;32>P;P+=8)k[S++]=this.g[w]>>>P&255;return k};function u(k,w){var S=m;return Object.prototype.hasOwnProperty.call(S,k)?S[k]:S[k]=w(k)}function h(k,w){this.h=w;for(var S=[],P=!0,x=k.length-1;0<=x;x--){var V=k[x]|0;P&&V==w||(S[x]=V,P=!1)}this.g=S}var m={};function g(k){return-128<=k&&128>k?u(k,function(w){return new h([w|0],0>w?-1:0)}):new h([k|0],0>k?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return N;if(0>k)return W(v(-k));for(var w=[],S=1,P=0;k>=S;P++)w[P]=k/S|0,S*=4294967296;return new h(w,0)}function T(k,w){if(k.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k.charAt(0)=="-")return W(T(k.substring(1),w));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=v(Math.pow(w,8)),P=N,x=0;x<k.length;x+=8){var V=Math.min(8,k.length-x),A=parseInt(k.substring(x,x+V),w);8>V?(V=v(Math.pow(w,V)),P=P.j(V).add(v(A))):(P=P.j(S),P=P.add(v(A)))}return P}var N=g(0),b=g(1),j=g(16777216);i=h.prototype,i.m=function(){if(X(this))return-W(this).m();for(var k=0,w=1,S=0;S<this.g.length;S++){var P=this.i(S);k+=(0<=P?P:4294967296+P)*w,w*=4294967296}return k},i.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(Y(this))return"0";if(X(this))return"-"+W(this).toString(k);for(var w=v(Math.pow(k,6)),S=this,P="";;){var x=we(S,w).g;S=Ee(S,x.j(w));var V=((0<S.g.length?S.g[0]:S.h)>>>0).toString(k);if(S=x,Y(S))return V+P;for(;6>V.length;)V="0"+V;P=V+P}},i.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function Y(k){if(k.h!=0)return!1;for(var w=0;w<k.g.length;w++)if(k.g[w]!=0)return!1;return!0}function X(k){return k.h==-1}i.l=function(k){return k=Ee(this,k),X(k)?-1:Y(k)?0:1};function W(k){for(var w=k.g.length,S=[],P=0;P<w;P++)S[P]=~k.g[P];return new h(S,~k.h).add(b)}i.abs=function(){return X(this)?W(this):this},i.add=function(k){for(var w=Math.max(this.g.length,k.g.length),S=[],P=0,x=0;x<=w;x++){var V=P+(this.i(x)&65535)+(k.i(x)&65535),A=(V>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);P=A>>>16,V&=65535,A&=65535,S[x]=A<<16|V}return new h(S,S[S.length-1]&-2147483648?-1:0)};function Ee(k,w){return k.add(W(w))}i.j=function(k){if(Y(this)||Y(k))return N;if(X(this))return X(k)?W(this).j(W(k)):W(W(this).j(k));if(X(k))return W(this.j(W(k)));if(0>this.l(j)&&0>k.l(j))return v(this.m()*k.m());for(var w=this.g.length+k.g.length,S=[],P=0;P<2*w;P++)S[P]=0;for(P=0;P<this.g.length;P++)for(var x=0;x<k.g.length;x++){var V=this.i(P)>>>16,A=this.i(P)&65535,et=k.i(x)>>>16,Ct=k.i(x)&65535;S[2*P+2*x]+=A*Ct,ge(S,2*P+2*x),S[2*P+2*x+1]+=V*Ct,ge(S,2*P+2*x+1),S[2*P+2*x+1]+=A*et,ge(S,2*P+2*x+1),S[2*P+2*x+2]+=V*et,ge(S,2*P+2*x+2)}for(P=0;P<w;P++)S[P]=S[2*P+1]<<16|S[2*P];for(P=w;P<2*w;P++)S[P]=0;return new h(S,0)};function ge(k,w){for(;(k[w]&65535)!=k[w];)k[w+1]+=k[w]>>>16,k[w]&=65535,w++}function ye(k,w){this.g=k,this.h=w}function we(k,w){if(Y(w))throw Error("division by zero");if(Y(k))return new ye(N,N);if(X(k))return w=we(W(k),w),new ye(W(w.g),W(w.h));if(X(w))return w=we(k,W(w)),new ye(W(w.g),w.h);if(30<k.g.length){if(X(k)||X(w))throw Error("slowDivide_ only works with positive integers.");for(var S=b,P=w;0>=P.l(k);)S=ze(S),P=ze(P);var x=Te(S,1),V=Te(P,1);for(P=Te(P,2),S=Te(S,2);!Y(P);){var A=V.add(P);0>=A.l(k)&&(x=x.add(S),V=A),P=Te(P,1),S=Te(S,1)}return w=Ee(k,x.j(w)),new ye(x,w)}for(x=N;0<=k.l(w);){for(S=Math.max(1,Math.floor(k.m()/w.m())),P=Math.ceil(Math.log(S)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),V=v(S),A=V.j(w);X(A)||0<A.l(k);)S-=P,V=v(S),A=V.j(w);Y(V)&&(V=b),x=x.add(V),k=Ee(k,A)}return new ye(x,k)}i.A=function(k){return we(this,k).h},i.and=function(k){for(var w=Math.max(this.g.length,k.g.length),S=[],P=0;P<w;P++)S[P]=this.i(P)&k.i(P);return new h(S,this.h&k.h)},i.or=function(k){for(var w=Math.max(this.g.length,k.g.length),S=[],P=0;P<w;P++)S[P]=this.i(P)|k.i(P);return new h(S,this.h|k.h)},i.xor=function(k){for(var w=Math.max(this.g.length,k.g.length),S=[],P=0;P<w;P++)S[P]=this.i(P)^k.i(P);return new h(S,this.h^k.h)};function ze(k){for(var w=k.g.length+1,S=[],P=0;P<w;P++)S[P]=k.i(P)<<1|k.i(P-1)>>>31;return new h(S,k.h)}function Te(k,w){var S=w>>5;w%=32;for(var P=k.g.length-S,x=[],V=0;V<P;V++)x[V]=0<w?k.i(V+S)>>>w|k.i(V+S+1)<<32-w:k.i(V+S);return new h(x,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,ny=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=T,qi=h}).apply(typeof Om<"u"?Om:typeof self<"u"?self:typeof window<"u"?window:{});var uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ry,ga,iy,gu,Xh,sy,oy,ay;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof uu=="object"&&uu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var O=l[E];if(!(O in y))break e;y=y[O]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,O={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function T(l,f,y){return l.call.apply(l.bind,arguments)}function N(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function b(l,f,y){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:N,b.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function Y(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,O,U){for(var J=Array(arguments.length-2),be=2;be<arguments.length;be++)J[be-2]=arguments[be];return f.prototype[O].apply(E,J)}}function X(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function W(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const O=l.length||0,U=E.length||0;l.length=O+U;for(let J=0;J<U;J++)l[O+J]=E[J]}else l.push(E)}}class Ee{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ge(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var ze=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Te(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function k(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function w(l){const f={};for(const y in l)f[y]=l[y];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let y,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(y in E)l[y]=E[y];for(let U=0;U<S.length;U++)y=S[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function x(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function V(l){m.setTimeout(()=>{throw l},0)}function A(){var l=ce;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,y){const E=Ct.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Ct=new Ee(()=>new kt,l=>l.reset());class kt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Z=!1,ce=new et,te=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(D)}};var D=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(y){V(y)}var f=Ct;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l})();function Se(l,f){if(le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(ze){e:{try{we(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ke[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Se.aa.h.call(this)}}Y(Se,le);var ke={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(l,f,y,E,O){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=O,this.key=++Me,this.da=this.fa=!1}function pt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Zn(l){this.src=l,this.g={},this.h=0}Zn.prototype.add=function(l,f,y,E,O){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var J=Pr(l,f,E,O);return-1<J?(f=l[J],y||(f.fa=!1)):(f=new Be(f,this.src,U,!!E,O),f.fa=y,l.push(f)),f};function es(l,f){var y=f.type;if(y in l.g){var E=l.g[y],O=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=O)&&Array.prototype.splice.call(E,O,1),U&&(pt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Pr(l,f,y,E){for(var O=0;O<l.length;++O){var U=l[O];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return O}return-1}var pi="closure_lm_"+(1e6*Math.random()|0),ts={};function go(l,f,y,E,O){if(Array.isArray(f)){for(var U=0;U<f.length;U++)go(l,f[U],y,E,O);return null}return y=vo(y),l&&l[Le]?l.K(f,y,v(E)?!!E.capture:!1,O):yo(l,f,y,!1,E,O)}function yo(l,f,y,E,O,U){if(!f)throw Error("Invalid event type");var J=v(O)?!!O.capture:!!O,be=rs(l);if(be||(l[pi]=be=new Zn(l)),y=be.add(f,y,E,J,U),y.proxy)return y;if(E=Ka(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Ie||(O=J),O===void 0&&(O=!1),l.addEventListener(f.toString(),E,O);else if(l.attachEvent)l.attachEvent(tr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ka(){function l(y){return f.call(l.src,l.listener,y)}const f=_o;return l}function ns(l,f,y,E,O){if(Array.isArray(f))for(var U=0;U<f.length;U++)ns(l,f[U],y,E,O);else E=v(E)?!!E.capture:!!E,y=vo(y),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Pr(U,y,E,O),-1<y&&(pt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=rs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Pr(f,y,E,O)),(y=-1<l?f[l]:null)&&er(y))}function er(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])es(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(tr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=rs(f))?(es(y,l),y.h==0&&(y.src=null,f[pi]=null)):pt(l)}}}function tr(l){return l in ts?ts[l]:ts[l]="on"+l}function _o(l,f){if(l.da)l=!0;else{f=new Se(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&er(l),l=y.call(E,f)}return l}function rs(l){return l=l[pi],l instanceof Zn?l:null}var is="__closure_events_fn_"+(1e9*Math.random()>>>0);function vo(l){return typeof l=="function"?l:(l[is]||(l[is]=function(f){return l.handleEvent(f)}),l[is])}function lt(){z.call(this),this.i=new Zn(this),this.M=this,this.F=null}Y(lt,z),lt.prototype[Le]=!0,lt.prototype.removeEventListener=function(l,f,y,E){ns(this,l,f,y,E)};function ut(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new le(f,l);else if(f instanceof le)f.target=f.target||l;else{var O=f;f=new le(E,l),P(f,O)}if(O=!0,y)for(var U=y.length-1;0<=U;U--){var J=f.g=y[U];O=nr(J,E,!0,f)&&O}if(J=f.g=l,O=nr(J,E,!0,f)&&O,O=nr(J,E,!1,f)&&O,y)for(U=0;U<y.length;U++)J=f.g=y[U],O=nr(J,E,!1,f)&&O}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)pt(y[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},lt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function nr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,U=0;U<f.length;++U){var J=f[U];if(J&&!J.da&&J.capture==y){var be=J.listener,ct=J.ha||J.src;J.fa&&es(l.i,J),O=be.call(ct,E)!==!1&&O}}return O&&!E.defaultPrevented}function Eo(l,f,y){if(typeof l=="function")y&&(l=b(l,y));else if(l&&typeof l.handleEvent=="function")l=b(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Cr(l){l.g=Eo(()=>{l.g=null,l.i&&(l.i=!1,Cr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class mi extends z{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Cr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gi(l){z.call(this),this.h=l,this.g={}}Y(gi,z);var wo=[];function To(l){Te(l.g,function(f,y){this.g.hasOwnProperty(y)&&er(f)},l),l.g={}}gi.prototype.N=function(){gi.aa.N.call(this),To(this)},gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Io=m.JSON.stringify,So=m.JSON.parse,Ao=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function yi(){}yi.prototype.h=null;function ss(l){return l.h||(l.h=l.i())}function os(){}var sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mn(){le.call(this,"d")}Y(Mn,le);function as(){le.call(this,"c")}Y(as,le);var bn={},Ro=null;function _i(){return Ro=Ro||new lt}bn.La="serverreachability";function Po(l){le.call(this,bn.La,l)}Y(Po,le);function rr(l){const f=_i();ut(f,new Po(f))}bn.STAT_EVENT="statevent";function Co(l,f){le.call(this,bn.STAT_EVENT,l),this.stat=f}Y(Co,le);function tt(l){const f=_i();ut(f,new Co(f,l))}bn.Ma="timingevent";function ls(l,f){le.call(this,bn.Ma,l),this.size=f}Y(ls,le);function _n(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function Ei(l,f,y,E,O,U){l.info(function(){if(l.g)if(U)for(var J="",be=U.split("&"),ct=0;ct<be.length;ct++){var Ne=be[ct].split("=");if(1<Ne.length){var mt=Ne[0];Ne=Ne[1];var it=mt.split("_");J=2<=it.length&&it[1]=="type"?J+(mt+"="+Ne+"&"):J+(mt+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+y+`
`+J})}function us(l,f,y,E,O,U,J){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+y+`
`+U+" "+J})}function vn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+ic(l,y)+(E?" "+E:"")})}function ko(l,f){l.info(function(){return"TIMEOUT: "+f})}vi.prototype.info=function(){};function ic(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<O.length;J++)O[J]=""}}}}return Io(y)}catch{return f}}var cs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ga={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},En;function wi(){}Y(wi,yi),wi.prototype.g=function(){return new XMLHttpRequest},wi.prototype.i=function(){return{}},En=new wi;function wn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new gi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qa}function Qa(){this.i=null,this.g="",this.h=!1}var No={},hs={};function ds(l,f,y){l.L=1,l.v=Vr(Jt(f)),l.m=y,l.P=!0,xo(l,null)}function xo(l,f){l.F=Date.now(),$e(l),l.A=Jt(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Lr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new Qa,l.g=fl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new mi(b(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(wo[0]=O.toString()),O=wo);for(var U=0;U<O.length;U++){var J=go(y,O[U],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?w(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),rr(),Ei(l.i,l.u,l.A,l.l,l.R,l.m)}wn.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},wn.prototype.Y=function(l){try{if(l==this.g)e:{const it=$t(this.g);var f=this.g.Ba();const ln=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||bo(this.g)))){this.J||it!=4||f==7||(f==8||0>=ln?rr(3):rr(2)),Ti(this);var y=this.g.Z();this.X=y;t:if(Ya(this)){var E=bo(this.g);l="";var O=E.length,U=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),kr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==O-1)});E.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,us(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var be,ct=this.g;if((be=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ge(be)){var Ne=be;break t}}Ne=null}if(y=Ne)vn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Do(this,y);else{this.o=!1,this.s=3,tt(12),on(this),kr(this);break e}}if(this.P){y=!0;let en;for(;!this.J&&this.C<J.length;)if(en=sc(this,J),en==hs){it==4&&(this.s=4,tt(14),y=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(en==No){this.s=4,tt(15),vn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else vn(this.i,this.l,en,null),Do(this,en);if(Ya(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||J.length!=0||this.h.h||(this.s=1,tt(16),y=!1),this.o=this.o&&y,!y)vn(this.i,this.l,J,"[Invalid Chunked Response]"),on(this),kr(this);else if(0<J.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Uo(mt),mt.M=!0,tt(11))}}else vn(this.i,this.l,J,null),Do(this,J);it==4&&on(this),this.o&&!this.J&&(it==4?Is(this.j,this):(this.o=!1,$e(this)))}else _s(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),on(this),kr(this)}}}catch{}finally{}};function Ya(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function sc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?hs:(y=Number(f.substring(y,E)),isNaN(y)?No:(E+=1,E+y>f.length?hs:(f=f.slice(E,E+y),l.C=E+y,f)))}wn.prototype.cancel=function(){this.J=!0,on(this)};function $e(l){l.S=Date.now()+l.I,Xa(l,l.I)}function Xa(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_n(b(l.ba,l),f)}function Ti(l){l.B&&(m.clearTimeout(l.B),l.B=null)}wn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ko(this.i,this.A),this.L!=2&&(rr(),tt(17)),on(this),this.s=2,kr(this)):Xa(this,this.S-l)};function kr(l){l.j.G==0||l.J||Is(l.j,l)}function on(l){Ti(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,To(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Do(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Ft(y.h,l))){if(!l.K&&Ft(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ts(y),Rn(y);else break e;ws(y),tt(18)}}else y.za=O[1],0<y.za-y.T&&37500>O[2]&&y.F&&y.v==0&&!y.C&&(y.C=_n(b(y.Za,y),6e3));if(1>=Za(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else lr(y,11)}else if((l.K||y.g==l)&&Ts(y),!ge(f))for(O=y.Da.g.parse(f),f=0;f<O.length;f++){let Ne=O[f];if(y.T=Ne[0],Ne=Ne[1],y.G==2)if(Ne[0]=="c"){y.K=Ne[1],y.ia=Ne[2];const mt=Ne[3];mt!=null&&(y.la=mt,y.j.info("VER="+y.la));const it=Ne[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const ln=Ne[5];ln!=null&&typeof ln=="number"&&0<ln&&(E=1.5*ln,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const en=l.g;if(en){const ki=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ki){var U=E.h;U.g||ki.indexOf("spdy")==-1&&ki.indexOf("quic")==-1&&ki.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Vo(U,U.h),U.h=null))}if(E.D){const As=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;As&&(E.ya=As,je(E.I,E.D,As))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=l;if(E.qa=dl(E,E.J?E.ia:null,E.W),J.K){el(E.h,J);var be=J,ct=E.L;ct&&(be.I=ct),be.B&&(Ti(be),$e(be)),E.g=J}else Ci(E);0<y.i.length&&zn(y)}else Ne[0]!="stop"&&Ne[0]!="close"||lr(y,7);else y.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?lr(y,7):wt(y):Ne[0]!="noop"&&y.l&&y.l.ta(Ne),y.v=0)}}rr(4)}catch{}}var Ja=class{constructor(l,f){this.g=l,this.map=f}};function Ii(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Za(l){return l.h?1:l.g?l.g.size:0}function Ft(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Vo(l,f){l.g?l.g.add(f):l.h=f}function el(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ii.prototype.cancel=function(){if(this.i=tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function tl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return X(l.i)}function fs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function ps(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Nr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=ps(l),E=fs(l),O=E.length,U=0;U<O;U++)f.call(void 0,E[U],y&&y[U],l)}var Si=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),O=null;if(0<=E){var U=l[y].substring(0,E);O=l[y].substring(E+1)}else U=l[y];f(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ir(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ir){this.h=l.h,Ai(this,l.j),this.o=l.o,this.g=l.g,xr(this,l.s),this.l=l.l;var f=l.i,y=new Fn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Dr(this,y),this.m=l.m}else l&&(f=String(l).match(Si))?(this.h=!1,Ai(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),xr(this,f[4]),this.l=Pe(f[5]||"",!0),Dr(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}ir.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Or(f,ms,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Or(f,ms,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Or(y,y.charAt(0)=="/"?il:rl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Or(y,Oo)),l.join("")};function Jt(l){return new ir(l)}function Ai(l,f,y){l.j=y?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function xr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Dr(l,f,y){f instanceof Fn?(l.i=f,Un(l.i,l.h)):(y||(f=Or(f,sl)),l.i=new Fn(f,l.h))}function je(l,f,y){l.i.set(f,y)}function Vr(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Or(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,nl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function nl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ms=/[#\/\?@]/g,rl=/[#\?:]/g,il=/[#\?]/g,sl=/[#\?@]/g,Oo=/#/g;function Fn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Et(l){l.g||(l.g=new Map,l.h=0,l.i&&oc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Fn.prototype,i.add=function(l,f){Et(this),this.i=null,l=an(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Tn(l,f){Et(l),f=an(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function In(l,f){return Et(l),f=an(l,f),l.g.has(f)}i.forEach=function(l,f){Et(this),this.g.forEach(function(y,E){y.forEach(function(O){l.call(f,O,E,this)},this)},this)},i.na=function(){Et(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const O=l[E];for(let U=0;U<O.length;U++)y.push(f[E])}return y},i.V=function(l){Et(this);let f=[];if(typeof l=="string")In(this,l)&&(f=f.concat(this.g.get(an(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return Et(this),this.i=null,l=an(this,l),In(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Lr(l,f,y){Tn(l,f),0<y.length&&(l.i=null,l.g.set(an(l,f),X(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var O=U;J[E]!==""&&(O+="="+encodeURIComponent(String(J[E]))),l.push(O)}}return this.i=l.join("&")};function an(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Un(l,f){f&&!l.j&&(Et(l),l.i=null,l.g.forEach(function(y,E){var O=E.toLowerCase();E!=O&&(Tn(this,E),Lr(this,O,y))},l)),l.j=f}function ac(l,f){const y=new vi;if(m.Image){const E=new Image;E.onload=j(Bt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Bt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(Bt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Bt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function ol(l,f){const y=new vi,E=new AbortController,O=setTimeout(()=>{E.abort(),Bt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(O),U.ok?Bt(y,"TestPingServer: ok",!0,f):Bt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Bt(y,"TestPingServer: error",!1,f)})}function Bt(l,f,y,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(y)}catch{}}function lc(){this.g=new Ao}function al(l,f,y){const E=y||"";try{Nr(l,function(O,U){let J=O;v(O)&&(J=Io(O)),f.push(E+U+"="+encodeURIComponent(J))})}catch(O){throw f.push(E+"type="+encodeURIComponent("_badmap")),O}}function sr(l){this.l=l.Ub||null,this.j=l.eb||!1}Y(sr,yi),sr.prototype.g=function(){return new Ri(this.l,this.j)},sr.prototype.i=(function(l){return function(){return l}})({});function Ri(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Y(Ri,lt),i=Ri.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,An(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ll(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ll(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Sn(this):An(this),this.readyState==3&&ll(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Sn(this))},i.Qa=function(l){this.g&&(this.response=l,Sn(this))},i.ga=function(){this.g&&Sn(this)};function Sn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,An(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function An(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function or(l){let f="";return Te(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Mr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=or(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):je(l,f,y))}function Ge(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Y(Ge,lt);var uc=/^https?$/i,Lo=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():En.g(),this.v=this.o?ss(this.o):ss(En),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Pi(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)y.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),O=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Lo,f,void 0))||E||O||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of y)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ys(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Pi(this,U)}};function Pi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,gs(l),Zt(l)}function gs(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),Zt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zt(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Mo(this):this.bb())},i.bb=function(){Mo(this)};function Mo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)Eo(l.Ea,0,l);else if(ut(l,"readystatechange"),$t(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=J===0){var O=String(l.D).match(Si)[1]||null;!O&&m.self&&m.self.location&&(O=m.self.location.protocol.slice(0,-1)),E=!uc.test(O?O.toLowerCase():"")}y=E}if(y)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var U=2<$t(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",gs(l)}}finally{Zt(l)}}}}function Zt(l,f){if(l.g){ys(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{y.onreadystatechange=E}catch{}}}function ys(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),So(f)}};function bo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function _s(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ge(l[E]))continue;var y=x(l[E]);const O=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[O]||[];f[O]=U,U.push(y)}k(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Fo(l){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jn("baseRetryDelayMs",5e3,l),this.cb=jn("retryDelaySeedMs",1e4,l),this.Wa=jn("forwardChannelMaxRetries",2,l),this.wa=jn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ii(l&&l.concurrentRequestLimit),this.Da=new lc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Fo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){tt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=dl(this,null,this.W),zn(this)};function wt(l){if(vs(l),l.G==3){var f=l.U++,y=Jt(l.I);if(je(y,"SID",l.K),je(y,"RID",f),je(y,"TYPE","terminate"),ar(l,y),f=new wn(l,l.j,f),f.L=2,f.v=Vr(Jt(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=fl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}hl(l)}function Rn(l){l.g&&(Uo(l),l.g.cancel(),l.g=null)}function vs(l){Rn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ts(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function zn(l){if(!Xt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||te(),Z||(Ue(),Z=!0),ce.add(f,l),l.B=0}}function cc(l,f){return Za(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_n(b(l.Ga,l,f),cl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new wn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=w(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=br(this,O,f),y=Jt(this.I),je(y,"RID",l),je(y,"CVER",22),this.D&&je(y,"X-HTTP-Session-Id",this.D),ar(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(or(U)))+"&"+f:this.m&&Mr(y,this.m,U)),Vo(this.h,O),this.Ua&&je(y,"TYPE","init"),this.P?(je(y,"$req",f),je(y,"SID","null"),O.T=!0,ds(O,y,null)):ds(O,y,f),this.G=2}}else this.G==3&&(l?Es(this,l):this.i.length==0||Xt(this.h)||Es(this))};function Es(l,f){var y;f?y=f.l:y=l.U++;const E=Jt(l.I);je(E,"SID",l.K),je(E,"RID",y),je(E,"AID",l.T),ar(l,E),l.m&&l.o&&Mr(E,l.m,l.o),y=new wn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=br(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Vo(l.h,y),ds(y,E,f)}function ar(l,f){l.H&&Te(l.H,function(y,E){je(f,E,y)}),l.l&&Nr({},function(y,E){je(f,E,y)})}function br(l,f,y){y=Math.min(l.i.length,y);var E=l.l?b(l.l.Na,l.l,l):null;e:{var O=l.i;let U=-1;for(;;){const J=["count="+y];U==-1?0<y?(U=O[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let be=!0;for(let ct=0;ct<y;ct++){let Ne=O[ct].g;const mt=O[ct].map;if(Ne-=U,0>Ne)U=Math.max(0,O[ct].g-100),be=!1;else try{al(mt,J,"req"+Ne+"_")}catch{E&&E(mt)}}if(be){E=J.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Ci(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||te(),Z||(Ue(),Z=!0),ce.add(f,l),l.v=0}}function ws(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_n(b(l.Fa,l),cl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_n(b(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Rn(this),ul(this))};function Uo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function ul(l){l.g=new wn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Jt(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),ar(l,f),l.m&&l.o&&Mr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Vr(Jt(f)),y.m=null,y.P=!0,xo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Rn(this),ws(this),tt(19))};function Ts(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Is(l,f){var y=null;if(l.g==f){Ts(l),Uo(l),l.g=null;var E=2}else if(Ft(l.h,f))y=f.D,el(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;E=_i(),ut(E,new ls(E,y)),zn(l)}else Ci(l);else if(O=f.s,O==3||O==0&&0<f.X||!(E==1&&cc(l,f)||E==2&&ws(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),O){case 1:lr(l,5);break;case 4:lr(l,10);break;case 3:lr(l,6);break;default:lr(l,2)}}}function cl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function lr(l,f){if(l.j.info("Error code "+f),f==2){var y=b(l.fb,l),E=l.Xa;const O=!E;E=new ir(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ai(E,"https"),Vr(E),O?ac(E.toString(),y):ol(E.toString(),y)}else tt(2);l.G=0,l.l&&l.l.sa(f),hl(l),vs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function hl(l){if(l.G=0,l.ka=[],l.l){const f=tl(l.h);(f.length!=0||l.i.length!=0)&&(W(l.ka,f),W(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function dl(l,f,y){var E=y instanceof ir?Jt(y):new ir(y);if(E.g!="")f&&(E.g=f+"."+E.g),xr(E,E.s);else{var O=m.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var U=new ir(null);E&&Ai(U,E),f&&(U.g=f),O&&xr(U,O),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&je(E,y,f),je(E,"VER",l.la),ar(l,E),E}function fl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ge(new sr({eb:y})):new Ge(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function jo(){}i=jo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ss(){}Ss.prototype.g=function(l,f){return new Ut(l,f)};function Ut(l,f){lt.call(this),this.g=new Fo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ge(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ge(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Bn(this)}Y(Ut,lt),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){wt(this.g)},Ut.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Io(l),l=y);f.i.push(new Ja(f.Ya++,l)),f.G==3&&zn(f)},Ut.prototype.N=function(){this.g.l=null,delete this.j,wt(this.g),delete this.g,Ut.aa.N.call(this)};function pl(l){Mn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Y(pl,Mn);function ml(){as.call(this),this.status=1}Y(ml,as);function Bn(l){this.g=l}Y(Bn,jo),Bn.prototype.ua=function(){ut(this.g,"a")},Bn.prototype.ta=function(l){ut(this.g,new pl(l))},Bn.prototype.sa=function(l){ut(this.g,new ml)},Bn.prototype.ra=function(){ut(this.g,"b")},Ss.prototype.createWebChannel=Ss.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,ay=function(){return new Ss},oy=function(){return _i()},sy=bn,Xh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},cs.NO_ERROR=0,cs.TIMEOUT=8,cs.HTTP_ERROR=6,gu=cs,Ga.COMPLETE="complete",iy=Ga,os.EventType=sn,sn.OPEN="a",sn.CLOSE="b",sn.ERROR="c",sn.MESSAGE="d",lt.prototype.listen=lt.prototype.K,ga=os,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,ry=Ge}).apply(typeof uu<"u"?uu:typeof self<"u"?self:typeof window<"u"?window:{});const Lm="@firebase/firestore";/**
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
 */let uo="10.14.0";/**
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
 */const Hi=new yd("@firebase/firestore");function ha(){return Hi.logLevel}function oe(i,...e){if(Hi.logLevel<=Ce.DEBUG){const t=e.map(Ed);Hi.debug(`Firestore (${uo}): ${i}`,...t)}}function Ir(i,...e){if(Hi.logLevel<=Ce.ERROR){const t=e.map(Ed);Hi.error(`Firestore (${uo}): ${i}`,...t)}}function to(i,...e){if(Hi.logLevel<=Ce.WARN){const t=e.map(Ed);Hi.warn(`Firestore (${uo}): ${i}`,...t)}}function Ed(i){if(typeof i=="string")return i;try{/**
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
 */function me(i="Unexpected state"){const e=`FIRESTORE (${uo}) INTERNAL ASSERTION FAILED: `+i;throw Ir(e),new Error(e)}function Fe(i,e){i||me()}function ve(i,e){return i}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Rr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ai{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class ly{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Lt.UNAUTHENTICATED)))}shutdown(){}}class Xw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Jw{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ai,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ai)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string"),new ly(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Lt(e)}}class Zw{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class e0{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new Zw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class t0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new t0(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function r0(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class uy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=r0(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Oe(i,e){return i<e?-1:i>e?1:0}function no(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */class ft{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ft(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _e(e)}static min(){return new _e(new ft(0,0))}static max(){return new _e(new ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Aa{constructor(e,t,s){t===void 0?t=0:t>e.length&&me(),s===void 0?s=e.length-t:s>e.length-t&&me(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Aa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Aa?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ke extends Aa{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const i0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends Aa{construct(e,t,s){return new At(e,t,s)}static isValidIdentifier(e){return i0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new At(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(t)}static emptyPath(){return new At([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ke.fromString(e))}static fromName(e){return new ue(Ke.fromString(e).popFirst(5))}static empty(){return new ue(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ke(e.slice()))}}function s0(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=_e.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new ui(o,ue.empty(),e)}function o0(i){return new ui(i.readTime,i.key,-1)}class ui{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ui(_e.min(),ue.empty(),-1)}static max(){return new ui(_e.max(),ue.empty(),-1)}}function a0(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:Oe(i.largestBatchId,e.largestBatchId))}/**
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
 */const l0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class u0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ma(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==l0)throw i;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,s)=>{t(e)}))}static reject(e){return new K(((t,s)=>{s(e)}))}static waitFor(e){return new K(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=K.resolve(!1);for(const s of e)t=t.next((o=>o?K.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new K(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next((T=>{h[v]=T,++m,m===u&&s(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new K(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function c0(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ba(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class wd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}wd.oe=-1;function $u(i){return i==null}function Cu(i){return i===0&&1/i==-1/0}function h0(i){return typeof i=="number"&&Number.isInteger(i)&&!Cu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */function Mm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function co(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function cy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Je{constructor(e,t){this.comparator=e,this.root=t||St.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cu(this.root,e,this.comparator,!1)}getReverseIterator(){return new cu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cu(this.root,e,this.comparator,!0)}}class cu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??St.RED,this.left=o??St.EMPTY,this.right=u??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new St(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return St.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,t,s,o,u){return this}insert(e,t,s){return new St(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Rt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bm(this.data.getIterator())}getIteratorFrom(e){return new bm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Rt(this.comparator);return t.data=e,t}}class bm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vn{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new Rt(At.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class hy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new hy("Invalid base64 string: "+u):u}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const d0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(i){if(Fe(!!i),typeof i=="string"){let e=0;const t=d0.exec(i);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ki(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
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
 */function Td(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Id(i){const e=i.mapValue.fields.__previous_value__;return Td(e)?Id(e):e}function Ra(i){const e=ci(i.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */class f0{constructor(e,t,s,o,u,h,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v}}class Pa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hu={mapValue:{}};function Gi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Td(i)?4:m0(i)?9007199254740991:p0(i)?10:11:me()}function Jn(i,e){if(i===e)return!0;const t=Gi(i);if(t!==Gi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ra(i).isEqual(Ra(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=ci(o.timestampValue),m=ci(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ki(o.bytesValue).isEqual(Ki(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Cu(h)===Cu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return no(i.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Mm(h)!==Mm(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!Jn(h[g],m[g])))return!1;return!0})(i,e);default:return me()}}function Ca(i,e){return(i.values||[]).find((t=>Jn(t,e)))!==void 0}function ro(i,e){if(i===e)return 0;const t=Gi(i),s=Gi(e);if(t!==s)return Oe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=rt(u.integerValue||u.doubleValue),g=rt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return Fm(i.timestampValue,e.timestampValue);case 4:return Fm(Ra(i),Ra(e));case 5:return Oe(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ki(u),g=Ki(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const T=Oe(m[v],g[v]);if(T!==0)return T}return Oe(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Oe(rt(u.latitude),rt(h.latitude));return m!==0?m:Oe(rt(u.longitude),rt(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Um(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,g,v,T;const N=u.fields||{},b=h.fields||{},j=(m=N.value)===null||m===void 0?void 0:m.arrayValue,Y=(g=b.value)===null||g===void 0?void 0:g.arrayValue,X=Oe(((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0,((T=Y==null?void 0:Y.values)===null||T===void 0?void 0:T.length)||0);return X!==0?X:Um(j,Y)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===hu.mapValue&&h===hu.mapValue)return 0;if(u===hu.mapValue)return 1;if(h===hu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},T=Object.keys(v);g.sort(),T.sort();for(let N=0;N<g.length&&N<T.length;++N){const b=Oe(g[N],T[N]);if(b!==0)return b;const j=ro(m[g[N]],v[T[N]]);if(j!==0)return j}return Oe(g.length,T.length)})(i.mapValue,e.mapValue);default:throw me()}}function Fm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const t=ci(i),s=ci(e),o=Oe(t.seconds,s.seconds);return o!==0?o:Oe(t.nanos,s.nanos)}function Um(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=ro(t[o],s[o]);if(u)return u}return Oe(t.length,s.length)}function io(i){return Jh(i)}function Jh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=ci(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ki(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return ue.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Jh(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Jh(t.fields[h])}`;return o+"}"})(i.mapValue):me()}function jm(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Zh(i){return!!i&&"integerValue"in i}function Sd(i){return!!i&&"arrayValue"in i}function zm(i){return!!i&&"nullValue"in i}function Bm(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function yu(i){return!!i&&"mapValue"in i}function p0(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function va(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return co(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=va(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=va(i.arrayValue.values[t]);return e}return Object.assign({},i)}function m0(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!yu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=va(t)}setAll(e){let t=At.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=va(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());yu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];yu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){co(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new gn(va(this.value))}}function dy(i){const e=[];return co(i.fields,((t,s)=>{const o=new At([t]);if(yu(s)){const u=dy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Vn(e)}/**
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
 */class Mt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,_e.min(),_e.min(),_e.min(),gn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,_e.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,_e.min(),_e.min(),gn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,_e.min(),_e.min(),gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ku{constructor(e,t){this.position=e,this.inclusive=t}}function $m(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=ro(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function qm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Jn(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Nu{constructor(e,t="asc"){this.field=e,this.dir=t}}function g0(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class fy{}class at extends fy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new _0(e,t,s):t==="array-contains"?new w0(e,s):t==="in"?new T0(e,s):t==="not-in"?new I0(e,s):t==="array-contains-any"?new S0(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new v0(e,s):new E0(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ro(t,this.value)):t!==null&&Gi(this.value)===Gi(t)&&this.matchesComparison(ro(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends fy{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new On(e,t)}matches(e){return py(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function py(i){return i.op==="and"}function my(i){return y0(i)&&py(i)}function y0(i){for(const e of i.filters)if(e instanceof On)return!1;return!0}function ed(i){if(i instanceof at)return i.field.canonicalString()+i.op.toString()+io(i.value);if(my(i))return i.filters.map((e=>ed(e))).join(",");{const e=i.filters.map((t=>ed(t))).join(",");return`${i.op}(${e})`}}function gy(i,e){return i instanceof at?(function(s,o){return o instanceof at&&s.op===o.op&&s.field.isEqual(o.field)&&Jn(s.value,o.value)})(i,e):i instanceof On?(function(s,o){return o instanceof On&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&gy(h,o.filters[m])),!0):!1})(i,e):void me()}function yy(i){return i instanceof at?(function(t){return`${t.field.canonicalString()} ${t.op} ${io(t.value)}`})(i):i instanceof On?(function(t){return t.op.toString()+" {"+t.getFilters().map(yy).join(" ,")+"}"})(i):"Filter"}class _0 extends at{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class v0 extends at{constructor(e,t){super(e,"in",t),this.keys=_y("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class E0 extends at{constructor(e,t){super(e,"not-in",t),this.keys=_y("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function _y(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>ue.fromName(s.referenceValue)))}class w0 extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Sd(t)&&Ca(t.arrayValue,this.value)}}class T0 extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ca(this.value.arrayValue,t)}}class I0 extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ca(this.value.arrayValue,t)}}class S0 extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Sd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ca(this.value.arrayValue,s)))}}/**
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
 */class A0{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function Wm(i,e=null,t=[],s=[],o=null,u=null,h=null){return new A0(i,e,t,s,o,u,h)}function Ad(i){const e=ve(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ed(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),$u(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>io(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>io(s))).join(",")),e.ue=t}return e.ue}function Rd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!g0(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!gy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!qm(i.startAt,e.startAt)&&qm(i.endAt,e.endAt)}function td(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Fa{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function R0(i,e,t,s,o,u,h,m){return new Fa(i,e,t,s,o,u,h,m)}function vy(i){return new Fa(i)}function Hm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Ey(i){return i.collectionGroup!==null}function Ea(i){const e=ve(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Rt(At.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Nu(u,s))})),t.has(At.keyField().canonicalString())||e.ce.push(new Nu(At.keyField(),s))}return e.ce}function Gn(i){const e=ve(i);return e.le||(e.le=P0(e,Ea(i))),e.le}function P0(i,e){if(i.limitType==="F")return Wm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Nu(o.field,u)}));const t=i.endAt?new ku(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new ku(i.startAt.position,i.startAt.inclusive):null;return Wm(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function nd(i,e){const t=i.filters.concat([e]);return new Fa(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function rd(i,e,t){return new Fa(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function qu(i,e){return Rd(Gn(i),Gn(e))&&i.limitType===e.limitType}function wy(i){return`${Ad(Gn(i))}|lt:${i.limitType}`}function Hs(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>yy(o))).join(", ")}]`),$u(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>io(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>io(o))).join(",")),`Target(${s})`})(Gn(i))}; limitType=${i.limitType})`}function Wu(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Ea(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const v=$m(h,m,g);return h.inclusive?v<=0:v<0})(s.startAt,Ea(s),o)||s.endAt&&!(function(h,m,g){const v=$m(h,m,g);return h.inclusive?v>=0:v>0})(s.endAt,Ea(s),o))})(i,e)}function C0(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Ty(i){return(e,t)=>{let s=!1;for(const o of Ea(i)){const u=k0(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function k0(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?ro(g,v):me()})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return me()}}/**
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
 */class ho{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){co(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return cy(this.inner)}size(){return this.innerSize}}/**
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
 */const N0=new Je(ue.comparator);function Sr(){return N0}const Iy=new Je(ue.comparator);function ya(...i){let e=Iy;for(const t of i)e=e.insert(t.key,t);return e}function Sy(i){let e=Iy;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function $i(){return wa()}function Ay(){return wa()}function wa(){return new ho((i=>i.toString()),((i,e)=>i.isEqual(e)))}const x0=new Je(ue.comparator),D0=new Rt(ue.comparator);function Re(...i){let e=D0;for(const t of i)e=e.add(t);return e}const V0=new Rt(Oe);function O0(){return V0}/**
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
 */function Pd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function Ry(i){return{integerValue:""+i}}function L0(i,e){return h0(e)?Ry(e):Pd(i,e)}/**
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
 */class Hu{constructor(){this._=void 0}}function M0(i,e,t){return i instanceof ka?(function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Td(u)&&(u=Id(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}})(t,e):i instanceof Na?Cy(i,e):i instanceof xa?ky(i,e):(function(o,u){const h=Py(o,u),m=Km(h)+Km(o.Pe);return Zh(h)&&Zh(o.Pe)?Ry(m):Pd(o.serializer,m)})(i,e)}function b0(i,e,t){return i instanceof Na?Cy(i,e):i instanceof xa?ky(i,e):t}function Py(i,e){return i instanceof xu?(function(s){return Zh(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class ka extends Hu{}class Na extends Hu{constructor(e){super(),this.elements=e}}function Cy(i,e){const t=Ny(e);for(const s of i.elements)t.some((o=>Jn(o,s)))||t.push(s);return{arrayValue:{values:t}}}class xa extends Hu{constructor(e){super(),this.elements=e}}function ky(i,e){let t=Ny(e);for(const s of i.elements)t=t.filter((o=>!Jn(o,s)));return{arrayValue:{values:t}}}class xu extends Hu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Km(i){return rt(i.integerValue||i.doubleValue)}function Ny(i){return Sd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class F0{constructor(e,t){this.field=e,this.transform=t}}function U0(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Na&&o instanceof Na||s instanceof xa&&o instanceof xa?no(s.elements,o.elements,Jn):s instanceof xu&&o instanceof xu?Jn(s.Pe,o.Pe):s instanceof ka&&o instanceof ka})(i.transform,e.transform)}class j0{constructor(e,t){this.version=e,this.transformResults=t}}class Er{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Er}static exists(e){return new Er(void 0,e)}static updateTime(e){return new Er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _u(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Ku{}function xy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Vy(i.key,Er.none()):new Ua(i.key,i.data,Er.none());{const t=i.data,s=gn.empty();let o=new Rt(At.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Xi(i.key,s,new Vn(o.toArray()),Er.none())}}function z0(i,e,t){i instanceof Ua?(function(o,u,h){const m=o.value.clone(),g=Qm(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Xi?(function(o,u,h){if(!_u(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Qm(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Dy(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ta(i,e,t,s){return i instanceof Ua?(function(u,h,m,g){if(!_u(u.precondition,h))return m;const v=u.value.clone(),T=Ym(u.fieldTransforms,g,h);return v.setAll(T),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof Xi?(function(u,h,m,g){if(!_u(u.precondition,h))return m;const v=Ym(u.fieldTransforms,g,h),T=h.data;return T.setAll(Dy(u)),T.setAll(v),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((N=>N.field)))})(i,e,t,s):(function(u,h,m){return _u(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function B0(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=Py(s.transform,o||null);u!=null&&(t===null&&(t=gn.empty()),t.set(s.field,u))}return t||null}function Gm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&no(s,o,((u,h)=>U0(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ua extends Ku{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Xi extends Ku{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Dy(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Qm(i,e,t){const s=new Map;Fe(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,b0(h,m,t[o]))}return s}function Ym(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,M0(u,h,e))}return s}class Vy extends Ku{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $0 extends Ku{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class q0{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&z0(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ta(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ta(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ay();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=xy(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(_e.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Re())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,((t,s)=>Gm(t,s)))&&no(this.baseMutations,e.baseMutations,((t,s)=>Gm(t,s)))}}class Cd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length);let o=(function(){return x0})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Cd(e,t,s,o)}}/**
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
 */class W0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class H0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,xe;function K0(i){switch(i){default:return me();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function Oy(i){if(i===void 0)return Ir("GRPC error has no .code"),$.UNKNOWN;switch(i){case ot.OK:return $.OK;case ot.CANCELLED:return $.CANCELLED;case ot.UNKNOWN:return $.UNKNOWN;case ot.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ot.INTERNAL:return $.INTERNAL;case ot.UNAVAILABLE:return $.UNAVAILABLE;case ot.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ot.NOT_FOUND:return $.NOT_FOUND;case ot.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ot.ABORTED:return $.ABORTED;case ot.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ot.DATA_LOSS:return $.DATA_LOSS;default:return me()}}(xe=ot||(ot={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function G0(){return new TextEncoder}/**
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
 */const Q0=new qi([4294967295,4294967295],0);function Xm(i){const e=G0().encode(i),t=new ny;return t.update(e),new Uint8Array(t.digest())}function Jm(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new qi([t,s],0),new qi([o,u],0)]}class kd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new _a(`Invalid padding: ${t}`);if(s<0)throw new _a(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new _a(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=qi.fromNumber(this.Ie)}Ee(e,t,s){let o=e.add(t.multiply(qi.fromNumber(s)));return o.compare(Q0)===1&&(o=new qi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Xm(e),[s,o]=Jm(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new kd(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.Ie===0)return;const t=Xm(e),[s,o]=Jm(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gu{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ja.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Gu(_e.min(),o,new Je(Oe),Sr(),Re())}}class ja{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ja(s,t,Re(),Re(),Re())}}/**
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
 */class vu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class Ly{constructor(e,t){this.targetId=e,this.me=t}}class My{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Zm{constructor(){this.fe=0,this.ge=tg(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Re(),t=Re(),s=Re();return this.ge.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:me()}})),new ja(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=tg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Y0{constructor(e){this.Le=e,this.Be=new Map,this.ke=Sr(),this.qe=eg(),this.Qe=new Je(Oe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:me()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((s,o)=>{this.ze(o)&&t(o)}))}He(e){const t=e.targetId,s=e.me.count,o=this.Je(t);if(o){const u=o.target;if(td(u))if(s===0){const h=new ue(u.path);this.Ue(t,h,Mt.newNoDocument(h,_e.min()))}else Fe(s===1);else{const h=this.Ye(t);if(h!==s){const m=this.Ze(e),g=m?this.Xe(m,e,h):1;if(g!==0){this.je(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,v)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ki(s).toUint8Array()}catch(g){if(g instanceof hy)return to("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new kd(h,o,u)}catch(g){return to(g instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Ie===0?null:m}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Le.tt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Ue(t,u,null),o++)})),o}rt(e){const t=new Map;this.Be.forEach(((u,h)=>{const m=this.Je(h);if(m){if(u.current&&td(m.target)){const g=new ue(m.target.path);this.ke.get(g)!==null||this.it(h,g)||this.Ue(h,g,Mt.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}}));let s=Re();this.qe.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const v=this.Je(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ke.forEach(((u,h)=>h.setReadTime(e)));const o=new Gu(e,t,this.Qe,this.ke,s);return this.ke=Sr(),this.qe=eg(),this.Qe=new Je(Oe),o}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Zm,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Rt(Oe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Zm),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function eg(){return new Je(ue.comparator)}function tg(){return new Je(ue.comparator)}const X0={asc:"ASCENDING",desc:"DESCENDING"},J0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Z0={and:"AND",or:"OR"};class eT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function id(i,e){return i.useProto3Json||$u(e)?e:{value:e}}function Du(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function by(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function tT(i,e){return Du(i,e.toTimestamp())}function Qn(i){return Fe(!!i),_e.fromTimestamp((function(t){const s=ci(t);return new ft(s.seconds,s.nanos)})(i))}function Nd(i,e){return sd(i,e).canonicalString()}function sd(i,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Fy(i){const e=Ke.fromString(i);return Fe($y(e)),e}function od(i,e){return Nd(i.databaseId,e.path)}function jh(i,e){const t=Fy(e);if(t.get(1)!==i.databaseId.projectId)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue(jy(t))}function Uy(i,e){return Nd(i.databaseId,e)}function nT(i){const e=Fy(i);return e.length===4?Ke.emptyPath():jy(e)}function ad(i){return new Ke(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function jy(i){return Fe(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function ng(i,e,t){return{name:od(i,e),fields:t.value.mapValue.fields}}function rT(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:me()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,T){return v.useProto3Json?(Fe(T===void 0||typeof T=="string"),Pt.fromBase64String(T||"")):(Fe(T===void 0||T instanceof Buffer||T instanceof Uint8Array),Pt.fromUint8Array(T||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const T=v.code===void 0?$.UNKNOWN:Oy(v.code);return new ie(T,v.message||"")})(h);t=new My(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=jh(i,s.document.name),u=Qn(s.document.updateTime),h=s.document.createTime?Qn(s.document.createTime):_e.min(),m=new gn({mapValue:{fields:s.document.fields}}),g=Mt.newFoundDocument(o,u,h,m),v=s.targetIds||[],T=s.removedTargetIds||[];t=new vu(v,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=jh(i,s.document),u=s.readTime?Qn(s.readTime):_e.min(),h=Mt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new vu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=jh(i,s.document),u=s.removedTargetIds||[];t=new vu([],u,o,null)}else{if(!("filter"in e))return me();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new H0(o,u),m=s.targetId;t=new Ly(m,h)}}return t}function iT(i,e){let t;if(e instanceof Ua)t={update:ng(i,e.key,e.value)};else if(e instanceof Vy)t={delete:od(i,e.key)};else if(e instanceof Xi)t={update:ng(i,e.key,e.data),updateMask:fT(e.fieldMask)};else{if(!(e instanceof $0))return me();t={verify:od(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof ka)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Na)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof xa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof xu)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw me()})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:tT(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:me()})(i,e.precondition)),t}function sT(i,e){return i&&i.length>0?(Fe(e!==void 0),i.map((t=>(function(o,u){let h=o.updateTime?Qn(o.updateTime):Qn(u);return h.isEqual(_e.min())&&(h=Qn(u)),new j0(h,o.transformResults||[])})(t,e)))):[]}function oT(i,e){return{documents:[Uy(i,e.path)]}}function aT(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Uy(i,o);const u=(function(v){if(v.length!==0)return By(On.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((T=>(function(b){return{field:Ks(b.field),direction:cT(b.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=id(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{_t:t,parent:o}}function lT(i){let e=nT(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(N){const b=zy(N);return b instanceof On&&my(b)?b.getFilters():[b]})(t.where));let h=[];t.orderBy&&(h=(function(N){return N.map((b=>(function(Y){return new Nu(Gs(Y.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(b)))})(t.orderBy));let m=null;t.limit&&(m=(function(N){let b;return b=typeof N=="object"?N.value:N,$u(b)?null:b})(t.limit));let g=null;t.startAt&&(g=(function(N){const b=!!N.before,j=N.values||[];return new ku(j,b)})(t.startAt));let v=null;return t.endAt&&(v=(function(N){const b=!N.before,j=N.values||[];return new ku(j,b)})(t.endAt)),R0(e,o,h,u,m,"F",g,v)}function uT(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zy(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Gs(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Gs(t.unaryFilter.field);return at.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Gs(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Gs(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});default:return me()}})(i):i.fieldFilter!==void 0?(function(t){return at.create(Gs(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return On.create(t.compositeFilter.filters.map((s=>zy(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me()}})(t.compositeFilter.op))})(i):me()}function cT(i){return X0[i]}function hT(i){return J0[i]}function dT(i){return Z0[i]}function Ks(i){return{fieldPath:i.canonicalString()}}function Gs(i){return At.fromServerFormat(i.fieldPath)}function By(i){return i instanceof at?(function(t){if(t.op==="=="){if(Bm(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NAN"}};if(zm(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bm(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NOT_NAN"}};if(zm(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(t.field),op:hT(t.op),value:t.value}}})(i):i instanceof On?(function(t){const s=t.getFilters().map((o=>By(o)));return s.length===1?s[0]:{compositeFilter:{op:dT(t.op),filters:s}}})(i):me()}function fT(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function $y(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class ri{constructor(e,t,s,o,u=_e.min(),h=_e.min(),m=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pT{constructor(e){this.ct=e}}function mT(i){const e=lT({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?rd(e,e.limit,"L"):e}/**
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
 */class gT{constructor(){this.un=new yT}addToCollectionParentIndex(e,t){return this.un.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(ui.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(ui.min())}updateCollectionGroup(e,t,s){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class yT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Rt(Ke.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Rt(Ke.comparator)).toArray()}}/**
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
 */class so{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new so(0)}static kn(){return new so(-1)}}/**
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
 */class _T{constructor(){this.changes=new ho((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?K.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ET{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ta(s.mutation,o,Vn.empty(),ft.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Re()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Re()){const o=$i();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=ya();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=$i();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Re())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Sr();const h=wa(),m=(function(){return wa()})();return t.forEach(((g,v)=>{const T=s.get(v.key);o.has(v.key)&&(T===void 0||T.mutation instanceof Xi)?u=u.insert(v.key,v):T!==void 0?(h.set(v.key,T.mutation.getFieldMask()),Ta(T.mutation,v,T.mutation.getFieldMask(),ft.now())):h.set(v.key,Vn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((v,T)=>h.set(v,T))),t.forEach(((v,T)=>{var N;return m.set(v,new vT(T,(N=h.get(v))!==null&&N!==void 0?N:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=wa();let o=new Je(((h,m)=>h-m)),u=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let T=s.get(g)||Vn.empty();T=m.applyToLocalView(v,T),s.set(g,T);const N=(o.get(m.batchId)||Re()).add(g);o=o.insert(m.batchId,N)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,T=g.value,N=Ay();T.forEach((b=>{if(!u.has(b)){const j=xy(t.get(b),s.get(b));j!==null&&N.set(b,j),u=u.add(b)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,N))}return K.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ey(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):K.resolve($i());let m=-1,g=u;return h.next((v=>K.forEach(v,((T,N)=>(m<N.largestBatchId&&(m=N.largestBatchId),u.get(T)?K.resolve():this.remoteDocumentCache.getEntry(e,T).next((b=>{g=g.insert(T,b)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,g,v,Re()))).next((T=>({batchId:m,changes:Sy(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((s=>{let o=ya();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ya();return this.indexManager.getCollectionParents(e,u).next((m=>K.forEach(m,(g=>{const v=(function(N,b){return new Fa(b,null,N.explicitOrderBy.slice(),N.filters.slice(),N.limit,N.limitType,N.startAt,N.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((T=>{T.forEach(((N,b)=>{h=h.insert(N,b)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,v)=>{const T=v.getKey();h.get(T)===null&&(h=h.insert(T,Mt.newInvalidDocument(T)))}));let m=ya();return h.forEach(((g,v)=>{const T=u.get(g);T!==void 0&&Ta(T.mutation,v,Vn.empty(),ft.now()),Wu(t,v)&&(m=m.insert(g,v))})),m}))}}/**
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
 */class wT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return K.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Qn(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,(function(o){return{name:o.name,query:mT(o.bundledQuery),readTime:Qn(o.readTime)}})(t)),K.resolve()}}/**
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
 */class TT{constructor(){this.overlays=new Je(ue.comparator),this.Ir=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const s=$i();return K.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.ht(e,t,u)})),K.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Ir.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Ir.delete(s)),K.resolve()}getOverlaysForCollection(e,t,s){const o=$i(),u=t.length+1,h=new ue(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je(((v,T)=>v-T));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let T=u.get(v.largestBatchId);T===null&&(T=$i(),u=u.insert(v.largestBatchId,T)),T.set(v.getKey(),v)}}const m=$i(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,T)=>m.set(v,T))),!(m.size()>=o)););return K.resolve(m)}ht(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(s.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new W0(t,s));let u=this.Ir.get(t);u===void 0&&(u=Re(),this.Ir.set(t,u)),this.Ir.set(t,u.add(s.key))}}/**
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
 */class IT{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class xd{constructor(){this.Tr=new Rt(vt.Er),this.dr=new Rt(vt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new vt(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Vr(new vt(e,t))}mr(e,t){e.forEach((s=>this.removeReference(s,t)))}gr(e){const t=new ue(new Ke([])),s=new vt(t,e),o=new vt(t,e+1),u=[];return this.dr.forEachInRange([s,o],(h=>{this.Vr(h),u.push(h.key)})),u}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ue(new Ke([])),s=new vt(t,e),o=new vt(t,e+1);let u=Re();return this.dr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new vt(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class vt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ue.comparator(e.key,t.key)||Oe(e.wr,t.wr)}static Ar(e,t){return Oe(e.wr,t.wr)||ue.comparator(e.key,t.key)}}/**
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
 */class ST{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Rt(vt.Er)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new q0(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.br=this.br.add(new vt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.vr(s),u=o<0?0:o;return K.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new vt(t,0),o=new vt(t,Number.POSITIVE_INFINITY),u=[];return this.br.forEachInRange([s,o],(h=>{const m=this.Dr(h.wr);u.push(m)})),K.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Rt(Oe);return t.forEach((o=>{const u=new vt(o,0),h=new vt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([u,h],(m=>{s=s.add(m.wr)}))})),K.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new vt(new ue(u),0);let m=new Rt(Oe);return this.br.forEachWhile((g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.wr)),!0)}),h),K.resolve(this.Cr(m))}Cr(e){const t=[];return e.forEach((s=>{const o=this.Dr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return K.forEach(t.mutations,(o=>{const u=new vt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.br=s}))}On(e){}containsKey(e,t){const s=new vt(t,0),o=this.br.firstAfterOrEqual(s);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class AT{constructor(e){this.Mr=e,this.docs=(function(){return new Je(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return K.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=Sr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mt.newInvalidDocument(o))})),K.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Sr();const h=t.path,m=new ue(h.child("")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:T}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||a0(o0(T),s)<=0||(o.has(T.key)||Wu(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return K.resolve(u)}getAllFromCollectionGroup(e,t,s,o){me()}Or(e,t){return K.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new RT(this)}getSize(e){return K.resolve(this.size)}}class RT extends _T{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(s)})),K.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class PT{constructor(e){this.persistence=e,this.Nr=new ho((t=>Ad(t)),Rd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.Lr=0,this.Br=new xd,this.targetCount=0,this.kr=so.Bn()}forEachTarget(e,t){return this.Nr.forEach(((s,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),K.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new so(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Kn(t),K.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Nr.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Nr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),K.waitFor(u).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return K.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),K.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),K.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return K.resolve(s)}containsKey(e,t){return K.resolve(this.Br.containsKey(t))}}/**
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
 */class CT{constructor(e,t){this.qr={},this.overlays={},this.Qr=new wd(0),this.Kr=!1,this.Kr=!0,this.$r=new IT,this.referenceDelegate=e(this),this.Ur=new PT(this),this.indexManager=new gT,this.remoteDocumentCache=(function(o){return new AT(o)})((s=>this.referenceDelegate.Wr(s))),this.serializer=new pT(t),this.Gr=new wT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new TT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new ST(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new kT(this.Qr.next());return this.referenceDelegate.zr(),s(o).next((u=>this.referenceDelegate.jr(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Hr(e,t){return K.or(Object.values(this.qr).map((s=>()=>s.containsKey(e,t))))}}class kT extends u0{constructor(e){super(),this.currentSequenceNumber=e}}class Dd{constructor(e){this.persistence=e,this.Jr=new xd,this.Yr=null}static Zr(e){return new Dd(e)}get Xr(){if(this.Yr)return this.Yr;throw me()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),K.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),K.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((o=>this.Xr.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.Xr.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Xr,(s=>{const o=ue.fromPath(s);return this.ei(e,o).next((u=>{u||t.removeEntry(o,_e.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return K.or([()=>K.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Vd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=o}static Wi(e,t){let s=Re(),o=Re();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Vd(e,t.fromCache,s,o)}}/**
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
 */class NT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return xE()?8:c0(bt())>0?6:4})()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Yi(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.Zi(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new NT;return this.Xi(e,t,h).next((m=>{if(u.result=m,this.zi)return this.es(e,t,h,m.size)}))})).next((()=>u.result))}es(e,t,s,o){return s.documentReadCount<this.ji?(ha()<=Ce.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Hs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),K.resolve()):(ha()<=Ce.DEBUG&&oe("QueryEngine","Query:",Hs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Hi*o?(ha()<=Ce.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Hs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(t))):K.resolve())}Yi(e,t){if(Hm(t))return K.resolve(null);let s=Gn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=rd(t,null,"F"),s=Gn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Re(...u);return this.Ji.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const v=this.ts(t,m);return this.ns(t,v,h,g.readTime)?this.Yi(e,rd(t,null,"F")):this.rs(e,v,t,g)}))))})))))}Zi(e,t,s,o){return Hm(t)||o.isEqual(_e.min())?K.resolve(null):this.Ji.getDocuments(e,s).next((u=>{const h=this.ts(t,u);return this.ns(t,h,s,o)?K.resolve(null):(ha()<=Ce.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Hs(t)),this.rs(e,h,t,s0(o,-1)).next((m=>m)))}))}ts(e,t){let s=new Rt(Ty(e));return t.forEach(((o,u)=>{Wu(e,u)&&(s=s.add(u))})),s}ns(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Xi(e,t,s){return ha()<=Ce.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Hs(t)),this.Ji.getDocumentsMatchingQuery(e,t,ui.min(),s)}rs(e,t,s,o){return this.Ji.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */class DT{constructor(e,t,s,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new Je(Oe),this._s=new ho((u=>Ad(u)),Rd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ET(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function VT(i,e,t,s){return new DT(i,e,t,s)}async function qy(i,e){const t=ve(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.ls(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Re();for(const v of o){h.push(v.batchId);for(const T of v.mutations)g=g.add(T.key)}for(const v of u){m.push(v.batchId);for(const T of v.mutations)g=g.add(T.key)}return t.localDocuments.getDocuments(s,g).next((v=>({hs:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function OT(i,e){const t=ve(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.cs.newChangeBuffer({trackRemovals:!0});return(function(m,g,v,T){const N=v.batch,b=N.keys();let j=K.resolve();return b.forEach((Y=>{j=j.next((()=>T.getEntry(g,Y))).next((X=>{const W=v.docVersions.get(Y);Fe(W!==null),X.version.compareTo(W)<0&&(N.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),T.addEntry(X)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(g,N)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Re();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Wy(i){const e=ve(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function LT(i,e){const t=ve(i),s=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const m=[];e.targetChanges.forEach(((T,N)=>{const b=o.get(N);if(!b)return;m.push(t.Ur.removeMatchingKeys(u,T.removedDocuments,N).next((()=>t.Ur.addMatchingKeys(u,T.addedDocuments,N))));let j=b.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(N)!==null?j=j.withResumeToken(Pt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):T.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(T.resumeToken,s)),o=o.insert(N,j),(function(X,W,Ee){return X.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=3e8?!0:Ee.addedDocuments.size+Ee.modifiedDocuments.size+Ee.removedDocuments.size>0})(b,j,T)&&m.push(t.Ur.updateTargetData(u,j))}));let g=Sr(),v=Re();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(MT(u,h,e.documentUpdates).next((T=>{g=T.Ps,v=T.Is}))),!s.isEqual(_e.min())){const T=t.Ur.getLastRemoteSnapshotVersion(u).next((N=>t.Ur.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return K.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,v))).next((()=>g))})).then((u=>(t.os=o,u)))}function MT(i,e,t){let s=Re(),o=Re();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Sr();return t.forEach(((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(_e.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):oe("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)})),{Ps:h,Is:o}}))}function bT(i,e){const t=ve(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function FT(i,e){const t=ve(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Ur.getTargetData(s,e).next((u=>u?(o=u,K.resolve(o)):t.Ur.allocateTargetId(s).next((h=>(o=new ri(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.os.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s}))}async function ld(i,e,t){const s=ve(i),o=s.os.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ba(h))throw h;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.os=s.os.remove(e),s._s.delete(o.target)}function rg(i,e,t){const s=ve(i);let o=_e.min(),u=Re();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,T){const N=ve(g),b=N._s.get(T);return b!==void 0?K.resolve(N.os.get(b)):N.Ur.getTargetData(v,T)})(s,h,Gn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.ss.getDocumentsMatchingQuery(h,e,t?o:_e.min(),t?u:Re()))).next((m=>(UT(s,C0(e),m),{documents:m,Ts:u})))))}function UT(i,e,t){let s=i.us.get(e)||_e.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.us.set(e,s)}class ig{constructor(){this.activeTargetIds=O0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jT{constructor(){this.so=new ig,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ig,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zT{_o(e){}shutdown(){}}/**
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
 */class sg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let du=null;function zh(){return du===null?du=(function(){return 268435456+Math.round(2147483648*Math.random())})():du++,"0x"+du.toString(16)}/**
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
 */const BT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class $T{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ot="WebChannelConnection";class qT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${o}/databases/${u}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}get Fo(){return!1}Mo(t,s,o,u,h){const m=zh(),g=this.xo(t,s.toUriEncodedString());oe("RestConnection",`Sending RPC '${t}' ${m}:`,g,o);const v={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(v,u,h),this.No(t,g,v,o).then((T=>(oe("RestConnection",`Received RPC '${t}' ${m}: `,T),T)),(T=>{throw to("RestConnection",`RPC '${t}' ${m} failed with error: `,T,"url: ",g,"request:",o),T}))}Lo(t,s,o,u,h,m){return this.Mo(t,s,o,u,h)}Oo(t,s,o){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+uo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach(((u,h)=>t[h]=u)),o&&o.headers.forEach(((u,h)=>t[h]=u))}xo(t,s){const o=BT[t];return`${this.Do}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,o){const u=zh();return new Promise(((h,m)=>{const g=new ry;g.setWithCredentials(!0),g.listenOnce(iy.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case gu.NO_ERROR:const T=g.getResponseJson();oe(Ot,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(T)),h(T);break;case gu.TIMEOUT:oe(Ot,`RPC '${e}' ${u} timed out`),m(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case gu.HTTP_ERROR:const N=g.getStatus();if(oe(Ot,`RPC '${e}' ${u} failed with status:`,N,"response text:",g.getResponseText()),N>0){let b=g.getResponseJson();Array.isArray(b)&&(b=b[0]);const j=b==null?void 0:b.error;if(j&&j.status&&j.message){const Y=(function(W){const Ee=W.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(Ee)>=0?Ee:$.UNKNOWN})(j.status);m(new ie(Y,j.message))}else m(new ie($.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ie($.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{oe(Ot,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);oe(Ot,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)}))}Bo(e,t,s){const o=zh(),u=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=ay(),m=oy(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const T=u.join("");oe(Ot,`Creating RPC '${e}' stream ${o}: ${T}`,g);const N=h.createWebChannel(T,g);let b=!1,j=!1;const Y=new $T({Io:W=>{j?oe(Ot,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(b||(oe(Ot,`Opening RPC '${e}' stream ${o} transport.`),N.open(),b=!0),oe(Ot,`RPC '${e}' stream ${o} sending:`,W),N.send(W))},To:()=>N.close()}),X=(W,Ee,ge)=>{W.listen(Ee,(ye=>{try{ge(ye)}catch(we){setTimeout((()=>{throw we}),0)}}))};return X(N,ga.EventType.OPEN,(()=>{j||(oe(Ot,`RPC '${e}' stream ${o} transport opened.`),Y.yo())})),X(N,ga.EventType.CLOSE,(()=>{j||(j=!0,oe(Ot,`RPC '${e}' stream ${o} transport closed`),Y.So())})),X(N,ga.EventType.ERROR,(W=>{j||(j=!0,to(Ot,`RPC '${e}' stream ${o} transport errored:`,W),Y.So(new ie($.UNAVAILABLE,"The operation could not be completed")))})),X(N,ga.EventType.MESSAGE,(W=>{var Ee;if(!j){const ge=W.data[0];Fe(!!ge);const ye=ge,we=ye.error||((Ee=ye[0])===null||Ee===void 0?void 0:Ee.error);if(we){oe(Ot,`RPC '${e}' stream ${o} received error:`,we);const ze=we.status;let Te=(function(S){const P=ot[S];if(P!==void 0)return Oy(P)})(ze),k=we.message;Te===void 0&&(Te=$.INTERNAL,k="Unknown error status: "+ze+" with message "+we.message),j=!0,Y.So(new ie(Te,k)),N.close()}else oe(Ot,`RPC '${e}' stream ${o} received:`,ge),Y.bo(ge)}})),X(m,sy.STAT_EVENT,(W=>{W.stat===Xh.PROXY?oe(Ot,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===Xh.NOPROXY&&oe(Ot,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Y.wo()}),0),Y}}function Bh(){return typeof document<"u"?document:null}/**
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
 */function Qu(i){return new eT(i,!0)}/**
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
 */class Hy{constructor(e,t,s=1e3,o=1.5,u=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=o,this.Qo=u,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Ky{constructor(e,t,s,o,u,h,m,g){this.ui=e,this.Ho=s,this.Jo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hy(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Ir(t.toString()),Ir("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.Yo===t&&this.P_(s,o)}),(s=>{e((()=>{const o=new ie($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(o)}))}))}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{s((()=>this.listener.Eo()))})),this.stream.Ro((()=>{s((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((o=>{s((()=>this.I_(o)))})),this.stream.onMessage((o=>{s((()=>++this.e_==1?this.E_(o):this.onNext(o)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class WT extends Ky{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=rT(this.serializer,e),s=(function(u){if(!("targetChange"in u))return _e.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?_e.min():h.readTime?Qn(h.readTime):_e.min()})(e);return this.listener.d_(t,s)}A_(e){const t={};t.database=ad(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=td(g)?{documents:oT(u,g)}:{query:aT(u,g)._t},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=by(u,h.resumeToken);const v=id(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(_e.min())>0){m.readTime=Du(u,h.snapshotVersion.toTimestamp());const v=id(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=uT(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){const t={};t.database=ad(this.serializer),t.removeTarget=e,this.a_(t)}}class HT extends Ky{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=sT(e.writeResults,e.commitTime),s=Qn(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=ad(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>iT(this.serializer,s)))};this.a_(t)}}/**
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
 */class KT extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Mo(e,sd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie($.UNKNOWN,u.toString())}))}Lo(e,t,s,o,u){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Lo(e,sd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie($.UNKNOWN,h.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class GT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ir(t),this.D_=!1):oe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class QT{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=u,this.k_._o((h=>{s.enqueueAndForget((async()=>{Ji(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await(async function(g){const v=ve(g);v.L_.add(4),await za(v),v.q_.set("Unknown"),v.L_.delete(4),await Yu(v)})(this))}))})),this.q_=new GT(s,o)}}async function Yu(i){if(Ji(i))for(const e of i.B_)await e(!0)}async function za(i){for(const e of i.B_)await e(!1)}function Gy(i,e){const t=ve(i);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),bd(t)?Md(t):fo(t).r_()&&Ld(t,e))}function Od(i,e){const t=ve(i),s=fo(t);t.N_.delete(e),s.r_()&&Qy(t,e),t.N_.size===0&&(s.r_()?s.o_():Ji(t)&&t.q_.set("Unknown"))}function Ld(i,e){if(i.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fo(i).A_(e)}function Qy(i,e){i.Q_.xe(e),fo(i).R_(e)}function Md(i){i.Q_=new Y0({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>i.N_.get(e)||null,tt:()=>i.datastore.serializer.databaseId}),fo(i).start(),i.q_.v_()}function bd(i){return Ji(i)&&!fo(i).n_()&&i.N_.size>0}function Ji(i){return ve(i).L_.size===0}function Yy(i){i.Q_=void 0}async function YT(i){i.q_.set("Online")}async function XT(i){i.N_.forEach(((e,t)=>{Ld(i,e)}))}async function JT(i,e){Yy(i),bd(i)?(i.q_.M_(e),Md(i)):i.q_.set("Unknown")}async function ZT(i,e,t){if(i.q_.set("Online"),e instanceof My&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.N_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.N_.delete(m),o.Q_.removeTarget(m))})(i,e)}catch(s){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Vu(i,s)}else if(e instanceof vu?i.Q_.Ke(e):e instanceof Ly?i.Q_.He(e):i.Q_.We(e),!t.isEqual(_e.min()))try{const s=await Wy(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Q_.rt(h);return m.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.N_.get(v);T&&u.N_.set(v,T.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,v)=>{const T=u.N_.get(g);if(!T)return;u.N_.set(g,T.withResumeToken(Pt.EMPTY_BYTE_STRING,T.snapshotVersion)),Qy(u,g);const N=new ri(T.target,g,v,T.sequenceNumber);Ld(u,N)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){oe("RemoteStore","Failed to raise snapshot:",s),await Vu(i,s)}}async function Vu(i,e,t){if(!ba(e))throw e;i.L_.add(1),await za(i),i.q_.set("Offline"),t||(t=()=>Wy(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{oe("RemoteStore","Retrying IndexedDB access"),await t(),i.L_.delete(1),await Yu(i)}))}function Xy(i,e){return e().catch((t=>Vu(i,t,e)))}async function Xu(i){const e=ve(i),t=hi(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;eI(e);)try{const o=await bT(e.localStore,s);if(o===null){e.O_.length===0&&t.o_();break}s=o.batchId,tI(e,o)}catch(o){await Vu(e,o)}Jy(e)&&Zy(e)}function eI(i){return Ji(i)&&i.O_.length<10}function tI(i,e){i.O_.push(e);const t=hi(i);t.r_()&&t.V_&&t.m_(e.mutations)}function Jy(i){return Ji(i)&&!hi(i).n_()&&i.O_.length>0}function Zy(i){hi(i).start()}async function nI(i){hi(i).p_()}async function rI(i){const e=hi(i);for(const t of i.O_)e.m_(t.mutations)}async function iI(i,e,t){const s=i.O_.shift(),o=Cd.from(s,e,t);await Xy(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Xu(i)}async function sI(i,e){e&&hi(i).V_&&await(async function(s,o){if((function(h){return K0(h)&&h!==$.ABORTED})(o.code)){const u=s.O_.shift();hi(s).s_(),await Xy(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Xu(s)}})(i,e),Jy(i)&&Zy(i)}async function og(i,e){const t=ve(i);t.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const s=Ji(t);t.L_.add(3),await za(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Yu(t)}async function oI(i,e){const t=ve(i);e?(t.L_.delete(2),await Yu(t)):e||(t.L_.add(2),await za(t),t.q_.set("Unknown"))}function fo(i){return i.K_||(i.K_=(function(t,s,o){const u=ve(t);return u.w_(),new WT(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Eo:YT.bind(null,i),Ro:XT.bind(null,i),mo:JT.bind(null,i),d_:ZT.bind(null,i)}),i.B_.push((async e=>{e?(i.K_.s_(),bd(i)?Md(i):i.q_.set("Unknown")):(await i.K_.stop(),Yy(i))}))),i.K_}function hi(i){return i.U_||(i.U_=(function(t,s,o){const u=ve(t);return u.w_(),new HT(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:nI.bind(null,i),mo:sI.bind(null,i),f_:rI.bind(null,i),g_:iI.bind(null,i)}),i.B_.push((async e=>{e?(i.U_.s_(),await Xu(i)):(await i.U_.stop(),i.O_.length>0&&(oe("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))}))),i.U_}/**
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
 */class Fd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Fd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ud(i,e){if(Ir("AsyncQueue",`${e}: ${i}`),ba(i))return new ie($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Ys{constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=ya(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ys;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class ag{constructor(){this.W_=new Je(ue.comparator)}track(e){const t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):me():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,s)=>{e.push(s)})),e}}class oo{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new oo(e,t,Ys.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class aI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class lI{constructor(){this.queries=lg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const o=ve(t),u=o.queries;o.queries=lg(),u.forEach(((h,m)=>{for(const g of m.j_)g.onError(s)}))})(this,new ie($.ABORTED,"Firestore shutting down"))}}function lg(){return new ho((i=>wy(i)),qu)}async function uI(i,e){const t=ve(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.H_()&&e.J_()&&(s=2):(u=new aI,s=e.J_()?0:1);try{switch(s){case 0:u.z_=await t.onListen(o,!0);break;case 1:u.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Ud(h,`Initialization of query '${Hs(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.j_.push(e),e.Z_(t.onlineState),u.z_&&e.X_(u.z_)&&jd(t)}async function cI(i,e){const t=ve(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.j_.indexOf(e);h>=0&&(u.j_.splice(h,1),u.j_.length===0?o=e.J_()?0:1:!u.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function hI(i,e){const t=ve(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.j_)m.X_(o)&&(s=!0);h.z_=o}}s&&jd(t)}function dI(i,e,t){const s=ve(i),o=s.queries.get(e);if(o)for(const u of o.j_)u.onError(t);s.queries.delete(e)}function jd(i){i.Y_.forEach((e=>{e.next()}))}var ud,ug;(ug=ud||(ud={})).ea="default",ug.Cache="cache";class fI{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new oo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ud.Cache}}/**
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
 */class e_{constructor(e){this.key=e}}class t_{constructor(e){this.key=e}}class pI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Re(),this.mutatedKeys=Re(),this.Aa=Ty(e),this.Ra=new Ys(this.Aa)}get Va(){return this.Ta}ma(e,t){const s=t?t.fa:new ag,o=t?t.Ra:this.Ra;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,N)=>{const b=o.get(T),j=Wu(this.query,N)?N:null,Y=!!b&&this.mutatedKeys.has(b.key),X=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let W=!1;b&&j?b.data.isEqual(j.data)?Y!==X&&(s.track({type:3,doc:j}),W=!0):this.ga(b,j)||(s.track({type:2,doc:j}),W=!0,(g&&this.Aa(j,g)>0||v&&this.Aa(j,v)<0)&&(m=!0)):!b&&j?(s.track({type:0,doc:j}),W=!0):b&&!j&&(s.track({type:1,doc:b}),W=!0,(g||v)&&(m=!0)),W&&(j?(h=h.add(j),u=X?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{Ra:h,fa:s,ns:m,mutatedKeys:u}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort(((T,N)=>(function(j,Y){const X=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return X(j)-X(Y)})(T.type,N.type)||this.Aa(T.doc,N.doc))),this.pa(s),o=o!=null&&o;const m=t&&!o?this.ya():[],g=this.da.size===0&&this.current&&!o?1:0,v=g!==this.Ea;return this.Ea=g,h.length!==0||v?{snapshot:new oo(this.query,e.Ra,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:m}:{wa:m}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ag,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Re(),this.Ra.forEach((s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))}));const t=[];return e.forEach((s=>{this.da.has(s)||t.push(new t_(s))})),this.da.forEach((s=>{e.has(s)||t.push(new e_(s))})),t}ba(e){this.Ta=e.Ts,this.da=Re();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return oo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class mI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class gI{constructor(e){this.key=e,this.va=!1}}class yI{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new ho((m=>wy(m)),qu),this.Ma=new Map,this.xa=new Set,this.Oa=new Je(ue.comparator),this.Na=new Map,this.La=new xd,this.Ba={},this.ka=new Map,this.qa=so.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function _I(i,e,t=!0){const s=a_(i);let o;const u=s.Fa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Da()):o=await n_(s,e,t,!0),o}async function vI(i,e){const t=a_(i);await n_(t,e,!0,!1)}async function n_(i,e,t,s){const o=await FT(i.localStore,Gn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await EI(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&Gy(i.remoteStore,o),m}async function EI(i,e,t,s,o){i.Ka=(N,b,j)=>(async function(X,W,Ee,ge){let ye=W.view.ma(Ee);ye.ns&&(ye=await rg(X.localStore,W.query,!1).then((({documents:k})=>W.view.ma(k,ye))));const we=ge&&ge.targetChanges.get(W.targetId),ze=ge&&ge.targetMismatches.get(W.targetId)!=null,Te=W.view.applyChanges(ye,X.isPrimaryClient,we,ze);return hg(X,W.targetId,Te.wa),Te.snapshot})(i,N,b,j);const u=await rg(i.localStore,e,!0),h=new pI(e,u.Ts),m=h.ma(u.documents),g=ja.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);hg(i,t,v.wa);const T=new mI(e,t,h);return i.Fa.set(e,T),i.Ma.has(t)?i.Ma.get(t).push(e):i.Ma.set(t,[e]),v.snapshot}async function wI(i,e,t){const s=ve(i),o=s.Fa.get(e),u=s.Ma.get(o.targetId);if(u.length>1)return s.Ma.set(o.targetId,u.filter((h=>!qu(h,e)))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ld(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Od(s.remoteStore,o.targetId),cd(s,o.targetId)})).catch(Ma)):(cd(s,o.targetId),await ld(s.localStore,o.targetId,!0))}async function TI(i,e){const t=ve(i),s=t.Fa.get(e),o=t.Ma.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Od(t.remoteStore,s.targetId))}async function II(i,e,t){const s=NI(i);try{const o=await(function(h,m){const g=ve(h),v=ft.now(),T=m.reduce(((j,Y)=>j.add(Y.key)),Re());let N,b;return g.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let Y=Sr(),X=Re();return g.cs.getEntries(j,T).next((W=>{Y=W,Y.forEach(((Ee,ge)=>{ge.isValidDocument()||(X=X.add(Ee))}))})).next((()=>g.localDocuments.getOverlayedDocuments(j,Y))).next((W=>{N=W;const Ee=[];for(const ge of m){const ye=B0(ge,N.get(ge.key).overlayedDocument);ye!=null&&Ee.push(new Xi(ge.key,ye,dy(ye.value.mapValue),Er.exists(!0)))}return g.mutationQueue.addMutationBatch(j,v,Ee,m)})).next((W=>{b=W;const Ee=W.applyToLocalDocumentSet(N,X);return g.documentOverlayCache.saveOverlays(j,W.batchId,Ee)}))})).then((()=>({batchId:b.batchId,changes:Sy(N)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let v=h.Ba[h.currentUser.toKey()];v||(v=new Je(Oe)),v=v.insert(m,g),h.Ba[h.currentUser.toKey()]=v})(s,o.batchId,t),await Ba(s,o.changes),await Xu(s.remoteStore)}catch(o){const u=Ud(o,"Failed to persist write");t.reject(u)}}async function r_(i,e){const t=ve(i);try{const s=await LT(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Na.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.va=!0:o.modifiedDocuments.size>0?Fe(h.va):o.removedDocuments.size>0&&(Fe(h.va),h.va=!1))})),await Ba(t,s,e)}catch(s){await Ma(s)}}function cg(i,e,t){const s=ve(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Fa.forEach(((u,h)=>{const m=h.view.Z_(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=ve(h);g.onlineState=m;let v=!1;g.queries.forEach(((T,N)=>{for(const b of N.j_)b.Z_(m)&&(v=!0)})),v&&jd(g)})(s.eventManager,e),o.length&&s.Ca.d_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function SI(i,e,t){const s=ve(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Na.get(e),u=o&&o.key;if(u){let h=new Je(ue.comparator);h=h.insert(u,Mt.newNoDocument(u,_e.min()));const m=Re().add(u),g=new Gu(_e.min(),new Map,new Je(Oe),h,m);await r_(s,g),s.Oa=s.Oa.remove(u),s.Na.delete(e),zd(s)}else await ld(s.localStore,e,!1).then((()=>cd(s,e,t))).catch(Ma)}async function AI(i,e){const t=ve(i),s=e.batch.batchId;try{const o=await OT(t.localStore,e);s_(t,s,null),i_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ba(t,o)}catch(o){await Ma(o)}}async function RI(i,e,t){const s=ve(i);try{const o=await(function(h,m){const g=ve(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let T;return g.mutationQueue.lookupMutationBatch(v,m).next((N=>(Fe(N!==null),T=N.keys(),g.mutationQueue.removeMutationBatch(v,N)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,T,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,T))).next((()=>g.localDocuments.getDocuments(v,T)))}))})(s.localStore,e);s_(s,e,t),i_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ba(s,o)}catch(o){await Ma(o)}}function i_(i,e){(i.ka.get(e)||[]).forEach((t=>{t.resolve()})),i.ka.delete(e)}function s_(i,e,t){const s=ve(i);let o=s.Ba[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ba[s.currentUser.toKey()]=o}}function cd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Ma.get(e))i.Fa.delete(s),t&&i.Ca.$a(s,t);i.Ma.delete(e),i.isPrimaryClient&&i.La.gr(e).forEach((s=>{i.La.containsKey(s)||o_(i,s)}))}function o_(i,e){i.xa.delete(e.path.canonicalString());const t=i.Oa.get(e);t!==null&&(Od(i.remoteStore,t),i.Oa=i.Oa.remove(e),i.Na.delete(t),zd(i))}function hg(i,e,t){for(const s of t)s instanceof e_?(i.La.addReference(s.key,e),PI(i,s)):s instanceof t_?(oe("SyncEngine","Document no longer in limbo: "+s.key),i.La.removeReference(s.key,e),i.La.containsKey(s.key)||o_(i,s.key)):me()}function PI(i,e){const t=e.key,s=t.path.canonicalString();i.Oa.get(t)||i.xa.has(s)||(oe("SyncEngine","New document in limbo: "+t),i.xa.add(s),zd(i))}function zd(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const e=i.xa.values().next().value;i.xa.delete(e);const t=new ue(Ke.fromString(e)),s=i.qa.next();i.Na.set(s,new gI(t)),i.Oa=i.Oa.insert(t,s),Gy(i.remoteStore,new ri(Gn(vy(t.path)),s,"TargetPurposeLimboResolution",wd.oe))}}async function Ba(i,e,t){const s=ve(i),o=[],u=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach(((m,g)=>{h.push(s.Ka(g,e,t).then((v=>{var T;if((v||t)&&s.isPrimaryClient){const N=v?!v.fromCache:(T=t==null?void 0:t.targetChanges.get(g.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,N?"current":"not-current")}if(v){o.push(v);const N=Vd.Wi(g.targetId,v);u.push(N)}})))})),await Promise.all(h),s.Ca.d_(o),await(async function(g,v){const T=ve(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(N=>K.forEach(v,(b=>K.forEach(b.$i,(j=>T.persistence.referenceDelegate.addReference(N,b.targetId,j))).next((()=>K.forEach(b.Ui,(j=>T.persistence.referenceDelegate.removeReference(N,b.targetId,j)))))))))}catch(N){if(!ba(N))throw N;oe("LocalStore","Failed to update sequence numbers: "+N)}for(const N of v){const b=N.targetId;if(!N.fromCache){const j=T.os.get(b),Y=j.snapshotVersion,X=j.withLastLimboFreeSnapshotVersion(Y);T.os=T.os.insert(b,X)}}})(s.localStore,u))}async function CI(i,e){const t=ve(i);if(!t.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const s=await qy(t.localStore,e);t.currentUser=e,(function(u,h){u.ka.forEach((m=>{m.forEach((g=>{g.reject(new ie($.CANCELLED,h))}))})),u.ka.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ba(t,s.hs)}}function kI(i,e){const t=ve(i),s=t.Na.get(e);if(s&&s.va)return Re().add(s.key);{let o=Re();const u=t.Ma.get(e);if(!u)return o;for(const h of u){const m=t.Fa.get(h);o=o.unionWith(m.view.Va)}return o}}function a_(i){const e=ve(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=r_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SI.bind(null,e),e.Ca.d_=hI.bind(null,e.eventManager),e.Ca.$a=dI.bind(null,e.eventManager),e}function NI(i){const e=ve(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RI.bind(null,e),e}class Ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return VT(this.persistence,new xT,e.initialUser,this.serializer)}Ga(e){return new CT(Dd.Zr,this.serializer)}Wa(e){return new jT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ou.provider={build:()=>new Ou};class hd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>cg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=CI.bind(null,this.syncEngine),await oI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new lI})()}createDatastore(e){const t=Qu(e.databaseInfo.databaseId),s=(function(u){return new qT(u)})(e.databaseInfo);return(function(u,h,m,g){return new KT(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new QT(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>cg(this.syncEngine,t,0)),(function(){return sg.D()?new sg:new zT})())}createSyncEngine(e,t){return(function(o,u,h,m,g,v,T){const N=new yI(o,u,h,m,g,v);return T&&(N.Qa=!0),N})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=ve(o);oe("RemoteStore","RemoteStore shutting down."),u.L_.add(5),await za(u),u.k_.shutdown(),u.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hd.provider={build:()=>new hd};/**
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
 */class xI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ir("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class DI{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=uy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{oe("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(oe("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ud(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function $h(i,e){i.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await qy(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function dg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await VI(i);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>og(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>og(e.remoteStore,o))),i._onlineComponents=e}async function VI(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await $h(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;to("Error using user provided cache. Falling back to memory cache: "+t),await $h(i,new Ou)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await $h(i,new Ou);return i._offlineComponents}async function l_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await dg(i,i._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await dg(i,new hd))),i._onlineComponents}function OI(i){return l_(i).then((e=>e.syncEngine))}async function LI(i){const e=await l_(i),t=e.eventManager;return t.onListen=_I.bind(null,e.syncEngine),t.onUnlisten=wI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=vI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=TI.bind(null,e.syncEngine),t}function MI(i,e,t={}){const s=new ai;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,v){const T=new xI({next:b=>{T.Za(),h.enqueueAndForget((()=>cI(u,N))),b.fromCache&&g.source==="server"?v.reject(new ie($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(b)},error:b=>v.reject(b)}),N=new fI(m,T,{includeMetadataChanges:!0,_a:!0});return uI(u,N)})(await LI(i),i.asyncQueue,e,t,s))),s.promise}/**
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
 */function u_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const fg=new Map;/**
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
 */function c_(i,e,t){if(!t)throw new ie($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function bI(i,e,t,s){if(e===!0&&s===!0)throw new ie($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function pg(i){if(!ue.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function mg(i){if(ue.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ju(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":me()}function Lu(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ju(i);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */class gg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zu{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gg(e),e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Yw;switch(s.type){case"firstParty":return new e0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=fg.get(t);s&&(oe("ComponentProvider","Removing Datastore"),fg.delete(t),s.terminate())})(this),Promise.resolve()}}function FI(i,e,t,s={}){var o;const u=(i=Lu(i,Zu))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&to("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Lt.MOCK_USER;else{m=SE(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Lt(v)}i._authCredentials=new Xw(new ly(m,g))}}/**
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
 */class po{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new po(this.firestore,e,this._query)}}class yn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yn(this.firestore,e,this._key)}}class li extends po{constructor(e,t,s){super(e,t,vy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yn(this.firestore,null,new ue(e))}withConverter(e){return new li(this.firestore,e,this._path)}}function da(i,e,...t){if(i=Yt(i),c_("collection","path",e),i instanceof Zu){const s=Ke.fromString(e,...t);return mg(s),new li(i,null,s)}{if(!(i instanceof yn||i instanceof li))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return mg(s),new li(i.firestore,null,s)}}function UI(i,e,...t){if(i=Yt(i),arguments.length===1&&(e=uy.newId()),c_("doc","path",e),i instanceof Zu){const s=Ke.fromString(e,...t);return pg(s),new yn(i,null,new ue(s))}{if(!(i instanceof yn||i instanceof li))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return pg(s),new yn(i.firestore,i instanceof li?i.converter:null,new ue(s))}}/**
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
 */class yg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hy(this,"async_queue_retry"),this.Vu=()=>{const s=Bh();s&&oe("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=Bh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Bh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new ai;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ba(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((s=>{this.Eu=s,this.du=!1;const o=(function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m})(s);throw Ir("INTERNAL UNHANDLED ERROR: ",o),s})).then((s=>(this.du=!1,s))))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Fd.createAndSchedule(this,e,t,s,(u=>this.yu(u)));return this.Tu.push(o),o}fu(){this.Eu&&me()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Bd extends Zu{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new yg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yg(e),this._firestoreClient=void 0,await e}}}function jI(i,e){const t=typeof i=="object"?i:Zg(),s=typeof i=="string"?i:"(default)",o=vd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=TE("firestore");u&&FI(o,...u)}return o}function h_(i){if(i._terminated)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||zI(i),i._firestoreClient}function zI(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,g,v,T){return new f0(m,g,v,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,u_(T.experimentalLongPollingOptions),T.useFetchStreams)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new DI(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(i._componentsProvider))}/**
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
 */class ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ao(Pt.fromBase64String(e))}catch(t){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ao(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $d{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qd{constructor(e){this._methodName=e}}/**
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
 */class Wd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */class Hd{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}}/**
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
 */const BI=/^__.*__$/;class $I{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Xi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ua(e,this.data,t,this.fieldTransforms)}}function d_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Kd{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.vu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Kd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.Ou(e),o}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Mu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(d_(this.Cu)&&BI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class qI{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Qu(e)}Qu(e,t,s,o=!1){return new Kd({Cu:e,methodName:t,qu:s,path:At.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function f_(i){const e=i._freezeSettings(),t=Qu(i._databaseId);return new qI(i._databaseId,!!e.ignoreUndefinedProperties,t)}function WI(i,e,t,s,o,u={}){const h=i.Qu(u.merge||u.mergeFields?2:0,e,t,o);g_("Data must be an object, but it was:",h,s);const m=p_(s,h);let g,v;if(u.merge)g=new Vn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const N of u.mergeFields){const b=KI(e,N,t);if(!h.contains(b))throw new ie($.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);QI(T,b)||T.push(b)}g=new Vn(T),v=h.fieldTransforms.filter((N=>g.covers(N.field)))}else g=null,v=h.fieldTransforms;return new $I(new gn(m),g,v)}class Gd extends qd{_toFieldTransform(e){return new F0(e.path,new ka)}isEqual(e){return e instanceof Gd}}function HI(i,e,t,s=!1){return Qd(t,i.Qu(s?4:3,e))}function Qd(i,e){if(m_(i=Yt(i)))return g_("Unsupported field value:",e,i),p_(i,e);if(i instanceof qd)return(function(s,o){if(!d_(o.Cu))throw o.Bu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=Qd(m,o.Lu(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return L0(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:Du(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Du(o.serializer,u)}}if(s instanceof Wd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ao)return{bytesValue:by(o.serializer,s._byteString)};if(s instanceof yn){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Nd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Hd)return(function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map((g=>{if(typeof g!="number")throw m.Bu("VectorValues must only contain numeric values.");return Pd(m.serializer,g)}))}}}}}})(s,o);throw o.Bu(`Unsupported field value: ${Ju(s)}`)})(i,e)}function p_(i,e){const t={};return cy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):co(i,((s,o)=>{const u=Qd(o,e.Mu(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function m_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof Wd||i instanceof ao||i instanceof yn||i instanceof qd||i instanceof Hd)}function g_(i,e,t){if(!m_(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const s=Ju(t);throw s==="an object"?e.Bu(i+" a custom object"):e.Bu(i+" "+s)}}function KI(i,e,t){if((e=Yt(e))instanceof $d)return e._internalPath;if(typeof e=="string")return y_(i,e);throw Mu("Field path arguments must be of type string or ",i,!1,void 0,t)}const GI=new RegExp("[~\\*/\\[\\]]");function y_(i,e,t){if(e.search(GI)>=0)throw Mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new $d(...e.split("."))._internalPath}catch{throw Mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Mu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ie($.INVALID_ARGUMENT,m+i+g)}function QI(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class __{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new yn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class YI extends __{data(){return super.data()}}function Yd(i,e){return typeof e=="string"?y_(i,e):e instanceof $d?e._internalPath:e._delegate._internalPath}/**
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
 */function XI(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xd{}class JI extends Xd{}function _g(i,e,...t){let s=[];e instanceof Xd&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((g=>g instanceof Jd)).length,m=u.filter((g=>g instanceof ec)).length;if(h>1||h>0&&m>0)throw new ie($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class ec extends JI{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ec(e,t,s)}_apply(e){const t=this._parse(e);return v_(e._query,t),new po(e.firestore,e.converter,nd(e._query,t))}_parse(e){const t=f_(e.firestore);return(function(u,h,m,g,v,T,N){let b;if(v.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new ie($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){wg(N,T);const j=[];for(const Y of N)j.push(Eg(g,u,Y));b={arrayValue:{values:j}}}else b=Eg(g,u,N)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||wg(N,T),b=HI(m,h,N,T==="in"||T==="not-in");return at.create(v,T,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function vg(i,e,t){const s=e,o=Yd("where",i);return ec._create(o,s,t)}class Jd extends Xd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Jd(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:On.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)v_(h,g),h=nd(h,g)})(e._query,t),new po(e.firestore,e.converter,nd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Eg(i,e,t){if(typeof(t=Yt(t))=="string"){if(t==="")throw new ie($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ey(e)&&t.indexOf("/")!==-1)throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ke.fromString(t));if(!ue.isDocumentKey(s))throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return jm(i,new ue(s))}if(t instanceof yn)return jm(i,t._key);throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ju(t)}.`)}function wg(i,e){if(!Array.isArray(i)||i.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function v_(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ZI{convertValue(e,t="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return co(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>rt(h.doubleValue)));return new Hd(u)}convertGeoPoint(e){return new Wd(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Id(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const t=ci(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);Fe($y(s));const o=new Pa(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||Ir(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function eS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
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
 */class fu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tS extends __{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Eu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Yd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Eu extends tS{data(e={}){return super.data(e)}}class nS{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new fu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Eu(this._firestore,this._userDataWriter,s.key,s,new fu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Eu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new fu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Eu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new fu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,T=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:rS(m.type),doc:g,oldIndex:v,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function rS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class iS extends ZI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ao(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yn(this.firestore,null,t)}}function Tg(i){i=Lu(i,po);const e=Lu(i.firestore,Bd),t=h_(e),s=new iS(e);return XI(i._query),MI(t,i._query).then((o=>new nS(e,s,i,o)))}function Ig(i,e){const t=Lu(i.firestore,Bd),s=UI(i),o=eS(i.converter,e);return sS(t,[WI(f_(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Er.exists(!1))]).then((()=>s))}function sS(i,e){return(function(s,o){const u=new ai;return s.asyncQueue.enqueueAndForget((async()=>II(await OI(s),o,u))),u.promise})(h_(i),e)}function oS(){return new Gd("serverTimestamp")}(function(e,t=!0){(function(o){uo=o})(lo),eo(new Wi("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Bd(new Jw(s.getProvider("auth-internal")),new n0(s.getProvider("app-check-internal")),(function(v,T){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pa(v.options.projectId,T)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),oi(Lm,"4.7.3",e),oi(Lm,"4.7.3","esm2017")})();function Zd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function E_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aS=E_,w_=new Oa("auth","Firebase",E_());/**
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
 */const bu=new yd("@firebase/auth");function lS(i,...e){bu.logLevel<=Ce.WARN&&bu.warn(`Auth (${lo}): ${i}`,...e)}function wu(i,...e){bu.logLevel<=Ce.ERROR&&bu.error(`Auth (${lo}): ${i}`,...e)}/**
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
 */function Ln(i,...e){throw ef(i,...e)}function Yn(i,...e){return ef(i,...e)}function T_(i,e,t){const s=Object.assign(Object.assign({},aS()),{[e]:t});return new Oa("auth","Firebase",s).create(e,{appName:i.name})}function wr(i){return T_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ef(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return w_.create(i,...e)}function fe(i,e,...t){if(!i)throw ef(e,...t)}function yr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw wu(e),new Error(e)}function Ar(i,e){i||yr(e)}/**
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
 */function dd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function uS(){return Sg()==="http:"||Sg()==="https:"}function Sg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function cS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uS()||CE()||"connection"in navigator)?navigator.onLine:!0}function hS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class $a{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ar(t>e,"Short delay should be less than long delay!"),this.isMobile=AE()||kE()}get(){return cS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tf(i,e){Ar(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class I_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fS=new $a(3e4,6e4);function di(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function fi(i,e,t,s,o={}){return S_(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=La(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return PE()||(v.referrerPolicy="no-referrer"),I_.fetch()(A_(i,i.config.apiHost,t,m),v)})}async function S_(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},dS),e);try{const o=new mS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw pu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw pu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw pu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw pu(i,"user-disabled",h);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw T_(i,T,v);Ln(i,T)}}catch(o){if(o instanceof Rr)throw o;Ln(i,"network-request-failed",{message:String(o)})}}async function qa(i,e,t,s,o={}){const u=await fi(i,e,t,s,o);return"mfaPendingCredential"in u&&Ln(i,"multi-factor-auth-required",{_serverResponse:u}),u}function A_(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?tf(i.config,o):`${i.config.apiScheme}://${o}`}function pS(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Yn(this.auth,"network-request-failed")),fS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Yn(i,e,s);return o.customData._tokenResponse=t,o}function Ag(i){return i!==void 0&&i.enterprise!==void 0}class gS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return pS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yS(i,e){return fi(i,"GET","/v2/recaptchaConfig",di(i,e))}/**
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
 */async function _S(i,e){return fi(i,"POST","/v1/accounts:delete",e)}async function R_(i,e){return fi(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ia(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vS(i,e=!1){const t=Yt(i),s=await t.getIdToken(e),o=nf(s);fe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ia(qh(o.auth_time)),issuedAtTime:Ia(qh(o.iat)),expirationTime:Ia(qh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function qh(i){return Number(i)*1e3}function nf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return wu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Hg(t);return o?JSON.parse(o):(wu("Failed to decode base64 JWT payload"),null)}catch(o){return wu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Rg(i){const e=nf(i);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Da(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Rr&&ES(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function ES({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class wS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ia(this.lastLoginAt),this.creationTime=Ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Da(i,R_(t,{idToken:s}));fe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?P_(u.providerUserInfo):[],m=IS(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),T=g?v:!1,N={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new fd(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(i,N)}async function TS(i){const e=Yt(i);await Fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IS(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function P_(i){return i.map(e=>{var{providerId:t}=e,s=Zd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function SS(i,e){const t=await S_(i,{},async()=>{const s=La({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=A_(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",I_.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function AS(i,e){return fi(i,"POST","/v2/accounts:revokeToken",di(i,e))}/**
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
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=Rg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await SS(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Xs;return s&&(fe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(fe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(fe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return yr("not implemented")}}/**
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
 */function Jr(i,e){fe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Zd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new fd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Da(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vS(this,e)}reload(){return TS(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Fu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await Da(this,_S(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,T;const N=(s=t.displayName)!==null&&s!==void 0?s:void 0,b=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Y=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,W=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,Ee=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ge=(T=t.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:ye,emailVerified:we,isAnonymous:ze,providerData:Te,stsTokenManager:k}=t;fe(ye&&k,e,"internal-error");const w=Xs.fromJSON(this.name,k);fe(typeof ye=="string",e,"internal-error"),Jr(N,e.name),Jr(b,e.name),fe(typeof we=="boolean",e,"internal-error"),fe(typeof ze=="boolean",e,"internal-error"),Jr(j,e.name),Jr(Y,e.name),Jr(X,e.name),Jr(W,e.name),Jr(Ee,e.name),Jr(ge,e.name);const S=new _r({uid:ye,auth:e,email:b,emailVerified:we,displayName:N,isAnonymous:ze,photoURL:Y,phoneNumber:j,tenantId:X,stsTokenManager:w,createdAt:Ee,lastLoginAt:ge});return Te&&Array.isArray(Te)&&(S.providerData=Te.map(P=>Object.assign({},P))),W&&(S._redirectEventId=W),S}static async _fromIdTokenResponse(e,t,s=!1){const o=new Xs;o.updateFromServerResponse(t);const u=new _r({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Fu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];fe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?P_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Xs;m.updateFromIdToken(s);const g=new _r({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new fd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
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
 */const Pg=new Map;function vr(i){Ar(i instanceof Function,"Expected a class definition");let e=Pg.get(i);return e?(Ar(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Pg.set(i,e),e)}/**
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
 */class C_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}C_.type="NONE";const Cg=C_;/**
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
 */function Tu(i,e,t){return`firebase:${i}:${e}:${t}`}class Js{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Tu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Tu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Js(vr(Cg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||vr(Cg);const h=Tu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const T=await v._get(h);if(T){const N=_r._fromJSON(e,T);v!==u&&(m=N),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Js(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Js(u,e,s))}}/**
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
 */function kg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(D_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O_(e))return"Blackberry";if(L_(e))return"Webos";if(N_(e))return"Safari";if((e.includes("chrome/")||x_(e))&&!e.includes("edge/"))return"Chrome";if(V_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function k_(i=bt()){return/firefox\//i.test(i)}function N_(i=bt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x_(i=bt()){return/crios\//i.test(i)}function D_(i=bt()){return/iemobile/i.test(i)}function V_(i=bt()){return/android/i.test(i)}function O_(i=bt()){return/blackberry/i.test(i)}function L_(i=bt()){return/webos/i.test(i)}function rf(i=bt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function RS(i=bt()){var e;return rf(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PS(){return NE()&&document.documentMode===10}function M_(i=bt()){return rf(i)||V_(i)||L_(i)||O_(i)||/windows phone/i.test(i)||D_(i)}/**
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
 */function b_(i,e=[]){let t;switch(i){case"Browser":t=kg(bt());break;case"Worker":t=`${kg(bt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${lo}/${s}`}/**
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
 */class CS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function kS(i,e={}){return fi(i,"GET","/v2/passwordPolicy",di(i,e))}/**
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
 */const NS=6;class xS{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:NS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class DS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ng(this),this.idTokenSubscription=new Ng(this),this.beforeStateQueue=new CS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=w_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await R_(this,{idToken:e}),s=await _r._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Kn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kn(this.app))return Promise.reject(wr(this));const t=e?Yt(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kn(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kS(this),t=new xS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await AS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vr(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=b_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&lS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zi(i){return Yt(i)}class Ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=FE(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VS(i){tc=i}function F_(i){return tc.loadJS(i)}function OS(){return tc.recaptchaEnterpriseScript}function LS(){return tc.gapiScript}function MS(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const bS="recaptcha-enterprise",FS="NO_RECAPTCHA";class US{constructor(e){this.type=bS,this.auth=Zi(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{yS(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new gS(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;Ag(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(FS)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Ag(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=OS();g.length!==0&&(g+=m),F_(g).then(()=>{o(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function xg(i,e,t,s=!1){const o=new US(i);let u;try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const h=Object.assign({},e);return s?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function pd(i,e,t,s){var o;if(!((o=i._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await xg(i,e,t,t==="getOobCode");return s(i,u)}else return s(i,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await xg(i,e,t,t==="getOobCode");return s(i,h)}else return Promise.reject(u)})}/**
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
 */function jS(i,e){const t=vd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Ru(u,e??{}))return o;Ln(o,"already-initialized")}return t.initialize({options:e})}function zS(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(vr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function BS(i,e,t){const s=Zi(i);fe(s._canInitEmulator,s,"emulator-config-failed"),fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=U_(e),{host:h,port:m}=$S(e),g=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),qS()}function U_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function $S(i){const e=U_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Dg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Dg(h)}}}function Dg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function qS(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class sf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yr("not implemented")}_getIdTokenResponse(e){return yr("not implemented")}_linkToIdToken(e,t){return yr("not implemented")}_getReauthenticationResolver(e){return yr("not implemented")}}async function WS(i,e){return fi(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function HS(i,e){return qa(i,"POST","/v1/accounts:signInWithPassword",di(i,e))}/**
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
 */async function KS(i,e){return qa(i,"POST","/v1/accounts:signInWithEmailLink",di(i,e))}async function GS(i,e){return qa(i,"POST","/v1/accounts:signInWithEmailLink",di(i,e))}/**
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
 */class Va extends sf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Va(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Va(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,t,"signInWithPassword",HS);case"emailLink":return KS(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,s,"signUpPassword",WS);case"emailLink":return GS(e,{idToken:t,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zs(i,e){return qa(i,"POST","/v1/accounts:signInWithIdp",di(i,e))}/**
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
 */const QS="http://localhost";class Qi extends sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ln("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Zd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Qi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Zs(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Zs(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zs(e,t)}buildRequest(){const e={requestUri:QS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=La(t)}return e}}/**
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
 */function YS(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XS(i){const e=pa(ma(i)).link,t=e?pa(ma(e)).deep_link_id:null,s=pa(ma(i)).deep_link_id;return(s?pa(ma(s)).link:null)||s||t||e||i}class of{constructor(e){var t,s,o,u,h,m;const g=pa(ma(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,T=(s=g.oobCode)!==null&&s!==void 0?s:null,N=YS((o=g.mode)!==null&&o!==void 0?o:null);fe(v&&T&&N,"argument-error"),this.apiKey=v,this.operation=N,this.code=T,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=XS(e);try{return new of(t)}catch{return null}}}/**
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
 */class mo{constructor(){this.providerId=mo.PROVIDER_ID}static credential(e,t){return Va._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=of.parseLink(t);return fe(s,"argument-error"),Va._fromEmailAndCode(e,s.code,s.tenantId)}}mo.PROVIDER_ID="password";mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class j_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wa extends j_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zr extends Wa{constructor(){super("facebook.com")}static credential(e){return Qi._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
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
 */class ei extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ei.credential(t,s)}catch{return null}}}ei.GOOGLE_SIGN_IN_METHOD="google.com";ei.PROVIDER_ID="google.com";/**
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
 */class ti extends Wa{constructor(){super("github.com")}static credential(e){return Qi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
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
 */class ni extends Wa{constructor(){super("twitter.com")}static credential(e,t){return Qi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
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
 */async function JS(i,e){return qa(i,"POST","/v1/accounts:signUp",di(i,e))}/**
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
 */class Yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await _r._fromIdTokenResponse(e,s,o),h=Vg(s);return new Yi({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Vg(s);return new Yi({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Vg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Uu extends Rr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Uu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Uu(e,t,s,o)}}function z_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Uu._fromErrorAndOperation(i,u,e,s):u})}async function ZS(i,e,t=!1){const s=await Da(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Yi._forOperation(i,"link",s)}/**
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
 */async function eA(i,e,t=!1){const{auth:s}=i;if(Kn(s.app))return Promise.reject(wr(s));const o="reauthenticate";try{const u=await Da(i,z_(s,o,e,i),t);fe(u.idToken,s,"internal-error");const h=nf(u.idToken);fe(h,s,"internal-error");const{sub:m}=h;return fe(i.uid===m,s,"user-mismatch"),Yi._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Ln(s,"user-mismatch"),u}}/**
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
 */async function B_(i,e,t=!1){if(Kn(i.app))return Promise.reject(wr(i));const s="signIn",o=await z_(i,s,e),u=await Yi._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function tA(i,e){return B_(Zi(i),e)}/**
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
 */async function $_(i){const e=Zi(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nA(i,e,t){if(Kn(i.app))return Promise.reject(wr(i));const s=Zi(i),h=await pd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&$_(i),g}),m=await Yi._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function rA(i,e,t){return Kn(i.app)?Promise.reject(wr(i)):tA(Yt(i),mo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&$_(i),s})}function iA(i,e,t,s){return Yt(i).onIdTokenChanged(e,t,s)}function sA(i,e,t){return Yt(i).beforeAuthStateChanged(e,t)}function oA(i,e,t,s){return Yt(i).onAuthStateChanged(e,t,s)}const ju="__sak";/**
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
 */class q_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ju,"1"),this.storage.removeItem(ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const aA=1e3,lA=10;class W_ extends q_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=M_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);PS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,lA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},aA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}W_.type="LOCAL";const uA=W_;/**
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
 */class H_ extends q_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}H_.type="SESSION";const K_=H_;/**
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
 */function cA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new nc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await cA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
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
 */function af(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class hA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=af("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(N){const b=N;if(b.data.eventId===v)switch(b.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(b.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Xn(){return window}function dA(i){Xn().location.href=i}/**
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
 */function G_(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function fA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pA(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function mA(){return G_()?self:null}/**
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
 */const Q_="firebaseLocalStorageDb",gA=1,zu="firebaseLocalStorage",Y_="fbase_key";class Ha{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rc(i,e){return i.transaction([zu],e?"readwrite":"readonly").objectStore(zu)}function yA(){const i=indexedDB.deleteDatabase(Q_);return new Ha(i).toPromise()}function md(){const i=indexedDB.open(Q_,gA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(zu,{keyPath:Y_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(zu)?e(s):(s.close(),await yA(),e(await md()))})})}async function Og(i,e,t){const s=rc(i,!0).put({[Y_]:e,value:t});return new Ha(s).toPromise()}async function _A(i,e){const t=rc(i,!1).get(e),s=await new Ha(t).toPromise();return s===void 0?null:s.value}function Lg(i,e){const t=rc(i,!0).delete(e);return new Ha(t).toPromise()}const vA=800,EA=3;class X_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>EA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(mA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fA(),!this.activeServiceWorker)return;this.sender=new hA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await Og(e,ju,"1"),await Lg(e,ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Og(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>_A(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=rc(o,!1).getAll();return new Ha(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}X_.type="LOCAL";const wA=X_;new $a(3e4,6e4);/**
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
 */function TA(i,e){return e?vr(e):(fe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class lf extends sf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function IA(i){return B_(i.auth,new lf(i),i.bypassAuthState)}function SA(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),eA(t,new lf(i),i.bypassAuthState)}async function AA(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),ZS(t,new lf(i),i.bypassAuthState)}/**
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
 */class J_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IA;case"linkViaPopup":case"linkViaRedirect":return AA;case"reauthViaPopup":case"reauthViaRedirect":return SA;default:Ln(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RA=new $a(2e3,1e4);class Qs extends J_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Qs.currentPopupAction&&Qs.currentPopupAction.cancel(),Qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RA.get())};e()}}Qs.currentPopupAction=null;/**
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
 */const PA="pendingRedirect",Iu=new Map;class CA extends J_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Iu.get(this.auth._key());if(!e){try{const s=await kA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Iu.set(this.auth._key(),e)}return this.bypassAuthState||Iu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kA(i,e){const t=DA(e),s=xA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function NA(i,e){Iu.set(i._key(),e)}function xA(i){return vr(i._redirectPersistence)}function DA(i){return Tu(PA,i.config.apiKey,i.name)}async function VA(i,e,t=!1){if(Kn(i.app))return Promise.reject(wr(i));const s=Zi(i),o=TA(s,e),h=await new CA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const OA=600*1e3;class LA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Z_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Yn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mg(e))}saveEventToCache(e){this.cachedEventUids.add(Mg(e)),this.lastProcessedEventTime=Date.now()}}function Mg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Z_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MA(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z_(i);default:return!1}}/**
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
 */async function bA(i,e={}){return fi(i,"GET","/v1/projects",e)}/**
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
 */const FA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UA=/^https?/;async function jA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await bA(i);for(const t of e)try{if(zA(t))return}catch{}Ln(i,"unauthorized-domain")}function zA(i){const e=dd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!UA.test(t))return!1;if(FA.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const BA=new $a(3e4,6e4);function bg(){const i=Xn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function $A(i){return new Promise((e,t)=>{var s,o,u;function h(){bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bg(),t(Yn(i,"network-request-failed"))},timeout:BA.get()})}if(!((o=(s=Xn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Xn().gapi)===null||u===void 0)&&u.load)h();else{const m=MS("iframefcb");return Xn()[m]=()=>{gapi.load?h():t(Yn(i,"network-request-failed"))},F_(`${LS()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Su=null,e})}let Su=null;function qA(i){return Su=Su||$A(i),Su}/**
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
 */const WA=new $a(5e3,15e3),HA="__/auth/iframe",KA="emulator/auth/iframe",GA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YA(i){const e=i.config;fe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?tf(e,KA):`https://${i.config.authDomain}/${HA}`,s={apiKey:e.apiKey,appName:i.name,v:lo},o=QA.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${La(s).slice(1)}`}async function XA(i){const e=await qA(i),t=Xn().gapi;return fe(t,i,"internal-error"),e.open({where:document.body,url:YA(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Yn(i,"network-request-failed"),m=Xn().setTimeout(()=>{u(h)},WA.get());function g(){Xn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const JA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZA=500,eR=600,tR="_blank",nR="http://localhost";class Fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rR(i,e,t,s=ZA,o=eR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},JA),{width:s.toString(),height:o.toString(),top:u,left:h}),v=bt().toLowerCase();t&&(m=x_(v)?tR:t),k_(v)&&(e=e||nR,g.scrollbars="yes");const T=Object.entries(g).reduce((b,[j,Y])=>`${b}${j}=${Y},`,"");if(RS(v)&&m!=="_self")return iR(e||"",m),new Fg(null);const N=window.open(e||"",m,T);fe(N,i,"popup-blocked");try{N.focus()}catch{}return new Fg(N)}function iR(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const sR="__/auth/handler",oR="emulator/auth/handler",aR=encodeURIComponent("fac");async function Ug(i,e,t,s,o,u){fe(i.config.authDomain,i,"auth-domain-config-required"),fe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:lo,eventId:o};if(e instanceof j_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",bE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,N]of Object.entries({}))h[T]=N}if(e instanceof Wa){const T=e.getScopes().filter(N=>N!=="");T.length>0&&(h.scopes=T.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await i._getAppCheckToken(),v=g?`#${aR}=${encodeURIComponent(g)}`:"";return`${lR(i)}?${La(m).slice(1)}${v}`}function lR({config:i}){return i.emulator?tf(i,oR):`https://${i.authDomain}/${sR}`}/**
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
 */const Wh="webStorageSupport";class uR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K_,this._completeRedirectFn=VA,this._overrideRedirectResult=NA}async _openPopup(e,t,s,o){var u;Ar((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Ug(e,t,s,dd(),o);return rR(e,h,af())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Ug(e,t,s,dd(),o);return dA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ar(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await XA(e),s=new LA(e);return t.register("authEvent",o=>(fe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wh,{type:Wh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Wh];h!==void 0&&t(!!h),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return M_()||N_()||rf()}}const cR=uR;var jg="@firebase/auth",zg="1.7.9";/**
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
 */class hR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dR(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fR(i){eo(new Wi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;fe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:b_(i)},v=new DS(s,o,u,g);return zS(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),eo(new Wi("auth-internal",e=>{const t=Zi(e.getProvider("auth").getImmediate());return(s=>new hR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),oi(jg,zg,dR(i)),oi(jg,zg,"esm2017")}/**
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
 */const pR=300,mR=Qg("authIdTokenMaxAge")||pR;let Bg=null;const gR=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>mR)return;const o=t==null?void 0:t.token;Bg!==o&&(Bg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function yR(i=Zg()){const e=vd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=jS(i,{popupRedirectResolver:cR,persistence:[wA,uA,K_]}),s=Qg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=gR(u.toString());sA(t,h,()=>h(t.currentUser)),iA(t,m=>h(m))}}const o=Kg("auth");return o&&BS(t,`http://${o}`),t}function _R(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}VS({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Yn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",_R().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fR("Browser");const vR={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"},ev=Jg(vR),fa=jI(ev),mu=yR(ev);function ER(){const[i,e]=mn.useState("LOGIN"),[t,s]=mn.useState(null),[o,u]=mn.useState(null),[h,m]=mn.useState([]),[g,v]=mn.useState(!0),[T,N]=mn.useState(""),[b,j]=mn.useState(""),[Y,X]=mn.useState(""),[W,Ee]=mn.useState("");mn.useEffect(()=>{const w=oA(mu,S=>{u(S),S?(ge(S.uid),e("MAIN")):e("LOGIN"),v(!1)});return()=>w()},[]);const ge=async w=>{const S=_g(da(fa,"users"),vg("uid","==",w));(await Tg(S)).forEach(x=>{s(x.data().role),X(x.data().name)})},ye=async()=>{let w;t==="teacher"?w=da(fa,"records"):w=_g(da(fa,"records"),vg("studentId","==",o==null?void 0:o.uid));const P=(await Tg(w)).docs.map(x=>({id:x.id,...x.data()}));m(P)};mn.useEffect(()=>{(i==="TEACHER"||i==="MAIN")&&ye()},[i,t]);const we=async()=>{try{await rA(mu,T,b)}catch(w){alert("로그인 실패: "+w.message)}},ze=async()=>{try{const S=(await nA(mu,T,b)).user;await Ig(da(fa,"users"),{uid:S.uid,name:Y,role:t,email:T}),alert("회원가입 완료!"),e("MAIN")}catch(w){alert("회원가입 실패: "+w.message)}},Te=async(w,S)=>{try{await Ig(da(fa,"records"),{studentId:o.uid,name:Y,activity:w,feedback:S,status:"완료",date:new Date().toISOString().split("T")[0],timestamp:oS()}),alert("제출되었습니다!"),e("MAIN")}catch(P){alert("제출 실패: "+P.message)}},k=()=>B.jsxs("div",{className:"bg-blue-600 text-white p-4 text-center font-bold",children:[B.jsxs("div",{className:"flex justify-between items-center max-w-xs mx-auto mb-1",children:[B.jsx("p",{className:"text-xs opacity-80",children:"라이프 스킬을 통한"}),o&&B.jsx("button",{onClick:()=>mu.signOut(),className:"text-xs bg-blue-700 px-2 py-1 rounded",children:"로그아웃"})]}),B.jsx("h1",{className:"text-xl",children:"피지컬 리터러시 기르기"})]});if(g)return B.jsx("div",{className:"flex items-center justify-center h-screen",children:"로딩 중..."});if(i==="LOGIN")return B.jsxs("div",{className:"max-w-md mx-auto border h-[700px] flex flex-col bg-white",children:[B.jsx(k,{}),B.jsxs("div",{className:"flex-1 flex flex-col justify-center p-8 gap-4",children:[B.jsx("input",{className:"border-b p-2 focus:outline-none",placeholder:"이메일 (아이디)",value:T,onChange:w=>N(w.target.value)}),B.jsx("input",{className:"border-b p-2 focus:outline-none",type:"password",placeholder:"비밀번호",value:b,onChange:w=>j(w.target.value)}),B.jsx("button",{onClick:we,className:"bg-blue-500 text-white p-3 rounded font-bold",children:"로그인"}),B.jsx("button",{onClick:()=>e("TYPE"),className:"text-gray-500 text-sm",children:"회원가입"})]})]});if(i==="TYPE")return B.jsxs("div",{className:"max-w-md mx-auto border h-[700px] bg-gray-50 p-6",children:[B.jsx("h2",{className:"text-xl font-bold mb-8 text-center",children:"회원가입 유형 선택"}),B.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[B.jsxs("div",{onClick:()=>{s("student"),e("TERMS")},className:"bg-white border-2 hover:border-blue-500 p-8 rounded-xl flex flex-col items-center cursor-pointer",children:[B.jsx("span",{className:"text-4xl mb-2",children:"👤"}),B.jsx("p",{className:"font-bold",children:"학생"})]}),B.jsxs("div",{onClick:()=>{s("teacher"),e("TERMS")},className:"bg-white border-2 hover:border-blue-500 p-8 rounded-xl flex flex-col items-center cursor-pointer",children:[B.jsx("span",{className:"text-4xl mb-2",children:"👨‍🏫"}),B.jsx("p",{className:"font-bold",children:"선생님"})]})]}),B.jsx("button",{onClick:()=>e("LOGIN"),className:"mt-8 w-full p-3 text-gray-400",children:"이전으로"})]});if(i==="TERMS")return B.jsxs("div",{className:"max-w-md mx-auto border h-[700px] bg-white p-6 flex flex-col",children:[B.jsx("h2",{className:"text-lg font-bold mb-4",children:"이용약관 동의"}),B.jsxs("div",{className:"flex-1 overflow-y-auto border p-4 text-sm text-gray-500 bg-gray-50 mb-4",children:["■ 이용약관",B.jsx("br",{}),"본 서비스 이용을 위해 약관에 동의해 주세요."]}),B.jsxs("div",{className:"flex flex-col gap-2 mb-6 text-sm",children:[B.jsxs("label",{className:"flex items-center gap-2",children:[B.jsx("input",{type:"checkbox"})," 이용약관에 동의합니다."]}),B.jsxs("label",{className:"flex items-center gap-2",children:[B.jsx("input",{type:"checkbox"})," 개인정보수집 및 이용에 동의합니다."]})]}),B.jsxs("div",{className:"flex gap-2",children:[B.jsx("button",{onClick:()=>e("TYPE"),className:"flex-1 border p-3 rounded",children:"이전"}),B.jsx("button",{onClick:()=>e("AUTH"),className:"flex-1 bg-blue-500 text-white p-3 rounded",children:"다음"})]})]});if(i==="AUTH")return B.jsxs("div",{className:"max-w-md mx-auto border h-[700px] bg-white p-8 flex flex-col items-center justify-center text-center",children:[B.jsx("div",{className:"text-5xl mb-4",children:"📱"}),B.jsx("p",{className:"font-bold mb-2",children:"본인 인증이 필요합니다."}),B.jsxs("p",{className:"text-sm text-gray-500 mb-8",children:["안전한 회원가입을 위하여",B.jsx("br",{}),"휴대폰 본인인증을 진행해 주세요."]}),B.jsx("button",{onClick:()=>{window.confirm("인증하시는 분이 본인이 맞습니까?")&&e("SIGNUP")},className:"w-full bg-blue-500 text-white p-4 rounded-lg font-bold shadow-lg",children:"인증하기"})]});if(i==="SIGNUP")return B.jsxs("div",{className:"max-w-md mx-auto border h-[700px] bg-white p-6 overflow-y-auto",children:[B.jsxs("h2",{className:"text-xl font-bold mb-6",children:["정보 입력 (",t==="student"?"학생":"선생님",")"]}),B.jsxs("div",{className:"flex flex-col gap-4 text-sm",children:[B.jsxs("div",{children:[B.jsx("p",{className:"mb-1 font-bold",children:"이름"}),B.jsx("input",{className:"w-full border p-2 rounded",placeholder:"이름 입력",value:Y,onChange:w=>X(w.target.value)})]}),B.jsxs("div",{children:[B.jsx("p",{className:"mb-1 font-bold",children:"이메일"}),B.jsx("input",{className:"w-full border p-2 rounded",placeholder:"이메일 입력",value:T,onChange:w=>N(w.target.value)})]}),B.jsxs("div",{children:[B.jsx("p",{className:"mb-1 font-bold",children:"비밀번호"}),B.jsx("input",{className:"w-full border p-2 rounded",type:"password",placeholder:"8~20자 영문+숫자 조합",value:b,onChange:w=>j(w.target.value)})]})]}),B.jsx("button",{onClick:ze,className:"w-full bg-green-500 text-white p-4 rounded-lg font-bold mt-8",children:"가입 완료"})]});if(i==="MAIN")return B.jsxs("div",{className:"max-w-md mx-auto border h-[700px] bg-white flex flex-col",children:[B.jsx(k,{}),B.jsxs("div",{className:"p-8 flex-1",children:[B.jsxs("p",{className:"text-xl mb-8",children:[B.jsx("b",{children:Y||"사용자"})," 님 반갑습니다."]}),B.jsxs("div",{className:"grid gap-4",children:[B.jsx("button",{onClick:()=>e("ACTIVITY_LIST"),className:"p-6 border-2 border-blue-500 rounded-xl text-left flex justify-between items-center group hover:bg-blue-50",children:B.jsxs("div",{children:[B.jsx("p",{className:"font-bold text-lg text-blue-600",children:"운동 시작 →"}),B.jsx("p",{className:"text-sm text-gray-500",children:"학년별 맞춤 활동을 확인하세요"})]})}),B.jsx("button",{className:"p-6 border rounded-xl text-left flex justify-between items-center hover:bg-gray-50",children:B.jsxs("div",{children:[B.jsx("p",{className:"font-bold text-lg",children:"마이 페이지 →"}),B.jsx("p",{className:"text-sm text-gray-500",children:"나의 운동 기록과 통계"})]})}),t==="teacher"&&B.jsx("button",{onClick:()=>e("TEACHER"),className:"p-4 bg-gray-800 text-white rounded-xl mt-4",children:"학급 활동 관리 (교사용)"})]})]})]});if(i==="ACTIVITY_LIST")return B.jsxs("div",{className:"max-w-md mx-auto border h-[700px] bg-white",children:[B.jsxs("div",{className:"p-4 border-b flex items-center gap-2",children:[B.jsx("button",{onClick:()=>e("MAIN"),children:"←"}),B.jsx("span",{className:"font-bold",children:"활동 선택"})]}),B.jsx("div",{className:"p-4 grid gap-2",children:["운동 체력","축구형 게임","배구형 게임","높이뛰기","댄스 스포츠"].map((w,S)=>B.jsxs("div",{onClick:()=>e("ACTIVITY_DETAIL"),className:"p-4 border rounded hover:bg-blue-50 cursor-pointer flex justify-between items-center",children:[B.jsxs("span",{children:[w,"를 알아보아요"]}),B.jsx("span",{className:"text-gray-300",children:"›"})]},S))})]});if(i==="ACTIVITY_DETAIL")return B.jsxs("div",{className:"max-w-md mx-auto border h-[700px] bg-white flex flex-col",children:[B.jsxs("div",{className:"p-4 border-b font-bold flex justify-between",children:[B.jsx("span",{children:"운동 활동 기록"}),B.jsx("button",{onClick:()=>e("ACTIVITY_LIST"),children:"X"})]}),B.jsxs("div",{className:"p-6 flex-1 overflow-y-auto",children:[B.jsx("div",{className:"bg-blue-50 p-4 rounded-lg mb-6 text-sm",children:B.jsx("p",{className:"text-gray-600",children:"선택한 활동을 수행하고 아래에 후기를 남겨주세요."})}),B.jsxs("div",{className:"mb-6",children:[B.jsx("p",{className:"font-bold mb-2 text-sm",children:"참여 인증 파일"}),B.jsx("div",{className:"border-2 border-dashed p-8 text-center text-gray-400 rounded-lg cursor-pointer hover:bg-gray-50",children:"파일 선택 (사진/영상)"})]}),B.jsxs("div",{children:[B.jsx("p",{className:"font-bold mb-2 text-sm",children:"참여 후기"}),B.jsx("textarea",{className:"w-full border p-3 h-32 rounded text-sm",placeholder:"후기를 작성해 주세요...",value:W,onChange:w=>Ee(w.target.value)})]}),B.jsx("button",{onClick:()=>Te("선택 활동",W),className:"w-full bg-blue-600 text-white p-4 rounded-lg font-bold mt-6 shadow-md",children:"인증 완료"})]})]});if(i==="TEACHER")return B.jsxs("div",{className:"max-w-md mx-auto border h-[700px] bg-gray-50 flex flex-col",children:[B.jsxs("div",{className:"p-4 bg-gray-800 text-white flex justify-between items-center font-bold",children:[B.jsx("span",{children:"학급 활동 리포트"}),B.jsx("button",{onClick:()=>e("MAIN"),children:"홈으로"})]}),B.jsx("div",{className:"p-4 flex-1 overflow-y-auto",children:B.jsxs("div",{className:"bg-white rounded-lg shadow-sm mb-4",children:[B.jsxs("div",{className:"p-3 border-b bg-gray-100 flex justify-between text-xs font-bold text-gray-500",children:[B.jsx("span",{children:"학생명"}),B.jsx("span",{children:"활동내용"}),B.jsx("span",{children:"상태"})]}),h.map((w,S)=>B.jsxs("div",{className:"p-3 border-b flex justify-between items-center text-sm",children:[B.jsx("span",{className:"font-medium",children:w.name}),B.jsx("span",{className:"text-gray-600",children:w.activity}),B.jsx("span",{className:"bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs",children:w.status})]},S))]})})]})}pE.createRoot(document.getElementById("root")).render(B.jsx(aE.StrictMode,{children:B.jsx(ER,{})}));
