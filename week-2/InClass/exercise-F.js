function validUser(userName) {
    if (userName.length > 5 && userName.length < 10) {
        return "Username Valid."
    }
}

console.log(validUser("Carlos"))