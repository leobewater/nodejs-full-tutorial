const EventEmitter = require('node:events');

// inherit EventEmitter
class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    // dispatch event
    this.emit('order', size, topping);
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
