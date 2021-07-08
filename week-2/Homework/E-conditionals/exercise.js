/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";

function checkDanielRole(name, danielsRole) {
  if (name === "Daniel" && danielsRole === "mentor") {
    return `Hi, I'm ${name}, I'm a ${danielsRole}.`
  } else {
    return `Hi, I'm ${name}, I don't know which is my role.`
  }
}

console.log(checkDanielRole(name, danielsRole));

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
