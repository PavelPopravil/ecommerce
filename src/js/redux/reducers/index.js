import {combineReducers} from 'redux';
import catalogR from './catalogR';
import {prodListR, catalogListR} from './prodListR';

export default combineReducers({
  catalog: catalogR,
  prodList: prodListR,
  // catalogList: catalogListR
});