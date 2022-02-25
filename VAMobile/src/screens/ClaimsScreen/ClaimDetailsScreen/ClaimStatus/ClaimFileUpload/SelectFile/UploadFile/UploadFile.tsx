import { ImagePickerResponse } from 'react-native-image-picker/src/types'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { useDispatch, useSelector } from 'react-redux'
import React, { FC, ReactNode, useEffect, useState } from 'react'

import { BackButton, Box, ButtonTypesConstants, FieldType, FormFieldType, FormWrapper, LoadingComponent, TextView, VAButton, VAScrollView } from 'components'
import { BackButtonLabelConstants } from 'constants/backButtonLabels'
import { ClaimsAndAppealsState, fileUploadSuccess, uploadFileToClaim } from 'store/slices'
import { ClaimsStackParamList } from 'screens/ClaimsScreen/ClaimsStackScreens'
import { DocumentPickerResponse } from 'screens/ClaimsScreen/ClaimsStackScreens'
import { DocumentTypes526 } from 'constants/documentTypes'
import { NAMESPACE } from 'constants/namespaces'
import { RootState } from 'store'
import { showSnackBar } from 'utils/common'
import { testIdProps } from 'utils/accessibility'
import { useDestructiveAlert, useTheme, useTranslation } from 'utils/hooks'
import FileList from 'components/FileList'

type UploadFileProps = StackScreenProps<ClaimsStackParamList, 'UploadFile'>

const UploadFile: FC<UploadFileProps> = ({ navigation, route }) => {
  const t = useTranslation(NAMESPACE.CLAIMS)
  const theme = useTheme()
  const { request, fileUploaded, imageUploaded } = route.params
  const { claim, filesUploadedSuccess, fileUploadedFailure, loadingFileUpload } = useSelector<RootState, ClaimsAndAppealsState>((state) => state.claimsAndAppeals)
  const dispatch = useDispatch()
  const [filesList, setFilesList] = useState<DocumentPickerResponse[] | ImagePickerResponse[]>([])
  const confirmAlert = useDestructiveAlert()

  useEffect(() => {
    setFilesList(fileUploaded ? [fileUploaded] : [imageUploaded])
  }, [fileUploaded, imageUploaded])

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props): ReactNode => <BackButton onPress={props.onPress} canGoBack={props.canGoBack} label={BackButtonLabelConstants.cancel} showCarat={false} />,
    })
  })

  useEffect(() => {
    if (fileUploadedFailure || filesUploadedSuccess) {
      dispatch(fileUploadSuccess())
    }

    if (filesUploadedSuccess) {
      showSnackBar(t('fileUpload.submitted'), dispatch, undefined, true, false, false)
      navigation.navigate('FileRequest', { claimID: claim?.id || '' })
    } else if (fileUploadedFailure) {
      showSnackBar(
        t('fileUpload.submitted.error'),
        dispatch,
        () => {
          dispatch(uploadFileToClaim(claim?.id || '', request, filesList))
        },
        false,
        true,
        false,
      )
    }
  }, [filesUploadedSuccess, fileUploadedFailure, dispatch, t, claim, navigation, request, filesList])

  const [documentType, setDocumentType] = useState('')
  const [onSaveClicked, setOnSaveClicked] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    request.documentType = documentType
  }, [documentType, request])

  if (loadingFileUpload) {
    return <LoadingComponent text={t('fileUpload.loading')} />
  }

  const onUploadConfirmed = () => {
    dispatch(uploadFileToClaim(claim?.id || '', request, filesList))
  }

  const onUpload = (): void => {
    confirmAlert({
      title: t('fileUpload.submit.confirm.title'),
      message: t('fileUpload.submit.confirm.message'),
      cancelButtonIndex: 0,
      buttons: [
        {
          text: t('common:cancel'),
        },
        {
          text: t('fileUpload.submit'),
          onPress: onUploadConfirmed,
        },
      ],
    })
  }

  const onFileDelete = () => {
    showSnackBar(t('common:file.deleted'), dispatch, undefined, true, false, false)
    navigation.goBack()
  }

  const pickerField: Array<FormFieldType<unknown>> = [
    {
      fieldType: FieldType.Picker,
      fieldProps: {
        selectedValue: documentType,
        onSelectionChange: setDocumentType,
        pickerOptions: DocumentTypes526,
        labelKey: 'claims:fileUpload.documentType',
        isRequiredField: true,
        disabled: false,
      },
      fieldErrorMessage: t('claims:fileUpload.documentType.fieldError'),
    },
    {
      fieldType: FieldType.Selector,
      fieldProps: {
        labelKey: 'claims:fileUpload.evidenceOnly',
        selected: confirmed,
        onSelectionChange: setConfirmed,
        isRequiredField: true,
      },
      fieldErrorMessage: t('fileUpload.evidenceOnly.error'),
    },
  ]

  return (
    <VAScrollView {...testIdProps('File-upload: Upload-file-page')}>
      <Box mt={theme.dimensions.contentMarginTop} mb={theme.dimensions.contentMarginBottom} mx={theme.dimensions.gutter}>
        <TextView variant="MobileBodyBold" color={'primaryTitle'} accessibilityRole="header">
          {request.displayName}
        </TextView>
      </Box>
      <FileList files={[fileUploaded]} onDelete={onFileDelete} />
      <Box mx={theme.dimensions.gutter} mt={theme.dimensions.standardMarginBetween}>
        <FormWrapper fieldsList={pickerField} onSave={onUpload} onSaveClicked={onSaveClicked} setOnSaveClicked={setOnSaveClicked} />
        <Box mt={theme.dimensions.textAndButtonLargeMargin}>
          <VAButton
            onPress={() => {
              setOnSaveClicked(true)
            }}
            label={t('fileUpload.submit')}
            testID={t('fileUpload.submit')}
            buttonType={ButtonTypesConstants.buttonPrimary}
            a11yHint={t('fileUpload.uploadFileA11yHint')}
          />
        </Box>
      </Box>
    </VAScrollView>
  )
}

export default UploadFile
