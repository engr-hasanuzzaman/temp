import { handleActions } from 'redux-actions'
import * as ActionTypes from '../constants/error'

const initialState = {
  errors: []
}

function errors(state = initialState, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return initialState
  } else if (error) {
    return [...state, error]
  }

  return state
}
export default errors;
