export const ICON = {
  EDIT: 'edit',
  DELETE: 'trash',
  LEFT_ARROW: 'arrow-left',
  RIGHT_ARROW: 'arrow-right',
  ING_LOGO: 'ING-bank-logo',
  SEARCH: 'search',
  PLUS: 'plus',
  USER: 'user',
  LISTING: 'listing',
  GRID: 'grid',
};
export const NUMBER_OF_USERS_PER_PAGE = 10;
export const DEPARTMENT_OPTION_LIST = [
  {value: 'Analytics', label: 'Analytics'},
  {value: 'Tech', label: 'Tech'},
];
export const POSITION_OPTION_LIST = [
  {value: 'Junior', label: 'Junior'},
  {value: 'Medior', label: 'Medior'},
  {value: 'Senior', label: 'Senior'},
];
export const FORM_ATTRIBUTES = {
  NAME: 'name',
  LAST_NAME: 'lastName',
  DATE_OF_EMPLOYMENT: 'dateOfEmployment',
  DATE_OF_BIRTH: 'dateOfBirth',
  PHONE_NUMBER: 'phoneNumber',
  EMAIL: 'email',
  DEPARTMENT: 'department',
  POSITION: 'position',
};
export const STORE_ACTION_NAMES = {
  SET_USER_FORM: 'SET_USER_FORM',
  RESET_USER_FORM: 'RESET_USER_FORM',
  SET_USER_LIST: 'SET_USER_LIST',
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
  SET_FORM_NAME: 'SET_FORM_NAME',
  SET_FORM_LAST_NAME: 'SET_FORM_LAST_NAME',
  SET_FORM_DATE_OF_EMPLOYMENT: 'SET_FORM_DATE_OF_EMPLOYMENT',
  SET_FORM_DATE_OF_BIRTH: 'SET_FORM_DATE_OF_BIRTH',
  SET_FORM_PHONE_NUMBER: 'SET_FORM_PHONE_NUMBER',
  SET_FORM_EMAIL: 'SET_FORM_EMAIL',
  SET_FORM_DEPARTMENT: 'SET_FORM_DEPARTMENT',
  SET_FORM_POSITION: 'SET_FORM_POSITION',
  ADD_USER: 'ADD_USER',
  EDIT_USER: 'EDIT_USER',
};
export const PHONE_REGEX = '^[+][(][0-9]{2}[)][0-9]{10}$';
export const EMAIL_REGEX = '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}';
export const FORM_ERROR = {
  name: 'This field can not be empty',
  lastName: 'This field can not be empty',
  dateOfEmployment: 'This field can not be empty',
  dateOfBirth: 'This field can not be empty',
  phoneNumber:
    'This field can not be empty and should be in +(90)5555555555 format',
  email:
    'This field can not be empty and should be in example@example.com format',
  department: 'This field can not be empty',
  position: 'This field can not be empty',
};
