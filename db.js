const mysql = require("mysql");
const prompts = require("./lib/promts")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3000
    user: "root"
    password: "dameroot",
    database: "employee_tracker"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    prompts.firstQ();
});

exports.connection = connection 