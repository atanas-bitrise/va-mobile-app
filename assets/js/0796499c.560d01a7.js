"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6330],{75111:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),o=n(97405),l=n(22808),a=n(30433),s=n(41284),m=n(36005);const i=e=>{let{props:t}=e;return t?r.createElement(r.Fragment,null,m.ZP.isEmpty(t)?r.createElement("pre",{className:"preText"},"This component does not have param defined"):r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Param / Return"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.keys(t).map((e=>r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("code",null,e)),r.createElement("td",null,"param"===e?t[e].split("\n").map(((e,t)=>{let n=e.split("-");return r.createElement("div",{key:t},r.createElement("code",null,n[0].trim()+":"),"\ufeff"+n[1])})):t[e]))))))):null};function u(e){const t=(0,s.N)(e.componentName),{description:n,displayName:m,tags:u}=t[0],c=`How to use the ${m} component`;return r.createElement(r.Fragment,null,r.createElement(l.Z,null,r.createElement(a.Z,{value:"description",label:"Description"},r.createElement("pre",{className:"preText"},n)),r.createElement(a.Z,{value:"params",label:"Params and Return"},r.createElement(i,{props:u})),r.createElement(a.Z,{value:"example",label:"Example"},e.example&&r.createElement(o.Z,{title:c,className:"language-tsx test"},e.example))))}},41284:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(52426);const o=e=>(0,r.ZP)()["docusaurus-plugin-react-docgen-typescript"].default.filter((t=>t.displayName===e))},11376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>E,exampleString:()=>c,frontMatter:()=>a,metadata:()=>m,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),l=(n(8209),n(75111));const a={},s=void 0,m={unversionedId:"Engineering/FrontEnd/CustomHooks/useDestructiveAlert",id:"Engineering/FrontEnd/CustomHooks/useDestructiveAlert",title:"useDestructiveAlert",description:"",source:"@site/docs/Engineering/FrontEnd/CustomHooks/useDestructiveAlert.mdx",sourceDirName:"Engineering/FrontEnd/CustomHooks",slug:"/Engineering/FrontEnd/CustomHooks/useDestructiveAlert",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useDestructiveAlert",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useBeforeNavBackListener",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useBeforeNavBackListener"},next:{title:"useError",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useError"}},i={},u=[],c="const deletePhoneAlert = useDestructiveActionSheet()\n\nconst onDeletePressed = (): void => {\n    deletePhoneAlert({\n      title: t('editPhoneNumber.remove.title', { numberType: buttonTitle }),\n      message: t('editPhoneNumber.remove.message', { numberType: buttonTitle }),\n      destructiveButtonIndex: 1,\n      cancelButtonIndex: 0,\n      buttons: [\n        {\n          text: t('common:cancel'),\n        },\n        {\n          text: t('common:remove'),\n          onPress: onDelete,\n        },\n      ],\n    })\n  }",p={toc:u,exampleString:c},d="wrapper";function E(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{componentName:"useDestructiveActionSheet",example:c,mdxType:"HooksInfo"}))}E.isMDXComponent=!0}}]);