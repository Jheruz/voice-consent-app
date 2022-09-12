import { StyleSheet } from 'react-native'

import themeColor from './colors'

export const globalSpacing = 20

export default StyleSheet.create({
  // fonts
  heading: {
    color: themeColor.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  label: {
    color: themeColor.black,
    fontSize: 20,
  },

  // alignments
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },

  // spacing
  contentTopSpacing: {
    paddingTop: globalSpacing * 3,
    paddingBottom: globalSpacing,
  },
  pageHorizontalSpacing: {
    paddingHorizontal: globalSpacing,
  },
  spacingLeft: {
    marginLeft: globalSpacing,
  },
  spacingLeftMedium: {
    marginLeft: globalSpacing / 2,
  },
  spacingBottom: {
    marginBottom: globalSpacing,
  },
  spacingBottomMedium: {
    marginBottom: globalSpacing / 2,
  },
})
