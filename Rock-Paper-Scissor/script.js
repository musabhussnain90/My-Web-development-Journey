let userScore = 0;
let compScore = 0;

let userScr = document.querySelector("#user-score")
let compScr = document.querySelector("#comp-score")
let msg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        //user Choice.
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
// Draw 
let draw = () => {
    msg.innerText = "Game was Draw...Play again!"
    msg.style.backgroundColor = "rgb(13, 13, 67)"
}
//generating computer Choice
let genCompChoice = () => {
    let array = ["rock", "paper", "scissors"]
    let randID = Math.floor(Math.random() * 3);
    return array[randID];
}
let playGame = (userChoice) => {
    //computer choice
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        //In  case of Draw
        draw();
    }
    else {
        isWinner = true;
        if (userChoice === "rock") {
            //paper,scissor
            isWinner = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock,scissor
            isWinner = compChoice === "rock" ? true : false;
        }
        else {
            //rock,paper
            isWinner = compChoice === "rock" ? false : true;
        }
        if(isWinner){
            msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
            msg.style.backgroundColor = "green"
        }
        else{
            msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
            msg.style.backgroundColor = "red"
        }
        if(isWinner){
            userScore++;
            userScr.innerText = userScore;
        }
        else if(isWinner === false){
            compScore++;
            compScr.innerText = compScore;
        }
    }
}