const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

function engineer(userInput) {
    inquirer
        // questions ask about manager
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
}

module.exports = engineer