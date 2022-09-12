import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import BottomTabNavigator from './BottomTabNavigator'

export default function () {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
