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
        this.#name = value;
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

// Dictionary of Programmes
var programmes = {
    "Comp": new Programme("001", "Computing"),
    "SoftEng": new Programme("002", "Software Engineering"),
    "Phys" : new Programme("003", "Physics")
};

// An array of students.
var students = [
    new Student("001", "Kevin Chalmers", programmes["SoftEng"]), 
    new Student("002", "Lisa Haskel", programmes["Comp"]), 
    new Student("003", "Arturo Araujo", programmes["Phys"]),
    new Student("004", "Foo Bar", programmes["Comp"])];

// Change the name of Comp programme to Computer Science
programmes["Comp"].name = "Computer Science";

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

function addStudent() {
    // Get the value in the student ID textbox.
    var id = document.getElementById("studentID").value;
    // Get the value in the student name textbox.
    var name = document.getElementById("studentName").value;
    // Get the value in the student programme textbox.
    var programme = document.getElementById("studentProgramme").value;
    // Clear the textboxes
    document.getElementById("studentID").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("studentProgramme").value = "";
    // Create the student object
    // We lookup the programme from the programmes dictionary.
    var student = new Student(id, name, programmes[programme]);
    // Add student to the students array
    students.push(student);
    // Redisplay the table
    printStudents();
}