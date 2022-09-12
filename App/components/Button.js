import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import themeColor from '../theme/colors'
import themeStyle, { globalSpacing } from '../theme/styles'

function Button({ children, ...buttonProps }) {
  return (
    <TouchableOpacity {...buttonProps}>
      <View style={styles.wrapper}>{children}</View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: themeColor.gray,
    paddingVertical: globalSpacing / 2,
    paddingHorizontal: globalSpacing * 2,
  },
})

export default Button
