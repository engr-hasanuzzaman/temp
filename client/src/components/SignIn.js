import React, { Component, PropTypes } from 'react'

class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      show: true
    }

    this.onFieldChanged = this.onFieldChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFieldChanged (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state);
    this.setState(() => {
     return {
      email: '',
      password: ''
    }
    });
  }

  render () {
    return (
      <div>
          <form onChange={this.onFieldChanged} onSubmit={this.onSubmit}>
            <input type="email" name="email" value={this.state.email}/>
            <input type="password" name="password" value={this.state.password} />
            <button type="submit">Subscribe</button>
            {this.props.error ? <p>{ this.props.error }</p>: null}
          </form>
      </div>
    )
  }
}

export default SignInForm;
