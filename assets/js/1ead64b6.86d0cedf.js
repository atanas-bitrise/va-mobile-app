"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6317],{32666:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(67294),o=n(97405),l=n(22808),s=n(30433),r=n(41284),a=n(36005);const c=e=>{let{props:t}=e;return t?i.createElement(i.Fragment,null,a.ZP.isEmpty(t)?i.createElement("pre",{className:"preText"},"This component does not have props defined"):i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Name"),i.createElement("th",null,"Type"),i.createElement("th",null,"Default Value"),i.createElement("th",null,"Required"),i.createElement("th",null,"Description"))),i.createElement("tbody",null,Object.keys(t).map((e=>i.createElement("tr",{key:e},i.createElement("td",null,i.createElement("code",null,e)),i.createElement("td",{style:{minWidth:200}},t[e].type?.name),i.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value.toString()),i.createElement("td",null,t[e].required?"Yes":"No"),i.createElement("td",null,t[e].description))))))):null};function m(e){const t=(0,r.N)(e.componentName),{description:n,displayName:a,props:m}=t[0],p=`How to use the ${a} component`,d=`Full code for the ${a} component`;return i.createElement(i.Fragment,null,n,i.createElement("br",null),i.createElement("br",null),i.createElement(l.Z,null,i.createElement(s.Z,{value:"props",label:"Properties"},i.createElement(c,{props:m})),i.createElement(s.Z,{value:"example",label:"Example"},e.example&&i.createElement(o.Z,{title:p,className:"language-tsx test"},e.example)),i.createElement(s.Z,{value:"code",label:"Source Code"},e.codeString&&i.createElement(o.Z,{title:d,className:"language-tsx"},e.codeString)),i.createElement(s.Z,{value:"accessibility",label:"Accessibility"},i.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},41284:(e,t,n)=>{n.d(t,{N:()=>o});var i=n(52426);const o=e=>(0,i.ZP)()["docusaurus-plugin-react-docgen-typescript"].default.filter((t=>t.displayName===e))},88208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>k,exampleString:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));n(8209),n(97405);const l="import { useTranslation } from 'react-i18next'\nimport React, { FC } from 'react'\n\nimport { ButtonDecoratorType, List, ListItemObj, VAIconProps } from 'components'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { TextLine } from 'components/types'\nimport { TextLineWithIconProps } from 'components/TextLineWithIcon'\nimport { TextLines } from 'components/TextLines'\n\n/**\n * Signifies each item in the list of items in {@link PickerListProps}\n */\nexport type PickerListItemObj = {\n  /** lines of text to display */\n  text: string\n  /** whether this item is the selected value **/\n  isSelected: boolean\n  /** icon to show */\n  icon?: VAIconProps\n} & Partial<ListItemObj>\n\n/**\n * Props for {@link PickerList}\n */\nexport type PickerListProps = {\n  /** list of items of which a button will be rendered per item */\n  items: Array<PickerListItemObj>\n  /** optional title to use for the list */\n  title?: string\n  /**optional a11y hint for the title */\n  titleA11yLabel?: string\n}\n\n/**\n * Display a list of buttons with text and optional actions\n */\nconst PickerList: FC<PickerListProps> = ({ items, title, titleA11yLabel }) => {\n  const { t } = useTranslation(NAMESPACE.COMMON)\n\n  const listItemObjs: Array<ListItemObj> = items.map((item: PickerListItemObj, index) => {\n    // Move all of the properties except text lines to the standard list item object\n    const { text, icon, testId, isSelected, ...listItemObj } = item\n\n    const textLine = icon ? [{ text, iconProps: icon, color: icon.fill } as TextLineWithIconProps] : [{ text } as TextLine]\n    const content = <TextLines listOfText={textLine} />\n\n    const backgroundColor = isSelected ? 'pickerSelectedItem' : 'list'\n    const decorator = isSelected ? ButtonDecoratorType.SelectedItem : ButtonDecoratorType.None\n\n    const defaultTestId = text ? text : t('picker.noSelection')\n    const testIdToUse = testId ? testId : defaultTestId\n\n    const a11yValue = t('listPosition', { position: index + 1, total: items.length })\n    const a11yState = {\n      selected: isSelected,\n    }\n\n    return { ...listItemObj, content, backgroundColor, decorator, testId: testIdToUse, a11yValue, a11yRole: 'menuitem', a11yState }\n  })\n\n  return <List items={listItemObjs} title={title} titleA11yLabel={titleA11yLabel} />\n}\n\nexport default PickerList\n";var s=n(32666);const r={},a=void 0,c={unversionedId:"Flagship design library/Components/Selection and Input/Pickers/PickerList",id:"Flagship design library/Components/Selection and Input/Pickers/PickerList",title:"PickerList",description:"",source:"@site/docs/Flagship design library/Components/Selection and Input/Pickers/PickerList.mdx",sourceDirName:"Flagship design library/Components/Selection and Input/Pickers",slug:"/Flagship design library/Components/Selection and Input/Pickers/PickerList",permalink:"/va-mobile-app/docs/Flagship design library/Components/Selection and Input/Pickers/PickerList",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pickers",permalink:"/va-mobile-app/docs/Flagship design library/Components/Selection and Input/Pickers/"},next:{title:"VAModalPicker",permalink:"/va-mobile-app/docs/Flagship design library/Components/Selection and Input/Pickers/VAModalPicker"}},m={},p=[],d="<PickerList items={pickerListItems} />",u={toc:p,exampleString:d},b="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{componentName:"PickerList",example:d,codeString:l,mdxType:"ComponentTopInfo"}))}k.isMDXComponent=!0}}]);