const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 1;
const difficultyLevels = ["Easy", "Medium", "Hard"];
const chances = [10, 5, 3]; // Easy, Medium, Hard
let selectedChances = 0;

function printWelcomeMessage() {
    console.log(`Welcome to the Number Guessing Game!\n
I'm thinking of a number between 1 and 100.\n`);
    console.log(`Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)\n`);
}

function validateChoice(choice, min, max) {
    const parsedChoice = parseInt(choice);
    if (isNaN(parsedChoice) || parsedChoice < min || parsedChoice > max) {
        return null;
    }
    return parsedChoice;
}

function askDifficulty() {
    rl.question("Enter your choice: ", (choice) => {
        const parsedChoice = validateChoice(choice, 1, 3);
        if (!parsedChoice) {
            console.error("Invalid choice. Please select a valid difficulty level.");
            return askDifficulty(); // Ask again
        }
        selectedChances = chances[parsedChoice - 1];
        console.log(`Great! You have selected ${difficultyLevels[parsedChoice - 1]} mode with ${selectedChances} chances.\nLet's start the game!\n`);
        askGuess();
    });
}

function askGuess() {
    rl.question("Enter your guess: ", (guess) => {
        const parsedGuess = validateChoice(guess, 1, 100);
        attempts++;

        if (attempts > selectedChances) {
            console.log(`Sorry! You've used all your chances. The correct number was ${randomNumber}.`);
            return startOver(); // Ask if the user wants to play again
        }

        if (!parsedGuess) {
            console.error("Please enter a valid number between 1 and 100.");
            return askGuess(); // Ask again
        }

        if (parsedGuess === randomNumber) {
            console.log(`Congratulations! You've guessed the correct number ${randomNumber} in ${attempts} attempts!`);
            return startOver(); // Ask if the user wants to play again
        }

        const hint = parsedGuess < randomNumber ? "greater" : "lesser";
        console.log(`Incorrect! The number is ${hint} than ${parsedGuess}.`);
        askGuess();
    });
}

function startOver() {
    rl.question("Do you want to play again? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === 'yes') {
            attempts = 0;
            selectedChances = 0;
            randomNumber = Math.floor(Math.random() * 100) + 1; // Reset random number
            startGame();
        } else {
            console.log("Thank you for playing! Goodbye!");
            rl.close();
        }
    });
}

function startGame() {
    console.clear();
    console.log("Starting the game...\n");
    printWelcomeMessage();
    askDifficulty();
}

startGame();