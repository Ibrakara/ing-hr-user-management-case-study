export const SET_USER_LIST = 'SET_USER_LIST';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

export const setUserList = (list) => {
  return {
    type: SET_USER_LIST,
    list,
  };
};
export const setSearchValue = (searchValue) => {
  return {
    type: SET_SEARCH_VALUE,
    searchValue,
  };
};
