// TODO: Include packages needed for this application
const inquirer = requier("inquirer")
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repository?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the basic function of your program?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you Install your Project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information.',
    },
    {
        type: 'list',
        name: 'licnese',
        message: 'What license did you use for your project?',
        choices: [
            'MIT',
            'Mozilla',
            'SIL',
        ]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines',

    },
    {
        type: 'input',
        name: 'githubName',
        message: 'Enter your Github Username',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',

    },
]

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function init() {
    inquirer
        .prompt(questions)
        .then(answers) => {
        let licenseChoice = `${answers.license}`;
        let licenseLink = '';
        if (licenseChoice = 'MIT') {
            licenseChoice = 'MIT';
            licenseLink = 'https://img.shields.io/badge/License-MIT-yellow.svg'
        }
        if (licenseChoice = 'Mozilla') {
            licenseChoice = 'Mozilla';
            licenseLink = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
        }
        if (licenseChoice = 'SIL') {
            licenseChoice = 'SIL';
            licenseLink = 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg'
        }
        let readMe = `
        
        # ${data.title}

        ## Description
      
        ${data.description}
      
        ![badge](https://img.shields.io/badge/license-${licenseChoice}-brightorange)
      
        Find more badges at [sheilds.io](https://sheilds.io)

    ## Table of Contents 
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contributing](#Contributing)
    -[Tests](#tests)
    -[Questions](#questions)

    ## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or concerns, please reach out to me through the following contact information:

- Github: [${data.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${data.email}
`;

        writeToFile('README.md', readMe);
        console.log('README.md created successfully');
    }
.catch ((error) => {
        console.error('Error:', error);
    });
}

init();
