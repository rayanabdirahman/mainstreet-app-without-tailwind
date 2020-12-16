import React from 'react'
import { Thumbnail as DefaultThumbnail } from 'native-base'
import { View as DefaultView } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../atoms/Text'

export type Props =  DefaultThumbnail['props'] & {
  avatar?: string
  name: string
  username: string
  status: string
}

const Container = styled.View<DefaultView['props']>`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`

export function PostHeader(props: Props) {
  return (
    <Container>
      <DefaultThumbnail style={{ marginRight: 8 }} {...props} />
      <DefaultView style={{ justifyContent: 'center' }}>
        <DefaultView style={{ flexDirection: 'row', marginBottom: 4 }}>
          <Text style={{ fontSize: 14, marginBottom: 0, marginRight: 4 }} bold>{props.name}</Text>
          <Text style={{ fontSize: 14, marginBottom: 0 }}>@{props.username}</Text>        
        </DefaultView>
        <Text style={{ fontSize: 14, marginBottom: 0 }} light>{props.status}</Text>         
      </DefaultView>
    </Container>
  )
}
