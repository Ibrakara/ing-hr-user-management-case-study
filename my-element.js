/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       * @type {string}
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       * @type {number}
       */
      count: {type: Number},
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  /**
   * Formats a greeting
   * @param name {string} The name to say "Hello" to
   * @returns {string} A greeting directed at `name`
   */
  sayHello(name) {
    const firstNames = [
      'Ahmet',
      'John',
      'Jane',
      'Emily',
      'Michael',
      'Sarah',
      'David',
      'Laura',
      'Robert',
      'Linda',
    ];
    const lastNames = [
      'Sourtime',
      'Doe',
      'Smith',
      'Johnson',
      'Brown',
      'Williams',
      'Jones',
      'Garcia',
      'Miller',
      'Davis',
    ];

    const mockUsers = [];

    for (let i = 0; i < 100; i++) {
      const firstName = firstNames[i % firstNames.length];
      const lastName =
        lastNames[Math.floor(i / firstNames.length) % lastNames.length];
      mockUsers.push({
        name: firstName,
        lastName: lastName,
        dateOfEmployment: '2022-01-01',
        dateOfBirth: '1988-01-01',
        phoneNumber: `+(90) 55555555${String(i).padStart(2, '0')}`,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@fake-ing.com`,
        department: 'Analytics',
        position: 'Junior',
      });
    }

    console.log(mockUsers);
    return `Hello, ${name}`;
  }
}

window.customElements.define('my-element', MyElement);
