import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {Link} from "react-router-dom";

class ProdCard extends React.PureComponent {

  static proptypes = {
    card: PropTypes.shape({
      id: PropTypes.string.isRequired,
      pic: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      properties: PropTypes.object.isRequired
    }).isRequired,
    path: PropTypes.string.isRequired
  };

  renderCardProperties = (properties) => {
    return Object.keys(properties).map((item, i) => {
      return <span key={i}>{properties[item]}{i !== Object.keys(properties).length - 1 ? ', ' : ''}</span>
    });
  };

  render() {
    const {path, card} = this.props;
    const {pic, name, price, properties, id} = card;

    return (
      <div className='prod-card'>
        <Link to={`/catalog/${path}/${id}`} className='prod-card__inner'>
          <div className="prod-card__pic-wrap">
            <img className='prod-card__pic' src={`${process.env.PUBLIC_URL}/img/${pic}`} alt={name} />
          </div>
          <div className="prod-card__body">
            <h4 className="prod-card__title">{name}</h4>
            <div className="prod-card__descr">
              {
                this.renderCardProperties(properties)
              }
            </div>
            <div className="prod-card__price">{price} BYN</div>
          </div>
        </Link>
        <div className="prod-card__footer">
          <div className="prod-card__btn-wrap">
            <a className='btn btn-primary' href='/'>В корзину</a>
          </div>
        </div>
      </div>
    )
  }
}

export default ProdCard;