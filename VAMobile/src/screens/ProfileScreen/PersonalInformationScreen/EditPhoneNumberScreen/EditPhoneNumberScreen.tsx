import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, ReactNode, useEffect, useState } from 'react'

import {
  AlertBox,
  BackButton,
  Box,
  ButtonTypesConstants,
  ErrorComponent,
  FieldType,
  FormFieldType,
  FormWrapper,
  LoadingComponent,
  SaveButton,
  VAButton,
  VAScrollView,
} from 'components'
import { BackButtonLabelConstants } from 'constants/backButtonLabels'
import { NAMESPACE } from 'constants/namespaces'
import { PhoneTypeConstants } from 'store/api/types'
import { RootNavStackParamList } from 'App'
import { ScreenIDTypesConstants } from 'store/api/types/Screens'
import { deleteUsersNumber, editUsersNumber, finishEditPhoneNumber } from 'store/slices/personalInformationSlice'
import { dispatchClearErrors } from 'store/slices/errorSlice'
import { formatPhoneNumber, getNumbersFromString, stringToTitleCase } from 'utils/formattingUtils'
import { getFormattedPhoneNumber } from 'utils/common'
import { testIdProps } from 'utils/accessibility'
import { useAppDispatch, useAppSelector, useDestructiveAlert, useError, useTheme, useTranslation } from 'utils/hooks'
import HeaderTitle from 'components/HeaderTitle'

const MAX_DIGITS = 10
const MAX_DIGITS_AFTER_FORMAT = 14

type IEditPhoneNumberScreen = StackScreenProps<RootNavStackParamList, 'EditPhoneNumber'>

const EditPhoneNumberScreen: FC<IEditPhoneNumberScreen> = ({ navigation, route }) => {
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const t = useTranslation(NAMESPACE.PROFILE)
  const { displayTitle, phoneType, phoneData } = route.params
  const deletePhoneAlert = useDestructiveAlert()

  const [extension, setExtension] = useState(phoneData?.extension || '')
  const [phoneNumber, setPhoneNumber] = useState(getFormattedPhoneNumber(phoneData))
  const [formContainsError, setFormContainsError] = useState(false)
  const [onSaveClicked, setOnSaveClicked] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const { phoneNumberSaved, loading } = useAppSelector((state) => state.personalInformation)

  useEffect(() => {
    if (phoneNumberSaved) {
      dispatch(finishEditPhoneNumber())
      setDeleting(false)
      navigation.goBack()
    }
  }, [phoneNumberSaved, navigation, dispatch])

  const onSave = (): void => {
    const onlyDigitsNum = getNumbersFromString(phoneNumber)
    const numberId = phoneData && phoneData.id ? phoneData.id : 0

    dispatch(editUsersNumber(phoneType, onlyDigitsNum, extension, numberId, ScreenIDTypesConstants.EDIT_PHONE_NUMBER_SCREEN_ID))
  }

  const onDelete = (): void => {
    setDeleting(true)
    dispatch(deleteUsersNumber(phoneType, ScreenIDTypesConstants.EDIT_PHONE_NUMBER_SCREEN_ID))
  }

  const setPhoneNumberOnChange = (text: string): void => {
    // Retrieve only digits from text input
    const onlyDigitsNum = getNumbersFromString(text)

    // if there are 10 or less digits, update the text input value of phone number to the incoming text
    if (onlyDigitsNum.length <= MAX_DIGITS) {
      setPhoneNumber(text)
    }
  }

  const onEndEditingPhoneNumber = (): void => {
    // Retrieve only digits from text input
    const onlyDigitsNum = getNumbersFromString(phoneNumber)

    // if there are 10 digits display the formatted phone number
    // otherwise, display just the number
    if (onlyDigitsNum.length === MAX_DIGITS) {
      const formattedPhoneNumber = formatPhoneNumber(onlyDigitsNum)
      setPhoneNumber(formattedPhoneNumber)
    } else {
      setPhoneNumber(onlyDigitsNum)
    }
  }

  const phoneNumberIsNotTenDigits = (): boolean => {
    // returns true if the number is greater than 0 characters and the length is not equal to 10, or there are no numbers
    // - this means the corresponding validation function error message should be displayed
    const onlyDigitsNum = getNumbersFromString(phoneNumber)
    return (onlyDigitsNum.length !== MAX_DIGITS && onlyDigitsNum.length > 0) || !onlyDigitsNum
  }

  const goBack = () => {
    navigation.goBack()
    // clear errors so it doesnt persist on other phone edit screens
    dispatch(dispatchClearErrors(ScreenIDTypesConstants.EDIT_PHONE_NUMBER_SCREEN_ID))
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <HeaderTitle {...testIdProps(displayTitle)} headerTitle={displayTitle} />,
      headerLeft: (props): ReactNode => <BackButton onPress={goBack} canGoBack={props.canGoBack} label={BackButtonLabelConstants.cancel} showCarat={false} />,
      headerRight: () => <SaveButton onSave={() => setOnSaveClicked(true)} disabled={false} />,
    })
  })

  if (useError(ScreenIDTypesConstants.EDIT_PHONE_NUMBER_SCREEN_ID)) {
    return <ErrorComponent screenID={ScreenIDTypesConstants.EDIT_PHONE_NUMBER_SCREEN_ID} />
  }

  if (loading || phoneNumberSaved) {
    const loadingText = deleting ? t('personalInformation.delete.phone') : t('personalInformation.savingPhoneNumber')

    return <LoadingComponent text={loadingText} />
  }

  const formFieldsList: Array<FormFieldType<unknown>> = [
    {
      fieldType: FieldType.TextInput,
      fieldProps: {
        inputType: 'phone',
        labelKey: 'profile:editPhoneNumber.number',
        onChange: setPhoneNumberOnChange,
        maxLength: MAX_DIGITS_AFTER_FORMAT,
        value: phoneNumber,
        onEndEditing: onEndEditingPhoneNumber,
        isRequiredField: true,
      },
      fieldErrorMessage: t('editPhoneNumber.numberFieldError'),
      validationList: [
        {
          validationFunction: phoneNumberIsNotTenDigits,
          validationFunctionErrorMessage: t('editPhoneNumber.numberFieldError'),
        },
      ],
    },
    {
      fieldType: FieldType.TextInput,
      fieldProps: {
        inputType: 'phone',
        labelKey: 'profile:editPhoneNumber.extension',
        onChange: setExtension,
        value: extension,
      },
    },
  ]

  const testIdPrefix = phoneType === PhoneTypeConstants.FAX ? 'fax-number: ' : `${phoneType.toLowerCase()}-phone: `
  const buttonTitle = displayTitle.toLowerCase()

  const onDeletePressed = (): void => {
    deletePhoneAlert({
      title: t('editPhoneNumber.remove.title', { numberType: buttonTitle }),
      message: t('editPhoneNumber.remove.message', { numberType: buttonTitle }),
      destructiveButtonIndex: 1,
      cancelButtonIndex: 0,
      buttons: [
        {
          text: t('common:cancel'),
        },
        {
          text: t('common:remove'),
          onPress: onDelete,
        },
      ],
    })
  }

  return (
    <VAScrollView {...testIdProps(`${testIdPrefix}Edit-number-page`)}>
      <Box mt={theme.dimensions.contentMarginTop} mb={theme.dimensions.contentMarginBottom} mx={theme.dimensions.gutter}>
        {getFormattedPhoneNumber(phoneData) !== '' && (
          <Box mb={theme.dimensions.standardMarginBetween}>
            <VAButton
              onPress={onDeletePressed}
              label={t('personalInformation.removeData', { pageName: stringToTitleCase(buttonTitle) })}
              buttonType={ButtonTypesConstants.buttonImportant}
              a11yHint={t('personalInformation.removeData.a11yHint', { pageName: buttonTitle })}
            />
          </Box>
        )}
        <AlertBox text={t('editPhoneNumber.weCanOnlySupportUSNumbers')} background="noCardBackground" border="informational" />
        {formContainsError && (
          <Box mt={theme.dimensions.standardMarginBetween}>
            <AlertBox title={t('editPhoneNumber.checkPhoneNumber')} border="error" background="noCardBackground" />
          </Box>
        )}
        <Box mt={theme.dimensions.formMarginBetween}>
          <FormWrapper fieldsList={formFieldsList} onSave={onSave} setFormContainsError={setFormContainsError} onSaveClicked={onSaveClicked} setOnSaveClicked={setOnSaveClicked} />
        </Box>
      </Box>
    </VAScrollView>
  )
}

export default EditPhoneNumberScreen
