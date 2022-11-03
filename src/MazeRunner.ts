// https://www.codewars.com/kata/58663693b359c4a6560001d6/train/typescript

/*
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
2. The start and finish positions will change for the final tests.
3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
4. If you reach the end point before all your moves have gone, you should return Finish.
5. If you hit any walls or go outside the maze border, you should return Dead.
6. If you find yourself still in the maze after using all the moves, you should return Lost.
*/

/*
0 = Safe place to walk
1 = Wall
2 = Start Point
3 = Finish Point
*/

// mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]), "Finish", "Expected Finish");
// mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]), "Finish", "Expected Finish");
// mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]), "Finish", "Expected Finish");

// mazeRunner(maze,["N","N","N","W","W"]), "Dead", "Expected Dead");
// mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]), "Dead", "Expected Dead");

// mazeRunner(maze,["N","E","E","E","E"]), "Lost", "Expected Lost");
const path = 0;
const wall = 1;
const start = 2;
const end = 3;

const x = 1;
const y = 0;

let maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

const findPosition = (maze: Maze) => (position: Position) => {
  let row = maze.findIndex((elem) => elem.includes(position));
  let col = maze[row].indexOf(position);

  return {
    row,
    col,
  };
};

export function mazeRunner(maze: Maze, directions: string[]): string | Array<Number> {
  const mazeDimensions = [maze.length - 1, maze[0].length - 1];
  let finalResult = "";
  const finder = findPosition(maze);

  const { row: startRow, col: startCol } = finder(start);
  const { row: endRow, col: endCol } = finder(end);

  const startLocation = [startRow, startCol];
  // const startLocation = [1, 2];
  let currentLocation = startLocation;

  const map = {
    N: 1,
    E: 1,
    S: -1,
    W: -1,
  };

  try {
    directions.forEach((direction, index) => {
      // for (const direction of directions) {
      switch (direction) {
        case "N":
          currentLocation[y] = currentLocation[y] - 1;
          break;

        case "S":
          currentLocation[y] = currentLocation[y] + 1;
          break;

        case "E":
          currentLocation[x] = currentLocation[x] + 1;
          break;

        case "W":
          currentLocation[x] = currentLocation[x] - 1;
          break;
      }

      // Check array at the new location
      const mazeValAtLoc = maze[currentLocation[0]][currentLocation[1]];

      if (
        mazeValAtLoc === 1 ||
        currentLocation[x] < 0 ||
        currentLocation[x] > mazeDimensions[x] ||
        currentLocation[y] < 0 ||
        currentLocation[y] >= mazeDimensions[y]
      ) {
        throw new Error("Dead");
      } else if (mazeValAtLoc === 3) {
        throw new Error("Finish");
      }

      if (index >= directions.length - 1) {
        throw new Error("Lost");
      }
    });
  } catch (e) {
    finalResult = e.message;
  }

  return finalResult;
}

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])); // Finish

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])); // Finish
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"])); // Finish
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W"])); // Finish

console.log(mazeRunner(maze, ["N", "N", "N", "W", "W"])); // Dead
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"])); // Dead

console.log(mazeRunner(maze, ["N", "E", "E", "E", "E"])); // Lost

type Maze = number[][];
type Position = 0 | 1 | 2 | 3;
