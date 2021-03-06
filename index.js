// dependencies
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const createPage = require('./createHTML')
// const Algo = require("./algo");

const info = []

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// questions asked to user about employee
function employeeQ() {
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
            type: 'list',
            name: 'role',
            message: 'What the role of the employee?',
            choices: [ "Manager", "Engineer", "Intern"]
        },

    ])  
   .then(userInput => {
        switch(userInput.role) {
            case "Engineer" :
                engineer()
                break;
                case "Intern" :
                    intern()
                    break;
                    case "Manager" :
                        manager()
                        break;
                        default : employeeQ()
        }
   })
}

function manager(name, id, email) {
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
        .then(answers => {
            const managerObj = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            info.push(managerObj)
            if (answers.another === "No"){
                return;
            } else {
                employeeQ()
        }
        })
    }

// // questions ask about intern
function intern(name, id, email) {
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
        .then(answers => {
            const internObj = new Intern(answers.name, answers.id, answers.email, answers.school)
            info.push(internObj)
            if (answers.another === "No"){
                return;
            } else {
                employeeQ()

         }
        })                   
}
// // questions ask about engineer 
function engineer(name, id, email) {
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
        .then(answers => {
            const engineerObj = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
            info.push(engineerObj)
            if (answers.another === "No"){
                // this doesn't work
                return console.log("No more employees to enter");
            } else {
                employeeQ()

         }
        })    
    
}

// calls initial function
employeeQ()
