import React, {Fragment} from 'react';
import ProductList from '../components/main/ProductList/index';

class PageMain extends React.PureComponent {

  render() {

    return (
      <Fragment>
        <h1>{this.props.match.params.section}</h1>
        <div className='row'>
          <div className="col-12 col-lg-3">Sidebar</div>
          <div className="col-12 col-lg-9">
            <ProductList/>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default PageMain;