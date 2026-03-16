import { ChessPiece } from "../interfaces/ChessPiece.js";
import { Pawn } from "./pieces/pawn.js";

export class OpponentLogic {
    constructor() {
        this.pieces = new Map();
        this.score = 0;
    }

    render(ctx, step) {
        this.pieces.forEach((piece) => piece.render(ctx, step));
    }

    addPieces(...chessPieces) {
        chessPieces.forEach((chessPiece) =>
            this.pieces.set(chessPiece.id, chessPiece),
        );
    }

    removePieces(...keys) {
        keys.forEach((key) => this.pieces.delete(key));
    }

    createPieces(step, imports) {
        for (const pieceIndex in imports.urls) {
            const chessPiece = new ChessPiece(
                `0${pieceIndex}b`,
                imports.urls[pieceIndex],imports.classes[pieceIndex]
            );
            chessPiece.x = step * pieceIndex;
            this.addPieces(chessPiece);
        }

        for (let i = 0; i < 8; i++) {
            const chessPiece = new ChessPiece(`1${i}b`, imports.pawn, Pawn);
            chessPiece.x = step * i;
            chessPiece.y = step;
            this.addPieces(chessPiece);
        }
    }
}
