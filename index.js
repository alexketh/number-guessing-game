const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function start() {
    const intro = "Welcome to the Number Guessing Game!\n"
                + "I'm thinking of a number between 1 and 100.\n"
                + "You have X chances to guess the correct number.\n";
    console.log(intro);
    chooseLevel();
};

function chooseLevel() {
    const levelInfo = "Please select the difficulty level:\n"
                    + "1. Easy      (10 chances)\n"
                    + "2. Medium    (5 chances)\n"
                    + "3. Hard      (3 chances)\n";
    console.log(levelInfo);

    r1.question("Enter your choice: ", (input) => {
        switch(input) {
            case "1":
                easy();
                break;
            case "2":
                medium();
                break;
            case "3":
                hard();
                break;
            default:
                console.log("\nPlease choose select a number between 1 and 3.\n")
                console.log("\n----------------------------------------------\n")
                chooseLevel();
        }
    });
};

function levelInfo(level) {
    const message = `\nGreat! You have selected the ${level} difficulty level.\n`
                    + "Let's start the game.\n";
    console.log(message);
}

function playGame(maxAttempts) {
    const randNum = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    enterGuess();

    function enterGuess() {
        r1.question("Enter your guess: ", (guess) => {
            guess = parseInt(guess);
            attempts++;

            if(checkMaxAttempts()) 
                return;

            if (guess > randNum) {
                console.log(`Incorrect! The number is less than ${guess}.\n`);
                enterGuess();
            } else if (guess < randNum) {
                console.log(`Incorrect! The number is greater than ${guess}.\n`);
                enterGuess();
            } else if (guess == randNum){
                console.log(`Congratulations! You guessed the correct number in ${attempts} attempts\n`);
                r1.close();
            }
        });
    }
    
    function checkMaxAttempts() {
        if (attempts == maxAttempts) {
            console.log(`Sorry, you have used all ${maxAttempts} attempts. The correct number was ${randNum}.\n`);
            r1.close();
            return true;
        }
        return false;
    }
}

function easy() {
    levelInfo("easy");
    playGame(10);
}

function medium() {
    levelInfo("medium");
    playGame(5);
}

function hard() {
    levelInfo("hard");
    playGame(3);
}

start();