
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

function checkAnswer() { }

function calculateCorrectAnswer() { }

function incrementScore() { }

function incrementWrongAnswer() { }

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
 }

function displaySubtractQuestion() { }

function displayMultiplyQuestion() { }

function displayDivideQuestion() { }