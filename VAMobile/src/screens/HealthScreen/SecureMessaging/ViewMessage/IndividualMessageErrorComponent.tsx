import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Alert, Button } from '@department-of-veterans-affairs/mobile-component-library'

import { Box, ClickToCallPhoneNumber, TextView, VAScrollView } from 'components'
import { NAMESPACE } from 'constants/namespaces'
import { RootState } from 'store'
import { ErrorsState } from 'store/slices'
import { displayedTextPhoneNumber } from 'utils/formattingUtils'
import { useTheme } from 'utils/hooks'

function IndividualMessageErrorComponent() {
  const { t } = useTranslation(NAMESPACE.COMMON)
  const theme = useTheme()
  const { tryAgain } = useSelector<RootState, ErrorsState>((state) => state.errors)

  const { standardMarginBetween } = theme.dimensions

  return (
    <VAScrollView>
      <Box justifyContent="center">
        <Alert
          variant="error"
          header={t('secureMessaging.viewMessage.errorTitle')}
          headerA11yLabel={t('secureMessaging.viewMessage.errorTitle')}
          description={t('errors.callHelpCenter.sorryWithRefresh')}>
          <Box>
            <TextView
              variant="MobileBody"
              my={standardMarginBetween}
              accessibilityLabel={t('secureMessaging.sendError.ifTheAppStill.a11y')}>
              {t('secureMessaging.sendError.ifTheAppStill')}
            </TextView>
            <ClickToCallPhoneNumber displayedText={displayedTextPhoneNumber(t('8773270022'))} phone={t('8773270022')} />
            {tryAgain && (
              <Box mt={standardMarginBetween} accessibilityRole="button">
                <Button onPress={tryAgain} label={t('refresh')} testID={t('refresh')} />
              </Box>
            )}
          </Box>
        </Alert>
      </Box>
    </VAScrollView>
  )
}

export default IndividualMessageErrorComponent
