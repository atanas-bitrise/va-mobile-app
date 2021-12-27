"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4466],{7800:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(7294),r=t(9055),a=t(6396),i=t(8215),s=t(2224),l=t(3490),m=function(e){var n=e.props;return n?o.createElement(o.Fragment,null,l.ZP.isEmpty(n)?o.createElement("pre",{className:"preText"},"This component does not have param defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Param / Return"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(n).map((function(e){return o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",null,"param"===e?n[e].split("\n").map((function(e,n){var t=e.split("-");return o.createElement("div",{key:n},o.createElement("code",null,t[0].trim()+":"),"\ufeff"+t[1])})):n[e]))}))))):null};function u(e){var n=(0,s.N)(e.componentName)[0],t=n.description,l=n.displayName,u=n.tags,c="How to use the "+l+" component";return o.createElement(o.Fragment,null,o.createElement(a.Z,null,o.createElement(i.Z,{value:"description",label:"Description"},o.createElement("pre",{className:"preText"},t)),o.createElement(i.Z,{value:"params",label:"Params and Return"},o.createElement(m,{props:u})),o.createElement(i.Z,{value:"example",label:"Example"},e.example&&o.createElement(r.Z,{title:c,className:"language-tsx test"},e.example))))}},1481:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return c},exampleString:function(){return p},default:function(){return E}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=t(7800),s=["components"],l={},m=void 0,u={unversionedId:"Engineering/FrontEnd/CustomHooks/useTheme",id:"Engineering/FrontEnd/CustomHooks/useTheme",title:"useTheme",description:"export const exampleString = `const theme = useTheme()\\n",source:"@site/docs/Engineering/FrontEnd/CustomHooks/useTheme.mdx",sourceDirName:"Engineering/FrontEnd/CustomHooks",slug:"/Engineering/FrontEnd/CustomHooks/useTheme",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useTheme",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useRouteNavigation",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useRouteNavigation"},next:{title:"useTopPaddingAsHeaderStyles",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useTopPaddingAsHeaderStyles"}},c=[],p="const theme = useTheme()\n\nconst findLocationProps: BoxProps = {\n    flexDirection: 'row',\n    justifyContent: 'center',\n    alignItems: 'center',\n    width: '100%',\n    minHeight: theme.dimensions.touchableMinHeight,\n    mt: theme.dimensions.standardMarginBetween,\n    py: theme.dimensions.buttonPadding,\n}",d={toc:c,exampleString:p};function E(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{componentName:"useTheme",example:p,mdxType:"HooksInfo"}))}E.isMDXComponent=!0}}]);