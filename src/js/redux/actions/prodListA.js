import fetchData from '../../helpers/fetchData';
import {API_ROOT} from '../../helpers/constats';

export const FETCH_PRODLIST_START = 'FETCH_PRODLIST_START';
export const FETCH_PRODLIST_SUCCESS = 'FETCH_PRODLIST_SUCCESS';
export const FETCH_PRODLIST_FAILURE = 'FETCH_PRODLIST_FAILURE';
export const SET_ACTIVE_CATALOG = 'SET_ACTIVE_CATALOG';
export const SET_PRODLIST_FILTER = 'SET_PRODLIST_FILTER';

export const setProdFilter = (options) => {
  return {
    type: SET_PRODLIST_FILTER,
    options
  }
};

export const fetchDataStart = () => {
  return {
    type: FETCH_PRODLIST_START
  }
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_PRODLIST_SUCCESS,
    payload: {
      data
    }
  }
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_PRODLIST_FAILURE,
    errorMsg: error
  }
};

export const fetchProdList = (path) => async (dispatch) => {
  dispatch({
    type: SET_ACTIVE_CATALOG,
    path
  });
  fetchData(dispatch, `${API_ROOT}/${path}`, 'get', fetchDataStart, fetchDataSuccess, fetchDataFailure);
};