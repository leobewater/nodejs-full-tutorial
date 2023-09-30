const buffer = new Buffer.from('Vishwas', 'utf-8');

console.log(buffer); // <Buffer 56 69 73 68 77 61 73> // in hex number
console.log(buffer.toString()); // Vishwas
console.log(buffer.toJSON());
/*
// each character is converted into unicode represented by number in digital
{
  type: 'Buffer',
  data: [
     86, 105, 115,
    104, 119,  97,
    115
  ]
}
*/

buffer.write('Code');
console.log(buffer); 

// you never work with buffer directly in node.js, mostly it's being used by fs module