years = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

function yearsAvailabelToDrive (years) {
    years.filter((year) => {
        if (year <= 2002) {
            return console.log("These are the birth years of people who can drive: " + year);
        }
    })
}

const canDrive = yearsAvailabelToDrive(years);
console.log(canDrive);

