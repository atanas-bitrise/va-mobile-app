"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3058],{7644:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(96540),r=n(54610),i=n(3384),s=n(31347),a=n(28057),c=n(84476);const l=e=>{let{props:t}=e;return t?o.createElement(o.Fragment,null,c.Ay.isEmpty(t)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(t).map((e=>o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",{style:{minWidth:200}},t[e].type?.name),o.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value.toString()),o.createElement("td",null,t[e].required?"Yes":"No"),o.createElement("td",null,t[e].description))))))):null};function d(e){const t=(0,a.d)(e.componentName),{description:n,displayName:c,props:d}=t[0],p=`How to use the ${c} component`,m=`Full code for the ${c} component`;return o.createElement(o.Fragment,null,n,o.createElement("br",null),o.createElement("br",null),o.createElement(i.A,null,o.createElement(s.A,{value:"props",label:"Properties"},o.createElement(l,{props:d})),o.createElement(s.A,{value:"example",label:"Example"},e.example&&o.createElement(r.A,{title:p,className:"language-tsx test"},e.example)),o.createElement(s.A,{value:"code",label:"Source Code"},e.codeString&&o.createElement(r.A,{title:m,className:"language-tsx"},e.codeString)),o.createElement(s.A,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},28057:(e,t,n)=>{n.d(t,{d:()=>r});var o=n(2736);const r=e=>(0,o.Ay)()["docusaurus-plugin-react-docgen-typescript"].default.filter((t=>t.displayName===e))},77007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,exampleString:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(58168),r=(n(96540),n(15680));n(41873),n(54610);const i="import React, { FC, ReactElement, useState } from 'react'\nimport { AccessibilityProps, AccessibilityRole, AccessibilityState, Pressable, PressableProps } from 'react-native'\nimport { HapticFeedbackTypes } from 'react-native-haptic-feedback'\n\nimport { Icon } from '@department-of-veterans-affairs/mobile-component-library'\n\nimport FileRequestNumberIndicator from 'screens/BenefitsScreen/ClaimsScreen/ClaimDetailsScreen/ClaimStatus/ClaimFileUpload/FileRequestNumberIndicator'\nimport { a11yHintProp, a11yValueProp } from 'utils/accessibility'\nimport { triggerHaptic } from 'utils/haptics'\nimport { useTheme } from 'utils/hooks'\n\nimport Box, { BackgroundVariant, BoxProps } from './Box'\nimport SwitchComponent, { SwitchProps } from './Switch'\nimport VAIcon, { VAIconProps } from './VAIcon'\n\n/** Decorator type for the button, defaults to Navigation (right arrow) */\nexport enum ButtonDecoratorType {\n  /** Switch button decorator */\n  Switch = 'Switch',\n  /** Navigation arrow decorator */\n  Navigation = 'Navigation',\n  /** No decorator */\n  None = 'None',\n  /** Picker selected item decorator **/\n  SelectedItem = 'SelectedItem',\n  /** Trash can decorator */\n  Delete = 'Delete',\n  /** Empty radio button decorator */\n  RadioEmpty = 'RadioEmpty',\n  /** Filled radio button decorator */\n  RadioFilled = 'RadioFilled',\n  /** Disabled radio button decorator */\n  RadioDisabled = 'RadioDisabled',\n  /** Empty check box button decorator */\n  CheckBoxEmpty = 'CheckBoxEmpty',\n  /** Filled check box button decorator */\n  CheckBoxFilled = 'CheckBoxFilled',\n}\n\nexport type ListItemDecoratorProps = Partial<VAIconProps> | Partial<SwitchProps>\n\n/**\n * Props for BaseListItem\n */\nexport type BaseListItemProps = {\n  /** test id string also used for the accessibility label */\n  testId?: string\n\n  /** The a11y hint text */\n  a11yHint: string\n\n  /** optional a11y text value */\n  a11yValue?: string\n\n  /** optional accessibility role. By default it will be button */\n  a11yRole?: AccessibilityRole\n\n  /** optional accessibility state */\n  a11yState?: AccessibilityState\n\n  /** onPress callback */\n  onPress?: () => void\n\n  /** Decorator Type to use */\n  decorator?: ButtonDecoratorType\n\n  /** Optional props to be passed to the decorator */\n  decoratorProps?: ListItemDecoratorProps\n\n  /** Optional child elements to use instead of listOfText if you need to do special styling */\n  children?: React.ReactNode\n\n  /** Optional background color for an individual item */\n  backgroundColor?: BackgroundVariant\n\n  /** Optional active background color for an individual item */\n  activeBackgroundColor?: BackgroundVariant\n\n  /** Optional file request number for the number indicator */\n  claimsRequestNumber?: number\n\n  /** Optional file request if file was loaded to show check mark */\n  fileUploaded?: boolean\n\n  /** Optional min height */\n  minHeight?: number\n\n  /** test id string for detox */\n  detoxTestID?: string\n}\n\nexport const ButtonDecorator: FC<{\n  decorator?: ButtonDecoratorType\n  decoratorProps?: ListItemDecoratorProps\n  onPress?: () => void\n}> = ({ decorator, decoratorProps, onPress }) => {\n  const theme = useTheme()\n  const radioBtnWidth = 22\n  const radioBtnHeight = 22\n\n  const switchOnPress = onPress ? onPress : () => {}\n\n  switch (decorator) {\n    case ButtonDecoratorType.Switch:\n      return <SwitchComponent onPress={switchOnPress} {...decoratorProps} />\n    case ButtonDecoratorType.SelectedItem:\n      return (\n        <VAIcon name={'CheckMark'} height={13} width={16} fill={theme.colors.icon.pickerIcon} {...decoratorProps} />\n      )\n    case ButtonDecoratorType.Delete:\n      return <VAIcon name={'Trash'} height={16} width={14} fill={theme.colors.icon.error} {...decoratorProps} />\n    case ButtonDecoratorType.RadioFilled:\n      return (\n        <VAIcon\n          name={'RadioFilled'}\n          height={radioBtnHeight}\n          width={radioBtnWidth}\n          fill={theme.colors.icon.checkboxEnabledPrimary}\n          {...decoratorProps}\n        />\n      )\n    case ButtonDecoratorType.RadioEmpty:\n      return (\n        <VAIcon\n          name={'RadioEmpty'}\n          height={radioBtnHeight}\n          width={radioBtnWidth}\n          fill={theme.colors.icon.checkboxDisabledContrast}\n          stroke={theme.colors.icon.checkboxDisabled}\n          {...decoratorProps}\n        />\n      )\n    case ButtonDecoratorType.RadioDisabled:\n      return (\n        <VAIcon\n          name={'RadioEmpty'}\n          height={radioBtnHeight}\n          width={radioBtnWidth}\n          fill={theme.colors.icon.radioDisabled}\n          stroke={theme.colors.icon.checkboxDisabled}\n          {...decoratorProps}\n        />\n      )\n    case ButtonDecoratorType.CheckBoxFilled:\n      return (\n        <VAIcon\n          name={'CheckBoxFilled'}\n          height={radioBtnHeight}\n          width={radioBtnWidth}\n          fill={theme.colors.icon.checkboxEnabledPrimary}\n          {...decoratorProps}\n        />\n      )\n    case ButtonDecoratorType.CheckBoxEmpty:\n      return (\n        <VAIcon\n          name={'CheckBoxEmpty'}\n          height={radioBtnHeight}\n          width={radioBtnWidth}\n          fill={theme.colors.icon.checkboxDisabledContrast}\n          stroke={theme.colors.icon.checkboxDisabled}\n          {...decoratorProps}\n        />\n      )\n\n    default:\n      return (\n        <Icon\n          name={'ChevronRight'}\n          fill={theme.colors.icon.chevronListItem}\n          width={theme.dimensions.chevronListItemWidth}\n          height={theme.dimensions.chevronListItemHeight}\n        />\n      )\n  }\n}\n\n/**\n * Reusable component for menu items that take up the full width of the screen that is touchable.\n * @returns BaseListItem component\n */\nconst BaseListItem: FC<BaseListItemProps> = (props) => {\n  const {\n    onPress,\n    a11yHint,\n    a11yRole,\n    a11yState,\n    decorator,\n    decoratorProps,\n    testId,\n    a11yValue,\n    children,\n    backgroundColor,\n    activeBackgroundColor,\n    claimsRequestNumber,\n    fileUploaded,\n    minHeight,\n    detoxTestID,\n  } = props\n  const theme = useTheme()\n\n  const [isPressed, setIsPressed] = useState(false)\n\n  const _onPressIn = (): void => {\n    setIsPressed(true)\n  }\n\n  const _onPressOut = (): void => {\n    setIsPressed(false)\n  }\n  const isSwitchRow = decorator === ButtonDecoratorType.Switch\n  const showDecorator = onPress && decorator !== ButtonDecoratorType.None\n\n  const background = backgroundColor ? backgroundColor : 'list'\n  const activeBackground = activeBackgroundColor ? activeBackgroundColor : 'listActive'\n\n  const onOuterPress = (): void => {\n    // nooop for switch types, need to press on the switch specifically\n    if (onPress) {\n      if (isSwitchRow) {\n        triggerHaptic(HapticFeedbackTypes.impactHeavy)\n      }\n      onPress()\n    }\n  }\n\n  const onDecoratorPress = (): void => {\n    // if we're a switch type, need to handle the press on the decorator specifically\n    if (isSwitchRow && onPress) {\n      triggerHaptic(HapticFeedbackTypes.impactHeavy)\n      onPress()\n    }\n  }\n\n  // Default role for list item is menuitem\n  const accessibilityRole = a11yRole || (isSwitchRow ? 'switch' : 'link')\n\n  const pressableProps: PressableProps = {\n    onPress: onOuterPress,\n    onPressIn: _onPressIn,\n    onPressOut: _onPressOut,\n    accessible: true,\n    disabled: decorator === ButtonDecoratorType.RadioDisabled,\n  }\n\n  const boxProps: BoxProps = {\n    width: '100%',\n    minHeight: minHeight || theme.dimensions.touchableMinHeight,\n    py: theme.dimensions.buttonPadding,\n    pl: theme.dimensions.gutter,\n    pr: decorator === undefined ? theme.dimensions.buttonPadding : theme.dimensions.gutter,\n    borderBottomWidth: theme.dimensions.borderWidth,\n    borderColor: 'primary',\n    borderStyle: 'solid',\n    justifyContent: 'space-between',\n    flexDirection: 'row',\n    alignItems: 'center',\n    backgroundColor: isPressed ? activeBackground : background,\n  }\n\n  const a11yProps: AccessibilityProps = {\n    ...a11yHintProp(a11yHint),\n    ...a11yValueProp(a11yValue ? { text: a11yValue } : {}),\n    accessibilityState: a11yState ? a11yState : {},\n    accessibilityLabel: testId,\n    accessibilityRole: onPress ? accessibilityRole : 'text',\n  }\n\n  if (isSwitchRow && decoratorProps) {\n    a11yProps.accessibilityState = {\n      ...a11yProps.accessibilityState,\n      checked: (decoratorProps as Partial<SwitchProps>).on,\n    }\n  }\n\n  const generateItem = (accessibilityProps?: AccessibilityProps): ReactElement => {\n    // accessible property set to true when there is no onPress because it is already wrapped in the accessible Pressable\n    return (\n      <Box {...boxProps} {...accessibilityProps} testID={accessibilityProps?.accessibilityLabel} accessible={!onPress}>\n        {claimsRequestNumber !== undefined ? (\n          <FileRequestNumberIndicator requestNumber={claimsRequestNumber} fileUploaded={fileUploaded} />\n        ) : (\n          <></>\n        )}\n        {children}\n        {showDecorator && (\n          <Box\n            ml={decorator === undefined ? 0 : theme.dimensions.listItemDecoratorMarginLeft}\n            importantForAccessibility={'no-hide-descendants'}>\n            <ButtonDecorator decorator={decorator} onPress={onDecoratorPress} decoratorProps={decoratorProps} />\n          </Box>\n        )}\n      </Box>\n    )\n  }\n\n  // onPress exist, wrap in Pressable and apply a11yProps\n  if (onPress) {\n    return (\n      <Pressable {...a11yProps} {...pressableProps} testID={detoxTestID}>\n        {generateItem()}\n      </Pressable>\n    )\n  }\n\n  // apply a11yProps if onPress does not exist\n  return generateItem(a11yProps)\n}\n\nexport default BaseListItem\n";var s=n(7644);const a={},c=void 0,l={unversionedId:"Flagship design library/Components/Layout and Organization/List/BaseListItem",id:"Flagship design library/Components/Layout and Organization/List/BaseListItem",title:"BaseListItem",description:"",source:"@site/docs/Flagship design library/Components/Layout and Organization/List/BaseListItem.mdx",sourceDirName:"Flagship design library/Components/Layout and Organization/List",slug:"/Flagship design library/Components/Layout and Organization/List/BaseListItem",permalink:"/va-mobile-app/docs/Flagship design library/Components/Layout and Organization/List/BaseListItem",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"List",permalink:"/va-mobile-app/docs/Flagship design library/Components/Layout and Organization/List/"},next:{title:"DefaultList",permalink:"/va-mobile-app/docs/Flagship design library/Components/Layout and Organization/List/DefaultList"}},d={},p=[],m="import { BaseListItem, BaseListItemProps } from 'components'\n\nconst listItemProps: BaseListItemProps = {\n    a11yHint: 'My Hint'\n    onPress: () => { console.log('item pressed') }\n  }\n\n<BaseListItem {...listItemProps}>\n    <TextLines listOfText={[{ text: 'my text', isBold: true}]} />\n</BaseListItem>",u={toc:p,exampleString:m},h="wrapper";function b(e){let{components:t,...n}=e;return(0,r.yg)(h,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(s.A,{componentName:"BaseListItem",example:m,codeString:i,mdxType:"ComponentTopInfo"}))}b.isMDXComponent=!0}}]);