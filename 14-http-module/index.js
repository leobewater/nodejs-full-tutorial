const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  //   res.writeHead(200, { 'Content-Type': 'text/plain' });
  //   res.end('Hello World');

  //   const superHero = {
  //     firstName: 'Bruce',
  //     lastName: 'Wayne',
  //   };
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(superHero));

  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.end('<h1>Hello World</h1>');

  const html = fs.readFileSync('./index.html', 'utf-8');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
