function compare(a, b, cb) {
  if (a > b) {
    return cb(a);
  } else {
    return cb(b);
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  const result = (bigNum) => {
    return bigNum * 2;
  };
  return compare(num1, num2, result);
}

function divideBiggerNumByThree(num1, num2) {
  const result = (bigNum) => {
    return bigNum / 3;
  };
  return compare(num1, num2, result);
}

function eatMostTacos(sum1, sum2) {
  const result = (bigNum) => {
    return `I ate ${bigNum} tacos.`;
  };
  return compare(sum1, sum2, result);
}

function adoptSmallerDog(weight1, weight2) {
  const result = (smallDog) => {
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  };
  if (weight1 < weight2) {
    smallDog = weight1;
    return result(smallDog);
  } else {
    smallDog = weight2;
    return result(smallDog);
  }
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
