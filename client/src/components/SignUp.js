import React, { Component, PropTypes } from 'react'
import { Button, Form, FormGroup, Col, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

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
      // <form onChange={this.onFieldChanged} onSubmit={this.onSubmit}>
      //   <input type="text" name="name" value={this.state.name}/>
      //   <input type="email" name="email" value={this.state.email}/>
      //   <input type="password" name="password" value={this.state.password} />
      //   <button type="submit">Subscribe</button>
      //   {this.props.error ? <p>{ this.props.error }</p>: null}
      // </form>
      <div>
        <Form horizontal onSubmit={this.onSubmit} onChange={this.onFieldChanged}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" name="email" value={this.state.email}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" name="password" value={this.state.password}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign Up
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default SignUpForm;
