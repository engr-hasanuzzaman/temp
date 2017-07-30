import { handleActions } from 'redux-actions'
import * as UiAction from '../constants/ui'
import * as ApiAction from '../constants/api'

const initialState = {
  name: '',
  email: '',
  jwt: '',
  error: false
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
    next: (state, action) => Object.assign({}, state, action.payload.user),
    throw: (state, action) => console.log('your sing in throw' + action)//Object.assign({}, state, initialState)
  }

}, initialState)

export default user;
