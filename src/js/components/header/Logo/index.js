import React from 'react';
import {NavLink} from "react-router-dom";

import './style.scss';
import logo from './img/logo.png';

class Logo extends React.Component {

  render() {

    return (
      <div className='logo'>
        <NavLink className='pic' activeClassName='active' to={'/'} exact>
          <img src={logo} alt="logo"/>
        </NavLink>
      </div>
    )
  }
}

export default Logo;