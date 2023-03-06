module.exports = function reverseString(string) {
  // Your code here
  let reversed = [];
  string.split('').forEach((el) => reversed.unshift(el));
  return reversed.join('');
};
