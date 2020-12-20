import React from 'react'
import { View as DefaultView } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../atoms/Text'
import usePostLikeData from '../../hooks/usePostLikeData'
import { LikeButton } from '../atoms/LikeButton'
import { CommentButton } from '../atoms/CommentButton'
import usePostCommentData from '../../hooks/usePostCommentData'

const Container = styled.View<DefaultView['props']>`
  flex-direction: column;
  margin-left: 8px;
  margin-bottom: 8px;
`

export function PostInteractions({ postId, likes, comments }: { postId: string, likes: string[], comments: string[] }) {
  const [likeOnePost, hasPostBeenLikedByUser, numberOfLikes] = usePostLikeData(likes)
  const [numberOfComments] = usePostCommentData(likes)
  return (
    <Container>
      <DefaultView style={{ flexDirection: 'row', marginBottom: 8 }}>
        <LikeButton 
          liked={hasPostBeenLikedByUser}
          numberOfLikes={numberOfLikes}
          handleLikeToggle={() => likeOnePost(postId)}
        />
        <CommentButton postId={postId} numberOfComments={numberOfComments} />
      </DefaultView>
      <Text light style={{ fontSize: 12, marginBottom: 0  }}>
        liked by janny, champaignpapi and 400 others
      </Text>
    </Container>
  )
}
