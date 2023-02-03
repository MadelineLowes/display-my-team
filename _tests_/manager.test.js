const Manager = require('../lib/manager');
const inquirer = require('inquirer');

jest.mock('inquirer');

const manager = new Manager('Lacy', 21, 'test@test.com', 1);

describe('Manager constructor', () => {
    test('should confirm that firstName property functions properly', () => {
        expect(manager.firstName).toBe('Lacy');
    });

    test('should confirm that id property functions properly', () => {
        expect(manager.id).toBe(21);
    });

    test('should confirm that email property functions properly', () => {
        expect(manager.email).toBe('test@test.com');
    });

    test('should confirm that github property functions properly', () => {
        expect(manager.officeNumber).toBe(1);
    });

    test('should confirm that getOfficeNumber method functions properly', () => {
        expect(manager.getOfficeNumber()).toBe(1);
    });

    test('should confirm that getRole method functions properly', () => {
        expect(manager.getRole()).toBe('Manager');
    });

    // test('test user input using async/await', () => {
        // inquirer.prompt.mockResolvedValue({ statement: 'bagles'})
        //const response = await statement('dog', ['bagles'])
        //expect(answer).toBe('bagles')
    //     const tom = inquirer.prompt.mockResolvedValue({
    //         firstName: 'Tom',
    //         id: 3,
    //         email: 'test@test.com',
    //         officeNumber: 2,
    //     });

    //     const val = new Manager.addManager(tom);
    //     expect(val.firstName).toBe('Tom');
    //     expect(val.id).toBe(3);
    //     expect(val.email).toBe('test@test.com');
    //     expect(val.officeNumber).toBe(2);
    //     expect(inquirer.prompt).toHaveBeenCalledWith([
    //         {
    //             type: 'input',
    //             message: "What is this employee's name?",
    //             name: 'firstName',
    //         },
    //         {
    //             type: 'input',
    //             message: `What is their employee ID?`,
    //             name: 'id',
    //         },
    //         {
    //             type: 'input',
    //             message: `What is their email?`,
    //             name: 'email',
    //         },
    //         {
    //             type: 'input',
    //             message: `What is their office number?`,
    //             name: 'officeNumber',
    //         },
    //     ]);
    // });
});