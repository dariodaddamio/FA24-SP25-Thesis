alert(playRPS());
function playRPS() {
    input = confirm("Let's play rock, paper, scissors!");
    if (input === false) { // false being cancel
        return "Maybe next time!";
    }

    input = prompt("Choose rock, paper, or scissors.");
    var choices = ["rock", "paper", "scissors"];
    
    while(!choices.includes(input)) { // while input is not in choices
        if(input === null) { // false being cancel // ensures after making a typo, you can cancel afterward
            return "Maybe next time!";
        }
        else {
            alert("Please enter a valid choice."); // if input is not null (and not withing choices), then it's invalid
            input = prompt("Choose rock, paper, or scissors."); // ask again
        }
    }

    input = input.trim().toLowerCase(); // remove whitespace and make lowercase for display purposes
    
    var computerChoice = choices[Math.floor(Math.random() * choices.length)]; // random choice for computer from choices

    if (input === computerChoice) {
        alert("It's a tie!");
    }
    else if (input === "rock") {
        if (computerChoice === "scissors") {
            alert("You win!");
        }
        else {
            alert("You lose!");
        }
    }
    else if (input === "paper") {
        if (computerChoice === "rock") {
            alert("You win!");
        }
        else {
            alert("You lose!");
        }
    }
    else if (input === "scissors") {
        if (computerChoice === "paper") {
            alert("You win!");
        }
        else {
            alert("You lose!");
        }  
    }

    alert("You chose " + input + " and the computer chose " + computerChoice + ".");
    input = confirm("Would you like to play again?");
    if (input === false) { // false being cancel
        return "Maybe next time!";
    }
    if (input === true) { // true being ok
        return playRPS();
    }
}
