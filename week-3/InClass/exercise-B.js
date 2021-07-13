
let arrayListOfTheClass = ["Omar", "Bianca", "Ananda", "Rana", "Diego", "Fran", "Elmira", "Suman"];
let arrayAnotherClass = ["Maxwell", "William", "Luiza", "Said", "Amritpal", "Laura"];

let combinedArrayClasses = arrayListOfTheClass.concat(arrayAnotherClass);


function returningString (name, arrayClass) {
    if (arrayClass.includes(name)) {
        return name + " is at the class with " + arrayClass;
    } 
    else {
        return name + " is not at the class with " + arrayClass;
    }
}

console.log(combinedArrayClasses.sort());
console.log(returningString("Omar", arrayListOfTheClass));
console.log(returningString("Omar", arrayAnotherClass));
