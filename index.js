// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown")
const fs=require("fs")
const inquirer=require("inquirer")

//  TODO:
//  WHEN I enter my project title
//  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//  WHEN I choose a license for my application from a list of options
//  WHEN I enter my GitHub username
//  WHEN I enter my email address
//  WHEN I click on the links in the Table of Contents

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "title"
    },
    {
        type: "editor",
        message: "What is the project description?",
        name: "description"
    },
    {
        type:  "list",
        message: "Choose the following license:",
        choices: ["MIT","IBM","Apache", "No License"],
        name: "license"
    },
    {
        type:  "input",
        message: "What is your github username?",
        name: "username"
    },
    {
        type:  "input",
        message: "What is your email?",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("fileName",generateMarkdown(data), err=>{
        if(err) throw err
        console.log("success!")
    })
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
            .then(data=> {
                writeToFile("./output/README.md",data);
            });
 }

// Function call to initialize app
init();
