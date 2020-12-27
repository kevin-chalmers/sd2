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
}

// An array of students.
var students = [
    new Student("001", "Kevin Chalmers"), 
    new Student("002", "Lisa Haskel"), 
    new Student("003", "Arturo Araujo")];

function printStudents() {
    // Build text to display
    var text = "";
    // Iterate over all the students
    for (var student of students) {
        text = text + student.id + ": " + student.name + "<br>";
    }
    // Get the main element
    var main = document.getElementById("main");
    // Set the innerHTML to text
    main.innerHTML = text;
}