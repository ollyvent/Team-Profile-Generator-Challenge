// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');     // import employee module into a variable

class Engineer extends Employee {           // define engineer extension from employee class
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {                           // function to get employee github repo
        return this.github;
    }
    getRole() {                             // function to get employee role
        return 'Engineer';
    }
}
module.exports = Engineer;                  // export engineer