import AppScreen from './app.screen';

const SELECTORS = {
  PERSONAL_INFORMATION_SCREEN: '~Personal-information-screen',
  PERSONAL_INFORMATION_HEADER: '~personal-information',
  PERSONAL_INFORMATION_ADDRESSES_HEADER: '~addresses',
  PERSONAL_INFORMATION_PHONE_NUMBERS_HEADER: '~phone-numbers',
  PERSONAL_INFORMATION_CONTACT_EMAIL_HEADER: '~contact-email-address',
  PERSONAL_INFORMATION_HOW_DO_I_UPDATE: '~how-do-i-update-my-personal-information?',
  PERSONAL_INFORMATION_HOW_WILL_YOU: '~how-will-you-use-my-contact-information?',
  PERSONAL_INFORMATION_HOME_NUMBER: '~home-please-add-your-home-phone-number', // TODO: update this when mock service is set up
  PERSONAL_INFORMATION_ADD_EMAIL: '~email-address-please-add-your-email-address',
  PERSONAL_INFORMATION_EMAIL: '~email-address-',
  PERSONAL_INFORMATION_ADD_MAILING_ADDRESS: '~mailing-address-please-add-your-mailing-address',
  PERSONAL_INFORMATION_ADD_RESIDENTIAL_ADDRESS: '~residential-address-please-add-your-residential-address'
};

class PersonalInformationScreen extends AppScreen {
  constructor() {
    super(SELECTORS.PERSONAL_INFORMATION_SCREEN)
  }

  get personalInformationHeader () {
    return $(SELECTORS.PERSONAL_INFORMATION_HEADER)
  }

  get personalInformationAddressesHeader () {
    return $(SELECTORS.PERSONAL_INFORMATION_ADDRESSES_HEADER)
  }

  get personalInformationPhoneNumbersHeader () {
    return $(SELECTORS.PERSONAL_INFORMATION_PHONE_NUMBERS_HEADER)
  }

  get personalInformationContactEmailHeader () {
    return $(SELECTORS.PERSONAL_INFORMATION_CONTACT_EMAIL_HEADER)
  }

  get personalInformationHowDoIUpdateLink () {
    return $(SELECTORS.PERSONAL_INFORMATION_HOW_DO_I_UPDATE)
  }

  get personalInformationHowWillYouLink () {
    return $(SELECTORS.PERSONAL_INFORMATION_HOW_WILL_YOU)
  }

  get personalInformationHomeNumber () {
    return $(SELECTORS.PERSONAL_INFORMATION_HOME_NUMBER)
  }

  personalInformationEmailEdit(user?: string) {
    return user ? $(SELECTORS.PERSONAL_INFORMATION_EMAIL + user) : $(SELECTORS.PERSONAL_INFORMATION_ADD_EMAIL)
  }

  get personalInformationMailingAddressEdit() {
    return $(SELECTORS.PERSONAL_INFORMATION_ADD_MAILING_ADDRESS)
  }

  get personalInformationResidentialAddressEdit() {
    return $(SELECTORS.PERSONAL_INFORMATION_ADD_RESIDENTIAL_ADDRESS)
  }
}

export default new PersonalInformationScreen();
