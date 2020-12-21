export interface AuthToeknModel {
  toekn: string
}

export interface SignUpModel {
  firstName: string
  lastName: string
  username: string
  email: string
  avatar?: string
  password: string
}

export interface SignInModel {
  email: string
  password: string
}

export interface UserModel {
  _id: string
  firstName: string
  lastName: string
  username: string
  email: string
  avatar: string
  likes: string[]
  createdAt: string
  updatedAt: string
}

export interface PostModel {
  _id: string
  content: string
  postedBy: UserModel
  likes: string[]
  comments: CommentModel[]
  createdAt: string
  updatedAt: string
}

export interface CommentModel {
  _id: string
  post: string
  content: string
  postedBy: UserModel
  likes?: string[]
  createdAt: string
  updatedAt: string
}
