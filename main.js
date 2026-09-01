import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import Modal from './Modal.js';
import Form from './Form.js';
import Cafe from './Cafe.js';
import { Coffee, Tea, Lemonade } from './Beverages.js';


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

openGoogleButton.addEventListener('click', openGoogle);

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

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getProductInfo() {
    return `Товар: ${this.name}, Цена: ${this.price} руб.`;
  }
}

class BeautyProduct extends Product {
  constructor(name, price, type) {
    super(name, price);
    this.type = type;
  }

  getFullInfo() {
    return `${this.getProductInfo()} | Тип/Назначение: ${this.type}`;
  }
}

const testMousse = new BeautyProduct('Увлажняющий мусс', 1200, 'Для чувствительной кожи');
console.log(testMousse.getFullInfo());

const regModal = new Modal('modal');
const regForm = new Form('reg-form');

const openButton = document.getElementById('open-modal-btn');

if (openButton) {
  openButton.addEventListener('click', () => {
    regModal.open();
  });
}

if (regForm.formElement) {
  regForm.formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    if (regForm.isValid()) {
      console.log('Успешно! Данные:', regForm.getValues());
      regForm.reset();
      regModal.close();
    } else {
      console.log('Форма заполнена неверно!');
    }
  });
}

const myCafe = new Cafe("Coffee & Beauty", "ул. Пушкина, дом 10");

const espresso = new Coffee("Эспрессо", "S", 150, 20, "Арабика", "Без молока");
const greenTea = new Tea("Зеленый чай", "M", 180, 20, "Сенча");
const berryLemonade = new Lemonade("Ягодный лимонад", "L", 250, 10, true);

console.log(myCafe.getCafeInfo());

myCafe.orderDrink(espresso);
myCafe.orderDrink(greenTea);
myCafe.orderDrink(berryLemonade);
