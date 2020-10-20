// @ts-nocheck - this is povided and we don't want to have to redeclare it in several places
import {
	API_ROOT,
	AUTH_ALLOW_NON_BIOMETRIC_SAVE,
	AUTH_CLIENT_ID,
	AUTH_CLIENT_SECRET,
	AUTH_ENDPOINT,
	AUTH_REDIRECT_URL,
	AUTH_REVOKE_URL,
	AUTH_SCOPES,
	AUTH_TOKEN_EXCHANGE_URL,
	IS_TEST,
	LINK_URL_COVID19_SCREENING,
	WEBVIEW_URL_CORONA_FAQ,
	WEBVIEW_URL_FACILITY_LOCATOR,
} from '@env'

export type EnvVars = {
	API_ROOT: string
	AUTH_CLIENT_ID: string
	AUTH_CLIENT_SECRET: string
	AUTH_ENDPOINT: string
	AUTH_REDIRECT_URL: string
	AUTH_REVOKE_URL: string
	AUTH_SCOPES: string
	AUTH_TOKEN_EXCHANGE_URL: string
	AUTH_ALLOW_NON_BIOMETRIC_SAVE: string
	IS_TEST: string
	WEBVIEW_URL_CORONA_FAQ: string
	WEBVIEW_URL_FACILITY_LOCATOR: string
	LINK_URL_COVID19_SCREENING: string
}

// need to wrap @env for testing purposes
export default (): EnvVars => ({
	API_ROOT,
	AUTH_CLIENT_ID,
	AUTH_CLIENT_SECRET,
	AUTH_ENDPOINT,
	AUTH_REDIRECT_URL,
	AUTH_REVOKE_URL,
	AUTH_SCOPES,
	AUTH_TOKEN_EXCHANGE_URL,
	AUTH_ALLOW_NON_BIOMETRIC_SAVE,
	IS_TEST,
	WEBVIEW_URL_CORONA_FAQ,
	WEBVIEW_URL_FACILITY_LOCATOR,
	LINK_URL_COVID19_SCREENING,
})
