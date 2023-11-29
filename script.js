let btn1 = document.getElementById("rock-btn-imges");
let btn2 = document.getElementById("scissorImg")
let btn3 = document.getElementById("paperImg")
let replay = document.getElementById("play-again-btn")

let userScore = document.getElementById("userScore");
let compScore = document.getElementById("compScore");
let nextBtn = document.querySelector(".btn-wrap2");
let closeBtn = document.querySelector(".close-btn");
let rulesBtn = document.querySelector("#Rule-btn");



function rockHideDiv() {
    document.querySelector("#homepage-btns").style = " display : none;"
    document.querySelector("#resultPage-btns").style = "display : block;"
    console.log("Rock Click");
    let num = Math.floor(Math.random() * 3) + 1;

    if(num == 1) {
        //Rock
        document.querySelector("#opp2Paper").style = "display:none;"
        document.querySelector("#opp2Scissor").style = "display:none;"
        document.querySelector("#opp2Rock").style = "display:block;"
        nextBtn.style = "display:none"

        

        document.getElementById("resultText").textContent = "TIE UP"
        document.getElementById("play-again-btn").textContent = "REPLAY"

    }
    else if(num == 2) {
        //Paper
        document.querySelector("#opp2Rock").style = "display:none;"
        document.querySelector("#opp2Scissor").style = "display:none;"
        document.querySelector("#opp2Paper").style = "display:block;"
        nextBtn.style = "display:none"


        let score = compScore.textContent;
        compScore.textContent = parseInt(score) + 1;

        document.getElementById("resultText").textContent = "YOU LOST"
        document.getElementById("play-again-btn").textContent = "PLAY AGAIN"



    }else {
        //Scissor
        document.querySelector("#opp2Rock").style = "display:none;"
        document.querySelector("#opp2Paper").style = "display:none;"
        document.querySelector("#opp2Scissor").style = "display:block;"
        nextBtn.style = "display:block"

        let score = userScore.textContent;
        userScore.textContent = parseInt(score) + 1;

        document.getElementById("resultText").textContent = "YOU WIN"
        document.getElementById("play-again-btn").textContent = "PLAY AGAIN"

    }

    document.querySelector("#opp1Scissor").style = "display:none;"
    document.querySelector("#opp1Paper").style = "display:none;"
    document.querySelector("#opp1Rock").style = "display:block;"


}

function scisssorHideDiv() {
    document.querySelector("#homepage-btns").style = " display : none;"
    document.querySelector("#resultPage-btns").style = "display : block;"

    let num = Math.floor(Math.random() * 3) + 1;

    if(num == 1) {
        //Rock
        document.querySelector("#opp2Paper").style = "display:none;"
        document.querySelector("#opp2Scissor").style = "display:none;"
        document.querySelector("#opp2Rock").style = "display:block;"
        nextBtn.style = "display:none"


        let score = compScore.textContent;
        compScore.textContent = parseInt(score) + 1;

        document.getElementById("resultText").textContent = "YOU LOST"
        document.getElementById("play-again-btn").textContent = "PLAY AGAIN"

    }
    else if(num == 2) {
        //Paper
        document.querySelector("#opp2Rock").style = "display:none;"
        document.querySelector("#opp2Scissor").style = "display:none;"
        document.querySelector("#opp2Paper").style = "display:block;"
        nextBtn.style = "display:block"


        let score = userScore.textContent;
        userScore.textContent = parseInt(score) + 1;

        document.getElementById("resultText").textContent = "YOU WIN"
        document.getElementById("play-again-btn").textContent = "PLAY AGAIN"

    }else {
        //Scissor
        document.querySelector("#opp2Rock").style = "display:none;"
        document.querySelector("#opp2Paper").style = "display:none;"
        document.querySelector("#opp2Scissor").style = "display:block;"
        nextBtn.style = "display:none"


        document.getElementById("resultText").textContent = "TIE UP"
        document.getElementById("play-again-btn").textContent = "REPLAY"

    }

    document.querySelector("#opp1Rock").style = "display:none;"
    document.querySelector("#opp1Paper").style = "display:none;"
    document.querySelector("#opp1Scissor").style = "display:block;"

}

function paperHideDiv() {
    document.querySelector("#homepage-btns").style = " display : none;"
    document.querySelector("#resultPage-btns").style = " display : block;"

    let num = Math.floor(Math.random() * 3) + 1;

    if(num == 1) {
        //Rock
        document.querySelector("#opp2Paper").style = "display:none;"
        document.querySelector("#opp2Scissor").style = "display:none;"
        document.querySelector("#opp2Rock").style = "display:block;"
        nextBtn.style = "display:block"


        let score = userScore.textContent;
        userScore.textContent = parseInt(score) + 1;

        document.getElementById("resultText").textContent = "YOU WIN"
        document.getElementById("play-again-btn").textContent = "PLAY AGAIN"
    }
    else if(num == 2) {
        //Paper
        document.querySelector("#opp2Rock").style = "display:none;"
        document.querySelector("#opp2Scissor").style = "display:none;"
        document.querySelector("#opp2Paper").style = "display:block;"
        nextBtn.style = "display:none"


        document.getElementById("resultText").textContent = "TIE UP"
        document.getElementById("play-again-btn").textContent = "REPLAY"
    }else {
        //Scissor
        document.querySelector("#opp2Rock").style = "display:none;"
        document.querySelector("#opp2Paper").style = "display:none;"
        document.querySelector("#opp2Scissor").style = "display:block;"
        nextBtn.style = "display:none"


        let score = compScore.textContent;
        compScore.textContent = parseInt(score) + 1;

        document.getElementById("resultText").textContent = "YOU LOST"
        document.getElementById("play-again-btn").textContent = "PLAY AGAIN"

    }

    document.querySelector("#opp1Rock").style = "display:none;"
    document.querySelector("#opp1Scissor").style = "display:none;"
    document.querySelector("#opp1Paper").style = "display:block;"
  
}





document.querySelector("#resultPage-btns").style = " display : none;"
document.querySelector(".RuleTexts").style = "display:none"
nextBtn.style = "display:none"


btn1.addEventListener("click", rockHideDiv);
btn2.addEventListener("click", scisssorHideDiv);
btn3.addEventListener('click',paperHideDiv);

// object.addEventListener("click", myScript);

replay.addEventListener("click", () => {
document.querySelector("#resultPage-btns").style = " display : none;"
document.querySelector("#homepage-btns").style = " display : flex;"
nextBtn.style = "display:none"

})

closeBtn.addEventListener("click",() => {
    document.querySelector(".RuleTexts").style = "display:none"
})

rulesBtn.addEventListener("click",() => {
    document.querySelector(".RuleTexts").style = "display:block"
})