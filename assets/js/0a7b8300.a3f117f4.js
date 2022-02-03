"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1269],{60077:function(e,t,o){o.r(t),o.d(t,{contentTitle:function(){return l},default:function(){return u},exampleString:function(){return x},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return m}});var n=o(87462),r=o(63366),s=(o(67294),o(3905)),i=(o(19055),o(38909)),p=["components"],a={},l=void 0,c={unversionedId:"Engineering/FrontEnd/ComponentsSection/TextView",id:"Engineering/FrontEnd/ComponentsSection/TextView",isDocsHomePage:!1,title:"TextView",description:"export const exampleString = `My Text\\n",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/TextView.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection",slug:"/Engineering/FrontEnd/ComponentsSection/TextView",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/TextView",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TextLines",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/TextLines"},next:{title:"VABulletList",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/VABulletList"}},m=[],x='<TextView variant="MobileBody" color="primary">My Text</TextView>\n\n<TextView m={2}>My Text</TextView>',T={toc:m,exampleString:x};function u(e){var t=e.components,o=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},T,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,{componentName:"TextView",example:x,codeString:"import { AccessibilityProps, Pressable, Text } from 'react-native'\nimport React, { FC } from 'react'\nimport styled from 'styled-components'\n\nimport { AccessibilityState } from 'store/slices/accessibilitySlice'\nimport { BoxProps, createBoxStyles } from './Box'\nimport { RootState } from 'store'\nimport { VAButtonTextColors, VATextColors, VATheme, VATypographyThemeVariants } from 'styles/theme'\nimport { themeFn } from 'utils/theme'\nimport { useSelector } from 'react-redux'\nimport { useTheme } from 'utils/hooks'\n\n/** TextView font variants */\nexport type FontVariant = keyof VATypographyThemeVariants\nexport type ColorVariant = keyof VATextColors | keyof VAButtonTextColors\n\n/**\n * Props for textView\n */\nexport type TextViewProps = AccessibilityProps &\n  BoxProps & {\n    /** Defaults to primary text */\n    color?: ColorVariant\n\n    /** Defaults to regular */\n    variant?: FontVariant\n\n    /** The text transformation */\n    textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'\n\n    /** text decoration */\n    textDecoration?: 'none' | 'underline' | 'line-through' | 'underline line-through'\n\n    /** text decoration color */\n    textDecorationColor?: ColorVariant\n\n    /** onPress callback */\n    onPress?: () => void\n\n    /** if false font won't scale if screen font size changes */\n    allowFontScaling?: boolean\n\n    /** if true the text will be selectable */\n    selectable?: boolean\n\n    /** if set, sets the number of lines the text will render on. if the text exceeds the line amount, it will ellipsis */\n    numberOfLines?: number\n  }\n\nconst getColor = (theme: VATheme, props: TextViewProps): string => {\n  return theme.colors.text[props.color as keyof VATextColors] || theme.colors.buttonText[props.color as keyof VAButtonTextColors] || theme.colors.text.primary\n}\n\nconst getFontFamily = (theme: VATheme, props: TextViewProps): string => {\n  return theme.typography[props.variant as keyof VATypographyThemeVariants] || theme.typography.MobileBody\n}\n\nconst getTextDecorationColor = (theme: VATheme, props: TextViewProps): string => {\n  return theme.colors.text[props.textDecorationColor as keyof VATextColors] || theme.colors.buttonText[props.textDecorationColor as keyof VAButtonTextColors] || ''\n}\n\nconst StyledText = styled(Text)`\n  ${themeFn<TextViewProps>(getFontFamily)}\n  color: ${themeFn<TextViewProps>(getColor)};\n  ${themeFn<TextViewProps>((theme, props) => createBoxStyles(theme, props))};\n  ${themeFn<TextViewProps>((_theme, props) => (props.textTransform ? `text-transform:${props.textTransform};` : ''))}\n  ${themeFn<TextViewProps>((_theme, props) => (props.textDecoration ? `text-decoration:${props.textDecoration}` : ''))};\n  ${themeFn<TextViewProps>((theme, props) => (props.textDecorationColor ? `text-decoration-color:${getTextDecorationColor(theme, props)}` : ''))};\n`\n\n/**\n * A common component for styling text in the application. It also conforms to the Box properties so you don't need to wrap it with a Box view for margins / paddings\n *\n * @returns TextView component\n */\nconst TextView: FC<TextViewProps> = ({ selectable = false, ...props }) => {\n  const { isVoiceOverTalkBackRunning } = useSelector<RootState, AccessibilityState>((state) => state.accessibility)\n  const theme = useTheme()\n  const wrapperProps = { ...props }\n\n  if (wrapperProps.onPress) {\n    const { onPress, ...remainingProps } = wrapperProps\n    return (\n      <Pressable onPress={onPress} accessible={false}>\n        <StyledText {...remainingProps} />\n      </Pressable>\n    )\n  }\n\n  const selectToCopyProps = isVoiceOverTalkBackRunning ? {} : { selectable, selectionColor: theme.colors.selectCopyText }\n\n  return <StyledText {...selectToCopyProps} {...wrapperProps} />\n}\n\nexport default TextView\n",mdxType:"ComponentTopInfo"}))}u.isMDXComponent=!0}}]);