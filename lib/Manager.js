const Employee = require("./Employee")

class Manager {
  constructor(name, email, id, officeNumber) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

  showItWorks() {
      console.log("works")
  }
}

// const manager = new Manager(name, email, id, gitHub, "Manager")

module.exports = Manager