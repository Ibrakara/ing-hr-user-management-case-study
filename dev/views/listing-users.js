import {LitElement, html, css} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {ICON, NUMBER_OF_USERS_PER_PAGE, STORE_ACTION_NAMES} from '../constants';
import {stringContains} from '../helpers';
import {connect} from 'pwa-helpers';
import {store} from '../store/store.js';
import {setState} from '../store/actions.js';
import {Router} from '@vaadin/router';
import {translate} from 'lit-translate';

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
      .listingPageHeader {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        color: #ff6200;
        font-weight: 500;
      }
      .listingPageHeader > .listingType {
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.2rem;
      }
      .listingPageHeader > .listingType > custom-button {
        height: 2rem;
      }
      .listingPageHeader > h3 {
        font-weight: 500;
      }
      .userTableContainer {
        border-spacing: 0;
        width: 90%;
        box-shadow: 10px;
      }
      .userRow,
      .userRowGrid {
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
      .tableHeaderContainer {
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
        .tableHeaderContainer {
          display: none;
        }
        .tableContentContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          max-width: 1200px;
          background-color: white;
          padding: 2rem 0 2rem 0;
        }
        td {
          height: auto;
        }
        .userRow {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          width: 200px;
          height: 220px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .userRow h3 {
          margin-bottom: 10px;
          color: #333;
        }

        .userRow p {
          margin-bottom: 15px;
          color: #666;
        }
        .listingPageHeader > .listingType {
          display: none;
        }
      }
      .tableHeaderContainerGrid {
        display: none;
      }
      .tableContentContainerGrid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        background-color: white;
        padding: 2rem 0 2rem 0;
      }
      .userRowGrid > td {
        height: auto;
      }
      .userRowGrid {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        width: 200px;
        height: 220px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .userRowGrid h3 {
        margin-bottom: 10px;
        color: #333;
      }

      .userRowGrid p {
        margin-bottom: 15px;
        color: #666;
      }
    `;
  }
  static properties = {
    currentUserList: {type: Array},
    currentPage: {type: Number},
    isComfirmModalVisible: {type: Boolean},
    userIdForUserToBeDeleted: {type: String},
    tableHeaderContainerClasses: {},
    tableContentContainerClasses: {},
    userRowClasses: {},
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
    this.tableHeaderContainerClasses = {
      tableHeaderContainer: true,
      tableHeaderContainerGrid: false,
    };
    this.tableContentContainerClasses = {
      tableContentContainer: true,
      tableContentContainerGrid: false,
    };
    this.userRowClasses = {
      userRow: true,
      userRowGrid: false,
    };
  }

  render() {
    return html`
      <div class="listingPageHeader">
        <h3>${translate('pageHeader.listing')}</h3>
        <div class="listingType">
          <custom-button
            @click=${() => this.activateListingView()}
            .icon=${ICON.LISTING}
          ></custom-button>
          <custom-button
            .icon=${ICON.GRID}
            @click=${() => this.activateGridView()}
          ></custom-button>
        </div>
      </div>
      <table class="userTableContainer">
        <thead class=${classMap(this.tableHeaderContainerClasses)}>
          <tr>
            <th>${translate('listingHeader.firstName')}</th>
            <th>${translate('listingHeader.lastName')}</th>
            <th>${translate('listingHeader.dateOfEmployment')}</th>
            <th>${translate('listingHeader.dateOfBirth')}</th>
            <th>${translate('listingHeader.phoneNumber')}</th>
            <th>${translate('listingHeader.email')}</th>
            <th>${translate('listingHeader.department')}</th>
            <th>${translate('listingHeader.position')}</th>
            <th>${translate('listingHeader.actions')}</th>
          </tr>
        </thead>
        <tbody class=${classMap(this.tableContentContainerClasses)}>
          ${this.employeeListPerPage}
        </tbody>
      </table>
      <listing-pagination
        @page-changed=${this.setSelectedPage}
        count=${this.pageCount}
      ></listing-pagination>
      <custom-modal
        title=${translate('deleteUserModal.title')}
        description=${translate('deleteUserModal.description')}
        .isVisible=${this.isComfirmModalVisible}
        cancelButtonName=${translate('button.cancel')}
        approveButtonName=${translate('button.approve')}
        @cancelled=${this.hideConfirmModal}
        @approved=${() => this.deleteUser(this.userIdForUserToBeDeleted)}
      ></custom-modal>
    `;
  }
  hideConfirmModal() {
    this.isComfirmModalVisible = false;
    this.requestUpdate();
  }
  activateGridView() {
    this.tableHeaderContainerClasses = {
      tableHeaderContainer: false,
      tableHeaderContainerGrid: true,
    };
    this.tableContentContainerClasses = {
      tableContentContainer: false,
      tableContentContainerGrid: true,
    };
    this.userRowClasses = {
      userRow: false,
      userRowGrid: true,
    };
  }
  activateListingView() {
    this.tableHeaderContainerClasses = {
      tableHeaderContainer: true,
      tableHeaderContainerGrid: false,
    };
    this.tableContentContainerClasses = {
      tableContentContainer: true,
      tableContentContainerGrid: false,
    };
    this.userRowClasses = {
      userRow: true,
      userRowGrid: false,
    };
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
        return html` <tr class=${classMap(this.userRowClasses)}>
          <td>${item.name}</td>
          <td>${item.lastName}</td>
          <td>${item.dateOfEmployment}</td>
          <td>${item.dateOfBirth}</td>
          <td>${item.phoneNumber}</td>
          <td>${item.email}</td>
          <td>${translate(`department.${item.department.toLowerCase()}`)}</td>
          <td>${translate(`position.${item.position.toLowerCase()}`)}</td>
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
