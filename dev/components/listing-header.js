import {LitElement, html, css} from 'lit';
export class ListingHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-content: space-between;
        background-color: white;
        height: 2.5rem;
      }
    `;
  }

  static get properties() {
    return {
      searchInput: {type: String},
      count: {type: Number},
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <img src="../dev/assets/ING-bank-logo.svg" alt="Icon" class="icon" />
      <custom-search @input-updated=${this.updateSearch}></custom-search>
    `;
  }
  updateSearch(e) {
    this.dispatchEvent(
      new CustomEvent('input-updated', {
        detail: {searchValue: e.detail.searchInput},
      })
    );
  }
}

window.customElements.define('listing-header', ListingHeader);
