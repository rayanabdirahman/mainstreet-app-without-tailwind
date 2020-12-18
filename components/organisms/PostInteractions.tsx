import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'
import { View as DefaultView, TouchableOpacity as DefaultTouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../atoms/Text'
import Colors from '../../constants/Colors'

type Props = {}

const Container = styled.View<DefaultView['props']>`
  flex-direction: column;
  margin-left: 8px;
  margin-bottom: 8px;
`

export function PostInteractions(props: Props) {
  return (
    <Container>
      <DefaultView style={{ flexDirection: 'row', marginBottom: 8 }}>
        <DefaultTouchableOpacity
          onPress={() => alert('liked')}
          style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
          <AntDesign
            name="hearto"
            color={Colors.black}
            size={24}
            style={{ marginRight: 8 }}
          />
          <Text bold  style={{ fontSize: 14, marginBottom: 0  }}>2K</Text>
        </DefaultTouchableOpacity>
        <DefaultView style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Feather
            name="message-square"
            color={Colors.black}
            size={24}
            style={{ marginRight: 8 }}
          />
          <Text bold  style={{ fontSize: 14, marginBottom: 0  }}>265</Text>
        </DefaultView>
      </DefaultView>
      <Text light style={{ fontSize: 12, marginBottom: 0  }}>
        liked by janny, champaignpapi and 400 others
      </Text>
    </Container>
  )
}
