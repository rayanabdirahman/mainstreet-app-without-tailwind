export interface UserModel {
  _id: string
  firstName: string
  lastName: string
  username: string
  email: string
  avatar: string
  likes: string[]
}

export interface PostModel {
  _id: string
  content: string
  postedBy: UserModel
  likes: string[]
  createdAt: string
}
