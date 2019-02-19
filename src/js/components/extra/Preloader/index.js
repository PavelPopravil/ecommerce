import React from 'react';
import './style.scss';

export default () => {
  console.log('render Preloader');

  return (
    <div className='preloader'><div className='preloader__spinner'> </div></div>
  );
};