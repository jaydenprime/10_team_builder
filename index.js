// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Paths
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

// Render to html
const render = require('./src/htmlRenderer');

// Empty array to be populated based on inquirier prompt
const team = []

// Initial prompt for manager
inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is the team manager's name?",
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is the team manager's ID?",
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the team manager's email?",
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "What is the team manager's office number?",
    },
  ])
  .then((answers) => {
    team.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber));
  return inquirer.prompt([
    {
      type: 'list',
      name: 'addMember',
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'None'],
    },
  ]);
})

// If engineer is chosen, start prompt for engineer
.then((answers) => {
    if (answers.addMember === 'Engineer') {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
          },
          {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's ID?",
          },
          {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?",
          },
          {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's GitHub username?",
          },
        ])
        .then((answers) => {
          team.push(new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub));
          return inquirer.prompt([
            {
              type: 'list',
              name: 'addMember',
              message: 'Which type of team member would you like to add?',
              choices: ['Engineer', 'Intern', 'None'],
            },
          ]);
        });
      }
  else if (answers.addMember === 'None') {
    const html=render(team);
    fs.writeFile(outputPath, html, (err) => {
      if (err) throw err;
      console.log('Page Rendered!')
    });
  }
})

// if Intern is chosen, start prompt for Intern
.then((answers) => {
    if (answers.addMember === 'Intern') {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
          },
          {
            type: 'input',
            name: 'internId',
            message: "What is the intern's ID?",
          },
          {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?",
          },
          {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school?",
          },
        ])
        .then((answers) => {
          team.push(new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool));
          return inquirer.prompt([
            {
              type: 'list',
              name: 'addMember',
              message: 'Which type of team member would you like to add?',
              choices: ['Engineer', 'Intern', 'None'],
            },
          ]);
        });
    }
  else if (answers.addMember === 'None') {
    const html=render(team);
    fs.writeFile(outputPath, html, (err) => {
      if (err) throw err;
      console.log('Page Rendered!')
    });
  }
});
