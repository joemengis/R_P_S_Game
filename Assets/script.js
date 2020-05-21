// create an array that lists out all of the options
var computerChoices = ['r', 'p', 's'];

// Create variables to hold the number of wins, losses and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;



for (var i = 0; i < 10; i++) {
    // Randomly choose an argument from the computerChoices array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    // Collect users response and convert to lower case.
    var usersGuess = prompt("Enter r, p, or s to play!");
    usersGuess = usersGuess.toLowerCase();
    console.log(usersGuess)

    if (usersGuess === "r" || usersGuess === "s" || usersGuess === "p") {

        alert("The computer chose " + computerGuess);

        if ((usersGuess === "r" && computerGuess === "s") || 
        (usersGuess === "s" && computerGuess === "p") ||
        (usersGuess === "p" && computerGuess === "r")) {
            wins++;
            alert("You have won", + wins + "time(s)!");
        } else if(usersGuess === computerGuess) {
            ties++;
            alert("You've tied " + ties + "time(s)!");

        } else {
            alert("You have lost " + losses + "time(s)!"); {
                losses++;
            }
        }
    }
}

    alert("Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal losses: " + losses);





