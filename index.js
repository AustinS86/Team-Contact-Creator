const createHTML = require('./src/createHTML.js');
const fs = require('fs');
const inquirer = require('inquirer');
const teamArray = [];

//team folders
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const createManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter your managers name.',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter your managers ID.",
      validate: nameInput => {
        if (ifNaN(nameInput)) {
          console.log("Please enter the manager's ID.")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter your manager's email.",
      validate: email => {
        vaild = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (vaild) {
          return true;
        } else {
          console.log("Please enter a valid email.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter your manager's office number.",
      validate: nameInput => {
        if (ifNaN(nameInput)) {
          console.log("Please enter the manager's name.");
          return false;
        } else {
          return true;
        }
      }
    }
  ])
    .then(managerInput => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    })
};

const addEmployee = () => {
  console.log(`Added Employees to the Team`);

  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Please chose the employee's role.",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "Please enter your emplyee's name.",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please a valid name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter your employee's ID.",
      validate: nameInput => {
        if (isNAN(nameInput)) {
          console.log("Please enter your employee's ID.");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter your employee's email.",
      validate: email => {
        vaild = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log("Please a valid email.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter your employee's GitHub username.",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please a valid name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter your Intern's school name.",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your Intern's school name.");
          return false;
        }
      }
    },
    {
      type: 'comfirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more Team Members',
      default: false
    }
  ])

    .then(employeeData => {

      let { name, id, email, role ,github, school, confirmAddEmployee } = employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    })
};
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err =>{
    if (err) {
      console.log(err);
    return;
    } else{
      console.log("Your team contact information has been created!")
    }
  })
};

createManager()
.then(addEmployee)
.then(teamArray => {
  return generateHTML(teamArray);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
  console.log(err);
});