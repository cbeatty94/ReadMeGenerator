function generateMarkdown(data) {
    return `
# **${data.title}**

${data.license}

## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [Test](#Test)
- [License](#License)
- [Questions](#Questions)
 

## Description 

${data.description}

##Installation

${data.installation}

    `
}

module.exports = generateMarkdown;
