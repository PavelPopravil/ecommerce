import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
import * as serviceWorker from './serviceWorker';
import configureStore from './js/redux/configureStore';

const store = configureStore({});

// toDo Разобраться почему роутинг не работает локально
ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory({})}>
      <App />
    </Router>
  </Provider>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
