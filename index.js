let humanScore = 0;
let compScore = 0;

let humanElem = document.getElementById("human");
let compElem = document.getElementById("computer");

while(true){
    let choice = prompt("Enter 'rock', 'paper' or 'scissors'");
    choice = choice.toLowerCase();

    if(
        choice !== "rock" &&
        choice !== "paper" &&
        choice !== "scissors"
    ){
        alert("Invalid data");
        continue;
    }

    let compChoice = Math.floor(Math.random() * 3);
    let endCondition = "";
    switch(compChoice){
        case 0:
            if(choice === "rock") endCondition = "Tie";
            if(choice === "paper") endCondition = "You win";
            if(choice === "scissors") endCondition = "You lose";
            break;
        case 1:
            if(choice === "rock") endCondition = "You lose";
            if(choice === "paper") endCondition = "Tie";
            if(choice === "scissors") endCondition = "You win";
            break;
        case 2:
            if(choice === "rock") endCondition = "You win";
            if(choice === "paper") endCondition = "You lose";
            if(choice === "scissors") endCondition = "Tie";
            break;
    }

    switch(endCondition){
        case "You win": 
            humanScore++;
            humanElem.innerText = `You: ${humanScore}`;
            break;
        case "You lose":
            compScore++;
            compElem.innerText = `Computer: ${compScore}`;
            break;
    }

    alert(endCondition);
}