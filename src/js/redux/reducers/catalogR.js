import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions/catalogA';

const initialState = {
  isLoad: false,
  payload: [],
  errorMsg: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoad: false,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoad: true,
        payload: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        errorMsg: action.errorMsg
      };
    default: {
      return state;
    }
  }
};