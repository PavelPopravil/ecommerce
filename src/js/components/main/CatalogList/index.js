import React from 'react';
import {connect} from 'react-redux';
import './style.scss';

import CatalogCard from '../CatalogCard/index';
import Preloader from '../../extra/Preloader/index';

import {fetchCatalog} from '../../../redux/actions/catalogA';

class CatalogList extends React.PureComponent {

  componentDidMount() {
    if (!this.props.list.length) {
      this.props.dispatch(fetchCatalog());
    }
  };

  renderCards = () => {
    const {isLoad, list, errorMsg} = this.props;

    const catalogItems = list.map((card) => {
      return <div key={card.id} className={`catalog-list__item ${card.mod === 'big' ? `col-lg-6` : `col-lg-3`} col-md-6 col-12`}>
                <CatalogCard key={card.id} pic={card.pic} title={card.title} price={card.price}/>
              </div>
    });

    if (errorMsg) {
      return <div className='col-12'>{`Произошла ошибка ${errorMsg}`}</div>;
    }

    return !isLoad ? <Preloader /> : catalogItems;
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
  // console.log(store);
  return {
    isLoad: store.catalog.isLoad,
    list: store.catalog.payload,
    errorMsg: store.catalog.errorMsg
  };
};

export default connect(mapStateToProps)(CatalogList);