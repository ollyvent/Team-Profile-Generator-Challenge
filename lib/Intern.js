// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');         // import employee module

class Intern extends Employee {                 // extend intern class from employee
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {                               // function to get school name from intern
        return this.school;
    }
    getRole() {                                 // function to get role name from intern
        return 'Intern';
    }
}
module.exports = Intern;                        // export intern module