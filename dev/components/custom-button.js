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
    `;
  }

  static get properties() {
    return {
      icon: {type: String},
      name: {type: String},
    };
  }

  constructor() {
    super();
    this.name = null;
  }

  render() {
    return html`
      <button class="custom-button">
        ${this.icon
          ? html`<img src=${this.imageSource} alt="Icon" class="icon" />`
          : ''}
        ${ifDefined(this.name)}
      </button>
    `;
  }
  sayHello(name) {
    return `Hello, ${name}`;
  }
  get imageSource() {
    return `../dev/assets/${this.icon}.svg`;
  }
}

window.customElements.define('custom-button', CustomButton);
