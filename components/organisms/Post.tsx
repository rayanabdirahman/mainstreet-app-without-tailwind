import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Image as DefaultImage, TouchableOpacity } from 'react-native'
import { View as DefaultView } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../atoms/Text'
import { PostHeader, Props as PostHeaderProps } from './PostHeader'
import { PostImage } from './PostImage'
import { PostInteractions } from './PostInteractions'
import Colors from '../../constants/Colors'
import { PostComment } from './PostComment'


type Props =  PostHeaderProps & DefaultImage['props'] & {

}

const Container = styled.View<DefaultView['props']>`
  flex-direction: column;
  /* align-items: center; */
`

export function Post(props: Props) {
  return (
    <Container>
      <PostHeader {...props} />
      <PostImage source={{ uri: 'https://via.placeholder.com/150/C4C4C4/C4C4C4/' }} />
      <PostInteractions />
      <PostComment />
    </Container>
  )
}
