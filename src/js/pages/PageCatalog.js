import React, {Fragment} from 'react';
import CatalogList from '../components/main/CatalogList/index';

class PageCatalog extends React.PureComponent {

  render() {

    return (
      <Fragment>
        <CatalogList />
      </Fragment>
    )
  }
}

export default PageCatalog;