// Your code here
const chai = require('chai'),
  spies = require('chai-spies'),
  expect = chai.expect,
  myMap = require('../problems/my-map');
chai.use(spies);

describe('myMap(inputArray, callback)', function () {
  let myArray;
  let myCallback;
  this.beforeEach(() => {
    myCallback = (el) => el * 2;
    myArray = [100, 25, 81, 64];
  });

  it('should apply the callback to each el of the input Array', function () {
    let myResult = myMap(myArray, myCallback);

    expect(myResult).to.eql([200, 50, 162, 128]);
    expect(myArray).to.eql([100, 25, 81, 64]);
  });

  it('using chai.spy.on(): should not call Array.prototype.map', function () {
    const mapSpy = chai.spy.on(myArray, 'map');
    myMap(myArray, Math.sqrt);
    expect(mapSpy).to.have.not.been.called();
  });

  it('using chai.spy(): should not call Array.prototype.map', function () {
    let spy = chai.spy(myCallback);
    expect(myMap(myArray, spy)).to.deep.equal([200, 50, 162, 128]);
    expect(spy).to.have.been.called(4);
  });
});
