import { lightPawn, lightPieces } from "../imports/assets.js";
import { ChessPiece } from "../interfaces/ChessPiece.js";

export class PlayerLogic {
  constructor(step) {
    this.pieces = new Map();
    this.score = 0;
    this.step = step;
  }

  render(ctx) {
    this.pieces.forEach((piece) => piece.render(ctx));
  }

  addPieces(...chessPieces) {
    chessPieces.forEach((chessPiece) =>
      this.pieces.set(chessPiece.id, chessPiece)
    );
  }

  removePieces(...keys) {
    keys.forEach((key) => this.pieces.delete(key));
  }

  createPieces(color, pieces, pawn) {
    for (const piece in pieces) {
      const chessPiece = new ChessPiece(piece, this.step, color, pieces[piece]);
      chessPiece.x = this.step * piece;
      this.addPieces(chessPiece);
    }

    for (let i = 0; i < 8; i++) {
      const chessPiece = new ChessPiece(i + 9, this.step, color, pawn);
      chessPiece.x = this.step * i;
      chessPiece.y = this.step;
      this.addPieces(chessPiece);
    }

    for (const piece in lightPieces) {
      const chessPiece = new ChessPiece(
        `${piece}w`,
        this.step,
        color,
        lightPieces[piece]
      );
      chessPiece.x = this.step * piece;
      chessPiece.y = this.step * 7;
      this.addPieces(chessPiece);
    }

    for (let i = 0; i < 8; i++) {
      const chessPiece = new ChessPiece(
        `${i+9}w`,
        this.step,
        color,
        lightPawn
      );
      chessPiece.x = this.step * i;
      chessPiece.y = this.step * 6;
      this.addPieces(chessPiece);
    }
  }
}
