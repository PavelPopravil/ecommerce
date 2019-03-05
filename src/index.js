import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ScrollToTop from './js/components/extra/ScrollToTop/index';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import configureStore from './js/redux/configureStore';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </HashRouter>
  </Provider>
  ,document.getElementById('root')
);
