import {combineReducers} from 'redux';
import catalogR from './catalogR';

export default combineReducers({
  catalog: catalogR
});