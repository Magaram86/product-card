let user = null;

const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const formRegister = document.getElementById("reg-form");

function openModal() {
  overlay.classList.add('overlay-showed');
  modal.classList.add('open');
}

function closeModal() {
  overlay.classList.remove('overlay-showed');
  modal.classList.remove('open');
  formRegister.reset();
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

formRegister.addEventListener("submit", (event) => {
  event.preventDefault();

  const passwordInput = formRegister.querySelector('input[name="password"]');
  const confirmPasswordInput = formRegister.querySelector('input[name="passwordConfirm"]');

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Регистрация отклонена: пароли не совпадают!");
    return;
  }

  if (!formRegister.checkValidity()) {
    alert("Регистрация отклонена: форма невалидна!");
    return;
  }

  const formData = new FormData(formRegister);
  const userData = Object.fromEntries(formData.entries());

  delete userData.passwordConfirm;

  userData.createdOn = new Date();

  user = userData;

  console.log("Успешная регистрация:", user);
  closeModal();
});