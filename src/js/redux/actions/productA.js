import fetchData from '../../helpers/fetchData';
import {API_ROOT} from '../../helpers/constats';

export const FETCH_PRODUCT_START = 'FETCH_PRODUCT_START';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

export const fetchDataStart = () => {
  return {
    type: FETCH_PRODUCT_START
  }
};

export const fetchDataSuccess = (id) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: {
      id
    }
  }
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    errorMsg: error
  }
};

export const fetchProduct = (path, id) => async (dispatch) => {
  fetchData(dispatch, `${API_ROOT}/${path}/${id}`, 'get', fetchDataStart, fetchDataSuccess, fetchDataFailure);
};