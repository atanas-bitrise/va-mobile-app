import AppScreen from './app.screen';

const SELECTORS = {
  CLAIMS_DETAILS_STATUS_SCREEN: '~Claim-status-screen',
  CLAIMS_DETAILS_STATUS_FIND_OUT_BUTTON: '~find-out-why-we-sometimes-combine-claims.',
  CLAIMS_DETAILS_STATUS_WHAT_SHOULD_I_DO_BUTTON: '~what-should-i-do-if-i-disagree-with-your-decision-on-my-va-disability-claim?',
  CLAIMS_DETAILS_STATUS_VIEW_FILE_REQUESTS: '~View File Requests'
};

class ClaimsDetailsStatusScreen extends AppScreen {
  constructor() {
    super(SELECTORS.CLAIMS_DETAILS_STATUS_SCREEN)
  }

  get findOutButton() {
    return $(SELECTORS.CLAIMS_DETAILS_STATUS_FIND_OUT_BUTTON)
  }

  get whatShouldIDoButton() {
    return $(SELECTORS.CLAIMS_DETAILS_STATUS_WHAT_SHOULD_I_DO_BUTTON)
  }

  get viewFileRequestsButton() {
    return $(SELECTORS.CLAIMS_DETAILS_STATUS_VIEW_FILE_REQUESTS)
  }
}

export default new ClaimsDetailsStatusScreen()
