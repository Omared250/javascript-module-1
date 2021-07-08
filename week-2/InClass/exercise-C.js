function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}

console.log(numberChecker("omar"));

/* In this exercise the function take a number and evaluate each case that the if is saying 
    in this case is trying to evaluate if a number is grater, equal, less or just is not a number
*/
