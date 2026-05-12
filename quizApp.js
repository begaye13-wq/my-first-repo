const quizQuestions = [
  { question: "Are we able to execute JavaScript code directly in the processor?", answer: "false" },
  { question: "One of the task of the interpreter is transforming the individual commands of the source code into the target form?", answer: "false" },
  { question: "let n = Number\(\"1024\"\) will convert the string \"1024\" into a number?", answer: "true" },
  { question: "the result of the operation: !(True && false) will be?", answer: "false" },
  { question: "The unshift method works similatrity to the push method but instead of adding an element to the end of the array, it adds it to the beginning?", answer: "true" },

];
function askQuestion(questionObj) {
    let userAnswer;
    do {
        userAnswer = prompt(questionObj.question);
        if (userAnswer === null) {
            userAnswer = "";
        }
    } while(userAnswer.trim() === "");
    return userAnswer.toLowerCase();
}
function runQuiz() {
    let score = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
        let isCorrect = askQuestion(quizQuestions[i]);
        if (isCorrect) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }  
    return score;
}
try {
    let name = prompt("What is your name?");
    if (name === null || name.trim() === "") {
        name = "Player";
    }
    alert(`Hello, ${name}! Welcome to the JavaScript Quiz!`);
    let finalScore = runQuiz();
    alert(`Great job, ${name}! Your final score is: ${finalScore} out of ${quizQuestions.length}`);
    let playAgain = window.confirm("Do you want to play again?");
    if (playAgain) {
        location.reload();
    }
} catch (error) {
    alert("An unexpected error occurred. please refresh the page and try again.");
    console.error(error);
}