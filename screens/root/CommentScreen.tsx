import * as React from 'react'
import { View as DefaultView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { CommentInput, LayoutWithOutContentContainer } from '../../components'
import Colors from '../../constants/Colors'

export function CommentScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={90}
      >
      <LayoutWithOutContentContainer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <DefaultView  style={{ flex: 1 }}> 
          </DefaultView>
        </TouchableWithoutFeedback>
        <CommentInput
          avatar={"https://via.placeholder.com/150/C4C4C4/C4C4C4/"}
          placeholder="Add a comment..." />            
      </LayoutWithOutContentContainer>
    </KeyboardAvoidingView>
  )
}
