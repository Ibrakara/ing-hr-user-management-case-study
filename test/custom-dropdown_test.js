import {CustomDropdown} from '../dev/components/custom-dropdown';
import {fixture, assert, oneEvent, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('listing-users', () => {
  test('is defined', () => {
    const el = document.createElement('custom-dropdown');
    assert.instanceOf(el, CustomDropdown);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<custom-dropdown></custom-dropdown>`);
    assert.shadowDom.equal(
      el,
      `<div class="custom-select">
        <select>
            <option value="Please select...">Please select...</option>
        </select>
        <span class="form-error"></span>
       </div>`
    );
  });

  test('renders with props', async () => {
    const el = await fixture(
      html`<custom-dropdown
        placeHolder="Test placeholder"
        .optionList=${['option1', 'option2']}
        error="Test error"
      ></custom-dropdown>`
    );
    assert.shadowDom.equal(
      el,
      `
      <div class="custom-select">
      <select>
            <option value="Test placeholder">Test placeholder</option>
        <option
            value="option1"
          >
            option1
          </option>
        <option
            value="option2"
          >
            option2
          </option>
      </select>
      <span class="form-error">Test error</span>
    </div>
    `
    );
  });
  test('dispatch selection and validate event', async () => {
    const el = await fixture(
      html`<custom-dropdown
        .optionList=${['Option 1', 'Option 2']}
      ></custom-dropdown>`
    );

    // Select a value
    const select = el.shadowRoot.querySelector('select');
    select.value = 'Option 1';

    // Dispatch input event and listen for the custom event
    const selectionEventPromise = oneEvent(el, 'selection-updated');
    const validationEventPromise = oneEvent(el, 'selection-updated');
    select.dispatchEvent(new Event('input'));

    const selectionEvent = await selectionEventPromise;
    const validationEvent = await validationEventPromise;
    expect(selectionEvent.detail.inputValue).to.equal('Option 1');
    expect(validationEvent.detail.inputValue).to.equal('Option 1');
  });
});
