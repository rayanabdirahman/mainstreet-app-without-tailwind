import * as React from 'react'
import { View as DefaultView, TouchableWithoutFeedback, Keyboard, Text, FlatList } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { CommentInput, KeyboardAvoidingContainer, Spinner } from '../../components'
import { CommentModel } from '../../domain/interfaces'
import useSinglePostData from '../../hooks/useSinglePostData'
import { RootRouteName } from '../../navigation/routeNames'
import { RootStackParamList } from '../../navigation/type'

export function CommentScreen(
  { navigation, route }: StackScreenProps<RootStackParamList, RootRouteName.COMMENTS>
) {
  const [comment, setComment] = React.useState<string>()
  const { postId } = route.params
  const [post, comments, isLoadingComplete]= useSinglePostData(postId)

  if (!isLoadingComplete) {
    return (
      <Spinner />
    ) 
  } else {
    return (
      <KeyboardAvoidingContainer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={comments}
            showsVerticalScrollIndicator={false}
            keyExtractor={(comment: CommentModel) => comment._id}
            renderItem={({ item: comment }: { item: CommentModel }) => (
              <DefaultView>
                <Text>{comment.postedBy.firstName}</Text>
                <Text>{comment.content}</Text>
              </DefaultView>
            )}
          />          
        </TouchableWithoutFeedback>
        <CommentInput
          onChangeText={(value: string) => setComment(value)}
          onSubmitEditing={() => console.log('EVENL ', { comment, postId })}
          avatar={"https://via.placeholder.com/150/C4C4C4/C4C4C4/"}
          placeholder="Add a comment..." />  
      </KeyboardAvoidingContainer>
    )
  }
}
