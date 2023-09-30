// microtask queues

// Experience 3
// nextTick callbacks always run before Promise callbacks
Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
Promise.resolve().then(() => {
  console.log('this is Promise.resolve 2');
  process.nextTick(() =>
    console.log('this is the inner next tick inside Promise then block')
  );
});
Promise.resolve().then(() => console.log('this is Promise.resolve 3'));

process.nextTick(() => console.log('this is process.nextTick 1'));
process.nextTick(() => {
  console.log('this is process.nextTick 2');
  process.nextTick(() => {
    console.log('this is the inner next tick inside next tick');
  });
});
process.nextTick(() => console.log('this is process.nextTick 3'));
/*
result:
this is process.nextTick 1
this is process.nextTick 2
this is process.nextTick 3
this is the inner next tick inside next tick
this is Promise.resolve 1
this is Promise.resolve 2
this is Promise.resolve 3
this is the inner next tick inside Promise then block
*/

// Experience 2
/*
// all callback in nextTick queue are executed before callbacks in Promise queue
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));
/*
Result:
this is process.nextTick 1
this is Promise.resolve 1
*/

// Experience 1
/*
console.log("console.log 1"); // sync code takes priority over async code
process.nextTick(() => console.log('this is process.next 1')) // put on call stack then sent to nextTick queue
console.log("console.log 2"); // sync code, send to call stack
// when call stack is empty, run the nextTick queue
*/
