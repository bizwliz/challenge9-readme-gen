const generateMarkdown=require("./utils/generateMarkdown")
const fs=require("fs")
const inquirer=require("inquirer")

const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "title",
    },
    {
        type: "editor",
        message: "What is the project description?",
        name: "description",
    },
    {
        type:  "list",
        message: "Choose the following license:",
        choices: ["MIT","IBM","Apache", "No License"],
        name: "license",
    },
    {
        type:  "input",
        message: "What is your github username?",
        name: "username",
    },
    {
        type:  "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type:  "editor",
        message: "What are the steps required to install your project?",
        name: "installation",
    },
    {
        type:  "editor",
        message: "Provide instructions and examples for use.",
        name: "usage",
    },
    {
        type:  "input",
        message: "Who contributed to your project?",
        name: "contribution",
    },
    {
        type:  "input",
        message: "How did you test your application?",
        name: "test",
    },
    
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log("Success!");
    });
}

function init() {
    inquirer.prompt(questions)
        .then(data => {
            writeToFile("./output/README.md", data);
        });
}

init();
