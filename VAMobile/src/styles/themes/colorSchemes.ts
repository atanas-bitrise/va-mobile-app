import { Colors as DSColors } from '@department-of-veterans-affairs/mobile-tokens'

import colors from './VAColors'

export const primaryTextColor = colors.grayDark

export const lightTheme = {
  background: {
    main: colors.grayLightest,
    largePanelHeader: colors.white,
    footerButtonActive: colors.primaryDarkest,
    textBox: colors.white,
    textBoxInactive: colors.white,
    list: colors.white,
    listActive: colors.primaryAltLightest,
    segmentedController: colors.grayLighter,
    headerDropShadow: colors.grayLighter,
    shadow: colors.grayMedium,
    profileBanner: colors.primary,
    ctaButton: colors.secondaryDark,
    completedPhase: colors.greenDarker,
    currentPhase: colors.primary,
    upcomingPhase: colors.grayLight,
    splashScreen: colors.primaryDarker,
    carousel: colors.primaryDark,
    unreadMessagesTag: colors.grayDark,
    navHeader: colors.primaryDarker,
    modalOverlay: colors.base,
    overlayOpacity: colors.blackWith30PercentOpacity,
    pickerSelectedItem: colors.primaryAltLightest,
    navButton: colors.toolbarBackgroundGray,
    brandedMainBackground: colors.grayLightest,
    carouselTab: colors.white,
    contentBox: colors.white,
    snackbar: colors.snackBarBlack,
    webviewControls: colors.grayLightest,
    pickerControls: colors.grayLightest,
    menu: colors.white,
    alertBox: colors.white,
    warningTag: colors.gold,
    modalButton: colors.primaryAltLightest,
    panelHeader: colors.white,
    tagBlue: colors.primaryAltLightest,
    tagInactive: colors.grayLightest,
    tagYellow: colors.goldLightest,
    tagGreen: colors.greenLightest,
    veteranStatus: colors.primaryDarker,
    veteranStatusHome: colors.white,
    linkRow: DSColors.grayWarmLight,
    skeletonLoader: DSColors.grayLighter,
    skeletonLoaderSecondary: DSColors.grayLightest,
  },
  border: {
    aboutYou: DSColors.grayWarmLight,
    primary: colors.grayLight,
    secondary: colors.gray,
    informational: colors.primaryAltDark,
    error: colors.secondaryDark,
    warning: colors.warningMessage,
    phaseIndicatorCurrent: colors.primary,
    phaseIndicatorUpcoming: colors.grayLight,
    success: colors.green,
    primaryDarkest: colors.primaryDarkest,
    photoAdd: colors.primary,
    pickerAndInput: colors.gray,
    focusedPickerAndInput: colors.primaryDarker,
    confirmation: colors.goldLight,
    footerButton: colors.grayLight,
    menuDivider: colors.grayDark,
    tabSelectorInactive: colors.grayLight,
    tabSelectorActive: colors.primary,
    photoUpload: colors.white,
    prescriptionDivider: colors.grayLighter,
    modalButton: colors.primary,
    tagBlue: colors.primary,
    tagInactive: colors.grayLight,
    tagYellow: colors.gold,
    tagGreen: colors.green,
    veteranStatus: colors.coolBlueLighter,
  },
  icon: {
    footerButton: colors.primary,
    footerButtonActive: colors.white,
    link: colors.primary, //'#0071bb',
    nav: colors.linkDefault, //'#004795',
    largeNav: colors.primary,
    deleteFill: colors.base, //212121
    disclosure: colors.grayLight,
    success: colors.green, //'#2E8540',
    error: colors.secondaryDark, //'#CD2026',
    active: colors.primary,
    inactive: colors.gray,
    contrast: colors.white,
    expandCollapse: colors.black,
    checkboxEnabledPrimary: colors.primary,
    checkboxDisabled: colors.grayMedium,
    checkboxDisabledContrast: colors.white,
    spinner: colors.grayMedium,
    photoAdd: colors.primary,
    pickerIcon: colors.grayDark,
    pagination: colors.white,
    chevronCollapsible: colors.primary,
    chevronListItem: colors.primary,
    webviewReload: colors.primary,
    backButton: colors.white,
    defaultMenuItem: colors.grayDark,
    unreadMessage: colors.primary,
    veteransCrisisLineArrow: colors.grayLightest,
    snackBarIcon: colors.grayLighter,
    infoIcon: colors.grayMedium,
    statusInfoIcon: colors.base,
    prescriptionHelper: colors.white,
    infoIconContrast: colors.grayLightest,
    radioDisabled: colors.grayLightest,
    tagInfoIcon: colors.base,
    transparent: colors.transparent,
    activityButton: colors.white,
    largeNavButton: DSColors.primary,
    announcementBanner: colors.primary,
    inlineSpinner: DSColors.primary,
    categoryLandingAlert: DSColors.secondaryDark,
    linkRow: DSColors.primary,
    ussf: colors.black,
  },
  text: {
    footerButton: colors.primary,
    footerButtonActive: colors.white,
    navBar: colors.white,
    primary: primaryTextColor,
    primaryContrast: colors.grayLightest,
    secondary: colors.black,
    error: colors.secondaryDark, //'#CD2026',
    link: colors.primary,
    placeholder: colors.grayMedium, //#757575
    checkboxDisabled: colors.grayMedium,
    claimPhase: colors.white,
    input: colors.black,
    inputFocused: colors.black,
    brandedPrimaryText: colors.grayDark,
    segmentControllerActive: primaryTextColor,
    segmentControllerInactive: primaryTextColor,
    snackBarBtn: colors.darkmodeLightBlue,
    snackBarTxt: colors.grayLighter,
    actionBar: colors.white,
    actionBarDisabled: colors.grayLight,
    defaultMenuItem: primaryTextColor,
    bodyText: primaryTextColor,
    warningTag: colors.darkmodeGrayWarmDark,
    tabSelectorInactive: colors.grayDark,
    tabSelectorActive: colors.primary,
    backButton: colors.white,
    descriptiveBackButton: colors.primary,
    snackBarText: colors.white,
    showAll: colors.primary,
    statusDescription: colors.base,
    closePanel: colors.primary,
    labelTag: colors.base,
    textWithIconButton: colors.primary,
    textWithIconButtonInactive: colors.gray,
    veteranStatus: colors.white,
    veteranStatusBranch: DSColors.base,
    veteranStatusProof: DSColors.gray,
    webviewTitle: colors.base,
    crisisLineButton: colors.white,
    activityButton: colors.white,
    announcementBanner: DSColors.base,
    homeScreen: DSColors.base,
    profileScreen: DSColors.base,
    activityFooter: DSColors.gray,
    categoryLandingError: DSColors.secondaryDark,
    categoryLandingWarning: DSColors.base,
    cernerPanel: colors.base,
    cernerFooter: DSColors.gray,
  },
  buttonBackground: {
    buttonPrimary: colors.primary,
    buttonPrimaryActive: colors.primaryDarkest,
    buttonSecondary: colors.white,
    buttonSecondaryActive: colors.primaryAltLightest,
    buttonDestructive: colors.secondaryDark,
    buttonDestructiveActive: colors.crisisLineRed,
    buttonDisabled: colors.grayMedium,
    buttonSecondaryDisabled: colors.grayLight,
    buttonWhite: colors.white,
    buttonWhiteActive: colors.whiteWith70PercentOpacity,
    brandedPrimary: colors.primary,
    brandedPrimaryActive: colors.primaryDarkest,
    overFlowMenuButton: colors.primaryAltLightest,
    activityButton: DSColors.primaryDarker,
    announcementBanner: colors.white,
  },
  buttonText: {
    buttonPrimary: colors.white,
    buttonSecondary: colors.primary,
    buttonDisabled: colors.white,
    buttonDestructive: colors.white,
    buttonWhite: colors.primaryDarker,
    brandedPrimary: colors.white,
  },
  buttonBorder: {
    buttonSecondary: colors.primary,
    buttonSecondaryActive: colors.primary,
    buttonDestructive: colors.secondaryDark,
    buttonDestructiveActive: colors.crisisLineRed,
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
  listTag: {
    tagActive: colors.primaryAltDark,
    tagExpired: colors.grayLight,
    tagSuspended: colors.gold,
    tagInProgress: colors.greenLight,
  },
}

export const darkTheme = {
  background: {
    main: colors.darkmodeGrayDark,
    largePanelHeader: colors.darkmodeGrayDark,
    footerButtonActive: colors.primaryDarkest,
    textBox: colors.base,
    textBoxInactive: colors.base,
    list: colors.base,
    listActive: colors.darkmodeBorder,
    segmentedController: colors.darkmodeGrayWarmDark,
    headerDropShadow: colors.black,
    shadow: colors.grayWarmLight,
    profileBanner: colors.primaryDarker2,
    ctaButton: DSColors.uswdsRedVivid40,
    completedPhase: colors.greenLight,
    currentPhase: colors.primaryDarker2,
    upcomingPhase: colors.darkmodeBorder,
    splashScreen: colors.primaryDarker,
    carousel: colors.primaryDark,
    unreadMessagesTag: colors.grayMedium,
    navHeader: colors.base,
    modalOverlay: colors.base,
    overlayOpacity: colors.blackWith30PercentOpacity,
    pickerSelectedItem: colors.darkmodeBorder,
    navButton: colors.base,
    brandedMainBackground: colors.grayLightest,
    carouselTab: colors.white,
    contentBox: colors.base,
    snackbar: colors.grayLightest,
    webviewControls: colors.base,
    pickerControls: colors.darkmodeGrayWarmDark,
    alertBox: colors.base,
    menu: colors.darkmodeGrayWarmDark,
    modalButton: colors.darkmodeBorder,
    panelHeader: colors.darkmodeGrayDark,
    tagBlue: colors.primaryAltLightest,
    tagInactive: colors.grayLightest,
    tagYellow: colors.goldLightest,
    tagGreen: colors.greenLightest,
    veteranStatus: colors.primaryDarker,
    veteranStatusHome: colors.darkmodeGrayWarmDark,
    linkRow: colors.darkmodeGrayWarmDark,
    skeletonLoader: DSColors.grayMedium,
    skeletonLoaderSecondary: DSColors.grayLight,
  },
  border: {
    aboutYou: colors.darkmodeBorder,
    primary: colors.darkmodeBorder,
    secondary: colors.darkmodeBorder,
    informational: colors.darkmodeLightBlue,
    error: colors.darkmodeRed,
    warning: colors.warningMessage,
    phaseIndicatorCurrent: colors.primaryDarker2,
    phaseIndicatorUpcoming: colors.darkmodeBorder,
    success: colors.greenLight,
    primaryDarkest: colors.grayLight,
    photoAdd: colors.darkmodeLightBlue,
    pickerAndInput: colors.grayLight,
    focusedPickerAndInput: colors.gold,
    confirmation: colors.gold,
    footerButton: colors.darkmodeBorder,
    menuDivider: colors.darkmodeBorder,
    tabSelectorInactive: colors.grayMedium,
    tabSelectorActive: colors.darkmodeLightBlue,
    photoUpload: colors.white,
    prescriptionDivider: colors.darkmodeBorder,
    modalButton: colors.darkmodeBorder,
    tagBlue: colors.primary,
    tagInactive: colors.grayLight,
    tagYellow: colors.gold,
    tagGreen: colors.green,
    veteranStatus: colors.coolBlueLighter,
  },
  icon: {
    footerButton: colors.darkmodeLightBlue,
    footerButtonActive: colors.darkmodeLightBlue,
    link: colors.darkmodeLightBlue,
    nav: colors.darkmodeLightBlue,
    largeNav: colors.darkmodeLightBlue,
    deleteFill: colors.base, //212121
    disclosure: colors.grayLight,
    success: colors.green,
    error: colors.darkmodeRed,
    active: colors.darkmodeLightBlue,
    inactive: colors.grayLight,
    contrast: colors.grayLightest,
    expandCollapse: colors.black,
    checkboxEnabledPrimary: colors.darkmodeLightBlue,
    checkboxDisabled: colors.grayLight,
    checkboxDisabledContrast: colors.darkmodeBorder,
    spinner: colors.grayMedium,
    photoAdd: colors.darkmodeLightBlue,
    pickerIcon: colors.grayLight,
    pagination: colors.white,
    chevronCollapsible: colors.darkmodeLightBlue,
    chevronListItem: colors.darkmodeLightBlue,
    webviewReload: colors.darkmodeLightBlue,
    backButton: colors.darkmodeLightBlue,
    defaultMenuItem: colors.grayLighter,
    unreadMessage: colors.darkmodeLightBlue,
    veteransCrisisLineArrow: colors.grayLightest,
    snackBarIcon: colors.grayDark,
    infoIcon: colors.grayLight,
    statusInfoIcon: colors.base,
    prescriptionHelper: colors.darkmodeLightBlue,
    infoIconContrast: colors.grayLight,
    radioDisabled: colors.grayLightest,
    tagInfoIcon: colors.base,
    transparent: colors.transparent,
    activityButton: colors.black,
    largeNavButton: DSColors.uswdsBlueVivid30,
    announcementBanner: DSColors.uswdsBlueVivid30,
    inlineSpinner: DSColors.uswdsBlueVivid30,
    categoryLandingAlert: DSColors.uswdsRedVivid40,
    linkRow: DSColors.uswdsBlueVivid30,
    ussf: colors.white,
  },
  text: {
    descriptiveBackButton: colors.darkmodeLightBlue,
    footerButton: colors.darkmodeLightBlue,
    footerButtonActive: colors.darkmodeLightBlue,
    navBar: colors.grayLightest,
    primary: colors.grayLightest,
    primaryContrast: colors.grayLightest,
    secondary: colors.grayLight,
    error: colors.darkmodeRed,
    link: colors.darkmodeLightBlue,
    placeholder: colors.grayLight,
    checkboxDisabled: colors.grayMedium,
    claimPhase: colors.white,
    input: colors.grayLight,
    inputFocused: colors.grayLightest,
    brandedPrimaryText: colors.grayDark,
    segmentControllerActive: colors.grayLightest,
    segmentControllerInactive: colors.grayLighter,
    snackBarBtn: colors.primary,
    snackBarTxt: colors.grayDark,
    actionBar: colors.darkmodeLightBlue,
    actionBarDisabled: colors.grayLight,
    defaultMenuItem: colors.grayLighter,
    bodyText: colors.grayLighter,
    warningTag: colors.darkmodeGrayWarmDark,
    tabSelectorInactive: colors.grayLighter,
    tabSelectorActive: colors.darkmodeLightBlue,
    showAll: colors.darkmodeLightBlue,
    statusDescription: colors.base,
    closePanel: colors.darkmodeLightBlue,
    labelTag: colors.base,
    textWithIconButton: colors.darkmodeLightBlue,
    textWithIconButtonInactive: colors.grayLight,
    veteranStatus: colors.white,
    veteranStatusBranch: DSColors.grayLightest,
    veteranStatusProof: DSColors.grayLightest,
    webviewTitle: colors.white,
    crisisLineButton: colors.black,
    activityButton: colors.black,
    announcementBanner: DSColors.grayLightest,
    homeScreen: DSColors.grayLightest,
    profileScreen: DSColors.grayLightest,
    activityFooter: DSColors.grayLightest,
    categoryLandingError: DSColors.uswdsRedVivid40,
    categoryLandingWarning: DSColors.grayLightest,
    cernerPanel: DSColors.grayLightest,
    cernerFooter: DSColors.grayLightest,
  },
  buttonBackground: {
    buttonPrimary: colors.primaryDarker2,
    buttonPrimaryActive: colors.darkmodeLightBlue,
    buttonSecondary: colors.base,
    buttonSecondaryActive: colors.base,
    buttonDestructive: colors.crisisLineRed,
    buttonDestructiveActive: colors.darkmodeRed,
    buttonDisabled: colors.grayMedium,
    buttonSecondaryDisabled: colors.darkmodeBorder,
    buttonWhite: colors.white,
    buttonWhiteActive: colors.whiteWith70PercentOpacity,
    brandedPrimary: colors.primary,
    brandedPrimaryActive: colors.primaryDarkest,
    overFlowMenuButton: colors.darkmodeBorder,
    activityButton: DSColors.uswdsBlueVivid30,
    announcementBanner: colors.darkmodeGrayWarmDark,
  },
  buttonText: {
    buttonPrimary: colors.grayLightest,
    buttonSecondary: colors.darkmodeLightBlue,
    buttonDisabled: colors.white,
    buttonDestructive: colors.white,
    buttonWhite: colors.primaryDarker,
    brandedPrimary: colors.white,
  },
  buttonBorder: {
    buttonSecondary: colors.darkmodeLightBlue,
    buttonSecondaryActive: colors.darkmodeLightBlue,
    buttonDestructive: colors.crisisLineRed,
    buttonDestructiveActive: colors.darkmodeRed,
    brandedPrimary: colors.primary,
    brandedPrimaryActive: colors.primaryDarkest,
  },
  control: {
    tintColor: colors.darkmodeLightBlue,
    switchOnTrack: colors.darkmodeLightBlue,
    switchOffTrack: colors.darkmodeBorder,
    switchOnThumb: colors.grayLightest,
    switchOffThumb: colors.grayLightest,
  },
  segmentedControl: {
    buttonActive: colors.gray,
    buttonInactive: colors.darkmodeGrayWarmDark,
  },
  selectCopyText: colors.primaryAltLight,
  listTag: {
    tagActive: colors.primaryAltDark,
    tagExpired: colors.grayLight,
    tagSuspended: colors.gold,
    tagInProgress: colors.greenLight,
  },
}
