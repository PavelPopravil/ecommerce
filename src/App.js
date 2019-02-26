import React from 'react';
import Header from './js/components/header/Header/index';
import Footer from './js/components/footer/Footer/index';
import {Route, Switch} from "react-router-dom";

import PageMain from './js/pages/PageMain';
import PageAbout from './js/pages/PageAbout';
import PageCatalog from './js/pages/PageCatalog';
import PageProductList from './js/pages/PageProductList';

class App extends React.Component {

  render() {

    return (
      <div className="App site-bg">

        <Header />

        <div className="main-wrap">
          <div className='container'>
            <main className="main-content">
              <Switch>
                <Route path='/' exact component={PageMain}/>
                <Route path='/about' component={PageAbout}/>
                <Route path='/catalog' exact component={PageCatalog}/>
                <Route path='/catalog/:section' component={PageProductList}/>
              </Switch>
            </main>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
