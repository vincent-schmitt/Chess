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

  drawGameState = () => {
    const GameState = this.getGameState();
    let pGame = [];
    for (let row of Object.keys(GameState)) {
      let pRow = [];
      for (let field of Object.keys(GameState[row])) {
        if (GameState[row][field].figure) {
          pRow.push(
            GameState[row][field].figure.type +
              GameState[row][field].figure.side
          );
        } else {
          pRow.push("00");
        }
      }
      pGame.push(pRow);
    }
    console.log(
      "\n",
      pGame[0][0],
      pGame[0][1],
      pGame[0][2],
      pGame[0][3],
      pGame[0][4],
      pGame[0][5],
      pGame[0][6],
      pGame[0][7],
      "\n",
      pGame[1][0],
      pGame[1][1],
      pGame[1][2],
      pGame[1][3],
      pGame[1][4],
      pGame[1][5],
      pGame[1][6],
      pGame[1][7],
      "\n",
      pGame[2][0],
      pGame[2][1],
      pGame[2][2],
      pGame[2][3],
      pGame[2][4],
      pGame[2][5],
      pGame[2][6],
      pGame[2][7],
      "\n",
      pGame[3][0],
      pGame[3][1],
      pGame[3][2],
      pGame[3][3],
      pGame[3][4],
      pGame[3][5],
      pGame[3][6],
      pGame[3][7],
      "\n",
      pGame[4][0],
      pGame[4][1],
      pGame[4][2],
      pGame[4][3],
      pGame[4][4],
      pGame[4][5],
      pGame[4][6],
      pGame[4][7],
      "\n",
      pGame[5][0],
      pGame[5][1],
      pGame[5][2],
      pGame[5][3],
      pGame[5][4],
      pGame[5][5],
      pGame[5][6],
      pGame[5][7],
      "\n",
      pGame[6][0],
      pGame[6][1],
      pGame[6][2],
      pGame[6][3],
      pGame[6][4],
      pGame[6][5],
      pGame[6][6],
      pGame[6][7],
      "\n",
      pGame[7][0],
      pGame[7][1],
      pGame[7][2],
      pGame[7][3],
      pGame[7][4],
      pGame[7][5],
      pGame[7][6],
      pGame[7][7],
      "\n"
    );
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
