const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(name, email, id, gitHub) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.gitHub = gitHub;
  }

  getGithub() {
    return this.gitHub;
  }

  getRole() {
    return "Engineer";
  }
}

const engineer = new Engineer(name, email, id, gitHub, "Engineer")

module.exports = Engineer