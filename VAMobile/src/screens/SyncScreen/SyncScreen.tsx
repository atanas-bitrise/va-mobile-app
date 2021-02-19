import { ScrollView, ViewStyle } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { FC, useEffect, useState } from 'react'

import { AuthState, MilitaryServiceState, PersonalInformationState, StoreState } from 'store/reducers'
import { Box, TextView, VAIcon } from 'components'
import { NAMESPACE } from 'constants/namespaces'
import { completeSync, getProfileInfo, getServiceHistory } from 'store/actions'
import { testIdProps } from 'utils/accessibility'
import { useTheme, useTranslation } from 'utils/hooks'

export type SyncScreenProps = Record<string, unknown>
const SyncScreen: FC<SyncScreenProps> = () => {
  const theme = useTheme()
  const splashStyles: ViewStyle = {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.background.splashScreen,
  }
  const dispatch = useDispatch()
  const t = useTranslation(NAMESPACE.LOGIN)

  const { loggedIn } = useSelector<StoreState, AuthState>((state) => state.auth)
  const { preloadComplete: personalInformationLoaded } = useSelector<StoreState, PersonalInformationState>((s) => s.personalInformation)
  const { preloadComplete: militaryHistoryLoaded } = useSelector<StoreState, MilitaryServiceState>((s) => s.militaryService)

  const [displayMessage, setDisplayMessage] = useState()

  useEffect(() => {
    if (loggedIn) {
      if (!personalInformationLoaded) {
        dispatch(getProfileInfo())
      } else {
        dispatch(getServiceHistory())
      }
    }
  }, [dispatch, loggedIn, personalInformationLoaded])

  useEffect(() => {
    if (!loggedIn) {
      setDisplayMessage(t('sync.progress.signin'))
    } else if (!personalInformationLoaded) {
      setDisplayMessage(t('sync.progress.personalInfo'))
    } else if (!militaryHistoryLoaded) {
      setDisplayMessage(t('sync.progress.military'))
    }

    if (personalInformationLoaded && militaryHistoryLoaded && loggedIn) {
      dispatch(completeSync())
    }
  }, [dispatch, loggedIn, personalInformationLoaded, militaryHistoryLoaded, t])

  return (
    <ScrollView {...testIdProps('Sync-page')} contentContainerStyle={splashStyles}>
      <Box justifyContent="center" mx={theme.dimensions.gutter} mt={theme.dimensions.contentMarginTop} mb={theme.dimensions.contentMarginBottom} alignItems={'center'}>
        <VAIcon name={'Logo'} />
        <Box flexDirection={'row'} alignItems={'center'} justifyContent={'center'} mx={theme.dimensions.gutter}>
          <TextView justifyContent={'center'} color={'primaryContrast'} alignItems={'center'} textAlign={'center'}>
            {displayMessage}
          </TextView>
        </Box>
      </Box>
    </ScrollView>
  )
}

export default SyncScreen
