import React from 'react';
import Proptypes from 'prop-types';
import ProductCard from '../ProductCard/index';

import './style.scss';

class ProductList extends React.PureComponent {

  static proptypes = {
    data: Proptypes.arrayOf(
      Proptypes.object.isRequired,
    ),
    path: Proptypes.string.isRequired
  };

  renderProductList = () => {
    const {data, path} = this.props;

    return data.map((card) => {
      return <div key={card.id} className={`prod-list__item col-xl-4 col-md-6 col-12`}>
        <ProductCard key={card.id} card={card} path={path}/>
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

export default ProductList;