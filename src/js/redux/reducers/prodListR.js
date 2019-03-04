import {
  FETCH_PRODLIST_START,
  FETCH_PRODLIST_SUCCESS,
  FETCH_PRODLIST_FAILURE,
  SET_ACTIVE_CATALOG,
  SET_PRODLIST_FILTER
} from '../actions/prodListA';

import {arrayToObject} from '../../helpers/selector';

export const initialState = {
  currentCatalog: null,
  mac: {
    ids: [],
    byId: {},
    isLoading: false,
    errorMsg: null,
  },
  ipad: {
    ids: [],
    byId: {},
    isLoading: false,
    errorMsg: null,
  },
  iphone: {
    ids: [],
    byId: {},
    isLoading: false,
    errorMsg: null,
  },
  apple_tv: {
    ids: [],
    byId: {},
    isLoading: false,
    errorMsg: null,
  },
  ipod: {
    ids: [],
    byId: {},
    isLoading: false,
    errorMsg: null,
  },
  iwatch: {
    ids: [],
    byId: {},
    isLoading: false,
    errorMsg: null,
  }
};

export const prodListR = (state = initialState, action) => {

  const {payload} = action;

  switch (action.type) {
    case SET_ACTIVE_CATALOG:
      return {
        ...state,
        currentCatalog: action.path
      };
    case FETCH_PRODLIST_START:
      return {
        ...state,
        [state.currentCatalog]: {
          ...state[state.currentCatalog],
          isLoading: true
        }
      };
    case FETCH_PRODLIST_SUCCESS:
      return {
        ...state,
        [state.currentCatalog]: {
          ...state[state.currentCatalog],
          isLoading: false,
          ids: payload.data.map((item) => item.id),
          byId: arrayToObject(payload.data, 'id')
        }
      };
    case FETCH_PRODLIST_FAILURE:
      return {
        ...state,
        [state.currentCatalog]: {
          ...state[state.currentCatalog],
          isLoading: false,
          errorMsg: action.errorMsg
        }
      };
    case SET_PRODLIST_FILTER:
      return {
        ...state,
        [state.currentCatalog]: {
          ...state[state.currentCatalog],
          filter: action.options
        }
      };
    default:
      return state;
  }
};