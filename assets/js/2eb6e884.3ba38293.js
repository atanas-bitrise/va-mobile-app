"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5128],{58700:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return x},exampleString:function(){return c},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var o=t(87462),r=t(63366),s=(t(67294),t(3905)),i=(t(19055),t(38909)),a=["components"],p={},u=void 0,l={unversionedId:"Engineering/FrontEnd/ComponentsSection/FormComponents/VATextInput",id:"Engineering/FrontEnd/ComponentsSection/FormComponents/VATextInput",title:"VATextInput",description:"export const exampleString = `<VATextInput",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/FormComponents/VATextInput.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/FormComponents",slug:"/Engineering/FrontEnd/ComponentsSection/FormComponents/VATextInput",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/FormComponents/VATextInput",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VASelector",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/FormComponents/VASelector"},next:{title:"AccordionCollapsible",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/AccordionCollapsible"}},d=[],c="<VATextInput \ninputType={'email'} \nvalue={selected} \nonChange={(textValue) => { setSelected(textValue) }} \nisTextArea={false}/>",m={toc:d,exampleString:c};function x(e){var n=e.components,t=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,{componentName:"VATextInput",example:c,codeString:"import { AccessibilityProps, KeyboardTypeOptions, Pressable, TextInput, TextInputProps } from 'react-native'\nimport React, { FC, ReactElement, RefObject, useEffect, useRef, useState } from 'react'\n\nimport { Box, BoxProps, ValidationFunctionItems } from '../../index'\nimport { focusTextInputRef } from 'utils/common'\nimport {\n  generateA11yValue,\n  generateInputTestID,\n  getInputBorderColor,\n  getInputWrapperProps,\n  renderInputError,\n  renderInputLabelSection,\n  updateInputErrorMessage,\n} from './formFieldUtils'\nimport { isIOS } from 'utils/platform'\nimport { testIdProps } from 'utils/accessibility'\nimport { useTheme, useTranslation } from 'utils/hooks'\n\nexport type VATextInputTypes = 'none' | 'email' | 'phone'\n\nexport type VATextInputProps = {\n  /** Type of the input. Will determine the keyboard used */\n  inputType: VATextInputTypes\n  /** Initial value of the input. If blank it will show the placeholder */\n  value?: string\n  /** i18n key for the label */\n  labelKey?: string\n  /** Handle the change in input value */\n  onChange: (val: string) => void\n  /** Maximum length of the input */\n  maxLength?: number\n  /** Handle input once the user is done typing */\n  onEndEditing?: () => void\n  /** optional testID for the overall component */\n  testID?: string\n  /** optional ref value */\n  inputRef?: RefObject<TextInput>\n  /** optional boolean that displays required text next to label if set to true */\n  isRequiredField?: boolean\n  /** optional key for string to display underneath label */\n  helperTextKey?: string\n  /** optional callback to update the error message if there is an error */\n  setError?: (error?: string) => void\n  /** if this exists updates input styles to error state */\n  error?: string\n  /** optional list of validation functions to check against */\n  validationList?: Array<ValidationFunctionItems>\n  /** optional boolean that when true displays a text area rather than a single line text input */\n  isTextArea?: boolean\n  /** optional boolean to set the cursor to the beginning of a string value */\n  setInputCursorToBeginning?: boolean\n}\n\n/**\n * Text input with a label\n */\nconst VATextInput: FC<VATextInputProps> = (props: VATextInputProps) => {\n  const {\n    inputType,\n    value,\n    labelKey,\n    onChange,\n    maxLength,\n    onEndEditing,\n    inputRef,\n    testID,\n    isRequiredField,\n    helperTextKey,\n    setError,\n    error,\n    validationList,\n    isTextArea,\n    setInputCursorToBeginning,\n  } = props\n  const t = useTranslation()\n  const theme = useTheme()\n  const startTextPositon = { start: 0, end: 0 }\n  const [focusUpdated, setFocusUpdated] = useState(false)\n  const [isFocused, setIsFocused] = useState(false)\n  const [selection, setSelection] = useState<{ start: number; end?: number } | undefined>(setInputCursorToBeginning ? startTextPositon : undefined)\n  const ref = useRef<TextInput>(null)\n\n  useEffect(() => {\n    updateInputErrorMessage(isFocused, isRequiredField, error, setError, value, focusUpdated, setFocusUpdated, validationList)\n  }, [isFocused, labelKey, value, error, setError, isRequiredField, t, focusUpdated, validationList])\n\n  let textContentType: 'emailAddress' | 'telephoneNumber' | 'none' = 'none'\n  let keyboardType: KeyboardTypeOptions = 'default'\n\n  switch (inputType) {\n    case 'email': {\n      textContentType = 'emailAddress'\n      keyboardType = 'email-address'\n      break\n    }\n    case 'phone': {\n      textContentType = 'telephoneNumber'\n      // TODO #16792, 'default' to avoid Voice Control crash\n      // keyboardType = 'number-pad'\n      break\n    }\n  }\n\n  const onBlur = (): void => {\n    setIsFocused(false)\n    setFocusUpdated(true)\n  }\n\n  const onFocus = () => {\n    setIsFocused(true)\n    if (setInputCursorToBeginning) {\n      setSelection(undefined)\n    }\n  }\n\n  const inputProps: TextInputProps = {\n    value: value,\n    textContentType,\n    keyboardType,\n    maxLength,\n    placeholderTextColor: theme.colors.text.placeholder,\n    onChangeText: (newVal) => {\n      onChange(newVal)\n\n      // if there was an error, remove when the user starts typing\n      if (newVal.length > 0 && setError && error !== '') {\n        setError('')\n      }\n    },\n    onEndEditing,\n    style: {\n      fontSize: theme.fontSizes.MobileBody.fontSize,\n      fontFamily: theme.fontFace.regular,\n      marginRight: theme.dimensions.textInputMargin,\n      color: isFocused ? theme.colors.text.inputFocused : theme.colors.text.input,\n    },\n    onFocus,\n    onBlur,\n    selection,\n  }\n\n  const textAreaWrapperProps: BoxProps = {\n    backgroundColor: 'textBox',\n    height: theme.dimensions.textAreaHeight,\n    borderColor: getInputBorderColor(error, isFocused),\n    borderWidth: isFocused || !!error ? theme.dimensions.focusedInputBorderWidth : theme.dimensions.borderWidth,\n  }\n\n  const resultingTestID = generateInputTestID(testID, labelKey, isRequiredField, helperTextKey, error, t, 'common:textInput')\n\n  const renderTextInput = (): ReactElement => {\n    const textAreaProps = isTextArea ? { multiline: true } : {}\n    const wrapperProps = isTextArea ? textAreaWrapperProps : getInputWrapperProps(theme, error, isFocused)\n\n    let textInputBox = (\n      <Box {...wrapperProps} pl={theme.dimensions.condensedMarginBetween}>\n        <Box width=\"100%\">\n          <TextInput {...inputProps} {...textAreaProps} ref={inputRef || ref} accessibilityRole={'none'} accessible={false} />\n        </Box>\n      </Box>\n    )\n\n    // If the input is a text area, we update to focus on click of the text area so that if the user clicks anywhere in the text area, the focus will update\n    if (isTextArea) {\n      textInputBox = <Pressable onPress={() => focusTextInputRef(inputRef || ref)}>{textInputBox}</Pressable>\n    }\n\n    const content = (\n      <Box>\n        {labelKey && renderInputLabelSection(error, false, isRequiredField, labelKey, t, helperTextKey, theme)}\n        {!!error && renderInputError(theme, error)}\n        {textInputBox}\n      </Box>\n    )\n\n    const parentProps: AccessibilityProps = {\n      accessibilityValue: { text: generateA11yValue(value, isFocused, t) },\n    }\n\n    // If IOS, we update to focus on tap of the whole object (including the label) so that on double tap it is still editable\n    // This is necessary for keeping forms editable when IOS VoiceControl or VoiceOver is on.\n    if (isIOS()) {\n      return (\n        <Pressable {...testIdProps(resultingTestID)} {...parentProps} onPress={() => focusTextInputRef(inputRef || ref)}>\n          {content}\n        </Pressable>\n      )\n    }\n\n    return (\n      <Box {...testIdProps(resultingTestID)} {...parentProps} accessible={true}>\n        {content}\n      </Box>\n    )\n  }\n\n  return renderTextInput()\n}\n\nexport default VATextInput\n",mdxType:"ComponentTopInfo"}))}x.isMDXComponent=!0}}]);