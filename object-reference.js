const obj1 = {
  name: 'Bruce Wayne',
};

// obj2 is pointing the address of obj1
const obj2 = obj1;
obj2.name = 'Clark Kent';
console.log(obj1); // Clark Kent
