function isFive(num) {
  // Your code here
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  // Your code here
  if (number % 2 === 1 || number % 2 === -1) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  } else throw new Error('num is not type of Number');
}

function myRange(min, max, step = 1) {
  // Your code here
  let range = [];
  for (let i = min; i <= max; i += step) {
    range.push(i);
  }

  return range;
}

module.exports = { isFive, isOdd, myRange };
