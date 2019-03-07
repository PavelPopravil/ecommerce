import {
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE
} from '../actions/productA';

const initialState = {
  isLoading: false,
  id: null,
  errorMsg: null
};

export default (state = initialState, action) => {
  const {payload} = action;
  switch (action.type) {
    case FETCH_PRODUCT_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: payload.product.id
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.errorMsg
      };
    default: {
      return state;
    }
  }
};