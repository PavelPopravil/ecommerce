import {SET_ACTIVE_CATALOG} from '../actions/prodListA';
import {SET_PRODLIST_FILTER} from '../actions/prodFilterA';

const initialState = {
  currentCatalog: null
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SET_ACTIVE_CATALOG:
      return {
        ...state,
        currentCatalog: action.path
      };
    case SET_PRODLIST_FILTER:

      let activeCatalog = state.currentCatalog;

      return {
        ...state,
        [activeCatalog]: action.options
      };
    default:
      return state;
  }
};