const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a project description:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Mozilla', 'SIL'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please enter contributing guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Please enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
  },
];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function init(){
inquirer
  .prompt(questions)
  .then((answers) => {
    let licenseChoice = `${answers.license}`;
    let licenseLink = '';

    if (licenseChoice === 'MIT') {
      licenseLink = 'https://img.shields.io/badge/License-MIT-yellow.svg';
    } else if (licenseChoice === 'Mozilla') {
      licenseLink = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
    } else if (licenseChoice === 'SIL') {
      licenseLink = 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg';
    }

    let readMe = `
        
# ${answers.title}

## Description
      
${answers.description}
      
![badge](${licenseLink})
      
Find more badges at [shields.io](https://shields.io)

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#Contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions or concerns, please reach out to me through the following contact information:

- Github: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;

    writeToFile('README.md', readMe);
    console.log('README.md created successfully');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

init();
