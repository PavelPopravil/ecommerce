import React from 'react';
import {NavLink} from "react-router-dom";

import './style.scss';
import logo from './img/logo-svg.svg';

class Logo extends React.PureComponent {

  render() {

    return (
      <div className='logo'>
        <NavLink to={'/'}>
          <img src={logo} alt="logo"/>
        </NavLink>
      </div>
    )
  }
}

export default Logo;