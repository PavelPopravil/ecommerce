import React from 'react';
import './style.scss';
import CatalogCard from '../CatalogCard/index';

const catalogData = require('./catalogApi.json'); // toDo Переделать на аякс запрос

class CatalogList extends React.PureComponent {

  renderCards = () => {
    console.log(catalogData);
    return catalogData.map((card) => {
      return <div key={card.id} className={`catalog-list__item ${card.mod === 'big' ? `col-lg-6` : `col-lg-3`} col-md-6 col-12`}>
                <CatalogCard key={card.id} pic={card.pic} title={card.title} price={card.price}/>
              </div>
    });
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

export default CatalogList;