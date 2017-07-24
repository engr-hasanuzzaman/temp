import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoForm from './containers/TodoForm'
import TodoList from './containers/TodoList'
import * as actionCreators from './actions/api'

var Router       = require('react-router');
var RouteHandler = Router.RouteHandler;
var $            = require('jquery');

import SignUpForm from './components/auth/SignUpForm'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: null
    }
    this.singIn = this.singIn.bind(this);
  }
  componentDidMount() {
    this.handleFetchTodos()
    // this.singIn();
  }

  singIn(){
    $.ajax({
        method: "GET",
        url: "/auth/is_signed_in.json"
      })
      .done(function(data){
        this.setState({ signedIn: data.signed_in });
      }.bind(this));
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

  render() {
    return (
      <div className="App">
        <SignUpForm />
      </div>
    )
  }
}

App = connect(null, actionCreators)(App)

export default App
