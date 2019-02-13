import React from 'react';
import './style.scss';

export default () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='copyright'>{`© ${currentYear} интернет-магазин ishop`}</div>
  )
};
