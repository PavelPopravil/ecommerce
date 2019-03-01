import React, {Fragment} from 'react';
import ProductList from '../components/main/ProductList/index';
import Preloader from '../components/extra/Preloader/index';
import {connect} from 'react-redux';
import {fetchProdList} from "../redux/actions/prodListA";

class PageMain extends React.PureComponent {

  componentDidMount() {
    if (!this.props.data.length) {
      this.props.onFetchProductList(this.props.match.params.section);
    }
  }

  renderContent = (section) => {
    const {isLoading, data, errorMsg} = this.props;

    if (errorMsg) {
      return <div className='col-12 failure-block'>{`Произошла ошибка ${errorMsg}`}</div>;
    }

    return isLoading ? <Preloader /> : <ProductList path={section} data={data}/>;
  };

  render() {
    const section = this.props.match.params.section;

    return (
      <Fragment>
        <h1>{section}</h1>
        <div className='row'>
          <div className="col-12 col-lg-3">Sidebar</div>
          <div className="col-12 col-lg-9">
            {
              this.renderContent(section)
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
    isLoading: currentCatalog.isLoading,
    data: currentCatalog.ids.map((id) => {
      return currentCatalog.byId[id];
    }),
    errorMsg: currentCatalog.errorMsg
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProductList(path) {
      dispatch(fetchProdList(path));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageMain);