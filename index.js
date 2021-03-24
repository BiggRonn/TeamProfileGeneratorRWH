const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Employee");
const Intern = require("./lib/Employee");
const Manager = require("./lib/Employee");
const team = require("./teamQ")


const myTeam = [];

//will prompt user for data and return a manager object initialized with the given values
function addManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "mName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "mId",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "mEmail",
            message: "What is the manager's Email?"
        },
        {
            type: "input",
            name: "oNum",
            message: "What is the manager's office number?"
        }
        
    ]).then(answers => {
        const manager = new Manager(answers.mName, answers.mId, answers.mEmail, answers.oNum)
        return manager;
    })
}

function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "eName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "eId",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "eEmail",
            message: "What is the engineer's Email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
        }
        
    ]).then(answers => {
        const engineer = new Engineer(answers.mName, answers.mId, answers.mEmail, answers.github)
        return engineer;
    })
}

function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "iName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "iId",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "iEmail",
            message: "What is the intern's Email?"
        },
        {
            type: "input",
            name: "school",
            message: "What school is the intern attending?"
        }
        
    ]).then(answers => {
        const intern = new Intern(answers.mName, answers.mId, answers.mEmail, answers.school)
        return intern;
    })
}







function init() {
    
    const man = addManager();
    myTeam.push(man);
    
    do {
        let addMore = true;
        inquirer.prompt([
            {
                type: "list",
                name: "moreTeam",
                message: "Would you like to add more members to your team?",
                choices: ["Engineer", "Intern", "Exit"]

            }.then(data => {
                switch (data) {
                    case "Engineer": myTeam.push(addEngineer());
                        break;
                    case "Intern": myTeam.push(addIntern());
                        break;
                    case "Exit": addMore = false;
                        break;

                }
            })
        ])

    } while(addMore === true)

    //when done generate html


}


init()