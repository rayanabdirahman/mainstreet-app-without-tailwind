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
  comments: string[]
  createdAt: string
  updatedAt: string
}
