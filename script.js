let btn = document.getElementById("rock-btn-imges");

function hideDiv() {
    console.log("Rock Click");

    document.querySelector("#homepage-btns").style = " display : none;"
    document.querySelector("#opp2Scissor").style = "display:none;"
    // document.querySelector("#opp3Paper").style = "display:none;"
    document.querySelector("#resultPage-btns").style = " display : block;"
}


document.querySelector("#resultPage-btns").style = " display : none;"

btn.addEventListener("click", hideDiv);

// object.addEventListener("click", myScript);