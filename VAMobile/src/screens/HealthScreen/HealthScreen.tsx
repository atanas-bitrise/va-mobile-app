import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import { CardStyleInterpolators, StackScreenProps, createStackNavigator } from '@react-navigation/stack'

import { useAppointments } from 'api/appointments'
import { useFacilitiesInfo } from 'api/facilities/getFacilitiesInfo'
import { usePrescriptions } from 'api/prescriptions'
import { useFolders } from 'api/secureMessaging'
import { Box, CategoryLanding, LargeNavButton, TextView } from 'components'
import { Events } from 'constants/analytics'
import { TimeFrameTypeConstants } from 'constants/appointments'
import { CloseSnackbarOnNavigation } from 'constants/common'
import { NAMESPACE } from 'constants/namespaces'
import { FEATURE_LANDING_TEMPLATE_OPTIONS } from 'constants/screens'
import { FIRST_TIME_LOGIN, NEW_SESSION } from 'store/slices'
import { logAnalyticsEvent } from 'utils/analytics'
import getEnv from 'utils/env'
import { useRouteNavigation, useTheme } from 'utils/hooks'
import { featureEnabled } from 'utils/remoteConfig'
import { screenContentAllowed } from 'utils/waygateConfig'

import Appointments from './Appointments'
import { getUpcomingAppointmentDateRange } from './Appointments/Appointments'
import PastAppointmentDetails from './Appointments/PastAppointments/PastAppointmentDetails'
import UpcomingAppointmentDetails from './Appointments/UpcomingAppointments/UpcomingAppointmentDetails'
import { HealthStackParamList } from './HealthStackScreens'
import PrescriptionDetails from './Pharmacy/PrescriptionDetails/PrescriptionDetails'
import PrescriptionHistory from './Pharmacy/PrescriptionHistory/PrescriptionHistory'
import SecureMessaging from './SecureMessaging'
import FolderMessages from './SecureMessaging/FolderMessages/FolderMessages'
import ViewMessageScreen from './SecureMessaging/ViewMessage/ViewMessageScreen'
import VaccineDetailsScreen from './Vaccines/VaccineDetails/VaccineDetailsScreen'
import VaccineListScreen from './Vaccines/VaccineList/VaccineListScreen'

const { WEBVIEW_URL_CORONA_FAQ } = getEnv()

type HealthScreenProps = StackScreenProps<HealthStackParamList, 'Health'>

export function HealthScreen({}: HealthScreenProps) {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const navigateTo = useRouteNavigation()
  const { t } = useTranslation(NAMESPACE.COMMON)
  const isScreenContentAllowed = screenContentAllowed('WG_Health')

  const { data: facilitiesInfo } = useFacilitiesInfo()
  const cernerFacilities = facilitiesInfo?.filter((f) => f.cerner) || []
  const cernerExist = cernerFacilities.length >= 1
  const allCerner = facilitiesInfo?.length === cernerFacilities.length
  const mixedCerner = cernerExist && !allCerner
  const isFocused = useIsFocused()

  const { data: prescriptionData, isFetching: fetchingPrescriptions } = usePrescriptions({
    enabled: isFocused,
  })
  const upcomingAppointmentDateRange = getUpcomingAppointmentDateRange()
  const { data: apptsData, isLoading: loadingAppointments } = useAppointments(
    upcomingAppointmentDateRange.startDate,
    upcomingAppointmentDateRange.endDate,
    TimeFrameTypeConstants.UPCOMING,
    1,
    {
      enabled: isFocused,
    },
  )
  const upcomingAppointmentsCount = apptsData?.meta?.upcomingAppointmentsCount
  const upcomingDaysLimit = apptsData?.meta?.upcomingDaysLimit
  const { data: foldersData, isLoading: loadingInbox } = useFolders({
    enabled: isFocused,
  })
  const unreadMessageCount = foldersData?.inboxUnreadCount || 0

  useEffect(() => {
    async function healthHelpScreenCheck() {
      const firstTimeLogin = await AsyncStorage.getItem(FIRST_TIME_LOGIN)
      const newSession = await AsyncStorage.getItem(NEW_SESSION)

      if (isScreenContentAllowed && cernerExist && ((firstTimeLogin && mixedCerner) || (newSession && allCerner))) {
        navigateTo('HealthHelp')
        await AsyncStorage.setItem(FIRST_TIME_LOGIN, '')
        await AsyncStorage.setItem(NEW_SESSION, '')
      }
    }

    healthHelpScreenCheck()
  }, [allCerner, cernerExist, isScreenContentAllowed, mixedCerner, navigateTo])

  const onCoronaVirusFAQ = () => {
    logAnalyticsEvent(Events.vama_covid_links('health_screen'))
    navigateTo('Webview', {
      url: WEBVIEW_URL_CORONA_FAQ,
      displayTitle: t('webview.vagov'),
      loadingMessage: t('webview.covidUpdates.loading'),
    })
  }

  const goToHealthHelp = (): void => {
    navigateTo('HealthHelp')
  }

  return (
    <CategoryLanding title={t('health.title')} testID="healthCategoryTestID">
      <Box mb={!cernerExist ? theme.dimensions.contentMarginBottom : theme.dimensions.standardMarginBetween}>
        <LargeNavButton
          title={t('appointments')}
          onPress={() => navigateTo('Appointments')}
          showLoading={loadingAppointments}
          subText={
            upcomingAppointmentsCount && upcomingDaysLimit
              ? t('appointments.activityButton.subText', {
                  count: upcomingAppointmentsCount,
                  dayCount: upcomingDaysLimit,
                })
              : undefined
          }
        />
        <LargeNavButton
          title={t('secureMessaging.title')}
          onPress={() => navigateTo('SecureMessaging')}
          showLoading={loadingInbox}
          subText={
            unreadMessageCount ? t('secureMessaging.activityButton.subText', { count: unreadMessageCount }) : undefined
          }
        />
        {featureEnabled('prescriptions') && (
          <LargeNavButton
            title={t('prescription.title')}
            onPress={() => navigateTo('PrescriptionHistory')}
            showLoading={fetchingPrescriptions}
            testID="prescriptionsNavButtonTestID"
            subText={
              prescriptionData?.meta.prescriptionStatusCount.isRefillable
                ? t('prescriptions.activityButton.subText', {
                    count: prescriptionData?.meta.prescriptionStatusCount.isRefillable,
                  })
                : undefined
            }
          />
        )}
        <LargeNavButton
          title={t('vaVaccines.buttonTitle')}
          onPress={() => navigateTo('VaccineList')}
        />
        <LargeNavButton title={t('covid19Updates.title')} onPress={onCoronaVirusFAQ} />
      </Box>
      {cernerExist ? (
        <Box mx={theme.dimensions.buttonPadding}>
          <TextView variant="cernerFooterText">{t('healthHelp.info')}</TextView>
          <Pressable onPress={goToHealthHelp} accessibilityRole="link" accessible={true}>
            <TextView variant="MobileFooterLink" paragraphSpacing={true}>
              {t('healthHelp.checkFacility')}
            </TextView>
          </Pressable>
        </Box>
      ) : (
        <></>
      )}
    </CategoryLanding>
  )
}

type HealthStackScreenProps = Record<string, unknown>

const HealthScreenStack = createStackNavigator<HealthStackParamList>()

/**
 * Stack screen for the Health tab. Screens placed within this stack will appear in the context of the app level tab navigator
 */
function HealthStackScreen({}: HealthStackScreenProps) {
  const screenOptions = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  }
  return (
    <HealthScreenStack.Navigator
      screenOptions={screenOptions}
      screenListeners={{
        transitionStart: (e) => {
          if (e.data.closing) {
            CloseSnackbarOnNavigation(e.target)
          }
        },
        blur: (e) => {
          CloseSnackbarOnNavigation(e.target)
        },
      }}>
      <HealthScreenStack.Screen name="Health" component={HealthScreen} options={{ headerShown: false }} />
      <HealthScreenStack.Screen
        name="Appointments"
        component={Appointments}
        options={FEATURE_LANDING_TEMPLATE_OPTIONS}
      />
      <HealthScreenStack.Screen name="FolderMessages" component={FolderMessages} options={{ headerShown: false }} />
      <HealthScreenStack.Screen
        name="PastAppointmentDetails"
        component={PastAppointmentDetails}
        options={FEATURE_LANDING_TEMPLATE_OPTIONS}
      />
      <HealthScreenStack.Screen
        name="PrescriptionDetails"
        component={PrescriptionDetails}
        options={{ headerShown: false }}
      />
      <HealthScreenStack.Screen
        name="PrescriptionHistory"
        component={PrescriptionHistory}
        options={FEATURE_LANDING_TEMPLATE_OPTIONS}
      />
      <HealthScreenStack.Screen
        name="SecureMessaging"
        component={SecureMessaging}
        options={FEATURE_LANDING_TEMPLATE_OPTIONS}
      />
      <HealthScreenStack.Screen
        name="UpcomingAppointmentDetails"
        component={UpcomingAppointmentDetails}
        options={FEATURE_LANDING_TEMPLATE_OPTIONS}
      />
      <HealthScreenStack.Screen
        name="VaccineDetails"
        component={VaccineDetailsScreen}
        options={FEATURE_LANDING_TEMPLATE_OPTIONS}
      />
      <HealthScreenStack.Screen
        name="VaccineList"
        component={VaccineListScreen}
        options={FEATURE_LANDING_TEMPLATE_OPTIONS}
      />
      <HealthScreenStack.Screen name="ViewMessage" component={ViewMessageScreen} options={{ headerShown: false }} />
    </HealthScreenStack.Navigator>
  )
}

export default HealthStackScreen
