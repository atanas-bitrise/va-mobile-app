import React from 'react'

import { fireEvent, screen } from '@testing-library/react-native'
import { when } from 'jest-when'

import { SecureMessagingFolderGetData, SecureMessagingSystemFolderIdConstants } from 'api/types'
import * as api from 'store/api'
import { loadAllPrescriptions } from 'store/slices'
import { context, mockNavProps, render, waitFor } from 'testUtils'
import { featureEnabled } from 'utils/remoteConfig'

import { HealthScreen } from './HealthScreen'

const mockNavigationSpy = jest.fn()

jest.mock('../../api/authorizedServices/getAuthorizedServices', () => {
  const original = jest.requireActual('../../api/authorizedServices/getAuthorizedServices')
  return {
    ...original,
    useAuthorizedServices: jest.fn().mockReturnValue({
      status: 'success',
      data: {
        appeals: true,
        appointments: true,
        claims: true,
        decisionLetters: true,
        directDepositBenefits: true,
        directDepositBenefitsUpdate: true,
        disabilityRating: true,
        genderIdentity: true,
        lettersAndDocuments: true,
        militaryServiceHistory: true,
        paymentHistory: true,
        preferredName: true,
        prescriptions: true,
        scheduleAppointments: true,
        secureMessaging: true,
        userProfileUpdate: true,
      },
    }),
  }
})

jest.mock('utils/remoteConfig')

jest.mock('utils/hooks', () => {
  const original = jest.requireActual('utils/hooks')

  return {
    ...original,
    useRouteNavigation: () => mockNavigationSpy,
  }
})

jest.mock('store/slices', () => {
  const actual = jest.requireActual('store/slices')
  return {
    ...actual,
    loadAllPrescriptions: jest.fn(() => {
      return {
        type: '',
        payload: {},
      }
    }),
  }
})

context('HealthScreen', () => {
  const mockFeatureEnabled = featureEnabled as jest.Mock

  afterEach(() => {
    jest.clearAllMocks()
  })
  const inboxData: SecureMessagingFolderGetData = {
    data: {
      id: '1',
      type: 'hah',
      attributes: {
        folderId: 1,
        name: 'inbox',
        count: 22,
        unreadCount: 13,
        systemFolder: true,
      },
    },
  }
  //mockList:  SecureMessagingMessageList --> for inboxMessages
  const initializeTestInstance = (prescriptionsEnabled = false, prescriptionsNeedLoad = false) => {
    when(mockFeatureEnabled).calledWith('prescriptions').mockReturnValue(prescriptionsEnabled)

    const props = mockNavProps(undefined, { setOptions: jest.fn(), navigate: mockNavigationSpy })

    render(<HealthScreen {...props} />, {
      preloadedState: {
        prescriptions: { prescriptionsNeedLoad },
      },
    })
  }
  beforeEach(() => {
    initializeTestInstance()
  })

  describe('prescriptions', () => {
    describe('feature disabled', () => {
      it('does not display prescriptions button if feature toggle disabled', async () => {
        expect(screen.getByText('Appointments')).toBeTruthy()
        expect(screen.getByText('Messages')).toBeTruthy()
        expect(screen.queryByText('Prescriptions')).toBeFalsy()
        expect(screen.getByText('V\ufeffA vaccine records')).toBeTruthy()
        expect(screen.getByText('COVID-19 updates')).toBeTruthy()
      })
    })

    describe('feature enabled', () => {
      it('does not display prescriptions button if feature toggle enabled', async () => {
        initializeTestInstance(true)
        expect(screen.getByText('Appointments')).toBeTruthy()
        expect(screen.getByText('Messages')).toBeTruthy()
        expect(screen.getByText('Prescriptions')).toBeTruthy()
        expect(screen.getByTestId('V\ufeffA vaccine records')).toBeTruthy()
        expect(screen.getByText('COVID-19 updates')).toBeTruthy()
      })
    })
  })

  describe('on click of the prescriptions button', () => {
    it('should call useRouteNavigation', async () => {
      initializeTestInstance(true)
      fireEvent.press(screen.getByText('Prescriptions'))
      expect(mockNavigationSpy).toHaveBeenCalledWith('PrescriptionHistory')
    })

    it('should reload rx data if data is present', async () => {
      initializeTestInstance(true, false)
      fireEvent.press(screen.getByText('Prescriptions'))
      expect(loadAllPrescriptions).toHaveBeenCalled()
    })
  })

  describe('on click of the appointments button', () => {
    it('should call useRouteNavigation', async () => {
      fireEvent.press(screen.getByText('Appointments'))
      expect(mockNavigationSpy).toHaveBeenCalledWith('Appointments')
    })
  })

  describe('on click of the secure messaging button', () => {
    it('should call useRouteNavigation', async () => {
      fireEvent.press(screen.getByText('Messages'))
      expect(mockNavigationSpy).toHaveBeenCalledWith('SecureMessaging')
    })
  })

  describe('on click of the vaccines button', () => {
    it('should call useRouteNavigation', async () => {
      fireEvent.press(screen.getByText('V\ufeffA vaccine records'))
      expect(mockNavigationSpy).toHaveBeenCalledWith('VaccineList')
    })
  })

  describe('on click of the covid-19 updates button', () => {
    it('should navigate to https://www.va.gov/coronavirus-veteran-frequently-asked-questions', async () => {
      fireEvent.press(screen.getByText('COVID-19 updates'))
      const expectNavArgs = {
        url: 'https://www.va.gov/coronavirus-veteran-frequently-asked-questions',
        displayTitle: 'va.gov',
        loadingMessage: 'Loading VA COVID-19 updates...',
      }
      expect(mockNavigationSpy).toHaveBeenCalledWith('Webview', expectNavArgs)
    })
  })

  it('should render messagesCountTag with the correct count number', async () => {
    when(api.get as jest.Mock)
      .calledWith(`/v0/messaging/health/folders/${SecureMessagingSystemFolderIdConstants.INBOX}`)
      .mockResolvedValue(inboxData)
    initializeTestInstance()
    await waitFor(() => expect(screen.getByText('13')).toBeTruthy())
  })
})
