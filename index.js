// dependencies
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
// const Algo = require("./algo");

// const manager = require("./lib/Manager");
// const engineer = require("./lib/Engineer");
// const intern = require("./lib/Intern");

const genHTML = require("./createHTML")
function employeeGeneral() {
// questions asked to user
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What the name of the employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What the ID of the employee?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What the email of the employee?',
        },
        {
            type: 'checkbox',
            name: 'role',
            message: 'What the role of the employee?',
            choices: [
                {
                    name: 'Manager',
                },
                {
                    name: 'Engineer',
                },
                {
                    name: 'Intern',
                },
            ],
        },

    ])
    // calls function
     .then(getRole)
}
    // function to decide what next prompts will be based on employee type being entered
   
function getRole(userInput) {

    let employeeRole = userInput.role
    console.log(employeeRole)
    if (employeeRole == "Manager") {
         manager(userInput, employeeRole)

    } else if
        (employeeRole == "Engineer") {
         engineer(userInput, employeeRole)

    } else {
        (employeeRole == "Intern")
         intern(userInput, employeeRole)
    }
}
function manager(userInput, employeeRole) {
    inquirer
        // questions ask about manager
        .prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What the office number of the manager?',
            },
            {
                type: 'checkbox',
                name: 'another',
                message: 'Do you want to add another employee?',
                choices: [
                    {
                        name: 'Yes',
                    },
                    {
                        name: 'No',
                    },
                ],
            },
        ])
         // .then(createPage)
}
// questions ask about intern
function intern(userInput) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What the school of this intern?',
            },
            {
                type: 'checkbox',
                name: 'another',
                message: 'Do you want to add another employee?',
                choices: [
                    {
                        name: 'Yes',
                    },
                    {
                        name: 'No',
                    },
                ],
            },
        ])
        // .then(createPage)
}
// questions ask about engineer 
function engineer(userInput) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'gitHub',
                message: 'What the GitHub username of this engineer?',
            },
            {
                type: 'checkbox',
                name: 'another',
                message: 'Do you want to add another employee?',
                choices: [
                    {
                        name: 'Yes',
                    },
                    {
                        name: 'No',
                    },
                ],
            },
        ])
        // .then(createPage)
}
// function if user chooses to add another employee
function anotherEmployee()