import { RootState } from 'store'
import { initialAccessibilityState } from 'store/slices/accessibilitySlice'
import { initialAnalyticsState } from 'store/slices/analyticsSlice'
import { initialAppointmentsState } from 'store/slices/appointmentsSlice'
import { initialAuthState } from 'store/slices/authSlice'
import { initialClaimsAndAppealsState } from 'store/slices/claimsAndAppealsSlice'
import { initialDemoState } from 'store/slices/demoSlice'
import { initialErrorsState } from 'store/slices/errorSlice'
import { initialNotificationsState } from 'store/slices/notificationSlice'
import { initialSecureMessagingState } from 'store/slices/secureMessagingSlice'
import { initialSettingsState } from 'store/slices/settingsSlice'
import { initialSnackBarState } from 'store/slices/snackBarSlice'

import { initialDecisionLettersState } from './decisionLettersSlice'
import { initialPrescriptionState } from './prescriptionSlice'

export * from './accessibilitySlice'
export * from './analyticsSlice'
export * from './appointmentsSlice'
export * from './authSlice'
export * from './claimsAndAppealsSlice'
export * from './errorSlice'
export * from './notificationSlice'
export * from './secureMessagingSlice'
export * from './snackBarSlice'
export * from './prescriptionSlice'
export * from './settingsSlice'

export const InitialState: RootState = {
  auth: initialAuthState,
  decisionLetters: initialDecisionLettersState,
  appointments: initialAppointmentsState,
  claimsAndAppeals: initialClaimsAndAppealsState,
  errors: initialErrorsState,
  accessibility: initialAccessibilityState,
  notifications: initialNotificationsState,
  secureMessaging: initialSecureMessagingState,
  demo: initialDemoState,
  analytics: initialAnalyticsState,
  snackBar: initialSnackBarState,
  prescriptions: initialPrescriptionState,
  settings: initialSettingsState,
}
