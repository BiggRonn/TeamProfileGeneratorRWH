
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = require("./teamQ")

async function addManager(){
    let manager;
    await inquirer.prompt([
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
        manager = new Manager(answers.mName, answers.mId, answers.mEmail, answers.oNum)
    })
    console.log(dude);
    return manager;
}

const dude = addManager();
