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
  LINK_URL_IRIS_CUSTOMER_HELP,
  LINK_URL_VETERANS_CRISIS_LINE,
  LINK_URL_VETERANS_CRISIS_LINE_GET_HELP,
  SHOW_DEBUG_MENU,
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
  SHOW_DEBUG_MENU: string
  IS_TEST: string
  WEBVIEW_URL_CORONA_FAQ: string
  WEBVIEW_URL_FACILITY_LOCATOR: string
  LINK_URL_COVID19_SCREENING: string
  LINK_URL_VETERANS_CRISIS_LINE: string
  LINK_URL_VETERANS_CRISIS_LINE_GET_HELP: string
  LINK_URL_IRIS_CUSTOMER_HELP: string
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
  SHOW_DEBUG_MENU,
  IS_TEST,
  WEBVIEW_URL_CORONA_FAQ,
  WEBVIEW_URL_FACILITY_LOCATOR,
  LINK_URL_COVID19_SCREENING,
  LINK_URL_VETERANS_CRISIS_LINE,
  LINK_URL_VETERANS_CRISIS_LINE_GET_HELP,
  LINK_URL_IRIS_CUSTOMER_HELP,
})
