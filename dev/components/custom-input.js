import {LitElement, html, css} from 'lit';
export class CustomInput extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
      }
      .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        min-width: 80%;
      }

      .form__field {
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

      .form__label {
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

      .form__field:focus {
        ~ .form__label {
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
      /* reset input */
      .form__field {
        &:required,
        &:invalid {
          /* box-shadow: none; */
        }
      }
    `;
  }

  static get properties() {
    return {
      isSearchDisabled: {type: Boolean},
      placeHolder: {type: String},
      inputValue: {type: String},
      label: {type: String},
    };
  }

  constructor() {
    super();
    this.inputValue = '';
    this.isSearchDisabled = false;
  }

  render() {
    return html`<div class="form__group">
      <input
        type="text"
        class="form__field"
        placeholder=${this.label}
        name=${this.label}
        id="name"
        required
        .value=${this.inputValue}
        @input=${this.setInput}
      />
      <label for="name" class="form__label">${this.label}</label>
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
}

window.customElements.define('custom-input', CustomInput);
