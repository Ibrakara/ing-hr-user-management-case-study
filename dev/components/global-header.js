import {LitElement, html, css} from 'lit';
import {ICON} from '../constants';
import {Router} from '@vaadin/router';
import {translate} from 'lit-translate';
import {store} from '../store/store.js';
import {STORE_ACTION_NAMES} from '../constants/index.js';
import {setState} from '../store/actions.js';

export class GlobalHeader extends LitElement {
  static get styles() {
    return css`
      .header-container {
        display: flex;
        flex-direction: row;
        width: 90vw;
        align-content: space-between;
        background-color: white;
        height: 3rem;
        align-items: center;
      }
      .global-header-left-side {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-content: space-between;
        background-color: white;
        height: 2rem;
        align-items: center;
      }
      .global-header-left-side > img {
        height: 2rem;
        width: 2rem;
        margin-right: 1rem;
      }
      .global-header-right-side {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: flex-end;
        align-content: space-between;
        align-items: center;
        background-color: white;
        height: 2rem;
      }
      .icon {
        cursor: pointer;
      }
      @media (max-width: 600px) {
        .header-container {
          flex-direction: column;
          padding: 1rem 0;
          height: 10rem;
          gap: 1rem;
          justify-content: space-between;
        }
        .global-header-left-side {
          flex-direction: column;
          justify-content: center;
          justify-items: center;
          align-items: center;
          align-content: center;
          background-color: white;
          height: 5rem;
          gap: 1rem;
        }
        .global-header-right-side {
          flex-direction: column;
          justify-content: center;
          justify-items: center;
          align-items: center;
          align-content: center;
          background-color: white;
          height: 5rem;
          gap: 1rem;
        }
        .global-header-left-side > img {
          height: 32px;
          width: 32px;
          margin-right: 0rem;
        }
      }
    `;
  }

  static get properties() {
    return {
      searchInput: {type: String},
      count: {type: Number},
      showSearchInputComponent: {type: Boolean},
      flag: {type: String},
    };
  }

  constructor() {
    super();
    this.showSearchInputComponent = true;
    this.flag =
      store.getState().locale === 'tr' ? ICON.UK_FLAG : ICON.TURKISH_FLAG;
  }

  render() {
    return html`
      <div class="header-container">
        <div class="global-header-left-side">
          <img
            src="../dev/assets/ING-bank-logo.svg"
            alt="Icon"
            class="icon"
            @click=${() => Router.go('/')}
          />
          ${this.showSearchInputComponent
            ? html`<custom-search
                @search-updated=${this.updateSearch}
              ></custom-search>`
            : ''}
        </div>
        <div class="global-header-right-side">
          <custom-button
            @click=${() => Router.go('/')}
            name=${translate('button.headerEmployees')}
            .icon=${ICON.USER}
          ></custom-button>
          <custom-button
            .icon=${ICON.PLUS}
            @click=${() => Router.go('/create')}
            name=${translate('button.headerAddNew')}
          ></custom-button>
          <custom-button
            .icon=${this.flag}
            @click=${() => this.changeLocale()}
          ></custom-button>
        </div>
      </div>
    `;
  }
  updateSearch(e) {
    this.dispatchEvent(
      new CustomEvent('search-updated', {
        detail: {searchValue: e.detail.searchInput},
      })
    );
  }
  changeLocale() {
    store.dispatch(
      setState({
        type: STORE_ACTION_NAMES.SET_LOCALE,
        value: store.getState().locale === 'tr' ? 'en' : 'tr',
      })
    );
    this.flag =
      store.getState().locale === 'tr' ? ICON.UK_FLAG : ICON.TURKISH_FLAG;
  }
}

window.customElements.define('global-header', GlobalHeader);
