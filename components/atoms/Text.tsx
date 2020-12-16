import React from 'react'
import styled from 'styled-components/native'
import { Text as DefaultText } from 'react-native'

type TextProps = DefaultText['props'] & {
  bold?: boolean
  light?: boolean
}

export const Text = styled.Text<TextProps>`
  font-size: 14px;
  font-family: ${({ theme, bold }) => (bold ? theme.font.bold : theme.font.regular)};
  color: ${({ theme, light }) => (light ? theme.color.darkgrey : theme.color.black)};
  margin-bottom: 8px;
`
