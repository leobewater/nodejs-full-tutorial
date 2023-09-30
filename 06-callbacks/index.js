function greet(name) {
  console.log(`Hello ${name}`);
}

function greetVishwas(greetFn) {
  const name = 'Vishwas';
  greetFn(name);
}

function higherOrderFunction(callback) {
  const name = 'Vishwas';
  callback(name); // Synchronous callbacks, execute immdiately
}

// passing a function as argument
greetVishwas(greet);
higherOrderFunction(greet);

// Synchronous callbacks, execute immdiately, also like .sort(), .filter(), .map()

// Asynchronous callbacks, to continue or resume code execution after async optation has completed
// eg: fetching data from database, reading data from a file, handling a network request
// eg browser .addEventListener(), jquery $.get('url', callback())