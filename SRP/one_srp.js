class Employee {
  constructor(name, hourlyRate) {
    this.name = name;
    this.bill = new TimeSheetReport(hourlyRate);
  }

  userName() {
    return `eM-${this.name}`;
  }

  set userName(newName) {
    this.name = newName.split(", ");
  }

  // instead of calculatin repot in same class, i make
  // seperate class for bill calculation
  getTimeSheetReport() {
    const weeklyBill = this.bill.getWeeklyBill();
    const monthlyBill = this.bill.getMonthlyBill();
    return { weeklyBill, monthlyBill };
  }
}

class TimeSheetReport {
  constructor(perHourValue) {
    this.perHourValue = perHourValue;
  }

  getWeeklyBill() {
    return this.perHourValue * 40;
  }

  getMonthlyBill() {
    return this.perHourValue * 160;
  }
}

const tanvir = new Employee("Tanvir Raj", 40);

console.log(tanvir.userName());
console.log(tanvir.getTimeSheetReport());
