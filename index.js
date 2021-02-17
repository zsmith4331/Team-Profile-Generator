// Application Requirements //
const fs = require("fs");
const inquirer = require('inquirer');
const Manager = require( "./lib/manager");
const Engineer = require( "./lib/engineer");
const Intern = require( "./lib/intern");
const employees = [];

function buildTeam() {
    buildHtml();
    addEmployee();
};

function addEmployee() {
// Prompt for adding new employee and their information //    
inquirer.prompt([
    {
        type: "list",
        message: "Please select the role of the employee?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "position"
    },
    {
        type: "input",
        message: "What is the name of the employee?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the ID of the employee?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the email of the employee?",
        name: "email",
        validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    }
]).then(function({name, position, id, email}) {
    let specialInput = "";
    switch(position) {
        case "Manager":
            specialInput = "Office Number";
        break;

        case "Engineer":
            specialInput = "GitHub Username";
        break;

        case "Intern":
            specialInput = "School's Name";
        break;
    }
    
    inquirer.prompt([{
        message: `What is the employee's ${specialInput}?`,
        name: "specialInput"
    },
    {
        type: "list",
        message: "Would you like to add another employee?",
        choices: [
            "Yes",
            "No"
        ],
        name: "moreEmployees"
    }])
    .then(function({specialInput, moreEmployees}) {
        let newEmployee;
        switch(position) {
            case "Manager":
                newEmployee = new Manager(name, id, email, specialInput);
            break;

            case "Engineer":
                newEmployee = new Engineer(name, id, email, specialInput);
            break;

            case "Intern":
                newEmployee = new Intern(name, id, email, specialInput);
            break;
        }
        employees.push(newEmployee);
        content(newEmployee).then(function() {
            if (moreEmployees === "Yes") {
                addEmployee();
            } else {
                htmlDone();
            }
        });
        
    });
})
}

// Generate HTML that displays team roster based on user input //
function buildHtml() {
    const html = `
    <!DOCTYPE html>
        <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/2f0e2cb727.js" crossorigin="anonymous"></script>
        <style>
            .card{
                max-width: 300px;
                min-width: 300px; 
            }
        </style>
        <title>My Team</title>
    </head>

    <body>
        <header class="container-fluid bg-danger text-white text-center p-4">
            <h1>My Team</h1>
        </header>   

        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function content(response) {
    return new Promise(function(resolve, reject) {
        const name = response.getName();
        const role = response.getRole();
        const id = response.getId();
        const email = response.getEmail();
        let card = "";
        switch(role) {
            
            case "Manager":
                const officePhone = response.getOfficeNumber();
                card = `
                <div class="card m-4">
                    <div class="card-header bg-primary text-white">
                        <h3>${name}</h3>
                        <h4><i class="fas fa-mug-hot"></i> Manager</h4>
                    </div>
                    <div class="card-body bg-light p-4">
                        <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: ${id}</p>
                        <p class="card-text bg-white border p-2 my-0">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">Office Number: ${officePhone}</p>
                    </div>
                </div>`
            break;

            case "Engineer":
                const gitHub = response.getGithub ();
                card = `
                <div class="card m-4">
                    <div class="card-header bg-primary text-white">
                        <h3>${name}</h3>
                        <h4><i class="fas fa-glasses"></i> Engineer</h4>
                    </div>
                    <div class="card-body bg-light p-4">
                        <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: ${id}</p>
                        <p class="card-text bg-white border p-2 my-0">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">Github: <a href="http://github.com/${gitHub}">${gitHub}</a></p>
                    </div>
                </div>`;
            break;

            case "Intern":
                const school = response.getSchool();
                card = `
                <div class="card m-4">
                    <div class="card-header bg-primary text-white">
                        <h3>${name}</h3>
                        <h4><i class="fas fa-user-graduate"></i> Intern</h4>
                    </div>
                    <div class="card-body bg-light p-4">
                        <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: ${id}</p>
                        <p class="card-text bg-white border p-2 my-0">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">School: ${school}</p>
                    </div>
                </div>`;
            break;

        }
        console.log("You have added a new employee");
        fs.appendFile("./output/index.html", card, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });    
}

function htmlDone() {
    const html = `
    </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Your team has been built, please check the output folder.");
}

buildTeam();