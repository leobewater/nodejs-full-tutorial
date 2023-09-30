const fs = require('node:fs');
const zlib = require('node:zlib'); // compression, create zip file and has built-in transform stream

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2, // read in chunk of 2 bytes
});

// chaining pipe to create gzip file
readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'));

const writeableStream = fs.createWriteStream('./file2.txt', {
  encoding: 'utf-8',
});

// same output
// pipe
readableStream.pipe(writeableStream);

// listen to the readable stream then write to file2
// readableStream.on('data', (chunk) => {
//   console.log(chunk);

//   writeableStream.write(chunk);
// });
