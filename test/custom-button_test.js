import {CustomButton} from '../dev/components/custom-button';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('listing-users', () => {
  test('is defined', () => {
    const el = document.createElement('custom-button');
    assert.instanceOf(el, CustomButton);
  });
  test('renders with default values', async () => {
    const el = await fixture(html`<custom-button></custom-button>`);
    assert.shadowDom.equal(
      el,
      `
      <button
        class='custom-button'
      >
      </button>
    `
    );
  });

  test('renders with an icon and name and border', async () => {
    const el = await fixture(
      html`<custom-button
        .hasBorder=${true}
        icon="plus"
        name="Test name"
      ></custom-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button
        class='custom-button has-border'
      >
      <img src='../dev/assets/plus.svg' alt="Icon" class="icon" />
      Test name
      </button>
    `
    );
  });
});
