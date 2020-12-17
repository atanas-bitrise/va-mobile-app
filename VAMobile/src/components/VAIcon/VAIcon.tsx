import { SvgProps } from 'react-native-svg'
import { isFinite } from 'underscore'
import React, { FC } from 'react'

import { VAIconColors } from 'styles/theme'
import { useFontScale } from 'utils/common'
import { useTheme } from 'utils/hooks'

import { Box, BoxProps } from 'components'
// Navigation
import Appointments from './svgs/navIcon/appointments.svg'
import Claims from './svgs/navIcon/claims.svg'
import Home from './svgs/navIcon/home.svg'

import Profile from './svgs/navIcon/profile.svg'

// Arrows
import ArrowDown from './svgs/chevron-down.svg'
import ArrowLeft from './svgs/chevron-left.svg'
import ArrowRight from './svgs/chevron-right.svg'
import ArrowUp from './svgs/chevron-up.svg'

// forces icons

import Airforce from './svgs/dodBranch/air-force.svg'
import Army from './svgs/dodBranch/army.svg'
import CoastGuard from './svgs/dodBranch/coast-guard.svg'
import Marines from './svgs/dodBranch/marine.svg'
import Navy from './svgs/dodBranch/navy.svg'

// Links
import Calendar from './svgs/links/calendar.svg'
import Chat from './svgs/links/chat.svg'
import Phone from './svgs/links/phone.svg'
import RightArrowInCircle from './svgs/links/right-arrow-blue-circle.svg'
import Text from './svgs/links/text.svg'

// Webview
import WebviewBack from './svgs/webview/chevron-left-solid.svg'
import WebviewForward from './svgs/webview/chevron-right-solid.svg'
import WebviewOpen from './svgs/webview/external-link-alt-solid.svg'
import WebviewRefresh from './svgs/webview/redo-solid.svg'

// CheckBox
import EmptyCheckBox from './svgs/checkbox/checkBoxEmpty.svg'
import FilledCheckBox from './svgs/checkbox/checkBoxFilled.svg'

// Misc
import CheckMark from './svgs/check-mark.svg'
import DatePickerArrows from './svgs/date-picker-arrows.svg'
import Lock from './svgs/webview/lock-solid.svg'

export const VA_ICON_MAP = {
  Home,
  Claims,
  Appointments,
  Profile,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Airforce,
  Army,
  Calendar,
  CoastGuard,
  EmptyCheckBox,
  FilledCheckBox,
  Marines,
  Navy,
  Phone,
  Chat,
  Text,
  RightArrowInCircle,
  WebviewBack,
  WebviewForward,
  WebviewOpen,
  WebviewRefresh,
  Lock,
  DatePickerArrows,
  CheckMark,
}
/**
 *  Props that need to be passed in to {@link VAIcon}
 */
export type VAIconProps = BoxProps & {
  /**  enum name of the icon to use {@link VA_ICON_MAP} **/
  name: keyof typeof VA_ICON_MAP

  /** Fill color for the icon */
  fill?: keyof VAIconColors | string

  /** Stroke color of the icon */
  stroke?: keyof VAIconColors | string

  /**  optional number use to set the width; otherwise defaults to svg's width */
  width?: number

  /**  optional number use to set the height; otherwise defaults to svg's height */
  height?: number

  /** optional boolean that prevents the icon from being scaled when set to true */
  preventScaling?: boolean
}

/**
 * Reusable component to display svgs
 *
 * @returns VAIcon component
 */
const VAIcon: FC<VAIconProps> = (props: VAIconProps) => {
  const theme = useTheme()
  let domProps = Object.create(props)
  const fs: Function = useFontScale()
  const { name, width, height, fill, stroke, preventScaling } = props

  if (fill) {
    domProps = Object.assign({}, domProps, { fill: theme.colors.icon[fill as keyof VAIconColors] || fill })
  }

  if (stroke) {
    domProps = Object.assign({}, domProps, { stroke: theme.colors.icon[stroke as keyof VAIconColors] || stroke })
  }

  const Icon: FC<SvgProps> | undefined = VA_ICON_MAP[name]
  if (!Icon) {
    return <></>
  }
  delete domProps.name

  if (isFinite(width)) {
    domProps = Object.assign({}, domProps, { width: preventScaling ? width : fs(width) })
  }

  if (isFinite(height)) {
    domProps = Object.assign({}, domProps, { height: preventScaling ? height : fs(height) })
  }

  return (
    <Box {...domProps}>
      <Icon {...domProps} />
    </Box>
  )
}

export default VAIcon
