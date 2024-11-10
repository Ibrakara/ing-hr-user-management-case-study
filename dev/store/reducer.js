import {STORE_ACTION_NAMES} from '../constants';
import {mockUserList} from '../mock-data.js';

const INITIAL_STATE = {
  userList: mockUserList,
  searchValue: '',
  userForm: {
    name: '',
    lastName: '',
    dateOfEmployment: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    department: '',
    position: '',
  },
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
    case STORE_ACTION_NAMES.ADD_USER:
      return {
        ...state,
        userList: [...state.userList, {...state.userForm}],
      };
    case STORE_ACTION_NAMES.SET_USER_FORM:
      return {
        ...state,
        userForm: {...action.value},
      };
    case STORE_ACTION_NAMES.RESET_USER_FORM:
      return {
        ...state,
        userForm: {...INITIAL_STATE.userForm},
      };
    case STORE_ACTION_NAMES.EDIT_USER:
      return {
        ...state,
        userList: [
          ...state.userList.map((user) => {
            if (user.id === action.value) {
              user = {...user, ...state.userForm};
            }
            return user;
          }),
        ],
      };
    case STORE_ACTION_NAMES.SET_FORM_NAME:
      return {
        ...state,
        userForm: {...state.userForm, name: action.value},
      };
    case STORE_ACTION_NAMES.SET_FORM_LAST_NAME:
      return {
        ...state,
        userForm: {...state.userForm, lastName: action.value},
      };
    case STORE_ACTION_NAMES.SET_FORM_DATE_OF_EMPLOYMENT:
      return {
        ...state,
        userForm: {...state.userForm, dateOfEmployment: action.value},
      };
    case STORE_ACTION_NAMES.SET_FORM_DATE_OF_BIRTH:
      return {
        ...state,
        userForm: {...state.userForm, dateOfBirth: action.value},
      };
    case STORE_ACTION_NAMES.SET_FORM_PHONE_NUMBER:
      return {
        ...state,
        userForm: {...state.userForm, phoneNumber: action.value},
      };
    case STORE_ACTION_NAMES.SET_FORM_EMAIL:
      return {
        ...state,
        userForm: {...state.userForm, email: action.value},
      };
    case STORE_ACTION_NAMES.SET_FORM_DEPARTMENT:
      return {
        ...state,
        userForm: {...state.userForm, department: action.value},
      };
    case STORE_ACTION_NAMES.SET_FORM_POSITION:
      return {
        ...state,
        userForm: {...state.userForm, position: action.value},
      };
    default:
      return state;
  }
};

export const getSearchValue = (state) => state.searcValue;
