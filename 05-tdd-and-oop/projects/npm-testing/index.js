// const colors = require('colors');
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red); // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass

// Use the `require()` function to import the `classes` module.
// const classes = require('./classes');

// // Declare variables for each of the properties
// // defined on the `classes` object.
// const Book = classes.Book;
// const Movie = classes.Movie;

const { Book, Movie } = require('./classes');

const theGrapesOfWrath = new Book(
  'The Grapes of Wrath',
  null,
  'John Steinbeck'
);
const aNewHope = new Movie(
  'Episode 4: A New Hope',
  'Star Wars',
  'George Lucas'
);

console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath
console.log(aNewHope.getInformation()); // Episode 4: A New Hope (Star Wars) [directed by George Lucas]
