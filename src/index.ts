import GameBowling from "./bowling/bowling";

function Main() {
  let game: GameBowling = new GameBowling();
  game.roll(20);
}
Main();
