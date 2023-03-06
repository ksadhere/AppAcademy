// Your code here
const Employee = require('./employee');

const employee = new Employee('John Wick', 'Dog Lover');

setTimeout(employee.sayName.bind(employee), 2000);

setTimeout(employee.sayOccupation.bind(employee), 3000);
