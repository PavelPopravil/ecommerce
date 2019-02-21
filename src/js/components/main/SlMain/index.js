import React from 'react';
import Slick from 'react-slick';
import {NavLink} from "react-router-dom";
import './style.scss';
import '../SlPager/style.scss';
import img_01 from './img/sl-main-01.png';
import img_02 from './img/sl-main-02.jpeg';

class SlMain extends React.PureComponent {

  render() {

    var settings = {
      dots: true,
      auto: true,
      dotsClass: 'list-reset sl-pager',
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className='sl-main'>
        <div className="wrap">
          <Slick {...settings}>
            <div className="inner">
              <div className="container">
                <div className="text-wrap">
                  <div className='h1 m-title'>Новинка!</div>
                  <p className='text lead'>iMac 27" (2017) 5K Retina Core i5 3.5GHz, Radeon Pro 575 4GB, 8GB, 1TB Fusion Drive - UA</p>
                  <NavLink className='btn btn-accent' to={'/'}>Купить</NavLink>
                </div>
                <div className="pic-wrap">
                  <img src={img_01} alt="alt" />
                </div>
              </div>
            </div>
            <div className="inner">
              <div className="container">
                <div className="text-wrap">
                  <h1 className='m-title'>Macbook Pro с любым цветом корпуса!</h1>
                  <p className='text lead'>Золотой, Серебристый, Серый космос</p>
                  <NavLink className='btn btn-accent' to={'/'}>Купить</NavLink>
                </div>
                <div className="pic-wrap">
                  <img src={img_02} alt="alt" />
                </div>
              </div>
            </div>
          </Slick>
        </div>
      </div>
    );
  }
}

export default SlMain;