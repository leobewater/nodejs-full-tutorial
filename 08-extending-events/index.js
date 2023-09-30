const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

// add event listener
pizzaShop.on('order', (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order('large', 'mushroom');
pizzaShop.displayOrderNumber();

/*
const EventEmitter = require('node:events');

const emitter = new EventEmitter();

// register listeners (non-blocking)
emitter.on('order-pizza', (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});
emitter.on('order-pizza', (size) => {
  if (size === 'large') {
    console.log(`Serving compleimentary drink`);
  }
});

console.log("Do work before event occurs in the system"); // appear first

// dispatch an event with payload
emitter.emit('order-pizza', 'large', 'mushroom');
*/
