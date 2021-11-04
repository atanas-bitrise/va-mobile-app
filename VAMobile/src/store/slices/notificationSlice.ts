import * as api from '../api'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppThunk } from 'store'
import { GetPushPrefsResponse, PUSH_APP_NAME, PushOsName, PushPreference } from '../api'
import { deviceName } from 'utils/deviceData'
import { isIOS } from 'utils/platform'
import { notificationsEnabled } from 'utils/notifications'

export const DEVICE_TOKEN_KEY = '@store_device_token'
export const DEVICE_ENDPOINT_SID = '@store_device_endpoint_sid'

export type NotificationsState = {
  deviceToken?: string
  registeringDevice: boolean
  preferences: PushPreference[]
  loadingPreferences: boolean
  settingPreference: boolean
  systemNotificationsOn: boolean
}

export const initialNotificationsState: NotificationsState = {
  deviceToken: undefined,
  registeringDevice: false,
  preferences: [],
  loadingPreferences: false,
  settingPreference: false,
  systemNotificationsOn: false,
}

export const registerDevice =
  (deviceToken?: string): AppThunk =>
  async (dispatch) => {
    dispatch(dispatchStartRegisterDevice())
    try {
      if (deviceToken) {
        const savedToken = await AsyncStorage.getItem(DEVICE_TOKEN_KEY)
        const savedSid = await AsyncStorage.getItem(DEVICE_ENDPOINT_SID)
        console.debug(`saved endpointSid: ${savedSid}`)
        // if there is no saved token, we have not registered
        // if there is a token and it is different, we need to register the change with VETEXT
        // if the endpoint sid is missing, we need to register again to retrieve it
        if (!savedToken || savedToken !== deviceToken || !savedSid) {
          const params: api.PushRegistration = {
            deviceName,
            deviceToken,
            appName: PUSH_APP_NAME,
            osName: isIOS() ? PushOsName.ios : PushOsName.android,
            debug: false, //TODO debug true is suppose to only work for ios but is currently causing a 502 error(android always set to false)
          }
          const response = await api.put<api.PushRegistrationResponse>('/v0/push/register', params)
          console.debug(`push registration response: ${response}`)
          if (response) {
            await AsyncStorage.setItem(DEVICE_ENDPOINT_SID, response.data.attributes.endpointSid)
            await AsyncStorage.setItem(DEVICE_TOKEN_KEY, deviceToken)
          }
        }
      } else {
        await AsyncStorage.removeItem(DEVICE_TOKEN_KEY)
      }
    } catch (e) {
      //TODO: log in crashlytics?
      console.error(e)
    }
    dispatch(dispatchUpdateDeviceToken(deviceToken))
  }

export const setPushPref =
  (preference: PushPreference): AppThunk =>
  async (dispatch) => {
    dispatch(dispatchStartSetPreference())
    try {
      const endpoint_sid = await AsyncStorage.getItem(DEVICE_ENDPOINT_SID)
      const params = { preference: preference.preferenceId, enabled: !preference.value }
      await api.put(`/v0/push/prefs/${endpoint_sid}`, params)
      const newPrefSetting: api.PushPreference = {
        preferenceId: preference.preferenceId,
        preferenceName: preference.preferenceName,
        value: !preference.value,
      }
      dispatch(dispatchEndSetPreference(newPrefSetting))
    } catch (e) {
      //TODO: log in crashlytics?
      console.error(e)
      dispatch(dispatchEndSetPreference(undefined))
    }
  }

export const loadPushPreferences = (): AppThunk => async (dispatch) => {
  dispatch(dispatchStartLoadPreferences())
  const systemNotificationsOn = await notificationsEnabled()
  try {
    const endpoint_sid = await AsyncStorage.getItem(DEVICE_ENDPOINT_SID)
    const response = await api.get<GetPushPrefsResponse>(`/v0/push/prefs/${endpoint_sid}`)
    dispatch(dispatchEndLoadPreferences({ systemNotificationsOn, preferences: response?.data.attributes.preferences }))
  } catch (e) {
    //TODO: log in crashlytics?
    console.error(e)
    dispatch(dispatchEndLoadPreferences({ systemNotificationsOn, preferences: [] }))
  }
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialNotificationsState,
  reducers: {
    dispatchStartRegisterDevice: (state) => {
      state.registeringDevice = true
    },

    dispatchStartLoadPreferences: (state) => {
      state.loadingPreferences = true
    },

    dispatchStartSetPreference: (state) => {
      state.settingPreference = true
    },

    dispatchUpdateDeviceToken: (state, action: PayloadAction<string | undefined>) => {
      state.deviceToken = action.payload
      state.registeringDevice = true
    },

    dispatchEndSetPreference: (state, action: PayloadAction<PushPreference | undefined>) => {
      const pref = action.payload
      if (pref) {
        const index = state.preferences.findIndex((p) => p.preferenceId === pref.preferenceId)
        state.preferences.splice(index, 1, pref)
      }

      state.settingPreference = false
    },

    dispatchEndLoadPreferences: (state, action: PayloadAction<{ systemNotificationsOn: boolean; preferences?: PushPreference[] }>) => {
      const { systemNotificationsOn, preferences } = action.payload
      state.preferences = preferences || []
      state.systemNotificationsOn = systemNotificationsOn
      state.loadingPreferences = false
    },
  },
})

export const {
  dispatchEndLoadPreferences,
  dispatchEndSetPreference,
  dispatchStartLoadPreferences,
  dispatchStartRegisterDevice,
  dispatchStartSetPreference,
  dispatchUpdateDeviceToken,
} = notificationSlice.actions
export default notificationSlice.reducer
