/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
/**
 * If the contents of the array are an array, then flatten the contents of the array, otherwise push
 * the contents of the array into the new array.
 * @param arr - the array to be flattened
 * @returns [1, 2, 3, 4, 5, 6]
 */
function flatten(arr) {
  let newArray = [];

  arr.forEach((contents) => {
    if (Array.isArray(contents)) {
      const result = flatten(contents);
      newArray.push(...result);
    } else {
      newArray.push(contents);
    }
  });

  return newArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
