const Employee = require("./Employee")

class Intern {
  constructor(name, email, id, school) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

  showItWorks() {
    console.log("works")
}
}

// const intern = new Intern(name, email, id, gitHub, "Intern")

module.exports = Intern