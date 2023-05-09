import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { useTranslation } from 'react-i18next'
import React, { FC } from 'react'

import { BenefitsStackParamList } from 'screens/BenefitsScreen/BenefitsStackScreens'
import { Box, LargePanel, TextView } from 'components'
import { NAMESPACE } from 'constants/namespaces'
import { a11yHintProp } from 'utils/accessibility'
import { useExternalLink, useTheme } from 'utils/hooks'
import getEnv from 'utils/env'

const { LINK_URL_DECISION_REVIEWS } = getEnv()

type WhatDoIDoIfDisagreementProps = StackScreenProps<BenefitsStackParamList, 'WhatDoIDoIfDisagreement'>

const WhatDoIDoIfDisagreement: FC<WhatDoIDoIfDisagreementProps> = () => {
  const { t } = useTranslation(NAMESPACE.COMMON)
  const theme = useTheme()
  const launchExternalLink = useExternalLink()

  const onDecisionReview = async (): Promise<void> => {
    launchExternalLink(LINK_URL_DECISION_REVIEWS)
  }

  const text = t('claimsDetails.whatDoIDoIfDisagreement.learnAboutDecisionReview')

  return (
    <LargePanel title={t('claimDetails.claimsHelp.pageTitle')} rightButtonText={t('close')}>
      <Box mt={theme.dimensions.contentMarginTop} mb={theme.dimensions.contentMarginBottom} mx={theme.dimensions.gutter}>
        <TextView variant="MobileBodyBold" accessibilityRole="header" paragraphSpacing={true}>
          {t('claimsDetails.whatDoIDoIfDisagreement.header')}
        </TextView>
        <TextView variant="MobileBody" paragraphSpacing={true}>
          {t('claimsDetails.whatDoIDoIfDisagreement.content')}
        </TextView>
        <TextView variant="MobileBodyLink" accessibilityRole="link" {...a11yHintProp(`${text} ${t('mobileBodyLink.a11yHint')}`)} onPress={onDecisionReview}>
          {text}
        </TextView>
      </Box>
    </LargePanel>
  )
}

export default WhatDoIDoIfDisagreement
