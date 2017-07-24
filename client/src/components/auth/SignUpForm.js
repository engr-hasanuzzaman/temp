var React          = require('react');
// var _              = require('lodash');
// var Functions      = require('../../utils/Functions.js');

export default class SignUpForm extends React.Component{
  constructor(props){
    super();

    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      name: ''
    }

    this.handleRegistrationClick = this.handleRegistrationClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleRegistrationClick(e){
        return true;
  }
  handleInputChange(e){
    return true;
  }
  render(){
    return (
        <form className='column' onSubmit={this.handleSubmit}>
            <input type='text'
              name='name'
              placeholder='name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />

            <input type='email'
              name='email'
              placeholder='email'
              value={this.state.email}
              onChange={this.handleInputChange}
            />

            <input type='password'
              name='password'
              placeholder='password'
              value={this.state.password}
              onChange={this.handleInputChange} />

            <input type='password'
              name='password_confirmation'
              placeholder='re-type password'
              value={this.state.password_confirmation}
              onChange={this.handleInputChange} />
        </form>
    )
  }
}
