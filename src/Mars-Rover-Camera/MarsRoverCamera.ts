type MoveDirection = "left" | "right";
type Direction = "N" | "S" | "E" | "W";

export function turn(current: Direction, target: Direction): MoveDirection {
  return "right";
}

console.log(turn("N", "E")); // right
console.log(turn("S", "E")); // left
