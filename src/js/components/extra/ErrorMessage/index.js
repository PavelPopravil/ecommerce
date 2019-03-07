import React from 'react';
import './style.scss';

export default (props) => {
  console.log(props);

  return (
    <div className='error'>{props.children}</div>
  )
}