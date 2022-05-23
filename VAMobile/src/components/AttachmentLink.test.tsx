import 'react-native'
import { ActivityIndicator, Pressable } from 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import 'jest-styled-components'
import Mock = jest.Mock
import LottieView from 'lottie-react-native'

import { context, render, RenderAPI, waitFor } from 'testUtils'
import { TextView } from './index'
import AttachmentLink from './AttachmentLink'
import { ReactTestInstance } from 'react-test-renderer'

context('AttachmentLink', () => {
  let component: RenderAPI
  let testInstance: ReactTestInstance
  let onPressSpy: Mock

  const initializeTestInstance = () => {
    onPressSpy = jest.fn(() => {})
    component = render(<AttachmentLink name={'Test.png'} formattedSize={'(234 KB)'} onPress={onPressSpy} load={true} />)
    testInstance = component.container
  }

  beforeEach(() => {
    initializeTestInstance()
  })

  it('initializes correctly', async () => {
    expect(component).toBeTruthy()
  })

  it('should call onPress', async () => {
    await waitFor(() => {
      testInstance.findByType(Pressable).props.onPress()
      expect(onPressSpy).toBeCalled()
    })
  })

  it('should render text as "Test.png (234 KB)"', async () => {
    const texts = testInstance.findAllByType(TextView)
    expect(texts.length).toBe(1)
    expect(texts[0].props.children).toBe('Test.png (234 KB)')
  })

  it('should render va spinner if load is true', async () => {
    const loader = testInstance.findAllByType(LottieView)
    expect(loader.length).toBe(1)
  })
})
