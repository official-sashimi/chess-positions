import { Position } from "./Position";

describe("Position", () => {
	describe("comparison", () => {
		describe("between different files", () => {
			it("should be compared by rank values", () => {
				expect(new Position("a", 8) < new Position("b", 1)).toBeTruthy();
				expect(new Position("a", 8) < new Position("a", 8)).toBeFalsy();
			});
		});

		describe("between same files", () => {
			it("should be compared by rank values", () => {
				expect(new Position("a", 1) < new Position("a", 2)).toBeTruthy();
				expect(new Position("a", 1) < new Position("a", 1)).toBeFalsy();
			});
		});
	});

	describe(".all", () => {
		it("returns all positions", () => {
			expect(Position.all()).toEqual(
				new Set([
					new Position("a", 1),
					new Position("a", 2),
					new Position("a", 3),
					new Position("a", 4),
					new Position("a", 5),
					new Position("a", 6),
					new Position("a", 7),
					new Position("a", 8),
					new Position("b", 1),
					new Position("b", 2),
					new Position("b", 3),
					new Position("b", 4),
					new Position("b", 5),
					new Position("b", 6),
					new Position("b", 7),
					new Position("b", 8),
					new Position("c", 1),
					new Position("c", 2),
					new Position("c", 3),
					new Position("c", 4),
					new Position("c", 5),
					new Position("c", 6),
					new Position("c", 7),
					new Position("c", 8),
					new Position("d", 1),
					new Position("d", 2),
					new Position("d", 3),
					new Position("d", 4),
					new Position("d", 5),
					new Position("d", 6),
					new Position("d", 7),
					new Position("d", 8),
					new Position("e", 1),
					new Position("e", 2),
					new Position("e", 3),
					new Position("e", 4),
					new Position("e", 5),
					new Position("e", 6),
					new Position("e", 7),
					new Position("e", 8),
					new Position("f", 1),
					new Position("f", 2),
					new Position("f", 3),
					new Position("f", 4),
					new Position("f", 5),
					new Position("f", 6),
					new Position("f", 7),
					new Position("f", 8),
					new Position("g", 1),
					new Position("g", 2),
					new Position("g", 3),
					new Position("g", 4),
					new Position("g", 5),
					new Position("g", 6),
					new Position("g", 7),
					new Position("g", 8),
					new Position("h", 1),
					new Position("h", 2),
					new Position("h", 3),
					new Position("h", 4),
					new Position("h", 5),
					new Position("h", 6),
					new Position("h", 7),
					new Position("h", 8),
				]),
			);
		});
	});

	describe(".allOfRank", () => {
		it("returns a set of positions", () => {
			expect(Position.allOfRank(1)).toEqual(
				new Set([
					new Position("a", 1),
					new Position("b", 1),
					new Position("c", 1),
					new Position("d", 1),
					new Position("e", 1),
					new Position("f", 1),
					new Position("g", 1),
					new Position("h", 1),
				]),
			);

			expect(Position.allOfRank(8)).toEqual(
				new Set([
					new Position("a", 8),
					new Position("b", 8),
					new Position("c", 8),
					new Position("d", 8),
					new Position("e", 8),
					new Position("f", 8),
					new Position("g", 8),
					new Position("h", 8),
				]),
			);
		});
	});

	describe(".allDiagonalsFrom", () => {
		it("returns a set of positions", () => {
			expect(Position.allDiagonalsFrom(new Position("a", 1))).toEqual(
				new Set([
					new Position("b", 2),
					new Position("c", 3),
					new Position("d", 4),
					new Position("e", 5),
					new Position("f", 6),
					new Position("g", 7),
					new Position("h", 8),
				]),
			);

			expect(Position.allDiagonalsFrom(new Position("e", 4))).toEqual(
				new Set([
					new Position("a", 8),
					new Position("b", 1),
					new Position("b", 7),
					new Position("c", 2),
					new Position("c", 6),
					new Position("d", 3),
					new Position("d", 5),
					new Position("f", 3),
					new Position("f", 5),
					new Position("g", 2),
					new Position("g", 6),
					new Position("h", 1),
					new Position("h", 7),
				]),
			);
		});
	});

	describe(".allUpsFrom", () => {
		describe("from the lowest rank", () => {
			const offset = new Position("a", 1);
			it("returns a set of positions", () => {
				expect(Position.allUpsFrom(offset)).toEqual(
					new Set([
						new Position("a", 2),
						new Position("a", 3),
						new Position("a", 4),
						new Position("a", 5),
						new Position("a", 6),
						new Position("a", 7),
						new Position("a", 8),
					]),
				);
			});
		});

		describe("from in the middle rank", () => {
			const offset = new Position("a", 4);
			it("returns a set of positions", () => {
				expect(Position.allUpsFrom(offset)).toEqual(
					new Set([
						new Position("a", 5),
						new Position("a", 6),
						new Position("a", 7),
						new Position("a", 8),
					]),
				);
			});
		});

		describe("from the highest rank", () => {
			const offset = new Position("a", 8);
			it("returns an empty set", () => {
				expect(Position.allUpsFrom(offset)).toEqual(new Set([]));
			});
		});
	});

	describe(".allUpRightsFrom", () => {
		describe("from the a1", () => {
			const offset = new Position("a", 1);
			it("returns a set of positions", () => {
				expect(Position.allUpRightsFrom(offset)).toEqual(
					new Set([
						new Position("b", 2),
						new Position("c", 3),
						new Position("d", 4),
						new Position("e", 5),
						new Position("f", 6),
						new Position("g", 7),
						new Position("h", 8),
					]),
				);
			});
		});

		describe("from in the middle position", () => {
			const offset = new Position("e", 5);
			it("returns a set of positions", () => {
				expect(Position.allUpRightsFrom(offset)).toEqual(
					new Set([
						new Position("f", 6),
						new Position("g", 7),
						new Position("h", 8),
					]),
				);
			});
		});

		describe("from the h8", () => {
			const offset = new Position("h", 8);
			it("returns a set of positions", () => {
				expect(Position.allUpRightsFrom(offset)).toEqual(new Set([]));
			});
		});
	});

	describe(".allRightsFrom", () => {
		describe("from the smallest file", () => {
			const offset = new Position("a", 1);
			it("returns a set of positions", () => {
				expect(Position.allRightsFrom(offset)).toEqual(
					new Set([
						new Position("b", 1),
						new Position("c", 1),
						new Position("d", 1),
						new Position("e", 1),
						new Position("f", 1),
						new Position("g", 1),
						new Position("h", 1),
					]),
				);
			});
		});

		describe("from in the middle rank", () => {
			const offset = new Position("e", 1);
			it("returns a set of positions", () => {
				expect(Position.allRightsFrom(offset)).toEqual(
					new Set([
						new Position("f", 1),
						new Position("g", 1),
						new Position("h", 1),
					]),
				);
			});
		});

		describe("from the biggest file", () => {
			const offset = new Position("h", 1);
			it("returns an empty set", () => {
				expect(Position.allRightsFrom(offset)).toEqual(new Set([]));
			});
		});
	});

	describe(".allDownRightsFrom", () => {
		describe("from the a8", () => {
			const offset = new Position("a", 8);
			it("returns a set of positions", () => {
				expect(Position.allDownRightsFrom(offset)).toEqual(
					new Set([
						new Position("b", 7),
						new Position("c", 6),
						new Position("d", 5),
						new Position("e", 4),
						new Position("f", 3),
						new Position("g", 2),
						new Position("h", 1),
					]),
				);
			});
		});

		describe("from in the middle position", () => {
			const offset = new Position("e", 5);
			it("returns a set of positions", () => {
				expect(Position.allDownRightsFrom(offset)).toEqual(
					new Set([
						new Position("f", 4),
						new Position("g", 3),
						new Position("h", 2),
					]),
				);
			});
		});

		describe("from the h1", () => {
			const offset = new Position("h", 1);
			it("returns an empty set", () => {
				expect(Position.allDownRightsFrom(offset)).toEqual(new Set([]));
			});
		});
	});

	describe(".allDownsFrom", () => {
		describe("from the lowest rank", () => {
			const offset = new Position("a", 1);
			it("returns an empty set", () => {
				expect(Position.allDownsFrom(offset)).toEqual(new Set([]));
			});
		});

		describe("from in the middle rank", () => {
			const offset = new Position("a", 4);
			it("returns a set of positions", () => {
				expect(Position.allDownsFrom(offset)).toEqual(
					new Set([
						new Position("a", 1),
						new Position("a", 2),
						new Position("a", 3),
					]),
				);
			});
		});

		describe("from the highest rank", () => {
			const offset = new Position("a", 8);
			it("returns a set of positions", () => {
				expect(Position.allDownsFrom(offset)).toEqual(
					new Set([
						new Position("a", 1),
						new Position("a", 2),
						new Position("a", 3),
						new Position("a", 4),
						new Position("a", 5),
						new Position("a", 6),
						new Position("a", 7),
					]),
				);
			});
		});
	});

	describe(".allDownLeftsFrom", () => {
		describe("from the h8", () => {
			const offset = new Position("h", 8);
			it("returns a set of positions", () => {
				expect(Position.allDownLeftsFrom(offset)).toEqual(
					new Set([
						new Position("a", 1),
						new Position("b", 2),
						new Position("c", 3),
						new Position("d", 4),
						new Position("e", 5),
						new Position("f", 6),
						new Position("g", 7),
					]),
				);
			});
		});

		describe("from in the middle position", () => {
			const offset = new Position("e", 5);
			it("returns a set of positions", () => {
				expect(Position.allDownLeftsFrom(offset)).toEqual(
					new Set([
						new Position("a", 1),
						new Position("b", 2),
						new Position("c", 3),
						new Position("d", 4),
					]),
				);
			});
		});

		describe("from the a1", () => {
			const offset = new Position("a", 1);
			it("returns an empty set", () => {
				expect(Position.allDownLeftsFrom(offset)).toEqual(new Set([]));
			});
		});
	});

	describe(".allLeftsFrom", () => {
		describe("from the smallest file", () => {
			const offset = new Position("a", 1);
			it("returns an empty set", () => {
				expect(Position.allLeftsFrom(offset)).toEqual(new Set([]));
			});
		});

		describe("from in the middle rank", () => {
			const offset = new Position("e", 1);
			it("returns a set of positions", () => {
				expect(Position.allLeftsFrom(offset)).toEqual(
					new Set([
						new Position("a", 1),
						new Position("b", 1),
						new Position("c", 1),
						new Position("d", 1),
					]),
				);
			});
		});

		describe("from the biggest file", () => {
			const offset = new Position("h", 1);
			it("returns a set of positions", () => {
				expect(Position.allLeftsFrom(offset)).toEqual(
					new Set([
						new Position("a", 1),
						new Position("b", 1),
						new Position("c", 1),
						new Position("d", 1),
						new Position("e", 1),
						new Position("f", 1),
						new Position("g", 1),
					]),
				);
			});
		});
	});

	describe(".allUpLeftsFrom", () => {
		describe("from the h1", () => {
			const offset = new Position("h", 1);
			it("returns a set of positions", () => {
				expect(Position.allUpLeftsFrom(offset)).toEqual(
					new Set([
						new Position("a", 8),
						new Position("b", 7),
						new Position("c", 6),
						new Position("d", 5),
						new Position("e", 4),
						new Position("f", 3),
						new Position("g", 2),
					]),
				);
			});
		});

		describe("from in the middle position", () => {
			const offset = new Position("e", 5);
			it("returns a set of positions", () => {
				expect(Position.allUpLeftsFrom(offset)).toEqual(
					new Set([
						new Position("b", 8),
						new Position("c", 7),
						new Position("d", 6),
					]),
				);
			});
		});

		describe("from the a1", () => {
			const offset = new Position("a", 1);
			it("returns an empty set", () => {
				expect(Position.allUpLeftsFrom(offset)).toEqual(new Set([]));
			});
		});
	});

	describe("distanceFrom method", () => {
		it("returns distance of between positions", () => {
			const a1 = new Position("a", 1);
			expect(a1.distanceFrom(a1)).toEqual({
				rank: 0,
				file: 0,
			});
			expect(a1.distanceFrom(new Position("a", 8))).toEqual({
				rank: 7,
				file: 0,
			});
			expect(a1.distanceFrom(new Position("h", 8))).toEqual({
				rank: 7,
				file: 7,
			});

			const e4 = new Position("e", 4);
			expect(e4.distanceFrom(e4)).toEqual({
				rank: 0,
				file: 0,
			});
			expect(e4.distanceFrom(new Position("a", 1))).toEqual({
				rank: 3,
				file: 4,
			});
			expect(e4.distanceFrom(new Position("h", 8))).toEqual({
				rank: 4,
				file: 3,
			});
		});
	});
});
