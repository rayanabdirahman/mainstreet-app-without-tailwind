import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import Colors from '../../constants/Colors'
import { FeedScreen, ProfileScreen } from '../../screens/root'
import { FeedTabRouteName } from '../routeNames'
import { FeedTabParamList } from '../type'

const FeedTabStack = createStackNavigator<FeedTabParamList>()

export default function FeedTabNavigator() {
  return (
    <FeedTabStack.Navigator screenOptions={{ 
      headerBackTitle: ' ',
      headerTintColor: Colors.black,
      // headerStyle: { shadowColor: Colors.white },
      headerTitleStyle: { color: Colors.black }
    }}>
      <FeedTabStack.Screen
        name={FeedTabRouteName.FEED_SCREEN}
        component={FeedScreen}
        options={{ headerTitle: 'Global Feed' }}
      />
      <FeedTabStack.Screen
        name={FeedTabRouteName.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{ headerTitle: 'User Profile' }}
      />
    </FeedTabStack.Navigator>
  )
}
