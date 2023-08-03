// TODO: Include packages needed for this application
const inquirer = requier("inquirer")
// TODO: Create an array of questions for user input
const questions = [ 
    type: 'input';
    name: 'title';
    message:'What is the Title of your project?';
      validate:  => {
      if ('title') {
        return true;
        else {
          console.log(Please enter);
          return false;
        }
  }
    {
    type: 'checkbox';
    name: 'Table of Contents';
    message: 'choose from the options below to include in your Table of Contents';
    validate:  => {
      if () {
        return true;
        else {
          console.log(Please enter);
          return false;
        }
  }
  {
    type: 'input';
    name: 'Description';
    message: 'What is the basic function of your project?';
    validate:  => {
      if () {
        return true;
        else {
          console.log(Please enter);
          return false;
        }
  }
  {
    type: 'input';
    name: 'Installation';
    message: 'What is the Title of your Readme?';
    validate:  => {
      if () {
        return true;
        else {
          console.log(Please enter);
          return false;
        }
  }
  {
    type: 'input';
    name: 'Usage Information';
    message 'What is the Title of your Readme?';
    validate:  => {
      if () {
        return true;
        else {
          console.log(Please enter);
          return false;
        }
  }
  {
    type: 'input';
    name: 'Contributing';
    message: 'Who contributed to this project? Please include your GitHub username.';
    validate:  => {
      if () {
        return true;
        else {
          console.log(Please enter);
          return false;
        }
  }
  {
    type: 'input';
    name: 'Tests';
    message: 'What is the Title of your Readme?';
    validate:  => {
      if () {
        return true;
        else {
          console.log(Please enter);
          return false;
        }
  }
  {
    type: 'input';
    name: 'Questions';
    message: 'Please include your email address, and a brief mesaage on how to contact you for further questions';
    validate:  => {
      if () {
        return true;
        else {
          console.log(Please enter);
          return false;
        }
  }
  {
    type: 'list';
    name: 'Licensing';
    message: 'Please choose which license you used from the choices below.';
    choices: ['MIT', ]
    validate:  => {
      if () {
        return true;
        else {
          console.log(Please enter);
          return false;
        }
      }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
