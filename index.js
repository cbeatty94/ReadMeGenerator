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
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation Instructions Here',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage Information Here',
        name: 'usageInfo'
    },
    {
        type: 'input',
        message: 'Contribution Guidelines',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Test Instructions Here',
        name: 'testInstructions'
    },
    {
        type: 'checkbox',
        message: 'Select License',
        name: 'license',
        choices: [
            'MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            'Mozilla [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
            'Apache [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            'Perl [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
        ]
    },
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'githubUser'
    },
    {
        type: 'input',
        message: 'Enter your email address: ',
        name: 'email'
    }

])