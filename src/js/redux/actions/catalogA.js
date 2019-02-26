import fetchData from '../../helpers/fetchData';
import {API_ROOT} from "../../helpers/constats";

export const FETCH_CATALOG_START = 'FETCH_CATALOG_START';
export const FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS';
export const FETCH_CATALOG_FAILURE = 'FETCH_CATALOG_FAILURE';

export const fetchDataStart = () => {
  return {
    type: FETCH_CATALOG_START
  }
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_CATALOG_SUCCESS,
    payload: data
  }
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_CATALOG_FAILURE,
    errorMsg: error
  }
};

export const fetchCatalog = () =>  async (dispatch) => {
  fetchData(dispatch, `${API_ROOT}/catalog`, 'get', fetchDataStart, fetchDataSuccess, fetchDataFailure);
};
