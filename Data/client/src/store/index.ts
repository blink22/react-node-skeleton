import { createStore, combineReducers, applyMiddleware } from 'redux'
import session, { State as SessionState } from './session/reducer'
import thunk from 'redux-thunk'
export interface RootState {
  session: SessionState
}
export default createStore(combineReducers<RootState>({
  session
}), applyMiddleware(thunk))