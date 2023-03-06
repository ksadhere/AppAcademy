function addNums(n) {
  total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

// startTime = Date.now();
// addNums(1000000);
// endTime = Date.now();

// console.log(startTime); // 1608078573750
// console.log(endTime); // 1608078573765

let increment = 1000000;
for (let n = increment; n <= 10 * increment; n += increment) {
  startTime = Date.now();
  addNums(n);
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
