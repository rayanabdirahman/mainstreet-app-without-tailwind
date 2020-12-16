import React from 'react'
import { View as DefaultView } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../atoms/Text'
import Colors from '../../constants/Colors'


export type Props = {
  username?: string
  comment?: string
}

const Container = styled.View<DefaultView['props']>`
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
`

export function PostComment(props: Props) {
  return (
    <Container>
      <Text bold style={{ marginBottom: 0, marginRight: 4 }}>Footlocker</Text>  
      <Text style={{ marginBottom: 0 }}>New Nike Airmax 95</Text>
    </Container>
  )
}
