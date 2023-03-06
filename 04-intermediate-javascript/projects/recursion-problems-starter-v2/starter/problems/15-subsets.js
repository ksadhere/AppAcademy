/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.


[[], ]
***********************************************************************/

// your code here

/**
 * We take the last element of the array, and add it to every subset of the array without the last
 * element
 * @param arr - [1, 2, 3]
 * @returns An array of arrays.
 */
function subsets(arr) {
  /* If the array is empty, then we return an array with an empty array. */
  if (arr.length < 1) {
    return [[]];
  }

  /* Taking the last element of the array. */
  let last = arr[arr.length - 1];
  /* Taking the array, and removing the last element of the array. */
  let sub = subsets(arr.slice(0, arr.length - 1));
  /* Taking every element in the array, and adding the last element of the array to it. */
  let newSub = sub.map((el) => {
    return [...el, last];
  });

  /* Concatenating the two arrays together. */
  let result = sub.concat(newSub);
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
