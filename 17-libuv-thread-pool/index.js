const crypto = require('node:crypto');

// crypto using thread pool to do some of the tasks
const start = Date.now();

// hashing password in Synchronous always run on the main thread and is blocking
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// console.log('Hash: ', Date.now() - start, 'ms'); // 1027ms

const MAX_CALLS = 3;
for (let i = 0; i < MAX_CALLS; i++) {
  // Async
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start, 'ms'); // total 369 as running in parallel
  });
}

/*
const fs = require('node:fs');

console.log('First');

// libuv - pool of threads to offload time-consuming tasks from the main thread
// Async read file, it's using the thread pool in order to achieve this
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  console.log('File contents');
});

console.log('Last');
*/
