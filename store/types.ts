import { UserModel } from '../domain/interfaces'

export type SessionState = {
  token: string | null,
  isAuthenticated: boolean,
  loading: boolean,
  user: UserModel | null
}
