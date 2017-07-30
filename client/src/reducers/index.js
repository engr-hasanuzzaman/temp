import { combineReducers } from 'redux'
import form from './form'
import todos from './todos'
import user from './user'
import errors from './errors'


const reducers = combineReducers({
  form, todos, user, errors
})

export default reducers
