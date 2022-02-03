"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8906],{75952:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return d},default:function(){return g},exampleString:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var o=t(87462),i=t(63366),a=(t(67294),t(3905)),r=(t(19055),t(38909)),s=["components"],c={},d=void 0,u={unversionedId:"Engineering/FrontEnd/ComponentsSection/SaveButton",id:"Engineering/FrontEnd/ComponentsSection/SaveButton",isDocsHomePage:!1,title:"SaveButton",description:"",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/SaveButton.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection",slug:"/Engineering/FrontEnd/ComponentsSection/SaveButton",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/SaveButton",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/Pagination"},next:{title:"SegmentedControl",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/SegmentedControl"}},m=[],p="<SaveButton onPress={() => { console.log('save pressed') }} disabled={false} />",l={toc:m,exampleString:p};function g(n){var e=n.components,t=(0,i.Z)(n,s);return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{componentName:"SaveButton",example:p,codeString:"import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native'\nimport React, { FC } from 'react'\n\nimport { Box } from './index'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { a11yHintProp, testIdProps } from 'utils/accessibility'\nimport { useTheme, useTranslation } from 'utils/hooks'\nimport TextView from './TextView'\n\ntype SaveButtonProps = {\n  /**function to run on save pressed*/\n  onSave: () => void\n  /**disables this component */\n  disabled: boolean\n  /**a11y hint for this component */\n  a11yHint?: string\n}\n\n/**A common component for the save button located at the header. */\nconst SaveButton: FC<SaveButtonProps> = ({ onSave, disabled, a11yHint }) => {\n  const t = useTranslation(NAMESPACE.COMMON)\n  const theme = useTheme()\n\n  const color = disabled ? 'primaryContrastDisabled' : 'primaryContrast'\n\n  const props: TouchableWithoutFeedbackProps = {\n    onPress: onSave,\n    disabled,\n    accessibilityRole: 'button',\n    accessible: true,\n    accessibilityState: disabled ? { disabled: true } : { disabled: false },\n  }\n\n  return (\n    <TouchableWithoutFeedback {...props} {...testIdProps('save')} {...a11yHintProp(a11yHint || t('save.a11yHint'))}>\n      <Box pr={theme.dimensions.headerButtonMargin} height={theme.dimensions.headerHeight} justifyContent={'center'} pl={theme.dimensions.headerButtonPadding}>\n        <TextView variant=\"ActionBar\" color={color} allowFontScaling={false} accessible={false}>\n          {t('save')}\n        </TextView>\n      </Box>\n    </TouchableWithoutFeedback>\n  )\n}\n\nexport default SaveButton\n",mdxType:"ComponentTopInfo"}))}g.isMDXComponent=!0}}]);