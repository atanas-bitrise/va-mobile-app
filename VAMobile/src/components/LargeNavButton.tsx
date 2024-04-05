import React, { FC, useState } from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { useTranslation } from 'react-i18next'
import { Pressable, ViewStyle } from 'react-native'

import {
  BackgroundVariant,
  BorderColorVariant,
  BorderStyles,
  BorderWidths,
  Box,
  BoxProps,
  TextView,
  VAIcon,
} from 'components'
import { NAMESPACE } from 'constants/namespaces'
import { VAIconColors, VATextColors } from 'styles/theme'
import { a11yHintProp } from 'utils/accessibility'
import { useTheme } from 'utils/hooks'

const SkeletonLoader = () => {
  const theme = useTheme()
  return (
    <ContentLoader
      backgroundColor={theme.colors.background.skeletonLoader}
      foregroundColor={theme.colors.background.skeletonLoaderSecondary}
      speed={0.6}
      width="400"
      height="25"
      viewBox="100 0 100 100">
      <Rect width="100%" height="50" />
    </ContentLoader>
  )
}

interface HomeNavButtonProps {
  /**string for header and used to create testID for accessibility*/
  title: string
  /**string secondary text that seats on the second row */
  subText?: string
  /**a11y string secondary text that seats on the second row */
  subTextA11yLabel?: string
  /**string for accessibility hint */
  a11yHint?: string
  /**function to be called when press occurs */
  onPress: () => void
  /**BackgroundVariant color for background */
  backgroundColor?: BackgroundVariant
  /**BackgroundVariant color for active state */
  backgroundColorActive?: BackgroundVariant
  /**VATextColors color for text */
  textColor?: keyof VATextColors
  /** VAIconColors icon color*/
  iconColor?: keyof VAIconColors
  /**BorderWidths possible widths for HomeNavButton*/
  borderWidth?: BorderWidths
  /**BorderColorVariant color for the borders*/
  borderColor?: BorderColorVariant
  /**BorderColorVariant color for active state for the borders*/
  borderColorActive?: BorderColorVariant
  /**BorderStyles denotes the styling of the borders*/
  borderStyle?: BorderStyles
  /** Show loading animation in place of subtext */
  showLoading?: boolean
  /** Optional test ID for button */
  testID?: string
}

/**
 * Reusable large navigation button
 * @returns LargeNavButton component
 */
const LargeNavButton: FC<HomeNavButtonProps> = ({
  title,
  subText,
  subTextA11yLabel,
  a11yHint,
  onPress,
  backgroundColor,
  backgroundColorActive,
  textColor,
  iconColor,
  borderWidth,
  borderColor,
  borderColorActive,
  borderStyle,
  showLoading,
}: HomeNavButtonProps) => {
  const theme = useTheme()
  const { t } = useTranslation(NAMESPACE.COMMON)
  const [isPressed, setIsPressed] = useState(false)

  const _onPressIn = (): void => {
    setIsPressed(true)
  }

  const _onPressOut = (): void => {
    setIsPressed(false)
  }

  const _onPress = (): void => {
    onPress()
  }

  const getBorderColor = (): BorderColorVariant | undefined => {
    // animate borderColor
    if (isPressed && borderColorActive) {
      return borderColorActive
    }
    return borderColor
  }

  const getBackgroundColor = (): BackgroundVariant => {
    // animate backgroundColor
    if (isPressed && backgroundColorActive) {
      return backgroundColorActive
    }

    return backgroundColor ? backgroundColor : 'textBox'
  }

  const boxProps: BoxProps = {
    minHeight: 81,
    borderRadius: 6,
    p: theme.dimensions.cardPadding,
    mb: theme.dimensions.condensedMarginBetween,
    backgroundColor: getBackgroundColor(),
    borderWidth,
    borderColor: getBorderColor(),
    borderStyle,
  }

  const pressableStyles: ViewStyle = {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  }
  const accessibilityLabel = `${title} ${showLoading ? t('loadingActivity') : subTextA11yLabel || subText || ''}`.trim()

  return (
    <Box {...boxProps}>
      <Pressable
        style={pressableStyles}
        onPress={_onPress}
        onPressIn={_onPressIn}
        onPressOut={_onPressOut}
        accessible={true}
        accessibilityRole={'menuitem'}
        testID={title}
        accessibilityLabel={accessibilityLabel}
        {...a11yHintProp(a11yHint || '')}>
        <Box flex={1}>
          <Box
            flexDirection={'row'}
            flexWrap={'wrap'}
            mb={subText ? theme.dimensions.condensedMarginBetween : undefined}>
            <TextView mr={theme.dimensions.condensedMarginBetween} variant="BitterBoldHeading" color={textColor}>
              {title}
            </TextView>
          </Box>
          {showLoading ? (
            <SkeletonLoader />
          ) : (
            subText && (
              <TextView variant={'MobileBody'} color={textColor}>
                {subText}
              </TextView>
            )
          )}
        </Box>
        <VAIcon
          name="ChevronRight"
          fill={`${iconColor ? iconColor : 'largeNav'}`}
          width={10}
          height={15}
          ml={theme.dimensions.listItemDecoratorMarginLeft}
        />
      </Pressable>
    </Box>
  )
}

export default LargeNavButton
