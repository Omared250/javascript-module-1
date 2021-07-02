function gettinAge(age) {
    return age = 2021 - age -1;
}

function getYearOfBirth(name, age) {
    const yearOfBirth = name + " you have been born in " + gettinAge(age);
    
    return yearOfBirth;
}

console.log(getYearOfBirth("Omar", 26));
