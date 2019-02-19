import {loadData} from '../../helpers/helpers';
import isoFetch from "isomorphic-fetch";

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
    payload: null,
    errorMsg: error
  }
};

// export const fetchData = () => {
//   loadData('https://5c6ac5f2d98e3600141cab67.mockapi.io/catalog', 'get', fetchDataSuccess, fetchDataFailure);
// };

export const fetchData = () => async (dispatch) => { // toDo wtf
  dispatch(fetchDataStart());
  isoFetch('https://5c6ac5f2d98e3600141cab67.mockapi.io/catalog', {
    method: 'get',
    headers: {
      "Accept": "application/json",
    },
  })
    .then((response) => { // response - HTTP-ответ
      if (!response.ok) {
        let Err = new Error("fetch error " + response.status);
        Err.userMessage = "Ошибка связи";
        throw Err; // дальше по цепочке пойдёт отвергнутый промис
      } else
        return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
    })
    .then((data) => {
      try {
        dispatch(fetchDataSuccess(data)); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
      } catch (error) {
        dispatch(fetchDataFailure(error.message)); // если что-то пошло не так - дальше по цепочке пойдёт отвергнутый промис
      }
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error.userMessage || error.message));
    });
};