"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[980],{25505:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return p},default:function(){return l},exampleString:function(){return d},frontMatter:function(){return m},metadata:function(){return a},toc:function(){return x}});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),c=(t(19055),t(38909)),s=["components"],m={},p=void 0,a={unversionedId:"Engineering/FrontEnd/ComponentsSection/TextLineWithIcon",id:"Engineering/FrontEnd/ComponentsSection/TextLineWithIcon",isDocsHomePage:!1,title:"TextLineWithIcon",description:"export const exampleString = `{textLinesWithIcon?.map((textObj number) => {",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/TextLineWithIcon.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection",slug:"/Engineering/FrontEnd/ComponentsSection/TextLineWithIcon",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/TextLineWithIcon",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TextArea",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/TextArea"},next:{title:"TextLines",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/TextLines"}},x=[],d="{textLinesWithIcon?.map((textObj: TextLineWithIconProps, index: number) => {\n    return <TextLineWithIcon key={index} {...textObj} />\n})}",u={toc:x,exampleString:d};function l(n){var e=n.components,t=(0,i.Z)(n,s);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(c.Z,{componentName:"TextLineWithIcon",example:d,codeString:"import React, { FC } from 'react'\n\nimport { TextLine } from './types'\nimport { useTheme } from 'utils/hooks'\nimport Box from './Box'\nimport TextView from './TextView'\nimport VAIcon, { VAIconProps } from './VAIcon'\n\nexport type TextLineWithIconProps = {\n  /** Props for icon you want to display in this line of text */\n  iconProps?: VAIconProps & {\n    /** If the icon is supposed to appear on its own line (ex: read tag) */\n    isOwnLine?: boolean\n  }\n} & TextLine\n\n/**Common component to show an icon with a line of text*/\nexport const TextLineWithIcon: FC<TextLineWithIconProps> = ({ iconProps, text, variant, textAlign, color }) => {\n  const themes = useTheme()\n  const iconNotOwnRow = !(iconProps && iconProps.isOwnLine)\n\n  return (\n    <Box flexDirection={'row'}>\n      <Box ml={iconNotOwnRow ? 0 : themes.dimensions.listItemDecoratorMarginLeft} mt={themes.dimensions.navigationBarIconMarginTop} mr={themes.dimensions.condensedMarginBetween}>\n        {iconProps && <VAIcon name={iconProps.name} width={iconProps.width} height={iconProps.height} fill={iconProps.fill} />}\n        {!iconProps && <Box mr={themes.dimensions.messageIconLeftMargin} />}\n      </Box>\n      {iconNotOwnRow && (\n        <TextView flex={1} variant={variant} textAlign={textAlign} color={color}>\n          {text}\n        </TextView>\n      )}\n    </Box>\n  )\n}\n\nexport default TextLineWithIcon\n",mdxType:"ComponentTopInfo"}))}l.isMDXComponent=!0}}]);