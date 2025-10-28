import { ChessPiece } from "../interfaces/ChessPiece.js";

export class OponentLogic {
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

    createPieces(step, piecesUrl, pawnUrl) {
        for (const pieceIndex in piecesUrl) {
            const chessPiece = new ChessPiece(
                `0${pieceIndex}b`,
                piecesUrl[pieceIndex]
            );
            chessPiece.x = step * pieceIndex;
            chessPiece.y = step * 7;
            this.addPieces(chessPiece);
        }

        for (let i = 0; i < 8; i++) {
            const chessPiece = new ChessPiece(`1${i}b`, pawnUrl);
            chessPiece.x = step * i;
            chessPiece.y = step * 6;
            this.addPieces(chessPiece);
        }
    }
}
