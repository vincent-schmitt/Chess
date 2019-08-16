import chess from "../index";

// constant
describe("Testing chess instance with empty GameState (start)", () => {
  let Game = new chess();
  Game.drawGameState();
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
        const check1 = Game.getValidMoves(2, 1);
        expect(check1).toContain("A3");
        expect(check1).toContain("A4");

        const check2 = Game.getValidMoves(2, 3);
        expect(check2).toContain("C3");
        expect(check2).toContain("C4");

        const check3 = Game.getValidMoves(7, 1);
        expect(check3).toContain("A6");
        expect(check3).toContain("A5");
      });
      test("getValidMoves return valid Knight moves", () => {
        const check1 = Game.getValidMoves(1, 2);
        expect(check1).toContain("C3");
        expect(check1).toContain("A3");

        const check2 = Game.getValidMoves(1, 7);
        expect(check2).toContain("H3");
        expect(check2).toContain("F3");
      });
    });
    describe("Methode: move", () => {
      test("Empty origin move returns false", () => {
        expect(Game.move("F3", "G2")).toEqual(false);
      });

      describe("Test Pawn Moves", () => {
        test("valid Pawn moves get executed", () => {
          expect(Game.move("A2", "A3")[3][1].figure.type).toEqual("P");
          expect(Game.move("D2", "D3")[2][4].figure).toBeNull();
        });
        test("invalid Pawn moves return false", () => {
          expect(Game.move("B2", "B5")).toEqual(false);
          expect(Game.move("C2", "B3")).toEqual(false);
        });
        test("GameState updates correct", () => {
          expect(Game.getFunctionalGameState()[2][1].figure).toBeNull();
          expect(Game.getFunctionalGameState()[3][1].figure.type).toEqual("P");
        });
      });

      describe("Test Knight Moves", () => {
        test("valid knight moves get executed", () => {
          expect(Game.move("B1", "C3")[3][3].figure.type).toEqual("N");
          expect(Game.move("G1", "H3")[1][7].figure).toBeNull();
        });
        test("invalid Knight moves return false", () => {
          expect(Game.move("C3", "A3")).toEqual(false);
          expect(Game.move("H3", "F2")).toEqual(false);
        });
      });
    });
  });
});
