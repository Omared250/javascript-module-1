// this function calculate how many plants the store need to sell //

function plantStore(soldPlants, totalOfPlants) {
    const plantsLeft = totalOfPlants - soldPlants;
    const result = "We still need to sell " + plantsLeft + " plants."

    return result;
}

console.log(plantStore(15, 50));

/* What's the difference between a return and console.log?

They are for completely different purposes, console.log will return the value to the browser console if supported, 
return will return a value from the javascript function */

/* When would you choose to use functions over the way we have been scripting so far?

we can use functions in javascript when we want a part of our code to perform a task individually and we want 
to obtain only the result to be able to continue working with our code. */