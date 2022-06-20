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
        const manager = new Manager (managerName, managerId, managerEmail, managerNumber);

        infoArr.push(manager);
        return nextTeamMemeber();

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
            name: 'Id',
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

    .then(({name, Id, email, github}) => {
        infoArr.push(new Engineer(name, Id, email, github))

        return nextTeamMemeber();

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
            name: 'Id',
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

    .then(({name, Id, email, school}) => {
        infoArr.push(new Intern(name, Id, email, school))

        return nextTeamMemeber();

    });
};


const nextTeamMemeber = () => {
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
            return engineerQuestions();
        } else if (teamRole.role === 'Intern') {
            return internQuestions();
        } else {
            return (infoArr);
        }

    })
};


// const writeFile = data => {
//         fs.writeFile('./dist/index.html', data, err => {
//             if (err) {
//                 console.log(err); 
//             } else {
//                 console.log("Team created")
//             }
//         })
//     };


managerQuestions()
    // .then(infoArr => {
    //     return generateHTML(infoArr);
    // })
    // .then(returnedHTML => {
    //     return writeFile(returnedHTML);
    // })
    // .catch(err => {
    //     console.log(err);
    // });