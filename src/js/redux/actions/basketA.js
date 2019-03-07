export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const SET_PRODUCT_COUNT = 'SET_PRODUCT_COUNT';

export const addProdToBasket = (product) => {
  return {
    type: ADD_TO_BASKET,
    product
  }
};

export const removeProdFromBasket = (product) => {
  return {
    type: REMOVE_FROM_BASKET,
    product
  }
};

export const setProductCount = (value, product) => {
  return {
    type: SET_PRODUCT_COUNT,
    value,
    product
  }
};