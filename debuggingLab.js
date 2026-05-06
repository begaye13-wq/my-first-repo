function greetUser(name) {
    console.log("Hello, " + name); // Error: 'Name' should be 'name'
}
 
function divideNumbers(a, b) {
    // Incorrect conditional: using assignment instead of comparison
    if (b === 0) {  
        return "Cannot divide by zero";
    }
    return a / b;
}
 
greetUser("Alice");
console.log("Division result: " + divideNumbers(10, 0));
