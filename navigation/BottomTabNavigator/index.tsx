import { Feather, AntDesign,  } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { View, Text } from 'react-native'

import Colors from '../../constants/Colors'
import { BottomTabRouteName } from '../screenNames'
import { BottomTabParamList } from '../type'

// placeholder modal screen
// TODO: Find a better solution to open modal screens from bottom tab navigator
function PlaceHolderModalScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "white" }}>
      <Text>This is a placeholder modal!</Text>
    </View>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={BottomTabRouteName.FEED}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.tabIconSelected,
        inactiveTintColor: Colors.tabIconDefault
      }}>
      <BottomTab.Screen
        name={BottomTabRouteName.FEED}
        component={PlaceHolderModalScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="earth" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.NOTIFICATION}
        component={PlaceHolderModalScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="hearto" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.CART}
        component={PlaceHolderModalScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon type="Feather" name="shopping-bag" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.PROFILE}
        component={PlaceHolderModalScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string | any, color: string, type?: string }) {
  return props.type === "Feather" ?
    <Feather size={24} style={{ marginBottom: -3 }} {...props} /> :
    <AntDesign size={24} style={{ marginBottom: -3 }} {...props} />
}
