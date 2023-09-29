// TODO: Write code to define and export the Employee class

 // create employee class
 class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {             // function to get employee name
        return this.name;
    }
    getId() {               // function to get employee id
        return this.id;
    }
    getEmail() {            // function to get employee email
        return this.email;
    }
    getRole() {             // function to get employee role
        return 'Employee';
    }
}
module.exports = Employee;  // export the employee module