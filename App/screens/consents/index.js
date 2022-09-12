import React from 'react'
import { Text, View } from 'react-native'

import ScreenWrapper from '../../components/ScreenWrapper'
import themeStyle from '../../theme/styles'

function Consents() {
  return (
    <ScreenWrapper>
      <View style={themeStyle.alignItemsCenter}>
        <Text style={themeStyle.heading}>All Consents</Text>
      </View>
    </ScreenWrapper>
  )
}

export default Consents
