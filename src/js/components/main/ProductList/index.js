import React from 'react';
import Proptypes from 'prop-types';
import ProductCard from '../ProductCard/index';
import {connect} from 'react-redux';

import './style.scss';

class ProductList extends React.PureComponent {

  static proptypes = {
    data: Proptypes.arrayOf(
      Proptypes.object.isRequired,
    ),
    path: Proptypes.string.isRequired
  };

  setProductInBasketState = (id) => {
    const {basketProd, path} = this.props;
    return basketProd[path] && basketProd[path].length ? basketProd[path].includes(id) : false;
  };

  renderProductList = () => {
    const {data, path} = this.props;

    return data.map((card) => {
      return <div key={card.id} className={`prod-list__item col-xl-4 col-md-6 col-12`}>
        <ProductCard key={card.id} inBasket={this.setProductInBasketState(card.id)} card={card} path={path}/>
      </div>
    });
  };

  render() {

    return (
      <div className='prod-list'>
        <div className="prod-list__list">
          <div className="row">
            {
              this.renderProductList()
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
    return {
      basketProd: store.basket.products
    }
};

export default connect(mapStateToProps)(ProductList);