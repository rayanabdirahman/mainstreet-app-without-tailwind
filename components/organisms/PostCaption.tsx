import React from 'react'
import { View as DefaultView } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../atoms/Text'

export type Props = { username: string, caption: string }

const Container = styled.View<DefaultView['props']>`
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
`

export function PostCaption({ username, caption }: Props) {
  return (
    <Container>
      <Text bold style={{ marginBottom: 0, marginRight: 4 }}>{username}</Text>  
      <Text style={{ marginBottom: 0 }}>{caption}</Text>
    </Container>
  )
}
