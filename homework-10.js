import { products } from './products.js';

const createProductCard = (product) => {
  const template = document.querySelector('#product-template');
  if (!template) return null;

  const cardClone = template.content.cloneNode(true);

  cardClone.querySelector('.card__image').src = `./images/${product.img}.png`;
  cardClone.querySelector('.card__image').alt = product.title;
  cardClone.querySelector('.card__name').textContent = product.title;
  cardClone.querySelector('.card__description p').textContent = product.description;
  cardClone.querySelector('.card__price span').textContent = `${product.price} ₽`;

  const compoundList = cardClone.querySelector('.compaund__list');
  compoundList.innerHTML = '';

  product.composition.forEach((item) => {
    const itemLi = document.createElement('li');
    itemLi.textContent = item;
    compoundList.append(itemLi);
  });

  return cardClone;
};

const renderProducts = (productsArray) => {
  const container = document.querySelector('.products-cards'); 
  if (!container) return;
  
  container.innerHTML = ''; 
  
  productsArray.forEach((product) => {
    const cardElement = createProductCard(product);
    if (cardElement) {
      container.append(cardElement);
    }
  });
};

const productsDescriptions = products.reduce((acc, product) => {
  acc.push({
    title: product.title,
    description: product.description
  });
  return acc;
}, []);

console.log(productsDescriptions);

const initApp = () => {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(userInput, 10);
  
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка! Пожалуйста, введите корректное число от 1 до 5.");
    renderProducts(products); 
  } else {
    renderProducts(products.slice(0, count));
  }
};

initApp();

