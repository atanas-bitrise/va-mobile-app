import React from 'react'
import { useTranslation } from 'react-i18next'

import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'

import { Box, FeatureLandingTemplate, TextArea, TextView } from 'components'
import { NAMESPACE } from 'constants/namespaces'
import { HomeStackParamList } from 'screens/HomeScreen/HomeStackScreens'
import { useTheme } from 'utils/hooks'

type ManageYourAccountProps = StackScreenProps<HomeStackParamList, 'ManageYourAccount'>

function ManageYourAccount({ navigation }: ManageYourAccountProps) {
  const { t } = useTranslation(NAMESPACE.COMMON)
  const theme = useTheme()

  return (
    <FeatureLandingTemplate
      backLabel={t('settings.title')}
      backLabelOnPress={navigation.goBack}
      title={t('manageAccount.title')}>
      <Box mb={theme.dimensions.contentMarginBottom}>
        <TextArea>
          <TextView variant="MobileBodyBold" accessibilityRole="header">
            {t('manageAccount.title')}
          </TextView>
          <TextView variant="MobileBody">{t('manageAccount.toConfirmOrUpdateEmail')}</TextView>
        </TextArea>
      </Box>
    </FeatureLandingTemplate>
  )
}

export default ManageYourAccount
