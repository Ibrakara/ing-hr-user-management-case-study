import {reducer} from '../dev/store/reducer';
import {STORE_ACTION_NAMES} from '../dev/constants';
import {mockUserList} from '../dev/mock-data';
import {expect} from '@open-wc/testing';

suite('reducer', () => {
  const initialState = {
    locale: '',
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

  test('should return the initial state when no action is provided', () => {
    const result = reducer(undefined, {});
    expect(result).to.deep.equal(initialState);
  });

  test('should handle SET_SEARCH_VALUE action', () => {
    const action = {
      type: STORE_ACTION_NAMES.SET_SEARCH_VALUE,
      value: 'John',
    };
    const result = reducer(initialState, action);

    expect(result.searchValue).to.equal('John');
    expect(result).to.deep.equal({
      ...initialState,
      searchValue: 'John',
    });
  });

  test('should handle SET_USER_LIST action', () => {
    const newUserList = [{id: 1, name: 'Jane Doe'}];
    const action = {
      type: STORE_ACTION_NAMES.SET_USER_LIST,
      value: newUserList,
    };
    const result = reducer(initialState, action);

    expect(result.userList).to.deep.equal(newUserList);
    expect(result).to.deep.equal({
      ...initialState,
      userList: newUserList,
    });
  });

  test('should handle ADD_USER action', () => {
    const action = {
      type: STORE_ACTION_NAMES.ADD_USER,
    };
    const result = reducer(initialState, action);

    expect(result.userList.length).to.equal(initialState.userList.length + 1);
    expect(
      JSON.stringify(Object.keys(result.userList[result.userList.length - 1]))
    ).to.equal(
      JSON.stringify(
        Object.keys({
          ...initialState.userForm,
          id: 'uuidv4',
        })
      )
    );
  });

  test('should handle SET_USER_FORM action', () => {
    const newForm = {
      name: 'Jane',
      lastName: 'Doe',
      dateOfEmployment: '2021-01-01',
      dateOfBirth: '1990-01-01',
      phoneNumber: '1234567890',
      email: 'jane.doe@example.com',
      department: 'HR',
      position: 'Manager',
    };
    const action = {
      type: STORE_ACTION_NAMES.SET_USER_FORM,
      value: newForm,
    };
    const result = reducer(initialState, action);

    expect(result.userForm).to.deep.equal(newForm);
  });

  test('should handle RESET_USER_FORM action', () => {
    const action = {
      type: STORE_ACTION_NAMES.RESET_USER_FORM,
    };
    const result = reducer(initialState, action);

    expect(result.userForm).to.deep.equal(initialState.userForm);
  });

  test('should handle SET_FORM_NAME action', () => {
    const action = {
      type: STORE_ACTION_NAMES.SET_FORM_NAME,
      value: 'John',
    };
    const result = reducer(initialState, action);

    expect(result.userForm.name).to.equal('John');
  });

  test('should handle SET_FORM_LAST_NAME action', () => {
    const action = {
      type: STORE_ACTION_NAMES.SET_FORM_LAST_NAME,
      value: 'Doe',
    };
    const result = reducer(initialState, action);

    expect(result.userForm.lastName).to.equal('Doe');
  });

  test('should handle SET_FORM_DATE_OF_EMPLOYMENT action', () => {
    const action = {
      type: STORE_ACTION_NAMES.SET_FORM_DATE_OF_EMPLOYMENT,
      value: '2022-01-01',
    };
    const result = reducer(initialState, action);

    expect(result.userForm.dateOfEmployment).to.equal('2022-01-01');
  });

  test('should handle SET_FORM_DATE_OF_BIRTH action', () => {
    const action = {
      type: STORE_ACTION_NAMES.SET_FORM_DATE_OF_BIRTH,
      value: '1990-01-01',
    };
    const result = reducer(initialState, action);

    expect(result.userForm.dateOfBirth).to.equal('1990-01-01');
  });

  test('should handle SET_FORM_PHONE_NUMBER action', () => {
    const action = {
      type: STORE_ACTION_NAMES.SET_FORM_PHONE_NUMBER,
      value: '1234567890',
    };
    const result = reducer(initialState, action);

    expect(result.userForm.phoneNumber).to.equal('1234567890');
  });

  test('should handle SET_FORM_EMAIL action', () => {
    const action = {
      type: STORE_ACTION_NAMES.SET_FORM_EMAIL,
      value: 'johndoe@example.com',
    };
    const result = reducer(initialState, action);

    expect(result.userForm.email).to.equal('johndoe@example.com');
  });

  test('should handle SET_FORM_DEPARTMENT action', () => {
    const action = {
      type: STORE_ACTION_NAMES.SET_FORM_DEPARTMENT,
      value: 'HR',
    };
    const result = reducer(initialState, action);

    expect(result.userForm.department).to.equal('HR');
  });

  test('should handle SET_FORM_POSITION action', () => {
    const action = {
      type: STORE_ACTION_NAMES.SET_FORM_POSITION,
      value: 'Manager',
    };
    const result = reducer(initialState, action);

    expect(result.userForm.position).to.equal('Manager');
  });
});
