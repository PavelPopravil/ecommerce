import isoFetch from 'isomorphic-fetch';

export const loadData = (url, method, cbSuccess, cbError) => {
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
        cbSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
      } catch (error) {
        cbError(error.message); // если что-то пошло не так - дальше по цепочке пойдёт отвергнутый промис
      }
    })
    .catch((error) => {
      cbError(error.userMessage || error.message);
    });
};