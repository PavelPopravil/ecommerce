import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './style.scss';
import {Link} from "react-router-dom";
import {addProdToBasket, removeProdFromBasket} from '../../../redux/actions/basketA';

class ProdCard extends React.PureComponent {

  static proptypes = {
    card: PropTypes.shape({
      id: PropTypes.string.isRequired,
      pic: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      properties: PropTypes.object.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    inBasket: PropTypes.bool.isRequired
  };

  renderCardProperties = (properties) => {
    return Object.keys(properties).map((item, i) => {
      return <span key={i}>{properties[item]}{i !== Object.keys(properties).length - 1 ? ', ' : ''}</span>
    });
  };

  onBasketBtnClick = () => {
    const {path, card, inBasket} = this.props;
    inBasket ? this.props.removeProdFromBasket(path, card.id) : this.props.addProdToBasket(path, card.id);
  };

  render() {
    const {path, card, inBasket} = this.props;
    const {pic, name, price, properties, id} = card;

    console.log('render Product Card');

    return (
      <div className={`prod-card ${inBasket ? 'in-basket' : ''}`}>
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
            <button className='btn btn-primary' type='button' onClick={this.onBasketBtnClick}>{inBasket ? 'Убрать из корзины' : 'Добавить в корзину'}</button>
          </div>
        </div>
      </div>
    )
  }
}

const MapDispatchToProps = {
  addProdToBasket,
  removeProdFromBasket
};

export default connect(null, MapDispatchToProps)(ProdCard);