import { combineReducers } from 'redux'
import form from './form'
import todos from './todos'
import user from './user'

const reducers = combineReducers({
  form, todos, user
})

export default reducers
