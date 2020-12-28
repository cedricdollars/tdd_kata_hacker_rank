export default class Game {
  private rolls: Array<number> = [];

  roll(pins: number): void {
    this.rolls.push(pins);
  }
  getScore(): number {
    let score: number = 0;
    let cursor: number = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isSpare(cursor)) {
        score += 10 + this.rolls[cursor + 2];
        cursor += 2;
      } else if (this.isStrike(cursor)) {
        score += 10 + this.rolls[cursor + 1] + this.rolls[cursor + 2];
        cursor++;
      } else {
        score += this.rolls[cursor] + this.rolls[cursor + 1];
        cursor += 2;
      }
    }

    return score;
  }
  private isSpare(cursor: number): boolean {
    return this.rolls[cursor] + this.rolls[cursor + 1] === 10;
  }
  private isStrike(cursor: number): boolean {
    return this.rolls[cursor] === 10;
  }
}
