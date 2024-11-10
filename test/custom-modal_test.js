import {CustomModal} from '../dev/components/custom-modal';
import {fixture, assert, oneEvent, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('custom-modal', () => {
  test('is defined', () => {
    const el = document.createElement('custom-modal');
    assert.instanceOf(el, CustomModal);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<custom-modal></custom-modal>`);
    assert.shadowDom.equal(
      el,
      `
      <div id="modal" class="modal">
        <div class="modal-content">
          <span id="closeModalBtn" class="close">&times;</span>
          <h2></h2>
          <p></p>
          <div class="modal-actions">
            <button id="cancelBtn" class="action-btn cancel">Cancel</button>
            <button id="approveBtn" class="action-btn approve">Approve</button>
          </div>
        </div>
      </div>
      `
    );
  });

  test('renders with provided props', async () => {
    const el = await fixture(
      html`<custom-modal
        .title=${'Confirmation'}
        .description=${'Are you sure you want to proceed?'}
        .isVisible=${true}
      ></custom-modal>`
    );

    assert.shadowDom.equal(
      el,
      `
      <div id="modal" class="modal active">
        <div class="modal-content">
          <span id="closeModalBtn" class="close">&times;</span>
          <h2>Confirmation</h2>
          <p>Are you sure you want to proceed?</p>
          <div class="modal-actions">
            <button id="cancelBtn" class="action-btn cancel">Cancel</button>
            <button id="approveBtn" class="action-btn approve">Approve</button>
          </div>
        </div>
      </div>
      `
    );
  });

  test('toggles visibility based on "isVisible" property', async () => {
    const el = await fixture(
      html`<custom-modal .isVisible=${false}></custom-modal>`
    );
    const modal = el.shadowRoot.querySelector('#modal');
    expect(modal.classList.contains('active')).to.be.false;

    el.isVisible = true;
    await el.updateComplete;
    expect(modal.classList.contains('active')).to.be.true;
  });

  test('dispatches "approved" event when approve button is clicked', async () => {
    const el = await fixture(
      html`<custom-modal .isVisible=${true}></custom-modal>`
    );
    const approveButton = el.shadowRoot.querySelector('#approveBtn');

    const approvedEventPromise = oneEvent(el, 'approved');
    approveButton.click();

    const approvedEvent = await approvedEventPromise;
    assert.isDefined(approvedEvent);
  });

  test('dispatches "cancelled" event when cancel button is clicked', async () => {
    const el = await fixture(
      html`<custom-modal .isVisible=${true}></custom-modal>`
    );
    const cancelButton = el.shadowRoot.querySelector('#cancelBtn');

    const cancelledEventPromise = oneEvent(el, 'cancelled');
    cancelButton.click();

    const cancelledEvent = await cancelledEventPromise;
    assert.isDefined(cancelledEvent);
  });

  test('dispatches "cancelled" event when close button is clicked', async () => {
    const el = await fixture(
      html`<custom-modal .isVisible=${true}></custom-modal>`
    );
    const closeButton = el.shadowRoot.querySelector('#closeModalBtn');

    const cancelledEventPromise = oneEvent(el, 'cancelled');
    closeButton.click();

    const cancelledEvent = await cancelledEventPromise;
    assert.isDefined(cancelledEvent);
  });
});
