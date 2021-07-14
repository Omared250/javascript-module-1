names = ["Daniel", "James", "Irina", "Mozafar", "Omar"];

function foundMyName (myName) {
    if (myName.find(names => names === myName)) {
        return "Found me!";
    } else {
        return "Haven't found me :(";
    }
}

console.log(foundMyName("Omar"));