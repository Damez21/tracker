const mysql = require("mysql");
const inquirer = require("inquirer");
const db = require("../db");

function firstQ() {
    inquirer.prompt([
        {
            type: "list",
            message: "",
            nmae: "",
            choices: [""]
        }
    ]).then(function(depthAnswers){
       console.log(depthAnswers.firstQChoice);
        if (depthAnswers.firstQChoice === "add") {
        addWhat(depthAnswers)
        } else if (depthAnswers.firstQChoice === "view") {
        viewWhat(depthAnswers)
        } else {
        modifywhat(depthAnswers)
        }
    });
}
