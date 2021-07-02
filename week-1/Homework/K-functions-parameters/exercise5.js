// Declare your function here
function createLongGreeting(name, age) {
    const lonGreeting = "Hello, my name is " + name + "and I'm " + age + " years old!";
    return lonGreeting;
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
