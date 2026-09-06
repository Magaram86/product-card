let user = null;

// ---- Ищем элементы по новым селекторам ----
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("modal");            // теперь по id
const overlay = document.getElementById("overlay");       // оверлей теперь #overlay
const formRegister = document.getElementById("reg-form");

// ---- Проверяем, что все элементы найдены ----
if (!openBtn) console.warn('open-modal-btn не найден');
if (!closeBtn) console.warn('close-modal-btn не найден');
if (!modal) console.warn('modal не найден');
if (!overlay) console.warn('overlay не найден');
if (!formRegister) console.warn('reg-form не найден');

function openModal() {
  if (overlay) overlay.classList.add('overlay-showed');   // используем новый класс
  if (modal) modal.classList.add('open');                 // используем новый класс
}

function closeModal() {
  if (overlay) overlay.classList.remove('overlay-showed');
  if (modal) modal.classList.remove('open');
  if (formRegister) formRegister.reset();
}

// ---- Вешаем слушатели только если элементы существуют ----
if (openBtn) {
  openBtn.addEventListener("click", openModal);
} else {
  console.warn('openBtn не найден, слушатель не добавлен');
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
} else {
  console.warn('closeBtn не найден, слушатель не добавлен');
}

if (overlay) {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

if (formRegister) {
  formRegister.addEventListener("submit", (event) => {
    event.preventDefault();

    const passwordInput = formRegister.querySelector('input[name="password"]');
    const confirmPasswordInput = formRegister.querySelector('input[name="passwordConfirm"]');

    if (!passwordInput || !confirmPasswordInput) {
      alert("Ошибка: поля пароля не найдены");
      return;
    }

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
}