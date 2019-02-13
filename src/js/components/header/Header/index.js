import React from 'react';
import './style.scss';
import MainMenu from '../MainMenu/index'

class Header extends React.Component {

  render() {

    return (
      <header className='header'>
        <div className="header__inner">
          <div className="container">
            <MainMenu />
          </div>
        </div>

      </header>
    )
  }
}

export default Header;