const Employee = require('../lib/Employee.js');

class Intern extends Employee{
    constructor(){
        super();
        this.school = '';

    }

    getSchool(){

    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;
