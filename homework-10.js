import { products } from './products.js';

const createProductCard = (product) => {
  const compositionHtml = product.composition
    .map(item => `<li>${item}</li>`)
    .join('');

  return `
    <li class="products__item card" data-id="${product.id}">
      <img src="./images/${product.img}" alt="${product.title}" class="card__img" />
      <span class="card__category">для нормальной кожи</span>
      <h2 class="card__name">${product.title}</h2>
      <div class="card__description">
        <p>${product.description}</p>
      </div>
      <div class="card__compaund compaund">
        <span class="compaund__name">Состав: </span>
        <ul class="compaund__list">
          ${compositionHtml}
        </ul>
      </div>
      <div class="card__price">
        <b>Цена</b>
        <span>${product.price} &#8381;</span>
      </div>
    </li>
  `;
};

const renderProducts = (productsArray) => {
  const container = document.querySelector('.products-cards'); 
  if (!container) return;
  container.innerHTML = productsArray.map(product => createProductCard(product)).join('');
};

const productsDescriptions = products.reduce((acc, product) => {
  acc[product.title] = product.description;
  return acc;
}, {});

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
