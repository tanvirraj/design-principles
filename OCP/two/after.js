class Associate {
  constructor(name) {
    this.name = name;
    this.hoursMultiplier = 200;
  }
}

// class Cordinator {
//   constructor(name) {
//     this.name = name;
//     this.hoursMultiplier = 400;
//   }
// }

class Manager {
  constructor(name) {
    this.name = name;
    this.hoursMultiplier = 800;
  }
}

class WageCalculator {
  constructor(hoursWorked, bonus, employee) {
    this.hoursWorked = hoursWorked;
    this.bonus = bonus;
    this.employee = employee;
  }

  wage() {
    const wage = 10 * this.bonus;
    return wage + this.employee.hoursMultiplier * this.hoursWorked;
  }

  wageReport() {
    return `The wage for ${this.employee.name} is KES ${this.wage()}`;
  }
}

const allan = new Associate("Allan");
const allanWage = new WageCalculator(100, 50, allan);

const peter = new Manager("Peter");
const peterWage = new WageCalculator(100, 50, peter);

console.log(allanWage.wageReport());
console.log(peterWage.wageReport());
