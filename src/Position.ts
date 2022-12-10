import { ALL_FILES, ALL_RANKS, File, Rank } from "./types";

export class Position {
	readonly file: File;
	readonly rank: Rank;

	constructor(file: File, rank: Rank) {
		this.file = file;
		this.rank = rank;
	}

	static all(): Set<Position> {
		return new Set(
			ALL_FILES.flatMap((file) =>
				ALL_RANKS.map((rank) => new this(file, rank)),
			),
		);
	}

	static allOfRank(rank: Rank): Set<Position> {
		return new Set(ALL_FILES.map((file) => new this(file, rank)));
	}

	static allDiagonalsFrom(offset: Position): Set<Position> {
		return new Set(
			Array.from(this.all()).filter((other) => {
				const distance = offset.distanceFrom(other);
				return distance.rank > 0 && distance.rank === distance.file;
			}),
		);
	}

	static allUpsFrom(offset: Position): Set<Position> {
		return new Set(
			ALL_RANKS.filter((rank) => rank > offset.rank).map(
				(rank) => new Position(offset.file, rank),
			),
		);
	}

	static allUpRightsFrom(offset: Position): Set<Position> {
		return new Set(
			Array.from(Position.allDiagonalsFrom(offset)).filter(
				(position) =>
					position.file > offset.file && position.rank > offset.rank,
			),
		);
	}

	static allRightsFrom(offset: Position): Set<Position> {
		return new Set(
			ALL_FILES.filter((file) => file > offset.file).map(
				(file) => new Position(file, offset.rank),
			),
		);
	}

	static allDownRightsFrom(offset: Position): Set<Position> {
		return new Set(
			Array.from(Position.allDiagonalsFrom(offset)).filter(
				(position) =>
					position.file > offset.file && position.rank < offset.rank,
			),
		);
	}

	static allDownsFrom(offset: Position): Set<Position> {
		return new Set(
			ALL_RANKS.filter((rank) => rank < offset.rank).map(
				(rank) => new Position(offset.file, rank),
			),
		);
	}

	static allDownLeftsFrom(offset: Position): Set<Position> {
		return new Set(
			Array.from(Position.allDiagonalsFrom(offset)).filter(
				(position) =>
					position.file < offset.file && position.rank < offset.rank,
			),
		);
	}

	static allLeftsFrom(offset: Position): Set<Position> {
		return new Set(
			ALL_FILES.filter((file) => file < offset.file).map(
				(file) => new Position(file, offset.rank),
			),
		);
	}

	static allUpLeftsFrom(offset: Position): Set<Position> {
		return new Set(
			Array.from(Position.allDiagonalsFrom(offset)).filter(
				(position) =>
					position.file < offset.file && position.rank > offset.rank,
			),
		);
	}

	distanceFrom(other: Position) {
		return {
			rank: Math.abs(other.rank - this.rank),
			file: Math.abs(other.file.charCodeAt(0) - this.file.charCodeAt(0)),
		};
	}

	toString() {
		return `${this.file}${this.rank}`;
	}
}
