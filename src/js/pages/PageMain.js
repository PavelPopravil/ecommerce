import React, {Fragment} from 'react';
import SlMain from '../components/main/SlMain/index';
import CatalogList from '../components/main/CatalogList/index';

class PageMain extends React.PureComponent {

  render() {

    return (
      <Fragment>
        <h1 className='hidden'>Главная страница</h1>
        <SlMain />
        <h2 className="catalog-list__title">Каталог</h2>
        <CatalogList />
      </Fragment>
    )
  }
}

export default PageMain;