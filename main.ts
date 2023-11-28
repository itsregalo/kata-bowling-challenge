export class BowlingGame {
    rolls: number[] = []; // Array to store the rolls

    // Method to record a roll
    roll(symbol: string): void {
        if (symbol.length > 3) {
            throw new Error("Invalid input");
        }

        // Check for different symbols and calculate the roll score accordingly
        if (symbol === "X") {
            this.rolls.push(10);
        } else if (symbol.length === 2) {
            if (symbol[1] === "/") {
                this.rolls.push(10 - parseInt(symbol[0], 10));
            } else if (symbol[1] === "-") {
                this.rolls.push(parseInt(symbol[0], 10));
            } else {
                throw new Error("Invalid input");
            }
        } else if (symbol.length === 3) {
            if (symbol[1] === "/") {
                this.rolls.push(10 - parseInt(symbol[0], 10));
            } else {
                throw new Error("Invalid input");
            }
        } else if (symbol === "-") {
            this.rolls.push(0);
        } else if (symbol === "/") {
            throw new Error("Invalid input");
        } else if (!isNaN(parseInt(symbol, 10))) {
            this.rolls.push(parseInt(symbol, 10));
        } else {
            throw new Error("Invalid input");
        }
    }

    // Method to calculate the score of the game
    score(): number {
        let score = 0;
        let i = 0;

        // Iterate through each frame of the game
        for (let frame = 0; frame < 10; frame++) {
            if (this.rolls[i] === 10) {
                // Strike
                score += 10 + this.rolls[i + 1] + this.rolls[i + 2];
                i += 1;
            } else if (this.rolls[i] + this.rolls[i + 1] === 10) {
                // Spare
                if (i < 10) {
                    score += 10 + this.rolls[i + 2];
                } else {
                    score += 10;
                }
            } else {
                // Open frame
                score += this.rolls[i] + this.rolls[i + 1];
                i += 2;
                if (i > 9) {
                    break;
                }
            }
        }

        return score;
    }
}

// elper function
export function processGameString(gameString: string): number {
    const game = new BowlingGame();
    for (const symbol of gameString.split(" ")) {
        game.roll(symbol);
    }
    return game.score();
}

// Define example game strings
const game1String = "X X X X X X X X X X X X";
const game2String = "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-";
const game3String = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5";

// Create instances of BowlingGame
const game1 = new BowlingGame();
const game2 = new BowlingGame();
const game3 = new BowlingGame();

// Process rolls for game 1
for (const symbol of game1String.split(" ")) {
    game1.roll(symbol);
}
console.log(game1.score());

// Process rolls for game 2
for (const symbol of game2String.split(" ")) {
    game2.roll(symbol);
}
console.log(game2.score());

// Process rolls for game 3
for (const symbol of game3String.split(" ")) {
    game3.roll(symbol);
}
console.log(game3.score());
