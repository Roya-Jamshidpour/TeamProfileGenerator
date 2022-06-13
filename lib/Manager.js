function manager(userInput) {

// questions ask about manager
inquirer
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
    return console.log(userInput)
}

module.exports = manager