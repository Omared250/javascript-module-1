years = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

function availableToDrive(year) {
    let age = 2021-year;
    if(age >= 17) {
        return "Born in " + year + " can drive";
    } else {
        return "Born in " + year + " can drive in " + (17-age) + " years";      
    }
}

const canDrive = years.map(availableToDrive);

console.log(canDrive);