import { ScrollView } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { useTranslation } from 'react-i18next'
import DocumentPicker from 'react-native-document-picker'
import React, { FC, useRef, useState } from 'react'

import { AlertBox, Box, ButtonTypesConstants, TextArea, TextView, VAButton } from 'components'
import { BenefitsStackParamList, DocumentPickerResponse } from 'screens/BenefitsScreen/BenefitsStackScreens'
import { MAX_TOTAL_FILE_SIZE_IN_BYTES, isValidFileType } from 'utils/claims'
import { NAMESPACE } from 'constants/namespaces'
import { logNonFatalErrorToFirebase } from 'utils/analytics'
import { useRouteNavigation, useShowActionSheet, useTheme } from 'utils/hooks'
import FullScreenSubtask from 'components/Templates/FullScreenSubtask'
import getEnv from 'utils/env'

const { IS_TEST } = getEnv()

type SelectFilesProps = StackScreenProps<BenefitsStackParamList, 'SelectFile'>

const SelectFile: FC<SelectFilesProps> = ({ navigation, route }) => {
  const { t } = useTranslation(NAMESPACE.COMMON)
  const theme = useTheme()
  const navigateTo = useRouteNavigation()
  const [error, setError] = useState('')
  const scrollViewRef = useRef<ScrollView>(null)
  const { request } = route.params
  const showActionSheet = useShowActionSheet()

  const onFileFolder = async (): Promise<void> => {
    const {
      pickSingle,
      types: { images, plainText, pdf },
    } = DocumentPicker

    try {
      const document = (await pickSingle({
        type: [images, plainText, pdf],
      })) as DocumentPickerResponse

      if (document.size > MAX_TOTAL_FILE_SIZE_IN_BYTES) {
        setError(t('fileUpload.fileSizeError'))
        return
      }

      if (!isValidFileType(document.type)) {
        setError(t('fileUpload.fileTypeError'))
        return
      }

      setError('')
      navigateTo('UploadFile', { request, fileUploaded: document })()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (docError: any) {
      if (DocumentPicker.isCancel(docError as Error)) {
        return
      }
      logNonFatalErrorToFirebase(docError, 'onFileFolder: SelectFile.tsx Error')
      setError(docError.code)
    }
  }

  const onSelectFile = (): void => {
    // For integration tests, bypass the file picking process
    if (IS_TEST) {
      navigateTo('UploadFile', { request, fileUploaded: 'test file' })()
      return
    }

    const options = [t('fileUpload.fileFolder'), t('cancel')]

    showActionSheet(
      {
        options,
        cancelButtonIndex: 1,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            onFileFolder()
            break
        }
      },
    )
  }

  // Because the select a file button has the same accessibility label as the file upload screen it causes query issues in android
  const buttonTestId = IS_TEST ? 'selectfilebutton2' : t('fileUpload.selectAFile')

  return (
    <FullScreenSubtask scrollViewRef={scrollViewRef} leftButtonText={t('cancel')} onLeftButtonPress={navigation.goBack} title={t('fileUpload.selectFiles')}>
      <Box mt={theme?.dimensions?.contentMarginTop} mb={theme?.dimensions?.contentMarginBottom}>
        {!!error && (
          <Box mb={theme?.dimensions?.standardMarginBetween}>
            <AlertBox scrollViewRef={scrollViewRef} text={error} border="error" />
          </Box>
        )}
        <TextArea>
          <TextView variant="MobileBodyBold" accessibilityRole="header">
            {t('fileUpload.selectAFileToUpload', { requestTitle: request.displayName || t('fileUpload.theRequest') })}
          </TextView>
          <TextView variant="MobileBody" mt={theme?.dimensions?.standardMarginBetween}>
            {t('fileUpload.pleaseRequestFromPhoneFiles')}
            <TextView variant="MobileBodyBold">
              {t('fileUpload.pleaseRequestFromPhoneFiles.bolded')}
              <TextView variant="MobileBody">{t('fileUpload.pleaseRequestFromPhoneFiles.pt2')}</TextView>
            </TextView>
          </TextView>
          <TextView variant="MobileBodyBold" accessibilityRole="header" mt={theme?.dimensions?.standardMarginBetween}>
            {t('fileUpload.maxFileSize')}
          </TextView>
          <TextView variant="MobileBody" accessibilityLabel={t('fileUpload.50MB.a11y')}>
            {t('fileUpload.50MB')}
          </TextView>
          <TextView variant="MobileBodyBold" accessibilityRole="header" mt={theme?.dimensions?.standardMarginBetween}>
            {t('fileUpload.acceptedFileTypes')}
          </TextView>
          <TextView variant="MobileBody">{t('fileUpload.acceptedFileTypeOptions')}</TextView>
        </TextArea>
        <Box mt={theme?.dimensions?.standardMarginBetween} mx={theme?.dimensions?.gutter}>
          <VAButton
            onPress={onSelectFile}
            label={t('fileUpload.selectAFile')}
            testID={buttonTestId}
            buttonType={ButtonTypesConstants.buttonPrimary}
            a11yHint={t('fileUpload.selectAFileWithPhoneA11yHint')}
          />
        </Box>
      </Box>
    </FullScreenSubtask>
  )
}

export default SelectFile
