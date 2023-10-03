// Cluster, master only in charge of the workers
// https://nodejs.org/api/cluster.html
const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();

if (cluster.isPrimary) {
  console.log(`Number of CPUs ${numCPUs}`);
  console.log(`Primary process ${process.pid} is running`);

  // create workers based on CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // the worker is in charge of the incoming requests
  // using the cluster, the slow page doesn't block the homepage while loading
  console.log(`Worker ${process.pid} started`);

  http
    .createServer((req, res) => {
      if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
      } else if (req.url === '/slow-page') {
        for (let i = 0; i < 6000000000; i++) {}
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Slow Page');
      }
    })
    .listen(8000, () => console.log('Server is running on port 8000'));
}
