"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[591],{8581:function(n,t,e){e.r(t),e.d(t,{contentTitle:function(){return l},default:function(){return d},exampleString:function(){return p},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u}});var o=e(7462),r=e(3366),i=(e(7294),e(3905)),a=(e(9055),e(8909)),s=["components"],c={},l=void 0,m={unversionedId:"Engineering/FrontEnd/ComponentsSection/ConfirmationAlert",id:"Engineering/FrontEnd/ComponentsSection/ConfirmationAlert",title:"ConfirmationAlert",description:"export const exampleString = `<ConfirmationAlert",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/ConfirmationAlert.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection",slug:"/Engineering/FrontEnd/ComponentsSection/ConfirmationAlert",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/ConfirmationAlert",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CollapsibleView",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/CollapsibleView"},next:{title:"CrisisLineCta",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/CrisisLineCta"}},u=[],p="<ConfirmationAlert\ntitle={'question'}\ntext={'areYouSure'}\nbackground=\"noCardBackground\"\nborder=\"warning\"\nconfirmLabel={'sendButton'}\ncancelLabel={'secureMessaging.sendConfirmation.editingButton'}\nconfirmA11y={'secureMessaging.sendConfirmation.sendButton.a11y'}\ncancelA11y={'secureMessaging.sendConfirmation.editingButton.a11y'}\nconfirmOnPress={onSend}\ncancelOnPress={navigation.goBack}\n/>",f={toc:u,exampleString:p};function d(n){var t=n.components,e=(0,r.Z)(n,s);return(0,i.kt)("wrapper",(0,o.Z)({},f,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{componentName:"ConfirmationAlert",example:p,codeString:"import React, { FC } from 'react'\n\nimport { AlertBox, Box, ButtonTypes, ButtonTypesConstants, VAButton } from './index'\nimport { AlertBoxProps } from './AlertBox'\nimport { useTheme } from 'utils/hooks'\n\nexport type ConfirmationAlertProps = {\n  /**sets the confirm label */\n  confirmLabel: string\n  /** sets the cancel label */\n  cancelLabel: string\n  /**sets the listener function for the confirm action*/\n  confirmOnPress: () => void\n  /**sets the listener function for the cancel action*/\n  cancelOnPress: () => void\n  /**sets the a11ly tesxt for the confirm action*/\n  confirmA11y?: string\n  /**sets the a11ly tesxt for the cancel action*/\n  cancelA11y?: string\n  /**sets the button type for the confirm button*/\n  button1type?: ButtonTypes\n  /**sets the button type for the cancel button*/\n  button2type?: ButtonTypes\n} & AlertBoxProps\n\n/**Show a confirmation alert that the user can confirm or cancel the action */\nconst ConfirmationAlert: FC<ConfirmationAlertProps> = ({\n  title,\n  text,\n  background,\n  border,\n  confirmLabel,\n  cancelLabel,\n  confirmOnPress,\n  cancelOnPress,\n  confirmA11y,\n  cancelA11y,\n  button1type = ButtonTypesConstants.buttonPrimary,\n  button2type = ButtonTypesConstants.buttonSecondary,\n}) => {\n  const theme = useTheme()\n\n  return (\n    <AlertBox title={title} text={text} background={background} border={border}>\n      <Box mt={theme.dimensions.standardMarginBetween}>\n        <VAButton onPress={confirmOnPress} label={confirmLabel} a11yHint={confirmA11y} buttonType={button1type} />\n        <Box mt={theme.dimensions.standardMarginBetween}>\n          <VAButton onPress={cancelOnPress} label={cancelLabel} a11yHint={cancelA11y} buttonType={button2type} />\n        </Box>\n      </Box>\n    </AlertBox>\n  )\n}\nexport default ConfirmationAlert\n",mdxType:"ComponentTopInfo"}))}d.isMDXComponent=!0}}]);