import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import { context, findByTestID, findByTypeWithText, mockNavProps, render, RenderAPI, waitFor, when } from 'testUtils'

import FileRequestDetails from './FileRequestDetails'
import { ClaimEventData } from 'store/api'
import { TextView, VAButton } from 'components'

context('FileRequestDetails', () => {
  let component: RenderAPI
  let testInstance: any
  let props: any
  let mockNavigateToTakeOrSelectPhotoSpy: jest.Mock
  let mockNavigateToSelectFileSpy: jest.Mock

  let request = {
    type: 'still_need_from_you_list',
    date: '2020-07-16',
    status: 'NEEDED',
    uploaded: false,
    uploadsAllowed: true,
    displayName: 'Request 1',
    description: 'Need DD214',
  }

  const mockNavigationSpy = jest.fn()
  jest.mock('../../../../../../utils/hooks', () => {
    const original = jest.requireActual('../../../../../../utils/hooks')
    const theme = jest.requireActual('../../../../../../styles/themes/standardTheme').default
    return {
      ...original,
      useTheme: jest.fn(() => {
        return { ...theme }
      }),
      useRouteNavigation: () => {
        return mockNavigationSpy
      },
    }
  })

  const initializeTestInstance = (request: ClaimEventData) => {
    props = mockNavProps(undefined, { setOptions: jest.fn() }, { params: { request } })

    component = render(<FileRequestDetails {...props} />)

    testInstance = component.container
  }

  beforeEach(() => {
    initializeTestInstance(request)
  })

  it('initializes correctly', async () => {
    expect(component).toBeTruthy()
  })

  describe("when the request hasn't had files uploaded", () => {
    it('should display the select a file and take or select photos buttons', async () => {
      await waitFor(() => {
        const buttons = testInstance.findAllByType(VAButton)
        expect(buttons.length).toEqual(2)
        expect(buttons[0].props.label).toEqual('Select a File')
        expect(buttons[1].props.label).toEqual('Take or Select Photos')
      })
    })

    it('should display request title and description', async () => {
      await waitFor(() => {
        expect(findByTypeWithText(testInstance, TextView, 'Request 1')).toBeTruthy()
        expect(findByTypeWithText(testInstance, TextView, 'Need DD214')).toBeTruthy()
      })
    })
  })
})
