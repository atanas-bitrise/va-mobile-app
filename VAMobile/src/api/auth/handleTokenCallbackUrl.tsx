import { useMutation } from '@tanstack/react-query'

import { handleTokenCallbackParms } from 'api/types'
import { Events } from 'constants/analytics'
import store from 'store'
import { dispatchUpdateEnablePostLogin } from 'store/slices'
import { logAnalyticsEvent, logNonFatalErrorToFirebase } from 'utils/analytics'
import { getCodeVerifier, loginFinish, loginStart, parseCallbackUrlParams, processAuthResponse } from 'utils/auth'
import { isErrorObject } from 'utils/common'
import getEnv from 'utils/env'
import { useAppDispatch } from 'utils/hooks'
import { clearCookies } from 'utils/rnAuthSesson'

import { usePostLoggedIn } from './postLoggedIn'

const { AUTH_SIS_TOKEN_EXCHANGE_URL } = getEnv()

/**
 * Refresh a user access token
 */
const handleTokenCallbackUrl = async (handleTokenCallbackParams: handleTokenCallbackParms): Promise<Response> => {
  const codeVerifier = await getCodeVerifier()
  const { code } = parseCallbackUrlParams(handleTokenCallbackParams.url)
  return fetch(AUTH_SIS_TOKEN_EXCHANGE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code_verifier: codeVerifier || '',
      code,
    }).toString(),
  })
}

/**
 * Returns a mutation for refreshing a user access token
 */
export const useHandleTokenCallbackUrl = () => {
  const { mutate: postLoggedIn } = usePostLoggedIn()
  const dispatch = useAppDispatch()

  return useMutation({
    mutationFn: handleTokenCallbackUrl,
    onMutate: () => {
      loginStart(dispatch, true)
      clearCookies()
    },
    onSettled: () => {
      logAnalyticsEvent(Events.vama_auth_completed())
    },
    onSuccess: async (data) => {
      const authCredentials = await processAuthResponse(data)
      await loginFinish(dispatch, false, authCredentials)
      if (store.getState().auth.enablePostLogin) {
        dispatch(dispatchUpdateEnablePostLogin(false))
        postLoggedIn()
      }
    },
    onError: (error) => {
      if (isErrorObject(error)) {
        logNonFatalErrorToFirebase(error, `handleTokenCallbackUrl: Auth Service Error`)
        if (error.status) {
          logAnalyticsEvent(Events.vama_login_token_fetch(error))
        }
        loginFinish(dispatch, true)
      }
      dispatch(dispatchUpdateEnablePostLogin(true))
    },
  })
}
