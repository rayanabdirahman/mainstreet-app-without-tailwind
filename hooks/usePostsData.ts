import * as React from 'react'
import PostApi from '../api/post'
import { PostModel } from '../domain/interfaces'

export default function usePostsData() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [posts, setPosts] = React.useState<PostModel[]>([])

  React.useEffect(() => {
    async function loadPostsAsyncData() {
      try {
        // Load posts
        const posts  = await PostApi.findAll()
        setPosts(posts)

        setLoadingComplete(true)
      } catch (e) {
        console.log('usePostsData ERROR: ', e)
      }
    }
    loadPostsAsyncData()
  }, [])

  return [posts, isLoadingComplete] as const
}
