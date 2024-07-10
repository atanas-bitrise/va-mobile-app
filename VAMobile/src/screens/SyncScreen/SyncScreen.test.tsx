import React from 'react'

import { screen } from '@testing-library/react-native'

import { authKeys } from 'api/auth'
import * as api from 'store/api'
import { QueriesData, context, render, when } from 'testUtils'

import { SyncScreen } from './index'

context('SyncScreen', () => {
  const initializeTestInstance = (loggedIn = false, loggingOut = false, syncing = true): void => {
    const queriesData: QueriesData = [
      {
        queryKey: authKeys.settings,
        data: {
          canStoreWithBiometric: true,
          displayBiometricsPreferenceScreen: true,
          firstTimeLogin: false,
          loading: false,
          loggedIn: loggedIn,
          loggingOut: loggingOut,
          shouldStoreWithBiometric: true,
          supportedBiometric: 'Face',
          syncing: syncing,
          codeVerifier: '1',
          codeChallenge: '2',
        },
      },
    ]
    render(<SyncScreen />, { queriesData })
  }

  beforeEach(() => {
    when(api.get as jest.Mock)
      .calledWith('/v0/user/authorized-services')
      .mockResolvedValue({
        data: {
          attributes: {
            authorizedServices: {
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
          },
        },
      })
    initializeTestInstance()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('shows "Signing you in" text', () => {
    initializeTestInstance()
    expect(screen.getByText('Signing you in...')).toBeTruthy()
  })

  it('shows "Signing you out" text when logging out', () => {
    initializeTestInstance(false, true, true)
    expect(screen.getByText('Signing you out...')).toBeTruthy()
  })

  it('shows "Signing you out" text when logging out and data is not loaded', () => {
    initializeTestInstance(true, true, true)
    expect(screen.getByText('Signing you out...')).toBeTruthy()
  })
})
