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
        id: action.payload.id
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