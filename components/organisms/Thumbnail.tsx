import React from 'react'
import { Thumbnail as DefaultThumbnail } from 'native-base'
import { View as DefaultView } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../atoms/Text'

type Props =  DefaultThumbnail['props'] & { 
  title: string
  subTitle?: string
}

const Container = styled.View<DefaultView['props']>`

`

export function Thumbnail(props: Props) {
  return (
    <Container>
      <DefaultThumbnail {...props} />
      <Text bold>{props.title}</Text>
      <Text light>{props.subTitle}</Text>
    </Container>
  )
}
