// Main Thread
const http = require('node:http');
const { Worker } = require('node:worker_threads');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Home Page');
    } else if (req.url === '/slow-page') {
      // This way the slow-page doesn't block when loading homepage
      // not true multi-threading but run this in parallel
      const worker = new Worker('./worker-thread.js');
      // listen to worker's response
      worker.on('message', (j) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Slow Page ${j}`);
      });
    }
  })
  .listen(8000, () => console.log('Server is running on port 8000'));
