import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SweetAlert from 'sweetalert-react';
import ReduxSweetAlert, { swal, close } from 'react-redux-sweetalert';
import {BrowserRouter, Route, Path, Switch} from 'react-router-dom';
import Nav from './components/Nav'
import { Redirect } from 'react-router'

import RequestList from './containers/DashBoard'
import SignUpForm from './components/SignUp'
import SignInForm from './components/SignIn'
import * as actionCreators from './actions/api'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true
    }

    this.isAuthorize = this.isAuthorize.bind(this);
  }

  isAuthorize(){
    return this.props.user.jwt.length > 0
  }

  render() {
    const { from } = this.props.location && this.props.location.state || '/'
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
          <div>
          {
            this.isAuthorize() &&
            <Redirect to={from || '/'}/>
          }
              <div className='header'>
                <Nav authenticate={this.isAuthorize()}  singOutPath={this.props.userSignOut}/>
              </div>
              <Switch>
                {this.isAuthorize() &&
                  <Route exact path='/' render={(props) => (
                    <RequestList
                      onUpdateRequest={this.props.updateRequest}
                      onDeleteRequest={this.props.deleteRequest}
                    />
                  )}/>
                }

                {
                  <Route exact path='/' render={(props) => (
                    <SignUpForm onSubmit={this.props.userSignUp}/>
                  )}/>
                }

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
  return { errors: state.errors, user: state.user }
}

App = connect(mapStateToProps, {...actionCreators,swal, close})(App)

export default App
