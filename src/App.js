import React from 'react';
import Header from './js/components/header/Header/index';
import Footer from './js/components/footer/Footer/index';
import {Route} from "react-router-dom";

import PageMain from './js/pages/PageMain';
import PageAbout from './js/pages/PageAbout';
import PageCatalog from './js/pages/PageCatalog';

class App extends React.Component {

  render() {
    return (
      <div className="App site-bg">

        <Header />

        <div className="main-wrap">
          <div className='container'>
            <main className="main-content">
              <Route path='/' exact component={PageMain}/>
              <Route path='/about' component={PageAbout}/>
              <Route path='/catalog' component={PageCatalog}/>
            </main>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
