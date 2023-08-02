import { LinkingOptions } from '@react-navigation/native'
import { LoadingComponent } from '../components'
import { NavigationState } from 'react-navigation'
import React, { ReactElement } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const linking: LinkingOptions<any> = {
  prefixes: [
    /* your linking prefixes */
    'vamobile://',
  ],
  config: {
    /* configuration for matching screens with paths */
    screens: {
      Tabs: {
        screens: {
          HealthTab: {
            screens: {
              Appointments: 'appointments/:id',
              ViewMessageScreen: 'messages/:messageID',
            },
          },
        },
      },
    },
  },
  getStateFromPath(path) {
    const pathParts = path.split('/')
    if (pathParts[0] === 'messages' && pathParts.length === 2) {
      return {
        routes: [
          {
            name: 'Tabs',
            state: {
              routes: [
                {
                  name: 'HealthTab',
                  state: {
                    routes: [{ name: 'Health' }, { name: 'SecureMessaging' }, { name: 'ViewMessageScreen', params: { messageID: pathParts[1] } }],
                  },
                },
              ],
            },
          },
        ],
      }
    }
    // return getStateFromPath(path, config)
    // Return a state object here
    // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`
  },
}

export const state: NavigationState = {
  index: 0,
  isTransitioning: false,
  key: '',
  routes: [],
}

export const fallback: ReactElement = <LoadingComponent />
