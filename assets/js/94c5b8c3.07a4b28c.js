"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1331],{7779:function(t,n,o){o.r(n),o.d(n,{contentTitle:function(){return u},default:function(){return d},exampleString:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return m}});var e=o(7462),a=o(3366),i=(o(7294),o(3905)),s=(o(9055),o(8909)),c=["components"],r={},u=void 0,l={unversionedId:"FrontEnd/ComponentsSection/BackButton",id:"FrontEnd/ComponentsSection/BackButton",isDocsHomePage:!1,title:"BackButton",description:"export const exampleString = `<BackButton",source:"@site/docs/FrontEnd/ComponentsSection/BackButton.mdx",sourceDirName:"FrontEnd/ComponentsSection",slug:"/FrontEnd/ComponentsSection/BackButton",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/BackButton",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AttachmentLink",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/AttachmentLink"},next:{title:"BaseListItem",permalink:"/va-mobile-app/docs/FrontEnd/ComponentsSection/BaseListItem"}},m=[],p="<BackButton \nonPress={() => {}} \nlabel={'BackButtonLabelConstants.back'} \ncanGoBack={true} \nshowCarat={true} \na11yHint={'a11yHint'}/>",f={toc:m,exampleString:p};function d(t){var n=t.components,o=(0,a.Z)(t,c);return(0,i.kt)("wrapper",(0,e.Z)({},f,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{componentName:"BackButton",example:p,codeString:"import { TouchableWithoutFeedback } from 'react-native'\nimport { useFocusEffect } from '@react-navigation/native'\nimport React, { FC } from 'react'\n\nimport { BackButtonLabel } from 'constants/backButtonLabels'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { a11yHintProp, testIdProps } from 'utils/accessibility'\nimport { useAccessibilityFocus, useTheme, useTranslation } from 'utils/hooks'\nimport Box from './Box'\nimport TextView from './TextView'\nimport VAIcon from './VAIcon'\n\n/**\n *  Signifies the props that need to be passed in to {@link BackButton}\n */\nexport type BackButtonProps = {\n  /** the onPress function for the back button */\n  onPress: (() => void) | undefined\n  /** a boolean indicating if the user has a screen to go back to; if false, the back button will be hidden */\n  canGoBack: boolean | undefined\n  /** translation key to use for the display text, as well as the testID for the component */\n  label: BackButtonLabel\n  /** whether to show the carat left of the text */\n  showCarat?: boolean | true\n  /** optional param to add accessibility hint to back button */\n  a11yHint?: string\n  /** boolean to specify if we want accesibility to focus on the back button */\n  focusOnButton?: boolean\n}\n\n/**\n * Button used by the stack navigation to go back to the previous screen\n */\nexport const BackButton: FC<BackButtonProps> = ({ onPress, canGoBack, label, showCarat, a11yHint, focusOnButton = true }) => {\n  const t = useTranslation(NAMESPACE.COMMON)\n  const theme = useTheme()\n\n  const [focusRef, setFocus] = useAccessibilityFocus<TouchableWithoutFeedback>()\n\n  useFocusEffect(focusOnButton ? setFocus : () => {})\n\n  if (!canGoBack) {\n    return null\n  }\n\n  const chevron = showCarat ? <VAIcon mt={1} name={'ArrowLeft'} fill=\"contrast\" /> : <></>\n\n  const a11yHintPropParam = a11yHint ? a11yHint : t(`${label}.a11yHint`)\n\n  return (\n    <TouchableWithoutFeedback ref={focusRef} onPress={onPress} {...testIdProps(label)} {...a11yHintProp(a11yHintPropParam)} accessibilityRole=\"button\" accessible={true}>\n      <Box display=\"flex\" flexDirection=\"row\" ml={theme.dimensions.headerButtonMargin} height={theme.dimensions.headerHeight} alignItems={'center'}>\n        {chevron}\n        <TextView variant=\"ActionBar\" color=\"primaryContrast\" ml={theme.dimensions.textIconMargin} allowFontScaling={false} accessible={false}>\n          {t(label)}\n        </TextView>\n      </Box>\n    </TouchableWithoutFeedback>\n  )\n}\n\nexport default BackButton\n",mdxType:"ComponentTopInfo"}))}d.isMDXComponent=!0}}]);