import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { SessionState } from './types'

export type State = {
  session: SessionState
}

const middleware = [thunk]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)