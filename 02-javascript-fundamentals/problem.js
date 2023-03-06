// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here

// Your code here
function repeatingTranslate(sentence) {
  let words = sentence.split(' ');
  let newSentence = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length < 3) {
      newSentence.push(word);
    } else if (isConsonant(word)) {
      newSentence.push(lastVowel(word));
    } else if (hasVowel(word)) {
      let repeat = word + word;
      newSentence.push(repeat);
    }
  }
  return newSentence.join(' ');
}

function hasVowel(str) {
  let vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return true;
    }
  }
  return false;
}

function isConsonant(str) {
  let vowels = 'aeiou';
  let lastChar = str[str.length - 1];

  if (!vowels.includes(lastChar)) {
    return true;
  }
  return false;
}

function lastVowel(str) {
  let vowels = 'aeiou';
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    if (vowels.includes(char)) {
      return str + str.slice(i);
    }
  }
  return str;
}

console.log(repeatingTranslate('we like to go running fast')); // "we likelike to go runninging fastast"
console.log(repeatingTranslate('he cannot find the trash')); // "he cannotot findind thethe trashash"
console.log(repeatingTranslate('pasta is my favorite dish')); // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate('her family flew to France')); // "herer familyily flewew to FranceFrance"

function sameCharCollapse(str) {
  // your code here
  let chars = str.split('');
  for (let i = 0; i < chars.length; i++) {
    if (containsDoubleLetter(chars.join(''))) {
      for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        let nextChar = chars[i + 1];
        if (char === nextChar) {
          chars.splice(i, 2);
        }
      }
    }
  }

  return chars.join('');
}

function containsDoubleLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    for (let j = 1; j < str.length; j++) {
      if (char === str[j] && i > j) {
        return true;
      }
    }
  }
  return false;
}

function zanyZip(arr1, arr2) {
  let pairs = [];
  if (arr1.length < arr2.length) {
    for (let i = 0; i < arr2.length; i++) {
      for (let j = i; j < i + 1; j++) {
        let pair = [arr1[i], arr2[j]];
        pairs.push(pair);
      }
    }
  } else {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = i; j < i + 1; j++) {
        let pair = [arr1[i], arr2[j]];
        pairs.push(pair);
      }
    }
  }
  return pairs;
}

// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
// Your code here
function pyramidArray(array) {
  let arr = [array];
  let sumArray = [];

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < arr[0].length - 1; j++) {
      let last = arr[0][j];
      let next = arr[0][j + 1];
      let adjSum = last + next;
      sumArray.push(adjSum);
    }
    arr.unshift(sumArray);
    sumArray = [];
  }

  return arr;
}

let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]

// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

// Your code here

/**
 * The above function takes in a target number and returns an array of arrays that contains the pascal
 * triangle.
 * @param target - the number of rows you want to return
 * @returns An array of arrays
 */
function pascalsTriangle(target) {
  /* Declaring an empty array. */
  let arr = [];
  // Determine if the target is equal to 1
  /* Returning the first row of the pascal triangle. */
  if (target === 1) {
    return (arr = [[1]]);
  }
  // Determine if the target is equal to 2
  /* Returning the first two rows of the pascal triangle. */
  else if (target === 2) {
    return (arr = [[1], [1, 1]]);
  } else {
    /* Declaring an array with the first two rows of the pascal triangle. Then it is iterating through
  the array while the length of the array is less than the target. Then it is taking the last
  element of the array and passing it into the pascalAdjacentSum function. Then it is pushing the
  next element into the array. */
    /* Declaring an array with the first two rows of the pascal triangle. */
    arr = [[1], [1, 1]];
    /* Iterating through the array while the length of the array is less than the target. */
    while (arr.length < target) {
      /* Taking the last element of the array and passing it into the pascalAdjacentSum function. */
      let nextel = pascalAdjacentSum(arr[arr.length - 1]);
      /* Pushing the next element into the array. */
      arr.push(nextel);
    }
  }
  /* Returning the array. */
  return arr;
}

function pascalAdjacentSum(array) {
  /* Declaring a sum array with [1, 1]. */
  let sumArray = [1, 1];
  // Iterate through the array
  /* Iterating through the array and adding the adjacent elements of the array. Then it is
  adding the sum of the adjacent elements into the sumArray. */
  for (let i = 0; i < array.length - 1; i++) {
    // for every loop, add the adjacent element
    /* Adding the adjacent elements of the array. */
    let sum = array[i] + array[i + 1];
    // splice into the array
    /* Adding the sum of the adjacent elements into the sumArray. */
    sumArray.splice(i + 1, 0, sum);
  }
  /* Returning the sumArray. */
  return sumArray;
}

console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]

// Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all
//lucky numbers in any order. A lucky number is the minimum element in its row and the maximum in its column.
/**
 * We first find the max number in each column and store it in an array. Then we find the min number in
 * each row and store it in an array. Then we compare the two arrays and return the first number that
 * is in both arrays
 * @param matrix - a 2D array of integers
 * @returns The lucky number is being returned.
 */

function luckyNumbers(matrix) {
  // your code here...
  let maxColumnArray = maxColumn(matrix);
  let minRowArray = minRow(matrix);
  let luckyNums = [maxColumnArray, minRowArray];

  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < luckyNums[i].length; j++) {
      let numArray = luckyNums[i + 1];
      let num = luckyNums[i][j];
      if (numArray.includes(num)) {
        return num;
      }
    }
  }
}

function maxColumn(matrix) {
  // your code here...
  let newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let maxNumber = matrix[0][i];

    for (let j = 1; j < matrix.length; j++) {
      let num = matrix[j][i];
      if (num > maxNumber) {
        maxNumber = [num];
      }
    }
    newArray.push(maxNumber);
  }
  return newArray;
}

function minRow(matrix) {
  let newArray = [];
  for (let i = 0; i < matrix.length; i++) {
    let minNumber = matrix[i][0];

    for (let j = 1; j < matrix[i].length; j++) {
      let num = matrix[i][j];
      if (num < minNumber) {
        minNumber = num;
      }
    }
    newArray.push(minNumber);
  }
  return newArray;
}

let matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(luckyNumbers(matrix)); // [12]

matrix = [
  [5, 10, 8, 6],
  [10, 2, 7, 9],
  [21, 15, 19, 10],
];

console.log(luckyNumbers(matrix)); // [10]

// Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix)
// and returns an array containing the elements in spiral order.

/**
 * We start at the top left corner of the matrix and move right, then down, then left, then up, then
 * right, then down, then left, then up, and so on
 * @param matrix - a 2D array of integers
 * @returns An array of numbers in a spiral order.
 */
function spiralOrder(matrix) {
  // your code here...
  let spiralArray = [];
  let height = matrix.length;
  let width = matrix[0].length;

  for (let row = 0; row < width; row++) {
    let num = matrix[0][row];
    spiralArray.push(num);
  }

  for (let row = 1; row < height; row++) {
    let col = width - 1;
    let num = matrix[row][col];
    spiralArray.push(num);
  }

  for (let row = width - 2; row >= 0; row--) {
    let num = matrix[height - 1][row];
    spiralArray.push(num);
  }

  for (let row = 0; row < width - 1; row++) {
    let num = matrix[height - 2][row];
    spiralArray.push(num);
  }

  return spiralArray;
}

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

function luckyNumbers(matrix) {
  for (let rows = 0; rows < matrix.length; rows++) {
    let minArray = isMin(matrix[rows]);
    let min = minArray[0];
    let minPos = minArray[1];
    let max = 0;

    for (let cols = 0; cols < matrix.length; cols++) {
      if (max < matrix[cols][minPos]) {
        max = matrix[cols][minPos];
      }
    }
    if (min == max) {
      return [max];
    }
  }
}

function isMin(arr) {
  let min = arr[0];
  let minPos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      minPos = i;
    }
  }
  return [min, minPos];
}
