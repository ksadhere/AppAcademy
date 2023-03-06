// Your code here
const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree()', function () {
  it('Should return the number 3', function () {
    expect(returnsThree()).to.equal(3);
  });
});

describe('reciprocal function', function () {
  context('with valid input', function () {
    it('should return the reciprocal of the input', function () {
      let num1 = 1;
      let num2 = 2;

      expect(reciprocal(num1)).to.equal(1);
      expect(reciprocal(num2)).to.equal(0.5);
    });
  });

  context('with input outside of range', function () {
    it('should throw an error', function () {
      let num1 = 0.999;
      let num2 = 1000000.01;

      expect(() => reciprocal(num1)).to.throw(TypeError);
      expect(() => reciprocal(num2)).to.throw(TypeError);
    });
  });
});
