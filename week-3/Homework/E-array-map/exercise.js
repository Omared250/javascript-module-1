// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

/*function numberXHundred(number) {
    return number * 100;    
}*/

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var numberXHundred = numbers.map((number) => number * 100);
console.log(numberXHundred);

//var MappingNumbers = numbers.map(numberXHundred);
//console.log(MappingNumbers);

/*var numberXHundred = numbers.map(function result(number) {
    return number * 100;
});

console.log(numberXHundred);*/

/*var numberXHundred = numbers.map(function (number) {
    return number * 100;
});

console.log(numberXHundred);*/