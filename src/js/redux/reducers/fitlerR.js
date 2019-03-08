import {SET_PRODLIST_FILTER, REMOVE_PRODLIST_FILTER} from '../actions/filterA';

const initialState = {};

export default (state = initialState, action) => {
  const {path, value, name} = action;

  switch (action.type) {
    case SET_PRODLIST_FILTER:

      const catalog = state[path] ? state[path] : {};
      return {
        ...state,
        [path]: {
          ...catalog,
          [name]: catalog[name] ? [...catalog[name], value] : [value]
        }
      };
    case REMOVE_PRODLIST_FILTER:

      state[path][name] = state[path][name].filter((item) => item !== value);
      if (!state[path][name].length) {
        delete state[path][name];
      }
      return {
        ...state,
        [path]: {
          ...state[path]
        }
      };
    default:
      return state;
  }
}