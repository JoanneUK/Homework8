//extends the employee class
const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, school){
        //super gets the employee properties
        super(name, id, email);
        //this. adds the employee properties
        this.school = school;   
    };

    //returns the school of the employee
    getSchool() {
        return this.school;
    };

    //returns the role of the employee
    getRole() {
        return "Intern";
    };

    getHTML()//method
    {
        let html = `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${this.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${this.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">School: ${this.school}</li>
        </ul>
    </div>
</div>`
return html//complete the method
    }    

};
//.exports allows this page to be used elsewhere
module.exports = Intern;




