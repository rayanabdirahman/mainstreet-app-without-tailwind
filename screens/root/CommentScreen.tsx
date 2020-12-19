import * as React from 'react'
import { View as DefaultView, Text } from 'react-native'
import { CommentInput, Layout } from '../../components'
import Colors from '../../constants/Colors'

export function CommentScreen() {
  return (
    <Layout>
      <DefaultView  style={{ flex: .9 }}>       
      </DefaultView>
      <CommentInput placeholder="Add comment" />            
    </Layout>
  )
}
