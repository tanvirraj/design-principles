class WageCalculator {
  constructor(hoursWorked, bonus, name, employeeType = "associate") {
    this.employeeType = employeeType;
    this.hoursWorked = hoursWorked;
    this.bonus = bonus;
    this.name = name;
  }

  wage() {
    let wage = 10 * this.bonus;
    if (this.employeeType === "associate") {
      wage += 200 * this.hoursWorked;
    } else if (this.employeeType === "cordinator") {
      wage += 400 * this.hoursWorked;
    } else {
      wage += 800 * this.hoursWorked;
    }
    return wage;
  }

  wageReport() {
    return `The wage for ${this.name} is KES ${this.wage()}`;
  }
}

const allanWage = new WageCalculator(100, 50, "Allan");
const peterWage = new WageCalculator(100, 50, "Peter", "manager");
console.log(allanWage.wageReport());
console.log(peterWage.wageReport());
