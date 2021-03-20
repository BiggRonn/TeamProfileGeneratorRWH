const Employee = require("../lib/Employee")

class Manager extends Employee{
    constructor(name, id, email, oNum){
        this.name = name;
        this.id = id;
        this.email = email;
        
        super(name, id, email);
        this.officeNumber = oNum;

        
    }
    getRole(){
        return "Manager";
    }

}