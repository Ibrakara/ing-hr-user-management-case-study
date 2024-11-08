import {LitElement, html, css} from 'lit';

export class MyApp extends LitElement {
  static styles = css`
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      color: #1a2b42;
      text-align: center;
    }
  `;
  firstUpdated() {
    super.firstUpdated();
  }

  render() {
    return html`
      <main>
        <slot></slot>
      </main>
    `;
  }
}

customElements.define('my-app', MyApp);
