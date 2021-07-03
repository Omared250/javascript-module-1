const numbersOfStudents = 18;
const numbersOfMentors = 5;

const totalOfPersons = numbersOfMentors + numbersOfStudents;

var percentageMentors = (numbersOfMentors / totalOfPersons)*100;
var percentageStudents = (numbersOfStudents / totalOfPersons)*100;

var intpercentageMentors = Math.round(percentageMentors);
var intpercentageStudents = Math.round(percentageStudents);

console.log(intpercentageMentors + "% of the class are Mentors");
console.log(intpercentageStudents + "% of the class are Students");