import {LitElement, html, css} from 'lit';
import {translate} from 'lit-translate';

export class CustomSearch extends LitElement {
  static get styles() {
    return css`
      .search-input-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 2rem;
      }
      .search-box {
        min-width: 250px;
        height: 100%;
        border: none;
        background-color: #ffe9df;
        color: #1d1e32;
        font-size: 16px;
        font-weight: normal;
        border-radius: 4px;
      }
      .search-box:focus {
        outline: none;
        color: #1d1e32;
        font-size: 16px;
        font-weight: normal;
      }
    `;
  }
  static state = {
    searchInput: {type: String},
  };

  static get properties() {
    return {
      isSearchDisabled: {type: Boolean},
    };
  }

  constructor() {
    super();
    this.searchInput = '';
    this.isSearchDisabled = false;
  }

  render() {
    return html` <div class="search-input-container">
      <input
        type="text"
        .value=${this.searchInput}
        placeholder=${translate('searchPlaceholder')}
        class="search-box"
        @input=${this.setInput}
        .disabled=${this.isSearchDisabled}
      />
    </div>`;
  }
  setInput(e) {
    this.searchInput = e.target.value;
    this.dispatchEvent(
      new CustomEvent('search-updated', {
        detail: {searchInput: this.searchInput},
      })
    );
  }
}

window.customElements.define('custom-search', CustomSearch);
