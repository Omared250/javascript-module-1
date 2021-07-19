names = ["Daniel", "James", "Irina", "Mozafar", "Omar"];

var lookingMyName = names.find((personName) => {
    if (personName === "Omar") {
        console.log("Found me!");
    } else {
        console.log("Haven't found me :(");
    }
});

console.log(lookingMyName);