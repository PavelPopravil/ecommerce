import isoFetch from 'isomorphic-fetch';

export default (dispatch, url, method, cbStart, cbSuccess, cbError) => {
  dispatch(cbStart());
  isoFetch(url, {
    method: method,
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
        dispatch(cbSuccess(data)); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
      } catch (error) {
        dispatch(cbError(error.message)); // если что-то пошло не так - дальше по цепочке пойдёт отвергнутый промис
      }
    })
    .catch((error) => {
      dispatch(cbError(error.userMessage || error.message));
    });
};