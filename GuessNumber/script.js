let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
let playGame = true;

let attempts = 1;


const p = document.createElement('p');
const user = document.querySelector("#userInput");
const submit = document.querySelector("#submit");
const message = document.querySelector('.message');
const prevGuess = document.querySelector('.prevGuess');
const remGuess = document.querySelector('.remGuess');
const msgDiv = document.querySelector('.msgContainer');


const displayMsg = (msg)=>{
    message.innerText=msg;
   
}


const displayGuess = (guess)=>{
    user.value='';
    prevGuess.innerText += `${guess} , `;
    attempts++;
    remGuess.innerText = `${11-attempts}`;

}


const newGame = ()=>{
    const btnNew = document.querySelector('.btn-newGame');
    btnNew.addEventListener('click', ()=>{
        randomNumber=parseInt(Math.random() * 100 +1);
        user.removeAttribute('disabled');
        submit.removeAttribute('disabled','');
        attempts=1;
        prevGuess.innerText='';
        remGuess.innerText = `${11-attempts}`;
        msgDiv.removeChild(p);
        message.innerText="you will find status here";
        playGame=true;
    })
}


const endGame = ()=>{
    playGame=false;
    user.value='';
    user.setAttribute('disabled','');
    submit.setAttribute('disabled','');
    p.classList.add('btn-newGame');
    p.innerHTML=`<h3>Start New Game</h3>`;
    msgDiv.appendChild(p);
    newGame();
}



const checkGuess = (guess)=>{
    if(guess == randomNumber){
       displayMsg(`hurrey ! you guess it right...`);
       endGame();
    }else if(guess > randomNumber){
        displayMsg(`opps ! its too high.`);
    }else if (guess < randomNumber){
        displayMsg(`opps ! its too low.`);
    }
}
        


const validateGuess = (guess)=> {
    if(isNaN(guess)){
        alert("please enter valid number");
    }else if(guess==""){
        alert("input field must not be blank ");
    }else if(guess <= 0){
        alert("please enter number between 1 to 100");
    }else if(guess >= 101){
        alert("please enter number between 1 to 100");
    }else{
        
        if(attempts === 11){
            displayMsg(`opps ! game over ! random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
       
}




if(playGame){

    submit.addEventListener("click",()=>{
        const userInput = user.value;
        // console.log(userInput);
        validateGuess(userInput);
    })
}