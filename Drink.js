class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (this.constructor === Drink) {
      throw new Error("Абстрактный класс Drink не может иметь экземпляров!");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price} руб.`;
  }

  getTemperature() {
    return `${this.#temperature}°C`;
  }

  setTemperature(newTemp) {
    this.#temperature = newTemp;
  }

  #prepare() {
    console.log(`[Процесс] Начинается приготовление напитка: ${this.name}...`);
    this.setTemperature(85);
    console.log(`[Процесс] Напиток нагрет до ${this.getTemperature()}`);
  }

  serve() {
    this.#prepare();
    console.log(`[Подача] Напиток "${this.name}" готов и подан клиенту!`);
  }
}

export default Drink;
