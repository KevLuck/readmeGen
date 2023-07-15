const fs = require('fs');
const inquirer = require('inquirer');

// Prompt the user for input using inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe any necessary installations:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Describe the usage of the application:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter a contribution your project makes:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter the tests that can be ran:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter a license if one applies:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter the name on your GitHub account:',
    },
    {
      type: 'input',
      name: 'user',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email:',
    },

  ])
  .then((answers) => {
    // Generate the README content
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions or concerns, please contact me:

GitHub: [${answers.username}](https://github.com/${answers.username})

Email: ${answers.email}
`;

    // Write the generated content to a README file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file generated successfully!');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
