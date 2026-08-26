class Modal {
  constructor(modalId) {
    this.modalElement = document.getElementById(modalId);
    this.closeButton = this.modalElement ? this.modalElement.querySelector('button') : null;
    this.initCloseListener();
  }

  open() {
    if (this.modalElement) {
      this.modalElement.classList.add('open');
    }
  }

  close() {
    if (this.modalElement) {
      this.modalElement.classList.remove('open');
    }
  }

  isOpen() {
    if (this.modalElement) {
      return this.modalElement.classList.contains('open');
    }
    return false;
  }

  initCloseListener() {
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.close();
      });
    }
  }
}

export default Modal;
