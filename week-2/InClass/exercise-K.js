const students = ["Omar", "Eduardo", "Bianca", "Emily", "Stephanny", "Virginia"];

function studentsArray(arr) {
    for (i = 0; i < arr.length; i ++) {
        const studentsMessage = "The students are: " + arr[i];
        console.log(studentsMessage);
    }
}

console.log(studentsArray(students));