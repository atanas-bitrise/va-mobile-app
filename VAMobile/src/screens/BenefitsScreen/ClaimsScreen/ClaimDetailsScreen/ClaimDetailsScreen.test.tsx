import React from 'react'
import { Linking } from 'react-native'

import { fireEvent, screen } from '@testing-library/react-native'

import { claimsAndAppealsKeys } from 'api/claimsAndAppeals'
import { ClaimData } from 'api/types'
import * as api from 'store/api'
import { QueriesData, context, mockNavProps, render, waitFor, when } from 'testUtils'

import { claim as claimData } from '../claimData'
import ClaimDetailsScreen from './ClaimDetailsScreen'

context('ClaimDetailsScreen', () => {
  const renderWithData = (claim?: Partial<ClaimData>): void => {
    let queriesData: QueriesData | undefined
    if (claim) {
      queriesData = [
        {
          queryKey: [claimsAndAppealsKeys.claim, '0'],
          data: {
            ...claim,
          },
        },
      ]
    }

    const props = mockNavProps(
      undefined,
      {
        navigate: jest.fn(),
        addListener: jest.fn(),
        setOptions: jest.fn(),
        goBack: jest.fn(),
      },
      { params: { claimID: '0', claimType: 'ACTIVE' } },
    )

    render(<ClaimDetailsScreen {...props} />, { queriesData })
  }

  describe('when loadingClaim is set to true', () => {
    it('should show loading screen', async () => {
      renderWithData()
      expect(screen.getByText('Loading your claim details...')).toBeTruthy()
    })
  })

  describe('when the selected tab is status', () => {
    it('should display the ClaimStatus component', async () => {
      when(api.get as jest.Mock)
        .calledWith(`/v0/claim/0`, {}, expect.anything())
        .mockResolvedValue({
          data: {
            ...claimData,
          },
        })
      renderWithData({
        ...claimData,
      })
      await waitFor(() =>
        expect(screen.getByTestId('Step 1 of 5. completed. Claim received June 6, 2019')).toBeTruthy(),
      )
    })

    it('should display the ClaimDetails component', async () => {
      when(api.get as jest.Mock)
        .calledWith(`/v0/claim/0`, {}, expect.anything())
        .mockResolvedValue({
          data: {
            ...claimData,
          },
        })
      renderWithData({
        ...claimData,
      })
      await waitFor(() => fireEvent.press(screen.getByText('Details')))
      await waitFor(() => fireEvent.press(screen.getByText('Details')))

      await waitFor(() => expect(screen.getByText('Claim type')).toBeTruthy())
    })
  })

  describe('need help section', () => {
    it('should always display on claim status tab', async () => {
      when(api.get as jest.Mock)
        .calledWith(`/v0/claim/0`, {}, expect.anything())
        .mockResolvedValue({
          data: {
            ...claimData,
          },
        })
      renderWithData({
        ...claimData,
      })
      await waitFor(() => expect(screen.getByRole('header', { name: 'Need help?' })).toBeTruthy())
      await waitFor(() =>
        expect(
          screen.getByText(
            'Call our VA benefits hotline. We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.',
          ),
        ).toBeTruthy(),
      )
      await waitFor(() => expect(screen.getByRole('link', { name: '800-827-1000' })).toBeTruthy())
      await waitFor(() => fireEvent.press(screen.getByRole('link', { name: '800-827-1000' })))
      await waitFor(() => expect(Linking.openURL).toHaveBeenCalled())
    })

    //ToDo: when feature flag is added by Binny
    // it('should display on claim details, to be renamed files and when feature flag is true', async () => {

    // })
    // it('should not display on claim details, to be renamed files and when feature flag is false', async () => {

    // })
  })

  describe('when common error occurs', () => {
    it('should render error component when the stores screenID matches the components screenID', async () => {
      when(api.get as jest.Mock)
        .calledWith(`/v0/claim/0`, {}, expect.anything())
        .mockRejectedValue({ networkError: true } as api.APIError)

      renderWithData()

      await waitFor(() => expect(screen.getByRole('header', { name: "The app can't be loaded." })).toBeTruthy())
    })
  })
})
