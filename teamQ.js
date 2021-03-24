const inquirer = require("inquirer");

//will prompt user for data and return a manager object initialized with the given values
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
    return manager;
}

async function addEngineer(){
    let engineer;
    await inquirer.prompt([
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
        engineer = new Engineer(answers.mName, answers.mId, answers.mEmail, answers.github)
    })
    return engineer;
}

async function addIntern(){
    let intern;
    await inquirer.prompt([
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
        intern = new Intern(answers.mName, answers.mId, answers.mEmail, answers.school)
    })
    return intern;
}

module.exports = {
    addManager,
    addEngineer,
    addIntern,
}