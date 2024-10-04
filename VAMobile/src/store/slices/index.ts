import { RootState } from 'store'
import { initialAccessibilityState } from 'store/slices/accessibilitySlice'
import { initialAnalyticsState } from 'store/slices/analyticsSlice'
import { initialDemoState } from 'store/slices/demoSlice'
import { initialErrorsState } from 'store/slices/errorSlice'
import { initialSettingsState } from 'store/slices/settingsSlice'
import { initialSnackBarState } from 'store/slices/snackBarSlice'

export * from './accessibilitySlice'
export * from './analyticsSlice'
export * from './errorSlice'
export * from './snackBarSlice'
export * from './settingsSlice'

export const InitialState: RootState = {
  errors: initialErrorsState,
  accessibility: initialAccessibilityState,
  demo: initialDemoState,
  analytics: initialAnalyticsState,
  snackBar: initialSnackBarState,
  settings: initialSettingsState,
}
