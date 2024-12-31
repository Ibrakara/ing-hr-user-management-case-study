import {LitElement, html, css} from 'lit';
import {connect} from 'pwa-helpers';
import {store} from '../store/store.js';
import {
  DEPARTMENT_OPTION_LIST,
  POSITION_OPTION_LIST,
  STORE_ACTION_NAMES,
  FORM_ATTRIBUTES,
  FORM_ERROR,
  PHONE_REGEX,
  EMAIL_REGEX,
} from '../constants/index.js';
import {setState} from '../store/actions.js';
import {Router} from '@vaadin/router';
import router from '../router/index.js';
import {get, translate} from 'lit-translate';

export class CreateAndEditUser extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        width: 80vw;
        height: 90%;
        background-color: white;
        margin-top: 2rem;
        padding: 2rem 0;
        display: grid;
        justify-content: center;
        justify-items: center;
        grid-template-columns: 1fr;
      }
      .form-container {
        display: flex;
        justify-items: center;
        flex-direction: column;
        background-color: white;
        align-items: center;
        width: 80%;
      }
      h2 {
        color: #ff6200;
      }
      .form-button {
        margin-top: 2rem;
      }
      .form-dropdown {
        margin-top: 12px;
      }

      @media (max-width: 600px) {
        :host {
          margin-top: 8rem;
        }
      }
    `;
  }
  static state = {};

  static properties() {
    return {
      isComfirmModalVisible: {type: Boolean},
      formErrorObject: {type: Object},
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.resetFormValues();
    if (this.isEditPage) this.setFormValuesForEdit();
  }

  constructor() {
    super();
    this.formErrorObject = {
      name: '',
      lastName: '',
      dateOfEmployment: '',
      dateOfBirth: '',
      phoneNumber: '',
      email: '',
      department: '',
      position: '',
    };
    this.isComfirmModalVisible = false;
  }

  render() {
    return html`
      <h2>${this.pageName}</h2>
      <div class="form-container">
        <custom-input
          @input-updated=${(e) => {
            this.setInput(STORE_ACTION_NAMES.SET_FORM_NAME, e);
            this.validateAttribute(FORM_ATTRIBUTES.NAME, e.detail.inputValue);
          }}
          error=${this.formErrorObject.name}
          .required=${true}
          label=${translate('listingHeader.firstName')}
          inputValue=${this.getFormAttribute(FORM_ATTRIBUTES.NAME)}
        ></custom-input>
        <custom-input
          @input-updated=${(e) => {
            this.setInput(STORE_ACTION_NAMES.SET_FORM_LAST_NAME, e);
            this.validateAttribute(
              FORM_ATTRIBUTES.LAST_NAME,
              e.detail.inputValue
            );
          }}
          error=${this.formErrorObject.lastName}
          label=${translate('listingHeader.lastName')}
          inputValue=${this.getFormAttribute(FORM_ATTRIBUTES.LAST_NAME)}
        ></custom-input>
        <custom-input
          @input-updated=${(e) => {
            this.setInput(STORE_ACTION_NAMES.SET_FORM_DATE_OF_EMPLOYMENT, e);
            this.validateAttribute(
              FORM_ATTRIBUTES.DATE_OF_EMPLOYMENT,
              e.detail.inputValue
            );
          }}
          error=${this.formErrorObject.dateOfEmployment}
          type="date"
          label=${translate('listingHeader.dateOfEmployment')}
          inputValue=${this.getFormAttribute(
            FORM_ATTRIBUTES.DATE_OF_EMPLOYMENT
          )}
        ></custom-input>
        <custom-input
          @input-updated=${(e) => {
            this.setInput(STORE_ACTION_NAMES.SET_FORM_DATE_OF_BIRTH, e);
            this.validateAttribute(
              FORM_ATTRIBUTES.DATE_OF_BIRTH,
              e.detail.inputValue
            );
          }}
          error=${this.formErrorObject.dateOfBirth}
          type="date"
          label=${translate('listingHeader.dateOfBirth')}
          inputValue=${this.getFormAttribute(FORM_ATTRIBUTES.DATE_OF_BIRTH)}
        ></custom-input>
        <custom-input
          @input-updated=${(e) => {
            this.setInput(STORE_ACTION_NAMES.SET_FORM_PHONE_NUMBER, e);
            this.validateAttribute(
              FORM_ATTRIBUTES.PHONE_NUMBER,
              e.detail.inputValue
            );
          }}
          error=${this.formErrorObject.phoneNumber}
          type="tel"
          label=${translate('listingHeader.phoneNumber')}
          inputValue=${this.getFormAttribute(FORM_ATTRIBUTES.PHONE_NUMBER)}
        ></custom-input>
        <custom-input
          @input-updated=${(e) => {
            this.setInput(STORE_ACTION_NAMES.SET_FORM_EMAIL, e);
            this.validateAttribute(FORM_ATTRIBUTES.EMAIL, e.detail.inputValue);
          }}
          error=${this.formErrorObject.email}
          label=${translate('listingHeader.email')}
          inputValue=${this.getFormAttribute(FORM_ATTRIBUTES.EMAIL)}
        ></custom-input>
        <custom-dropdown
          @validate=${(e) => {
            this.validateAttribute(
              FORM_ATTRIBUTES.DEPARTMENT,
              e.detail.inputValue
            );
          }}
          @selection-updated=${(e) => {
            this.setInput(STORE_ACTION_NAMES.SET_FORM_DEPARTMENT, e);
          }}
          error=${this.formErrorObject.department}
          class="form-dropdown"
          placeHolder=${translate('listingHeader.department')}
          .optionList=${this.getDepartmentList}
          inputValue=${this.getFormAttribute(FORM_ATTRIBUTES.DEPARTMENT)}
        ></custom-dropdown>
        <custom-dropdown
          @validate=${(e) => {
            this.validateAttribute(
              FORM_ATTRIBUTES.POSITION,
              e.detail.inputValue
            );
          }}
          @selection-updated=${(e) => {
            this.setInput(STORE_ACTION_NAMES.SET_FORM_POSITION, e);
          }}
          error=${this.formErrorObject.position}
          class="form-dropdown"
          placeHolder=${translate('listingHeader.position')}
          .optionList=${this.getPositionList}
          inputValue=${this.getFormAttribute(FORM_ATTRIBUTES.POSITION)}
        ></custom-dropdown>
        <custom-button
          .hasBorder=${true}
          @click=${this.confirmForm}
          class="form-button"
          name=${this.pageName}
        ></custom-button>
      </div>
      <custom-modal
        title=${translate('createAndEditUserModal.title')}
        description=${translate('createAndEditUserModal.description')}
        .isVisible=${this.isComfirmModalVisible}
        cancelButtonName=${translate('button.cancel')}
        approveButtonName=${translate('button.approve')}
        @cancelled=${this.hideConfirmModal}
        @approved=${this.editUser}
      ></custom-modal>
    `;
  }
  setInput(actionType, event) {
    store.dispatch(
      setState({type: actionType, value: event.detail.inputValue})
    );
  }
  confirmForm() {
    const isFormValid = this.validateForm();
    if (!isFormValid) return;
    if (this.isEditPage) {
      this.isComfirmModalVisible = true;
    } else {
      this.createUser();
    }
  }
  editUser() {
    const userId = this.getEditedUserId;
    store.dispatch(
      setState({
        type: STORE_ACTION_NAMES.EDIT_USER,
        value: userId,
      })
    );
    Router.go('/');
  }
  createUser() {
    store.dispatch(
      setState({
        type: STORE_ACTION_NAMES.ADD_USER,
      })
    );
    Router.go('/');
  }
  validateForm() {
    const state = store.getState();
    for (const property in state.userForm) {
      this.validateAttribute(property, state.userForm[property], false);
    }
    const errorList = Object.values(this.formErrorObject);
    const isFormValid = errorList.every((entry) => entry === '');
    this.requestUpdate();
    return isFormValid;
  }
  validateAttribute(attribute, value, requestUpdate = true) {
    const isInputEmpty = value === '';
    const phoneRegex = new RegExp(PHONE_REGEX);
    const mailRegex = new RegExp(EMAIL_REGEX);
    const isInputInvalidPhoneNumber =
      value !== '' && attribute === 'phoneNumber' && !phoneRegex.test(value);
    const isInputInvalidEmail =
      value !== '' && attribute === 'email' && !mailRegex.test(value);
    const isInputInvaild =
      isInputEmpty || isInputInvalidPhoneNumber || isInputInvalidEmail;
    if (isInputInvaild) {
      this.formErrorObject[attribute] = get(`FORM_ERROR.${attribute}`);
    } else {
      this.formErrorObject[attribute] = '';
    }
    if (requestUpdate) this.requestUpdate();
    return !isInputInvaild;
  }
  get pageName() {
    return get(`pageHeader.${this.isEditPage ? 'editUser' : 'createUser'}`);
  }
  get isEditPage() {
    return router.location.pathname.includes('edit');
  }
  get getEditedUserId() {
    return router.location.params.userId;
  }
  get getDepartmentList() {
    return DEPARTMENT_OPTION_LIST.map((position) => {
      return {
        value: position.value,
        label: get(`department.${position.label.toLowerCase()}`),
      };
    });
  }
  get getPositionList() {
    return POSITION_OPTION_LIST.map((position) => {
      return {
        value: position.value,
        label: get(`position.${position.label.toLowerCase()}`),
      };
    });
  }
  getFormAttribute(attributeName) {
    return store.getState().userForm[attributeName];
  }
  hideConfirmModal() {
    this.isComfirmModalVisible = false;
    this.requestUpdate();
  }
  setFormValuesForEdit() {
    const userId = this.getEditedUserId;
    const user = store.getState().userList.find((user) => user.id === userId);
    store.dispatch(
      setState({type: STORE_ACTION_NAMES.SET_USER_FORM, value: user})
    );
  }
  resetFormValues() {
    store.dispatch(setState({type: STORE_ACTION_NAMES.RESET_USER_FORM}));
    this.requestUpdate();
  }
}

window.customElements.define('create-and-edit-user', CreateAndEditUser);
