import React from 'react'
import styled from 'styled-components/native'
import { Text as DefaultText, TextInput as DefaultTextInput } from 'react-native'

type Props = DefaultTextInput['props'] & {
  bold?: boolean
  light?: boolean
}

export const CommentInput = styled.TextInput<Props>`
  font-size: 14px;
  font-family: ${({ theme, bold }) => (bold ? theme.font.bold : theme.font.regular)};
  color: ${({ theme, light }) => (light ? theme.color.darkgrey : theme.color.black)};
  border-radius: 32px;
  padding: 20px 0 20px 20px;
  background-color: ${({ theme }) => theme.color.lightgrey};
`
