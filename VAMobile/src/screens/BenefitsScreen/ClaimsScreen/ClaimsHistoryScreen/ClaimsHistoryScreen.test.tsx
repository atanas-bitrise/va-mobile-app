import React from 'react'

import { screen } from '@testing-library/react-native'

import { authorizedServicesKeys } from 'api/authorizedServices/queryKeys'
import { claimsAndAppealsKeys } from 'api/claimsAndAppeals'
import { ClaimsAndAppealsGetDataMetaError, ClaimsAndAppealsListPayload } from 'api/types'
import { DEFAULT_PAGE_SIZE } from 'constants/common'
import { CommonErrorTypesConstants } from 'constants/errors'
import * as api from 'store/api'
import { QueriesData, context, mockNavProps, render, waitFor, when } from 'testUtils'

import ClaimsHistoryScreen from './ClaimsHistoryScreen'

const mockPayload: ClaimsAndAppealsListPayload = {
  data: [
    {
      id: '0',
      type: 'appeal',
      attributes: {
        subtype: 'supplementalClaim',
        completed: false,
        decisionLetterSent: false,
        dateFiled: '2020-10-22',
        updatedAt: '2020-10-28',
        displayTitle: 'supplemental claim for disability compensation',
      },
    },
    {
      id: '2',
      type: 'claim',
      attributes: {
        subtype: 'Compensation',
        completed: false,
        decisionLetterSent: false,
        dateFiled: '2020-10-22',
        updatedAt: '2020-10-30',
        displayTitle: 'Compensation',
      },
    },
  ],
  meta: {
    pagination: {
      currentPage: 1,
      perPage: 10,
      totalEntries: 2,
    },
  },
}

context('ClaimsHistoryScreen', () => {
  const initializeTestInstance = (authorized: boolean = true, errors?: Array<ClaimsAndAppealsGetDataMetaError>) => {
    const queryPayload = mockPayload
    queryPayload.meta.errors = errors
    const queriesData: QueriesData = [
      {
        queryKey: [claimsAndAppealsKeys.claimsAndAppeals, 'ACTIVE', '1'],
        data: queryPayload,
      },
      {
        queryKey: authorizedServicesKeys.authorizedServices,
        data: {
          appeals: authorized,
          appointments: true,
          claims: authorized,
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
    ]
    render(<ClaimsHistoryScreen {...mockNavProps()} />, { queriesData })
  }

  describe('when claims service and appeals service are both not authorized', () => {
    it('should render the NoClaimsAndAppealsAccess component', async () => {
      when(api.get as jest.Mock)
        .calledWith(`/v0/claims-and-appeals-overview`, {
          showCompleted: 'false',
          'page[size]': DEFAULT_PAGE_SIZE.toString(),
          'page[number]': '1',
        })
        .mockResolvedValue(mockPayload)
        .calledWith('/v0/user/authorized-services')
        .mockResolvedValue({
          data: {
            type: 'user',
            id: 'abe3f152-90b0-45cb-8776-4958bad0e0ef',
            attributes: {
              authorizedServices: {
                appeals: false,
                appointments: true,
                claims: false,
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
      initializeTestInstance(false)
      await waitFor(() => expect(screen.getByText("We can't find any claims information for you")).toBeTruthy())
    })
  })

  describe('when common error occurs', () => {
    it('should render error component when the stores screenID matches the components screenID', async () => {
      when(api.get as jest.Mock)
        .calledWith(`/v0/claims-and-appeals-overview`, {
          showCompleted: 'false',
          'page[size]': DEFAULT_PAGE_SIZE.toString(),
          'page[number]': '1',
        })
        .mockRejectedValue({ error: CommonErrorTypesConstants.NETWORK_CONNECTION_ERROR })
      initializeTestInstance()
      await waitFor(() => expect(screen.getByText("The VA mobile app isn't working right now")).toBeTruthy())
    })
  })

  describe('when there is both a claimsServiceError and an appealsServiceError', () => {
    it('should display an alert and not display the segmented control or the ClaimsAndAppealsListView component', async () => {
      const error = [
        {
          service: 'claims',
        },
        {
          service: 'appeals',
        },
      ]
      const payload = mockPayload
      payload.meta.errors = error
      when(api.get as jest.Mock)
        .calledWith(`/v0/claims-and-appeals-overview`, {
          showCompleted: 'false',
          'page[size]': '10',
          'page[number]': '1',
        })
        .mockResolvedValue(payload)
      initializeTestInstance(true, error)
      await waitFor(() => expect(screen.getByText('Claims and appeal status are unavailable')).toBeTruthy())
      await waitFor(() => expect(screen.queryByText('Active')).toBeFalsy())
      await waitFor(() => expect(screen.queryByText('Closed')).toBeFalsy())
    })
  })
})
