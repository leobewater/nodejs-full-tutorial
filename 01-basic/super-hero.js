class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// module caching
// module.exports = new SuperHero('Batman');
module.exports = SuperHero;
