import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import themeColor from '../theme/colors'
import { globalSpacing } from '../theme/styles'

function Button({ children, type, noColor, ...buttonProps }) {
  const isCircle = type === 'circle'

  if (noColor) {
    return (
      <TouchableOpacity {...buttonProps}>
        <View style={styles.button}>{children}</View>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity {...buttonProps}>
      <View style={isCircle ? styles.circleWrapper : styles.wrapper}>{children}</View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
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
    paddingVertical: globalSpacing / 2,
    paddingHorizontal: globalSpacing * 2,
  },
})

export default Button
