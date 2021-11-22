"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7081],{5280:function(n,t,e){e.r(t),e.d(t,{contentTitle:function(){return l},default:function(){return y},exampleString:function(){return u},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var o=e(7462),r=e(3366),i=(e(7294),e(3905)),s=(e(9055),e(8909)),a=["components"],c={},l=void 0,m={unversionedId:"FrontEnd/ComponentsSection/ErrorComponents/BasicError",id:"FrontEnd/ComponentsSection/ErrorComponents/BasicError",isDocsHomePage:!1,title:"BasicError",description:"export const exampleString = `if (letterDownloadError) {",source:"@site/docs/FrontEnd/ComponentsSection/ErrorComponents/BasicError.mdx",sourceDirName:"FrontEnd/ComponentsSection/ErrorComponents",slug:"/FrontEnd/ComponentsSection/ErrorComponents/BasicError",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/ErrorComponents/BasicError",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CarouselTabBar",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/CarouselComponents/CarouselTabBar"},next:{title:"CallHelpCenter",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/ErrorComponents/CallHelpCenter"}},p=[],u="if (letterDownloadError) {\nreturn <BasicError \n        onTryAgain={onViewLetter} \n        messageText={'letters.download.error'} \n        buttonA11yHint={'Try again to download your letter'} />\n}",d={toc:p,exampleString:u};function y(n){var t=n.components,e=(0,r.Z)(n,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{componentName:"BasicError",example:u,codeString:"import { ViewStyle } from 'react-native'\nimport React, { FC } from 'react'\n\nimport { Box, ButtonTypesConstants, TextView, VAButton, VAScrollView } from 'components'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { testIdProps } from 'utils/accessibility'\nimport { useTheme, useTranslation } from 'utils/hooks'\n\nexport type BasicErrorProps = {\n  /** function called when the Try again button is pressed */\n  onTryAgain: () => void\n  /** message to display */\n  messageText: string\n  /** text to appear in bold  */\n  headerText?: string\n  /** accessibility hint for the header */\n  headerA11yLabel?: string\n  /** hint for the try again button */\n  buttonA11yHint?: string\n  /** label for button and accessibility title */\n  label?: string\n}\n\n/**A common component to show an error*/\nconst BasicError: FC<BasicErrorProps> = ({ onTryAgain, messageText, buttonA11yHint, headerText, headerA11yLabel, label }) => {\n  const t = useTranslation(NAMESPACE.COMMON)\n  const theme = useTheme()\n  const buttonText: string = label || t('tryAgain')\n\n  const scrollStyles: ViewStyle = {\n    flexGrow: 1,\n    justifyContent: 'center',\n    backgroundColor: theme.colors.background.main,\n  }\n\n  const containerStyles = {\n    flex: 1,\n    mx: theme.dimensions.gutter,\n    mt: theme.dimensions.contentMarginTop,\n    mb: theme.dimensions.contentMarginBottom,\n  }\n\n  return (\n    <VAScrollView contentContainerStyle={scrollStyles}>\n      <Box justifyContent=\"center\" {...containerStyles}>\n        {headerText && (\n          <TextView {...testIdProps(headerA11yLabel ? headerA11yLabel : headerText)} variant=\"MobileBodyBold\" accessibilityRole=\"header\" textAlign=\"center\">\n            {headerText}\n          </TextView>\n        )}\n        <TextView textAlign=\"center\">{messageText}</TextView>\n        <Box mt={theme.dimensions.standardMarginBetween} accessibilityRole=\"button\">\n          <VAButton onPress={onTryAgain} label={buttonText} buttonType={ButtonTypesConstants.buttonPrimary} a11yHint={buttonA11yHint} testID={buttonText} />\n        </Box>\n      </Box>\n    </VAScrollView>\n  )\n}\n\nexport default BasicError\n",mdxType:"ComponentTopInfo"}))}y.isMDXComponent=!0}}]);