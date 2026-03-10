import { darkStone } from "../imports/assets.js";
import { CheckersPiece } from "../interfaces/CheckersPiece.js";

export class CheckersLogic {
    constructor() {
        this.pieces = new Map();
        this.score = 0;
    }

    render(ctx) {
        this.pieces.forEach((piece) => piece.render(ctx));
    }

    addPieces(...checkersPieces) {
        checkersPieces.forEach((piece) => this.pieces.set(piece.id, piece));
    }

    removePieces(...keys) {
        keys.forEach((key) => this.pieces.delete(key));
    }

    createPieces(color, stone, king) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 8; j++) {
                const piece = new CheckersPiece(
                    `${i}-${j}`,
                    this.step,
                    color,
                    stone
                );
                if (j % 2 === 0 && i % 2 === 0) continue;
                if (j % 2 !== 0 && i % 2 !== 0) continue;
                piece.x = j * this.step;
                piece.y = this.step * i;
                this.addPieces(piece);
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 8; j++) {
                const rows = i + 5
                const piece = new CheckersPiece(
                    `${rows}-${j}`,
                    this.step,
                    color,
                    darkStone
                );
                if (j % 2 === 0 && rows % 2 === 0) continue;
                if (j % 2 !== 0 && rows % 2 !== 0) continue;
                piece.x = this.step * j;
                piece.y = this.step * rows;
                this.addPieces(piece);
            }
        }
    }
}
