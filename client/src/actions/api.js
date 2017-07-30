import { createAction } from 'redux-actions'
import * as types from '../constants/api'
import api from '../api/todos'
import userApi from '../api/users'
import * as ErrorTypes from '../constants/error'

export const fetchTodos = createAction(types.FETCH_TODOS, api.fetchTodos)
export const addTodo = createAction(types.ADD_TODO, api.addTodo)
export const deleteTodo = createAction(types.DELETE_TODO, api.deleteTodo)
export const updateTodo = createAction(types.UPDATE_TODO, api.updateTodo)
export const userSignIn = createAction(types.USER_SIGNIN, userApi.signIn)
export const oUserSignUp = createAction(types.USER_SIGNUP)
export const userSignOut = createAction('USER_SING_OUT')

export const addNotice = createAction('ADD_NOTICE')
export const addError = createAction('ADD_ERROR')
export const resetError = createAction('RESET_ERROR_MESSAGE')
export const resetNotice = createAction(ErrorTypes.RESET_NOTICE_MESSAGE)

// this is chunk action creator that return
// function instead of action object
export const userSignUp = function(user){
  return function(dispatch){
    userApi.signUp(user).
    then((res) =>{
      dispatch(addError(['User sign up succesful']));
    })
    .catch((error) =>{
      dispatch(addError(error.response.data));
    })
  }
}
