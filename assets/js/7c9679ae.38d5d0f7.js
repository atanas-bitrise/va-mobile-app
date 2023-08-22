"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[100],{32666:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(97405),l=a(22808),i=a(30433),o=a(41284),s=a(36005);const c=e=>{let{props:t}=e;return t?n.createElement(n.Fragment,null,s.ZP.isEmpty(t)?n.createElement("pre",{className:"preText"},"This component does not have props defined"):n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Default Value"),n.createElement("th",null,"Required"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,Object.keys(t).map((e=>n.createElement("tr",{key:e},n.createElement("td",null,n.createElement("code",null,e)),n.createElement("td",{style:{minWidth:200}},t[e].type?.name),n.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value.toString()),n.createElement("td",null,t[e].required?"Yes":"No"),n.createElement("td",null,t[e].description))))))):null};function d(e){const t=(0,o.N)(e.componentName),{description:a,displayName:s,props:d}=t[0],m=`How to use the ${s} component`,u=`Full code for the ${s} component`;return n.createElement(n.Fragment,null,a,n.createElement("br",null),n.createElement("br",null),n.createElement(l.Z,null,n.createElement(i.Z,{value:"props",label:"Properties"},n.createElement(c,{props:d})),n.createElement(i.Z,{value:"example",label:"Example"},e.example&&n.createElement(r.Z,{title:m,className:"language-tsx test"},e.example)),n.createElement(i.Z,{value:"code",label:"Source Code"},e.codeString&&n.createElement(r.Z,{title:u,className:"language-tsx"},e.codeString)),n.createElement(i.Z,{value:"accessibility",label:"Accessibility"},n.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},41284:(e,t,a)=>{a.d(t,{N:()=>r});var n=a(52426);const r=e=>(0,n.ZP)()["docusaurus-plugin-react-docgen-typescript"].default.filter((t=>t.displayName===e))},37229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>v,exampleString:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));a(8209),a(97405);const l="import { View } from 'react-native'\nimport { useFocusEffect } from '@react-navigation/native'\nimport React, { FC } from 'react'\n\nimport { useAccessibilityFocus } from 'utils/hooks'\nimport HeaderTitle from './HeaderTitle'\n\n/**\n *  Properties for {@link FocusedNavHeaderText}\n */\nexport type FocusedNavHeaderTextProps = {\n  /**sets the title's text */\n  headerTitle: string\n}\n\n/**\n * Component to use as a navigation header where accessibility focus is needed on the header in iOS on screen load\n */\nexport const FocusedNavHeaderText: FC<FocusedNavHeaderTextProps> = ({ headerTitle }) => {\n  const [focusRef, setFocus] = useAccessibilityFocus<View>()\n  useFocusEffect(setFocus)\n\n  return <HeaderTitle headerTitle={headerTitle} focusRef={focusRef} testID={`${headerTitle}-page-header`} />\n}\n\nexport default FocusedNavHeaderText\n";var i=a(32666);const o={},s=void 0,c={unversionedId:"Flagship design library/Components/Navigation/Primary/FocusedNavHeaderText",id:"Flagship design library/Components/Navigation/Primary/FocusedNavHeaderText",title:"FocusedNavHeaderText",description:"",source:"@site/docs/Flagship design library/Components/Navigation/Primary/FocusedNavHeaderText.mdx",sourceDirName:"Flagship design library/Components/Navigation/Primary",slug:"/Flagship design library/Components/Navigation/Primary/FocusedNavHeaderText",permalink:"/va-mobile-app/docs/Flagship design library/Components/Navigation/Primary/FocusedNavHeaderText",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Primary navigation",permalink:"/va-mobile-app/docs/Flagship design library/Components/Navigation/Primary/"},next:{title:"HeaderTitle",permalink:"/va-mobile-app/docs/Flagship design library/Components/Navigation/Primary/HeaderTitle"}},d={},m=[],u="useEffect(() => {\n    navigation.setOptions({\n        headerTitle: (headerTitle) => <FocusedNavHeaderText headerTitle={headerTitle.children} />,\n    })\n}, [navigation])",p={toc:m,exampleString:u},g="wrapper";function v(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{componentName:"FocusedNavHeaderText",example:u,codeString:l,mdxType:"ComponentTopInfo"}))}v.isMDXComponent=!0}}]);