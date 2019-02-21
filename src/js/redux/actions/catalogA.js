import fetchData from '../../helpers/fetchData';

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
  fetchData(dispatch, 'https://5c6ac5f2d98e3600141cab67.mockapi.io/catalog', 'get', fetchDataStart, fetchDataSuccess, fetchDataFailure);
};
