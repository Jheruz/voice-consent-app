import React from 'react'
import { SafeAreaView, View } from 'react-native'

import themeStyle from '../theme/styles'

function ScreenWrapper({ children }) {
  return (
    <SafeAreaView>
      <View style={[themeStyle.contentTopSpacing, themeStyle.pageHorizontalSpacing]}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default ScreenWrapper
