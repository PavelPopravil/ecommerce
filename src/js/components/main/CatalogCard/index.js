import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './style.scss';

class CatalogCard extends React.PureComponent {

  static propTypes = {
    'pic': PropTypes.string.isRequired,
    'title': PropTypes.string.isRequired,
    'price': PropTypes.string.isRequired
  };

  render() {
    console.log('render CatalogCard');
    const {pic, title, price} = this.props;

    return (
      <Link className='catalog-card' to={'/about'}>
        <div className='catalog-card__pic-wrap'>
          <img className='catalog-card__pic' src={`${process.env.PUBLIC_URL}/img/${pic}`} alt={title} />
        </div>
        <div className='catalog-card__text-wrap'>
          <div className="h3 catalog-card__title">{title}</div>
          <div className="catalog-card__price">{price}</div>
        </div>
      </Link>
    )
  }
}

export default CatalogCard;