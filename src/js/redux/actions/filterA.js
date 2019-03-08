export const SET_PRODLIST_FILTER = 'SET_PRODLIST_FILTER';
export const REMOVE_PRODLIST_FILTER = 'REMOVE_PRODLIST_FILTER';

export const setProdFilterOption = (path, value, name) => {
  return {
    type: SET_PRODLIST_FILTER,
    path,
    value,
    name
  }
};

export const removeProdFilterOption = (path, value, name) => {
  return {
    type: REMOVE_PRODLIST_FILTER,
    path,
    value,
    name
  }
};