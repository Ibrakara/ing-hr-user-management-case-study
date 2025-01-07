import {LitElement, html, css} from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';

export class CustomButton extends LitElement {
  static get styles() {
    return css`
      .custom-button {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        color: #ff6200;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        height: auto;
        display: flex;
        font-size: 1rem;
      }
      .custom-button > img {
        width: auto;
        height: 24px;
      }
      .has-border {
        border: 1px solid #ff6200;
        border-radius: 2px;
      }
    `;
  }

  static get properties() {
    return {
      icon: {type: String},
      name: {type: String},
      hasBorder: {type: Boolean},
    };
  }

  constructor() {
    super();
    this.hasBorder = false;
  }

  render() {
    return html`
      <button
        class=${this.hasBorder ? 'custom-button has-border' : 'custom-button'}
      >
        ${this.icon
          ? html`<img src=${this.imageSource} alt="Icon" class="icon" />`
          : ''}
        ${ifDefined(this.name)}
      </button>
    `;
  }
  get imageSource() {
    return `../dev/assets/${this.icon}.svg`;
  }
}

window.customElements.define('custom-button', CustomButton);
