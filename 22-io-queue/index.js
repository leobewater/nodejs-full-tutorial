// IO Queue
const fs = require('fs');

fs.readFile(__filename, () => {
  console.log('this is readFile 1');
});

setTimeout(() => console.log("this is setTimeout 1"), 0);

process.nextTick(() => console.log('this is process.nextTick 1'));
Promise.resolve().then(() => console.log('this is Promise.resolve 1'));

/*
Result:
this is process.nextTick 1
this is Promise.resolve 1
setTimeout 1
this is readFile 1
*/