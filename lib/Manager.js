const Employee = require("./Employee")

class Manager extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

const manager = new Manager(name, email, id, gitHub, "Manager")

module.exports = Manager