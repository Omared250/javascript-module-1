years = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

function yearsAvailabelToDrive (years) {
    years.map((year) => {
        if (year <= 2002) {
            return year;
        }
    }).filter((canDrive) => console.log("These are the birth years of people who can drive: " + canDrive));
}

const canDrive = yearsAvailabelToDrive(years);

console.log(canDrive);

