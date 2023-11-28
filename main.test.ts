
import { BowlingGame, processGameString } from "./main";
import { describe, expect, test } from "@jest/globals";
import { beforeEach } from "@jest/globals";

describe("BowlingGame", () => {
    let game: BowlingGame;

    beforeEach(() => {
        game = new BowlingGame();
    });

    test("all strikes", () => {
        for (let i = 0; i < 12; i++) {
            game.roll("X");
        }
        expect(game.score()).toBe(300);
    }
    );

    test("When all spares", () => {
        for (let i = 0; i < 21; i++) { // 21 rolls because of the bonus roll
            game.roll("5/");
        }
        expect(game.score()).toBe(150);
    });

    test("all nines with 0", () => {
        for (let i = 0; i < 10; i++) {
            game.roll("9-");
        }
        expect(game.score()).toBe(90);
    }
    );

    test("When no input is given", () => {
        expect(() => {
            processGameString("");
        }).toThrow("Invalid input");
    });

    // with mixed input
    test("When input is mixed", () => {
        expect(() => {
            processGameString("X 9- 5/ 81 9- 9- 9- 9- 9- 9-");
        }).toThrow("Invalid input");
    });

    // with valid mixed input
    test("When input is mixed", () => {
        expect(() => {
            processGameString("X 9- 5/ 5/ 9- 9- 9- 9- 9- 9-");
        }).not.toThrow("Invalid input");
    });
});