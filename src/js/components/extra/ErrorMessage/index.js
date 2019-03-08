import React from 'react';
import './style.scss';

export default (props) => {
  return (
    <div className='error'>{props.children}</div>
  )
}