import 'react-native'
import React from 'react'

import renderer, { act } from 'react-test-renderer'

import { context, mockStore, TestProviders } from 'testUtils'

import App, { AuthedApp, AuthGuard } from './App'
import { Linking } from 'react-native'
import { handleTokenCallbackUrl } from 'store/actions/auth'
import { LOGIN_PROMPT_TYPE } from 'store/types'
import UnlockScreen from 'screens/auth/UnlockScreen'
import LoginScreen from 'screens/auth/LoginScreen'

jest.mock("./store/actions/auth", () => ({
	handleTokenCallbackUrl: jest.fn(() => ({ type: "FOO" })),
	initializeAuth: jest.fn(() => ({ type: "FOO" })),
}))

context('App', () => {
	it('initializes correctly', async () => {
		jest.mock("./store", () => ({
			...(jest.requireActual("./store") as any),
			configureStore: () => ({
				subscribe: jest.fn(),
				dispatch: jest.fn(),
				getState: jest.fn(),
			})
		}))

		let component: any
		act(() => {
			component = renderer.create(<App />)
		})
		expect(component).toBeTruthy()
	})

	describe("AuthGuard", () => {
		it("should initilize by registering for linking", async () => {
			let store = mockStore({
				tabBar: { tabBarVisible: true },
				auth: { initializing: true, loggedIn: false, loading: false },
			});
			let component: any
			act(() => {
				component = renderer.create(
					<TestProviders store={store}>
						<AuthGuard />
					</TestProviders>
				)
			})
			expect(component).toBeTruthy()
			expect(Linking.addEventListener).toHaveBeenCalled()
		})

		it("should dispatch handleTokenCallbackUrl when auth token result comes back", async () => {
			let component: any = undefined

			let store = mockStore({
				tabBar: { tabBarVisible: true },
				auth: { initializing: true, loggedIn: false, loading: false },
			});
			act(() => {
				component = renderer.create(
					<TestProviders store={store}>
						<AuthGuard />
					</TestProviders>
				)
				expect(component).toBeTruthy()
			})
			expect(Linking.addEventListener).toHaveBeenCalled()
			let spy = Linking.addEventListener as jest.Mock
			let listeners = spy.mock.calls

			act(() => {
				listeners.forEach((k) => {
					let listener = k[1]
					listener({ url: 'vamobile://login-success?code=123&state=5434' })
				})
			})

			expect(handleTokenCallbackUrl).toHaveBeenCalled()
		})


		it("should not dispatch handleTokenCallbackUrl when not an auth result url", async () => {
			let component: any = undefined

			let store = mockStore({
                tabBar: { tabBarVisible: true },
				auth: { initializing: true, loggedIn: false, loading: false },
			});
			act(() => {
				component = renderer.create(
					<TestProviders store={store}>
						<AuthGuard />
					</TestProviders>
				)
				expect(component).toBeTruthy()
			})
			expect(Linking.addEventListener).toHaveBeenCalled()
			let spy = Linking.addEventListener as jest.Mock
			let listeners = spy.mock.calls

			act(() => {
				listeners.forEach((k) => {
					let listener = k[1]
					listener({ url: 'vamobile://foo?code=123&state=5434' })
				})
			})

			expect(handleTokenCallbackUrl).not.toHaveBeenCalled()
		})

		it("should render Login when not authorized", async () => {
			let store = mockStore({
                tabBar: { tabBarVisible: true },
				auth: { initializing: true, loggedIn: false, loading: false },
			})
			let component: any
			act(() => {
				component = renderer.create(
					<TestProviders store={store}>
						<AuthGuard />
					</TestProviders>
				)
			})
			expect(component).toBeTruthy()
			expect(component.root.findByType(LoginScreen)).toBeTruthy()
		})

		it("should render Unlock when not biometric saved refresh token exists", async () => {
			let store = mockStore({
				auth: { initializing: true, loggedIn: false, loading: false, loginPromptType: LOGIN_PROMPT_TYPE.UNLOCK },
			})
			let component: any
			act(() => {
				component = renderer.create(
					<TestProviders store={store}>
						<AuthGuard />
					</TestProviders>
				)
			})
			expect(component.root.findByType(UnlockScreen)).toBeTruthy()
		})

		it("should render AuthedApp when authorized", async () => {
			let store = mockStore({
                tabBar: { tabBarVisible: true },
				auth: { initializing: true, loggedIn: true, loading: false },
			});
			let component: any
			act(() => {
				component = renderer.create(
					<TestProviders store={store}>
						<AuthGuard />
					</TestProviders>
				)
			})
			expect(component.root.findByType(AuthedApp)).toBeTruthy()
		})


	})
})
