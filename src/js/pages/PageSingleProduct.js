import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from '../redux/actions/productA';
import Preloader from '../components/extra/Preloader/index';
import SingleProduct from '../components/main/SingleProduct/index';
import {addProdToBasket, removeProdFromBasket} from '../redux/actions/basketA';

class Page extends React.PureComponent {

  componentDidMount() {
    const {section, id} = this.props.match.params;

    if (!this.props.product) {
      this.props.fetchProduct(section, id);
    }
  }

  setProductInBasketState = (id) => {
    const {basket} = this.props;
    const path = this.props.match.params.section;
    return basket[path] && basket[path].length ? basket[path].includes(id) : false;
  };

  renderContent = () => {
    const {isLoading, errorMsg, product} = this.props;

    if (errorMsg) {
      return <div className='error'>{`Произошла ошибка ${errorMsg}`}</div>
    }

    return isLoading ? <Preloader /> : product ? <SingleProduct onProdAdd={this.props.addProdToBasket} onProdRemove={this.props.removeProdFromBasket} inBasket={this.setProductInBasketState(product.id)} data={product} /> : null;
  };

  render() {

    return (
      <Fragment>
        <div className='row'>
          <div className="col-12">
            {
              this.renderContent()
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  const currentCatalog = store.prodList[ownProps.match.params.section];

  return {
    isLoading: store.productPage.isLoading,
    errorMsg: store.productPage.errorMsg,
    product: currentCatalog.byId[ownProps.match.params.id] || store.productPage.product,
    basket: store.basket
  }
};

const mapDispatchToProps = {
  fetchProduct,
  addProdToBasket,
  removeProdFromBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);