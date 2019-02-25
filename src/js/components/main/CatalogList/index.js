import React from 'react';
import {connect} from 'react-redux';
import './style.scss';

import CatalogCard from '../CatalogCard/index';
import Preloader from '../../extra/Preloader/index';

import {fetchCatalog} from '../../../redux/actions/catalogA';

export class CatalogList extends React.PureComponent {

  componentDidMount() {
    if (!this.props.data.length) {
      this.props.onFetchCatalog();
    }
  };

  renderCards = () => {
    const {isLoading, data, errorMsg} = this.props;

    const catalogItems = data.map((card) => {
      return <div key={card.id} className={`catalog-list__item ${card.mod === 'big' ? `col-lg-6` : `col-lg-3`} col-md-6 col-12`}>
                <CatalogCard key={card.id} path={card.path} pic={card.pic} title={card.title} price={card.price}/>
              </div>
    });

    if (errorMsg) {
      return <div className='col-12 failure-block'>{`Произошла ошибка ${errorMsg}`}</div>;
    }

    return isLoading ? <Preloader /> : catalogItems;
  };

  render() {
    console.log('render CatalogList');

    return (
      <div className='catalog-list'>
        <h2 className="catalog-list__title">Каталог</h2>
        <div className="catalog-list__list">
          <div className="row">
            {
              this.renderCards()
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.catalog.isLoading,
    data: store.catalog.data,
    errorMsg: store.catalog.errorMsg
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCatalog() {
      dispatch(fetchCatalog());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogList);