alert(playRPS());
function playRPS() {
    input = confirm("Let's play rock, paper, scissors!");
    if (input === false) { // false being cancel
        return "Maybe next time!";
    }
    input = prompt("Choose rock, paper, or scissors.");
    if (input === null) { // hitting enter without typing anything
        return "Maybe next time!";
    }
    input = input.trim().toLowerCase();
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

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
    else {
        console.log("Invalid input. Please try again.");
    }
    alert("You chose " + input + " and the computer chose " + computerChoice + ".");
    input = prompt("Would you like to play again? (y/n)");
    switch (input.trim().toLowerCase()) {
        case "y":
            return playRPS();
            break;
        case "n": 
            return "Thanks for playing!";
            break;
        default: // hitting enter without typing anything
            return "Invalid input. Please try again.";
    }
}
