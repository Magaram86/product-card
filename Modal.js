export default class Modal {
  static #overlay = null;
  static #openCount = 0;
  static #instances = [];
  static #overlayClickHandler = null;
  static #escapeHandler = null;

  static defaultOptions = {
    closeOnOverlay: true,
    closeOnEscape: true,
    overlaySelector: '#overlay',
    openClass: 'open',
    overlayOpenClass: 'overlay-showed',
  };

  constructor(modalId, options = {}) {
    this.modalElement = document.getElementById(modalId);
    if (!this.modalElement) {
      console.warn(`Modal: элемент с id="${modalId}" не найден`);
      return;
    }
    this.options = { ...Modal.defaultOptions, ...options };
    this.isOpen = false;
    this.closeButton = this.modalElement.querySelector('.modal-close');
    if (!this.closeButton) {
      this.closeButton = document.getElementById('close-modal-btn');
    }
    Modal.#initOverlay(this.options.overlaySelector);
  }

  open() {
    if (this.isOpen || !this.modalElement) return;
    this.modalElement.classList.add(this.options.openClass);
    this.isOpen = true;
    Modal.#instances.push(this);
    Modal.#openCount++;
    Modal.#updateOverlayVisibility(this.options.overlayOpenClass);
    Modal.#attachGlobalListeners(this.options);
    this.#attachCloseButtonListener();
  }

  close() {
    if (!this.isOpen || !this.modalElement) return;
    this.modalElement.classList.remove(this.options.openClass);
    this.isOpen = false;
    const idx = Modal.#instances.indexOf(this);
    if (idx !== -1) {
      Modal.#instances.splice(idx, 1);
      Modal.#openCount--;
    }
    Modal.#updateOverlayVisibility(this.options.overlayOpenClass);
    Modal.#detachGlobalListeners();
    this.#detachCloseButtonListener();
  }

  #attachCloseButtonListener() {
    if (!this.closeButton) return;
    if (this._closeHandler) return;
    this._closeHandler = () => this.close();
    this.closeButton.addEventListener('click', this._closeHandler);
  }

  #detachCloseButtonListener() {
    if (!this.closeButton || !this._closeHandler) return;
    this.closeButton.removeEventListener('click', this._closeHandler);
    this._closeHandler = null;
  }

  static #initOverlay(selector) {
    if (!Modal.#overlay) {
      Modal.#overlay = document.querySelector(selector);
      if (!Modal.#overlay) {
        console.warn(`Modal: оверлей с селектором "${selector}" не найден. Создаём автоматически.`);
        const overlay = document.createElement('div');
        overlay.id = selector.replace('#', '');
        overlay.className = 'overlay';
        document.body.prepend(overlay);
        Modal.#overlay = overlay;
      }
    }
  }

  static #updateOverlayVisibility(overlayOpenClass) {
    const overlay = Modal.#overlay;
    if (!overlay) return;
    if (Modal.#openCount > 0) {
      overlay.classList.add(overlayOpenClass);
    } else {
      overlay.classList.remove(overlayOpenClass);
    }
  }

  static #attachGlobalListeners(options) {
    if (!Modal.#overlayClickHandler) {
      const hasOverlayClose = Modal.#instances.some(inst => inst.options.closeOnOverlay);
      if (hasOverlayClose && Modal.#overlay) {
        Modal.#overlayClickHandler = (event) => {
          if (event.target === Modal.#overlay) {
            const toClose = Modal.#instances.filter(inst => inst.options.closeOnOverlay);
            toClose.forEach(inst => inst.close());
          }
        };
        Modal.#overlay.addEventListener('click', Modal.#overlayClickHandler);
      }
    }
    if (!Modal.#escapeHandler) {
      Modal.#escapeHandler = (event) => {
        if (event.key === 'Escape') {
          const toClose = Modal.#instances.filter(inst => inst.options.closeOnEscape);
          toClose.forEach(inst => inst.close());
        }
      };
      document.addEventListener('keydown', Modal.#escapeHandler);
    }
  }

  static #detachGlobalListeners() {
    if (Modal.#openCount === 0) {
      if (Modal.#overlayClickHandler && Modal.#overlay) {
        Modal.#overlay.removeEventListener('click', Modal.#overlayClickHandler);
        Modal.#overlayClickHandler = null;
      }
      if (Modal.#escapeHandler) {
        document.removeEventListener('keydown', Modal.#escapeHandler);
        Modal.#escapeHandler = null;
      }
    }
  }
}