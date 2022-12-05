// https://www.codewars.com/kata/5b432bdf82417e3f39000195/train/typescript

export class Pong {
  maxScore: number;

  constructor(_maxScore: number) {
    this.maxScore = _maxScore;
  }

  play(ballPos: number, playerPos: number): string {
    return "";
  }
}

let game = new Pong(2);
console.log(game.play(50, 53)); // "Player 1 has hit the ball!"
console.log(game.play(100, 97)); // "Player 2 has hit the ball!"
console.log(game.play(0, 4)); // "Player 1 has missed the ball!"
console.log(game.play(25, 25)); // "Player 2 has hit the ball!"
console.log(game.play(75, 25)); // "Player 2 has won the game!"
console.log(game.play(50, 50)); // "Game Over!"
