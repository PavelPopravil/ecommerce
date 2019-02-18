import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';

export default (initialState) => {
  return createStore(
    rootReducer,
    // applyMiddleware({
    //   thunkMiddleware,
    //   createLogger
    // }),
    initialState
  )
};