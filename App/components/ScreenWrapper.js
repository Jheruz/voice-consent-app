import React from 'react'
import { SafeAreaView, View } from 'react-native'

import themeStyle from '../theme/styles'

function ScreenWrapper({ children }) {
  return (
    <SafeAreaView style={themeStyle.flex1}>
      <View
        style={[themeStyle.flex1, themeStyle.contentTopSpacing, themeStyle.pageHorizontalSpacing]}
      >
        {children}
      </View>
    </SafeAreaView>
  )
}

export default ScreenWrapper
