const openModalBtn = document.getElementById('open-modal-btn');
const modalOverlay = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const regForm = document.getElementById('reg-form');

let user;
openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('modal-showed');
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('modal-showed');
});

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('modal-showed');
  }
});

if (regForm) {
  regForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const passwordInput = document.getElementById('reg-password');
    const passwordConfirmInput = document.getElementById('reg-password-confirm');

    if (!regForm.checkValidity() || passwordInput.value !== passwordConfirmInput.value) {
      alert('Регистрация отклонена: форма заполнена неверно или пароли не совпадают!');
      return;
    }

    const userData = {
      name: document.getElementById('reg-name').value,
      surname: document.getElementById('reg-surname').value,
      birthDate: document.getElementById('reg-date').value,
      login: document.getElementById('reg-login').value,
      createdAt: new Date()
    };

    user = userData;
    console.log('Пользователь успешно зарегистрирован:', user);
    regForm.reset();
    modalOverlay.classList.remove('modal-showed');
  });
}

