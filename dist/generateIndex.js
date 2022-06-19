const generateManagerHTML = function (Manager) {
    return `
    <div class="card my-4" style="width: 20rem;">
        <div class="card-header bg-primary text-white">
            <h3 class="card-title">${Manager.name}</h3>
            <h4 class="card-subtitle">Manager</h4>
        </div>
    <div class="card-body bg-light p-3">
        <ul class="list-group">
            <li class="list-group-item"> ID: ${Manager.Id}</li>
            <li class="list-group-item">Email: <a href="mailito:${Manager.email}">${Manager.email}</a></li>
            <li class="list-group-item">Office Number:${Manager.officeNumber}</li>
        </ul>
    </div>
    </div>
`;
}

const generateEngineerHTML = function (Engineer) {
    return `
    <div class="card my-4" style="width: 20rem;">
    <div class="card-header bg-primary text-white">
        <h3 class="card-title">${Engineer.name}</h3>
        <h4 class="card-subtitle">Engineer</h4>
    </div>
<div class="card-body bg-light p-3">
    <ul class="list-group">
        <li class="list-group-item"> ID: ${Engineer.Id}</li>
        <li class="list-group-item">Email: <a href="mailito:${Engineer.email}">${Engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.github}" target="_blank">${Engineer.github}</a></li>
    </ul>
</div>
</div>
`;
}

const generateInternHTML = function (Intern) {
    return `
    <div class="card my-4" style="width: 20rem;">
    <div class="card-header bg-primary text-white">
        <h3 class="card-title">${Intern.name}</h3>
        <h4 class="card-subtitle">Intern</h4>
    </div>
<div class="card-body bg-light p-3">
    <ul class="list-group">
        <li class="list-group-item"> ID: ${Intern.Id}</li>
        <li class="list-group-item">Email: <a href="mailito:${Intern.email}">${Intern.email}</a></li>
        <li class="list-group-item">School: ${Intern.school}</li>
    </ul>
</div>
</div>
`;
}

generateHTML = (data) => {
    teamProfile = [];

    for(var i=0; i< data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManagerHTML(employee);

            teamProfile.push(managerCard);
        
        }else if (role === 'Intern') {
            const internCard = generateInternHTML(employee);

            teamProfile.push(internCard);
        
        }else if (role === 'Engineer') {
            const engineerCard = generateEngineerHTML(employees);

            teamProfile.push(engineerCard);
        }
    }

    const teamCards = teamProfile.join('');

    const generateTeamProfile = generateFinalHTML(teamCards)
    return generateTeamProfile;
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
 
     </div>
 
 
    </body>
    </html>`
    
}

module.exports = generateHTML;