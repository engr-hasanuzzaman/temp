import React, { Component, PropTypes } from 'react'

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.onFieldChanged = this.onFieldChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFieldChanged (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit (event) {
    event.preventDefault()
    const { name, surname, email } = this.state
    this.props.onSubmit(this.state);
    this.setState(() => {
     return {
      name: '',
      email: '',
      password: ''
    }
    });
  }

  render () {
    return (
      <form onChange={this.onFieldChanged} onSubmit={this.onSubmit}>
        <input type="text" name="name" value={this.state.name}/>
        <input type="email" name="email" value={this.state.email}/>
        <input type="password" name="password" value={this.state.password} />
        <button type="submit">Subscribe</button>
        {this.props.error ? <p>{ this.props.error }</p>: null}
      </form>
    )
  }
}

export default SignUpForm;
