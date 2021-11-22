"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7249],{6850:function(n,e,o){o.r(e),o.d(e,{contentTitle:function(){return m},default:function(){return u},exampleString:function(){return d},frontMatter:function(){return p},metadata:function(){return a},toc:function(){return x}});var t=o(7462),i=o(3366),r=(o(7294),o(3905)),c=(o(9055),o(8909)),s=["components"],p={},m=void 0,a={unversionedId:"FrontEnd/ComponentsSection/TextLineWithIcon",id:"FrontEnd/ComponentsSection/TextLineWithIcon",isDocsHomePage:!1,title:"TextLineWithIcon",description:"export const exampleString = `{textLinesWithIcon?.map((textObj number) => {",source:"@site/docs/FrontEnd/ComponentsSection/TextLineWithIcon.mdx",sourceDirName:"FrontEnd/ComponentsSection",slug:"/FrontEnd/ComponentsSection/TextLineWithIcon",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/TextLineWithIcon",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TextArea",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/TextArea"},next:{title:"TextLines",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/TextLines"}},x=[],d="{textLinesWithIcon?.map((textObj: TextLineWithIconProps, index: number) => {\n    return <TextLineWithIcon key={index} {...textObj} />\n})}",l={toc:x,exampleString:d};function u(n){var e=n.components,o=(0,i.Z)(n,s);return(0,r.kt)("wrapper",(0,t.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(c.Z,{componentName:"TextLineWithIcon",example:d,codeString:"import React, { FC } from 'react'\n\nimport { TextLine } from './types'\nimport { useTheme } from 'utils/hooks'\nimport Box from './Box'\nimport TextView from './TextView'\nimport VAIcon, { VAIconProps } from './VAIcon'\n\nexport type TextLineWithIconProps = {\n  /** Props for icon you want to display in this line of text */\n  iconProps?: VAIconProps & {\n    /** If the icon is supposed to appear on its own line (ex: read tag) */\n    isOwnLine?: boolean\n  }\n} & TextLine\n\n/**Common component to show an icon with a line of text*/\nexport const TextLineWithIcon: FC<TextLineWithIconProps> = ({ iconProps, text, variant, textAlign, color }) => {\n  const themes = useTheme()\n  const iconNotOwnRow = !(iconProps && iconProps.isOwnLine)\n\n  return (\n    <Box flexDirection={'row'}>\n      <Box ml={iconNotOwnRow ? 0 : themes.dimensions.listItemDecoratorMarginLeft} mt={themes.dimensions.navigationBarIconMarginTop} mr={themes.dimensions.condensedMarginBetween}>\n        {iconProps && <VAIcon name={iconProps.name} width={iconProps.width} height={iconProps.height} fill={iconProps.fill} />}\n        {!iconProps && <Box mr={themes.dimensions.messageIconLeftMargin} />}\n      </Box>\n      {iconNotOwnRow && (\n        <TextView flex={1} variant={variant} textAlign={textAlign} color={color}>\n          {text}\n        </TextView>\n      )}\n    </Box>\n  )\n}\n\nexport default TextLineWithIcon\n",mdxType:"ComponentTopInfo"}))}u.isMDXComponent=!0}}]);