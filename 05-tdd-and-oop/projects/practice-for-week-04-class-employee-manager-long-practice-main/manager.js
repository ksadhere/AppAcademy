const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, salary, title, manager, employees = []) {
    super(name, salary, title, manager);
    this.employees = employees;
  }

  addEmployee(employee) {
    return this.employees.push(employee);
  }

  _totalSubSalary() {
    return this.employees.reduce((sum, employee) => {
      if (employee instanceof Manager) {
        sum += employee.salary + employee._totalSubSalary();
      } else {
        sum += employee.salary;
      }
      return sum;
    }, 0);
  }

  calculateBonus(multiplier) {
    let bonus = (this.salary + this._totalSubSalary()) * multiplier;
    return bonus;
  }
}

module.exports = Manager;
