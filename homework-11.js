let user = null;

const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");
const formRegister = document.getElementById("reg-form");
const form = document.getElementById("reg-form");

function openModal() {
  overlay.style.display = "flex";
  modal.classList.add("modal-showed");
}

function closeModal() {
  overlay.style.display = "none";
  modal.classList.remove("modal-showed");
  formRegister.reset();
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

formRegister.addEventListener("submit", (event) => {
  event.preventDefault();

  const passwordInput = form.querySelector('input[name="password"]');
  const confirmPasswordInput = form.querySelector('input[name="passwordConfirm"]');

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Регистрация отклонена: пароли не совпадают!");
    return;
  }

  if (!form.checkValidity()) {
    alert("Регистрация отклонена: форма невалидна!");
    return;
  }

  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());

  delete userData.passwordConfirm;

  userData.createdOn = new Date();

  user = userData;

  console.log("Успешная регистрация:", user);
  closeModal();
});
