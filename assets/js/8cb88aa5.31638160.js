"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[608],{29417:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return c},default:function(){return g},exampleString:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),s=(t(19055),t(38909)),a=["components"],l={},c=void 0,m={unversionedId:"Engineering/FrontEnd/ComponentsSection/ErrorComponents/BasicError",id:"Engineering/FrontEnd/ComponentsSection/ErrorComponents/BasicError",title:"BasicError",description:"export const exampleString = `if (letterDownloadError) {",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/ErrorComponents/BasicError.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/ErrorComponents",slug:"/Engineering/FrontEnd/ComponentsSection/ErrorComponents/BasicError",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/ErrorComponents/BasicError",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CarouselTabBar",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/CarouselComponents/CarouselTabBar"},next:{title:"CallHelpCenter",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/ErrorComponents/CallHelpCenter"}},p=[],u="if (letterDownloadError) {\nreturn <BasicError \n        onTryAgain={onViewLetter} \n        messageText={'letters.download.error'} \n        buttonA11yHint={'Try again to download your letter'} />\n}",d={toc:p,exampleString:u};function g(n){var e=n.components,t=(0,r.Z)(n,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{componentName:"BasicError",example:u,codeString:"import { ViewStyle } from 'react-native'\nimport React, { FC } from 'react'\n\nimport { Box, ButtonTypesConstants, TextView, VAButton, VAScrollView } from 'components'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { testIdProps } from 'utils/accessibility'\nimport { useTheme, useTranslation } from 'utils/hooks'\n\nexport type BasicErrorProps = {\n  /** function called when the Try again button is pressed */\n  onTryAgain: () => void\n  /** message to display */\n  messageText: string\n  /** text to appear in bold  */\n  headerText?: string\n  /** accessibility hint for the header */\n  headerA11yLabel?: string\n  /** hint for the try again button */\n  buttonA11yHint?: string\n  /** label for button and accessibility title */\n  label?: string\n}\n\n/**A common component to show an error*/\nconst BasicError: FC<BasicErrorProps> = ({ onTryAgain, messageText, buttonA11yHint, headerText, headerA11yLabel, label }) => {\n  const t = useTranslation(NAMESPACE.COMMON)\n  const theme = useTheme()\n  const buttonText: string = label || t('tryAgain')\n\n  const scrollStyles: ViewStyle = {\n    flexGrow: 1,\n    justifyContent: 'center',\n  }\n\n  const containerStyles = {\n    flex: 1,\n    mx: theme.dimensions.gutter,\n    mt: theme.dimensions.contentMarginTop,\n    mb: theme.dimensions.contentMarginBottom,\n  }\n\n  return (\n    <VAScrollView contentContainerStyle={scrollStyles}>\n      <Box justifyContent=\"center\" {...containerStyles}>\n        {headerText && (\n          <TextView {...testIdProps(headerA11yLabel ? headerA11yLabel : headerText)} variant=\"MobileBodyBold\" color={'primaryTitle'} accessibilityRole=\"header\" textAlign=\"center\">\n            {headerText}\n          </TextView>\n        )}\n        <TextView textAlign=\"center\">{messageText}</TextView>\n        <Box mt={theme.dimensions.standardMarginBetween} accessibilityRole=\"button\">\n          <VAButton onPress={onTryAgain} label={buttonText} buttonType={ButtonTypesConstants.buttonPrimary} a11yHint={buttonA11yHint} testID={buttonText} />\n        </Box>\n      </Box>\n    </VAScrollView>\n  )\n}\n\nexport default BasicError\n",mdxType:"ComponentTopInfo"}))}g.isMDXComponent=!0}}]);