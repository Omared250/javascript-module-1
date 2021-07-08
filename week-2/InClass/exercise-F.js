function validUser(userName, userType) {
    if (((userName.length > 5 && userName.length < 10) && (userName.charAt(0) === userName.charAt(0).toUpperCase())) && (userType === "admin" || userType === "manager")) {
        return "Username Valid."
    } else {
        return "Username Invalid."
    }
}

console.log(validUser("Carlos", "admin"))
console.log(validUser("omar", "admin"))