"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5428],{38909:function(t,e,n){n.d(e,{Z:function(){return c}});var o=n(67294),r=n(19055),i=n(26396),s=n(58215),a=n(82224),l=n(36005),u=function(t){var e=t.props;return e?o.createElement(o.Fragment,null,l.ZP.isEmpty(e)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(e).map((function(t){var n;return o.createElement("tr",{key:t},o.createElement("td",null,o.createElement("code",null,t)),o.createElement("td",{style:{minWidth:200}},null==(n=e[t].type)?void 0:n.name),o.createElement("td",null,e[t].defaultValue&&e[t].defaultValue.value.toString()),o.createElement("td",null,e[t].required?"Yes":"No"),o.createElement("td",null,e[t].description))}))))):null};function c(t){var e=(0,a.N)(t.componentName)[0],n=e.description,l=e.displayName,c=e.props,d="How to use the "+l+" component",p="Full code for the "+l+" component";return o.createElement(o.Fragment,null,n,o.createElement("br",null),o.createElement("br",null),o.createElement(i.Z,null,o.createElement(s.Z,{value:"props",label:"Properties"},o.createElement(u,{props:c})),o.createElement(s.Z,{value:"example",label:"Example"},t.example&&o.createElement(r.Z,{title:d,className:"language-tsx test"},t.example)),o.createElement(s.Z,{value:"code",label:"Source Code"},t.codeString&&o.createElement(r.Z,{title:p,className:"language-tsx"},t.codeString)),o.createElement(s.Z,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},t.accessibilityInfo))))}},6040:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return u},default:function(){return b},exampleString:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),s=(n(19055),n(38909)),a=["components"],l={},u=void 0,c={unversionedId:"Engineering/FrontEnd/ComponentsSection/Buttons and Links/VAButton",id:"Engineering/FrontEnd/ComponentsSection/Buttons and Links/VAButton",title:"VAButton",description:"export const exampleString = `<VAButton",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/Buttons and Links/VAButton.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/Buttons and Links",slug:"/Engineering/FrontEnd/ComponentsSection/Buttons and Links/VAButton",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Buttons and Links/VAButton",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Switch",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Buttons and Links/Switch"},next:{title:"AccordionCollapsible",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Alert and Progress/AccordionCollapsible"}},d=[],p="<VAButton \nonPress={() => { console.log('button pressed') }} \nlabel={'my button'} \ntextColor=\"primaryContrast\" \nbackgroundColor=\"button\" \ndisabledText=\"my instructions to enable this button\" \niconProps={{ name: 'PaperClip', width: 16, height: 18 }} />",m={toc:d,exampleString:p};function b(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{componentName:"VAButton",example:p,codeString:"import { AccessibilityState, Pressable } from 'react-native'\nimport React, { FC, useState } from 'react'\n\nimport { Box, BoxProps, TextView, TextViewProps, VAIcon, VAIconProps } from './index'\nimport { VAButtonBackgroundColors, VAButtonTextColors } from 'styles/theme'\nimport { a11yHintProp, testIdProps } from 'utils/accessibility'\nimport { useTheme } from 'utils/hooks'\n\nexport type VAButtonBackgroundColorsVariant = keyof VAButtonBackgroundColors\n\nexport const ButtonTypesConstants: {\n  buttonPrimary: ButtonTypes\n  buttonSecondary: ButtonTypes\n  buttonDestructive: ButtonTypes\n  buttonWhite: ButtonTypes\n  brandedPrimary: ButtonTypes\n} = {\n  buttonPrimary: 'buttonPrimary',\n  buttonSecondary: 'buttonSecondary',\n  buttonDestructive: 'buttonDestructive',\n  buttonWhite: 'buttonWhite',\n  brandedPrimary: 'brandedPrimary',\n}\nexport type ButtonTypes = 'buttonPrimary' | 'buttonSecondary' | 'buttonDestructive' | 'buttonWhite' | 'brandedPrimary'\n\n/**\n * Props for the {@link VAButton}\n */\nexport type VAButtonProps = {\n  /** function called when button is pressed */\n  onPress: () => void\n  /** text appearing in the button */\n  label: string\n  /** specifies how the button will look - buttonPrimary has non white background, buttonSecondary has white background w/ colored border  */\n  buttonType: ButtonTypes\n  /** a string value used to set the buttons testID/accessibility label */\n  testID?: string\n  /** text to use as the accessibility hint */\n  a11yHint?: string\n  /** optional prop that disables the button when set to true */\n  disabled?: boolean\n  /** optional prop for text to display under the button if it is disabled **/\n  disabledText?: string\n  /** hides the border if set to true */\n  hideBorder?: boolean\n  /** optional accessibility state */\n  accessibilityState?: AccessibilityState\n  /** props for optional icon to display before text */\n  iconProps?: VAIconProps\n  /** props for optional min height */\n  minHeight?: number\n}\n\n/**\n * A common component to show a button that takes the full width of the view with gutters\n */\nconst VAButton: FC<VAButtonProps> = ({ onPress, label, disabled, buttonType, hideBorder, a11yHint, testID, accessibilityState, disabledText, iconProps, minHeight }) => {\n  const theme = useTheme()\n\n  const textViewProps: TextViewProps = {\n    variant: 'MobileBodyBold',\n    color: (disabled ? 'buttonDisabled' : buttonType) as keyof VAButtonTextColors,\n  }\n\n  const [isPressed, setIsPressed] = useState(false)\n\n  const _onPressIn = (): void => {\n    setIsPressed(true)\n  }\n\n  const _onPressOut = (): void => {\n    setIsPressed(false)\n  }\n\n  const getBorderOrBackgroundColor = (): VAButtonBackgroundColorsVariant => {\n    if (disabled) {\n      return 'buttonDisabled'\n    }\n\n    // animate 'buttonPrimary' when active\n    if (isPressed) {\n      if (buttonType === ButtonTypesConstants.buttonPrimary) {\n        return 'buttonPrimaryActive'\n      } else if (buttonType === ButtonTypesConstants.buttonDestructive) {\n        return 'buttonDestructiveActive'\n      } else if (buttonType === ButtonTypesConstants.buttonWhite) {\n        return 'buttonWhiteActive'\n      } else if (buttonType === ButtonTypesConstants.brandedPrimary) {\n        return 'brandedPrimaryActive'\n      } else {\n        return 'buttonSecondaryActive'\n      }\n    }\n\n    return buttonType\n  }\n\n  const hideButtonBorder = hideBorder || buttonType === ButtonTypesConstants.buttonPrimary || disabled\n\n  const boxProps: BoxProps = {\n    borderRadius: 5,\n    backgroundColor: getBorderOrBackgroundColor(),\n    alignItems: 'center',\n    p: theme.dimensions.buttonPadding,\n    borderWidth: hideButtonBorder ? undefined : theme.dimensions.buttonBorderWidth,\n    borderColor: hideButtonBorder ? undefined : getBorderOrBackgroundColor(),\n    minHeight: minHeight || undefined,\n  }\n\n  const hintProps = a11yHint ? a11yHintProp(a11yHint) : {}\n\n  const showDisabledText = disabled && disabledText\n\n  const disabledTextProps: TextViewProps = {\n    variant: 'HelperText',\n  }\n\n  return (\n    <>\n      <Pressable\n        onPress={onPress}\n        onPressIn={_onPressIn}\n        onPressOut={_onPressOut}\n        disabled={disabled}\n        {...testIdProps(testID || label)}\n        {...hintProps}\n        accessibilityRole=\"button\"\n        accessible={true}\n        accessibilityState={accessibilityState || {}}>\n        <Box {...boxProps}>\n          <Box display=\"flex\" flexDirection=\"row\" alignItems=\"center\">\n            {iconProps && (\n              <Box mr={theme.dimensions.textIconMargin}>\n                <VAIcon {...iconProps} />\n              </Box>\n            )}\n            <TextView {...textViewProps}>{label}</TextView>\n          </Box>\n        </Box>\n      </Pressable>\n      {showDisabledText && (\n        <Box my={theme.dimensions.condensedMarginBetween}>\n          <TextView {...disabledTextProps}>{disabledText}</TextView>\n        </Box>\n      )}\n    </>\n  )\n}\n\nexport default VAButton\n",mdxType:"ComponentTopInfo"}))}b.isMDXComponent=!0}}]);