"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6319],{1862:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},exampleString:function(){return u},default:function(){return b}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),l=(n(9055),n(2809)),s=n(8909),a=["components"],c={},d=void 0,m={unversionedId:"FrontEnd/ComponentsSection/AttachmentLink",id:"FrontEnd/ComponentsSection/AttachmentLink",isDocsHomePage:!1,title:"AttachmentLink",description:"export const exampleString = `<AttachmentLink",source:"@site/docs/FrontEnd/ComponentsSection/AttachmentLink.mdx",sourceDirName:"FrontEnd/ComponentsSection",slug:"/FrontEnd/ComponentsSection/AttachmentLink",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/AttachmentLink",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AppVersionAndBuild",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/AppVersionAndBuild"},next:{title:"BackButton",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/BackButton"}},p=[],u="<AttachmentLink\nname={'filename'}\nformattedSize={'byteSize'}\na11yHint={'a11yHint'}\na11yValue={'a11yValue'}\nonPress={() => {console.log('press function')}}\nload={true}\n/>",x={toc:p,exampleString:u};function b(t){var e=t.components,n=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},x,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{componentName:"AttachmentLink",example:u,codeString:l.Z,mdxType:"ComponentTopInfo"}))}b.isMDXComponent=!0},2809:function(t,e){e.Z="import { AccessibilityRole } from 'react-native'\nimport React, { FC } from 'react'\n\nimport { Box, BoxProps, TextView } from './index'\nimport { VAAlertBoxColors, VABorderColors } from 'styles/theme'\nimport { testIdProps } from 'utils/accessibility'\nimport { useTheme } from 'utils/hooks'\n\nexport type AlertBoxProps = {\n  /** color of the border */\n  border: keyof VABorderColors\n  /** color of the background */\n  background: keyof VAAlertBoxColors\n  /** body of the alert */\n  text?: string\n  /** optional bolded title text */\n  title?: string\n  /** optional accessibility label for the text */\n  textA11yLabel?: string\n  /** optional accessibility label for the title */\n  titleA11yLabel?: string\n  /** optional accessibility role for the title */\n  titleRole?: AccessibilityRole\n}\n\n/**\n * Displays content in a box styled as an alert\n */\nconst AlertBox: FC<AlertBoxProps> = ({ border, background, children, title, text, textA11yLabel, titleA11yLabel, titleRole }) => {\n  const theme = useTheme()\n\n  const boxProps: BoxProps = {\n    backgroundColor: background,\n    borderLeftWidth: theme.dimensions.alertBorderWidth,\n    borderLeftColor: border,\n    py: theme.dimensions.alertPaddingY,\n    px: theme.dimensions.alertPaddingX,\n  }\n\n  const titleAccessibilityRole = titleRole ? titleRole : text || children ? 'header' : undefined\n\n  return (\n    <Box {...boxProps}>\n      {title && (\n        <Box {...testIdProps(titleA11yLabel || title)} accessibilityRole={titleAccessibilityRole} accessible={true}>\n          <TextView variant=\"MobileBodyBold\" mb={text ? theme.dimensions.standardMarginBetween : 0}>\n            {title}\n          </TextView>\n        </Box>\n      )}\n      {text && (\n        <Box accessible={true}>\n          <TextView {...testIdProps(textA11yLabel || text)} variant=\"MobileBody\">\n            {text}\n          </TextView>\n        </Box>\n      )}\n      {children}\n    </Box>\n  )\n}\n\nexport default AlertBox\n"}}]);