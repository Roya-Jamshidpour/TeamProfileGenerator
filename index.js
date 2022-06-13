// dependencies
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
// const Algo = require("./algo");

const managerRole = require("./lib/Manager");
const engineerRole = require("./lib/Engineer");
const internRole = require("./lib/Intern");

const genHTML = require("./dist/generateHTML")

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
            name: 'Role',
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

                // getRole(userInput => {

                // if (Role.userInput === "Manager")
                // return manager(userInput)

                // if (Role.userInput === "Engineer")
                // return engineer(userInput)

                // if (Role.userInput === "Intern")
                // return intern(userInput)
                //  }
                // )
                 



                 
                

                 
            
        