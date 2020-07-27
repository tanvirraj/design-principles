class Car {
  constructor(name, color, dailyExpense) {
    this.name = name;
    this.color = color;
    this.dailyExpense = dailyExpense;
  }

  getMonthlyExpense() {
    return this.dailyExpense * 30;
  }
}

const toyta = new Car("toyta", "red", 20);
console.log(toyta);
console.log(toyta.getMonthlyExpense());
// process.stdout.write(toyta);
