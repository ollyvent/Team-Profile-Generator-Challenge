const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// function to create manager profile using inquirer
function createManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the manager's name:",           // get manager name
                name: "name",
            },
            {
                type: "input",
                message: "Enter the manager's employee ID:",    // get manager id  
                name: "id",
            },
            {
                type: "input",
                message: "Enter the manager's email address:",  // get manager email
                name: "email",
            },
            {
                type: "input",
                message: "Enter the manager's office number:",  // get manager office number
                name: "officeNumber",
            },
        ])
        .then((answers) => {                                    // after which the repective responses are linked to corresponding fields in employee module
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            team.push(manager);
            addTeamMember();
        });
    }

// function to create engineer profile using inquirer
    function createEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter the engineer's name:",      // get engineer name
                    name: "name",
                }, 
        

            ])
        }