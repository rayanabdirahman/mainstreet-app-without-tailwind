import * as React from 'react'
import PostApi from '../api/post'
import { CommentModel, PostModel } from '../domain/interfaces'

export default function useSinglePostData(_id: string) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [post, setPost] = React.useState<PostModel>()
  const [comments, setComments] = React.useState<CommentModel[]>([])

  React.useEffect(() => {
    async function loadPostsAsyncData() {
      try {
        // Load post
        const post  = await PostApi.findOne(_id)
        setPost(post)

        // set comments
        setComments(post.comments)

        setLoadingComplete(true)

        console.log('hook', post)
      } catch (e) {
        console.log('useSinglePostData ERROR: ', e)
      }
    }
    loadPostsAsyncData()
  }, [])

  return [post, comments, isLoadingComplete] as const
}
