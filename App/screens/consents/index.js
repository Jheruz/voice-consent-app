import React from 'react'
import { Image, FlatList, Text, View, StyleSheet } from 'react-native'

import Check from '../../assets/check.png'
import Close from '../../assets/close.png'
import Pause from '../../assets/pause.png'
import Play from '../../assets/play.png'

import Button from '../../components/Button'
import ScreenWrapper from '../../components/ScreenWrapper'
import themeColor from '../../theme/colors'
import themeStyle, { globalSpacing } from '../../theme/styles'

import useController from './index.controller'

function Consents() {
  const { data, playing, setPlaying, keyExtractor } = useController()

  const _renderItem = ({ index, item }) => {
    const isDark = index % 2 === 0
    const isPlaying = playing?.id === item.id

    return (
      <View style={[styles.itemWrapper, isDark && styles.itemWrapperDark]}>
        <View style={[themeStyle.flex1, themeStyle.spacingRight]}>
          <Text style={themeStyle.label} numberOfLines={1}>
            {item.name}
          </Text>
          <Text>Language: {item.language.label}</Text>
        </View>

        <View style={themeStyle.flexRowCenter}>
          <View style={themeStyle.spacingRight}>
            <Image
              source={item.consentGiven ? Check : Close}
              style={themeStyle.icon}
              resizeMode="contain"
            />
          </View>

          <View style={themeStyle.spacingLeft}>
            <Button onPress={() => setPlaying(isPlaying ? null : item)} type="circle" small>
              <Image
                source={isPlaying ? Pause : Play}
                style={themeStyle.icon}
                resizeMode="contain"
              />
            </Button>
          </View>
        </View>
      </View>
    )
  }

  const _renderEmpty = () => {
    return (
      <View style={themeStyle.alignItemsCenter}>
        <Text>No data to display</Text>
      </View>
    )
  }

  return (
    <ScreenWrapper hPadding={false}>
      <View style={[themeStyle.alignItemsCenter, themeStyle.spacingBottom]}>
        <Text style={themeStyle.heading}>All Consents</Text>
      </View>

      <View
        style={[
          themeStyle.flexRowCenterSpaceBetween,
          themeStyle.spacingBottom,
          themeStyle.pageHorizontalSpacing,
        ]}
      >
        <Text style={themeStyle.body}>Details</Text>
        <Text style={themeStyle.body}>Consent Given</Text>
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={_renderEmpty}
        />
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    ...themeStyle.pageHorizontalSpacing,
    ...themeStyle.flexRowCenterSpaceBetween,
    paddingVertical: globalSpacing / 2,
  },
  itemWrapperDark: {
    backgroundColor: themeColor.lightGray,
  },
})

export default Consents
