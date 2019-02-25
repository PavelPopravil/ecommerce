import fetchData from '../../helpers/fetchData';
import {API_ROOT} from "../../helpers/constats";

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataStart = () => {
  return {
    type: FETCH_DATA_START
  }
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    errorMsg: error
  }
};

export const fetchCatalog = () =>  async (dispatch) => {
  fetchData(dispatch, `${API_ROOT}/catalog`, 'get', fetchDataStart, fetchDataSuccess, fetchDataFailure);
};
