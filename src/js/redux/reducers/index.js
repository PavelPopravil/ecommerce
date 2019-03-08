import {combineReducers} from 'redux';
import catalogR from './catalogR';
import {prodListR} from './prodListR';
import filterR from './fitlerR';
import productR from './productR';
import basketR from './basketR';

export default combineReducers({
  catalog: catalogR,
  prodList: prodListR,
  filter: filterR,
  productPage: productR,
  basket: basketR
});