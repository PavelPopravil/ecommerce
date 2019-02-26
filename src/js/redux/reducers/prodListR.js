import {
  FETCH_PRODLIST_START,
  FETCH_PRODLIST_SUCCESS,
  FETCH_PRODLIST_FAILURE
} from "../actions/prodListA";

const initialState = {
  isLoading: false,
  data: [],
  errorMsg: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODLIST_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PRODLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case FETCH_PRODLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.errorMsg
      };
    default:
      return state;
  }
}