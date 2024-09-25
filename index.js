console.log("rock paper scissors game, let's go");
//give user 3 choices to select
    //return win or lose with random generator 
        //make it best 2 out of 3 
            // if 2 consecutive wins, return "you win!"
                // else, return "you lose!"



function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.3) {
        return "scissors";
    } else if ( randomNumber < 0.6) {
        return "rock";
    } else {
        return "paper"; 
    }
};
    console.log(getComputerChoice());



// function for the persons choice

function getHumanChoice() {
const userChoice = prompt("Please enter rock, paper, or scissors");
return userChoice;
}
    console.log(getHumanChoice());



//plays a round function both computer and human args 

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();


    if (humanChoice === computerChoice) {
        return "It's a tie"
    } else if (humanChoice === "rock" && computerChoice === "scissors"||
        humanChoice === "paper" && computerChoice === "rock" || 
        humanChoice === "scissors" && computerChoice === "paper") {
            return "You win the Round!"
        } else {
            return "You lose the Round"
        }
    
}; 
    //allow human or computer choice to become arguments in funct
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));






//repeat playround 5 times now for the game 

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        console.log(result);

        if (result === "You win the Round!") {
            humanScore++;
        } else if (result === "You lose the Round") {
            computerScore++;
        } 

    }
    console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game");
    } else {
        console.log("It's a tie");
     }

} 
//run the game with this function
    console.log(playGame());
