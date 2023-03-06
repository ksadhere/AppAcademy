const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

/**
 * It takes a string and returns a string of 1s and 0s
 * @param str - the string to be converted
 * @returns A string of binary numbers
 */
const asciiTo8bit = (str) => {
  // Your code here
  let num = [];
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str.charCodeAt(i);
    num.unshift(addZeros(char.toString(2), 8));
  }
  return num.join('');
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
