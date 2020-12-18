import * as React from 'react'
import PostApi from '../api/post'
import { PostModel } from '../domain/interfaces'

export default function usePostsData() {
  const [posts, setPosts] = React.useState<PostModel[]>([])

  React.useEffect(() => {
    async function loadPostsAsyncData() {
      try {
        // Load posts
        const posts  = await PostApi.findAll()
        setPosts(posts)
      } catch (e) {
        console.log('POST ERROR: ', e)
      }
    }
    loadPostsAsyncData()
  }, [])

  return posts
}
