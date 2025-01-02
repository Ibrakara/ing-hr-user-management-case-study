import {GlobalHeader} from '../dev/components/global-header.js';
import {fixture, assert, oneEvent, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';
import {Router} from '@vaadin/router';
import sinon from 'sinon';

suite('global-header', () => {
  test('is defined', () => {
    const el = document.createElement('global-header');
    assert.instanceOf(el, GlobalHeader);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<global-header></global-header>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="header-container">
        <div class="global-header-left-side">
          <img src="../dev/assets/ING-bank-logo.svg" alt="Icon" class="icon">
          <custom-search></custom-search>
        </div>
        <div class="global-header-right-side">
          <custom-button name="[button.headerEmployees]"></custom-button>
          <custom-button name="[button.headerAddNew]"></custom-button>
          <custom-button></custom-button>
        </div>
      </div>
      `
    );
  });

  test('dispatches search-updated event from custom-search', async () => {
    const el = await fixture(html`<global-header></global-header>`);
    const searchInputEvent = new CustomEvent('search-updated', {
      detail: {searchInput: 'test'},
    });

    setTimeout(() =>
      el.shadowRoot
        .querySelector('custom-search')
        .dispatchEvent(searchInputEvent)
    );

    const event = await oneEvent(el, 'search-updated');
    expect(event.detail.searchValue).to.equal('test');
  });

  test('clicking the logo triggers navigation', async () => {
    const el = await fixture(html`<global-header></global-header>`);
    // Stub the Router.go method
    const routerStub = sinon.stub(Router, 'go');
    const img = el.shadowRoot.querySelector('img.icon');

    img.click();

    expect(routerStub).to.have.been.calledOnceWith('/');
    routerStub.restore();
  });

  test('clicking Employees button triggers navigation', async () => {
    const el = await fixture(html`<global-header></global-header>`);
    const employeesButton = el.shadowRoot.querySelectorAll('custom-button')[0];

    // Stub the Router.go method
    const routerStub = sinon.stub(Router, 'go');
    employeesButton.click();

    expect(routerStub).to.have.been.calledOnceWith('/');
    routerStub.restore();
  });

  test('clicking Add New button triggers navigation', async () => {
    const el = await fixture(html`<global-header></global-header>`);
    const addButton = el.shadowRoot.querySelectorAll('custom-button')[1];

    // Stub the Router.go method
    const routerStub = sinon.stub(Router, 'go');
    addButton.click();

    expect(routerStub).to.have.been.calledOnceWith('/create');
    routerStub.restore();
  });
});
