import React from 'react';
import './style.scss';
import {NavLink} from "react-router-dom";

class MainMenu extends React.PureComponent {

  render() {

    return (
      <nav className="main-menu">
        <NavLink to={'/about'} activeClassName='active'>О компании</NavLink>
        <NavLink to={'/catalog'} activeClassName='active'>Каталог</NavLink>
      </nav>
    );

  };
}

export default MainMenu;