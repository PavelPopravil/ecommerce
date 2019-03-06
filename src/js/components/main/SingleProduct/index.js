import React from 'react';
import Proptypes from 'prop-types';

import './style.scss';
import {PropMap} from '../../../helpers/constats'

class SingleProduct extends React.PureComponent {

  static proptypes = {
    data: Proptypes.shape({
      id: Proptypes.string.isRequired,
      pic: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
      price: Proptypes.string.isRequired,
      properties: Proptypes.object.isRequired
    }).isRequired,
    inBasket: Proptypes.bool.isRequired,
    onProdAdd: Proptypes.func.isRequired,
    onProdRemove: Proptypes.func.isRequired
  };

  renderProperties = () => {
    const {properties} = this.props.data;

    return Object.keys(properties).map((item, i) => {
      return <tr key={i}>
                <td className='name'>{PropMap[item] ? PropMap[item] : item}</td>
                <td className='descr'>{properties[item]}</td>
             </tr>
    });
  };

  onBasketBtnClick = () => {
    const {data, inBasket} = this.props;
    inBasket ? this.props.onProdRemove(data.catalogPath, data.id) : this.props.onProdAdd(data.catalogPath, data.id);
  };

  render() {

    const {pic, name, price} = this.props.data;
    const {inBasket} = this.props;

    return (
      <div className='product'>
        <h1 className="product__title">{name}</h1>
        <div className="product__inner">
          <div className="product__pic-wrap">
            <img src={`${process.env.PUBLIC_URL}/img/${pic}`} alt={name} className="product__pic"/>
          </div>
          <div className="product__text-wrap">
            <div className="table-wrapper">
              <table className="product__prop-table">
                <tbody>
                  {
                    this.renderProperties()
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div className="product__b-price">
            <h3 className='product__price'>{price} BYN</h3>
            <div className="product__btn-wrap">
              <button className='btn btn-primary' onClick={this.onBasketBtnClick}>{inBasket ? 'Убрать из корзины' : 'Добавить в корзину'}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleProduct;