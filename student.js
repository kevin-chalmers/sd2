// Tells the browser we want JavaScript to run in strict mode.
// This means faster code, but JavaScript needs to be cleaner.
"use strict";

// A definition of a programme
class Programme {
    // Programme code
    #code;
    // Programme name
    #name;

    // Creates a new instance of type Programme
    constructor(code, name) {
        this.#code = code;
        this.#name = name;
    }

    // Get code
    get code() {
        return this.#code;
    }

    // Set code
    set code(value) {
        this.#code = value;
    }

    // Get name
    get name() {
        return this.#name;
    }

    // Set name
    set name(value) {
        this.#name = name;
    }
}

// A definition of a student
class Student {
    // Student ID
    #id;
    // Student name
    #name;
    // Student programme
    #programme;

    // Creates a new instance (object) of type Student
    constructor(id, name, programme) {
        // Set the id and name of the object instance
        this.#id = id;
        this.#name = name;
        this.#programme = programme;
    }

    tableRow() {
        return `<tr><td>${this.#id}</td><td>${this.#name}</td><td>${this.#programme.name}</td></tr>`;
    }
}

// An array of students.
var students = [
    new Student("001", "Kevin Chalmers", new Programme("001", "Software Engineering")), 
    new Student("002", "Lisa Haskel", new Programme("002", "Computing")), 
    new Student("003", "Arturo Araujo", new Programme("003", "Physics"))];

function printStudents() {
    // Build html for table.
    var html = `
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Programme</th>
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
}