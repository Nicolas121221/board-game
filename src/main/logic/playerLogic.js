import { ChessPiece } from "../interfaces/ChessPiece.js";
import { Pawn } from "./pieces/pawn.js";

export class ChessLogic {
    constructor() {
        this.pieces = new Map();
        this.score = 0;
    }

    render(ctx, step) {
        this.pieces.forEach((piece) => piece.render(ctx, step));
    }

    addPieces(...chessPieces) {
        chessPieces.forEach((chessPiece) =>
            this.pieces.set(chessPiece.id, chessPiece)
        );
    }

    removePieces(...keys) {
        keys.forEach((key) => this.pieces.delete(key));
    }

    createPieces(step, imports) {
        for (const pieceIndex in imports.urls) {
            const chessPiece = new ChessPiece(`${pieceIndex}${7}`, imports.urls[pieceIndex], imports.classes[pieceIndex]);
            chessPiece.x = step * pieceIndex;
            chessPiece.y = step * 7
            this.addPieces(chessPiece);
        }

        for (let i = 0; i < 8; i++) {
            const chessPiece = new ChessPiece(`${i}${6}`, imports.pawn);
            chessPiece.x = step * i;
            chessPiece.y = step * 6;
            chessPiece.logic = new Pawn()
            this.addPieces(chessPiece);
        }
    }
}
