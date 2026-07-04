const showWeather = (city, temperature) => {
  console.log(`Сейчас в ${city} температура + ${temperature} градусов по Цельсию`);
};

showWeather("Казань", 25); 


const SPEED_OF_LIGHT = 299792458;

const checkSpeed = (speed) => {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
};

checkSpeed(100000);
checkSpeed(300000000);
checkSpeed(299792458);


const productName = "Смартфон";
const productPrice = 500;

const buyProduct = (budget) => {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const missingAmount = productPrice - budget;
    console.log(`Вам не хватает ${missingAmount}$, пополните баланс`);
  }
};

buyProduct(600);
buyProduct(350);



const calculateBMI = (weight, height) => {
  const bmi = weight / (height * height);
  console.log(`Ваш индекс массы тела: ${bmi.toFixed(2)}`);
};


const user = {
  name: "Алексей",
  isLoggedIn: true,
  maxLoginAttempts: 3
};
