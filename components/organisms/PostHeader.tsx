import React from 'react'
import { Thumbnail as DefaultThumbnail } from 'native-base'
import { View as DefaultView, TouchableOpacity as DefaultTouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { Text } from '../atoms/Text'
import { FeedTabRouteName } from '../../navigation/routeNames'
import timeStamp from '../../utilities/timeStamp'

export type Props = {
  _id: string
  avatar: string
  name: string
  username: string
  status: string
  createdAt: string
}

const Container = styled.TouchableOpacity<DefaultTouchableOpacity['props']>`
  flex-direction: row;
  margin-bottom: 12px;
`

export function PostHeader({ _id, avatar, name, username, status, createdAt}: Props) {
  const navigation = useNavigation()
  return (
    <Container onPress={() => navigation.navigate(FeedTabRouteName.PROFILE_SCREEN, { userId: _id })}>
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
        <Text light> {timeStamp(new Date(), new Date(createdAt))} </Text>          
      </DefaultView>      
    </Container>
  )
}
