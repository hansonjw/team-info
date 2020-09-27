const fs = require('fs');
const inquirer = require('inquirer');

const { writeFile, copyFile } = require('./src/generate-site.js');
const generatePage = require('./src/generatepage.js');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

const basicQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team member's name?"
    },
    {
        type: 'input',
        name: 'email',
        message: "what is the team member's email address?"
    },
    {
        type: 'input',
        name: 'id',
        message: "what is the team member's employee id?"
    }
]

const addlQuestions = {
    Engineer: {
        type: 'input',
        name: 'github',
        message: 'What is Github username for this engineer?'
    },
    
    Intern: {
        type: 'input',
        name: 'school',
        message: 'What school did this intern attend?'
    },
    
    Manager: {
        type: 'input',
        name: 'office',
        message: 'What is the office number for this manager?'
    }
}

// Define next employee options utilizing keys of above object
let employeeOptions = Object.keys(addlQuestions);
employeeOptions.pop();
employeeOptions.push('No more employees to enter...');
let allEmployees = [];

const nextTypeChoices = [
    {
    type: 'list',
    name: 'nextType',
    message: 'What type of employee is next to add?',
    choices: employeeOptions
    }
]

function createFiles (teamArray) {
    let pageHTML = generatePage(teamArray);
    console.log(pageHTML);
    writeFile(pageHTML)
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
}

function getData(employeeType){
    
    if (employeeType == 'Manager'){
        newEmployee = new Manager;
    }else if (employeeType == 'Engineer'){
        newEmployee = new Engineer;
    }else if (employeeType == 'Intern'){
        newEmployee = new Intern;
    }else{
        console.log("Thanks for providing all this data...we'll now create your page...");
        // call function to create page...
        console.log(allEmployees);
        createFiles(allEmployees);
        return;
    }

    //build new question array based on employee type
    let questionsArray = basicQuestions;
    questionsArray.push(addlQuestions[employeeType]);
    questionsArray.push(nextTypeChoices[0]);

    // ask user for input
    inquirer.prompt(questionsArray).then(answer => {
        newEmployee.name = answer.name;
        newEmployee.email = answer.email;
        newEmployee.id = answer.id;
        newEmployee[addlQuestions[newEmployee.getRole()]["name"]] = answer[addlQuestions[newEmployee.getRole()]["name"]];
        
        //clear the questions array
        questionsArray.pop();
        questionsArray.pop();
        buildArray(newEmployee, answer.nextType);
    });
}

function buildArray (employeeToAdd, nextType){
    allEmployees.push(employeeToAdd);
    getData(nextType);
}


console.log("Let's collect your team data. First we'll start with the Manager...");
getData('Manager');