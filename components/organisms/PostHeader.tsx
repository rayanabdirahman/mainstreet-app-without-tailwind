import React from 'react'
import { Thumbnail as DefaultThumbnail } from 'native-base'
import { View as DefaultView } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../atoms/Text'

export type Props = {
  avatar: string
  name: string
  username: string
  status: string
}

const Container = styled.View<DefaultView['props']>`
  flex-direction: row;
  margin-bottom: 12px;
`

export function PostHeader({ avatar, name, username, status}: Props) {
  return (
    <Container>
      <DefaultThumbnail 
        style={{  marginRight: 8, width: 48, height: 48 }}
        source={{ uri: avatar }} />
      <DefaultView style={{ 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
        }}>
        <DefaultView>
          <DefaultView style={{ flexDirection: 'row', marginBottom: 4 }}>
            <Text style={{ marginRight: 4 }} bold>{name}</Text>
            <Text>@{username}</Text>        
          </DefaultView>
          <Text light>{status}</Text>         
        </DefaultView>
        <Text light>1 hour ago</Text>          
      </DefaultView>      
    </Container>
  )
}
