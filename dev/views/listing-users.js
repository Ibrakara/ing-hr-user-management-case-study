import {LitElement, html, css} from 'lit';
import {ICON, NUMBER_OF_USERS_PER_PAGE, STORE_ACTION_NAMES} from '../constants';
import {stringContains} from '../helpers';
import {connect} from 'pwa-helpers';
import {store} from '../store/store.js';
import {setState} from '../store/actions.js';
import {Router} from '@vaadin/router';

export class ListingUsers extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        gap: 2rem;
        width: 100%;
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
      @media (max-width: 730px) {
        :host {
          padding: 0.2rem;
        }
        .table-header-container {
          display: none;
        }
        .table-content-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          max-width: 1200px;
          background-color: white;
          padding-top: 2rem;
          margin-top: 2rem;
        }
        td {
          height: auto;
        }
        .user-row {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          width: 200px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .user-row h3 {
          margin-bottom: 10px;
          color: #333;
        }

        .user-row p {
          margin-bottom: 15px;
          color: #666;
        }
      }
    `;
  }
  static properties = {
    currentUserList: {type: Array},
    currentPage: {type: Number},
    isComfirmModalVisible: {type: Boolean},
    userIdForUserToBeDeleted: {type: String},
  };
  stateChanged(state) {
    this.completeUserList = state.userList;
    if (this.searchValue !== state.searchValue) {
      this.searchValue = state.searchValue;
      this.filterUserList();
    }
  }
  disconnectedCallback() {
    store.dispatch(
      setState({
        type: STORE_ACTION_NAMES.SET_SEARCH_VALUE,
        value: '',
      })
    );
  }

  constructor() {
    super();
    this.currentUserList = store.getState().userList;
    this.currentPage = 1;
    this.searchValue = '';
    this.completeUserList = [];
    this.isComfirmModalVisible = false;
    this.userIdForUserToBeDeleted = '';
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
        <tbody class="table-content-container">
          ${this.employeeListPerPage}
        </tbody>
      </table>
      <listing-pagination
        @page-changed=${this.setSelectedPage}
        count=${this.pageCount}
      ></listing-pagination>
      <custom-modal
        title="Delete user?"
        description="You are about to delete a user, are you sure?"
        .isVisible=${this.isComfirmModalVisible}
        @cancelled=${this.hideConfirmModal}
        @approved=${() => this.deleteUser(this.userIdForUserToBeDeleted)}
      ></custom-modal>
    `;
  }
  hideConfirmModal() {
    this.isComfirmModalVisible = false;
    this.requestUpdate();
  }
  showConfimModal(id) {
    this.isComfirmModalVisible = true;
    this.userIdForUserToBeDeleted = id;
  }
  setSelectedPage(e) {
    this.currentPage = e.detail.currentPage;
  }
  goEditPage(id) {
    Router.go(`/edit/${id}`);
  }

  deleteUser(id) {
    store.dispatch(
      setState({
        type: STORE_ACTION_NAMES.SET_USER_LIST,
        value: [...this.completeUserList.filter((user) => user.id !== id)],
      })
    );
    this.filterUserList();
    this.hideConfirmModal();
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
            <custom-button
              @click=${() => this.goEditPage(item.id)}
              .icon=${ICON.EDIT}
            ></custom-button>
            <custom-button
              @click=${() => this.showConfimModal(item.id)}
              .icon=${ICON.DELETE}
            ></custom-button>
          </td>
        </tr>`;
      });
  }
}
window.customElements.define('listing-users', ListingUsers);
