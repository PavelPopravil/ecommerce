import React, {Fragment} from 'react';
import SlMain from '../components/main/SlMain/index'

class PageMain extends React.PureComponent {

  render() {

    return (
      <Fragment>
        <h1 className='hidden'>Главная страница</h1>
        <SlMain />
      </Fragment>
    )
  }
}

export default PageMain;