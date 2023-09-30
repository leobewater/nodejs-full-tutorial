// IO Polling
const fs = require('fs');

fs.readFile(__filename, () => {
  console.log('this is readFile 1');
});

process.nextTick(() => console.log('this is process.nextTick 1'));
Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
setTimeout(() => console.log('this is setTimeout 1'), 0);
setImmediate(() => console.log('this is setImmediate 1'));

for (var i = 0; i < 200000000; i++) { }

/*
Result:
this is process.nextTick 1
this is Promise.resolve 1
this is setTimeout 1
this is setImmediate 1
this is readFile 1
*/
