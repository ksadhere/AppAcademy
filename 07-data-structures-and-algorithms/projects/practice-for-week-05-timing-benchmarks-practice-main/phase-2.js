const [addNums, addManyNums] = require('./phase-1');

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  const result = [];
  let index = 1;
  for (let i = increment; index <= 10; i += increment) {
    result.push(addNums(i));
    index++;
  }

  return result;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  const result = [];
  let index = 1;
  for (let i = increment; index <= 10; i += increment) {
    result.push(addManyNums(i));
    index++;
  }

  return result;
}

module.exports = [addNums10, addManyNums10];
