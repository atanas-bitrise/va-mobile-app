import React from 'react'
import { useTranslation } from 'react-i18next'

import { AlertWithHaptics, ClickToCallPhoneNumber, TextView, VAScrollView } from 'components'
import { NAMESPACE } from 'constants/namespaces'
import { a11yLabelVA } from 'utils/a11yLabel'
import { displayedTextPhoneNumber } from 'utils/formattingUtils'
import { useTheme } from 'utils/hooks'

function NoVaccineRecords() {
  const { t } = useTranslation(NAMESPACE.COMMON)
  const theme = useTheme()

  return (
    <VAScrollView>
      <AlertWithHaptics
        variant="info"
        header={t('noVaccineRecords.alert.title')}
        headerA11yLabel={a11yLabelVA(t('noVaccineRecords.alert.title'))}
        description={t('noVaccineRecords.alert.text.1')}>
        <TextView paragraphSpacing={true} mt={theme.paragraphSpacing.spacing20FontSize} variant="MobileBody">
          {t('noVaccineRecords.alert.text.2')}
        </TextView>
        <ClickToCallPhoneNumber phone={t('8006982411')} displayedText={displayedTextPhoneNumber(t('8006982411'))} />
      </AlertWithHaptics>
    </VAScrollView>
  )
}

export default NoVaccineRecords
