import {
  getFieldColor,
  getStartFigureForField,
  createStartField,
  createStart
} from "../helpers";

//constants
import { fieldColors } from "../constants";

test("createStart 'at helpers'", () => {
  const start = createStart();
  expect(Object.keys(start)).toHaveLength(8);
  expect(Object.keys(start[1])).toHaveLength(8);
});

test("getFieldColor 'at helpers'", () => {
  expect(getFieldColor(0, 0)).toBe(fieldColors.white);
  expect(getFieldColor(1, 0)).toBe(fieldColors.black);
  expect(getFieldColor(1, 3)).toBe(fieldColors.white);
  expect(getFieldColor(0, 3)).toBe(fieldColors.black);
});

test("getStartFigureForField 'at helpers'", () => {
  expect(getStartFigureForField(1, 1)).toBe("Rw");
  expect(getStartFigureForField(2, 1)).toBe("Pw");
  expect(getStartFigureForField(8, 1)).toBe("Rb");
  expect(getStartFigureForField(7, 1)).toBe("Pb");
  expect(getStartFigureForField(3, 1)).toBeNull();
});

test("createStartField 'at helpers'", () => {
  expect(createStartField(1, 8)).toEqual({
    validMoves: null,
    figureType: "R",
    side: "w",
    field: "H1",
    row: 1,
    column: 8,
    columnName: "H",
    fieldColor: fieldColors.black,
    GameField: true
  });
  expect(createStartField(8, 7)).toEqual({
    validMoves: null,
    figureType: "N",
    side: "b",
    field: "G8",
    row: 8,
    column: 7,
    columnName: "G",
    fieldColor: fieldColors.black,
    GameField: true
  });
});
