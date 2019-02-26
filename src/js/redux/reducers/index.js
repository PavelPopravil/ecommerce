import {combineReducers} from 'redux';
import catalogR from './catalogR';
import prodListR from './prodListR';

export default combineReducers({
  catalog: catalogR,
  prodList: prodListR
});