var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav(props) {
  return(
    <ul className='nav'>
      <li>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
      </li>
      <li>
          <NavLink activeClassName='active' to='/sign-up'>
            Sign Up
          </NavLink>
      </li>
      <li>
          <NavLink activeClassName='active' to='/sign-in'>
            Sign In
          </NavLink>
      </li>
    </ul>
  );
}

module.exports = Nav;
