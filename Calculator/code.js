let btns = document.querySelectorAll(".btn");
let val1 = 0;
let val2 = 0;
let screen = document.querySelector(".screen");
let operator = null ;

btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
    let value = btn.innerText;
    if(!isNaN(value) || value === "."){
        screen.innerText += value;
    }
    else if(value === "C"){
        screen.innerText = screen.innerText.slice(0,-1)
    }
    else if(value === "CE"){
        val1 = 0;
        val2 = 0;
        screen.innerText = ""
    }
    else if(value === "+" || value === "-" || value === "/" || value === "*"){
        val1 = Number(screen.innerText)
        operator = value ;
        screen.innerText = ""
    }
    else if(value === "√"){
        val1 = Number(screen.innerText)
        if(val1 >= 0){
            let res =Math.sqrt(val1);
            screen.innerText = res
        }
        else{
            screen.innerText = "Math Error"
        }
    }
    else if(value === "%"){
        val1 = Number(screen.innerText)
        operator = value ;
        screen.innerText = ""
    }
    else if(value === "="){
        val2 = Number(screen.innerText)
        let result;
        if(operator === "+") result=val1 + val2
        else if(operator === "-") result=val1 - val2
        else if(operator === "/") result = val1 / val2
        else if(operator === "*") result = val1 * val2
        else if(operator === "%") result = val1 % val2;

        screen.innerText = result;
    }
    })
})