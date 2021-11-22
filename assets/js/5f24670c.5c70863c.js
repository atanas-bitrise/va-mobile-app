"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4692],{6048:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return m},default:function(){return l},exampleString:function(){return c},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return g}});var o=t(7462),s=t(3366),a=(t(7294),t(3905)),r=(t(9055),t(8909)),i=["components"],d={},m=void 0,p={unversionedId:"FrontEnd/ComponentsSection/MessagesSentReadTag",id:"FrontEnd/ComponentsSection/MessagesSentReadTag",isDocsHomePage:!1,title:"MessagesSentReadTag",description:"",source:"@site/docs/FrontEnd/ComponentsSection/MessagesSentReadTag.mdx",sourceDirName:"FrontEnd/ComponentsSection",slug:"/FrontEnd/ComponentsSection/MessagesSentReadTag",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/MessagesSentReadTag",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MessagesCountTag",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/MessagesCountTag"},next:{title:"NavigationTabBar",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/NavigationTabBar"}},g=[],c="<MessagesSentReadTag text={'value'} />",u={toc:g,exampleString:c};function l(e){var n=e.components,t=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{componentName:"MessagesSentReadTag",example:c,codeString:"import { testIdProps } from 'utils/accessibility'\nimport { useTheme } from 'utils/hooks'\nimport Box from './Box'\nimport React, { FC } from 'react'\nimport TextView from './TextView'\n\nexport type MessagesSentTagProps = {\n  /**Message to be shown on the tag*/\n  text: string\n}\n\n/**Common component to show a text inside of a tag*/\nconst MessagesSentReadTag: FC<MessagesSentTagProps> = ({ text }) => {\n  const theme = useTheme()\n  return (\n    <Box\n      minWidth={theme.dimensions.tagCountMinWidth}\n      justifyContent={'center'}\n      alignSelf={'flex-start'}\n      backgroundColor=\"unreadMessagesTag\"\n      borderRadius={theme.dimensions.tagCountCurvedBorder}\n      {...testIdProps(text)}\n      accessible={true}>\n      <TextView flexWrap={'wrap'} color=\"primaryContrast\" variant=\"SentMessagesReadTag\" px={theme.dimensions.alertPaddingX} pt={theme.dimensions.tagCountTopPadding}>\n        {text}\n      </TextView>\n    </Box>\n  )\n}\n\nexport default MessagesSentReadTag\n",mdxType:"ComponentTopInfo"}))}l.isMDXComponent=!0}}]);