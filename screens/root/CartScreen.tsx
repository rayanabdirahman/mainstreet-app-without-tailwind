import * as React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { Layout } from '../../components'

export function CartScreen() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>
      </View>      
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
