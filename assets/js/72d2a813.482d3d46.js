"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4466],{77800:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(67294),o=t(19055),a=t(26396),i=t(58215),s=t(82224),m=t(73490),l=function(e){var n=e.props;return n?r.createElement(r.Fragment,null,m.ZP.isEmpty(n)?r.createElement("pre",{className:"preText"},"This component does not have param defined"):r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Param / Return"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.keys(n).map((function(e){return r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("code",null,e)),r.createElement("td",null,"param"===e?n[e].split("\n").map((function(e,n){var t=e.split("-");return r.createElement("div",{key:n},r.createElement("code",null,t[0].trim()+":"),"\ufeff"+t[1])})):n[e]))}))))):null};function u(e){var n=(0,s.N)(e.componentName)[0],t=n.description,m=n.displayName,u=n.tags,c="How to use the "+m+" component";return r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement(i.Z,{value:"description",label:"Description"},r.createElement("pre",{className:"preText"},t)),r.createElement(i.Z,{value:"params",label:"Params and Return"},r.createElement(l,{props:u})),r.createElement(i.Z,{value:"example",label:"Example"},e.example&&r.createElement(o.Z,{title:c,className:"language-tsx test"},e.example))))}},1481:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},exampleString:function(){return d},default:function(){return E}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=t(77800),s=["components"],m={},l=void 0,u={unversionedId:"Engineering/FrontEnd/CustomHooks/useTheme",id:"Engineering/FrontEnd/CustomHooks/useTheme",isDocsHomePage:!1,title:"useTheme",description:"export const exampleString = `const theme = useTheme()\\n",source:"@site/docs/Engineering/FrontEnd/CustomHooks/useTheme.mdx",sourceDirName:"Engineering/FrontEnd/CustomHooks",slug:"/Engineering/FrontEnd/CustomHooks/useTheme",permalink:"/docs/Engineering/FrontEnd/CustomHooks/useTheme",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useRouteNavigation",permalink:"/docs/Engineering/FrontEnd/CustomHooks/useRouteNavigation"},next:{title:"useTopPaddingAsHeaderStyles",permalink:"/docs/Engineering/FrontEnd/CustomHooks/useTopPaddingAsHeaderStyles"}},c=[],d="const theme = useTheme()\n\nconst findLocationProps: BoxProps = {\n    flexDirection: 'row',\n    justifyContent: 'center',\n    alignItems: 'center',\n    width: '100%',\n    minHeight: theme.dimensions.touchableMinHeight,\n    mt: theme.dimensions.standardMarginBetween,\n    py: theme.dimensions.buttonPadding,\n}",p={toc:c,exampleString:d};function E(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{componentName:"useTheme",example:d,mdxType:"HooksInfo"}))}E.isMDXComponent=!0}}]);