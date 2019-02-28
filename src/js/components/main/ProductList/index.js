import React from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchProdList} from '../../../redux/actions/prodListA';

import Preloader from '../../extra/Preloader/index';
import ProductCard from '../ProductCard/index';

import './style.scss';

class ProductList extends React.PureComponent {

  static proptypes = {
    path: Proptypes.string.isRequired
  };

  componentDidMount() {
    this.props.onFetchProductList(this.props.path);

    // if (!this.props.data.length) {
    //   this.props.onFetchProductList(this.props.path);
    // }
  }

  renderProductList = () => {
    console.log(this.props);
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
              // this.renderProductList()
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  const currentCatalog = store.prodList[ownProps.path];
  // console.log(store.prodList);
  return {
    // isLoading: currentCatalog.isLoading,
    // data: currentCatalog.ids.map((id) => {
    //   return currentCatalog.byId[id];
    // }),
    // errorMsg: currentCatalog.errorMsg
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProductList(path) {
      dispatch(fetchProdList(path));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);