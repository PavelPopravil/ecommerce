import React from 'react';
import Proptypes from 'prop-types';
import './style.scss';
import close from './img/close.svg';
import {connect} from 'react-redux';
import {removeProdFromBasket, setProductCount} from '../../../redux/actions/basketA';
import InputNumber from 'rc-input-number';

class BasketCard extends React.PureComponent {

  static proptypes = {
    product: Proptypes.shape({
      id: Proptypes.string.isRequired,
      pic: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
      price: Proptypes.number.isRequired,
      properties: Proptypes.object.isRequired,
      count: Proptypes.number.isRequired
    }).isRequired,
  };

  renderProdcutProperties = (properties) => {
    return Object.keys(properties).map((item, i) => {
      return <span key={i}>{properties[item]}{i !== Object.keys(properties).length - 1 ? ', ' : ''}</span>
    });
  };

  onRemoveBtnClick = () => {
    const {product} = this.props;
    this.props.removeProdFromBasket(product);
  };

  onQuantChange = (value) => {
    const {product} = this.props;
    this.props.setProductCount(value, product);
  };

  render() {

    const {pic, price, name, properties, count} = this.props.product;

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
          <InputNumber
            readOnly={true}
            min={1}
            max={10}
            defaultValue={count}
            onChange={this.onQuantChange}
          />
        </td>
        <td className="basket-p__cell price">
          <div className="basket-p__price">
            {price} BYN
          </div>
        </td>
        <td className="basket-p__cell controls">
          <button className='basket-p__remove-btn' onClick={this.onRemoveBtnClick}>
            <img src={close} alt="close" />
          </button>
        </td>
      </tr>
    )
  }
}

const MapDispatchToProps = {
  removeProdFromBasket,
  setProductCount
};

export default connect(null, MapDispatchToProps)(BasketCard);