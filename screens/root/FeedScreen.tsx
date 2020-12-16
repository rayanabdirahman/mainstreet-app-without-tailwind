import * as React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { Layout, Post} from '../../components'

export function FeedScreen() {
  return (
    <Layout>
      <Post
        name="Footlocker"
        username="footlocker"
        status="Uploaded a new item"
        source={{ uri: 'https://via.placeholder.com/150/F8BAC7/FFFFFF/' }} />
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
