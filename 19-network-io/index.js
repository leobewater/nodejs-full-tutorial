const https = require('https');

const MAX_CALLS = 12; // over libuv thread pool size of 4

const start = Date.now();

// sending request to google.com
for (let i = 0; i < MAX_CALLS; i++) {
  // https doesn't seem to be affected by the thread pool size
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(`Request: ${i + 1}`, Date.now() - start, 'ms');
      });
    })
    .end();
}
