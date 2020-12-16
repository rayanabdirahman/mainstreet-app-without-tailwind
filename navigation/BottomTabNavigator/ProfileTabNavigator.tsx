import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ProfileScreen } from '../../screens/root'
import { ProfileTabRouteName } from '../routeNames'
import { ProfileTabParamList } from '../type'

const ProfileTabStack = createStackNavigator<ProfileTabParamList>()

export default function ProfileTabNavigator() {
  return (
    <ProfileTabStack.Navigator>
      <ProfileTabStack.Screen
        name={ProfileTabRouteName.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileTabStack.Navigator>
  )
}
