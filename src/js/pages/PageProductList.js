import React, {Fragment} from 'react';
import ProductList from '../components/main/ProductList/index';

class PageMain extends React.PureComponent {

  render() {
    const section = this.props.match.params.section;

    return (
      <Fragment>
        <h1>{section}</h1>
        <div className='row'>
          <div className="col-12 col-lg-3">Sidebar</div>
          <div className="col-12 col-lg-9">
            <ProductList path={section} />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default PageMain;