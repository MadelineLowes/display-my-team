# Display My Team

[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![github][github-shield]][github-url]

## Description

This application is built using Node.js and the inquirer package, and runs in the command-line.

It is intended to be used for employers to input information about their teams to help display a summary of each employee. Once the information has been inputted - using inquirer in the terminal - an HTML file will automatically be created, which will be styled when it's opened in the browser.

## Table of Contents

- [Description](#description)
- [Getting Started](#getting_started)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Test](#test)
- [Questions](#questions)

## Getting Started

### Prerequisites

- Install [Node.js] following the steps in the documentation (https://nodejs.org/en/download/)
- Install the [MySQL2 package] following the steps in the documentation (https://www.npmjs.com/package/mysql2)

## Installation

Users can follow the video walkthrough attached below or the steps listed.
- Clone the repo
  ```sh
  git clone git@github.com:MadelineLowes/display-my-team.git
  ```
- Install dependencies
  ```sh
  npm install
  ```
## Usage

Users can follow the video walkthrough attached below or the steps listed.
- Start/restart the app
  ```sh
  npm start
  ```
- Add an employee by typing "y" or "Yes" and follow the prompts
  ```sh
  "What is this employee's position?" // input "Manager", "Engineer", "Intern", or "Other"
  "What is this employee's name?" // input value
  "What is their employee ID?" // input numerical value
  "What is their email" // input email
  ```
- If user selects "Manager", follow the prompts
  ```sh
  "What is their email" // input email
  ```
- If user selects "Engineer", follow the prompts
  ```sh
  "What is their GitHub username" // input GitHub username
  ```
- If user selects "Intern", follow the prompts
  ```sh
  "What school do they attend?" // input school name
  ```
- If user selects "Other", the employee will be added as an "Employee" & return to the main menu
- The user can continue to add members to their team until they are satisfied, then when they are asked if they want to add another employee to their team, type "n" or "No"
- A message will appear saying "index.html was created successfully" & an HTML file will automatically be generated based on the information they've inputted, which the user can open in a browser to view the formatted team cards

Walk-through video:

## Credits

- https://jestjs.io/docs/api
- https://nodejs.org/en/docs/
- https://www.npmjs.com/package/inquirer

## License

This project is covered by MIT licensing.
https://opensource.org/licenses/MIT

## Test

If you are interested in testing the code before proceeding with the application, please follow these steps: in your terminal, type "npm install --jest", and wait until all of the processes have completed successfully before typing "npm test". This should to ensure all of the files are functioning properly - you'll be notified of the status of the tests.
- Install jest package for testing
  ```sh
  npm install --jest
  ```
- Run the tests to ensure the app is functioning properly
  ```sh
  npm test
  ```
## Questions

Madeline Lowes:
- email: madeline.lowes@gmail.com
- github profile: https://github.com/MadelineLowes

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/MadelineLowes/display-my-team.svg?style=for-the-badge
[contributors-url]: https://github.com/MadelineLowes/display-my-team/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/MadelineLowes/display-my-team.svg?style=for-the-badge
[issues-url]: https://github.com/MadelineLowes/display-my-team/issues
[license-shield]: https://img.shields.io/github/license/MadelineLowes/display-my-team.svg?style=for-the-badge
[license-url]: https://github.com/MadelineLowes/display-my-team/blob/main/LICENSE
[github-shield]: https://img.shields.io/badge/-github-black.svg?style=for-the-badge&logo=github&colorB=555
[github-url]: https://github.com/MadelineLowes/display-my-team