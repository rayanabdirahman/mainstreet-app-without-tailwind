import * as React from 'react'
import { ActivityIndicator } from 'react-native'
import { Layout } from '../Layout'
import Colors from '../../constants/Colors'

export function Spinner() {
  return (
    <Layout>
      <ActivityIndicator 
        size="small" color={Colors.black} />        
    </Layout>
  ) 
}
