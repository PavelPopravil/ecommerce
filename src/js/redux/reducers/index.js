import {combineReducers} from 'redux';
import catalogR from './catalogR';
import {prodListR} from './prodListR';
import productR from './productR';
import prodFilterR from './prodFilterR';

export default combineReducers({
  catalog: catalogR,
  prodList: prodListR,
  productPage: productR,
  prodFilter: prodFilterR
});