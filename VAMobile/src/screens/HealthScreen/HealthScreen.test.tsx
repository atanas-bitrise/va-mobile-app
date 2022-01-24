import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import 'jest-styled-components'
import { ReactTestInstance } from 'react-test-renderer'

import { context, mockNavProps, render, RenderAPI, waitFor } from 'testUtils'
import { HealthScreen } from './HealthScreen'
import { Pressable, TouchableWithoutFeedback } from 'react-native'
import { initialAuthState, initialErrorsState, initialSecureMessagingState } from 'store/slices'
import { TextView, MessagesCountTag } from 'components'

const mockNavigateToSpy = jest.fn()
const mockNavigateToCrisisLineSpy = jest.fn()
const mockNavigateToAppointmentSpy = jest.fn()
const mockNavigateToSecureMessagingSpy = jest.fn()
const mockNavigateToVAVaccinesSpy = jest.fn()
const mockNavigationSpy = jest.fn()

jest.mock('utils/hooks', () => {
  let original = jest.requireActual('utils/hooks')
  let theme = jest.requireActual('styles/themes/standardTheme').default

  return {
    ...original,
    useRouteNavigation: () => {
      return mockNavigateToSpy
        .mockReturnValueOnce(mockNavigateToCrisisLineSpy)
        .mockReturnValueOnce(mockNavigateToAppointmentSpy)
        .mockReturnValueOnce(mockNavigateToSecureMessagingSpy)
        .mockReturnValueOnce(mockNavigateToVAVaccinesSpy)
        .mockReturnValue(() => {})
    },
    useTheme: jest.fn(() => {
      return { ...theme }
    }),
  }
})

context('HealthScreen', () => {
  let component: RenderAPI
  let props: any
  let testInstance: ReactTestInstance

  //mockList:  SecureMessagingMessageList --> for inboxMessages
  const initializeTestInstance = (unreadCount: number = 13, hasLoadedInbox: boolean = true) => {
    props = mockNavProps(undefined, { setOptions: jest.fn(), navigate: mockNavigationSpy })

    component = render(<HealthScreen {...props} />, {
      preloadedState: {
        auth: { ...initialAuthState },
        secureMessaging: {
          ...initialSecureMessagingState,
          hasLoadedInbox,
          inbox: {
            type: 'Inbox',
            id: '123',
            attributes: {
              //SecureMessagingFolderAttributes
              folderId: 123,
              name: 'Inbox',
              count: 45,
              unreadCount: unreadCount,
              systemFolder: true,
            },
          },
        },
        errors: initialErrorsState,
      },
    })

    testInstance = component.container
  }
  beforeEach(() => {
    initializeTestInstance()
  })

  it('initializes correctly', async () => {
    await waitFor(() => {
      expect(component).toBeTruthy()
    })
  })

  describe('on click of the crisis line button', () => {
    it('should call useRouteNavigation', async () => {
      await waitFor(() => {
        testInstance.findAllByType(TouchableWithoutFeedback)[0].props.onPress()
        expect(mockNavigateToSpy).toHaveBeenNthCalledWith(1, 'VeteransCrisisLine')
        expect(mockNavigateToCrisisLineSpy).toHaveBeenCalled()
      })
    })
  })

  describe('on click of the appointments button', () => {
    it('should call useRouteNavigation', async () => {
      await waitFor(() => {
        testInstance.findAllByType(Pressable)[0].props.onPress()
        expect(mockNavigateToSpy).toHaveBeenNthCalledWith(2, 'Appointments')
        expect(mockNavigateToAppointmentSpy).toHaveBeenCalled()
      })
    })
  })

  describe('on click of the secure messaging button', () => {
    it('should call useRouteNavigation', async () => {
      await waitFor(() => {
        testInstance.findAllByType(Pressable)[1].props.onPress()
        expect(mockNavigateToSpy).toHaveBeenNthCalledWith(3, 'SecureMessaging')
        expect(mockNavigateToSecureMessagingSpy).toHaveBeenCalled()
      })
    })
  })

  describe('on click of the vaccines button', () => {
    it('should call useRouteNavigation', async () => {
      await waitFor(() => {
        testInstance.findAllByType(Pressable)[2].props.onPress()
        expect(mockNavigateToSpy).toHaveBeenNthCalledWith(4, 'VaccineList')
        expect(mockNavigateToVAVaccinesSpy).toHaveBeenCalled()
      })
    })
  })

  describe('on click of the covid-19 updates button', () => {
    it('should navigate to https://www.va.gov/coronavirus-veteran-frequently-asked-questions', async () => {
      await waitFor(() => {
        testInstance.findAllByType(Pressable)[3].props.onPress()
        const expectNavArgs = {
          url: 'https://www.va.gov/coronavirus-veteran-frequently-asked-questions',
          displayTitle: 'va.gov',
        }
        expect(mockNavigationSpy).toHaveBeenCalledWith('Webview', expectNavArgs)
      })
    })
  })

  it('should render messagesCountTag with the correct count number', async () => {
    await waitFor(() => {
      expect(testInstance.findByType(MessagesCountTag)).toBeTruthy()
      expect(testInstance.findAllByType(TextView)[7].props.children).toBe(13)
    })
  })

  describe('when there are zero unread inbox messages', () => {
    it('should not render a messagesCountTag', async () => {
      await waitFor(() => {
        initializeTestInstance(0)
        expect(testInstance.findAllByType(TextView)[6].props.children).toBe('Messages')
        expect(testInstance.findAllByType(TextView)[7].props.children).toBe('Send and receive secure messages')
      })
    })
  })
})
