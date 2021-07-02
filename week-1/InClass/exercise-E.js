// example how to concat strings

const name = "Omar ";
const greeting1 = "Hello, ";
const greeting2 = "How are you today?";

const fullgreeting = greeting1 + name + greeting2;

console.log(fullgreeting); // Hello, Omar How are you today?


// example how to use interpolation to concat strings

const name2 = "Omar";
const greeting = "Hello, "

const fullgreeting2 = `${greeting} How is the coding going ${name2}?`;

console.log(fullgreeting2);