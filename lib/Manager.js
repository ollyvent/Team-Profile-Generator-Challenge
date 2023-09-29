// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee');             // import employee module and save in a variable

class Manager extends Employee {                    // extend manager class from employee module
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {                             // get office number of manager
        return this.officeNumber;
    }
    getRole() {                                     // function to get manager role
        return 'Manager';
    }
}
module.exports = Manager;                           // export manager module