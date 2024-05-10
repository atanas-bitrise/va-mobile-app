import AsyncStorage from '@react-native-async-storage/async-storage'

import { useQuery } from '@tanstack/react-query'

import queryClient from 'api/queryClient'
import { GetPushPrefsResponse, LoadPushPreferencesData } from 'api/types'
import { get } from 'store/api'
import { notificationsEnabled } from 'utils/notifications'

import { notificationKeys } from './queryKeys'
import { DEVICE_ENDPOINT_SID } from './registerDevice'

/**
 * Fetch user push preferences
 */
const loadPushPreferences = async (): Promise<LoadPushPreferencesData | undefined> => {
  const systemNotificationsOn = await notificationsEnabled()
  const endpoint_sid = await AsyncStorage.getItem(DEVICE_ENDPOINT_SID)
  const response = await get<GetPushPrefsResponse>(`/v0/push/prefs/${endpoint_sid}`)
  const previousData = queryClient.getQueryData(notificationKeys.settings) as LoadPushPreferencesData
  return {
    preferences: response?.data.attributes.preferences || [],
    systemNotificationsOn: systemNotificationsOn,
    deviceToken: previousData?.deviceToken,
    initialUrl: previousData?.initialUrl,
    tappedForegroundNotification: previousData?.tappedForegroundNotification || false,
  }
}

/**
 * Returns a query for user push preferences
 */
export const useLoadPushPreferences = (options?: { enabled?: boolean }) => {
  return useQuery({
    ...options,
    queryKey: notificationKeys.settings,
    queryFn: () => loadPushPreferences(),
    meta: {
      errorName: 'loadPushPreferences: Service error',
    },
  })
}
