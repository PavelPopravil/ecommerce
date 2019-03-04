import {prodListR} from './prodListR';
import {initialState} from './prodListR';
import {arrayToObject} from '../../helpers/selector';

import {
  FETCH_PRODLIST_START,
  FETCH_PRODLIST_SUCCESS,
  FETCH_PRODLIST_FAILURE,
  SET_ACTIVE_CATALOG
} from '../actions/prodListA'

describe('Prod-list Reducers tests', () => {

  it('SET_ACTIVE_CATALOG', () => {

    const state = {...initialState};
    const action = {
      type: SET_ACTIVE_CATALOG,
      path: 'mac'
    };

    expect(prodListR(state, action)).toEqual({
      ...state,
      currentCatalog: action.path
    })

  });

  it('FETCH_PRODLIST_START', () => {

    const state = {
      ...initialState,
      currentCatalog: 'mac'
    };

    const action = {
      type: FETCH_PRODLIST_START
    };

    expect(prodListR(state, action)).toEqual({
      ...state,
      [state.currentCatalog]: {
        ...state[state.currentCatalog],
        isLoading: true
      }
    })
  });

  it('FETCH_PRODLIST_SUCCESS', () => {

    const state = {
      ...initialState,
      currentCatalog: 'mac',
      [initialState.currentCatalog]: {
        ...initialState[initialState.currentCatalog],
        isLoading: true
      }
    };

    const action = {
      type: FETCH_PRODLIST_SUCCESS,
      payload: {
        data: [{id: 1}, {id: 2}, {id: 3}]
      }
    };

    expect(prodListR(state, action)).toEqual({
      ...state,
      [state.currentCatalog]: {
        ...state[state.currentCatalog],
        isLoading: false,
        ids: action.payload.data.map((item) => item.id),
        byId: arrayToObject(action.payload.data, 'id')
      }
    });
  });

  it('should return new object', () => {
    expect(arrayToObject([{id: 1}, {id: 2}], 'id')).toEqual({
      1: {id: 1},
      2: {id: 2}
    });
  });

  it('FETCH_PRODLIST_FAILURE', () => {

    const state = {
      ...initialState,
      currentCatalog: 'mac',
      [initialState.currentCatalog]: {
        ...initialState[initialState.currentCatalog],
        isLoading: true
      }
    };

    const action = {
      type: FETCH_PRODLIST_FAILURE,
      errorMsg: 'error'
    };

    expect(prodListR(state, action)).toEqual({
      ...state,
      [state.currentCatalog]: {
        ...state[state.currentCatalog],
        isLoading: false,
        errorMsg: action.errorMsg
      }
    });
  });

});