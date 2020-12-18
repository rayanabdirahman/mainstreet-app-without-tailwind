import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import Colors from '../constants/Colors'
import { CommentScreen } from '../screens/root'

import BottomTabNavigator from './BottomTabNavigator'
import { RootRouteName } from './routeNames'
import { RootStackParamList } from './type'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({  }: {  }) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerShown: false,
      headerBackTitle: ' ',
      headerTintColor: Colors.black,
      headerTitleStyle: { color: Colors.black }
      }}>
      <Stack.Screen name={RootRouteName.ROOT} component={BottomTabNavigator} />
      <Stack.Screen
        name={RootRouteName.COMMENTS}
        component={CommentScreen}
        options={{
          headerShown: true,
          headerTitle: 'Comments'
        }}
      />
    </Stack.Navigator>
  )
}
