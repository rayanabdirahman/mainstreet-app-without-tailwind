import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native'
import { Text } from '../atoms/Text'
import Colors from '../../constants/Colors'

type Props = {
  liked: boolean | undefined
  numberOfLikes: number | undefined
  handleLikeToggle(): Promise<void>
}

const IconContainer = styled.TouchableOpacity<DefaultTouchableOpacity['props']>`
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`

export function LikeButton({ handleLikeToggle, liked, numberOfLikes }: Props) {
  return (
    <IconContainer
      onPress={handleLikeToggle}>
      <AntDesign
        name={ liked ? "heart" : "hearto" }
        color={ liked ? Colors.red: Colors.black}
        size={24}
        style={{ marginRight: 8 }}
      />
      <Text bold style={{ 
        fontSize: 14,
        marginBottom: 0,
        color: `${
          liked ? Colors.red: Colors.black
        }` }}>
        {numberOfLikes || ""}
      </Text>
    </IconContainer>
  )
}
