import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import Colors from '../../constants/Colors'
import { FeedScreen } from '../../screens/root'
import { FeedTabRouteName } from '../routeNames'
import { FeedTabParamList } from '../type'

const FeedTabStack = createStackNavigator<FeedTabParamList>()

export default function FeedTabNavigator() {
  return (
    <FeedTabStack.Navigator screenOptions={{ 
      headerStyle: { shadowColor: Colors.white },
      headerTitleStyle: { color: Colors.black }
    }}>
      <FeedTabStack.Screen
        name={FeedTabRouteName.FEED_SCREEN}
        component={FeedScreen}
        options={{ headerTitle: 'Global Feed' }}
      />
    </FeedTabStack.Navigator>
  )
}
