const Intern = require('../lib/intern');
const inquirer = require('inquirer');

jest.mock('inquirer');

const intern = new Intern('Lacy', 21, 'test@test.com', 'Western');

describe('Intern constructor', () => {
    test('should confirm that getName property functions properly', () => {
        expect(intern.firstName).toBe('Lacy');
    });

    test('should confirm that getId property functions properly', () => {
        expect(intern.id).toBe(21);
    });

    test('should confirm that getEmail property functions properly', () => {
        expect(intern.email).toBe('test@test.com');
    });

    test('should confirm that school property functions properly', () => {
        expect(intern.school).toBe('Western');
    });

    test('should confirm that getSchool method functions properly', () => {
        expect(intern.getSchool()).toBe('Western');
    });

    test('should confirm that getRole method functions properly', () => {
        expect(intern.getRole()).toBe('Intern');
    });

    // test('test user input using async/await', async () => {
    //     const tom = await inquirer.prompt.mockResolvedValue({
    //         firstName: 'Tom',
    //         id: 3,
    //         email: 'test@test.com',
    //         school: 'Queens',
    //     });

    //     const val = new Intern(tom);
    //     expect(val.firstName).toBe('Tom');
    //     expect(val.id).toBe(3);
    //     expect(val.email).toBe('test@test.com');
    //     expect(val.school).toBe('Queens');
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
    //             message: `What school do they attend?`,
    //             name: 'school',
    //         },
    //     ]);
    // });
});