import catalogR from './catalogR';
import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions/catalogA';

describe('catalog Reducers tests', () => {

  it('FETCH_DATA_START', () => {

    const initialState = {
      isLoading: false,
      data: [],
      errorMsg: null
    };

    const action = {
      type: FETCH_DATA_START
    };

    expect(catalogR(initialState, action)).toEqual({
      ...initialState,
      isLoading: true
    });

  });

  it('FETCH_DATA_SUCCESS', () => {

    const state = {
      isLoading: true,
      data: [],
      errorMsg: null
    };

    const action = {
      type: FETCH_DATA_SUCCESS,
      payload: [1, 2, 3]
    };

    expect(catalogR(state, action)).toEqual({
      ...state,
      isLoading: false,
      data: action.payload
    });
  });

  it('FETCH_DATA_FAILURE', () => {

    const state = {
      isLoading: true,
      data: [],
      errorMsg: null
    };

    const action = {
      type: FETCH_DATA_FAILURE,
      errorMsg: 'Error!'
    };

    expect(catalogR(state, action)).toEqual({
      ...state,
      errorMsg: action.errorMsg
    });
  });
});

