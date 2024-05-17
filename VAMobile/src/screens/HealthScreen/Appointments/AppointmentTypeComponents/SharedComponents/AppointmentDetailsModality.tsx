import React from 'react'
import { useTranslation } from 'react-i18next'

import { TFunction } from 'i18next'

import { AppointmentAttributes, AppointmentStatusDetailTypeConsts } from 'api/types'
import { Box, TextView } from 'components'
import { NAMESPACE } from 'constants/namespaces'
import { a11yLabelVA } from 'utils/a11yLabel'
import {
  AppointmentDetailsScreenType,
  AppointmentDetailsSubType,
  AppointmentDetailsSubTypeConstants,
  AppointmentDetailsTypeConstants,
} from 'utils/appointments'
import { useTheme } from 'utils/hooks'

type AppointmentDetailsModalityProps = {
  attributes: AppointmentAttributes
  subType: AppointmentDetailsSubType
  type: AppointmentDetailsScreenType
}

const modalityHeader = (subType: AppointmentDetailsSubType, type: AppointmentDetailsScreenType, t: TFunction) => {
  let appointmentHeaderType = ''
  switch (type) {
    case AppointmentDetailsTypeConstants.InPersonVA:
      appointmentHeaderType = t('appointments.inPersonVA.upcomingTitle')
      break
    default:
      appointmentHeaderType = ''
  }

  switch (subType) {
    case AppointmentDetailsSubTypeConstants.CanceledAndPending:
      if (type !== AppointmentDetailsTypeConstants.CommunityCare) {
        return t('appointments.request.canceledTitle')
      } else {
        return ''
      }
    case AppointmentDetailsSubTypeConstants.Canceled:
      return t('appointments.canceledTitle', { appointmentType: appointmentHeaderType.toLowerCase() })
    case AppointmentDetailsSubTypeConstants.Past:
      return t('appointments.pastTitle', { appointmentType: appointmentHeaderType.toLowerCase() })
    case AppointmentDetailsSubTypeConstants.Pending:
    case AppointmentDetailsSubTypeConstants.PastPending:
      if (type !== AppointmentDetailsTypeConstants.CommunityCare) {
        return t('appointments.request.title')
      } else {
        return ''
      }
    case AppointmentDetailsSubTypeConstants.Upcoming:
      return appointmentHeaderType
  }
}

const supportingModalityBody = (
  attributes: AppointmentAttributes,
  subType: AppointmentDetailsSubType,
  type: AppointmentDetailsScreenType,
  t: TFunction,
) => {
  const { healthcareProvider, location, statusDetail } = attributes
  let who = t('appointments.canceled.whoCanceled.you')
  if (
    statusDetail === AppointmentStatusDetailTypeConsts.CLINIC ||
    statusDetail === AppointmentStatusDetailTypeConsts.CLINIC_REBOOK
  ) {
    who = healthcareProvider || location?.name || t('appointments.canceled.whoCanceled.facility')
  }

  switch (subType) {
    case AppointmentDetailsSubTypeConstants.CanceledAndPending:
      return t('appointments.canceled.request', { who })
    case AppointmentDetailsSubTypeConstants.Canceled:
      return t('appointments.pending.cancelled.theTimeAndDate', { who })
    case AppointmentDetailsSubTypeConstants.Past:
      return t('appointments.pastBody')
    case AppointmentDetailsSubTypeConstants.PastPending:
    case AppointmentDetailsSubTypeConstants.Pending:
      return t('appointments.pending.body')
    case AppointmentDetailsSubTypeConstants.Upcoming:
      switch (type) {
        case AppointmentDetailsTypeConstants.InPersonVA:
          return t('appointments.inPersonVA.upcomingBody', {
            facilityName: location?.name || t('prescription.details.vaFacilityHeader'),
          })
        default:
          return ''
      }
  }
}

function AppointmentDetailsModality({ attributes, subType, type }: AppointmentDetailsModalityProps) {
  const { t } = useTranslation(NAMESPACE.COMMON)
  const theme = useTheme()
  const heading = modalityHeader(subType, type, t)
  const body = supportingModalityBody(attributes, subType, type, t)
  const apptBodyA11yLabel = a11yLabelVA(body || '')

  return (
    <Box>
      <TextView variant="MobileBodyBold" accessibilityRole="header" mb={theme.dimensions.condensedMarginBetween}>
        {heading}
      </TextView>
      <TextView variant="MobileBody" mb={theme.dimensions.standardMarginBetween} accessibilityLabel={apptBodyA11yLabel}>
        {body}
      </TextView>
    </Box>
  )
}

export default AppointmentDetailsModality
