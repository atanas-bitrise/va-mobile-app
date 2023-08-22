"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3866],{32666:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(67294),i=n(97405),r=n(22808),a=n(30433),o=n(41284),s=n(36005);const p=e=>{let{props:t}=e;return t?l.createElement(l.Fragment,null,s.ZP.isEmpty(t)?l.createElement("pre",{className:"preText"},"This component does not have props defined"):l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Default Value"),l.createElement("th",null,"Required"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,Object.keys(t).map((e=>l.createElement("tr",{key:e},l.createElement("td",null,l.createElement("code",null,e)),l.createElement("td",{style:{minWidth:200}},t[e].type?.name),l.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value.toString()),l.createElement("td",null,t[e].required?"Yes":"No"),l.createElement("td",null,t[e].description))))))):null};function c(e){const t=(0,o.N)(e.componentName),{description:n,displayName:s,props:c}=t[0],d=`How to use the ${s} component`,m=`Full code for the ${s} component`;return l.createElement(l.Fragment,null,n,l.createElement("br",null),l.createElement("br",null),l.createElement(r.Z,null,l.createElement(a.Z,{value:"props",label:"Properties"},l.createElement(p,{props:c})),l.createElement(a.Z,{value:"example",label:"Example"},e.example&&l.createElement(i.Z,{title:d,className:"language-tsx test"},e.example)),l.createElement(a.Z,{value:"code",label:"Source Code"},e.codeString&&l.createElement(i.Z,{title:m,className:"language-tsx"},e.codeString)),l.createElement(a.Z,{value:"accessibility",label:"Accessibility"},l.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},41284:(e,t,n)=>{n.d(t,{N:()=>i});var l=n(52426);const i=e=>(0,l.ZP)()["docusaurus-plugin-react-docgen-typescript"].default.filter((t=>t.displayName===e))},1300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,exampleString:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var l=n(87462),i=(n(67294),n(3905));n(8209),n(97405);const r="import React, { FC } from 'react'\n\nimport _ from 'underscore'\n\nimport { VATextColors } from 'styles/theme'\nimport { testIdProps } from 'utils/accessibility'\nimport { useExternalLink } from 'utils/hooks'\nimport { useTheme } from 'utils/hooks'\nimport Box from './Box'\nimport TextView, { FontVariant, TextViewProps } from './TextView'\nimport VAIcon from './VAIcon'\n\n/**\n * Props for item in {@link listOfText}\n */\nexport type VABulletListText = {\n  /** string to display */\n  text: string\n\n  /** optional parameter that if exists, will make the text a link */\n  linkToRedirect?: string\n\n  /** optional parameter to display given bolded text before main text */\n  boldedTextPrefix?: string\n\n  /** optional parameter to display given bolded text after main text */\n  boldedText?: string\n\n  /** optional variant for text, defaults to regular */\n  variant?: FontVariant\n\n  /** optional color */\n  color?: keyof VATextColors\n\n  /** optional accessibility label for text */\n  a11yLabel?: string\n}\n\n/**\n * Props for {@link VABulletList}\n */\nexport type VABulletListProps = {\n  /** list of text to display in a bulleted list*/\n  listOfText: Array<string | VABulletListText>\n\n  /** optional paragraph spacing */\n  paragraphSpacing?: boolean\n}\n\n/**\n * Displays the list of text as a bulleted list\n */\nconst VABulletList: FC<VABulletListProps> = ({ listOfText }, paragraphSpacing) => {\n  const launchExternalLink = useExternalLink()\n  const theme = useTheme()\n\n  const getUpdatedListOfText = (): Array<VABulletListText> => {\n    if (_.isString(listOfText[0])) {\n      const updatedListOfTextItem: Array<VABulletListText> = []\n      _.forEach(listOfText, (text) => {\n        updatedListOfTextItem.push({ text: text as string })\n      })\n      return updatedListOfTextItem\n    }\n\n    return listOfText as Array<VABulletListText>\n  }\n\n  const onPress = async (linkToRedirect: string): Promise<void> => {\n    launchExternalLink(linkToRedirect)\n  }\n\n  return (\n    <Box mb={paragraphSpacing ? theme.paragraphSpacing.spacing20FontSize : undefined}>\n      {_.map(getUpdatedListOfText(), (textItem, index) => {\n        const { variant, color, linkToRedirect, text, boldedTextPrefix, boldedText, a11yLabel } = textItem\n\n        const textViewProps: TextViewProps = {\n          variant: variant || 'MobileBody',\n          color: color || 'bodyText',\n          onPress: linkToRedirect ? async (): Promise<void> => onPress(linkToRedirect) : undefined,\n          flexWrap: 'wrap',\n          flex: 1,\n        }\n\n        return (\n          <Box display=\"flex\" flexDirection=\"row\" alignItems=\"flex-start\" key={index} accessible={true}>\n            <Box mr={20} mt={12}>\n              <VAIcon name=\"Bullet\" fill={color || 'bodyText'} height={6} width={6} />\n            </Box>\n            <TextView {...textViewProps} {...testIdProps(a11yLabel || text)}>\n              {!!boldedTextPrefix && <TextView variant=\"MobileBodyBold\">{boldedTextPrefix}</TextView>}\n              {text.trim()}\n              {!!boldedText && <TextView variant=\"MobileBodyBold\">{boldedText}</TextView>}\n            </TextView>\n          </Box>\n        )\n      })}\n    </Box>\n  )\n}\n\nexport default VABulletList\n";var a=n(32666);const o={},s=void 0,p={unversionedId:"Flagship design library/Components/TextViews/VABulletList",id:"Flagship design library/Components/TextViews/VABulletList",title:"VABulletList",description:"",source:"@site/docs/Flagship design library/Components/TextViews/VABulletList.mdx",sourceDirName:"Flagship design library/Components/TextViews",slug:"/Flagship design library/Components/TextViews/VABulletList",permalink:"/va-mobile-app/docs/Flagship design library/Components/TextViews/VABulletList",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TextView",permalink:"/va-mobile-app/docs/Flagship design library/Components/TextViews/TextView"},next:{title:"Uncategorized",permalink:"/va-mobile-app/docs/Flagship design library/Components/Uncategorized/"}},c={},d=[],m="<VABulletList listOfText={['first line', 'second line']} />",x={toc:d,exampleString:m},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,l.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{componentName:"VABulletList",example:m,codeString:r,mdxType:"ComponentTopInfo"}))}f.isMDXComponent=!0}}]);