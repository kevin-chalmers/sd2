// Tells the browser we want JavaScript to run in strict mode.
// This means faster code, but JavaScript needs to be cleaner.
"use strict";

// A definition of a student
class Student {
    // Student ID
    id;
    // Student name
    name;

    // Creates a new instance (object) of type Student
    constructor(id, name) {
        // Set the id and name of the object instance
        this.id = id;
        this.name = name;
    }

    tableRow() {
        return `<tr><td>${this.id}</td><td>${this.name}</td></tr>`;
    }
}

function printStudents() {
    $.getJSON("/students", function(result) {
        // Create array of students
        var students = [];
        // Iterate over data returned
        for (var row of result) {
            var student = new Student(row.id, row.name);
            students.push(student);
        }
        // Build html for table.
        var html = `
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        `;
        // Iterate over all the students
        for (var student of students) {
            html += student.tableRow();
        }
        // End html table.
        html += `</table>`
        // Get the main element
        var main = document.getElementById("main");
        // Set the innerHTML to html
        main.innerHTML = html;
    });
}