"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[546],{32666:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(67294),i=n(97405),a=n(22808),r=n(30433),o=n(41284),s=n(36005);const c=e=>{let{props:t}=e;return t?l.createElement(l.Fragment,null,s.ZP.isEmpty(t)?l.createElement("pre",{className:"preText"},"This component does not have props defined"):l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Default Value"),l.createElement("th",null,"Required"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,Object.keys(t).map((e=>l.createElement("tr",{key:e},l.createElement("td",null,l.createElement("code",null,e)),l.createElement("td",{style:{minWidth:200}},t[e].type?.name),l.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value.toString()),l.createElement("td",null,t[e].required?"Yes":"No"),l.createElement("td",null,t[e].description))))))):null};function m(e){const t=(0,o.N)(e.componentName),{description:n,displayName:s,props:m}=t[0],p=`How to use the ${s} component`,x=`Full code for the ${s} component`;return l.createElement(l.Fragment,null,n,l.createElement("br",null),l.createElement("br",null),l.createElement(a.Z,null,l.createElement(r.Z,{value:"props",label:"Properties"},l.createElement(c,{props:m})),l.createElement(r.Z,{value:"example",label:"Example"},e.example&&l.createElement(i.Z,{title:p,className:"language-tsx test"},e.example)),l.createElement(r.Z,{value:"code",label:"Source Code"},e.codeString&&l.createElement(i.Z,{title:x,className:"language-tsx"},e.codeString)),l.createElement(r.Z,{value:"accessibility",label:"Accessibility"},l.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},41284:(e,t,n)=>{n.d(t,{N:()=>i});var l=n(52426);const i=e=>(0,l.ZP)()["docusaurus-plugin-react-docgen-typescript"].default.filter((t=>t.displayName===e))},70507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>T,exampleString:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var l=n(87462),i=(n(67294),n(3905));n(8209),n(97405);const a="import React, { FC } from 'react'\n\nimport { TextLine } from './types'\nimport Box from './Box'\nimport LabelTag from './LabelTag'\nimport TextLineWithIcon, { TextLineWithIconProps } from './TextLineWithIcon'\nimport TextView from './TextView'\n\ntype TextLinesProps = {\n  /** List of text for the button */\n  listOfText?: Array<TextLine | TextLineWithIconProps>\n  /** if true the text will be selectable */\n  selectable?: boolean\n}\n\n/**Component to render individual lines of text. Each text line will wrap as needed and subsequent lines will be on the next line*/\nexport const TextLines: FC<TextLinesProps> = ({ listOfText, selectable }) => {\n  return (\n    <Box flex={1}>\n      <Box flexDirection=\"column\">\n        {listOfText?.map((textObj: TextLine | TextLineWithIconProps, index: number) => {\n          if ('iconProps' in textObj && textObj.iconProps !== undefined) {\n            return <TextLineWithIcon key={index} {...textObj} />\n          } else {\n            const { text, variant = 'MobileBody', color, textAlign = 'left', textTag, mt, mb } = textObj\n            if (textTag) {\n              return (\n                <Box mt={mt} mb={mb} key={index}>\n                  <LabelTag text={text} key={index} labelType={textTag.labelType} />\n                </Box>\n              )\n            }\n\n            return (\n              <TextView variant={variant} textAlign={textAlign} color={color} key={index} selectable={selectable} mt={mt} mb={mb} accessible={false}>\n                {text}\n              </TextView>\n            )\n          }\n        })}\n      </Box>\n    </Box>\n  )\n}\n";var r=n(32666);const o={},s=void 0,c={unversionedId:"Flagship design library/Components/TextViews/TextLines",id:"Flagship design library/Components/TextViews/TextLines",title:"TextLines",description:"",source:"@site/docs/Flagship design library/Components/TextViews/TextLines.mdx",sourceDirName:"Flagship design library/Components/TextViews",slug:"/Flagship design library/Components/TextViews/TextLines",permalink:"/va-mobile-app/docs/Flagship design library/Components/TextViews/TextLines",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TextLineWithIcon",permalink:"/va-mobile-app/docs/Flagship design library/Components/TextViews/TextLineWithIcon"},next:{title:"TextView",permalink:"/va-mobile-app/docs/Flagship design library/Components/TextViews/TextView"}},m={},p=[],x="<TextLines listOfText={[{ text: 'my text', isBold: true}]} />",u={toc:p,exampleString:x},d="wrapper";function T(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{componentName:"TextLines",example:x,codeString:a,mdxType:"ComponentTopInfo"}))}T.isMDXComponent=!0}}]);