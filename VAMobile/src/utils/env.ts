// @ts-nocheck - this is provided and we don't want to have to redeclare it in several places
import {
  API_ROOT,
  APPLE_STORE_LINK,
  AUTH_IAM_CLIENT_ID,
  AUTH_IAM_CLIENT_SECRET,
  AUTH_IAM_ENDPOINT,
  AUTH_IAM_REDIRECT_URL,
  AUTH_IAM_REVOKE_URL,
  AUTH_IAM_SCOPES,
  AUTH_IAM_TOKEN_EXCHANGE_URL,
  AUTH_IAM_TOKEN_REFRESH_URL,
  AUTH_SIS_ENDPOINT,
  AUTH_SIS_REVOKE_URL,
  AUTH_SIS_TOKEN_EXCHANGE_URL,
  AUTH_SIS_TOKEN_REFRESH_URL,
  CARRIER_TRACKING_URL_DHL,
  CARRIER_TRACKING_URL_FEDEX,
  CARRIER_TRACKING_URL_UPS,
  CARRIER_TRACKING_URL_USPS,
  DEMO_PASSWORD,
  ENVIRONMENT,
  GOOGLE_PLAY_LINK,
  IS_TEST,
  LINK_URL_ABOUT_DISABILITY_RATINGS,
  LINK_URL_ASK_VA_GOV,
  LINK_URL_CLAIM_APPEAL_STATUS,
  LINK_URL_COMPENSATION_CLAIM_EXAM,
  LINK_URL_DECISION_REVIEWS,
  LINK_URL_GO_TO_MY_HEALTHEVET,
  LINK_URL_GO_TO_PATIENT_PORTAL,
  LINK_URL_GO_TO_VA_GOV,
  LINK_URL_PRIVACY_POLICY,
  LINK_URL_SCHEDULE_APPOINTMENTS,
  LINK_URL_UPGRADE_MY_HEALTHEVET_PREMIUM_ACCOUNT,
  LINK_URL_VETERANS_CRISIS_LINE,
  LINK_URL_VETERANS_CRISIS_LINE_GET_HELP,
  LINK_URL_YOUR_CLAIMS,
  SHOW_DEBUG_MENU,
  WEBVIEW_URL_CORONA_FAQ,
  WEBVIEW_URL_FACILITY_LOCATOR,
} from '@env'

export type EnvVars = {
  API_ROOT: string
  APPLE_STORE_LINK: string
  AUTH_IAM_CLIENT_ID: string
  AUTH_IAM_CLIENT_SECRET: string
  AUTH_IAM_ENDPOINT: string
  AUTH_IAM_REDIRECT_URL: string
  AUTH_IAM_REVOKE_URL: string
  AUTH_IAM_SCOPES: string
  AUTH_IAM_TOKEN_EXCHANGE_URL: string
  AUTH_SIS_ENDPOINT: string
  AUTH_SIS_REVOKE_URL: string
  AUTH_SIS_TOKEN_EXCHANGE_URL: string
  AUTH_SIS_TOKEN_REFRESH_URL: string
  CARRIER_TRACKING_URL_DHL: string
  CARRIER_TRACKING_URL_FEDEX: string
  CARRIER_TRACKING_URL_UPS: string
  CARRIER_TRACKING_URL_USPS: string
  DEMO_PASSWORD: string
  ENVIRONMENT: string
  GOOGLE_PLAY_LINK: string
  IS_TEST: boolean
  LINK_URL_ABOUT_DISABILITY_RATINGS: string
  LINK_URL_ASK_VA_GOV: string
  LINK_URL_CLAIM_APPEAL_STATUS: string
  LINK_URL_COMPENSATION_CLAIM_EXAM: string
  LINK_URL_DECISION_REVIEWS: string
  LINK_URL_GO_TO_MY_HEALTHEVET: string
  LINK_URL_GO_TO_PATIENT_PORTAL: string
  LINK_URL_GO_TO_VA_GOV: string
  LINK_URL_PRIVACY_POLICY: string
  LINK_URL_SCHEDULE_APPOINTMENTS: string
  LINK_URL_UPGRADE_MY_HEALTHEVET_PREMIUM_ACCOUNT: string
  LINK_URL_VETERANS_CRISIS_LINE_GET_HELP: string
  LINK_URL_VETERANS_CRISIS_LINE: string
  LINK_URL_YOUR_CLAIMS: string
  SHOW_DEBUG_MENU: boolean
  WEBVIEW_URL_CORONA_FAQ: string
  WEBVIEW_URL_FACILITY_LOCATOR: string
}

// need to wrap @env for testing purposes
export default (): EnvVars => ({
  API_ROOT,
  APPLE_STORE_LINK,
  AUTH_IAM_CLIENT_ID,
  AUTH_IAM_CLIENT_SECRET,
  AUTH_IAM_ENDPOINT,
  AUTH_IAM_REDIRECT_URL,
  AUTH_IAM_REVOKE_URL,
  AUTH_IAM_SCOPES,
  AUTH_IAM_TOKEN_EXCHANGE_URL,
  AUTH_IAM_TOKEN_REFRESH_URL,
  AUTH_SIS_ENDPOINT,
  AUTH_SIS_REVOKE_URL,
  AUTH_SIS_TOKEN_EXCHANGE_URL,
  AUTH_SIS_TOKEN_REFRESH_URL,
  CARRIER_TRACKING_URL_DHL,
  CARRIER_TRACKING_URL_FEDEX,
  CARRIER_TRACKING_URL_UPS,
  CARRIER_TRACKING_URL_USPS,
  DEMO_PASSWORD,
  ENVIRONMENT,
  GOOGLE_PLAY_LINK,
  IS_TEST: IS_TEST === 'true',
  LINK_URL_ABOUT_DISABILITY_RATINGS,
  LINK_URL_ASK_VA_GOV,
  LINK_URL_CLAIM_APPEAL_STATUS,
  LINK_URL_COMPENSATION_CLAIM_EXAM,
  LINK_URL_DECISION_REVIEWS,
  LINK_URL_GO_TO_MY_HEALTHEVET,
  LINK_URL_GO_TO_PATIENT_PORTAL,
  LINK_URL_GO_TO_VA_GOV,
  LINK_URL_PRIVACY_POLICY,
  LINK_URL_SCHEDULE_APPOINTMENTS,
  LINK_URL_UPGRADE_MY_HEALTHEVET_PREMIUM_ACCOUNT,
  LINK_URL_VETERANS_CRISIS_LINE_GET_HELP,
  LINK_URL_VETERANS_CRISIS_LINE,
  LINK_URL_YOUR_CLAIMS,
  SHOW_DEBUG_MENU: SHOW_DEBUG_MENU === 'true',
  WEBVIEW_URL_CORONA_FAQ,
  WEBVIEW_URL_FACILITY_LOCATOR,
})
