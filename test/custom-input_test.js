import {CustomInput} from '../dev/components/custom-input';
import {fixture, assert, oneEvent, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('custom-input', () => {
  test('is defined', () => {
    const el = document.createElement('custom-input');
    assert.instanceOf(el, CustomInput);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<custom-input></custom-input>`);
    assert.shadowDom.equal(
      el,
      `<div class="form-group">
         <input class="form-field" type="text" placeholder="" name="" id="" />
         <span class="form-error"></span>
         <label for="" class="form-label"></label>
       </div>`
    );
  });

  test('renders with provided props', async () => {
    const el = await fixture(
      html`<custom-input
        .type=${'email'}
        .label=${'Email Address'}
        .inputValue=${'test@example.com'}
        .error=${'Invalid email address'}
      ></custom-input>`
    );
    assert.shadowDom.equal(
      el,
      `<div class="form-group">
         <input class="form-field" type="email" placeholder="Email Address" name="Email Address" id="Email Address" />
         <span class="form-error">Invalid email address</span>
         <label for="Email Address" class="form-label">Email Address</label>
       </div>`
    );
  });

  test('dispatches "input-updated" event on input change', async () => {
    const el = await fixture(
      html`<custom-input .label=${'Name'}></custom-input>`
    );
    const input = el.shadowRoot.querySelector('.form-field');

    // Simulate user input
    input.value = 'John Doe';
    const inputEventPromise = oneEvent(el, 'input-updated');
    input.dispatchEvent(new Event('input'));

    const inputEvent = await inputEventPromise;
    expect(inputEvent.detail.inputValue).to.equal('John Doe');
  });

  test('dispatches "validate" event on blur', async () => {
    const el = await fixture(
      html`<custom-input .label=${'Name'}></custom-input>`
    );
    const input = el.shadowRoot.querySelector('.form-field');

    // Set the input value and dispatch blur event
    input.value = 'Jane Doe';
    const validationEventPromise = oneEvent(el, 'validate');
    input.dispatchEvent(new Event('blur'));

    const validationEvent = await validationEventPromise;
    expect(validationEvent.detail.inputValue).to.equal('Jane Doe');
  });
});
