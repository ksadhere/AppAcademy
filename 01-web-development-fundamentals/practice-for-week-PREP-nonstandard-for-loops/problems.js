function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  let answer = [];
  for (let i = 1; i < arr.length; i += 2) {
    answer.push(arr[i]);
  }
  return answer;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  let answer = [];
  for (let i = arr.length - 1; i > 0; i--) {
    if (i % 2 === 1) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  let answer = [];
  for (let i = 1; i < arr.length; i *= 2) {
    answer.push(arr[i]);
  }
  return answer;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  let answer = [];
  for (let i = 1; i < arr.length; i *= n) {
    answer.push(arr[i]);
  }
  return answer;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  let answer = [];
  for (let i = 0; i < arr.length / 2; i++) {
    answer.push(arr[i]);
  }
  return answer;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  let answer = [];
  for (let i = arr.length - 1; i >= arr.length / 2; i--) {
    answer.push(arr[i]);
  }
  return answer;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
