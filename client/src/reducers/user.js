import { handleActions } from 'redux-actions'
import * as UiAction from '../constants/ui'
import * as ApiAction from '../constants/api'

const initialState = {
  apiToken: '',
  type: '',
  signIn: false,
  name: '',
  email: ''
}

const user = handleActions({
  // ['FETCH_PROFILE']: (state, action) => ({
  //
  //   next: (state, action) => {...state, payload }
  //   // name: action.payload.name,
  //   // type: action.payload.type,
  //   // email: action.payload.email}action.payload,
  //   throw: (state, action) => initialState
  // }),
  ['USER_SIGNIN']: {
    next: (state, action) => Object.assign({}, state, action.payload),
    throw: (state, action) => initialState
  }
}, initialState)

export default user;
