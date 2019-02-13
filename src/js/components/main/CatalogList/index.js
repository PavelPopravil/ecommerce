import React from 'react';
import './style.scss';
class CatalogList extends React.Component {

  render() {

    return (
      <div className='catalog-list'>
        <h2 className="catalog-list__title">Каталог</h2>
        <div className="catalog-list__list">list</div>
      </div>
    )
  }
}

export default CatalogList;