// Your code here
const Calculator = require('./02-calculator');

class FancyCalculator extends Calculator {
  constructor(total) {
    super(total);
  }

  setTotal = (newTotal) => (this.total = newTotal);

  modulo = (num) => (this.total = this.total % num);

  squared = (num) => (this.total *= this.total);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = FancyCalculator;
} catch {
  module.exports = null;
}
