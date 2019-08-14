import chess from "../index";

// constant
describe("Testing chess instance with empty GameState (start)", () => {
  let Game = new chess();

  describe("chess instance gets initialized with valid states", () => {
    test("new instance creates startGameState", () => {
      expect(Object.keys(Game.getGameState())).toHaveLength(8);
      expect(Object.keys(Game.getGameState()[1])).toHaveLength(8);
    });

    test("new instance has functionalGameState", () => {
      expect(Object.keys(Game.getFunctionalGameState())).toHaveLength(10);
      expect(Object.keys(Game.getFunctionalGameState()[1])).toHaveLength(10);
    });
  });
  describe("chess instances Methods are functional", () => {
    describe("Method: getValidMoves", () => {
      test("getValidMoves returns null if no figure on field", () => {
        expect(Game.getValidMoves(3, 1)).toEqual(false);
      });
      test("getValidMoves returns valid pawn moves", () => {
        expect(Game.getValidMoves(2, 1)).toContain("A3");
        expect(Game.getValidMoves(2, 1)).toContain("A4");

        expect(Game.getValidMoves(2, 3)).toContain("C3");
        expect(Game.getValidMoves(2, 3)).toContain("C4");

        expect(Game.getValidMoves(7, 1)).toContain("A6");
        expect(Game.getValidMoves(7, 1)).toContain("A5");
      });
      test("getValidMoves return valid Knight moves", () => {
        // expect(Game.getValidMoves(1, 2)).toContain("C3");
        // expect(Game.getValidMoves(1, 2)).toContain("A3");
      });
    });
    describe("Methode: move", () => {
      test("valid Pawn moves get executed", () => {
        expect(Game.move("A2", "A3")).toBeTruthy();
        // expect(Game.move("G1", "H3")).toBeTruthy();
        // expect(Game.move("H3", "G5")).toBeTruthy();
        expect(Game.move("C2", "C3")).toBeTruthy();
      });
      test("invalid Pawn moves return false", () => {
        expect(Game.move("B2", "B5")).toEqual(false);
      });
      test("GameState updates correct", () => {
        expect(Game.getFunctionalGameState()[2][1]).toEqual({
          validMoves: null,
          figureType: null,
          side: null,
          field: "A2",
          row: 2,
          column: 1,
          columnName: "A",
          fieldColor: 1,
          GameField: true
        });
        expect(Game.getFunctionalGameState()[3][1]).toEqual({
          validMoves: null,
          figureType: "P",
          side: "w",
          field: "A3",
          row: 3,
          column: 1,
          columnName: "A",
          fieldColor: 0,
          GameField: true
        });
      });
    });
  });
});
