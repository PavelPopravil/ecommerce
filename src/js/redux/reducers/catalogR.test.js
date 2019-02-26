import catalogR from './catalogR';

import {
  FETCH_CATALOG_START,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE
} from '../actions/catalogA';

describe('catalog Reducers tests', () => {

  const initialState = {
    isLoading: false,
    data: [],
    errorMsg: null
  };

  it('If wrong action passed, reducer should return default state', () => {

    const action = {
      type: 'dsdsdsdsds'
    };

    expect(catalogR(initialState, action)).toEqual({
      ...initialState
    });
  });

  it('FETCH_CATALOG_START', () => {

    const action = {
      type: FETCH_CATALOG_START
    };

    expect(catalogR(initialState, action)).toEqual({
      ...initialState,
      isLoading: true
    });

  });

  it('FETCH_CATALOG_SUCCESS', () => {

    const state = {
      ...initialState,
      isLoading: true
    };

    const action = {
      type: FETCH_CATALOG_SUCCESS,
      payload: [1, 2, 3]
    };

    expect(catalogR(state, action)).toEqual({
      ...state,
      isLoading: false,
      data: action.payload
    });
  });

  it('FETCH_CATALOG_FAILURE', () => {

    const state = {
      ...initialState,
      isLoading: true
    };

    const action = {
      type: FETCH_CATALOG_FAILURE,
      errorMsg: 'Error!'
    };

    expect(catalogR(state, action)).toEqual({
      ...state,
      isLoading: false,
      errorMsg: action.errorMsg
    });
  });
});

