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
    }).isRequired
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

  render() {

    const {pic, name, price} = this.props.data;

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
              <button className='btn btn-primary'>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleProduct;