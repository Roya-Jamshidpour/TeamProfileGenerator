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
// function intern(userInput) {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'school',
//                 message: 'What the school of this intern?',
//             },
//             {
//                 type: 'checkbox',
//                 name: 'another',
//                 message: 'Do you want to add another employee?',
//                 choices: [
//                     {
//                         name: 'Yes',
//                     },
//                     {
//                         name: 'No',
//                     },
//                 ],
//             },
//         ])
//         .then(anotherEmployee)
// }
// // questions ask about engineer 
// function engineer(userInput) {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'gitHub',
//                 message: 'What the GitHub username of this engineer?',
//             },
//             {
//                 type: 'checkbox',
//                 name: 'another',
//                 message: 'Do you want to add another employee?',
//                 choices: [
//                     {
//                         name: 'Yes',
//                     },
//                     {
//                         name: 'No',
//                     },
//                 ],
//             },
//         ])

//         anotherEmployee(userInput) 
    
// }
    
// // // function if user chooses to add another employee
// function anotherEmployee(userInput) {
//     if (userInput.another === 'Yes') {
   
//     employeeQ()

//     } else {
//     // forwardInfo(userInput, employeeRole)
//     console.log('said no')
// }
// }

// function forwardInfo(userInput, employeeRole) {
    
//     console.log(userInput, employeeRole)
// }

// calls initial function
employeeQ()
