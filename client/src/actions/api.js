import { createAction } from 'redux-actions'
import * as types from '../constants/api'
import api from '../api/todos'
import userApi from '../api/users'

export const fetchTodos = createAction(types.FETCH_TODOS, api.fetchTodos)
export const addTodo = createAction(types.ADD_TODO, api.addTodo)
export const deleteTodo = createAction(types.DELETE_TODO, api.deleteTodo)
export const updateTodo = createAction(types.UPDATE_TODO, api.updateTodo)
export const userSignIn = createAction(types.USER_SIGNIN, userApi.signIn)
export const userSignUp = createAction(types.USER_SIGNUP, userApi.signUp)

export const addNotice = createAction('ADD_NOTICE')
export const addError = createAction('ADD_ERROR')
export const resetError = createAction('RESET_ERROR_MESSAGE')
export const resetNotice = createAction('RESET_NOTICE_MESSAGE')
