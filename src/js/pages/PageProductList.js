import React, {Fragment} from 'react';
import ProductFilter from '../components/main/ProductFilter';
import ProductList from '../components/main/ProductList/index';
import Preloader from '../components/extra/Preloader/index';
import {connect} from 'react-redux';
import {fetchProdList, setActiveCatalog} from '../redux/actions/prodListA';
import {CatalogMap} from '../helpers/constats';
import {filterList} from '../helpers/selector';

class PageMain extends React.PureComponent {

  componentDidMount() {
    const currentCatalog = this.props.match.params.section;
    this.props.setActiveCatalog(currentCatalog);
    if (this.props.data.length <= 1) {
      this.props.fetchProdList(currentCatalog);
    }
  }

  renderContent = (section) => {
    const {isLoading, data, errorMsg} = this.props;

    if (errorMsg) {
      return <div className='error'>{`Произошла ошибка ${errorMsg}`}</div>;
    }

    return isLoading ? <Preloader /> : data.length ? <ProductList path={section} data={data}/> : <div className='error'>Извините, нет товаров подходящих по фильрации</div>;
  };

  render() {
    const section = this.props.match.params.section;

    return (
      <Fragment>
        <h1>{CatalogMap[section].name ? CatalogMap[section].name : section}</h1>
        <div className='row'>
          <div className="col-12 col-lg-3">
            <ProductFilter path={section} options={CatalogMap[section].filter} />
          </div>
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
  const currentCatalog = ownProps.match.params.section;
  const currentProdlist = store.prodList[currentCatalog];

  const data = currentProdlist.ids.map((id) => {
    return currentProdlist.byId[id];
  });

  return {
    isLoading: currentProdlist.isLoading,
    data: filterList(data, currentProdlist.filter),
    errorMsg: currentProdlist.errorMsg,
  }
};

const mapDispatchToProps = {
  setActiveCatalog,
  fetchProdList
};

export default connect(mapStateToProps, mapDispatchToProps)(PageMain);