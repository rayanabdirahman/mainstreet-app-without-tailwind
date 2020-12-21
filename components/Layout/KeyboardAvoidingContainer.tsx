import * as React from 'react'
import {
  View as DefaultView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { LayoutWithOutContentContainer } from './'

type Props =  DefaultView['props'] & { }

export const KeyboardAvoidingContainer = (
{ children }: Props) => (
  <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={{ flex: 1 }}
    keyboardVerticalOffset={90}
    >
    <LayoutWithOutContentContainer>
      { children }         
    </LayoutWithOutContentContainer>
  </KeyboardAvoidingView>
)
