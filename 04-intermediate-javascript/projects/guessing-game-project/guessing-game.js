const readline = require('readline');

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Return a random integer between min and max (inclusive).
 * @param min - The minimum number (inclusive)
 * @param max - The maximum number that can be returned.
 * @returns A random number between min and max
 */
const randomInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
};

/**
 * Ask the user for a maximum limit for guessing, then ask the user for a minimum and maximum number,
 * then ask the user for a guess, then check the guess, then ask the user for a guess again if the
 * guess is wrong, then ask the user for a guess again if the guess is wrong and the limit is not 0,
 * then tell the user they lose if the limit is 0.
 */
const askLimit = () => {
  rl.question('Enter a maximum limit for guessing: ', (answer) => {
    const limit = Number(answer);
    console.log(`You have a guessing limit of ${limit}`);
    askRange(limit);
  });
};

/**
 * It asks the user for a minimum and maximum number, then asks the user to guess a number between
 * those two numbers
 * @param limit - the number of guesses the user has
 */
const askRange = (limit) => {
  rl.question('Enter a minimum number: ', (answer) => {
    const minNumber = Number(answer);
    rl.question('Enter a maximum number: ', (answer) => {
      const maxNumber = Number(answer);
      console.log(
        `I'm thinking of a number between ${minNumber} and ${maxNumber}`
      );
      const secretNumber = randomInRange(minNumber, maxNumber);
      askGuess(secretNumber, limit);
    });
  });
};

/**
 * It asks the user for a guess, checks if the guess is correct, and if not, asks the user for another
 * guess
 * @param secretNumber - the number the user is trying to guess
 * @param limit - the number of guesses the user has left
 */
const askGuess = (secretNumber, limit) => {
  rl.question('Enter a guess:', (answer) => {
    const guessedNumber = Number(answer);
    if (checkGuess(guessedNumber, secretNumber) === true) {
      console.log('You win!');
      rl.close();
    } else {
      limit--;
      if (limit === 0) {
        console.log('You lose!');
        rl.close();
      } else {
        askGuess(secretNumber, limit);
      }
    }
  });
};

/**
 * It takes in a number and a secret number, and returns true if the number is the secret number, and
 * false otherwise
 * @param num - the number the user guessed
 * @param secretNumber - the number that the user is trying to guess
 * @returns A boolean value.
 */
const checkGuess = (num, secretNumber) => {
  if (num > secretNumber) {
    console.log('Too high');
    return false;
  } else if (num < secretNumber) {
    console.log('Too low');
    return false;
  } else {
    console.log('Correct');
    return true;
  }
};

askLimit();
