import React, { Component } from 'react'
import { connect } from 'react-redux'
import SweetAlert from 'sweetalert-react';
import TodoForm from './containers/TodoForm'
import TodoList from './containers/TodoList'
import SignUpForm from './components/SignUp'
import SignInForm from './components/SignIn'
import * as actionCreators from './actions/api'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      show: true
    }
    this.handleUserSignUp = this.handleUserSignUp.bind(this);
    this.handleUserSignIn = this.handleUserSignIn.bind(this);
  }
  componentDidMount() {
    this.handleFetchTodos()
  }

  handleFetchTodos() {
    this.props.fetchTodos()
  }

  handleAddTodo(todo) {
    this.props.addTodo(todo)
  }

  handleUpdateTodo(todo, completed) {
    this.props.updateTodo(todo)
  }

  handleDeleteTodo(id) {
    this.props.deleteTodo(id)
  }

  handleUserSignUp(user) {
    console.log('-----sing up success');
    // show success message
  }

  handleUserSignIn(user) {
    this.props.userSignIn(user);
  }

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <TodoForm
          onAddTodo={this.handleAddTodo.bind(this)}
        />
        <TodoList
          onUpdateTodo={this.handleUpdateTodo.bind(this)}
          onDeleteTodo={this.handleDeleteTodo.bind(this)}
        />

        <SignUpForm onSubmit={(user) =>{
          console.log('--------- submit signup form now');
          this.handleUserSignUp(user);
        }} error='this is error message'/>

        <SignInForm onSubmit={this.handleUserSignIn} error='this is error message'/>

        <SweetAlert
        show={this.state.show}
        title="Demo OutsideClick"
        text="SweetAlert in React"
        onConfirm={() => this.setState({ show: false })}
        onOutsideClick={() => this.setState({ show: false })}
      />
      </div>
    )
  }
}

App = connect(null, actionCreators)(App)

export default App
