import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { View as DefaultView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Text  } from 'react-native'
import { CommentInput, LayoutWithOutContentContainer } from '../../components'
import Colors from '../../constants/Colors'
import { RootRouteName } from '../../navigation/routeNames'
import { RootStackParamList } from '../../navigation/type'

export function CommentScreen(
  { navigation, route }: StackScreenProps<RootStackParamList, RootRouteName.COMMENTS>
) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={90}
      >
      <LayoutWithOutContentContainer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <DefaultView  style={{ flex: 1 }}>
            <Text>{route.params.postId}</Text>
          </DefaultView>
        </TouchableWithoutFeedback>
        <CommentInput
          avatar={"https://via.placeholder.com/150/C4C4C4/C4C4C4/"}
          placeholder="Add a comment..." />            
      </LayoutWithOutContentContainer>
    </KeyboardAvoidingView>
  )
}
