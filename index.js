// when loading a new module, it caches for the subsequence loading
/*
const superHero = require('./super-hero');
console.log(superHero.getName()); // Batman

superHero.setName('Superman');
console.log(superHero.getName()); // Superman

// using the module caching
const newSuperHero = require('./super-hero');
console.log(newSuperHero.getName()); // Superman
*/

const SuperHero = require('./super-hero');

const batman = new SuperHero('Batman');
console.log(batman.getName());
batman.setName('Bruce Wayne');
console.log(batman.getName());

const superman = new SuperHero('Superman');
console.log(superman.getName());
