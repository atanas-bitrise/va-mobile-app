import { colors as DSColors } from '@department-of-veterans-affairs/mobile-tokens'

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
    completedPhase: colors.greenDarker,
    currentPhase: colors.primary,
    upcomingPhase: colors.grayLight,
    splashScreen: colors.primaryDarker,
    loginScreen: colors.white,
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
    linkRow: DSColors.vadsColorGrayWarmLight,
    skeletonLoader: DSColors.vadsColorBaseLighter,
    skeletonLoaderSecondary: DSColors.vadsColorBaseLightest,
    bullet: colors.grayDark,
  },
  border: {
    aboutYou: DSColors.vadsColorGrayWarmLight,
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
    largeNavButton: DSColors.vadsColorPrimary,
    announcementBanner: colors.primary,
    inlineSpinner: DSColors.vadsColorPrimary,
    categoryLandingAlert: DSColors.vadsColorSecondaryDark,
    linkRow: DSColors.vadsColorPrimary,
    ussf: colors.black,
  },
  text: {
    appVersionAndBuild: colors.black,
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
    veteranStatusBranch: DSColors.vadsColorBase,
    veteranStatusProof: DSColors.vadsColorBaseDark,
    webviewTitle: colors.base,
    crisisLineButton: colors.white,
    activityButton: colors.white,
    announcementBanner: DSColors.vadsColorBase,
    homeScreen: DSColors.vadsColorBase,
    profileScreen: DSColors.vadsColorBase,
    activityFooter: DSColors.vadsColorBaseDark,
    categoryLandingError: DSColors.vadsColorSecondaryDark,
    categoryLandingWarning: DSColors.vadsColorBase,
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
    activityButton: DSColors.vadsColorPrimaryDarker,
    activityButtonActive: DSColors.uswdsSystemColorBlue90,
    announcementBanner: colors.white,
    crisisLine: colors.secondaryDark,
    crisisLineActive: DSColors.vadsColorActionSurfaceDestructiveActiveOnLight,
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
    completedPhase: colors.greenLight,
    currentPhase: colors.primaryDarker2,
    upcomingPhase: colors.darkmodeBorder,
    splashScreen: colors.primaryDarker,
    loginScreen: colors.primaryDarkest,
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
    skeletonLoader: DSColors.vadsColorGrayMedium,
    skeletonLoaderSecondary: DSColors.vadsColorBaseLight,
    bullet: colors.grayLighter,
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
    largeNavButton: DSColors.uswdsSystemColorBlueVivid30,
    announcementBanner: DSColors.uswdsSystemColorBlueVivid30,
    inlineSpinner: DSColors.uswdsSystemColorBlueVivid30,
    categoryLandingAlert: DSColors.uswdsSystemColorRedVivid40,
    linkRow: DSColors.uswdsSystemColorBlueVivid30,
    ussf: colors.white,
  },
  text: {
    appVersionAndBuild: colors.white,
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
    veteranStatusBranch: DSColors.vadsColorBaseLightest,
    veteranStatusProof: DSColors.vadsColorBaseLightest,
    webviewTitle: colors.white,
    crisisLineButton: colors.black,
    activityButton: colors.black,
    announcementBanner: DSColors.vadsColorBaseLightest,
    homeScreen: DSColors.vadsColorBaseLightest,
    profileScreen: DSColors.vadsColorBaseLightest,
    activityFooter: DSColors.vadsColorBaseLightest,
    categoryLandingError: DSColors.uswdsSystemColorRedVivid40,
    categoryLandingWarning: DSColors.vadsColorBaseLightest,
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
    activityButton: DSColors.uswdsSystemColorBlueVivid30,
    activityButtonActive: DSColors.vadsColorActionSurfaceDefaultActiveOnDark,
    announcementBanner: colors.darkmodeGrayWarmDark,
    crisisLine: DSColors.uswdsSystemColorRedVivid40,
    crisisLineActive: DSColors.vadsColorActionSurfaceDestructiveActiveOnDark,
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
