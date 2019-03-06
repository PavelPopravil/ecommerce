import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET
} from '../actions/basketA';

const initialState = {
  counter: 0,
  products: {}
};

export default (state = initialState, action) => {
  const {path, productId} = action;

  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        counter: ++state.counter,
        products: {
          ...state.products,
          [path]: state.products[path] ? [...state.products[path], productId] : [productId]
        }
      };
    case REMOVE_FROM_BASKET: {

      const products = {...state.products};
      products[path] = products[path].filter((id) => id !== productId);
      if (!products[path].length) {
        delete products[path];
      }

      return {
        ...state,
        products: {
          ...products
        },
        counter: state.counter <= 0 ? state.counter : --state.counter,
      }
    }
    default: {
      return state;
    }
  }
}