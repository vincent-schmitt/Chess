type TfieldColor = 0 | 1;

export type TFunctionalRowString =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";
export type TFunctionalColumnString =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

export interface IFigType {
  validMoves: null | string[];
  type: TFigureType;
  side: TSide;
}

export type TFunctionalRowNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type TFunctionalColumnNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type TrowNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type TcolumnNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type TFigure =
  | "Pw"
  | "Pb"
  | "Rw"
  | "Rb"
  | "Nw"
  | "Nb"
  | "Bw"
  | "Bb"
  | "Qw"
  | "Qb"
  | "Kw"
  | "Kb";

export type TFigureType = "P" | "R" | "N" | "B" | "Q" | "K";

export type TSide = "w" | "b";

export interface IGameStateEntry {
  figure: {
    validMoves: null | string[];
    figure: TFigure;
    type: TFigureType;
  };
  side: TSide;
  field: string;
  row: TrowNumber;
  column: TcolumnNumber;
  fieldColor: TfieldColor;
  GameField: true | false;
}

interface IGameStateRow {
  [key: number]: IGameStateEntry;
}
export interface IGameState {
  1: IGameStateRow;
  2: IGameStateRow;
  3: IGameStateRow;
  4: IGameStateRow;
  5: IGameStateRow;
  6: IGameStateRow;
  7: IGameStateRow;
  8: IGameStateRow;
}

export interface IFunctionalGameState {
  0: IGameStateRow;
  1: IGameStateRow;
  2: IGameStateRow;
  3: IGameStateRow;
  4: IGameStateRow;
  5: IGameStateRow;
  6: IGameStateRow;
  7: IGameStateRow;
  8: IGameStateRow;
  9: IGameStateRow;
}
