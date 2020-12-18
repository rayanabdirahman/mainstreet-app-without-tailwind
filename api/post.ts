import axios from 'axios'
import buildClient from '../utilities/axios-helper'
import { PostModel } from '../domain/interfaces'

const API_BASE_URL = `http://608da41fc4a2.ngrok.io/api/post`
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYzkzYzViMmZhODYxMjRhMzBhMzI0ZSIsImZpcnN0TmFtZSI6IkphbmUiLCJsYXN0TmFtZSI6IkRvZSIsInVzZXJuYW1lIjoiamFuZSIsImVtYWlsIjoiamFuZUB0ZXN0LmNvbSIsImF2YXRhciI6Imh0dHBzOi8vZXUudWktYXZhdGFycy5jb20vYXBpLz9uYW1lPUphbmUrRG9lJmJhY2tncm91bmQ9cmFuZG9tJmJvbGQ9dHJ1ZSZyb3VuZGVkPXRydWUiLCJsaWtlcyI6W119LCJpYXQiOjE2MDcwMjM3MDcsImV4cCI6MzAwMDAwMDAxNjA3MDIzNzAwfQ.D-7_1jBopAgfS3Agzure21M7xnVfHC_3MLNmAccE04Q'

type PostApi = {
  findAll(): Promise<PostModel[]>
}

const PostApi: PostApi = {
  /**
   * fetch all posts
   * @param {  }
   * @get /api/post/list
   */
  async findAll(): Promise<PostModel[]> {
    try {
      const response  = await buildClient(token).get(`${API_BASE_URL}/list`) // use axios helper to set request headers
      const { posts } = response.data.data
      return posts
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  }
}

export default PostApi
