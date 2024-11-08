import {LitElement, html, css} from 'lit';
import {Router} from '@vaadin/router';
import './views/listing-users';
import './views/create-user';

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
    #outlet {
      width: 80%;
    }
  `;
  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    console.log(router);
    router.setRoutes([
      {path: '/', component: 'listing-users'},
      {path: '/about', component: 'create-user'},
      {path: '(.*)', redirect: '/'},
    ]);
  }

  render() {
    return html`
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}

customElements.define('my-app', MyApp);
