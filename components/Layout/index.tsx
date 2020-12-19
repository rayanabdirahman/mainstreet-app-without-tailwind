import { View as DefaultView,  SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import * as React from 'react'
import Colors from '../../constants/Colors'

type Props =  DefaultView['props'] & { }

const LayoutContentContainer = styled.View<Props>`
  margin-top: 16px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.color.white };
`

export function Layout(props: Props) {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.white }}>
      <LayoutContentContainer {...props}>
        { props.children}
      </LayoutContentContainer>
    </SafeAreaView>
  )
}

export function LayoutWithOutContentContainer(props: Props) {
  return (
    <SafeAreaView style={{ 
      backgroundColor: Colors.white,
      flex: 1 }}>
      <>
      { props.children}
      </>
    </SafeAreaView>
  )
}
