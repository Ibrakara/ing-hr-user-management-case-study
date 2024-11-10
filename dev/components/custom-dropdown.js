import {LitElement, html, css} from 'lit';
export class CustomDropdown extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
      }
      .custom-select {
        position: relative;
        padding-bottom: 20px;
      }
      .custom-select select {
        appearance: none;
        width: 100%;
        font-size: 1.15rem;
        padding: 0.675em 3rem 0.675em 1rem;
        background-color: #fff;
        border: 2px solid #ff6200;
        border-radius: 0.25rem;
        color: #ff6200;
        cursor: pointer;
      }
      .custom-select select:focus-visible {
        outline-color: #ff6200;
      }
      .custom-select::before,
      .custom-select::after {
        --size: 0.3rem;
        content: '';
        position: absolute;
        right: 1rem;
        pointer-events: none;
      }

      .custom-select::before {
        border-left: var(--size) solid transparent;
        border-right: var(--size) solid transparent;
        border-bottom: var(--size) solid black;
        top: 25%;
      }

      .custom-select::after {
        border-left: var(--size) solid transparent;
        border-right: var(--size) solid transparent;
        border-top: var(--size) solid black;
        top: 40%;
      }
      .form-error {
        position: absolute;
        top: 50px;
        display: block;
        transition: 0.2s;
        font-size: 0.8rem;
        color: #b80000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 80%;
        text-align: start;
        font-weight: 600;
      }
    `;
  }

  static get properties() {
    return {
      placeHolder: {type: String},
      optionList: {type: Array},
      error: {type: String},
      inputValue: {type: String},
    };
  }

  constructor() {
    super();
    this.optionList = [];
    this.error = '';
    this.placeHolder = 'Please select...';
    this.inputValue = '';
  }

  render() {
    return html`<div class="custom-select">
      <select
        @input=${(e) => {
          this.setInput(e);
          this.validate(e);
        }}
      >
        <option value=${this.placeHolder}>${this.placeHolder}</option>
        ${this.optionList.map((option) => {
          return html`<option
            .selected=${this.inputValue === option}
            value=${option}
          >
            ${option}
          </option>`;
        })}
      </select>
      <span class="form-error">${this.error}</span>
    </div>`;
  }
  setInput(e) {
    this.dispatchEvent(
      new CustomEvent('selection-updated', {
        detail: {inputValue: e.target.value},
      })
    );
  }
  validate(e) {
    this.dispatchEvent(
      new CustomEvent('validate', {
        detail: {
          inputValue: e.target.value === this.placeHolder ? '' : e.target.value,
        },
      })
    );
  }
}

window.customElements.define('custom-dropdown', CustomDropdown);
