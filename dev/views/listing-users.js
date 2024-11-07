import {LitElement, html, css} from 'lit';
import {userList} from '../mock-data';
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
        border-right: 1px solid #f1f1f2;
        border-bottom: 1px solid #f1f1f2;
        color: #1d1e32;
        min-width: 3rem;
        max-width: 15rem;
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

  constructor() {
    super();
    this.userList = userList;
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
          ${this.userList.map(
            (item) => html` <tr class="user-row">
              <td>${item.name}</td>
              <td>${item.lastName}</td>
              <td>${item.dateOfEmployment}</td>
              <td>${item.dateOfBirth}</td>
              <td>${item.phoneNumber}</td>
              <td>${item.email}</td>
              <td>${item.department}</td>
              <td>${item.position}</td>
              <td><custom-button name="Edit"></custom-button></td>
            </tr>`
          )}
        </tbody>
      </table>
    `;
  }
}
window.customElements.define('listing-users', ListingUsers);
