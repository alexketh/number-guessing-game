# Number Guessing Game

A simple command-line number guessing game built with Node.js where players try to guess a randomly generated number between 1 and 100.

Sample solution for the [number-guessing-game](https://roadmap.sh/projects/number-guessing-game) challenge from [roadmap.sh](https://roadmap.sh/).

## Features

- Three difficulty levels:
  - Easy (10 attempts)
  - Medium (5 attempts)
  - Hard (3 attempts)
- Dynamic feedback after each guess
- Attempt counter
- Replay functionality
- User-friendly interface

## Prerequisites

- Node.js installed on your system (Download from [nodejs.org](https://nodejs.org))

## Installation

1. Clone this repository or download the source code:
```bash
git clone https://github.com/alexketh/number-guessing-game.git
```

2. Navigate to the project directory:
```bash
cd number-guessing-game
```

## How to Play

1. Start the game by running:
```bash
node game.js
```

2. Choose your difficulty level:
   - Press 1 for Easy
   - Press 2 for Medium
   - Press 3 for Hard

3. Enter your guess when prompted
   - The game will tell you if your guess is too high or too low
   - Keep guessing until you find the correct number or run out of attempts

## Game Rules

- The game generates a random number between 1 and 100
- Players must guess the number within the allowed attempts based on chosen difficulty
- After each guess, the game provides feedback:
  - If the guess is too high: "The number is less than [guess]"
  - If the guess is too low: "The number is greater than [guess]"
- The game ends when either:
  - The player guesses the correct number
  - The player runs out of attempts
- After each game ends, players can choose to:
  - Play again (returns to difficulty selection)
  - Exit the game

## Code Structure

```
game.js
├── start() - Initializes the game and displays welcome message
├── chooseLevel() - Handles difficulty level selection
├── levelInfo() - Displays chosen level information
├── playGame() - Main game logic
│   ├── enterGuess() - Handles user input and game flow
│   └── checkMaxAttempts() - Validates remaining attempts
├── askToReplay() - Handles game replay functionality
└── Difficulty level functions
    ├── easy()
    ├── medium()
    └── hard()
```

## Dependencies

- `readline` - Built-in Node.js module for handling command-line input

## Contributing

Feel free to fork this repository and submit pull requests for any improvements you'd like to add. Some ideas for enhancement:
- Add score tracking and high scores
- Add sound effects
- Create a graphical user interface
- Implement different number ranges for each difficulty level
- Add hints system

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
