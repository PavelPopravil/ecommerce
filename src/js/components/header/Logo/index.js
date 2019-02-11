import React from 'react';
import './style.scss';
import logo from './img/logo-svg.svg';

class Logo extends React.PureComponent {

  render() {

    return (
      <div className='logo'>
        <img src={logo} alt="logo"/>
      </div>
    )
  }
}

export default Logo;