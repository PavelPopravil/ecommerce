import {
  FETCH_PRODLIST_START,
  FETCH_PRODLIST_SUCCESS,
  FETCH_PRODLIST_FAILURE,
  SET_ACTIVE_CATALOG
} from '../actions/prodListA';

import {arrayToObject} from '../../helpers/selector';
import {FETCH_PRODUCT_SUCCESS} from "../actions/productA";

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
    case FETCH_PRODUCT_SUCCESS:
      const product = action.payload.product;
      return {
        ...state,
        [product.catalogPath]: {
          ...state[product.catalogPath],
          byId: {
            ...state[product.catalogPath].byId,
            [product.id]: product
          },
          ids: [...state[product.catalogPath].ids, product.id]
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
    default:
      return state;
  }
};