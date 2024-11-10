import {ListingPagination} from '../dev/components/listing-pagination.js';
import {fixture, assert, oneEvent, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';
import '../dev/constants/index.js';

suite('listing-pagination', () => {
  test('is defined', () => {
    const el = document.createElement('listing-pagination');
    assert.instanceOf(el, ListingPagination);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<listing-pagination></listing-pagination>`);
    assert.shadowDom.equal(
      el,
      `
      `
    );
  });

  test('renders the correct number of pages based on count', async () => {
    const el = await fixture(
      html`<listing-pagination
        .count=${5}
        .currentPage=${1}
      ></listing-pagination>`
    );
    const pages = el.shadowRoot.querySelectorAll('p');
    expect(pages.length).to.equal(5);
    expect(pages[0].textContent.trim()).to.equal('1');
    expect(pages[1].textContent.trim()).to.equal('2');
    expect(pages[2].textContent.trim()).to.equal('3');
    expect(pages[3].textContent.trim()).to.equal('4');
    expect(pages[4].textContent.trim()).to.equal('5');
  });

  test('renders active class on current page', async () => {
    const el = await fixture(
      html`<listing-pagination
        .count=${5}
        .currentPage=${3}
      ></listing-pagination>`
    );
    const activePage = el.shadowRoot.querySelector('.active');
    expect(activePage.textContent.trim()).to.equal('3');
  });

  test('dispatches page-changed event when a page is clicked', async () => {
    const el = await fixture(
      html`<listing-pagination
        .count=${5}
        .currentPage=${1}
      ></listing-pagination>`
    );
    const pageEventPromise = oneEvent(el, 'page-changed');
    const pageButton = el.shadowRoot.querySelectorAll('p')[2]; // click on page 3
    pageButton.click();

    const pageEvent = await pageEventPromise;
    expect(pageEvent.detail.currentPage).to.equal(3);

    // Verify that the page 3 is now active
    const activePage = el.shadowRoot.querySelector('.active');
    expect(activePage.textContent.trim()).to.equal('3');
  });

  test('clicking the previous button triggers page-changed event with correct page', async () => {
    const el = await fixture(
      html`<listing-pagination
        .count=${5}
        .currentPage=${3}
      ></listing-pagination>`
    );
    const prevButton = el.shadowRoot.querySelectorAll('custom-button')[0]; // First custom-button is the previous button
    const pageEventPromise = oneEvent(el, 'page-changed');
    prevButton.click();

    const pageEvent = await pageEventPromise;
    expect(pageEvent.detail.currentPage).to.equal(2);

    // Verify that page 2 is now active
    const activePage = el.shadowRoot.querySelector('.active');
    expect(activePage.textContent.trim()).to.equal('2');
  });

  test('clicking the next button triggers page-changed event with correct page', async () => {
    const el = await fixture(
      html`<listing-pagination
        .count=${5}
        .currentPage=${3}
      ></listing-pagination>`
    );
    const nextButton = el.shadowRoot.querySelectorAll('custom-button')[1]; // Second custom-button is the next button
    const pageEventPromise = oneEvent(el, 'page-changed');
    nextButton.click();

    const pageEvent = await pageEventPromise;
    expect(pageEvent.detail.currentPage).to.equal(4);

    // Verify that page 4 is now active
    const activePage = el.shadowRoot.querySelector('.active');
    expect(activePage.textContent.trim()).to.equal('4');
  });

  test('clicking next button on last page should not go beyond count', async () => {
    const el = await fixture(
      html`<listing-pagination
        .count=${5}
        .currentPage=${5}
      ></listing-pagination>`
    );
    const nextButton = el.shadowRoot.querySelectorAll('custom-button')[1]; // Second custom-button is the next button
    const pageEventPromise = oneEvent(el, 'page-changed');
    nextButton.click();

    const pageEvent = await pageEventPromise;
    expect(pageEvent.detail.currentPage).to.equal(5);

    // Verify that page 5 is still active
    const activePage = el.shadowRoot.querySelector('.active');
    expect(activePage.textContent.trim()).to.equal('5');
  });

  test('clicking previous button on first page should not go below 1', async () => {
    const el = await fixture(
      html`<listing-pagination
        .count=${5}
        .currentPage=${1}
      ></listing-pagination>`
    );
    const prevButton = el.shadowRoot.querySelectorAll('custom-button')[0]; // First custom-button is the previous button
    const pageEventPromise = oneEvent(el, 'page-changed');
    prevButton.click();

    const pageEvent = await pageEventPromise;
    expect(pageEvent.detail.currentPage).to.equal(1);

    // Verify that page 1 is still active
    const activePage = el.shadowRoot.querySelector('.active');
    expect(activePage.textContent.trim()).to.equal('1');
  });
});
