const Employee = require("../lib/Employee")

class Manager extends Employee{
    constructor(name, id, email, oNum){
        super(name, id, email);
        this.officeNumber = oNum;

        
    }
    getRole(){
        return "Manager";
    }

}
module.exports = Manager;