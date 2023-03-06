// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
/**
 * It takes a binary string and returns an array of 8-bit binary strings
 * @param str - The string to be converted to an array of binary numbers.
 * @returns An array of binary strings.
 */
const binaryStringToArray = (str) => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }

  return binary8bitStr.split(',');
};

/**
 * It takes a string of binary numbers, converts them to decimal numbers, and then converts those
 * decimal numbers to ASCII characters
 * @param str - a string of binary numbers
 * @returns the number of times the letter 'a' appears in the string.
 */
const binaryToAscii = (str) => {
  // Your code here
  let result = '';
  let arr = binaryStringToArray(str);
  for (let i = 0; i < arr.length; i++) {
    result += String.fromCharCode(parseInt(arr[i], 2));
  }
  return result;
};

/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(
  binaryToAscii(
    '010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'
  )
);
// 'Hello, world'
