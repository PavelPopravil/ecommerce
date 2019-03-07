import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './style.scss';

class CatalogCard extends React.PureComponent {

  static propTypes = {
    path: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  };

  render() {
    const {pic, title, price, path} = this.props;

    return (
      <Link className='catalog-card' to={`/catalog/${path}`}>
        <div className='catalog-card__pic-wrap'>
          <img className='catalog-card__pic' src={`${process.env.PUBLIC_URL}/img/${pic}`} alt={title} />
        </div>
        <div className='catalog-card__text-wrap'>
          <div className="h3 catalog-card__title">{title}</div>
          <div className="catalog-card__price">от {price} BYN</div>
        </div>
      </Link>
    )
  }
}

export default CatalogCard;