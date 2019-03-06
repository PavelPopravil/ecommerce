export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

export const addProdToBasket = (path, productId) => {
  return {
    type: ADD_TO_BASKET,
    path,
    productId
  }
};

export const removeProdFromBasket = (path, productId) => {
  return {
    type: REMOVE_FROM_BASKET,
    path,
    productId
  }
};