const Engineer = require('../lib/engineer');
const inquirer = require('inquirer');

jest.mock('inquirer');

const engineer = new Engineer('Lacy', 21, 'test@test.com', 'LacyTest');

describe('Engineer constructor', () => {
    test('should confirm that firstName property functions properly', () => {
        expect(engineer.firstName).toBe('Lacy');
    });

    test('should confirm that id property functions properly', () => {
        expect(engineer.id).toBe(21);
    });

    test('should confirm that email property functions properly', () => {
        expect(engineer.email).toBe('test@test.com');
    });

    test('should confirm that github property functions properly', () => {
        expect(engineer.github).toBe('LacyTest');
    });

    test('should confirm that getGithub method functions properly', () => {
        expect(engineer.getGithub()).toBe('LacyTest');
    });

    test('should confirm that getRole method functions properly', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });

    // test('test user input using async/await', async () => {
    //     const tom = inquirer.prompt.mockResolvedValue({
    //         firstName: 'Tom',
    //         id: 3,
    //         email: 'test@test.com',
    //         github: 'TomTest',
    //     });

    //     const val = await new Engineer.addEngineer(tom);
    //     expect(val.firstName).toBe('Tom');
    //     expect(val.id).toBe(3);
    //     expect(val.email).toBe('test@test.com');
    //     expect(val.github).toBe('TomTest');
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
    //             message: `What is their Github username?`,
    //             name: 'github',
    //         },
    //     ]);
    // });
});