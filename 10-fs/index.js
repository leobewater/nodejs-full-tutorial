const fs = require('node:fs');

console.log('First');

// const fileContents = fs.readFileSync("./file.txt");
// console.log(fileContents); // <Buffer 48 65 6c 6c 6f 20 43 6f 64 65 76 6f 6c 75 74 69 6f 6e>

// readFileSync, read the entire file may block continue executing the following code if file is huge
const fileContents = fs.readFileSync('./file.txt', 'utf-8');
console.log(fileContents); // Hello Codevolution

console.log('Second');

// async read file
fs.readFile('./file.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data); // Hello Codevolution
  }
});

console.log('Third'); // this appears before the .readFile()

fs.writeFileSync('./greet.txt', 'Hello world!');

// by default .writeFile override the file, unless adding a flag for append
fs.writeFile('./greet.txt', ' Hello Vishwas!', { flag: 'a' }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File written');
  }
});
