import {LitElement, html, css} from 'lit';
export class CustomSearch extends LitElement {
  static get styles() {
    return css`
      .search-input-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        min-width: 30rem;
        max-width: 60%;
        height: 40px;
        margin-left: 1rem;
      }
      .search-box {
        width: 90%;
        height: 38px;
        border-radius: 4px;
        border: none;
        background-color: #fff;
        color: #1d1e32;
        font-size: 16px;
        font-weight: normal;
        padding-left: 20px;
      }
      .search-box:focus {
        outline: none;
        color: #1d1e32;
        font-size: 16px;
        font-weight: normal;
      }
    `;
  }

  static get properties() {
    return {
      searchInput: {type: String},
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
        placeholder="Search for a name, employment date etc. "
        class="search-box"
        @input=${this.setInput}
        :disabled=${this.isSearchDisabled}
      />
    </div>`;
  }
  setInput(e) {
    this.searchInput = e.target.value;
    this.dispatchEvent(
      new CustomEvent('input-updated', {
        detail: {searchInput: this.searchInput},
      })
    );
  }
}

window.customElements.define('custom-search', CustomSearch);
