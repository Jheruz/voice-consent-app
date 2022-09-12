import React from 'react'
import { Text, View } from 'react-native'

import ScreenWrapper from '../../components/ScreenWrapper'
import themeStyle from '../../theme/styles'

function Home() {
  return (
    <ScreenWrapper>
      <View style={themeStyle.alignItemsCenter}>
        <Text style={themeStyle.heading}>Consent Form</Text>
      </View>
    </ScreenWrapper>
  )
}

export default Home
