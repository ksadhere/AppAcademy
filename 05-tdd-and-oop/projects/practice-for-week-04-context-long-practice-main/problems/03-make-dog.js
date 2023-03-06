// Your code here
class Dog {
  constructor(name) {
    this.name = name;
  }

  /* Creating a static method that can be called on the class itself. */
  static makeJet = () => {
    return new Dog('Jet');
  };

  changeName = (newName) => (this.name = newName);

  speak = (word) => `${this.name} says ${word}`;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Dog;
} catch {
  module.exports = null;
}