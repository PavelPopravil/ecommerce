import React, {Fragment} from 'react';
import ProductList from '../components/main/ProductList/index';

class PageMain extends React.PureComponent {

  render() {

    return (
      <Fragment>
        <h1>Список товаров</h1>
        <div className='row'>
          <div className="col-12 col-md-4">Sidebar</div>
          <div className="col-12 col-md-8">
            <ProductList/>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default PageMain;