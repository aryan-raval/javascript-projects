let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const message = document.querySelector("#msg");


const getCompChoice = () => {
    const choice = ["Rock", "Paper", "Scissor"];
    const index = Math.floor(Math.random() * 3);

    return choice[index];

}

const drawMatch = () => {
    message.innerText = `Match has been draw ! try new game.`;
    message.style.background = "darkslategray";
}

const checkWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `yeah ! you win your ${userChoice} beats comp's ${compChoice}`;
        message.style.background = "green";


    } else {
        compScore++;
        compScorePara.innerText = compScore;
        message.innerText = `opps ! you loose comp's ${compChoice} beats your ${userChoice}`;
        message.style.background = "red";
    }
}

const startGame = (userChoice) => {


    const compChoice = getCompChoice();


    if (userChoice === compChoice) {
        drawMatch();
    } else {
        let userWin = true;

        if (userChoice === "Rock") {

            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {

            userWin = compChoice === "Scissor" ? false : true;
        } else {

            userWin = compChoice === "Rock" ? false : true;
        }
        checkWinner(userWin, userChoice, compChoice);
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        startGame(userChoice);
    })

})