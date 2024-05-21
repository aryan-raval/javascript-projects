let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#btn-reset');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');
let btnNew = document.querySelector('#btn-new');

const winner = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
let turnO = true;

let count = 0;

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.textContent = "O";
            box.classList.add("red");
            turnO = false;
        } else {
            box.textContent = "X";
            box.classList.add("blue");
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })

})

const disableButton = () => {
    boxes.forEach((box) => {
        // box.innerText = "";
        box.disabled = true;
    })
}

const enableButton = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";

    })
}

const drawMatch = () => {
    msgContainer.classList.remove('hide');
    msg.innerText = `Opps Match Has Been Draw !`;
    disableButton();
}


const resetGame = () => {
    count = 0;
    turnO = true;
    msgContainer.classList.add('hide');
    enableButton();

}
const showWinner = (winner) => {
    msgContainer.classList.remove('hide');
    msg.innerText = `Congratulations ! \n Winner is ${winner}`;
    count = 0;
    disableButton();
}
const checkWinner = () => {
    let winnerFound = false;
    count++;

    for (let position of winner) {

        const val1 = boxes[position[0]].innerText;
        const val2 = boxes[position[1]].innerText;
        const val3 = boxes[position[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
                winnerFound = true;
            }

        }
        if (!winnerFound && count >= 9) {
            drawMatch();
        }

    }
}

reset.addEventListener("click", resetGame);
btnNew.addEventListener("click", resetGame);