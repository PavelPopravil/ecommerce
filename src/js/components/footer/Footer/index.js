import React from 'react';
import Copyright from '../Copyright/index';
import './style.scss'

class Footer extends React.PureComponent {

  render() {

    return (
      <footer className='footer'>
        <div className="footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <Copyright />
              </div>
              <div className="col-sm-5">
                <div className="developed">
                  developed by Shishchits Pavel
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;