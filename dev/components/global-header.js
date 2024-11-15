import {LitElement, html, css} from 'lit';
import {ICON} from '../constants';
import {Router} from '@vaadin/router';

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
          height: 8rem;
          gap: 0.3rem;
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
          gap: 0.3rem;
        }
        .global-header-right-side {
          flex-direction: column;
          justify-content: center;
          justify-items: center;
          align-items: center;
          align-content: center;
          background-color: white;
          height: 3rem;
          gap: 0.3rem;
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
    };
  }

  constructor() {
    super();
    this.showSearchInputComponent = true;
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
            name="Employees"
            .icon=${ICON.USER}
          ></custom-button>
          <custom-button
            name="Add New"
            .icon=${ICON.PLUS}
            @click=${() => Router.go('/create')}
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
}

window.customElements.define('global-header', GlobalHeader);
