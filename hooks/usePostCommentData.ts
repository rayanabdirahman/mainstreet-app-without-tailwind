import * as React from 'react'
import PostApi from '../api/post'
import { PostModel } from '../domain/interfaces'

export default function usePostCommentData(comments: string[]) {
  const [numberOfComments, setNumberOfComments] = React.useState<number>()

  React.useEffect(() => {
    // load initial comment data for post
    function loadInitialPostCommentsData() {
      // set number of comments for post
      setNumberOfComments(comments.length)
    }
    loadInitialPostCommentsData()
  }, [])

  return [numberOfComments] as const
}
