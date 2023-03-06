function myMap(inputArray, callback) {
  let result = [];
  for (let i = 0; i < inputArray.length; i++) {
    result.push(callback(inputArray[i]));
  }
  return result;
}

module.exports = myMap;
module.exports = myMap;
