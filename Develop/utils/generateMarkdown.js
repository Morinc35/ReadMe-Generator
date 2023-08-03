
function generateMarkdown(data) {
  let licenseChoice = `${data.license}`;
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

  let markdownTemp = 

  `# ${data.title}

  ## Description

  ${data.description}

  ![badge](https://img.shields.io/badge/license-${licenseOption}-brightorange)

  Find more badges at [sheilds.io](https://sheilds.io)
`}

let tableOfContents = 
`# Table of Contents`;
if

  return `# ${data.title}`;

module.exports = generateMarkdown;
