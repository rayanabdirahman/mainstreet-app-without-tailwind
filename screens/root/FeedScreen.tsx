import * as React from 'react'
import { ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native'
import { Layout, Post } from '../../components'
import Colors from '../../constants/Colors'
import { PostModel } from '../../domain/interfaces'
import usePostsData from '../../hooks/usePostsData'

export function FeedScreen() {
  const posts: PostModel[] = usePostsData()
  if (!posts) {
    return (
      <Layout>
        <ActivityIndicator 
          size="large" color={Colors.brand} />        
      </Layout>
    ) 
  } else {
    return (
      <Layout>
        <FlatList
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(post: PostModel) => post._id}
          renderItem={({ item: post }: { item: PostModel }) => (
            <Post post={post} />
          )}
         />
      </Layout>
    )
  }
}
