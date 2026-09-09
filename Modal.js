const overlay = document.createElement('div');
overlay.id = 'overlay';
overlay.className = 'overlay';
document.body.prepend(overlay);

let openCount = 0;
let overlayHandler = null;
let escapeHandler = null;

function updateOverlay() {
  overlay.classList.toggle('overlay-showed', openCount > 0);
}

function closeAll() {
  document.querySelectorAll('.modal.open').forEach(el => el.classList.remove('open'));
  openCount = 0;
  updateOverlay();
  if (overlayHandler) {
    overlay.removeEventListener('click', overlayHandler);
    overlayHandler = null;
  }
  if (escapeHandler) {
    document.removeEventListener('keydown', escapeHandler);
    escapeHandler = null;
  }
}

export default class Modal {
  constructor(modalId) {
    this.el = document.getElementById(modalId);
    this.closeBtn = this.el?.querySelector('.modal-close') || document.getElementById('close-modal-btn');
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
  }

  open() {
    if (!this.el || this.el.classList.contains('open')) return;
    this.el.classList.add('open');
    openCount++;
    updateOverlay();

    if (openCount === 1) {
      overlayHandler = () => { if (event.target === overlay) closeAll(); };
      overlay.addEventListener('click', overlayHandler);
      escapeHandler = (e) => { if (e.key === 'Escape') closeAll(); };
      document.addEventListener('keydown', escapeHandler);
    }
  }

  close() {
    if (!this.el || !this.el.classList.contains('open')) return;
    this.el.classList.remove('open');
    openCount--;
    updateOverlay();
    if (openCount === 0) {
      if (overlayHandler) {
        overlay.removeEventListener('click', overlayHandler);
        overlayHandler = null;
      }
      if (escapeHandler) {
        document.removeEventListener('keydown', escapeHandler);
        escapeHandler = null;
      }
    }
  }
}