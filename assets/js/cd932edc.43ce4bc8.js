"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8736],{1766:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return P},exampleString:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var o=t(7462),r=t(3366),s=(t(7294),t(3905)),i=(t(9055),t(8909)),a=["components"],c={},p=void 0,l={unversionedId:"Engineering/FrontEnd/ComponentsSection/BaseListItem",id:"Engineering/FrontEnd/ComponentsSection/BaseListItem",title:"BaseListItem",description:"const listItemProps: BaseListItemProps = {",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/BaseListItem.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection",slug:"/Engineering/FrontEnd/ComponentsSection/BaseListItem",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/BaseListItem",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BackButton",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/BackButton"},next:{title:"Box",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Box"}},d=[],m="import { BaseListItem, BaseListItemProps } from 'components'\n\nconst listItemProps: BaseListItemProps = {\n    a11yHint: 'My Hint'\n    onPress: () => { console.log('item pressed') }\n  }\n\n<BaseListItem {...listItemProps}>\n    <TextLines listOfText={[{ text: 'my text', isBold: true}]} />\n</BaseListItem>",u={toc:d,exampleString:m};function P(e){var n=e.components,t=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,{componentName:"BaseListItem",example:m,codeString:"import { AccessibilityProps, AccessibilityRole, AccessibilityState, Pressable, PressableProps } from 'react-native'\nimport React, { FC, ReactElement, useState } from 'react'\n\nimport { a11yHintProp, a11yValueProp, testIdProps } from 'utils/accessibility'\nimport { useTheme } from 'utils/hooks'\nimport Box, { BackgroundVariant, BoxProps } from './Box'\nimport SwitchComponent, { SwitchProps } from './Switch'\nimport VAIcon, { VAIconProps } from './VAIcon'\n\n/** Decorator type for the button, defaults to Navigation (right arrow) */\nexport enum ButtonDecoratorType {\n  /** Switch button decorator */\n  Switch = 'Switch',\n  /** Navigation arrow decorator */\n  Navigation = 'Navigation',\n  /** No decorator */\n  None = 'None',\n  /** Picker selected item decorator **/\n  SelectedItem = 'SelectedItem',\n}\n\nexport type ListItemDecoratorProps = Partial<VAIconProps> | Partial<SwitchProps>\n\n/**\n * Props for BaseListItem\n */\nexport type BaseListItemProps = {\n  /** test id string also used for the accessibility label */\n  testId?: string\n\n  /** The a11y hint text */\n  a11yHint: string\n\n  /** optional a11y text value */\n  a11yValue?: string\n\n  /** optional accessibility role. By default it will be button */\n  a11yRole?: AccessibilityRole\n\n  /** optional accessibility state */\n  a11yState?: AccessibilityState\n\n  /** onPress callback */\n  onPress?: () => void\n\n  /** Decorator Type to use */\n  decorator?: ButtonDecoratorType\n\n  /** Optional props to be passed to the decorator */\n  decoratorProps?: ListItemDecoratorProps\n\n  /** Optional child elements to use instead of listOfText if you need to do special styling */\n  children?: React.ReactNode\n\n  /** Optional background color for an individual item */\n  backgroundColor?: BackgroundVariant\n\n  /** Optional active background color for an individual item */\n  activeBackgroundColor?: BackgroundVariant\n}\n\nconst ButtonDecorator: FC<{ decorator?: ButtonDecoratorType; decoratorProps?: ListItemDecoratorProps; onPress: () => void }> = ({ decorator, decoratorProps, onPress }) => {\n  const theme = useTheme()\n\n  switch (decorator) {\n    case ButtonDecoratorType.Switch:\n      return <SwitchComponent onPress={onPress} {...decoratorProps} />\n    case ButtonDecoratorType.SelectedItem:\n      return (\n        <VAIcon\n          name={'CheckMark'}\n          height={theme.dimensions.pickerModalSelectedIconHeight}\n          width={theme.dimensions.pickerModalSelectedIconWidth}\n          fill={theme.colors.icon.grayDark}\n          {...decoratorProps}\n        />\n      )\n    default:\n      return <VAIcon name={'ArrowRight'} fill={theme.colors.icon.chevronListItem} width={10} height={15} {...decoratorProps} />\n  }\n}\n\n/**\n * Reusable component for menu items that take up the full width of the screen that is touchable.\n * @returns BaseListItem component\n */\nconst BaseListItem: FC<BaseListItemProps> = (props) => {\n  const { onPress, a11yHint, a11yRole, a11yState, decorator, decoratorProps, testId, a11yValue, children, backgroundColor, activeBackgroundColor } = props\n  const theme = useTheme()\n\n  const [isPressed, setIsPressed] = useState(false)\n\n  const _onPressIn = (): void => {\n    setIsPressed(true)\n  }\n\n  const _onPressOut = (): void => {\n    setIsPressed(false)\n  }\n\n  const isSwitchRow = decorator === ButtonDecoratorType.Switch\n  const showDecorator = onPress && decorator !== ButtonDecoratorType.None\n\n  const background = backgroundColor ? backgroundColor : 'list'\n  const activeBackground = activeBackgroundColor ? activeBackgroundColor : 'listActive'\n\n  const onOuterPress = (): void => {\n    // nooop for switch types, need to press on the switch specifically\n    if (onPress) {\n      onPress()\n    }\n  }\n\n  const onDecoratorPress = (): void => {\n    // if we're a switch type, need to handle the press on the decorator specifically\n    if (isSwitchRow && onPress) {\n      onPress()\n    }\n  }\n\n  // Default role for list item is button\n  const accessibilityRole = a11yRole || (isSwitchRow ? 'switch' : 'button')\n\n  const pressableProps: PressableProps = {\n    onPress: onOuterPress,\n    onPressIn: _onPressIn,\n    onPressOut: _onPressOut,\n    accessible: true,\n    accessibilityRole,\n  }\n\n  const boxProps: BoxProps = {\n    width: '100%',\n    minHeight: theme.dimensions.touchableMinHeight,\n    py: theme.dimensions.buttonPadding,\n    px: theme.dimensions.gutter,\n    borderBottomWidth: theme.dimensions.borderWidth,\n    borderColor: 'primary',\n    borderStyle: 'solid',\n    justifyContent: 'space-between',\n    flexDirection: 'row',\n    alignItems: 'center',\n    backgroundColor: isPressed ? activeBackground : background,\n  }\n\n  const a11yProps: AccessibilityProps = {\n    ...testIdProps(testId || ''),\n    ...a11yHintProp(a11yHint),\n    ...a11yValueProp(a11yValue ? { text: a11yValue } : {}),\n    accessibilityState: a11yState ? a11yState : {},\n  }\n\n  if (isSwitchRow && decoratorProps) {\n    a11yProps.accessibilityState = {\n      ...a11yProps.accessibilityState,\n      checked: (decoratorProps as Partial<SwitchProps>).on,\n    }\n  }\n\n  const generateItem = (accessibilityProps?: AccessibilityProps): ReactElement => {\n    // accessible property set to true when there is no onPress because it is already wrapped in the accessible Pressable\n    return (\n      <Box {...boxProps} {...accessibilityProps} accessible={!onPress}>\n        {children}\n        {showDecorator && (\n          <Box ml={theme.dimensions.listItemDecoratorMarginLeft}>\n            <ButtonDecorator decorator={decorator} onPress={onDecoratorPress} decoratorProps={decoratorProps} />\n          </Box>\n        )}\n      </Box>\n    )\n  }\n\n  // onPress exist, wrap in Pressable and apply a11yProps\n  if (onPress) {\n    return (\n      <Pressable {...a11yProps} {...pressableProps}>\n        {generateItem()}\n      </Pressable>\n    )\n  }\n\n  // apply a11yProps if onPress does not exist\n  return generateItem(a11yProps)\n}\n\nexport default BaseListItem\n",mdxType:"ComponentTopInfo"}))}P.isMDXComponent=!0}}]);