function greetUser(name) {
    console.log("Hello, " + name);
}
 
function divideNumbers(a, b) {
    
    if (b === 0) {  
        return "Cannot divide by zero";
    }
    return a / b;
}
 
greetUser("Alice");
console.log("Division result: " + divideNumbers(10, 0));
