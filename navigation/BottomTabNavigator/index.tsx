import { Feather, AntDesign,  } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import Colors from '../../constants/Colors'
import { BottomTabRouteName } from '../routeNames'
import { BottomTabParamList } from '../type'
import CartTabNavigator from './CartTabNavigator'
import FeedTabNavigator from './FeedTabNavigator'
import NotificationTabNavigator from './NotificationTabNavigator'
import ProfileTabNavigator from './ProfileTabNavigator'

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
        component={FeedTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="earth" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.NOTIFICATION}
        component={NotificationTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="hearto" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.CART}
        component={CartTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon type="Feather" name="shopping-bag" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={BottomTabRouteName.PROFILE}
        component={ProfileTabNavigator}
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
