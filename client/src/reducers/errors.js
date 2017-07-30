import { handleActions } from 'redux-actions'
import * as ActionTypes from '../constants/api'
import * as ErrorActionTypes from '../constants/error'

const initialState = {
  errors: []
}

// error reducer function
function errors(state = initialState, action) {
  const { type, error } = action
  console.log('--------- with in errors reducer');
  console.log(action.payload);

  switch (action.type) {
    case 'RESET_ERROR_MESSAGE':
      return [];
      break;
    case 'ADD_ERROR':
      console.log('add error call');
      return action.payload;
      break;
    default:
      return state;
  }
}

export default errors;
