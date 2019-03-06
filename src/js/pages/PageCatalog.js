import React, {Fragment} from 'react';
import CatalogList from '../components/main/CatalogList/index';

class PageCatalog extends React.PureComponent {

  render() {

    return (
      <Fragment>
        <h1>Каталог</h1>
        <CatalogList />
      </Fragment>
    )
  }
}

export default PageCatalog;