const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "output/dist");
const outputPath = path.join(OUTPUT_DIR, "./index.html");

const generateManagerHTML = function (manager) {
    return `
    <div class="card my-4" style="width: 20rem;">
        <div class="card-header bg-primary text-white">
            <h3 class="card-title">${manager.name}</h3>
            <h4 class="card-subtitle">manager</h4>
        </div>
    <div class="card-body bg-light p-3">
        <ul class="list-group">
            <li class="list-group-item"> ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailito:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number:${manager.officeNumber}</li>
        </ul>
    </div>
    </div>
`;
}

const generateEngineerHTML = function (engineer) {
    return `
    <div class="card my-4" style="width: 20rem;">
    <div class="card-header bg-primary text-white">
        <h3 class="card-title">${engineer.name}</h3>
        <h4 class="card-subtitle">Engineer</h4>
    </div>
<div class="card-body bg-light p-3">
    <ul class="list-group">
        <li class="list-group-item"> ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailito:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
    </ul>
</div>
</div>
`;
}

const generateInternHTML = function (intern) {
    return `
    <div class="card my-4" style="width: 20rem;">
    <div class="card-header bg-primary text-white">
        <h3 class="card-title">${intern.name}</h3>
        <h4 class="card-subtitle">Intern</h4>
    </div>
<div class="card-body bg-light p-3">
    <ul class="list-group">
        <li class="list-group-item"> ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailito:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
</div>
`;
}

const generateFinalHTML = function (teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <title>Team Profile Generator</title>
     </head>
     <body>
     <div>
         <div class="jumbotron bg-danger p-4">
             <h1 class="d-flex justify-content-center text-white">My Team</h1>
     </div>
     <div class="d-flex flex-wrap justify-content-evenly space-between">
        ${teamCards}
     </div>
 
 
    </body>
    </html>`
}

generateHTML = (data) => {
    teamProfile = [];

    for (var i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManagerHTML(employee);
            teamProfile.push(managerCard);
        } else if (role === 'Intern') {
            const internCard = generateInternHTML(employee);
            teamProfile.push(internCard);
        } else if (role === 'Engineer') {
            const engineerCard = generateEngineerHTML(employee);
            teamProfile.push(engineerCard);
        }
    }
    const teamCards = teamProfile.join('');
    const generateTeamProfile = generateFinalHTML(teamCards);
    buildTeam(generateTeamProfile);
}

function buildTeam(teamCards) {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, teamCards, "utf-8");
}

module.exports = generateHTML;
