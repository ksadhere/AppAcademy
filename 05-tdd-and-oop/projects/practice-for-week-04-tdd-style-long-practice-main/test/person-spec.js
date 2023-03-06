const chai = require('chai'),
  expect = chai.expect,
  Person = require('../problems/person');

describe('class Person', function () {
  let person1;
  let person2;
  let coolPerson = new Person('mai', 32);
  let nameObj = { name: 'Joe' };
  let ageObj = { age: 45 };
  let obj = { name: 'lulu', age: 57 };

  this.beforeEach(function () {
    person1 = new Person('Sam', 24);
    person2 = new Person('Sarah', 25);
  });

  describe('#Constructor()', function () {
    it('should have properties [name] and [age] on instance of Person ', function () {
      expect(person1).to.have.all.keys('name', 'age');
    });

    it('should have properly set the [name] and [age] properties', function () {
      expect(person1.name).to.equal('Sam');
      expect(person1.age).to.equal(24);
    });
  });

  describe('#sayHello()', function () {
    it('should return a greetings message including the name of the caller', function () {
      let helloSam = person1.sayHello();
      let helloSarah = person2.sayHello();

      expect(helloSam).to.equal(`Hello, my name is Sam`);
      expect(helloSarah).to.equal(`Hello, my name is Sarah`);
    });
  });

  describe('#visit(otherPerson)', function () {
    it('should return a string stating the instance of Person visited the passed in value (otherPerson)', function () {
      let visited2 = person1.visit(person2);

      expect(visited2).to.equal('Sam visited Sarah');
    });
  });

  describe('#switchVisit(otherPerson)', function () {
    it('should invoke the visit function of the argument', function () {
      let spy = chai.spy.on(person1, 'visit');

      expect(person2.switchVisit(person1)).to.equal(
        `${person1.name} visited ${person2.name}`
      );
      expect(spy).to.have.been.called(1);
    });
  });

  describe('#update(obj)', function () {
    context('if the (obj) is not an object', function () {
      it('should throw a TypeError and its message', function () {
        expect(() => coolPerson.update(5)).to.throw(TypeError);
      });
    });

    context('when (obj) is an an object', function () {
      it('should have properties [name] and [age]', function () {
        expect(() => coolPerson.update(ageObj)).to.throw(TypeError);
        expect(() => coolPerson.update(nameObj)).to.throw(TypeError);
      });

      it('should update properties of caller to equal the (obj) properties', function () {
        expect(coolPerson).to.have.property('name', 'mai');
        expect(coolPerson).to.have.property('age', 32);

        coolPerson.update(obj);

        expect(coolPerson).to.have.property('name', 'lulu');
        expect(coolPerson).to.have.property('age', 57);
      });
    });
  });

  describe('#tryUpdate(obj)', function () {
    context('when update(obj) is successfully invoked', function () {
      it('should return true', function () {
        let result1 = person2.tryUpdate(person1);

        expect(result1).to.equal(true);
      });
    });

    context('when update is not successfully invoked', function () {
      it('should return false', function () {
        let result2 = person2.tryUpdate(ageObj);

        expect(result2).to.equal(false);
      });
    });
  });

  describe('#greetAll(obj)', function () {
    context(
      'when array of Person instances are passed in as arguments',
      function () {
        it('should call sayHello() method on each Person instance', function () {
          let spy1 = chai.spy.on(person1, 'sayHello');
          let spy2 = chai.spy.on(coolPerson, 'sayHello');
          person1.greetAll([person1, coolPerson]);
          expect(spy1).to.have.been.called(1);
          expect(spy2).to.have.been.called(1);
        });
      }
    );
  });
});
