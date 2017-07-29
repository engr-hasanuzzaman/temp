import { handleActions } from 'redux-actions'
import * as ActionTypes from '../constants/api'

const initialState = {
  errors: []
}

function errors(state = initialState, action) {
  const { type, error } = action
  console.log('--------- with in errors reducer');
  console.log(action);

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return []
  } else if (error) {
    return [...state, error]
  }

  return state;
}
export default errors;
