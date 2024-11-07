import {LitElement, html, css} from 'lit';
import {userList} from '../mock-data';
import {ICON} from '../constants';
export class ListingUsers extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 2rem;
      }
      .user-table-container {
        min-width: 95vw;
        border-spacing: 0;
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
    NUMBER_OF_PRODUCTS_PER_PAGE: {type: Number},
    currentUserList: {type: Array},
    currentPage: {type: Number},
  };

  constructor() {
    super();
    this.userList = userList;
    this.currentUserList = userList;
    this.currentPage = 1;
    this.NUMBER_OF_PRODUCTS_PER_PAGE = 10;
  }

  render() {
    return html`
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
        @page-selected=${this.setSelectedPage}
        count=${this.pageCount()}
      ></listing-pagination>
    `;
  }
  pageCount() {
    return this.currentUserList.length / this.NUMBER_OF_PRODUCTS_PER_PAGE;
  }
  setSelectedPage(e) {
    this.currentPage = e.detail.currentPage;
  }
  get employeeListPerPage() {
    return this.currentUserList
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
            <custom-button .icon=${ICON.DELETE}></custom-button>
          </td>
        </tr>`;
      })
      .filter((_, index) => {
        return (
          index < this.currentPage * 10 && index >= (this.currentPage - 1) * 10
        );
      });
  }
}
window.customElements.define('listing-users', ListingUsers);
