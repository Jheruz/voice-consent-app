import React from 'react'
import { Text, View } from 'react-native'

import Button from '../../components/Button'
import themeStyle from '../../theme/styles'

function Success({ onAddAgain, onViewConsents }) {
  return (
    <>
      <View style={[themeStyle.spacingBottom, themeStyle.alignItemsCenter]}>
        <Button type="circle">
          <Text>Check</Text>
        </Button>
      </View>

      <View style={[themeStyle.spacingBottom, themeStyle.alignItemsCenter]}>
        <Text style={[themeStyle.body, themeStyle.textCenter]}>
          Thank you, your consent has been successfully saved!
        </Text>
      </View>

      <View style={[themeStyle.spacingBottom, themeStyle.alignItemsCenter]}>
        <Button onPress={onViewConsents}>
          <Text>View all consents</Text>
        </Button>
      </View>

      <View style={themeStyle.alignItemsCenter}>
        <Button onPress={onAddAgain}>
          <Text>Add again</Text>
        </Button>
      </View>
    </>
  )
}

export default Success
