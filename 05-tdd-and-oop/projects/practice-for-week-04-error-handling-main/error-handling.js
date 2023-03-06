// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`${error.name} : ${error.message}`, error.getFileName);
  } else if (error instanceof RangeError) {
    console.error('RangeError');
  } else if (error instanceof SyntaxError) {
    console.error('SyntaxError');
  }
} finally {
  console.log('No other errors');
}

// 2.
sayName = (name) => {
  if (typeof name !== 'string')
    throw new TypeError('Invalid name! Must be a string!');
  else console.log(name);
};

try {
  sayName('Alex');
  sayName(1);
} catch (error) {
  console.log(error.name + ' : ' + error.message);
}
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error('There was no greeting given.');
  }

  console.log(greeting);
}

try {
  greet();
} catch (error) {
  console.log('Hello World!');
}
