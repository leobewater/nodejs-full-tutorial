const crypto = require('node:crypto');
const OS = require('os')

console.log(OS.cpus().length);
// libuv - has 4 threads by default
// you can customize the pool size, but should be within the CPU core
// if pool size over CPU core, it will slow down everything
process.env.UV_THREADPOOL_SIZE = OS.cpus().length; //8

// crypto using thread pool to do some of the tasks
const start = Date.now();

const MAX_CALLS = 16;

for (let i = 0; i < MAX_CALLS; i++) {
  // Async
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    // total 369 as running in parallel
    // hash 5 takes more time by default without the customized pool size  
    console.log(`Hash: ${i + 1}`, Date.now() - start, 'ms'); 
  });
}