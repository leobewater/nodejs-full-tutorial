const fs = require('node:fs');

const readableStream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2, // read in chunk of 2 bytes
});

const writeableStream = fs.createWriteStream('./file2.txt', {
  encoding: 'utf-8',
});

// listen to the readable stream then write to file2
readableStream.on('data', (chunk) => {
  console.log(chunk);

  writeableStream.write(chunk);
});
