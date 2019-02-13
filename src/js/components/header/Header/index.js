import React from 'react';
import './style.scss';
// import Logo from '../Logo/index';
import MainMenu from '../MainMenu/index'

class Header extends React.Component {

  render() {

    return (
      <header className='header'>
        <div className="header__inner">
          <div className="container">
            {/*<Logo />*/}
            <MainMenu />
          </div>
        </div>

      </header>
    )
  }
}

export default Header;