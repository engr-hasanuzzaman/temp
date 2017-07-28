import { handleActions } from 'redux-actions'
import * as UiAction from '../constants/ui'
import * as ApiAction from '../constants/api'

const initialState = {
  email: '',
  password: '',
  apiToken: '',
  type: 'general',
  signIn: false
}

const user = handleActions({
  ['USER_SIGNUP']: (state, action) => ({
    ...state,
    user: action.payload
  })
}, initialState)

export default user;
