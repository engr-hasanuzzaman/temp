import { combineReducers } from 'redux'
import form from './form'
import todos from './todos'
import user from './user'
import errors from './errors'
import { reducer } from 'react-redux-sweetalert';

const reducers = combineReducers({
  form, todos, user, errors, sweetalert: reducer
})

export default reducers
