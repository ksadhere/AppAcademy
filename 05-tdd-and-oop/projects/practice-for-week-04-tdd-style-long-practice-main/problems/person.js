class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if ((typeof obj !== 'object') & !Array.isArray(obj)) {
      throw new TypeError('input is not an object');
    }
    if (!obj.name) {
      throw new TypeError('input does not have name property');
    }
    if (!obj.age) {
      throw new TypeError('input does not have age property');
    }
    this.age = obj.age;
    this.name = obj.name;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch {
      return false;
    }
  }

  greetAll(people) {
    return people.map((person) => person.sayHello());
  }
}

module.exports = Person;
