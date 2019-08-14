// types
import { TSide, IFunctionalGameState } from "../types";

export const __getValidPawnMoves = (
  side: TSide,
  row: number,
  column: number,
  FGameState: IFunctionalGameState
) => {
  const field = FGameState[row][column];
  if (!field.validMoves) {
    let validMoves = [];
    if (side === "w") {
      // straight Moves
      const field1 = FGameState[String(row + 1)][String(column)];
      if (!field1.figureType) {
        validMoves.push(field1.field);
      }
      const field2 = FGameState[row + 2][column];
      if (!field2.figureType) {
        validMoves.push(field2.field);
      }
      // diagonal Moves
      const field3 = FGameState[row + 1][column + 1];
      if (field3.figureType) {
        validMoves.push(field3.field);
      }
      const field4 = FGameState[row + 1][column - 1];
      if (field4.figureType) {
        validMoves.push(field4.field);
      }
    } else {
      const field1 = FGameState[String(row - 1)][String(column)];
      if (!field1.figureType) {
        validMoves.push(field1.field);
      }
      const field2 = FGameState[String(row - 2)][column];
      if (!field2.figureType) {
        validMoves.push(field2.field);
      }
      // diagonal Moves
      const field3 = FGameState[String(row - 1)][column + 1];
      if (field3.figureType) {
        validMoves.push(field3.field);
      }
      const field4 = FGameState[String(row - 1)][String(column - 1)];
      if (field4.figureType) {
        validMoves.push(field4.field);
      }
    }
    return validMoves;
  }
  return field.validMoves;
};
