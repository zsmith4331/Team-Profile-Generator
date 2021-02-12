// Application Requirements //
const fs = require("fs");
const inquirer = require('inquirer');
const Manager = require( "./lib/manager");
const Engineer = require( "./lib/engineer");
const Intern = require( "./lib/intern");

// Command line application that accepts user input //
// Prompt for Team Member and their information //

inquirer.prompt([
    {
        type: "input",
        message: "What is the name of the employee?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the ID of the employee?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the email of the employee?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the Github username of the employee?",
        name: "github"
    }    
    
]);
// Generate HTML that displays team roster based on user input //
// Links to email address open default mail application //
// Link for Github opens in new tab //
