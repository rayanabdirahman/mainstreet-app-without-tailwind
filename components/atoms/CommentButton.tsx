import React from 'react'
import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native'
import { Text } from './Text'
import Colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { RootRouteName } from '../../navigation/routeNames'

type Props = {
  numberOfComments: number | undefined
  postId: string
}

const IconContainer = styled.TouchableOpacity<DefaultTouchableOpacity['props']>`
  flex-direction: row;
  align-items: center;
`

export function CommentButton({ numberOfComments, postId }: Props) {
  const navigation = useNavigation()
  return (
    <IconContainer
      onPress={() => navigation.navigate(RootRouteName.COMMENTS, { postId })}
    >
      <Feather
        name="message-square"
        color={Colors.black}
        size={24}
        style={{ marginRight: 8 }}
      />
      <Text bold style={{ 
        fontSize: 14, marginBottom: 0  
      }}>
        {numberOfComments || ""}
      </Text>
    </IconContainer>
  )
}
