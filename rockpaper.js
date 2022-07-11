// INPUT

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    var userIN = document.getElementById("userIN").value;

    const results = document.querySelector('#results');

    userIN = userIN.toLowerCase();

    if (userIN == 'rock') {
        userIN = userIN;
    } else if (userIN == 'paper') {
        userIN = userIN;
    } else if (userIN == 'scissors') {
        userIN = userIN;
    } else {
        userIN = 'WRONG INPUT';
    }

    userChoice = userIN;

    // COMPUTER CHOICE

    const getComputerChoice = randomNumber => {
        randomNumber = Math.floor(Math.random() * 3);

        switch (randomNumber) {
            case 0:
                return 'rock'
                break;
            case 1:
                return 'paper'
                break;
            case 2:
                return 'scissors'
                break;
        }
    }

    const computerChoice = getComputerChoice();

    //WHO WON?

    const whoWon = () => {
        if (userChoice === computerChoice) {
            return "IT'S A DRAW";
        }
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
              return 'COMPUTER WON';
            } else {
              return 'YOU WON';
            }
          }
          
          if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
              return 'COMPUTER WON';
            } else {
              return 'YOU WON';
            }
          }
          
          if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
              return 'COMPUTER WON';
            } else {
              return 'YOU WON';
            }
          }
          }
winner = whoWon();

    //DISPLAY THE RESULTS

    document.querySelector('.results').innerHTML = "User chose " + userChoice + "<br><br>Computer chose " + computerChoice + "<br><br> Winner is " + winner;
});





