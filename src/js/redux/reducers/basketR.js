import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  SET_PRODUCT_COUNT
} from '../actions/basketA';

const initialState = {
  counter: 0,
  totalPrice: 0,
  products: {}
};

const findCurrentProduct = (arr, id) => {
  return arr.find((prod) => {
    return prod.id === id;
  });
};

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_BASKET:
      const {catalogPath: path, id, price} = action.product;
      return {
        ...state,
        counter: ++state.counter,
        totalPrice: state.totalPrice += price,
        products: {
          ...state.products,
          [path]: state.products[path] ? [...state.products[path], {id, count: 1, price}] : [{id, count: 1, price}] // toDo Переписать на объект содержащий ключ - id
        }
      };
    case REMOVE_FROM_BASKET: {
      const {catalogPath: path, id, price} = action.product;

      const products = {...state.products};
      products[path] = products[path].filter((productId) => productId.id !== id);
      if (!products[path].length) {
        delete products[path];
      }

      const currProduct = findCurrentProduct(state.products[path], id);

      return {
        ...state,
        products: {
          ...products
        },
        totalPrice: state.totalPrice -= price * currProduct.count,
        counter: state.counter <= 0 ? 0 : --state.counter,
      }
    }
    case SET_PRODUCT_COUNT: {
      const {catalogPath: path, id, price} = action.product;
      const {value} = action;
      const currProduct = findCurrentProduct(state.products[path], id);

      return {
        ...state,
        totalPrice: state.totalPrice - currProduct.price + price * value,
        products: {
          ...state.products,
          [path]: state.products[path].map((prod) => {
            if (prod.id === id) {
              return {...prod, count: value, price: price * value}
            }
            return prod;
          })
        }
      }
    }
    default: {
      return state;
    }
  }
}