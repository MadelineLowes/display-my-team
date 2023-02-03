const Employee = require('./employee.js');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(firstName, id, email, school) {
        super(firstName, id, email);
        this.school = school;
    }

    getSchool() { 
        return this.school; 
    };

    getRole() { 
        return 'Intern'; 
    };

    static async addIntern() {
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
                message: `What school do they attend?`,
                name: 'school',
            },
        ]);
        //this is based on the answers to the prompts and creates a new `Intern` object
        const intern = new Intern(
            val.firstName,
            val.id,
            val.email,
            val.school,
        )
        console.log(intern);
        return intern;
    }
};

module.exports = Intern;