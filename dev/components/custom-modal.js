import {LitElement, html, css} from 'lit';

export class CustomModal extends LitElement {
  static get styles() {
    return css`
      .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
      }
      .active {
        display: flex;
      }

      /* Modal content */
      .modal-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        width: 90%;
        max-width: 500px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        position: relative;
      }

      /* Close button */
      .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
      }

      /* Modal actions */
      .modal-actions {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
      }

      /* Action buttons */
      .action-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
      }

      .approve {
        background-color: #4caf50;
        color: white;
      }

      .cancel {
        background-color: #f44336;
        color: white;
      }

      @media (max-width: 768px) {
        .modal-content {
          width: 80%;
        }
      }
    `;
  }

  static get properties() {
    return {
      isVisible: {type: Boolean},
      title: {type: String},
      description: {type: String},
      cancelButtonName: {type: String},
      approveButtonName: {type: String},
    };
  }

  constructor() {
    super();
    this.title = '';
    this.description = '';
    this.isVisible = false;
    this.cancelButtonName = 'Cancel';
    this.approveButtonName = 'Approve';
  }

  render() {
    return html`
      <div id="modal" class=${this.isVisible ? 'modal active' : 'modal'}>
        <div class="modal-content">
          <span @click=${this.cancelled} id="closeModalBtn" class="close"
            >&times;</span
          >
          <h2>${this.title}</h2>
          <p>${this.description}</p>
          <div class="modal-actions">
            <button
              @click=${this.cancelled}
              id="cancelBtn"
              class="action-btn cancel"
            >
              ${this.cancelButtonName}
            </button>
            <button
              @click=${this.approved}
              id="approveBtn"
              class="action-btn approve"
            >
              ${this.approveButtonName}
            </button>
          </div>
        </div>
      </div>
    `;
  }
  approved() {
    this.dispatchEvent(new CustomEvent('approved'));
  }
  cancelled() {
    this.dispatchEvent(new CustomEvent('cancelled'));
  }
}

window.customElements.define('custom-modal', CustomModal);
