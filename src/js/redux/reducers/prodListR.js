import {
  FETCH_PRODLIST_START,
  FETCH_PRODLIST_SUCCESS,
  FETCH_PRODLIST_FAILURE,
} from '../actions/prodListA';

import {arrayToObject} from '../../helpers/selector';

const initialState = {
  isLoading: false,
  errorMsg: null,
  mac: {
    ids: [],
    byId: {}
  },
  ipad: {
    ids: [],
    byId: {}
  },
  iphone: {
    ids: [],
    byId: {}
  },
  apple_tv: {
    ids: [],
    byId: {}
  },
  ipod: {
    ids: [],
    byId: {}
  },
  iwatch: {
    ids: [],
    byId: {}
  }
};

export const prodListR = (state = initialState, action) => {

  const {payload} = action;

  switch (action.type) {
    case FETCH_PRODLIST_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PRODLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [payload.catalogId]: {
          ...state[payload.catalogId],
          ids: payload.data.map((item) => item.id),
          byId: arrayToObject(payload.data, 'id')
        }
      };
    case FETCH_PRODLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.errorMsg
      };
    default:
      return state;
  }
};