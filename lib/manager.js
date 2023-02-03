const inquirer = require('inquirer');
const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(firstName, id, email, officeNumber) {
        super(firstName, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() { 
        return this.officeNumber; 
    };

    getRole() { 
        return 'Manager'; 
    };

    static async addManager() {
        const val = await inquirer.prompt([
            {
                type: 'input',
                message: "What is this employee's name?",
                name: 'firstName',
            },
            {
                type: 'input',
                message: `What is their employee ID?`,
                name: 'id',
            },
            {
                type: 'input',
                message: `What is their email?`,
                name: 'email',
            },
            {
                type: 'input',
                message: `What is their office number?`,
                name: 'officeNumber',
            },
        ]);
        //this is based on the answers to the prompts and creates a new `Manager` object
        const manager = new Manager(
            val.firstName,
            val.id,
            val.email,
            val.officeNumber,
        )
        console.log(manager);
        return manager;
    }
};

module.exports = Manager;