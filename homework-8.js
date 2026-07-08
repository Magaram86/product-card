// Задание 3: Создание объекта пользователя (Марат, Инженер-конструктор)
const userProfile = {
  firstName: "Марат",
  lastName: "Сафин",
  email: "marat.engineer@techmail.com",
  age: 32,
  job: "Инженер-конструктор",
  position: "Senior Lead",
  country: "Россия",
  city: "Казань",
  relationshipStatus: "женат"
};

// Задание 4: Создание объекта автомобиля Mazda 6 и привязка владельца
const carDetails = {
  brand: "Mazda",
  model: "6",
  year: 2020,
  color: "cherry red",
  transmission: "automatic"
};

// Добавление владельца отдельной строкой
carDetails.owner = userProfile;

// Задание 5: Функция проверки и добавления свойства "maxSpeed"
function checkAndAddMaxSpeed(carObject) {
  if (!carObject.hasOwnProperty('maxSpeed')) {
    carObject.maxSpeed = 220;
  }
}

checkAndAddMaxSpeed(carDetails);

// Задание 6: Функция вывода значения конкретного свойства объекта
function displayPropertyValue(object, key) {
  console.log(object[key]);
}

// Задание 7: Массив с текстовыми названиями продуктов
const groceryList = ["Молоко", "Хлеб", "Яблоки", "Сыр", "Кофе"];

// Задание 8: Массив объектов (трилогия Матрица) и добавление фильма в конец
const libraryCatalog = [
  {
    title: "Матрица",
    author: "Сестры Вачовски",
    year: 1999,
    coverColor: "зеленый",
    genre: "фантастика"
  },
  {
    title: "Матрица: Перезагрузка",
    author: "Сестры Вачовски",
    year: 2003,
    coverColor: "черный",
    genre: "фантастика"
  },
  {
    title: "Матрица: Революция",
    author: "Сестры Вачовски",
    year: 2003,
    coverColor: "черный",
    genre: "фантастика"
  }
];

// Добавление четвертого фильма в конец массива методом push
libraryCatalog.push({
  title: "Матрица: Воскрешение",
  author: "Лана Вачовски",
  year: 2021,
  coverColor: "зелено-черный",
  genre: "фантастика"
});

// Задание 9: Второй массив (Риддик) и объединение через spread-оператор
const riddickCollection = [
  {
    title: "Черная дыра",
    author: "Дэвид Туи",
    year: 2000,
    coverColor: "черный",
    genre: "фантастика"
  },
  {
    title: "Хроники Риддика",
    author: "Дэвид Туи",
    year: 2004,
    coverColor: "серебряный",
    genre: "фантастика"
  }
];

// Слияние двух массивов в один общий
const combinedLibrary = [...libraryCatalog, ...riddickCollection];

// Задание 10: Обработка массива методом map и добавление свойства isRare
function markRareBooks(booksArray) {
  return booksArray.map(book => {
    const isRare = book.year > 2000;
    return {
      ...book,
      isRare: isRare
    };
  });
}

// Получение финального массива с размеченными свойствами редкости
const finalLibraryWithRarity = markRareBooks(combinedLibrary);

// Вывод итогового результата в консоль для демонстрации работы
console.log(finalLibraryWithRarity);
