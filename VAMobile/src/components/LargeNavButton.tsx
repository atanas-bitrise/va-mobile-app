import React, { FC } from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { useTranslation } from 'react-i18next'
import { Platform, Pressable, ViewStyle } from 'react-native'

import { Box, BoxProps, TextView, VAIcon } from 'components'
import { NAMESPACE } from 'constants/namespaces'
import { a11yHintProp } from 'utils/accessibility'
import { useTheme } from 'utils/hooks'

import colors from '../styles/themes/VAColors'

const SkeletonLoader = () => {
  const theme = useTheme()
  return (
    <ContentLoader
      backgroundColor={theme.colors.background.skeletonLoader}
      foregroundColor={theme.colors.background.skeletonLoaderSecondary}
      speed={0.6}
      width="100"
      height="10">
      <Rect width="100%" height="25" />
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
  /** Show loading animation in place of subtext */
  showLoading?: boolean
}

/**
 * Reusable large navigation button
 * @returns LargeNavButton component
 */
const LargeNavButton: FC<HomeNavButtonProps> = ({
  title,
  subText,
  a11yHint,
  onPress,
  showLoading,
}: HomeNavButtonProps) => {
  const theme = useTheme()
  const { t } = useTranslation(NAMESPACE.COMMON)

  const boxProps: BoxProps = {
    py: theme.dimensions.cardPadding,
    px: theme.dimensions.buttonPadding,
    mb: theme.dimensions.condensedMarginBetween,
    backgroundColor: 'textBox',
    style: {
      shadowColor: colors.black,
      ...Platform.select({
        ios: {
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.4,
          shadowRadius: 8,
        },
        android: {
          elevation: 8,
        },
      }),
    },
  }

  const pressableStyles: ViewStyle = {
    width: '100%',
  }

  return (
    <Box {...boxProps}>
      <Pressable
        style={pressableStyles}
        onPress={onPress}
        accessible={true}
        accessibilityRole={'link'}
        testID={title}
        accessibilityLabel={title}
        accessibilityValue={{ text: subText }}
        {...a11yHintProp(a11yHint || '')}>
        <Box flexDirection="row">
          <Box flex={1}>
            <TextView variant="LargeNavButton">{title}</TextView>
            {showLoading ? (
              <Box
                flex={1}
                height={30}
                flexDirection={'row'}
                alignItems={'flex-end'}
                accessible={true}
                accessibilityLabel={t('loadingActivity')}>
                <SkeletonLoader />
              </Box>
            ) : subText ? (
              <TextView pt={10} variant={'LargeNavSubtext'}>
                {subText}
              </TextView>
            ) : (
              <></>
            )}
          </Box>
          <VAIcon
            flexDirection="row"
            alignItems="flex-end"
            width={24}
            height={24}
            name="RightArrowInCircle"
            fill={theme.colors.icon.largeNavButton}
            fill2={theme.colors.icon.transparent}
            ml={theme.dimensions.listItemDecoratorMarginLeft}
          />
        </Box>
      </Pressable>
    </Box>
  )
}

export default LargeNavButton
