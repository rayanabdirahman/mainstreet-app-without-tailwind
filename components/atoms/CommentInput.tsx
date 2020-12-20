import React from 'react'
import styled from 'styled-components/native'
import { Thumbnail as DefaultThumbnail } from 'native-base'
import { View as DefaultView, TextInput as DefaultTextInput } from 'react-native'

type Props = DefaultTextInput['props'] & {
  avatar: string
}

const Input = styled.TextInput<Props>`
  border-radius: 32px;
  padding: 12px 0 12px 20px;
  border-color: ${({ theme }) => theme.color.lightgrey};
  border-width: 1px;
  flex: 1;
`

const Container = styled.View<DefaultView['props']>`
  padding: 24px 16px;
  border-color: ${({ theme }) => theme.color.lightgrey};
  border-top-width: 1px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const CommentInput = (props: Props) => (
  <Container>
    <DefaultThumbnail
      small
      source={{ uri: props.avatar }}
      style={{ marginRight: 16 }} />
    <Input {...props} />
  </Container>
)
