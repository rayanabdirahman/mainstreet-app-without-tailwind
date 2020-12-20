import axios from 'axios'
import buildClient from '../utilities/axios-helper'
import { PostModel } from '../domain/interfaces'

const API_BASE_URL = `http://a23cefdf5789.ngrok.io/api/post`
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYzkzYzViMmZhODYxMjRhMzBhMzI0ZSIsImZpcnN0TmFtZSI6IkphbmUiLCJsYXN0TmFtZSI6IkRvZSIsInVzZXJuYW1lIjoiamFuZSIsImVtYWlsIjoiamFuZUB0ZXN0LmNvbSIsImF2YXRhciI6Imh0dHBzOi8vZXUudWktYXZhdGFycy5jb20vYXBpLz9uYW1lPUphbmUrRG9lJmJhY2tncm91bmQ9cmFuZG9tJmJvbGQ9dHJ1ZSZyb3VuZGVkPXRydWUiLCJsaWtlcyI6W119LCJpYXQiOjE2MDcwMjM3MDcsImV4cCI6MzAwMDAwMDAxNjA3MDIzNzAwfQ.D-7_1jBopAgfS3Agzure21M7xnVfHC_3MLNmAccE04Q'

type PostApi = {
  findOne(_id: string): Promise<PostModel>
  likeOne(_id: string): Promise<PostModel>
  findAll(): Promise<PostModel[]>
}

const PostApi: PostApi = {
  /**
   * Find a single post
   * @get /api/post/:_id
   */
  async findOne(_id: string): Promise<PostModel> {
    try {
      const response  = await buildClient(token).get(`${API_BASE_URL}/${_id}`)
      return response.data.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  /**
   * like a single post
   * @param { _id } string - id of the post to like
   * @put /api/post/:_id/like
   */
  async likeOne(_id: string): Promise<PostModel> {
    try {
      const response  = await buildClient(token).put(`${API_BASE_URL}/${_id}/like`) // use axios helper to set request headers
      const { post } = response.data.data
      return post
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

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
