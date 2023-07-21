const myArray = ["Rock", "Paper", "Scissors"]


// Let computer randomize a choice from the array

function getComputerChoice(){
    let compchoice = Math.floor(Math.random(myArray.length)*3)
    let choosen;
    if(compchoice == 0){
        choosen = "Rock"
    }else if(compchoice == 1){
        choosen = "Paper"
    }else if(compchoice == 2){
        choosen = "Scissors"
    }

    return(choosen)
}


//Take player input, non case sensetive

function getPlayerChoice(){
    let playerChoice = prompt("Please enter rock, paper or scissors.").toLowerCase()
    let picked;
    if(playerChoice == "rock"){
        picked = "Rock"
    }else if(playerChoice == "paper"){
        picked = "Paper"
    }else if(playerChoice == "scissors"){
        picked = "Scissors"
    }
    return(picked)
}



function startGame() {
    const comp = getComputerChoice();
    const player = getPlayerChoice();

    // Make sure both comp and player have values before calling playRound
    if (comp && player) {
        const result = playRound(comp, player);
        console.log(result);
    }
}


startGame()




// Compare The picked options of both player and computer to get a winner
function playRound(comp,player){
    let roundWinner;
    console.log(comp, player)
    if(comp === "Rock" && player === "Paper"){
        roundWinner = "You win! Computer picked rock."
    }else if(comp === "Paper" && player === "Rock"){
        roundWinner = "You lose! Computer picked paper."
    }else if(comp === "Scissors" && player === "Paper"){
        roundWinner = "You lose! Computer picked scissors."
    }else if(comp === "Paper" && player === "Scissors"){
        roundWinner = "You Win! Computer picked paper."
    }else if(comp === "Rock" && player === "Scissors"){
        roundWinner = "You lose! Computer picked rock."
    }else if(comp === "Scissors" && player === "Rock"){
        roundWinner = "You Win! Computer picked Scissors."
    }else if(comp === player){
        roundWinner = "Its a draw."
    }
    return(roundWinner)
}
