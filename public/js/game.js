// fungsi dari pilihan komputer secara acak
function getComChoice() {
    const comChoice = Math.floor(Math.random() * 3);
    if (comChoice === 0) {
        const comRock = document.querySelector(".com-rock");
        comRock.style.backgroundColor = "white";
        comRock.style.borderRadius = "10px";
        return "rock";
    }

    if (comChoice === 1) {
        const comPaper = document.querySelector(".com-paper");
        comPaper.style.backgroundColor = "white";
        comPaper.style.borderRadius = "10px";
        return "paper";
    }

    if (comChoice === 2) {
        const comScissors = document.querySelector(".com-scissors");
        comScissors.style.backgroundColor = "white";
        comScissors.style.borderRadius = "10px";
        return "scissors";
    }
}

// fungsi dari peraturan dan hasil permin permianan
function getResult(comChoice, playerChoice) {
    if (comChoice === playerChoice) return "Draw Game";
    if (comChoice === "rock" && playerChoice === "paper") return "You Win";
    if (comChoice === "rock" && playerChoice === "scissors") return "You Lose";
    if (comChoice === "paper" && playerChoice === "scissors") return "You Win";
    if (comChoice === "paper" && playerChoice === "rock") return "You Lose";
    if (comChoice === "scissors" && playerChoice === "rock") return "You Win";
    if (comChoice === "scissors" && playerChoice === "paper") return "You Lose";
}

// fungsi dari pilihan player - rock
const playerRock = document.querySelector(".rock");
playerRock.addEventListener("click", rockButtonEffect);

function endRock() {
    playerRock.removeEventListener("click", rockButtonEffect);
}

function rockButtonEffect() {
    const comChoice = getComChoice();

    const playerChoice = playerRock.className;
    playerRock.style.backgroundColor = "white";
    playerRock.style.borderRadius = "10px";

    const result = getResult(comChoice, playerChoice);

    const display = document.querySelector(".display");
    display.innerHTML = result;
    display.style.backgroundColor = "green";
    display.style.fontSize = "32px";
    display.style.color = "white";
    display.style.padding = "20px";
    display.style.borderRadius = "10px";
    display.style.transform = "rotate(-15deg)";

    stopGame = [endRock(), endPaper(), endScissors()];

    console.log(comChoice);
    console.log(playerChoice);
    console.log(result);
}

// fungsi dari pilihan player - paper
const playerPaper = document.querySelector(".paper");
playerPaper.addEventListener("click", paperButtonEffect);

function endPaper() {
    playerPaper.removeEventListener("click", paperButtonEffect);
}

function paperButtonEffect() {
    const comChoice = getComChoice();

    const playerChoice = playerPaper.className;
    playerPaper.style.backgroundColor = "white";
    playerPaper.style.borderRadius = "10px";

    const result = getResult(comChoice, playerChoice);

    const display = document.querySelector(".display");
    display.innerHTML = result;
    display.style.backgroundColor = "green";
    display.style.fontSize = "32px";
    display.style.color = "white";
    display.style.padding = "20px";
    display.style.borderRadius = "10px";
    display.style.transform = "rotate(-15deg)";

    stopGame = [endRock(), endPaper(), endScissors()];

    console.log(comChoice);
    console.log(playerChoice);
    console.log(result);
}

// fungsi dari pilihan player - scissors
const playerScissors = document.querySelector(".scissors");
playerScissors.addEventListener("click", scissorsEffect);

function endScissors() {
    playerScissors.removeEventListener("click", scissorsEffect);
}

function scissorsEffect() {
    const comChoice = getComChoice();

    const playerChoice = playerScissors.className;
    playerScissors.style.backgroundColor = "white";
    playerScissors.style.borderRadius = "10px";

    const result = getResult(comChoice, playerChoice);

    const display = document.querySelector(".display");
    display.innerHTML = result;
    display.style.backgroundColor = "green";
    display.style.fontSize = "32px";
    display.style.color = "white";
    display.style.padding = "20px";
    display.style.borderRadius = "10px";
    display.style.transform = "rotate(-15deg)";

    stopGame = [endRock(), endPaper(), endScissors()];

    console.log(comChoice);
    console.log(playerChoice);
    console.log(result);
}

// fungsi dari tombol refresh
function refresh() {
    window.location.reload("refresh");
}
