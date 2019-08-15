import { IGameState, IFunctionalGameState } from "../types";

import { columnsConst, columnConst, fieldColors, rows } from "../constants";

export const createFunctionalGameState = (GameState): IFunctionalGameState => {
  if (GameState) {
    console.log("Gamestate");
    return createFunctionalGameStateFromGameState(GameState);
  } else {
    return createFunctionalGameStateFromGameState(createStart());
  }
};

interface TrowColumn {
  row: number;
  column: number;
}

export const getRowAndColumnFromString = (field: string): null | TrowColumn => {
  let toReturn = { row: null, column: null };
  try {
    //@ts-ignore
    toReturn["column"] = columnConst.indexOf(field[0]);
    toReturn["row"] = Number(field[1]);

    return toReturn;
  } catch {
    return null;
  }
};

const createFunctionalGameStateFromGameState = (GameState: any) => {
  let functionalGameState = GameState;
  for (let row of Object.keys(GameState)) {
    functionalGameState[row][0] = createEmptyStartField(row, 0);
    functionalGameState[row][9] = createEmptyStartField(row, 9);
  }
  functionalGameState[0] = createEmptyRow(0);
  functionalGameState[9] = createEmptyRow(9);
  return functionalGameState;
};

const createEmptyRow = (row: number) => {
  let rowObj = {};
  for (let i = 0; i < 10; i++) {
    //@ts-ignore
    rowObj[i] = createEmptyStartField(row, i);
  }
  return rowObj;
};

const createEmptyStartField = (row: string, column: number) => {
  return {
    figure: null,
    field: `${columnConst[column]}${Number(row)}`,
    row: Number(row),
    column: column,
    columnName: columnConst[column],
    fieldColor: null,
    GameField: false
  };
};

export const createStart = (): IGameState => {
  let State = {};
  for (let rowI of rows) {
    let row = {};
    for (let column of columnsConst) {
      row[column] = createStartField(rowI, column);
    }
    State[rowI] = row;
  }
  //@ts-ignore
  return State;
};

export const createStartField = (row: number, column: number) => {
  const figure = getStartFigureForField(row, column);
  return {
    figure: figure
      ? { type: figure[0], side: figure[1], validMoves: null }
      : null,
    field: `${columnConst[column]}${row}`,
    row: row,
    column: column,
    columnName: columnConst[column],
    fieldColor: getFieldColor(row, column),
    GameField: true
  };
};

const __getRowFieldColor = (order: 0 | 1, column: number) => {
  let fieldColorsP = [fieldColors.white, fieldColors.black];

  if (column % 2 === 0) {
    return fieldColorsP[order];
  } else {
    fieldColorsP.splice(order, 1);
    return fieldColorsP[0];
  }
};

export const getFieldColor = (row, column) => {
  if (row % 2 === 0) {
    return __getRowFieldColor(0, column);
  } else {
    return __getRowFieldColor(1, column);
  }
};

export const getStartFigureForField = (rowS: number, columnS: number) => {
  const row = Number(rowS);
  const column = Number(columnS);
  switch (row) {
    case 1:
      if (column === 1 || column === 8) {
        return "Rw";
      }
      if (column === 2 || column === 7) {
        return "Nw";
      }
      if (column === 3 || column === 6) {
        return "Bw";
      }
      if (column === 4) {
        return "Qw";
      }
      if (column === 5) {
        return "Kw";
      }

    case 2:
      return "Pw";
    case 7:
      return "Pb";
    case 8:
      if (column === 1 || column === 8) {
        return "Rb";
      }
      if (column === 2 || column === 7) {
        return "Nb";
      }
      if (column === 3 || column === 6) {
        return "Bb";
      }
      if (column === 4) {
        return "Qb";
      }
      if (column === 5) {
        return "Kb";
      }
    default:
      return null;
  }
};
