// types
import { TSide, IFunctionalGameState } from "../types/index";

interface IpMovesEntry {
  row: number;
  column: number;
  dir: "s" | "d";
}

interface IpMoves {
  b: IpMovesEntry[];
  w: IpMovesEntry[];
}

export const __getValidPawnMoves = (
  row: number,
  column: number,
  FGameState: IFunctionalGameState
) => {
  const possibleMoves: IpMoves = {
    b: [
      { row: row - 2, column: column, dir: "s" },
      { row: row - 1, column: column, dir: "s" },
      { row: row - 1, column: column + 1, dir: "d" },
      { row: row - 1, column: column - 1, dir: "d" }
    ],
    w: [
      { row: row + 2, column: column, dir: "s" },
      { row: row + 1, column: column, dir: "s" },
      { row: row + 1, column: column + 1, dir: "d" },
      { row: row + 1, column: column - 1, dir: "d" }
    ]
  };
  const orgField = FGameState[row][column];
  if (!orgField.figure.validMoves) {
    return __getValidPawnMovesBySide(
      possibleMoves[orgField.figure.side],
      FGameState,
      orgField
    );
  }
  return orgField.validMoves;
};

const __getValidPawnMovesBySide = (possibleMoves, FGameState, orgField) => {
  let validMoves = [];

  for (let move in possibleMoves) {
    const possibleMove = possibleMoves[move];
    const cur = FGameState[possibleMove.row][possibleMove.column];

    if (cur.GameField) {
      if (cur.figure === null && possibleMove.dir === "s") {
        validMoves.push(cur.field);
      } else if (cur.figure) {
        if (
          cur.figure.side === __getOppositeSite(orgField.figure.side) &&
          possibleMove.dir === "d"
        ) {
          validMoves.push(cur.field);
        }
      }
    }
  }
  return validMoves;
};

const __getOppositeSite = (side: "w" | "b") => {
  switch (side) {
    case "w":
      return "b";
    case "b":
      return "w";
  }
};
