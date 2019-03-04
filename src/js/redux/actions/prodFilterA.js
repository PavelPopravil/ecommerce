export const SET_PRODLIST_FILTER = 'SET_PRODLIST_FILTER';
export const setProdFilter = (options) => {
  return {
    type: SET_PRODLIST_FILTER,
    options
  }
};
