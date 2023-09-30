// built-in module
//const path = require('node:path');
const path = require('path');

console.log(__filename); // fullpath
console.log(__dirname); // parent folder name

console.log(path.basename(__filename)); // index.js
console.log(path.basename(__dirname)); // 05-path

console.log(path.extname(__filename)); // .js
console.log(path.extname(__dirname)); // ""

console.log(path.parse(__filename)); // returns an object with all info
console.log(path.parse(__filename).base); // index.js

console.log(path.format(path.parse(__filename))); // full path

console.log(path.isAbsolute(__filename)); // true
console.log(path.isAbsolute('./data.json')); // false

console.log("---------------------");
console.log(path.join("folder1", "folder2", "index.html")); // folder1/folder2/index.html
console.log(path.join("/folder1", "//folder2", "index.html")); // /folder1/folder2/index.html
console.log(path.join("/folder1", "//folder2", "../index.html")); // /folder1/index.html
console.log(path.join(__dirname, "data.json")); // fullpath + /data.json

console.log("---------------------");
// resolve add absolute path
console.log(path.resolve("folder1", "folder2", "index.html"));  // /Users/leo/Docker/exercises/002-nodejs/2023/nodejs-full-tutorial/05-path/folder1/folder2/index.html
console.log(path.resolve("/folder1", "//folder2", "index.html")); // /folder2/index.html
console.log(path.resolve("/folder1", "//folder2", "../index.html")); // /index.html
console.log(path.resolve(__dirname, "data.json")); // fullpath + /data.json