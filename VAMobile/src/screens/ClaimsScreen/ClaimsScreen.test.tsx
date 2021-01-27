import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import { context, mockStore, renderWithProviders} from 'testUtils'
import {act, ReactTestInstance} from 'react-test-renderer'

import {ClaimsAndAppealsState, initialClaimsAndAppealsState, InitialState} from 'store/reducers'
import ClaimsScreen from './ClaimsScreen'
import {AlertBox, LoadingComponent, SegmentedControl, TextView} from 'components'
import ClaimsAndAppealsListView from './ClaimsAndAppealsListView/ClaimsAndAppealsListView'

context('ClaimsScreen', () => {
  let store: any
  let component: any
  let testInstance: ReactTestInstance

  const initializeTestInstance = (loading = false, claimsServiceError = false, appealsServiceError = false) => {
    const claimsAndAppeals: ClaimsAndAppealsState = {
      ...initialClaimsAndAppealsState,
      loadingAllClaimsAndAppeals: loading,
      claimsServiceError,
      appealsServiceError
    }

    store = mockStore({
      ...InitialState,
      claimsAndAppeals
    })

    act(() => {
      component = renderWithProviders(<ClaimsScreen/>, store)
    })

    testInstance = component.root
  }

  beforeEach(() => {
    initializeTestInstance()
  })

  describe('when loadingAllClaimsAndAppeals is set to true', () => {
    it('should show loading screen', async () => {
      initializeTestInstance(true)
      expect(testInstance.findByType(LoadingComponent)).toBeTruthy()
    })
  })

  it('initializes correctly', async () => {
    expect(component).toBeTruthy()
    expect(testInstance.findAllByType(SegmentedControl).length).toEqual(1)
    expect(testInstance.findAllByType(ClaimsAndAppealsListView).length).toEqual(1)
  })

  describe('when claimsServiceError exists but not appealsServiceError', () => {
    it('should display an alertbox specifying claims is unavailable', async () => {
      initializeTestInstance(false, true)
      expect(testInstance.findAllByType(AlertBox).length).toEqual(1)
      expect(testInstance.findAllByType(TextView)[2].props.children).toEqual('Claims status is unavailable')
    })
  })

  describe('when appealsServiceError exists but not claimsServiceError', () => {
    it('should display an alertbox specifying appeals is unavailable', async () => {
      initializeTestInstance(false, false, true)
      expect(testInstance.findAllByType(AlertBox).length).toEqual(1)
      expect(testInstance.findAllByType(TextView)[2].props.children).toEqual('Appeal status is unavailable')
    })
  })

  describe('when there is both a claimsServiceError and an appealsServiceError', () => {
    it('should display an alert and not display the segmented control or the ClaimsAndAppealsListView component', async () => {
      initializeTestInstance(false, true, true)
      expect(testInstance.findAllByType(SegmentedControl).length).toEqual(0)
      expect(testInstance.findAllByType(ClaimsAndAppealsListView).length).toEqual(0)
      expect(testInstance.findAllByType(AlertBox).length).toEqual(1)
      expect(testInstance.findAllByType(TextView)[0].props.children).toEqual('Claims and appeal status are unavailable')
    })
  })
})
