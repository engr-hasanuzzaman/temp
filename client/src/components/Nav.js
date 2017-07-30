var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var ReactBootstrap =  require('react-bootstrap')

var Navbar = ReactBootstrap.Navbar,
Nav = ReactBootstrap.Nav,
NavItem = ReactBootstrap.NavItem,
DropdownButton = ReactBootstrap.DropdownButton,
NavDropdown = ReactBootstrap.NavDropdown,
MenuItem = ReactBootstrap.MenuItem;

function Navigation(props) {
  return(
    <Navbar inverse collapseOnSelect>
      { props.authenticate &&
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      }

      {! props.authenticate &&
      <Navbar.Header>
        <Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      }

      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
        </Nav>
        <Nav pullRight className='auth-container'>
          {!props.authenticate &&
            <NavItem>
              <NavLink activeClassName='active' to='/sign-up'>
                Sign up
              </NavLink>
            </NavItem>


          }
          {!props.authenticate &&
            <NavItem>
              <NavLink activeClassName='active' to='/sign-in'>
                Sign in
              </NavLink>
            </NavItem>
          }
          {
            props.authenticate &&
            <NavItem onClick={(e)=>{
              e.preventDefault();
              props.singOutPath({jwt: ''});
            }}
              href="#">Sign ut
            </NavItem>
          }
        </Nav>
      </Navbar.Collapse>
  </Navbar>

  );
}

module.exports = Navigation;
