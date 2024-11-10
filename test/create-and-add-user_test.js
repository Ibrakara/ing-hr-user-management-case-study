import {html} from 'lit';
import {fixture, expect} from '@open-wc/testing';
import {CreateAndEditUser} from '../dev/views/create-and-edit-user.js';
import {store} from '../dev/store/store.js';
import {setState} from '../dev/store/actions.js';
import {STORE_ACTION_NAMES} from '../dev/constants';

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
    expect(element.pageName).to.equal('Create User');
    const inputs = element.shadowRoot.querySelectorAll('custom-input');
    expect(inputs.length).to.equal(6); // Number of input fields for the form
  });

  test('should show validation errors for invalid form input', async () => {
    element = await fixture(
      html`<create-and-edit-user></create-and-edit-user>`
    );

    const inputName = element.shadowRoot.querySelector(
      'custom-input[label="Name"]'
    );
    inputName.value = '';
    inputName.dispatchEvent(new Event('input'));

    const inputEmail = element.shadowRoot.querySelector(
      'custom-input[label="Email"]'
    );
    inputEmail.value = 'invalid-email';
    inputEmail.dispatchEvent(new Event('input'));

    // Validate form
    const isValid = await element.validateForm();
    expect(isValid).to.be.false;

    // Check for error messages
    const errorMessages = Object.values(element.formErrorObject);
    expect(errorMessages).to.include('This field can not be empty');
    expect(errorMessages).to.include(
      'This field can not be empty and should be in example@example.com format'
    );
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
