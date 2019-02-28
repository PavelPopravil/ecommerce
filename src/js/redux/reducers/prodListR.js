import {
  FETCH_PRODLIST_START,
  FETCH_PRODLIST_SUCCESS,
  FETCH_PRODLIST_FAILURE,
  // SET_ACTIVE_CATALOG,
} from '../actions/prodListA';

// export const initialState = { // toDo generate initial state with real catalog data
//   currentCatalog: null,
//   'mac': {
//     isLoading: false,
//     data: [],
//     errorMsg: null
//   },
//   'ipad': {
//     isLoading: false,
//     data: [],
//     errorMsg: null
//   },
//   'iphone': {
//     isLoading: false,
//     data: [],
//     errorMsg: null
//   },
//   'apple_tv': {
//     isLoading: false,
//     data: [],
//     errorMsg: null
//   },
//   'ipod': {
//     isLoading: false,
//     data: [],
//     errorMsg: null
//   },
//   'iwatch': {
//     isLoading: false,
//     data: [],
//     errorMsg: null
//   }
// };

// export const prodListR = (state = initialState, action) => {
//   const currCatalog = state[state.currentCatalog];
//   switch (action.type) {
//     case SET_ACTIVE_CATALOG:
//       return {
//         ...state,
//         currentCatalog: action.path
//       };
//     case FETCH_PRODLIST_START:
//       return {
//         ...state,
//         [state.currentCatalog]: {
//           ...currCatalog,
//           isLoading: true
//         }
//       };
//     case FETCH_PRODLIST_SUCCESS:
//       return {
//         ...state,
//         [state.currentCatalog]: {
//           ...currCatalog ,
//           isLoading: false,
//           data: action.payload
//         }
//       };
//     case FETCH_PRODLIST_FAILURE:
//       return {
//         ...state,
//         [state.currentCatalog]: {
//           ...currCatalog,
//           isLoading: false,
//           errorMsg: action.errorMsg
//         }
//       };
//     default:
//       return state;
//   }
// };

const arrayToObject = (arr, key) => {
  let obj = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    obj[arr[i][key]] = arr[i];
  }
  return obj;
};

const initialState = {
  ids: [],
  byId: {},
  isLoading: false,
  errorMsg: null
};

export const prodListR = (state = {}, action) => {
  const {payload} = action;

  switch (action.type) {
    case FETCH_PRODLIST_START:
      return {
        ...state,
        [payload.catalogId]: {
          ...initialState,
          isLoading: true
        }
      };
    case FETCH_PRODLIST_SUCCESS:
      return {
        ...state,
        [payload.catalogId]: {
          isLoading: false,
          ids: payload.data.map((item) => item.id),
          byId: arrayToObject(payload.data, 'id')
        }
      };
    case FETCH_PRODLIST_FAILURE:
      return {
        ...state,
        [payload.catalogId]: {
          isLoading: false,
          errorMsg: action.errorMsg
        }
      };
    default:
      return state;
  }
};

// const catalogInitialState = {
//   'mac': [],
//   'ipad': [],
//   'iphone': [],
//   'apple_tv': [],
//   'ipod': [],
//   'iwatch': [],
// };
//
// export const catalogListR = (state = catalogInitialState, action) => {
//
// };