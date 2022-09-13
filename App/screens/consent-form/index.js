import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Button from '../../components/Button'
import ScreenWrapper from '../../components/ScreenWrapper'
import routeList from '../../routes/list'
import themeColor from '../../theme/colors'
import themeStyle from '../../theme/styles'

import useController from './index.controller'

function ConsentForm({ navigation }) {
  const { recording, setRecording } = useController()

  return (
    <>
      <ScreenWrapper>
        <View style={[themeStyle.alignItemsCenter, themeStyle.spacingBottom]}>
          <Text style={themeStyle.heading}>Consent Form</Text>
        </View>

        <View style={themeStyle.spacingBottom}>
          <Text style={themeStyle.body}>
            You understand that by using the site or site services, you agree to be bound by this
            agreement. If you do not accept this agreement in its entirety, you must not access or
            use the site or the site services.
          </Text>
        </View>

        <View style={themeStyle.spacingBottom}>
          <Text style={themeStyle.body}>
            Do you agree to this agreement? Please respond by saying “Yes” or “No”.
          </Text>
        </View>

        <View
          style={recording ? themeStyle.flexRowCenterSpaceBetween : themeStyle.alignItemsCenter}
        >
          <Button onPress={() => setRecording(true)} type="circle">
            <Text>{recording ? 'Play' : 'Rec'}</Text>
          </Button>

          {recording && <Text style={themeStyle.body}>You responded</Text>}
        </View>
      </ScreenWrapper>

      {recording && (
        <View style={styles.footer}>
          <Button
            onPress={() => setRecording(false)}
            style={[themeStyle.flex1, themeStyle.alignItemsCenter]}
            noColor
          >
            <Text style={themeStyle.body}>Retry</Text>
          </Button>

          <View style={styles.footerDivider} />

          <Button
            onPress={() => navigation.navigate(routeList.HOME_TAB, { doneForm: true })}
            style={[themeStyle.flex1, themeStyle.alignItemsCenter]}
            noColor
          >
            <Text style={themeStyle.body}>Save</Text>
          </Button>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  footer: {
    ...themeStyle.flexRowCenter,
    borderTopWidth: 1,
    borderColor: themeColor.gray,
  },
  footerDivider: {
    height: '100%',
    borderLeftWidth: 1,
    borderColor: themeColor.gray,
  },
})

export default ConsentForm
