const inquirer = require('inquirer');
const fs = require('fs')


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team managers name?',
        },
        {
            type: 'input',
            name: 'identification',
            message: 'Enter your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'number',
            message: 'Enter your office number',
        },
        {
            type: 'input',
            name: 'number',
            message: 'Enter your office number',
        },
    ]);
};



const init = () => {
    promptUser()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();