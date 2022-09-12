import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button'
import ScreenWrapper from '../../components/ScreenWrapper'
import TextInput from '../../components/TextInput'
import themeStyle from '../../theme/styles'

import useController from './index.controller'

function Home() {
  const navigation = useNavigation()
  const { language, name, onNext, setLanguage, setName } = useController(navigation)

  return (
    <ScreenWrapper>
      <View style={[themeStyle.alignItemsCenter, themeStyle.spacingBottom]}>
        <Text style={themeStyle.heading}>Consent Form</Text>
      </View>

      <View style={themeStyle.spacingBottom}>
        <TextInput label="Name" placeholder="Enter your name" value={name} onChangeText={setName} />
      </View>

      <View style={themeStyle.spacingBottom}>
        <TextInput
          label="Language"
          placeholder="Select language"
          value={language}
          onChangeText={setLanguage}
        />
      </View>

      <View style={themeStyle.alignItemsEnd}>
        <Button onPress={onNext}>
          <Text style={themeStyle.body}>Next</Text>
        </Button>
      </View>
    </ScreenWrapper>
  )
}

export default Home
