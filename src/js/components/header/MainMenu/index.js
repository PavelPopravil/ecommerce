import React from 'react';
import Logo from '../Logo/index'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

import './style.scss';

import {NavLink} from "react-router-dom";

class MainMenu extends React.Component {

  state = {
    isOpen: false
  };

  toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {

    return (
      <Navbar className='main-menu' expand="md">
        <Logo />
        <NavbarToggler onClick={this.toggleMenu} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="list-reset" navbar>
            <NavItem>
              <NavLink to={'/catalog'} activeClassName='active'>Каталог</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  };
}

export default MainMenu;