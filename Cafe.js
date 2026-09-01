class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    return `Кафе "${this.name}" | Адрес: ${this.location}`;
  }

  orderDrink(drinkInstance) {
    console.log(`[Заказ] В кафе "${this.name}" заказан напиток: ${drinkInstance.name}`);
    console.log(drinkInstance.getInfo());
    drinkInstance.serve();
  }
}

export default Cafe;
