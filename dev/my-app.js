import {LitElement, html, css} from 'lit';
import {connect} from 'pwa-helpers';
import {store} from './store/store.js';
import {setSearchValue} from './store/actions.js';
export class MyApp extends connect(store)(LitElement) {
  static styles = css`
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      color: #1a2b42;
      text-align: center;
      margin-top: 2rem;
    }
  `;
  firstUpdated() {
    super.firstUpdated();
  }
  setSearchValue(e) {
    store.dispatch(setSearchValue(e.detail.searchValue));
  }

  render() {
    return html`
      <main>
        <global-header @search-updated=${this.setSearchValue}></global-header>
        <slot></slot>
      </main>
    `;
  }
}

customElements.define('my-app', MyApp);
