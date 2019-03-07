import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET
} from '../actions/basketA';

const initialState = {
  counter: 0,
  totalPrice: 0,
  products: {}
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
          [path]: state.products[path] ? [...state.products[path], id] : [id]
        }
      };
    case REMOVE_FROM_BASKET: {
      const {catalogPath: path, id, price} = action.product;

      const products = {...state.products};
      products[path] = products[path].filter((productId) => productId !== id);
      if (!products[path].length) {
        delete products[path];
      }

      return {
        ...state,
        products: {
          ...products
        },
        totalPrice: state.totalPrice -= price,
        counter: state.counter <= 0 ? state.counter : --state.counter,
      }
    }
    default: {
      return state;
    }
  }
}