import React from 'react';
// import logo from './logo.svg';
import Header from './js/components/header/Header/index';
import Footer from './js/components/footer/Footer/index';

class App extends React.Component {

  render() {
    return (
      <div className="App site-bg">

        <Header />

        <div className="main-wrap">
          <div className='container'>
            <main className="main-content">
              <p>dsdsdsds</p>
            </main>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
