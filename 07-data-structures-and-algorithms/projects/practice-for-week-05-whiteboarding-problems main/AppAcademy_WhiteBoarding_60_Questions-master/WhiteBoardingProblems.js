//logBetween

//Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum,
//inclusive. Inclusive means that the range includes lowNum and highNum.

function logBetween(lowNum, highNum) {
  let newArray = [];
  for (let i = lowNum; i <= highNum; i++) {
    newArray.push(i);
  }
  return newArray;
}

logBetween(1, 20);

//logBetweenStepper

//Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters.
//The function should return an array of numbers between min and max at step intervals.

function logBetweenStepper(minNum, maxNum, stepNum) {
  let newArray = [];

  for (let i = minNum; i <= maxNum; i += stepNum) {
    newArray.push(i);
  }
  return newArray;
}

//printReverse

//Write a function printReverse(min, max) that returns an array of all numbers from max
//to min (exclusive), in reverse order.

function printReverse(minNum, maxNum) {
  let newArray = [];

  for (let i = maxNum; i >= minNum; i--) {
    newArray.push(i);
  }
  return newArray;
}

//fizzBuzz

//Define a function fizzBuzz(max) that takes a number and returns an array of every number
//from 0 to max that is divisible by either 3 or 5, but not both.

function fizzBuzz(max) {
  newArray = [];

  for (let i = 0; i <= max; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      newArray.push(i);
    } else {
      continue;
    }
  }
  return newArray;
}

//isPrime

//Define a function isPrime(number) that returns true if number is prime.
//Otherwise, false. Assume number is a positive integer.

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

//maxValue

//Write a function maxValue(array) that returns the largest value in array.
//Assume array is an array of numbers.

function maxValue(array) {
  let largest = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > largest) {
      largest = array[i];
    } else {
      continue;
    }
  }
  return largest;
}

//myIndexOf

//Write a function myIndexOf(array, target) that takes in an array of numbers and
// a target number as arguments. It should return the index value of the target
//if it is present in the array or -1 if it is not present.

function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

//factorArray

//Write a function factorArray(array, number) that takes in an array of numbers
//and a number and returns an array of all the factors.

function factorArray(array, number) {
  return array.filter((el) => number % el === 0);
}

//oddRange

//Write a function oddRange(end) that takes in a number and returns an array
//containing all positive odd numbers up to end.

function oddRange(end) {
  newArray = [];

  if (end === 1) return [];

  for (let i = 0; i < end; i++) {
    if (i % 2 != 0) {
      newArray.push(i);
    } else {
      continue;
    }
  }
  return newArray;
}

//reverseHyphenString

//Write a function reverseHyphenString(string) that takes in a
//hyphenated string and returns the hyphenated string reversed.

function reverseHyphenString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

//intersect

//Write a function intersect(arr1, arr2) that takes in two arrays and returns
// a new array containing the elements common to both arr1 and arr2.

function intersect(arr1, arr2) {
  return arr1.filter((el) => arr2.includes(el));
}

//mirrorArray

//Write a function mirrorArray(array) that takes in an array as an argument
//and returns a new array "mirrored" as shown in the examples:

//mirrorArray([1,2,3]);
// => [ 1, 2, 3, 3, 2, 1 ]
//mirrorArray(['a', 'b', 'c', 'd']);
// => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

function mirrorArray(array) {
  return array.concat(array.slice().reverse());
}

//abbreviate

//Write a function abbreviate(sentence) that takes in a sentence string and returns
//a new sentence where words longer than 4 characters have their vowels removed.
//Assume the sentence has all lowercase characters. Feel free to use the array
//below in your solution: const vowels = ['a', 'e', 'i', 'o', 'u'];

function abbreviate(sentence) {
  newString = '';
  vowels = 'aeiouAEIOU';
  let words = sentence.split(' ');

  console.log(words);

  let abbreviated = words.map((word) => {
    if (word.length <= 4) return word;

    let letters = word.split('');

    let filteredLetters = letters.filter((el) => !vowels.includes(el));
    return filteredLetters.join('');
  });
  let abbreviatedSentence = abbreviated.join(' ');
  return abbreviatedSentence;
}

//adults

//Write a function adults(people) that takes in an array of person objects.
//The function should return an array containing the names of those who have an age of 18 or higher.

function adults(people) {
  let adults = people
    .filter((person) => person.age >= 18)
    .map((person) => person.name);
  console.log(ret);
  return adults;
}

//countScores

//Write a function countScores(people) that takes in an array of score objects, people, as its input.
//A score object, people, has two key-value pairs: a name (string) and a score (number). countScores(people)
//should return an object that has key-value pairs where each name is a key and the value is their total score.

function countScores(people) {
  let result = people.reduce((res, record) => {
    if (!res[record.name]) {
      res[record.name] = record.score;
    } else {
      res[record.name] += record.score;
    }
    return res;
  }, {});
  return result;
}

let ppl = [
  { name: 'Anthony', score: 10 },
  { name: 'Fred', score: 10 },
  { name: 'Anthony', score: -8 },
  { name: 'Winnie', score: 12 },
];

console.log(countScores(ppl));

//firstNPrimes

//Using the isPrime function you made, write a function firstNPrimes(n)
// that returns an array of the first n prime numbers.

function firstNPrimes(n) {
  let newArray = [];
  let i = 2;
  while (newArray.length < n) {
    if (isPrime(i)) {
      newArray.push(i);
      i++;
    } else {
      i++;
    }
  }
  return newArray;
}

console.log(firstNPrimes(12));

//peakFinder

//Write a function peakFinder(array) that takes in an array of numbers. It should return
//an array containing the indices of all the peaks. A peak is an element that is greater
//than both of its neighbors. If it is the first or last element, it is a peak if it is greater
//than its one neighbor. Assume the array has a length of at least 2.

function peakFinder(array) {
  newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] === undefined && array[i + 1] < array[i]) {
      newArray.push(i);
      i++;
    }
    if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
      newArray.push(i);
    }
  }
}

//divisibleByThreePairSum

//Write a function divisibleByThreePairSum(array) that takes an array of numbers.
//It should return an array of all the pairs of indices, whose elements sum to a multiple of three.

//const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
//arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

//const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
//arr2 // => [[1, 3]]

function divisibleByThreePairSum(array) {
  newArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if ((i + j) % 3 === 0) {
        newArray.push([i, j]);
      }
    }
  }
  return newArray;
}

//zipArray

//Write a function zipArray(arr1, arr2) that takes in two arrays
//and "zips" them together by returning a single 2D-array. Assume that both input arrays have the same length.

function zipArray(arr1, arr2) {
  let newArray = arr1.map((el, i) => [el, arr2[i]]);
  console.log(newArray);
  return newArray;
}

zipArray(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]);

//twoDimensionalTotal

//Write a function twoDimensionalTotal(array) that takes in a 2D array of numbers
// and returns the total sum of all elements. Examples:

function twoDimensionalTotal(array) {
  let newArray = array.reduce((accum, tempArray) => {
    accum += tempArray.reduce((acc, el) => (acc += el), 0);
  }, 0);

  return newArray;
}

//countInnerElement

//Write a function countInnerElement(arr) that takes in a 2-D array of elements.
//Each element of arr is a sub array that contains multiple elements. The number of elements
//contained in each sub array are not the same. You can assume each sub array contains at least one element.
//You should return an object that counts how many times each element in each sub array repeats.

function countInnerElement(arr) {
  let sumOfNums = {};

  for (arrays of arr) {
    for (item of arrays) {
      if (sumOfNums[item]) {
        sumOfNums[item] += 1;
      } else {
        sumOfNums[item] = 1;
      }
    }
  }
  return sumOfNums;
}

//twoDiff

//Write a function twoDiff(array), given an array of numbers, return a 2-D array,
//where each of the sub array are indices of the two numbers such that their difference
// is 2. If there are no such numbers, return an empty array.

//NOTE: The pairs are unique. HINT: Account for negative difference too!

function twoDiff(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] - array[j] === 2 || array[i] - array[j] === -2) {
        newArray.push([i, j]);
        console.log(i, j);
      }
    }
  }
  return newArray;
}

let theArray = [1, 2, 4, 6, 10, 11, 19, 12, 14];

//arrayDiff

//Write a function arrayDiff(arr1, arr2) that takes in two arrays. The function should return
//a new array, containing the elements of arr1 that are not also in arr2.

//Note: Assume both arrays have unique elements.

function diffArray(arr1, arr2) {
  var newArr = [];

  for (var i in arr2) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }
  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

//valueCounter

//Write a function valueCounter(obj, val) that takes in an object and a value,
// the function should return the number of times val repeats as a value in obj.

function valueCounter(obj, val) {
  objCount = Object.values(obj).filter((el) => el === val).length;
  console.log(objCount);
  return objCount;
}

//elementCount

//Write a function elementCount(array) that returns an object. Each key corresponds to
//an element in the array and the value corresponds to how many times that element appears in the array.

function elementCount(array) {
  newObj = {};

  for (item of array) {
    if (item in newObj) {
      newObj[item] += 1;
    } else {
      newObj[item] = 1;
    }
  }
  return newObj;
}

//nextTwoPrimes

//Write a function nextTwoPrimes(num) that takes in a number num
//and returns the next two prime numbers greater than num.

function nextTwoPrimes(num) {
  newArray = [];

  for (let i = num + 1; i < num * 10; i++) {
    if (newArray.length >= 2) {
      return newArray;
    } else {
      if (isPrime(i)) {
        newArray.push(i);
      }
    }
  }
  return newArray;
}
console.log(nextTwoPrimes(10));

//pairProduct

//Write a function pairProduct(arr, num) that accepts an array of
//numbers, arr, and a target number, num. It should return pairs of
//indices whose elements multiply to num. No pair should appear twice in the result.

//CONSTRAINT: Use only while loops. No for loops. <----- :'(

//function pairProduct(arr, num) {
//}
//let theArrayy = [1,2,3,4,5,6,7,8];
//pairProduct(theArrayy, 6)

//twoDimensionalSize

//Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument.
//The function should return the total number of elements in the 2D-array.

function twoDimensionalSize(array) {
  numOfElements = 0;

  for (arrays of array) {
    for (item of arrays) {
      numOfElements++;
    }
  }
  console.log(numOfElements);
  return numOfElements;
}

const arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

twoDimensionalSize(arr1);

//longWordCount

//Write a function longWordCount(string) that takes in a string
//and returns the number of words longer than 7 characters.

function longWordCount(string) {
  let words = string.split(' ');
  let wordCount = 0;

  console.log(words);

  for (word of words) {
    if (word.length > 7) {
      wordCount++;
    } else {
      continue;
    }
  }
  console.log(wordCount);
  return wordCount;
}

longWordCount('two reallylong words inthisstring'); // => 2
longWordCount('allwordword longwordword wordswordword'); // => 3

//factorial

//Write a function factorial(n), that returns the factorial of the number n.
//For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.

function factorial(num) {
  let result = num <= 1 ? 1 : num * factorial(num - 1);
  return result;
}

factorial(4);

//Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both num1 and num2.

const lcm = (num1, num2) => {
  let hcf;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      hcf = i;
    }
  }
  let lcm = (num1 * num2) / hcf;
  console.log(lcm);
  return lcm;
};

lcm(2, 3); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312

//hipsterfyWord

//Write a function hipsterfyWord(word) that takes takes in a string and returns the string
// with the last vowel removed. 'y' is not a vowel.

function hipsterfyWord(word) {
  let newWord = '';
  let vowels = 'aeiouAEIOU';

  for (let i = word.length - 1; i > 0; i--) {
    if (vowels.includes(word[i])) {
      newWord = word.slice(0, i) + word.slice(i + 1, word.length);
    } else {
      continue;
    }
    return newWord;
  }
}

hipsterfyWord('proper'); // => 'propr'
hipsterfyWord('tonic'); // => 'tonc'
console.log('---------------------------');

//hipsterfy

//Write a function hipsterfy(sentence) that takes takes a string containing
// several words as input. Remove the last vowel from each word. 'y' is not a vowel.

function hipsterfy(sentence) {
  words = sentence.split(' ');
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    newWords.push(hipsterfyWord(words[i]));
  }
  console.log(newWords.join(' '));
}

hipsterfy('runner anaconda'); // => "runnr anacond"
hipsterfy('turtle cheeseburger fries'); // => "turtl cheeseburgr fris"

//objectToString

//Write a function objectToString(count) that takes in a char count object
// and returns a string representing the counts of each character.

function objectToString(count) {
  let newString = '';
  for (const key in count) {
    let value = count[key];
    newString += key.repeat(value);
  }
  console.log(newString);
  return newString;
}

objectToString({ a: 2, b: 4, c: 1 }); // => 'aabbbbc'
objectToString({ b: 1, o: 2, t: 1 }); // => 'boot'

//shortestWord

//Write a function shortestWord(sentence) that returns the shortest word
//of a sentence. You can assume that the words of the sentence all have different lengths.

function shortestWord(str) {
  var words = str.split(' ');
  var shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length
      ? currentWord
      : shortestWord;
  }, words[0]);
  console.log(words);
  console.log(shortest);
  return shortest;
}

shortestWord('app academy is cool'); // => 'is'
shortestWord('programming bootcamp'); // => 'bootcamp'

greatestCommonFactor;

//Write a function greatestCommonFactor(num1, num2) that returns
//the largest number that is divided by both num1 and num2.

function greatestCommonFactor(a, b) {
  if (b === 0) {
    return a;
  } else {
    return greatestCommonFactor(b, a % b);
  }
}

//Tests:

greatestCommonFactor(15, 25); // => 5
greatestCommonFactor(16, 24); // => 8
greatestCommonFactor(7, 11); // => 1

//isPassing

//Write a function isPassing(assessments) that takes in an array of assessment
// objects. The function should return true if the average assessment score is at
// least 70. It should return false otherwise.

function isPassing(assessments) {
  vals = assessments.reduce((sum, el) => sum + el.score, 0);
  scoreAv = vals / assessments.length >= 70;
  console.log(scoreAv);
  return scoreAv;
}

const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 },
];
isPassing(assessments1); // => true

//valueConcat

//Write a function valueConcat(array, obj) that takes in an array and object
//The function should return a new array where each element is concatenated
// with it's corresponding value from the object.

function valueConcat(array, obj) {
  let ret = array.slice();

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (el in obj) ret[i] += obj[el];
  }
  console.log(ret);
  return ret;
}

valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }); // => [ 'a', 'b2', 'c3' ]

//threeInARow

//Write a function threeInARow(arr) that takes in an array of numbers and
//returns true if the array contains 3 of the same number consecutively.
//The function should return false otherwise.

function threeInARow(arr) {
  for (let i = 1; i < arr.length - 2; i++) {
    if (arr[i] === arr[i - 1] && arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
}

//Tests:

threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
threeInARow([10, 9, 20, 33, 3, 3]); // => false;

console.log('-----------------------------------------');
//variableNameify

//Write a function variableNameify(words) that takes in an array of words.
//The function should return a string representing the variable name obtained
//by combining the words and captitalizing them in mixCased style.

const variableNameify = (words) =>
  words
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');

//Tests:

variableNameify(['is', 'prime']); // => 'isPrime'
variableNameify(['remove', 'last', 'vowel']); // => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']); // => 'maxValue'

//threeIncreasing

//Write a function threeIncreasing(arr) that takes in an array of numbers and returns
//true if the array contains 3 consecutive numbers in increasing order. The function should
//return false otherwise. Note that the 3 consecutive numbers should be increasing by 1,
//so the the second number is 1 greater than the first, and the third number is 1 greater than the second.

function threeIncreasing(arr) {
  for (let i = 1; i < arr.length - 2; i++) {
    if (arr[i] - arr[i - 1] === 1 && arr[i + 1] - arr[i] === 1) {
      return true;
    }
  }
  return false;
}

threeIncreasing([3, 2, 11, 12, 13, 2, 4]); // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]); // => false

//reverse2D

//Write a function reverse2D(array) that takes in a 2D array of strings.
//The function should return a string representing the elements of the array in reverse order.

function reverse2D(array) {
  newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = array[i].length - 1; j >= 0; j--) {
      newArray.push(array[i][j]);
    }
  }
  return newArray.join('');
}

//Tests:

const arr11 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i'],
];

console.log(reverse2D(arr11)); // => 'ihgfedcba'

//reverb

//Write a function reverb(word) that takes in a word string and returns
//the word with all characters after the last vowel repeated.

function reverb(word) {
  vowels = 'aeiouAEIOU';

  for (let i = word.length - 1; i > 0; i--) {
    if (vowels.includes(word[i])) {
      return word + word.slice(i);
    }
  }
  return word;
}

//Tests:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'

//countRepeats

//Write a function countRepeats(string) that takes in a string and returns the
//number of letters that appear more than once in the string. You may assume the
//string contains only lowercase letters. Count the number of letters that repeat,
//not the number of times they repeat in the string.

function countRepeats(str) {
  var obj = {};
  let count = 0;

  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) {
        obj[str[i]] += obj[str[i]];
      } else {
        obj[str[i]] = 1;
      }
    }
  }

  for (key in obj) {
    if (obj[key] >= 2) {
      count++;
    }
  }
  console.log(count);
  return count;
}

//Tests:

countRepeats('calvin'); // => 0
countRepeats('caaaalvin'); // => 1
countRepeats('pops'); // => 1

//pairsToString

//Write a function pairsToString(arr) that takes in an array of pairs.
//The function should return a string corresponding to the pairs.

function pairsToString(arr) {
  newString = '';

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) {
      let counter = arr[i][j + 1];
      while (counter > 0) {
        newString += arr[i][j];
        counter--;
      }
    }
  }
  console.log(newString);
  return newString;
}

//Tests:

const array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2],
];
pairsToString(array1); // => 'aaabcc'

//countAdjacentSums

//Write the function countAdjacentSums(arr, n) that takes an array and number.
//It should count the number of times that two adjacent numbers in an array add up to n.

function countAdjacentSums(arr, n) {
  let count = 0;

  for (let i = 0; i < arr.length + 1; i++) {
    if (arr[i] + arr[i + 1] === n) {
      count++;
    }
  }
  return count;
}

//Tests:

countAdjacentSums([1, 5, 1], 6); // => 2
countAdjacentSums([7, 2, 4, 6], 7); // => 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13); // => 3

//signFlipCount

//Write a function signFlipCount(nums) that takes in an array of numbers as arguments.
//The function should return the number of times adjacent numbers in the array switch signs
//from positive to negative or vice versa. The number 0 is neither positive nor negative.

function signFlipCount(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] > 0 && arr[i + 1] < 0) || (arr[i] < 0 && arr[i + 1] > 0)) {
      count++;
    }
  }
  return count;
}

//tests:

signFlipCount([5, 6, 10, 3]); // => 0
signFlipCount([-12, 0, -3, -5]); // => 0
signFlipCount([-12, 10, -3, -5]); // => 2

//powerSequence

//Write a function powerSequence(base, length) that takes in two numbers,
//base and length. The function should return an array containing a power
//sequence with the given length. Assume that the length is at least 1.

//The first number of a power sequence begins with base. The second number
//of the sequence is the product between the first number and the base.
//The third number of the sequence is the product between the second number and the base...

function powerSequence(base, length) {
  let newArray = [base];

  for (let i = 0; i < length - 1; i++) {
    newArray.push(base * newArray[i]);
  }
  console.log(newArray);
  return newArray;
}

//Tests:

powerSequence(3, 4); // => [ 3, 9, 27, 81 ]
powerSequence(2, 6); // => [ 2, 4, 8, 16, 32, 64 ]

//collapseString

//Write a function collapseString(str) that takes in a string as an argument.
//The function should return the string where 'streaks' of consecutive characters
//are collapsed to a single character.

//Hint: use the keyword continue

function collapseString(str) {
  newString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      continue;
    } else {
      newString += str[i];
    }
  }
  console.log(newString);
  return newString;
}

//Tests:

collapseString('apple'); // => 'aple'
collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
console.log('**************************************************');

//oddWordsOut

//Write a function oddWordsOut(sentence) that takes in a sentence string and returns
//the sentence where words with an odd number of characters are removed.

function oddWordsOut(sentence) {
  words = sentence.split(' ');
  newWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 != 0) {
      continue;
    } else {
      newWords.push(words[i]);
    }
  }
  console.log(newWords.join(' '));
  return newWords.join(' ');
}

//Tests:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'

//mindPsAndQs

//Write a function mindPsAndQs(str) that accepts a string of uppercase letters.
//The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'.

//Hint: Use two variables. One to track the length of the current streak and another
//to track the length of the longest streak so far. Think of using a strategy similar to maxValue.
//This can also be solved using a single loop!

//Nested loops not needed!

function mindPsAndQs(str) {
  let longest = 0;
  let curr = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === 'P' || str[i] === 'Q') {
      curr++;
    } else if (curr > longest) {
      longest = curr;
      curr = 0;
    }
  }

  console.log('END');
  console.log('Longest: ' + longest);
  return longest;
}

//Tests:

mindPsAndQs('BOOTCAMP'); // => 1
mindPsAndQs('APCDQQPPC'); // => 4
mindPsAndQs('PQPQ'); // => 4
mindPsAndQs('PPPXQPPPQ'); // => 5

//commonPrimeFactors

//Write a function commonPrimeFactors(num1, num2) that takes in two numbers
//as arguments and returns an array of all prime factors that are common between
//the two numbers. A factor is a number that divides another number without resulting in a remainder.

function commonFactors(num1, num2) {
  let newArray = [];

  for (let i = 2; i <= num1; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      newArray.push(i);
    }
  }
  return newArray;
}

//Tests:

commonFactors(12, 50); // => [ 1, 2 ]
commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
commonFactors(11, 22); // => [ 1, 11 ]
commonFactors(45, 60); // => [ 1, 3, 5, 15 ]

//commonPrimeFactors

//Write a function commonPrimeFactors(num1, num2) that takes in two numbers
//as arguments and returns an array of all prime factors that are common between
//the two numbers. A factor is a number that divides another number without resulting in a remainder.

function commonPrimeFactors(num1, num2) {
  newArray = [];

  for (let i = 2; i <= num1; i++) {
    if (isPrime(i) === true && num1 % i === 0 && num2 % i === 0) {
      newArray.push(i);
    }
  }
  console.log(newArray);
  return newArray;
}

//Tests:

commonPrimeFactors(12, 50); // => [ 2 ]
commonPrimeFactors(6, 24); // => [ 2, 3 ]
commonPrimeFactors(11, 22); // => [ 11 ]
commonPrimeFactors(45, 60); // => [ 3, 5 ]

//splitHalfArray

//Write a function splitHalfArray(array) that takes in an array as an argument and
//returns two halves of that array split in the middle. If the array has an odd number of elements,
//then the middle element should be excluded.

function splitHalfArray(array) {
  let newArray = [];

  if (array.length % 2 != 0) {
    newArray.push(
      array.slice(0, array.length / 2),
      array.slice(array.length / 2 + 1)
    );
  } else {
    newArray.push(
      array.slice(0, array.length / 2),
      array.slice(array.length / 2)
    );
  }
  return newArray;
}

//Tests:
splitHalfArray([1, 2, 3, 4, 5]); // => [ [ 1, 2 ], [ 4, 5 ] ]
splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']); // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

//threeUniqueVowels

//Write a function threeUniqueVowels(string) that takes in a string and returns
//true if the string contains at least three different vowels.

function threeUniqueVowels(string) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  countObj = {};

  for (let i = 0; i < string.length; i++) {
    if (VOWELS.includes(string[i]) && countObj[string[i]]) {
      countObj[string[i]] += 1;
    } else if (VOWELS.includes(string[i]) && !countObj[string[i]]) {
      countObj[string[i]] = 1;
    }
    if (Object.keys(countObj).length >= 3) {
      console.log(true);
      return true;
    }
  }

  console.log(false);
  return false;
}

//Tests:

threeUniqueVowels('delicious'); // => true
threeUniqueVowels('the bootcamp'); // => true
threeUniqueVowels('bootcamp'); // => false

//vowelShift

//Write a function vowelShift(sentence) that takes in a sentence string.
//The function should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.
console.log('******************************');

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const isVowel = (char) => VOWELS.includes(char);

const nextVowel = (char) => {
  const currentIndex = VOWELS.indexOf(char);
  const nextIndex = currentIndex < 4 ? currentIndex + 1 : 0;
  return VOWELS[nextIndex];
};

const vowelShift = (sentence) => {
  const shifted = sentence
    .split('')
    .map((letter) => (isVowel(letter) ? nextVowel(letter) : letter))
    .join('');
  console.log(shifted);
  return shifted;
};

//Tests:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'

//hasSymmetry

//Write a function hasSymmetry(array) that takes in an array. The function should return
//true if the array has symmetry, false otherwise. For an array to have symmetry,
//it should be the same forwards and backwards.

//TIP: In JavaScript, it is not possible to compare arrays for equality with ===.
//In other words, [1, 2, 3] === [1, 2, 3] evaluates to false.

function hasSymmetry(array) {
  let i = 0;
  let j = array.length - 1;

  while (i < 3) {
    if (array[i] === array[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

//Tests:

hasSymmetry([1, 2, 3, 3, 2, 1]); // => true
hasSymmetry([1, 2, 3, 3, 4, 1]); // => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']); // => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']); // => false

console.log(
  '-----------------------------------------------------------------'
);
//evenSumArray

//Write a function evenSumArray(array) that takes in an array of numbers
//and returns a new array where each num is replaced with the sum of all
//even numbers less than or equal to that num.

//Tests:

//evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
//evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]

//numsToWords

//Write a function numsToWords(numString) that takes in a string representing a number.
//The function should return a new string where each digit character is replaced with
//it's "word" representation. Assume the input string only contains numeric characters.

var ones = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function numsToWords(num) {
  newString = '';

  for (let i = 0; i < num.length; i++) {
    newString += ones[num[i]];
  }
  console.log(newString);
  return newString;
}

//Tests:

numsToWords('42'); // => 'FourTwo'
numsToWords('123'); // => 'OneTwoThree'
numsToWords('159598'); // => 'OneFiveNineFiveNineEight'

//moreDotLessDash

//Write a function moreDotLessDash(str) that takes in a string and returns
//the true if the string contains more dots ('.') than dashes ('-'), false otherwise.

function moreDotLessDash(str) {
  let dots = 0;
  let dashes = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.') {
      dots++;
    } else if (str[i] === '-') {
      dashes++;
    }
  }
  if (dots > dashes) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}

//Tests:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
