years = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

function availabelToDrive(years) {
    years.forEach((year) => {
        let age = 2021 - year;
        if (age > 17) {
            return "You can drive!"
        } 
        else {
            return "You can't drive!"
        }
    });

    return years;
}

console.log(availabelToDrive(years));