import React, { FC } from 'react'
import { Platform, Pressable, ViewStyle } from 'react-native'

import { BackgroundVariant, Box, BoxProps, TextView, VAIcon } from 'components'
import { useExternalLink, useTheme } from 'utils/hooks'

import colors from '../styles/themes/VAColors'

interface AnnouncementBannerProps {
  /** Text for announcement title */
  title: string
  /** External link used */
  link: string
  /** Optional accessibilityLabel */
  a11yLabel?: string
}

const AnnouncementBanner: FC<AnnouncementBannerProps> = ({ title, link }: AnnouncementBannerProps) => {
  const theme = useTheme()
  const launchExternalLink = useExternalLink()

  const boxProps: BoxProps = {
    py: theme.dimensions.formMarginBetween,
    px: theme.dimensions.cardPadding,
    backgroundColor: theme.colors.buttonBackground.announcementBanner as BackgroundVariant,
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
        onPress={() => launchExternalLink(link)}
        accessible={true}
        accessibilityRole={'link'}
        testID={title}>
        <Box flexDirection={'row'} flex={1}>
          <Box flex={1}>
            <TextView variant="AnnouncementBannerTitle">{title}</TextView>
          </Box>
          <VAIcon
            width={24}
            height={24}
            preventScaling={true}
            name={'CircleExternalLink'}
            fill={theme.colors.icon.announcementBanner}
            fill2={theme.colors.icon.transparent}
            ml={theme.dimensions.listItemDecoratorMarginLeft}
          />
        </Box>
      </Pressable>
    </Box>
  )
}

export default AnnouncementBanner
