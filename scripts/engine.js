let emojis = ["🤑","🤑","😤","😤","🤯","🤯","🥶","🥶","🤬","🤬","🥳","🥳","😵‍💫","😵‍💫","🤫","🤫"];
let opencard=[];
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1));

for (let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if (opencard.length < 2){
        this.classList.add("boxOpen");
        opencard.push(this);
    }
    if (opencard.length == 2) {
        setTimeout(checkMatch, 500);

    }
}

function checkMatch(){
    if (opencard[0].innerHTML === opencard[1].innerHTML){
        opencard[0].classList.add("boxMatch");
        opencard[1].classList.add("boxMatch")
    }
    else {
        opencard[0].classList.remove("boxOpen");
        opencard[1].classList.remove("boxOpen");
    }
    opencard = [];
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Voce Venceu!!!")

    }
}