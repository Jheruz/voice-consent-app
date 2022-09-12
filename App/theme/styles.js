import { StyleSheet } from 'react-native'

import themeColor from './colors'

const globalSpacing = 20

export default StyleSheet.create({
  // fonts
  heading: {
    color: themeColor.black,
    fontSize: 30,
    fontWeight: 'bold',
  },

  // alignments
  contentTopSpacing: {
    paddingTop: globalSpacing * 3,
    paddingBottom: globalSpacing,
  },
  pageHorizontalSpacing: {
    paddingHorizontal: globalSpacing,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
})
