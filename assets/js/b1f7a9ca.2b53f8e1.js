"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8353],{7800:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7294),a=t(9055),o=t(6396),s=t(8215),l=t(2224),c=t(3490),u=function(e){var n=e.props;return n?r.createElement(r.Fragment,null,c.ZP.isEmpty(n)?r.createElement("pre",{className:"preText"},"This component does not have param defined"):r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Param / Return"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.keys(n).map((function(e){return r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("code",null,e)),r.createElement("td",null,"param"===e?n[e].split("\n").map((function(e,n){var t=e.split("-");return r.createElement("div",{key:n},r.createElement("code",null,t[0].trim()+":"),"\ufeff"+t[1])})):n[e]))}))))):null};function m(e){var n=(0,l.N)(e.componentName)[0],t=n.description,c=n.displayName,m=n.tags,d="How to use the "+c+" component";return r.createElement(r.Fragment,null,r.createElement(o.Z,null,r.createElement(s.Z,{value:"description",label:"Description"},r.createElement("pre",{className:"preText"},t)),r.createElement(s.Z,{value:"params",label:"Params and Return"},r.createElement(u,{props:m})),r.createElement(s.Z,{value:"example",label:"Example"},e.example&&r.createElement(a.Z,{title:d,className:"language-tsx test"},e.example))))}},57:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},exampleString:function(){return i},default:function(){return E}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=t(7800),l=["components"],c={},u=void 0,m={unversionedId:"FrontEnd/CustomHooks/useIsScreanReaderEnabled",id:"FrontEnd/CustomHooks/useIsScreanReaderEnabled",isDocsHomePage:!1,title:"useIsScreanReaderEnabled",description:"export const exampleString = `const screanReaderEnabled = useIsScreanReaderEnabled()\\n",source:"@site/docs/FrontEnd/CustomHooks/useIsScreanReaderEnabled.mdx",sourceDirName:"FrontEnd/CustomHooks",slug:"/FrontEnd/CustomHooks/useIsScreanReaderEnabled",permalink:"/docs/FrontEnd/CustomHooks/useIsScreanReaderEnabled",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useHeaderStyles",permalink:"/docs/FrontEnd/CustomHooks/useHeaderStyles"},next:{title:"useMessageWithSignature",permalink:"/docs/FrontEnd/CustomHooks/useMessageWithSignature"}},d=[],i="const screanReaderEnabled = useIsScreanReaderEnabled()\n\nconst setFocus = useCallback(() => {\n    if (ref.current && screanReaderEnabled) {}\n}",p={toc:d,exampleString:i};function E(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{componentName:"useIsScreanReaderEnabled",example:i,mdxType:"HooksInfo"}))}E.isMDXComponent=!0}}]);