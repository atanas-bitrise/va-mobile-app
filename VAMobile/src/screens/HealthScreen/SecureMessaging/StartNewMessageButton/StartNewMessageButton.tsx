import { useTranslation } from 'react-i18next'
import React, { FC } from 'react'

import { Box, ButtonTypesConstants, VAButton, VAButtonProps } from 'components'
import { Events } from 'constants/analytics'
import { NAMESPACE } from 'constants/namespaces'
import { logAnalyticsEvent } from 'utils/analytics'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'utils/hooks'

const StartNewMessageButton: FC = () => {
  const { t } = useTranslation(NAMESPACE.HEALTH)
  const navigation = useNavigation()
  const theme = useTheme()
  const onPress = () => {
    logAnalyticsEvent(Events.vama_sm_start())
    navigation.navigate('StartNewMessage' as never, { attachmentFileToAdd: {}, attachmentFileToRemove: {} } as never)
  }

  const startNewMessageButtonProps: VAButtonProps = {
    label: t('secureMessaging.startNewMessage'),
    buttonType: ButtonTypesConstants.buttonPrimary,
    onPress: onPress,
    a11yHint: t('secureMessaging.startNewMessage.a11yHint'),
    iconProps: { name: 'Compose', fill: 'navBar' },
  }

  return (
    <Box mx={theme.dimensions.buttonPadding}>
      <VAButton {...startNewMessageButtonProps} />
    </Box>
  )
}

export default StartNewMessageButton
