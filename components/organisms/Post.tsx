import React from 'react'
import { View as DefaultView } from 'react-native'
import styled from 'styled-components/native'
import { PostHeader } from './PostHeader'
import { PostImage } from './PostImage'
import { PostInteractions } from './PostInteractions'
import { PostCaption } from './PostCaption'
import { PostModel } from '../../domain/interfaces'

const Container = styled.View<DefaultView['props']>`
  flex-direction: column;
  margin-bottom: 24px;
`

export function Post({ post }: { post: PostModel }) {
  return (
    <Container>
      {/* TODO: store user fullname under name */}
      <PostHeader 
        name={`${post.postedBy.firstName} ${post.postedBy.lastName}`}
        status="Uploaded a new item" 
        {...post.postedBy} />
      <PostImage source={{ uri: 'https://via.placeholder.com/150/C4C4C4/C4C4C4/' }} />
      <PostInteractions />
      <PostCaption username={post.postedBy.username} caption={post.content} />
    </Container>
  )
}
