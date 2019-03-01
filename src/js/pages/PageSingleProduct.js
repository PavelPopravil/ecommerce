import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from '../redux/actions/productA';

// import Preloader from '../components/extra/Preloader/index';

class Page extends React.PureComponent {

  componentDidMount() {
    const {section, id} = this.props.match.params;

    if (!this.props.product) {
      this.props.fetchProduct(section, id);
    }
  }

  render() {

    return (
      <Fragment>
        <h1>{this.props.match.params.id}</h1>
        <div className='row'>
          <div className="col-12">
            content
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  const currentCatalog = store.prodList[ownProps.match.params.section];

  return {
    product: currentCatalog.byId[ownProps.match.params.id]
  }
};

const mapDispatchToProps = {
  fetchProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);