const [addNums, addManyNums] = require('./phase-1');

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Fill this in
  const result = [];
  let index = 1;
  for (let i = increment; index <= 10; i += increment) {
    // console.time(`addNums timer ${i}`);
    // console.timeLog(`addNums timer ${i}`);
    const startTime = Date.now();
    result.push(addNums(i));
    const endTime = Date.now();
    console.log(endTime - startTime);
    // console.timeEnd(`addNums timer ${i}`)

    index++;
  }

  return result;
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Fill this in
  const result = [];
  let index = 1;
  for (let i = increment; index <= 10; i += increment) {
    // console.time(`addManyNums timer ${i}`);
    // console.timeLog(`addManyNums timer ${i}`);
    const startTime = Date.now();
    result.push(addManyNums(i));
    const endTime = Date.now();
    console.log(endTime - startTime);
    // console.timeEnd(`addManyNums timer ${i}`);
  }

  return result;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log('\n***********\n');

n = 5000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
