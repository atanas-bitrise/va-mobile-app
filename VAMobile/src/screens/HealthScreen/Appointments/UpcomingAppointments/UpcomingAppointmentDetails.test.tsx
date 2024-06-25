import React from 'react'

import { screen } from '@testing-library/react-native'

import {
  AppointmentPhone,
  AppointmentStatus,
  AppointmentStatusConstants,
  AppointmentStatusDetailType,
  AppointmentStatusDetailTypeConsts,
  AppointmentType,
  AppointmentTypeConstants,
} from 'api/types'
import { context, mockNavProps, render } from 'testUtils'
import { bookedAppointmentsList, canceledAppointmentList } from 'utils/tests/appointments'

import UpcomingAppointmentDetails from './UpcomingAppointmentDetails'

const mockNavigationSpy = jest.fn()
jest.mock('utils/hooks', () => {
  const original = jest.requireActual('utils/hooks')
  return {
    ...original,
    useRouteNavigation: () => mockNavigationSpy,
  }
})

context('UpcomingAppointmentDetails', () => {
  const goBackSpy = jest.fn()
  const navigateSpy = jest.fn()

  const apptPhoneData = {
    areaCode: '123',
    number: '456-7890',
    extension: '',
  }

  const initializeTestInstance = (
    appointmentType: AppointmentType = AppointmentTypeConstants.VA,
    status: AppointmentStatus = AppointmentStatusConstants.BOOKED,
    phoneData: AppointmentPhone | null = apptPhoneData,
    isCovid: boolean = false,
    statusDetail: AppointmentStatusDetailType | null = null,
    hasUrl: boolean = false,
  ): void => {
    const props = mockNavProps(
      undefined,
      { setOptions: jest.fn(), goBack: goBackSpy, navigate: navigateSpy },
      {
        params: {
          appointment:
            status === 'BOOKED'
              ? phoneData === null
                ? bookedAppointmentsList[8]
                : hasUrl
                  ? bookedAppointmentsList[9]
                  : bookedAppointmentsList.filter((obj) => {
                      return obj.attributes.appointmentType === appointmentType &&
                        obj.attributes.isCovidVaccine === isCovid
                        ? true
                        : false
                    })[0]
              : canceledAppointmentList.filter((obj) => {
                  return (
                    obj.attributes.appointmentType === appointmentType && obj.attributes.statusDetail === statusDetail
                  )
                })[0],
        },
      },
    )

    render(<UpcomingAppointmentDetails {...props} />)
  }

  beforeEach(() => {
    initializeTestInstance()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('when the appointment type is community care', () => {
    it('should display the appointment details', () => {
      initializeTestInstance(AppointmentTypeConstants.COMMUNITY_CARE)
      expect(screen.getByText('Community care appointment')).toBeTruthy()
      expect(
        screen.getByText('Other details: Please arrive 20 minutes before the start of your appointment'),
      ).toBeTruthy()
      expect(screen.getByText('If you need to reschedule or cancel this appointment, call your provider.')).toBeTruthy()
    })
  })

  describe('when the status is CANCELLED', () => {
    it('should display the schedule another appointment text', () => {
      initializeTestInstance(
        AppointmentTypeConstants.VA,
        AppointmentStatusConstants.CANCELLED,
        undefined,
        undefined,
        AppointmentStatusDetailTypeConsts.PATIENT,
      )
      expect(screen.getByRole('header', { name: 'Need to reschedule?' })).toBeTruthy()
    })
  })

  describe('when the status is not CANCELLED', () => {
    it('should display the add to calendar click for action link', () => {
      expect(screen.getByText('Add to calendar')).toBeTruthy()
    })
  })

  describe('when the appointment is canceled', () => {
    it('should show if you cancelled', () => {
      initializeTestInstance(
        undefined,
        AppointmentStatusConstants.CANCELLED,
        undefined,
        undefined,
        AppointmentStatusDetailTypeConsts.PATIENT,
      )
      expect(screen.getByText('You canceled this appointment.')).toBeTruthy()
    })

    it('should show if you cancelled (rebook)', () => {
      initializeTestInstance(
        undefined,
        AppointmentStatusConstants.CANCELLED,
        undefined,
        undefined,
        AppointmentStatusDetailTypeConsts.PATIENT_REBOOK,
      )
      expect(screen.getByText('You canceled this appointment.')).toBeTruthy()
    })

    it('should show if facility cancelled', () => {
      initializeTestInstance(
        undefined,
        AppointmentStatusConstants.CANCELLED,
        undefined,
        undefined,
        AppointmentStatusDetailTypeConsts.CLINIC,
      )
      expect(screen.getByText('VA Long Beach Healthcare System canceled this appointment.')).toBeTruthy()
    })

    it('should show if facility cancelled (rebook)', () => {
      initializeTestInstance(
        undefined,
        AppointmentStatusConstants.CANCELLED,
        undefined,
        undefined,
        AppointmentStatusDetailTypeConsts.CLINIC_REBOOK,
      )
      expect(screen.getByText('VA Long Beach Healthcare System canceled this appointment.')).toBeTruthy()
    })
  })
})
