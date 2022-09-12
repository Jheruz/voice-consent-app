import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/home'
import Consents from '../screens/consents'
import themeColor from '../theme/colors'

import routeList from './list'

const Tab = createBottomTabNavigator()

const screenOptions = {
  headerShown: false,
  tabBarIconStyle: {
    display: 'none',
  },
  tabBarItemStyle: {
    justifyContent: 'center',
  },
  tabBarLabelStyle: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  tabBarActiveTintColor: themeColor.black,
}

export default function () {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={routeList.HOME} component={Home} />
      <Tab.Screen name={routeList.CONSENTS} component={Consents} />
    </Tab.Navigator>
  )
}
