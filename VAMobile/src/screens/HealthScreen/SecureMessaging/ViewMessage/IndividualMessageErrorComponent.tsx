import { AlertBox, Box, ButtonTypesConstants, ClickToCallPhoneNumber, TextView, VAButton, VAScrollView } from 'components'
import { ErrorsState } from 'store/slices'
import { NAMESPACE } from 'constants/namespaces'
import { RootState } from 'store'
import { useSelector } from 'react-redux'
import { useTheme, useTranslation } from 'utils/hooks'
import React, { FC } from 'react'

const IndividualMessageErrorComponent: FC = () => {
  const t = useTranslation(NAMESPACE.HEALTH)
  const tc = useTranslation(NAMESPACE.COMMON)
  const theme = useTheme()
  const { tryAgain } = useSelector<RootState, ErrorsState>((state) => state.errors)

  const { standardMarginBetween } = theme.dimensions

  return (
    <VAScrollView>
      <Box justifyContent="center" mt={theme.dimensions.gutter}>
        <AlertBox
          title={t('secureMessaging.viewMessage.errorTitle')}
          titleA11yLabel={t('secureMessaging.viewMessage.errorTitle')}
          text={tc('errors.callHelpCenter.sorryWithRefresh')}
          border="error">
          <Box>
            <TextView variant="MobileBody" my={standardMarginBetween} accessibilityLabel={t('secureMessaging.sendError.ifTheAppStill.a11y')}>
              {t('secureMessaging.sendError.ifTheAppStill')}
            </TextView>
            <ClickToCallPhoneNumber displayedText={t('common:8773270022.displayText')} phone={t('common:8773270022')} />
            {tryAgain && (
              <Box mt={standardMarginBetween} accessibilityRole="button">
                <VAButton
                  onPress={tryAgain}
                  label={tc('refresh')}
                  buttonType={ButtonTypesConstants.buttonPrimary}
                  testID={tc('refresh')}
                  a11yHint={tc('errors.callHelpCenter.button.a11yHint')}
                />
              </Box>
            )}
          </Box>
        </AlertBox>
      </Box>
    </VAScrollView>
  )
}

export default IndividualMessageErrorComponent
