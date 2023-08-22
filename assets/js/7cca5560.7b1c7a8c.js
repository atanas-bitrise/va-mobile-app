/*! For license information please see 7cca5560.7b1c7a8c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9183],{49461:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(67294);function o(t){let{folder:e}=t;return n.createElement(n.Fragment,null,"These icons are located under ",n.createElement("code",null,"VaMobile/src/components/VAIcon/svgs"+(e?"/"+e:"")))}},70857:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>f,default:()=>v,frontMatter:()=>d,metadata:()=>y,toc:()=>b});var n=r(87462),o=(r(67294),r(3905)),a=(r(8209),r(27378));function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i.apply(this,arguments)}const l=t=>{let{title:e,titleId:r,...n}=t;return a.createElement("svg",i({width:22,height:22,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},n),e?a.createElement("title",{id:r},e):null,a.createElement("path",{d:"M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Z",fill:n.fill,stroke:n.stroke}))};r.p;var s;function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}const u=t=>{let{title:e,titleId:r,...n}=t;return a.createElement("svg",c({width:24,height:24,viewBox:"0 0 24 24",fill:"none",color:"#fff",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},n),e?a.createElement("title",{id:r},e):null,a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm8-12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z",fill:n.fill}),s||(s=a.createElement("circle",{cx:12,cy:12,r:9,stroke:"currentColor",strokeWidth:2})))};r.p;var p=r(49461);const d={},f="Radio Button",y={unversionedId:"Flagship design library/Foundation/Icons/radioBtnIcons",id:"Flagship design library/Foundation/Icons/radioBtnIcons",title:"Radio Button",description:"Name | Icon | File Name",source:"@site/docs/Flagship design library/Foundation/Icons/radioBtnIcons.md",sourceDirName:"Flagship design library/Foundation/Icons",slug:"/Flagship design library/Foundation/Icons/radioBtnIcons",permalink:"/va-mobile-app/docs/Flagship design library/Foundation/Icons/radioBtnIcons",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Navigation",permalink:"/va-mobile-app/docs/Flagship design library/Foundation/Icons/navIcons"},next:{title:"Webview",permalink:"/va-mobile-app/docs/Flagship design library/Foundation/Icons/webviewIcons"}},m={},b=[],h={toc:b},g="wrapper";function v(t){let{components:e,...r}=t;return(0,o.kt)(g,(0,n.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"radio-button"},"Radio Button"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)(p.Z,{folder:"radio",mdxType:"IconsPathSection"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Icon"),(0,o.kt)("th",{parentName:"tr",align:"center"},"File Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Radio Empty/Disabled"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)(l,{className:"icons customCircle",mdxType:"RadioEmpty"})),(0,o.kt)("td",{parentName:"tr",align:"center"},"RadioEmpty.svg")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Radio Filled"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)(u,{className:"icons iconDirection",mdxType:"RadioFilled"})),(0,o.kt)("td",{parentName:"tr",align:"center"},"RadioFilled.svg")))))}v.isMDXComponent=!0},41535:(t,e)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function h(t,e,r){this.props=t,this.context=e,this.refs=b,this.updater=r||y}function g(){}function v(t,e,r){this.props=t,this.context=e,this.refs=b,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},h.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},g.prototype=h.prototype;var k=v.prototype=new g;k.constructor=v,m(k,h.prototype),k.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,_={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function I(t,e,n){var o,a={},i=null,l=null;if(null!=e)for(o in void 0!==e.ref&&(l=e.ref),void 0!==e.key&&(i=""+e.key),e)S.call(e,o)&&!F.hasOwnProperty(o)&&(a[o]=e[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(t&&t.defaultProps)for(o in s=t.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:r,type:t,key:i,ref:l,props:a,_owner:_.current}}function j(t){return"object"==typeof t&&null!==t&&t.$$typeof===r}var N=/\/+/g;function x(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function E(t,e,o,a,i){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var s=!1;if(null===t)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case r:case n:s=!0}}if(s)return i=i(s=t),t=""===a?"."+x(s,0):a,w(i)?(o="",null!=t&&(o=t.replace(N,"$&/")+"/"),E(i,e,o,"",(function(t){return t}))):null!=i&&(j(i)&&(i=function(t,e){return{$$typeof:r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+t)),e.push(i)),1;if(s=0,a=""===a?".":a+":",w(t))for(var c=0;c<t.length;c++){var u=a+x(l=t[c],c);s+=E(l,e,o,u,i)}else if(u=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=f&&t[f]||t["@@iterator"])?t:null}(t),"function"==typeof u)for(t=u.call(t),c=0;!(l=t.next()).done;)s+=E(l=l.value,e,o,u=a+x(l,c++),i);else if("object"===l)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function O(t,e,r){if(null==t)return t;var n=[],o=0;return E(t,n,"","",(function(t){return e.call(r,t,o++)})),n}function R(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var $={current:null},B={transition:null};e.createElement=I},27378:(t,e,r)=>{t.exports=r(41535)}}]);