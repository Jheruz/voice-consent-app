import React from 'react'
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native'

import themeColor from '../theme/colors'
import themeStyle, { globalSpacing } from '../theme/styles'

function Button({ children, type, noColor, rightIcon, ...buttonProps }) {
  const isCircle = type === 'circle'
  let wrapperStyle = isCircle ? styles.circleWrapper : styles.wrapper

  if (noColor) {
    wrapperStyle = styles.button
  }

  return (
    <TouchableOpacity {...buttonProps}>
      <View style={wrapperStyle}>
        {children}

        {!!rightIcon && <Image source={rightIcon} style={styles.buttonIcon} resizeMode="contain" />}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    ...themeStyle.flexRowCenter,
    backgroundColor: themeColor.gray,
    paddingVertical: globalSpacing / 2,
    paddingHorizontal: globalSpacing * 2,
  },
  circleWrapper: {
    backgroundColor: themeColor.gray,
    padding: 25,
    borderRadius: 50,
  },
  button: {
    ...themeStyle.flexRowCenter,
    paddingVertical: globalSpacing / 2,
    paddingHorizontal: globalSpacing * 2,
  },
  buttonIcon: {
    ...themeStyle.spacingLeftMedium,
    width: 20,
    height: 20,
  },
})

export default Button
