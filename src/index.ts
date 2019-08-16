// types
import {
  IGameState,
  IFunctionalGameState,
  TFigureType,
  TSide,
  IGameStateEntry,
  IFigType
} from "./types";

// helpers
import {
  createFunctionalGameState,
  getRowAndColumnFromString
} from "./helpers";
import { __getValidPawnMoves } from "./helpers/moveHelpers";

class ChessLogic {
  // types
  initialGameState: IGameState;
  private __functionalGameState: IFunctionalGameState;

  // constructor
  constructor(GameState: IGameState = null) {
    this.initialGameState = GameState;
    this.__init(GameState);
  }

  __init = (GameState: IGameState) => {
    this.__functionalGameState = createFunctionalGameState(GameState);
  };

  // Methods

  // getters
  getGameState = (): IGameState => this.__getSimplifiedGameState();

  getFunctionalGameState = (): IFunctionalGameState =>
    this.__functionalGameState;

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
      const filledFields = this._getFilledFields();

      filledFields.forEach(field => {
        this.__setValidMoves(
          field.row,
          field.column,
          this.__getValidMoveForField(field.row, field.column)
        );
      });
      return this.__functionalGameState;
    }
  };

  printGameState = () => {
    const currentGameState = this.getGameState();
    for (let r of Object.keys(currentGameState)) {
      console.log(r);
      for (let c of Object.keys(currentGameState[r])) {
        console.log(c, currentGameState[r][c]);
      }
    }
  };

  move = (
    origin: string,
    destination: string
  ): false | IFunctionalGameState => {
    if (this._validateMove(origin, destination)) {
      if (this.__executeMove(origin, destination)) {
        return this.__functionalGameState;
      }
    }
    return false;
  };

  _validateMove = (origin: string, destination: string) => {
    const org = getRowAndColumnFromString(origin);
    const orgField = this.__functionalGameState[org.row][org.column];

    if (orgField.figure) {
      const validMoves = orgField.figure.validMoves;

      if (validMoves === null) {
        const calcedMoves = this.__getValidMoves(
          orgField.figure,
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
    }
    return false;
  };

  _getFilledFields = () => {
    const filledFields = [];
    for (let row in this.__functionalGameState) {
      if (row !== "0" && row !== "9") {
        for (let field in this.__functionalGameState[row]) {
          if (field !== "0" && field !== "9") {
            if (this.__functionalGameState[row][field].figure) {
              filledFields.push(this.__functionalGameState[row][field]);
            }
          }
        }
      }
    }
    return filledFields;
  };

  __executeMove = (origin: string, destination: string) => {
    const org = getRowAndColumnFromString(origin);
    const dest = getRowAndColumnFromString(destination);

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

    destField.figure = {
      validMoves: null,
      type: orgField.figure.type,
      side: orgField.side
    };
  };

  __feldRaeumen = (row: number, column: number) => {
    this.__functionalGameState[row][column].figure = null;
  };

  __setValidMoves = (row: number, column: number, moves: string[] | false) => {
    this.__functionalGameState[row][column].validMoves = moves;
  };

  __getValidMoveForField = (row: number, column: number) => {
    const field = this.__functionalGameState[row][column];
    if (field.figure) {
      return this.__getValidMoves(field.figure, row, column);
    }
    return false;
  };

  __getValidMoves = (figure: IFigType, row: number, column: number) => {
    switch (figure.type) {
      case "P":
        return __getValidPawnMoves(row, column, this.__functionalGameState);
      case "N":
        return this.__getValidKnightMoves(row, column);
    }
  };

  __getValidKnightMoves = (row: number, column: number) => {
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
        const isValid = this.__isValidField(fieldN[0], fieldN[1]);
        if (isValid) {
          if (isValid.side !== field.figure.side) {
            validMoves.push(isValid.field);
          }
        }
      });
      return validMoves;
    } else {
      return field.validMoves;
    }
  };

  __getSimplifiedGameState = (): IGameState => {
    // @ts-ignore
    let simpleState: IGameState = {};
    for (let row in Object.keys(this.__functionalGameState)) {
      if (row !== "0" && row !== "9") {
        const cRow = Object.assign({}, this.__functionalGameState[row]);
        delete cRow["0"];
        delete cRow["9"];
        simpleState[row] = cRow;
      }
    }
    return simpleState;
  };

  __isValidField = (row: number, column: number) => {
    try {
      const field = this.__functionalGameState[row][column];
      if (field.GameField) {
        return field;
      }
      return false;
    } catch {
      return false;
    }
  };
}

export default ChessLogic;
