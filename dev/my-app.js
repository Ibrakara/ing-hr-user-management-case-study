import {LitElement, html, css} from 'lit';
import {connect} from 'pwa-helpers';
import {store} from './store/store.js';
import {setState} from './store/actions.js';
import {STORE_ACTION_NAMES} from './constants/index.js';
import router from '../dev/router';
import {registerTranslateConfig, use} from 'lit-translate';

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
  static get properties() {
    return {
      isListingPage: {type: Boolean},
    };
  }
  constructor() {
    super();
    this.setLocale();
    this.isListingPage = true;
  }

  render() {
    return html`
      <main>
        <global-header
          .showSearchInputComponent=${this.isListingPage}
          @search-updated=${(e) => this.setSearchValue(e.detail.searchValue)}
        ></global-header>
        <slot @slotchange=${() => this.setSearchBarVisibility()}></slot>
      </main>
    `;
  }
  setSearchValue(value) {
    store.dispatch(
      setState({
        type: STORE_ACTION_NAMES.SET_SEARCH_VALUE,
        value: value,
      })
    );
  }
  async setLocale() {
    registerTranslateConfig({
      loader: async (lang) => {
        if (lang === 'en' || lang === 'tr') {
          return await fetch(`dev/i18n/${lang}.json`).then((res) => res.json());
        } else {
          return await fetch(`dev/i18n/en.json`).then((res) => res.json());
        }
      },
    });
    store.dispatch(
      setState({
        type: STORE_ACTION_NAMES.SET_LOCALE,
        value: navigator.language,
      })
    );
  }
  setSearchBarVisibility() {
    this.isListingPage = router.location.route.path === '/';
  }
}

customElements.define('my-app', MyApp);
