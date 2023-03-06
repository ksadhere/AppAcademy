function returnsThree() {
  // Your code here
  return 3;
}

const reciprocal = (n) => {
  if (n < 1 || n > 1000000)
    throw new TypeError('Number cannot be less than 1 or greater than 1000000');
  else return 1 / n;
};

module.exports = {
  returnsThree,
  reciprocal,
};
