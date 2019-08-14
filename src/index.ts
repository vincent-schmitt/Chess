// types
import {
  IGameState,
  IFunctionalGameState,
  TFigureType,
  TSide,
  IGameStateEntry
} from "./types";

// helpers
import {
  createStart,
  createFunctionalGameState,
  getRowAndColumnFromString
} from "./helpers";
import { __getValidPawnMoves } from "./helpers/moveHelpers";

class ChessLogic {
  // types
  initialGameState: IGameState;
  private __currentGameState: IGameState;
  private __functionalGameState: IFunctionalGameState;

  // constructor
  constructor(GameState: IGameState = null) {
    this.initialGameState = GameState;
    this.__init(GameState);
  }

  __init = GameState => {
    this.__functionalGameState = createFunctionalGameState(GameState);
    GameState
      ? (this.__currentGameState = GameState)
      : (this.__currentGameState = createStart());
  };
  // Methods
  getGameState = (): IGameState => this.__currentGameState;

  getFunctionalGameState = (): IFunctionalGameState =>
    this.__functionalGameState;

  printGameState = () => {
    for (let r of Object.keys(this.__currentGameState)) {
      console.log(r);
      for (let c of Object.keys(this.__currentGameState[r])) {
        console.log(c, this.__currentGameState[r][c]);
      }
    }
  };

  move = (origin: string, destination: string) => {
    if (this._validateMove(origin, destination)) {
      if (this.__executeMove(origin, destination)) {
        return this.__functionalGameState;
      }
    }
    return false;
  };

  __executeMove = (origin: string, destination: string) => {
    const org = getRowAndColumnFromString(origin);
    const dest = getRowAndColumnFromString(destination);

    const orgField = this.__functionalGameState[org.row][org.column];

    try {
      this.__feldFuellen(dest.row, dest.column, org.row, org.column);
      this.__feldRaeumen(org.row, org.column);
      return true;
    } catch {
      return false;
    }
  };

  __feldFuellen = (
    destRow: number,
    destCol: number,
    orgRow: number,
    orgCol: Number
  ) => {
    const destField = this.__functionalGameState[destRow][destCol];
    const orgField = this.__functionalGameState[orgRow][orgCol];

    destField.validMoves = null;
    destField.figureType = orgField.figureType;
    destField.side = orgField.side;
  };

  __feldRaeumen = (row: number, column: number) => {
    const Field = this.__functionalGameState[row][column];

    Field.validMoves = null;
    Field.figureType = null;
    Field.side = null;
  };

  _validateMove = (origin: string, destination: string) => {
    const org = getRowAndColumnFromString(origin);
    const orgField = this.__functionalGameState[org.row][org.column];

    const validMoves = orgField.validMoves;

    if (validMoves === null) {
      const calcedMoves = this.__getValidMoves(
        orgField.figureType,
        orgField.side,
        orgField.row,
        orgField.column
      );

      if (calcedMoves.includes(destination)) {
        return true;
      }
    } else {
      if (validMoves.includes(destination)) {
        return true;
      }
    }

    return false;
  };

  getValidMoves = (
    row: number | false = false,
    column: number | false = false
  ) => {
    if (row !== false && column !== false) {
      this.__setValidMoves(
        row,
        column,
        this.__getValidMoveForField(row, column)
      );
      return this.__functionalGameState[row][column].validMoves;
    } else {
      Object.keys(this.__currentGameState).forEach(rowN => {
        Object.keys(this.__currentGameState[rowN]).forEach(columnN => {
          this.__setValidMoves(
            Number(rowN),
            Number(columnN),
            this.__getValidMoveForField(Number(rowN), Number(columnN))
          );
        });
      });
      return this.__functionalGameState;
    }
  };

  __setValidMoves = (row: number, column: number, moves: string[] | false) => {
    this.__functionalGameState[row][column].validMoves = moves;
  };

  __getValidMoveForField = (row: number, column: number) => {
    const field = this.__currentGameState[String(row)][String(column)];
    if (field.figureType && field.side) {
      return this.__getValidMoves(field.figureType, field.side, row, column);
    }
    return false;
  };

  __getValidMoves = (
    figType: TFigureType,
    figSide: TSide,
    row: number,
    column: number
  ) => {
    switch (figType) {
      case "P":
        return __getValidPawnMoves(
          figSide,
          row,
          column,
          this.__functionalGameState
        );
      case "N":
        return this.__getValidKnightMoves(figSide, row, column);
    }
  };
  __getValidKnightMoves = (side: TSide, row: number, column: number) => {
    const field = this.__functionalGameState[row][column];
    if (!field.validMoves) {
      const possibleMoves = [
        [row + 2, column + 1],
        [row + 2, column - 1],
        [row - 2, column - 1],
        [row - 2, column + 1],
        [row + 1, column - 2],
        [row - 1, column - 2],
        [row + 1, column + 2],
        [row - 1, column + 2]
      ];

      let validMoves = [];

      possibleMoves.forEach(fieldN => {
        const isValid = __isValidField(
          fieldN[0],
          fieldN[1],
          this.__functionalGameState
        );
        if (isValid) {
          if (isValid.side !== side) {
            validMoves.push(isValid.field);
          }
        }
      });
      return validMoves;
    } else {
      return field.validMoves;
    }
  };
}

const __isValidField = (
  row: number,
  column: number,
  FGameState: IFunctionalGameState
) => {
  try {
    const field = FGameState[row][column];
    if (field.GameField) {
      return field;
    }
    return false;
  } catch {
    return false;
  }
};

export default ChessLogic;
