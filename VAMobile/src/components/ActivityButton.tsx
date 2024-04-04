import React, { FC } from 'react'
import { Linking, Platform, Pressable, ViewStyle } from 'react-native'

import { BackgroundVariant, Box, BoxProps, TextView, VAIcon } from 'components'
import { useTheme } from 'utils/hooks'

import colors from '../styles/themes/VAColors'

interface ActivityButtonProps {
  /** Text for header */
  title: string
  /** Text for activity information */
  subText: string
  /** Deep link to navigate to, excluding the prefix */
  deepLink: string
}

/**
 * Home screen activity button
 */
const ActivityButton: FC<ActivityButtonProps> = ({ title, subText, deepLink }: ActivityButtonProps) => {
  const theme = useTheme()

  const boxProps: BoxProps = {
    borderRadius: 8,
    py: theme.dimensions.cardPadding,
    px: theme.dimensions.buttonPadding,
    backgroundColor: theme.colors.buttonBackground.activityButton as BackgroundVariant,
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
    flexDirection: 'row',
  }

  return (
    <Box {...boxProps}>
      <Pressable
        style={pressableStyles}
        onPress={() => Linking.openURL(`vamobile://${deepLink}`)}
        accessible={true}
        accessibilityRole={'link'}
        accessibilityLabel={title}
        accessibilityValue={{ text: subText }}
        testID={title}>
        <Box flex={1}>
          <Box
            flexDirection={'row'}
            flexWrap={'wrap'}
            mb={subText ? theme.dimensions.standardMarginBetween : undefined}>
            <TextView variant="BitterHeading">{title}</TextView>
          </Box>
          {!!subText && (
            <Box flexDirection={'row'}>
              <Box flex={1}>
                <TextView variant={'ActivityButtonSubtext'}>{subText}</TextView>
              </Box>
              <VAIcon
                width={24}
                height={24}
                name="RightArrowInCircle"
                fill={theme.colors.icon.activityButton}
                fill2={theme.colors.icon.transparent}
                ml={theme.dimensions.listItemDecoratorMarginLeft}
                preventScaling={true}
              />
            </Box>
          )}
        </Box>
      </Pressable>
    </Box>
  )
}

export default ActivityButton
