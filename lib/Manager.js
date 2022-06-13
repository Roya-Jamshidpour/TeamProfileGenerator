const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const index = require('../index')

function manager(userInput) {
return inquirer
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
}

module.exports = manager