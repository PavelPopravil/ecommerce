import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET
} from '../actions/basketA';

const initialState = {};

export default (state = initialState, action) => {
  const {path, productId} = action;
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        [path]: state[path] ? [...state[path], productId] : [productId]
      };
    case REMOVE_FROM_BASKET: {

      state[path] = state[path].filter((id) => id !== productId);
      if (!state[path].length) {
        delete state[path];
      }

      return {
        ...state
      }
    }
    default: {
      return state;
    }
  }
}