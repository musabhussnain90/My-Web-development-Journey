let btns = document.querySelectorAll(".btn");
let currPlayer = document.querySelector(".CurrentPlayer")
let newGame = document.querySelector("#new-btn")
let user = document.querySelector(".winner")
let current = "O";

newGame.addEventListener("click", () => {
    btns.forEach(Element => {
        Element.innerText = ""
    })
    currPlayer.innerText = `Current Player = ${current}`
    enable()
    user.innerText = "Play Again!"
})

let winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let enable = () => {
    for (btn of btns) {
        btn.disabled = false;
    }
}
let draw = () =>{
    user.innerText = "The Game Ended in Draw!!"
}
let disable = () => {
    for (btn of btns) {
        btn.disabled = true;
    }
}
let showWinner = (name) => {
    user.innerText = `Congratulation ,The winner is ${name}`
    disable()
}
let winner = () => {
    let isWinner = false;
    for (let pattern of winPattern) {
        let val1 = btns[pattern[0]].innerText;
        let val2 = btns[pattern[1]].innerText;
        let val3 = btns[pattern[2]].innerText;
        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
                isWinner = true;
            }
        }
    }

    if(!isWinner){
        let filled = [...btns].every(btn => btn.innerText !== "")
        if(filled) draw()
    }
}

let isTrue = true;
currPlayer.innerText = `Current Player = ${current}`
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (isTrue) {
            btn.innerText = "O"
            if (btn.innerText === "O") {
                btn.style.color = "red"
            }
            isTrue = false;
            current = "X"
            currPlayer.innerText = `Current Player = ${current}`
        }
        else {
            btn.innerText = "X"
            if (btn.innerText === "X") {
                btn.style.color = "blue"
            }
            isTrue = true;
            current = "O"
            currPlayer.innerText = `Current Player = ${current}`
        }
        btn.disabled = true;
        winner()
    })
});