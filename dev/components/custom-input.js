import {LitElement, html, css} from 'lit';
export class CustomInput extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
      }
      .form-group {
        position: relative;
        padding: 20px 0;
        min-width: 80%;
      }

      .form-field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid #ff6200;
        outline: 0;
        font-size: 16px;
        color: black;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
          color: transparent;
        }
      }

      .form-label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #ff6200;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 80%;
        text-align: start;
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
      .form-field:focus {
        ~ .form-label {
          position: absolute;
          top: 0;
          display: block;
          transition: 0.2s;
          font-size: 1rem;
          color: #ff6200;
          font-weight: 700;
        }
        padding-bottom: 6px;
        font-weight: 200;
        border-width: 3px;
        border-image-slice: 1;
      }
    `;
  }

  static get properties() {
    return {
      isSearchDisabled: {type: Boolean},
      placeHolder: {type: String},
      inputValue: {type: String},
      label: {type: String},
      type: {type: String},
      pattern: {type: String},
      error: {type: String},
    };
  }

  constructor() {
    super();
    this.inputValue = '';
    this.isSearchDisabled = false;
    this.type = 'text';
    this.error = '';
  }

  render() {
    return html`<div class="form-group">
      <input
        .type=${this.type}
        class="form-field"
        placeholder=${this.label}
        name=${this.label}
        id=${this.label}
        pattern=${this.pattern}
        .value=${this.inputValue}
        @input=${this.setInput}
        @blur=${this.validate}
      />
      <span class="form-error">${this.error}</span>
      <label for=${this.label} class="form-label">${this.label}</label>
    </div>`;
  }
  setInput(e) {
    this.inputValue = e.target.value;
    this.dispatchEvent(
      new CustomEvent('input-updated', {
        detail: {inputValue: this.inputValue},
      })
    );
  }
  validate(e) {
    this.dispatchEvent(
      new CustomEvent('validate', {
        detail: {inputValue: e.target.value},
      })
    );
  }
}

window.customElements.define('custom-input', CustomInput);
