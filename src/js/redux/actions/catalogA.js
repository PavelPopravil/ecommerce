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


// const httpGet = async endPoint => {
//   try {
//     const response = await fetch(`${API_ROOT}/${endPoint}`)
//     if (response.ok) {
//       const json = await response.json()
//       return json
//     } else {
//       throw new Error(response.status)
//     }
//   } catch (err) {
//     console.warn('httpGet error ', err)
//   }
// }
//
// export function getNews() {
//   return (dispatch) => {
//     dispatch({
//       type: t.NEWS_GET_REQUEST,
//     })
//
//     // httpGet - функция хелпер
//     return httpGet(`news`)
//       .then(res => {
//         if (checkResponse(res)) {
//           dispatch(newsSuccess({
//             type: t.NEWS_GET_SUCCESS,
//             payload: res.data,
//           }))
//         } else {
//           // не протестировано! (можете взять на домашнее задание)
//           dispatch(newsFailure(res.message))
//         }
//       })
//       .catch(error => {
//         // не протестировано
//         dispatch(newsFailure())
//       })
//   }
// }

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