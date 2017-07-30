import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SweetAlert from 'sweetalert-react';
import ReduxSweetAlert, { swal, close } from 'react-redux-sweetalert';
import {BrowserRouter, Route, Path, Switch} from 'react-router-dom';
import Nav from './components/Nav'


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
    this.props.userSignUp(user);
  }

  handleUserSignIn(user) {
    this.props.userSignIn(user);
  }

  render() {
    return (
      <div className="container">
        {
          this.props.errors.length > 0 && this.props.swal({
            title: 'Application Notification',
            text: this.props.errors.join('/n'),
            onConfirm: () =>{this.props.close; this.props.resetError();},
          })
        }
        <BrowserRouter>
          <div className=''>
              <Nav />
              <Switch>

                <Route exact path='/' render={(props) => (
                  <SignUpForm onSubmit={this.props.userSignUp}/>
                )}/>

                <Route exact path='/sign-in' render={(props) => (
                  <SignInForm onSubmit={this.props.userSignIn}/>
                )}/>


                <Route path='/sign-up' render={(props) => (
                  <SignUpForm onSubmit={this.props.userSignUp}/>
                )}/>

                <Route render={function() {
                  return <p> Your page not found! </p>
                }} />
              </Switch>
           </div>
         </BrowserRouter>
         <ReduxSweetAlert />
      </div>
    )
  }
}

App.propTypes = {
  errors: PropTypes.arrayOf(React.PropTypes.string).isRequired
}


const mapStateToProps = (state) => {
  return { errors: state.errors }
}

App = connect(mapStateToProps, {...actionCreators,swal, close})(App)

export default App
