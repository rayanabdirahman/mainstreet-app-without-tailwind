import * as React from 'react'
import PostApi from '../api/post'
import { PostModel } from '../domain/interfaces'

export default function usePostLikeData(likes: string[]) {
  const [hasPostBeenLikedByUser, sethasPostBeenLikedByUser] = React.useState<boolean>()
  const [numberOfLikes, setNumberOfLikes] = React.useState<number>()

  async function likeOnePostAndUpdateData (_id: string): Promise<void> {
    try {
      // Like a single post
      const post: PostModel  = await PostApi.likeOne(_id);

      // check if user has liked the post
      (post && !post.likes.length) ? sethasPostBeenLikedByUser(false) : sethasPostBeenLikedByUser(true)

      // update the number of likes a post has
      setNumberOfLikes(post.likes.length)

    } catch (e) {
      console.log('usePostLikeData ERROR: ', e)
    }
  }

  React.useEffect(() => {
    // load initial like data for post
    function loadInitialPostLikeData() {
      // check if user has liked the post
      (likes && !likes.length) ? sethasPostBeenLikedByUser(false) : sethasPostBeenLikedByUser(true)

      // set number of likes for post
      setNumberOfLikes(likes.length)
    }
    loadInitialPostLikeData()
  }, [])

  return [likeOnePostAndUpdateData, hasPostBeenLikedByUser, numberOfLikes] as const
}
