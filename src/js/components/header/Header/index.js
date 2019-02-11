import React from 'react';
import './style.scss';
import Logo from '../Logo/index';
import MainMenu from '../MainMenu/index'

class Header extends React.PureComponent {

  render() {

    return (
      <header className='header'>
        <div className="header__mob">

        </div>
        <div className="header__desk">
          <div className="container">
            <Logo />
            <MainMenu />
          </div>
        </div>

      </header>
    )
  }
}

export default Header;