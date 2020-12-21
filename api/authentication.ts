import axios from 'axios'
import Constants from 'expo-constants'
import buildClient from '../utilities/axios-helper'
import { AuthTokenModel, SignUpModel, SignInModel, UserModel } from '../domain/interfaces'

const API_BASE_URL = `${Constants.manifest.extra.API_URL}/user`

type AuthenticationApi = {
  signUp(model: SignUpModel): Promise<AuthTokenModel>
  signIn(model: SignInModel): Promise<AuthTokenModel>
  // signOut(): Promise<ApiSuccessResponse>
  authorise(token: string | null): Promise<UserModel>
}

const AuthenticationApi: AuthenticationApi = {
  /**
   * Register user
   * @param { SignUpModel } model - stores user signup details
   * @post /api/user/
   */
  async signUp(model: SignUpModel): Promise<AuthTokenModel> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/signup`, model)
      return response.data.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  /**
   * Sign user in
   * @param { SignInModel } model - stores user sign in details
   * @post /api/user/signin
   */
  async signIn(model: SignInModel): Promise<AuthTokenModel> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/signin`, model)
      return response.data.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  // /**
  //  * Sign user out
  //  * @post /api/user/signout
  //  */
  // async signOut(): Promise<ApiSuccessResponse> {
  //   try {
  //     const response  = await axios.post(`${API_BASE_URL}/signout`)
  //     return response.data
  //   } catch (error) {
  //     throw error.response ? error.response.data.error : error.request
  //   }
  // },

  /**
   * authorise user
   * @param { string } token - signed JWT token
   * @get /api/user/authorise
   */
  async authorise(token: string | null): Promise<UserModel> {
    try {
      const response  = await buildClient(token).get(`${API_BASE_URL}/authorise`) // use axios helper to set request headers
      return response.data.data.user
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  }
}

export default AuthenticationApi
