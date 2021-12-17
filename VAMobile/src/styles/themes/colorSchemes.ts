import colors from './VAColors'
export const primaryTextColor = colors.grayDark

export const lightTheme = {
  background: {
    main: colors.grayLightest,
    footerButtonActive: colors.primaryDarkest,
    textBox: colors.white,
    textBoxInactive: colors.white,
    list: colors.white,
    listActive: colors.primaryAltLightest,
    segmentedController: colors.grayLighter,
    shadow: colors.grayMedium,
    profileBanner: colors.primary,
    ctaButton: colors.crisisLineRed,
    covid19Vaccinations: colors.primary,
    completedPhase: colors.greenDarker,
    currentPhase: colors.primary,
    upcomingPhase: colors.grayLight,
    splashScreen: colors.primaryDarker,
    carousel: colors.primaryDark,
    covid19VaccinationsActive: colors.primaryDarkest,
    unreadMessagesTag: colors.grayDark,
    navHeader: colors.primaryDarker,
    modalOverlay: colors.base,
    pickerSelectedItem: colors.primaryAltLightest,
    navButton: colors.toolbarBackgroundGray,
    brandedMainBackground: colors.grayLightest,
    carouselTab: colors.white,
    contentBox: colors.grayLightest,
    snackbar: colors.snackBarBlack,
    webviewControls: colors.grayLightest,
  },
  alertBox: {
    cardBackground: colors.grayLightest,
    noCardBackground: colors.white,
  },
  border: {
    primary: colors.grayLight,
    secondary: colors.primary,
    informational: colors.primaryAltDark,
    error: colors.secondaryDark,
    warning: colors.warningMessage,
    phaseIndicatorCurrent: colors.primaryDarkest,
    phaseIndicatorUpcoming: colors.grayLight,
    success: colors.green,
    primaryDarkest: colors.primaryDarkest,
    pickerAndInput: colors.gray,
    focusedPickerAndInput: colors.primaryDarker,
    confirmation: colors.goldLight,
  },
  icon: {
    footerButton: colors.primary,
    footerButtonActive: colors.white,
    link: colors.primary, //'#0071bb',
    nav: colors.linkDefault, //'#004795',
    largeNav: colors.primary,
    disclosure: colors.grayLight,
    success: colors.green, //'#2E8540',
    error: colors.secondaryDark, //'#CD2026',
    active: colors.primaryDarker, //'#003E73',
    inactive: colors.primary,
    contrast: colors.white,
    expandCollapse: colors.black,
    checkboxEnabledPrimary: colors.primary,
    checkboxDisabled: colors.grayMedium,
    checkboxDisabledContrast: colors.white,
    spinner: colors.grayMedium,
    dark: colors.black,
    covid19Vaccinations: colors.white,
    grayDark: colors.grayDark,
    pagination: colors.white,
    chevronCollapsible: colors.primary,
    chevronListItem: colors.primary,
  },
  text: {
    footerButton: colors.primary,
    footerButtonActive: colors.white,
    navBar: colors.white,
    primary: primaryTextColor,
    primaryTitle: primaryTextColor,
    primaryContrast: colors.white,
    primaryContrastDisabled: colors.grayLight,
    secondary: colors.black,
    error: colors.secondaryDark, //'#CD2026',
    link: colors.linkDefault,
    placeholder: colors.grayMedium, //#757575
    checkboxDisabled: colors.grayMedium,
    covid19Vaccinations: colors.white,
    claimPhase: colors.white,
    input: colors.black,
    inputFocused: colors.black,
    inputRequired: primaryTextColor,
    brandedPrimaryText: colors.grayDark,
    segmentControllerActive: colors.black,
    segmentControllerInactive: colors.black,
    snackBarBtn: colors.darkmodeLightBlue,
  },
  buttonBackground: {
    buttonPrimary: colors.primary,
    buttonPrimaryActive: colors.primaryDarkest,
    buttonSecondary: colors.white,
    buttonSecondaryActive: colors.primaryAltLightest,
    buttonImportant: colors.white,
    buttonImportantActive: colors.white,
    buttonDisabled: colors.grayMedium,
    buttonSecondaryDisabled: colors.grayLight,
    buttonWhite: colors.white,
    buttonWhiteActive: colors.whiteWith70PercentOpacity,
    brandedPrimary: colors.primary,
    brandedPrimaryActive: colors.primaryDarkest,
  },
  buttonText: {
    buttonPrimary: colors.white,
    buttonSecondary: colors.primaryDarker,
    buttonDisabled: colors.white,
    buttonImportant: colors.secondaryDark,
    buttonWhite: colors.primaryDarker,
    brandedPrimary: colors.white,
  },
  buttonBorder: {
    buttonSecondary: colors.primary,
    buttonSecondaryActive: colors.primaryDarkest,
    buttonImportant: colors.secondaryDark,
    buttonImportantActive: colors.secondaryDarkest,
    brandedPrimary: colors.primary,
    brandedPrimaryActive: colors.primaryDarkest,
  },
  control: {
    tintColor: colors.primary,
    switchOnTrack: colors.primary,
    switchOffTrack: colors.grayLight,
    switchOnThumb: colors.white,
    switchOffThumb: colors.grayLightest,
  },
  segmentedControl: {
    buttonActive: colors.white,
    buttonInactive: colors.grayLighter,
  },
  selectCopyText: colors.primaryAltLight,
}

export const darkTheme = {
  background: {
    main: colors.darkmodeGrayDark,
    footerButtonActive: colors.primaryDarkest,
    textBox: colors.base,
    textBoxInactive: colors.darkmodeGrayDark,
    list: colors.base,
    listActive: colors.base,
    segmentedController: colors.darkmodeGrayWarmDark,
    shadow: colors.grayMedium,
    profileBanner: colors.darkmodeLightBlue,
    ctaButton: colors.crisisLineRed,
    covid19Vaccinations: colors.primary,
    completedPhase: colors.greenLight,
    currentPhase: colors.darkmodeLightBlue,
    upcomingPhase: colors.darkmodeBorder,
    splashScreen: colors.primaryDarker,
    carousel: colors.primaryDark,
    covid19VaccinationsActive: colors.primaryDarkest,
    unreadMessagesTag: colors.grayDark,
    navHeader: colors.base,
    modalOverlay: colors.base,
    pickerSelectedItem: colors.primaryAltLightest,
    navButton: colors.base,
    brandedMainBackground: colors.grayLightest,
    carouselTab: colors.white,
    contentBox: colors.darkmodeGrayWarmDark,
    snackbar: colors.snackBarBlack,
    webviewControls: colors.base,
  },
  alertBox: {
    cardBackground: colors.darkmodeGrayWarmDark,
    noCardBackground: colors.base,
  },
  border: {
    primary: colors.darkmodeBorder,
    secondary: colors.gray,
    informational: colors.darkmodeLightBlue,
    error: colors.secondaryDark,
    warning: colors.warningMessage,
    phaseIndicatorCurrent: colors.darkmodeLightBlue,
    phaseIndicatorUpcoming: colors.darkmodeBorder,
    success: colors.greenLight,
    primaryDarkest: colors.primaryDarkest,
    pickerAndInput: colors.gray,
    focusedPickerAndInput: colors.gold,
    confirmation: colors.gold,
  },
  icon: {
    footerButton: colors.primary,
    footerButtonActive: colors.white,
    link: colors.primary, //'#0071bb',
    nav: colors.darkmodeLightBlue, //'#004795',
    largeNav: colors.darkmodeLightBlue,
    disclosure: colors.grayLight,
    success: colors.green, //'#2E8540',
    error: colors.secondaryDark, //'#CD2026',
    active: colors.darkmodeLightBlue,
    inactive: colors.grayLight,
    contrast: colors.white,
    expandCollapse: colors.black,
    checkboxEnabledPrimary: colors.primary,
    checkboxDisabled: colors.grayMedium,
    checkboxDisabledContrast: colors.white,
    spinner: colors.grayMedium,
    dark: colors.black,
    covid19Vaccinations: colors.white,
    grayDark: colors.grayDark,
    pagination: colors.white,
    chevronCollapsible: colors.primary,
    chevronListItem: colors.darkmodeLightBlue,
  },
  text: {
    footerButton: colors.grayLight,
    footerButtonActive: colors.white,
    navBar: colors.grayLightest,
    primary: colors.grayLighter,
    primaryTitle: colors.grayLightest,
    primaryContrast: colors.grayLightest,
    primaryContrastDisabled: colors.grayLight,
    secondary: colors.grayLight,
    error: colors.secondaryDark, //'#CD2026',
    link: colors.darkmodeLightBlue,
    placeholder: colors.grayLight,
    checkboxDisabled: colors.grayMedium,
    covid19Vaccinations: colors.white,
    claimPhase: colors.white,
    input: colors.grayLight,
    inputFocused: colors.grayLightest,
    inputRequired: colors.grayLightest,
    brandedPrimaryText: colors.grayDark,
    segmentControllerActive: colors.grayLightest,
    segmentControllerInactive: colors.grayCoolLight,
    snackBarBtn: colors.darkmodeLightBlue,
  },
  buttonBackground: {
    buttonPrimary: colors.darkmodeLightBlue,
    buttonPrimaryActive: colors.darkmodeLightBlue,
    buttonSecondary: colors.base,
    buttonSecondaryActive: colors.base,
    buttonImportant: colors.darkmodeRed,
    buttonImportantActive: colors.darkmodeRed,
    buttonDisabled: colors.grayMedium,
    buttonSecondaryDisabled: colors.grayLight,
    buttonWhite: colors.white,
    buttonWhiteActive: colors.whiteWith70PercentOpacity,
    brandedPrimary: colors.primary,
    brandedPrimaryActive: colors.primaryDarkest,
  },
  buttonText: {
    buttonPrimary: colors.grayLightest,
    buttonSecondary: colors.darkmodeLightBlue,
    buttonDisabled: colors.white,
    buttonImportant: colors.grayLightest,
    buttonWhite: colors.primaryDarker,
    brandedPrimary: colors.white,
  },
  buttonBorder: {
    buttonSecondary: colors.base,
    buttonSecondaryActive: colors.base,
    buttonImportant: colors.darkmodeRed,
    buttonImportantActive: colors.darkmodeRed,
    brandedPrimary: colors.primary,
    brandedPrimaryActive: colors.primaryDarkest,
  },
  control: {
    tintColor: colors.primary,
    switchOnTrack: colors.primary,
    switchOffTrack: colors.grayLight,
    switchOnThumb: colors.white,
    switchOffThumb: colors.grayLightest,
  },
  segmentedControl: {
    buttonActive: colors.gray,
    buttonInactive: colors.darkmodeGrayWarmDark,
  },
  selectCopyText: colors.primaryAltLight,
}
