"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6140],{6357:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return a},default:function(){return L},exampleString:function(){return d},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return l}});var o=n(7462),i=n(3366),s=(n(7294),n(3905)),r=(n(9055),n(8909)),c=["components"],m={},a=void 0,p={unversionedId:"FrontEnd/ComponentsSection/FormComponents/PickerList",id:"FrontEnd/ComponentsSection/FormComponents/PickerList",isDocsHomePage:!1,title:"PickerList",description:"",source:"@site/docs/FrontEnd/ComponentsSection/FormComponents/PickerList.mdx",sourceDirName:"FrontEnd/ComponentsSection/FormComponents",slug:"/FrontEnd/ComponentsSection/FormComponents/PickerList",permalink:"/docs/FrontEnd/ComponentsSection/FormComponents/PickerList",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FormWrapper",permalink:"/docs/FrontEnd/ComponentsSection/FormComponents/FormWrapper"},next:{title:"RadioGroup",permalink:"/docs/FrontEnd/ComponentsSection/FormComponents/RadioGroup"}},l=[],d="<PickerList items={pickerListItems} />",u={toc:l,exampleString:d};function L(t){var e=t.components,n=(0,i.Z)(t,c);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{componentName:"PickerList",example:d,codeString:"import React, { FC } from 'react'\n\nimport { ButtonDecoratorType, List, ListItemObj } from 'components'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { TextLine } from 'components/types'\nimport { TextLines } from 'components/TextLines'\nimport { useTranslation } from 'utils/hooks'\n\n/**\n * Signifies each item in the list of items in {@link PickerListProps}\n */\nexport type PickerListItemObj = {\n  /** lines of text to display */\n  text: string\n  /** whether this item is the selected value **/\n  isSelected: boolean\n} & Partial<ListItemObj>\n\n/**\n * Props for {@link PickerList}\n */\nexport type PickerListProps = {\n  /** list of items of which a button will be rendered per item */\n  items: Array<PickerListItemObj>\n  /** optional title to use for the list */\n  title?: string\n  /**optional a11y hint for the title */\n  titleA11yLabel?: string\n}\n\n/**\n * Display a list of buttons with text and optional actions\n */\nconst PickerList: FC<PickerListProps> = ({ items, title, titleA11yLabel }) => {\n  const t = useTranslation(NAMESPACE.COMMON)\n\n  const listItemObjs: Array<ListItemObj> = items.map((item: PickerListItemObj, index) => {\n    // Move all of the properties except text lines to the standard list item object\n    const { text, testId, isSelected, ...listItemObj } = item\n\n    const textLine: Array<TextLine> = [{ text } as TextLine]\n    const content = <TextLines listOfText={textLine} />\n\n    const backgroundColor = isSelected ? 'pickerSelectedItem' : 'list'\n    const decorator = isSelected ? ButtonDecoratorType.SelectedItem : ButtonDecoratorType.None\n\n    const defaultTestId = text ? text : t('picker.noSelection')\n    const testIdToUse = testId ? testId : defaultTestId\n\n    const a11yValue = t('listPosition', { position: index + 1, total: items.length })\n    const a11yState = {\n      selected: isSelected,\n    }\n\n    return { ...listItemObj, content, backgroundColor, decorator, testId: testIdToUse, a11yValue, a11yRole: 'menuitem', a11yState }\n  })\n\n  return <List items={listItemObjs} title={title} titleA11yLabel={titleA11yLabel} />\n}\n\nexport default PickerList\n",mdxType:"ComponentTopInfo"}))}L.isMDXComponent=!0}}]);