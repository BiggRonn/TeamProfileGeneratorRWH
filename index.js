const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require ("./lib/Employee");
const Engineer = require ("./lib/Employee");
const Intern = require ("./lib/Employee");
const Manager = require ("./lib/Employee");
const team = require("teamQ")


const myTeam = [];







function init(){
    addManager();

        do{ let addMore = true;
            inquirer.prompt([
            {
                type: "list",
                name: "moreTeam",
                message: "Would you like to add more members to your team?",
                choices: ["Engineer", "Intern", "Exit"]

            }.then(data =>{
                switch (data){
                    case "Engineer" : addEngineer();
                    break;
                    case "Intern" : addIntern();
                    break;
                    case "Exit" : addMore = false;
                    break;
                    
                }
            })
        ])
    
        } while (addMore === true)

        //when done generate html


    })



}
init()