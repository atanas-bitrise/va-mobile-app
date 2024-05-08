import React from 'react'
import { useTranslation } from 'react-i18next'

import { AppointmentAttributes } from 'api/types'
import { Box, TextView } from 'components'
import { NAMESPACE } from 'constants/namespaces'
import { AppointmentDetailsSubType, AppointmentDetailsSubTypeConstants } from 'utils/appointments'
import { useTheme } from 'utils/hooks'

type AppointmentPersonalContactInfoProps = {
  attributes: AppointmentAttributes
  subType: AppointmentDetailsSubType
}

function AppointmentPersonalContactInfo({ attributes, subType }: AppointmentPersonalContactInfoProps) {
  const theme = useTheme()
  const { t } = useTranslation(NAMESPACE.COMMON)
  const { patientEmail, patientPhoneNumber, bestTimeToCall } = attributes || ({} as AppointmentAttributes)

  switch (subType) {
    case AppointmentDetailsSubTypeConstants.CanceledAndPending:
    case AppointmentDetailsSubTypeConstants.Pending:
      return (
        <Box>
          {(!!patientEmail || !!patientPhoneNumber || !!bestTimeToCall?.length) && (
            <TextView variant="MobileBodyBold" accessibilityRole="header" mb={theme.dimensions.standardMarginBetween}>
              {t('appointments.pending.yourContactDetails')}
            </TextView>
          )}
          {!!patientEmail && (
            <TextView
              variant="MobileBodyBold"
              mb={!!patientPhoneNumber || !!bestTimeToCall?.length ? theme.dimensions.standardMarginBetween : undefined}
              paragraphSpacing={!!patientPhoneNumber || !!bestTimeToCall?.length ? undefined : true}>
              {`${t('email')}: `}
              <TextView variant="MobileBody">{patientEmail}</TextView>
            </TextView>
          )}
          {!!patientPhoneNumber && (
            <TextView
              variant="MobileBodyBold"
              mb={bestTimeToCall?.length ? theme.dimensions.standardMarginBetween : undefined}
              paragraphSpacing={bestTimeToCall?.length ? undefined : true}>
              {`${t('phoneNumber')}: `}
              <TextView variant="MobileBody">{patientPhoneNumber}</TextView>
            </TextView>
          )}
          {!!bestTimeToCall?.length && (
            <TextView variant="MobileBodyBold" paragraphSpacing={true}>
              {t('appointments.bestTimeToCall')}
              <TextView variant="MobileBody">{bestTimeToCall?.join()}</TextView>
            </TextView>
          )}
        </Box>
      )
    default:
      return <></>
  }
}

export default AppointmentPersonalContactInfo
