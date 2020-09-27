const Employee = require('../lib/Employee.js');

class Engineer extends Employee{
    constructor(){
        super();
        this.github = '';

    }

    getGithub(){
        
    }
    
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;