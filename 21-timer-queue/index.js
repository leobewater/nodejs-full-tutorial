// Timer Queue
setTimeout(() => console.log('this is setTimeout 1'), 0);
setTimeout(() => {
  console.log('this is setTimeout 2');
  process.nextTick(() => {
    console.log('this is the inner next tick inside setTimeout');
  });
}, 0);
setTimeout(() => console.log('this is setTimeout 3'), 0);

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
Result:
this is process.nextTick 1
this is process.nextTick 2
this is process.nextTick 3
this is the inner next tick inside next tick
this is Promise.resolve 1
this is Promise.resolve 2
this is Promise.resolve 3
this is the inner next tick inside Promise then block
this is setTimeout 1
this is setTimeout 2
this is the inner next tick inside setTimeout
this is setTimeout 3
*/
