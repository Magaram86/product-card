import Drink from './Drink.js';

class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  getInfo() {
    return `${super.getInfo()} | Зёрна: ${this.beanType}, Молоко: ${this.milkType}`;
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }

  getInfo() {
    return `${super.getInfo()} | Сорт чая: ${this.teaType}`;
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, hasIce) {
    super(name, size, price, temperature);
    this.hasIce = hasIce;
  }

  getInfo() {
    return `${super.getInfo()} | Лёд: ${this.hasIce ? 'Да' : 'Нет'}`;
  }
}

export { Coffee, Tea, Lemonade };
