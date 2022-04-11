import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { useTranslation } from 'react-i18next'
import React, { FC, ReactNode, useEffect } from 'react'

import { BackButton, Box, ErrorComponent, LoadingComponent, MessageAlert, MessageList, Pagination, PaginationProps, VAScrollView } from 'components'
import { BackButtonLabelConstants } from 'constants/backButtonLabels'
import { FolderNameTypeConstants, TRASH_FOLDER_NAME } from 'constants/secureMessaging'
import { HealthStackParamList } from 'screens/HealthScreen/HealthStackScreens'
import { NAMESPACE } from 'constants/namespaces'
import { RootState } from 'store'
import { ScreenIDTypesConstants } from 'store/api/types/Screens'
import { SecureMessagingState, dispatchResetDeleteDraftComplete, listFolderMessages, resetSaveDraftComplete } from 'store/slices'
import { SecureMessagingSystemFolderIdConstants } from 'store/api/types'
import { getMessagesListItems } from 'utils/secureMessaging'
import { testIdProps } from 'utils/accessibility'
import { useAppDispatch, useError, useTheme } from 'utils/hooks'
import { useSelector } from 'react-redux'
import ComposeMessageFooter from '../ComposeMessageFooter/ComposeMessageFooter'
import NoFolderMessages from '../NoFolderMessages/NoFolderMessages'

type FolderMessagesProps = StackScreenProps<HealthStackParamList, 'FolderMessages'>

const FolderMessages: FC<FolderMessagesProps> = ({ navigation, route }) => {
  const { folderID, folderName, draftSaved } = route.params

  const { t } = useTranslation(NAMESPACE.HEALTH)
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const { messagesByFolderId, loading, paginationMetaByFolderId, saveDraftComplete, deleteDraftComplete } = useSelector<RootState, SecureMessagingState>(
    (state) => state.secureMessaging,
  )
  const trackedPagination = [SecureMessagingSystemFolderIdConstants.SENT, SecureMessagingSystemFolderIdConstants.DRAFTS]
  const paginationMetaData = paginationMetaByFolderId?.[folderID]

  useEffect(() => {
    // Load first page messages
    dispatch(listFolderMessages(folderID, 1, ScreenIDTypesConstants.SECURE_MESSAGING_FOLDER_MESSAGES_SCREEN_ID))
    // If draft saved message showing, clear status so it doesn't show again
    dispatch(resetSaveDraftComplete())
  }, [dispatch, folderID])

  useEffect(() => {
    if (saveDraftComplete) {
      // If draft saved message showing, clear status so it doesn't show again
      dispatch(resetSaveDraftComplete())
    }
  }, [dispatch, saveDraftComplete])

  useEffect(() => {
    if (deleteDraftComplete) {
      dispatch(dispatchResetDeleteDraftComplete())
    }
  }, [deleteDraftComplete, dispatch, t])

  const onMessagePress = (messageID: number, isDraft?: boolean): void => {
    const screen = isDraft ? 'EditDraft' : 'ViewMessageScreen'
    const args = isDraft
      ? { messageID, attachmentFileToAdd: {}, attachmentFileToRemove: {} }
      : { messageID, folderID, currentPage: paginationMetaData?.currentPage || 1, messagesLeft: messages.length }
    navigation.navigate(screen, args)
  }

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props): ReactNode => (
        <BackButton
          onPress={() => {
            navigation.goBack()
            snackBar.hideAll()
          }}
          canGoBack={props.canGoBack}
          label={BackButtonLabelConstants.back}
          focusOnButton={deleteDraftComplete ? false : true}
          showCarat={true}
        />
      ),
    })
  })

  if (useError(ScreenIDTypesConstants.SECURE_MESSAGING_FOLDER_MESSAGES_SCREEN_ID)) {
    return <ErrorComponent screenID={ScreenIDTypesConstants.SECURE_MESSAGING_FOLDER_MESSAGES_SCREEN_ID} />
  }

  if (loading) {
    const text = draftSaved ? t('secureMessaging.formMessage.saveDraft.loading') : t('secureMessaging.messages.loading')
    return <LoadingComponent text={text} />
  }

  const folderMessages = messagesByFolderId ? messagesByFolderId[folderID] : { data: [], links: {}, meta: {} }
  const messages = folderMessages ? folderMessages.data : []

  if (messages.length === 0) {
    return <NoFolderMessages folderName={folderName} />
  }

  const requestPage = (requestedPage: number) => {
    // request the next page
    dispatch(listFolderMessages(folderID, requestedPage, ScreenIDTypesConstants.SECURE_MESSAGING_FOLDER_MESSAGES_SCREEN_ID))
  }

  // Render pagination for sent and drafts folderMessages only
  const renderPagination = (): ReactNode => {
    if (!trackedPagination.includes(folderID)) {
      return <></>
    }

    const page = paginationMetaData?.currentPage || 1
    const paginationProps: PaginationProps = {
      onNext: () => {
        requestPage(page + 1)
      },
      onPrev: () => {
        requestPage(page - 1)
      },
      totalEntries: paginationMetaData?.totalEntries || 0,
      pageSize: paginationMetaData?.perPage || 0,
      page,
    }

    return (
      <Box flex={1} mt={theme.dimensions.paginationTopPadding} mb={theme.dimensions.contentMarginBottom} mx={theme.dimensions.gutter}>
        <Pagination {...paginationProps} />
      </Box>
    )
  }

  return (
    <>
      <VAScrollView {...testIdProps('', false, 'FolderMessages-page')}>
        {draftSaved && (
          <Box mt={theme.dimensions.contentMarginTop}>
            <MessageAlert saveDraftComplete={draftSaved} />
          </Box>
        )}
        <MessageList
          items={getMessagesListItems(messages, t, onMessagePress, folderName)}
          title={folderName === FolderNameTypeConstants.deleted ? TRASH_FOLDER_NAME : folderName}
        />
        {renderPagination()}
      </VAScrollView>
      <ComposeMessageFooter />
    </>
  )
}

export default FolderMessages
