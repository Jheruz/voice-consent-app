import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import Microphone from '../../assets/microphone.png'
import Play from '../../assets/play.png'
import Pause from '../../assets/pause.png'

import Button from '../../components/Button'
import ScreenWrapper from '../../components/ScreenWrapper'
import routeList from '../../routes/list'
import themeColor from '../../theme/colors'
import themeStyle from '../../theme/styles'

import useController from './index.controller'

function ConsentForm({ navigation }) {
  const { playing, recording, setPlaying, setRecording } = useController()

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
          {recording ? (
            <Button onPress={() => setPlaying(!playing)} type="circle">
              {playing ? (
                <Image source={Pause} style={styles.imageStyle} resizeMode="contain" />
              ) : (
                <Image source={Play} style={styles.imageStyle} resizeMode="contain" />
              )}
            </Button>
          ) : (
            <Button onPress={() => setRecording(true)} type="circle">
              <Image source={Microphone} style={styles.imageStyle} resizeMode="contain" />
            </Button>
          )}

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
  imageStyle: {
    width: 25,
    height: 25,
  },
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
