//EMPLOYEE PARENT CLASS, constructor function

class Employee {
  
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    };

    //returns the name
    getName() {
      return this.name;
    };
  
    //returns the id
    getId() {
      return this.id;
    };
    
    //returns the email
    getEmail() {
      return this.email;
    };
    //returns the role or title
    getRole() {
      return "Employee";
    };
  };
  
  module.exports = Employee;


// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

// Inherited
// Manager, Engineer, intern - extend/super to make new


// Manager - Add officeNumber and getRole() // Overridden to return 'Manager'
// Engineer -  github username/getGithub()getRole() // Overridden to return 'Engineer'
// Intern - school, getSchool(), getRole() // Overridden to return 'Intern'

