const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')



inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project!',
        name: description
    },
    {
        type: 'input',
        message: 'Installation Instructions Here',
        name: installation
    },
    {
        type: 'input',
        message: 'Usage Information Here',
        name: usageInfo
    },
    {
        type: 'input',
        message: 'Contribution Guidelines',
        name: contribution
    },
    {
        type: 'input',
        message: 'Test Instructions Here',
        name: testInstructions
    },
    {
        type: 'checkbox',
        message: 'Select License',
        name: license,
        choices: [
            'MIT[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            
        ]
    }

])