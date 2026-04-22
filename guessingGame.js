const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 3;
let guessedCorrectly = false;

while (attempts < maxAttempts && !guessedCorrectly) {
    let userGuess = prompt("Guess a number between 1 and 10. Attempts ${attempts + 1} of${maxAttempts}:");
    userGuess = Number(userGuess);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        continue;
    }
    if (userGuess === secretNumber) {
        alert("Congratulations! You've guessed the number!");
        guessedCorrectly = true;
    } else if (userGuess > secretNumber) {
        alert("Too high! Try again.");
        attempts++;
    } else {
        alert("Too low! Try again.");
        attempts++;
    }

    if(!guessedCorrectly) {
        alert("Sorry, you've used all your attempts. The secret number was " + secretNumber + ".");
    }
    