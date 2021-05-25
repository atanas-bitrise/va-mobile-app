import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import 'jest-styled-components'
import { ReactTestInstance, act } from 'react-test-renderer'

import {context, mockNavProps, renderWithProviders} from 'testUtils'
import {TouchableWithoutFeedback} from "react-native";
import {
    updateSecureMessagingTab
} from "store";
import ReplyTriageErrorScreen from "./ReplyTriageErrorScreen";

let mockNavigationSpy = jest.fn()
jest.mock('utils/hooks', () => {
    let original = jest.requireActual("utils/hooks")
    return {
        ...original,
        useRouteNavigation: () => { return () => mockNavigationSpy},
    }
})

jest.mock('store/actions', () => {
    let actual = jest.requireActual('store/actions')
    return {
        ...actual,
        updateSecureMessagingTab: jest.fn(() => {
            return {
                type: '',
                payload: ''
            }
        }),
    }
})

context('ReplyTriageErrorScreen', () => {
    let component: any
    let testInstance: ReactTestInstance
    let props: any
    let navigate: jest.Mock

    const initializeTestInstance = () => {
        navigate = jest.fn()

        props = mockNavProps(undefined, {
            setOptions: navigate,
        }, { params: {} })

        act(() => {
            component = renderWithProviders(<ReplyTriageErrorScreen {...props}/>)
        })

        testInstance = component.root
    }

    beforeEach(() =>{
        initializeTestInstance()
    })

    it('initializes correctly', async () => {
        expect(component).toBeTruthy()
    })

    describe('on click of the crisis line banner', () => {
        it('should call useRouteNavigation', async () => {
            testInstance.findByType(TouchableWithoutFeedback).props.onPress()
            expect(mockNavigationSpy).toHaveBeenCalled()
        })
    })

    describe('on click of the go to inbox button', () => {
        it('should call useRouteNavigation and updateSecureMessagingTab', async () => {
            testInstance.findByProps({label: 'Go to Inbox'}).props.onPress()
            expect(navigate).toHaveBeenCalled()
            expect(updateSecureMessagingTab).toHaveBeenCalled()
        })
    })
})
