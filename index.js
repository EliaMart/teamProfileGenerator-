const inquirer = require('inquirer');

const Engineer = require ('./lib/Engineer.js');
const Manager = require ('./lib/Manager.js');
const Intern = require ('./lib/Intern.js');

const generateIndex = require ('./src/generateIndex.js')

const infoArr = []

const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter team managers name?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter the manager email address',
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: 'Enter the manager office number',
        },
    ])
    .then(({managerName, managerId, managerEmail, managerNumber}) => {
        infoArr.push(new Manager (managerName, managerId, managerEmail, managerNumber));
        nextTeamMember();
    });
};

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github username',
        },
    ])

    .then(({name, id, email, github}) => {
        infoArr.push(new Engineer(name, id, email, github))
        nextTeamMember();
    });
};


const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the your email address',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the school you attended',
        },
    ])

    .then(({name, id, email, school}) => {
        infoArr.push(new Intern(name, id, email, school))
        nextTeamMember();
    });
};


const nextTeamMember = () => {
    inquirer.prompt  ([
        {
            type: 'list',
            name: 'role',
            message: "Select another team member or select done when team is built",
            choices: [
                'Engineer',
                'Intern',
                'Done'
            ]
        },
    ])
    .then((teamRole) => {
        if (teamRole.role === 'Engineer') {
            engineerQuestions();
        } else if (teamRole.role === 'Intern') {
            internQuestions();
        } else {
            generateIndex(infoArr);
        }
    })
};

managerQuestions();
