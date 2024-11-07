import {LitElement, html, css} from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';

export class CustomButton extends LitElement {
  static get styles() {
    return css`
      .custom-button {
        background-color: transparent;
        border: none;
        color: black;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        height: auto;
        display: flex;
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
        ${ifDefined(this.name)}
        <img src=${this.imageSource} alt="Icon" class="icon" />
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
