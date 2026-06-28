// покраска всех карточек
const productCards = document.querySelectorAll('.card');
const allChangeColorCardButton = document.querySelector('#change-color-products-cards-button');
const slateBlueColorHash = '#6A5ACD';
const mediumpurpleHash = '#9370DB';
const googleURL = 'https://google.com';

allChangeColorCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = slateBlueColorHash);
});


// покраска первой карточки

const card = document.querySelector('.card');
const changeColorCardButton = document.querySelector('#button-card-color-change');

changeColorCardButton.addEventListener('click', () => {
  card.style.backgroundColor = mediumpurpleHash;
});

// Открыть страницу google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click',openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open(googleURL)
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');


outputLogButton.addEventListener('click', () => outputConsoleLog('Вывод сообщения'));

function outputConsoleLog(message) {
  alert(message); 
  console.log(message);
}

// Вывод главного заголовка в консоль

const catalogTitle = document.querySelector('.catalog__title');

catalogTitle.addEventListener('mouseover', () => {

  console.log(catalogTitle.textContent);
});

// Переключение цвета кнопки

const toggleColorButton = document.querySelector('#toggle-color-button')

toggleColorButton.addEventListener('click', () => {
  toggleColorButton.classList.toggle('active');
});
