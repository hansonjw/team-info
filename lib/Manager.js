const Employee = require('../lib/Employee.js');

class Manager extends Employee{
    constructor(){
        super();
        this.office = '';

    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;