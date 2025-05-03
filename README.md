# Number Guessing Game

A CLI-based number guessing game where the player tries to guess a randomly generated number within a limited number of attempts.
Sample solution for the <a href="https://roadmap.sh/projects/number-guessing-game" target="_blank">number-guessing-game</a> challenge from <a href="https://roadmap.sh" target="_blank">roadmap.sh</a>.

## How to Play

1. Run the game using Node.js.
2. Select a difficulty level:
   - **Easy**: 10 chances
   - **Medium**: 5 chances
   - **Hard**: 3 chances
3. Guess the number between 1 and 100.
4. The game will provide hints if your guess is too high or too low.
5. You win if you guess the correct number within the allowed attempts. Otherwise, you lose.

## Features

- Three difficulty levels: Easy, Medium, and Hard.
- Random number generation between 1 and 100.
- Feedback on whether the guessed number is too high or too low.
- Option to play again after the game ends.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/biswajit-halder/number-guessing-game.git
   ```
2. Navigate to the project directory:
   ```sh
   cd number-guessing-game
   ```
3. Install Node.js if not already installed.

## Usage

Run the game using the following command:
```sh
node index.js
```

## Example

```
Welcome to the Number Guessing Game!

I'm thinking of a number between 1 and 100.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2
Great! You have selected Medium mode with 5 chances.
Let's start the game!

Enter your guess: 50
Incorrect! The number is greater than 50.

Enter your guess: 75
Congratulations! You've guessed the correct number 75 in 2 attempts!
```

## License

This project is licensed under the ISC License.

## Contributing

Feel free to submit issues or pull requests to improve the game.

## Author

[Biswajit Halder](https://github.com/biswajit-halder)
