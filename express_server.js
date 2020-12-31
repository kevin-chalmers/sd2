// Import express.js
const express = require("express");

// Create express app
var app = express();

// Create a get for root - /
app.get("/", function(req, res) {
    res.send("Hello world!");
});

// Create a get for /goodbye
app.get("/goodbye", function(req, res) {
    res.send("Goodbye world!");
});

// Create a get for /hello/<name> with name provided by user
app.get("/hello/:name", function(req, res) {
    res.send("Hello " + req.params.name);
});

app.get("/student/:id/:name", function(req, res) {
    res.send(`
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
        <tr>
            <td>${req.params.id}</td>
            <td>${req.params.name}</td>
        </tr>
    </table>`);
});

// Start server on port 3000
app.listen(3000);