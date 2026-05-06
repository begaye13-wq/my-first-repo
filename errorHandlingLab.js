function safeDivide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;

try {
    let result = safeDivide(10, 0);
    console.log("Result is: " + result);
} catch (error) {
    console.error("An error occurred: " + error.message);
}
