import React from 'react'

import { UseMutateFunction } from '@tanstack/react-query'

import { AppointmentAttributes } from 'api/types'
import { Box, TextArea } from 'components'
import { AppointmentDetailsSubType, AppointmentDetailsTypeConstants } from 'utils/appointments'

import {
  AppointmentCalendarButton,
  AppointmentCancelReschedule,
  AppointmentDateAndTime,
  AppointmentDetailsModality,
  AppointmentJoinSessionPrepareForVideo,
  AppointmentLocation,
  AppointmentPersonalContactInfo,
  AppointmentPreferredModality,
  AppointmentProvider,
  AppointmentReasonAndComment,
  AppointmentTypeOfCare,
} from './SharedComponents'

type VideoHomeAppointmentProps = {
  appointmentID: string
  attributes: AppointmentAttributes
  subType: AppointmentDetailsSubType
  goBack: () => void
  cancelAppointment?: UseMutateFunction<unknown, Error, string, unknown>
}

function VideoHomeAppointment({
  appointmentID,
  attributes,
  subType,
  goBack,
  cancelAppointment,
}: VideoHomeAppointmentProps) {
  const type = AppointmentDetailsTypeConstants.VideoHome
  return (
    <Box>
      <TextArea>
        <AppointmentDetailsModality attributes={attributes} subType={subType} type={type} />
        <AppointmentJoinSessionPrepareForVideo attributes={attributes} subType={subType} type={type} />
        <AppointmentDateAndTime attributes={attributes} subType={subType} />
        <AppointmentCalendarButton
          appointmentID={appointmentID}
          attributes={attributes}
          subType={subType}
          type={type}
        />
        <AppointmentTypeOfCare attributes={attributes} subType={subType} type={type} />
        <AppointmentPreferredModality subType={subType} type={type} />
        <AppointmentProvider attributes={attributes} subType={subType} type={type} />
        <AppointmentLocation attributes={attributes} subType={subType} type={type} />
        <AppointmentReasonAndComment attributes={attributes} subType={subType} type={type} />
        <AppointmentPersonalContactInfo attributes={attributes} subType={subType} />
        <AppointmentCancelReschedule
          appointmentID={appointmentID}
          attributes={attributes}
          subType={subType}
          type={type}
          goBack={goBack}
          cancelAppointment={cancelAppointment}
        />
      </TextArea>
    </Box>
  )
}

export default VideoHomeAppointment
