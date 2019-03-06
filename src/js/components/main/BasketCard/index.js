import React from 'react';
import Proptypes from 'prop-types';
import './style.scss';
import close from './img/close.svg';
import {connect} from 'react-redux';
import {removeProdFromBasket} from '../../../redux/actions/basketA';

class BasterCard extends React.PureComponent {

  static proptypes = {
    product: Proptypes.shape({
      id: Proptypes.string.isRequired,
      pic: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
      price: Proptypes.string.isRequired,
      properties: Proptypes.object.isRequired,
    }).isRequired,
  };

  renderProdcutProperties = (properties) => {
    return Object.keys(properties).map((item, i) => {
      return <span key={i}>{properties[item]}{i !== Object.keys(properties).length - 1 ? ', ' : ''}</span>
    });
  };

  render() {

    const {pic, price, name, properties} = this.props.product;

    return (
      <tr className='basket-p'>
        <td className="basket-p__cell pic">
          <div className="basket-p__pic-wrap">
            <img src={`${process.env.PUBLIC_URL}/img/${pic}`} alt={name} />
          </div>
        </td>
        <td className="basket-p__cell name">
          <h4 className="basket-p__name">{name}</h4>
          {
            this.renderProdcutProperties(properties)
          }
        </td>
        <td className="basket-p__cell quant">
          mew
        </td>
        <td className="basket-p__cell price">
          <div className="basket-p__price">
            {price} BYN
          </div>
        </td>
        <td className="basket-p__cell controls">
          <button className='basket-p__remove-btn'>
            <img src={close} alt="close" />
          </button>
        </td>
      </tr>
    )
  }
}

const MapDispatchToProps = {
  removeProdFromBasket
};

export default connect(null, MapDispatchToProps)(BasterCard);