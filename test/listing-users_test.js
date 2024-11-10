import {html} from 'lit';
import {fixture, expect} from '@open-wc/testing';
import {ListingUsers} from '../dev/views/listing-users.js';
import {store} from '../dev/store/store.js';
import {setState} from '../dev/store/actions.js';
import {STORE_ACTION_NAMES} from '../dev/constants';

// Mock Data
const mockUserList = [
  {
    id: '1',
    name: 'John',
    lastName: 'Doe',
    dateOfEmployment: '2021-01-01',
    dateOfBirth: '1990-05-14',
    phoneNumber: '1234567890',
    email: 'john@example.com',
    department: 'HR',
    position: 'Manager',
  },
  {
    id: '2',
    name: 'Jane',
    lastName: 'Smith',
    dateOfEmployment: '2022-02-01',
    dateOfBirth: '1985-03-23',
    phoneNumber: '0987654321',
    email: 'jane@example.com',
    department: 'Engineering',
    position: 'Developer',
  },
];

store.dispatch(
  setState({
    type: STORE_ACTION_NAMES.SET_USER_LIST,
    value: mockUserList,
  })
);

suite('ListingUsers Component Tests', () => {
  let element;

  test('should render the component', async () => {
    element = await fixture(html`<listing-users></listing-users>`);

    // Check if the element is rendered in the DOM
    expect(element).to.be.instanceOf(ListingUsers);
  });

  test('should display the correct number of users in the table', async () => {
    element = await fixture(html`<listing-users></listing-users>`);

    const rows = element.shadowRoot.querySelectorAll('.user-row');
    expect(rows.length).to.equal(mockUserList.length);
  });

  test('should show pagination correctly', async () => {
    element = await fixture(html`<listing-users></listing-users>`);

    // Check if pagination component exists
    const pagination = element.shadowRoot.querySelector('listing-pagination');
    expect(pagination).to.not.be.null;

    // Check if the page count is correct
    expect(element.pageCount).to.equal(Math.ceil(mockUserList.length / 10));
  });

  test('should open confirm modal on delete click', async () => {
    element = await fixture(html`<listing-users></listing-users>`);

    const deleteButton =
      element.shadowRoot.querySelectorAll('custom-button')[1]; // Assuming the second button is the delete button
    deleteButton.click();

    // Check if modal becomes visible after delete button click
    expect(element.isComfirmModalVisible).to.be.true;
  });

  test('should update state on page change', async () => {
    element = await fixture(html`<listing-users></listing-users>`);

    // Simulate page change event
    const paginationComponent =
      element.shadowRoot.querySelector('listing-pagination');
    paginationComponent.dispatchEvent(
      new CustomEvent('page-changed', {detail: {currentPage: 2}})
    );

    // Check if the page count is updated
    expect(element.currentPage).to.equal(2);
  });

  test('should render user row correctly', async () => {
    element = await fixture(html`<listing-users></listing-users>`);

    const rows = element.shadowRoot.querySelectorAll('.user-row');
    const firstUser = mockUserList[0];

    expect(rows[0].innerHTML).to.contain(firstUser.name);
    expect(rows[0].innerHTML).to.contain(firstUser.lastName);
    expect(rows[0].innerHTML).to.contain(firstUser.dateOfEmployment);
    expect(rows[0].innerHTML).to.contain(firstUser.phoneNumber);
    expect(rows[0].innerHTML).to.contain(firstUser.email);
    expect(rows[0].innerHTML).to.contain(firstUser.department);
    expect(rows[0].innerHTML).to.contain(firstUser.position);
  });

  test('should display correct user details in table rows', async () => {
    element = await fixture(html`<listing-users></listing-users>`);

    const rows = element.shadowRoot.querySelectorAll('tr');
    const firstRow = rows[1]; // Skip header row

    // Ensure the correct data is rendered in the row
    expect(firstRow.innerHTML).to.include(mockUserList[0].name);
    expect(firstRow.innerHTML).to.include(mockUserList[0].lastName);
    expect(firstRow.innerHTML).to.include(mockUserList[0].phoneNumber);
  });
});
