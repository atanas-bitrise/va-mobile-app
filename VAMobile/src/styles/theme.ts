export type VATextColors = {
  navBar: string
  primary: string
  primaryContrast: string
  primaryContrastDisabled: string
  secondary: string
  link: string
  error: string
  placeholder: string
  checkboxDisabled: string
}

export type VAIconColors = {
  link: string
  nav: string
  disclosure: string
  success: string
  error: string
  active: string
  inactive: string
  contrast: string
  expandCollapse: string
  checkboxEnabledPrimary: string
  checkboxDisabled: string
  checkboxDisabledContrast: string
}

export type VATypographyThemeVariants = {
  BitterBoldHeading: string
  MobileBody: string
  MobileBodyBold: string
  TableHeaderBold: string
  TableHeaderLabel: string
  TableFooterLabel: string
  MobileBodyLink: string
}

export type VABackgroundColors = {
  main: string
  textBox: string
  buttonList: string
  segmentedController: string
  shadow: string
  button: string
  profileBanner: string
}

export type VABorderColors = {
  primary: string
  secondary: string
  informational: string
  error: string
  warning: string
}

export type VAFontSizes = {
  fontSize: number
  lineHeight: number
}

export type VATheme = {
  colors: {
    background: VABackgroundColors
    border: VABorderColors
    icon: VAIconColors
    text: VATextColors
    ctaButton: {
      background: string
      text: string
    }
    control: {
      tintColor: string
      switchOnTrack: string
      switchOffTrack: string
      switchOnThumb: string
      switchOffThumb: string
    }
    segmentedControl: {
      buttonActive: string
      buttonInactive: string
    }
  }
  dimensions: {
    borderWidth: number
    gutter: number
    textIconMargin: number
    textXPadding: number
    contentMarginTop: number
    contentMarginBottom: number
    marginBetween: number
    cardPaddingY: number
    cardMargin: number
    buttonPadding: number
    editAddressMarginTop: number
    editAddressCheckboxPl: number
    editAddressCheckboxPt: number
    editAddressCheckboxPb: number
    editAddressStreetAddressMarginTop: number
    editAddressContentMarginTop: number
    editAddressContentMarginBottom: number
    collapsibleViewPaddingX: number
    collapsibleViewPaddingTop: number
    editDirectDepositInputFieldMarginTop: number
    alertBorderWidth: number
    alertPaddingY: number
    alertPaddingX: number
    profileBannerIconMargin: number
    switchMarginLeft: number
  }
  fontFace: {
    regular: string
    bold: string
    altBold: string
  }
  fontSizes: {
    BitterBoldHeading: VAFontSizes
    MobileBody: VAFontSizes
    MobileBodyBold: VAFontSizes
    TableHeaderBold: VAFontSizes
    TableHeaderLabel: VAFontSizes
    TableFooterLabel: VAFontSizes
    MobileBodyLink: VAFontSizes
  }
  typography: VATypographyThemeVariants
}
