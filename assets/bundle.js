(function(){const H=document.createElement("link").relList;if(H&&H.supports&&H.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))v(D);new MutationObserver(D=>{for(const G of D)if(G.type==="childList")for(const sa of G.addedNodes)sa.tagName==="LINK"&&sa.rel==="modulepreload"&&v(sa)}).observe(document,{childList:!0,subtree:!0});function X(D){const G={};return D.integrity&&(G.integrity=D.integrity),D.referrerPolicy&&(G.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?G.credentials="include":D.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function v(D){if(D.ep)return;D.ep=!0;const G=X(D);fetch(D.href,G)}})();var uo={exports:{}},zn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function Im(){if(hd)return zn;hd=1;var C=Symbol.for("react.transitional.element"),H=Symbol.for("react.fragment");function X(v,D,G){var sa=null;if(G!==void 0&&(sa=""+G),D.key!==void 0&&(sa=""+D.key),"key"in D){G={};for(var Ca in D)Ca!=="key"&&(G[Ca]=D[Ca])}else G=D;return D=G.ref,{$$typeof:C,type:v,key:sa,ref:D!==void 0?D:null,props:G}}return zn.Fragment=H,zn.jsx=X,zn.jsxs=X,zn}var gd;function Pm(){return gd||(gd=1,uo.exports=Im()),uo.exports}var o=Pm(),co={exports:{}},R={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function a0(){if(yd)return R;yd=1;var C=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),sa=Symbol.for("react.context"),Ca=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),da=Symbol.iterator;function Ja(f){return f===null||typeof f!="object"?null:(f=da&&f[da]||f["@@iterator"],typeof f=="function"?f:null)}var Ha={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ua=Object.assign,Ne={};function Wa(f,z,T){this.props=f,this.context=z,this.refs=Ne,this.updater=T||Ha}Wa.prototype.isReactComponent={},Wa.prototype.setState=function(f,z){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,z,"setState")},Wa.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function Je(){}Je.prototype=Wa.prototype;function qa(f,z,T){this.props=f,this.context=z,this.refs=Ne,this.updater=T||Ha}var ue=qa.prototype=new Je;ue.constructor=qa,Ua(ue,Wa.prototype),ue.isPureReactComponent=!0;var Se=Array.isArray;function Ba(){}var J={H:null,A:null,T:null,S:null},Ya=Object.prototype.hasOwnProperty;function ze(f,z,T){var N=T.ref;return{$$typeof:C,type:f,key:z,ref:N!==void 0?N:null,props:T}}function Ll(f,z){return ze(f.type,z,f.props)}function Ae(f){return typeof f=="object"&&f!==null&&f.$$typeof===C}function Ga(f){var z={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(T){return z[T]})}var Al=/\/+/g;function Oe(f,z){return typeof f=="object"&&f!==null&&f.key!=null?Ga(""+f.key):z.toString(36)}function ge(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(Ba,Ba):(f.status="pending",f.then(function(z){f.status==="pending"&&(f.status="fulfilled",f.value=z)},function(z){f.status==="pending"&&(f.status="rejected",f.reason=z)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function b(f,z,T,N,B){var L=typeof f;(L==="undefined"||L==="boolean")&&(f=null);var aa=!1;if(f===null)aa=!0;else switch(L){case"bigint":case"string":case"number":aa=!0;break;case"object":switch(f.$$typeof){case C:case H:aa=!0;break;case F:return aa=f._init,b(aa(f._payload),z,T,N,B)}}if(aa)return B=B(f),aa=N===""?"."+Oe(f,0):N,Se(B)?(T="",aa!=null&&(T=aa.replace(Al,"$&/")+"/"),b(B,z,T,"",function(Nt){return Nt})):B!=null&&(Ae(B)&&(B=Ll(B,T+(B.key==null||f&&f.key===B.key?"":(""+B.key).replace(Al,"$&/")+"/")+aa)),z.push(B)),1;aa=0;var wa=N===""?".":N+":";if(Se(f))for(var ha=0;ha<f.length;ha++)N=f[ha],L=wa+Oe(N,ha),aa+=b(N,z,T,L,B);else if(ha=Ja(f),typeof ha=="function")for(f=ha.call(f),ha=0;!(N=f.next()).done;)N=N.value,L=wa+Oe(N,ha++),aa+=b(N,z,T,L,B);else if(L==="object"){if(typeof f.then=="function")return b(ge(f),z,T,N,B);throw z=String(f),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return aa}function E(f,z,T){if(f==null)return f;var N=[],B=0;return b(f,N,"","",function(L){return z.call(T,L,B++)}),N}function w(f){if(f._status===-1){var z=f._result;z=z(),z.then(function(T){(f._status===0||f._status===-1)&&(f._status=1,f._result=T)},function(T){(f._status===0||f._status===-1)&&(f._status=2,f._result=T)}),f._status===-1&&(f._status=0,f._result=z)}if(f._status===1)return f._result.default;throw f._result}var ta=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},ca={map:E,forEach:function(f,z,T){E(f,function(){z.apply(this,arguments)},T)},count:function(f){var z=0;return E(f,function(){z++}),z},toArray:function(f){return E(f,function(z){return z})||[]},only:function(f){if(!Ae(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return R.Activity=U,R.Children=ca,R.Component=Wa,R.Fragment=X,R.Profiler=D,R.PureComponent=qa,R.StrictMode=v,R.Suspense=_,R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,R.__COMPILER_RUNTIME={__proto__:null,c:function(f){return J.H.useMemoCache(f)}},R.cache=function(f){return function(){return f.apply(null,arguments)}},R.cacheSignal=function(){return null},R.cloneElement=function(f,z,T){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var N=Ua({},f.props),B=f.key;if(z!=null)for(L in z.key!==void 0&&(B=""+z.key),z)!Ya.call(z,L)||L==="key"||L==="__self"||L==="__source"||L==="ref"&&z.ref===void 0||(N[L]=z[L]);var L=arguments.length-2;if(L===1)N.children=T;else if(1<L){for(var aa=Array(L),wa=0;wa<L;wa++)aa[wa]=arguments[wa+2];N.children=aa}return ze(f.type,B,N)},R.createContext=function(f){return f={$$typeof:sa,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:G,_context:f},f},R.createElement=function(f,z,T){var N,B={},L=null;if(z!=null)for(N in z.key!==void 0&&(L=""+z.key),z)Ya.call(z,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(B[N]=z[N]);var aa=arguments.length-2;if(aa===1)B.children=T;else if(1<aa){for(var wa=Array(aa),ha=0;ha<aa;ha++)wa[ha]=arguments[ha+2];B.children=wa}if(f&&f.defaultProps)for(N in aa=f.defaultProps,aa)B[N]===void 0&&(B[N]=aa[N]);return ze(f,L,B)},R.createRef=function(){return{current:null}},R.forwardRef=function(f){return{$$typeof:Ca,render:f}},R.isValidElement=Ae,R.lazy=function(f){return{$$typeof:F,_payload:{_status:-1,_result:f},_init:w}},R.memo=function(f,z){return{$$typeof:A,type:f,compare:z===void 0?null:z}},R.startTransition=function(f){var z=J.T,T={};J.T=T;try{var N=f(),B=J.S;B!==null&&B(T,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(Ba,ta)}catch(L){ta(L)}finally{z!==null&&T.types!==null&&(z.types=T.types),J.T=z}},R.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},R.use=function(f){return J.H.use(f)},R.useActionState=function(f,z,T){return J.H.useActionState(f,z,T)},R.useCallback=function(f,z){return J.H.useCallback(f,z)},R.useContext=function(f){return J.H.useContext(f)},R.useDebugValue=function(){},R.useDeferredValue=function(f,z){return J.H.useDeferredValue(f,z)},R.useEffect=function(f,z){return J.H.useEffect(f,z)},R.useEffectEvent=function(f){return J.H.useEffectEvent(f)},R.useId=function(){return J.H.useId()},R.useImperativeHandle=function(f,z,T){return J.H.useImperativeHandle(f,z,T)},R.useInsertionEffect=function(f,z){return J.H.useInsertionEffect(f,z)},R.useLayoutEffect=function(f,z){return J.H.useLayoutEffect(f,z)},R.useMemo=function(f,z){return J.H.useMemo(f,z)},R.useOptimistic=function(f,z){return J.H.useOptimistic(f,z)},R.useReducer=function(f,z,T){return J.H.useReducer(f,z,T)},R.useRef=function(f){return J.H.useRef(f)},R.useState=function(f){return J.H.useState(f)},R.useSyncExternalStore=function(f,z,T){return J.H.useSyncExternalStore(f,z,T)},R.useTransition=function(){return J.H.useTransition()},R.version="19.2.8",R}var bd;function mo(){return bd||(bd=1,co.exports=a0()),co.exports}var Sl=mo(),oo={exports:{}},An={},so={exports:{}},ro={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function e0(){return xd||(xd=1,(function(C){function H(b,E){var w=b.length;b.push(E);a:for(;0<w;){var ta=w-1>>>1,ca=b[ta];if(0<D(ca,E))b[ta]=E,b[w]=ca,w=ta;else break a}}function X(b){return b.length===0?null:b[0]}function v(b){if(b.length===0)return null;var E=b[0],w=b.pop();if(w!==E){b[0]=w;a:for(var ta=0,ca=b.length,f=ca>>>1;ta<f;){var z=2*(ta+1)-1,T=b[z],N=z+1,B=b[N];if(0>D(T,w))N<ca&&0>D(B,T)?(b[ta]=B,b[N]=w,ta=N):(b[ta]=T,b[z]=w,ta=z);else if(N<ca&&0>D(B,w))b[ta]=B,b[N]=w,ta=N;else break a}}return E}function D(b,E){var w=b.sortIndex-E.sortIndex;return w!==0?w:b.id-E.id}if(C.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var G=performance;C.unstable_now=function(){return G.now()}}else{var sa=Date,Ca=sa.now();C.unstable_now=function(){return sa.now()-Ca}}var _=[],A=[],F=1,U=null,da=3,Ja=!1,Ha=!1,Ua=!1,Ne=!1,Wa=typeof setTimeout=="function"?setTimeout:null,Je=typeof clearTimeout=="function"?clearTimeout:null,qa=typeof setImmediate<"u"?setImmediate:null;function ue(b){for(var E=X(A);E!==null;){if(E.callback===null)v(A);else if(E.startTime<=b)v(A),E.sortIndex=E.expirationTime,H(_,E);else break;E=X(A)}}function Se(b){if(Ua=!1,ue(b),!Ha)if(X(_)!==null)Ha=!0,Ba||(Ba=!0,Ga());else{var E=X(A);E!==null&&ge(Se,E.startTime-b)}}var Ba=!1,J=-1,Ya=5,ze=-1;function Ll(){return Ne?!0:!(C.unstable_now()-ze<Ya)}function Ae(){if(Ne=!1,Ba){var b=C.unstable_now();ze=b;var E=!0;try{a:{Ha=!1,Ua&&(Ua=!1,Je(J),J=-1),Ja=!0;var w=da;try{e:{for(ue(b),U=X(_);U!==null&&!(U.expirationTime>b&&Ll());){var ta=U.callback;if(typeof ta=="function"){U.callback=null,da=U.priorityLevel;var ca=ta(U.expirationTime<=b);if(b=C.unstable_now(),typeof ca=="function"){U.callback=ca,ue(b),E=!0;break e}U===X(_)&&v(_),ue(b)}else v(_);U=X(_)}if(U!==null)E=!0;else{var f=X(A);f!==null&&ge(Se,f.startTime-b),E=!1}}break a}finally{U=null,da=w,Ja=!1}E=void 0}}finally{E?Ga():Ba=!1}}}var Ga;if(typeof qa=="function")Ga=function(){qa(Ae)};else if(typeof MessageChannel<"u"){var Al=new MessageChannel,Oe=Al.port2;Al.port1.onmessage=Ae,Ga=function(){Oe.postMessage(null)}}else Ga=function(){Wa(Ae,0)};function ge(b,E){J=Wa(function(){b(C.unstable_now())},E)}C.unstable_IdlePriority=5,C.unstable_ImmediatePriority=1,C.unstable_LowPriority=4,C.unstable_NormalPriority=3,C.unstable_Profiling=null,C.unstable_UserBlockingPriority=2,C.unstable_cancelCallback=function(b){b.callback=null},C.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ya=0<b?Math.floor(1e3/b):5},C.unstable_getCurrentPriorityLevel=function(){return da},C.unstable_next=function(b){switch(da){case 1:case 2:case 3:var E=3;break;default:E=da}var w=da;da=E;try{return b()}finally{da=w}},C.unstable_requestPaint=function(){Ne=!0},C.unstable_runWithPriority=function(b,E){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var w=da;da=b;try{return E()}finally{da=w}},C.unstable_scheduleCallback=function(b,E,w){var ta=C.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?ta+w:ta):w=ta,b){case 1:var ca=-1;break;case 2:ca=250;break;case 5:ca=1073741823;break;case 4:ca=1e4;break;default:ca=5e3}return ca=w+ca,b={id:F++,callback:E,priorityLevel:b,startTime:w,expirationTime:ca,sortIndex:-1},w>ta?(b.sortIndex=w,H(A,b),X(_)===null&&b===X(A)&&(Ua?(Je(J),J=-1):Ua=!0,ge(Se,w-ta))):(b.sortIndex=ca,H(_,b),Ha||Ja||(Ha=!0,Ba||(Ba=!0,Ga()))),b},C.unstable_shouldYield=Ll,C.unstable_wrapCallback=function(b){var E=da;return function(){var w=da;da=E;try{return b.apply(this,arguments)}finally{da=w}}}})(ro)),ro}var Sd;function l0(){return Sd||(Sd=1,so.exports=e0()),so.exports}var fo={exports:{}},Da={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function t0(){if(zd)return Da;zd=1;var C=mo();function H(_){var A="https://react.dev/errors/"+_;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var F=2;F<arguments.length;F++)A+="&args[]="+encodeURIComponent(arguments[F])}return"Minified React error #"+_+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function X(){}var v={d:{f:X,r:function(){throw Error(H(522))},D:X,C:X,L:X,m:X,X,S:X,M:X},p:0,findDOMNode:null},D=Symbol.for("react.portal");function G(_,A,F){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:U==null?null:""+U,children:_,containerInfo:A,implementation:F}}var sa=C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ca(_,A){if(_==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return Da.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=v,Da.createPortal=function(_,A){var F=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(H(299));return G(_,A,null,F)},Da.flushSync=function(_){var A=sa.T,F=v.p;try{if(sa.T=null,v.p=2,_)return _()}finally{sa.T=A,v.p=F,v.d.f()}},Da.preconnect=function(_,A){typeof _=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,v.d.C(_,A))},Da.prefetchDNS=function(_){typeof _=="string"&&v.d.D(_)},Da.preinit=function(_,A){if(typeof _=="string"&&A&&typeof A.as=="string"){var F=A.as,U=Ca(F,A.crossOrigin),da=typeof A.integrity=="string"?A.integrity:void 0,Ja=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;F==="style"?v.d.S(_,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:U,integrity:da,fetchPriority:Ja}):F==="script"&&v.d.X(_,{crossOrigin:U,integrity:da,fetchPriority:Ja,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},Da.preinitModule=function(_,A){if(typeof _=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var F=Ca(A.as,A.crossOrigin);v.d.M(_,{crossOrigin:F,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&v.d.M(_)},Da.preload=function(_,A){if(typeof _=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var F=A.as,U=Ca(F,A.crossOrigin);v.d.L(_,F,{crossOrigin:U,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},Da.preloadModule=function(_,A){if(typeof _=="string")if(A){var F=Ca(A.as,A.crossOrigin);v.d.m(_,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:F,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else v.d.m(_)},Da.requestFormReset=function(_){v.d.r(_)},Da.unstable_batchedUpdates=function(_,A){return _(A)},Da.useFormState=function(_,A,F){return sa.H.useFormState(_,A,F)},Da.useFormStatus=function(){return sa.H.useHostTransitionStatus()},Da.version="19.2.8",Da}var Ad;function n0(){if(Ad)return fo.exports;Ad=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(H){console.error(H)}}return C(),fo.exports=t0(),fo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function i0(){if(Cd)return An;Cd=1;var C=l0(),H=mo(),X=n0();function v(a){var e="https://react.dev/errors/"+a;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function G(a){var e=a,l=a;if(a.alternate)for(;e.return;)e=e.return;else{a=e;do e=a,(e.flags&4098)!==0&&(l=e.return),a=e.return;while(a)}return e.tag===3?l:null}function sa(a){if(a.tag===13){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function Ca(a){if(a.tag===31){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function _(a){if(G(a)!==a)throw Error(v(188))}function A(a){var e=a.alternate;if(!e){if(e=G(a),e===null)throw Error(v(188));return e!==a?null:a}for(var l=a,t=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(t=n.return,t!==null){l=t;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return _(n),a;if(i===t)return _(n),e;i=i.sibling}throw Error(v(188))}if(l.return!==t.return)l=n,t=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,t=i;break}if(c===t){u=!0,t=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,t=n;break}if(c===t){u=!0,t=i,l=n;break}c=c.sibling}if(!u)throw Error(v(189))}}if(l.alternate!==t)throw Error(v(190))}if(l.tag!==3)throw Error(v(188));return l.stateNode.current===l?a:e}function F(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a;for(a=a.child;a!==null;){if(e=F(a),e!==null)return e;a=a.sibling}return null}var U=Object.assign,da=Symbol.for("react.element"),Ja=Symbol.for("react.transitional.element"),Ha=Symbol.for("react.portal"),Ua=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Wa=Symbol.for("react.profiler"),Je=Symbol.for("react.consumer"),qa=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Ba=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Ya=Symbol.for("react.lazy"),ze=Symbol.for("react.activity"),Ll=Symbol.for("react.memo_cache_sentinel"),Ae=Symbol.iterator;function Ga(a){return a===null||typeof a!="object"?null:(a=Ae&&a[Ae]||a["@@iterator"],typeof a=="function"?a:null)}var Al=Symbol.for("react.client.reference");function Oe(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===Al?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case Ua:return"Fragment";case Wa:return"Profiler";case Ne:return"StrictMode";case Se:return"Suspense";case Ba:return"SuspenseList";case ze:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case Ha:return"Portal";case qa:return a.displayName||"Context";case Je:return(a._context.displayName||"Context")+".Consumer";case ue:var e=a.render;return a=a.displayName,a||(a=e.displayName||e.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case J:return e=a.displayName||null,e!==null?e:Oe(a.type)||"Memo";case Ya:e=a._payload,a=a._init;try{return Oe(a(e))}catch{}}return null}var ge=Array.isArray,b=H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},ta=[],ca=-1;function f(a){return{current:a}}function z(a){0>ca||(a.current=ta[ca],ta[ca]=null,ca--)}function T(a,e){ca++,ta[ca]=a.current,a.current=e}var N=f(null),B=f(null),L=f(null),aa=f(null);function wa(a,e){switch(T(L,e),T(B,a),T(N,null),e.nodeType){case 9:case 11:a=(a=e.documentElement)&&(a=a.namespaceURI)?Yf(a):0;break;default:if(a=e.tagName,e=e.namespaceURI)e=Yf(e),a=Gf(e,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}z(N),T(N,a)}function ha(){z(N),z(B),z(L)}function Nt(a){a.memoizedState!==null&&T(aa,a);var e=N.current,l=Gf(e,a.type);e!==l&&(T(B,a),T(N,l))}function Cn(a){B.current===a&&(z(N),z(B)),aa.current===a&&(z(aa),yn._currentValue=w)}var Xi,po;function Cl(a){if(Xi===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Xi=e&&e[1]||"",po=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+a+po}var Li=!1;function Zi(a,e){if(!a||Li)return"";Li=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(e){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(g){var h=g}Reflect.construct(a,[],S)}else{try{S.call()}catch(g){h=g}a.call(S.prototype)}}else{try{throw Error()}catch(g){h=g}(S=a())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=t.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),p=c.split(`
`);for(n=t=0;t<s.length&&!s[t].includes("DetermineComponentFrameRoot");)t++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(t===s.length||n===p.length)for(t=s.length-1,n=p.length-1;1<=t&&0<=n&&s[t]!==p[n];)n--;for(;1<=t&&0<=n;t--,n--)if(s[t]!==p[n]){if(t!==1||n!==1)do if(t--,n--,0>n||s[t]!==p[n]){var y=`
`+s[t].replace(" at new "," at ");return a.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",a.displayName)),y}while(1<=t&&0<=n);break}}}finally{Li=!1,Error.prepareStackTrace=l}return(l=a?a.displayName||a.name:"")?Cl(l):""}function Od(a,e){switch(a.tag){case 26:case 27:case 5:return Cl(a.type);case 16:return Cl("Lazy");case 13:return a.child!==e&&e!==null?Cl("Suspense Fallback"):Cl("Suspense");case 19:return Cl("SuspenseList");case 0:case 15:return Zi(a.type,!1);case 11:return Zi(a.type.render,!1);case 1:return Zi(a.type,!0);case 31:return Cl("Activity");default:return""}}function vo(a){try{var e="",l=null;do e+=Od(a,l),l=a,a=a.return;while(a);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Vi=Object.prototype.hasOwnProperty,ki=C.unstable_scheduleCallback,Ki=C.unstable_cancelCallback,_d=C.unstable_shouldYield,Md=C.unstable_requestPaint,Fa=C.unstable_now,qd=C.unstable_getCurrentPriorityLevel,ho=C.unstable_ImmediatePriority,go=C.unstable_UserBlockingPriority,En=C.unstable_NormalPriority,Dd=C.unstable_LowPriority,yo=C.unstable_IdlePriority,Ud=C.log,wd=C.unstable_setDisableYieldValue,Ot=null,$a=null;function We(a){if(typeof Ud=="function"&&wd(a),$a&&typeof $a.setStrictMode=="function")try{$a.setStrictMode(Ot,a)}catch{}}var Ia=Math.clz32?Math.clz32:Bd,Rd=Math.log,Hd=Math.LN2;function Bd(a){return a>>>=0,a===0?32:31-(Rd(a)/Hd|0)|0}var Tn=256,jn=262144,Nn=4194304;function El(a){var e=a&42;if(e!==0)return e;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return a&261888;case 262144:case 524288:case 1048576:case 2097152:return a&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function On(a,e,l){var t=a.pendingLanes;if(t===0)return 0;var n=0,i=a.suspendedLanes,u=a.pingedLanes;a=a.warmLanes;var c=t&134217727;return c!==0?(t=c&~i,t!==0?n=El(t):(u&=c,u!==0?n=El(u):l||(l=c&~a,l!==0&&(n=El(l))))):(c=t&~i,c!==0?n=El(c):u!==0?n=El(u):l||(l=t&~a,l!==0&&(n=El(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function _t(a,e){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&e)===0}function Yd(a,e){switch(a){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bo(){var a=Nn;return Nn<<=1,(Nn&62914560)===0&&(Nn=4194304),a}function Ji(a){for(var e=[],l=0;31>l;l++)e.push(a);return e}function Mt(a,e){a.pendingLanes|=e,e!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function Gd(a,e,l,t,n,i){var u=a.pendingLanes;a.pendingLanes=l,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=l,a.entangledLanes&=l,a.errorRecoveryDisabledLanes&=l,a.shellSuspendCounter=0;var c=a.entanglements,s=a.expirationTimes,p=a.hiddenUpdates;for(l=u&~l;0<l;){var y=31-Ia(l),S=1<<y;c[y]=0,s[y]=-1;var h=p[y];if(h!==null)for(p[y]=null,y=0;y<h.length;y++){var g=h[y];g!==null&&(g.lane&=-536870913)}l&=~S}t!==0&&xo(a,t,0),i!==0&&n===0&&a.tag!==0&&(a.suspendedLanes|=i&~(u&~e))}function xo(a,e,l){a.pendingLanes|=e,a.suspendedLanes&=~e;var t=31-Ia(e);a.entangledLanes|=e,a.entanglements[t]=a.entanglements[t]|1073741824|l&261930}function So(a,e){var l=a.entangledLanes|=e;for(a=a.entanglements;l;){var t=31-Ia(l),n=1<<t;n&e|a[t]&e&&(a[t]|=e),l&=~n}}function zo(a,e){var l=e&-e;return l=(l&42)!==0?1:Wi(l),(l&(a.suspendedLanes|e))!==0?0:l}function Wi(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function Fi(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function Ao(){var a=E.p;return a!==0?a:(a=window.event,a===void 0?32:sd(a.type))}function Co(a,e){var l=E.p;try{return E.p=a,e()}finally{E.p=l}}var Fe=Math.random().toString(36).slice(2),ja="__reactFiber$"+Fe,Qa="__reactProps$"+Fe,Zl="__reactContainer$"+Fe,$i="__reactEvents$"+Fe,Qd="__reactListeners$"+Fe,Xd="__reactHandles$"+Fe,Eo="__reactResources$"+Fe,qt="__reactMarker$"+Fe;function Ii(a){delete a[ja],delete a[Qa],delete a[$i],delete a[Qd],delete a[Xd]}function Vl(a){var e=a[ja];if(e)return e;for(var l=a.parentNode;l;){if(e=l[Zl]||l[ja]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(a=Kf(a);a!==null;){if(l=a[ja])return l;a=Kf(a)}return e}a=l,l=a.parentNode}return null}function kl(a){if(a=a[ja]||a[Zl]){var e=a.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return a}return null}function Dt(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a.stateNode;throw Error(v(33))}function Kl(a){var e=a[Eo];return e||(e=a[Eo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ea(a){a[qt]=!0}var To=new Set,jo={};function Tl(a,e){Jl(a,e),Jl(a+"Capture",e)}function Jl(a,e){for(jo[a]=e,a=0;a<e.length;a++)To.add(e[a])}var Ld=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),No={},Oo={};function Zd(a){return Vi.call(Oo,a)?!0:Vi.call(No,a)?!1:Ld.test(a)?Oo[a]=!0:(No[a]=!0,!1)}function _n(a,e,l){if(Zd(e))if(l===null)a.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":a.removeAttribute(e);return;case"boolean":var t=e.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){a.removeAttribute(e);return}}a.setAttribute(e,""+l)}}function Mn(a,e,l){if(l===null)a.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(e);return}a.setAttribute(e,""+l)}}function _e(a,e,l,t){if(t===null)a.removeAttribute(l);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(l);return}a.setAttributeNS(e,l,""+t)}}function ce(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function _o(a){var e=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vd(a,e,l){var t=Object.getOwnPropertyDescriptor(a.constructor.prototype,e);if(!a.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,i=t.set;return Object.defineProperty(a,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(a,e,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){a._valueTracker=null,delete a[e]}}}}function Pi(a){if(!a._valueTracker){var e=_o(a)?"checked":"value";a._valueTracker=Vd(a,e,""+a[e])}}function Mo(a){if(!a)return!1;var e=a._valueTracker;if(!e)return!0;var l=e.getValue(),t="";return a&&(t=_o(a)?a.checked?"true":"false":a.value),a=t,a!==l?(e.setValue(a),!0):!1}function qn(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var kd=/[\n"\\]/g;function oe(a){return a.replace(kd,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function au(a,e,l,t,n,i,u,c){a.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?a.type=u:a.removeAttribute("type"),e!=null?u==="number"?(e===0&&a.value===""||a.value!=e)&&(a.value=""+ce(e)):a.value!==""+ce(e)&&(a.value=""+ce(e)):u!=="submit"&&u!=="reset"||a.removeAttribute("value"),e!=null?eu(a,u,ce(e)):l!=null?eu(a,u,ce(l)):t!=null&&a.removeAttribute("value"),n==null&&i!=null&&(a.defaultChecked=!!i),n!=null&&(a.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?a.name=""+ce(c):a.removeAttribute("name")}function qo(a,e,l,t,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(a.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Pi(a);return}l=l!=null?""+ce(l):"",e=e!=null?""+ce(e):l,c||e===a.value||(a.value=e),a.defaultValue=e}t=t??n,t=typeof t!="function"&&typeof t!="symbol"&&!!t,a.checked=c?a.checked:!!t,a.defaultChecked=!!t,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(a.name=u),Pi(a)}function eu(a,e,l){e==="number"&&qn(a.ownerDocument)===a||a.defaultValue===""+l||(a.defaultValue=""+l)}function Wl(a,e,l,t){if(a=a.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<a.length;l++)n=e.hasOwnProperty("$"+a[l].value),a[l].selected!==n&&(a[l].selected=n),n&&t&&(a[l].defaultSelected=!0)}else{for(l=""+ce(l),e=null,n=0;n<a.length;n++){if(a[n].value===l){a[n].selected=!0,t&&(a[n].defaultSelected=!0);return}e!==null||a[n].disabled||(e=a[n])}e!==null&&(e.selected=!0)}}function Do(a,e,l){if(e!=null&&(e=""+ce(e),e!==a.value&&(a.value=e),l==null)){a.defaultValue!==e&&(a.defaultValue=e);return}a.defaultValue=l!=null?""+ce(l):""}function Uo(a,e,l,t){if(e==null){if(t!=null){if(l!=null)throw Error(v(92));if(ge(t)){if(1<t.length)throw Error(v(93));t=t[0]}l=t}l==null&&(l=""),e=l}l=ce(e),a.defaultValue=l,t=a.textContent,t===l&&t!==""&&t!==null&&(a.value=t),Pi(a)}function Fl(a,e){if(e){var l=a.firstChild;if(l&&l===a.lastChild&&l.nodeType===3){l.nodeValue=e;return}}a.textContent=e}var Kd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wo(a,e,l){var t=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?t?a.setProperty(e,""):e==="float"?a.cssFloat="":a[e]="":t?a.setProperty(e,l):typeof l!="number"||l===0||Kd.has(e)?e==="float"?a.cssFloat=l:a[e]=(""+l).trim():a[e]=l+"px"}function Ro(a,e,l){if(e!=null&&typeof e!="object")throw Error(v(62));if(a=a.style,l!=null){for(var t in l)!l.hasOwnProperty(t)||e!=null&&e.hasOwnProperty(t)||(t.indexOf("--")===0?a.setProperty(t,""):t==="float"?a.cssFloat="":a[t]="");for(var n in e)t=e[n],e.hasOwnProperty(n)&&l[n]!==t&&wo(a,n,t)}else for(var i in e)e.hasOwnProperty(i)&&wo(a,i,e[i])}function lu(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dn(a){return Wd.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}function Me(){}var tu=null;function nu(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var $l=null,Il=null;function Ho(a){var e=kl(a);if(e&&(a=e.stateNode)){var l=a[Qa]||null;a:switch(a=e.stateNode,e.type){case"input":if(au(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=a;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+oe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var t=l[e];if(t!==a&&t.form===a.form){var n=t[Qa]||null;if(!n)throw Error(v(90));au(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)t=l[e],t.form===a.form&&Mo(t)}break a;case"textarea":Do(a,l.value,l.defaultValue);break a;case"select":e=l.value,e!=null&&Wl(a,!!l.multiple,e,!1)}}}var iu=!1;function Bo(a,e,l){if(iu)return a(e,l);iu=!0;try{var t=a(e);return t}finally{if(iu=!1,($l!==null||Il!==null)&&(xi(),$l&&(e=$l,a=Il,Il=$l=null,Ho(e),a)))for(e=0;e<a.length;e++)Ho(a[e])}}function Ut(a,e){var l=a.stateNode;if(l===null)return null;var t=l[Qa]||null;if(t===null)return null;l=t[e];a:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(a=a.type,t=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!t;break a;default:a=!1}if(a)return null;if(l&&typeof l!="function")throw Error(v(231,e,typeof l));return l}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(qe)try{var wt={};Object.defineProperty(wt,"passive",{get:function(){uu=!0}}),window.addEventListener("test",wt,wt),window.removeEventListener("test",wt,wt)}catch{uu=!1}var $e=null,cu=null,Un=null;function Yo(){if(Un)return Un;var a,e=cu,l=e.length,t,n="value"in $e?$e.value:$e.textContent,i=n.length;for(a=0;a<l&&e[a]===n[a];a++);var u=l-a;for(t=1;t<=u&&e[l-t]===n[i-t];t++);return Un=n.slice(a,1<t?1-t:void 0)}function wn(a){var e=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&e===13&&(a=13)):a=e,a===10&&(a=13),32<=a||a===13?a:0}function Rn(){return!0}function Go(){return!1}function Xa(a){function e(l,t,n,i,u){this._reactName=l,this._targetInst=n,this.type=t,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(l=a[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Rn:Go,this.isPropagationStopped=Go,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),e}var jl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=Xa(jl),Rt=U({},jl,{view:0,detail:0}),Fd=Xa(Rt),ou,su,Ht,Bn=U({},Rt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Ht&&(Ht&&a.type==="mousemove"?(ou=a.screenX-Ht.screenX,su=a.screenY-Ht.screenY):su=ou=0,Ht=a),ou)},movementY:function(a){return"movementY"in a?a.movementY:su}}),Qo=Xa(Bn),$d=U({},Bn,{dataTransfer:0}),Id=Xa($d),Pd=U({},Rt,{relatedTarget:0}),ru=Xa(Pd),a1=U({},jl,{animationName:0,elapsedTime:0,pseudoElement:0}),e1=Xa(a1),l1=U({},jl,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),t1=Xa(l1),n1=U({},jl,{data:0}),Xo=Xa(n1),i1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o1(a){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(a):(a=c1[a])?!!e[a]:!1}function fu(){return o1}var s1=U({},Rt,{key:function(a){if(a.key){var e=i1[a.key]||a.key;if(e!=="Unidentified")return e}return a.type==="keypress"?(a=wn(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?u1[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(a){return a.type==="keypress"?wn(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?wn(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),r1=Xa(s1),f1=U({},Bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lo=Xa(f1),d1=U({},Rt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),m1=Xa(d1),p1=U({},jl,{propertyName:0,elapsedTime:0,pseudoElement:0}),v1=Xa(p1),h1=U({},Bn,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=Xa(h1),y1=U({},jl,{newState:0,oldState:0}),b1=Xa(y1),x1=[9,13,27,32],du=qe&&"CompositionEvent"in window,Bt=null;qe&&"documentMode"in document&&(Bt=document.documentMode);var S1=qe&&"TextEvent"in window&&!Bt,Zo=qe&&(!du||Bt&&8<Bt&&11>=Bt),Vo=" ",ko=!1;function Ko(a,e){switch(a){case"keyup":return x1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jo(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Pl=!1;function z1(a,e){switch(a){case"compositionend":return Jo(e);case"keypress":return e.which!==32?null:(ko=!0,Vo);case"textInput":return a=e.data,a===Vo&&ko?null:a;default:return null}}function A1(a,e){if(Pl)return a==="compositionend"||!du&&Ko(a,e)?(a=Yo(),Un=cu=$e=null,Pl=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zo&&e.locale!=="ko"?null:e.data;default:return null}}var C1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wo(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e==="input"?!!C1[a.type]:e==="textarea"}function Fo(a,e,l,t){$l?Il?Il.push(t):Il=[t]:$l=t,e=ji(e,"onChange"),0<e.length&&(l=new Hn("onChange","change",null,l,t),a.push({event:l,listeners:e}))}var Yt=null,Gt=null;function E1(a){Df(a,0)}function Yn(a){var e=Dt(a);if(Mo(e))return a}function $o(a,e){if(a==="change")return e}var Io=!1;if(qe){var mu;if(qe){var pu="oninput"in document;if(!pu){var Po=document.createElement("div");Po.setAttribute("oninput","return;"),pu=typeof Po.oninput=="function"}mu=pu}else mu=!1;Io=mu&&(!document.documentMode||9<document.documentMode)}function as(){Yt&&(Yt.detachEvent("onpropertychange",es),Gt=Yt=null)}function es(a){if(a.propertyName==="value"&&Yn(Gt)){var e=[];Fo(e,Gt,a,nu(a)),Bo(E1,e)}}function T1(a,e,l){a==="focusin"?(as(),Yt=e,Gt=l,Yt.attachEvent("onpropertychange",es)):a==="focusout"&&as()}function j1(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Yn(Gt)}function N1(a,e){if(a==="click")return Yn(e)}function O1(a,e){if(a==="input"||a==="change")return Yn(e)}function _1(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var Pa=typeof Object.is=="function"?Object.is:_1;function Qt(a,e){if(Pa(a,e))return!0;if(typeof a!="object"||a===null||typeof e!="object"||e===null)return!1;var l=Object.keys(a),t=Object.keys(e);if(l.length!==t.length)return!1;for(t=0;t<l.length;t++){var n=l[t];if(!Vi.call(e,n)||!Pa(a[n],e[n]))return!1}return!0}function ls(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function ts(a,e){var l=ls(a);a=0;for(var t;l;){if(l.nodeType===3){if(t=a+l.textContent.length,a<=e&&t>=e)return{node:l,offset:e-a};a=t}a:{for(;l;){if(l.nextSibling){l=l.nextSibling;break a}l=l.parentNode}l=void 0}l=ls(l)}}function ns(a,e){return a&&e?a===e?!0:a&&a.nodeType===3?!1:e&&e.nodeType===3?ns(a,e.parentNode):"contains"in a?a.contains(e):a.compareDocumentPosition?!!(a.compareDocumentPosition(e)&16):!1:!1}function is(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var e=qn(a.document);e instanceof a.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)a=e.contentWindow;else break;e=qn(a.document)}return e}function vu(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e&&(e==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||e==="textarea"||a.contentEditable==="true")}var M1=qe&&"documentMode"in document&&11>=document.documentMode,at=null,hu=null,Xt=null,gu=!1;function us(a,e,l){var t=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;gu||at==null||at!==qn(t)||(t=at,"selectionStart"in t&&vu(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Xt&&Qt(Xt,t)||(Xt=t,t=ji(hu,"onSelect"),0<t.length&&(e=new Hn("onSelect","select",null,e,l),a.push({event:e,listeners:t}),e.target=at)))}function Nl(a,e){var l={};return l[a.toLowerCase()]=e.toLowerCase(),l["Webkit"+a]="webkit"+e,l["Moz"+a]="moz"+e,l}var et={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionrun:Nl("Transition","TransitionRun"),transitionstart:Nl("Transition","TransitionStart"),transitioncancel:Nl("Transition","TransitionCancel"),transitionend:Nl("Transition","TransitionEnd")},yu={},cs={};qe&&(cs=document.createElement("div").style,"AnimationEvent"in window||(delete et.animationend.animation,delete et.animationiteration.animation,delete et.animationstart.animation),"TransitionEvent"in window||delete et.transitionend.transition);function Ol(a){if(yu[a])return yu[a];if(!et[a])return a;var e=et[a],l;for(l in e)if(e.hasOwnProperty(l)&&l in cs)return yu[a]=e[l];return a}var os=Ol("animationend"),ss=Ol("animationiteration"),rs=Ol("animationstart"),q1=Ol("transitionrun"),D1=Ol("transitionstart"),U1=Ol("transitioncancel"),fs=Ol("transitionend"),ds=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function ye(a,e){ds.set(a,e),Tl(e,[a])}var Gn=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},se=[],lt=0,xu=0;function Qn(){for(var a=lt,e=xu=lt=0;e<a;){var l=se[e];se[e++]=null;var t=se[e];se[e++]=null;var n=se[e];se[e++]=null;var i=se[e];if(se[e++]=null,t!==null&&n!==null){var u=t.pending;u===null?n.next=n:(n.next=u.next,u.next=n),t.pending=n}i!==0&&ms(l,n,i)}}function Xn(a,e,l,t){se[lt++]=a,se[lt++]=e,se[lt++]=l,se[lt++]=t,xu|=t,a.lanes|=t,a=a.alternate,a!==null&&(a.lanes|=t)}function Su(a,e,l,t){return Xn(a,e,l,t),Ln(a)}function _l(a,e){return Xn(a,null,null,e),Ln(a)}function ms(a,e,l){a.lanes|=l;var t=a.alternate;t!==null&&(t.lanes|=l);for(var n=!1,i=a.return;i!==null;)i.childLanes|=l,t=i.alternate,t!==null&&(t.childLanes|=l),i.tag===22&&(a=i.stateNode,a===null||a._visibility&1||(n=!0)),a=i,i=i.return;return a.tag===3?(i=a.stateNode,n&&e!==null&&(n=31-Ia(l),a=i.hiddenUpdates,t=a[n],t===null?a[n]=[e]:t.push(e),e.lane=l|536870912),i):null}function Ln(a){if(50<fn)throw fn=0,_c=null,Error(v(185));for(var e=a.return;e!==null;)a=e,e=a.return;return a.tag===3?a.stateNode:null}var tt={};function w1(a,e,l,t){this.tag=a,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ae(a,e,l,t){return new w1(a,e,l,t)}function zu(a){return a=a.prototype,!(!a||!a.isReactComponent)}function De(a,e){var l=a.alternate;return l===null?(l=ae(a.tag,e,a.key,a.mode),l.elementType=a.elementType,l.type=a.type,l.stateNode=a.stateNode,l.alternate=a,a.alternate=l):(l.pendingProps=e,l.type=a.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=a.flags&65011712,l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=a.sibling,l.index=a.index,l.ref=a.ref,l.refCleanup=a.refCleanup,l}function ps(a,e){a.flags&=65011714;var l=a.alternate;return l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a}function Zn(a,e,l,t,n,i){var u=0;if(t=a,typeof a=="function")zu(a)&&(u=1);else if(typeof a=="string")u=Gm(a,l,N.current)?26:a==="html"||a==="head"||a==="body"?27:5;else a:switch(a){case ze:return a=ae(31,l,e,n),a.elementType=ze,a.lanes=i,a;case Ua:return Ml(l.children,n,i,e);case Ne:u=8,n|=24;break;case Wa:return a=ae(12,l,e,n|2),a.elementType=Wa,a.lanes=i,a;case Se:return a=ae(13,l,e,n),a.elementType=Se,a.lanes=i,a;case Ba:return a=ae(19,l,e,n),a.elementType=Ba,a.lanes=i,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case qa:u=10;break a;case Je:u=9;break a;case ue:u=11;break a;case J:u=14;break a;case Ya:u=16,t=null;break a}u=29,l=Error(v(130,a===null?"null":typeof a,"")),t=null}return e=ae(u,l,e,n),e.elementType=a,e.type=t,e.lanes=i,e}function Ml(a,e,l,t){return a=ae(7,a,t,e),a.lanes=l,a}function Au(a,e,l){return a=ae(6,a,null,e),a.lanes=l,a}function vs(a){var e=ae(18,null,null,0);return e.stateNode=a,e}function Cu(a,e,l){return e=ae(4,a.children!==null?a.children:[],a.key,e),e.lanes=l,e.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},e}var hs=new WeakMap;function re(a,e){if(typeof a=="object"&&a!==null){var l=hs.get(a);return l!==void 0?l:(e={value:a,source:e,stack:vo(e)},hs.set(a,e),e)}return{value:a,source:e,stack:vo(e)}}var nt=[],it=0,Vn=null,Lt=0,fe=[],de=0,Ie=null,Ce=1,Ee="";function Ue(a,e){nt[it++]=Lt,nt[it++]=Vn,Vn=a,Lt=e}function gs(a,e,l){fe[de++]=Ce,fe[de++]=Ee,fe[de++]=Ie,Ie=a;var t=Ce;a=Ee;var n=32-Ia(t)-1;t&=~(1<<n),l+=1;var i=32-Ia(e)+n;if(30<i){var u=n-n%5;i=(t&(1<<u)-1).toString(32),t>>=u,n-=u,Ce=1<<32-Ia(e)+n|l<<n|t,Ee=i+a}else Ce=1<<i|l<<n|t,Ee=a}function Eu(a){a.return!==null&&(Ue(a,1),gs(a,1,0))}function Tu(a){for(;a===Vn;)Vn=nt[--it],nt[it]=null,Lt=nt[--it],nt[it]=null;for(;a===Ie;)Ie=fe[--de],fe[de]=null,Ee=fe[--de],fe[de]=null,Ce=fe[--de],fe[de]=null}function ys(a,e){fe[de++]=Ce,fe[de++]=Ee,fe[de++]=Ie,Ce=e.id,Ee=e.overflow,Ie=a}var Na=null,ra=null,W=!1,Pe=null,me=!1,ju=Error(v(519));function al(a){var e=Error(v(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zt(re(e,a)),ju}function bs(a){var e=a.stateNode,l=a.type,t=a.memoizedProps;switch(e[ja]=a,e[Qa]=t,l){case"dialog":V("cancel",e),V("close",e);break;case"iframe":case"object":case"embed":V("load",e);break;case"video":case"audio":for(l=0;l<mn.length;l++)V(mn[l],e);break;case"source":V("error",e);break;case"img":case"image":case"link":V("error",e),V("load",e);break;case"details":V("toggle",e);break;case"input":V("invalid",e),qo(e,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":V("invalid",e);break;case"textarea":V("invalid",e),Uo(e,t.value,t.defaultValue,t.children)}l=t.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||t.suppressHydrationWarning===!0||Hf(e.textContent,l)?(t.popover!=null&&(V("beforetoggle",e),V("toggle",e)),t.onScroll!=null&&V("scroll",e),t.onScrollEnd!=null&&V("scrollend",e),t.onClick!=null&&(e.onclick=Me),e=!0):e=!1,e||al(a,!0)}function xs(a){for(Na=a.return;Na;)switch(Na.tag){case 5:case 31:case 13:me=!1;return;case 27:case 3:me=!0;return;default:Na=Na.return}}function ut(a){if(a!==Na)return!1;if(!W)return xs(a),W=!0,!1;var e=a.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=a.type,l=!(l!=="form"&&l!=="button")||Vc(a.type,a.memoizedProps)),l=!l),l&&ra&&al(a),xs(a),e===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(v(317));ra=kf(a)}else if(e===31){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(v(317));ra=kf(a)}else e===27?(e=ra,pl(a.type)?(a=Fc,Fc=null,ra=a):ra=e):ra=Na?ve(a.stateNode.nextSibling):null;return!0}function ql(){ra=Na=null,W=!1}function Nu(){var a=Pe;return a!==null&&(ka===null?ka=a:ka.push.apply(ka,a),Pe=null),a}function Zt(a){Pe===null?Pe=[a]:Pe.push(a)}var Ou=f(null),Dl=null,we=null;function el(a,e,l){T(Ou,e._currentValue),e._currentValue=l}function Re(a){a._currentValue=Ou.current,z(Ou)}function _u(a,e,l){for(;a!==null;){var t=a.alternate;if((a.childLanes&e)!==e?(a.childLanes|=e,t!==null&&(t.childLanes|=e)):t!==null&&(t.childLanes&e)!==e&&(t.childLanes|=e),a===l)break;a=a.return}}function Mu(a,e,l,t){var n=a.child;for(n!==null&&(n.return=a);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;a:for(;i!==null;){var c=i;i=n;for(var s=0;s<e.length;s++)if(c.context===e[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),_u(i.return,l,a),t||(u=null);break a}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(v(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),_u(u,l,a),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===a){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ct(a,e,l,t){a=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(v(387));if(u=u.memoizedProps,u!==null){var c=n.type;Pa(n.pendingProps.value,u.value)||(a!==null?a.push(c):a=[c])}}else if(n===aa.current){if(u=n.alternate,u===null)throw Error(v(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(a!==null?a.push(yn):a=[yn])}n=n.return}a!==null&&Mu(e,a,l,t),e.flags|=262144}function kn(a){for(a=a.firstContext;a!==null;){if(!Pa(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Ul(a){Dl=a,we=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function Oa(a){return Ss(Dl,a)}function Kn(a,e){return Dl===null&&Ul(a),Ss(a,e)}function Ss(a,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},we===null){if(a===null)throw Error(v(308));we=e,a.dependencies={lanes:0,firstContext:e},a.flags|=524288}else we=we.next=e;return l}var R1=typeof AbortController<"u"?AbortController:function(){var a=[],e=this.signal={aborted:!1,addEventListener:function(l,t){a.push(t)}};this.abort=function(){e.aborted=!0,a.forEach(function(l){return l()})}},H1=C.unstable_scheduleCallback,B1=C.unstable_NormalPriority,ba={$$typeof:qa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new R1,data:new Map,refCount:0}}function Vt(a){a.refCount--,a.refCount===0&&H1(B1,function(){a.controller.abort()})}var kt=null,Du=0,ot=0,st=null;function Y1(a,e){if(kt===null){var l=kt=[];Du=0,ot=Rc(),st={status:"pending",value:void 0,then:function(t){l.push(t)}}}return Du++,e.then(zs,zs),e}function zs(){if(--Du===0&&kt!==null){st!==null&&(st.status="fulfilled");var a=kt;kt=null,ot=0,st=null;for(var e=0;e<a.length;e++)(0,a[e])()}}function G1(a,e){var l=[],t={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return a.then(function(){t.status="fulfilled",t.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(t.status="rejected",t.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),t}var As=b.S;b.S=function(a,e){cf=Fa(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Y1(a,e),As!==null&&As(a,e)};var wl=f(null);function Uu(){var a=wl.current;return a!==null?a:oa.pooledCache}function Jn(a,e){e===null?T(wl,wl.current):T(wl,e.pool)}function Cs(){var a=Uu();return a===null?null:{parent:ba._currentValue,pool:a}}var rt=Error(v(460)),wu=Error(v(474)),Wn=Error(v(542)),Fn={then:function(){}};function Es(a){return a=a.status,a==="fulfilled"||a==="rejected"}function Ts(a,e,l){switch(l=a[l],l===void 0?a.push(e):l!==e&&(e.then(Me,Me),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,Ns(a),a;default:if(typeof e.status=="string")e.then(Me,Me);else{if(a=oa,a!==null&&100<a.shellSuspendCounter)throw Error(v(482));a=e,a.status="pending",a.then(function(t){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=t}},function(t){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=t}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,Ns(a),a}throw Hl=e,rt}}function Rl(a){try{var e=a._init;return e(a._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Hl=l,rt):l}}var Hl=null;function js(){if(Hl===null)throw Error(v(459));var a=Hl;return Hl=null,a}function Ns(a){if(a===rt||a===Wn)throw Error(v(483))}var ft=null,Kt=0;function $n(a){var e=Kt;return Kt+=1,ft===null&&(ft=[]),Ts(ft,a,e)}function Jt(a,e){e=e.props.ref,a.ref=e!==void 0?e:null}function In(a,e){throw e.$$typeof===da?Error(v(525)):(a=Object.prototype.toString.call(e),Error(v(31,a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)))}function Os(a){function e(d,r){if(a){var m=d.deletions;m===null?(d.deletions=[r],d.flags|=16):m.push(r)}}function l(d,r){if(!a)return null;for(;r!==null;)e(d,r),r=r.sibling;return null}function t(d){for(var r=new Map;d!==null;)d.key!==null?r.set(d.key,d):r.set(d.index,d),d=d.sibling;return r}function n(d,r){return d=De(d,r),d.index=0,d.sibling=null,d}function i(d,r,m){return d.index=m,a?(m=d.alternate,m!==null?(m=m.index,m<r?(d.flags|=67108866,r):m):(d.flags|=67108866,r)):(d.flags|=1048576,r)}function u(d){return a&&d.alternate===null&&(d.flags|=67108866),d}function c(d,r,m,x){return r===null||r.tag!==6?(r=Au(m,d.mode,x),r.return=d,r):(r=n(r,m),r.return=d,r)}function s(d,r,m,x){var M=m.type;return M===Ua?y(d,r,m.props.children,x,m.key):r!==null&&(r.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ya&&Rl(M)===r.type)?(r=n(r,m.props),Jt(r,m),r.return=d,r):(r=Zn(m.type,m.key,m.props,null,d.mode,x),Jt(r,m),r.return=d,r)}function p(d,r,m,x){return r===null||r.tag!==4||r.stateNode.containerInfo!==m.containerInfo||r.stateNode.implementation!==m.implementation?(r=Cu(m,d.mode,x),r.return=d,r):(r=n(r,m.children||[]),r.return=d,r)}function y(d,r,m,x,M){return r===null||r.tag!==7?(r=Ml(m,d.mode,x,M),r.return=d,r):(r=n(r,m),r.return=d,r)}function S(d,r,m){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Au(""+r,d.mode,m),r.return=d,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Ja:return m=Zn(r.type,r.key,r.props,null,d.mode,m),Jt(m,r),m.return=d,m;case Ha:return r=Cu(r,d.mode,m),r.return=d,r;case Ya:return r=Rl(r),S(d,r,m)}if(ge(r)||Ga(r))return r=Ml(r,d.mode,m,null),r.return=d,r;if(typeof r.then=="function")return S(d,$n(r),m);if(r.$$typeof===qa)return S(d,Kn(d,r),m);In(d,r)}return null}function h(d,r,m,x){var M=r!==null?r.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return M!==null?null:c(d,r,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ja:return m.key===M?s(d,r,m,x):null;case Ha:return m.key===M?p(d,r,m,x):null;case Ya:return m=Rl(m),h(d,r,m,x)}if(ge(m)||Ga(m))return M!==null?null:y(d,r,m,x,null);if(typeof m.then=="function")return h(d,r,$n(m),x);if(m.$$typeof===qa)return h(d,r,Kn(d,m),x);In(d,m)}return null}function g(d,r,m,x,M){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(m)||null,c(r,d,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ja:return d=d.get(x.key===null?m:x.key)||null,s(r,d,x,M);case Ha:return d=d.get(x.key===null?m:x.key)||null,p(r,d,x,M);case Ya:return x=Rl(x),g(d,r,m,x,M)}if(ge(x)||Ga(x))return d=d.get(m)||null,y(r,d,x,M,null);if(typeof x.then=="function")return g(d,r,m,$n(x),M);if(x.$$typeof===qa)return g(d,r,m,Kn(r,x),M);In(r,x)}return null}function j(d,r,m,x){for(var M=null,$=null,O=r,Q=r=0,K=null;O!==null&&Q<m.length;Q++){O.index>Q?(K=O,O=null):K=O.sibling;var I=h(d,O,m[Q],x);if(I===null){O===null&&(O=K);break}a&&O&&I.alternate===null&&e(d,O),r=i(I,r,Q),$===null?M=I:$.sibling=I,$=I,O=K}if(Q===m.length)return l(d,O),W&&Ue(d,Q),M;if(O===null){for(;Q<m.length;Q++)O=S(d,m[Q],x),O!==null&&(r=i(O,r,Q),$===null?M=O:$.sibling=O,$=O);return W&&Ue(d,Q),M}for(O=t(O);Q<m.length;Q++)K=g(O,d,Q,m[Q],x),K!==null&&(a&&K.alternate!==null&&O.delete(K.key===null?Q:K.key),r=i(K,r,Q),$===null?M=K:$.sibling=K,$=K);return a&&O.forEach(function(bl){return e(d,bl)}),W&&Ue(d,Q),M}function q(d,r,m,x){if(m==null)throw Error(v(151));for(var M=null,$=null,O=r,Q=r=0,K=null,I=m.next();O!==null&&!I.done;Q++,I=m.next()){O.index>Q?(K=O,O=null):K=O.sibling;var bl=h(d,O,I.value,x);if(bl===null){O===null&&(O=K);break}a&&O&&bl.alternate===null&&e(d,O),r=i(bl,r,Q),$===null?M=bl:$.sibling=bl,$=bl,O=K}if(I.done)return l(d,O),W&&Ue(d,Q),M;if(O===null){for(;!I.done;Q++,I=m.next())I=S(d,I.value,x),I!==null&&(r=i(I,r,Q),$===null?M=I:$.sibling=I,$=I);return W&&Ue(d,Q),M}for(O=t(O);!I.done;Q++,I=m.next())I=g(O,d,Q,I.value,x),I!==null&&(a&&I.alternate!==null&&O.delete(I.key===null?Q:I.key),r=i(I,r,Q),$===null?M=I:$.sibling=I,$=I);return a&&O.forEach(function($m){return e(d,$m)}),W&&Ue(d,Q),M}function ua(d,r,m,x){if(typeof m=="object"&&m!==null&&m.type===Ua&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ja:a:{for(var M=m.key;r!==null;){if(r.key===M){if(M=m.type,M===Ua){if(r.tag===7){l(d,r.sibling),x=n(r,m.props.children),x.return=d,d=x;break a}}else if(r.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ya&&Rl(M)===r.type){l(d,r.sibling),x=n(r,m.props),Jt(x,m),x.return=d,d=x;break a}l(d,r);break}else e(d,r);r=r.sibling}m.type===Ua?(x=Ml(m.props.children,d.mode,x,m.key),x.return=d,d=x):(x=Zn(m.type,m.key,m.props,null,d.mode,x),Jt(x,m),x.return=d,d=x)}return u(d);case Ha:a:{for(M=m.key;r!==null;){if(r.key===M)if(r.tag===4&&r.stateNode.containerInfo===m.containerInfo&&r.stateNode.implementation===m.implementation){l(d,r.sibling),x=n(r,m.children||[]),x.return=d,d=x;break a}else{l(d,r);break}else e(d,r);r=r.sibling}x=Cu(m,d.mode,x),x.return=d,d=x}return u(d);case Ya:return m=Rl(m),ua(d,r,m,x)}if(ge(m))return j(d,r,m,x);if(Ga(m)){if(M=Ga(m),typeof M!="function")throw Error(v(150));return m=M.call(m),q(d,r,m,x)}if(typeof m.then=="function")return ua(d,r,$n(m),x);if(m.$$typeof===qa)return ua(d,r,Kn(d,m),x);In(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,r!==null&&r.tag===6?(l(d,r.sibling),x=n(r,m),x.return=d,d=x):(l(d,r),x=Au(m,d.mode,x),x.return=d,d=x),u(d)):l(d,r)}return function(d,r,m,x){try{Kt=0;var M=ua(d,r,m,x);return ft=null,M}catch(O){if(O===rt||O===Wn)throw O;var $=ae(29,O,null,d.mode);return $.lanes=x,$.return=d,$}finally{}}}var Bl=Os(!0),_s=Os(!1),ll=!1;function Ru(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(a,e){a=a.updateQueue,e.updateQueue===a&&(e.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function tl(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function nl(a,e,l){var t=a.updateQueue;if(t===null)return null;if(t=t.shared,(P&2)!==0){var n=t.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e,e=Ln(a),ms(a,null,l),e}return Xn(a,t,e,l),Ln(a)}function Wt(a,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var t=e.lanes;t&=a.pendingLanes,l|=t,e.lanes=l,So(a,l)}}function Bu(a,e){var l=a.updateQueue,t=a.alternate;if(t!==null&&(t=t.updateQueue,l===t)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:t.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:t.shared,callbacks:t.callbacks},a.updateQueue=l;return}a=l.lastBaseUpdate,a===null?l.firstBaseUpdate=e:a.next=e,l.lastBaseUpdate=e}var Yu=!1;function Ft(){if(Yu){var a=st;if(a!==null)throw a}}function $t(a,e,l,t){Yu=!1;var n=a.updateQueue;ll=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,p=s.next;s.next=null,u===null?i=p:u.next=p,u=s;var y=a.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==u&&(c===null?y.firstBaseUpdate=p:c.next=p,y.lastBaseUpdate=s))}if(i!==null){var S=n.baseState;u=0,y=p=s=null,c=i;do{var h=c.lane&-536870913,g=h!==c.lane;if(g?(k&h)===h:(t&h)===h){h!==0&&h===ot&&(Yu=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});a:{var j=a,q=c;h=e;var ua=l;switch(q.tag){case 1:if(j=q.payload,typeof j=="function"){S=j.call(ua,S,h);break a}S=j;break a;case 3:j.flags=j.flags&-65537|128;case 0:if(j=q.payload,h=typeof j=="function"?j.call(ua,S,h):j,h==null)break a;S=U({},S,h);break a;case 2:ll=!0}}h=c.callback,h!==null&&(a.flags|=64,g&&(a.flags|=8192),g=n.callbacks,g===null?n.callbacks=[h]:g.push(h))}else g={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(p=y=g,s=S):y=y.next=g,u|=h;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;g=c,c=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);y===null&&(s=S),n.baseState=s,n.firstBaseUpdate=p,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),sl|=u,a.lanes=u,a.memoizedState=S}}function Ms(a,e){if(typeof a!="function")throw Error(v(191,a));a.call(e)}function qs(a,e){var l=a.callbacks;if(l!==null)for(a.callbacks=null,a=0;a<l.length;a++)Ms(l[a],e)}var dt=f(null),Pn=f(0);function Ds(a,e){a=Ve,T(Pn,a),T(dt,e),Ve=a|e.baseLanes}function Gu(){T(Pn,Ve),T(dt,dt.current)}function Qu(){Ve=Pn.current,z(dt),z(Pn)}var ee=f(null),pe=null;function il(a){var e=a.alternate;T(ga,ga.current&1),T(ee,a),pe===null&&(e===null||dt.current!==null||e.memoizedState!==null)&&(pe=a)}function Xu(a){T(ga,ga.current),T(ee,a),pe===null&&(pe=a)}function Us(a){a.tag===22?(T(ga,ga.current),T(ee,a),pe===null&&(pe=a)):ul()}function ul(){T(ga,ga.current),T(ee,ee.current)}function le(a){z(ee),pe===a&&(pe=null),z(ga)}var ga=f(0);function ai(a){for(var e=a;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Jc(l)||Wc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var He=0,Y=null,na=null,xa=null,ei=!1,mt=!1,Yl=!1,li=0,It=0,pt=null,Q1=0;function pa(){throw Error(v(321))}function Lu(a,e){if(e===null)return!1;for(var l=0;l<e.length&&l<a.length;l++)if(!Pa(a[l],e[l]))return!1;return!0}function Zu(a,e,l,t,n,i){return He=i,Y=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,b.H=a===null||a.memoizedState===null?gr:ic,Yl=!1,i=l(t,n),Yl=!1,mt&&(i=Rs(e,l,t,n)),ws(a),i}function ws(a){b.H=en;var e=na!==null&&na.next!==null;if(He=0,xa=na=Y=null,ei=!1,It=0,pt=null,e)throw Error(v(300));a===null||Sa||(a=a.dependencies,a!==null&&kn(a)&&(Sa=!0))}function Rs(a,e,l,t){Y=a;var n=0;do{if(mt&&(pt=null),It=0,mt=!1,25<=n)throw Error(v(301));if(n+=1,xa=na=null,a.updateQueue!=null){var i=a.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=yr,i=e(l,t)}while(mt);return i}function X1(){var a=b.H,e=a.useState()[0];return e=typeof e.then=="function"?Pt(e):e,a=a.useState()[0],(na!==null?na.memoizedState:null)!==a&&(Y.flags|=1024),e}function Vu(){var a=li!==0;return li=0,a}function ku(a,e,l){e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~l}function Ku(a){if(ei){for(a=a.memoizedState;a!==null;){var e=a.queue;e!==null&&(e.pending=null),a=a.next}ei=!1}He=0,xa=na=Y=null,mt=!1,It=li=0,pt=null}function Ra(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xa===null?Y.memoizedState=xa=a:xa=xa.next=a,xa}function ya(){if(na===null){var a=Y.alternate;a=a!==null?a.memoizedState:null}else a=na.next;var e=xa===null?Y.memoizedState:xa.next;if(e!==null)xa=e,na=a;else{if(a===null)throw Y.alternate===null?Error(v(467)):Error(v(310));na=a,a={memoizedState:na.memoizedState,baseState:na.baseState,baseQueue:na.baseQueue,queue:na.queue,next:null},xa===null?Y.memoizedState=xa=a:xa=xa.next=a}return xa}function ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pt(a){var e=It;return It+=1,pt===null&&(pt=[]),a=Ts(pt,a,e),e=Y,(xa===null?e.memoizedState:xa.next)===null&&(e=e.alternate,b.H=e===null||e.memoizedState===null?gr:ic),a}function ni(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return Pt(a);if(a.$$typeof===qa)return Oa(a)}throw Error(v(438,String(a)))}function Ju(a){var e=null,l=Y.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var t=Y.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(e={data:t.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=ti(),Y.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(a),t=0;t<a;t++)l[t]=Ll;return e.index++,l}function Be(a,e){return typeof e=="function"?e(a):e}function ii(a){var e=ya();return Wu(e,na,a)}function Wu(a,e,l){var t=a.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=l;var n=a.baseQueue,i=t.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,t.pending=null}if(i=a.baseState,n===null)a.memoizedState=i;else{e=n.next;var c=u=null,s=null,p=e,y=!1;do{var S=p.lane&-536870913;if(S!==p.lane?(k&S)===S:(He&S)===S){var h=p.revertLane;if(h===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),S===ot&&(y=!0);else if((He&h)===h){p=p.next,h===ot&&(y=!0);continue}else S={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(c=s=S,u=i):s=s.next=S,Y.lanes|=h,sl|=h;S=p.action,Yl&&l(i,S),i=p.hasEagerState?p.eagerState:l(i,S)}else h={lane:S,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(c=s=h,u=i):s=s.next=h,Y.lanes|=S,sl|=S;p=p.next}while(p!==null&&p!==e);if(s===null?u=i:s.next=c,!Pa(i,a.memoizedState)&&(Sa=!0,y&&(l=st,l!==null)))throw l;a.memoizedState=i,a.baseState=u,a.baseQueue=s,t.lastRenderedState=i}return n===null&&(t.lanes=0),[a.memoizedState,t.dispatch]}function Fu(a){var e=ya(),l=e.queue;if(l===null)throw Error(v(311));l.lastRenderedReducer=a;var t=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=a(i,u.action),u=u.next;while(u!==n);Pa(i,e.memoizedState)||(Sa=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,t]}function Hs(a,e,l){var t=Y,n=ya(),i=W;if(i){if(l===void 0)throw Error(v(407));l=l()}else l=e();var u=!Pa((na||n).memoizedState,l);if(u&&(n.memoizedState=l,Sa=!0),n=n.queue,Pu(Gs.bind(null,t,n,a),[a]),n.getSnapshot!==e||u||xa!==null&&xa.memoizedState.tag&1){if(t.flags|=2048,vt(9,{destroy:void 0},Ys.bind(null,t,n,l,e),null),oa===null)throw Error(v(349));i||(He&127)!==0||Bs(t,e,l)}return l}function Bs(a,e,l){a.flags|=16384,a={getSnapshot:e,value:l},e=Y.updateQueue,e===null?(e=ti(),Y.updateQueue=e,e.stores=[a]):(l=e.stores,l===null?e.stores=[a]:l.push(a))}function Ys(a,e,l,t){e.value=l,e.getSnapshot=t,Qs(e)&&Xs(a)}function Gs(a,e,l){return l(function(){Qs(e)&&Xs(a)})}function Qs(a){var e=a.getSnapshot;a=a.value;try{var l=e();return!Pa(a,l)}catch{return!0}}function Xs(a){var e=_l(a,2);e!==null&&Ka(e,a,2)}function $u(a){var e=Ra();if(typeof a=="function"){var l=a;if(a=l(),Yl){We(!0);try{l()}finally{We(!1)}}}return e.memoizedState=e.baseState=a,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Be,lastRenderedState:a},e}function Ls(a,e,l,t){return a.baseState=l,Wu(a,na,typeof t=="function"?t:Be)}function L1(a,e,l,t,n){if(oi(a))throw Error(v(485));if(a=e.action,a!==null){var i={payload:n,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};b.T!==null?l(!0):i.isTransition=!1,t(i),l=e.pending,l===null?(i.next=e.pending=i,Zs(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Zs(a,e){var l=e.action,t=e.payload,n=a.state;if(e.isTransition){var i=b.T,u={};b.T=u;try{var c=l(n,t),s=b.S;s!==null&&s(u,c),Vs(a,e,c)}catch(p){Iu(a,e,p)}finally{i!==null&&u.types!==null&&(i.types=u.types),b.T=i}}else try{i=l(n,t),Vs(a,e,i)}catch(p){Iu(a,e,p)}}function Vs(a,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(t){ks(a,e,t)},function(t){return Iu(a,e,t)}):ks(a,e,l)}function ks(a,e,l){e.status="fulfilled",e.value=l,Ks(e),a.state=l,e=a.pending,e!==null&&(l=e.next,l===e?a.pending=null:(l=l.next,e.next=l,Zs(a,l)))}function Iu(a,e,l){var t=a.pending;if(a.pending=null,t!==null){t=t.next;do e.status="rejected",e.reason=l,Ks(e),e=e.next;while(e!==t)}a.action=null}function Ks(a){a=a.listeners;for(var e=0;e<a.length;e++)(0,a[e])()}function Js(a,e){return e}function Ws(a,e){if(W){var l=oa.formState;if(l!==null){a:{var t=Y;if(W){if(ra){e:{for(var n=ra,i=me;n.nodeType!==8;){if(!i){n=null;break e}if(n=ve(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ra=ve(n.nextSibling),t=n.data==="F!";break a}}al(t)}t=!1}t&&(e=l[0])}}return l=Ra(),l.memoizedState=l.baseState=e,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Js,lastRenderedState:e},l.queue=t,l=pr.bind(null,Y,t),t.dispatch=l,t=$u(!1),i=nc.bind(null,Y,!1,t.queue),t=Ra(),n={state:e,dispatch:null,action:a,pending:null},t.queue=n,l=L1.bind(null,Y,n,i,l),n.dispatch=l,t.memoizedState=a,[e,l,!1]}function Fs(a){var e=ya();return $s(e,na,a)}function $s(a,e,l){if(e=Wu(a,e,Js)[0],a=ii(Be)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var t=Pt(e)}catch(u){throw u===rt?Wn:u}else t=e;e=ya();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(Y.flags|=2048,vt(9,{destroy:void 0},Z1.bind(null,n,l),null)),[t,i,a]}function Z1(a,e){a.action=e}function Is(a){var e=ya(),l=na;if(l!==null)return $s(e,l,a);ya(),e=e.memoizedState,l=ya();var t=l.queue.dispatch;return l.memoizedState=a,[e,t,!1]}function vt(a,e,l,t){return a={tag:a,create:l,deps:t,inst:e,next:null},e=Y.updateQueue,e===null&&(e=ti(),Y.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=a.next=a:(t=l.next,l.next=a,a.next=t,e.lastEffect=a),a}function Ps(){return ya().memoizedState}function ui(a,e,l,t){var n=Ra();Y.flags|=a,n.memoizedState=vt(1|e,{destroy:void 0},l,t===void 0?null:t)}function ci(a,e,l,t){var n=ya();t=t===void 0?null:t;var i=n.memoizedState.inst;na!==null&&t!==null&&Lu(t,na.memoizedState.deps)?n.memoizedState=vt(e,i,l,t):(Y.flags|=a,n.memoizedState=vt(1|e,i,l,t))}function ar(a,e){ui(8390656,8,a,e)}function Pu(a,e){ci(2048,8,a,e)}function V1(a){Y.flags|=4;var e=Y.updateQueue;if(e===null)e=ti(),Y.updateQueue=e,e.events=[a];else{var l=e.events;l===null?e.events=[a]:l.push(a)}}function er(a){var e=ya().memoizedState;return V1({ref:e,nextImpl:a}),function(){if((P&2)!==0)throw Error(v(440));return e.impl.apply(void 0,arguments)}}function lr(a,e){return ci(4,2,a,e)}function tr(a,e){return ci(4,4,a,e)}function nr(a,e){if(typeof e=="function"){a=a();var l=e(a);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return a=a(),e.current=a,function(){e.current=null}}function ir(a,e,l){l=l!=null?l.concat([a]):null,ci(4,4,nr.bind(null,e,a),l)}function ac(){}function ur(a,e){var l=ya();e=e===void 0?null:e;var t=l.memoizedState;return e!==null&&Lu(e,t[1])?t[0]:(l.memoizedState=[a,e],a)}function cr(a,e){var l=ya();e=e===void 0?null:e;var t=l.memoizedState;if(e!==null&&Lu(e,t[1]))return t[0];if(t=a(),Yl){We(!0);try{a()}finally{We(!1)}}return l.memoizedState=[t,e],t}function ec(a,e,l){return l===void 0||(He&1073741824)!==0&&(k&261930)===0?a.memoizedState=e:(a.memoizedState=l,a=sf(),Y.lanes|=a,sl|=a,l)}function or(a,e,l,t){return Pa(l,e)?l:dt.current!==null?(a=ec(a,l,t),Pa(a,e)||(Sa=!0),a):(He&42)===0||(He&1073741824)!==0&&(k&261930)===0?(Sa=!0,a.memoizedState=l):(a=sf(),Y.lanes|=a,sl|=a,e)}function sr(a,e,l,t,n){var i=E.p;E.p=i!==0&&8>i?i:8;var u=b.T,c={};b.T=c,nc(a,!1,e,l);try{var s=n(),p=b.S;if(p!==null&&p(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var y=G1(s,t);an(a,e,y,ie(a))}else an(a,e,t,ie(a))}catch(S){an(a,e,{then:function(){},status:"rejected",reason:S},ie())}finally{E.p=i,u!==null&&c.types!==null&&(u.types=c.types),b.T=u}}function k1(){}function lc(a,e,l,t){if(a.tag!==5)throw Error(v(476));var n=rr(a).queue;sr(a,n,e,w,l===null?k1:function(){return fr(a),l(t)})}function rr(a){var e=a.memoizedState;if(e!==null)return e;e={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Be,lastRenderedState:w},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Be,lastRenderedState:l},next:null},a.memoizedState=e,a=a.alternate,a!==null&&(a.memoizedState=e),e}function fr(a){var e=rr(a);e.next===null&&(e=a.alternate.memoizedState),an(a,e.next.queue,{},ie())}function tc(){return Oa(yn)}function dr(){return ya().memoizedState}function mr(){return ya().memoizedState}function K1(a){for(var e=a.return;e!==null;){switch(e.tag){case 24:case 3:var l=ie();a=tl(l);var t=nl(e,a,l);t!==null&&(Ka(t,e,l),Wt(t,e,l)),e={cache:qu()},a.payload=e;return}e=e.return}}function J1(a,e,l){var t=ie();l={lane:t,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},oi(a)?vr(e,l):(l=Su(a,e,l,t),l!==null&&(Ka(l,a,t),hr(l,e,t)))}function pr(a,e,l){var t=ie();an(a,e,l,t)}function an(a,e,l,t){var n={lane:t,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(oi(a))vr(e,n);else{var i=a.alternate;if(a.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,Pa(c,u))return Xn(a,e,n,0),oa===null&&Qn(),!1}catch{}finally{}if(l=Su(a,e,n,t),l!==null)return Ka(l,a,t),hr(l,e,t),!0}return!1}function nc(a,e,l,t){if(t={lane:2,revertLane:Rc(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},oi(a)){if(e)throw Error(v(479))}else e=Su(a,l,t,2),e!==null&&Ka(e,a,2)}function oi(a){var e=a.alternate;return a===Y||e!==null&&e===Y}function vr(a,e){mt=ei=!0;var l=a.pending;l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e}function hr(a,e,l){if((l&4194048)!==0){var t=e.lanes;t&=a.pendingLanes,l|=t,e.lanes=l,So(a,l)}}var en={readContext:Oa,use:ni,useCallback:pa,useContext:pa,useEffect:pa,useImperativeHandle:pa,useLayoutEffect:pa,useInsertionEffect:pa,useMemo:pa,useReducer:pa,useRef:pa,useState:pa,useDebugValue:pa,useDeferredValue:pa,useTransition:pa,useSyncExternalStore:pa,useId:pa,useHostTransitionStatus:pa,useFormState:pa,useActionState:pa,useOptimistic:pa,useMemoCache:pa,useCacheRefresh:pa};en.useEffectEvent=pa;var gr={readContext:Oa,use:ni,useCallback:function(a,e){return Ra().memoizedState=[a,e===void 0?null:e],a},useContext:Oa,useEffect:ar,useImperativeHandle:function(a,e,l){l=l!=null?l.concat([a]):null,ui(4194308,4,nr.bind(null,e,a),l)},useLayoutEffect:function(a,e){return ui(4194308,4,a,e)},useInsertionEffect:function(a,e){ui(4,2,a,e)},useMemo:function(a,e){var l=Ra();e=e===void 0?null:e;var t=a();if(Yl){We(!0);try{a()}finally{We(!1)}}return l.memoizedState=[t,e],t},useReducer:function(a,e,l){var t=Ra();if(l!==void 0){var n=l(e);if(Yl){We(!0);try{l(e)}finally{We(!1)}}}else n=e;return t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:n},t.queue=a,a=a.dispatch=J1.bind(null,Y,a),[t.memoizedState,a]},useRef:function(a){var e=Ra();return a={current:a},e.memoizedState=a},useState:function(a){a=$u(a);var e=a.queue,l=pr.bind(null,Y,e);return e.dispatch=l,[a.memoizedState,l]},useDebugValue:ac,useDeferredValue:function(a,e){var l=Ra();return ec(l,a,e)},useTransition:function(){var a=$u(!1);return a=sr.bind(null,Y,a.queue,!0,!1),Ra().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,e,l){var t=Y,n=Ra();if(W){if(l===void 0)throw Error(v(407));l=l()}else{if(l=e(),oa===null)throw Error(v(349));(k&127)!==0||Bs(t,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,ar(Gs.bind(null,t,i,a),[a]),t.flags|=2048,vt(9,{destroy:void 0},Ys.bind(null,t,i,l,e),null),l},useId:function(){var a=Ra(),e=oa.identifierPrefix;if(W){var l=Ee,t=Ce;l=(t&~(1<<32-Ia(t)-1)).toString(32)+l,e="_"+e+"R_"+l,l=li++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Q1++,e="_"+e+"r_"+l.toString(32)+"_";return a.memoizedState=e},useHostTransitionStatus:tc,useFormState:Ws,useActionState:Ws,useOptimistic:function(a){var e=Ra();e.memoizedState=e.baseState=a;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=nc.bind(null,Y,!0,l),l.dispatch=e,[a,e]},useMemoCache:Ju,useCacheRefresh:function(){return Ra().memoizedState=K1.bind(null,Y)},useEffectEvent:function(a){var e=Ra(),l={impl:a};return e.memoizedState=l,function(){if((P&2)!==0)throw Error(v(440));return l.impl.apply(void 0,arguments)}}},ic={readContext:Oa,use:ni,useCallback:ur,useContext:Oa,useEffect:Pu,useImperativeHandle:ir,useInsertionEffect:lr,useLayoutEffect:tr,useMemo:cr,useReducer:ii,useRef:Ps,useState:function(){return ii(Be)},useDebugValue:ac,useDeferredValue:function(a,e){var l=ya();return or(l,na.memoizedState,a,e)},useTransition:function(){var a=ii(Be)[0],e=ya().memoizedState;return[typeof a=="boolean"?a:Pt(a),e]},useSyncExternalStore:Hs,useId:dr,useHostTransitionStatus:tc,useFormState:Fs,useActionState:Fs,useOptimistic:function(a,e){var l=ya();return Ls(l,na,a,e)},useMemoCache:Ju,useCacheRefresh:mr};ic.useEffectEvent=er;var yr={readContext:Oa,use:ni,useCallback:ur,useContext:Oa,useEffect:Pu,useImperativeHandle:ir,useInsertionEffect:lr,useLayoutEffect:tr,useMemo:cr,useReducer:Fu,useRef:Ps,useState:function(){return Fu(Be)},useDebugValue:ac,useDeferredValue:function(a,e){var l=ya();return na===null?ec(l,a,e):or(l,na.memoizedState,a,e)},useTransition:function(){var a=Fu(Be)[0],e=ya().memoizedState;return[typeof a=="boolean"?a:Pt(a),e]},useSyncExternalStore:Hs,useId:dr,useHostTransitionStatus:tc,useFormState:Is,useActionState:Is,useOptimistic:function(a,e){var l=ya();return na!==null?Ls(l,na,a,e):(l.baseState=a,[a,l.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:mr};yr.useEffectEvent=er;function uc(a,e,l,t){e=a.memoizedState,l=l(t,e),l=l==null?e:U({},e,l),a.memoizedState=l,a.lanes===0&&(a.updateQueue.baseState=l)}var cc={enqueueSetState:function(a,e,l){a=a._reactInternals;var t=ie(),n=tl(t);n.payload=e,l!=null&&(n.callback=l),e=nl(a,n,t),e!==null&&(Ka(e,a,t),Wt(e,a,t))},enqueueReplaceState:function(a,e,l){a=a._reactInternals;var t=ie(),n=tl(t);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=nl(a,n,t),e!==null&&(Ka(e,a,t),Wt(e,a,t))},enqueueForceUpdate:function(a,e){a=a._reactInternals;var l=ie(),t=tl(l);t.tag=2,e!=null&&(t.callback=e),e=nl(a,t,l),e!==null&&(Ka(e,a,l),Wt(e,a,l))}};function br(a,e,l,t,n,i,u){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(t,i,u):e.prototype&&e.prototype.isPureReactComponent?!Qt(l,t)||!Qt(n,i):!0}function xr(a,e,l,t){a=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,t),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,t),e.state!==a&&cc.enqueueReplaceState(e,e.state,null)}function Gl(a,e){var l=e;if("ref"in e){l={};for(var t in e)t!=="ref"&&(l[t]=e[t])}if(a=a.defaultProps){l===e&&(l=U({},l));for(var n in a)l[n]===void 0&&(l[n]=a[n])}return l}function Sr(a){Gn(a)}function zr(a){console.error(a)}function Ar(a){Gn(a)}function si(a,e){try{var l=a.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(t){setTimeout(function(){throw t})}}function Cr(a,e,l){try{var t=a.onCaughtError;t(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function oc(a,e,l){return l=tl(l),l.tag=3,l.payload={element:null},l.callback=function(){si(a,e)},l}function Er(a){return a=tl(a),a.tag=3,a}function Tr(a,e,l,t){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;a.payload=function(){return n(i)},a.callback=function(){Cr(e,l,t)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(a.callback=function(){Cr(e,l,t),typeof n!="function"&&(rl===null?rl=new Set([this]):rl.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})})}function W1(a,e,l,t,n){if(l.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(e=l.alternate,e!==null&&ct(e,l,n,!0),l=ee.current,l!==null){switch(l.tag){case 31:case 13:return pe===null?Si():l.alternate===null&&va===0&&(va=3),l.flags&=-257,l.flags|=65536,l.lanes=n,t===Fn?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([t]):e.add(t),Dc(a,t,n)),!1;case 22:return l.flags|=65536,t===Fn?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([t])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([t]):l.add(t)),Dc(a,t,n)),!1}throw Error(v(435,l.tag))}return Dc(a,t,n),Si(),!1}if(W)return e=ee.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,t!==ju&&(a=Error(v(422),{cause:t}),Zt(re(a,l)))):(t!==ju&&(e=Error(v(423),{cause:t}),Zt(re(e,l))),a=a.current.alternate,a.flags|=65536,n&=-n,a.lanes|=n,t=re(t,l),n=oc(a.stateNode,t,n),Bu(a,n),va!==4&&(va=2)),!1;var i=Error(v(520),{cause:t});if(i=re(i,l),rn===null?rn=[i]:rn.push(i),va!==4&&(va=2),e===null)return!0;t=re(t,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,a=n&-n,l.lanes|=a,a=oc(l.stateNode,t,a),Bu(l,a),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(rl===null||!rl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Er(n),Tr(n,a,l,t),Bu(l,n),!1}l=l.return}while(l!==null);return!1}var sc=Error(v(461)),Sa=!1;function _a(a,e,l,t){e.child=a===null?_s(e,null,l,t):Bl(e,a.child,l,t)}function jr(a,e,l,t,n){l=l.render;var i=e.ref;if("ref"in t){var u={};for(var c in t)c!=="ref"&&(u[c]=t[c])}else u=t;return Ul(e),t=Zu(a,e,l,u,i,n),c=Vu(),a!==null&&!Sa?(ku(a,e,n),Ye(a,e,n)):(W&&c&&Eu(e),e.flags|=1,_a(a,e,t,n),e.child)}function Nr(a,e,l,t,n){if(a===null){var i=l.type;return typeof i=="function"&&!zu(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Or(a,e,i,t,n)):(a=Zn(l.type,null,t,e,e.mode,n),a.ref=e.ref,a.return=e,e.child=a)}if(i=a.child,!gc(a,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Qt,l(u,t)&&a.ref===e.ref)return Ye(a,e,n)}return e.flags|=1,a=De(i,t),a.ref=e.ref,a.return=e,e.child=a}function Or(a,e,l,t,n){if(a!==null){var i=a.memoizedProps;if(Qt(i,t)&&a.ref===e.ref)if(Sa=!1,e.pendingProps=t=i,gc(a,n))(a.flags&131072)!==0&&(Sa=!0);else return e.lanes=a.lanes,Ye(a,e,n)}return rc(a,e,l,t,n)}function _r(a,e,l,t){var n=t.children,i=a!==null?a.memoizedState:null;if(a===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,a!==null){for(t=e.child=a.child,n=0;t!==null;)n=n|t.lanes|t.childLanes,t=t.sibling;t=n&~i}else t=0,e.child=null;return Mr(a,e,i,l,t)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},a!==null&&Jn(e,i!==null?i.cachePool:null),i!==null?Ds(e,i):Gu(),Us(e);else return t=e.lanes=536870912,Mr(a,e,i!==null?i.baseLanes|l:l,l,t)}else i!==null?(Jn(e,i.cachePool),Ds(e,i),ul(),e.memoizedState=null):(a!==null&&Jn(e,null),Gu(),ul());return _a(a,e,n,l),e.child}function ln(a,e){return a!==null&&a.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Mr(a,e,l,t,n){var i=Uu();return i=i===null?null:{parent:ba._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},a!==null&&Jn(e,null),Gu(),Us(e),a!==null&&ct(a,e,t,!0),e.childLanes=n,null}function ri(a,e){return e=di({mode:e.mode,children:e.children},a.mode),e.ref=a.ref,a.child=e,e.return=a,e}function qr(a,e,l){return Bl(e,a.child,null,l),a=ri(e,e.pendingProps),a.flags|=2,le(e),e.memoizedState=null,a}function F1(a,e,l){var t=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,a===null){if(W){if(t.mode==="hidden")return a=ri(e,t),e.lanes=536870912,ln(null,a);if(Xu(e),(a=ra)?(a=Vf(a,me),a=a!==null&&a.data==="&"?a:null,a!==null&&(e.memoizedState={dehydrated:a,treeContext:Ie!==null?{id:Ce,overflow:Ee}:null,retryLane:536870912,hydrationErrors:null},l=vs(a),l.return=e,e.child=l,Na=e,ra=null)):a=null,a===null)throw al(e);return e.lanes=536870912,null}return ri(e,t)}var i=a.memoizedState;if(i!==null){var u=i.dehydrated;if(Xu(e),n)if(e.flags&256)e.flags&=-257,e=qr(a,e,l);else if(e.memoizedState!==null)e.child=a.child,e.flags|=128,e=null;else throw Error(v(558));else if(Sa||ct(a,e,l,!1),n=(l&a.childLanes)!==0,Sa||n){if(t=oa,t!==null&&(u=zo(t,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,_l(a,u),Ka(t,a,u),sc;Si(),e=qr(a,e,l)}else a=i.treeContext,ra=ve(u.nextSibling),Na=e,W=!0,Pe=null,me=!1,a!==null&&ys(e,a),e=ri(e,t),e.flags|=4096;return e}return a=De(a.child,{mode:t.mode,children:t.children}),a.ref=e.ref,e.child=a,a.return=e,a}function fi(a,e){var l=e.ref;if(l===null)a!==null&&a.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(v(284));(a===null||a.ref!==l)&&(e.flags|=4194816)}}function rc(a,e,l,t,n){return Ul(e),l=Zu(a,e,l,t,void 0,n),t=Vu(),a!==null&&!Sa?(ku(a,e,n),Ye(a,e,n)):(W&&t&&Eu(e),e.flags|=1,_a(a,e,l,n),e.child)}function Dr(a,e,l,t,n,i){return Ul(e),e.updateQueue=null,l=Rs(e,t,l,n),ws(a),t=Vu(),a!==null&&!Sa?(ku(a,e,i),Ye(a,e,i)):(W&&t&&Eu(e),e.flags|=1,_a(a,e,l,i),e.child)}function Ur(a,e,l,t,n){if(Ul(e),e.stateNode===null){var i=tt,u=l.contextType;typeof u=="object"&&u!==null&&(i=Oa(u)),i=new l(t,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=t,i.state=e.memoizedState,i.refs={},Ru(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?Oa(u):tt,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(uc(e,l,u,t),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&cc.enqueueReplaceState(i,i.state,null),$t(e,t,i,n),Ft(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),t=!0}else if(a===null){i=e.stateNode;var c=e.memoizedProps,s=Gl(l,c);i.props=s;var p=i.context,y=l.contextType;u=tt,typeof y=="object"&&y!==null&&(u=Oa(y));var S=l.getDerivedStateFromProps;y=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||p!==u)&&xr(e,i,t,u),ll=!1;var h=e.memoizedState;i.state=h,$t(e,t,i,n),Ft(),p=e.memoizedState,c||h!==p||ll?(typeof S=="function"&&(uc(e,l,S,t),p=e.memoizedState),(s=ll||br(e,l,s,t,h,p,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=t,e.memoizedState=p),i.props=t,i.state=p,i.context=u,t=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),t=!1)}else{i=e.stateNode,Hu(a,e),u=e.memoizedProps,y=Gl(l,u),i.props=y,S=e.pendingProps,h=i.context,p=l.contextType,s=tt,typeof p=="object"&&p!==null&&(s=Oa(p)),c=l.getDerivedStateFromProps,(p=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||h!==s)&&xr(e,i,t,s),ll=!1,h=e.memoizedState,i.state=h,$t(e,t,i,n),Ft();var g=e.memoizedState;u!==S||h!==g||ll||a!==null&&a.dependencies!==null&&kn(a.dependencies)?(typeof c=="function"&&(uc(e,l,c,t),g=e.memoizedState),(y=ll||br(e,l,y,t,h,g,s)||a!==null&&a.dependencies!==null&&kn(a.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(t,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(t,g,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===a.memoizedProps&&h===a.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===a.memoizedProps&&h===a.memoizedState||(e.flags|=1024),e.memoizedProps=t,e.memoizedState=g),i.props=t,i.state=g,i.context=s,t=y):(typeof i.componentDidUpdate!="function"||u===a.memoizedProps&&h===a.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===a.memoizedProps&&h===a.memoizedState||(e.flags|=1024),t=!1)}return i=t,fi(a,e),t=(e.flags&128)!==0,i||t?(i=e.stateNode,l=t&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,a!==null&&t?(e.child=Bl(e,a.child,null,n),e.child=Bl(e,null,l,n)):_a(a,e,l,n),e.memoizedState=i.state,a=e.child):a=Ye(a,e,n),a}function wr(a,e,l,t){return ql(),e.flags|=256,_a(a,e,l,t),e.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(a){return{baseLanes:a,cachePool:Cs()}}function mc(a,e,l){return a=a!==null?a.childLanes&~l:0,e&&(a|=ne),a}function Rr(a,e,l){var t=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=a!==null&&a.memoizedState===null?!1:(ga.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,a===null){if(W){if(n?il(e):ul(),(a=ra)?(a=Vf(a,me),a=a!==null&&a.data!=="&"?a:null,a!==null&&(e.memoizedState={dehydrated:a,treeContext:Ie!==null?{id:Ce,overflow:Ee}:null,retryLane:536870912,hydrationErrors:null},l=vs(a),l.return=e,e.child=l,Na=e,ra=null)):a=null,a===null)throw al(e);return Wc(a)?e.lanes=32:e.lanes=536870912,null}var c=t.children;return t=t.fallback,n?(ul(),n=e.mode,c=di({mode:"hidden",children:c},n),t=Ml(t,n,l,null),c.return=e,t.return=e,c.sibling=t,e.child=c,t=e.child,t.memoizedState=dc(l),t.childLanes=mc(a,u,l),e.memoizedState=fc,ln(null,t)):(il(e),pc(e,c))}var s=a.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)e.flags&256?(il(e),e.flags&=-257,e=vc(a,e,l)):e.memoizedState!==null?(ul(),e.child=a.child,e.flags|=128,e=null):(ul(),c=t.fallback,n=e.mode,t=di({mode:"visible",children:t.children},n),c=Ml(c,n,l,null),c.flags|=2,t.return=e,c.return=e,t.sibling=c,e.child=t,Bl(e,a.child,null,l),t=e.child,t.memoizedState=dc(l),t.childLanes=mc(a,u,l),e.memoizedState=fc,e=ln(null,t));else if(il(e),Wc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var p=u.dgst;u=p,t=Error(v(419)),t.stack="",t.digest=u,Zt({value:t,source:null,stack:null}),e=vc(a,e,l)}else if(Sa||ct(a,e,l,!1),u=(l&a.childLanes)!==0,Sa||u){if(u=oa,u!==null&&(t=zo(u,l),t!==0&&t!==s.retryLane))throw s.retryLane=t,_l(a,t),Ka(u,a,t),sc;Jc(c)||Si(),e=vc(a,e,l)}else Jc(c)?(e.flags|=192,e.child=a.child,e=null):(a=s.treeContext,ra=ve(c.nextSibling),Na=e,W=!0,Pe=null,me=!1,a!==null&&ys(e,a),e=pc(e,t.children),e.flags|=4096);return e}return n?(ul(),c=t.fallback,n=e.mode,s=a.child,p=s.sibling,t=De(s,{mode:"hidden",children:t.children}),t.subtreeFlags=s.subtreeFlags&65011712,p!==null?c=De(p,c):(c=Ml(c,n,l,null),c.flags|=2),c.return=e,t.return=e,t.sibling=c,e.child=t,ln(null,t),t=e.child,c=a.child.memoizedState,c===null?c=dc(l):(n=c.cachePool,n!==null?(s=ba._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Cs(),c={baseLanes:c.baseLanes|l,cachePool:n}),t.memoizedState=c,t.childLanes=mc(a,u,l),e.memoizedState=fc,ln(a.child,t)):(il(e),l=a.child,a=l.sibling,l=De(l,{mode:"visible",children:t.children}),l.return=e,l.sibling=null,a!==null&&(u=e.deletions,u===null?(e.deletions=[a],e.flags|=16):u.push(a)),e.child=l,e.memoizedState=null,l)}function pc(a,e){return e=di({mode:"visible",children:e},a.mode),e.return=a,a.child=e}function di(a,e){return a=ae(22,a,null,e),a.lanes=0,a}function vc(a,e,l){return Bl(e,a.child,null,l),a=pc(e,e.pendingProps.children),a.flags|=2,e.memoizedState=null,a}function Hr(a,e,l){a.lanes|=e;var t=a.alternate;t!==null&&(t.lanes|=e),_u(a.return,e,l)}function hc(a,e,l,t,n,i){var u=a.memoizedState;u===null?a.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:t,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=t,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Br(a,e,l){var t=e.pendingProps,n=t.revealOrder,i=t.tail;t=t.children;var u=ga.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,T(ga,u),_a(a,e,t,l),t=W?Lt:0,!c&&a!==null&&(a.flags&128)!==0)a:for(a=e.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Hr(a,l,e);else if(a.tag===19)Hr(a,l,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break a;for(;a.sibling===null;){if(a.return===null||a.return===e)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)a=l.alternate,a!==null&&ai(a)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),hc(e,!1,n,l,i,t);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(a=n.alternate,a!==null&&ai(a)===null){e.child=n;break}a=n.sibling,n.sibling=l,l=n,n=a}hc(e,!0,l,null,i,t);break;case"together":hc(e,!1,null,null,void 0,t);break;default:e.memoizedState=null}return e.child}function Ye(a,e,l){if(a!==null&&(e.dependencies=a.dependencies),sl|=e.lanes,(l&e.childLanes)===0)if(a!==null){if(ct(a,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(a!==null&&e.child!==a.child)throw Error(v(153));if(e.child!==null){for(a=e.child,l=De(a,a.pendingProps),e.child=l,l.return=e;a.sibling!==null;)a=a.sibling,l=l.sibling=De(a,a.pendingProps),l.return=e;l.sibling=null}return e.child}function gc(a,e){return(a.lanes&e)!==0?!0:(a=a.dependencies,!!(a!==null&&kn(a)))}function $1(a,e,l){switch(e.tag){case 3:wa(e,e.stateNode.containerInfo),el(e,ba,a.memoizedState.cache),ql();break;case 27:case 5:Nt(e);break;case 4:wa(e,e.stateNode.containerInfo);break;case 10:el(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Xu(e),null;break;case 13:var t=e.memoizedState;if(t!==null)return t.dehydrated!==null?(il(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Rr(a,e,l):(il(e),a=Ye(a,e,l),a!==null?a.sibling:null);il(e);break;case 19:var n=(a.flags&128)!==0;if(t=(l&e.childLanes)!==0,t||(ct(a,e,l,!1),t=(l&e.childLanes)!==0),n){if(t)return Br(a,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),T(ga,ga.current),t)break;return null;case 22:return e.lanes=0,_r(a,e,l,e.pendingProps);case 24:el(e,ba,a.memoizedState.cache)}return Ye(a,e,l)}function Yr(a,e,l){if(a!==null)if(a.memoizedProps!==e.pendingProps)Sa=!0;else{if(!gc(a,l)&&(e.flags&128)===0)return Sa=!1,$1(a,e,l);Sa=(a.flags&131072)!==0}else Sa=!1,W&&(e.flags&1048576)!==0&&gs(e,Lt,e.index);switch(e.lanes=0,e.tag){case 16:a:{var t=e.pendingProps;if(a=Rl(e.elementType),e.type=a,typeof a=="function")zu(a)?(t=Gl(a,t),e.tag=1,e=Ur(null,e,a,t,l)):(e.tag=0,e=rc(null,e,a,t,l));else{if(a!=null){var n=a.$$typeof;if(n===ue){e.tag=11,e=jr(null,e,a,t,l);break a}else if(n===J){e.tag=14,e=Nr(null,e,a,t,l);break a}}throw e=Oe(a)||a,Error(v(306,e,""))}}return e;case 0:return rc(a,e,e.type,e.pendingProps,l);case 1:return t=e.type,n=Gl(t,e.pendingProps),Ur(a,e,t,n,l);case 3:a:{if(wa(e,e.stateNode.containerInfo),a===null)throw Error(v(387));t=e.pendingProps;var i=e.memoizedState;n=i.element,Hu(a,e),$t(e,t,null,l);var u=e.memoizedState;if(t=u.cache,el(e,ba,t),t!==i.cache&&Mu(e,[ba],l,!0),Ft(),t=u.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=wr(a,e,t,l);break a}else if(t!==n){n=re(Error(v(424)),e),Zt(n),e=wr(a,e,t,l);break a}else{switch(a=e.stateNode.containerInfo,a.nodeType){case 9:a=a.body;break;default:a=a.nodeName==="HTML"?a.ownerDocument.body:a}for(ra=ve(a.firstChild),Na=e,W=!0,Pe=null,me=!0,l=_s(e,null,t,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(ql(),t===n){e=Ye(a,e,l);break a}_a(a,e,t,l)}e=e.child}return e;case 26:return fi(a,e),a===null?(l=$f(e.type,null,e.pendingProps,null))?e.memoizedState=l:W||(l=e.type,a=e.pendingProps,t=Ni(L.current).createElement(l),t[ja]=e,t[Qa]=a,Ma(t,l,a),Ea(t),e.stateNode=t):e.memoizedState=$f(e.type,a.memoizedProps,e.pendingProps,a.memoizedState),null;case 27:return Nt(e),a===null&&W&&(t=e.stateNode=Jf(e.type,e.pendingProps,L.current),Na=e,me=!0,n=ra,pl(e.type)?(Fc=n,ra=ve(t.firstChild)):ra=n),_a(a,e,e.pendingProps.children,l),fi(a,e),a===null&&(e.flags|=4194304),e.child;case 5:return a===null&&W&&((n=t=ra)&&(t=jm(t,e.type,e.pendingProps,me),t!==null?(e.stateNode=t,Na=e,ra=ve(t.firstChild),me=!1,n=!0):n=!1),n||al(e)),Nt(e),n=e.type,i=e.pendingProps,u=a!==null?a.memoizedProps:null,t=i.children,Vc(n,i)?t=null:u!==null&&Vc(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Zu(a,e,X1,null,null,l),yn._currentValue=n),fi(a,e),_a(a,e,t,l),e.child;case 6:return a===null&&W&&((a=l=ra)&&(l=Nm(l,e.pendingProps,me),l!==null?(e.stateNode=l,Na=e,ra=null,a=!0):a=!1),a||al(e)),null;case 13:return Rr(a,e,l);case 4:return wa(e,e.stateNode.containerInfo),t=e.pendingProps,a===null?e.child=Bl(e,null,t,l):_a(a,e,t,l),e.child;case 11:return jr(a,e,e.type,e.pendingProps,l);case 7:return _a(a,e,e.pendingProps,l),e.child;case 8:return _a(a,e,e.pendingProps.children,l),e.child;case 12:return _a(a,e,e.pendingProps.children,l),e.child;case 10:return t=e.pendingProps,el(e,e.type,t.value),_a(a,e,t.children,l),e.child;case 9:return n=e.type._context,t=e.pendingProps.children,Ul(e),n=Oa(n),t=t(n),e.flags|=1,_a(a,e,t,l),e.child;case 14:return Nr(a,e,e.type,e.pendingProps,l);case 15:return Or(a,e,e.type,e.pendingProps,l);case 19:return Br(a,e,l);case 31:return F1(a,e,l);case 22:return _r(a,e,l,e.pendingProps);case 24:return Ul(e),t=Oa(ba),a===null?(n=Uu(),n===null&&(n=oa,i=qu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:t,cache:n},Ru(e),el(e,ba,n)):((a.lanes&l)!==0&&(Hu(a,e),$t(e,null,null,l),Ft()),n=a.memoizedState,i=e.memoizedState,n.parent!==t?(n={parent:t,cache:t},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),el(e,ba,t)):(t=i.cache,el(e,ba,t),t!==n.cache&&Mu(e,[ba],l,!0))),_a(a,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(v(156,e.tag))}function Ge(a){a.flags|=4}function yc(a,e,l,t,n){if((e=(a.mode&32)!==0)&&(e=!1),e){if(a.flags|=16777216,(n&335544128)===n)if(a.stateNode.complete)a.flags|=8192;else if(mf())a.flags|=8192;else throw Hl=Fn,wu}else a.flags&=-16777217}function Gr(a,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!ld(e))if(mf())a.flags|=8192;else throw Hl=Fn,wu}function mi(a,e){e!==null&&(a.flags|=4),a.flags&16384&&(e=a.tag!==22?bo():536870912,a.lanes|=e,bt|=e)}function tn(a,e){if(!W)switch(a.tailMode){case"hidden":e=a.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?a.tail=null:l.sibling=null;break;case"collapsed":l=a.tail;for(var t=null;l!==null;)l.alternate!==null&&(t=l),l=l.sibling;t===null?e||a.tail===null?a.tail=null:a.tail.sibling=null:t.sibling=null}}function fa(a){var e=a.alternate!==null&&a.alternate.child===a.child,l=0,t=0;if(e)for(var n=a.child;n!==null;)l|=n.lanes|n.childLanes,t|=n.subtreeFlags&65011712,t|=n.flags&65011712,n.return=a,n=n.sibling;else for(n=a.child;n!==null;)l|=n.lanes|n.childLanes,t|=n.subtreeFlags,t|=n.flags,n.return=a,n=n.sibling;return a.subtreeFlags|=t,a.childLanes=l,e}function I1(a,e,l){var t=e.pendingProps;switch(Tu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fa(e),null;case 1:return fa(e),null;case 3:return l=e.stateNode,t=null,a!==null&&(t=a.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Re(ba),ha(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(a===null||a.child===null)&&(ut(e)?Ge(e):a===null||a.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Nu())),fa(e),null;case 26:var n=e.type,i=e.memoizedState;return a===null?(Ge(e),i!==null?(fa(e),Gr(e,i)):(fa(e),yc(e,n,null,t,l))):i?i!==a.memoizedState?(Ge(e),fa(e),Gr(e,i)):(fa(e),e.flags&=-16777217):(a=a.memoizedProps,a!==t&&Ge(e),fa(e),yc(e,n,a,t,l)),null;case 27:if(Cn(e),l=L.current,n=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==t&&Ge(e);else{if(!t){if(e.stateNode===null)throw Error(v(166));return fa(e),null}a=N.current,ut(e)?bs(e):(a=Jf(n,t,l),e.stateNode=a,Ge(e))}return fa(e),null;case 5:if(Cn(e),n=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==t&&Ge(e);else{if(!t){if(e.stateNode===null)throw Error(v(166));return fa(e),null}if(i=N.current,ut(e))bs(e);else{var u=Ni(L.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof t.is=="string"?u.createElement("select",{is:t.is}):u.createElement("select"),t.multiple?i.multiple=!0:t.size&&(i.size=t.size);break;default:i=typeof t.is=="string"?u.createElement(n,{is:t.is}):u.createElement(n)}}i[ja]=e,i[Qa]=t;a:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break a;for(;u.sibling===null;){if(u.return===null||u.return===e)break a;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;a:switch(Ma(i,n,t),n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break a;case"img":t=!0;break a;default:t=!1}t&&Ge(e)}}return fa(e),yc(e,e.type,a===null?null:a.memoizedProps,e.pendingProps,l),null;case 6:if(a&&e.stateNode!=null)a.memoizedProps!==t&&Ge(e);else{if(typeof t!="string"&&e.stateNode===null)throw Error(v(166));if(a=L.current,ut(e)){if(a=e.stateNode,l=e.memoizedProps,t=null,n=Na,n!==null)switch(n.tag){case 27:case 5:t=n.memoizedProps}a[ja]=e,a=!!(a.nodeValue===l||t!==null&&t.suppressHydrationWarning===!0||Hf(a.nodeValue,l)),a||al(e,!0)}else a=Ni(a).createTextNode(t),a[ja]=e,e.stateNode=a}return fa(e),null;case 31:if(l=e.memoizedState,a===null||a.memoizedState!==null){if(t=ut(e),l!==null){if(a===null){if(!t)throw Error(v(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(v(557));a[ja]=e}else ql(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;fa(e),a=!1}else l=Nu(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=l),a=!0;if(!a)return e.flags&256?(le(e),e):(le(e),null);if((e.flags&128)!==0)throw Error(v(558))}return fa(e),null;case 13:if(t=e.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(n=ut(e),t!==null&&t.dehydrated!==null){if(a===null){if(!n)throw Error(v(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(v(317));n[ja]=e}else ql(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;fa(e),n=!1}else n=Nu(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(le(e),e):(le(e),null)}return le(e),(e.flags&128)!==0?(e.lanes=l,e):(l=t!==null,a=a!==null&&a.memoizedState!==null,l&&(t=e.child,n=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(n=t.alternate.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048)),l!==a&&l&&(e.child.flags|=8192),mi(e,e.updateQueue),fa(e),null);case 4:return ha(),a===null&&Gc(e.stateNode.containerInfo),fa(e),null;case 10:return Re(e.type),fa(e),null;case 19:if(z(ga),t=e.memoizedState,t===null)return fa(e),null;if(n=(e.flags&128)!==0,i=t.rendering,i===null)if(n)tn(t,!1);else{if(va!==0||a!==null&&(a.flags&128)!==0)for(a=e.child;a!==null;){if(i=ai(a),i!==null){for(e.flags|=128,tn(t,!1),a=i.updateQueue,e.updateQueue=a,mi(e,a),e.subtreeFlags=0,a=l,l=e.child;l!==null;)ps(l,a),l=l.sibling;return T(ga,ga.current&1|2),W&&Ue(e,t.treeForkCount),e.child}a=a.sibling}t.tail!==null&&Fa()>yi&&(e.flags|=128,n=!0,tn(t,!1),e.lanes=4194304)}else{if(!n)if(a=ai(i),a!==null){if(e.flags|=128,n=!0,a=a.updateQueue,e.updateQueue=a,mi(e,a),tn(t,!0),t.tail===null&&t.tailMode==="hidden"&&!i.alternate&&!W)return fa(e),null}else 2*Fa()-t.renderingStartTime>yi&&l!==536870912&&(e.flags|=128,n=!0,tn(t,!1),e.lanes=4194304);t.isBackwards?(i.sibling=e.child,e.child=i):(a=t.last,a!==null?a.sibling=i:e.child=i,t.last=i)}return t.tail!==null?(a=t.tail,t.rendering=a,t.tail=a.sibling,t.renderingStartTime=Fa(),a.sibling=null,l=ga.current,T(ga,n?l&1|2:l&1),W&&Ue(e,t.treeForkCount),a):(fa(e),null);case 22:case 23:return le(e),Qu(),t=e.memoizedState!==null,a!==null?a.memoizedState!==null!==t&&(e.flags|=8192):t&&(e.flags|=8192),t?(l&536870912)!==0&&(e.flags&128)===0&&(fa(e),e.subtreeFlags&6&&(e.flags|=8192)):fa(e),l=e.updateQueue,l!==null&&mi(e,l.retryQueue),l=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(e.flags|=2048),a!==null&&z(wl),null;case 24:return l=null,a!==null&&(l=a.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Re(ba),fa(e),null;case 25:return null;case 30:return null}throw Error(v(156,e.tag))}function P1(a,e){switch(Tu(e),e.tag){case 1:return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 3:return Re(ba),ha(),a=e.flags,(a&65536)!==0&&(a&128)===0?(e.flags=a&-65537|128,e):null;case 26:case 27:case 5:return Cn(e),null;case 31:if(e.memoizedState!==null){if(le(e),e.alternate===null)throw Error(v(340));ql()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 13:if(le(e),a=e.memoizedState,a!==null&&a.dehydrated!==null){if(e.alternate===null)throw Error(v(340));ql()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 19:return z(ga),null;case 4:return ha(),null;case 10:return Re(e.type),null;case 22:case 23:return le(e),Qu(),a!==null&&z(wl),a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 24:return Re(ba),null;case 25:return null;default:return null}}function Qr(a,e){switch(Tu(e),e.tag){case 3:Re(ba),ha();break;case 26:case 27:case 5:Cn(e);break;case 4:ha();break;case 31:e.memoizedState!==null&&le(e);break;case 13:le(e);break;case 19:z(ga);break;case 10:Re(e.type);break;case 22:case 23:le(e),Qu(),a!==null&&z(wl);break;case 24:Re(ba)}}function nn(a,e){try{var l=e.updateQueue,t=l!==null?l.lastEffect:null;if(t!==null){var n=t.next;l=n;do{if((l.tag&a)===a){t=void 0;var i=l.create,u=l.inst;t=i(),u.destroy=t}l=l.next}while(l!==n)}}catch(c){la(e,e.return,c)}}function cl(a,e,l){try{var t=e.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var i=n.next;t=i;do{if((t.tag&a)===a){var u=t.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var s=l,p=c;try{p()}catch(y){la(n,s,y)}}}t=t.next}while(t!==i)}}catch(y){la(e,e.return,y)}}function Xr(a){var e=a.updateQueue;if(e!==null){var l=a.stateNode;try{qs(e,l)}catch(t){la(a,a.return,t)}}}function Lr(a,e,l){l.props=Gl(a.type,a.memoizedProps),l.state=a.memoizedState;try{l.componentWillUnmount()}catch(t){la(a,e,t)}}function un(a,e){try{var l=a.ref;if(l!==null){switch(a.tag){case 26:case 27:case 5:var t=a.stateNode;break;case 30:t=a.stateNode;break;default:t=a.stateNode}typeof l=="function"?a.refCleanup=l(t):l.current=t}}catch(n){la(a,e,n)}}function Te(a,e){var l=a.ref,t=a.refCleanup;if(l!==null)if(typeof t=="function")try{t()}catch(n){la(a,e,n)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){la(a,e,n)}else l.current=null}function Zr(a){var e=a.type,l=a.memoizedProps,t=a.stateNode;try{a:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break a;case"img":l.src?t.src=l.src:l.srcSet&&(t.srcset=l.srcSet)}}catch(n){la(a,a.return,n)}}function bc(a,e,l){try{var t=a.stateNode;Sm(t,a.type,l,e),t[Qa]=e}catch(n){la(a,a.return,n)}}function Vr(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&pl(a.type)||a.tag===4}function xc(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||Vr(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&pl(a.type)||a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Sc(a,e,l){var t=a.tag;if(t===5||t===6)a=a.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(a,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(a),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Me));else if(t!==4&&(t===27&&pl(a.type)&&(l=a.stateNode,e=null),a=a.child,a!==null))for(Sc(a,e,l),a=a.sibling;a!==null;)Sc(a,e,l),a=a.sibling}function pi(a,e,l){var t=a.tag;if(t===5||t===6)a=a.stateNode,e?l.insertBefore(a,e):l.appendChild(a);else if(t!==4&&(t===27&&pl(a.type)&&(l=a.stateNode),a=a.child,a!==null))for(pi(a,e,l),a=a.sibling;a!==null;)pi(a,e,l),a=a.sibling}function kr(a){var e=a.stateNode,l=a.memoizedProps;try{for(var t=a.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ma(e,t,l),e[ja]=a,e[Qa]=l}catch(i){la(a,a.return,i)}}var Qe=!1,za=!1,zc=!1,Kr=typeof WeakSet=="function"?WeakSet:Set,Ta=null;function am(a,e){if(a=a.containerInfo,Lc=wi,a=is(a),vu(a)){if("selectionStart"in a)var l={start:a.selectionStart,end:a.selectionEnd};else a:{l=(l=a.ownerDocument)&&l.defaultView||window;var t=l.getSelection&&l.getSelection();if(t&&t.rangeCount!==0){l=t.anchorNode;var n=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break a}var u=0,c=-1,s=-1,p=0,y=0,S=a,h=null;e:for(;;){for(var g;S!==l||n!==0&&S.nodeType!==3||(c=u+n),S!==i||t!==0&&S.nodeType!==3||(s=u+t),S.nodeType===3&&(u+=S.nodeValue.length),(g=S.firstChild)!==null;)h=S,S=g;for(;;){if(S===a)break e;if(h===l&&++p===n&&(c=u),h===i&&++y===t&&(s=u),(g=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=g}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zc={focusedElem:a,selectionRange:l},wi=!1,Ta=e;Ta!==null;)if(e=Ta,a=e.child,(e.subtreeFlags&1028)!==0&&a!==null)a.return=e,Ta=a;else for(;Ta!==null;){switch(e=Ta,i=e.alternate,a=e.flags,e.tag){case 0:if((a&4)!==0&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(l=0;l<a.length;l++)n=a[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){a=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,t=l.stateNode;try{var j=Gl(l.type,n);a=t.getSnapshotBeforeUpdate(j,i),t.__reactInternalSnapshotBeforeUpdate=a}catch(q){la(l,l.return,q)}}break;case 3:if((a&1024)!==0){if(a=e.stateNode.containerInfo,l=a.nodeType,l===9)Kc(a);else if(l===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Kc(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(v(163))}if(a=e.sibling,a!==null){a.return=e.return,Ta=a;break}Ta=e.return}}function Jr(a,e,l){var t=l.flags;switch(l.tag){case 0:case 11:case 15:Le(a,l),t&4&&nn(5,l);break;case 1:if(Le(a,l),t&4)if(a=l.stateNode,e===null)try{a.componentDidMount()}catch(u){la(l,l.return,u)}else{var n=Gl(l.type,e.memoizedProps);e=e.memoizedState;try{a.componentDidUpdate(n,e,a.__reactInternalSnapshotBeforeUpdate)}catch(u){la(l,l.return,u)}}t&64&&Xr(l),t&512&&un(l,l.return);break;case 3:if(Le(a,l),t&64&&(a=l.updateQueue,a!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{qs(a,e)}catch(u){la(l,l.return,u)}}break;case 27:e===null&&t&4&&kr(l);case 26:case 5:Le(a,l),e===null&&t&4&&Zr(l),t&512&&un(l,l.return);break;case 12:Le(a,l);break;case 31:Le(a,l),t&4&&$r(a,l);break;case 13:Le(a,l),t&4&&Ir(a,l),t&64&&(a=l.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(l=sm.bind(null,l),Om(a,l))));break;case 22:if(t=l.memoizedState!==null||Qe,!t){e=e!==null&&e.memoizedState!==null||za,n=Qe;var i=za;Qe=t,(za=e)&&!i?Ze(a,l,(l.subtreeFlags&8772)!==0):Le(a,l),Qe=n,za=i}break;case 30:break;default:Le(a,l)}}function Wr(a){var e=a.alternate;e!==null&&(a.alternate=null,Wr(e)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(e=a.stateNode,e!==null&&Ii(e)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var ma=null,La=!1;function Xe(a,e,l){for(l=l.child;l!==null;)Fr(a,e,l),l=l.sibling}function Fr(a,e,l){if($a&&typeof $a.onCommitFiberUnmount=="function")try{$a.onCommitFiberUnmount(Ot,l)}catch{}switch(l.tag){case 26:za||Te(l,e),Xe(a,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:za||Te(l,e);var t=ma,n=La;pl(l.type)&&(ma=l.stateNode,La=!1),Xe(a,e,l),vn(l.stateNode),ma=t,La=n;break;case 5:za||Te(l,e);case 6:if(t=ma,n=La,ma=null,Xe(a,e,l),ma=t,La=n,ma!==null)if(La)try{(ma.nodeType===9?ma.body:ma.nodeName==="HTML"?ma.ownerDocument.body:ma).removeChild(l.stateNode)}catch(i){la(l,e,i)}else try{ma.removeChild(l.stateNode)}catch(i){la(l,e,i)}break;case 18:ma!==null&&(La?(a=ma,Lf(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,l.stateNode),jt(a)):Lf(ma,l.stateNode));break;case 4:t=ma,n=La,ma=l.stateNode.containerInfo,La=!0,Xe(a,e,l),ma=t,La=n;break;case 0:case 11:case 14:case 15:cl(2,l,e),za||cl(4,l,e),Xe(a,e,l);break;case 1:za||(Te(l,e),t=l.stateNode,typeof t.componentWillUnmount=="function"&&Lr(l,e,t)),Xe(a,e,l);break;case 21:Xe(a,e,l);break;case 22:za=(t=za)||l.memoizedState!==null,Xe(a,e,l),za=t;break;default:Xe(a,e,l)}}function $r(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null))){a=a.dehydrated;try{jt(a)}catch(l){la(e,e.return,l)}}}function Ir(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{jt(a)}catch(l){la(e,e.return,l)}}function em(a){switch(a.tag){case 31:case 13:case 19:var e=a.stateNode;return e===null&&(e=a.stateNode=new Kr),e;case 22:return a=a.stateNode,e=a._retryCache,e===null&&(e=a._retryCache=new Kr),e;default:throw Error(v(435,a.tag))}}function vi(a,e){var l=em(a);e.forEach(function(t){if(!l.has(t)){l.add(t);var n=rm.bind(null,a,t);t.then(n,n)}})}function Za(a,e){var l=e.deletions;if(l!==null)for(var t=0;t<l.length;t++){var n=l[t],i=a,u=e,c=u;a:for(;c!==null;){switch(c.tag){case 27:if(pl(c.type)){ma=c.stateNode,La=!1;break a}break;case 5:ma=c.stateNode,La=!1;break a;case 3:case 4:ma=c.stateNode.containerInfo,La=!0;break a}c=c.return}if(ma===null)throw Error(v(160));Fr(i,u,n),ma=null,La=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Pr(e,a),e=e.sibling}var be=null;function Pr(a,e){var l=a.alternate,t=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Za(e,a),Va(a),t&4&&(cl(3,a,a.return),nn(3,a),cl(5,a,a.return));break;case 1:Za(e,a),Va(a),t&512&&(za||l===null||Te(l,l.return)),t&64&&Qe&&(a=a.updateQueue,a!==null&&(t=a.callbacks,t!==null&&(l=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=l===null?t:l.concat(t))));break;case 26:var n=be;if(Za(e,a),Va(a),t&512&&(za||l===null||Te(l,l.return)),t&4){var i=l!==null?l.memoizedState:null;if(t=a.memoizedState,l===null)if(t===null)if(a.stateNode===null){a:{t=a.type,l=a.memoizedProps,n=n.ownerDocument||n;e:switch(t){case"title":i=n.getElementsByTagName("title")[0],(!i||i[qt]||i[ja]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(t),n.head.insertBefore(i,n.querySelector("head > title"))),Ma(i,t,l),i[ja]=a,Ea(i),t=i;break a;case"link":var u=ad("link","href",n).get(t+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break e}}i=n.createElement(t),Ma(i,t,l),n.head.appendChild(i);break;case"meta":if(u=ad("meta","content",n).get(t+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break e}}i=n.createElement(t),Ma(i,t,l),n.head.appendChild(i);break;default:throw Error(v(468,t))}i[ja]=a,Ea(i),t=i}a.stateNode=t}else ed(n,a.type,a.stateNode);else a.stateNode=Pf(n,t,a.memoizedProps);else i!==t?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,t===null?ed(n,a.type,a.stateNode):Pf(n,t,a.memoizedProps)):t===null&&a.stateNode!==null&&bc(a,a.memoizedProps,l.memoizedProps)}break;case 27:Za(e,a),Va(a),t&512&&(za||l===null||Te(l,l.return)),l!==null&&t&4&&bc(a,a.memoizedProps,l.memoizedProps);break;case 5:if(Za(e,a),Va(a),t&512&&(za||l===null||Te(l,l.return)),a.flags&32){n=a.stateNode;try{Fl(n,"")}catch(j){la(a,a.return,j)}}t&4&&a.stateNode!=null&&(n=a.memoizedProps,bc(a,n,l!==null?l.memoizedProps:n)),t&1024&&(zc=!0);break;case 6:if(Za(e,a),Va(a),t&4){if(a.stateNode===null)throw Error(v(162));t=a.memoizedProps,l=a.stateNode;try{l.nodeValue=t}catch(j){la(a,a.return,j)}}break;case 3:if(Mi=null,n=be,be=Oi(e.containerInfo),Za(e,a),be=n,Va(a),t&4&&l!==null&&l.memoizedState.isDehydrated)try{jt(e.containerInfo)}catch(j){la(a,a.return,j)}zc&&(zc=!1,af(a));break;case 4:t=be,be=Oi(a.stateNode.containerInfo),Za(e,a),Va(a),be=t;break;case 12:Za(e,a),Va(a);break;case 31:Za(e,a),Va(a),t&4&&(t=a.updateQueue,t!==null&&(a.updateQueue=null,vi(a,t)));break;case 13:Za(e,a),Va(a),a.child.flags&8192&&a.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(gi=Fa()),t&4&&(t=a.updateQueue,t!==null&&(a.updateQueue=null,vi(a,t)));break;case 22:n=a.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,p=Qe,y=za;if(Qe=p||n,za=y||s,Za(e,a),za=y,Qe=p,Va(a),t&8192)a:for(e=a.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||s||Qe||za||Ql(a)),l=null,e=a;;){if(e.tag===5||e.tag===26){if(l===null){s=l=e;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var S=s.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(j){la(s,s.return,j)}}}else if(e.tag===6){if(l===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(j){la(s,s.return,j)}}}else if(e.tag===18){if(l===null){s=e;try{var g=s.stateNode;n?Zf(g,!0):Zf(s.stateNode,!1)}catch(j){la(s,s.return,j)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===a)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break a;for(;e.sibling===null;){if(e.return===null||e.return===a)break a;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}t&4&&(t=a.updateQueue,t!==null&&(l=t.retryQueue,l!==null&&(t.retryQueue=null,vi(a,l))));break;case 19:Za(e,a),Va(a),t&4&&(t=a.updateQueue,t!==null&&(a.updateQueue=null,vi(a,t)));break;case 30:break;case 21:break;default:Za(e,a),Va(a)}}function Va(a){var e=a.flags;if(e&2){try{for(var l,t=a.return;t!==null;){if(Vr(t)){l=t;break}t=t.return}if(l==null)throw Error(v(160));switch(l.tag){case 27:var n=l.stateNode,i=xc(a);pi(a,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Fl(u,""),l.flags&=-33);var c=xc(a);pi(a,c,u);break;case 3:case 4:var s=l.stateNode.containerInfo,p=xc(a);Sc(a,p,s);break;default:throw Error(v(161))}}catch(y){la(a,a.return,y)}a.flags&=-3}e&4096&&(a.flags&=-4097)}function af(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var e=a;af(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),a=a.sibling}}function Le(a,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Jr(a,e.alternate,e),e=e.sibling}function Ql(a){for(a=a.child;a!==null;){var e=a;switch(e.tag){case 0:case 11:case 14:case 15:cl(4,e,e.return),Ql(e);break;case 1:Te(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Lr(e,e.return,l),Ql(e);break;case 27:vn(e.stateNode);case 26:case 5:Te(e,e.return),Ql(e);break;case 22:e.memoizedState===null&&Ql(e);break;case 30:Ql(e);break;default:Ql(e)}a=a.sibling}}function Ze(a,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var t=e.alternate,n=a,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ze(n,i,l),nn(4,i);break;case 1:if(Ze(n,i,l),t=i,n=t.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){la(t,t.return,p)}if(t=i,n=t.updateQueue,n!==null){var c=t.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Ms(s[n],c)}catch(p){la(t,t.return,p)}}l&&u&64&&Xr(i),un(i,i.return);break;case 27:kr(i);case 26:case 5:Ze(n,i,l),l&&t===null&&u&4&&Zr(i),un(i,i.return);break;case 12:Ze(n,i,l);break;case 31:Ze(n,i,l),l&&u&4&&$r(n,i);break;case 13:Ze(n,i,l),l&&u&4&&Ir(n,i);break;case 22:i.memoizedState===null&&Ze(n,i,l),un(i,i.return);break;case 30:break;default:Ze(n,i,l)}e=e.sibling}}function Ac(a,e){var l=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(a!=null&&a.refCount++,l!=null&&Vt(l))}function Cc(a,e){a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&Vt(a))}function xe(a,e,l,t){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ef(a,e,l,t),e=e.sibling}function ef(a,e,l,t){var n=e.flags;switch(e.tag){case 0:case 11:case 15:xe(a,e,l,t),n&2048&&nn(9,e);break;case 1:xe(a,e,l,t);break;case 3:xe(a,e,l,t),n&2048&&(a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&Vt(a)));break;case 12:if(n&2048){xe(a,e,l,t),a=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(s){la(e,e.return,s)}}else xe(a,e,l,t);break;case 31:xe(a,e,l,t);break;case 13:xe(a,e,l,t);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?xe(a,e,l,t):cn(a,e):i._visibility&2?xe(a,e,l,t):(i._visibility|=2,ht(a,e,l,t,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Ac(u,e);break;case 24:xe(a,e,l,t),n&2048&&Cc(e.alternate,e);break;default:xe(a,e,l,t)}}function ht(a,e,l,t,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=a,u=e,c=l,s=t,p=u.flags;switch(u.tag){case 0:case 11:case 15:ht(i,u,c,s,n),nn(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?ht(i,u,c,s,n):cn(i,u):(y._visibility|=2,ht(i,u,c,s,n)),n&&p&2048&&Ac(u.alternate,u);break;case 24:ht(i,u,c,s,n),n&&p&2048&&Cc(u.alternate,u);break;default:ht(i,u,c,s,n)}e=e.sibling}}function cn(a,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=a,t=e,n=t.flags;switch(t.tag){case 22:cn(l,t),n&2048&&Ac(t.alternate,t);break;case 24:cn(l,t),n&2048&&Cc(t.alternate,t);break;default:cn(l,t)}e=e.sibling}}var on=8192;function gt(a,e,l){if(a.subtreeFlags&on)for(a=a.child;a!==null;)lf(a,e,l),a=a.sibling}function lf(a,e,l){switch(a.tag){case 26:gt(a,e,l),a.flags&on&&a.memoizedState!==null&&Qm(l,be,a.memoizedState,a.memoizedProps);break;case 5:gt(a,e,l);break;case 3:case 4:var t=be;be=Oi(a.stateNode.containerInfo),gt(a,e,l),be=t;break;case 22:a.memoizedState===null&&(t=a.alternate,t!==null&&t.memoizedState!==null?(t=on,on=16777216,gt(a,e,l),on=t):gt(a,e,l));break;default:gt(a,e,l)}}function tf(a){var e=a.alternate;if(e!==null&&(a=e.child,a!==null)){e.child=null;do e=a.sibling,a.sibling=null,a=e;while(a!==null)}}function sn(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var t=e[l];Ta=t,uf(t,a)}tf(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)nf(a),a=a.sibling}function nf(a){switch(a.tag){case 0:case 11:case 15:sn(a),a.flags&2048&&cl(9,a,a.return);break;case 3:sn(a);break;case 12:sn(a);break;case 22:var e=a.stateNode;a.memoizedState!==null&&e._visibility&2&&(a.return===null||a.return.tag!==13)?(e._visibility&=-3,hi(a)):sn(a);break;default:sn(a)}}function hi(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var t=e[l];Ta=t,uf(t,a)}tf(a)}for(a=a.child;a!==null;){switch(e=a,e.tag){case 0:case 11:case 15:cl(8,e,e.return),hi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,hi(e));break;default:hi(e)}a=a.sibling}}function uf(a,e){for(;Ta!==null;){var l=Ta;switch(l.tag){case 0:case 11:case 15:cl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var t=l.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:Vt(l.memoizedState.cache)}if(t=l.child,t!==null)t.return=l,Ta=t;else a:for(l=a;Ta!==null;){t=Ta;var n=t.sibling,i=t.return;if(Wr(t),t===l){Ta=null;break a}if(n!==null){n.return=i,Ta=n;break a}Ta=i}}}var lm={getCacheForType:function(a){var e=Oa(ba),l=e.data.get(a);return l===void 0&&(l=a(),e.data.set(a,l)),l},cacheSignal:function(){return Oa(ba).controller.signal}},tm=typeof WeakMap=="function"?WeakMap:Map,P=0,oa=null,Z=null,k=0,ea=0,te=null,ol=!1,yt=!1,Ec=!1,Ve=0,va=0,sl=0,Xl=0,Tc=0,ne=0,bt=0,rn=null,ka=null,jc=!1,gi=0,cf=0,yi=1/0,bi=null,rl=null,Aa=0,fl=null,xt=null,ke=0,Nc=0,Oc=null,of=null,fn=0,_c=null;function ie(){return(P&2)!==0&&k!==0?k&-k:b.T!==null?Rc():Ao()}function sf(){if(ne===0)if((k&536870912)===0||W){var a=jn;jn<<=1,(jn&3932160)===0&&(jn=262144),ne=a}else ne=536870912;return a=ee.current,a!==null&&(a.flags|=32),ne}function Ka(a,e,l){(a===oa&&(ea===2||ea===9)||a.cancelPendingCommit!==null)&&(St(a,0),dl(a,k,ne,!1)),Mt(a,l),((P&2)===0||a!==oa)&&(a===oa&&((P&2)===0&&(Xl|=l),va===4&&dl(a,k,ne,!1)),je(a))}function rf(a,e,l){if((P&6)!==0)throw Error(v(327));var t=!l&&(e&127)===0&&(e&a.expiredLanes)===0||_t(a,e),n=t?um(a,e):qc(a,e,!0),i=t;do{if(n===0){yt&&!t&&dl(a,e,0,!1);break}else{if(l=a.current.alternate,i&&!nm(l)){n=qc(a,e,!1),i=!1;continue}if(n===2){if(i=e,a.errorRecoveryDisabledLanes&i)var u=0;else u=a.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;a:{var c=a;n=rn;var s=c.current.memoizedState.isDehydrated;if(s&&(St(c,u).flags|=256),u=qc(c,u,!1),u!==2){if(Ec&&!s){c.errorRecoveryDisabledLanes|=i,Xl|=i,n=4;break a}i=ka,ka=n,i!==null&&(ka===null?ka=i:ka.push.apply(ka,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){St(a,0),dl(a,e,0,!0);break}a:{switch(t=a,i=n,i){case 0:case 1:throw Error(v(345));case 4:if((e&4194048)!==e)break;case 6:dl(t,e,ne,!ol);break a;case 2:ka=null;break;case 3:case 5:break;default:throw Error(v(329))}if((e&62914560)===e&&(n=gi+300-Fa(),10<n)){if(dl(t,e,ne,!ol),On(t,0,!0)!==0)break a;ke=e,t.timeoutHandle=Qf(ff.bind(null,t,l,ka,bi,jc,e,ne,Xl,bt,ol,i,"Throttled",-0,0),n);break a}ff(t,l,ka,bi,jc,e,ne,Xl,bt,ol,i,null,-0,0)}}break}while(!0);je(a)}function ff(a,e,l,t,n,i,u,c,s,p,y,S,h,g){if(a.timeoutHandle=-1,S=e.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Me},lf(e,i,S);var j=(i&62914560)===i?gi-Fa():(i&4194048)===i?cf-Fa():0;if(j=Xm(S,j),j!==null){ke=i,a.cancelPendingCommit=j(bf.bind(null,a,e,i,l,t,n,u,c,s,y,S,null,h,g)),dl(a,i,u,!p);return}}bf(a,e,i,l,t,n,u,c,s)}function nm(a){for(var e=a;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var t=0;t<l.length;t++){var n=l[t],i=n.getSnapshot;n=n.value;try{if(!Pa(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dl(a,e,l,t){e&=~Tc,e&=~Xl,a.suspendedLanes|=e,a.pingedLanes&=~e,t&&(a.warmLanes|=e),t=a.expirationTimes;for(var n=e;0<n;){var i=31-Ia(n),u=1<<i;t[i]=-1,n&=~u}l!==0&&xo(a,l,e)}function xi(){return(P&6)===0?(dn(0),!1):!0}function Mc(){if(Z!==null){if(ea===0)var a=Z.return;else a=Z,we=Dl=null,Ku(a),ft=null,Kt=0,a=Z;for(;a!==null;)Qr(a.alternate,a),a=a.return;Z=null}}function St(a,e){var l=a.timeoutHandle;l!==-1&&(a.timeoutHandle=-1,Cm(l)),l=a.cancelPendingCommit,l!==null&&(a.cancelPendingCommit=null,l()),ke=0,Mc(),oa=a,Z=l=De(a.current,null),k=e,ea=0,te=null,ol=!1,yt=_t(a,e),Ec=!1,bt=ne=Tc=Xl=sl=va=0,ka=rn=null,jc=!1,(e&8)!==0&&(e|=e&32);var t=a.entangledLanes;if(t!==0)for(a=a.entanglements,t&=e;0<t;){var n=31-Ia(t),i=1<<n;e|=a[n],t&=~i}return Ve=e,Qn(),l}function df(a,e){Y=null,b.H=en,e===rt||e===Wn?(e=js(),ea=3):e===wu?(e=js(),ea=4):ea=e===sc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,te=e,Z===null&&(va=1,si(a,re(e,a.current)))}function mf(){var a=ee.current;return a===null?!0:(k&4194048)===k?pe===null:(k&62914560)===k||(k&536870912)!==0?a===pe:!1}function pf(){var a=b.H;return b.H=en,a===null?en:a}function vf(){var a=b.A;return b.A=lm,a}function Si(){va=4,ol||(k&4194048)!==k&&ee.current!==null||(yt=!0),(sl&134217727)===0&&(Xl&134217727)===0||oa===null||dl(oa,k,ne,!1)}function qc(a,e,l){var t=P;P|=2;var n=pf(),i=vf();(oa!==a||k!==e)&&(bi=null,St(a,e)),e=!1;var u=va;a:do try{if(ea!==0&&Z!==null){var c=Z,s=te;switch(ea){case 8:Mc(),u=6;break a;case 3:case 2:case 9:case 6:ee.current===null&&(e=!0);var p=ea;if(ea=0,te=null,zt(a,c,s,p),l&&yt){u=0;break a}break;default:p=ea,ea=0,te=null,zt(a,c,s,p)}}im(),u=va;break}catch(y){df(a,y)}while(!0);return e&&a.shellSuspendCounter++,we=Dl=null,P=t,b.H=n,b.A=i,Z===null&&(oa=null,k=0,Qn()),u}function im(){for(;Z!==null;)hf(Z)}function um(a,e){var l=P;P|=2;var t=pf(),n=vf();oa!==a||k!==e?(bi=null,yi=Fa()+500,St(a,e)):yt=_t(a,e);a:do try{if(ea!==0&&Z!==null){e=Z;var i=te;e:switch(ea){case 1:ea=0,te=null,zt(a,e,i,1);break;case 2:case 9:if(Es(i)){ea=0,te=null,gf(e);break}e=function(){ea!==2&&ea!==9||oa!==a||(ea=7),je(a)},i.then(e,e);break a;case 3:ea=7;break a;case 4:ea=5;break a;case 7:Es(i)?(ea=0,te=null,gf(e)):(ea=0,te=null,zt(a,e,i,7));break;case 5:var u=null;switch(Z.tag){case 26:u=Z.memoizedState;case 5:case 27:var c=Z;if(u?ld(u):c.stateNode.complete){ea=0,te=null;var s=c.sibling;if(s!==null)Z=s;else{var p=c.return;p!==null?(Z=p,zi(p)):Z=null}break e}}ea=0,te=null,zt(a,e,i,5);break;case 6:ea=0,te=null,zt(a,e,i,6);break;case 8:Mc(),va=6;break a;default:throw Error(v(462))}}cm();break}catch(y){df(a,y)}while(!0);return we=Dl=null,b.H=t,b.A=n,P=l,Z!==null?0:(oa=null,k=0,Qn(),va)}function cm(){for(;Z!==null&&!_d();)hf(Z)}function hf(a){var e=Yr(a.alternate,a,Ve);a.memoizedProps=a.pendingProps,e===null?zi(a):Z=e}function gf(a){var e=a,l=e.alternate;switch(e.tag){case 15:case 0:e=Dr(l,e,e.pendingProps,e.type,void 0,k);break;case 11:e=Dr(l,e,e.pendingProps,e.type.render,e.ref,k);break;case 5:Ku(e);default:Qr(l,e),e=Z=ps(e,Ve),e=Yr(l,e,Ve)}a.memoizedProps=a.pendingProps,e===null?zi(a):Z=e}function zt(a,e,l,t){we=Dl=null,Ku(e),ft=null,Kt=0;var n=e.return;try{if(W1(a,n,e,l,k)){va=1,si(a,re(l,a.current)),Z=null;return}}catch(i){if(n!==null)throw Z=n,i;va=1,si(a,re(l,a.current)),Z=null;return}e.flags&32768?(W||t===1?a=!0:yt||(k&536870912)!==0?a=!1:(ol=a=!0,(t===2||t===9||t===3||t===6)&&(t=ee.current,t!==null&&t.tag===13&&(t.flags|=16384))),yf(e,a)):zi(e)}function zi(a){var e=a;do{if((e.flags&32768)!==0){yf(e,ol);return}a=e.return;var l=I1(e.alternate,e,Ve);if(l!==null){Z=l;return}if(e=e.sibling,e!==null){Z=e;return}Z=e=a}while(e!==null);va===0&&(va=5)}function yf(a,e){do{var l=P1(a.alternate,a);if(l!==null){l.flags&=32767,Z=l;return}if(l=a.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(a=a.sibling,a!==null)){Z=a;return}Z=a=l}while(a!==null);va=6,Z=null}function bf(a,e,l,t,n,i,u,c,s){a.cancelPendingCommit=null;do Ai();while(Aa!==0);if((P&6)!==0)throw Error(v(327));if(e!==null){if(e===a.current)throw Error(v(177));if(i=e.lanes|e.childLanes,i|=xu,Gd(a,l,i,u,c,s),a===oa&&(Z=oa=null,k=0),xt=e,fl=a,ke=l,Nc=i,Oc=n,of=t,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,fm(En,function(){return Cf(),null})):(a.callbackNode=null,a.callbackPriority=0),t=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||t){t=b.T,b.T=null,n=E.p,E.p=2,u=P,P|=4;try{am(a,e,l)}finally{P=u,E.p=n,b.T=t}}Aa=1,xf(),Sf(),zf()}}function xf(){if(Aa===1){Aa=0;var a=fl,e=xt,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=b.T,b.T=null;var t=E.p;E.p=2;var n=P;P|=4;try{Pr(e,a);var i=Zc,u=is(a.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&ns(c.ownerDocument.documentElement,c)){if(s!==null&&vu(c)){var p=s.start,y=s.end;if(y===void 0&&(y=p),"selectionStart"in c)c.selectionStart=p,c.selectionEnd=Math.min(y,c.value.length);else{var S=c.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var g=h.getSelection(),j=c.textContent.length,q=Math.min(s.start,j),ua=s.end===void 0?q:Math.min(s.end,j);!g.extend&&q>ua&&(u=ua,ua=q,q=u);var d=ts(c,q),r=ts(c,ua);if(d&&r&&(g.rangeCount!==1||g.anchorNode!==d.node||g.anchorOffset!==d.offset||g.focusNode!==r.node||g.focusOffset!==r.offset)){var m=S.createRange();m.setStart(d.node,d.offset),g.removeAllRanges(),q>ua?(g.addRange(m),g.extend(r.node,r.offset)):(m.setEnd(r.node,r.offset),g.addRange(m))}}}}for(S=[],g=c;g=g.parentNode;)g.nodeType===1&&S.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<S.length;c++){var x=S[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}wi=!!Lc,Zc=Lc=null}finally{P=n,E.p=t,b.T=l}}a.current=e,Aa=2}}function Sf(){if(Aa===2){Aa=0;var a=fl,e=xt,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=b.T,b.T=null;var t=E.p;E.p=2;var n=P;P|=4;try{Jr(a,e.alternate,e)}finally{P=n,E.p=t,b.T=l}}Aa=3}}function zf(){if(Aa===4||Aa===3){Aa=0,Md();var a=fl,e=xt,l=ke,t=of;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Aa=5:(Aa=0,xt=fl=null,Af(a,a.pendingLanes));var n=a.pendingLanes;if(n===0&&(rl=null),Fi(l),e=e.stateNode,$a&&typeof $a.onCommitFiberRoot=="function")try{$a.onCommitFiberRoot(Ot,e,void 0,(e.current.flags&128)===128)}catch{}if(t!==null){e=b.T,n=E.p,E.p=2,b.T=null;try{for(var i=a.onRecoverableError,u=0;u<t.length;u++){var c=t[u];i(c.value,{componentStack:c.stack})}}finally{b.T=e,E.p=n}}(ke&3)!==0&&Ai(),je(a),n=a.pendingLanes,(l&261930)!==0&&(n&42)!==0?a===_c?fn++:(fn=0,_c=a):fn=0,dn(0)}}function Af(a,e){(a.pooledCacheLanes&=e)===0&&(e=a.pooledCache,e!=null&&(a.pooledCache=null,Vt(e)))}function Ai(){return xf(),Sf(),zf(),Cf()}function Cf(){if(Aa!==5)return!1;var a=fl,e=Nc;Nc=0;var l=Fi(ke),t=b.T,n=E.p;try{E.p=32>l?32:l,b.T=null,l=Oc,Oc=null;var i=fl,u=ke;if(Aa=0,xt=fl=null,ke=0,(P&6)!==0)throw Error(v(331));var c=P;if(P|=4,nf(i.current),ef(i,i.current,u,l),P=c,dn(0,!1),$a&&typeof $a.onPostCommitFiberRoot=="function")try{$a.onPostCommitFiberRoot(Ot,i)}catch{}return!0}finally{E.p=n,b.T=t,Af(a,e)}}function Ef(a,e,l){e=re(l,e),e=oc(a.stateNode,e,2),a=nl(a,e,2),a!==null&&(Mt(a,2),je(a))}function la(a,e,l){if(a.tag===3)Ef(a,a,l);else for(;e!==null;){if(e.tag===3){Ef(e,a,l);break}else if(e.tag===1){var t=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(rl===null||!rl.has(t))){a=re(l,a),l=Er(2),t=nl(e,l,2),t!==null&&(Tr(l,t,e,a),Mt(t,2),je(t));break}}e=e.return}}function Dc(a,e,l){var t=a.pingCache;if(t===null){t=a.pingCache=new tm;var n=new Set;t.set(e,n)}else n=t.get(e),n===void 0&&(n=new Set,t.set(e,n));n.has(l)||(Ec=!0,n.add(l),a=om.bind(null,a,e,l),e.then(a,a))}function om(a,e,l){var t=a.pingCache;t!==null&&t.delete(e),a.pingedLanes|=a.suspendedLanes&l,a.warmLanes&=~l,oa===a&&(k&l)===l&&(va===4||va===3&&(k&62914560)===k&&300>Fa()-gi?(P&2)===0&&St(a,0):Tc|=l,bt===k&&(bt=0)),je(a)}function Tf(a,e){e===0&&(e=bo()),a=_l(a,e),a!==null&&(Mt(a,e),je(a))}function sm(a){var e=a.memoizedState,l=0;e!==null&&(l=e.retryLane),Tf(a,l)}function rm(a,e){var l=0;switch(a.tag){case 31:case 13:var t=a.stateNode,n=a.memoizedState;n!==null&&(l=n.retryLane);break;case 19:t=a.stateNode;break;case 22:t=a.stateNode._retryCache;break;default:throw Error(v(314))}t!==null&&t.delete(e),Tf(a,l)}function fm(a,e){return ki(a,e)}var Ci=null,At=null,Uc=!1,Ei=!1,wc=!1,ml=0;function je(a){a!==At&&a.next===null&&(At===null?Ci=At=a:At=At.next=a),Ei=!0,Uc||(Uc=!0,mm())}function dn(a,e){if(!wc&&Ei){wc=!0;do for(var l=!1,t=Ci;t!==null;){if(a!==0){var n=t.pendingLanes;if(n===0)var i=0;else{var u=t.suspendedLanes,c=t.pingedLanes;i=(1<<31-Ia(42|a)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,_f(t,i))}else i=k,i=On(t,t===oa?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(i&3)===0||_t(t,i)||(l=!0,_f(t,i));t=t.next}while(l);wc=!1}}function dm(){jf()}function jf(){Ei=Uc=!1;var a=0;ml!==0&&Am()&&(a=ml);for(var e=Fa(),l=null,t=Ci;t!==null;){var n=t.next,i=Nf(t,e);i===0?(t.next=null,l===null?Ci=n:l.next=n,n===null&&(At=l)):(l=t,(a!==0||(i&3)!==0)&&(Ei=!0)),t=n}Aa!==0&&Aa!==5||dn(a),ml!==0&&(ml=0)}function Nf(a,e){for(var l=a.suspendedLanes,t=a.pingedLanes,n=a.expirationTimes,i=a.pendingLanes&-62914561;0<i;){var u=31-Ia(i),c=1<<u,s=n[u];s===-1?((c&l)===0||(c&t)!==0)&&(n[u]=Yd(c,e)):s<=e&&(a.expiredLanes|=c),i&=~c}if(e=oa,l=k,l=On(a,a===e?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),t=a.callbackNode,l===0||a===e&&(ea===2||ea===9)||a.cancelPendingCommit!==null)return t!==null&&t!==null&&Ki(t),a.callbackNode=null,a.callbackPriority=0;if((l&3)===0||_t(a,l)){if(e=l&-l,e===a.callbackPriority)return e;switch(t!==null&&Ki(t),Fi(l)){case 2:case 8:l=go;break;case 32:l=En;break;case 268435456:l=yo;break;default:l=En}return t=Of.bind(null,a),l=ki(l,t),a.callbackPriority=e,a.callbackNode=l,e}return t!==null&&t!==null&&Ki(t),a.callbackPriority=2,a.callbackNode=null,2}function Of(a,e){if(Aa!==0&&Aa!==5)return a.callbackNode=null,a.callbackPriority=0,null;var l=a.callbackNode;if(Ai()&&a.callbackNode!==l)return null;var t=k;return t=On(a,a===oa?t:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),t===0?null:(rf(a,t,e),Nf(a,Fa()),a.callbackNode!=null&&a.callbackNode===l?Of.bind(null,a):null)}function _f(a,e){if(Ai())return null;rf(a,e,!0)}function mm(){Em(function(){(P&6)!==0?ki(ho,dm):jf()})}function Rc(){if(ml===0){var a=ot;a===0&&(a=Tn,Tn<<=1,(Tn&261888)===0&&(Tn=256)),ml=a}return ml}function Mf(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:Dn(""+a)}function qf(a,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,a.id&&l.setAttribute("form",a.id),e.parentNode.insertBefore(l,e),a=new FormData(a),l.parentNode.removeChild(l),a}function pm(a,e,l,t,n){if(e==="submit"&&l&&l.stateNode===n){var i=Mf((n[Qa]||null).action),u=t.submitter;u&&(e=(e=u[Qa]||null)?Mf(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new Hn("action","action",null,t,n);a.push({event:c,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(ml!==0){var s=u?qf(n,u):new FormData(n);lc(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?qf(n,u):new FormData(n),lc(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var Hc=0;Hc<bu.length;Hc++){var Bc=bu[Hc],vm=Bc.toLowerCase(),hm=Bc[0].toUpperCase()+Bc.slice(1);ye(vm,"on"+hm)}ye(os,"onAnimationEnd"),ye(ss,"onAnimationIteration"),ye(rs,"onAnimationStart"),ye("dblclick","onDoubleClick"),ye("focusin","onFocus"),ye("focusout","onBlur"),ye(q1,"onTransitionRun"),ye(D1,"onTransitionStart"),ye(U1,"onTransitionCancel"),ye(fs,"onTransitionEnd"),Jl("onMouseEnter",["mouseout","mouseover"]),Jl("onMouseLeave",["mouseout","mouseover"]),Jl("onPointerEnter",["pointerout","pointerover"]),Jl("onPointerLeave",["pointerout","pointerover"]),Tl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Df(a,e){e=(e&4)!==0;for(var l=0;l<a.length;l++){var t=a[l],n=t.event;t=t.listeners;a:{var i=void 0;if(e)for(var u=t.length-1;0<=u;u--){var c=t[u],s=c.instance,p=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break a;i=c,n.currentTarget=p;try{i(n)}catch(y){Gn(y)}n.currentTarget=null,i=s}else for(u=0;u<t.length;u++){if(c=t[u],s=c.instance,p=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break a;i=c,n.currentTarget=p;try{i(n)}catch(y){Gn(y)}n.currentTarget=null,i=s}}}}function V(a,e){var l=e[$i];l===void 0&&(l=e[$i]=new Set);var t=a+"__bubble";l.has(t)||(Uf(e,a,2,!1),l.add(t))}function Yc(a,e,l){var t=0;e&&(t|=4),Uf(l,a,t,e)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Gc(a){if(!a[Ti]){a[Ti]=!0,To.forEach(function(l){l!=="selectionchange"&&(gm.has(l)||Yc(l,!1,a),Yc(l,!0,a))});var e=a.nodeType===9?a:a.ownerDocument;e===null||e[Ti]||(e[Ti]=!0,Yc("selectionchange",!1,e))}}function Uf(a,e,l,t){switch(sd(e)){case 2:var n=Vm;break;case 8:n=km;break;default:n=eo}l=n.bind(null,e,l,a),n=void 0,!uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),t?n!==void 0?a.addEventListener(e,l,{capture:!0,passive:n}):a.addEventListener(e,l,!0):n!==void 0?a.addEventListener(e,l,{passive:n}):a.addEventListener(e,l,!1)}function Qc(a,e,l,t,n){var i=t;if((e&1)===0&&(e&2)===0&&t!==null)a:for(;;){if(t===null)return;var u=t.tag;if(u===3||u===4){var c=t.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=t.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Vl(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){t=i=u;continue a}c=c.parentNode}}t=t.return}Bo(function(){var p=i,y=nu(l),S=[];a:{var h=ds.get(a);if(h!==void 0){var g=Hn,j=a;switch(a){case"keypress":if(wn(l)===0)break a;case"keydown":case"keyup":g=r1;break;case"focusin":j="focus",g=ru;break;case"focusout":j="blur",g=ru;break;case"beforeblur":case"afterblur":g=ru;break;case"click":if(l.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=m1;break;case os:case ss:case rs:g=e1;break;case fs:g=v1;break;case"scroll":case"scrollend":g=Fd;break;case"wheel":g=g1;break;case"copy":case"cut":case"paste":g=t1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Lo;break;case"toggle":case"beforetoggle":g=b1}var q=(e&4)!==0,ua=!q&&(a==="scroll"||a==="scrollend"),d=q?h!==null?h+"Capture":null:h;q=[];for(var r=p,m;r!==null;){var x=r;if(m=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||m===null||d===null||(x=Ut(r,d),x!=null&&q.push(pn(r,x,m))),ua)break;r=r.return}0<q.length&&(h=new g(h,j,null,l,y),S.push({event:h,listeners:q}))}}if((e&7)===0){a:{if(h=a==="mouseover"||a==="pointerover",g=a==="mouseout"||a==="pointerout",h&&l!==tu&&(j=l.relatedTarget||l.fromElement)&&(Vl(j)||j[Zl]))break a;if((g||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,g?(j=l.relatedTarget||l.toElement,g=p,j=j?Vl(j):null,j!==null&&(ua=G(j),q=j.tag,j!==ua||q!==5&&q!==27&&q!==6)&&(j=null)):(g=null,j=p),g!==j)){if(q=Qo,x="onMouseLeave",d="onMouseEnter",r="mouse",(a==="pointerout"||a==="pointerover")&&(q=Lo,x="onPointerLeave",d="onPointerEnter",r="pointer"),ua=g==null?h:Dt(g),m=j==null?h:Dt(j),h=new q(x,r+"leave",g,l,y),h.target=ua,h.relatedTarget=m,x=null,Vl(y)===p&&(q=new q(d,r+"enter",j,l,y),q.target=m,q.relatedTarget=ua,x=q),ua=x,g&&j)e:{for(q=ym,d=g,r=j,m=0,x=d;x;x=q(x))m++;x=0;for(var M=r;M;M=q(M))x++;for(;0<m-x;)d=q(d),m--;for(;0<x-m;)r=q(r),x--;for(;m--;){if(d===r||r!==null&&d===r.alternate){q=d;break e}d=q(d),r=q(r)}q=null}else q=null;g!==null&&wf(S,h,g,q,!1),j!==null&&ua!==null&&wf(S,ua,j,q,!0)}}a:{if(h=p?Dt(p):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var $=$o;else if(Wo(h))if(Io)$=O1;else{$=j1;var O=T1}else g=h.nodeName,!g||g.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?p&&lu(p.elementType)&&($=$o):$=N1;if($&&($=$(a,p))){Fo(S,$,l,y);break a}O&&O(a,h,p),a==="focusout"&&p&&h.type==="number"&&p.memoizedProps.value!=null&&eu(h,"number",h.value)}switch(O=p?Dt(p):window,a){case"focusin":(Wo(O)||O.contentEditable==="true")&&(at=O,hu=p,Xt=null);break;case"focusout":Xt=hu=at=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,us(S,l,y);break;case"selectionchange":if(M1)break;case"keydown":case"keyup":us(S,l,y)}var Q;if(du)a:{switch(a){case"compositionstart":var K="onCompositionStart";break a;case"compositionend":K="onCompositionEnd";break a;case"compositionupdate":K="onCompositionUpdate";break a}K=void 0}else Pl?Ko(a,l)&&(K="onCompositionEnd"):a==="keydown"&&l.keyCode===229&&(K="onCompositionStart");K&&(Zo&&l.locale!=="ko"&&(Pl||K!=="onCompositionStart"?K==="onCompositionEnd"&&Pl&&(Q=Yo()):($e=y,cu="value"in $e?$e.value:$e.textContent,Pl=!0)),O=ji(p,K),0<O.length&&(K=new Xo(K,a,null,l,y),S.push({event:K,listeners:O}),Q?K.data=Q:(Q=Jo(l),Q!==null&&(K.data=Q)))),(Q=S1?z1(a,l):A1(a,l))&&(K=ji(p,"onBeforeInput"),0<K.length&&(O=new Xo("onBeforeInput","beforeinput",null,l,y),S.push({event:O,listeners:K}),O.data=Q)),pm(S,a,p,l,y)}Df(S,e)})}function pn(a,e,l){return{instance:a,listener:e,currentTarget:l}}function ji(a,e){for(var l=e+"Capture",t=[];a!==null;){var n=a,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ut(a,l),n!=null&&t.unshift(pn(a,n,i)),n=Ut(a,e),n!=null&&t.push(pn(a,n,i))),a.tag===3)return t;a=a.return}return[]}function ym(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function wf(a,e,l,t,n){for(var i=e._reactName,u=[];l!==null&&l!==t;){var c=l,s=c.alternate,p=c.stateNode;if(c=c.tag,s!==null&&s===t)break;c!==5&&c!==26&&c!==27||p===null||(s=p,n?(p=Ut(l,i),p!=null&&u.unshift(pn(l,p,s))):n||(p=Ut(l,i),p!=null&&u.push(pn(l,p,s)))),l=l.return}u.length!==0&&a.push({event:e,listeners:u})}var bm=/\r\n?/g,xm=/\u0000|\uFFFD/g;function Rf(a){return(typeof a=="string"?a:""+a).replace(bm,`
`).replace(xm,"")}function Hf(a,e){return e=Rf(e),Rf(a)===e}function ia(a,e,l,t,n,i){switch(l){case"children":typeof t=="string"?e==="body"||e==="textarea"&&t===""||Fl(a,t):(typeof t=="number"||typeof t=="bigint")&&e!=="body"&&Fl(a,""+t);break;case"className":Mn(a,"class",t);break;case"tabIndex":Mn(a,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Mn(a,l,t);break;case"style":Ro(a,t,i);break;case"data":if(e!=="object"){Mn(a,"data",t);break}case"src":case"href":if(t===""&&(e!=="a"||l!=="href")){a.removeAttribute(l);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){a.removeAttribute(l);break}t=Dn(""+t),a.setAttribute(l,t);break;case"action":case"formAction":if(typeof t=="function"){a.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&ia(a,e,"name",n.name,n,null),ia(a,e,"formEncType",n.formEncType,n,null),ia(a,e,"formMethod",n.formMethod,n,null),ia(a,e,"formTarget",n.formTarget,n,null)):(ia(a,e,"encType",n.encType,n,null),ia(a,e,"method",n.method,n,null),ia(a,e,"target",n.target,n,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){a.removeAttribute(l);break}t=Dn(""+t),a.setAttribute(l,t);break;case"onClick":t!=null&&(a.onclick=Me);break;case"onScroll":t!=null&&V("scroll",a);break;case"onScrollEnd":t!=null&&V("scrollend",a);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(v(61));if(l=t.__html,l!=null){if(n.children!=null)throw Error(v(60));a.innerHTML=l}}break;case"multiple":a.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":a.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){a.removeAttribute("xlink:href");break}l=Dn(""+t),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?a.setAttribute(l,""+t):a.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?a.setAttribute(l,""):a.removeAttribute(l);break;case"capture":case"download":t===!0?a.setAttribute(l,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?a.setAttribute(l,t):a.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?a.setAttribute(l,t):a.removeAttribute(l);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?a.removeAttribute(l):a.setAttribute(l,t);break;case"popover":V("beforetoggle",a),V("toggle",a),_n(a,"popover",t);break;case"xlinkActuate":_e(a,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":_e(a,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":_e(a,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":_e(a,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":_e(a,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":_e(a,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":_e(a,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":_e(a,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":_e(a,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":_n(a,"is",t);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Jd.get(l)||l,_n(a,l,t))}}function Xc(a,e,l,t,n,i){switch(l){case"style":Ro(a,t,i);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(v(61));if(l=t.__html,l!=null){if(n.children!=null)throw Error(v(60));a.innerHTML=l}}break;case"children":typeof t=="string"?Fl(a,t):(typeof t=="number"||typeof t=="bigint")&&Fl(a,""+t);break;case"onScroll":t!=null&&V("scroll",a);break;case"onScrollEnd":t!=null&&V("scrollend",a);break;case"onClick":t!=null&&(a.onclick=Me);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jo.hasOwnProperty(l))a:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=a[Qa]||null,i=i!=null?i[l]:null,typeof i=="function"&&a.removeEventListener(e,i,n),typeof t=="function")){typeof i!="function"&&i!==null&&(l in a?a[l]=null:a.hasAttribute(l)&&a.removeAttribute(l)),a.addEventListener(e,t,n);break a}l in a?a[l]=t:t===!0?a.setAttribute(l,""):_n(a,l,t)}}}function Ma(a,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",a),V("load",a);var t=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":t=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v(137,e));default:ia(a,e,i,u,l,null)}}n&&ia(a,e,"srcSet",l.srcSet,l,null),t&&ia(a,e,"src",l.src,l,null);return;case"input":V("invalid",a);var c=i=u=n=null,s=null,p=null;for(t in l)if(l.hasOwnProperty(t)){var y=l[t];if(y!=null)switch(t){case"name":n=y;break;case"type":u=y;break;case"checked":s=y;break;case"defaultChecked":p=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(v(137,e));break;default:ia(a,e,t,y,l,null)}}qo(a,i,c,s,p,u,n,!1);return;case"select":V("invalid",a),t=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":t=c;default:ia(a,e,n,c,l,null)}e=i,l=u,a.multiple=!!t,e!=null?Wl(a,!!t,e,!1):l!=null&&Wl(a,!!t,l,!0);return;case"textarea":V("invalid",a),i=n=t=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":t=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(v(91));break;default:ia(a,e,u,c,l,null)}Uo(a,t,n,i);return;case"option":for(s in l)if(l.hasOwnProperty(s)&&(t=l[s],t!=null))switch(s){case"selected":a.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:ia(a,e,s,t,l,null)}return;case"dialog":V("beforetoggle",a),V("toggle",a),V("cancel",a),V("close",a);break;case"iframe":case"object":V("load",a);break;case"video":case"audio":for(t=0;t<mn.length;t++)V(mn[t],a);break;case"image":V("error",a),V("load",a);break;case"details":V("toggle",a);break;case"embed":case"source":case"link":V("error",a),V("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in l)if(l.hasOwnProperty(p)&&(t=l[p],t!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(v(137,e));default:ia(a,e,p,t,l,null)}return;default:if(lu(e)){for(y in l)l.hasOwnProperty(y)&&(t=l[y],t!==void 0&&Xc(a,e,y,t,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(t=l[c],t!=null&&ia(a,e,c,t,l,null))}function Sm(a,e,l,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,p=null,y=null;for(g in l){var S=l[g];if(l.hasOwnProperty(g)&&S!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":s=S;default:t.hasOwnProperty(g)||ia(a,e,g,null,t,S)}}for(var h in t){var g=t[h];if(S=l[h],t.hasOwnProperty(h)&&(g!=null||S!=null))switch(h){case"type":i=g;break;case"name":n=g;break;case"checked":p=g;break;case"defaultChecked":y=g;break;case"value":u=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(v(137,e));break;default:g!==S&&ia(a,e,h,g,t,S)}}au(a,u,c,s,p,y,i,n);return;case"select":g=u=c=h=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":g=s;default:t.hasOwnProperty(i)||ia(a,e,i,null,t,s)}for(n in t)if(i=t[n],s=l[n],t.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":h=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&ia(a,e,n,i,t,s)}e=c,l=u,t=g,h!=null?Wl(a,!!l,h,!1):!!t!=!!l&&(e!=null?Wl(a,!!l,e,!0):Wl(a,!!l,l?[]:"",!1));return;case"textarea":g=h=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!t.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ia(a,e,c,null,t,n)}for(u in t)if(n=t[u],i=l[u],t.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":h=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(v(91));break;default:n!==i&&ia(a,e,u,n,t,i)}Do(a,h,g);return;case"option":for(var j in l)if(h=l[j],l.hasOwnProperty(j)&&h!=null&&!t.hasOwnProperty(j))switch(j){case"selected":a.selected=!1;break;default:ia(a,e,j,null,t,h)}for(s in t)if(h=t[s],g=l[s],t.hasOwnProperty(s)&&h!==g&&(h!=null||g!=null))switch(s){case"selected":a.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ia(a,e,s,h,t,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in l)h=l[q],l.hasOwnProperty(q)&&h!=null&&!t.hasOwnProperty(q)&&ia(a,e,q,null,t,h);for(p in t)if(h=t[p],g=l[p],t.hasOwnProperty(p)&&h!==g&&(h!=null||g!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(v(137,e));break;default:ia(a,e,p,h,t,g)}return;default:if(lu(e)){for(var ua in l)h=l[ua],l.hasOwnProperty(ua)&&h!==void 0&&!t.hasOwnProperty(ua)&&Xc(a,e,ua,void 0,t,h);for(y in t)h=t[y],g=l[y],!t.hasOwnProperty(y)||h===g||h===void 0&&g===void 0||Xc(a,e,y,h,t,g);return}}for(var d in l)h=l[d],l.hasOwnProperty(d)&&h!=null&&!t.hasOwnProperty(d)&&ia(a,e,d,null,t,h);for(S in t)h=t[S],g=l[S],!t.hasOwnProperty(S)||h===g||h==null&&g==null||ia(a,e,S,h,t,g)}function Bf(a){switch(a){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zm(){if(typeof performance.getEntriesByType=="function"){for(var a=0,e=0,l=performance.getEntriesByType("resource"),t=0;t<l.length;t++){var n=l[t],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Bf(u)){for(u=0,c=n.responseEnd,t+=1;t<l.length;t++){var s=l[t],p=s.startTime;if(p>c)break;var y=s.transferSize,S=s.initiatorType;y&&Bf(S)&&(s=s.responseEnd,u+=y*(s<c?1:(c-p)/(s-p)))}if(--t,e+=8*(i+u)/(n.duration/1e3),a++,10<a)break}}if(0<a)return e/a/1e6}return navigator.connection&&(a=navigator.connection.downlink,typeof a=="number")?a:5}var Lc=null,Zc=null;function Ni(a){return a.nodeType===9?a:a.ownerDocument}function Yf(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gf(a,e){if(a===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&e==="foreignObject"?0:a}function Vc(a,e){return a==="textarea"||a==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kc=null;function Am(){var a=window.event;return a&&a.type==="popstate"?a===kc?!1:(kc=a,!0):(kc=null,!1)}var Qf=typeof setTimeout=="function"?setTimeout:void 0,Cm=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,Em=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(a){return Xf.resolve(null).then(a).catch(Tm)}:Qf;function Tm(a){setTimeout(function(){throw a})}function pl(a){return a==="head"}function Lf(a,e){var l=e,t=0;do{var n=l.nextSibling;if(a.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(t===0){a.removeChild(n),jt(e);return}t--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")t++;else if(l==="html")vn(a.ownerDocument.documentElement);else if(l==="head"){l=a.ownerDocument.head,vn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[qt]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&vn(a.ownerDocument.body);l=n}while(l);jt(e)}function Zf(a,e){var l=a;a=0;do{var t=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),t&&t.nodeType===8)if(l=t.data,l==="/$"){if(a===0)break;a--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||a++;l=t}while(l)}function Kc(a){var e=a.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Kc(l),Ii(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}a.removeChild(l)}}function jm(a,e,l,t){for(;a.nodeType===1;){var n=l;if(a.nodeName.toLowerCase()!==e.toLowerCase()){if(!t&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(t){if(!a[qt])switch(e){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(i=a.getAttribute("rel"),i==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(i!==n.rel||a.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||a.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||a.getAttribute("title")!==(n.title==null?null:n.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(i=a.getAttribute("src"),(i!==(n.src==null?null:n.src)||a.getAttribute("type")!==(n.type==null?null:n.type)||a.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(e==="input"&&a.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&a.getAttribute("name")===i)return a}else return a;if(a=ve(a.nextSibling),a===null)break}return null}function Nm(a,e,l){if(e==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!l||(a=ve(a.nextSibling),a===null))return null;return a}function Vf(a,e){for(;a.nodeType!==8;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!e||(a=ve(a.nextSibling),a===null))return null;return a}function Jc(a){return a.data==="$?"||a.data==="$~"}function Wc(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState!=="loading"}function Om(a,e){var l=a.ownerDocument;if(a.data==="$~")a._reactRetry=e;else if(a.data!=="$?"||l.readyState!=="loading")e();else{var t=function(){e(),l.removeEventListener("DOMContentLoaded",t)};l.addEventListener("DOMContentLoaded",t),a._reactRetry=t}}function ve(a){for(;a!=null;a=a.nextSibling){var e=a.nodeType;if(e===1||e===3)break;if(e===8){if(e=a.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return a}var Fc=null;function kf(a){a=a.nextSibling;for(var e=0;a;){if(a.nodeType===8){var l=a.data;if(l==="/$"||l==="/&"){if(e===0)return ve(a.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}a=a.nextSibling}return null}function Kf(a){a=a.previousSibling;for(var e=0;a;){if(a.nodeType===8){var l=a.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return a;e--}else l!=="/$"&&l!=="/&"||e++}a=a.previousSibling}return null}function Jf(a,e,l){switch(e=Ni(l),a){case"html":if(a=e.documentElement,!a)throw Error(v(452));return a;case"head":if(a=e.head,!a)throw Error(v(453));return a;case"body":if(a=e.body,!a)throw Error(v(454));return a;default:throw Error(v(451))}}function vn(a){for(var e=a.attributes;e.length;)a.removeAttributeNode(e[0]);Ii(a)}var he=new Map,Wf=new Set;function Oi(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var Ke=E.d;E.d={f:_m,r:Mm,D:qm,C:Dm,L:Um,m:wm,X:Hm,S:Rm,M:Bm};function _m(){var a=Ke.f(),e=xi();return a||e}function Mm(a){var e=kl(a);e!==null&&e.tag===5&&e.type==="form"?fr(e):Ke.r(a)}var Ct=typeof document>"u"?null:document;function Ff(a,e,l){var t=Ct;if(t&&typeof e=="string"&&e){var n=oe(e);n='link[rel="'+a+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Wf.has(n)||(Wf.add(n),a={rel:a,crossOrigin:l,href:e},t.querySelector(n)===null&&(e=t.createElement("link"),Ma(e,"link",a),Ea(e),t.head.appendChild(e)))}}function qm(a){Ke.D(a),Ff("dns-prefetch",a,null)}function Dm(a,e){Ke.C(a,e),Ff("preconnect",a,e)}function Um(a,e,l){Ke.L(a,e,l);var t=Ct;if(t&&a&&e){var n='link[rel="preload"][as="'+oe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+oe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+oe(l.imageSizes)+'"]')):n+='[href="'+oe(a)+'"]';var i=n;switch(e){case"style":i=Et(a);break;case"script":i=Tt(a)}he.has(i)||(a=U({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:a,as:e},l),he.set(i,a),t.querySelector(n)!==null||e==="style"&&t.querySelector(hn(i))||e==="script"&&t.querySelector(gn(i))||(e=t.createElement("link"),Ma(e,"link",a),Ea(e),t.head.appendChild(e)))}}function wm(a,e){Ke.m(a,e);var l=Ct;if(l&&a){var t=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+oe(t)+'"][href="'+oe(a)+'"]',i=n;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Tt(a)}if(!he.has(i)&&(a=U({rel:"modulepreload",href:a},e),he.set(i,a),l.querySelector(n)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(gn(i)))return}t=l.createElement("link"),Ma(t,"link",a),Ea(t),l.head.appendChild(t)}}}function Rm(a,e,l){Ke.S(a,e,l);var t=Ct;if(t&&a){var n=Kl(t).hoistableStyles,i=Et(a);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=t.querySelector(hn(i)))c.loading=5;else{a=U({rel:"stylesheet",href:a,"data-precedence":e},l),(l=he.get(i))&&$c(a,l);var s=u=t.createElement("link");Ea(s),Ma(s,"link",a),s._p=new Promise(function(p,y){s.onload=p,s.onerror=y}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,_i(u,e,t)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function Hm(a,e){Ke.X(a,e);var l=Ct;if(l&&a){var t=Kl(l).hoistableScripts,n=Tt(a),i=t.get(n);i||(i=l.querySelector(gn(n)),i||(a=U({src:a,async:!0},e),(e=he.get(n))&&Ic(a,e),i=l.createElement("script"),Ea(i),Ma(i,"link",a),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(n,i))}}function Bm(a,e){Ke.M(a,e);var l=Ct;if(l&&a){var t=Kl(l).hoistableScripts,n=Tt(a),i=t.get(n);i||(i=l.querySelector(gn(n)),i||(a=U({src:a,async:!0,type:"module"},e),(e=he.get(n))&&Ic(a,e),i=l.createElement("script"),Ea(i),Ma(i,"link",a),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(n,i))}}function $f(a,e,l,t){var n=(n=L.current)?Oi(n):null;if(!n)throw Error(v(446));switch(a){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Et(l.href),l=Kl(n).hoistableStyles,t=l.get(e),t||(t={type:"style",instance:null,count:0,state:null},l.set(e,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){a=Et(l.href);var i=Kl(n).hoistableStyles,u=i.get(a);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(a,u),(i=n.querySelector(hn(a)))&&!i._p&&(u.instance=i,u.state.loading=5),he.has(a)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},he.set(a,l),i||Ym(n,a,l,u.state))),e&&t===null)throw Error(v(528,""));return u}if(e&&t!==null)throw Error(v(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Tt(l),l=Kl(n).hoistableScripts,t=l.get(e),t||(t={type:"script",instance:null,count:0,state:null},l.set(e,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(v(444,a))}}function Et(a){return'href="'+oe(a)+'"'}function hn(a){return'link[rel="stylesheet"]['+a+"]"}function If(a){return U({},a,{"data-precedence":a.precedence,precedence:null})}function Ym(a,e,l,t){a.querySelector('link[rel="preload"][as="style"]['+e+"]")?t.loading=1:(e=a.createElement("link"),t.preload=e,e.addEventListener("load",function(){return t.loading|=1}),e.addEventListener("error",function(){return t.loading|=2}),Ma(e,"link",l),Ea(e),a.head.appendChild(e))}function Tt(a){return'[src="'+oe(a)+'"]'}function gn(a){return"script[async]"+a}function Pf(a,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var t=a.querySelector('style[data-href~="'+oe(l.href)+'"]');if(t)return e.instance=t,Ea(t),t;var n=U({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return t=(a.ownerDocument||a).createElement("style"),Ea(t),Ma(t,"style",n),_i(t,l.precedence,a),e.instance=t;case"stylesheet":n=Et(l.href);var i=a.querySelector(hn(n));if(i)return e.state.loading|=4,e.instance=i,Ea(i),i;t=If(l),(n=he.get(n))&&$c(t,n),i=(a.ownerDocument||a).createElement("link"),Ea(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Ma(i,"link",t),e.state.loading|=4,_i(i,l.precedence,a),e.instance=i;case"script":return i=Tt(l.src),(n=a.querySelector(gn(i)))?(e.instance=n,Ea(n),n):(t=l,(n=he.get(i))&&(t=U({},l),Ic(t,n)),a=a.ownerDocument||a,n=a.createElement("script"),Ea(n),Ma(n,"link",t),a.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(v(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(t=e.instance,e.state.loading|=4,_i(t,l.precedence,a));return e.instance}function _i(a,e,l){for(var t=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=t.length?t[t.length-1]:null,i=n,u=0;u<t.length;u++){var c=t[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(a,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(a,e.firstChild))}function $c(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.title==null&&(a.title=e.title)}function Ic(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.integrity==null&&(a.integrity=e.integrity)}var Mi=null;function ad(a,e,l){if(Mi===null){var t=new Map,n=Mi=new Map;n.set(l,t)}else n=Mi,t=n.get(l),t||(t=new Map,n.set(l,t));if(t.has(a))return t;for(t.set(a,null),l=l.getElementsByTagName(a),n=0;n<l.length;n++){var i=l[n];if(!(i[qt]||i[ja]||a==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=a+u;var c=t.get(u);c?c.push(i):t.set(u,[i])}}return t}function ed(a,e,l){a=a.ownerDocument||a,a.head.insertBefore(l,e==="title"?a.querySelector("head > title"):null)}function Gm(a,e,l){if(l===1||e.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return a=e.disabled,typeof e.precedence=="string"&&a==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ld(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}function Qm(a,e,l,t){if(l.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Et(t.href),i=e.querySelector(hn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=qi.bind(a),e.then(a,a)),l.state.loading|=4,l.instance=i,Ea(i);return}i=e.ownerDocument||e,t=If(t),(n=he.get(n))&&$c(t,n),i=i.createElement("link"),Ea(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Ma(i,"link",t),l.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(a.count++,l=qi.bind(a),e.addEventListener("load",l),e.addEventListener("error",l))}}var Pc=0;function Xm(a,e){return a.stylesheets&&a.count===0&&Ui(a,a.stylesheets),0<a.count||0<a.imgCount?function(l){var t=setTimeout(function(){if(a.stylesheets&&Ui(a,a.stylesheets),a.unsuspend){var i=a.unsuspend;a.unsuspend=null,i()}},6e4+e);0<a.imgBytes&&Pc===0&&(Pc=62500*zm());var n=setTimeout(function(){if(a.waitingForImages=!1,a.count===0&&(a.stylesheets&&Ui(a,a.stylesheets),a.unsuspend)){var i=a.unsuspend;a.unsuspend=null,i()}},(a.imgBytes>Pc?50:800)+e);return a.unsuspend=l,function(){a.unsuspend=null,clearTimeout(t),clearTimeout(n)}}:null}function qi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var Di=null;function Ui(a,e){a.stylesheets=null,a.unsuspend!==null&&(a.count++,Di=new Map,e.forEach(Lm,a),Di=null,qi.call(a))}function Lm(a,e){if(!(e.state.loading&4)){var l=Di.get(a);if(l)var t=l.get(null);else{l=new Map,Di.set(a,l);for(var n=a.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),t=u)}t&&l.set(null,t)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||t,i===t&&l.set(null,n),l.set(u,n),this.count++,t=qi.bind(this),n.addEventListener("load",t),n.addEventListener("error",t),i?i.parentNode.insertBefore(n,i.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(n,a.firstChild)),e.state.loading|=4}}var yn={$$typeof:qa,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function Zm(a,e,l,t,n,i,u,c,s){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ji(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ji(0),this.hiddenUpdates=Ji(null),this.identifierPrefix=t,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function td(a,e,l,t,n,i,u,c,s,p,y,S){return a=new Zm(a,e,l,u,s,p,y,S,c),e=1,i===!0&&(e|=24),i=ae(3,null,null,e),a.current=i,i.stateNode=a,e=qu(),e.refCount++,a.pooledCache=e,e.refCount++,i.memoizedState={element:t,isDehydrated:l,cache:e},Ru(i),a}function nd(a){return a?(a=tt,a):tt}function id(a,e,l,t,n,i){n=nd(n),t.context===null?t.context=n:t.pendingContext=n,t=tl(e),t.payload={element:l},i=i===void 0?null:i,i!==null&&(t.callback=i),l=nl(a,t,e),l!==null&&(Ka(l,a,e),Wt(l,a,e))}function ud(a,e){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var l=a.retryLane;a.retryLane=l!==0&&l<e?l:e}}function ao(a,e){ud(a,e),(a=a.alternate)&&ud(a,e)}function cd(a){if(a.tag===13||a.tag===31){var e=_l(a,67108864);e!==null&&Ka(e,a,67108864),ao(a,67108864)}}function od(a){if(a.tag===13||a.tag===31){var e=ie();e=Wi(e);var l=_l(a,e);l!==null&&Ka(l,a,e),ao(a,e)}}var wi=!0;function Vm(a,e,l,t){var n=b.T;b.T=null;var i=E.p;try{E.p=2,eo(a,e,l,t)}finally{E.p=i,b.T=n}}function km(a,e,l,t){var n=b.T;b.T=null;var i=E.p;try{E.p=8,eo(a,e,l,t)}finally{E.p=i,b.T=n}}function eo(a,e,l,t){if(wi){var n=lo(t);if(n===null)Qc(a,e,t,Ri,l),rd(a,t);else if(Jm(n,a,e,l,t))t.stopPropagation();else if(rd(a,t),e&4&&-1<Km.indexOf(a)){for(;n!==null;){var i=kl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=El(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-Ia(u);c.entanglements[1]|=s,u&=~s}je(i),(P&6)===0&&(yi=Fa()+500,dn(0))}}break;case 31:case 13:c=_l(i,2),c!==null&&Ka(c,i,2),xi(),ao(i,2)}if(i=lo(t),i===null&&Qc(a,e,t,Ri,l),i===n)break;n=i}n!==null&&t.stopPropagation()}else Qc(a,e,t,null,l)}}function lo(a){return a=nu(a),to(a)}var Ri=null;function to(a){if(Ri=null,a=Vl(a),a!==null){var e=G(a);if(e===null)a=null;else{var l=e.tag;if(l===13){if(a=sa(e),a!==null)return a;a=null}else if(l===31){if(a=Ca(e),a!==null)return a;a=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;a=null}else e!==a&&(a=null)}}return Ri=a,null}function sd(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qd()){case ho:return 2;case go:return 8;case En:case Dd:return 32;case yo:return 268435456;default:return 32}default:return 32}}var no=!1,vl=null,hl=null,gl=null,bn=new Map,xn=new Map,yl=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rd(a,e){switch(a){case"focusin":case"focusout":vl=null;break;case"dragenter":case"dragleave":hl=null;break;case"mouseover":case"mouseout":gl=null;break;case"pointerover":case"pointerout":bn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(e.pointerId)}}function Sn(a,e,l,t,n,i){return a===null||a.nativeEvent!==i?(a={blockedOn:e,domEventName:l,eventSystemFlags:t,nativeEvent:i,targetContainers:[n]},e!==null&&(e=kl(e),e!==null&&cd(e)),a):(a.eventSystemFlags|=t,e=a.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),a)}function Jm(a,e,l,t,n){switch(e){case"focusin":return vl=Sn(vl,a,e,l,t,n),!0;case"dragenter":return hl=Sn(hl,a,e,l,t,n),!0;case"mouseover":return gl=Sn(gl,a,e,l,t,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,Sn(bn.get(i)||null,a,e,l,t,n)),!0;case"gotpointercapture":return i=n.pointerId,xn.set(i,Sn(xn.get(i)||null,a,e,l,t,n)),!0}return!1}function fd(a){var e=Vl(a.target);if(e!==null){var l=G(e);if(l!==null){if(e=l.tag,e===13){if(e=sa(l),e!==null){a.blockedOn=e,Co(a.priority,function(){od(l)});return}}else if(e===31){if(e=Ca(l),e!==null){a.blockedOn=e,Co(a.priority,function(){od(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){a.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}a.blockedOn=null}function Hi(a){if(a.blockedOn!==null)return!1;for(var e=a.targetContainers;0<e.length;){var l=lo(a.nativeEvent);if(l===null){l=a.nativeEvent;var t=new l.constructor(l.type,l);tu=t,l.target.dispatchEvent(t),tu=null}else return e=kl(l),e!==null&&cd(e),a.blockedOn=l,!1;e.shift()}return!0}function dd(a,e,l){Hi(a)&&l.delete(e)}function Wm(){no=!1,vl!==null&&Hi(vl)&&(vl=null),hl!==null&&Hi(hl)&&(hl=null),gl!==null&&Hi(gl)&&(gl=null),bn.forEach(dd),xn.forEach(dd)}function Bi(a,e){a.blockedOn===e&&(a.blockedOn=null,no||(no=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,Wm)))}var Yi=null;function md(a){Yi!==a&&(Yi=a,C.unstable_scheduleCallback(C.unstable_NormalPriority,function(){Yi===a&&(Yi=null);for(var e=0;e<a.length;e+=3){var l=a[e],t=a[e+1],n=a[e+2];if(typeof t!="function"){if(to(t||l)===null)continue;break}var i=kl(l);i!==null&&(a.splice(e,3),e-=3,lc(i,{pending:!0,data:n,method:l.method,action:t},t,n))}}))}function jt(a){function e(s){return Bi(s,a)}vl!==null&&Bi(vl,a),hl!==null&&Bi(hl,a),gl!==null&&Bi(gl,a),bn.forEach(e),xn.forEach(e);for(var l=0;l<yl.length;l++){var t=yl[l];t.blockedOn===a&&(t.blockedOn=null)}for(;0<yl.length&&(l=yl[0],l.blockedOn===null);)fd(l),l.blockedOn===null&&yl.shift();if(l=(a.ownerDocument||a).$$reactFormReplay,l!=null)for(t=0;t<l.length;t+=3){var n=l[t],i=l[t+1],u=n[Qa]||null;if(typeof i=="function")u||md(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Qa]||null)c=u.formAction;else if(to(n)!==null)continue}else c=u.action;typeof c=="function"?l[t+1]=c:(l.splice(t,3),t-=3),md(l)}}}function pd(){function a(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),t||setTimeout(l,20)}function l(){if(!t&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,n=null;return navigation.addEventListener("navigate",a),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){t=!0,navigation.removeEventListener("navigate",a),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function io(a){this._internalRoot=a}Gi.prototype.render=io.prototype.render=function(a){var e=this._internalRoot;if(e===null)throw Error(v(409));var l=e.current,t=ie();id(l,t,a,e,null,null)},Gi.prototype.unmount=io.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var e=a.containerInfo;id(a.current,2,null,a,null,null),xi(),e[Zl]=null}};function Gi(a){this._internalRoot=a}Gi.prototype.unstable_scheduleHydration=function(a){if(a){var e=Ao();a={blockedOn:null,target:a,priority:e};for(var l=0;l<yl.length&&e!==0&&e<yl[l].priority;l++);yl.splice(l,0,a),l===0&&fd(a)}};var vd=H.version;if(vd!=="19.2.8")throw Error(v(527,vd,"19.2.8"));E.findDOMNode=function(a){var e=a._reactInternals;if(e===void 0)throw typeof a.render=="function"?Error(v(188)):(a=Object.keys(a).join(","),Error(v(268,a)));return a=A(e),a=a!==null?F(a):null,a=a===null?null:a.stateNode,a};var Fm={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{Ot=Qi.inject(Fm),$a=Qi}catch{}}return An.createRoot=function(a,e){if(!D(a))throw Error(v(299));var l=!1,t="",n=Sr,i=zr,u=Ar;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=td(a,1,!1,null,null,l,t,null,n,i,u,pd),a[Zl]=e.current,Gc(a),new io(e)},An.hydrateRoot=function(a,e,l){if(!D(a))throw Error(v(299));var t=!1,n="",i=Sr,u=zr,c=Ar,s=null;return l!=null&&(l.unstable_strictMode===!0&&(t=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),e=td(a,1,!0,e,l??null,t,n,s,i,u,c,pd),e.context=nd(null),l=e.current,t=ie(),t=Wi(t),n=tl(t),n.callback=null,nl(l,n,t),l=t,e.current.lanes=l,Mt(e,l),je(e),a[Zl]=e.current,Gc(a),new Gi(e)},An.version="19.2.8",An}var Ed;function u0(){if(Ed)return oo.exports;Ed=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(H){console.error(H)}}return C(),oo.exports=i0(),oo.exports}var c0=u0();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=C=>C.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s0=C=>C.replace(/^([A-Z])|[\s-_]+(\w)/g,(H,X,v)=>v?v.toUpperCase():X.toLowerCase()),Td=C=>{const H=s0(C);return H.charAt(0).toUpperCase()+H.slice(1)},Nd=(...C)=>C.filter((H,X,v)=>!!H&&H.trim()!==""&&v.indexOf(H)===X).join(" ").trim(),r0=C=>{for(const H in C)if(H.startsWith("aria-")||H==="role"||H==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=Sl.forwardRef(({color:C="currentColor",size:H=24,strokeWidth:X=2,absoluteStrokeWidth:v,className:D="",children:G,iconNode:sa,...Ca},_)=>Sl.createElement("svg",{ref:_,...f0,width:H,height:H,stroke:C,strokeWidth:v?Number(X)*24/Number(H):X,className:Nd("lucide",D),...!G&&!r0(Ca)&&{"aria-hidden":"true"},...Ca},[...sa.map(([A,F])=>Sl.createElement(A,F)),...Array.isArray(G)?G:[G]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=(C,H)=>{const X=Sl.forwardRef(({className:v,...D},G)=>Sl.createElement(d0,{ref:G,iconNode:H,className:Nd(`lucide-${o0(Td(C))}`,`lucide-${C}`,v),...D}));return X.displayName=Td(C),X};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],p0=zl("calendar-check",m0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],h0=zl("check",v0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],xl=zl("chevron-down",g0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],jd=zl("code",y0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],x0=zl("copy",b0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],z0=zl("graduation-cap",S0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],C0=zl("lock",A0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],T0=zl("shield-check",E0);function j0(){const[C,H]=Sl.useState(!1),[X,v]=Sl.useState(!1),D="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa.",G=`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Psicóloga Isabele Costa | Terapia Online · Mulheres & LGBTQIAPN+</title>
  <meta name="description" content="Atendimento psicológico online com a Psicóloga Isabele Costa (CRP 06/214123). Espaço seguro e acolhedor com foco no público feminino e LGBTQIAPN+.">

  <!-- Google Fonts: Fraunces & Mulish -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Mulish:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">

  <style>
    /* ==========================================================================
       VARIÁVEIS CSS MODULARES (Roxo Escuro & Rosa Claro Acolhedor)
       ========================================================================== */
    :root {
      /* Roxo escuro: profundidade, escuta e elegância */
      --color-primary-dark: #2b1539;
      --color-primary-forest: #3c1e4f;
      --color-primary-hover: #1e0d29;
      
      /* Tons de rosa claro e blush suave */
      --color-sage-dark: #6e3d5c;
      --color-sage-medium: #a86c8f;
      --color-sage-light: #f2d8e4;
      --color-sage-soft: #fbf0f5;
      --color-sage-tint: #fcf5f8;
      
      /* Off-white e rosa suave para fundos */
      --color-bg-base: #fdfbfc;
      --color-bg-card: #ffffff;
      --color-bg-subtle: #f8edf3;
      
      /* Rosa acentuado e detalhes */
      --color-gold-accent: #b05c7c;
      --color-gold-hover: #964866;
      --color-gold-light: #fdf2f6;
      --color-gold-border: #f0cddb;
      
      /* Textos e contrastes (Acessibilidade WCAG AA) */
      --color-text-main: #24142d;
      --color-text-muted: #65516b;
      --color-text-light: #ffffff;
      --color-text-quote: #341842;
      
      /* Bordas */
      --color-border-subtle: #eedce6;
      --color-border-medium: #dfc2d3;
      
      /* Tipografia */
      --font-serif: 'Fraunces', Georgia, serif;
      --font-sans: 'Mulish', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      
      /* Espaçamentos modulares */
      --space-2xs: 0.25rem;  /* 4px */
      --space-xs: 0.5rem;    /* 8px */
      --space-sm: 0.75rem;   /* 12px */
      --space-md: 1rem;      /* 16px */
      --space-lg: 1.5rem;    /* 24px */
      --space-xl: 2rem;      /* 32px */
      --space-2xl: 3rem;     /* 48px */
      --space-3xl: 4.5rem;   /* 72px */
      --space-4xl: 6rem;     /* 96px */
      
      /* Layout & Raio */
      --container-max-w: 1160px;
      --radius-sm: 8px;
      --radius-md: 14px;
      --radius-lg: 22px;
      --radius-xl: 32px;
      --radius-pill: 9999px;
      
      /* Sombras */
      --shadow-subtle: 0 4px 20px -4px rgba(27, 56, 43, 0.04);
      --shadow-card: 0 12px 36px -8px rgba(27, 56, 43, 0.08);
      --shadow-btn: 0 4px 14px rgba(27, 56, 43, 0.16);
      --shadow-btn-hover: 0 6px 22px rgba(27, 56, 43, 0.24);
      
      /* Transição */
      --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      font-family: var(--font-sans);
      background-color: var(--color-bg-base);
      color: var(--color-text-main);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      scroll-behavior: smooth;
    }

    body {
      min-height: 100vh;
      background-color: var(--color-bg-base);
    }

    :focus-visible {
      outline: 2px solid var(--color-primary-dark);
      outline-offset: 3px;
      border-radius: var(--radius-sm);
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    .container {
      width: 100%;
      max-width: var(--container-max-w);
      margin-left: auto;
      margin-right: auto;
      padding-left: var(--space-lg);
      padding-right: var(--space-lg);
    }

    /* HEADER */
    .site-header {
      padding-top: var(--space-lg);
      padding-bottom: var(--space-md);
      border-bottom: 1px solid var(--color-border-subtle);
      background-color: rgba(249, 248, 245, 0.85);
      backdrop-filter: blur(8px);
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .header-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-sm);
    }

    .brand {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-family: var(--font-serif);
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--color-primary-dark);
      letter-spacing: -0.01em;
    }

    .brand-crp {
      font-size: 0.8rem;
      color: var(--color-text-muted);
      font-weight: 500;
    }

    .badge-online {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background-color: var(--color-sage-soft);
      color: var(--color-primary-forest);
      padding: 0.35rem 0.85rem;
      border-radius: var(--radius-pill);
      font-size: 0.8125rem;
      font-weight: 600;
      border: 1px solid var(--color-sage-light);
    }

    .status-dot {
      width: 7px;
      height: 7px;
      background-color: var(--color-sage-dark);
      border-radius: 50%;
      display: inline-block;
    }

    /* HERO SECTION */
    .hero-section {
      padding-top: var(--space-2xl);
      padding-bottom: var(--space-3xl);
      position: relative;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
      align-items: center;
    }

    @media (min-width: 900px) {
      .hero-grid {
        grid-template-columns: 1.15fr 0.85fr;
        gap: var(--space-3xl);
      }
      .hero-section {
        padding-top: var(--space-3xl);
        padding-bottom: var(--space-4xl);
      }
    }

    /* Conteúdo Textual */
    .hero-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-sage-dark);
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    .hero-eyebrow-line {
      width: 24px;
      height: 1px;
      background-color: var(--color-sage-medium);
    }

    .hero-title {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 4.5vw, 3.25rem);
      font-weight: 500;
      line-height: 1.2;
      color: var(--color-primary-dark);
      letter-spacing: -0.02em;
    }

    .hero-subtitle {
      font-size: 1.125rem;
      line-height: 1.65;
      color: var(--color-text-muted);
      max-width: 58ch;
      font-weight: 400;
    }

    /* Citação de Carl Rogers */
    .quote-box {
      background-color: var(--color-sage-soft);
      border-left: 3px solid var(--color-gold-accent);
      border-radius: 0 var(--radius-md) var(--radius-md) 0;
      padding: var(--space-md) var(--space-lg);
      margin-top: var(--space-xs);
      margin-bottom: var(--space-xs);
    }

    .quote-text {
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 1.05rem;
      color: var(--color-text-quote);
      line-height: 1.5;
      margin-bottom: var(--space-2xs);
    }

    .quote-author {
      font-family: var(--font-sans);
      font-style: normal;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-sage-dark);
      display: block;
    }

    /* CTA Único */
    .hero-actions {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-md);
      margin-top: var(--space-xs);
    }

    .btn-whatsapp {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      background-color: var(--color-primary-dark);
      color: var(--color-text-light);
      text-decoration: none;
      font-size: 1.05rem;
      font-weight: 600;
      padding: 0.95rem 1.9rem;
      border-radius: var(--radius-pill);
      box-shadow: var(--shadow-btn);
      transition: all var(--transition-normal);
      border: 1px solid var(--color-primary-forest);
      width: 100%;
      max-width: 320px;
    }

    .btn-whatsapp:hover {
      background-color: var(--color-primary-hover);
      box-shadow: var(--shadow-btn-hover);
      transform: translateY(-2px);
    }

    .btn-whatsapp:active {
      transform: translateY(0);
    }

    .btn-icon-whatsapp {
      width: 22px;
      height: 22px;
      fill: currentColor;
    }

    /* Sinais de Confiança */
    .trust-indicators {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--space-md);
      font-size: 0.875rem;
      color: var(--color-text-muted);
      padding-top: var(--space-xs);
      border-top: 1px solid var(--color-border-subtle);
      width: 100%;
    }

    .trust-item {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-weight: 500;
    }

    .trust-icon {
      color: var(--color-gold-accent);
      flex-shrink: 0;
    }

    .trust-divider {
      color: var(--color-border-medium);
    }

    /* COLUNA DA FOTO / PLACEHOLDER DA PSICÓLOGA */
    .hero-media {
      display: flex;
      justify-content: center;
      position: relative;
    }

    .photo-card-wrapper {
      position: relative;
      width: 100%;
      max-width: 390px;
    }

    .photo-backdrop {
      position: absolute;
      inset: -10px;
      background: linear-gradient(135deg, var(--color-sage-light), var(--color-sage-soft));
      border-radius: var(--radius-xl);
      transform: rotate(-1.5deg);
      z-index: 1;
    }

    .photo-card {
      position: relative;
      background-color: var(--color-bg-card);
      border-radius: var(--radius-lg);
      padding: var(--space-sm);
      box-shadow: var(--shadow-card);
      border: 1px solid var(--color-border-subtle);
      z-index: 2;
      overflow: hidden;
    }

    .photo-placeholder {
      width: 100%;
      height: 420px;
      border-radius: calc(var(--radius-lg) - var(--space-sm));
      background-color: var(--color-sage-soft);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .photo-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: inherit;
    }

    .photo-overlay-card {
      position: absolute;
      bottom: var(--space-md);
      left: var(--space-md);
      right: var(--space-md);
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      padding: var(--space-sm) var(--space-md);
      border-radius: var(--radius-md);
      border: 1px solid var(--color-border-subtle);
      box-shadow: var(--shadow-subtle);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .photo-badge-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--color-gold-light);
      border: 1px solid var(--color-gold-border);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-gold-accent);
      flex-shrink: 0;
    }

    .photo-badge-title {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--color-primary-dark);
      line-height: 1.2;
    }

    .photo-badge-desc {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      line-height: 1.3;
    }

    /* ==========================================================================
       SEÇÃO: SOBRE A ISABELE
       ========================================================================== */
    .about-section {
      padding: var(--space-3xl) var(--space-lg);
      background-color: var(--color-bg-card);
      border-top: 1px solid var(--color-border-subtle);
      border-bottom: 1px solid var(--color-border-subtle);
    }

    @media (min-width: 768px) {
      .about-section {
        padding: var(--space-4xl) var(--space-lg);
      }
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
      align-items: center;
    }

    @media (min-width: 900px) {
      .about-grid {
        grid-template-columns: 5fr 7fr;
        gap: var(--space-3xl);
      }
    }

    .about-media {
      display: flex;
      justify-content: center;
      position: relative;
    }

    .about-photo-wrapper {
      position: relative;
      width: 100%;
      max-width: 360px;
    }

    .about-photo-backdrop {
      position: absolute;
      inset: -10px;
      background: linear-gradient(135deg, var(--color-sage-soft), var(--color-sage-light));
      border-radius: var(--radius-xl);
      transform: rotate(1.5deg);
      z-index: 1;
    }

    .about-photo-card {
      position: relative;
      background-color: var(--color-bg-card);
      border-radius: var(--radius-lg);
      padding: var(--space-sm);
      box-shadow: var(--shadow-card);
      border: 1px solid var(--color-border-subtle);
      z-index: 2;
    }

    .about-photo-placeholder {
      width: 100%;
      height: 390px;
      border-radius: calc(var(--radius-lg) - var(--space-sm));
      background-color: var(--color-sage-soft);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .about-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.6s ease;
    }

    .about-photo-card:hover .about-img {
      transform: scale(1.03);
    }

    .about-photo-caption {
      position: relative;
      z-index: 2;
      background: linear-gradient(to top, rgba(36, 20, 45, 0.85) 0%, rgba(36, 20, 45, 0.4) 60%, transparent 100%);
      padding: var(--space-lg) var(--space-md) var(--space-md);
      color: #ffffff;
      text-align: left;
    }

    .about-photo-caption-tag {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-sage-light);
      margin-bottom: 3px;
    }

    .about-photo-caption-text {
      font-size: 0.84rem;
      color: #ffffff;
      opacity: 0.95;
      margin: 0;
      font-family: var(--font-sans);
      line-height: 1.35;
    }

    .about-content {
      display: flex;
      flex-direction: column;
    }

    .about-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-sage-dark);
      margin-bottom: var(--space-xs);
    }

    .about-title {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--color-primary-dark);
      letter-spacing: -0.015em;
      margin-bottom: var(--space-lg);
    }

    @media (min-width: 768px) {
      .about-title {
        font-size: 2.35rem;
      }
    }

    .about-paragraphs {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      margin-bottom: var(--space-xl);
    }

    .about-paragraph {
      font-size: 0.98rem;
      line-height: 1.7;
      color: var(--color-text-main);
      margin: 0;
    }

    @media (min-width: 768px) {
      .about-paragraph {
        font-size: 1.02rem;
      }
    }

    .about-credentials {
      background-color: var(--color-bg-subtle);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      padding: var(--space-lg);
    }

    .about-credentials-title {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--color-primary-forest);
      margin-bottom: var(--space-sm);
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .credentials-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .credentials-item {
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
      font-size: 0.9rem;
      line-height: 1.5;
      color: var(--color-text-main);
    }

    .credentials-bullet {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--color-gold-accent);
      margin-top: 0.5rem;
      flex-shrink: 0;
    }

    .credentials-item strong {
      color: var(--color-primary-dark);
      font-weight: 600;
    }

    /* ==========================================================================
       SEÇÃO: COMO FUNCIONA A TERAPIA ONLINE
       ========================================================================== */
    .steps-section {
      padding: var(--space-3xl) var(--space-lg);
      background-color: var(--color-bg-page);
    }

    @media (min-width: 768px) {
      .steps-section {
        padding: var(--space-4xl) var(--space-lg);
      }
    }

    .steps-header {
      text-align: center;
      max-width: 680px;
      margin: 0 auto var(--space-3xl);
    }

    .steps-eyebrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-sage-dark);
      margin-bottom: var(--space-xs);
    }

    .steps-title {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--color-primary-dark);
      letter-spacing: -0.015em;
      margin-bottom: var(--space-sm);
    }

    @media (min-width: 768px) {
      .steps-title {
        font-size: 2.35rem;
      }
    }

    .steps-intro {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--color-text-muted);
      margin: 0;
    }

    @media (min-width: 768px) {
      .steps-intro {
        font-size: 1.05rem;
      }
    }

    .steps-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-lg);
      max-width: 1160px;
      margin: 0 auto var(--space-3xl);
    }

    @media (min-width: 640px) {
      .steps-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-xl);
      }
    }

    @media (min-width: 1024px) {
      .steps-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-lg);
      }
    }

    .step-card {
      background-color: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-lg);
      padding: var(--space-xl) var(--space-lg);
      display: flex;
      flex-direction: column;
      position: relative;
      box-shadow: var(--shadow-card);
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }

    .step-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px -5px rgba(36, 20, 45, 0.08);
      border-color: var(--color-border-medium);
    }

    .step-number-badge {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-color: var(--color-sage-soft);
      border: 1px solid var(--color-border-subtle);
      color: var(--color-primary-forest);
      font-family: var(--font-serif);
      font-size: 1.15rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-md);
      flex-shrink: 0;
    }

    .step-title {
      font-family: var(--font-serif);
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.35;
      color: var(--color-primary-dark);
      margin-bottom: var(--space-xs);
    }

    .step-desc {
      font-size: 0.92rem;
      line-height: 1.6;
      color: var(--color-text-main);
      margin: 0;
      flex-grow: 1;
    }

    .steps-cta-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: var(--space-sm);
    }

    /* ==========================================================================
       SEÇÃO: TALVEZ VOCÊ SE IDENTIFIQUE COM ISSO (PARA QUEM É)
       ========================================================================== */
    .topics-section {
      padding: var(--space-3xl) var(--space-lg);
      background-color: var(--color-bg-subtle);
    }

    @media (min-width: 768px) {
      .topics-section {
        padding: var(--space-4xl) var(--space-lg);
      }
    }

    .topics-header {
      text-align: center;
      max-width: 720px;
      margin: 0 auto var(--space-3xl);
    }

    .topics-eyebrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-sage-dark);
      margin-bottom: var(--space-xs);
    }

    .topics-title {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--color-primary-dark);
      letter-spacing: -0.015em;
      margin-bottom: var(--space-sm);
    }

    @media (min-width: 768px) {
      .topics-title {
        font-size: 2.35rem;
      }
    }

    .topics-intro {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--color-text-muted);
      margin: 0;
    }

    @media (min-width: 768px) {
      .topics-intro {
        font-size: 1.05rem;
      }
    }

    .topics-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-md);
      max-width: 1160px;
      margin: 0 auto var(--space-2xl);
    }

    @media (min-width: 640px) {
      .topics-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-lg);
      }
    }

    @media (min-width: 1024px) {
      .topics-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-lg);
      }
    }

    .topic-card {
      background-color: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-lg);
      padding: var(--space-xl) var(--space-lg);
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-card);
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }

    .topic-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px -5px rgba(36, 20, 45, 0.08);
      border-color: var(--color-border-medium);
    }

    .topic-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--color-gold-accent);
      margin-bottom: var(--space-md);
    }

    .topic-title {
      font-family: var(--font-serif);
      font-size: 1.15rem;
      font-weight: 600;
      line-height: 1.35;
      color: var(--color-primary-dark);
      margin-bottom: var(--space-xs);
    }

    .topic-desc {
      font-size: 0.92rem;
      line-height: 1.6;
      color: var(--color-text-muted);
      margin: 0;
    }

    .topics-closing {
      max-width: 700px;
      margin: 0 auto var(--space-2xl);
      text-align: center;
      padding: var(--space-lg) var(--space-xl);
      background-color: rgba(231, 215, 236, 0.35);
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-border-subtle);
    }

    .topics-closing p {
      font-size: 0.98rem;
      line-height: 1.65;
      color: var(--color-primary-forest);
      font-weight: 500;
      margin: 0;
    }

    .topics-cta-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: var(--space-sm);
    }

    /* ==========================================================================
       SEÇÃO: PERGUNTAS FREQUENTES (FAQ)
       ========================================================================== */
    .faq-section {
      padding: var(--space-3xl) var(--space-lg);
      background-color: var(--color-bg-page);
    }

    @media (min-width: 768px) {
      .faq-section {
        padding: var(--space-4xl) var(--space-lg);
      }
    }

    .faq-header {
      text-align: center;
      max-width: 680px;
      margin: 0 auto var(--space-3xl);
    }

    .faq-eyebrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-sage-dark);
      margin-bottom: var(--space-xs);
    }

    .faq-title {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--color-primary-dark);
      letter-spacing: -0.015em;
      margin-bottom: 0;
    }

    @media (min-width: 768px) {
      .faq-title {
        font-size: 2.35rem;
      }
    }

    .faq-list {
      max-width: 820px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .faq-item {
      background-color: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: 0 2px 10px -2px rgba(36, 20, 45, 0.04);
      transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
    }

    .faq-item:hover {
      border-color: var(--color-border-medium);
      box-shadow: var(--shadow-card);
    }

    .faq-item[open] {
      border-color: var(--color-sage-medium);
      box-shadow: var(--shadow-card);
    }

    .faq-question {
      padding: var(--space-lg) var(--space-xl);
      font-family: var(--font-sans);
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--color-primary-dark);
      cursor: pointer;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-md);
      user-select: none;
      transition: color 0.2s ease;
    }

    .faq-question::-webkit-details-marker {
      display: none;
    }

    .faq-question:hover {
      color: var(--color-sage-dark);
    }

    .faq-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      color: var(--color-sage-dark);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .faq-item[open] .faq-icon {
      transform: rotate(180deg);
      color: var(--color-primary-forest);
    }

    .faq-answer {
      padding: 0 var(--space-xl) var(--space-lg) var(--space-xl);
      font-size: 0.95rem;
      line-height: 1.65;
      color: var(--color-text-muted);
      border-top: 1px solid transparent;
      animation: faqFadeIn 0.25s ease-out;
    }

    @keyframes faqFadeIn {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ==========================================================================
       SEÇÃO: CHAMADA FINAL (CTA)
       ========================================================================== */
    .cta-final-section {
      padding: var(--space-3xl) var(--space-lg);
      background-color: var(--color-bg-subtle);
      text-align: center;
    }

    @media (min-width: 768px) {
      .cta-final-section {
        padding: var(--space-4xl) var(--space-lg);
      }
    }

    .cta-final-content {
      max-width: 680px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .cta-final-title {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--color-primary-dark);
      letter-spacing: -0.015em;
      margin-bottom: var(--space-md);
    }

    @media (min-width: 768px) {
      .cta-final-title {
        font-size: 2.35rem;
      }
    }

    .cta-final-desc {
      font-size: 1.05rem;
      line-height: 1.65;
      color: var(--color-text-muted);
      margin-bottom: var(--space-2xl);
    }

    @media (min-width: 768px) {
      .cta-final-desc {
        font-size: 1.12rem;
      }
    }

    /* ==========================================================================
       RODAPÉ / FOOTER
       ========================================================================== */
    .site-footer {
      background-color: var(--color-bg-page);
      border-top: 1px solid var(--color-border-subtle);
      padding: var(--space-3xl) var(--space-lg) var(--space-2xl);
      color: var(--color-text-muted);
    }

    .footer-inner {
      max-width: 1160px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: var(--space-2xl);
    }

    .footer-top {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
      justify-content: space-between;
    }

    @media (min-width: 768px) {
      .footer-top {
        flex-direction: row;
        align-items: flex-start;
      }
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .footer-brand-title {
      font-family: var(--font-serif);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-primary-dark);
    }

    .footer-brand-crp {
      font-size: 0.9rem;
      color: var(--color-sage-dark);
      font-weight: 600;
    }

    .footer-brand-scope {
      font-size: 0.88rem;
      color: var(--color-text-muted);
      margin-top: 2px;
    }

    .footer-contact {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 0.9rem;
    }

    .footer-contact a {
      color: var(--color-primary-forest);
      text-decoration: none;
      transition: color 0.2s ease, text-decoration 0.2s ease;
    }

    .footer-contact a:hover {
      text-decoration: underline;
      color: var(--color-primary-dark);
    }

    .footer-bottom {
      border-top: 1px solid var(--color-border-subtle);
      padding-top: var(--space-lg);
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      align-items: center;
      justify-content: space-between;
      font-size: 0.82rem;
    }

    @media (min-width: 640px) {
      .footer-bottom {
        flex-direction: row;
      }
    }

    .footer-policy-link {
      color: var(--color-text-muted);
      text-decoration: underline;
      text-underline-offset: 3px;
      transition: color 0.2s ease;
    }

    .footer-policy-link:hover {
      color: var(--color-primary-dark);
    }

    /* Botão Flutuante do WhatsApp */
    .whatsapp-float {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 58px;
      height: 58px;
      background-color: #25D366;
      color: #ffffff;
      border-radius: 50%;
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4), 0 2px 8px rgba(0, 0, 0, 0.15);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      text-decoration: none;
    }

    .whatsapp-float:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 10px 25px rgba(37, 211, 102, 0.55), 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .whatsapp-float:active {
      transform: scale(0.96);
    }

    .whatsapp-float-icon {
      width: 32px;
      height: 32px;
      fill: currentColor;
    }

    .whatsapp-float-tooltip {
      position: absolute;
      right: calc(100% + 12px);
      background-color: var(--color-primary-dark);
      color: #ffffff;
      font-size: 0.85rem;
      font-weight: 600;
      white-space: nowrap;
      padding: 0.45rem 0.85rem;
      border-radius: var(--radius-pill);
      box-shadow: var(--shadow-sm);
      opacity: 0;
      visibility: hidden;
      transform: translateX(8px);
      transition: all 0.2s ease;
      pointer-events: none;
    }

    .whatsapp-float:hover .whatsapp-float-tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }

    .whatsapp-float-pulse {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background-color: #25D366;
      opacity: 0.4;
      animation: wa-pulse 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
      z-index: -1;
    }

    @keyframes wa-pulse {
      0% {
        transform: scale(1);
        opacity: 0.5;
      }
      70% {
        transform: scale(1.4);
        opacity: 0;
      }
      100% {
        transform: scale(1.4);
        opacity: 0;
      }
    }
  </style>
</head>
<body>

  <!-- ==========================================================================
       CABEÇALHO / HEADER
       ========================================================================== -->
  <header class="site-header" id="header">
    <div class="container header-inner">
      <div class="brand">
        <span class="brand-name">Psicóloga Isabele Costa</span>
        <span class="brand-crp">CRP 06/214123</span>
      </div>
      <div class="badge-online">
        <span class="status-dot"></span>
        <span>Atendimento 100% online</span>
      </div>
    </div>
  </header>

  <!-- ==========================================================================
       CONTEÚDO PRINCIPAL
       ========================================================================== -->
  <main id="main-content">
    
    <!-- SEÇÃO HERO (Primeira seção da landing page) -->
    <section class="hero-section" id="hero" aria-labelledby="hero-heading">
      <div class="container">
        <div class="hero-grid">
          
          <!-- Coluna 1: Conteúdo Textual & CTA -->
          <div class="hero-content">
            
            <div class="hero-eyebrow">
              <span class="hero-eyebrow-line"></span>
              <span>Psicoterapia Online · Mulheres & LGBTQIAPN+</span>
            </div>

            <h1 class="hero-title" id="hero-heading">
              Você não precisa dar conta de tudo só.
            </h1>

            <p class="hero-subtitle">
              Um espaço de terapia online com foco no público feminino e LGBTQIAPN+, para fortalecer a autoestima, aliviar a autocobrança e cultivar relações mais saudáveis.
            </p>

            <!-- Citação Carl Rogers em destaque sutil -->
            <div class="quote-box">
              <blockquote class="quote-text">
                "O paradoxo curioso é que quando eu me aceito como eu sou, então eu mudo."
              </blockquote>
              <cite class="quote-author">Carl Rogers</cite>
            </div>

            <!-- Botão Principal Único -->
            <div class="hero-actions">
              <a 
                href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa." 
                class="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp para agendar primeira conversa"
              >
                <svg class="btn-icon-whatsapp" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Agendar primeira conversa</span>
              </a>
            </div>

            <!-- Sinais de Confiança Visíveis -->
            <div class="trust-indicators">
              <div class="trust-item">
                <svg class="trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Psicóloga Isabele Costa · CRP 06/214123</span>
              </div>
              <span class="trust-divider">·</span>
              <div class="trust-item">
                <svg class="trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Atendimento 100% online</span>
              </div>
            </div>

          </div>

          <!-- Coluna 2: Espaço reservado para a Foto da Psicóloga (Placeholder) -->
          <div class="hero-media">
            <div class="photo-card-wrapper">
              <div class="photo-backdrop"></div>
              
              <div class="photo-card">
                <div class="photo-placeholder">
                  <!-- Foto profissional da Psicóloga Isabele Costa -->
                  <img 
                    src="/assets/foto/foto-isabele-costa.webp" 
                    alt="Foto profissional da Psicóloga Isabele Costa (CRP 06/214123)" 
                    class="photo-img"
                    loading="lazy"
                  />
                  
                  <!-- Selo flutuante de acolhimento ético -->
                  <div class="photo-overlay-card">
                    <div class="photo-badge-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="photo-badge-title">Espaço Seguro & Confidencial</p>
                      <p class="photo-badge-desc">Atendimento ético conforme o CFP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SEÇÃO: SOBRE A ISABELE (Apresentação da psicóloga) -->
    <section class="about-section" id="sobre" aria-labelledby="about-heading">
      <div class="container">
        <div class="about-grid">
          
          <!-- Coluna 1: Foto da Psicóloga Isabele Costa -->
          <div class="about-media">
            <div class="about-photo-wrapper">
              <div class="about-photo-backdrop"></div>
              
              <div class="about-photo-card">
                <div class="about-photo-placeholder">
                  <img 
                    src="/assets/foto/foto-isabele-costa-2.jpg" 
                    alt="Foto da Psicóloga Isabele Costa (CRP 06/214123)" 
                    class="about-img"
                    loading="lazy"
                  />
                  <div class="about-photo-caption">
                    <div class="about-photo-caption-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      <span>Isabele Costa</span>
                    </div>
                    <p class="about-photo-caption-text">Psicóloga Clínica · CRP 06/214123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Coluna 2: Conteúdo Textual & Credenciais -->
          <div class="about-content">
            
            <div class="about-eyebrow">
              <span class="hero-eyebrow-line"></span>
              <span>Apresentação</span>
            </div>

            <h2 class="about-title" id="about-heading">
              Prazer, sou a Isabele
            </h2>

            <div class="about-paragraphs">
              <p class="about-paragraph">
                Prazer, sou a Isabele Costa, psicóloga (CRP 06/214123). Acredito que toda pessoa merece um espaço para ser ouvida sem pressa e sem julgamento, e é isso que ofereço nas sessões: um lugar leve, onde você conduz o que precisa falar, no seu tempo.
              </p>

              <p class="about-paragraph">
                Meu trabalho é guiado pela Abordagem Centrada na Pessoa, dentro da psicologia fenomenológica humanista. Na prática, isso quer dizer que eu não chego com respostas prontas. Eu caminho ao seu lado enquanto você se entende melhor e encontra o seu próprio jeito de seguir.
              </p>

              <p class="about-paragraph">
                Atendo online desde 2022, com um cuidado especial no acompanhamento de mulheres e no acolhimento de pessoas LGBTQIAPN+. Aqui, você pode ser exatamente quem você é.
              </p>
            </div>

            <!-- Credenciais como lista simples e organizada -->
            <div class="about-credentials">
              <div class="about-credentials-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <span>Credenciais & Formação</span>
              </div>
              <ul class="credentials-list">
                <li class="credentials-item">
                  <span class="credentials-bullet"></span>
                  <span><strong>Pós-graduação:</strong> Psicologia Clínica pela PUC-RS (em conclusão)</span>
                </li>
                <li class="credentials-item">
                  <span class="credentials-bullet"></span>
                  <span><strong>Abordagem:</strong> Centrada na Pessoa (fenomenológica-humanista)</span>
                </li>
                <li class="credentials-item">
                  <span class="credentials-bullet"></span>
                  <span><strong>Atendimento:</strong> online pela plataforma Google Meet</span>
                </li>
                <li class="credentials-item">
                  <span class="credentials-bullet"></span>
                  <span><strong>Registro:</strong> CRP 06/214123</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- SEÇÃO: COMO FUNCIONA A TERAPIA ONLINE (Passo a passo do atendimento) -->
    <section class="steps-section" id="como-funciona" aria-labelledby="steps-heading">
      <div class="container">
        
        <!-- Cabeçalho da Seção -->
        <div class="steps-header">
          <div class="steps-eyebrow">
            <span class="hero-eyebrow-line"></span>
            <span>Passo a Passo</span>
            <span class="hero-eyebrow-line"></span>
          </div>
          <h2 class="steps-title" id="steps-heading">
            Como funciona a terapia online
          </h2>
          <p class="steps-intro">
            Começar é mais simples do que parece. Este é o caminho até a sua primeira sessão:
          </p>
        </div>

        <!-- Grade de 4 Passos -->
        <div class="steps-grid">
          
          <!-- Passo 1 -->
          <div class="step-card">
            <div class="step-number-badge">1</div>
            <h3 class="step-title">Primeiro contato</h3>
            <p class="step-desc">
              você me chama no WhatsApp e combinamos uma primeira conversa, sem pressa.
            </p>
          </div>

          <!-- Passo 2 -->
          <div class="step-card">
            <div class="step-number-badge">2</div>
            <h3 class="step-title">Combinamos o horário</h3>
            <p class="step-desc">
              escolhemos juntos o melhor dia e horário para os nossos encontros semanais.
            </p>
          </div>

          <!-- Passo 3 -->
          <div class="step-card">
            <div class="step-number-badge">3</div>
            <h3 class="step-title">Nos encontramos por vídeo</h3>
            <p class="step-desc">
              as sessões acontecem pelo Google Meet, em um ambiente reservado e sigiloso, de onde você estiver. Cada uma dura cerca de 50 minutos, podendo se estender um pouco conforme a sua necessidade e a disponibilidade do horário.
            </p>
          </div>

          <!-- Passo 4 -->
          <div class="step-card">
            <div class="step-number-badge">4</div>
            <h3 class="step-title">Seguimos no seu ritmo</h3>
            <p class="step-desc">
              semana a semana, construímos um espaço de cuidado contínuo, respeitando o seu tempo.
            </p>
          </div>

        </div>

        <!-- Botão de Ação / WhatsApp -->
        <div class="steps-cta-wrapper">
          <a 
            href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa." 
            class="btn-whatsapp" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp para iniciar meu processo terapêutico"
          >
            <svg class="btn-icon-whatsapp" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Quero iniciar meu processo</span>
          </a>
        </div>

      </div>
    </section>

    <!-- SEÇÃO: TALVEZ VOCÊ SE IDENTIFIQUE COM ISSO (Temas / Para quem é) -->
    <section class="topics-section" id="temas" aria-labelledby="topics-heading">
      <div class="container">
        
        <!-- Cabeçalho da Seção -->
        <div class="topics-header">
          <div class="topics-eyebrow">
            <span class="hero-eyebrow-line"></span>
            <span>Para quem é</span>
            <span class="hero-eyebrow-line"></span>
          </div>
          <h2 class="topics-title" id="topics-heading">
            Talvez você se identifique com isso
          </h2>
          <p class="topics-intro">
            Cada história é única, mas é comum que alguns sentimentos se repitam. Talvez você reconheça aqui um pouco do que tem vivido:
          </p>
        </div>

        <!-- Grade de 6 Temas -->
        <div class="topics-grid">
          
          <!-- Tema 1 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Autocrítica e autocobrança</h3>
            <p class="topic-desc">
              aquela voz interna que raramente te dá descanso.
            </p>
          </div>

          <!-- Tema 2 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Baixa autoestima e inseguranças</h3>
            <p class="topic-desc">
              a sensação de nunca ser o bastante.
            </p>
          </div>

          <!-- Tema 3 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Relacionamentos que machucam</h3>
            <p class="topic-desc">
              vínculos que pesam mais do que acolhem.
            </p>
          </div>

          <!-- Tema 4 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Ansiedade e preocupação constante</h3>
            <p class="topic-desc">
              a mente que não desliga.
            </p>
          </div>

          <!-- Tema 5 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Autoconhecimento e autoaceitação</h3>
            <p class="topic-desc">
              a vontade de se entender e se aceitar como você é.
            </p>
          </div>

          <!-- Tema 6 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Fases de transição e recomeços</h3>
            <p class="topic-desc">
              mudanças que trazem dúvidas e inseguranças.
            </p>
          </div>

        </div>

        <!-- Fechamento da Seção -->
        <div class="topics-closing">
          <p>
            Se você se reconheceu em algum desses pontos, saiba que não precisa lidar com isso só. Aqui, cada um desses temas tem espaço para ser acolhido.
          </p>
        </div>

        <!-- Botão de Ação / WhatsApp -->
        <div class="topics-cta-wrapper">
          <a 
            href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa." 
            class="btn-whatsapp" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp para conversar sobre o que sinto"
          >
            <svg class="btn-icon-whatsapp" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Quero conversar sobre o que sinto</span>
          </a>
        </div>

      </div>
    </section>

    <!-- SEÇÃO: PERGUNTAS FREQUENTES (FAQ) -->
    <section class="faq-section" id="faq" aria-labelledby="faq-heading">
      <div class="container">
        
        <!-- Cabeçalho da Seção -->
        <div class="faq-header">
          <div class="faq-eyebrow">
            <span class="hero-eyebrow-line"></span>
            <span>Dúvidas Comuns</span>
            <span class="hero-eyebrow-line"></span>
          </div>
          <h2 class="faq-title" id="faq-heading">
            Perguntas frequentes
          </h2>
        </div>

        <!-- Lista de Perguntas e Respostas (Acordeão) -->
        <div class="faq-list">
          
          <!-- Pergunta 1 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>A terapia online funciona mesmo?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Sim. A terapia online segue os mesmos princípios e o mesmo cuidado do atendimento presencial. O que muda é o formato: nos encontramos por vídeo, com a mesma escuta, a mesma atenção e o mesmo sigilo.
            </div>
          </details>

          <!-- Pergunta 2 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Como funciona o sigilo?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Tudo o que você compartilha nas sessões é confidencial e protegido pelo Código de Ética da Psicologia. É um espaço seguro, só seu.
            </div>
          </details>

          <!-- Pergunta 3 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Do que eu preciso para participar?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Um aparelho com câmera e internet, e um lugar reservado onde você se sinta à vontade para conversar. As sessões acontecem pelo Google Meet.
            </div>
          </details>

          <!-- Pergunta 4 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Com que frequência são as sessões?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Em geral, os encontros são semanais, com dia e horário combinados entre nós. Isso pode ser ajustado conforme a sua necessidade.
            </div>
          </details>

          <!-- Pergunta 5 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Quanto tempo dura cada sessão?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Cada sessão dura cerca de 50 minutos, podendo se estender um pouco conforme a sua necessidade e a disponibilidade do horário.
            </div>
          </details>

          <!-- Pergunta 6 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Qual é o valor da sessão?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Os valores são informados na nossa primeira conversa, pelo WhatsApp, para que eu possa te explicar tudo com calma.
            </div>
          </details>

          <!-- Pergunta 7 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Você emite recibo para reembolso?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Sim. Emito recibo das sessões, que você pode usar para pedir reembolso ao seu plano de saúde, caso ele ofereça esse benefício.
            </div>
          </details>

          <!-- Pergunta 8 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Como faço para começar?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              É só me chamar no WhatsApp. A partir daí, combinamos a sua primeira conversa.
            </div>
          </details>

        </div>

      </div>
    </section>

    <!-- ==========================================================================
         SEÇÃO: CHAMADA FINAL (CTA)
         ========================================================================== -->
    <section class="cta-final-section" id="contato" aria-labelledby="cta-final-heading">
      <div class="container">
        <div class="cta-final-content">
          <h2 class="cta-final-title" id="cta-final-heading">
            Quando você quiser começar, estarei por aqui.
          </h2>
          <p class="cta-final-desc">
            Dar o primeiro passo já é um cuidado com você. Vamos conversar e ver, sem pressa, se faz sentido começarmos.
          </p>
          <a 
            href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn-whatsapp"
            id="btn-cta-final-whatsapp"
            aria-label="Falar no WhatsApp para conversar sem pressa com a psicóloga"
          >
            <svg class="btn-icon-whatsapp" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.27 15.11 13.67 14.88 13.59C14.66 13.5 14.5 13.46 14.33 13.71C14.17 13.96 13.71 14.5 13.57 14.66C13.43 14.83 13.29 14.85 13.04 14.72C12.79 14.6 11.99 14.34 11.04 13.49C10.3 12.83 9.8 12.02 9.66 11.77C9.52 11.52 9.64 11.39 9.77 11.26C9.88 11.15 10.02 10.97 10.15 10.82C10.28 10.67 10.32 10.57 10.4 10.4C10.49 10.24 10.44 10.1 10.38 9.97C10.32 9.85 9.82 8.63 9.61 8.13C9.41 7.64 9.2 7.71 9.05 7.7C8.91 7.69 8.75 7.69 8.58 7.69C8.41 7.69 8.14 7.75 7.91 8C7.68 8.25 7.04 8.85 7.04 10.07C7.04 11.29 7.93 12.47 8.05 12.63C8.18 12.8 9.79 15.28 12.26 16.34C12.85 16.59 13.3 16.74 13.66 16.86C14.25 17.05 14.79 17.02 15.22 16.96C15.7 16.89 16.69 16.36 16.9 15.78C17.11 15.19 17.11 14.69 17.04 14.59C16.98 14.47 16.82 14.51 16.57 14.39Z"/>
            </svg>
            <span>Vamos conversar sem pressa</span>
          </a>
        </div>
      </div>
    </section>

  </main>

  <!-- ==========================================================================
       RODAPÉ / FOOTER
       ========================================================================== -->
  <footer class="site-footer" id="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="footer-brand-title">Psicóloga Isabele Costa · CRP 06/214123</span>
          <span class="footer-brand-scope">Atendimento psicológico online para todo o Brasil</span>
        </div>
        <div class="footer-contact">
          <div>WhatsApp: <a href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa." target="_blank" rel="noopener noreferrer">(12) 99171-5684</a></div>
          <div>E-mail: <a href="mailto:psiisabelecosta@gmail.com">psiisabelecosta@gmail.com</a></div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Isabele Costa</span>
        <a href="#privacidade" class="footer-policy-link">Política de Privacidade</a>
      </div>
    </div>
  </footer>

  <!-- ==========================================================================
       BOTÃO FLUTUANTE DO WHATSAPP
       ========================================================================== -->
  <a 
    href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa."
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-float"
    id="whatsapp-float-btn"
    aria-label="Falar com a Psicóloga Isabele Costa no WhatsApp"
  >
    <div class="whatsapp-float-pulse" aria-hidden="true"></div>
    <span class="whatsapp-float-tooltip">Falar no WhatsApp</span>
    <svg class="whatsapp-float-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>

</body>
</html>`,sa=()=>{navigator.clipboard.writeText(G),H(!0),setTimeout(()=>H(!1),2500)};return o.jsxs("div",{className:"min-h-screen flex flex-col justify-between",style:{backgroundColor:"var(--color-bg-base)"},children:[o.jsx("header",{id:"header",className:"w-full border-b sticky top-0 z-40 backdrop-blur-md",style:{borderColor:"var(--color-border-subtle)",backgroundColor:"rgba(249, 248, 245, 0.88)"},children:o.jsxs("div",{className:"max-w-[1160px] mx-auto px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3",children:[o.jsxs("div",{className:"flex flex-col",children:[o.jsx("span",{className:"text-lg font-semibold tracking-tight",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Psicóloga Isabele Costa"}),o.jsx("span",{className:"text-xs font-medium",style:{color:"var(--color-text-muted)"},children:"CRP 06/214123"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border",style:{backgroundColor:"var(--color-sage-soft)",color:"var(--color-primary-forest)",borderColor:"var(--color-sage-light)"},children:[o.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:"var(--color-sage-dark)"}}),o.jsx("span",{children:"Atendimento 100% online"})]}),o.jsxs("button",{onClick:()=>v(!0),className:"hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors hover:bg-white",style:{color:"var(--color-sage-dark)",borderColor:"var(--color-border-medium)",backgroundColor:"transparent"},title:"Ver código do arquivo único HTML",children:[o.jsx(jd,{size:14}),o.jsx("span",{children:"Ver Código HTML"})]})]})]})}),o.jsxs("main",{id:"main-content",className:"flex-1",children:[o.jsx("section",{id:"hero","aria-labelledby":"hero-title",className:"py-12 sm:py-16 md:py-20 lg:py-24",children:o.jsxs("div",{className:"max-w-[860px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center gap-6 sm:gap-7",children:[o.jsxs("div",{className:"inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full border shadow-sm",style:{backgroundColor:"var(--color-sage-soft)",borderColor:"var(--color-sage-medium)",color:"var(--color-sage-dark)"},children:[o.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:"var(--color-gold-accent)"}}),o.jsx("span",{className:"text-xs sm:text-sm font-semibold tracking-wider uppercase",children:"Psicoterapia Online · Mulheres & LGBTQIAPN+"})]}),o.jsx("h1",{id:"hero-title",className:"text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium leading-[1.18] tracking-tight max-w-[22ch]",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Você não precisa dar conta de tudo só."}),o.jsx("p",{className:"text-base sm:text-lg md:text-[1.15rem] leading-relaxed max-w-[56ch]",style:{color:"var(--color-text-muted)"},children:"Um espaço de terapia online com foco no público feminino e LGBTQIAPN+, para fortalecer a autoestima, aliviar a autocobrança e cultivar relações mais saudáveis."}),o.jsxs("div",{className:"rounded-2xl py-4 px-6 my-1 border max-w-[580px] w-full text-center",style:{backgroundColor:"var(--color-sage-soft)",borderColor:"var(--color-sage-medium)"},children:[o.jsx("blockquote",{className:"italic text-base sm:text-[1.1rem] leading-relaxed mb-1.5",style:{fontFamily:"var(--font-serif)",color:"var(--color-text-quote)"},children:"“O paradoxo curioso é que quando eu me aceito como eu sou, então eu mudo.”"}),o.jsx("cite",{className:"not-italic text-xs sm:text-sm font-semibold block",style:{color:"var(--color-sage-dark)"},children:"— Carl Rogers"})]}),o.jsx("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto",children:o.jsxs("a",{id:"btn-whatsapp-hero",href:D,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md w-full sm:w-auto",style:{backgroundColor:"var(--color-primary-dark)",boxShadow:"var(--shadow-btn)"},"aria-label":"Falar no WhatsApp para agendar primeira conversa",children:[o.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24","aria-hidden":"true",children:o.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),o.jsx("span",{children:"Agendar primeira conversa"})]})}),o.jsxs("div",{className:"pt-4 mt-1 border-t flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs sm:text-sm w-full",style:{borderColor:"var(--color-border-subtle)",color:"var(--color-text-muted)"},children:[o.jsxs("div",{className:"inline-flex items-center gap-1.5 font-medium",children:[o.jsx(T0,{size:16,style:{color:"var(--color-gold-accent)"}}),o.jsx("span",{children:"Psicóloga Isabele Costa · CRP 06/214123"})]}),o.jsx("span",{className:"hidden sm:inline",style:{color:"var(--color-border-medium)"},children:"•"}),o.jsxs("div",{className:"inline-flex items-center gap-1.5 font-medium",children:[o.jsx(p0,{size:16,style:{color:"var(--color-gold-accent)"}}),o.jsx("span",{children:"Atendimento 100% online"})]})]})]})}),o.jsx("section",{id:"sobre","aria-labelledby":"about-title",className:"py-14 sm:py-20 md:py-24 border-t",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:o.jsx("div",{className:"max-w-[1160px] mx-auto px-5 sm:px-8",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center",children:[o.jsx("div",{className:"lg:col-span-5 flex justify-center order-1 lg:order-1",children:o.jsxs("div",{className:"relative w-full max-w-[380px]",children:[o.jsx("div",{className:"absolute -inset-2.5 sm:-inset-3 rounded-3xl rotate-1 opacity-90",style:{background:"linear-gradient(135deg, var(--color-sage-soft) 0%, var(--color-sage-light) 100%)"},"aria-hidden":"true"}),o.jsx("div",{className:"relative rounded-2xl p-2.5 sm:p-3 shadow-md border group",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)",boxShadow:"var(--shadow-card)"},children:o.jsxs("div",{className:"relative w-full h-[390px] sm:h-[430px] rounded-xl overflow-hidden flex flex-col justify-end",style:{backgroundColor:"var(--color-sage-soft)"},children:[o.jsx("img",{src:"/assets/foto/foto-isabele-costa.webp",alt:"Foto da Psicóloga Isabele Costa (CRP 06/214123)",className:"absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105",loading:"lazy"}),o.jsxs("div",{className:"relative z-10 m-3 p-3 rounded-xl backdrop-blur-md border shadow-sm flex items-center gap-3",style:{backgroundColor:"rgba(255, 255, 255, 0.95)",borderColor:"var(--color-border-subtle)"},children:[o.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",style:{backgroundColor:"var(--color-gold-light)",border:"1px solid var(--color-gold-border)",color:"var(--color-gold-accent)"},children:o.jsx(C0,{size:16})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-bold leading-tight",style:{color:"var(--color-primary-dark)"},children:"Espaço Seguro & Confidencial"}),o.jsx("p",{className:"text-[11px] leading-tight",style:{color:"var(--color-text-muted)"},children:"Atendimento ético conforme o CFP"})]})]})]})})]})}),o.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-6 text-left order-2 lg:order-2",children:[o.jsxs("div",{className:"inline-flex items-center gap-2.5",children:[o.jsx("span",{className:"w-6 h-[1.5px]",style:{backgroundColor:"var(--color-sage-medium)"}}),o.jsx("span",{className:"text-xs sm:text-sm font-semibold tracking-wider uppercase",style:{color:"var(--color-sage-dark)"},children:"Apresentação"})]}),o.jsx("h2",{id:"about-title",className:"text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Prazer, sou a Isabele"}),o.jsxs("div",{className:"flex flex-col gap-4 text-sm sm:text-base leading-relaxed",style:{color:"var(--color-text-main)"},children:[o.jsx("p",{children:"Prazer, sou a Isabele Costa, psicóloga (CRP 06/214123). Acredito que toda pessoa merece um espaço para ser ouvida sem pressa e sem julgamento, e é isso que ofereço nas sessões: um lugar leve, onde você conduz o que precisa falar, no seu tempo."}),o.jsx("p",{children:"Meu trabalho é guiado pela Abordagem Centrada na Pessoa, dentro da psicologia fenomenológica humanista. Na prática, isso quer dizer que eu não chego com respostas prontas. Eu caminho ao seu lado enquanto você se entende melhor e encontra o seu próprio jeito de seguir."}),o.jsx("p",{children:"Atendo online desde 2022, com um cuidado especial no acompanhamento de mulheres e no acolhimento de pessoas LGBTQIAPN+. Aqui, você pode ser exatamente quem você é."})]}),o.jsxs("div",{className:"rounded-xl p-5 border mt-2",style:{backgroundColor:"var(--color-bg-subtle)",borderColor:"var(--color-border-subtle)"},children:[o.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[o.jsx(z0,{size:18,style:{color:"var(--color-primary-forest)"}}),o.jsx("span",{className:"text-xs sm:text-sm font-bold tracking-wide uppercase",style:{color:"var(--color-primary-forest)"},children:"Credenciais & Formação"})]}),o.jsxs("ul",{className:"flex flex-col gap-2.5 text-xs sm:text-sm",children:[o.jsxs("li",{className:"flex items-start gap-2.5",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0",style:{backgroundColor:"var(--color-gold-accent)"}}),o.jsxs("span",{children:[o.jsx("strong",{style:{color:"var(--color-primary-dark)"},children:"Pós-graduação:"})," Psicologia Clínica pela PUC-RS (em conclusão)"]})]}),o.jsxs("li",{className:"flex items-start gap-2.5",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0",style:{backgroundColor:"var(--color-gold-accent)"}}),o.jsxs("span",{children:[o.jsx("strong",{style:{color:"var(--color-primary-dark)"},children:"Abordagem:"})," Centrada na Pessoa (fenomenológica-humanista)"]})]}),o.jsxs("li",{className:"flex items-start gap-2.5",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0",style:{backgroundColor:"var(--color-gold-accent)"}}),o.jsxs("span",{children:[o.jsx("strong",{style:{color:"var(--color-primary-dark)"},children:"Atendimento:"})," online pela plataforma Google Meet"]})]}),o.jsxs("li",{className:"flex items-start gap-2.5",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0",style:{backgroundColor:"var(--color-gold-accent)"}}),o.jsxs("span",{children:[o.jsx("strong",{style:{color:"var(--color-primary-dark)"},children:"Registro:"})," CRP 06/214123"]})]})]})]})]})]})})}),o.jsx("section",{className:"w-full py-16 sm:py-24",id:"como-funciona",style:{backgroundColor:"var(--color-bg-base)"},children:o.jsxs("div",{className:"max-w-[1160px] mx-auto px-5 sm:px-8",children:[o.jsxs("div",{className:"max-w-[680px] mx-auto text-center mb-12 sm:mb-16",children:[o.jsxs("div",{className:"inline-flex items-center justify-center gap-2 mb-2",children:[o.jsx("span",{className:"w-5 h-[1.5px]",style:{backgroundColor:"var(--color-sage-medium)"}}),o.jsx("span",{className:"text-xs sm:text-sm font-bold tracking-widest uppercase",style:{color:"var(--color-sage-dark)"},children:"Passo a Passo"}),o.jsx("span",{className:"w-5 h-[1.5px]",style:{backgroundColor:"var(--color-sage-medium)"}})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-semibold mb-3 tracking-tight",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Como funciona a terapia online"}),o.jsx("p",{className:"text-base sm:text-lg leading-relaxed",style:{color:"var(--color-text-muted)"},children:"Começar é mais simples do que parece. Este é o caminho até a sua primeira sessão:"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mb-12 sm:mb-16",children:[o.jsxs("div",{className:"rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsx("div",{className:"w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0",style:{backgroundColor:"var(--color-sage-soft)",border:"1px solid var(--color-border-subtle)",color:"var(--color-primary-forest)",fontFamily:"var(--font-serif)"},children:"1"}),o.jsx("h3",{className:"text-lg font-semibold mb-2",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Primeiro contato"}),o.jsx("p",{className:"text-sm leading-relaxed",style:{color:"var(--color-text-main)"},children:"você me chama no WhatsApp e combinamos uma primeira conversa, sem pressa."})]}),o.jsxs("div",{className:"rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsx("div",{className:"w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0",style:{backgroundColor:"var(--color-sage-soft)",border:"1px solid var(--color-border-subtle)",color:"var(--color-primary-forest)",fontFamily:"var(--font-serif)"},children:"2"}),o.jsx("h3",{className:"text-lg font-semibold mb-2",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Combinamos o horário"}),o.jsx("p",{className:"text-sm leading-relaxed",style:{color:"var(--color-text-main)"},children:"escolhemos juntos o melhor dia e horário para os nossos encontros semanais."})]}),o.jsxs("div",{className:"rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsx("div",{className:"w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0",style:{backgroundColor:"var(--color-sage-soft)",border:"1px solid var(--color-border-subtle)",color:"var(--color-primary-forest)",fontFamily:"var(--font-serif)"},children:"3"}),o.jsx("h3",{className:"text-lg font-semibold mb-2",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Nos encontramos por vídeo"}),o.jsx("p",{className:"text-sm leading-relaxed",style:{color:"var(--color-text-main)"},children:"as sessões acontecem pelo Google Meet, em um ambiente reservado e sigiloso, de onde você estiver. Cada uma dura cerca de 50 minutos, podendo se estender um pouco conforme a sua necessidade e a disponibilidade do horário."})]}),o.jsxs("div",{className:"rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsx("div",{className:"w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0",style:{backgroundColor:"var(--color-sage-soft)",border:"1px solid var(--color-border-subtle)",color:"var(--color-primary-forest)",fontFamily:"var(--font-serif)"},children:"4"}),o.jsx("h3",{className:"text-lg font-semibold mb-2",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Seguimos no seu ritmo"}),o.jsx("p",{className:"text-sm leading-relaxed",style:{color:"var(--color-text-main)"},children:"semana a semana, construímos um espaço de cuidado contínuo, respeitando o seu tempo."})]})]}),o.jsx("div",{className:"flex flex-col items-center justify-center text-center",children:o.jsxs("a",{href:D,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md",style:{backgroundColor:"var(--color-primary-dark)",boxShadow:"var(--shadow-btn)"},"aria-label":"Falar no WhatsApp para iniciar meu processo terapêutico",children:[o.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24","aria-hidden":"true",children:o.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),o.jsx("span",{children:"Quero iniciar meu processo"})]})})]})}),o.jsx("section",{className:"w-full py-16 sm:py-24",id:"temas",style:{backgroundColor:"var(--color-bg-subtle)"},children:o.jsxs("div",{className:"max-w-[1160px] mx-auto px-5 sm:px-8",children:[o.jsxs("div",{className:"max-w-[720px] mx-auto text-center mb-12 sm:mb-16",children:[o.jsxs("div",{className:"inline-flex items-center justify-center gap-2 mb-2",children:[o.jsx("span",{className:"w-5 h-[1.5px]",style:{backgroundColor:"var(--color-sage-medium)"}}),o.jsx("span",{className:"text-xs sm:text-sm font-bold tracking-widest uppercase",style:{color:"var(--color-sage-dark)"},children:"Para quem é"}),o.jsx("span",{className:"w-5 h-[1.5px]",style:{backgroundColor:"var(--color-sage-medium)"}})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-semibold mb-3 tracking-tight",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Talvez você se identifique com isso"}),o.jsx("p",{className:"text-base sm:text-lg leading-relaxed",style:{color:"var(--color-text-muted)"},children:"Cada história é única, mas é comum que alguns sentimentos se repitam. Talvez você reconheça aqui um pouco do que tem vivido:"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12",children:[o.jsxs("div",{className:"rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsx("div",{className:"w-2 h-2 rounded-full mb-3 flex-shrink-0",style:{backgroundColor:"var(--color-gold-accent)"}}),o.jsx("h3",{className:"text-lg font-semibold mb-2",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Autocrítica e autocobrança"}),o.jsx("p",{className:"text-sm leading-relaxed",style:{color:"var(--color-text-muted)"},children:"aquela voz interna que raramente te dá descanso."})]}),o.jsxs("div",{className:"rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsx("div",{className:"w-2 h-2 rounded-full mb-3 flex-shrink-0",style:{backgroundColor:"var(--color-gold-accent)"}}),o.jsx("h3",{className:"text-lg font-semibold mb-2",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Baixa autoestima e inseguranças"}),o.jsx("p",{className:"text-sm leading-relaxed",style:{color:"var(--color-text-muted)"},children:"a sensação de nunca ser o bastante."})]}),o.jsxs("div",{className:"rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsx("div",{className:"w-2 h-2 rounded-full mb-3 flex-shrink-0",style:{backgroundColor:"var(--color-gold-accent)"}}),o.jsx("h3",{className:"text-lg font-semibold mb-2",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Relacionamentos que machucam"}),o.jsx("p",{className:"text-sm leading-relaxed",style:{color:"var(--color-text-muted)"},children:"vínculos que pesam mais do que acolhem."})]}),o.jsxs("div",{className:"rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsx("div",{className:"w-2 h-2 rounded-full mb-3 flex-shrink-0",style:{backgroundColor:"var(--color-gold-accent)"}}),o.jsx("h3",{className:"text-lg font-semibold mb-2",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Ansiedade e preocupação constante"}),o.jsx("p",{className:"text-sm leading-relaxed",style:{color:"var(--color-text-muted)"},children:"a mente que não desliga."})]}),o.jsxs("div",{className:"rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsx("div",{className:"w-2 h-2 rounded-full mb-3 flex-shrink-0",style:{backgroundColor:"var(--color-gold-accent)"}}),o.jsx("h3",{className:"text-lg font-semibold mb-2",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Autoconhecimento e autoaceitação"}),o.jsx("p",{className:"text-sm leading-relaxed",style:{color:"var(--color-text-muted)"},children:"a vontade de se entender e se aceitar como você é."})]}),o.jsxs("div",{className:"rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsx("div",{className:"w-2 h-2 rounded-full mb-3 flex-shrink-0",style:{backgroundColor:"var(--color-gold-accent)"}}),o.jsx("h3",{className:"text-lg font-semibold mb-2",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Fases de transição e recomeços"}),o.jsx("p",{className:"text-sm leading-relaxed",style:{color:"var(--color-text-muted)"},children:"mudanças que trazem dúvidas e inseguranças."})]})]}),o.jsx("div",{className:"max-w-[720px] mx-auto text-center p-6 sm:p-7 rounded-2xl border mb-10 sm:mb-12",style:{backgroundColor:"rgba(231, 215, 236, 0.4)",borderColor:"var(--color-border-subtle)"},children:o.jsx("p",{className:"text-sm sm:text-base leading-relaxed font-medium",style:{color:"var(--color-primary-forest)"},children:"Se você se reconheceu em algum desses pontos, saiba que não precisa lidar com isso só. Aqui, cada um desses temas tem espaço para ser acolhido."})}),o.jsx("div",{className:"flex flex-col items-center justify-center text-center",children:o.jsxs("a",{href:D,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md",style:{backgroundColor:"var(--color-primary-dark)",boxShadow:"var(--shadow-btn)"},"aria-label":"Falar no WhatsApp para conversar sobre o que sinto",children:[o.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24","aria-hidden":"true",children:o.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),o.jsx("span",{children:"Quero conversar sobre o que sinto"})]})})]})}),o.jsx("section",{className:"w-full py-16 sm:py-24",id:"faq",style:{backgroundColor:"var(--color-bg-base)"},children:o.jsxs("div",{className:"max-w-[860px] mx-auto px-5 sm:px-8",children:[o.jsxs("div",{className:"text-center mb-10 sm:mb-14",children:[o.jsxs("div",{className:"inline-flex items-center justify-center gap-2 mb-2",children:[o.jsx("span",{className:"w-5 h-[1.5px]",style:{backgroundColor:"var(--color-sage-medium)"}}),o.jsx("span",{className:"text-xs sm:text-sm font-bold tracking-widest uppercase",style:{color:"var(--color-sage-dark)"},children:"Dúvidas Comuns"}),o.jsx("span",{className:"w-5 h-[1.5px]",style:{backgroundColor:"var(--color-sage-medium)"}})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-semibold tracking-tight",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Perguntas frequentes"})]}),o.jsxs("div",{className:"flex flex-col gap-3.5",children:[o.jsxs("details",{className:"group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors",style:{color:"var(--color-primary-dark)"},children:[o.jsx("span",{children:"A terapia online funciona mesmo?"}),o.jsx(xl,{className:"w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180",style:{color:"var(--color-sage-dark)"}})]}),o.jsx("div",{className:"px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed",style:{color:"var(--color-text-muted)"},children:"Sim. A terapia online segue os mesmos princípios e o mesmo cuidado do atendimento presencial. O que muda é o formato: nos encontramos por vídeo, com a mesma escuta, a mesma atenção e o mesmo sigilo."})]}),o.jsxs("details",{className:"group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors",style:{color:"var(--color-primary-dark)"},children:[o.jsx("span",{children:"Como funciona o sigilo?"}),o.jsx(xl,{className:"w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180",style:{color:"var(--color-sage-dark)"}})]}),o.jsx("div",{className:"px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed",style:{color:"var(--color-text-muted)"},children:"Tudo o que você compartilha nas sessões é confidencial e protegido pelo Código de Ética da Psicologia. É um espaço seguro, só seu."})]}),o.jsxs("details",{className:"group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors",style:{color:"var(--color-primary-dark)"},children:[o.jsx("span",{children:"Do que eu preciso para participar?"}),o.jsx(xl,{className:"w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180",style:{color:"var(--color-sage-dark)"}})]}),o.jsx("div",{className:"px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed",style:{color:"var(--color-text-muted)"},children:"Um aparelho com câmera e internet, e um lugar reservado onde você se sinta à vontade para conversar. As sessões acontecem pelo Google Meet."})]}),o.jsxs("details",{className:"group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors",style:{color:"var(--color-primary-dark)"},children:[o.jsx("span",{children:"Com que frequência são as sessões?"}),o.jsx(xl,{className:"w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180",style:{color:"var(--color-sage-dark)"}})]}),o.jsx("div",{className:"px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed",style:{color:"var(--color-text-muted)"},children:"Em geral, os encontros são semanais, com dia e horário combinados entre nós. Isso pode ser ajustado conforme a sua necessidade."})]}),o.jsxs("details",{className:"group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors",style:{color:"var(--color-primary-dark)"},children:[o.jsx("span",{children:"Quanto tempo dura cada sessão?"}),o.jsx(xl,{className:"w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180",style:{color:"var(--color-sage-dark)"}})]}),o.jsx("div",{className:"px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed",style:{color:"var(--color-text-muted)"},children:"Cada sessão dura cerca de 50 minutos, podendo se estender um pouco conforme a sua necessidade e a disponibilidade do horário."})]}),o.jsxs("details",{className:"group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors",style:{color:"var(--color-primary-dark)"},children:[o.jsx("span",{children:"Qual é o valor da sessão?"}),o.jsx(xl,{className:"w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180",style:{color:"var(--color-sage-dark)"}})]}),o.jsx("div",{className:"px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed",style:{color:"var(--color-text-muted)"},children:"Os valores são informados na nossa primeira conversa, pelo WhatsApp, para que eu possa te explicar tudo com calma."})]}),o.jsxs("details",{className:"group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors",style:{color:"var(--color-primary-dark)"},children:[o.jsx("span",{children:"Você emite recibo para reembolso?"}),o.jsx(xl,{className:"w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180",style:{color:"var(--color-sage-dark)"}})]}),o.jsx("div",{className:"px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed",style:{color:"var(--color-text-muted)"},children:"Sim. Emito recibo das sessões, que você pode usar para pedir reembolso ao seu plano de saúde, caso ele ofereça esse benefício."})]}),o.jsxs("details",{className:"group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm",style:{backgroundColor:"var(--color-bg-card)",borderColor:"var(--color-border-subtle)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors",style:{color:"var(--color-primary-dark)"},children:[o.jsx("span",{children:"Como faço para começar?"}),o.jsx(xl,{className:"w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180",style:{color:"var(--color-sage-dark)"}})]}),o.jsx("div",{className:"px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed",style:{color:"var(--color-text-muted)"},children:"É só me chamar no WhatsApp. A partir daí, combinamos a sua primeira conversa."})]})]})]})}),o.jsx("section",{className:"w-full py-16 sm:py-24 text-center border-t",id:"contato",style:{backgroundColor:"var(--color-bg-subtle)",borderColor:"var(--color-border-subtle)"},children:o.jsxs("div",{className:"max-w-[760px] mx-auto px-5 sm:px-8 flex flex-col items-center",children:[o.jsx("h2",{className:"text-3xl sm:text-4xl font-semibold tracking-tight mb-4",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Quando você quiser começar, estarei por aqui."}),o.jsx("p",{className:"text-base sm:text-lg leading-relaxed mb-8 max-w-[620px]",style:{color:"var(--color-text-muted)"},children:"Dar o primeiro passo já é um cuidado com você. Vamos conversar e ver, sem pressa, se faz sentido começarmos."}),o.jsxs("a",{href:D,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md",style:{backgroundColor:"var(--color-primary-dark)",boxShadow:"var(--shadow-btn)"},id:"btn-cta-final-whatsapp-react","aria-label":"Falar no WhatsApp para conversar sem pressa com a psicóloga",children:[o.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24","aria-hidden":"true",children:o.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),o.jsx("span",{children:"Vamos conversar sem pressa"})]})]})})]}),o.jsx("footer",{className:"w-full pt-12 pb-8 border-t",style:{borderColor:"var(--color-border-subtle)",backgroundColor:"var(--color-bg-base)"},children:o.jsxs("div",{className:"max-w-[1160px] mx-auto px-5 sm:px-8 flex flex-col gap-8",children:[o.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("span",{className:"font-semibold text-lg",style:{fontFamily:"var(--font-serif)",color:"var(--color-primary-dark)"},children:"Psicóloga Isabele Costa · CRP 06/214123"}),o.jsx("span",{className:"text-sm",style:{color:"var(--color-text-muted)"},children:"Atendimento psicológico online para todo o Brasil"})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm",children:[o.jsxs("div",{style:{color:"var(--color-text-muted)"},children:["WhatsApp:"," ",o.jsx("a",{href:D,target:"_blank",rel:"noopener noreferrer",className:"font-medium hover:underline",style:{color:"var(--color-primary-forest)"},children:"(12) 99171-5684"})]}),o.jsxs("div",{style:{color:"var(--color-text-muted)"},children:["E-mail:"," ",o.jsx("a",{href:"mailto:psiisabelecosta@gmail.com",className:"font-medium hover:underline",style:{color:"var(--color-primary-forest)"},children:"psiisabelecosta@gmail.com"})]})]})]}),o.jsxs("div",{className:"pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs",style:{borderColor:"var(--color-border-subtle)",color:"var(--color-text-muted)"},children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{children:"© 2026 Isabele Costa"}),o.jsx("span",{children:"·"}),o.jsx("a",{href:"#privacidade",className:"underline hover:text-gray-900 transition-colors",children:"Política de Privacidade"})]}),o.jsx("div",{className:"flex items-center gap-3",children:o.jsxs("button",{onClick:()=>v(!0),className:"inline-flex items-center gap-1 hover:underline text-xs",style:{color:"var(--color-primary-forest)"},children:[o.jsx(jd,{size:13}),o.jsx("span",{children:"Ver código HTML único completo"})]})})]})]})}),o.jsxs("a",{id:"btn-whatsapp-floating",href:D,target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 right-6 z-40 group flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95",style:{backgroundColor:"#25D366",boxShadow:"0 8px 24px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0, 0, 0, 0.12)"},"aria-label":"Falar com a Psicóloga Isabele Costa no WhatsApp",children:[o.jsx("span",{className:"absolute inset-0 rounded-full animate-ping opacity-35 pointer-events-none",style:{backgroundColor:"#25D366",animationDuration:"2.5s"},"aria-hidden":"true"}),o.jsx("span",{className:"absolute right-[calc(100%+12px)] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full text-white shadow-md",style:{backgroundColor:"var(--color-primary-dark)"},children:"Falar no WhatsApp"}),o.jsx("svg",{className:"w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10",viewBox:"0 0 24 24","aria-hidden":"true",children:o.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})]}),X&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs",children:o.jsxs("div",{className:"bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border overflow-hidden",style:{borderColor:"var(--color-border-medium)"},children:[o.jsxs("div",{className:"p-4 border-b flex items-center justify-between",style:{borderColor:"var(--color-border-subtle)"},children:[o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold text-sm sm:text-base",style:{color:"var(--color-primary-dark)",fontFamily:"var(--font-serif)"},children:"Código HTML Único (Single File com CSS Embutido)"}),o.jsxs("p",{className:"text-xs text-gray-500",children:["Pronto para salvar como ",o.jsx("code",{children:"index.html"})," ou colar em qualquer hospedagem."]})]}),o.jsx("button",{onClick:()=>v(!1),className:"text-gray-400 hover:text-gray-700 text-lg px-2 py-1",children:"✕"})]}),o.jsx("div",{className:"p-4 flex-1 overflow-auto bg-gray-900 text-gray-100 font-mono text-xs",children:o.jsx("pre",{children:o.jsx("code",{children:G})})}),o.jsxs("div",{className:"p-4 border-t flex justify-end gap-2 bg-gray-50",children:[o.jsxs("button",{onClick:sa,className:"inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-colors",style:{backgroundColor:"var(--color-primary-dark)"},children:[C?o.jsx(h0,{size:14}):o.jsx(x0,{size:14}),o.jsx("span",{children:C?"Copiado com sucesso!":"Copiar Código HTML"})]}),o.jsx("button",{onClick:()=>v(!1),className:"px-4 py-2 rounded-lg text-xs font-medium border bg-white hover:bg-gray-100 text-gray-700",children:"Fechar"})]})]})})]})}c0.createRoot(document.getElementById("root")).render(o.jsx(Sl.StrictMode,{children:o.jsx(j0,{})}));
