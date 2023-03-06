// Your code here
const { expect } = require('chai');

const reverseString = require('../problems/reverse-string');

describe('reverseString()', function () {
  it('Should reverse the passed in string', function () {
    let potato = 'fun';
    reverseString(potato);
    expect(reverseString(potato)).to.equal('nuf');
  });

  it('Should throw error if value is not a string', function () {
    expect(() => reverseString(5)).to.throw(TypeError);
  });
});
