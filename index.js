const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Employee");
const Intern = require("./lib/Employee");
const Manager = require("./lib/Employee");

const gen = require("./util/generators");


let myFile = "";
myFile += gen.generateTop();

//will prompt user for data and generate the html and add it to our file string.

function addManager() {
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
        const manager = new Manager(answers.mName, answers.mId, answers.mEmail, answers.oNum);
        
        myFile += gen.generateManager(manager);
        console.log(manager);
        addMore();

    }).catch(err => console.log(err));
}

function addEngineer() {
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
        const engineer = new Engineer(answers.eName, answers.eId, answers.eEmail, answers.github);
        myFile += gen.generateEngineer(engineer);
        addMore();
    }).catch(err => console.log(err));
}

function addIntern() {
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
        const intern = new Intern(answers.iName, answers.iId, answers.iEmail, answers.school);
        myFile += gen.generateIntern(intern);
        addMore();

    }).catch(err => console.log(err));
}

function addMore() {
    inquirer.prompt([
        {
            type: "list",
            name: "moreTeam",
            message: "Would you like to add more members to your team?",
            choices: ["Engineer", "Intern", "Exit"]

        }
    ])
    .then(data => {
        
        switch (data.moreTeam) {
            case "Engineer": addEngineer();
                break;
            case "Intern": addIntern();
                break;
            case "Exit": finalWrite();
                break;

        }
    })

}


function finalWrite(){
    myFile += gen.generateBottom();

    fs.writeFile("index.html", myFile, (err) => console.log(err))

}

addManager();



