import {LitElement, html, css} from 'lit';
import {ICON} from '../constants';

export class ListingPagination extends LitElement {
  static get styles() {
    return css`
      div {
        display: flex;
        margin: 20px 0 20px 0;
        justify-content: center;
        align-items: center;
        justify-items: center;
      }
      p {
        list-style: none;
        text-align: center;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 0.2rem 0 0;
        border-radius: 1.5rem;
        background-color: transparent;
        cursor: pointer;
        font-size: 12px;
        font-weight: 400;
        color: #555665;
        user-select: none;
      }
      .active {
        background-color: #ff6200;
        color: #fff;
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      count: {type: Number},
      currentPage: {type: Number},
    };
  }

  constructor() {
    super();
    this.count = 0;
    this.currentPage = 1;
  }
  updated() {
    if (this.currentPage > this.count) {
      this.setCurrentPageNumber(this.count);
    } else if (this.currentPage === 0 && this.count > 0) {
      this.setCurrentPageNumber(1);
    }
  }

  render() {
    if (this.count === 0) return;
    return html`
      <div>
        <custom-button
          @click=${() => this.setCurrentPageNumber(this.currentPage - 1 || 1)}
          .icon=${ICON.LEFT_ARROW}
        ></custom-button>
        ${this._pageList(this.count).map((page, index) => {
          return html`<p
            @click=${() => this.setCurrentPageNumber(index + 1)}
            class="${this.currentPage === index + 1 ? 'active' : ''}"
          >
            ${page}
          </p>`;
        })}
        <custom-button
          @click=${() =>
            this.setCurrentPageNumber(
              this.currentPage + 1 > this.count
                ? this.count
                : this.currentPage + 1
            )}
          .icon=${ICON.RIGHT_ARROW}
        ></custom-button>
      </div>
    `;
  }
  _pageList(count) {
    const pageArray = Array.from({length: count}, (_, i) => i + 1);
    return pageArray;
  }
  setCurrentPageNumber(currentPage) {
    this.dispatchEvent(
      new CustomEvent('page-changed', {detail: {currentPage}})
    );
    this.currentPage = currentPage;
  }
}

window.customElements.define('listing-pagination', ListingPagination);
