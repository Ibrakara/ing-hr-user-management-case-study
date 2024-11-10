import {CustomSearch} from '../dev/components/custom-search';
import {fixture, assert, oneEvent, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('custom-search', () => {
  test('is defined', () => {
    const el = document.createElement('custom-search');
    assert.instanceOf(el, CustomSearch);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<custom-search></custom-search>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="search-input-container">
        <input
          type="text"
          placeholder="Search for a user..."
          class="search-box"
        />
      </div>
      `
    );
  });

  test('renders with isSearchDisabled property', async () => {
    const el = await fixture(
      html`<custom-search .isSearchDisabled=${true}></custom-search>`
    );
    const input = el.shadowRoot.querySelector('.search-box');
    expect(input.disabled).to.be.true;
  });

  test('dispatches "search-updated" event on input', async () => {
    const el = await fixture(html`<custom-search></custom-search>`);
    const input = el.shadowRoot.querySelector('.search-box');

    // Listen for the custom event
    const searchUpdatedEventPromise = oneEvent(el, 'search-updated');
    input.value = 'New search text';
    input.dispatchEvent(new Event('input'));

    const searchUpdatedEvent = await searchUpdatedEventPromise;
    expect(searchUpdatedEvent.detail.searchInput).to.equal('New search text');
  });

  test('updates searchInput property on input', async () => {
    const el = await fixture(html`<custom-search></custom-search>`);
    const input = el.shadowRoot.querySelector('.search-box');

    input.value = 'Another search';
    input.dispatchEvent(new Event('input'));
    expect(el.searchInput).to.equal('Another search');
  });

  test('input should have disabled attribute when isSearchDisabled is true', async () => {
    const el = await fixture(
      html`<custom-search .isSearchDisabled=${true}></custom-search>`
    );
    const input = el.shadowRoot.querySelector('.search-box');
    expect(input.hasAttribute('disabled')).to.be.true;
  });

  test('should retain input value when isSearchDisabled is toggled', async () => {
    const el = await fixture(html`<custom-search></custom-search>`);
    const input = el.shadowRoot.querySelector('.search-box');

    // Set input value and disable the search box
    input.value = 'Persistent input';
    input.dispatchEvent(new Event('input'));
    el.isSearchDisabled = true;
    await el.updateComplete;

    // Re-enable search box and check if input value persists
    el.isSearchDisabled = false;
    await el.updateComplete;
    expect(el.searchInput).to.equal('Persistent input');
  });
});
