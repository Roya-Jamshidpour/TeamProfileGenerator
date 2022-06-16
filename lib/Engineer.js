const Employee = require("./Employee")

class Engineer {
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

  showItWorks() {
    console.log("works")
}
}


module.exports = Engineer