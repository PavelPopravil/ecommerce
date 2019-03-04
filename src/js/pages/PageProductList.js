import React, {Fragment} from 'react';
import ProductFilter from '../components/main/ProductFilter';
import ProductList from '../components/main/ProductList/index';
import Preloader from '../components/extra/Preloader/index';
import {connect} from 'react-redux';
import {fetchProdList} from "../redux/actions/prodListA";
import {CatalogMap} from '../helpers/constats';

class PageMain extends React.PureComponent {

  componentDidMount() {
    if (!this.props.data.length) {
      this.props.onFetchProductList(this.props.match.params.section);
    }
  }

  renderContent = (section) => {
    const {isLoading, data, errorMsg} = this.props;

    if (errorMsg) {
      return <div className='error'>{`Произошла ошибка ${errorMsg}`}</div>;
    }

    return isLoading ? <Preloader /> : <ProductList path={section} data={data}/>;
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

const filterList = (arr, options) => {

  if (options) {
    const optArr = Object.keys(options);

    return arr.filter((item) => {

      const optionsArray = optArr.map((option) => {
        return options[option].includes(item.properties[option]); // toDo переписать на регулярку || сравнить критерии филтрации по айди а не по строке
      });

      return optionsArray.every((opt) => opt);
    });
  }
  return arr;
};

const mapStateToProps = (store, ownProps) => {
  const currentCatalog = ownProps.match.params.section;
  const currentProdlist = store.prodList[currentCatalog];

  const data = currentProdlist.ids.map((id) => {
    return currentProdlist.byId[id];
  });

  return {
    isLoading: currentProdlist.isLoading,
    data: filterList(data, store.prodFilter[currentCatalog]), //toDo выводить сообщение о том что нет товаров по фильтру
    errorMsg: currentProdlist.errorMsg,
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