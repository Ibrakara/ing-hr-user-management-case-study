import {STORE_ACTION_NAMES} from '../constants';
import {mockUserList} from '../mock-data.js';

const INITIAL_STATE = {
  userList: mockUserList,
  searchValue: '',
  formName: '',
  formLastName: '',
  formDateOfEmployement: '',
  formDateOfBirth: '',
  formPhoneNumber: '',
  formEmail: '',
  formDepartment: '',
  formPosition: '',
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_ACTION_NAMES.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
      };
    case STORE_ACTION_NAMES.SET_USER_LIST:
      return {
        ...state,
        userList: action.value,
      };
    case STORE_ACTION_NAMES.SET_FORM_NAME:
      return {
        ...state,
        formName: action.value,
      };
    case STORE_ACTION_NAMES.SET_FORM_LAST_NAME:
      return {
        ...state,
        formLastName: action.value,
      };
    case STORE_ACTION_NAMES.SET_FORM_DATE_OF_EMPLOYMENT:
      return {
        ...state,
        formDateOfEmployement: action.value,
      };
    case STORE_ACTION_NAMES.SET_FORM_DATE_OF_BIRTH:
      return {
        ...state,
        formDateOfBirth: action.value,
      };
    case STORE_ACTION_NAMES.SET_FORM_PHONE_NUMBER:
      return {
        ...state,
        formPhoneNumber: action.value,
      };
    case STORE_ACTION_NAMES.SET_FORM_EMAIL:
      return {
        ...state,
        formEmail: action.value,
      };
    case STORE_ACTION_NAMES.SET_FORM_DEPARTMENT:
      return {
        ...state,
        formDepartment: action.value,
      };
    case STORE_ACTION_NAMES.SET_FORM_POSITION:
      return {
        ...state,
        formPosition: action.value,
      };
    default:
      return state;
  }
};

export const getSearchValue = (state) => state.searcValue;
