/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function (array, cb) {
  let smallest = array[0];
  if (cb === undefined) {
    let newSmallest = array.forEach((n) => {
      if (n < smallest || n === smallest) {
        return (smallest = n);
      } else {
        return smallest;
      }
    });
    let result = smallest;
    return result;
  } else {
    let newSmallest = array.forEach((n) => {
      if (n < smallest || n === smallest) {
        return (smallest = n);
      } else {
        return smallest;
      }
    });
    let result = cb(smallest);
    return result;
  }
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
