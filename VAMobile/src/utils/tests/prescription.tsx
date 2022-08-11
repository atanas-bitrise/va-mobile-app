import { PrescriptionsList, RefillStatus } from 'store/api/types'

export const defaultPrescriptionsList: PrescriptionsList = [
  {
    attributes: {
      dispensedDate: '2021-09-06T04:00:00.000Z',
      expirationDate: '2022-05-04T04:00:00.000Z',
      facilityName: 'SLC10 TEST LAB',
      instructions: 'TAKE ONE TABLET EVERY DAY FOR 30 DAYS TAKE WITH FOOD',
      isRefillable: true,
      isTrackable: false,
      orderedDate: '2021-05-03T04:00:00.000Z',
      prescriptionName: 'ALLOPURINOL 100MG TAB',
      prescriptionNumber: '3636691',
      quantity: 30,
      refillDate: '2021-09-21T04:00:00.000Z',
      refillRemaining: 1,
      refillStatus: 'activeParked' as RefillStatus,
      refillSubmitDate: '2021-09-08T18:28:22.000Z',
      stationNumber: '979',
    },
    id: '20004342',
    type: 'Prescription',
  },
  {
    attributes: {
      dispensedDate: null,
      expirationDate: '2022-10-28T04:00:00.000Z',
      facilityName: 'SLC10 TEST LAB',
      instructions: 'TAKE ONE-HALF TABLET EVERY DAY FOR 30 DAYS',
      isRefillable: true,
      isTrackable: false,
      orderedDate: '2021-10-27T04:00:00.000Z',
      prescriptionName: 'AMLODIPINE BESYLATE 10MG TAB',
      prescriptionNumber: '3636711A',
      quantity: 15,
      refillDate: '2022-05-15T04:00:00.000Z',
      refillRemaining: 6,
      refillStatus: 'active' as RefillStatus,
      refillSubmitDate: '2022-06-14T19:24:36.000Z',
      stationNumber: '979',
    },
    id: '20280404',
    type: 'Prescription',
  },
]

export const emptyStatePrescriptionList = [
  {
    attributes: {
      dispensedDate: '2022-08-02T04:00:00.000Z',
      expirationDate: '2023-04-27T04:00:00.000Z',
      facilityName: '',
      instructions: '',
      isRefillable: false,
      isTrackable: true,
      orderedDate: '2022-04-26T04:00:00.000Z',
      prescriptionName: 'ALLOPURINOL 100MG TAB',
      prescriptionNumber: '',
      quantity: 30,
      refillDate: null,
      refillStatus: 'active',
      refillSubmitDate: '2022-08-04T13:59:40.000Z',
      stationNumber: '989',
    },
    id: '20004342',
    type: 'Prescription',
  },
]

export const emptyStateTrackingInfoList = [
  {
    attributes: {
      deliveryService: '',
      otherPrescriptions: [],
      prescriptionName: 'ALLOPURINOL 100MG TAB',
      shippedDate: '',
      trackingNumber: '',
    },
    id: '20004342',
    type: 'PrescriptionTracking',
  },
]
