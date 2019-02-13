import React from 'react';
import Slick from 'react-slick';
import {NavLink} from "react-router-dom";
import './style.scss';
import '../SlPager/style.scss';
import img_01 from './img/sl-main-01.jpg';

class SlMain extends React.PureComponent {

  render() {

    var settings = {
      dots: true,
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
              <div className="pic-wrap">
                <img src={img_01} alt='alt' />
              </div>
              <div className="container">
                <div className="text-wrap">
                  <h1 className='m-title'>У нас лучшая техника</h1>
                  <p className='text lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur debitis deleniti dicta ducimus eaque, esse et fuga id laborum molestiae natus odio sit ullam vel! At nam quae quam?</p>
                  <NavLink className='btn btn-primary' to={'/about'}>О комапнии</NavLink>
                </div>
              </div>
            </div>
            <div className="inner">
              <div className="pic-wrap">
                <img src={img_01} alt='alt' />
              </div>
              <div className="container">
                <div className="text-wrap">
                  <h1 className='m-title'>У нас лучшая техника</h1>
                  <p className='text lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur debitis deleniti dicta ducimus eaque, esse et fuga id laborum molestiae natus odio sit ullam vel! At nam quae quam?</p>
                  <NavLink className='btn btn-primary' to={'/about'}>О комапнии</NavLink>
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