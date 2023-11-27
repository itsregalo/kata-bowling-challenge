
import { describe, expect, test } from "@jest/globals";
import { BowlingGame } from "./main";
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
    });

    test("all spares with 5", () => {
        for (let i = 0; i < 21; i++) {
            game.roll("5/");
        }
        expect(game.score()).toBe(150);
    });

    test("all nines with 0", () => {
        for (let i = 0; i < 10; i++) {
            game.roll("9-");
        }
        expect(game.score()).toBe(90);
    });

    test("all nines with 0", () => {
        for (let i = 0; i < 10; i++) {
            game.roll("9-");
        }
        expect(game.score()).toBe(90);
    });

    test("all nines with 0", () => {
        for (let i = 0; i < 10; i++) {
            game.roll("9-");
        }
        expect(game.score()).toBe(90);
    });

    test("all nines with 0", () => {
        for (let i = 0; i < 10; i++) {
            game.roll("9-");
        }
        expect(game.score()).toBe(90);
    });

    test("all nines with 0", () => {
        for (let i = 0; i < 10; i++) {
            game.roll("9-");
        }
        expect(game.score()).toBe(90);
    });

    test("all nines with 0", () => {
        for (let i = 0; i < 10; i++) {
            game.roll("9-");
        }
        expect(game.score()).toBe(90);
    });

    test("all nines with 0", () => {
        for (let i = 0; i < 10; i++) {
            game.roll("9-");
        }
        expect(game.score()).toBe(90);
    });
});