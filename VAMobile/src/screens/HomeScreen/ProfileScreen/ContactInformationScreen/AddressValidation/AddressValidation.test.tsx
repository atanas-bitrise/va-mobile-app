import React from 'react'
import { fireEvent, screen } from '@testing-library/react-native'

import { render } from 'testUtils'
import AddressValidation from './AddressValidation'
import { SnackbarMessages } from 'components/SnackBar'
import { AddressData, ValidateAddressData } from 'api/types'

const mockAddress: AddressData = {
  addressLine1: '2248 San Miguel Ave.',
  addressPou: 'CORRESPONDENCE',
  addressType: 'DOMESTIC',
  city: 'Santa Rosa',
  countryName: 'United States',
  countryCodeIso3: 'USA',
  stateCode: 'CA',
  zipCode: '95403',
}

const snackbarMessages: SnackbarMessages = {
  successMsg: 'address saved',
  errorMsg: 'address could not be saved',
}

const validationData: ValidateAddressData = {
  confirmedSuggestedAddresses: [{
    id: '0',
    type: 'appointment',
    meta: {
      address: {
        confidenceScore: 1,
        addressType: 'DOMESTIC',
        deliveryPointValidation: '',
        residentialDeliveryIndicator: '',
      },
      validationKey: 1
    },
    attributes: { 
      addressLine1: '2248 San Miguel Ave.',
      addressPou: 'CORRESPONDENCE',
      addressType: 'DOMESTIC',
      city: 'Santa Rosa',
      countryCodeIso3: 'USA',
      stateCode: 'CA',
      zipCode: '95403', 
      internationalPostalCode: '', 
      province: '', 
      zipCodeSuffix: ''
    }
  }],
  validationKey: 1
}

const mockedNavigate = jest.fn()
const mockedNavigationGoBack = jest.fn()
const updateAddressSpy = jest.fn()
const setShowAddressValidationSpy = jest.fn()

jest.mock('@react-navigation/native', () => {
  let actual = jest.requireActual('@react-navigation/native')
  return {
    ...actual,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedNavigationGoBack,
      setOptions: jest.fn(),
    }),
  }
})

describe('AddressValidation', () => {
  const renderWithProps = () => {
    render(<AddressValidation addressEntered={mockAddress} addressId={12345} snackbarMessages={snackbarMessages} validationData={validationData} updateAddress={updateAddressSpy} setShowAddressValidation={setShowAddressValidationSpy} />)
  }

  beforeEach(() => {
    renderWithProps()
  })

  describe('when the address validation scenario type is SHOW_SUGGESTIONS_OVERRIDE', () => {
    it('displays the alert texts', async () => {
      const collapsibleAlert = screen.getByText('Verify your address')

      expect(collapsibleAlert).toBeTruthy()
      fireEvent.press(collapsibleAlert)
      expect(screen.getByText("We can't confirm the address you entered with the U.S. Postal Service.")).toBeTruthy()
    })
  })

  describe('when use this address button is pressed', () => {
    it('calls updateAddress', async () => {
      fireEvent.press(screen.getByTestId('youEnteredTestID'))
      fireEvent.press((screen.getByRole('button', { name: 'Use this address' })))
      expect(updateAddressSpy).toBeCalled()
    })
  })
})
