import {SET_SEARCH_VALUE, SET_USER_LIST} from './actions.js';
import {mockUserList} from '../mock-data.js';

export const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed',
};

const INITIAL_STATE = {
  userList: mockUserList,
  searchValue: '',
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case SET_USER_LIST:
      return {
        ...state,
        userList: action.list,
      };
    default:
      return state;
  }
};

export const getSearchValue = (state) => state.searcValue;
