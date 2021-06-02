function generateMarkdown(data) {
    return `
# **${data.title}**

${data.license}

## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution Guidelines](#Contribution)
- [Test](#Test)
- [License](#License)
- [Questions](#Questions)
 

## Description 

${data.description}

## Installation

${data.installation}

## Usage

${data.usageInfo}

## Contribution

${data.contribution}

## Test

${data.testInstructions}

## License

This project is covered under the following license: ${data.license}

## Questions

If you have any further questions, feel free to email me at ${data.email} or go to my github page via the following link https://api.github.com/users/${data.githubUser}


    `
}

module.exports = generateMarkdown;
