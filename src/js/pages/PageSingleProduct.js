import React, {Fragment} from 'react';

class Page extends React.PureComponent {

  render() {

    return (
      <Fragment>
        <h1>Страница продукта</h1>
        <div className='row'>
          <div className="col-12">
            content
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Page;