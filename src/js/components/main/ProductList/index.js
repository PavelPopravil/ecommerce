import React from 'react';
import {connect} from 'react-redux';
import {fetchProdList} from '../../../redux/actions/prodListA';
import Preloader from '../../extra/Preloader/index';
import ProductCard from '../ProductCard/index';

import './style.scss';

class ProductList extends React.PureComponent {

  componentDidMount() {
    this.props.onFetchProductList();
  }

  renderProductList = () => {
    const {isLoading, data, errorMsg} = this.props;

    const prodList = data.map((card) => {
      return <div key={card.id} className={`prod-list__item col-xl-4 col-md-6 col-12`}>
        <ProductCard key={card.id} card={card}/>
      </div>
    });

    if (errorMsg) {
      return <div className='col-12 failure-block'>{`Произошла ошибка ${errorMsg}`}</div>;
    }

    return isLoading ? <Preloader /> : prodList;
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
    isLoading: store.prodList.isLoading,
    data: store.prodList.data,
    errorMsg: store.prodList.errorMsg
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProductList() {
      dispatch(fetchProdList());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);