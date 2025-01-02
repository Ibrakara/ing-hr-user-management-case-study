import {html} from 'lit';
import {fixture, expect} from '@open-wc/testing';
import {CreateAndEditUser} from '../dev/views/create-and-edit-user.js';
import {store} from '../dev/store/store.js';
import {setState} from '../dev/store/actions.js';
import {STORE_ACTION_NAMES, FORM_ATTRIBUTES} from '../dev/constants';

// Mock Data for Edit
const mockUserData = {
  id: '1',
  name: 'John',
  lastName: 'Doe',
  dateOfEmployment: '2021-01-01',
  dateOfBirth: '1990-05-14',
  phoneNumber: '1234567890',
  email: 'john@example.com',
  department: 'HR',
  position: 'Manager',
};

store.dispatch(
  setState({
    type: STORE_ACTION_NAMES.SET_USER_LIST,
    value: [mockUserData],
  })
);
store.dispatch(
  setState({
    type: STORE_ACTION_NAMES.SET_LOCALE,
    value: 'en',
  })
);

suite('CreateAndEditUser Component Tests', () => {
  let element;

  test('should render the component', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );

    // Check if the element is rendered in the DOM
    expect(element).to.be.instanceOf(CreateAndEditUser);
  });

  test('should display the correct form for creating a new user', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );
    // Check if page name is "Create User"
    expect(element.shadowRoot.querySelector('h2').textContent.trim()).to.equal(
      '[pageHeader.createUser]'
    );
    const inputs = element.shadowRoot.querySelectorAll('custom-input');
    expect(inputs.length).to.equal(6); // Number of input fields for the form
  });
  test('should show error for empty name field', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );
    // Set empty value for name
    element.setInput(STORE_ACTION_NAMES.SET_FORM_NAME, {
      detail: {inputValue: ''},
    });

    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.NAME, '', false);

    // Check that an error message for name is displayed
    expect(element.formErrorObject.name).to.equal(
      'This field can not be empty'
    );
    // Set valid value
    element.setInput(STORE_ACTION_NAMES.SET_FORM_NAME, {
      detail: {inputValue: 'John'},
    });

    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.NAME, 'John', false);

    // Check that the error message is gone
    expect(element.formErrorObject.email).to.equal('');
  });
  test('should show error for empty last name field', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );
    // Set empty value for last name
    element.setInput(STORE_ACTION_NAMES.SET_FORM_LAST_NAME, {
      detail: {inputValue: ''},
    });
    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.LAST_NAME, '', false);

    // Check that an error message for last name is displayed
    expect(element.formErrorObject.lastName).to.equal(
      'This field can not be empty'
    );
    // Set valid value
    element.setInput(STORE_ACTION_NAMES.SET_FORM_LAST_NAME, {
      detail: {inputValue: 'Doe'},
    });

    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.LAST_NAME, 'Doe', false);

    // Check that the error message is gone
    expect(element.formErrorObject.email).to.equal('');
  });
  test('should show error for empty date of employment field', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );
    // Set empty value for date of employment
    element.setInput(STORE_ACTION_NAMES.SET_FORM_DATE_OF_EMPLOYMENT, {
      detail: {inputValue: ''},
    });

    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.DATE_OF_EMPLOYMENT, '', false);

    // Check that an error message for date of employment is displayed
    expect(element.formErrorObject.dateOfEmployment).to.equal(
      'This field can not be empty'
    );
    // Set valid value
    element.setInput(STORE_ACTION_NAMES.SET_FORM_DATE_OF_EMPLOYMENT, {
      detail: {inputValue: '1111-11-11'},
    });

    // Validate the form
    element.validateAttribute(
      FORM_ATTRIBUTES.DATE_OF_EMPLOYMENT,
      '1111-11-11',
      false
    );

    // Check that the error message is gone
    expect(element.formErrorObject.email).to.equal('');
  });
  test('should show error for empty date of birth field', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );
    // Set empty value for date of birth
    element.setInput(STORE_ACTION_NAMES.SET_FORM_DATE_OF_BIRTH, {
      detail: {inputValue: ''},
    });

    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.DATE_OF_BIRTH, '', false);

    // Check that an error message for date of birth is displayed
    expect(element.formErrorObject.dateOfBirth).to.equal(
      'This field can not be empty'
    );
    // Set valid value
    element.setInput(STORE_ACTION_NAMES.SET_FORM_DATE_OF_BIRTH, {
      detail: {inputValue: '2222-11-11'},
    });

    // Validate the form
    element.validateAttribute(
      FORM_ATTRIBUTES.DATE_OF_BIRTH,
      '2222-11-11',
      false
    );

    // Check that the error message is gone
    expect(element.formErrorObject.email).to.equal('');
  });
  test('should show error for empty phone number field', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );
    // Set empty value for phone number
    element.setInput(STORE_ACTION_NAMES.SET_FORM_PHONE_NUMBER, {
      detail: {inputValue: ''},
    });

    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.PHONE_NUMBER, '', false);

    // Check that an error message for phone number is displayed
    expect(element.formErrorObject.phoneNumber).to.equal(
      'This field can not be empty and should be in +(90)5555555555 format'
    );
    // Set valid value
    element.setInput(STORE_ACTION_NAMES.SET_FORM_PHONE_NUMBER, {
      detail: {inputValue: '+(90)5555555555'},
    });

    // Validate the form
    element.validateAttribute(
      FORM_ATTRIBUTES.PHONE_NUMBER,
      '+(90)5555555555',
      false
    );

    // Check that the error message is gone
    expect(element.formErrorObject.email).to.equal('');
  });
  test('should show error for empty email field', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );
    // Set empty value for email
    element.setInput(STORE_ACTION_NAMES.SET_FORM_EMAIL, {
      detail: {inputValue: ''},
    });

    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.EMAIL, '', false);

    // Check that an error message for email is displayed
    expect(element.formErrorObject.email).to.equal(
      'This field can not be empty and should be in example@example.com format'
    );

    // Set valid value
    element.setInput(STORE_ACTION_NAMES.SET_FORM_EMAIL, {
      detail: {inputValue: 'example@example.com'},
    });

    // Validate the form
    element.validateAttribute(
      FORM_ATTRIBUTES.EMAIL,
      'example@example.com',
      false
    );

    // Check that the error message is gone
    expect(element.formErrorObject.email).to.equal('');
  });
  test('should show error for empty department field', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );
    // Set empty value for department
    element.setInput(STORE_ACTION_NAMES.SET_FORM_DEPARTMENT, {
      detail: {inputValue: ''},
    });

    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.DEPARTMENT, '', false);

    // Check that an error message for department is displayed
    expect(element.formErrorObject.department).to.equal(
      'This field can not be empty'
    );
    // Set valid value
    element.setInput(STORE_ACTION_NAMES.SET_FORM_DEPARTMENT, {
      detail: {inputValue: 'Tech'},
    });

    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.DEPARTMENT, 'Tech', false);

    // Check that the error message is gone
    expect(element.formErrorObject.email).to.equal('');
  });
  test('should show error for empty position field', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );
    // Set empty value for position
    element.setInput(STORE_ACTION_NAMES.SET_FORM_POSITION, {
      detail: {inputValue: ''},
    });

    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.POSITION, '', false);

    // Check that an error message for position is displayed
    expect(element.formErrorObject.position).to.equal(
      'This field can not be empty'
    );
    // Set valid value
    element.setInput(STORE_ACTION_NAMES.SET_FORM_POSITION, {
      detail: {inputValue: 'Junior'},
    });

    // Validate the form
    element.validateAttribute(FORM_ATTRIBUTES.POSITION, 'Junior', false);

    // Check that the error message is gone
    expect(element.formErrorObject.email).to.equal('');
  });

  test('should reset form values after cancel', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );

    // Simulate cancel action
    element.resetFormValues();

    // Check if form values are reset
    expect(store.getState().userForm).to.deep.equal({
      name: '',
      lastName: '',
      dateOfEmployment: '',
      dateOfBirth: '',
      phoneNumber: '',
      email: '',
      department: '',
      position: '',
    });
  });
});
