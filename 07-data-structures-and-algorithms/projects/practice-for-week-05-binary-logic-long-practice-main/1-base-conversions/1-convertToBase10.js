// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = (str) => {
  // Your code here
  if (str[1] === 'b') {
    /**
     * It takes a string of 1's and 0's and returns the base 10 equivalent
     * @param str - the string to convert
     * @returns The total number of the binary number.
     */
    let total = 0;
    for (let i = str.length - 1, count = 0; i > 1; i--, count++) {
      total += 2 ** count * str[i];
    }
    return total;
  } else if (str[1] === 'x') {
    return Number(str);
  }
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
