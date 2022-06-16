const Engineer = require("./Engineer")
const Intern = require("./Intern")
const Manager = require("./Manager")

class Employee {
    constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
}

getname() {
    return this.name
}

getId() {
    return this.id
}

getEmail() {
    return this.email
}

getRole() {
    return this.role
}
}

module.exports = Employee

