import {
  FETCH_PRODLIST_START,
  FETCH_PRODLIST_SUCCESS,
  FETCH_PRODLIST_FAILURE,
  // SET_ACTIVE_CATALOG,
} from "../actions/prodListA";

const initialState = {
  isLoading: false,
  data: [],
  errorMsg: null
};

export const prodListR = (state = initialState, action) => {
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
};

// export const mew = (state = null, action) => {
//   console.log(action.path);
//   switch (action.type) {
//     case SET_ACTIVE_CATALOG:
//       return action.path;
//     default:
//       return state;
//   }
// };