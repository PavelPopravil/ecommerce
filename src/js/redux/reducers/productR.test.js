import productR from './productR';

import {
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE
} from '../actions/productA';

describe('Product Reducers tests', () => {

  const initialState = {
    isLoading: false,
    id: null,
    errorMsg: null
  };

  it('FETCH_PRODUCT_START', () => {

    const action = {
      type: FETCH_PRODUCT_START
    };

    expect(productR(initialState, action)).toEqual({
      ...initialState,
      isLoading: true
    });

  });

  it('FETCH_PRODUCT_SUCCESS', () => {

    const state = {
      ...initialState,
      isLoading: true
    };

    const action = {
      type: FETCH_PRODUCT_SUCCESS,
      payload: {
        product: {id: 2}
      }
    };

    expect(productR(state, action)).toEqual({
      ...state,
      isLoading: false,
      id: action.payload.product.id
    });
  });

  it('FETCH_PRODUCT_FAILURE', () => {

    const state = {
      ...initialState,
      isLoading: true
    };

    const action = {
      type: FETCH_PRODUCT_FAILURE,
      errorMsg: 'Error!'
    };

    expect(productR(state, action)).toEqual({
      ...state,
      isLoading: false,
      errorMsg: action.errorMsg
    });
  });
});

