import React, { Dispatch, FC, SetStateAction, createContext, useContext, useEffect, useState } from 'react'
import { Linking, View } from 'react-native'
import { NotificationBackgroundFetchResult, Notifications } from 'react-native-notifications'
import { useSelector } from 'react-redux'

import { useRegisterDevice } from 'api/notifications'
import { usePersonalInformation } from 'api/personalInformation/getPersonalInformation'
import { Events } from 'constants/analytics'
import { RootState } from 'store'
import { AuthState } from 'store/slices'
import { logAnalyticsEvent } from 'utils/analytics'
import { useAlert } from 'utils/hooks'

const foregroundNotifications: Array<string> = []

interface NotificationContextType {
  initialUrl: string
  setInitialUrl: Dispatch<SetStateAction<string>>
}

const NotificationContext = createContext<NotificationContextType>({
  initialUrl: '',
  setInitialUrl: () => {},
})

/**
 * notification manager component to handle all push logic
 */
const NotificationManager: FC = ({ children }) => {
  const { loggedIn } = useSelector<RootState, AuthState>((state) => state.auth)
  const { data: personalInformation } = usePersonalInformation({ enabled: loggedIn })
  const { mutate: registerDevice } = useRegisterDevice()
  const [initialUrl, setInitialUrl] = useState('')
  const [eventsRegistered, setEventsRegistered] = useState(false)

  const showAlert = useAlert()

  useEffect(() => {
    const register = () => {
      const registeredNotifications = Notifications.events().registerRemoteNotificationsRegistered((event) => {
        const registerParams = {
          deviceToken: event.deviceToken,
          userID: personalInformation?.id,
        }
        registerDevice(registerParams)
      })
      const failedNotifications = Notifications.events().registerRemoteNotificationsRegistrationFailed(() => {
        const registerParams = {
          deviceToken: undefined,
          userID: undefined,
        }
        registerDevice(registerParams)
      })
      Notifications.events().registerRemoteNotificationsRegistrationDenied(() => {
        registeredNotifications.remove()
        failedNotifications.remove()
      })
      Notifications.registerRemoteNotifications()
    }

    if (loggedIn && personalInformation?.id) {
      register()
    }
  }, [loggedIn, personalInformation?.id, registerDevice])

  const registerNotificationEvents = () => {
    // Register callbacks for notifications that happen when the app is in the foreground
    Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
      console.debug('Notification Received - Foreground', notification)
      foregroundNotifications.push(notification.identifier)
      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
      completion({ alert: true, sound: true, badge: true })
    })

    // Register callback for opened notifications
    Notifications.events().registerNotificationOpened((notification, completion) => {
      /** this should be logged in firebase automatically. Anything here should be actions the app takes when it
       * opens like deep linking, etc
       */
      logAnalyticsEvent(Events.vama_notification_click(notification.payload.url))

      // Open deep link from the notification when present. If the user is
      // not logged in, store the link so it can be opened after authentication.
      if (notification.payload.url) {
        if (loggedIn) {
          Linking.openURL(notification.payload.url)
        } else {
          setInitialUrl(notification.payload.url)
        }
      }

      showAlert({
        title: 'This is what we received from the notification',
        message: `Notification url: ${notification.payload.url}\nNotification identifier: ${notification.identifier}\nForeground Notification check:${foregroundNotifications.includes(notification.identifier)}\nLoggedIn boolean:${loggedIn}\nNotification${notification}`,
        buttons: [
          {
            text: 'close',
          },
        ],
      })

      console.debug('Notification opened by device user', notification)
      console.debug(`Notification opened with an action identifier: ${notification.identifier}`)
      completion()
    })

    // Register callbacks for notifications that happen when the app is in the background
    Notifications.events().registerNotificationReceivedBackground((notification, completion) => {
      console.debug('Notification Received - Background', notification)
      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
      completion(NotificationBackgroundFetchResult.NEW_DATA)
    })

    // Callback in case there is need to do something with initial notification before it goes to system tray
    Notifications.getInitialNotification()
      .then((notification) => {
        logAnalyticsEvent(Events.vama_notification_click(notification?.payload.url))
        console.debug('Initial notification was:', notification || 'N/A')

        if (notification?.payload.url) {
          setInitialUrl(notification.payload.url)
        }
      })
      .catch((err) => console.error('getInitialNotification() failed', err))
  }

  if (!eventsRegistered) {
    registerNotificationEvents()
    setEventsRegistered(true)
  }

  const s = { flex: 1 }
  return (
    <NotificationContext.Provider value={{ initialUrl, setInitialUrl }}>
      <View style={s}>{children}</View>
    </NotificationContext.Provider>
  )
}

export const useNotificationContext = () => useContext(NotificationContext)

export default NotificationManager
