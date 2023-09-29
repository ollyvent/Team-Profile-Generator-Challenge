const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const team = [];


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
                    message: "Enter the engineer's name:",          // get engineer name
                    name: "name",
                }, 
                {
                    type: "input",
                    message: "Enter the engineer's employee ID:",   // get engineer id
                    name: "id",
                },
                {
                    type: "input",
                    message: "Enter the engineer's email address:", // get enginner email
                    name: "email",
                },
                {
                    type: "input",
                    message: "Enter the engineer's GitHub username:",   // get engineer github
                    name: "github",
                },        

            ])

            .then((answers) => {                                        // after which the repective responses are linked to corresponding fields in employee module
                const engineer = new Engineer(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.github
                );
                team.push(engineer);
                addTeamMember();
            });
        }

        // function to collect intern data
        function createIntern() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Enter the intern's name:", // get intern name
                        name: "name",
                    },
                    {
                        type: "input",
                        message: "Enter the intern's employee ID:", // get intern id
                        name: "id",
                    },
                    {
                        type: "input",
                        message: "Enter the intern's email address:",   // get intern email
                        name: "email",
                    },
                    {
                        type: "input",
                        message: "Enter the intern's school:",          // get intern school
                        name: "school",
                    },
                ])
                .then((answers) => {                                    // link responses to corresponding fields in employee module
                    const intern = new Intern(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.school
                    );
                    team.push(intern);
                    addTeamMember();
                });        
                
        }

        // create function to add team member
        function addTeamMember() {
            inquirer
                .prompt([
                    {                                                                   // add team member
                        type: "list",
                        message: "Choose a team member to add:",
                        choices: ["Engineer", "Intern", "Finish building the team"],
                        name: "choice",
                    },

                ])
                .then((answer) => {
                    switch (answer.choice) {
                        case "Engineer":
                            createEngineer();
                            break;
                        case "Intern":
                            createIntern();
                            break;
                        default:
                            generateTeamHTML();
                            break;
                    }
                });

            }

            // function to create the html file
            function generateTeamHTML() {
                const html = render(team);
                fs.writeFileSync(outputPath, html);
                console.log("Team profile generated successfully!");
            }
            
            createManager();