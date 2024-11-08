import {LitElement, html, css} from 'lit';
import {userList} from '../mock-data';
import {ICON, NUMBER_OF_USERS_PER_PAGE} from '../constants';
import {stringContains} from '../helpers';
export class ListingUsers extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        gap: 2rem;
      }
      .user-table-container {
        border-spacing: 0;
        width: 90%;
      }
      .user-row {
        font-size: 12px;
      }
      td {
        background-color: white;
        padding: 0 0.3rem 0 0.3rem;
        vertical-align: middle;
        height: 3rem;
        text-align: center;
        color: #1d1e32;
        min-width: 3rem;
        max-width: 15rem;
      }
      td:last-child {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .table-header-container {
        background-color: #ffffff;
        color: #ff6200;
      }
      th {
        background-color: white;
        font-size: 12px;
        font-weight: 500;
        padding: 0 0.3rem 0 0.3rem;
        vertical-align: middle;
        height: 3rem;
        text-align: center;
      }
    `;
  }
  static properties = {
    currentUserList: {type: Array},
    currentPage: {type: Number},
  };

  constructor() {
    super();
    this.completeUserList = userList;
    this.currentUserList = userList;
    this.currentPage = 1;
    this.searchValue = '';
  }

  render() {
    return html`
      <listing-header @input-updated=${this.setSearchValue}></listing-header>
      <table class="user-table-container">
        <thead class="table-header-container">
          <tr>
            <th class="table-header-title">First Name</th>
            <th class="table-header-title">Last Name</th>
            <th class="table-header-title">Date of Employment</th>
            <th class="table-header-title">Date of Birth</th>
            <th class="table-header-title">Phone</th>
            <th class="table-header-title">Email</th>
            <th class="table-header-title">Department</th>
            <th class="table-header-title">Position</th>
            <th class="table-header-title">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${this.employeeListPerPage}
        </tbody>
      </table>
      <listing-pagination
        @page-changed=${this.setSelectedPage}
        count=${this.pageCount}
      ></listing-pagination>
    `;
  }
  setSelectedPage(e) {
    this.currentPage = e.detail.currentPage;
  }
  setSearchValue(e) {
    this.searchValue = e.detail.searchValue;
    this.filterUserList();
  }
  deleteUser(userId) {
    this.completeUserList = [
      ...this.completeUserList.filter((user) => user.id !== userId),
    ];
    this.filterUserList();
  }
  filterUserList() {
    this.currentUserList = [
      ...this.completeUserList.filter((item) => {
        const hasNameContainSearchedValue = stringContains(
          item.name,
          this.searchValue
        );
        const lastNameContainSearchedValue = stringContains(
          item.lastName,
          this.searchValue
        );
        const dateOfEmploymentContainSearchedValue = stringContains(
          item.dateOfEmployment,
          this.searchValue
        );
        const dateOfBirthContainSearchedValue = stringContains(
          item.dateOfBirth,
          this.searchValue
        );
        const phoneNumberContainSearchedValue = stringContains(
          item.phoneNumber,
          this.searchValue
        );
        const emailContainSearchedValue = stringContains(
          item.email,
          this.searchValue
        );
        const departmentContainSearchedValue = stringContains(
          item.department,
          this.searchValue
        );
        const positionContainSearchedValue = stringContains(
          item.position,
          this.searchValue
        );
        const hasAnyValueContainsSearchValue =
          hasNameContainSearchedValue ||
          lastNameContainSearchedValue ||
          dateOfEmploymentContainSearchedValue ||
          dateOfBirthContainSearchedValue ||
          phoneNumberContainSearchedValue ||
          emailContainSearchedValue ||
          departmentContainSearchedValue ||
          positionContainSearchedValue;
        return hasAnyValueContainsSearchValue;
      }),
    ];
  }
  get pageCount() {
    return Math.ceil(this.currentUserList.length / NUMBER_OF_USERS_PER_PAGE);
  }
  get employeeListPerPage() {
    return this.currentUserList
      .filter((_, index) => {
        return (
          index < this.currentPage * 10 && index >= (this.currentPage - 1) * 10
        );
      })
      .map((item) => {
        return html` <tr class="user-row">
          <td>${item.name}</td>
          <td>${item.lastName}</td>
          <td>${item.dateOfEmployment}</td>
          <td>${item.dateOfBirth}</td>
          <td>${item.phoneNumber}</td>
          <td>${item.email}</td>
          <td>${item.department}</td>
          <td>${item.position}</td>
          <td>
            <custom-button .icon=${ICON.EDIT}></custom-button>
            <custom-button
              @click=${() => this.deleteUser(item.id)}
              .icon=${ICON.DELETE}
            ></custom-button>
          </td>
        </tr>`;
      });
  }
}
window.customElements.define('listing-users', ListingUsers);
