import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { CartScreen } from '../../screens/root'
import { CartTabRouteName } from '../routeNames'
import { CartTabParamList } from '../type'

const CartTabStack = createStackNavigator<CartTabParamList>()

export default function CartTabNavigator() {
  return (
    <CartTabStack.Navigator>
      <CartTabStack.Screen
        name={CartTabRouteName.CART_SCREEN}
        component={CartScreen}
        options={{ headerTitle: 'Bag' }}
      />
    </CartTabStack.Navigator>
  )
}
