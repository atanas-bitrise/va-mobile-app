import { UserDataProfile } from 'store/api/types'

export const defaultProfile: UserDataProfile = {
  firstName: 'Ben',
  middleName: 'J',
  lastName: 'Morgan',
  fullName: 'Ben J Morgan',
  contactEmail: { emailAddress: 'ben@gmail.com', id: '0' },
  signinEmail: 'ben@gmail.com',
  birthDate: '1990-05-08',
  gender: 'M',
  addresses: '',
  residentialAddress: {
    id: 1,
    addressLine1: '10 Laurel Way',
    addressPou: 'RESIDENCE/CHOICE',
    addressType: 'DOMESTIC',
    city: 'Novato',
    countryCodeIso3: '1',
    internationalPostalCode: '1',
    province: 'province',
    stateCode: 'CA',
    zipCode: '94920',
    zipCodeSuffix: '1234',
  },
  mailingAddress: {
    id: 2,
    addressLine1: '1707 Tiburon Blvd',
    addressLine2: 'Address line 2',
    addressLine3: 'Address line 3',
    addressPou: 'RESIDENCE/CHOICE',
    addressType: 'DOMESTIC',
    city: 'Tiburon',
    countryCodeIso3: '1',
    internationalPostalCode: '1',
    province: 'province',
    stateCode: 'CA',
    zipCode: '94920',
    zipCodeSuffix: '1234',
  },
  homePhoneNumber: {
    id: 1,
    areaCode: '858',
    countryCode: '1',
    phoneNumber: '6901289',
    phoneType: 'HOME',
  },
  formattedHomePhone: '(858)-690-1289',
  mobilePhoneNumber: {
    id: 1,
    areaCode: '858',
    countryCode: '1',
    phoneNumber: '6901288',
    phoneType: 'HOME',
  },
  formattedMobilePhone: '(858)-690-1288',
  workPhoneNumber: {
    id: 1,
    areaCode: '858',
    countryCode: '1',
    phoneNumber: '6901287',
    phoneType: 'HOME',
  },
  formattedWorkPhone: '(858)-690-1287',
  faxNumber: {
    id: 1,
    areaCode: '858',
    countryCode: '1',
    phoneNumber: '6901286',
    phoneType: 'HOME',
    extension: '11111',
  },
  formattedFaxPhone: '(858)-690-1286',
  signinService: 'IDME',
}
