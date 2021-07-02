function mentorName(name) {
    return name.toUpperCase();
}

function greetingAMentor(name, greeting) {
    return greeting.toUpperCase() + mentorName(name);  
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(greetingAMentor(mentor1, "hello, "))
console.log(greetingAMentor(mentor2, "hello, "))
console.log(greetingAMentor(mentor3, "hello, "))
console.log(greetingAMentor(mentor4, "hello, "))
console.log(greetingAMentor(mentor5, "hello, "))