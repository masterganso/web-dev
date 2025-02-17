let secretNumber;
let attempts;
let maxAttempts;
let tokens = 10;//i added this for fun
let difficulty_mult;


function startGame(difficulty) {
    setDifficulty(difficulty);
    alert(`Hello! this is an addictive game .Don't play !!you have ${tokens} $
You have ${maxAttempts} attempts to guess the number between 1 and 100.`);
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("message").innerText = "Devinez le nombre entre 1 et 100 !";
    guessNumber();
}

function setDifficulty(level) {
    switch (level.toLowerCase()) {
        case 'easy':
            maxAttempts = 10;
            difficulty_mult=1;//this is for the prize system
            tokens-=3;
            
            break;
        case 'medium':
            maxAttempts = 7;
            difficulty_mult=2;
            tokens-=2;
            
            break;
        case 'hard':
            maxAttempts = 5;
            difficulty_mult=3;
            tokens-=1;
            
            break;
        default:
            alert("unrecocnized defficulty level,default level is medium");
            setDifficulty('medium');
            break;
    }
}

function guessNumber() {
    if (attempts < maxAttempts && tokens > 0) {
        const userGuess = parseInt(prompt("put your number :"));
        attempts++;
        
        checkGuess(userGuess);
    } else if (attempts >= maxAttempts) {
        alert(`out of guesses . The nomber was ${secretNumber}.`);
        playAgain();
    } else {
        alert("out of money");
        playAgain();
    }
}

function checkGuess(guess) {
    if (guess === secretNumber) {
        alert(`Gongrats! You guessed the number ${secretNumber} in ${attempts} guesses.`);
        tokens += (maxAttempts-attempts)*difficulty_mult;
        alert(`you are left with ${tokens} $`);
        playAgain();
    }
    else if (guess+1 === secretNumber || guess-1 === secretNumber) {
        alert("you are so close!");
        guessNumber();

    }
    else if (guess+10 < secretNumber) {
        alert("too down ! guess again.");
        guessNumber();
    } else if (guess-10 > secretNumber) {
        alert("Too high ! Guess again.");
        guessNumber();
    }
    
    else if (guess < secretNumber) {
        alert("little down ! Guess again.");
        guessNumber();
    } else {
        alert("little high ! Guess again.");
        guessNumber();
    }
    
}

function playAgain() {
    const replay = confirm("do you want to replay ?");
    if (replay) {
        const difficulty = prompt("choose a difficulty level: easy, medium, hard");
        tokens = 10;
        startGame(difficulty);
    } else {
        alert("Thanks for playing");
        document.getElementById("gameArea").style.display = "none";
    }
}
