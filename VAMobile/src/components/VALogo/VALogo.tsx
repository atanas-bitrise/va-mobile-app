import React, { FC } from 'react'
import { Image, ImageProps } from 'react-native'

import { useTheme } from 'utils/hooks'

export type VALogoProps = {
  /** Optional TestID */
  testID?: string
}

export const VALogo: FC<VALogoProps> = ({ testID }) => {
  const theme = useTheme()

  const logoProps: ImageProps = {
    width: 254,
    height: 57,
  }
  if (theme.mode === 'dark') {
    return (
      <Image
        testID={testID}
        style={logoProps}
        source={require('../../../node_modules/@expo/samples/assets/images/expo-icon.png')}
      />
    )
  } else {
    return (
      <Image
        testID={testID}
        style={logoProps}
        source={require('../../../node_modules/@expo/samples/assets/images/expo-icon.png')}
      />
    )
  }
}

export default VALogo
