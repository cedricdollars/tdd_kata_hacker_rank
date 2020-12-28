import { expect } from "chai";

import Game from "../../src/bowling/bowling";

describe("Bowling Game", () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });
  let rollLoop = (pins: number, times: number) => {
    for (let i = 0; i < times; i++) {
      game.roll(pins);
    }
  };
  let rollSpare = (pinsDown: number, times: number) => {
    rollLoop(pinsDown, times);
  };
  describe("First scenario", () => {
    it("All gutters", () => {
      rollLoop(0, 20);
      expect(game.getScore()).to.equal(0);
    });
    it("Should test All one ", () => {
      rollLoop(1, 20);
      expect(game.getScore()).to.equal(20);
    });
    it("Should test  spare and all threes", () => {
      rollSpare(5, 2);
      rollLoop(2, 18);
      expect(game.getScore()).to.equal(48);
    });

    it("Should test strike all threes", () => {
      game.roll(10); // strike
      game.roll(3);
      game.roll(4);
      rollLoop(0, 16);
      expect(game.getScore()).to.equal(24);
    });
  });
});
