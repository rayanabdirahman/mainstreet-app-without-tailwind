import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { NotificationScreen } from '../../screens/root'
import { NotificationTabRouteName } from '../routeNames'
import { NotificationTabParamList } from '../type'

const NotificationTabStack = createStackNavigator<NotificationTabParamList>()

export default function NotificationTabNavigator() {
  return (
    <NotificationTabStack.Navigator>
      <NotificationTabStack.Screen
        name={NotificationTabRouteName.NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={{ headerTitle: 'Notifications' }}
      />
    </NotificationTabStack.Navigator>
  )
}
