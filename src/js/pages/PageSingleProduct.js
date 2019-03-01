import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from '../redux/actions/productA';
import Preloader from '../components/extra/Preloader/index';
import SingleProduct from '../components/main/SingleProduct/index';

class Page extends React.PureComponent {

  componentDidMount() {
    const {section, id} = this.props.match.params;

    if (!this.props.product) {
      this.props.fetchProduct(section, id);
    }
  }

  renderContent = () => {
    const {isLoading, errorMsg, product} = this.props;

    if (errorMsg) {
      return <div className='error'>{`Произошла ошибка ${errorMsg}`}</div>
    }

    return isLoading ? <Preloader /> : product ? <SingleProduct data={product} /> : null;
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
    product: currentCatalog.byId[ownProps.match.params.id] || store.productPage.product
  }
};

const mapDispatchToProps = {
  fetchProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);