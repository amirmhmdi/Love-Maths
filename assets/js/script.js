
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
});

function runGame(gameType) {
    // create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    switch (gameType) {
        case "addition":
            displayAdditionQuestion(num1, num2);
            break;
        case "subtract":
            displaySubtractQuestion(num1, num2);
            break;
        case "multiply":
            displayMultiplyQuestion(num1, num2);
            break;
        case "division":
            displayDivideQuestion(num1, num2);
            break;
        default:
            alert(`Unknown game type: ${gameType}`);
            break;
    }
}

/**
 * Checks the answer against the first element in the returned calculateCorrectAnswer array
 */
function checkAnswer() { 
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}


/**
 * Calculates the correct answer to the question
 * get the operands (the numbers) and the operator (plus, minus, etc)
 * and returns the correct answer.
 */
function calculateCorrectAnswer() { 
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    switch (operator) {
        case "+":
            return [operand1 + operand2, "addition"];
        case "-":
            return [operand1 - operand2, "subtract"];
        case "x":
            return [operand1 * operand2, "multiply"];
        case "/":
            return [operand1 / operand2, "division"];
        default:
            alert(`Unimplemented operator ${operator}`);
            return [NaN, operator];
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() { 
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() { 
    let oldWrongAnswers = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldWrongAnswers;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
 }

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";
 }

function displayMultiplyQuestion(operand1, operand2) { 
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "x";
}

function displayDivideQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}